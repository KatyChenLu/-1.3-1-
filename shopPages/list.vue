<template>
  <view class="template-shop tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
       <tn-nav-bar fixed :bottomShadow="false">分类</tn-nav-bar>   

 
    <view class="" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
   <view class="" style="width: 100%;">
	   <tn-tabs :list="list" :isScroll="true" :current="currenttiezi" name="tab-name" @change="change"></tn-tabs>
   
   </view>
    </view> 
     <mescroll-body ref="mescrollRef" @down="downCallback" @up="upCallback">
    <!-- 商家商品 start-->
    <view class="tn-flex tn-flex-wrap tn-margin-left-sm tn-margin-bottom-sm tn-margin-right-sm tn-margin-top-xs">
      <block v-for="(item, index) in content" :key="index">
        <view class="" style="width: 50%;" @click="tn('/shopPages/product?id='+item.id)">
          <view class="tn-blogger-content__wrap">
            <view class="image-picbook" :style="'background-image:url(' + item.images[0] + ')'">
              <view class="image-book">
              </view>
            </view> 
            
            <view class="tn-blogger-content__label tn-text-ellipsis-2  tn-margin-sm">
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
                    <text class="tn-color-gray tn-text-sm" style="font-size: 24rpx;text-decoration: line-through">￥{{ item.old_price }}</text>
                  </view>
                </view>
              </view>
              <!-- <view class="justify-content-item tn-text-center">
                <view v-for="(label_item,label_index) in item.label" :key="label_index" class="tn-blogger-content__label__item tn-float-left tn-margin-right tn-bg-gray--light tn-round tn-text-sm tn-text-bold">
                  <text class="tn-blogger-content__label__item--prefix">#</text> {{ label_item }}
                </view>
              </view> -->
            </view>
            
            <view class="tn-flex tn-flex-col-center tn-padding-left-sm tn-padding-right-sm tn-padding-bottom-sm">
              <view class="justify-content-item tn-flex tn-flex-col-center">
                <view style="margin-right: 10rpx;margin-left: 0rpx;" @tap.stop="xuan(item)">
             <tn-button shape="round" backgroundColor="#FFF00D" fontColor="#080808" >
             <text class="tn-text-bold" >选择</text>
             </tn-button>
                </view>
                <text class="tn-color-gray">{{ item.buy_no }}人购买</text>
              </view>
            </view>
            
            <view class="tn-flex tn-flex-col-center tn-padding-left-sm tn-padding-right-sm tn-padding-bottom-sm" v-if="type==1&&configInfo.shop_bili>0">
              <view class="justify-content-item tn-flex tn-flex-col-center">
              
                <text class="tn-color-red" >奖励{{configInfo.site_moneyname}}{{configInfo.shop_bili*item.price/100}}个</text>
              
              </view>
            </view>
			
            
          </view>
        </view>
      </block>
    </view>
    <!-- 商品 end-->

    </mescroll-body>
   
    

  </view>
