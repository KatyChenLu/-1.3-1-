<template>
   <view class="template-wave">
	<tn-nav-bar fixed alpha customBack>
		<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
			<text class='icon tn-icon-left'></text>
			<text class='icon tn-icon-home-capsule-fill' @click="gohome"></text>
		</view>
	</tn-nav-bar>
	
		 
		  <view class='nav-list'  :style="{paddingTop: vuex_custom_bar_height + 'px'}">
		  
		      <view		       	       
		        class="nav-list-item tn-shadow-blur tn-cool-bg-image tn-cool-bg-color-6"		       
		      style="height: 200rpx;" @click="yuyin()">
		        <view class="nav-link" style="margin-top:-30rpx;margin-left:-20rpx;">
		          <view class='title'>语音匹配</view>
		      
		        </view>
		        <view class="icon " style="margin-top: 70rpx;margin-left: 20rpx;">
		          <view class="tn-icon-voice-fill" style="font-size: 100rpx;"></view>
		        </view>
		      </view>
		  
		  <view
		    class="nav-list-item tn-shadow-blur tn-cool-bg-image tn-cool-bg-color-2"		       
		  style="height: 200rpx;" @click="linghun()">
		    <view class="nav-link" style="margin-top:-30rpx;margin-left:-20rpx;">
		      <view class='title'>灵魂匹配</view>
		  
		    </view>
		    <view class="icon " style="margin-top: 70rpx;margin-left: 20rpx;">
		      <view class="tn-icon-team-fill" style="font-size:100rpx;"></view>
		    </view>
		  </view>
		  
		  
		  <view
		    class="nav-list-item tn-shadow-blur tn-cool-bg-image tn-cool-bg-color-3"		       
		  style="height: 200rpx;" @click="navigateToFn({ url: '/homePages/party', checkLogin: true })">
		    <view class="nav-link" style="margin-top:-30rpx;margin-left:-20rpx;">
		      <view class='title'>语音派对</view>
		  
		    </view>
		    <view class="icon " style="margin-top: 70rpx;margin-left: 20rpx;">
		      <view class="tn-icon-emoji-good" style="font-size:100rpx;"></view>
		    </view>
		  </view>	
				
		  </view>		  
		  
		  
		<view class="" >
							<view class="tn-flex tn-flex-row-between">
								<view class="justify-content-item tn-margin tn-text-bold tn-text-xl tn-color-white">
									AI匹配最合适你的那个TA
								</view>
								<!-- <view class="tn-margin" style="font-size: 50rpx;">
		  <text class="tn-icon-data"></text>
		</view> -->
							</view>
						</view>
		
						<view class="tn-margin-left tn-text-sm tn-color-gray" style="margin-top: -25rpx;">
							<text>左滑不喜欢，右滑喜欢，并自动发送一条打招呼！</text>
						</view>
	   	  <tantan :list="list" @onChange="change" @onClickImage="clickImage"></tantan>
  
  
  <view class="tn-margin-left tn-margin-right">
  <view class="tn-flex ">
    <view class="tn-flex-1 justify-content-item tn-margin-sm tn-text-center" @click="navigateToFn({ url: '/minePages/edit', checkLogin: true })">
      <tn-button shape="round" backgroundColor="#FFF00D" padding="40rpx 0" width="60%" shadow fontBold >
        <text class="tn-icon-light tn-padding-right-xs tn-color-black"></text>
        <text class="tn-color-black">完善信息</text>
        <text class="tn-icon-light tn-padding-left-xs tn-color-black"></text>
      </tn-button>
    </view>
  </view>
   
  </view>
  
  
  
  
  <tn-modal width="80%" v-model="qiyushow" backgroundColor="tn-main-gradient-purplered--reverse" padding="30rpx 20rpx" :radius="25"
  	title="设置" :showCloseBtn="true"  :maskCloseable="false" :zoom="true" :custom="true">
  
  	<view class="custom-modal-content tn-padding-sm ">
  	<view  class="tn-flex tn-flex-row-center" >
  	
  				
  		<view  class="justify-content-item tn-padding-sm tn-text-center tn-margin-xs tn-radius bg-flex-shadow  tn-shadow-blur">		
  		<view class="justify-content-item tn-padding">
  		<tn-avatar size="xl" :src="userbody.avatar"></tn-avatar>
  		<view class="tn-text-center tn-color-white tn-text-bold tn-text-xl">{{userbody.nickname}}</view>
		<view class="tn-text-center tn-color-white">{{userbody.info.age}} {{userbody.info.constellation}} {{userbody.tizhong}} {{userbody.shengao}}</view>
		<view class="tn-text-center tn-color-white">{{userbody.zhiye}}</view>
		<view class="tn-text-center tn-color-white">{{userbody.dec}} </view>
  		</view>
		
		<tn-button  @click="navigateToFn({ url: '/minePages/chat/talk?toid='+userbody.id+'&toname='+userbody.nickname, checkLogin: true })" shape="round" backgroundColor="tn-cool-bg-color-4" padding="40rpx 0" width="100%" shadow fontBold >
		  
		  <text class="tn-color-black">立即私聊</text>
	
		</tn-button>
		
  		</view>
		
		
		
  		
  	</view>
  		
  
  	</view>
  </tn-modal>
  
  
  
  
  <tn-modal width="80%" v-model="pipeishow" backgroundColor="#E4E9EC" padding="30rpx 80rpx" :radius="25"
  		title="正在匹配中"  :showCloseBtn="false" :maskCloseable="false" :zoom="true"
  		:custom="true" >
  		<view class="custom-modal-content tn-padding-sm ">
  			<view class="tn-text-center tn-color-black" style="font-size: 14px;">
  				系统正在为你匹配
  			</view>
  			<view class=" tn-text-center tn-padding-sm">
  				<tn-loading show="show" :size="80" color="#aa00ff"></tn-loading>
  			</view>
  			<view class="tn-text-center tn-padding-top" @click="quxiaopipei()">
  		
  				<tn-button :fontSize="28" padding="20rpx" height="56rpx" backgroundColor="tn-cool-bg-color-3"
  					fontColor="tn-color-white">取消匹配</tn-button>
  			</view>				
  		</view>		
  	</tn-modal>
  
  
  
  
  </view>
