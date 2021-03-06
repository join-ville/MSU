import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './vuex/'
import './style/public.scss'
import './config/rem'
import FastClick from 'fastclick'
import App from './App.vue';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(ElementUI)
if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}


//var axios = require('axios')
//axios.default.baseURI = 'http://localhost:8443/api'
//Vue.prototype.$axios = axios
//Vue.config.productionTip = falses


Vue.use(VueRouter)
Vue.use(VueAxios, axios)
const router = new VueRouter({
	routes,
	mode: 'history', //路由模式
	strict: process.env.NODE_ENV !== 'production',
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return {
				x: 0,
				y: to.meta.savedPosition || 0
			}
		}
	}
})
router.beforeEach((to, from, next) => {
	if (from.meta.keepAlive) {
		from.meta.savedPosition = document.body.scrollTop;
	}
	next()
})


new Vue({
    el: '#weixin',
    router,
    render: h => h(App),
	store,
})