</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
		import MescrollBody from '@/components/mescroll-uni/mescroll-body.vue';
		import MescrollUni from '@/components/mescroll-uni/mescroll-uni.vue';
		import MescrollMixin from '@/components/mescroll-uni/mescroll-mixins.js';
		export default {
			name: 'TemplateGroup',
			mixins: [template_page_mixin,MescrollMixin],
			components: {
				MescrollBody
			},
			

    data(){
      return { 
			dalei:0,
		    type:0,
			id:0,
		  	currenttiezi:0,
			list:[],
			xiaolei:0,
			searchKey:'',
        content: []      
      }
    },
	onLoad(option) {
		if (option.id){
			this.id=option.id
		}	
		
		if (option.type){
			this.type=option.type
		}
			
		if (option.searchKey){
			this.searchKey=option.searchKey
		}else{
		this.info()	
		}		
	},
    methods: {
		xuan(item){
			uni.$emit('shop',item)
			uni.navigateBack()
		},
    async info() {
    	let that = this;
    	let result = await that.$request({
    		loading: 0,
    		method: 'post',
    		url: '/api/shop/class',
    		data: {
    			id:that.id,
				xiaolei:that.xiaolei,				
    		}
    	});    
    
    	if (result.statusCode == 200) {    	  			
    	that.list=result.data.data				
    	}   
    },
      // 跳转
      tn(e) {
        uni.navigateTo({
          url: e,
        });
      },
    change(index) {
    	this.currenttiezi = index	
		if (this.type){
		this.dalei=this.list[index].id
		}else{
		this.xiaolei=this.list[index].id	
		}
    	this.mescroll.resetUpScroll()
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
     		url: '/api/shop/shopList',
     		data: {
				searchKey:this.searchKey,
     			id:that.id,
				xiaolei:that.xiaolei,
				dalei:that.dalei,
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
     
     
     

      
    }
  }
</script>

<style lang="scss" scoped>
  .template-shop{
  }
  .tn-tabbar-height {
  	min-height: 120rpx;
  	height: calc(140rpx + env(safe-area-inset-bottom) / 2);
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
  
  /* 轮播视觉差 start */
  .card-swiper {
    height: 600rpx !important;
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
    // opacity: 0;
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
  
  /* 顶部店铺 */
  .shop-function {
      position: relative;
      z-index: 1;
      margin-top: -580rpx;
  }
  
  /* 阴影 start*/
  .shop-shadow {
    border-radius: 15rpx;
    box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
  }
  
  /* 头像 start */
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
  
  
  /* 资质轮播*/
  /* .tnphone-black-min 细边框*/
  .tnphone-black-min {width: 380rpx; height: 760rpx; border-radius: 40rpx; background: #C6D1D8; padding: 7rpx; display: table; color: #333;
  	box-sizing: border-box; box-shadow: 0rpx 0rpx 0rpx 5rpx rgba(80,80,80,.8) inset; margin: 70rpx auto; cursor: default; position: relative}
  .tnphone-black-min .skin {width: 100%; height: 100%; border-radius: 40rpx; background: #222; padding: 10rpx; box-shadow: 0rpx 0rpx 0rpx 7rpx rgba(68,68,68,.3)}
  .tnphone-black-min .screen {width: 100%; height: 100%; border-radius: 30rpx; background: #fff; position: relative; overflow: hidden}
  .tnphone-black-min .head {width: 100%; height: 90rpx; text-align: center; position: absolute; padding: 45rpx 15rpx 10rpx 15rpx;}
  .tnphone-black-min .peak {left: 22%;width: 56%; height: 27rpx; margin: -2rpx auto 0rpx; border-radius: 0 0 20rpx 20rpx; background: #222; position: absolute}
  .tnphone-black-min .sound {width: 48rpx; height: 6rpx; border-radius: 15rpx; background: #555; position: absolute; left: 50%; top: 50%; margin-left: -24rpx; margin-top: -10rpx;
  	box-shadow: 0rpx 4rpx 4rpx 0rpx #444 inset}
  .tnphone-black-min .lens {width: 6rpx; height: 6rpx; border-radius: 50%; background: #2c5487; position: absolute; left: 50%; top: 50%; margin-left: 34rpx; margin-top: -10rpx}
  .tnphone-black-min .talk {width: 50%; height: 6rpx; border-radius: 15rpx; background: rgba(0,0,0,.3); position: absolute; bottom: 8rpx; left: 50%; margin-left: -25%}
  .tnphone-black-min .area-l,.tnphone-black-min .area-r {width: 70rpx; height: 16rpx; position: absolute; top: 6rpx}
  .tnphone-black-min .area-l {left: 0; text-align: center; font-size: 12rpx; line-height: 22rpx; text-indent: 10rpx; font-weight: 600; padding-left: 20rpx;}
  .tnphone-black-min .area-r {right: 0; text-align: center; font-size: 12rpx; line-height: 22rpx; text-indent: 10rpx; font-weight: 600; padding-right: 20rpx;}
  .tnphone-black-min .fa-feed {float: left; font-size: 12rpx!important; transform:rotate(-45deg); margin-top: 4rpx; margin-right: 8rpx}
  .tnphone-black-min .fa-battery-full {float: left; font-size: 12rpx!important; margin-top: 6rpx}
  .tnphone-black-min .fa-chevron-left {float: left; margin-top: 4rpx}
  .tnphone-black-min .fa-cog {float: right; margin-top: 4rpx}
  .tnphone-black-min .btn01 {width: 3rpx; height: 28rpx; border-radius: 3rpx 0 0 3rpx; background: #222; position: absolute; top: 105rpx; left: -3rpx}
  .tnphone-black-min .btn02 {width: 3rpx; height: 54rpx; border-radius: 3rpx 0 0 3rpx; background: #222; position: absolute; top: 160rpx; left: -3rpx}
  .tnphone-black-min .btn03 {width: 3rpx; height: 54rpx; border-radius: 3rpx 0 0 3rpx; background: #222; position: absolute; top: 230rpx; left: -3rpx}
  .tnphone-black-min .btn04 {width: 3rpx; height: 86rpx; border-radius: 0 3rpx 3rpx 0; background: #222; position: absolute; top: 180rpx; right: -3rpx}
   
  /* 轮播样机样式 start*/
  .card-swiper2 {
    height: 70vh !important;
    width: 100vw !important;
    padding-top: 4vh;
  }
  
  .card-swiper2 swiper-item {
    width: 380rpx !important;
    left: -155rpx;
    box-sizing: border-box;
    padding: 0rpx 0rpx 90rpx 0rpx;
    overflow: initial;
  }
  
  .card-swiper2 swiper-item .swiper-item {
    display: block;
    transform: scale(0.7);
    transition: all 0.2s ease-in 0s;
    overflow: hidden;
  }
  
  .card-swiper2 swiper-item.cur .swiper-item {
    transform: none;
    transition: all 0.2s ease-in 0s;
  }
  
  
  .image-banner2{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image-banner2 image{
    width: 100%;
    height: 730rpx;
    // border: 1rpx solid red;
  }
  
  /* 轮播指示点 start*/
  .indication2{
    margin-top: 50vh;
    z-index: 9999;
    width: 100%;
    height: 36rpx;
    position: absolute;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
  }
  
  .spot2{
    background-color: #FFFFFF;
    opacity: 0.6;
    width: 10rpx;
    height: 10rpx;
    border-radius: 20rpx;
    top: 0rpx;
    margin: 0 8rpx !important;
    position: relative;
  }
  
  .spot2.active{
    opacity: 1;
    width: 30rpx;
    background-color: #FFFFFF;
  }
  
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
       // line-height: 35rpx;
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
  
  /* 商家商品 end*/
  
  
  /* 文章内容 start*/
  .tn-blogger-content2 {
    &__wrap {
      padding: 30rpx;
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
          color: #00FFC8;
          padding-right: 10rpx;
        }
      }
      
      &__desc {
       // line-height: 55rpx;
      }
    }
    
    &__main-image {
      box-shadow: 0rpx 5rpx 40rpx 0rpx rgba(43, 158, 246, 0.2);
      border-radius: 16rpx;
      
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
      font-size: 40rpx;
      padding-right: 5rpx;
    }
  }
  
  .image-design{
    padding: 180rpx 0rpx;
    font-size: 40rpx;
    font-weight: 300;
    position: relative;
  }
  .image-pic{
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
    border-radius: 10rpx;
  }
  /* 文章内容 end*/
  
  
  /* 资讯主图 start*/
  .image-article {
    border-radius: 8rpx;
    border: 1rpx solid #F8F7F8;
    width: 200rpx;
    height: 200rpx;
    position: relative;
  }
  
  .image-pic {
    background-size: cover;
    background-repeat: no-repeat;
    // background-attachment:fixed;
    background-position: top;
    border-radius: 10rpx;
  }
  
  .article-shadow {
    border-radius: 15rpx;
    box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
  }
  
  /* 文字截取*/
  .clamp-text-1 {
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  
  .clamp-text-2 {
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  
  
  /* 标签内容 start*/
  .tn-tag-content {
    &__item {
      display: inline-block;
      line-height: 35rpx;
      padding: 7rpx 25rpx 5rpx 25rpx;
  
      &--prefix {
        padding-right: 10rpx;
      }
    }
  }
  
/* 图标容器9 start */
    .icon9 {
      &__item {
        width: 30%;
        background-color: #FFFFFF;
        border-radius: 10rpx;
        transform: scale(1);
        transition: transform 0.3s linear;
        transform-origin: center center;
        
        &--icon {
          width: 80rpx;
          height: 80rpx;
          font-size: 50rpx;
          border-radius: 50%;
          margin-bottom: 18rpx;
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
            background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg6.png);
          }
        }
      }
    }
    
    
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
      background-image: url(https://tnuiimage.tnkjapp.com/title_bg/title00.png);
      background-size: cover;
    }
  }
  /* 标题 end */  
  
  /* 信息展示 start */
  .tn-info {
    &__item {
      width: 48%;
      margin: 15rpx 0rpx;
      padding: 28rpx;
      border-radius: 15rpx;
      position: relative;
      z-index: 1;
    }
  }
  /* 信息展示 end */
  
  /* 图标容器5 start */
    .icon5 {
      &__item {
        // width: 30%;
        background-color: #FFFFFF;
        border-radius: 10rpx;
        padding: 0rpx;
        margin: 0rpx;
        transform: scale(1);
        transition: transform 0.3s linear;
        transform-origin: center center;
        
        &--icon {
          width: 80rpx;
          height: 80rpx;
          border-radius: 50%;
          position: relative;
          z-index: 1;
        }
      }
    }
  

  /* 底部tabbar start*/
  .footerfixed{
   position: fixed;
   // margin: 20rpx;
   margin: 40rpx 30rpx;
   width: 690rpx;
   bottom: calc(env(safe-area-inset-bottom) / 2);
   z-index: 999;
   background-color: rgba(255,255,255,0.5);
   box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
  }
  
  .tabbar {
    display: flex;
    align-items: center;
    min-height: 110rpx;
    justify-content: space-between;
  	padding: 0;
  	height: calc(110rpx + env(safe-area-inset-bottom) / 2);
  	// padding-bottom: calc(env(safe-area-inset-bottom) / 2);
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
  
  /* 毛玻璃*/
  .dd-glass {
     width: 690rpx;
     backdrop-filter: blur(20rpx);
    -webkit-backdrop-filter: blur(20rpx);
  }
    
</style>
