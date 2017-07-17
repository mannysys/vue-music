import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
// import router from './router'
import fastclick from 'fastclick'
import 'common/stylus/index.styl'

Vue.config.productionTip = false
/* 将fastclick写到dom节点body中，以后这里面点击就没有300毫秒延迟了 */
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
