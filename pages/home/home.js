// pages/home/home.js
//通过App()方法获取到 示例,注意后面2个字母小写
const app = getApp()

const name = app.globalData.myname
const age = app.globalData.myage
Page({
  //2.初始化我们的数据
  data: {
    city:'',
    country:'',
    countryCode:''
  },
  //常用的页面的生命周期函数
  //页面被加载出来时
  //1.在生命周期函数里面请求数据
  onLoad(){
    const mythis = this
    console.log('onLoad')
    wx.request({
      url: 'http://ip-api.com/json/?fields=520191&lang=zh-CN',
      success: function(res){
        console.log(res)
        const data = res.data
        console.log(data)
        //错误原因：this在方法里面代表的是这个choseImage方法 而不是page对象，所以在外部定义一下this就好
        //或者可以采用箭头函数写法,因为它是一层层指向外面的，所以最后指向肯定是Page这个对象
        //  success:(res) => {
        //     this.setData({
        //       city: data.city,
        //       country: data.country,
        //       countryCode: data.countryCode
        //     })
        // }
        mythis.setData({
          city: data.city,
          country: data.country,
          countryCode: data.countryCode
        })
      }
    })
  },
  //页面先是出来时
  onShow(){
    console.log('onShow')
  },
  //页面初次渲染完成时
  onReady(){
    console.log('onReady')
  },
  //页面隐藏时
  onHide(){
    console.log('onHide')
  },
  //页面被卸载时
  onUnload(){
    console.log('onUnload')
  },
  //2.获取用户信息的第二种方式，要求用户必须点击按钮
  //3.监听wxml中的事件(更多是监听自定义事件)
  handlergetUserInfo(event) {
    console.log(event)
    console.log(name)
    console.log(age)
  },
  handleViewClick(){
    console.log('哈哈哈被点击了')
  },
  //-----------4.监听其他事件------------
  //监听系统自带事件
  //监听页面滚动
  onPageScroll(obj){
    console.log(obj)
  },
  onReachBottom(){
    console.log('页面到达底部！')
  },
  onPullDownRefresh(){
    console.log('触发了下拉事件！')
  }
})