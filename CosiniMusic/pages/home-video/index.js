// pages/home-video/index.js
import { getTopMv } from '../../service/api_video';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topMvs: [],
    hasMore: true
  },

  /**
   * 生命周期函数--监听页面加载
   * Promise
   */
  // onLoad: function (options) {
  //   getTopMv(0).then((res) => {
  //     this.setData({ topMvs: res.data })
  //   })
  // }

  /**
   * 生命周期函数--监听页面加载
   * async await
   */
  // 初始化
  onLoad: function (options) {
    this.getTopMvData(0);
  },

  // 封装网络请求方法
  async getTopMvData(offset) {
    if(!this.data.hasMore && offset !== 0) return;

    // 加载动画
    wx.showNavigationBarLoading();
    // 请求的真正内容
    const res = await getTopMv(offset);
    let newData = this.data.topMvs;
    if(offset === 0) {
      newData = res.data;
    } else {
      newData = newData.concat(res.data);
    }
    this.setData({ topMvs: newData });
    this.setData({ hasMore: res.hasMore });

    // 加载结束，关闭动画
    wx.hideNavigationBarLoading();
  },

  // 封装事件处理方法
  handleVideoItemClick: function(event) {
    // 获取id
    const id = event.currentTarget.dataset.item.id;
    // 页面跳转
    wx.navigateTo({
      url: `/pages/detail-video/index?id=${id}`,
    })
  },

  // 下拉刷新
  onPullDownRefresh: function() {
    this.getTopMvData(0);
    wx.stopPullDownRefresh();
  },

  // 下滑到底部加载
  onReachBottom: function() {
    this.getTopMvData(this.data.topMvs.length);
  }
})