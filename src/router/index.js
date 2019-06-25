import Vue from 'vue'
import Router from 'vue-router'
import Register from '../pages/Register'
import Login from '../pages/login'
import Classify from '../pages/classify'
Vue.use(Router)

export default new Router({
  mode:'hash',
  routes: [
    {
      path:'/register',
      name:'Register',
      component:Register
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/classify',
      name:'Classify',
      component:Classify
    }
  ]
})
