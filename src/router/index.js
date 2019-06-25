import Vue from 'vue'
import Router from 'vue-router'
import Register from '../pages/Register'
import Login from '../pages/login'
import Classify from '../pages/classify'
import Cart from './../pages/cart'
import Appliance from './../pages/appliance'
import Shop from './../pages/shop'
import ShopIndex from './../pages/shop/shopIndex'
import Index from '../pages/index'
import Mine from './../pages/mine'
import ShopAllProduct from './../pages/shop/shopAllProduct'
import ShopPromotion from './../pages/shop/shopPromotion'
import ShopClassify from './../pages/shop/shopClassify'
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
      path: '/appliance',
      name: 'Appliance',
      component: Appliance
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
      children: [
        {
          path: '/',
          redirect:'ShopIndex'
        },
        {
          path: 'shopIndex',
          name: 'ShopIndex',
          component: ShopIndex
        },
        {
          path:'shopAllProduct',
          name:'ShopAllProduct',
          component: ShopAllProduct
        },
        {
          path:'shopPromotion',
          name:'ShopPromotion',
          component: ShopPromotion
        },
        {
          path:'shopClassify',
          name:'ShopClassify',
          component: ShopClassify
        },
      ]
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
