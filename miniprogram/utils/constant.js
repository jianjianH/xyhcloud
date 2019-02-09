// !important 用于区别正式环境和测试环境，上线前需要将这个地方改为false
let DEBUG = false;
let VERSION = 0.22;

let BASE_URL = "https://www.jcbjxyh.cn";
if (DEBUG) {
  BASE_URL = "https://test.jcbjxyh.cn";
}

module.exports = {
  DEBUG: DEBUG,
  VERSION: VERSION,
  BASE_URL: BASE_URL,
}
