##用于江财北京校友会微信小程序##

[校友会微信小程序使用说明](https://www.jnehuang.cn/%E6%A0%A1%E5%8F%8B%E4%BC%9A/%E6%A0%A1%E5%8F%8B%E4%BC%9A%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E/)

***为了使开发者的代码格式统一，使用了 `EditorConfig` , 请在开发此项目的编辑器中安装 `EditorConfig` 插件：***
[EditorConfig官网](https://editorconfig.org/)

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

### 项目启动
为了使开发更方便，本项目使用了 CSS 预编译，使用的是 `PostCSS`, 遵循的语法为 SCSS 语法，使用了 `GULP` 来构建，
我们开发时建立一个 `.css` 扩展名的文件，通过 `GULP` 构建工具会处理生成对应的小程序使用的 `.wxss` 文件。

全局安装 GULP : https://gulpjs.com/

在终端中，进入此项目的根目录，安装 gulp 及其其他依赖：
>npm i 安装依赖
>`gulp`  or `npm start` 启动预编译程序 可以在 css 文件里像写 scss 一样编码开发

如果在你的 .css 文件里写像 scss 格式的语法时，因为编辑器是使用 css 文档格式打开的文件，而 css 语法并不支持比如像嵌套这样的写法，所以编辑器里会有语法错误提示，请下载支持 `PostCss` 的编辑器插件，或者禁用语法报错。

现在不是所有的 `SCSS` 支持的语法我们都引入了，现只引入了我们使用到的，其他如果你有需要，可以安装自己的 [PostCss](https://github.com/postcss/postcss/blob/master/README-cn.md) 插件依赖，现引入了以下这些语法支持：
- `postcss-import` import: https://github.com/postcss/postcss-import#postcss-import
- `postcss-mixins` mixins: https://github.com/postcss/postcss-mixins
- `postcss-extend` extend: https://github.com/travco/postcss-extend
- `postcss-simple-vars` 变量: https://github.com/postcss/postcss-simple-vars
- `postcss-nested` 嵌套: https://github.com/postcss/postcss-nested
- `postcss-color-function` 处理颜色: https://github.com/postcss/postcss-color-function


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
    |-- common    公共文件
    |   |-- css_mixins.js       样式中使用的公共 mixins 文件
    |   |-- css_variables.js    样式中使用的公共 variables 文件
    |-- pages
    |   |-- index    首页
    |   |   |-- ...
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
