<template>
  <view class="template-product tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'>
        <text class='icon tn-icon-left' @click="goBack"></text>
       	<text class='icon tn-icon-home-capsule-fill' @click="gohome"></text>
      </view>
    </tn-nav-bar>
    
    <swiper class="card-swiper" :circular="true"
      :autoplay="true" duration="500" interval="5000" @change="cardSwiper"> 
      <swiper-item v-for="(item,index) in body.images" :key="index" :class="cardCur==index?'cur':''">
        <view class="swiper-item image-banner">
          <image :src="item" mode="aspectFill" ></image>
        </view>
      </swiper-item>
    </swiper>
    <view class="indication">
        <block v-for="(item,index) in body.images" :key="index">
            <view class="spot" :class="cardCur==index?'active':''"></view>
        </block>
    </view>
    
    <view class="tn-margin">
      <view class="tn-flex tn-flex-row-between">
        <view class="justify-content-item tn-text-bold tn-text-xxl">
         {{body.goods_name}}
        </view>
      </view>
      <view class="tn-flex tn-flex-row-between tn-margin-top" v-if="body.is_guige==0">
        <view class="justify-content-item tn-text-bold tn-color-red">
            <text class="tn-text-sm">￥</text>
		  <text class="" style="font-size: 50rpx;"> {{body.shop_price}}</text>
           <text class="tn-text-sm tn-color-gray tn-margin-left-sm" style="font-size: 14px;text-decoration: line-through;">原价：{{body.market_price}}</text>
        </view>
        <view class="justify-content-item tn-color-gray tn-padding-top-xs">
          <view class="">已售  {{body.buy_no}}</view>
        </view>
		<view class="justify-content-item tn-color-gray tn-padding-top-xs">
		  <view class="">库存  {{body.store_count}}</view>
		</view>
      </view>
    </view>
	<view class=" tn-text-bold  clamp-text-1 tn-text-justify tn-margin " v-if="body.is_guige==1">
	请选择套餐<text class="tn-color-red">*</text>
	</view>
	<view class=" "  v-if="body.is_guige==1">
	<block v-for="(item, indexsdsdf) in body.spec.spec_goods_price" :key="indexsdsdf">
	
	  <tn-list-cell :hover="true" :arrowRight="true" :unlined="true" :radius="true" :fontSize="34"  >
	    <view class="tn-flex tn-flex-col-center">
	      <view class="tn-flex-1">{{item.key_name}} </view>
		  <view class="tn-margin-left-sm" style="font-size: 14px;text-decoration: line-through;">￥{{item.market_price}}</view>
	      <view class="tn-margin-left-sm" style="font-size: 14px;color: red;">￥{{item.shop_price}}元</view>
	      <view class="tn-margin-left-sm" @click="goumai(item,indexsdsdf)"><tn-button shape="round" backgroundColor="#ffeb0e" fontColor="#080808">购买</tn-button></view>
	    </view>
	  </tn-list-cell>
	  
	  </block>
	</view>

	
	
	
    <view class="tn-strip-bottom"></view>
    <view class="tn-margin">
      <view class="tn-flex tn-flex-row-between">
        <view class="justify-content-item tn-text-bold tn-text-xl">
          详情
        </view>
      </view>
    </view>
    
    <view class="content-backgroup tn-margin">
   	<mp-html :content="body.goods_content" />
    </view>
    

   
   
    
    
    
  
  <view  class="footerfixed dd-glass tn-padding-left-sm tn-padding-right tn-padding-top-xs tn-padding-bottom-sm" v-if="body.is_guige==0">
  	<view class="tn-goods-nav-class tn-goods-nav tn-safe-area-inset-bottom" style="z-index: 20089;">
  		<view class="options" @click="kefu()">
  			<view class="options__item">
  				<view class="options__item__icon tn-icon-my">
  				</view>
  				<view class="options__item__text">联系客服</view>
  			</view>
  		</view>
  		<view class="buttons" @click="onButtonClick()">
  			<view class="buttons__item  buttons__item--round"
  				style="background-color: rgb(85, 170, 127); color: rgb(255, 255, 255);">
  				<view data-v-4d4efb9c="" class="buttons__item__text">立即购买</view>
  			</view>
  		</view>
  	</view>
  </view>
    <view class='tn-tabbar-height'></view>
    
	
	<tn-popup v-model="tanchushow" width="80%" mode="bottom" backgroundColor="" :borderRadius="30"
		:closeBtn="true" :maskCloseable="true" @close="closedPopup">
	
		<view class="article-shadow tn-margin-sm">
			<view class="tn-flex">
				<view class="image-pic tn-margin-sm">
					<view class="image-article" style="width: 100px;height: 80px;">
						<image :src="img" mode="aspectFill" style="width: 100px;height: 80px;">
						</image>
					</view>
				</view>
				<view class="tn-margin-sm tn-padding-top-xs" style="width: 100%;">
					<view class="clamp-text-2" style="height: 40px;">
						{{ body.goods_name}}
					</view>
					<view class="tn-flex tn-flex-row-between tn-flex-col-between"
						style="margin-top: 10px;">
						<text class="tn-tag-content __item--prefix tn-color-red tn-text-bold">￥{{ body.shop_price}}</text>
					</view>
				</view>
			</view>	
			<view
				class="tn-bg-white tn-flex tn-flex-row-between  tn-padding-left-sm tn-padding-right-sm">
				<view class="justify-content-item tn-text-bold">
					<text class="">购买数量</text>
				</view>
	
				<view class="justify-content-item tn-color-gray tn-padding-right-sm ">
					<view class="">
						<tn-number-box v-model="num" :min="1" :longPress="false" @change="change" :max="body.store_count" backgroundColor="#d9d9d9" fontColor="#000000">	
						</tn-number-box>
					</view>
				</view>
			</view>
	
			<view
				class="tn-bg-white tn-flex tn-flex-row-between  tn-padding-bottom  tn-padding-left-sm tn-padding-right-sm">
				<view class="justify-content-item tn-text-bold">
					<text class="">总价格：￥</text>
					<text class="">{{body.shop_price*num}}</text>
				</view>
			</view>
			<view v-if="body.is_guige==1"
				class="tn-bg-white tn-flex tn-flex-row-between  tn-padding-bottom  tn-padding-left-sm tn-padding-right-sm">
				<view class="justify-content-item tn-text-bold">
					<text class="">套餐：</text>
					<text class="">{{guige}}</text>
				</view>
			</view>
		</view>	
		<view class="tn-padding-left-sm tn-padding-right-sm " @click="jiesuan()">
			<tn-button :shadow="true" width="100%" height="100rpx" backgroundColor="#55aa7f"
				fontColor="#FFFFFF" margin="10rpx 0">去结算</tn-button>
		</view>
	</tn-popup>
	<login-fn :is-show-login="loginBoxFlag" @loginSuccessCallback="refreshFn" @close="closeGlobalLoginFn">
	</login-fn>
	
  </view>
