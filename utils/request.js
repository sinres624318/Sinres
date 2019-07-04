import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'


axios.interceptors.request.use((config) => {
  return config;
}, (error) => {
  return Promise.reject(error);
});
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

export default axios
