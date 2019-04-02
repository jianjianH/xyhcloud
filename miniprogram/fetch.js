/**
 * 获取首页信息
 */
export const fetchHomeInfo = () => {
  wx.request({
    url: 'https://www.jcbjxyh.cn/v1/mp/home_info',
    success(res) {
      console.log(res.data);
    },
  });
};

/**
 * 获取足球队队员列表
 */
export const fetchFootballPlayers= () => {
  wx.request({
    url: 'https://www.jcbjxyh.cn/v1/football/getPlayerList',
    success(res) {
      console.log(res.data);
    },
  });
};
