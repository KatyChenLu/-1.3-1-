<template>
	<view>
		<tn-nav-bar :isBack="false" :bottomShadow="false" backgroundColor="transparent">
			动态
		</tn-nav-bar>
		<image src="http://pw.manxingkj.com/images/newUI/bg.png" mode="widthFix" class="index_bg"></image>


		<mescroll-body ref="mescrollRef" @down="downCallback" @up="upCallback">
		<view class="index-top">
			<view class="index-top-left tn-flex">
				<view :class="{'top-tab-view-select':topTabSelect==0,'top-tab-view-normal':topTabSelect!=0}"
					@click="indexTabTap(0)">推荐
				</view>
				<view :class="{'top-tab-view-select':topTabSelect==1,'top-tab-view-normal':topTabSelect!=1}"
					@click="indexTabTap(1)">关注
				</view>
				<view :class="{'top-tab-view-select':topTabSelect==2,'top-tab-view-normal':topTabSelect!=2}"
					@click="indexTabTap(2)">同城
				</view>
			</view>
		</view>
			<view class="tn-flex tn-flex-direction-column tn-margin-bottom" style="	position: relative;
		z-index: 99;" >
				<!-- <view class="tn-flex tn-flex-row-between tn-margin-sm">
					<view class="" style="width: 100%;">
						<tn-tabs-swiper class="" ref="tabs" :bold="true" activeColor="#000000" inactiveColor="#8b8b8b"
							:list="list" :fontSize="30" :current="currenttiezi" :isScroll="false"
							@change="tabsChange"></tn-tabs-swiper>
					</view>
				</view> -->
				<quan-list :list="content" :index="true"></quan-list>
			</view>




			<view class="tn-fab-class tn-fab" @click="navigateToFn({ url: '/circlePages/edit', checkLogin: false })"
				style="	position: relative;
		z-index: 9999;">
				<image src="http://pw.manxingkj.com/images/newUI/add.png" mode="" class="add-icon tn-fab__box tn-fab--right"></image>
				<!-- 	<view class="tn-fab__box tn-fab--right" style="left: auto; right: 20px; bottom: 100px; z-index: 19060;">
					<view data-v-710e8188="" class="tn-fab__item__btn tn-fab__item__btn--fab tn-cool-bg-color-5"
						style="width: 44px; height: 44px; border-radius: 50%; z-index: 19059;">
						<view class="tn-fab__item__btn__icon tn-icon-edit-form" style="font-size: 20px;">
							<view style="font-size: 12px;">
								发布
							</view>
						</view>
					</view>
				</view> -->
			</view>


			<view style="height: 50px;"></view>

		</mescroll-body>
	</view>
</template>



