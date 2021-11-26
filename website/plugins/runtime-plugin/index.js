// 修改runtiem波浪线
module.exports = function (context, options) {
  return {
    name: 'runtime-plugin',
    configureWebpack(config, isServer, utils) {
      // 本地开发环境无需设置publicPath
      return {
        optimization: {
          runtimeChunk: false,
        },
      }
    },
  }
}
