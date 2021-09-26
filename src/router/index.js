import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/views/home'
import OrderView from '@/views/order'
import FoundView from '@/views/found'
import FriendView from '@/views/friend'
import FriendsView from '@/views/friends'
import CircleView from '@/views/circle'
import CirclesView from '@/views/circles'
import PublicView from '@/views/public'
import WelfareView from '@/views/welfare'
import FreeView from '@/views/free'
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
      path: '/found',
      component: FoundView
    },
    {
      path: '/friend',
      component: FriendView
    },
    {
      path: '/friends',
      component: FriendsView
    },
    {
      path: '/circle',
      component: CircleView
    },
    {
      path: '/circles',
      component: CirclesView
    },
    {
      path: '/public',
      component: PublicView
    },
    {
      path: '/welfare',
      component: WelfareView
    },
    {
      path: '/free',
      component: FreeView
    }
  ]
})
