import Vue from 'vue'

import VueRouter from 'vue-router'

import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import Feed from './components/Feed';
import Create from './components/product/Create';
import Edit from './components/product/Edit';

Vue.use(VueRouter);

const router = new VueRouter({
	routes:[
		{
			path: '/login',
			component: Login,
      meta:{
			  forVisitors:true
      }
		},
		{
			path: '/register',
			component: Register,
      meta:{
        forVisitors:true
      }
		},
    {
      path: '/feed',
      component: Feed,
      meta:{
        forAuth:true
      }
    },
    {
      path: '/products/create',
      component: Create,
      meta:{
        forAuth:true
      }
    },
    {
      path: '/products/:product/edit',
      component: Edit,
      meta:{
        forAuth:true
      }
    }
	],

  mode:'history',
  linkActiveClass: 'active',

});

export default router
