App({
  //APP的声明周期函数
  //监听小程序初始化
  //一般来说生命周期函数   会在后台存活2个小时
  onLaunch: function () {
    console.log('小程序初始化完成！')
    //一般初始化的时候就可以去获取用户的信息
    //设置超时，3秒后 
    setTimeout(function(){
      const err = new Error()
      throw err
    },3000)
    wx.getUserInfo({
      success: function (res) {
        console.log(res)
      }
    }) 
  },
  //页面显示的时候执行的函数
  onShow: function (options) {
    console.log('页面显示')
     
  },
  //页面被隐藏的时候执行的函数
  onHide: function () {
    console.log('页面被隐藏了')
  },
  //小程序发生错误的时候执行
  onError: function (msg) {
    console.log('小程序发生了错误')
  }
})
