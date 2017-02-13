// pages/swiper/swiper.js
var articleData = require('../../data/swiperData.js');
Page({
  data:{
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      articleData:articleData.swiperData
    });
  },
  onReady:function(){
    // 页面渲染完成
    
  },
  onShow:function(){
    // 页面显示
    wx.setNavigationBarTitle({
      title: '明星说',
      success: function(res) {
        // success
      }
    })
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  toDetail:function(event){
    var postId = event.currentTarget.dataset.id;
      wx.navigateTo({
        url: '/pages/swiper/swiperDetail/swiperDetail?id='+postId
      });
  }
})