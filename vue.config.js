// vue.config.js
module.exports = {
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
        data: `@import "@/assets/scss/mixin.scss";`
      }
    }
  },
  lintOnSave: process.env.NODE_ENV !== 'production'
  // lintOnSave: 'error'
}
