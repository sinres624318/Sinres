import Vue from 'vue'
import Router from 'vue-router'
import Cart from './../pages/cart'
import Shop from './../pages/shop'
import Index from '../pages/index'
import Classify from '../pages/classify'
import Mine from './../pages/mine'
import Login from '../pages/login'
import Register from '../pages/Register'
import Appliance from './../pages/appliance'
import Footprint from './../pages/footprint'
import ShopIndex from './../pages/shop/shopIndex'
import ShopAllProduct from './../pages/shop/shopAllProduct'
import ShopPromotion from './../pages/shop/shopPromotion'
import ShopClassify from './../pages/shop/shopClassify'
import Vouchers from './../pages/vouchers'
import AllOrder from './../pages/allOrder'
import Auction from './../pages/auction'
import Search from './../pages/search/search'
import MyVouchers from './../pages/myVouchers'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
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
      component: Classify
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
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
      path: '/appliance',
      name: 'Appliance',
      component: Appliance
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/',
          redirect: 'ShopIndex'
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
      path: '/',
      name: 'Index',
      component: Index
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
      path:'/vouchers',
      name:'Vouchers',
      component:Vouchers
    },
    {
      path:'/myVouchers',
      name:'MyVouchers',
      component:MyVouchers
    }
  ]
})
