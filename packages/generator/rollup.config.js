import pkg from './package.json'
import { getOutput, getExternal, getPlugins } from '../../rollup.base.config'
import * as path from 'path'
import tailwindcss from 'tailwindcss'
import copy from 'rollup-plugin-copy'

const plugin = getPlugins(
  pkg,
  process.argv,
  {
    entries: {
      '@generator/components': path.join(__dirname, 'src', 'components'),
      '@generator/hooks': path.join(__dirname, 'src', 'hooks'),
      '@generator/store': path.join(__dirname, 'src', 'store'),
      '@generator/utils': path.join(__dirname, 'src', 'utils'),
      '@generator/fields': path.join(__dirname, 'src', 'fields'),
    },
  },
  {
    modules: false,
    extract: path.resolve(pkg.distExports['dist'], `index.css`),
    autoModules: true,
    plugins: [
      require('postcss-import'),
      tailwindcss(path.join(__dirname, 'tailwind.config.js')),
      require('postcss-nested'),
      require('autoprefixer'),
    ],
  }
)

export default {
  input: 'src/index.ts',
  output: getOutput(pkg),
  external: getExternal(pkg),
  onwarn(warning, warn) {
    if (warning.code === 'THIS_IS_UNDEFINED') return
    warn(warning) // this requires Rollup 0.46
  },
  plugins: [
    ...plugin,
    copy({
      targets: [{ src: 'src/styles/fonts', dest: 'dist' }],
    }),
  ],
}
