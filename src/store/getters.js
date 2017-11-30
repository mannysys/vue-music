/*
* 封装，取数据到组件中（在组件中获取数据，起到代理作用代理组件到数据容器中获取数据）
* 还可以作为计算属性作用
* */
export const singer = state => state.singer

export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const playlist = state => state.playlist

export const sequenceList = state => state.sequenceList

export const mode = state => state.mode

export const currentIndex = state => state.currentIndex

// 获取到当前播放歌曲
export const currentSong = (state) => {
  return state.playlist[state.currentIndex] || {}
}
