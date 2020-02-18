// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:['衣服','裤子','鞋子']
  },
  // 触摸开始事件
  handleTouchStart(){
    console.log('触摸开始')
  },
  // 触摸后移动
  handleTouchMove(){
    console.log('触摸后移动') 
  },
  // 触摸被打断
  handleTouchCancel(){
    console.log('触摸被打断')
  },
  // 触摸结束
  handleTouchEnd(){
    console.log('触摸结束')
  },
  //触摸后马上离开(不超过350ms,例如点击)
  handleTap(){
    console.log('触摸后马上离开')
  },
  // 触摸超过350ms触发回调函数，tap事件不会触发(长按)
  handleLongPress(){
    console.log('触摸超过350ms触发回调函数，tap事件不会触发')
  },
  handleEventClick(event){
    console.log('----',event)
  },
  handleTouchEnd2(event){
    console.log('++++',event)
  },
  handleTouchStart2(event){
    console.log('``````',event)
  },
  handleOuterClick(event){
    console.log('handleOuterClick',event)
  },
  handleInnerClick(event){
    console.log('handleInnerClick',event)
  },
  handleItemClick(event){
    console.log(event);
    const dataset = event.currentTarget.dataset;
    const index = dataset.index;
    const item = dataset.item;
    console.log(index,item);
  },
  handleCaptrueView1(){
    console.log('handleCaptrueView1')
  },
  handleBindView1(){
    console.log('handleBindView1')
  },
  handleCaptrueView2() {
    console.log('handleCaptrueView2')
  },
  handleBindView2() {
    console.log('handleBindView2')
  },
  handleCaptrueView3() {
    console.log('handleCaptrueView3')
  },
  handleBindView3() {
    console.log('handleBindView3')
  }
})

