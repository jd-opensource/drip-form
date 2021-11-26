module.export = function (context, options) {
  return {
    name: 'my-docusaurus-plugin',
    configureWebpack(config, isServer, utils) {
      const { getStyleLoaders } = utils
      return {
        module: {
          rules: [
            {
              test: /\.css$/,
              use: ['style-loader', getStyleLoaders(isServer)],
            },
          ],
        },
      }
    },
  }
}
