// pages/swiper/swiperDetail/swiperDetail.js
var postData = require('../../../data/swiperData.js');
Page({
  data:{
    isCollected:false,
    post_collection:{
        0:true,
        1:false,
        3:true
    },
    reqtest:{},
    isPlaying:false
  },
  onLoad:function(options){
    //获取当前缓存中的数据
    var storageData = wx.getStorageSync('post_collection');
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      postData:postData.swiperData[options.id],
      isCollected:storageData
    });
  },
  onReady:function(){
    // 页面渲染完成
    this.audioCtx = wx.createAudioContext('myAudio');
  },
  onShare:function(){
    console.log('分享功能');
    wx.showActionSheet({
      itemList:['qq','朋友圈','微信好友'],
      success:function(res){
        wx.showToast({
          title:'分享成功',
          icon:'success',
          duration:2000
        });
        console.log(res);
      }
    });
  },
  onShareAppMessage:function(){
    return {
      title:'String',
      desc:'一个有趣的故事',
      path:'/pages/swiper/swiperDetail/swiperDetail'
    }
  },
  onCollect:function(){
    var that = this;
    //获取本地的缓存数据post_collection
    this.changeCollect(wx.getStorage({
      key: 'post_collection',
      success: function(res){
        console.log(res.data);
        // success 如果成功获取缓存中的数据,需要把数据更新
        wx.setStorageSync('post_collection',that.data.isCollected);
      },
      fail: function() {
        console.log('fail==='+that.data.isCollected);
        // fail 说明本地没有缓存的数据，那么我们需要设置一个缓存数据，根据isCollected的状态来定义值 true表示收藏 false代表没有收藏
        wx.setStorage({
          key: 'post_collection',
          data: !that.data.isCollected
        });
      },
      complete: function() {
        // complete
      }
    }))
  },
  changeCollect:function(callback){
      //获取当前的isCollected值 false代表没有收藏 true代表已经收藏
      var isCollected = this.data.isCollected;
      //因为点击了，所以需要取反
      isCollected = !isCollected;
      //再将data的数据状态进行更新
      this.setData({
        isCollected:isCollected
      });
      callback;
  },
  /*音乐播放事件*/
  onMusicTap:function(){
      var isPlaying = this.data.isPlaying;
      if(isPlaying){
          this.audioCtx.pause();
      }else{
          this.audioCtx.play();
      };
      this.setData({isPlaying:!isPlaying});
  },
  onRequertTest:function(e){
    var that = this;
    wx.request({
      url: 'http://zhouxy.cn:3001/wxreq',
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      data:{param1:'zhouxy',param2:'1234567890'},
      header: { 'content-type': 'application/json'}, // 设置请求的 header
      success: function(res){
        console.log(res);
        that.setData({
          reqtest:res.data
        });
        console.log(that.data.reqtest);
      }
    })
  }
})