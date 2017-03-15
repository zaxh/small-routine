//addPerInfoSec.js
Page({
  data: {
    src:"../images/title.png",
    back: "<",
    visaPassport: ['请选择...', '美国签证在最新护照上', '在旧护照上'],
    isGo: ['去过', '没去过'],
    usContact: ['请选择...', '有联系人或酒店', '没有'],
    isRefused: ['请选择...', '没有被美国拒签过', '曾经被美国拒签过'],
    US:['请选择...','阿拉巴马州 ALABAMA','阿拉斯加州 ALASKA','萨摩亚群岛 AMERICAN SAMOA','阿利桑那州 ARIZONA','阿肯色州 ARKANSAS','加利福尼亚州 CALIFORNIA','卡森城 CARSON CITY','查尔斯顿 CHARLESTON','科罗拉多州 COLORADO','康涅狄格州 CONNECTICUT','特拉华州 DELAWARE','哥伦比亚特区 DISTRICT OF COLUMBIA','密克罗尼西亚联邦 FEDERATED STATES OF MICRONESIA','佛罗里达州 FLORIDA','乔治亚州 GEORGIA','关岛 GUAM','夏威夷州 HAWAII','爱达荷州 IDAHO','伊利诺斯州 ILLINOIS','印第安纳州 INDIANA','爱荷华州 IOWA','堪萨斯州 KANSAS','肯塔基州 KENTUCKY','路易斯安那州 LOUISIANA','缅因州 MAINE','马绍尔群岛 MARSHALL ISLANDS','马里兰州 MARYLAND','马萨诸塞州 MASSACHUSETTS','密歇根州 MICHIGAN','明尼苏达州 MINNESOTA','密西西比州 MISSISSIPPI','密苏里州 MISSOURI','蒙大拿州 MONTANA','内布拉斯加州 NEBRASKA','内华达州 NEVADA','新罕布什尔州 NEW HAMPSHIRE','新泽西州 NEW JERSEY','新墨西哥州 NEW MEXICO','纽约州 NEW YORK','北卡罗来纳州 NORTH CAROLINA','北达科他州 NORTH DAKOTA','北马里亚纳群岛 NORTH MARIANA ISLANDS','俄亥俄州 OHIO','俄克拉荷马州 OKLAHOMA','俄勒冈州 OREGON','帕劳 PALAU','宾夕法尼亚州 PENNSYLVANIA','波多黎各 PUERTO RICO','罗得岛州 RHODE ISLAND','南卡罗来纳州 SOUTH CAROLINA','南达科他州 SOUTH DAKOTA','田纳西州 TENNESSEE','得克萨斯州 TEXAS','犹他州 UTAH','佛蒙特州 VERMONT','维尔京群岛 VIRGIN ISLANDS','弗吉尼亚州 VIRGINIA','华盛顿州 WASHINGTON','西弗吉尼亚州 WEST VIRGINIA','威斯康辛州 WISCONSIN','怀俄明州 WYOMING'],
    issueDate: '请选择...',
    expireDate: '请选择...',
    vpIndex: 0,
    ucIndex: 0,
    reIndex: 0,
    goIndex: 1,
    USIndex: 0
  },
  bindIndexTap: function(){
    wx.redirectTo({
      url: '../index/index'
    })
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    wx.redirectTo({
      url: '../addPerInfoEnd/addPerInfoEnd'
    })
  },
  back:function(){
      wx.redirectTo({
        url: '../index/index'
      })
  },
  bindVPChange: function(e) {
    this.setData({
      vpIndex: e.detail.value
    })
  },
  bindUCChange: function(e) {
    this.setData({
      ucIndex: e.detail.value
    })
  },
  bindIRChange: function(e) {
    this.setData({
      reIndex: e.detail.value
    })
  },
  bindGoChange: function(e) {
    this.setData({
      goIndex: e.detail.value
    })
  },
  bindUSChange: function(e) {
    this.setData({
      USIndex: e.detail.value
    })
  },
  issueDateChange: function(e) {
    this.setData({
      issueDate: e.detail.value
    })
  },
  expireDateChange: function(e) {
    this.setData({
      expireDate: e.detail.value
    })
  }
})