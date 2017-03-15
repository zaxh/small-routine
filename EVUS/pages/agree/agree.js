Page({
  data: {
    src: "../images/title.png",
    back: "<",
    dialog: true,
    checkeds: false,
    checkboxItems: [
      {
        name: "徐莫庭",
        value: 0
      },
      {
        name: "liming",
        value: 1
      }
    ]
  },
  checkboxChange: function (e) {
        //console.log('checkbox发生change事件，携带value值为：', e.detail.value);

        var checkboxItems = this.data.checkboxItems, values = e.detail.value;
        for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
            checkboxItems[i].checked = false;

            for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
                if(checkboxItems[i].value == values[j]){
                    checkboxItems[i].checked = true;
                    break;
                }
            }
        }
        this.setData({
            checkboxItems: checkboxItems
        });
    },
  bindIndexTap: function(){
    wx.redirectTo({
      url: '../index/index'
    })
  },
  bindCodeTap: function(){
      var dialog = this.data.dialog;
      dialog = false;
      this.setData({
            dialog: dialog
      });
  },
  formReset: function(){
      var dialog = this.data.dialog;
      dialog = true;
      this.setData({
            dialog: dialog
      });
  },
  formSubmit: function(e) {
    //console.log('form发生了submit事件，携带数据为：', e.detail.value.input);
    var dialog = this.data.dialog;
      dialog = true;
      this.setData({
            dialog: dialog
      });
  },
  payment: function(e){
      var checkboxItems = this.data.checkboxItems, checkeds = this.data.checkeds, values = e.detail.value;
        for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
            if(checkboxItems[i].checked) {
                checkeds = true;
                this.setData({
                    checkeds : checkeds
                });
            }
        }
        if(checkeds){
            wx.showModal({
                title: '确认支付？',
                content: '支付完成后我们将立即为您办理eVUS',
                confirmText: "确定",
                cancelText: "取消",
                success: function (res) {
                    console.log(res);
                    if (res.confirm) {
                        wx.redirectTo({
                            url: '../pay/pay'
                        })
                    }else{
                        console.log('用户点击辅助操作')
                    }
                }
            });
        }else{
            wx.showModal({
                content: '请至少选择一位成员',
                showCancel: false,
                success: function (res) {
                    if (res.confirm) {
                        console.log('用户点击确定')
                    }
                }
            });
        }
  },
  dispayment:function(){
    wx.redirectTo({
      url: '../index/index'
    })
  }
})