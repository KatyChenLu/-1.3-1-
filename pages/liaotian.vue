<template>
  <view class="template-wave" >

	<tn-nav-bar fixed  :isBack="true" >	
		附近聊天	
	</tn-nav-bar>

    <view class="tn-padding-top-xs" :style="{paddingTop: vuex_custom_bar_height + 'px'}">

	<!-- 底部tabbar start-->
		<view class=" footerfixed">
		<view class="tn-text-center" >
			<tn-tabs :list="scrollList" :itemWidth="150" :activeItemStyle="activeItemStyle" :current="current"
				@change="tabChange" :isScroll="false" activeColor="#5F4FD9" :bold="true" :fontSize="28">
			</tn-tabs>
		</view>
		
		</view>
		
		
	    <mescroll-body ref="mescrollRef" @down="downCallback" @up="upCallback" :style="{paddingTop: vuex_custom_bar_height+ 'px'}"> 
	<view :style="{paddingTop: vuex_custom_bar_height+ 'px'}"   v-for="(item, indexgift) in content" :key="indexgift"  class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin tn-bg-gray--light tn-padding">
	  <view class="justify-content-item" @click="navigateToFn({ url: '/circlePages/blogger_other?id='+item.id, checkLogin: false })">
	    <view class="tn-flex tn-flex-col-center tn-flex-row-left">
	      <view class="logo-pic ">
	        <view class="logo-image">
	         <tn-avatar  shape="circle" :src="item.avatar" size="lg">
	         </tn-avatar>	 
	        </view>
	      </view>
	      <view class="tn-padding-right tn-color-black">
	        <view class="tn-padding-right tn-padding-left-sm  tn-text-bold tn-color-black">
	          {{item.nickname}}
			  <text class="tn-icon-sex  tn-color-gray" v-if="item.sex==0"></text>
			  	<text class="tn-icon-sex-female tn-color-purplered" v-if="item.sex==2"></text>
			  	<text class="tn-icon-sex-male  tn-color-blue" v-if="item.sex==1"></text>
			  <text class="dk-lv tn-main-gradient-indigo--light" v-if="item.vip==0&&configInfo.is_lv">LV {{item.lv}}</text>
			  <text class="dk-vip tn-main-gradient-orangeyellow" v-if="item.vip==1"><text class="tn-icon-vip tn-color-black"
			  		style="font-size: 14px;margin-left: -5px;"></text>VIP{{item.vip_lv}}</text>
	        </view>
				  
	        <view  class="tn-padding-right tn-padding-top-xs tn-text-ellipsis tn-padding-left-sm tn-color-black">
	        <text  class="tn-color-gray tn-text-sm"  v-if="item.shengri">			
					{{item.shengri.age}}，{{item.shengri.animals}}，{{item.shengri.constellation}}				
			</text>	
				<text  class="tn-color-gray tn-text-sm"  v-else>
						{{item.dec}}				
				</text>
				
	        </view>
				  <view class="tn-padding-right tn-padding-top-xs tn-text-ellipsis tn-padding-left-sm tn-color-black">
				   <text  class="tn-color-gray tn-text-sm">{{item.distance}}km</text>			 
				   <text  class="tn-color-gray tn-text-sm tn-margin-left tn-text-ellipsis" v-if="item.city"> {{item.city}}人</text>			 
				  </view>
	      </view>
	    </view>
	  </view>
			<view  class="justify-content-item tn-flex-row-center" @click="navigateToFn({ url: '/minePages/chat/talk?toid='+item.id, checkLogin: true })">
			
			 <tn-button backgroundColor="tn-main-gradient-purple" size="sm"  margin="10rpx 10rpx" >
			 	聊天
			 </tn-button>
			</view>
			
	</view> 	  
	  </mescroll-body>
    </view>
		<login-fn :is-show-login="loginBoxFlag" @loginSuccessCallback="refreshFn" @close="closeGlobalLoginFn">
		</login-fn>	
		
		
		
	
		
		
  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  import MescrollBody from '@/components/mescroll-uni/mescroll-body.vue';
  import MescrollUni from '@/components/mescroll-uni/mescroll-uni.vue';
  import MescrollMixin from '@/components/mescroll-uni/mescroll-mixins.js';
  const sysinfo = uni.getSystemInfoSync()
  export default {
  	name: 'TemplateGroup',
  	mixins: [template_page_mixin,MescrollMixin],
  	components: {
  		MescrollBody
  	},
 
    data(){
      return {
		  zhongzhishpow:false,
		  zaicishow:false,
		  index:0,
		  jujue_body:'',
		  body:[],
		  renshishow:false,
		 current:0,
		  activeItemStyle: {
		  	fontSize: `28rpx`
		  },
		  scrollList: [{
		  		name: '全部'
		  	},
		  	{
		  		name: '只看男',
		  	},
		  	{
		  		name: '只看女',
		  	}
		  ],
		  type:0,
		  title:'',
		  user:[],
		  id:0,
		  screenHeight: sysinfo.screenHeight,
		  zhubo:false,
		  num:0,
		  loginBoxFlag:false,
		  content: []		  
	  }
    },
	onLoad(option) {
		let that=this
		uni.$off('setLoginBoxFlag');
		uni.$on('setLoginBoxFlag', loginBoxFlag => {
			that.loginBoxFlag = loginBoxFlag;
		});	
	
		
		// #ifdef APP-PLUS||H5
		
		uni.getLocation({
			type: 'gcj02',
			geocode: true,
			success: function(res) {
				uni.setStorageSync('latlng', res)
				console.log(res)
				that.mescroll.resetUpScroll();
			},
			fail: function(res) {
		
				console.log(res)
			}
		});
		// #endif
		
		// #ifdef MP		
		wx.getFuzzyLocation({
			type: 'wgs84',
			success(res) {
				uni.setStorageSync('latlng', res)
				that.mescroll.resetUpScroll();
		
			}
		})
		// #endif
		
		},
		methods: {	
			
		tabChange(index) {
			this.current = index
			this.mescroll.resetUpScroll()		
		},
		
		refreshFn(){
			
		},
		closeGlobalLoginFn(){
			this.loginBoxFlag = false;
		},
	
		/// 列表调用
		downCallback(mescroll) {
			mescroll.endSuccess();
			mescroll.resetUpScroll();
		},	
		
		
		
		
		async upCallback(mescroll) {		
			let that = this;
			if (!uni.getStorageSync('latlng')) {
				this.msg('请没有开启定位无法查看')
				return
			}
			
			let result = await that.$request({
				loading: 1,
				method: 'post',
				url:'/api/index/followList_fujin',
				data: {
					sex:this.current,
					latitude: uni.getStorageSync('latlng').latitude,
					longitude: uni.getStorageSync('latlng').longitude,					
					page: mescroll.num
				}
			});
			if (result.statusCode == 200) {
				if (result.data.code == 200) {					
				if (mescroll.num == 1) {			
					that.content = result.data.data.data;
				} else {
					that.content = that.content.concat(result.data.data.data);
				}
				mescroll.endSuccess(result.data.data.data.length,result.data.data.data.length >= mescroll.size);	
								
				} else {
					uni.showToast({
						icon: 'none',
						title: result.data.msg
					});
				}
			} else {
				uni.showToast({
					icon: 'none',
					title: that.$errorMsg
				});
			}
		}
	
    }
  }
