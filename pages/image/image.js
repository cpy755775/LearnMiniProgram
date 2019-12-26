// pages/image/image.js
Page({
  data: {
    pic1:'',
  },
  handleChoosePics(){
    wx.chooseImage({
      success: (res) => {
        console.log(res)
        this.setData({
          pic1:res.tempFilePaths[0]
        })
      },
    })
  },
  handlePicLoad1(){
    console.log('图片加载完成！')
  },
  
})