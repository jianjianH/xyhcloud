##用于江财北京校友会微信小程序##

[校友会微信小程序使用说明](https://www.jnehuang.cn/%E6%A0%A1%E5%8F%8B%E4%BC%9A/%E6%A0%A1%E5%8F%8B%E4%BC%9A%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E/)

目前微信小程序中用到了两个模块，mta（数据统计）、recycle-view（列表页渲染），需要使用npm安装。
>npm安装依赖
>mta：npm install mta-wechat-analysis --save
>recycle-view：npm install miniprogram-recycle-view --save（https://github.com/wechat-miniprogram/recycle-view）

具体流程为：
![首次用微信开发者工具引入代码会看到报错](https://upload-images.jianshu.io/upload_images/115957-202c82ac87593ac5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![选中“miniprogram”目录右键，选择“在终端打开”](https://upload-images.jianshu.io/upload_images/115957-a165e1e405810f42.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![输入“npm install”安装依赖的模块](https://upload-images.jianshu.io/upload_images/115957-f892c8679325d56f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![选择“工具”中的“构建npm”](https://upload-images.jianshu.io/upload_images/115957-7b65e4cf6121b3f7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![构建完毕后即可正常使用小程序](https://upload-images.jianshu.io/upload_images/115957-d98056b7aaac0681.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

目前的项目结构为：

```
|-- cloudfunctions    云函数，目前项目中未用到，[云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)
|   |-- login
|       |-- index.js
|-- miniprogram    小程序真正的工程代码
    |-- app.js    
    |-- app.json
    |-- app.wxss
    |-- package-lock.json
    |-- package.json    npm依赖模块
    |-- images    放小图片，超过50K的放在腾讯云存储中。所有图片需要经[Tinypng](https://tinypng.com/)压缩后才能使用
    |   |-- ic_tab_donate.png
    |   |-- ...
    |-- miniprogram_npm    下载好后的依赖模块
    |   |-- miniprogram-recycle-view
    |   |-- mta-wechat-analysis
    |-- pages
    |   |-- donate    捐款页面
    |   |   |-- donate.js
    |   |   |-- donate.json
    |   |   |-- donate.wxml
    |   |   |-- donate.wxss
    |   |-- news    新闻功能
    |       |-- news_list    新闻列表页
    |       |   |-- ...
    |       |-- webview    新闻展示页
    |           |-- ...
    |-- utils    工具类
        |-- constant.js    注意此处的发版前检查此处的**DEBUG**和**VERSION**值
        |-- transformRpx.js    将rpx转化为px
        |-- urlProcess.js    url处理

```
