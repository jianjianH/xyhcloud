// miniprogram/pages/donate/donate.js
const mta = require('mta-wechat-analysis');
let app = getApp();
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
        sum: 0,
        num: 0,
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

        app.sendRequest('/v1/donate/getDonateList', {}, true)
            .then(res => {
                let donetes = res.data;
                let sum = 0.0;
                for (let i = 0; i < donetes.length; i++) {
                    sum += parseFloat(donetes[i].money)
                }

                that.setData({
                    donates: donetes,
                    sum: sum,
                    num: donetes.length
                })
                setTimeout(function(){
                    that.autoScroll(20, 40, 50);
                }, 1000)
            })
            .catch(error => {
                that.setData({
                    show_error: true
                })
            })
    },

    onReady: function() {
        const updateManager = wx.getUpdateManager()

        updateManager.onCheckForUpdate(function(res) {
            // 请求完新版本信息的回调
        })

        updateManager.onUpdateReady(function() {
            wx.showModal({
                title: '更新提示',
                content: '新版本已经准备好，是否重启应用？',
                success: function(res) {
                    if (res.confirm) {
                        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                        updateManager.applyUpdate()
                    }
                }
            })
        })
    },

    onShareAppMessage: function(res) {
        mta.Event.stat('donate', {
            'share': 'true'
        })
        return {
            title: '江财北京校友会捐款名单',
            path: '/pages/donate/donate', 
            imageUrl: 'https://cdn.jcbjxyh.cn/mp/donation/donate_share.png'
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
                setTimeout(function() {
                    preTop = 0;
                    that.setData({
                        scroll_top: 0
                    })
                    setTimeout(start, delay);
                }, 3000)
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
        setTimeout(function(){
            arriveBottom = true;
        }, 2000)
    },

    /**
     * 关闭滑动
     */
    stopScroll: function(e) {
        clearInterval(interval);
        preTop = 0;
    }
})