<script>
	import {
		host
	} from '@/siteinfo.js'
	import silenceUpdate from '@/uni_modules/rt-uni-update/js_sdk/silence-update.js' //引入静默更新
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	import MescrollBody from '@/components/mescroll-uni/mescroll-body.vue';
	import MescrollUni from '@/components/mescroll-uni/mescroll-uni.vue';
	import MescrollMixin from '@/components/mescroll-uni/mescroll-mixins.js';

	export default {
		name: '',
		mixins: [template_page_mixin, MescrollMixin],
		components: {
			MescrollBody
		},
		data() {
			return {
				topTabSelect: 0,
				activeItemStyle: {
					fontSize: `36rpx`
				},
				list: [{
						name: '最新'
					},
					{
						name: '推荐'
					},
					{
						name: '热评'
					}, {
						name: '点赞'
					}, {
						name: '人气'
					}
				],
				barStyle: {
					boxShadow: `12rpx 12rpx 16rpx #01BEFF`
				},
				loading: true,
				loginBoxFlag: false, // 登录框显示隐藏状态
				cardCur: 0,
				swiperList: [],
				current: 1,
				currenttiezi: 0,
				content: [],

			}
		},

		onLoad(option) {
			let that = this
			uni.$on('fabu_ok', data => {
				setTimeout(() => {
					that.content = []
					that.mescroll.resetUpScroll();
				}, 800);

			});

		},

		onShow(option) {

			// #ifdef MP-TOUTIAO	  
			uni.navigateTo({
				url: '/circlePages/edit?tab=1'
			})
			// #endif
		},
		methods: {


			tabsChange(index) {
				this.currenttiezi = index
				this.mescroll.resetUpScroll()
			},


			downCallback(mescroll) {
				mescroll.endSuccess();
				mescroll.resetUpScroll();
			},
			async upCallback(mescroll) {
				let that = this;
				let hot_tyoe = 0
				let fujin = ''

				if (that.currenttiezi == 0) {
					hot_tyoe = 0
				}
				if (that.currenttiezi == 1) {
					hot_tyoe = 2
				}
				if (that.currenttiezi == 2) {
					hot_tyoe = 5
				}
				if (that.currenttiezi == 3) {
					hot_tyoe = 6
				}
				if (that.currenttiezi == 4) {
					hot_tyoe = 7
				}

				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/index/getGoodslist',
					data: {
						fujin: fujin,
						hot_type: hot_tyoe,
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


		}
	}
</script>


<style lang="scss" scoped>
	.index-top-left {
		align-items: center;
	}

	.top-tab-view-normal {
		font-size: 32rpx;
		// font-family: PingFang SC-Bold, PingFang SC;
		font-weight: bold;
		color: #FFFFFF;
		margin-right: 32rpx;
		opacity: 0.7;
	}

	.top-tab-view-select {
		font-size: 60rpx;
		// font-family: PingFang SC-Bold, PingFang SC;
		font-weight: bold;
		color: #FFFFFF;
		margin-right: 32rpx;
	}

	.index-top {
		display: flex;
		background-color: transparent;
		height: 100rpx;
		align-items: center;
		justify-content: space-between;
		margin: 110rpx 0 0 20rpx;
		position: relative;
		z-index: 99;
	}

	.index_bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 1;
	}

	.add-icon {
		width: 91.33rpx;
		height: 91.33rpx;

		left: auto;
		right: 20px;
		bottom: 100px;
		z-index: 19060;
	}


	.tn-fab {
		&__box {
			display: flex;
			justify-content: center;
			align-items: flex-start;
			flex-direction: column;
			position: fixed;
			transition: all 0.25s ease-in-out;
		}

		&--right {
			align-items: flex-end;
		}

		&__btns {
			transition: all 0.25s cubic-bezier(0, .13, 0, 1.43);
			transform-origin: 80% bottom;

			&__animation--up {
				opacity: 0;
				transform: translateY(100%);
			}

			&__animation--around {
				position: absolute;
				top: 0;
				left: 0;
			}

			&--visible--up {
				// visibility: visible;
				opacity: 1;
				transform: translateY(0);
			}

			&--visible--around {
				// visibility: visible;
				// opacity: 1;
			}
		}

		&__item {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			padding-bottom: 20rpx;

			&__animation--around {
				position: absolute;
				top: 0;
				left: 0;
				transition: transform 0.25s ease-in-out;
				transform-origin: 50% 50%;
				padding-bottom: 0 !important;
			}

			&--left {
				flex-flow: row-reverse;
			}

			&__text {
				&--left {
					padding-left: 14rpx;
				}

				&--right {
					padding-right: 14rpx;
				}
			}

			&__btn {
				display: flex;
				align-items: center;
				justify-content: center;
				box-shadow: 0 0 5rpx 2rpx rgba(0, 0, 0, 0.07);
				transition: all 0.2s linear;

				&--active {
					animation-name: fab-button-animation;
					animation-duration: 0.2s;
					animation-timing-function: cubic-bezier(0, .13, 0, 1.43);
				}

				&__title {
					width: 90%;
					text-align: center;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}

				&__icon {
					text-align: center;
					font-size: 64rpx;
				}

				&__image {
					display: block;
				}
			}
		}

		&__mask {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: $tn-mask-bg-color;
			transition: all 0.2s ease-in-out;
			opacity: 0;

			&--visible {
				opacity: 1;
			}
		}
	}

	@keyframes fab-button-animation {
		0% {
			transform: scale(0.6);
		}

		20% {
			transform: scale(1.8);
		}

		40% {
			transform: scale(0.4);
		}

		50% {
			transform: scale(1.4);
		}

		80% {
			transform: scale(0.8);
		}

		100% {
			transform: scale(1);
		}
	}
</style>