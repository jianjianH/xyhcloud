/**
 * 获取url的参数
 */
const getArgsFromURL = (url, sArgName) => {
    let args = url.split("?");
    let retval = "";
    if (args[0] == url) {
        // 参数为空 无需做任何处理
        return retval;
    }
    let str = args[1];
    args = str.split("&");
    for (let i = 0; i < args.length; i++) {
        str = args[i];
        let arg = str.split("=");
        if (arg.length <= 1) continue;
        if (arg[0] == sArgName) retval = arg[1];
    }
    return retval;
}

module.exports = {
    getArgsFromURL
}