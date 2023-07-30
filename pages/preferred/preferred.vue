<template>
	<view class="template-hot tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed customBack :bottomShadow="false" backgroundColor="transparent">
			<!-- 我的消息 -->
		</tn-nav-bar>
		<image src="../../static/newUI/bg.png" mode="widthFix" class="index_bg"></image>
		<view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<view class="index-top" style="margin-top: 44rpx;margin-left: 34rpx;">
				<view class="index-top-left tn-flex">
					<view class="top-tab-view-normal" @click="">消息
					</view>
				</view>
				<view class="index-top-right tn-flex tn-flex-row-center tn-flex tn-flex-col-center">

					<view class="refresh-box">
						<image src="../../static/newUI/info_search.png" mode="" class="refresh"></image>
					</view>
				</view>
			</view>
			<mescroll-body ref="mescrollRef" @down="downCallback" @up="upCallback">
				<view class="tn-flex tn-margin-xs " style="	position: relative;
		z-index: 99;">
					<view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius" @click="qiehuan(0,'评论我的')">
						<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
							<!-- <view
								class=" icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-main-gradient-purplered--light tn-color-purplered"> -->
							<!-- <view class="tn-icon-fire-fill tn-three"></view> -->
							<image src="../../static/newUI/preferred_1.png" mode="" class="topicon "></image>
							<!-- </view> -->
							<view class=" tn-text-center" style="font-size: 17rpx;font-weight: bold;color: #FFFFFF;line-height: 40rpx;">
								<text class="">评论我的</text>
							</view>
						</view>
					</view>
					<view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius" @click="qiehuan(1,'收到的赞')">
						<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
							<image src="../../static/newUI/preferred_2.png" mode="" class="topicon "></image>
							<view class=" tn-text-center" style="font-size: 17rpx;font-weight: bold;color: #FFFFFF;line-height: 40rpx;">
								<text class="tn-text-ellipsis">收到的赞</text>
							</view>
						</view>
					</view>
					<view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius" @click="qiehuan(2,'系统通知')">
						<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
							<image src="../../static/newUI/preferred_3.png" mode="" class="topicon "></image>
							<view class=" tn-text-center" style="font-size: 17rpx;font-weight: bold;color: #FFFFFF;line-height: 40rpx;">
								<text class="tn-text-ellipsis">系统通知</text>
							</view>
						</view>
					</view>
					<view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius" @click="qiehuan(3,'关注我的')">
						<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
							<image src="../../static/newUI/preferred_4.png" mode="" class="topicon "></image>
							<view class=" tn-text-center" style="font-size: 17rpx;font-weight: bold;color: #FFFFFF;line-height: 40rpx;">
								<text class="tn-text-ellipsis">关注我的</text>
							</view>
						</view>
					</view>

				</view>


	
				<view style="	position: relative;
		z-index: 99; ">
	
					<view class="empty__item" v-if="content.length==0&&tokenlogin" style="margin-top: 100px;"
						@click="guangchang()">
						<tn-empty icon="/static/images/no.png" text="你还没有任何消息,">
							<tn-button backgroundColor="#ffff00" fontColor="#000000" size="xxl">去找人聊聊呀
							</tn-button>
						</tn-empty>
					</view>



					<view class="empty__item" v-if="!tokenlogin" style="margin-top: 100px;height:100%"
						@click="denglu()">
						<tn-empty icon="/static/images/no.png" text="登录查看你的消息哦">
							<tn-button backgroundColor="#ffff00" fontColor="#000000" size="xxl">戳这里登录
							</tn-button>
						</tn-empty>
					</view>



					<tn-swipe-action :autoClose="true">
						<view class="cro">
								
							</view>
						<tn-swipe-action-item ref="huadong" v-for="(item,index) in content" :key="index"
							:options="options1" :name="index" :name_id="item.id" @click="onSwiperItemClick">


							<view class="message tn-padding">

								<view class="message__left" @click="jinru(item,index)">
									<tn-avatar :badge="item.is_manage_normal" badgeText="管" :badgePosition="[8,20]"
										badgeBgColor="#00aa00" size="lg" shape="circle" :src="item.head_url">
									</tn-avatar>
								</view>
								<view class="message__middle" @click="jinru(item,index)">
									<view class="message__name">{{item.username}}
										<text class="tn-icon-sex  tn-color-gray" v-if="item.sex==0"></text>
										<text class="tn-icon-sex-female tn-color-purplered" v-if="item.sex==2"></text>
										<text class="tn-icon-sex-male  tn-color-blue" v-if="item.sex==1"></text>
										<text class="dk-lv tn-main-gradient-indigo--light"
											v-if="item.vip==0&&configInfo.is_lv">LV {{item.lv}}</text>
										<text class="dk-vip tn-main-gradient-orangeyellow" v-if="item.vip==1"><text
												class="tn-icon-vip tn-color-black"
												style="font-size: 14px;margin-left: -5px;"></text>VIP{{item.vip_lv}}</text>
										<!-- 	<block v-if="item.is_online==1">
												<text class="tn-color-green tn-text-xs tn-margin-left-sm" v-if="item.isOnline==1">在线</text>
												<text class="tn-color-gray tn-text-xs tn-margin-left-sm" v-if="item.isOnline==0">离线</text>
											</block>
											 -->
									</view>
									<view class="message__content tn-text-ellipsis" v-if="item.type=='text'">
										{{item.content}}
									</view>
									<view class="message__content tn-text-ellipsis" v-if="item.type=='music'">语音</view>
									<view class="message__content tn-text-ellipsis" v-if="item.type=='image'">图片</view>
									<view class="message__content tn-text-ellipsis" v-if="item.type=='liwuuser'">礼物
									</view>

								</view>
								<view class="message__right" style="width: 14%;color: #959595;">
									<view class="message__time">{{$common.timeToDate(item.time)}}</view>
									<view class="message__tips" v-if="item.unread>0">
										<tn-tag backgroundColor="tn-bg-red" fontColor="tn-color-white" shape="circle"
											width="auto" size="sm">{{item.unread}}</tn-tag>
									</view>
								</view>

							</view>


						</tn-swipe-action-item>
					</tn-swipe-action>
				</view>



				<!-- 登录框组件 -->
				<login-fn :is-show-login="loginBoxFlag" @loginSuccessCallback="refreshFn" @close="closeGlobalLoginFn">
				</login-fn>


			</mescroll-body>
		</view>
		<view class='tn-tabbar-height' style="height: 50px;"></view>




		<tn-popup v-model="daojushow" width="80%" height="40%" mode="bottom" :borderRadius="30" :closeBtn="false"
			:maskCloseable="true">
			<scroll-view class="" scroll-y scroll-with-animation style="height: 100%;">

				<view class="tn-flex tn-flex-row-center tn-margin-top-sm" v-if="daojulist.length==0"
					@click="navigateToFn({ url: '/minePages/daoju', checkLogin: false })">
					<view class="">
						<tn-empty icon="/static/images/no.png" text="你没有任何道具">
							<tn-button backgroundColor="#aa00ff" fontColor="#FFFFFF" size="xxl">去道具商城
							</tn-button>
						</tn-empty>
					</view>
				</view>

				<view
					class="tn-flex tn-flex-wrap tn-margin-left-sm tn-margin-bottom-sm tn-margin-right-sm tn-margin-top-xs">


					<block v-for="(item, index) in daojulist" :key="index">
						<view class="" style="width: 33%;position: relative;">
							<view class="tn-blogger-content__wrap" style="background-color: rgba(255,255,255,0.6);">
								<view class="tn-flex tn-flex-row-center tn-padding-top tn-text-bold">
									{{ item.gift_name }}
								</view>
								<view class="tn-flex tn-flex-row-center">
									<image :src="item.image" style="width:60%;" mode="widthFix"></image>
								</view>
								<view class="tn-flex tn-flex-row-center tn-margin-top-sm tn-padding-bottom-sm">
									<tn-button shape="round" backgroundColor="#FFF00D" fontColor="#080808"
										@click="daojuchoce(item,index)">
										使用
									</tn-button>
								</view>


							</view>
						</view>
					</block>
				</view>
			</scroll-view>
		</tn-popup>






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
				daojushow: false,
				daojutitle: '',
				daojuid: 0,
				daojulist: [],
				options1: [{
					text: '拉黑',
					style: {
						backgroundColor: '#000000'
					}
				}, {
					text: '删除',
					style: {
						backgroundColor: '#E83A30'
					}
				}],
				loginBoxFlag: false, // 登录框显示隐藏状态
				show_fabu: false,
				cardCur: 0,
				content: [],
				userlist: [],
				tokenlogin: ''
			}
		},

		onPullDownRefresh() {
			this.mescroll.resetUpScroll();
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},

		onTabItemTap(e) {
			if (e.index == 3) {
				//this.mescroll.resetUpScroll();	  
			}

		},



		mounted() {
			let that = this
			this.tokenlogin = uni.getStorageSync('token')

			uni.$off('setLoginBoxFlag_preferred');
			uni.$on('setLoginBoxFlag_preferred', loginBoxFlag => {
				that.loginBoxFlag = loginBoxFlag;
			});

			uni.$on('loginok', data => {
				that.tokenlogin = uni.getStorageSync('token')
				that.mescroll.resetUpScroll()
			});

			this.mescroll.optDown.use = false


			uni.$on('indexpreferred', data => {
				if (!uni.getStorageSync('token')) {
					that.loginBoxFlag = true
					return false;
				} else {
					//that.show_fabu = true
				}

			});

			that.content = uni.getStorageSync('chatlist')

			// 注册接受消息监听
			uni.$on('listMessage', (message) => {
				if (message.type == 'text' || message.type == 'liwuuser' || message.type == 'mp3' || message
					.type == 'image') {
					setTimeout(() => {
						that.mescroll.resetUpScroll();
					}, 2000);
				}

			});

			// 注册接受消息监听
			uni.$on('fasonglist', (message) => {
				that.mescroll.resetUpScroll();
			});


			this.setPermissions()

			this.huhuanlist()

		},

		methods: {
			async huhuanlist() {
				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/four/huhuan_list',
					data: {
						page: 1
					}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						that.userlist = result.data.data.data;
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



			async huhuan() {

				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/gift/my_daoju_huhuan',
					data: {
						tabsIndex: 0
					}
				});
				if (result.data.code == 200) {
					this.daojushow = true
					this.daojulist = result.data.data
				}
			},
			async daojuchoce(item) {
				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/gift/my_daoju_huhuan_pass',
					data: {
						id: item.id
					}
				});
				if (result.data.code == 200) {
					this.daojushow = false
					this.msg('呼唤成功')
				}
			},

			//点击单行
			itemClick(data) {
				console.log('点击', data)
			},
			//拉黑
			del(data) {
				this.onSwiperItemClick(data, 2)
			},
			//删除
			edit(data) {
				this.onSwiperItemClick(data, 1)
			},

			guangchang() {
				uni.switchTab({
					url: '/pages/circle/circle'
				})
			},
			async onSwiperItemClick(e) {
				if (e.index > -1) {
					let that = this;
					let result = await that.$request({
						loading: 0,
						method: 'post',
						url: '/api/chat/delChatLog',
						data: {
							id: e.name_id,
							status: e.index + 1
						}
					});
					if (result.statusCode == 200) {
						if (result.data.code == 200) {
							this.content.splice(e.name, 1);
							//	that.mescroll.resetUpScroll();

						}
					}

				}

			},

			async onSwiperItemClick111(e, type) {
				if (e.paixu > -1) {
					let that = this;
					let result = await that.$request({
						loading: 0,
						method: 'post',
						url: '/api/chat/delChatLog',
						data: {
							id: e.id,
							status: type
						}
					});

					if (result.statusCode == 200) {
						if (result.data.code == 200) {
							this.content.splice(e.name, 1);
						}
					}

				}

			},

			denglu() {
				this.loginBoxFlag = true
			},

			refreshFn() {
				console.log('登录返回')
				this.mescroll.resetUpScroll();
			},

			qiehuan(type, title) {
				this.navigateToFn({
					url: '/minePages/my_msg?type=' + type + '&title=' + title,
					checkLogin: true
				})
			},


			jinru(item, index) {
				console.log(item)
				uni.$emit('jianshacount', item.unread)
				this.content[index].unread = 0
				this.navigateToFn({
					url: '/minePages/chat/talk?toid=' + item.toid + '&toname=' + item.username,
					checkLogin: true
				})
			},
			/// 列表调用
			downCallback(mescroll) {
				mescroll.endSuccess();
				mescroll.resetUpScroll();
			},
			async upCallback(mescroll) {
				let that = this;
				if (!uni.getStorageSync('token')) {

					mescroll.endErr()
					return
				}

				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/chat/get_list',
					data: {
						id: that.id,
						page: mescroll.num
					}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						if (mescroll.num == 1) {
							that.content = result.data.data.data;

							if (result.data.data.data.length == 0) {
								mescroll.endErr()
								return

							}

						} else {
							that.content = that.content.concat(result.data.data.data);
						}
						mescroll.endSuccess(result.data.data.data.length, result.data.data.data.length >= mescroll
							.size);
						uni.setStorageSync('chatlist', that.content)





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


			setPermissions() {
				// #ifdef APP-PLUS  
				if (plus.os.name == 'Android') { // 判断是Android
					var main = plus.android.runtimeMainActivity();
					var pkName = main.getPackageName();
					var uid = main.getApplicationInfo().plusGetAttribute("uid");
					var NotificationManagerCompat = plus.android.importClass(
						"android.support.v4.app.NotificationManagerCompat");
					//android.support.v4升级为androidx
					if (NotificationManagerCompat == null) {
						NotificationManagerCompat = plus.android.importClass(
							"androidx.core.app.NotificationManagerCompat");
					}
					var areNotificationsEnabled = NotificationManagerCompat.from(main).areNotificationsEnabled();
					// 未开通‘允许通知’权限，则弹窗提醒开通，并点击确认后，跳转到系统设置页面进行设置  
					if (!areNotificationsEnabled) {
						uni.showModal({
							title: '通知权限开启提醒',
							content: '您还没有开启通知权限，无法接受到消息通知，请前往设置！',
							showCancel: false,
							confirmText: '去设置',
							success: function(res) {
								if (res.confirm) {
									var Intent = plus.android.importClass('android.content.Intent');
									var Build = plus.android.importClass("android.os.Build");
									//android 8.0引导  
									if (Build.VERSION.SDK_INT >= 26) {
										var intent = new Intent('android.settings.APP_NOTIFICATION_SETTINGS');
										intent.putExtra('android.provider.extra.APP_PACKAGE', pkName);
									} else if (Build.VERSION.SDK_INT >= 21) { //android 5.0-7.0  
										var intent = new Intent('android.settings.APP_NOTIFICATION_SETTINGS');
										intent.putExtra("app_package", pkName);
										intent.putExtra("app_uid", uid);
									} else { //(<21)其他--跳转到该应用管理的详情页  
										intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
										var uri = Uri.fromParts("package", mainActivity.getPackageName(),
											null);
										intent.setData(uri);
									}
									// 跳转到该应用的系统通知设置页  
									main.startActivity(intent);
								}
							}
						});
					}
				} else if (plus.os.name == 'iOS') { // 判断是ISO
					var isOn = undefined;
					var types = 0;
					var app = plus.ios.invoke('UIApplication', 'sharedApplication');
					var settings = plus.ios.invoke(app, 'currentUserNotificationSettings');
					if (settings) {
						types = settings.plusGetAttribute('types');
						plus.ios.deleteObject(settings);
					} else {
						types = plus.ios.invoke(app, 'enabledRemoteNotificationTypes');
					}
					plus.ios.deleteObject(app);
					isOn = (0 != types);
					if (isOn == false) {
						uni.showModal({
							title: '通知权限开启提醒',
							content: '您还没有开启通知权限，无法接受到消息通知，请前往设置！',
							showCancel: false,
							confirmText: '去设置',
							success: function(res) {
								if (res.confirm) {
									var app = plus.ios.invoke('UIApplication', 'sharedApplication');
									var setting = plus.ios.invoke('NSURL', 'URLWithString:', 'app-settings:');
									plus.ios.invoke(app, 'openURL:', setting);
									plus.ios.deleteObject(setting);
									plus.ios.deleteObject(app);
								}
							}
						});
					}
				}
				// #endif  

			}

		}
	}
</script>

<style lang="scss" scoped>
	.cro{
		width: 100%;
		height: 38rpx;
		border-radius: 38rpx 38rpx 0 0;
		background-color: #fff;
	}
	.topicon {
		width: 73.03rpx;
		height: 73.13rpx;
		margin-bottom: 18rpx;
	}

	.top-tab-view-normal {
		line-height: 40rpx;

		font-size: 36rpx;
		font-weight: bold;
		color: #FFFFFF;
	}

	.index_bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 1;
	}

	.refresh {
		width: 30rpx;
		height: 30rpx;
		margin-right: 22rpx;
	}

	.index-top-left {
		align-items: center;
	}

	.index-top {
		display: flex;
		background-color: transparent;
		height: 100rpx;
		align-items: center;
		margin-left: 22rpx;
		justify-content: space-between;
		margin-bottom: 20rpx;
		position: relative;
		z-index: 99;
	}

	.template-hot {}

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

	.message {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;

		&__left {
			width: 13%;
		}

		&__middle {
			width: 75%;
			padding-left: 20rpx;
			padding-right: 40rpx;
		}

		&__right {
			width: 12%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
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