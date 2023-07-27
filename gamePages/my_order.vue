<template>
	<view class="template-order">
	<tn-nav-bar fixed :bottomShadow="false">我的下单</tn-nav-bar>	
				<!-- 顶部标签 -->
				<view class="tn-bg-white" :style="{paddingTop: vuex_custom_bar_height + 'px'}"
				style="position: fixed; top:0px;z-index: 1;width: 100%;">
					<tn-tabs-swiper class="" ref="tabs" activeColor="#3165CC" inactiveColor="#080808":list="list" :current="tabsIndex" :isScroll="false" @change="tabsChange"></tn-tabs-swiper>
				</view>
				<mescroll-body ref="mescrollRef"  @down="downCallback" @up="upCallback" :style="{paddingTop: vuex_custom_bar_height+40 + 'px'}" >
				
	<view class="order--wrap" >			
				<view  style="padding-bottom: 50px;">

	
						<view v-for="(item,index) in content " :key="index" class="order__item tn-border-solid tn-shadow" >
							<view
								class="order__item__head tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between ">
								<view class="order__item__head__title" >
									
									<text class="">
									订单号{{item.id}}
										</text>
									<text class="tn-margin-left-sm">
									{{item.create_time}}
										</text>
										<tn-tag v-if="item.type==1"  :plain="true" style="border-color:rgb(102 0 214);color:rgb(102 0 214);margin-left: 5px;">线下订单</tn-tag>
										<tn-tag v-else  :plain="true" style="border-color:rgb(102 0 214);color:rgb(102 0 214);margin-left: 5px;">线上订单</tn-tag>
								</view>

								<view class="order__item__head__status" style="color:#0da021;"></view>
							</view>

							<view
								class="order__item__content tn-flex tn-flex-direction-row tn-flex-nowrap  ">
								<view class="order__item__content__image">
									<image :src="item.game_image" mode="scaleToFill">
									</image>
								</view>
								<view class="order__item__content__title" style="width: 100%;">
								<view>	{{item.game_title}} </view>
								<view class="tn-color-red">{{item.price}}/{{item.danwei}}
								<text class="tn-color-gray"> x 数量{{item.num}}</text> </view>
								</view>								
							
							</view>
							<view class="tn-flex tn-flex-col-top  tn-cat-shadow tn-padding" @click="navigateToFn({ url: '/circlePages/blogger_other?id='+item.sellInfo.id, checkLogin: true })" v-if="type==1">
							  <view class="" >
							    <view class="logo-pic tn-shadow">
							    <tn-avatar size="80rpx" :src="item.sellInfo.avatar"></tn-avatar>
							    </view>
							  </view>
							  <view class="tn-padding-left-sm tn-text-ellipsis" style="width: 100%;">
							    <view class="tn-flex tn-flex-row-between tn-flex-col-between">
							      <view class="justify-content-item" >
									  <view class=" tn-padding-top-xs ">
									    <text class="tn-color-gray ">玩家信息</text>
									  </view>	
							        <text class="tn-color-cat  tn-text-bold">{{item.sellInfo.nickname}}</text>												
							      </view>
							      <view class="justify-content-item tn-round tn-text-xs  tn-color-white" style="padding: 10rpx 20rpx;" >
										<tn-tag backgroundColor="tn-bg-red" fontColor="tn-color-white" shape="circle"
											width="auto" size="lg" style="margin-left: 15px;" @click="del(index,item.id)">
										联系TA</tn-tag>
							      </view>
								 
							    </view>
							   	   
							  </view>
							</view>	
							<view class="tn-flex tn-flex-col-top  tn-cat-shadow tn-padding" @click="navigateToFn({ url: '/circlePages/blogger_other?id='+item.userInfo.id, checkLogin: true })" v-if="type==2">
							  <view class="" >
							    <view class="logo-pic tn-shadow">
							    <tn-avatar size="80rpx" :src="item.userInfo.avatar"></tn-avatar>
							    </view>
							  </view>
							  <view class="tn-padding-left-sm tn-text-ellipsis" style="width: 100%;">
							    <view class="tn-flex tn-flex-row-between tn-flex-col-between">
							      <view class="justify-content-item" >
									  <view class=" tn-padding-top-xs ">
									    <text class="tn-color-gray ">买家信息</text>
									  </view>	
							        <text class="tn-color-cat  tn-text-bold">{{item.userInfo.nickname}}</text>
							      </view>
							      <view class="justify-content-item tn-round tn-text-xs  tn-color-white" style="padding: 10rpx 20rpx;" >
							  
										<tn-tag backgroundColor="tn-bg-red" fontColor="tn-color-white" shape="circle"
											width="auto" size="lg" style="margin-left: 15px;" @click="del(index,item.id)">
										联系TA</tn-tag>
							      </view>
								 
							    </view>
							   	   
							  </view>
							</view>	
							
							
							<view v-if="item.remark" class=" tn-bg-gray--light" style="border-radius: 10rpx;padding: 20rpx 30rpx;">
								备注：{{item.remark}}
							</view>
							<view v-if="item.address" class=" tn-bg-gray--light" style="border-radius: 10rpx;padding: 20rpx 30rpx;">
								地址：{{item.address}}
							</view>
							<view v-if="item.yutime" class=" tn-bg-gray--light" style="border-radius: 10rpx;padding: 20rpx 30rpx;">
								时间：{{item.yutime}}
							</view>
							
							<view
								class="order__item__operation tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-between">
								<view class="order__item__operaation__left">
									<text class="order__item__operaation__left--text ">合计：{{configInfo.site_moneyname}}{{item.totalprice}}</text>
									<text class="order__item__operaation__left--text tn-color-red tn-margin-left" v-if="type==2">收入{{item.shouprice}}个</text>
									
								</view>
								<view
									class="order__item__operation__right tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-right">
									<view class="order__item__operaation__right__button" v-if="item.status==0&&item.is_tui==0&&type==1" @click="tui(item.id)">
											<text v-if="item.status==0" style="margin-right: 10px;">等待接单</text>									
											<tn-button shadow shape="round" fontColor="#ffffff" backgroundColor="#00aaff" :fontSize="24" height="auto" padding="10rpx 28rpx">
											申请取消订单
											</tn-button>
									</view>
								
									<view class="order__item__operaation__right__button" v-if="item.status==0&&item.is_tui==1" @click="tui(item.id)">
											<text  style="margin-right: 10px;">等待确认退款</text>									
											
									</view>
								
											
									<view class="order__item__operaation__right__button" v-if="item.status==1" @click="wancheng(item.id)">									
								<tn-button shadow shape="round" fontColor="#ffffff" backgroundColor="#00aaff" :fontSize="24" height="auto" padding="10rpx 10rpx" >
								确认完成
								</tn-button>	
									</view>							
																
								</view>
							</view>
						</view>
						<view class="tn-padding-bottom"></view>
	
			

		
				</view>
		</view>
		
		</mescroll-body>	
			</view>
