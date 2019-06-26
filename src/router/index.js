import Vue from 'vue'
import Router from 'vue-router'
import Cart from './../pages/cart'
import Order from './../pages/order'
import Appliance from './../pages/appliance'
import Shop from './../pages/shop'
import ShopIndex from './../pages/shop/shopIndex'
import Mine from './../pages/mine'
import Auction from './../pages/auction'

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
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path:'/auction',
      name:'Auction',
      component:Auction
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

    }
  ]
})
