<template>
  <view class="template-read tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
  <tn-nav-bar fixed :isBack="true">
  商城
  </tn-nav-bar>

    
     
     
     <view class="tn-search-fixed">
       <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin" :style="{marginTop: vuex_custom_bar_height + 'px'}">
         <view class="justify-content-item align-content-item">
           <view class="tn-bg-gray--light tn-flex tn-flex-col-center" style="border-radius: 100rpx;padding: 10rpx 20rpx 10rpx 20rpx;width: 100%;">
             <text class="tn-icon-search justify-content-item tn-padding-right-xs tn-color-gray tn-text-lg"></text>
             <input class="justify-content-item" placeholder="关键词搜索" v-model="searchKey" placeholder-style="color:#AAAAAA" ></input>
           </view>
         </view>
         
         <view class="align-content-item">
           <view class="justify-content-item tn-text-center" @click="sousuo()">
             <tn-button fontColor="#000000" :shadow="true" backgroundColor="tn-main-gradient-yellow--reverse"   shape="round" padding="20rpx 20rpx" width="150rpx" shadow fontBold >
               <text >搜索</text>
             </tn-button>
     		
           </view>
         </view>
       </view>
     </view>
     
    
    <view class="tn-margin-top-sm" style="padding:0px 15px;" >    
  
  
  
    	<tn-swiper :list="swiperList" imageMode="aspectFill" @click="hpicto" :radius="15" :height="300"></tn-swiper>
  

       </view>
    <!-- 方式7 start-->
    <view class="tn-flex tn-flex-wrap tn-margin-sm ">
      <view class=" tn-radius" v-for="(item, indexsdf) in iconnew" :key="indexsdf"  style="width: 25%;">
        <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"  @click="navigateToFn({ url: '/shopPages/list?id='+item.id, checkLogin: false })">
          <view class="icon7__item--icon tn-flex tn-flex-row-center tn-flex-col-center">
            <image class="" :src='item.image' mode='aspectFit' style="height: 80px;"></image>
          </view>
          <view class="tn-color-black tn-text-center ">
            <text class="tn-text-ellipsis">{{item.title}}</text>
          </view>
        </view>
      </view>
    </view>

    
    <view class="">
      <view class="nav_title--wrap">
        <view class="nav_title tn-cool-bg-color-5">
          <text class="tn-icon-copy tn-padding-right-sm"></text>
          推 / 荐 / 产 / 品
          <text class="tn-icon-copy tn-padding-left-sm"></text>
        </view>
      </view>
    </view>
    
    <!-- 图文 -->
    <!-- 比例 start-->
    <view class="tn-flex tn-flex-wrap tn-margin-sm tn-padding-bottom">
      <block v-for="(item, index) in content" :key="index">
        <view class="" style="width: 50%;" @click="navigateToFn({ url: '/shopPages/product?id='+item.id, checkLogin: false })">
          <view class="tn-blogger-content__wrap">
            <view class="image-picbook" >
              <view class="image-book">
				  <image :src="item.images" style="width: 100%;height: 150px;border-radius: 7px;" mode="aspectFill"></image>
              </view>
            </view> 
            
            <view class="tn-blogger-content__label tn-text-justify tn-padding-sm tn-text-ellipsis-2" style="height: 45px;">
              <text class="tn-blogger-content__label__desc">{{ item.goods_name }}</text>  
            </view>
            
        <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-left-sm tn-padding-right-sm tn-padding-bottom-sm">
          <view class="justify-content-item tn-flex tn-flex-col-center">
            <view>
              <view class="">
                <text class="tn-blogger-content__count-icon tn-color-purplered" style="font-size: 24rpx;">￥</text> 
                <text class="tn-padding-right-sm tn-text-bold tn-color-purplered" style="font-size: 38rpx;">{{ item.price }}</text>
                <!-- <text class="tn-blogger-content__count-icon tn-icon-message"></text>
                <text class="tn-padding-right-sm">{{ item.commentCount }}</text> -->
                <text class="tn-color-gray tn-text-sm" style="font-size: 24rpx;">{{ item.buy_no }} 人购买</text>
              </view>
            </view>
          </view>
               
        </view>
        
            
            
          </view>
        </view>
      </block>
    </view>
    <!-- 比例 end-->
    
  
    <view class="tn-padding-xl"></view>

  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  import NavIndexButton from '@/libs/components/nav-index-button.vue'
  export default {
    name: 'TemplateRead',
    mixins: [template_page_mixin],
    components: { NavIndexButton },
    data(){
      return {
		searchKey:'',
        cardCur: 0,
        swiperList: [],
        content: [],
		iconnew: [],
      }
    },
	onLoad() {
			this.info()
	},
    methods: {
      // cardSwiper
      cardSwiper(e) {
        this.cardCur = e.detail.current
      },
	  async info() {
	  	let that = this;
	  	let result = await that.$request({
	  		loading: 0,
	  		method: 'post',
	  		url: '/api/shop/index',
	  		data: {}
	  	});
	  
	  
	  	if (result.statusCode == 200) {
	  		if (result.data.code == 200) {
	  			
	  			that.swiperList=result.data.data.banner
	  			that.content=result.data.data.goods
	  		that.iconnew=result.data.data.cateshop
	  			
	  			
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
	  
	  sousuo(){
		  
		  if (this.searchKey==''){
		  			  this.msg('请输入关键词')
		  			  return
		  }
		  uni.navigateTo({
		  	url:'/shopPages/list?searchKey='+this.searchKey
		  })
	  },
	  
	  
	  
	  
	  hpicto(index) {
	  	if (this.swiperList[index].url && this.swiperList[index].leixing == 0) {
	  		this.tn('/circlePages/details?id=' + this.swiperList[index].url + '')
	  	}
	  	if (this.swiperList[index].url && this.swiperList[index].leixing == 1) {
	  		this.tn('/circlePages/group?id=' + this.swiperList[index].url + '')
	  	}
	  	if (this.swiperList[index].url && this.swiperList[index].leixing == 2) {
	  
	  		// #ifdef APP-PLUS
	  		this.navigateToFn({
	  			url: '/minePages/chat/room?id=' + this.swiperList[index].url,
	  			checkLogin: true
	  		})
	  		// #endif
	  		// #ifndef APP-PLUS	
	  		this.navigateToFn({
	  			url: '/minePages/chat/room_text?id=' + this.swiperList[index].url,
	  			checkLogin: true
	  		})
	  		// #endif
	  
	  	}
	  	if (this.swiperList[index].url && this.swiperList[index].leixing == 4) {
	  		this.tn('/shopPages/product?id=' + this.swiperList[index].url + '')
	  	}
	  
	  },
    }
  }
</script>

<style lang="scss" scoped>

  /* 自定义导航栏内容 start */
  .custom-nav {
    height: 100%;
    
    &__back {
      margin: auto 5rpx;
      font-size: 40rpx;
      margin-right: 10rpx;
      margin-left: 30rpx;
      flex-basis: 5%;
    }
    
    &__search {
      flex-basis: 60%;
      width: 100%;
      height: 100%;
      
      &__box {
        width: 100%;
        height: 70%;
        padding: 15rpx 0;
        margin: 0 30rpx;
        border-radius: 10rpx;
        font-size: 24rpx;
      }
      
      &__icon {
        padding-right: 10rpx;
        margin-left: 20rpx;
        font-size: 30rpx;
      }
      
      &__text {
        color: #AAAAAA;
      }
    }
  }
  .logo-image{
    width: 65rpx;
    height: 65rpx;
    position: relative;
  }
  .logo-pic{
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
    border-radius: 50%;
  }
  /* 自定义导航栏内容 end */
  
  /* 轮播视觉差 start */
  .card-swiper {
    height: 400rpx !important;
  }
    
  .card-swiper swiper-item {
    width: 750rpx !important;
    left: 0rpx;
    box-sizing: border-box;
    padding: 0rpx 30rpx 90rpx 30rpx;
    overflow: initial;
  }
    
  .card-swiper swiper-item .swiper-item {
    width: 100%;
    display: block;
    height: 100%;
    border-radius: 30rpx;
    transform: scale(1);
    transition: all 0.2s ease-in 0s;
    overflow: hidden;
  }
    
  .card-swiper swiper-item.cur .swiper-item {
    transform: none;
    transition: all 0.2s ease-in 0s;
  }
    
  .card-swiper swiper-item .swiper-item-text {
    margin-top: -220rpx;
    width: 100%;
    display: block;
    height: 50%;
    border-radius: 10rpx;
    transform: translate(100rpx, -60rpx) scale(0.9, 0.9);
    transition: all 0.6s ease 0s;
    overflow: hidden;
  }
    
  .card-swiper swiper-item.cur .swiper-item-text {
    margin-top: -280rpx;
    width: 100%;
    transform: translate(0rpx, 0rpx) scale(0.9, 0.9);
    transition: all 0.6s ease 0s;
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
    top: -130rpx;
    margin: 0 8rpx !important;
    position: relative;
  }
  
  .spot.active{
    opacity: 1;
    width: 30rpx;
    background-color: #FFFFFF;
  }
  
  /* 图标容器7 start */
  .icon7 {
    &__item {
      width: 30%;
      background-color: #FFFFFF;
      border-radius: 10rpx;
      padding: 10rpx;
      margin: 20rpx 10rpx;
      transform: scale(1);
      transition: transform 0.3s linear;
      transform-origin: center center;
      
      &--icon {
        width: 120rpx;
        height: 120rpx;
        font-size: 50rpx;
        border-radius: 0;
        margin-bottom: -10rpx;
        position: relative;
        z-index: 1;
      }
    }
  }    
  
  .image-capsule{
    padding:120rpx 0rpx;
    font-size: 40rpx;
    font-weight: 300;
    position: relative;
  }
  .image-pic{
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
  }
      
  /* 胶囊背景图 start */
  .image-div {
    height: 450rpx;
    z-index: -1;
  
    .image {
      width: 100%;
      height: 667rpx;
      // z-index: -1;
    }
  }
  /* 胶囊背景图 end */
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
  
  /* 文章内容 start*/
  .tn-blogger-content {
    &__wrap {
      box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.12);
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
        padding: 0 20rpx;
        margin: 5rpx 18rpx 0 0;
        
        &--prefix {
          color: #82B2FF;
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
      font-size: 30rpx;
      padding-right: 5rpx;
    }
  }
  
  .image-book{
	  
    padding: 10rpx;
    font-size: 16rpx;
    font-weight: 300;
    position: relative;
  }
  .image-picbook{
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
    border-radius: 20rpx 20rpx 0 0;
  }
  /* 文章内容 end*/
  
  /* 底部tabbar start*/
  .footerfixed{
   position: fixed;
   // margin: 20rpx;
   margin: 40rpx 5%;
   width: 90%;
   bottom: 0;
   z-index: 999;
   background-color: #FFFFFF;
   box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
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
