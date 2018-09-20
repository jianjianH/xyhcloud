// miniprogram/pages/news/webview/webview.js
Page({
    data: {
        url: 'https://mp.weixin.qq.com/s?__biz=MzA5MDU3MzkzMw==&mid=2652519247&idx=1&sn=064086521193916bc92d3120d3cfd176&chksm=8be7064dbc908f5b9a5ae7934ce0e63ed8f9dcfd17a984e04a0c2a64c9d4d1d32d35b4d4cefc#rd',
        // url: 'https://www.baidu.com'
    },

    /**
     * 转发时候先执行（获取h5传递过来的参数）
     */
    getH5Massage: function (e) { 
        console.log(e)
        let info = JSON.parse(e.detail.data[0])
        console.log(info)
    },

    onShareAppMessage: function (res) {
        let that = this;
        
        let shareUrl = encodeURIComponent(res.webViewUrl);
        console.log('shareUrl:' + shareUrl);
        return {
            title: title,
            path: '/pages/news/webview/webview?shareUrl=' + shareUrl,
        }
    },

    onLoad: function (options) {
        let that = this;
        if (options.shareUrl) {
            // 分享
            let url = decodeURIComponent(options.shareUrl)
        } else {
            // 打开网页
        }
    },
})