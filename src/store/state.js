import {playMode} from 'common/js/config'

const state = {
  singer: {},               // 歌手数据
  playing: false,           // 播放音乐
  fullScreen: false,        // 暂停
  playlist: [],             // 播放列表
  sequenceList: [],         // 顺序播放列表
  mode: playMode.sequence,  // 播放模式
  currentIndex: -1          // 当前播放的歌曲
}

export default state
