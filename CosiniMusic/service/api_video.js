import mxRequest from './index';

export function getTopMv(offset, limit = 10) {
  return mxRequest.get("/top/mv", { 
    offset, 
    limit 
  })
}