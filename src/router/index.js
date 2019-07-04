
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
import MyAssets from './../pages/myAssets/myAssets'
import AccountManagement from './../pages/accountManagement/accountManagement'
import MyVouchers from './../pages/myVouchers'
import ShippingAddress from './../pages/shippingAddress/shippingAddress'
import NewAddress from './../pages/newAddress/newAddress'
import DefineOrder from './../pages/defineOrder'
import Pay from './../pages/pay'
import DetailsItem from '../pages/detailsItem'
import Details from '../pages/details'
import EditAddress from '../pages/editAddress/editAddress'


Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: "focus",
  routes: [
    /*详情*/
		{
			path:'/details',
			name:'Details',
			component:Details
		},
    /*商品评论*/
		{
      path: '/detailsItem',
      name: 'DetailsItem',
      component: DetailsItem
    },
    {
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
      path: '/pay',
      name: 'Pay',
      component: Pay
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
    /*购物车页*/
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta: {
        flag: false
      }
    },
    /*我的页面*/
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      meta: {
        flag: true
      }
    },
    /*家电*/
    {
      path: '/appliance',
      name: 'Appliance',
      component: Appliance
    },
    /*拍卖*/
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
    /*羊毛*/
    {
      path: '/wool',
      name: 'Wool',
      component: Wool
    },
    /*拍拍二手*/
    {
      path: '/patPat',
      name: 'PatPat',
      component: PatPat
    },
    /*订单*/
    {
      path: '/allOrder',
      name: 'AllOrder',
      component: AllOrder
    },
    /*足迹*/
    {
      path: '/footprint',
      name: 'Footprint',
      component: Footprint
    },
    /*搜索页*/
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    /*我的优惠券*/
    {
      path: '/myVouchers',
      name: 'MyVouchers',
      component: MyVouchers
    },
    /*团购*/
    {
      path: '/groupBuy',
      name: 'GroupBuy',
      component: GroupBuy,
      meta: {
        flag: false
      }
    },
    /*产品列表*/
    {
      path: '/productList',
      name: 'ProductList',
      component: ProductList
    },
    /*优惠券*/
    {
      path: '/vouchers',
      name: 'Vouchers',
      component: Vouchers
    },
    {
      path: '/defineOrder',
      name: 'DefineOrder',
      component: DefineOrder
    },
    /*我的资产页*/
    {
      path: '/myAssets',
      name: 'MyAssets',
      component: MyAssets
    },
    /*账号管理*/
    {
      path: '/accountManagement',
      name: 'AccountManagement',
      component: AccountManagement
    },
    /*收货地址*/
    {
      path: '/shippingAddress',
      name: 'ShippingAddress',
      component: ShippingAddress
    },
    /*新增收货地址*/
    {
      path: '/newAddress',
      name: 'NewAddress',
      component: NewAddress
    },
    /*编辑收货地址*/
    {
      path: '/editAddress',
      name: 'EditAddress',
      component: EditAddress
    },
  ]
})

