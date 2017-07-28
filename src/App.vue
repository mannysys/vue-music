<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <!-- 路由渲染页面，keep-alive可以将DOM缓存到内存中，不用再重新渲染DOM发送请求 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'
  import Tab from 'components/tab/tab'

  export default {
    components: {
      MHeader,
      Tab
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
