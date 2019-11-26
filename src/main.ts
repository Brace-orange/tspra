import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css' // 引入样式
// import 'vant/lib/button/style/less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
