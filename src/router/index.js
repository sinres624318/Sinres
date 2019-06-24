import Vue from 'vue'
import Router from 'vue-router'
import Cart from './../pages/cart'
import Order from './../pages/order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: 'cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: 'order',
      name: 'Order',
      component: Order
    }
  ]
})
