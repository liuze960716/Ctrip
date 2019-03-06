// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/common.css'
import './assets/js/jquery-1.8.3'
// import './assets/js/zepto.min'
import  './assets/js/travel'
import './assets/js/hot'
import '../node_modules/swiper/dist/js/swiper'


Vue.config.productionTip = true;


new Vue({
  el: '#app',
  router,
  // mode: 'history',
  render(h){
    return h(App)
  }
});


