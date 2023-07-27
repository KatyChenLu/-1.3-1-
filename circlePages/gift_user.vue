<template>
  <view class="template-wave" :style="'min-height:' + screenHeight + 'px;'">

	<tn-nav-bar fixed alpha :isBack="true" >	
		礼物列表		
	</tn-nav-bar>

    <view class="tn-padding-top-xs " :style="{paddingTop: vuex_custom_bar_height + 'px'}"> 

   <!--    <view class="dk-ban">
       	  <view class="dk-bantext" >
       		  按钮
       	  </view>
       	  </view> -->
	    <mescroll-body ref="mescrollRef" @down="downCallback" @up="upCallback"> 
	     <!-- 比例 start-->
		 <view class="tn-margin-top-sm">
		 <!-- 图标logo/头像 -->
		 <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-bottom">
		 	<view class="justify-content-item">
		 		<view class="tn-flex tn-flex-col-center tn-flex-row-left">
		 			<view class="logo-pic tn-shadow">
		 				<view class="logo-image">
		 					<view class="tn-shadow-blur"
		 						:style="'background-image:url('+user.avatar+');width: 110rpx;height: 110rpx;background-size: cover;'">
		 					</view>
		 				</view>
		 			</view>
		 			<view class="tn-padding-right">
		 				<view class="tn-padding-right tn-padding-left-sm tn-text-xl tn-text-bold">
		 					<text class="tn-color-white">{{user.nickname}}</text>
		 					<text class="dk-lv tn-main-gradient-indigo--light" v-if="user.vip==0&&configInfo.is_lv">LV {{user.lv}}</text>
		 					<text class="dk-vip tn-main-gradient-orangeyellow" v-if="user.vip==1"><text class="tn-icon-vip tn-color-black"
		 							style="font-size: 14px;margin-left: -5px;"></text>VIP{{user.vip_lv}}</text>
		 					
		 				</view>
		 				<view class="tn-padding-right tn-padding-top-xs tn-padding-left-sm tn-text-ellipsis">
		 					<text class="tn-color-white" style="font-size:12px;">IP属地:{{user.city}}
		 					</text>
		 				</view>
		 			</view>
		 		</view>
		 	</view>
		 </view>
		 </view>
		 
		 
		
		 
	  <view class="tn-flex tn-flex-wrap  tn-margin-bottom-sm  tn-margin-top-xs">
	  	
	  			<block v-for="(item, indexgift) in content" :key="indexgift">
					
	  				<view style="background-color: #ffffff36; width: 30%;" class="  tn-padding-xl tn-text-center tn-margin-xs tn-radius">
	  					<view
	  						class=" tn-flex-direction-column " style="text-align: center;
	  align-items: center;">
	  	<image class=""  :src="item.gift_img" style="width: 60px; height: 60px;">
	  						</image>		
	  						<view class="tn-color-black tn-text-center  ">
	  							<text class="tn-text-ellipsis tn-color-gray">{{item.title}} x {{item.gift_num}}
								</text>
	  						</view>
	  					</view>
	  				</view>
	  			</block>
				
	  		</view>
	  
	  </mescroll-body>
    </view>
		<login-fn :is-show-login="loginBoxFlag" @loginSuccessCallback="refreshFn" @close="closeGlobalLoginFn">
		</login-fn>

<!--    <view class="tn-flex tn-footerfixeddd" @click="start()" >
      <view class="tn-flex-1 justify-content-item tn-margin-sm tn-text-right">
        <tn-button backgroundColor="#e7e700" padding="40rpx 0" width="34%" shadow fontBold >
		<text class="tn-color-black tn-icon-gift">赠送礼物</text>       
        </tn-button>		
      </view>	  
    </view>
	 -->

	
  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  import NavIndexButton from '@/libs/components/nav-index-button.vue'
  
  import MescrollBody from '@/components/mescroll-uni/mescroll-body.vue';
  import MescrollUni from '@/components/mescroll-uni/mescroll-uni.vue';
  import MescrollMixin from '@/components/mescroll-uni/mescroll-mixins.js';
  const sysinfo = uni.getSystemInfoSync()
  export default {
  	name: 'TemplateGroup',
  	mixins: [template_page_mixin,MescrollMixin],
  	components: {
  		MescrollBody,NavIndexButton
  	},
 
    data(){
      return {
		  user:[],
		  id:0,
		  zhubo:false,
		  num:'',
		    screenHeight: sysinfo.screenHeight,
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
		
		if (option.id) {
				this.id = option.id
			}
		
	},
    methods: {	
		
		
	
		
		
		
		
		jinruroom(id){
			// #ifdef APP-PLUS
			this.navigateToFn({ url: '/minePages/chat/room?id='+id, checkLogin: true })
			// #endif
			// #ifndef APP-PLUS		
			console.log(id)
			this.navigateToFn({
				url: '/minePages/chat/room_text?id='+ id,
				checkLogin: true
			})
			// #endif				
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
			let result = await that.$request({
				loading: 1,
				method: 'post',
				url: '/api/gift/gift_user',
				data: {	
					user_id:this.id,
					page: mescroll.num
				}
			});
			if (result.statusCode == 200) {
				if (result.data.code == 200) {
					
				if (mescroll.num == 1) {
					that.user= result.data.data.userInfo;
					that.content = result.data.data.gift.data;
				} else {
					that.content = that.content.concat(result.data.data.gift.data);
				}
				mescroll.endSuccess(result.data.data.gift.data.length,result.data.data.gift.data.length >= mescroll.size);	
								
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
		},
		
      sendmsg(){
		if (this.num==''){
			this.msg('请输入房号')
		}  
		
		this.navigateToFn({ url: '/minePages/chat/room?id='+this.num, checkLogin: true })
		  
	  }
    }
  }
</script>

<style lang="scss" scoped>

  .template-wave{
 color: #ffffff; 
 background-image: linear-gradient(to top, #4C3FAE 20%, #6E26BA 80%);
width: 100vw;
min-height: 100rpx;
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
  
  
  /* 用户头像 start */
  .logo-image {
  	width: 110rpx;
  	height: 110rpx;
  	position: relative;
  }
  
  .logo-pic {
  	background-size: cover;
  	background-repeat: no-repeat;
  	// background-attachment:fixed;
  	background-position: top;
  	border: 8rpx solid rgba(255, 255, 255, 0.05);
  	box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
  	border-radius: 50%;
  	overflow: hidden;
  	// background-color: #FFFFFF;
  }
  
  /* 页面 start*/
  .about-shadow {
  	border-radius: 15rpx;
  	box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
  }
  
  
  
  
</style>
