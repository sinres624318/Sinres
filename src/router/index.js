
import Vue from 'vue'
import Router from 'vue-router'


import DetailsItem from '../pages/detailsItem'
import  Details from '../pages/details'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
		{
			path:'/details',
			name:'Details',
			component:Details
		},
		{
      path: '/detailsItem',
      name: 'DetailsItem',
      component: DetailsItem
    },
    
   
    
  
     
  ]
	
	
	
	
	
})

