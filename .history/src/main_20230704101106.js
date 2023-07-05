import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
axios.defaults.baseURL = 'http://your-api-base-url.com';
Vue.use(ElementUI);
Vue.config.productionTip = false
// Set Axios as a global property in Vue
Vue.prototype.$axios = axios;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
