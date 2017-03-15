// pages/queryByCert/queryByCert.js
Page({
  data: {
    src:"../images/title.png",
    back: "<",
  },
  bindIndexTap: function(){
    wx.redirectTo({
      url: '../index/index'
    })
  },
  bindBackTap:function () {
    wx.redirectTo({
      url: '../query/query'
    })
  }
})