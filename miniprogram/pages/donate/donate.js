// miniprogram/pages/donate/donate.js
const mta = require('mta-wechat-analysis');
let arriveBottom = false;
let interval;
let preTop = 0;

Page({
    /**
     * 页面的初始数据
     */
    data: {
        donates: undefined,
        scroll_top: 0,
        show_error: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        mta.Page.init();
        let that = this;

        wx.showShareMenu({
            withShareTicket: true
        });

        wx.showLoading({
            title: 'loading...',
        })
        wx.request({
            url: "https://www.jcbjxyh.cn/v1/donate/getDonateList",
            header: {
                'content-type': 'application/x-www-form-urlencoded',
            },
            dataType: 'json',
            success: function(res) {
                wx.hideLoading();
                if (res.data.result === 1) {
                    that.setData({
                        donates: res.data.data
                    })
                    that.autoScroll(20, 40, 50);
                } else {
                    that.setData({
                        show_error: true
                    })
                }
            },
            fail: function(res) {
                that.setData({
                    show_error: true
                })
            }
        })
    },

    onShareAppMessage: function(res) {
        mta.Event.stat('donate', {
            'share': 'true'
        })
        return {
            title: '江财北京校友会捐款名单',
            path: '/pages/donate/donate',
            imageUrl: 'http://pb0geuvxr.bkt.clouddn.com/mp/xyhweb/donation/donate_share.png'
        }
    },

    /**
     * 开启滑动
     */
    autoScroll: function(height, speed, delay) {
        let that = this;

        function start() {
            interval = setInterval(scrolling, speed);
        }

        function scrolling() {
            if (arriveBottom) {
                clearInterval(interval);
                arriveBottom = false;
                preTop = 0;
                that.setData({
                    scroll_top: 0
                })
                setTimeout(start, delay);
            } else {
                preTop = that.data.scroll_top;
                that.setData({
                    scroll_top: preTop + 1
                })
            }
        }
        setTimeout(start, delay);
    },

    /**
     * 滑倒底部
     */
    bottom: function(e) {
        arriveBottom = true;
    },

    /**
     * 关闭滑动
     */
    stopScroll: function(e) {
        mta.Event.stat('donate', {
            'stopscroll': 'true'
        })
        clearInterval(interval);
        preTop = 0;
    }
})