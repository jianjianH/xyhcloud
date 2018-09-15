// miniprogram/pages/donate/donate.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        donates: undefined,
        show_error: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let that = this;

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

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {
        return {
            title: '江财北京校友会捐款实时名单',
            path: '/pages/donate/donate',
            imageUrl: 'http://pb0geuvxr.bkt.clouddn.com/mp/xyhweb/donation/donate_share.png'
        }
    }
})