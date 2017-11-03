/*
* 入口 初始化store
* */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
// 在控制台打印修改数据的log
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)  // 注册插件

const debug = process.env.NODE_ENV !== 'production'

// 生成vuex实例
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

