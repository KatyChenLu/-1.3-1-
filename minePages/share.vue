<template>
	<view class="template-mine tn-safe-area-inset-bottom">

		<tn-nav-bar fixed :bottomShadow="false">
			邀请奖励
		</tn-nav-bar>
		  	<mescroll-body ref="mescrollRef" @down="downCallback" @up="upCallback">
		<view class="tn-padding" :style="{paddingTop: vuex_custom_bar_height + 'px'}">

			<view class="meng tn-bg-white about-shadow">
				<!-- 图标logo/头像 -->
				<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-bottom"
					>
					<view class="justify-content-item" style="width: 100%;">
						<view class="tn-flex tn-flex-col-center tn-flex-row-left" style="width: 100%;">
							<view class="logo-pic tn-shadow">
								<view class="logo-image">
									<tn-avatar size="150rpx" :src="body.avatar"></tn-avatar>
								</view>
							</view>
							<view class="" style="width:100%;">
								<view
									class="tn-padding-right tn-padding-left-sm tn-text-xl tn-text-bold tn-text-justify">
									<text class="">{{body.nickname}}</text>	
								</view>
								<view class="tn-padding-right tn-padding-top-xs tn-padding-left-sm tn-text-ellipsis">
									<text class="" style="font-size:14px;">我的推荐人：{{body.daren_nickname}}
									</text>
								</view>


							</view>
						</view>
					</view>
				</view>

			</view>



			<!-- 帖子列表 -->

			<!-- 更多信息-->
			<view class="about-shadow tn-padding-top-sm tn-padding-bottom-sm tn-bg-white" v-if="body.yaoqing_open">
				<view class="">
					<view class="tn-flex tn-flex-row-between" >
						<view class="justify-content-item tn-margin tn-text-bold ">
							邀请好友注册奖励{{configInfo.site_moneyname}}{{body.yaoqing_jiang_money}}个
						</view>
						
					</view>
				</view>
			</view>

			<view class="about-shadow tn-padding-top-sm tn-padding-bottom-sm tn-bg-white" v-if="body.xiaji_chong_fan">
				<view class="">
					<view class="tn-flex tn-flex-row-between" >
						<view class="justify-content-item tn-margin tn-text-bold ">
							奖励好友每次充值的{{body.xiaji_chong_fan}}%{{configInfo.site_moneyname}}
						</view>
						
					</view>
				</view>
			</view>
			<view class="">				
		<!-- #ifdef MP -->
		<tn-button :shadow="true" width="100%" backgroundColor="tn-main-gradient-red"
		 height="80rpx"	 margin="20rpx 0"  open-type="share">立即邀请</tn-button>
		<!-- #endif -->	
			<!-- #ifndef MP -->
		<tn-button :shadow="true" width="100%" backgroundColor="tn-main-gradient-red"
		 height="80rpx"	 margin="20rpx 0" @click="shouhuxiu=true">立即邀请</tn-button>
				<!-- #endif -->					
			</view>

		</view>
		
	
			<tn-modal width="80%" v-model="shezhishow" backgroundColor="#ffffff" padding="30rpx 20rpx" :radius="25"
				title="设置" :showCloseBtn="false"  :maskCloseable="true" :zoom="true" :custom="true">
			
				<view class="custom-modal-content tn-padding-sm ">
					<view class="tn-text-left tn-color-black" style="font-size: 14px;">
					 最少提现{{body.money_ti_di}}元， 最高提现{{body.money_ti_gao}}元
					</view>
						
			
				</view>
			</tn-modal>
			 

	
			
		<view class="about-shadow tn-padding-top-sm tn-padding-bottom-sm tn-bg-white">


			<view class="adver-wrap tn-bg-white">
				<view class=" tn-margin-top  tn-padding-bottom-sm">				
					<view class="tn-flex tn-margin-left-sm tn-margin-right-sm tn-margin-top">
						<view class="tn-flex-1 tn-padding-sm tn-radius" @click="navigateToFn({ url: '/minePages/fenxiao/my_user', checkLogin: true })">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
								<view
									class="icon12__item--icon  tn-bg-red--light tn-color-red   tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur">
									<view class="">{{body.reguser}}</view>
								</view>								
								<view class="tn-color-black tn-text-df tn-text-center ">
									<text class="tn-text-ellipsis">邀请好友</text>
								</view>							
							</view>
						</view>

						<view class="tn-flex-1 tn-padding-sm tn-radius" @click="navigateToFn({ url: '/minePages/money_log', checkLogin: true })">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
								<view
									class="icon12__item--icon  tn-bg-red--light tn-color-red   tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur">
									<view class="">{{body.regsong}}</view>
								</view>
								<view class="tn-color-black tn-text-df tn-text-center ">
									<text class="tn-text-ellipsis">注册奖励</text>
								</view>
							</view>
						</view>

						<view class="tn-flex-1 tn-padding-sm tn-radius" @click="navigateToFn({ url: '/minePages/money_log', checkLogin: true })">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
								<view
									class="icon12__item--icon  tn-bg-red--light tn-color-red   tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur">
									<view class="">{{body.regchong}}</view>
								</view>
								<view class="tn-color-black tn-text-df tn-text-center ">
									<text class="tn-text-ellipsis">充值奖励</text>
								</view>
							</view>
						</view>


					</view>
					
					
					
					
					<tn-list-cell  v-for="(item, index) in content" :key="index" v-if="content.length>0" >
					 
								<view class="message" >		 
					    <view class="message__middle">				  
					      <view class="message__name">
									<text class="tn-text-bold " style="font-size: 14px;">好友注册：{{item.nickname}}
								</text>											
									</view>		      
									<view class="message__content tn-margin-top" >
									奖励：{{configInfo.site_moneyname}}{{body.yaoqing_jiang_money}}个  注册时间：{{ item.add_time }}
									</view>
					    </view>
												
												
												
												
					  </view>			
					</tn-list-cell>
					
					
					
					
					
					
					
					
					
				</view>
			</view>
		</view>
		<view class='tn-tabbar-height'></view>

	<tn-popup v-model="shouhuxiu" width="80%" height="30%" mode="bottom" :borderRadius="30" :closeBtn="false"
			:maskCloseable="true">
			<view class="tn-text-center tn-margin-top">
				点击二维码保存
				</view>
					<view class="tn-text-center" @click="datu(body.erweima)">
						<image :src="body.erweima" style="width: 140px;height: 140px;"></image>
					<view>
						我的推广二维码
						</view>
					</view>	
			<view class="tn-text-center" >
				<view @click="fuzhi(body.url)">
				<tn-button :shadow="true" width="60%" backgroundColor="tn-bg-green"
					height="80rpx" margin="10rpx 0">或者复制推广链接 </tn-button>
				</view>					
			</view>		
		</tn-popup>
		<!-- 登录框组件 -->
		<login-fn :is-show-login="loginBoxFlag" @loginSuccessCallback="refreshFn" @close="closeGlobalLoginFn">
		</login-fn>

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
		mixins: [template_page_mixin, MescrollMixin],
		components: {
			MescrollBody
		},
		data() {
			return {
				content:[],
				shouhuxiu:false,
				ti_kano:'',
				ti_name:'',
				ti_money:'',
				news: [],
				loginis: '',
				shezhishow: false,
				loading: true,
				loginBoxFlag: false, // 登录框显示隐藏状态
				id: 0,
				baifenbi: 0,
				chajifen: 0,			
				body: [],
				historyData: [{
						title: '观看历史',
						icon: 'pay',
						color: 'orange',
						login: true,
						url: '/homePages/vod/history',
					},
					{
						title: '我的收藏',
						icon: 'vip',
						color: 'purple',
						url: 'orange',
						login: false,
						url: '/homePages/vod/star',
					},
					{
						title: '法务订单',
						icon: 'shop',
						color: 'purplered',
						url: 'orange',
						login: false,
						url: '/shopPages/order',
					},
					{
						title: '分销中心',
						icon: 'team',
						color: 'green',
						url: 'orange',
						login: false,
						url: '/shopPages/fenxiao/index',
					}
				]
			}
		},

		onLoad(option) {
		this.info()
		},

	onShareAppMessage() {
	   return {
	      title: this.body.nickname+'邀请你加入', //分享的名称
	      path: '/pages/index?daren_id='+uni.getStorageSync('user_id'),
	　　　 imageUrl: this.body.avatar 
	   }
		},	 
	
	
		methods: {
			datu(img){
				this.shouhuxiu=false
				uni.previewImage({
					current:img,
					urls: [img]
				});
			},
			fuzhi(neirong) {
					uni.setClipboardData({
						data: neirong,
						complete() {
							uni.showToast({
								title: "已复制到剪贴板"
							})
						}
					})
				},
				
				
			async info() {
				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/Share/myFx',
					data: {}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						that.body = result.data.data;					
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
				
				
				
				
				
				
				
			async ma(){				
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/Share/xcxImages',
					data: {
					}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						this.shezhishow=true
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
			downCallback(mescroll) {
				mescroll.endSuccess();
				mescroll.resetUpScroll();
			},	
		async upCallback(mescroll) {
			let that = this;
			
			let result = await that.$request({
				loading: 1,
				method: 'post',
				url: '/api/Share/myFans',
				data: {				
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
				mescroll.endSuccess(result.data.data.length,result.data.data.length >= mescroll.size);	
								
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
		
			
			
			
			
			jinru(item) {
				this.navigateToFn({
					url: item.url,
					checkLogin: item.login
				})
			},
			refreshFn() {
				this.infobody()
			},
			
			dianhua(){
				uni.makePhoneCall({
				phoneNumber:this.configInfo.mobile,//电话号码
				success:function(e){
					console.log(e);
				},
				fail:function(e){
					console.log(e);

				}
			})
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






			/// 列表调用
			myhome() {
				this.navigateToFn({
					url: '/circlePages/blogger_other?id=' + uni.getStorageSync('user_id'),
					checkLogin: true
				})
			},


			// 关闭压屏窗
			closeLandscape() {
				this.show_fabu = false
			}



		}
	}
</script>

<style lang="scss" scoped>
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
				height: 50rpx;
				font-size: 20px;
				border-radius: 50%;
				margin-bottom: 2rpx;
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

	.icon12 {
		&__item {
			width: 33%;
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
				font-size: 20px;
				border-radius: 50%;
				margin-bottom: 2rpx;
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
		border: 8rpx solid rgba(255, 255, 255, 0.05);
		box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
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
</style>
