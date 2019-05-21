Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectedIndex: 0,
    tabBarList: [
      {
        text: "首页",
        type: 'home',
        selected: true,
        specials: false,
        imgs: '/images/home_selected.png'
      }, {
        text: "查找",
        type: 'find',
        selected: false,
        specials: false,
        imgs: '/images/find.png'
      }, {
        text: "照相机",
        type: 'photographic',
        selected: false,
        specials: true,
        imgs: '/images/sm.png'
      }, {
        text: "消息",
        type: 'message',
        selected: false,
        specials: false,
        imgs: '/images/message.png'
      }, {
        text: "我的",
        type: 'myself',
        selected: false,
        specials: false,
        imgs: '/images/myself.png'
      }
    ]
  },
  tabClick (e) {
    var type = e.currentTarget.dataset.type;
    var key = e.currentTarget.dataset.key;
    if (type == 'photographic') {
      wx.navigateTo({
        url: '/pages/photographic/photographic',
      })
    } else {
      //选中当前图片
      const imgs = this.data.tabBarList[key].imgs;
      this.data.tabBarList[key].imgs = imgs.split('.')[0] + '_selected.' + imgs.split('.')[1];
      const qxImgName = this.data.tabBarList[this.data.selectedIndex].imgs.split('_')[0];//获取图片名称
      const qxImgType = this.data.tabBarList[this.data.selectedIndex].imgs.split('_')[1].split('.')[1];//获取图片格式
      //取消上一个选中的图片
      this.data.tabBarList[this.data.selectedIndex].imgs = qxImgName + '.' + qxImgType;
      //选中当前节点
      this.data.tabBarList[key].selected = true;
      //取消上一个节点
      this.data.tabBarList[this.data.selectedIndex].selected = false;
      const data = this.data.tabBarList;
      this.setData({
        selectedIndex: key,
        tabBarList: data
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //调用app中的函数
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