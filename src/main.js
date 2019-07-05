// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import {Lazyload} from 'vant';
import { PasswordInput, NumberKeyboard } from 'vant';
import axios from './../utils/request'
import store from "./store";
import {getCookie} from './assets/js/common.js'
import Observer from "./Observer";

Vue.prototype.Observer = Observer;
import './../static/font/iconfont.css'

axios.defaults.withCredentials = true;
Vue.prototype.axios = axios;
Vue.use(Lazyload);
Vue.use(PasswordInput).use(NumberKeyboard);


Vue.config.productionTip = false;




router.beforeEach((to, from, next) => {
  if ((to.name == "Mine" || to.name == "Cart")) {
    if (!getCookie('token')) {
      console.log(getCookie('token'));
      next('/login');
    } else {
      next();
    }
  }else {
    next();
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
})
