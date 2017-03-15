// pages/query/query.js
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
  bindQueryTap:function () {
    wx.redirectTo({
      url: '../queryByCert/queryByCert'
    })
  }
})