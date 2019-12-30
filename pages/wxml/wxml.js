// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:"你好小程序",
    firstname:"勒布朗",
    lastname:"詹姆斯",
    age:20,
    nowTime: new Date().toLocaleString(),
    view2:false,
    condition: true,
    score:40,
    movies:['盗梦空间','大话西游','倩女幽魂'],
    nums:[
      [10,20,30],
      [40,50,60],
      [110,120,130]
    ],
    arr:['a','b','c']
  },
  onLoad(){
    const mythis = this
    setInterval(function(){
      mythis.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
  },
  bindSwitchColor(){
    const mythis = this
    mythis.setData({
      view2 : !mythis.data.view2
    })
  },
  bindSwitchCondition(){
    this.setData({
      condition:! this.data.condition
    })
  },
  bindScoreAdd(){
    this.setData({
      score: this.data.score+6
    })
  }
})