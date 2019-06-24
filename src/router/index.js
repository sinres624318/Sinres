import Vue from 'vue'
import Router from 'vue-router'
import Appliance from './../pages/appliance'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'appliance',
      name:'Appliance',
      component:Appliance
    }
  ]
})
