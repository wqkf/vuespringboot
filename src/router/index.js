import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/views/home'
import OrderView from '@/views/order'
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
