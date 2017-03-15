//addPerInfoSec.js
//获取应用实例
var tcity = require("../../utils/citys.js");

var app = getApp()
Page({
  data: {
    src:"../images/title.png",
    back: "<",
    wiIndex: 0,
    index: 0,
    "type": "text",
    workInfo: ["请选择...","现在或曾经有过工作","从未有过工作单位"],
    //地址参数
    provinces: [],
    province: "",
    citys: [],
    city: "",
    countys: [],
    county: '',
    value: [0, 0, 0],
    values: [0, 0, 0],
    condition: false,

    provinces1: [],
    province1: "",
    citys1: [],
    city1: "",
    countys1: [],
    county1: '',
    value1: [0, 0, 0],
    values1: [0, 0, 0],
    condition1: false,

    provinces2: [],
    province2: "",
    citys2: [],
    city2: "",
    countys2: [],
    county2: '',
    value2: [0, 0, 0],
    values2: [0, 0, 0],
    condition2: false
  },
  bindIndexTap: function(){
    wx.redirectTo({
      url: '../index/index'
    })
  },
  formSubmit: function(e) {
    //console.log('form发生了submit事件，携带数据为：', e.detail.value)
    wx.redirectTo({
      url: '../addPerInfoThr/addPerInfoThr'
    })
  },
  back:function(){
      wx.redirectTo({
        url: '../index/index'
      })
  },
  bindWorkChange: function(e) {
        //console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            wiIndex: e.detail.value
        })
  },
  //地址选择
  bindChange: function(e) {
    //console.log(e);
    var val = e.detail.value;
    var t = this.data.values;
    var cityData = this.data.cityData;
    
    if(val[0] != t[0]){
      console.log('province no ');
      const citys = [];
      const countys = [];

      for (let i = 0 ; i < cityData[val[0]].sub.length; i++) {
        citys.push(cityData[val[0]].sub[i].name)
      }
      for (let i = 0 ; i < cityData[val[0]].sub[0].sub.length; i++) {
        countys.push(cityData[val[0]].sub[0].sub[i].name)
      }

      this.setData({
        province: this.data.provinces[val[0]],
        city: cityData[val[0]].sub[0].name,
        citys:citys,
        county: cityData[val[0]].sub[0].sub[0].name,
        countys:countys,
        values: val,
        value:[val[0],0,0]
      })
      
      return;
    }
    if(val[1] != t[1]){
      console.log('city no');
      const countys = [];

      for (let i = 0 ; i < cityData[val[0]].sub[val[1]].sub.length; i++) {
        countys.push(cityData[val[0]].sub[val[1]].sub[i].name)
      }
      
      this.setData({
        city: this.data.citys[val[1]],
        county: cityData[val[0]].sub[val[1]].sub[0].name,
        countys:countys,
        values: val,
        value:[val[0],val[1],0]
      })
      return;
    }
    if(val[2] != t[2]){
      console.log('county no');
      this.setData({
        county: this.data.countys[val[2]],
        values: val
      })
      return;
    }
    

  },
  bindChange1: function(e) {
    //console.log(e);
    var val1 = e.detail.value
    var t1 = this.data.values1;
    var cityData1 = this.data.cityData;
    
    if(val1[0] != t1[0]){
      console.log('province no ');
      const citys1 = [];
      const countys1 = [];

      for (let i = 0 ; i < cityData1[val1[0]].sub.length; i++) {
        citys1.push(cityData1[val1[0]].sub[i].name)
      }
      for (let i = 0 ; i < cityData1[val1[0]].sub[0].sub.length; i++) {
        countys1.push(cityData1[val1[0]].sub[0].sub[i].name)
      }

      this.setData({
        province1: this.data.provinces1[val1[0]],
        city1: cityData1[val1[0]].sub[0].name,
        citys1:citys1,
        county1: cityData1[val1[0]].sub[0].sub[0].name,
        countys1:countys1,
        values1: val1,
        value1:[val1[0],0,0]
      })
      
      return;
    }
    if(val1[1] != t1[1]){
      console.log('city no');
      const countys1 = [];

      for (let i = 0 ; i < cityData1[val1[0]].sub[val1[1]].sub.length; i++) {
        countys1.push(cityData1[val1[0]].sub[val1[1]].sub[i].name)
      }
      
      this.setData({
        city1: this.data.citys1[val1[1]],
        county1: cityData1[val1[0]].sub[val1[1]].sub[0].name,
        countys1:countys1,
        values1: val1,
        value1:[val1[0],val1[1],0]
      })
      return;
    }
    if(val1[2] != t1[2]){
      console.log('county no');
      this.setData({
        county1: this.data.countys1[val1[2]],
        values1: val1
      })
      return;
    }
    

  },
  bindChange2: function(e) {
    //console.log(e);
    var val2 = e.detail.value
    var t2 = this.data.values2;
    var cityData2 = this.data.cityData;
    
    if(val2[0] != t2[0]){
      console.log('province no ');
      const citys2 = [];
      const countys2 = [];

      for (let i = 0 ; i < cityData2[val2[0]].sub.length; i++) {
        citys2.push(cityData2[val2[0]].sub[i].name)
      }
      for (let i = 0 ; i < cityData2[val2[0]].sub[0].sub.length; i++) {
        countys2.push(cityData2[val2[0]].sub[0].sub[i].name)
      }

      this.setData({
        province2: this.data.provinces2[val2[0]],
        city2: cityData2[val2[0]].sub[0].name,
        citys2:citys2,
        county2: cityData2[val2[0]].sub[0].sub[0].name,
        countys2:countys2,
        values2: val2,
        value2:[val2[0],0,0]
      })
      
      return;
    }
    if(val2[1] != t2[1]){
      console.log('city no');
      const countys2 = [];

      for (let i = 0 ; i < cityData2[val2[0]].sub[val2[1]].sub.length; i++) {
        countys2.push(cityData2[val2[0]].sub[val2[1]].sub[i].name)
      }
      
      this.setData({
        city2: this.data.citys2[val2[1]],
        county2: cityData2[val2[0]].sub[val2[1]].sub[0].name,
        countys2:countys2,
        values2: val2,
        value2:[val2[0],val2[1],0]
      })
      return;
    }
    if(val2[2] != t2[2]){
      console.log('county no');
      this.setData({
        county2: this.data.countys2[val2[2]],
        values2: val2
      })
      return;
    }
    

  },
  open:function(){
    this.setData({
      condition:!this.data.condition
    })
  },
  open1:function(){
    this.setData({
      condition1:!this.data.condition1
    })
  },
  open2:function(){
    this.setData({
      condition2:!this.data.condition2
    })
  },
  onLoad: function () {
    console.log("onLoad");
    var that = this;
    
    tcity.init(that);

    var cityData = that.data.cityData;

    
    const provinces = [];
    const citys = [];
    const countys = [];

    for(let i=0;i<cityData.length;i++){
      provinces.push(cityData[i].name);
    }
    //console.log('省份完成');
    for (let i = 0 ; i < cityData[0].sub.length; i++) {
      citys.push(cityData[0].sub[i].name)
    }
    //console.log('city完成');
    for (let i = 0 ; i < cityData[0].sub[0].sub.length; i++) {
      countys.push(cityData[0].sub[0].sub[i].name)
    }

    that.setData({
      'provinces': provinces,
      'citys':citys,
      'countys':countys,
      'province':cityData[0].name,
      'city':cityData[0].sub[0].name,
      'county':cityData[0].sub[0].sub[0].name
    })
    //console.log('初始化完成');

    var cityData1 = that.data.cityData;

    
    const provinces1 = [];
    const citys1 = [];
    const countys1 = [];

    for(let i=0;i<cityData1.length;i++){
      provinces1.push(cityData1[i].name);
    }
    //console.log('省份完成');
    for (let i = 0 ; i < cityData1[0].sub.length; i++) {
      citys1.push(cityData1[0].sub[i].name)
    }
    //console.log('city完成');
    for (let i = 0 ; i < cityData1[0].sub[0].sub.length; i++) {
      countys1.push(cityData1[0].sub[0].sub[i].name)
    }

    that.setData({
      'provinces1': provinces1,
      'citys1':citys1,
      'countys1':countys1,
      'province1':cityData1[0].name,
      'city1':cityData1[0].sub[0].name,
      'county1':cityData1[0].sub[0].sub[0].name
    })
    //console.log('初始化完成');

    var cityData2 = that.data.cityData;

    
    const provinces2 = [];
    const citys2 = [];
    const countys2 = [];

    for(let i=0;i<cityData2.length;i++){
      provinces2.push(cityData2[i].name);
    }
    //console.log('省份完成');
    for (let i = 0 ; i < cityData2[0].sub.length; i++) {
      citys2.push(cityData2[0].sub[i].name)
    }
    //console.log('city完成');
    for (let i = 0 ; i < cityData2[0].sub[0].sub.length; i++) {
      countys2.push(cityData2[0].sub[0].sub[i].name)
    }

    that.setData({
      'provinces2': provinces2,
      'citys2':citys2,
      'countys2':countys2,
      'province2':cityData2[0].name,
      'city2':cityData2[0].sub[0].name,
      'county2':cityData2[0].sub[0].sub[0].name
    })
    //console.log('初始化完成');

  }
})
