//注册一个小程序示例
App({
  //调用APP函数的时候，会传入一个js对象的自变量
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  //1.获取用户信息的第一种方式
  onLaunch: function (options) {
    console.log('小程序初始化完成！')
    console.log(options)
    wx.getUserInfo({
      success:function(res){
        console.log(res)
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  //显示小程序的时候
  onShow: function (options) {
    console.log('展示显示小程序')
    console.log(options)
    switch(options.scene){
      case 1001:
      console.log('进入场景1001')
      break;
      case 1005:
      console.log('进入场景1005')
      break;
    }
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  globalData:{
    myname:"老五",
    myage:25
  }
})
