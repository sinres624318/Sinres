import Vue from 'vue'
import Router from 'vue-router'
import Cart from './../pages/cart'
import Appliance from './../pages/appliance'
import Shop from './../pages/shop'
import ShopIndex from './../pages/shop/shopIndex'
import Index from '../pages/index'
import Mine from './../pages/mine'

Vue.use(Router)

export default new Router({
  routes: [
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
    }, {
      path: '/shop',
      name: 'Shop',
      component: Shop,
      children: [
        {
          path: 'shopIndex',
          name: 'ShopIndex',
          component: ShopIndex
        }
      ]
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
