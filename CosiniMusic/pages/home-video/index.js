// pages/home-video/index.js
import { getTopMv } from '../../service/api_video';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topMvs: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getTopMv(0).then((res) => {
      this.setData({ topMvs: res.data.data })
    })
  }
})