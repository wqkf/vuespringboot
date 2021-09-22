import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/views/home'
import OrderView from '@/views/order'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/order',
      component: OrderView
    }
  ]
})
