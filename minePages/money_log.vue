<template>
	<view class="template-hot tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
	<tn-nav-bar fixed :isBack="true">
			使用明细
		</tn-nav-bar>

	  	<mescroll-body ref="mescrollRef" @down="downCallback" @up="upCallback" >
 <view :style="{paddingTop: vuex_custom_bar_height + 'px'}">		

		  <tn-list-cell  v-for="(item, index) in content" :key="index" v-if="content.length>0" >
		   
			<view class="message" >		 
		      <view class="message__middle">				  
		        <view class="message__name">
				<text class="tn-text-bold tn-color-red" style="font-size: 14px;">{{item.money}}
			</text>	
						<text class="tn-text-bold" style="font-size: 14px;">
						{{ item.description }}</text>		
				</view>		      
				<view class="message__content tn-margin-top" >
				发生时间：{{ item.create_time }}
				</view>
		      </view>
							
							
							
							
		    </view>			
		  </tn-list-cell>
		

			</view>

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
		data() {
			return {
				title:'',
				type:0,
				cardCur: 0,
				swiperList: [],
				content: [],
				planList: [{
					color: 'red',
				}, {
					color: 'cyan',
				}, {
					color: 'blue',
				}, {
					color: 'green',
				}, {
					color: 'orange',
				}, {
					color: 'purplered',
				}, {
					color: 'purple',
				}],
				news: [],
			}
		},


		onLoad(option) {
			let that = this
			uni.$off('setLoginBoxFlag');
			uni.$on('setLoginBoxFlag', loginBoxFlag => {
				that.loginBoxFlag = loginBoxFlag;
			});
			if (option.type) {
				this.type = option.type
				this.title = option.title
			}
			
		},

		methods: {
		
		qiehuan(type){
			this.type=type
			this.mescroll.resetUpScroll();
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
				url: '/api/user/money_log',
				data: {
					id:that.id,
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
		}
	}
</script>

<style lang="scss" scoped>
	.template-plan {}

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

	/* 图标容器12 start */
	.tn-three{
	    position: absolute;
	    top: 50%;
	    right: 50%;
	    bottom: 50%;
	    left: 50%;
	    transform: translate(-38rpx, -20rpx) rotateX(20deg) rotateY(10deg) rotateZ(-20deg);
	    text-shadow: -1rpx 2rpx 0 #f0f0f0, -2rpx 4rpx 0 #f0f0f0, -10rpx 20rpx 30rpx rgba(0, 0, 0, 0.2);
	}
	
	
	.icon13 {
	  &__item {
	    width: 30%;
	    background-color: #FFFFFF;
	    border-radius: 10rpx;
	    padding: 30rpx;
	    margin: 20rpx 10rpx;
	    transform: scale(1);
	    transition: transform 0.3s linear;
	    transform-origin: center center;
	    
	    &--icon {
	      width: 120rpx;
	      height: 120rpx;
	      font-size: 60rpx;
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
	       
	
	          
	      }
	    }
	  }
	}
	.icon12 {
	  &__item {
	    width: 30%;
	    background-color: #FFFFFF;
	    border-radius: 10rpx;
	    padding: 30rpx;
	    margin: 20rpx 10rpx;
	    transform: scale(1);
	    transition: transform 0.3s linear;
	    transform-origin: center center;
	    
	    &--icon {
	      width: 80rpx;
	      height: 80rpx;
	      font-size: 60rpx;
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
	       
	
	          
	      }
	    }
	  }
	}
	
	
	.message {
	  display: flex;
	  flex-direction: row;
	
	  justify-content: space-around;
	  
	
	  &__middle {
	    width: 100%;
	    padding-left: 20rpx;
	    padding-right: 40rpx;
	  }
	 
	  
	  &__name {
	    font-size: 32rpx;
	    margin-bottom: 8rpx;
	  }
	  &__content {
	    font-size: 26rpx;
	    color: #838383;
	  }
	  &__tips {
	    &__icon {
	      font-size: 36rpx;
	      color: #AAAAAA;
	    }
	  }
	}
</style>
