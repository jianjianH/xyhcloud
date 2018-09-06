//app.js
const CONST = require("/utils/constant.js");

App({
    onLaunch: function() {

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