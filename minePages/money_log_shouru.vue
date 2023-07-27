<template>
	<view class="template-hot tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed :isBack="true">
			{{configInfo.site_moneyname}}明细
		</tn-nav-bar>
		<view class="tn-padding-top-xs" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
		
		
			<mescroll-body ref="mescrollRef" @down="downCallback" @up="upCallback" >
		
				<view v-for="(item, indexgift) in content" :key="indexgift"
					class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin tn-bg-gray--light tn-padding">
					<view class="justify-content-item"
						@click="navigateToFn({ url: '/circlePages/blogger_other?id='+item.user_id, checkLogin: false })">
						<view class="tn-flex tn-flex-col-center tn-flex-row-left">
							<view class="title justify-content-item" v-if="current==4" @click="navigateToFn({ url: '/circlePages/blogger_other?id='+item.song_user_id, checkLogin: false })">
								<tn-avatar class="" :src="item.userAvatar" size="lg" shape="circle">
								</tn-avatar>
							</view>
								
							<view class="tn-padding-right tn-color-black">
								
								<view class="tn-padding-right tn-padding-left-sm  tn-text-bold tn-color-black">
									{{item.description}}
								</view>
								<view v-if="current==4" class="tn-padding-right tn-padding-top-xs tn-text-ellipsis tn-padding-left-sm tn-color-black">
									<view class="title justify-content-item">{{item.nickname}}																	
									</view>
								</view>
								<view
									class="tn-padding-right tn-padding-top-xs tn-text-ellipsis tn-padding-left-sm tn-color-black">
									<text class="tn-color-gray tn-text-sm">{{item.create_time}}</text>
								</view>
							</view>
						</view>
					</view>
					<view class="justify-content-item tn-flex-row-center" @click="duqu(indexgift,item.user_id,item.id)">

						<tn-button :backgroundColor="item.money>0?'tn-main-gradient-aquablue--light':'tn-main-gradient-red--light'" margin="10rpx 10rpx">
						<text v-if="item.money>0">+</text>	{{item.money}}{{configInfo.site_moneyname}}
						</tn-button>
					</view>

				</view>

	

		</mescroll-body>
	</view>
	
	
	
	
	
	</view>
</template>


<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	import MescrollBody from '@/components/mescroll-uni/mescroll-body.vue';
	import MescrollUni from '@/components/mescroll-uni/mescroll-uni.vue';
	import MescrollMixin from '@/components/mescroll-uni/mescroll-mixins.js';
	export default {
		name: 'TemplateGroup',
		mixins: [template_page_mixin, MescrollMixin],
		components: {
			MescrollBody
		},
		data() {
			return {
				tipshow:false,
				current:0,
				 activeItemStyle: {
				 	fontSize: `28rpx`
				 },
				 scrollList: [{
				 		name: '全部'
				 	},
				 	{
					name: '支出',
				 	},{
				 		name: '充值',
				 	},{
				 		name: '其他',
				 	},{
				 		name: '收益',
				 	}
				 ],
				title: '',
				type: 0,
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
				gaodu:0,
				gaodushifou:0,
				body:[]
				
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
		onPageScroll(e) {
			this.gaodushifou=e.scrollTop+50-this.gaodu 
		},

		methods: {

		tabChange(index) {
			this.current = index
			this.mescroll.resetUpScroll()		
		},
		
		
			/// 列表调用
			downCallback(mescroll) {
				mescroll.endSuccess();
				mescroll.resetUpScroll();
			},
			async upCallback(mescroll) {
				let that = this;
				let url			
				url='/api/user/gifmoney_log'			
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: url,
					data: {
						type: that.current,
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
						mescroll.endSuccess(result.data.data.data.length, result.data.data.data.length >= mescroll
							.size);

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



	/* 底部tabbar start*/
	.footerfixed {
		position: fixed;
		width: 100%;
		top: 40px;
		z-index: 999;
		background-color: #FFFFFF;
	}

	/* 图标容器12 start */
	.tn-three {
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