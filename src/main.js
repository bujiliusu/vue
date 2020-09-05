// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './vuex/index'
Vue.use(ElementUI)

axios.defaults.baseURL = 'http://localhost:5000'

axios.interceptors.request.use(
  (config) => {
  if ( config.method === 'post'){
      
    config.data = qs.stringify(config.data)
  }
  config.headers.common['token']='abc'
  // 在发送请求之前做些什么
  return config
  }, (error) => {
   Message({
     showClose:Ture,
     message: error && error.data.error.message,
     type:'error' 
   })
  // 对请求错误做些什么
  return Promise.reject(error.data.error.message)
})
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
   if (error.response) {
       switch (error.response.status) {
           case 401:
              store.commit(types.LOGOUT);
              router.replace({
                path:'login',
                query:{redirect:router.currentRoute.fullPath}
              })
           case 400:
             error.message='错误请求'
             break
       }
   }
  // 对响应错误做点什么
  return Promise.reject(error,response);
});



Vue.config.productionTip = false
Vue.prototype.$axios=axios




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
