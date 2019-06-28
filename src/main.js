// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import {Lazyload} from 'vant';
import axios from './../utils/request'
import Observer from "./Observer";
import store from "./store";

Vue.prototype.Observer = Observer;
import './../static/font/iconfont.css'

axios.defaults.withCredentials = true
Vue.prototype.axios = axios
Vue.use(Lazyload);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
})
