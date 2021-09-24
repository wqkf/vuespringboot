import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/views/home'
import OrderView from '@/views/order'
<<<<<<< HEAD
import AdminView from '@/views/admin'
import RegistView from '@/views/regist'
import LoginView from '@/views/login'
Vue.use(Router)


let routes=[
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/order',
    component: OrderView
  },
  {
    path: '/admin',
    component: AdminView
  },
  {
    path: '/regist',
    component: RegistView
  },
  {
    path: '/login',
    component: LoginView
  }
]
const router = new Router({
  mode :'history',
  routes
});
// router.beforeEach(
//   (to,from,next) => {
//     if(to.path === '/login' || to.path === 'admin'){
//       next();
//     }else{
//       let token =localStorage.getItem('token');
//       if(token === 'null' || token === ''){
//         next('/login');
//       }else{
//         next();
//       }
//     };
//   })
export default router
=======
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
  ]
})
>>>>>>> cf5de5041ec1d9ff34f3975754fd0698df7730aa
