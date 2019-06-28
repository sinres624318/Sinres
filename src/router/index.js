import Vue from 'vue'
import Router from 'vue-router'
import Cart from './../pages/cart'
import Shop from './../pages/shop'
import Index from '../pages/index'
import Wool from '../pages/wool'
import PatPat from '../pages/patPat'
import Classify from '../pages/classify'
import Mine from './../pages/mine'
import MyAttention from './../pages/myAttention'
import Recharge from './../pages/recharge'
import Login from '../pages/login'
import Register from '../pages/Register'
import Appliance from './../pages/appliance'
import Footprint from './../pages/footprint'
import ShopIndex from './../pages/shop/shopIndex'
import ShopAllProduct from './../pages/shop/shopAllProduct'
import ShopPromotion from './../pages/shop/shopPromotion'
import ShopClassify from './../pages/shop/shopClassify'
import GroupBuy from './../pages/groupBuy/groupBuy'
import Vouchers from './../pages/vouchers'
import AllOrder from '../pages/allOrder'
import Auction from './../pages/auction'
import ProductList from './../pages/productList'
import Search from './../pages/search/search'
import MyVouchers from './../pages/myVouchers'


Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'focus',
  routes: [{
      path: '/',
      redirect: {
        name: 'Index'
      }
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      meta: {
        flag: true
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify,
      meta: {
        flag: true
      }
    },
    {
      path: '/myAttention',
      name: 'MyAttention',
      component: MyAttention
    },
    {
      path: '/recharge',
      name: 'Recharge',
      component: Recharge
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta: {
        flag: false
      }
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      meta: {
        flag: true
      }
    },
    {
      path: 'appliance',
      name: 'Appliance',
      component: Appliance
    },
    {
      path: '/auction',
      name: 'Auction',
      component: Auction
    },
    {
      path: '/shop',
      component: Shop,
      children: [{
          path: '/',
          redirect: 'shopIndex'
        },
        {
          path: 'shopIndex',
          name: 'ShopIndex',
          component: ShopIndex
        },
        {
          path: 'shopAllProduct',
          name: 'ShopAllProduct',
          component: ShopAllProduct
        },
        {
          path: 'shopPromotion',
          name: 'ShopPromotion',
          component: ShopPromotion
        },
        {
          path: 'shopClassify',
          name: 'ShopClassify',
          component: ShopClassify
        },
      ]
    },

    {
      path: '/wool',
      name: 'Wool',
      component: Wool
    },
    {
      path: '/patPat',
      name: 'PatPat',
      component: PatPat
    },
    {
      path: '/allOrder',
      name: 'AllOrder',
      component: AllOrder
    },
    {
      path: '/footprint',
      name: 'Footprint',
      component: Footprint
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },

    {
      path: '/myVouchers',
      name: 'MyVouchers',
      component: MyVouchers
    }, {
      path: '/groupBuy',
      name: 'GroupBuy',
      component: GroupBuy,
      meta: {
        flag: false
      }
    },
    {
      path: '/productList',
      name: 'ProductList',
      component: ProductList
    }, {
      path: '/vouchers',
      name: 'Vouchers',
      component: Vouchers
    }
  ]
})