</template>

<script>
import tantan from '@/friendPages/dgex-tantan/dgex-tantan.vue'
export default {
  components: {
    tantan
  },
  data() {
    return {
		pipeishow:false,
	 page:1,
	 qiyushow:false,
	 user_id:0,
      list: [],
	  userbody:{"info":[]}
    }
  },
  onLoad(option) {	  
  	this.info()  
	this.user_id= uni.getStorageSync('user_id')
  },

  methods: {
	  
	yuyin(){
		// #ifdef APP
		this.navigateToFn({ url: '/friendPages/pipei', checkLogin: true })
		// #endif
		// #ifndef APP
		this.msg('请下载APP体验')
		// #endif
	},
	  
	  
	  
	  
	  
	   async linghun(){
		   this.pipeishow=true
	    setTimeout(() => {	 
		this.pipeishow=false	
	    this.linghunpass()
	    }, 3000);
		},
	  
	  async linghunpass(){
		  let that = this;
		  let result = await that.$request({
		  	loading:0,
		  	method: 'post',
		  	url: '/api/four/userMatch',
		  	data: {
		  		
		  	}
		  });	  
		  	  
		  if (result.statusCode == 200) {
		  	if (result.data.code == 200) {				
		  			  this.qiyushow=true
					  this.userbody=	result.data.data			  
		  	} 
			else if (result.data.msg== '当前无人在线') {
					this.msg(result.data.msg)		  
			} 
			else{
				let that = this
				uni.showModal({
					title: '提示',
					content: result.data.msg,
					confirmText: '去完善',
					success: function(res) {
						if (res.confirm) {									
							uni.navigateTo({
								url: '/minePages/edit'
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			
			}
		  } else {
		  	uni.showToast({
		  		icon: 'none',
		  		title: that.$errorMsg
		  	});
		  }
		  	  
	
	  },
	  
	  async info() {
	  	let that = this;
	  	let result = await that.$request({
	  		loading:0,
	  		method: 'post',
	  		url: '/api/index/pipei',
	  		data: {
				page:that.page,
			}
	  	});	  
	  
	  	if (result.statusCode == 200) {
	  		if (result.data.code == 200) {				
	  			if (that.page == 1) {
	  				that.list = result.data.data.data;
	  			} else {
	  				that.list = that.list.concat(result.data.data.data);
	  			}				  		
	  		} 
	  	} else {
	  		uni.showToast({
	  			icon: 'none',
	  			title: that.$errorMsg
	  		});
	  	}
	  
	  
	  },
	  
	  
	  
	  
	  goBack() {
	    // 通过判断当前页面的页面栈信息，是否有上一页进行返回，如果没有则跳转到首页
	    const pages = getCurrentPages()
	    if (pages && pages.length > 0) {
	      const firstPage = pages[0]
	      if (pages.length == 1 && (!firstPage.route || firstPage.route != 'pages/index')) {
	        uni.reLaunch({
	          url: '/pages/index'
	        })
	      } else {
	        uni.navigateBack({
	          delta: 1
	        })
	      }
	    } else {
	      uni.reLaunch({
	        url: '/pages/index'
	      })
	    }
	  },
	  
	  gohome() {	
	      uni.reLaunch({
	        url: '/pages/index'
	      })	 
	  },
	  
	  
    change(data) {
      // 判断倒数
      if (data.currentIndex > this.list.length - 5) {		
			this.page++;
			this.info()        
      }
	  if (data.type=='love'){		  
		  let message = '{"data":"你好呀，认识你是一种缘分，可以认识你吗？","sec":"0","type":"text","toid":"' + data.currentItem.id + '","fromid":"' +this.user_id + '"}';
		  	this.save_message(message);		  
	  }
 
    },
    clickImage(data) {
    this.navigateToFn({ url: '/circlePages/blogger_other?id='+data.currentItem.id, checkLogin: true })
		
    },
		
	async save_message(datassd) {
		let that = this;
		this.$socket.send(datassd);
		let result = await that.$request({
			loading: 0,
			method: 'post',
			url: '/api/chat/save_message',
			data: datassd
		});
	
	},
	
	
	
  }
}
</script>
<style lang="scss" scoped>

  .template-wave{
  position: relative;
  background-color: #000000;
  width: 100vw;
  height: 100vh;
  }
  
  /* 组件导航列表 start*/
  .nav-list {
    display: flex;
  
    padding: 0rpx 12rpx 0rpx;
    justify-content: space-between;
    
    /* 列表元素 start */
    .nav-list-item {
      padding: 35rpx 30rpx 5rpx 30rpx;
      border-radius: 12rpx;
      width: 33%;
      margin: 0 18rpx 40rpx;
      background-size: cover;
      background-position: center;
      position: relative;
      z-index: 99;
      
      
      
      /* 元素标题 start */
      .nav-link {
        font-size: 32rpx;
        text-transform: capitalize;
        padding: 0 0 10rpx 0;
        position: relative;
        
        .title {
          font-weight: bold;
          font-size: 36rpx;
          color: #FFFFFF;
          margin-top: 30rpx;
          text-align: center;
        }
        .author {
          font-size: 25rpx;
          color: #FFFFFF;
          margin-top: 50rpx;
          margin-left: -10rpx;
          text-align: center;
        }
      }
      /* 元素标题 end */
      
      /* 元素图标 start */
      .icon {
        font-variant: small-caps;
        position: absolute;
        top: 20rpx;
        right: 50rpx;
        left: 37%;
        width: 90rpx;
        height: 90rpx;
        line-height: 90rpx;
        margin: 0;
        padding: 0;
        display: inline-flex;
        text-align: center;
        justify-content: center;
        vertical-align: middle;
        font-size: 50rpx;
        color: #FFFFFF;
        white-space: nowrap;
        opacity: 0.9;
     
        background-size: cover;
        background-position: 50%;
        border-radius: 5000rpx;
      }
      /* 元素图标 end */
    }
    /* 列表元素 end */
  }
  /* 组件导航列表 end*/
  
  /* 业务展示 start */
  .tn-info {
    
    &__container {
      margin-top: 10rpx;
      margin-bottom: 50rpx;
    }
    
    &__item {
      width: 48%;
      margin: 15rpx 0rpx;
      padding: 40rpx 30rpx;
      border-radius: 15rpx;
      
  
        position: relative;
        z-index: 1;
        
        &::after {
          content: " ";
          position: absolute;
          z-index: -1;
          width: 100%;
          height: 100%;
          left: 0;
          bottom: 0;
          border-radius: inherit;
          opacity: 1;
          transform: scale(1, 1);
          background-size: 100% 100%;
         
        }
      
      &__left {
        
        &--icon {
          width: 80rpx;
          height: 80rpx;
          border-radius: 50%;
          font-size: 40rpx;
          margin-right: 20rpx;
          position: relative;
          z-index: 1;
          
          &::after {
            content: " ";
            position: absolute;
            z-index: -1;
            width: 100%;
            height: 100%;
            left: 0;
            bottom: 0;
            border-radius: inherit;
            opacity: 1;
            transform: scale(1, 1);
            background-size: 100% 100%;
          
          }
        }
        
        &__content {
          font-size: 30rpx;
          
          &--data {
            margin-top: 5rpx;
            font-weight: bold;
          }
        }
      }
      
      &__right {
        &--icon {
          position: absolute;
          right: 0rpx;
          top: 50rpx;
          font-size: 100rpx;
          width: 108rpx;
          height: 108rpx;
          text-align: center;
          line-height: 60rpx;
          opacity: 0.15;  
        }
      }
    }
  }
  /* 业务展示 end */
  </style>