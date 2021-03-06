/**
 * 抓取QQ音乐歌手接口数据
 */
import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

// 歌曲列表数据
export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    g_tk: 393964059
  })

  return jsonp(url, data, options)
}

// 抓取歌手详情页
export function getSingerDetail(singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'

  const data = Object.assign({}, commonParams, {
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    order: 'listen',
    begin: 0,
    num: 100,
    songstatus: 1,
    g_tk: 393964059,
    singermid: singerId
  })

  return jsonp(url, data, options)
}
