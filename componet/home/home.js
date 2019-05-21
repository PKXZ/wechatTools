// componet/home/home.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554565147883&di=94652bd7f8e89e9c512971544994cbc2&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0192e658b8d8aea801219c77111f0a.png%40900w_1l_2o_100sh.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554565147883&di=94652bd7f8e89e9c512971544994cbc2&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0192e658b8d8aea801219c77111f0a.png%40900w_1l_2o_100sh.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554565147883&di=94652bd7f8e89e9c512971544994cbc2&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0192e658b8d8aea801219c77111f0a.png%40900w_1l_2o_100sh.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554565147883&di=94652bd7f8e89e9c512971544994cbc2&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0192e658b8d8aea801219c77111f0a.png%40900w_1l_2o_100sh.jpg',
    ],
    indicatorColor: '#fff',
    indicatorActiveColor: '#00a2e9',
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    value: '',
    toolData: [
      {
        label: '天气预报',
        type: 'wetherForecast',
        icon: 'icon-yun',
        color: [
          "#2481b4", "#87c6ea"
        ]
      }, {
        label: '新华字典',
        type: 'xinhuaDictionary',
        icon: 'icon-xinhuazidian',
        color: [
          "#4facfe", "#00f2fe"
        ]
      }, {
        label: '成语字典',
        type: 'idiomsDictionary',
        icon: 'icon-chengyucidian',
        color: [
          "#43e97b", "#38f9d7"
        ]
      }, {
        label: '驾照题库',
        type: 'driverTest',
        icon: 'icon-jiazhaodengji',
        color: [
          "#00b9a3", "#00cc9a"
        ]
      }, {
        label: '历史今天',
        type: 'historyToday',
        icon: 'icon-lishi',
        color: [
          "#4e95ff", "#54bdfa"
        ]
      }, {
        label: '文字转换',
        type: 'textConversion',
        icon: 'icon-zhuanhuan',
        color: [
          "#87e3e4", "#59c4f1"
        ]
      }, {
        label: '星座运势',
        type: 'constellationChart',
        icon: 'icon-xingzuo',
        color: [
          "#2af598", "#009efd"
        ]
      }, {
        label: '周公解梦',
        type: 'zgInterprets',
        icon: 'icon-zuomeng',
        color: [
          "#18bcf4", "#ade4fd"
        ]
      }, {
        label: '今日头条',
        type: 'todayHeadline',
        icon: 'icon-xinwen',
        color: [
          "#58a0fd", "#c8c6ff"
        ]
      }, {
        label: '设置闹钟',
        type: 'todayHeadline',
        icon: 'icon-xinwen',
        color: [
          "#49bff3", "#9df8f7"
        ]
      }, {
        label: 'xxx',
        type: 'todayHeadline',
        icon: 'icon-xinwen',
        color: [
          "#577ff3", "#abb1f6"
        ]
      }, {
        label: 'xxx',
        type: 'todayHeadline',
        icon: 'icon-xinwen',
        color: [
          "#f57936", "#ffdb35"
        ]
      }, {
        label: 'xxx',
        type: 'todayHeadline',
        icon: 'icon-xinwen',
        color: [
          "#fd798d", "#ffb3a6"
        ]
      }, {
        label: 'xxx',
        type: 'todayHeadline',
        icon: 'icon-xinwen',
        color: [
          "#5fd8c6", "#61e6e0"
        ]
      }, {
        label: 'xxx',
        type: 'todayHeadline',
        icon: 'icon-xinwen',
        color: [
          "#a294f7", "#9cb1f7"
        ]
      }, {
        label: 'xxx',
        type: 'todayHeadline',
        icon: 'icon-xinwen',
        color: [
          "#c477d2", "#dd87cd"
        ]
      }, {
        label: 'xxx',
        type: 'todayHeadline',
        icon: 'icon-xinwen',
        color: [
          "#5eb8f1", "#6fd1ef"
        ]
      }, {
        label: 'xxx',
        type: 'todayHeadline',
        icon: 'icon-xinwen',
        color: [
          "#ef9a3c", "#f8c568"
        ]
      }, {
        label: 'xxx',
        type: 'todayHeadline',
        icon: 'icon-xinwen',
        color: [
          "#e858a2", "#ec8fc3"
        ]
      }, {
        label: 'xxx',
        type: 'todayHeadline',
        icon: 'icon-xinwen',
        color: [
          "#61c566", "#a9e28b"
        ]
      }, {
        label: 'xxx',
        type: 'todayHeadline',
        icon: 'icon-xinwen',
        color: [
          "#2f6af8", "#51c0fa"
        ]
      }, {
        label: 'xxx',
        type: 'todayHeadline',
        icon: 'icon-xinwen',
        color: [
          "#eb5d43", "#ef9181"
        ]
      }, {
        label: 'xxx',
        type: 'todayHeadline',
        icon: 'icon-xinwen',
        color: [
          "#ea4646", "#ef7873"
        ]
      }, {
        label: 'xxx',
        type: 'todayHeadline',
        icon: 'icon-xinwen',
        color: [
          "#f09b3d", "#f9d267"
        ]
      }
    ]
  },
  /**
   * 组件的方法列表
   */
  methods: {
    toolPage(event) {
      const label = event.currentTarget.dataset.items.label;
      const type = event.currentTarget.dataset.items.type;
      wx.navigateTo({
        url: '/pages/' + type + '/' + type + '?label=' + label,
      })
    }
  }
})
