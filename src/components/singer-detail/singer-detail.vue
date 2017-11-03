<template>
  <transition name="slide">
    <div class="singer-detail"></div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  // mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性

  export default {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    computed: {
      //  从store中取数据，对应store里的getters.js
      ...mapGetters([
        'singer'
      ])
    },
    created() {
      console.log(this.singer)
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .singer-detail
    position: fixed
    z-index: 100
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: $color-background

  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)

</style>
