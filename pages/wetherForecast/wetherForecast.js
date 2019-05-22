// pages/wetherForecast/wetherForecast.js
//定位
var amapFile = require('../../lib/amap-wx.js');
var markersData = {
  latitude: '',//纬度
  longitude: '',//经度
  key: "c0e9d71cc639c613da5e2c5804b99a9d"//申请的高德地图key
};
//tost
const { $Toast } = require('../../miniprogram_npm/iview-weapp/base/index.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gengduoCT: false,
    currentCity: '成都',
    currentType: '晴转多云',
    currentIcon: 'icon-duoyun',
    wetherList: [
      {
        date: '05-17',
        xq: '周五',
        icon: 'icon-xiaoxue',
        type: '晴',
        wd: '18~25℃',
      }, {
        date: '今天',
        xq: '周六',
        icon: 'icon-xiaoxue',
        type: '晴',
        wd: '18~25℃'
      }, {
        date: '05-19',
        xq: '周日',
        icon: 'icon-xiaoxue',
        type: '晴',
        wd: '18~25℃'
      }, {
        date: '05-20',
        xq: '周天',
        icon: 'icon-xiaoxue',
        type: '晴',
        wd: '18~25℃'
      }, {
        date: '05-21',
        xq: '周一',
        icon: 'icon-xiaoxue',
        type: '晴',
        wd: '18~25℃'
      }
    ],
    cityList: [
      {
        cityName: '成都',
        wd: '10~20℃'
      }, {
        cityName: '成都',
        wd: '10~20℃'
      }
    ],
    weather: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //动态设置标题
    if (options.label) {
      wx.setNavigationBarTitle({
        title: options.label
      })
    }
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#48c6ef',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
    this.loadInfo();
  },
  gengduoFun(){
    //更多
    this.setData({
      gengduoCT: !this.data.gengduoCT
    });
  },
  cityMore() {
    //添加更多城市
    wx.navigateTo({
      url: '/pages/cityIndexSelector/cityIndexSelector',
    })
  },
  //获取当前位置的经纬度
  loadInfo: function () {
    var that = this;
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude//维度
        var longitude = res.longitude//经度
        that.loadCity(latitude, longitude);
      }
    })
  },
  //把当前位置的经纬度传给高德地图，调用高德API获取当前地理位置，天气情况等信息
  loadCity: function (latitude, longitude) {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({ key: markersData.key });
    //根据经纬度获取地理位置
    // myAmapFun.getRegeo({
    //   location: '' + longitude + ',' + latitude + '',//location的格式为'经度,纬度'
    //   success: function (data) {
    //     //console.log(data);
    //   },
    //   fail: function (info) { 
    //     $Toast({
    //       content: info,
    //       type: 'warning'
    //     });
    //   }
    // });
    //获取天气状况
    myAmapFun.getWeather({
      success: function (data) {
        that.setData({
          weather: data
        })
        console.log(data);
      },
      fail: function (info) {
        $Toast({
          content: info,
          type: 'warning'
        });
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})