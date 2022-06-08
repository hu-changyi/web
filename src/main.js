// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as echarts from 'echarts'
import 'echarts-gl'
import jquery from 'jquery'
import "echarts/map/js/china.js";
import china from 'echarts/map/json/china.json'
import 'echarts/theme/shine.js'
echarts.registerMap('blue', china)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.prototype.$echarts = echarts
Vue.prototype.$ = jquery;
