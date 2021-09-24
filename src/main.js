// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
<<<<<<< HEAD
// 添加axios组件
var axios = require('axios');
axios.defaults.baseURL = 'http://localhost:8088/api'

Vue.prototype.$axios = axios
=======
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


// 添加axios组件
var axios = require('axios');
axios.defaults.baseURL = 'http://localhost:8088' 

Vue.prototype.$axios = axios 
Vue.use(Vant);
Vue.use(ElementUI);
>>>>>>> cf5de5041ec1d9ff34f3975754fd0698df7730aa
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
