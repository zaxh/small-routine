//addPerInfoEnd.js
Page({
  data: {
    src: "../images/title.png",
    back: "<",
    name: "徐莫庭"
  },
  bindIndexTap: function(){
    wx.redirectTo({
      url: '../index/index'
    })
  },
  addPerInfo:function() {
    wx.redirectTo({
      url: '../index/index'
    })
  },
  subPayMon:function(){
    wx.redirectTo({
      url: '../subPayMon/subPayMon'
    })
  }
})
