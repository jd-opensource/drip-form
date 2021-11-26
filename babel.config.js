module.exports = (api) => {
  const isTest = api.env('test')

  return {
    env: {
      test: {
        plugins: ['@babel/plugin-transform-modules-commonjs'],
      },
    },
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
    ],
    sourceMaps: true,
    overrides: [
      {
        test: ['./packages/drip-form-theme-antd'],
        plugins: [
          [
            'import',
            {
              libraryName: 'antd',
              libraryDirectory: 'es',
              style: true,
            },
            'antd',
          ],
        ],
      },
      {
        test: ['./packages/hooks'],
        plugins: [
          [
            'import',
            {
              libraryName: 'ahooks',
              libraryDirectory: 'es',
              camel2DashComponentName: false,
            },
            'ahooks',
          ],
        ],
      },
    ],
  }
}
