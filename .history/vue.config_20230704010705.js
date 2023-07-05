const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  configureWebpack:{
      resolve:{
        // 给路径起别名
          alias:{
              'assets': '@/assets',
              'common': '@/common',
              'components': '@/components',
              'network': '@/network',
              'views': '@/views'
          }
      }
  },
  devServer:{
      proxy:{
          '/ap':{
            // 跨域的服务器地址
              target: 'http://43.142.234.223:8080,
              // 是否允许跨域
              changeOrigin: true,
              // 替换掉请求路径的/sougou为“”
              pathRewrite:{'^/ap': ""}
          },
          }
      }
  }
  