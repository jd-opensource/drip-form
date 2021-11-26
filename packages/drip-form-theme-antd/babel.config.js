/**
 * 针对antd css打包的配置，默认main为less打包，根据根目录的babel配置
 */
module.exports = (api) => {
  const isTest = api.env('test')

  return {
    presets: [
      isTest
        ? '@babel/preset-env'
        : [
            '@babel/preset-env',
            {
              modules: false,
            },
          ],
      '@babel/preset-typescript',
      '@babel/preset-react',
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true,
        },
      ],
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-class-properties',
      'babel-plugin-typescript-to-proptypes',
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: 'css',
        },
        'antd',
      ],
    ],
    sourceMaps: true,
  }
}
