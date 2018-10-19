// miniprogram/pages/news/webview/webview.js
const mta = require('mta-wechat-analysis');

Page({
    data: {
        url: undefined
    },

    onLoad: function(options) {
        mta.Page.init();
        let that = this;
        console.log(options)
        if (options.shareUrl) {
            // 分享
            let shareUrl = decodeURIComponent(options.shareUrl)
            that.setData({
                url: shareUrl
            })
            mta.Event.stat('news', {
                'from': 'share'
            })
        } else if (options.webUrl) {
            // 列表
            let webUrl = decodeURIComponent(options.webUrl)
            that.setData({
                url: webUrl
            })
            mta.Event.stat('news', {
                'from': 'click'
            })
        } else {
            // 打开网页

        }
    },

    onShareAppMessage: function(res) {
        let that = this;
        mta.Event.stat('news', {
            'sharearticle': 'true'
        })
        let shareUrl = encodeURIComponent(res[0].webViewUrl);
        return {
            title: '公众号文章精选',
            path: '/pages/news/webview/webview?shareUrl=' + shareUrl
        }
    },
})