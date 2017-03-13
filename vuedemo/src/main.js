// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引用vue,路由
import Vue from 'vue'
import VueRouter from 'vue-router'
//使用
Vue.use(VueRouter)
//入口文件为 src/App.vue 文件，所以要引用
import App from './App.vue'
// 引用路由配置文件
import routes from './config/routes'

//Vue.config.productionTip = false
/*使用配置文件规则*/
const router = new VueRouter({
	routes
})
/* eslint-disable no-new */
// 执行
new Vue({
  router,
  el: '#app',
  render:(h)=>h(App)
  //template: '<App/>',
 // components: { App }
})
