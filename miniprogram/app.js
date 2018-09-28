//app.js
const mta = require('mta-wechat-analysis');
const CONST = require("/utils/constant.js");

App({
    onLaunch: function() {
        mta.App.init({
            "appID": "500643734",
            "eventID": "500643747",
            "statPullDownFresh": true,
            "statShareApp": true,
            "statReachBottom": true
        });

        if (!wx.cloud) {
            console.error('请使用 2.2.3 或以上的基础库以使用云能力')
        } else {
            let env = 'release-env-15d2a8';
            if (CONST.DEBUG) {
                env = 'test-env-15d2a8';
            }
            wx.cloud.init({
                env: env,
                traceUser: true
            })
        }
    },

    /**
     * 消息请求
     */
    sendRequest: function(url, data, loadingFlag) {
        // loadingFlag 用于标识是否显示转菊花
        if (loadingFlag) {
            wx.showLoading({
                title: 'loading...'
            })
        }
        let that = this;
        return new Promise((resolve, reject) => {
            wx.request({
                url: CONST.BASE_URL.concat(url),
                data: data,
                header: {
                    'content-type': 'application/x-www-form-urlencoded',
                    'CV': CONST.VERSION
                },
                method: 'GET',
                dataType: 'json',
                success: function(res) {
                    console.log(res)
                    if (loadingFlag) {
                        wx.hideLoading()
                    }
                    if (res.data.result === 1) {
                        resolve(res.data)
                    } else {
                        reject(res)

                        let error_msg = res.data.error_msg || "网络异常，稍后重试"
                        wx.showToast({
                            title: error_msg,
                            icon: 'none',
                            duration: 2000
                        })
                    }
                },
                fail: function(res) {
                    reject(res)

                    wx.showToast({
                        title: '网络请求失败，请更换网络重试',
                        icon: 'none',
                        duration: 2000
                    })
                    if (loadingFlag) {
                        setTimeout(() => {
                            wx.hideLoading()
                        }, 2000)
                    }
                }
            })
        })
    },
})