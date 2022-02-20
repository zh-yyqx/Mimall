import Vue from 'vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

// import是预编译加载，在编译的时候import文件就会被加载进来，即发请求就会永远被拦截了
// require不会，它是在从上到下执行的时候加载的，mock为false时不会被加载
//mock开关
const mock = true; //取值为true才会被拦截
if(mock){
  require('./mock/api')
}

// 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

//接口错误拦截
axios.interceptors.response.use(function(response){
    let res = response.data;
    if(res.status==0){
      return res.data
    }else if(res.status==10){//未登录的错误
      //因为在main.js用路由跳转是没用的，路由是挂载到vue实例上的， 不能使用this.$router.push，this并不指向vue
      //且vue路由是哈希路由#,所以用window.location.href
      window.location.href='/#/login';
    }else{
      alert(res.msg)
    }
})

Vue.use(VueAxios,axios)
// 生产环境的提示
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
