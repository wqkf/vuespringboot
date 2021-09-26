




import Vue from 'vue'
import Router from 'vue-router'
import FenleiView from '@/views/fenlei'
import MianfeiView from '@/views/mianfei'
import WomanView from '@/views/woman'
import ManView from '@/views/man'
import XinshuView from '@/views/xinshu'
import XingqingView from '@/views/xiangqing'
import CartView from '@/views/cart'
import AdminView from '@/views/admin'
import RegistView from '@/views/regist'
import LoginView from '@/views/login'
import HomeView from '@/views/home'
import OrderView from '@/views/order'
Vue.use(Router)

const routes=[
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
    },
    {
      path: '/cart',
      component: CartView
    }
      ,
   { path: '/admin',
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

  const router=new Router({
      mode:'history'//默认为hash模式 作用为地址和端口间#消失
      ,routes
  })

    router.beforeEach((to,from,next)=>{
      if(to.path === '/login'||to.path==='/'||to.path==='/admin'){
         next();
      }else{
        let token  = localStorage.getItem('token');
        
        if(token === null || token ===''){
          next('/login');
        }else{
          next();
        }
      }
    });
  export default router;

