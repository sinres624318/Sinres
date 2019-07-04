import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'


axios.interceptors.request.use((config) => {
  return config;
}, (error) => {
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
    //成功请求到数据
    app.$vux.loading.hide();
    //这里根据后端提供的数据进行对应的处理
    if (response.data.result === 'TRUE') {
      return response.data;
    } else {
      app.$vux.toast.show({  //常规错误处理
        type: 'warn',
        text: response.data.data.msg
      });
    }
  },
  (error) => {  //响应错误处理
    console.log('error');
    console.log(error);
    console.log(JSON.stringify(error));

    let text = JSON.parse(JSON.stringify(error)).response.status === 404
      ? '404'
      : '网络异常，请重试';
    app.$vux.toast.show({
      type: 'warn',
      text: text
    });

    return Promise.reject(error)

  });

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

export default axios
