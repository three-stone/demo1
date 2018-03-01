// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import './rem/rem'
import axios from 'axios'
import qs from 'qs'	
import FastClick from 'fastclick'
require('es6-promise').polyfill();
Vue.config.productionTip = false

Vue.prototype.axios=axios
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
Vue.use(VueRouter)


const router = new VueRouter({
	routes,
	//mode:'history'
})
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (sessionStorage.getItem('key')) {  // 通过vuex state获取当前的token是否存在
            next();
        }
        else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
})

/* eslint-disable no-new */
new Vue({
	router,
}).$mount('#app')