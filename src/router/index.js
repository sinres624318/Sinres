import Vue from 'vue'
import Router from 'vue-router'
import Cart from './../pages/cart'
import Order from './../pages/order'
import Shop from './../pages/shop'
import ShopIndex from './../pages/shop/shopIndex'
import AllProduct from './../pages/shop/allProduct'
import Promotion from './../pages/shop/promotion'
import Classify from './../pages/shop/classify'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
      children: [
        {
          path: 'shopIndex',
          name: 'ShopIndex',
          component: ShopIndex
        },
        {
          path:'allProduct',
          name:'AllProduct',
          component: AllProduct
        },
        {
          path:'promotion',
          name:'Promotion',
          component: Promotion
        },
        {
          path:'classify',
          name:'Classify',
          component: Classify
        },
      ]
    }
  ]
})
