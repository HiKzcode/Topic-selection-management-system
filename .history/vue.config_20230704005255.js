const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
devServer:{
  proxy:{
      '/ap':{
        // 跨域的服务器地址
          target: 'http://117.50.163.249:8082',
          // 是否允许跨域
          changeOrigin: true,
          // 替换掉请求路径的/sougou为“”
          pathRewrite:{'^/ap': ""}
      },
      }
  }