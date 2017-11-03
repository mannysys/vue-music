/*
* 定义一些修改store数据的操作
* */
import * as types from './mutations-types'

const mutations = {
  // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  }
}

export default mutations
