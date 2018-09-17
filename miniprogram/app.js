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
            if (CONST.DEBUG){
                env = 'test-env-15d2a8';
            }
            wx.cloud.init({
                env: env,
                traceUser: true
            })
        }

        this.globalData = {}
    }
})