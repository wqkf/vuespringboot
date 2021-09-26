// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8081'  //此处是https协议如果不是改成http
// 将API方法绑定到全局
Vue.prototype.$http = axios



Vue.config.productionTip = false
// axios.create({
//   baseURL:"http://localhost:8081"
// })  

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