</script>

<style lang="scss" scoped>

  .template-wave{

  }
  
  /* 底部悬浮按钮 start*/
  .tn-tabbar-height {
  	min-height: 100rpx;
  	height: calc(120rpx + env(safe-area-inset-bottom) / 2);
  }
  .tn-footerfixed {
  	  bottom: 100px;
  	  right: 0;	  
    position: fixed;
    width: 100%;  
    box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0);    
  }
  .tn-footerfixeddd {
  	  bottom: 150px;
  	  right: 0;	  
    position: fixed;
    width: 100%; 
    box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0);
  }
  /* 底部悬浮按钮 end*/
  
	input::placeholder{
		color:#DD5A5D;
		margin-top: 5px;
	}     
  @keyframes move_wave {
      0% {
          transform: translateX(0) translateZ(0) scaleY(1)
      }
      50% {
          transform: translateX(-25%) translateZ(0) scaleY(1)
      }
      100% {
          transform: translateX(-50%) translateZ(0) scaleY(1)
      }
  }
  .tnwave {
      overflow: hidden;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      margin: auto;
  }
  .tn-icon-voice-fill{
	     animation: msClock 1.2s linear infinite; 
    // animation: move 1.2s linear infinite;
    // -webkit-animation: move 1.2s linear infinite;
    // display: inline-block;
  }
   @keyframes msClock{ 
          0%,90%,100%{ transform: rotate(0) scale(1);}
          20%,40%{ transform: rotate(-15deg) scale(1.2);}
          30%,50%{ transform: rotate(15deg) scale(1.3);}
      }
  @keyframes move {
    100% {
      transform: rotate(360deg);
    }
  }

  .waveWrapperInner {
      position: absolute;
      width: 100%;
      overflow: hidden;
      height: 100%;
  }
  .wave {
      position: absolute;
      left: 0;
      width: 200%;
      height: 100%;
      background-repeat: repeat no-repeat;
      background-position: 0 bottom;
      transform-origin: center bottom;
  }
  
  .bgTop {
      opacity: 0.4;
  }
  .waveTop {
      background-size: 50% 45px;
  }
  .waveAnimation .waveTop {
    animation: move_wave 4s linear infinite;
  }
  
  .bgMiddle {
      opacity: 0.6;
  }
  .waveMiddle {
      background-size: 50% 40px;
  }
  .waveAnimation .waveMiddle {
      animation: move_wave 3.5s linear infinite;
  }
  
  .bgBottom {
      opacity: 0.95;
  }
  .waveBottom {
      background-size: 50% 35px;
  }
  .waveAnimation .waveBottom {
      animation: move_wave 2s linear infinite;
  }
  
  
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
          border-radius: 30%;
          font-size: 50rpx;
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
            background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg5.png);
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
          right: 0upx;
          top: 50upx;
          font-size: 100upx;
          width: 108upx;
          height: 108upx;
          text-align: center;
          line-height: 60upx;
          opacity: 0.15;  
        }
      }
    }
  }
  /* 业务展示 end */
  .image-music{
    padding: 100rpx 0rpx;
    font-size: 16rpx;
    font-weight: 300;
    position: relative;
  }
  .image-pic{
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
    border-radius: 10rpx 20rpx 0 0;
  }
  
  
  
  
  
  .dk-ban {
    
      border-radius: 0.3125rem;
      background-color: rgba(0, 0, 0, 0.6);
	   color: rgba(255, 255, 255, 0.8);
  }

