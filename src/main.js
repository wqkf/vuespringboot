// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Dialog } from 'vant';

// 添加axios组件
var axios = require('axios');
axios.defaults.baseURL = 'http://localhost:8088' 

Vue.prototype.$axios = axios 
Vue.use(Vant);
Vue.use(ElementUI);
Vue.use(Dialog);
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
