import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/views/home'
import OrderView from '@/views/order'
import BookrackView from '@/views/bookrack'
import Bookrack0View from '@/views/bookrack0'
import BookView from '@/views/book'
import MybookView from '@/views/mybook'
import StorebookView from '@/views/storebook'
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
    ,
    {
      path: '/bookrack',
      component: BookrackView,
      children: [
        {
          path: '/bookrack0',
          component: Bookrack0View
        },
        {
          path: '/book',
          component: BookView,
          children:[
            {
              path: '/mybook',
              component: MybookView,
            },
            {
              path: '/storebook',
              component: StorebookView,
            }
          ]
         
        }, 
      ]
    },
  
  ]
})
