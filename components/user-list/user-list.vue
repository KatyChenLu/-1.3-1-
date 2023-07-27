<template>
 <view class="tn-flex tn-flex-wrap tn-margin-left-sm tn-margin-bottom-sm tn-margin-right-sm tn-margin-top-xs">
		
		<block v-for="(item, tieziliindex) in list" :key="tieziliindex">
 <view class="" style="width: 50%;" @click="navigateToFn({ url: '/circlePages/blogger_other?id='+item.user_id, checkLogin: false })">
          <view class="tn-blogger-content__wrap">
            <view class="image-picbook" style="position: relative;">
              <view class="image-book" >
				  <image :src="item.userAvatar" style="width: 100%;height: 440rpx;border-radius: 7px;" mode="aspectFill"></image>
              </view>
			  
			  <view class="tn-round " v-if="item.status==1"   @click.stop="navigateToFn({ url: '/minePages/chat/talk?toid='+item.user_id, checkLogin: false })" style="padding:5px 15px;
			  position: absolute;
			  top: 8px;
			  right: 8px;
			  height: 60rpx;
			  width:60rpx;
			  color: #000000;
			  font-size: 14px; background: rgba(255, 255, 255); border-radius: 2500rpx;">
			  <text  class="dk-icon-hi" style="font-size: 56rpx;color: #892FE8;position: absolute;right:-1px;top:1px"></text>
			   </view>
			  
			  <view style="" class="tantan-slide-box-item-bg">			
			  <view class="  tn-text-justify tn-text-ellipsis-2 "  style="padding: 2px 10px;">
			    <text class="tn-blogger-content__label__desc tn-color-white tn-text-bold">{{ item.nickname }}</text> 
			</view>
			<view class=" tn-text-justify  tn-text-ellipsis-2 tn-color-white" style="padding: 2px 10px;font-size: 12px;">
			 <text class=" ">{{item.shengri}}</text>	
				  <text >•{{item.shengao}}cm</text>
				   <text >•{{item.xueli}}</text>
				   <text>•{{item.zhiwei}}</text>
			</view>
			<view class=" tn-text-justify  tn-text-ellipsis tn-color-white" style="padding: 2px 10px;font-size: 12px;">
			 <text class=" ">{{item.old_city}}人</text>	
				
			</view>
			   </view> 
			  
			  
			  
            </view> 
			
          
        
            
            
          </view>
        </view>
			
		</block>
	</view>



</template>

<script>
	const audioContext = uni.createInnerAudioContext()

	export default {
		props: ['list', 'index','current'],
		created() {
			uni.$on('onlist_change', data => {				
				this.ondianzan(data)
			});
		},
		data() {
			return {
				noClick: true,
				videoPlay: false,
				isplay: false,
				//	body: this.item.content.replace(/<br>/g, "\n").replace(/<p>/g, "").replace(/<\/p>/g, "\n")
			}
		},
	

		methods: {

	



		}
	};
</script>


<style scoped lang="scss">
	.tantan-slide-box-item-bg {
		height:160rpx;	
		background-image: linear-gradient(to bottom, transparent,rgba(56, 56,56,0.7));
		position: absolute;
		    left: 1px;
		    right:1px;
		    bottom: 6px;
		margin: auto;
		    border-radius:0 0 20rpx 20rpx;
		z-index: 1;	
	}
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
	  padding: 10rpx 0rpx;
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
</style>
