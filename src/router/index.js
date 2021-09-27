




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
import FoundView from '@/views/found'
import FriendView from '@/views/friend'
import FriendsView from '@/views/friends'
import CircleView from '@/views/circle'
import CirclesView from '@/views/circles'
import PublicView from '@/views/public'
import WelfareView from '@/views/welfare'
import FreeView from '@/views/free'
import ContextView from '@/views/context'
import BookrackView from '@/views/bookrack0'
import BookView from '@/views/book'
import MybookView from '@/views/mybook'
import StorebookView from '@/views/storebook'
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
      component: FreeView},
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
    ,{
      path: '/context',
      name: 'context',
      component: ContextView
    }
    ,
    {
      path: '/bookrack',
      component: BookrackView,
      children: [
       
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

  const router=new Router({
      mode:'history'//默认为hash模式 作用为地址和端口间#消失
      ,routes
  })

    router.beforeEach((to,from,next)=>{
      if(to.path === '/login'||to.path==='/'||to.path==='/admin'||to.path==='/regist'){
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

