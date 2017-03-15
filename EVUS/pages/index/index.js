//index.js
Page({
  data: {
    src:"../images/title.png",
    scrollTop: 100,
    lists: [
      {
        index: 1,
        name: "徐莫庭",
        desc: "信息填写完成，等待付款"
      },
      {
        index: 2,
        name: "lianning",
        desc: "请填写申请信息"
      },
      {
        index: 3,
        name: "1122",
        desc: "请填写申请信息"
      },
      {
        index: 4,
        name: "li",
        desc: "请填写申请信息"
      },
      {
        index: 5,
        name: "王文",
        desc: "请填写申请信息"
      },
      {
        index: 6,
        name: "张账",
        desc: "请填写申请信息"
      },
      {
        index: 7,
        name: "利达",
        desc: "请填写申请信息"
      }
    ]
  },
  addPerInfo:function () {
    wx.redirectTo({
      url: '../addPerInfo/addPerInfo'
    })
  },
  subPayMon:function(){
    wx.redirectTo({
      url: '../subPayMon/subPayMon'
    })
  },
  //分享
  onShareAppMessage: function () {
    return {
      title: 'Evus',
      desc: 'Evus',
      path: '/pages/index/index'
    }
  }
})
