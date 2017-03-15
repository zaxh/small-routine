//index.js
Page({
  data: {
    src:"../images/title.png",
    back: "<",
    icon:"../images/icon_i.png"
  },
  bindIndexTap: function(){
    wx.redirectTo({
      url: '../index/index'
    })
  },
  agree:function () {
    wx.redirectTo({
      url: '../agree/agree'
    })
  },
  disagree:function(){
    wx.redirectTo({
      url: '../index/index'
    })
  }
})
