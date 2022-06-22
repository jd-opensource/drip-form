import path from 'path'
import minimist from 'minimist'
// rollup插件
import progress from 'rollup-plugin-progress'
import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import alias from '@rollup/plugin-alias'
import json from '@rollup/plugin-json'
import { sizeSnapshot } from 'rollup-plugin-size-snapshot'
import strip from '@rollup/plugin-strip'
import { terser } from 'rollup-plugin-terser'
import ts from 'rollup-plugin-ts'
import visualizer from 'rollup-plugin-visualizer'
import clear from 'rollup-plugin-clear'
import replace from '@rollup/plugin-replace'

/**
 * 生成打包输出目录
 * @param pkg
 * @param argv
 * @returns {{file: string, globals: {'react-dom': string, react: string}, format: string, name: string}}
 */
export function getOutput(pkg, argv) {
  // 获取包名
  let name = pkg.name
  name = name.indexOf('/') > -1 ? name.split('/')[1] : name
  // 命令行参数
  const args = argv ? minimist(argv.slice(2)) : {}
  // 判断是否需要打包到lib文件夹下
  const buildToLib = args.banner && args.banner === '//lib'

  if (pkg.distExports.format && Array.isArray(pkg.distExports.format)) {
    return pkg.distExports.format.map((item) => ({
      file: path.resolve(
        buildToLib ? pkg.distExports['dist-css'] : pkg.distExports['dist'],
        item,
        `index.js`
      ),
      exports: pkg.distExports.exports || 'default',
      format: item,
      name: `${name}`,
      globals: {
        react: 'React',
        'react-dom': 'ReactDom',
      },
    }))
  }

  return {
    // 因为包是scope的（@jdfed/*）,会在dist下新建一个@jmfe文件夹。用split避免新建@jmfe文件夹
    file: path.resolve(
      buildToLib ? pkg.distExports['dist-css'] : pkg.distExports['dist'],
      `index.js`
    ),
    format: 'es',
    name: `${name}`,
    globals: {
      react: 'React',
      'react-dom': 'ReactDom',
    },
  }
}

/**
 * 处理外部依赖
 * @param pkg
 * @param argv
 * @returns {function(*=): boolean}
 */
export function getExternal(pkg, argv) {
  const { dependencies = {}, peerDependencies = {} } = pkg
  // 外部依赖包
  const externalPackage = [
    ...Object.keys(dependencies),
    ...Object.keys(peerDependencies),
  ]

  return (id) => {
    return externalPackage.some((item) => {
      // 避免不是package的包也在范围内
      const reg = new RegExp(`^${item}`, 'gi')
      return reg.test(id)
    })
  }
}

/**
 * 获取
 * @param pkg 每个包的package.json配置
 * @param argv 命令行参数
 * @param aliasConfig alias配置
 * @param postConfig
 * @returns {*}
 */
export function getPlugins(pkg, argv, aliasConfig, postConfig) {
  let { distExports, name } = pkg
  // 命令行参数
  const args = argv ? minimist(argv.slice(2)) : {}

  name = name.indexOf('/') > -1 ? name.split('/')[1] : name

  // build环境
  const env = process.env.NODE_ENV.split(':')[0]
  // 编译途径：babel | ts
  const transpiler = process.env.NODE_ENV.split(':')[1]
  // 判断是否需要打包到lib文件夹下
  const buildToLib = args.banner && args.banner === '//lib'

  return [
    aliasConfig && alias(aliasConfig),
    // 打包进度
    progress(),
    // 清除dist文件(非watch状态下清除，watch由于并行编译，删除后会出现找不到包的情况)
    !args.watch &&
      clear({
        targets: buildToLib
          ? ['dist-css', 'build-css-info']
          : ['dist', 'build-info'],
        watch: true,
      }),
    // 加载node_module里面模块
    nodeResolve({
      extensions: [
        '.ts',
        '.tsx',
        '.js',
        '.jsx',
        '.mjs',
        '.json',
        '.node',
        '.styl',
      ],
    }),
    env === 'production' &&
      replace({
        exclude: 'node_modules/**',
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
    // 处理非es模块
    commonjs(),
    // 处理stylus
    // stylus(),
    // 压缩生成css文件
    // css({
    //   raw: false,
    //   minified: buildToLib
    //     ? path.resolve(distExports['dist-css'], `index.css`)
    //     : path.resolve(distExports['dist'], `index.css`),
    // }),
    // 使用postcss编译
    postcss(
      postConfig
        ? postConfig
        : {
            extract: buildToLib
              ? path.resolve(distExports['dist-css'], `index.css`)
              : path.resolve(distExports['dist'], `index.css`),
          }
    ),
    // (watch时)使用babel编译，eslint校验ts
    args.watch &&
      transpiler === 'babel' &&
      babel({
        // 由于rollup执行在每个包里，所以需要请求外部的babel.config
        extends: buildToLib ? './babel.config.js' : '../../babel.config.js',
        exclude: '../../node_modules/**',
        babelHelpers: 'runtime',
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      }),
    // (build时)使用typescript生成声明 + babel编译
    (!args.watch || transpiler === 'ts') &&
      ts({
        transpiler: 'babel',
        // 获取整个工作区的根目录
        cwd: buildToLib
          ? path.join(__dirname, './')
          : path.join(__dirname, '../..'),
        // 获取当前项目目录下的tsconfig配置
        tsconfig: buildToLib
          ? path.join(__dirname, './tsconfig.dist.css.json')
          : path.join(__dirname, './tsconfig.dist.json'),
      }),
    // 加载json
    json(),
    // 打包之后的package大小
    args.size && sizeSnapshot({ printInfo: false }),
    // 清除console.debugger
    strip(),
    // 压缩
    env === 'production' && terser(),
    // 打包分析, 存储在各个包的build-info中
    visualizer({
      title: `${name}`,
      sourceMaps: true,
      filename: `./${
        buildToLib ? 'build-css-info' : 'build-info'
      }/index.stats.html`,
      open: false,
      template: 'sunburst',
    }),
  ]
}
