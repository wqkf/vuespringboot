// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';

import moment from 'moment'

// 添加axios组件

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Dialog } from 'vant';

//时间格式转化
Vue.prototype.$moment=moment

// 添加axios组件
var axios = require('axios');
axios.defaults.baseURL = 'http://localhost:8088' 

Vue.prototype.$axios = axios 

Vue.use(ElementUI);
Vue.use(Dialog);

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
