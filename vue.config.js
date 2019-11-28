// vue.config.js
const path = require('path')
function resolve (dir) {
  console.log(path.join(__dirname, dir))
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack (config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('assets', resolve('src/assets'))
      // .set('c)
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        prependData: `@import "@/assets/css/mixin.scss";` // 共享的全局
      }
    }
  },
  lintOnSave: process.env.NODE_ENV !== 'production'
  // lintOnSave: 'error'
}
