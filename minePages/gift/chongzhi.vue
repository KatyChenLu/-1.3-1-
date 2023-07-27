<template>
	<view class="template-create tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed :isBack="true">
			充值{{configInfo.site_moneyname}}
		</tn-nav-bar>


		<view class="tn-safe-area-inset-bottom tn-padding " :style="{paddingTop: vuex_custom_bar_height + 'px'}">




			<tn-modal width="80%" v-model="shezhishow" backgroundColor="#ffffff" padding="30rpx 20rpx" :radius="25"
				title="设置" :showCloseBtn="false" :maskCloseable="true" :zoom="true" :custom="true">

				<view class="custom-modal-content tn-padding-sm ">
					<view class="tn-text-left tn-color-black" style="font-size: 14px;">
						可兑换积分{{my_scorenum}}个，兑换{{configInfo.site_moneyname}}比例为{{configInfo.scoretomoney}}:1
					</view>
					<view class="tn-bg-gray--light "
						style=" margin-top:8px; border-radius: 10rpx;padding: 20rpx 30rpx;">
						<input placeholder="请输入积分数量" type="number" v-model="huanjifen" placeholder-style="color:#343434"
							style="font-size: 14px;color: #000;width: 60%;"></input>
					</view>

					<view class="tn-text-center tn-padding-top" @click="scorepass()">
						<tn-button :fontSize="28" padding="20rpx" height="56rpx" fontColor="#080808"
							backgroundColor="rgb(255, 240, 13)">确认兑换</tn-button>
					</view>

				</view>
			</tn-modal>






			<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-top tn-cool-bg-color-5"
				style="width:100%;height:150px;background-size: cover;border-radius: 15rpx;">

				<view class="justify-content-item tn-margin-left" style="margin-left: 40px;">
					<view class="tn-text-bold tn-padding-bottom-xs" style="font-size:30px;">
						{{my_moneynum}}
					</view>
					<view class=" tn-color-cat" style="font-size: 16px;">
						{{configInfo.site_moneyname}}
						<text class="tn-color-yellow"
							@click="navigateToFn({ url: '/minePages/money_log', checkLogin: true })">（使用明细）</text>
					</view>
				
				</view>
			
			</view>

			<!-- #ifdef APP -->
			<view class="text">
				<ad-rewarded-video :adpid="up_jili_app" :loadnext="true" v-slot:default="{loading, error}"
					@load="onadload" @close="onadclose" @error="onaderror">
					<tn-button :shadow="true" shape="round" width="100%" height="80rpx" backgroundColor="#dddddd"
						fontColor="#303030"
						margin="10rpx 0">看广告赚{{configInfo.site_moneyname}}{{jilimoney}}个</tn-button>
					<view v-if="error">{{error}}</view>
				</ad-rewarded-video>
			</view>
			<!-- #endif -->
			<!-- #ifdef MP -->
			<view class="text" v-if="up_jili_xcx">
				<tn-button :shadow="true" shape="round" width="100%" height="80rpx" backgroundColor="#dddddd"
					fontColor="#303030" margin="10rpx 0"
					@click="openVideoAd">看广告赚{{configInfo.site_moneyname}}{{jilimoney}}个</tn-button>
			</view>
			<!-- #endif -->

			<view class="tn-search-fixed" v-if="chongzhika">
				<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin">
					<view class="justify-content-item align-content-item">
						<view class="tn-bg-gray--light tn-flex tn-flex-col-center"
							style="border-radius: 100rpx;padding: 10rpx 20rpx 10rpx 20rpx;width: 100%;">
							<text
								class="tn-icon-pay justify-content-item tn-padding-right-xs tn-color-gray tn-text-lg"></text>
							<input class="justify-content-item" placeholder="输入充值卡号" v-model="kano"
								placeholder-style="color:#AAAAAA"></input>
						</view>
					</view>

					<view class="align-content-item">
						<view class="justify-content-item tn-text-center" @click="chongzhipass()">
							<tn-button fontColor="#000000" :shadow="true"
								backgroundColor="tn-main-gradient-yellow--reverse" shape="round" padding="20rpx 20rpx"
								width="150rpx" shadow fontBold>
								<text>充值</text>
							</tn-button>

						</view>
					</view>
				</view>
			</view>




			<view class='nav-list tn-margin-bottom tn-margin-top'>

				<block v-for="(item, index) in tuniaoData" :key="index">
					<view class="nav-list-item tn-shadow-blur  tn-main-gradient-blue--light"
						@click="chongzhi(item,index)">
						<view class="nav-link">
							<view class='title tn-text-bold' style="color: #e6260c;font-size: 12px;height: 15px;"
								v-if="item.song_money>0">
								再赠送{{item.song_money}}
							</view>
							<view class='title tn-text-bold' style="color: #e6260c;font-size: 12px;height: 15px;"
								v-else>
							</view>
							<view class='join tn-color-grey tn-text-sm'>
								<text class="tn-bg-yellow  tn-round tn-text-df tn-text-bold tn-color-black "
									style="padding: 10rpx 84rpx;font-size:16px;">
									￥{{ item.money }} </text>
							</view>
						</view>
						<view class="icon tn-shadow-blur">
							<view class="">
								<view class="tn-flex tn-flex-row-center tn-margin-top-sm">
									<view class="justify-content-item  tn-text-center">

									</view>
									<view class="justify-content-item  tn-text-center  tn-radius"
										style="font-size: 24px;color: #000;">
										{{ Number(item.xuni_money).toFixed(0)}} <text
											style="font-size: 12px;">{{configInfo.site_moneyname}}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</block>

			</view>





		</view>


		<tn-modal width="80%" v-model="show_shenqing" backgroundColor="#E4E9EC" padding="30rpx 80rpx" :radius="25"
			:showCloseBtn="false" :maskCloseable="true" :zoom="true" :custom="custom">

			<view class="custom-modal-content tn-text-xxl">
				{{chongzhtitle}}
			</view>

			<view class="tn-flex">
				<view class="tn-flex-1">
					<!-- #ifdef APP-PLUS -->
					<view class=" tn-radius tn-bg-gray--light" style="padding:10px 25px;" @click="post('wxpay')"
						v-if="configInfo.shanghu_xcx">
						<view class="tn-flex tn-flex-row-center tn-margin-top-sm">
							<view class="justify-content-item  tn-text-center">
								<text class="tn-icon-wechat-fill tn-color-green" style="font-size:26px;"></text>
							</view>
							<view class="justify-content-item  tn-text-center  tn-radius"
								style="font-size: 18px;color: #000;margin-left: 8px;">微信支付

							</view>
						</view>
					</view>
					<!-- #endif -->

					<!-- #ifdef MP -->
					<view class=" tn-radius tn-bg-gray--light" style="padding:10px 25px;" @click="post('wxpay')"
						v-if="configInfo.shanghu_xcx">
						<view class="tn-flex tn-flex-row-center tn-margin-top-sm">
							<view class="justify-content-item  tn-text-center">
								<text class="tn-icon-wechat-fill tn-color-green" style="font-size:26px;"></text>
							</view>
							<view class="justify-content-item  tn-text-center  tn-radius"
								style="font-size: 18px;color: #000;margin-left: 8px;">微信支付

							</view>
						</view>
					</view>
					<!-- #endif -->

					<!-- #ifdef H5 -->
					<view class=" tn-radius tn-bg-gray--light" style="padding:10px 25px;" @click="post('wxpay')"
						v-if="configInfo.shanghu_wxchat">
						<view class="tn-flex tn-flex-row-center tn-margin-top-sm">
							<view class="justify-content-item  tn-text-center">
								<text class="tn-icon-wechat-fill tn-color-green" style="font-size:26px;"></text>
							</view>
							<view class="justify-content-item  tn-text-center  tn-radius"
								style="font-size: 18px;color: #000;margin-left: 8px;">微信支付

							</view>
						</view>
					</view>
					<!-- #endif -->


					<!-- #ifdef APP-PLUS -->
					<view class=" tn-radius tn-bg-gray--light" style="padding:10px 25px;margin-top: 10px;"
						@click="post('alipay')" v-if="configInfo.pay_yingyong_ali">
						<view class="tn-flex tn-flex-row-center tn-margin-top-sm">
							<view class="justify-content-item  tn-text-center">
								<text class="tn-icon-alipay tn-color-blue" style="font-size:26px;"></text>
							</view>
							<view class="justify-content-item  tn-text-center  tn-radius"
								style="font-size: 18px;color: #000;margin-left: 8px;">支付宝支付

							</view>
						</view>
					</view>
					<!-- #endif -->
					<!-- #ifdef APP-PLUS||H5 -->
					<view class=" tn-radius tn-bg-gray--light" style="padding:10px 25px;margin-top: 10px;"
						@click="iphonepay()" v-if="iPhone">
						<view class="tn-flex tn-flex-row-center tn-margin-top-sm">
							<view class="justify-content-item  tn-text-center">
								<text class="tn-icon-ap tn-color-blue" style="font-size:26px;"></text>
							</view>
							<view class="justify-content-item  tn-text-center  tn-radius"
								style="font-size: 18px;color: #000;margin-left: 8px;">苹果支付
							</view>
						</view>
					</view>
					<!-- #endif -->
				</view>
			</view>
		</tn-modal>



	</view>
