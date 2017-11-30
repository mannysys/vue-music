<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import {getSingerDetail} from 'api/singer'
  import {ERR_OK} from 'api/config'
  import {createSong} from 'common/js/song'
  import MusicList from 'components/music-list/music-list'
  // mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性

  export default {
    data() {
      return {
        songs: []
      }
    },
    // 使用对象展开运算符将 getter 混入 computed 对象中
    computed: {
      title() {
        return this.singer.name
      },
      bgImage() {
        return this.singer.avatar
      },
      //  从store中取数据，对应store里的getters.js
      ...mapGetters([
        'singer'
      ])
    },
    created() {
      this._getDetail()
      console.log(this.singer)
    },
    methods: {
      _getDetail() {
        // 获取不到数据，就返回歌手页
        if (!this.singer.id) {
          this.$router.push('/singer')
          return
        }
        // 获取歌手详情数据
        getSingerDetail(this.singer.id).then((res) => {
          if (res.code === ERR_OK) {
            this.songs = this._normalizeSongs(res.data.list)
            console.log(this.songs)
          }
        })
      },
      // 处理数据
      _normalizeSongs(list) {
        let ret = []
        list.forEach((item) => {
          let {musicData} = item
          if (musicData.songid && musicData.albummid) {
            ret.push(createSong(musicData))
          }
        })
        return ret
      }
    },
    components: {
      MusicList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)

</style>