</template>

<script>

  export default {
    name: 'TemplateProduct', 
    data(){
      return {
		  user_id:0,
		  taocan:0,
		  currentColorIndex:0,
		  img:'',
		  num:1,
		 tanchushow:false,
		id:270,
		body:[],
		guige:'',
        cardCur: 0,
        swiperList: [],
        current: 0,
        fixedList: [],
        content: [],
        content2: [],
        content3: [],       
        tagList: [ ],
		loginBoxFlag:false,
      }
    },
	onLoad(option) {
		if (option.id){
			this.id=option.id
		}
		if (option.user_id){
			this.user_id=option.user_id
		}	
	
		this.info()
		uni.$off('setLoginBoxFlag');
		uni.$on('setLoginBoxFlag', loginBoxFlag => {
			this.loginBoxFlag = loginBoxFlag;
		});
	},
    methods: {
		
		kefu(){
			this.navigateToFn({
				url: '/minePages/chat/talkkefu?toid=1&toname=官方客服',
				checkLogin: true
			})
		},
		
		goumai(item,index){
			this.body.shop_price=item.shop_price
			this.guige=item.key_name
			this.taocan=index
			this.tanchushow=true
		},
		goBack() {
		
			this.isplay = false
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
			
			pickerColorClick(index) {
					  console.log(index)
			  if (index === this.currentColorIndex) {
			    return
			  }
			  this.currentColorIndex = index  
			},
			gohome() {	
		
			this.isplay = false
			    uni.reLaunch({
			      url: '/pages/index'
			    })	 
			},
		async info() {
			let that = this;
			let result = await that.$request({
				loading: 0,
				method: 'post',
				url: '/api/shop/shopDetail',
				data: {
					goods_id:that.id
				}
			});
		
		
			if (result.statusCode == 200) {
				if (result.data.code == 200) {
					that.img=result.data.data.detail.images[0]
					that.swiperList=result.data.data.images
					that.body=result.data.data.detail
				
					
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
		closedPopup() {
			this.tanchushow = false
		},
		onButtonClick() {
				
		
			if (this.body.taobao_url){		
				this.navigateToFn({ url: '/pages/url?url='+this.body.taobao_url, checkLogin: false })
				return
			}
			
		
			
			
			if (!uni.getStorageSync('token')) {
				this.loginBoxFlag = true
				return false;
			} 
			this.tanchushow = true
		},
		jiesuan() {
			
			 
				this.navigateToFn({
					url: '/shopPages/jiesuan?user_id='+this.user_id+'&taocan='+this.taocan+'&num=' + this.num + '&id=' + this.id,
					checkLogin: true
				})
				
				
				
		},
		change(){
			console.log(3333)
			//this.num=e
		},
      // cardSwiper
      cardSwiper(e) {
        this.cardCur = e.detail.current
      },
      // 跳转
      tn(e) {
      	uni.navigateTo({
      		url: e,
      	});
      },
      // tab选项卡切换
      tabChange(index) {
        this.current = index
      },
      getRandomCoolBg() {
        return this.$t.colorUtils.getRandomCoolBgClass()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .template-product{
  }
  .tn-tabbar-height {
  	min-height: 120rpx;
  	height: calc(140rpx + env(safe-area-inset-bottom) / 2);
  }
  
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
    box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
    border-radius: 10rpx;
    overflow: hidden;
    // background-color: #FFFFFF;
  }
  
  /* 胶囊*/
  .tn-custom-nav-bar__back {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 1000rpx;
    border: 1rpx solid rgba(255, 255, 255, 0.5);
    color: #FFFFFF;
    font-size: 18px;
    
    .icon {
      display: block;
      flex: 1;
      margin: auto;
      text-align: center;
    }
    
    &:before {
      content: " ";
      width: 1rpx;
      height: 110%;
      position: absolute;
      top: 22.5%;
      left: 0;
      right: 0;
      margin: auto;
      transform: scale(0.5);
      transform-origin: 0 0;
      pointer-events: none;
      box-sizing: border-box;
      opacity: 0.7;
      background-color: #FFFFFF;
    }
  }
  .tn-shadow-blurddd{
   border: 2px solid black;
  }
  /* 底部tabbar start*/
  .footerfixed {
  	position: fixed;
  	width: 100%;
  	bottom: 0;
  	z-index: 999;
  	background-color: #FFFFFF;
  	box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
  }
  /* 毛玻璃*/
  .dd-glass {
  	width: 100%;
  	backdrop-filter: blur(20rpx);
  	-webkit-backdrop-filter: blur(20rpx);
  }
  .tn-goods-nav {
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 88rpx;
    width: 100%;
    box-sizing: content-box;
    
    &--shadow {
      box-shadow: 0rpx -10rpx 30rpx 0rpx rgba(0, 0, 0, 0.05);
      
      &::before {
        content: " ";
        position: absolute;
        width: 100%;
        height: 100%;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        background-color: transparent;
        z-index: -1;
      }
    }
    
    &--fixed {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
    }
    
    .options {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 100%;
      color: #AAAAAA;
      
      &__item {
        padding: 0 26rpx;
        
        &--avatar {
          padding: 0rpx 0rpx 0rpx 26rpx !important;
        }
        
        &__icon {
          position: relative;
          font-size: 36rpx;
          margin-bottom: 6rpx;
        }
        
        &__text {
          font-size: 22rpx;
        }
      }
    }
    
    .buttons {
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 100%;
      
      &__item {
        flex: 1;
        padding: 0 10rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        
        &--rect {
          height: 100%;
        }
        
        &--padding-rect {
          height: 80%;
        }
        
        &--round {
          height: 75%;
          &:first-child {
            border-top-left-radius: 100rpx;
            border-bottom-left-radius: 100rpx;
          }
          &:last-child {
            border-top-right-radius: 100rpx;
            border-bottom-right-radius: 100rpx;
          }
        }
        
        &__text {
          display: inline-block;
          font-weight: bold;
          font-size: 30rpx;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
  /* 轮播视觉差 start */
  .card-swiper {
    height: 750rpx !important;
  }
    
  .card-swiper swiper-item {
    width: 750rpx !important;
    left: 0rpx;
    box-sizing: border-box;
    // padding: 0rpx 30rpx 90rpx 30rpx;
    overflow: initial;
  }
    
  .card-swiper swiper-item .swiper-item {
    width: 100%;
    display: block;
    height: 100%;
    transform: scale(1);
    transition: all 0.2s ease-in 0s;
    overflow: hidden;
  }
    
  .card-swiper swiper-item.cur .swiper-item {
    transform: none;
    transition: all 0.2s ease-in 0s;
  }
  
  .image-banner{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image-banner image{
    width: 100%;
    height: 100%;
  }
  
  /* 轮播指示点 start*/
  .indication{
    z-index: 9999;
    width: 100%;
    height: 36rpx;
    position: absolute;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
  }
  
  .spot{
    background-color: #FFFFFF;
    opacity: 0.6;
    width: 10rpx;
    height: 10rpx;
    border-radius: 20rpx;
    top: -60rpx;
    margin: 0 8rpx !important;
    position: relative;
  }
  
  .spot.active{
    opacity: 1;
    width: 30rpx;
    background-color: #FFFFFF;
  }
  
  /* 间隔线 start*/
  .tn-strip-bottom {
   width: 100%;
   border-bottom: 20rpx solid rgba(241, 241, 241, 0.8);
  }
   /* 间隔线 end*/
  /* 标题 start */
  .nav_title {
    -webkit-background-clip: text;
    color: transparent;
    
    &--wrap {
      position: relative;
      display: flex;
      height: 120rpx;
      font-size: 46rpx;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      background-image: url(https://tnuiimage.tnkjapp.com/title_bg/title44.png);
      background-size: cover;
    }
  }
  /* 标题 end */
  
  /* 底部tabbar start*/
  .footerfixed{
   position: fixed;
   width: 100%;
   bottom: 0;
   z-index: 999;
   background-color: #FFFFFF;
   box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
  }
  
  /* 标签内容 start*/
  .tn-tag-content {
    &__item {
      display: inline-block;
      line-height: 45rpx;
      padding: 10rpx 30rpx;
      margin: 20rpx 20rpx 5rpx 0rpx;
      
      &--prefix {
        padding-right: 10rpx;
      }  
    }
  }
  /* 标签内容 end*/
  
  /* 内容图 start */
  .content-backgroup {
    z-index: -1;
  
    .backgroud-image {
      border-radius: 15rpx;
      width: 100%;
    }
  }
  /* 内容图 end */
  
  /* 商家商品 start*/
  .tn-blogger-content {
    &__wrap {
      box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
      border-radius: 20rpx;
      margin: 15rpx;
    }
    
    &__info {
      &__btn {
        margin-right: -12rpx;
        opacity: 0.5;
      }
    }
    
    &__label {
      &__item {
        line-height: 45rpx;
        padding: 0 10rpx;
        margin: 5rpx 18rpx 0 0;
        
        &--prefix {
          color: #E83A30;
          padding-right: 10rpx;
        }
      }
      
      &__desc {
        line-height: 35rpx;
      }
    }
    
    &__main-image {
      border-radius: 16rpx 16rpx 0 0;
      
      &--1 {
        max-width: 690rpx;
        min-width: 690rpx;
        max-height: 400rpx;
        min-height: 400rpx;
      }
      
      &--2 {
        max-width: 260rpx;
        max-height: 260rpx;
      }
      
      &--3 {
        height: 212rpx;
        width: 100%;
      }
    }
    
    &__count-icon {
      font-size: 24rpx;
      padding-right: 5rpx;
    }
  }
  
  .image-book{
    padding: 150rpx 0rpx;
    font-size: 16rpx;
    font-weight: 300;
    position: relative;
  }
  .image-picbook{
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
    border-radius: 15rpx 15rpx 0 0;
  }
  
  /* 毛玻璃*/
  .dd-glass {
     width: 100%;
     backdrop-filter: blur(20rpx);
    -webkit-backdrop-filter: blur(20rpx);
  }
  .clamp-text-2 {
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  
</style>
