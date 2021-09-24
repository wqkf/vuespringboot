// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
// 添加axios组件
var axios = require('axios');
axios.defaults.baseURL = 'http://localhost:8088/api'

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(Vant);

axios.interceptors.request.use(config=>{
  if(localStorage.getItem("token")){
    config.headers.token = localStorage.getItem("token");
  }
  return config;
}, function(error){
  return Promise.reject(error);
}
);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
