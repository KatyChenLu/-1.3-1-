<template>
  <view class="template-wave">

	<tn-nav-bar fixed alpha :isBack="false" >	
		语音房间		
	</tn-nav-bar>

    <view class="tn-padding-top-xs" :style="{paddingTop: vuex_custom_bar_height + 'px'}">

   <!--    <view class="dk-ban">
       	  <view class="dk-bantext" >
       		  按钮
       	  </view>
       	  </view> -->
	    <mescroll-body ref="mescrollRef" @down="downCallback" @up="upCallback">  
	  
	   	   <view class="tn-flex tn-flex-wrap tn-margin amount-input-box" >
			 <view class="amount-input-currency amount-input-currency-bg"> 
			 <text class="currency-text">房间号</text>			
	     </view>
		 		<input type="text" class="input-value" placeholder="请输入房间号直达"  @confirm="sendmsg" confirm-type="search" :adjust-position="true"
						:auto-blur="true" v-model="num" >
		
	     </view>
	   
	   
	   
	   
	     <!-- 比例 start-->
	     <view class="tn-flex tn-flex-wrap tn-margin-sm">
	       <block v-for="(item, index) in content" :key="index">
	         <view class="tn-padding-xs tn-padding-bottom " style="width: 50%;" @click="jinruroom(item.id)">			 
	   		  
	           <view class="tn-blogger-content__wrap dk-ban" style="border-radius: 10px;">
	   		
	   			
	   			 <tn-tag shape="circle" margin="10rpx 10rpx" padding="14px 41px" backgroundColor="#892fe8" >
	   				 <text class="tn-icon-voice-fill"></text>
	   				{{item.type}}					
	   				 </tn-tag>
	   		
	             <view class="tn-blogger-content__label  tn-padding-sm" style="height: 70px;">
	               <text class="tn-blogger-content__label__desc  dk-text-over2 ">{{ item.title }}</text>  
	             </view>
	             
	             <view class="tn-flex tn-flex-row-between tn-flex-col-center  tn-padding-right-sm tn-padding-bottom-sm" style="height: 35px;">
	               <view class="justify-content-item tn-flex tn-flex-col-center">
	                 <view style="margin-right: 10rpx;margin-left: 20rpx;">
	                   <tn-avatar-group :lists="item.viewUser.latestUserAvatar" size="sm"></tn-avatar-group>
	                 </view>
	                 <text class="tn-color-white tn-text-xs">{{ item.viewUser.viewUserCount }}人在线</text>
	               </view>
	             </view>
	             
	             
	           </view>
	         </view>
	       </block>
	     </view>
	  
	  </mescroll-body>
    </view>
		<login-fn :is-show-login="loginBoxFlag" @loginSuccessCallback="refreshFn" @close="closeGlobalLoginFn">
		</login-fn>

    <view class="tn-flex tn-footerfixeddd" @click="start()" v-if="zhubo">
      <view class="tn-flex-1 justify-content-item tn-margin-sm tn-text-center">
        <tn-button backgroundColor="#e7e700" padding="40rpx 0" width="34%" shadow fontBold >
		<text class="tn-color-black tn-icon-voice">开始直播</text>       
        </tn-button>		
      </view>	  
    </view>
	
	<view v-else class="tn-flex tn-footerfixed" @click="navigateToFn({ url: '/minePages/chat/room_reg', checkLogin: true })">
	  <view class="tn-flex-1 justify-content-item tn-margin-sm tn-text-center">
	    <tn-button backgroundColor="#e7e700" padding="40rpx 0" width="34%" shadow fontBold >
	 
	      <text class="tn-color-black tn-icon-add">申请派对房间</text>       
	    </tn-button>		
	  </view>	  
	</view>
	<!-- 登录框组件 -->
	<login-fn :is-show-login="loginBoxFlag" @loginSuccessCallback="refreshFn" @close="closeGlobalLoginFn">
	</login-fn>
	
  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  import NavIndexButton from '@/libs/components/nav-index-button.vue'
  
  import MescrollBody from '@/components/mescroll-uni/mescroll-body.vue';
  import MescrollUni from '@/components/mescroll-uni/mescroll-uni.vue';
  import MescrollMixin from '@/components/mescroll-uni/mescroll-mixins.js';
  export default {
  	name: 'TemplateGroup',
  	mixins: [template_page_mixin,MescrollMixin],
  	components: {
  		MescrollBody,NavIndexButton
  	},
 
    data(){
      return {
		  zhubo:false,
		  num:'',
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
		uni.$on("loginok",async (res)=>{		
		     	this.info() 
		  })		
			
			
	this.info()
		
	},
    methods: {	
		
		
		
		async info() {
			let that = this;		
			let result = await that.$request({
				loading: 0,
				method: 'post',
				url: '/api/chat/room_start',
				data: {
					
				}
			});		
							
			if (result.statusCode == 200) {
				if (result.data.code == 200) {	
					if (result.data.data=='审核中'){
						this.zhubo=true
					}
					if (result.data.data=='审核过了'){
						this.zhubo=true
					}					
				
				} else {
				this.msg(result.data.msg)
				}
			} 
		},
		
		
		
		
		jinruroom(id){
			console.log(id)
			// #ifdef APP-PLUS||H5
			
			this.navigateToFn({ url: '/minePages/chat/room_text?id='+id, checkLogin: true })
			// #endif
			
			// #ifdef MP
			console.log(id)
			this.navigateToFn({
				url: '/minePages/chat/room_text?id='+ id,
				checkLogin: true
			})
			// #endif				
		},
		
		
		
		async start() {			
		
			let that = this;		
			let result = await that.$request({
				loading: 0,
				method: 'post',
				url: '/api/chat/room_start',
				data: {
					
				}
			});		
							
			if (result.statusCode == 200) {
				if (result.data.code == 200) {
					
					
				if (result.data.data=='审核中'){
					this.msg('派对审核中')
				}
				if (result.data.data=='审核过了'){					
				that.jinruroom(result.data.msg)					
				}
				
				
				
				}
			} 
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
				url: '/api/index/roolist',
				data: {					
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
		},
		
      async sendmsg(){
		if (this.num==''){
			this.msg('请输入房号')
		}  
		let that = this;
		let result = await that.$request({
			loading: 1,
			method: 'post',
			url: '/api/index/searchparty',
			data: {
				id: that.num,				
			}
		});
		
		
		if (result.statusCode == 200) {
			if (result.data.code == 200) {
			this.navigateToFn({ url: '/minePages/chat/room_text?id='+this.num, checkLogin: true })
			 
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
	 color: #ffffff; 
    background-image: linear-gradient(to top, #4C3FAE 20%, #6E26BA 80%);
    width: 100vw;
	height: 100vh;  
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
  	  bottom: 80px;
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
  
  
  
  
  
  
</style>
