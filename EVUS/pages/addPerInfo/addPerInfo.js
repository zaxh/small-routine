Page({
  data: {
    src:"../images/title.png",
    back: "<",
    cons: [
      {
        "name": "姓氏",
        "input": '填写中文姓氏',
        "id": 'surname',
        "type": "text"/*,
        "confirm": 'checkChinese'*/
      },
      {
        "name": "名字",
        "input": '填写中文名字',
        "id": 'name',
        "type": "text"/*,
        "confirm": 'checkChinese'*/
      },
      {
        "name": "身份证号",
        "input": '',
        "id": 'idCard',
        "type": "idcard"/*,
        "confirm": ''*/
      },
      {
        "name": "手机号",
        "input": '儿童请填写家长手机号',
        "id": 'number',
        "type": "text"/*,
        "confirm": 'checkMobile'*/
      },
      {
        "name": "电子邮箱",
        "input": '儿童请填写家长电子邮箱',
        "id": 'email',
        "type": "text"/*,
        "confirm": 'checkMail'*/
      }
    ]
  },
  bindIndexTap: function(){
    wx.redirectTo({
      url: '../index/index'
    })
  },
  formSubmit: function(e) {
    //console.log('form发生了submit事件，携带数据为：', e.detail.value)
    wx.redirectTo({
      url: '../addPerInfoSec/addPerInfoSec'
    })
  },
  back:function(){
      wx.redirectTo({
      url: '../index/index'
    })
  }
})