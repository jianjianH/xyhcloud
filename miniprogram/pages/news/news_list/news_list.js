// miniprogram/pages/news/news_list/news_list.js
const createRecycleContext = require('miniprogram-recycle-view')
const mta = require('mta-wechat-analysis');
const transformRpx = require("../../../utils/transformRpx.js");
let app = getApp();
let recycleContext;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    recycleList: undefined
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    mta.Page.init();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let that = this;
    let itemWidth = transformRpx.transformRpx("725rpx");
    let itemHeight = transformRpx.transformRpx("200rpx");
    recycleContext = createRecycleContext({
      id: 'recycleId',
      dataKey: 'recycleList',
      page: this,
      itemSize: {
        width: itemWidth,
        height: itemHeight
      }
    })
    app.sendRequest('/v1/news/getNewsList', {}, true)
      .then(res => {
        that.setData({
          recycleList: res.data
        })
        console.log(res.data);
      })
      .catch(error => {
        console.log(error)
      })
  },

  /**
   * 阅读文章
   */
  articleclick: function (event) {
    let url = event.currentTarget.dataset.url;
    let order = event.currentTarget.dataset.order;
    mta.Event.stat('news', {
      'articleclick': order
    })
    let webUrl = encodeURIComponent(url)
    wx.navigateTo({
      url: '/pages/news/webview/webview' + '?webUrl=' + webUrl
    })
  },

  onHide: function () {
    if (recycleContext) {
      recycleContext.destroy()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    mta.Event.stat('news', {
      'sharelist': 'true'
    })
    return {
      title: '公众号文章精选',
      path: '/pages/news/news_list/news_list'
    }
  }
})
