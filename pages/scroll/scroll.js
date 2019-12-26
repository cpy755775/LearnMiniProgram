// pages/scroll/scroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  handleScroll(event){
    console.log('正在滚动',event.detail.scrollTop)
  },
  handleToUpper(event){
    console.log('到达顶部/左侧',event)
  },
  handleToLower(event) {
    console.log('到达底部/右侧', event)
  }
})