Page({
  data: {
    name: 'CPY',
    age: 18,
    students:[
      {id:10,name:'kobe',age:20},
      {id:20,name:'why',age:90},
      {id:30,name:'james',age:25},
      {id:40,name:'curry',age:60}
    ],
    counter: 0
  },
  //设置监听事件 + 
  counterAdd(){
    //this指的是Page这个对象
    // this.data.counter+=1;
    // console.log(this.data.counter);
    //上面这个方法确实改变了变量，但是不会在页面上刷新
    this.setData({
      //通过setData这个方法，可以刷新页面的数据
      counter:this.data.counter+1
    })
  },
  //设置监听事件 -
  counterDel(){
    this.setData({
      counter:this.data.counter-1
    })
  }
})