</template>

<script>
import MescrollBody from '@/components/mescroll-uni/mescroll-body.vue';
		import MescrollUni from '@/components/mescroll-uni/mescroll-uni.vue';
		import MescrollMixin from '@/components/mescroll-uni/mescroll-mixins.js';
		export default{	
			mixins: [MescrollMixin],
			components: {
					MescrollBody
				},
		data() {
			return {
				title:'我约的单',
				list: [	
					{
						name: '未接单'
					},
					{
						name: '进行中'
					},
					{
						name: '已完成'
					},
					{
						name: '已退款'
					}
				],
				content:[],
				tabsIndex: 0,
				swiperIndex: 0,
				swiperTop: 0,
				swiperHeight: 0,
				type:1,
			}
		},
	
			onLoad(option) {
			if (option.type){
				this.type=option.type
			}
			if (option.type==2){
				this.title='约我的单'
			}
			
		
		},
		methods: {
			
			/// 下拉刷新的回调
			downCallback(mescroll) {
			mescroll.endSuccess();
			  // 下拉刷新的回调,默认重置上拉加载列表为第一页 (自动执行 mescroll.num=1, 再触发upCallback方法 )
			  mescroll.resetUpScroll()
			},
			/// 上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10
		async upCallback(mescroll) {
			
			
			if (!uni.getStorageSync('token')){				
				return
				}
			
			
			let that = this;
			let result = await that.$request({
				loading: 1,
				method: 'post',
				url: '/api/games/my_order',
				data: {
					status:that.tabsIndex,
					type:1,
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
			// 计算可滑动区域的高度信息
			updateSwiperInfo() {
				// 获取可滑动菜单的信息
				this._tGetRect('.order__tabs').then(res => {
					if (!res) {
						setTimeout(() => {
							this.updateSwiperInfo()
						}, 10)
						return
					}
					const systemInfo = uni.getSystemInfoSync()
					this.swiperTop = res.bottom - this.vuex_custom_bar_height
					this.swiperHeight = systemInfo.safeArea.height - res.bottom + systemInfo.statusBarHeight
				})
			},
			// 标签栏值发生改变
			tabsChange(index) {
				this.tabsIndex = index
				this.mescroll.resetUpScroll()
			},
			// swiper-item位置发生改变
			swiperTransition(event) {
				this.$refs.tabs.setDx(event.detail.dx)
			},
			// swiper动画结束
			swiperAnimationFinish(event) {
				const current = event.detail.current
				this.$refs.tabs.setFinishCurrent(current)
				this.swiperIndex = current
				this.tabsIndex = current
			},
			tui(id){
				let that = this				
				uni.showModal({
					title: '提示',
					content: '确认要申请退款吗?',
					confirmText: '确定',
					success: function(res) {
						if (res.confirm) {
							that.getchuli(id,1)
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
				
			},
			tongyi(id){
				let that = this				
				uni.showModal({
					title: '提示',
					content: '你同意退款吗?',
					confirmText: '确定',
					success: function(res) {
						if (res.confirm) {
							that.getchuli(id,2)
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});				
			},
			queren(id){
				let that = this				
				uni.showModal({
					title: '提示',
					content: '你确认接单吗?',
					confirmText: '确定',
					success: function(res) {
						if (res.confirm) {
							that.chane(id,1)
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});				
			},		
			
			wancheng(id){
				let that = this				
				uni.showModal({
					title: '提示',
					content: '你确认已经订单完毕吗?',
					confirmText: '确定',
					success: function(res) {
						if (res.confirm) {
							that.getchuli(id,3)
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
				
			},
			
			async chane(id,type){
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url:'/api/games/status',
					data:{					
					  id:id,
					  status:type
					}
				});	
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						this.msg('处理完毕')
							this.mescroll.resetUpScroll()
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
			
			async getchuli(id,type) {
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/games/tuipass',
					data: {					
					  id:id,
					  type:type
					}
				});	
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						uni.$emit('querenjidan',true)
						this.msg('处理完毕')
							this.mescroll.resetUpScroll()
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
	.template-order {
		background-color: #F7F7F7CC;
		height: 100vh;
	}

	/* 自定义导航栏内容 start */
	.custom-nav {
		height: 100%;

		&__back {
			// margin: auto 5rpx;
			font-size: 40rpx;
			flex-basis: 5%;
			padding: 20rpx 40rpx 20rpx 30rpx;
		}

		&__search {
			flex-basis: 55%;
			width: 100%;
			height: 100%;

			&__box {
				width: 100%;
				height: 60%;
				padding: 28rpx 0;
				margin: 0 30rpx;
				border-radius: 60rpx;
				font-size: 24rpx;
				background-color: #FFFFFF;
				border: 1rpx solid #F8F7F8;
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

	/* 自定义导航栏内容 end */

	.order {
		height: 100vh;
		&--wrap {
		
			background-color: inherit;
		}

		/* 导航栏 start */
		&__tabs {
		
		
			background-color: inherit;
		}

		/* 导航栏 end */

		/* swiper start */
		&__swiper {
			position: absolute;
			left: 0;
			right: 0;
			width: 100%;
			background-color: inherit;
			// padding: 0 16rpx;
		}

		/* swiper end */

		/* 订单内容 start */
		&__item {
			margin: 20rpx;
			padding: 36rpx 26rpx;
			background-color: #FFFFFF;
			border-radius: 18rpx;

			&:first-child {
				margin-top: 40rpx;
			}

			&:last-child {
				margin-bottom: 0;
			}

			/* 头部 start */
			&__head {

				&__title {
					font-weight: bold;
					line-height: normal;

					&--right-icon {
						font-size: 24rpx;
						margin-left: 8rpx;
					}
				}

				&__status {
					font-size: 22rpx;
					color: #AAAAAA;
				}
			}

			/* 头部 end */

			/* 内容 start */
			&__content {

				margin-top: 20rpx;

				&__image {
					margin-right: 20rpx;

					image {
						width: 140rpx;
						height: 140rpx;
						border-radius: 10rpx;
					}
				}

				&__title {
					padding-right: 40rpx;
					display: -webkit-box;
					overflow: hidden;
					white-space: normal !important;
					text-overflow: ellipsis;
					word-wrap: break-word;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}

				&__info {

					&__price {
						&--unit {
							font-size: 20rpx;
						}

						&__value--integer,
						&__value--decimal {
							font-weight: bold;
						}

						&__value--decimal {
							font-size: 20rpx;
						}
					}

					&__count {
						color: #AAAAAA;
						font-size: 24rpx;
					}
				}
			}

			/* 内容 end */

			/* 操作按钮 start */
			&__operation {
				margin-top: 30rpx;

				&__right {
					&__button {
						margin-left: 10rpx;
					}
				}
			}

			/* 操作按钮 end */
		}

		/* 订单内容 end */
	}
</style>
