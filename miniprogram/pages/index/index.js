import * as fetchs from '../../fetch';

// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperBanner: {
      isShowIndicatorDots: true,
      indicatorColor: 'rgba(255, 128, 0, 0.5)',
      indicatorActiveColor: '#ff8000',
      autoplay: true,
      interval: 5000,
      duration: 500,
      circular: true,
      banners: [{
        banner_id: 1,
        banner_type: 0,
        url: 'https://mp.weixin.qq.com/s?__biz=MzA5MDU3MzkzMw==&mid=2652520217&idx=1&sn=c2d89db540fef799e5d6d9150b2df3d9&chksm=8be7021bbc908b0d503232e5e316c87b52e6dac7e23d9359a866660dbaf6ed6af02522384a71#rd',
        image_url: 'http://mmbiz.qpic.cn/mmbiz_jpg/1JsvGG5c1QibbAFVKKN9Z9s1ibwUxQxxCUdcYzxc9Kf83KKxDCia0ekIficz5DyI4FypLWGyao4OE8wgibT4UKf1azw/0?wx_fmt=jpeg',
      }, {
        banner_id: 2,
        banner_type: 0,
        url: '"https://mp.weixin.qq.com/s?__biz=MzA5MDU3MzkzMw==&mid=2652520192&idx=1&sn=555498f2b733097b4088f7b0b142f989&chksm=8be70202bc908b143f602b901129cade0948d547fe067d1e5b2f93e8f32671e53b26af8887fc#rd"',
        image_url: 'http://mmbiz.qpic.cn/mmbiz_jpg/1JsvGG5c1Q8ib0jRpAWiafbPlvMPQBcdl3DMoLTS28icgOkicicyiaubH40qHVFRzzdaW5YQ8djg5LPUiaSw13I2lG6zQ/0?wx_fmt=jpeg',
      }],
    },
    // 兴趣组
    intersetGroups: [{
      id: '1',
      image: '//img10.360buyimg.com/devfe/jfs/t1/9815/38/15928/2014/5c7543a1E5fae856b/ffc124efed6bac31.png      ',
      name: '合唱团',
      url: '',
    }, {
      id: '2',
      image: '//img10.360buyimg.com/devfe/jfs/t1/18948/23/8438/1866/5c754352E64ba1c59/32ce55202a8281d2.png',
      name: '舞蹈队',
      url: '',
    }, {
      id: '3',
      image: '//img30.360buyimg.com/devfe/jfs/t1/27232/20/8224/2387/5c754309Eb4e8af26/d02f3a574bdfcaaa.png',
      name: '足球队',
      url: '',
    }, {
      id: '4',
      image: '//img10.360buyimg.com/devfe/jfs/t1/31634/10/3500/2044/5c754376Ed023010b/7cd5b0e97b41931e.png',
      name: '篮球队',
      url: '',
    }, {
      id: '5',
      image: '//img20.360buyimg.com/devfe/jfs/t1/19993/9/8450/1785/5c7543c1E1126ce59/43506b67a8b21a0c.png',
      name: '户外',
      url: '',
    }, {
      id: '6',
      image: '//img30.360buyimg.com/devfe/jfs/t1/27232/20/8224/2387/5c754309Eb4e8af26/d02f3a574bdfcaaa.png',
      name: '足球队',
      url: '',
    }, {
      id: '7',
      image: '//img10.360buyimg.com/devfe/jfs/t1/31634/10/3500/2044/5c754376Ed023010b/7cd5b0e97b41931e.png',
      name: '篮球队',
      url: '',
    }],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    fetchs.fetchHomeInfo();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * banner click
   */
  jumpToPage(event) {
    // linktype 为目标跳转类型，0: html链接; 1: 小程序路径
    const { link, linktype } = event.currentTarget.dataset;
    switch(linktype) {
      case 0:
        wx.navigateTo({
          url: `/pages/news/webview/webview?webUrl=${encodeURIComponent(link)}`,
        });
        break;
      case 1:
        wx.navigateTo({
          url: link,
        });
        break;
      default:
        wx.navigateTo({
          url: link,
        });
        break;
    }
  }
})
