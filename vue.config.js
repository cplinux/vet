module.exports = {
  chainWebpack: config => {
    config.when(
      process.env.NODE_ENV === 'production',
      // 生成环境 nginx
      config => {
        config.plugin('html').tap(args => {
          console.log(args)
          args[0].title = 'myProject'
          return args // return 返回给插件
        })
      },
      // 开发环境
      config => {
        config.devServer.proxy({
          '/api/v1': {
            target: 'http://127.0.0.1:8000',
            pathRewrite: {
              '^/api/v1': '' // rewrite path
            }
          }
        })
        config.plugin('html').tap(args => {
          console.log(args)
          args[0].title = 'myProject-dev'
          return args // return 返回给插件
        })
      }
    )
  }
}
