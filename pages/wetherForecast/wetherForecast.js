// pages/wetherForecast/wetherForecast.js
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
    ]
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
  },
  gengduoFun(){
    //更多
    this.setData({
      gengduoCT: !this.data.gengduoCT
    });
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