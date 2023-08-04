<template>
	<view class="template-mine tn-safe-area-inset-bottom">

		<tn-nav-bar :isBack="false" :bottomShadow="false" backgroundColor="none">
			<view class="custom-nav tn-flex tn-flex-col-center tn-flex-row-right">
				<view class="custom-nav__back" @click="navigateToFn({ url: '/minePages/set', checkLogin: true })">
					<view class="tn-icon-set tn-color-black tn-text-shadow-brown" style="font-size: 50rpx;">
					</view>
				</view>
			</view>
		</tn-nav-bar>

		<image src="http://pw.manxingkj.com/images/newUI/bg.png" mode="widthFix" class="index_bg"></image>


		<view class="tn-padding" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<mescroll-body ref="mescrollRef" @down="downCallback" @up="upCallback">
				<view class="meng  " style="	position: relative;
		z-index: 99; background-color: transparent;">
					<!-- 图标logo/头像 -->
					<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-bottom"
						@click="navigateToFn({ url: '/minePages/edit', checkLogin: true })">
						<view class="justify-content-item" style="width: 100%;">
							<view class="tn-flex tn-flex-col-center tn-flex-row-left" style="width: 100%;">
								<view class="logo-pic ">
									<view class="logo-image">
										<tn-avatar size="xl" :src="body.avatar" :bg="body.bg"></tn-avatar>

									</view>
								</view>
								<view class="" style="width: 50%;">
									<view
										class="tn-padding-right tn-padding-left-sm tn-text-lg tn-text-bold tn-text-justify">
										<text class="">{{body.nickname}}</text>
										<text class="dk-lv tn-main-gradient-indigo--light"
											v-if="body.vip==0&&configInfo.is_lv">LV {{body.lv}}</text>
										<text class="dk-vip tn-main-gradient-orangeyellow" v-if="body.vip==1"><text
												class="tn-icon-vip tn-color-black"
												style="font-size: 14px;margin-left: -5px;"></text>VIP{{body.vip_lv}}</text>

									</view>
									<view
										class="tn-padding-right tn-padding-top-xs tn-padding-left-sm tn-text-ellipsis">
										<text class=""
											style="font-size: 24rpx;font-weight: bold;color: #000000;line-height: 35rpx;">ID:
											{{body.id}}
										</text>
										<!-- <tn-tag @click="navigateToFn({ url: '/minePages/edit', checkLogin: true })"
											shape="circle" backgroundColor="tn-cool-bg-color-15" margin="10rpx"
											width="190rpx">
											<text class="tn-icon-edit" style="font-size:30rpx;"></text>编辑资料
										</tn-tag> -->
									</view>
									<view class="tn-padding-right  tn-padding-left-sm tn-text-ellipsis">
										<tn-line-progress :height="10" :percent="baifenbi" :striped="true"
											activeColor='#A64CE3'></tn-line-progress>
									</view>
									<view class="tn-padding-right  tn-padding-left-sm tn-text-ellipsis">
										<text class="" style="font-size:12px;color: #fff;">Lv <text class="tn-text-bold"
												style="font-size: 14px;margin-left: 1px;color: #fff;">{{body.lv}}</text>
										</text>
										<text class=""
											style="font-size:12px; margin-left: 10px;color: #fff;">还差{{chajifen}}积分升级
										</text>

									</view>

								</view>
								<view class="edit-box"
									@click="navigateToFn({ url: '/minePages/edit', checkLogin: true })">
									编辑资料
								</view>
							</view>
						</view>
					</view>





					<view class="blogger-tips-data__info tn-flex"
						style="width: 686rpx;height: 134rpx;position: relative;">
						<image src="http://pw.manxingkj.com/images/newUI/mine_info.png" mode="" class="mine_info-bg"></image>

						<view class="tn-flex-1 tn-padding-sm " @click="tofans('follow')" style="position: relative;
		z-index: 99;">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
								<view class="">
									<view class="tn-text-xl ">{{body.guanzhu}}</view>
								</view>
								<view class="tn-margin-top-xs  tn-text-df tn-text-center"
									style="margin: 14rpx 0 20rpx 0;">
									<text class=" " style="font-size: 12px;">关注</text>
								</view>
							</view>
						</view>
						<view class="tn-flex-1 tn-padding-sm " @click="tofans('fans')" style="position: relative;
		z-index: 99;">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
								<view class="">
									<view class="tn-text-xl ">{{body.fansi}}</view>
								</view>
								<view class="tn-margin-top-xs  tn-text-df tn-text-center"
									style="margin: 14rpx 0 20rpx 0;">

									<text class=" " style="font-size: 12px;">粉丝</text>
								</view>
							</view>
						</view>
						<view class="tn-flex-1 tn-padding-sm "
							@click="navigateToFn({ url: '/minePages/my_msg?type=1&title=我的获赞', checkLogin: true })"
							style="position: relative;
		z-index: 99;">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
								<view class="">
									<view class="tn-text-xl ">{{body.zhan}}</view>
								</view>
								<view class="tn-margin-top-xs tn-text-df tn-text-center"
									style="margin: 14rpx 0 20rpx 0;">
									<text class="" style="font-size: 12px;">获赞</text>
								</view>
							</view>
						</view>
					</view>
				</view>

				<!-- 更多信息-->
				<view
					class="tn-info__container tn-flex  tn-flex-col-center tn-flex-row-between  "
					style="position: relative;
		z-index: 99; background-color: transparent;">
					<view class="mine_center_left">
						<image src="http://pw.manxingkj.com/images/newUI/mine_jindou.png" mode="" class="mine_jindou"
							@click="navigateToFn({ url: '/minePages/gift/chongzhi', checkLogin: true })"></image>
						<view class=" tn-padding-top-xs"
							style="z-index: 99;position: relative; margin-top: 76rpx ;margin-left: 38rpx;">
							{{body.money}}
						</view>
					</view>
					<view class="mine_center_left">
						<image src="http://pw.manxingkj.com/images/newUI/mine_dingdan.png" mode="" class="mine_jindou"
							@click="navigateToFn({ url: '/minePages/gift/chongzhi', checkLogin: true })"></image>
						<view class=" tn-padding-top-xs"
							style="z-index: 99;position: relative; margin-top: 76rpx ;margin-left: 38rpx;">
							{{body.order_num}}
						</view>
					</view>



				</view>

				<!-- 帖子列表 -->
				<view
					class="tn-info__container tn-flex tn-flex-wrap tn-flex-col-center tn-flex-row-between tn-margin-left-sm tn-margin-right-sm "
					v-if="body.is_paly">
					<!-- #ifdef H5||MP -->
					<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
						<view class="tn-flex tn-flex-col-center">

							<view class="tn-margin-left-sm tn-flex-1">小程序下单通知
								<tn-tag @click="tongzhi()" shape="circle" backgroundColor="tn-cool-bg-color-2"
									margin="10rpx" width="120rpx">
									<text class="tn-icon-add" style="font-size:30rpx;"></text>增加
								</tn-tag>
							</view>
							<view class="tn-margin-left-sm tn-color-red ">剩{{body.push_num}}次</view>
						</view>
					</tn-list-cell>
					<!-- #endif -->
					<view @click="navigateToFn({ url: '/gamePages/my_goods', checkLogin: true })"
						class="tn-info__item tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between job-shadow tn-bg-white">
						<view
							class="tn-info__item__left tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-left">

							<view class="tn-info__item__left__content">
								<view class="tn-info__item__left__content--title tn-text-bold">我的收入</view>
								<view class="tn-info__item__left__content--data tn-padding-top-xs">{{body.gift_money}}
								</view>
							</view>
						</view>
						<view class="tn-info__item__right">
							<view class="tn-info__item__right--icon">
								<view class="tn-icon-right"></view>
							</view>
						</view>
					</view>

					<view @click="navigateToFn({ url: '/gamePages/my_goods', checkLogin: true })"
						class="tn-info__item tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between job-shadow tn-bg-white">
						<view
							class="tn-info__item__left tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-left">

							<view class="tn-info__item__left__content">
								<view class="tn-info__item__left__content--title tn-text-bold">我的服务</view>
								<view class="tn-info__item__left__content--data tn-padding-top-xs">
									{{body.goods_game_num}}个
								</view>
							</view>
						</view>
						<view class="tn-info__item__right">
							<view class="tn-info__item__right--icon">
								<view class="tn-icon-right"></view>
							</view>
						</view>
					</view>
				</view>
				<!-- 更多信息-->

				<!-- 更多信息-->
				<view class=" tn-margin-top-xl  " style="position: relative;
		z-index: 99; background-color: transparent;">
					<!-- 方式12 start-->

					<view class="tn-flex tn-flex-row-center tn-radius tn-flex-wrap">
						<view class="tn-padding-sm tn-margin-xs tn-radius" @click="shenqing()">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
								<image src="http://pw.manxingkj.com/images/newUI/mine_list1.png" mode="" class="mine_list_icon"></image>
								<view class="tn-text-center">
									<text class="tn-text-ellipsis">申请接单</text>
								</view>
							</view>
						</view>
						<view class="tn-padding-sm tn-margin-xs tn-radius" @click="myhome()">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
								<image src="http://pw.manxingkj.com/images/newUI/mine_list3.png" mode="" class="mine_list_icon"></image>
								<view class="tn-text-center">
									<text class="tn-text-home">我的动态</text>
								</view>
							</view>
						</view>
						<view class="tn-padding-sm tn-margin-xs tn-radius"
							@click="navigateToFn({ url: '/circlePages/fans?type=fans&user_id=0', checkLogin: true })">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
								<image src="http://pw.manxingkj.com/images/newUI/mine_list2.png" mode="" class="mine_list_icon"></image>
								<view class="tn-text-center">
									<text class="tn-text-ellipsis">任务中心</text>
								</view>
							</view>
						</view>

						<view class="tn-padding-sm tn-margin-xs tn-radius"
							@click="navigateToFn({ url: '/minePages/my_star', checkLogin: true })">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
								<image src="http://pw.manxingkj.com/images/newUI/mine_list4.png" mode="" class="mine_list_icon"></image>
								<view class="tn-text-center">
									<text class="tn-text-ellipsis">会员特权</text>
								</view>
							</view>
						</view>

						<view class="tn-padding-sm tn-margin-xs tn-radius"
							@click="navigateToFn({ url: '/homePages/about?id=31', checkLogin: false })">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
								<image src="http://pw.manxingkj.com/images/newUI/mine_list5.png" mode="" class="mine_list_icon"></image>
								<view class="tn-text-center">
									<text class="tn-text-ellipsis">隐私政策</text>
								</view>
							</view>
						</view>
						<view class="tn-padding-sm tn-margin-xs tn-radius"
							@click="navigateToFn({ url: '/homePages/about?id=32', checkLogin: false })">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
								<image src="http://pw.manxingkj.com/images/newUI/mine_list6.png" mode="" class="mine_list_icon"></image>
								<view class="tn-text-center">
									<text class="tn-text-ellipsis">帮助中心</text>
								</view>
							</view>
						</view>
						<view class="tn-padding-sm tn-margin-xs tn-radius"
							@click="navigateToFn({ url: '/homePages/about?id=26', checkLogin: false })">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
								<image src="http://pw.manxingkj.com/images/newUI/mine_list7.png" mode="" class="mine_list_icon"></image>
								<view class="tn-text-center">
									<text class="tn-text-ellipsis">联系我们</text>
								</view>
							</view>
						</view>
					
							<view class="tn-padding-sm tn-margin-xs tn-radius"
								@click="navigateToFn({ url: '/homePages/about?id=25', checkLogin: false })">
								<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
									<image src="http://pw.manxingkj.com/images/newUI/mine_list8.png" mode="" class="mine_list_icon">
									</image>
									<view class="tn-text-center">
										<text class="tn-text-ellipsis">关于我们</text>
									</view>
								</view>
							</view>


					

					</view>

					<!-- 方式12 end-->


					<view class="about-shadow tn-margin-top-xl tn-padding-top-sm tn-padding-bottom-sm">



						<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30"
							@click="navigateToFn({ url: '/minePages/chat/talkkefu?toid=1&toname=官方客服', checkLogin: true })">
							<view class="tn-flex tn-flex-col-center">
								<!-- <view
									class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-cool-bg-color-1 tn-color-white">
									<view class="tn-icon-service-fill"></view>
								</view> -->
								<image src="http://pw.manxingkj.com/images/newUI/mine_list9.png" mode="" class="mine_list_icon2">
								</image>
								<view class="tn-margin-left-sm tn-flex-1">在线客服</view>
								<view class="tn-margin-left-sm tn-color-gray tn-icon-right"></view>
							</view>
						</tn-list-cell>
						<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30"
							@click="navigateToFn({ url: '/minePages/share', checkLogin: true })">
							<view class="tn-flex tn-flex-col-center">
								<image src="http://pw.manxingkj.com/images/newUI/mine_list10.png" mode="" class="mine_list_icon2">
								</image>
								<view class="tn-margin-left-sm tn-flex-1">邀请奖励</view>
								<view class="tn-margin-left-sm tn-color-gray tn-icon-right"></view>
							</view>
						</tn-list-cell>
						<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30"
							@click="navigateToFn({ url: '/gamePages/team_index', checkLogin: true })">
							<view class="tn-flex tn-flex-col-center">
								<image src="http://pw.manxingkj.com/images/newUI/mine_list11.png" mode="" class="mine_list_icon2">
								</image>
								<view class="tn-margin-left-sm tn-flex-1">工会中心</view>
								<view class="tn-margin-left-sm tn-color-gray tn-icon-right"></view>
							</view>
						</tn-list-cell>

					</view>
				</view>

			</mescroll-body>

		</view>

		<view class='tn-tabbar-height'></view>


		<!-- 登录框组件 -->
		<login-fn :is-show-login="loginBoxFlag" @loginSuccessCallback="refreshFn" @close="closeGlobalLoginFn">
		</login-fn>


		<tn-modal width="80%" v-model="sheqingshow" backgroundColor="#ffffff" padding="30rpx 20rpx" :radius="25"
			title="设置" :showCloseBtn="false" :maskCloseable="true" :zoom="true" :custom="true">

			<view class="custom-modal-content tn-padding-sm ">
				<view class="  tn-margin-top  ">
					<view class=" tn-flex tn-flex-row-center " style="margin-top:20rpx;">
						<view class="tn-padding-xs tn-text-bold tn-text-lg">申请说明</view>
					</view>
					<view class=" tn-flex tn-flex-row-left " style="margin-top:20rpx;">
						<text class="tn-padding-xs">申请服务类目，提交相关资料，后台审核后方可发布具体的服务产品</text>
					</view>

				</view>

				<view class="tn-flex tn-flex-row-center tn-radius tn-margin-top">
					<tn-button @click="navigateToFn({ url: '/gamePages/shenqing?type=0', checkLogin: false })"
						shape="round" backgroundColor="tn-main-gradient-bluepurple--reverse" padding="40rpx 30rpx"
						fontBold style="margin-right: 10px;">
						申请线上
					</tn-button>
					<tn-button @click="navigateToFn({ url: '/gamePages/shenqing?type=1', checkLogin: false })"
						shape="round" backgroundColor="tn-cool-bg-color-5" padding="40rpx 30rpx" fontBold
						style="margin-right: 10px;">
						申请线下
					</tn-button>
				</view>
			</view>
		</tn-modal>


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
				sheqingshow: false,
				loginis: '',
				show_fabu: false,
				loading: true,
				loginBoxFlag: false, // 登录框显示隐藏状态
				id: 0,
				baifenbi: 0,
				chajifen: 0,
				body: {
					"nickname": '',
					"lv": 0,
					"dec": 0,
					"city": 0,
					"bg_img": '',
					"lv_score": 0,
					"id": 0,
					"user_leve_once-body": 0
				},
				content: [],
				historyData: [{
						title: '我的钱包',
						icon: 'pay',
						color: 'orange',
						login: true,
						url: '/minePages/gift/chongzhi',
					},
					{
						title: 'VIP会员',
						icon: 'vip',
						color: 'purple',
						url: 'orange',
						login: false,
						url: '/minePages/vip',
					},
					{
						title: '任务中心',
						icon: 'safe',
						color: 'blue',
						url: 'orange',
						login: true,
						url: '/minePages/qiandao',
					},
					{
						title: '道具商城',
						icon: 'shop',
						color: 'purplered',
						url: 'orange',
						login: false,
						url: '/minePages/daoju',
					}
				]
			}
		},


		onTabItemTap(e) {
			if (e.index == 4) {
				this.infobody()
			}
		},
		mounted() {

			let that = this
			that.loginis = uni.getStorageSync('token')
			uni.$off('setLoginBoxFlag_indexmine');
			uni.$on('setLoginBoxFlag_indexmine', loginBoxFlag => {
				that.loginis = uni.getStorageSync('token')
				that.loginBoxFlag = loginBoxFlag;
			});


			uni.$on("loginok", async (res) => {
				console.log('登录成功')
				that.loginis = uni.getStorageSync('token')
				this.infobody()
			})


			that.infobody()

		},
		methods: {
			shenqing() {
				if (!uni.getStorageSync('token')) {
					this.loginBoxFlag = true
					return false;
				}
				this.sheqingshow = true
			},
			downCallback(mescroll) {
				this.infobody()
				mescroll.endErr()
			},

			jinru(item) {
				this.navigateToFn({
					url: item.url,
					checkLogin: item.login
				})
			},
			refreshFn() {
				this.infobody()
			},

			out() {
				let that = this
				uni.showModal({
					title: '提示',
					content: '确认退出账号吗?',
					confirmText: '确定',
					success: function(res) {
						if (res.confirm) {
							that.logOutFn();
							that.body.lv = 0
							uni.reLaunch({
								url: '/pages/index'
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},







			infobody() {
				let that = this
				if (!uni.getStorageSync('token')) {
					that.info()
					that.loginBoxFlag = true
					return false;
				} else {
					that.info()
				}
			},


			async guanzhu(id) {

				if (!uni.getStorageSync('token')) {
					this.loginBoxFlag = true
					return false;
				}
				let result = await this.flowUser(id)
				this.body.is_follow = result.is_follow
				this.msg(result.msg)


			},

			async info() {
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/index/GetUser',
					data: {}
				});


				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						that.body = result.data.data.userinfo;
						if (that.body.id) {

							if (that.body.lv_score < -1) {
								that.body.lv_score = that.body.lv_score * -1
							}
							that.baifenbi = that.body.lv_score / that.body.user_leve_once * 100
							that.chajifen = that.body.user_leve_once - that.body.lv_score
						}



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

			/// 列表调用
			myhome() {
				this.navigateToFn({
					url: '/circlePages/blogger_other?id=' + uni.getStorageSync('user_id'),
					checkLogin: true
				})
			},



			tofans(type) {

				if (!uni.getStorageSync('token')) {
					this.loginBoxFlag = true
					return false;
				}

				this.navigateToFn({
					url: '/circlePages/fans?type=' + type + '&user_id=' + this.id,
					checkLogin: false
				})


			},
			// 关闭压屏窗
			closeLandscape() {
				this.show_fabu = false
			},

			async tongzhi() {
				let that = this
				if (!uni.getStorageSync('token')) {
					this.loginBoxFlag = true
					return false;
				}
				// #ifdef MP
				if (that.body.pushorder) {
					uni.requestSubscribeMessage({
						tmplIds: [that.body.pushorder],
						success: (res) => {
							that.addtongzhi()
						}
					})
				}
				// #endif
				// #ifdef H5
				that.msg('小程序有效')
				// #endif

			},


			async addtongzhi() {
				uni.showLoading({
					mask: true,
					title: '处理中'
				})
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/games/add_push',
					data: {}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						uni.hideLoading()
						this.msg('添加成功')
						this.body.push_num = this.body.push_num + 1
					} else {
						uni.showToast({
							icon: 'none',
							title: result.data.msg
						});
					}
				}

			},



		}
	}
</script>

<style lang="scss" scoped>
	.mine_list_icon {
		width: 51.96rpx;
		height: 60rpx;
		margin-bottom: 14rpx;
	}
	.mine_list_icon2 {
		width: 35.8rpx;
		height: 41.33rpx;
		margin-right: 40rpx;
	}

	.mine_center_left {
		position: relative;
		width: 342.81rpx;
		height: 155.55rpx;
	}

	.mine_jindou {
		position: absolute;
		top: 0;
		left: 0;
		width: 342.81rpx;
		height: 155.55rpx;
	}

	.mine_info-bg {
		width: 686rpx;
		height: 134rpx;
		top: 0;
		left: 0;
		position: absolute;
	}

	.edit-box {
		font-size: 17rpx;
		font-weight: bold;
		color: #FFFFFF;
		line-height: 29rpx;
		padding: 8rpx 30rpx;
		background-color: rgba(255, 255, 255, 0.16);
		border-radius: 30rpx;
		border: 1rpx #fff solid;
	}

	.index_bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 1;
	}

	.meng {}

	.icon11 {
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
				width: 100rpx;
				height: 100rpx;
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
					background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg.png);
				}
			}
		}
	}


	.template-mine {
		max-height: 100vh;
	}

	.tn-tabbar-height {
		min-height: 120rpx;
		height: calc(140rpx + env(safe-area-inset-bottom) / 2);
	}

	/* 自定义导航栏内容 start */
	.custom-nav {
		height: 100%;

		&__back {
			margin: auto 5rpx;
			font-size: 40rpx;
			margin-right: 10rpx;
			flex-basis: 5%;
			width: 100rpx;
			position: absolute;
		}
	}

	/* 自定义导航栏内容 end */

	/* 顶部背景图 start */
	.top-backgroup {


		height: 380rpx;
		z-index: -1;

		.backgroud-image {
			width: 100%;
			height: 250rpx;
			// z-index: -1;
		}
	}

	/* 顶部背景图 end */

	/* 标题 start */
	.nav_title {
		-webkit-background-clip: text;
		color: #0E122A;


		&--wrap {
			position: relative;
			display: flex;
			height: 120rpx;
			align-items: center;
			justify-content: center;
			font-weight: bold;
			background-image: url(https://tnuiimage.tnkjapp.com/title_bg/title44.png);
			background-size: cover;
		}
	}

	/* 标题 end */

	/* 用户头像 start */
	.logo-image {
		width: 190rpx;
		height: 150rpx;
		position: relative;
	}

	.logo-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;


		border-radius: 50%;
		overflow: hidden;
		// background-color: #FFFFFF;
	}

	/* 页面 start*/
	.about-shadow {
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	.about {

		&__wrap {
			position: relative;
			z-index: 1;
			margin: 20rpx 30rpx;
			margin-top: -230rpx;
		}
	}

	.about-shadow {
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	/* 页面 end*/

	/* 图标容器12 start */
	.tn-three {
		position: absolute;
		top: 50%;
		right: 50%;
		bottom: 50%;
		left: 50%;
		transform: translate(-38rpx, -16rpx) rotateX(30deg) rotateY(20deg) rotateZ(-30deg);
		text-shadow: -1rpx 2rpx 0 #f0f0f0, -2rpx 4rpx 0 #f0f0f0, -10rpx 20rpx 30rpx rgba(0, 0, 0, 0.2);
	}

	.icon20 {
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
				width: 100rpx;
				height: 100rpx;
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
					background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg.png);
				}
			}
		}
	}

	/* 图标容器12 start */
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
				width: 15rpx;
				height: 15rpx;
				font-size: 50rpx;
				border-radius: 50%;
				margin-bottom: 38rpx;
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

	/* 图标容器1 start */
	.icon1 {
		&__item {
			// width: 30%;
			background-color: #FFFFFF;
			border-radius: 10rpx;
			padding: 30rpx;
			margin: 20rpx 10rpx;
			transform: scale(1);
			transition: transform 0.3s linear;
			transform-origin: center center;

			&--icon {
				width: 40rpx;
				height: 40rpx;
				font-size: 28rpx;
				border-radius: 50%;
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
					background-image: url(@/static/icon_bg.png);
				}
			}
		}
	}

	/* 图标容器1 end */

	/* 大嘴鸟*/
	.dong {
		z-index: 9999;
		position: fixed;
		top: -40px;
		right: -80px;
		transform: scale(0.24);
		-webkit-transform: scale(0.24);
		-moz-transform: scale(0.24);

	}

	.monster {
		transform: rotate(-50deg);
		-ms-transform: rotate(-50deg);
		/* IE 9 */
		-moz-transform: rotate(-50deg);
		/* Firefox */
		-webkit-transform: rotate(-50deg);
		/* Safari 和 Chrome */
		-o-transform: rotate(-50deg);
		/* Opera */
		display: flex;
		justify-content: center;
		position: relative;
		width: 170px;
		height: 400px;
		border-top-left-radius: 200px;
		border-top-right-radius: 200px;
		background-color: #3C47D7;
		box-shadow: 20px 20px 60px #4650E5;
	}

	.monster__face {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: absolute;
		top: 14%;
		width: 75%;
		height: 160px;
	}

	.monster__noses {
		top: 50%;
		display: flex;
		justify-content: space-between;
		width: 28%;
		height: auto;
		margin-bottom: 10px;
	}

	.monster__nose {
		width: 8px;
		height: 12px;
		border-radius: 20px;
		background: rgba(0, 0, 0, 0.5);
		box-shadow: 4px 8px 5px rgba(0, 0, 0, 0.1);
	}

	.monster__mouth {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		width: 100%;
		height: 0%;
		overflow: hidden;
		border: 25px solid #FFC333;
		border-radius: 100px;
		background-color: #810332;
		animation: mouth 1.75s infinite;
		box-shadow: 4px 8px 5px rgba(0, 0, 0, 0.2);
		box-sizing: border-box;
	}

	.monster__mouth::before {
		content: '';
		position: absolute;
		width: 150px;
		height: 80px;
		border-radius: 100px;
		background-color: #400018;
	}

	.monster__mouth::after {
		content: '';
		position: absolute;
		bottom: -80px;
		width: 160px;
		height: 80px;
		border-top-left-radius: 50%;
		border-top-right-radius: 50%;
		background-color: #DC1B50;
		animation: tongue 1.75s infinite;
	}

	.monster__top {
		position: absolute;
		top: -30px;
		width: 170px;
		height: 30px;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		background-color: #ffffff;
		z-index: 100;
		animation: t 1.75s infinite;
	}

	.monster__bottom {
		position: absolute;
		bottom: 0;
		width: 100px;
		height: 30px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		background-color: #ffffff;
		z-index: 100;
		animation: b 1.75s infinite;
	}


	.avatar-eye {
		position: absolute;
		top: -10%;
		width: 65px;
		height: 65px;
		background: linear-gradient(105deg, white, #cb87f4);
		border-radius: 100%;
		box-shadow: 4px 8px 5px rgba(0, 0, 0, 0.2);
		margin: 3px;
		-webkit-transform: translateX(-50%);
		transform: translateX(-50%);
	}


	.avatar-eye--green {
		background: linear-gradient(to bottom, #fdfdfd, #c3efea);
	}

	.avatar-eye--violet {
		background: linear-gradient(to bottom, #fdfdfd, #e6d6f6);
	}


	.eye--left {
		left: 10%;
	}

	.eye--right {
		left: 85%;
	}

	.eye--center {
		left: 45%;
		top: 10%;
	}

	.avatar-eye-pupil {
		position: absolute;
		width: 55%;
		height: 55%;
		left: 50%;
		top: 25%;
		-webkit-transform: translate(-50%);
		transform: translate(-50%);
		z-index: 100;
		border-radius: 100%;
	}


	.pupil--green {
		background: linear-gradient(135deg, rgba(188, 248, 177, 0.7), #2fa38c 75%);
	}

	.pupil--pink {
		background: linear-gradient(135deg, #f1a183, #8535cd);
	}


	.avatar-eye-pupil-blackThing {
		position: absolute;
		width: 55%;
		height: 55%;
		left: 50%;
		top: 25%;
		background: #2c2f32;
		-webkit-transform: translate(-50%);
		transform: translate(-50%);
		border-radius: 100%;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	}

	.avatar-eye-pupil-lightReflection {
		position: absolute;
		width: 7px;
		height: 7px;
		left: 25%;
		top: 10%;
		background: #ebebeb;
		-webkit-transform: translate(-50%);
		transform: translate(-50%);
		border-radius: 100%;
		box-shadow: 10px 10px 10px rgba(255, 255, 255, 0.2);
	}

	/* 信息展示 start */
	.tn-info {

		&__container {
			margin-top: 0rpx;
		}

		&__item {
			width: 48%;
			margin: 15rpx 0rpx;
			padding: 38rpx 28rpx;
			border-radius: 10rpx;

			&__left {

				&--icon {
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
					font-size: 40rpx;
					margin-right: 20rpx;
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
						background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg3.png);
					}
				}

				&__content {
					font-size: 30rpx;

					&--data {
						color: #848484;
						margin-top: 5rpx;
					}
				}
			}

			&__right {
				&--icon {
					font-size: 30rpx;
					opacity: 0.5;
				}
			}
		}
	}

	.job-shadow {
		box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.07);
		border-radius: 20rpx;
	}

	.tn-cool-bg-color-userhead {
		background-image: repeating-linear-gradient(182deg, #dde0ff, #ffffff);
	}
</style>