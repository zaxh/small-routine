//pay.js
Page({
  data: {
    src:"../images/title.png",
    back: "<",
    wxicon: "../images/wx.png",
    money: '100元',
    onOff: true
  },
  bindIndexTap: function(){
    wx.redirectTo({
      url: '../index/index'
    })
  },
  weChatPay:function () {
    var onOff = this.data.onOff;
      onOff = false;
      this.setData({
          onOff: onOff
      });
  },
  weChatBack: function(){
      var onOff = this.data.onOff;
      onOff = true;
      this.setData({
          onOff: onOff
      });
      wx.redirectTo({
        url: '../query/query'
      })
  },
  unionpay:function(){
    wx.navigateTo({
      url: ''
    })
  },
  payfor: function(){
    wx.request({
      url: 'https://www.baidu.com/index.php?tn=93139410_hao_pg', 
      data: {
        x: '' ,
        y: ''
      },
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
      }
    })
    /*wx.requestPayment({
      'timeStamp': '',
      'nonceStr': '',
      'package': '',
      'signType': 'MD5',
      'paySign': '',
      'success':function(res){
        console.log(11);
      },
      'fail':function(res){
        console.log(22);
      }
    })*/
  }
  
})