import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
// 导入全剧样式
import './assets/css/global.css'

import axios from 'axios'

Vue.prototype.$http = axios

axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.config.productionTip = false
// Vue.use(ElementUi)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
