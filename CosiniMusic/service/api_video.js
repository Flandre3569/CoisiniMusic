import mxRequest from './index';

export function getTopMv(offset, limit = 10) {
  return mxRequest.get("/top/mv", { 
    offset, 
    limit 
  })
}

/**
 * 请求MV的播放地址
 * @param { number } id 
 */

export function getMVURL(id) {
  return mxRequest.get("/mv/url", {
    id
  })
}

/**
 * 请求MV的详情
 * @param { number } mvid 
 */
export function getMVDetail(mvid) {
  return mxRequest.get("/mv/detail", {
    mvid
  })
}

/**
 * 获取MV的相关视频
 * @param { number } id 
 */
export function getMVRelated(id) {
  return mxRequest.get("/related/allvideo", {
    id
  })
}