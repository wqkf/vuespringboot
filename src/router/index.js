import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/views/home'
import OrderView from '@/views/order'

import BookrackView from '@/views/bookrack'
import Bookrack0View from '@/views/bookrack0'
import BookView from '@/views/book'
import MybookView from '@/views/mybook'
import StorebookView from '@/views/storebook'

import FenleiView from '@/views/fenlei'
import MianfeiView from '@/views/mianfei'
import WomanView from '@/views/woman'
import ManView from '@/views/man'
import XinshuView from '@/views/xinshu'
import XingqingView from '@/views/xiangqing'

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
    },
    {
      path: '/fenlei',
      component: FenleiView
    }
    , {
      path: '/mianfei',
      component: MianfeiView
    }, {
      path: '/man',
      component: ManView
    }, {
      path: '/woman',
      component: WomanView
    }, {
      path: '/xinshu',
      component: XinshuView
    },
    {
      path: '/xiangqing/id',
      name: 'id',
      component: XingqingView
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
