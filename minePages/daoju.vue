<template>
	<view class="template-shop tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed :bottomShadow="false">道具商城</tn-nav-bar>


		<view class="order--wrap" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<view class="" style="width: 100%;background-color: #ffffff;">
				<tn-tabs :bold="true" activeColor="#FBBD12" inactiveColor="#000000" ref="tabs" :list="list"
					:current="tabsIndex" :isScroll="false" @change="tabsChange"></tn-tabs>
			</view>
		</view>

		<mescroll-body ref="mescrollRef" @down="downCallback" @up="upCallback"
			:style="'min-height:' + screenHeight + 'px;'">

			<view class="tn-flex tn-flex-wrap tn-margin-left-sm tn-margin-bottom-sm tn-margin-right-sm tn-margin-top-xs"
				:style="{paddingTop: vuex_custom_bar_height+50 + 'px'}">
				<block v-for="(item, index) in content" :key="index">
					<view class="" style="width: 50%;position: relative;" @click="gloumai(item)">
						<view class="tn-blogger-content__wrap" style="background-color: rgba(255,255,255,0.6);">
							<view class="tn-flex tn-flex-row-center tn-padding-top tn-text-bold">
								{{ item.title }}
							</view>
							<view class="tn-flex tn-flex-row-center tn-color-gray--dark" style="font-size: 12px;">
								{{ item.body }}
							</view>
							<view class="tn-flex tn-flex-row-center">
								<image :src="item.image" style="width:60%;" mode="widthFix"></image>
							</view>

							<view class="tn-flex tn-flex-row-center tn-margin-top-sm tn-padding-bottom-sm">
								<tn-button shape="round" backgroundColor="#FFF00D" fontColor="#080808">
									{{item.money }}{{configInfo.site_moneyname}}
									<text v-if="item.tian>0">{{item.tian}}{{item.danwei}}</text>
									
									
								</tn-button>
								<tn-badge backgroundColor="#2DE88D" fontColor="#080808" :translateCenter="true"
									style=" position: absolute;	top:50px;right:10px; width: 60px;"
									v-if="item.is_vip==1">
									VIP专享
								</tn-badge>

							</view>


						</view>
					</view>
				</block>
			</view>
			<!-- 商家商品 start-->
			<!-- 商品 end-->

		</mescroll-body>
		<view class="" style="
   position: fixed;
    bottom: 0;
    left: 0;
    right: 0;">
			<view class="tn-flex tn-flex-row-between">
				<view class=" justify-content-item tn-margin tn-text-bold" @click="navigateToFn({ url: '/minePages/gift/chongzhi', checkLogin: true })">
					我的{{configInfo.site_moneyname}}：{{money}}
				</view>
				<view class="justify-content-item tn-margin tn-text-lg tn-color-grey" @click="tn('/minePages/daojubag')">
					<tn-button shape="round" backgroundColor="#FFF00D" fontColor="#080808">
						我的背包
					</tn-button>
				</view>
			</view>
		</view>

		<tn-modal v-model="show" :title="title" :content="tishi" :button="button" @click="goumaicheck"></tn-modal>
	<tn-modal width="80%" v-model="chongzhiis" backgroundColor="#E4E9EC" padding="30rpx 80rpx" :radius="25"
				title="抱歉.余额不足!" :button="buttonc" :showCloseBtn="false" :maskCloseable="false" :zoom="true"
				:custom="false" @click="clickBtn_shenqing">

			</tn-modal>
	</view>
</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	import MescrollBody from '@/components/mescroll-uni/mescroll-body.vue';
	import MescrollUni from '@/components/mescroll-uni/mescroll-uni.vue';
	import MescrollMixin from '@/components/mescroll-uni/mescroll-mixins.js';
	const sysinfo = uni.getSystemInfoSync()
	export default {
		name: 'TemplateGroup',
		mixins: [template_page_mixin, MescrollMixin],
		components: {
			MescrollBody
		},


		data() {
			return {
				chongzhiis:false,
				money: 0,
				screenHeight: sysinfo.screenHeight,
				id: 0,
				tabsIndex: 0,
				list: [],
				xiaolei: 0,
				content: [],
				show: false,
				title: '提示',
				tishi: '',
				buttonc: [{
						text: '取消',
						backgroundColor: '#c1c1c1',
						fontColor: '#000000'
					},
					{
						text: '立即充值',
						backgroundColor: '#ffff00',
						fontColor: '#000000'
					}
				],
				button: [{
						text: '取消',
						backgroundColor: '#E6E6E6',
						fontColor: '#000000',
						plain: true,
						shape: 'round'
					},
					{
						text: '确定',
						backgroundColor: '#FFF00D',
						fontColor: '#000000'
					}
				]

			}
		},
		onLoad(option) {
		
			this.info()
		},
		methods: {
			clickBtn_shenqing(res) {
			
				if (res == 1) {
					this.chongzhiis = false
					this.navigateToFn({
						url: '/minePages/gift/chongzhi',
						checkLogin: true
					})
				} else {
					this.chongzhiis = false
				}
			},
			
			goumaicheck(res) {			
				if (res == 1) {
					this.show = false
				this.goumaddp()				
				} else {
					this.show = false
				}
			},
			
			
			
			
			
			
			gloumai(item){
				
				if (this.money<item.price){
					this.chongzhiis=true
					return
				}
				
				this.id=item.id
				this.show=true
				this.tishi='你购买的是'+item.title
			},
			
			async goumaddp(){
				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/gift/goumaipass',
					data: {
						id: that.id						
					}
				});
				
				if (result.statusCode == 200) {
					
					if (result.data.code==200){
						this.msg(result.data.msg)
						this.info()
					}else{
						this.msg(result.data.msg)
					}
				
				}
				else{
				
				}
			},	
						
			async info() {
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/gift/shopclass',
					data: {
						id: that.id,
						xiaolei: that.xiaolei
					}
				});

				if (result.statusCode == 200) {
					that.list = result.data.data
					that.money = result.data.msg
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
				this.xiaolei = this.list[index].id
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
					url: '/api/gift/shopList',
					data: {
						id: that.id,
						tabsIndex: that.tabsIndex,
						page: mescroll.num
					}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						if (mescroll.num == 1) {
							that.content = result.data.data;
						} else {
							that.content = that.content.concat(result.data.data);
						}
						mescroll.endSuccess(result.data.data.length, result.data.data.length >= mescroll.size);

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


			tabsChange(index) {
				this.tabsIndex = index
				this.mescroll.resetUpScroll();
			}

		}
	}
</script>

<style lang="scss" scoped>
	.template-shop {}

	.order--wrap {
		position: fixed;
		left: 0;
		right: 0;
		width: 100%;
		z-index: 1999;
		background-color: inherit;
	}


	.swiper {
		&__box {
			flex: 1;
		}

		&__item {
			height: 100%;
		}
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

	.image-year {
		padding: 150rpx 0rpx;
		font-size: 16rpx;
		font-weight: 300;
		position: relative;
	}

	.image-capsule {
		padding: 100rpx 0rpx;
		font-size: 40rpx;
		font-weight: 300;
		position: relative;
	}

	.image-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 20rpx 20rpx 0 0;
	}

	/* 文章内容 end*/
</style>