</template>

<script>
	import {
		host
	} from '@/siteinfo.js'
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	export default {
		name: 'TemplateCreate',
		mixins: [template_page_mixin],
		data() {
			return {
				iPhone: false,
				isLoading: false,
				huanjifen: '',
				shezhishow: false,
				kano: '',
				id: 0,
				my_moneynum: 0,
				my_scorenum: 0,
				custom: false,
				chongzhtitle: '',
				show_shenqing: false,
				tuniaoData: [],
				up_jili_app: '',
				up_jili_xcx: '',
				chongzhika: '',
				jilimoney: 0,
				_isLoaded: false,
				_rewardedVideoAd: ''

			}
		},
		onLoad(option) {
			let that = this
			let platform = uni.getSystemInfoSync().platform;
			if (platform === 'ios') {
				this.iPhone = true
			}
			that.action = host + '/api/user/up_img'
			that.info()
			that.info3()
			//that.info2()
			// #ifdef MP			
			this.adLoad()
			// #endif
			// #ifdef APP

			// #endif

		},

		methods: {
			onadload(e) {
				console.log('广告数据加载成功');
			},
			onadclose(e) {
				const detail = e.detail
				// 用户点击了【关闭广告】按钮
				if (detail && detail.isEnded) {
					// 正常播放结束
					console.log("onadclose " + detail.isEnded);
				} else {
					// 播放中途退出
					console.log("onadclose " + detail.isEnded);
				}
			},
			onaderror(e) {
				// 广告加载失败
				console.log("onaderror: ", e.detail);
			},

			async info2() {
				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/gift/chongzhijili',
					data: {}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						that.up_jili_app = result.data.data.up_jili_app;
						that.up_jili_xcx = result.data.data.up_jili_xcx;
						that.chongzhika = result.data.data.chongzhika;
					}
				} else {
					uni.showToast({
						icon: 'none',
						title: that.$errorMsg
					});
				}

			},


			async info3() {
				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/User/index',
					data: {}
				});


				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						that.my_moneynum = result.data.data.userinfo.money;
						that.my_scorenum = result.data.data.userinfo.integral;
						that.$store.commit('setmoney', that.my_moneynum);
						that.$store.commit('setsore', that.my_scorenum);
					}
				} else {
					uni.showToast({
						icon: 'none',
						title: that.$errorMsg
					});
				}


			},



			async info() {
				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/gift/chongzhilist',
					data: {}
				});


				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						that.tuniaoData = result.data.data;
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


			async scorepass() {
				let that = this;



				if (!this.huanjifen) {
					this.msg('请输入兑换数量')
					return
				}


				if (this.huanjifen > this.my_scorenum) {
					this.msg('你的积分不足')
					return
				}



				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/four/scorepass',
					data: {
						jifen: this.huanjifen
					}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						that.shezhishow = false
						that.info3()
						that.msg('兑换成功')
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


			async chongzhipass() {
				let that = this;
				if (!this.kano) {
					this.msg('请输入卡号')
					return
				}
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/four/chongzhika',
					data: {
						kano: this.kano
					}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						that.info3()
						that.msg('充值成功')
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


			async post(payType) {



				let that = this;

				// #ifdef APP
				if (payType == 'alipay') {
					var url = '/api/Payment/alipay_chong';
				} else {
					var url = '/api/Payment/wxpay_chong';
				}


				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: url,
					data: {
						id: this.id
					}
				});



				if (result.statusCode == 200) {
					if (result.data.code == 200) {

						uni.requestPayment({
							provider: payType,
							orderInfo: result.data.data, //支付宝订单数据
							success: function(res) {
								if (res.errMsg == 'requestPayment:ok') {
									that.custom = false
									that.show_shenqing = false
									that.info3()
									that.msg('充值成功')

									//uni.navigateBack()
								} else {
									console.log('fail:' + JSON.stringify(res));
								}
							},
							fail: function(err) {
								console.log(err)
							}
						});
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

				// #endif


				// #ifdef MP-WEIXIN
				//微信小程序

				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/Payment/wxpay_chong_xcx',
					data: {
						id: this.id
					}
				});


				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						let paycanshu = JSON.parse(result.data.data.pay)
						console.log(paycanshu.timeStamp, 111111)

						uni.requestPayment({
							provider: 'wxpay',
							timeStamp: paycanshu.timeStamp,
							nonceStr: paycanshu.nonceStr,
							package: paycanshu.package,
							signType: 'MD5',
							paySign: paycanshu.paySign,
							success: function(res) {
								that.custom = false
								that.show_shenqing = false
								that.info3()
								that.msg('充值成功')

							},

						});
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

				// #endif


				// #ifdef H5
				//微信公众号

				let ua = window.navigator.userAgent.toLowerCase();
				if (ua.match(/micromessenger/i) == 'micromessenger') {} else {
					this.msg('请到微信里打开才能支付！复制网址到微信访问吧' + ua.match(/micromessenger/i))
					return
				}

				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/Payment/wxpay_chong_h5',
					data: {
						id: this.id
					}
				});


				if (result.statusCode == 200) {
					if (result.data.code == 200) {

						let paycanshu = result.data.data



						//、、、、、
						WeixinJSBridge.invoke(
							'getBrandWCPayRequest', {
								"appId": paycanshu.appId, //公众号名称，由商户传入
								"timeStamp": paycanshu.timeStamp, //时间戳     
								"nonceStr": paycanshu.nonceStr, //随机串     
								"package": paycanshu.package,
								"signType": paycanshu.signType, //微信签名方式：     
								"paySign": paycanshu.paySign //微信签名 
							},
							function(ress) {
								if (ress.err_msg == "get_brand_wcpay_request:ok") {
									that.custom = false
									that.show_shenqing = false
									that.info3()
									that.msg('充值成功')
								} else if (ress.err_msg == "get_brand_wcpay_request:cancel") {
									uni.showToast({
										icon: "none",
										title: "'已取消支付"
									})
								} else {
									uni.showToast({
										icon: "none",
										title: "支付失败"
									})
								}
							}
						);
						//、、、

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

				// #endif


			},

			chongzhi(item, index) {
				this.index = index
				this.id = item.id
				this.custom = true
				this.chongzhtitle = '充值金额为￥' + item.money
				this.show_shenqing = true
			},
			Load: function() {
				if (wx.createRewardedVideoAd) {
					videoAd = wx.createRewardedVideoAd({
						adUnitId: this.up_jili_xcx //你的广告key			
					})
					videoAd.onError(err => {})
					videoAd.onClose((status) => {
						if (status && status.isEnded || status === undefined) {
							//这里写广告播放完成后的事件

						} else {

						}
					})
				}
			},
			openVideoAd: function() {
				if (videoAd) {
					videoAd.show().catch(err => {
						videoAd.load().then(() => videoAd.show())
					})
				}
			},
			adClick() {
				if (this._isLoaded) {
					this._rewardedVideoAd.show()
				}
			},

			async iphonepay() {
			console.log(3333)
			let that=this
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/Payment/iphonepay',
					data: {
						id: this.id
					}
				});


				if (result.statusCode == 200) {
					if (result.data.code == 200) {				
						uni.requestPayment({
							provider: 'appleiap',
							orderInfo: {
								productid: result.data.data.pid
							},
							success: (e) => {
								that.$request({
									loading: 1,
									method: 'post',
									url: '/api/Payment/iphonepay_back',
									data: {
										id: result.data.data.oid,
										trade_status:'TRADE_SUCCESS'
									}
								});
								console.log(JSON.stringify(e));
								that.custom = false
								that.show_shenqing = false
								that.info3()
								that.msg('充值成功')

							},
							fail: (e) => {
								uni.showModal({
									content: "支付失败,原因为: " + e.errMsg,
									showCancel: false
								})
							},
							complete: () => {
								console.log("payment结束")
							}
						})


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
	.template-edit {}

	/* 用户头像 start */
	.nav-link {
		font-size: 32rpx;
		text-transform: capitalize;
		padding: 0 0 10rpx 0;
		position: relative;

		.title {
			color: #FFFFFF;
			margin-top: 100rpx;
			text-align: center;
		}

		.join {
			color: #FFFFFF;
			margin-top: 20rpx;
			margin-bottom: 40rpx;
			text-align: center;
		}
	}

	.logo-image {
		width: 210rpx;
		height: 210rpx;
		position: relative;
	}

	.jinbi {
		background-image: url(@/static/bi.png);
		width: 330px;
		height: 100%;
		background-size: cover;
		border-radius: 7px;

	}

	/* 页面 start*/
	.about-shadow {
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
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

	.bg-flex-shadow {
		background-color: #00C3FF;
		z-index: 9999;
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

	/* 底部悬浮按钮 start*/
	.tn-tabbar-height {
		min-height: 100rpx;
		height: calc(120rpx + env(safe-area-inset-bottom) / 2);
	}

	.tn-footerfixed {
		position: fixed;
		width: 100%;
		bottom: calc(30rpx + env(safe-area-inset-bottom));
		z-index: 1024;
		box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0);

	}

	/* 底部悬浮按钮 end*/

	/* 标签内容 start*/
	.tn-tag-content {
		&__item {
			display: inline-block;
			line-height: 45rpx;
			padding: 10rpx 30rpx;
			margin: 20rpx 20rpx 5rpx 0rpx;

			&--prefix {
				padding-right: 10rpx;
			}
		}
	}

	.tn-shadow-blurddd {
		border: 2px solid black;
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
				width: 130rpx;
				height: 130rpx;
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

	/* 标签内容 end*/

	/* 业务展示 start */
	.tn-info {

		&__container {
			margin-top: 10rpx;
			margin-bottom: 50rpx;
		}

		&__item {
			width: 47.7%;
			margin: 15rpx 0rpx 30rpx 0rpx;
			padding: 40rpx 30rpx;
			border-radius: 10rpx;


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

					}
				}

				&__content {
					font-size: 25rpx;

					&--data {
						color: rgba(255, 255, 255, 0.5);
						margin-top: 5rpx;
						// font-weight: bold;
					}
				}
			}

			&__right {
				&--icon {
					position: absolute;
					right: 0rpx;
					top: 50rpx;
					font-size: 100rpx;
					width: 108rpx;
					height: 108rpx;
					text-align: center;
					line-height: 60rpx;
					opacity: 0.15;
				}
			}

			&__bottom {
				box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.12);
				border-radius: 0 0 10rpx 10rpx;
				position: absolute;
				width: 85%;
				line-height: 15rpx;
				left: 50%;
				bottom: -15rpx;
				transform: translateX(-50%);
				z-index: -1;
				text-align: center;
			}
		}
	}

	/* 业务展示 end */


	/* 组件导航列表 start*/
	.nav-list {
		display: flex;
		flex-wrap: wrap;
		padding: 0rpx 0rpx 0rpx;
		justify-content: space-between;

		/* 列表元素 start */
		.nav-list-item {
			padding: 55rpx 30rpx 5rpx 30rpx;
			border-radius: 12rpx;
			width: 48%;
			margin: 0 5rpx 40rpx 0px;
			background-size: cover;
			background-position: center;
			position: relative;
			z-index: 99;

			/* 元素标题 start */
			.nav-link {
				font-size: 32rpx;
				text-transform: capitalize;
				padding: 0 0 10rpx 0;
				position: relative;

				.title {
					color: #FFFFFF;
					margin-top: 100rpx;
					text-align: center;
				}

				.join {
					color: #FFFFFF;
					margin-top: 20rpx;
					margin-bottom: 40rpx;
					text-align: center;
				}
			}

			/* 元素标题 end */

			/* 元素图标 start */
			.icon {
				font-variant: small-caps;
				position: absolute;
				top: 60rpx;
				right: 50rpx;
				left: 0%;
				width: 100%;
				height: 90rpx;
				line-height: 90rpx;
				margin: 0;
				padding: 0;
				display: inline-flex;
				text-align: center;
				justify-content: center;
				vertical-align: middle;
				font-size: 50rpx;
				color: #FFFFFF;
				white-space: nowrap;
				opacity: 0.9;

				background-size: cover;
				background-position: 50%;


			}

			/* 元素图标 end */
		}

		/* 列表元素 end */
	}

	.custom-modal-content {
		width: 100%;
		height: 100%;
		padding: 40rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.icon {
			font-size: 100rpx;
			margin-bottom: 20rpx;
			color: $tn-main-color;
		}

		.text {
			font-size: 40rpx;
		}
	}

	/* 组件导航列表 end*/
</style>