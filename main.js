import App from './App'
import store from './store'

import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'

import * as Config from './common/config.js'
Vue.prototype.$config = Config;

import * as Common from './common/common.js'
import * as Socket from './common/socket.js'
Vue.prototype.$common = Common;
Vue.prototype.$socket = Socket;

// 引入全局TuniaoUI
import TuniaoUI from 'tuniao-ui'
Vue.use(TuniaoUI)

// 引入TuniaoUI提供的vuex简写方法
let vuexStore = require('@/store/$t.mixin.js')
Vue.mixin(vuexStore)

import mixin from '@/tools/mixin'
Vue.mixin(mixin); // 挂载混入


import {
	onceClick
} from './common/common.js'
Vue.prototype.$onceClick = onceClick; // 处理一瞬间点击好多次



// 引入TuniaoUI对小程序分享的mixin封装
let mpShare = require('tuniao-ui/libs/mixin/mpShare.js')
Vue.mixin(mpShare)

const app = new Vue({
	
  store,
  ...App,
  created() {
  	// 不考虑操作dom可以执行mixin里的methods
  	this.mainCreatedFn();
  },
})




// 登录框
import loginFn from '@/components/loginFn'
Vue.component('login-fn', loginFn)









app.$mount()