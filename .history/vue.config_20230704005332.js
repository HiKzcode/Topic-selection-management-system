const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
devServer:{
  proxy:{
      '/ap':{
        // 跨域的服务器地址
          target: 'http://43.142.234.223:8080' 
          // 是否允许跨域
          changeOrigin: true,
          // 替换掉请求路径的/sougou为“”
          pathRewrite:{'^/api': ""}
      }
      }
  }