.dk-bantext {
    color: rgba(255, 255, 255, 0.6);
    background: rgba(216, 216, 216, 0.08);
    border-right: 0.0625rem solid rgba(255, 255, 255, 0.1);
    min-width: 7.3rem;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    cursor: pointer;
    padding: 0px 10px;
}
  
  //、输入框
.amount-input-box {
      position: relative;
      height: 30px;
  }
 .amount-input-currency-bg {
      border-radius: 4px 0 0 4px;
      background: #0d131d;
  }
.amount-input-currency {
      width: 52px;
      height: 28px;
      position: absolute;
      top: 1px;
      left: 1px;
      z-index: 99;
  }
 .amount-input-box .amount-input-currency-bg .currency-text {
      background: linear-gradient(282deg,#519fff 15.69%,#a25fff);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
	  width: 42px;	 
		 font-size: 14px;
	      position: absolute;
	      top: 4px;
	      left: 10px;
	      text-align: left;
  }
  
.amount-input-box .input-value {
		width:100%;
	    height: 100%;
	    padding-left: 50px;
	    font-size: 14px;
	    font-weight: 600;
	    text-indent: 6px;
		border-radius: 4px;
	    transition: 0.5s ease-in-out;
		color: #ffffff;
      background-color: #0c0c0e;
      border: 1px solid rgba(170,175,201,0.8);  
      background-color: #040404;
      border: 1px solid transparent;
      background-image: linear-gradient(#040404,#040404),linear-gradient(282deg,#519fff 15.69%,#a25fff);
      background-origin: border-box;
      background-clip: content-box,border-box;
      box-shadow: 0px 0px 10px rgba(125,46,255,0.78);
  }
  //、、、、
  
  
  /* 底部tabbar start*/
  .footerfixed{
   position: fixed;
   width: 100%;
   top:50;
   z-index: 999;
   	background-color: #FFFFFF;
  }
  
  .tabbar {
    display: flex;
    align-items: center;
    min-height: 110rpx;
    justify-content: space-between;
  	padding: 0;
  	height: calc(110rpx + env(safe-area-inset-bottom) / 2);
  	padding-bottom: calc(env(safe-area-inset-bottom) / 2);
  }
  
  .tabbar .action {
  	font-size: 22rpx;
  	position: relative;
  	flex: 1;
  	text-align: center;
  	padding: 0;
  	display: block;
  	height: auto;
  	line-height: 1;
  	margin: 0;
  	overflow: initial;
  }
  
  .tabbar .action .bar-icon {
  	width: 100rpx;
  	position: relative;
  	display: block;
  	height: auto;
  	margin: 0 auto 10rpx;
  	text-align: center;
  	font-size: 42rpx;
  }
  
  .tabbar .action .bar-icon image {
  	width: 50rpx;
  	height: 50rpx;
  	display: inline-block;
  }
  
  
  
  
</style>
