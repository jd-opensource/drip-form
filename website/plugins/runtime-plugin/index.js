// 修改runtiem波浪线
module.exports = function (context, options) {
  return {
    name: 'runtime-plugin',
    configureWebpack(config, isServer, utils) {
      const { getStyleLoaders } = utils
      // 本地开发环境无需设置publicPath
      return {
        optimization: {
          runtimeChunk: false,
        },
        module: {
          rules: [
            {
              test: /\.less$/i,
              use: [
                // compiles Less to CSS
                ...getStyleLoaders(isServer),
                {
                  loader: 'less-loader',
                  options: {
                    lessOptions: {
                      javascriptEnabled: true,
                      sourceMap: true,
                    },
                  },
                },
              ],
            },
          ],
        },
      }
    },
  }
}
