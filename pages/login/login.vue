<template>

	<view class="page box-sizing">
		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class='tn-custom-nav-bar__back'>
				<text class='icon tn-icon-left' @click="goBack"></text>
				<text class='icon tn-icon-home-capsule-fill' @click="gohome"></text>
			</view>

			<view slot="right" @click="helpshow=true" style="margin-right: 10px;">
				帮助与设置
			</view>
		</tn-nav-bar>
		<view class="after-dom"
			:style="{ background: configInfo.web_site_color,marginTop: vuex_custom_bar_height + 'px' }">


		</view>

		<view class="title zIndex10" style="margin-top: 100px;">
			<view class="after " ></view>
			<view class="text">登录</view>
		</view>
		<block v-if="!is_reg">
			<view class="input-group-block zIndex10">


				<view class="input-item" v-if="!configInfo.regtype||configInfo.regtype==0">
					<input class="input-dom" type="number" maxlength="11" v-model="telStr" placeholder="请输入手机号" />
				</view>
				<view class="input-item" v-else>
					<input class="input-dom" type="text" v-model="telStr" placeholder="请输入登录账号" />
				</view>

				<view class="input-item" v-if="!configInfo.regtype||configInfo.regtype==0">
					<input class="input-dom" type="number" maxlength="4" v-model="coedStr" placeholder="请输入验证码" />
					<view class="text" :class="[sendIng ? 'sendIng' : '']" @click="sendSmFn" style="color: #000;">{{ calcTextStr }}
					</view>
				</view>
				<view class="input-item" v-else>
					<input class="input-dom" type="password" v-model="password" placeholder="请输入登录密码" />
					<view class="text"></view>
				</view>
			</view>
			<view class="reg-block tn-margin-top ">
			<tn-button 
				:blockRepeatClick="true" backgroundColor="tn-cool-bg-color-5" width="80%" padding="40rpx 30rpx" margin="30rpx" @click="telLoginFn">
				登录
			</tn-button>
			</view>
			<view class="reg-block tn-margin-top " v-if="configInfo.regtype==1" @click="is_reg=true">
				注册账号
			</view>
		</block>
		<block v-else>
			<view class="input-group-block zIndex10">



				<view class="input-item">
					<input class="input-dom" type="text" v-model="telStr" placeholder="请输入登录账号(中文/邮箱/数字均可)" />
				</view>


				<view class="input-item">
					<input class="input-dom" type="password" v-model="password" placeholder="请输入登录密码" />
					<view class="text"></view>
				</view>

				<view class="input-item">
					<input class="input-dom" type="password" v-model="passwordto" placeholder="请重复输入登录" />
					<view class="text"></view>
				</view>
			</view>

			<button class="btn-dom flex-center border-radius clear-btn-style zIndex10"
				:class="[isAllAngle ? 'border-radius-style-all-arg' : 'border-radius-style-half-arg']"
				style="background-color: rgb(255, 255, 0);color: #000;" @click="userreg()">
				注册
			</button>
			<view class="reg-block tn-margin-top " v-if="configInfo.regtype" @click="is_reg=false">
				返回登录
			</view>
		</block>

		<view class="reg-block tn-margin-top">


			<tn-checkbox-group activeColor="rgb(0, 0, 0)" @change="checkboxGroupChange">
				<tn-checkbox name="同意">同意</tn-checkbox>
			</tn-checkbox-group>





			<view class="description-text" @click="navigateToFn({ url: `/homePages/about?id=27` })">
				<view class="text" :style="{ color: configInfo.web_site_color }">用户注册协议</view>
			</view>
			<view class="description-text" style="margin-left: 15px;"
				@click="navigateToFn({ url: `/homePages/about?id=31` })">
				<view class="text" :style="{ color: configInfo.web_site_color }">隐私保护政策</view>
			</view>
			<view class="description-text" style="margin-left: 15px;"
				@click="navigateToFn({ url: `/homePages/about?id=39` })">
				<view class="text" :style="{ color: configInfo.web_site_color }">未成年人保护</view>
			</view>
		</view>



		<view class="button-block" style="display: flex; justify-content: center;margin-top:50px;">
			<fh-apple-login @afterAppleLogin="afterAppleLogin" :content="content"></fh-apple-login>
		</view>

		<!-- <view class="button-block" style="display: flex; justify-content: center;margin-top:10px;">	
<view  class="fh-apple-login-mainsd" @click="wxlogin">
			<view class="fh-apple-login-button">
				<view class="fh-apple-icon tn-icon-wechat-fill"></view>
				微信登录
			</view>
	</view>	
	</view> -->




		<tn-modal width="100%" v-model="helpshow" backgroundColor="#E4E9EC" padding="30rpx 20rpx" :radius="25"
			title="设置" :showCloseBtn="false" :maskCloseable="true" :zoom="true" :custom="true">
			<view class="custom-modal-content tn-padding-sm ">
				<view class="tn-text-left tn-padding-sm" style="font-size: 14px;">
					根据您的个人需求设置相关内容
				</view>
				<tn-list-cell :unlined="true" :radius="true" :fontSize="30">
					<view class="tn-flex tn-flex-row-between" style="width: 100%;">
						<view class="">个性化内容推荐
							<view class="" style="font-size: 12px;color: #626262;">关闭后你将不在收到基于个人兴趣的推荐内容</view>
						</view>
						<tn-switch v-model="is_tuisong" @change="is_tuisong"></tn-switch>
					</view>
				</tn-list-cell>
				<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30"
					@click="navigateToFn({ url: '/homePages/about?id=25', checkLogin: false })">
					<view class="tn-flex tn-flex-col-center">
						<view class="tn-margin-left-sm tn-flex-1">关于我们</view>
						<view class="tn-color-gray tn-icon-right"></view>
					</view>
				</tn-list-cell>
				<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30"
					@click="navigateToFn({ url: '/homePages/about?id=27', checkLogin: false })">
					<view class="tn-flex tn-flex-col-center">
						<view class="tn-margin-left-sm tn-flex-1">用户协议</view>
						<view class="tn-color-gray tn-icon-right"></view>
					</view>
				</tn-list-cell>
				<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30"
					@click="navigateToFn({ url: '/homePages/about?id=31', checkLogin: false })">
					<view class="tn-flex tn-flex-col-center">
						<view class="tn-margin-left-sm tn-flex-1">隐私政策</view>
						<view class="tn-color-gray tn-icon-right"></view>
					</view>
				</tn-list-cell>
				<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30"
					@click="navigateToFn({ url: '/homePages/about?id=32', checkLogin: false })">
					<view class="tn-flex tn-flex-col-center">
						<view class="tn-margin-left-sm tn-flex-1">帮助中心</view>
						<view class="tn-color-gray tn-icon-right"></view>
					</view>
				</tn-list-cell>
			</view>
		</tn-modal>




	</view>
</template>
<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	import {
		assertObject,
		assertString
	} from '@/tools/tools.js';
	import {
		host
	} from '@/siteinfo.js'
	let timer;
	export default {
		name: 'TemplateDetails',
		mixins: [template_page_mixin],
		data() {
			return {
				news: [],
				is_tuisong: true,
				helpshow: false,
				passwordto: '',
				is_reg: false,
				fruit: '',
				password: '',
				is_geree: '',
				cid: '',
				// 是否在发送中的状态
				sendIng: false,
				// 用户发送验证码的次数
				sendSmCont: 0,
				// 双向绑定 手机号
				telStr: '',
				// 双向绑定 验证码
				coedStr: '',
				// 间隔一分钟 后可以再次发送
				intervalTime: 60,
				// 显示在页面上的倒计时
				showIntervalStr: 0,
				content: '通过Apple登录',
				wxcha_code:''
			};
		},
		onLoad(options) {

			let that = this;
			// #ifdef APP-PLUS		
			plus.push.getClientInfoAsync((info) => {

				that.cid = info["clientid"];
			});
			// #endif


			if (options.code){
				this.wxcha_code=options.code
			}




			// #ifdef H5

			let ua = window.navigator.userAgent.toLowerCase();
			if (ua.match(/micromessenger/i) == 'micromessenger'&&this.configInfo.wxchat_appid&&!this.wxcha_code) {
				window.location.href =
					'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+this.configInfo.wxchat_appid+'&redirect_uri='+this.configInfo.path+'/h5/&response_type=code&scope=snsapi_userinfo#wechat_redirect';
			}
			// #endif





			//	that.info()	
		},
		onUnload() {
			clearInterval(timer);
		},
		methods: {

			async info() {
				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/user/setindex',
					data: {}
				});


				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						that.news = result.data.data.news
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
			//苹果登录返回
			afterAppleLogin: function({
				accessToken,
				openId
			}) {

				console.log(accessToken, openId)
				this.applelogin(openId)
			},


			//苹果登录

			async applelogin(openId) {
				let that = this


				let platformObj = {};
				platformObj.platform = 'AppIOS';
				platformObj.cid = that.cid;
				platformObj.open_id = openId;
				let result = await that.$request({
					loading: true,
					url: '/api/login/apple_login',
					data: {
						type: 'ios',
						open_id: openId,
					}
				});

				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						if (!result.data.data.avatar) {
							uni.setStorageSync('user_reg', platformObj);
							uni.navigateTo({
								url: '/pages/login/tags?op=apple',
							});
						} else {
							let token = result.data.data.login_token;
							that.$store.commit('setToken', token);
							uni.setStorageSync('token', token);
							let user_id = result.data.data.user_id;
							uni.setStorageSync('user_id', user_id);
							// #ifdef APP||H5||MP-WEIXIN	
							that.bind()
							// #endif
							uni.hideLoading();
							uni.showLoading({});
							that.hasTokenGetUserInfo(() => {
								uni.hideLoading();
								uni.showToast({
									icon: 'success',
									title: '登录成功'
								});
								uni.$emit('loginok', true);
								that.closeGlobalLoginFn(false);
							});
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






			//app微信登录	
			async wxlogin() {
				let that = this
				uni.login({
					"provider": "weixin",
					"onlyAuthorize": true, // 微信登录仅请求授权认证
					success: function(event) {
						const {
							code
						} = event
						//客户端成功获取授权临时票据（code）,向业务服务器发起登录请求。
						that.appwxlogin(event.code)
					},
					fail: function(err) {
						// 登录授权失败  
						// err.code是错误码
					}
				})
			},

			//APP微信登录结果

			async appwxlogin(wxcode) {
				let result = await that.$request({
					loading: true,
					url: '/api/login/applogin_wx',
					data: {
						type: 'appwx',
						code: wxcode,
					}
				});

				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						if (!result.data.data.avatar) {
							uni.setStorageSync('user_reg_xcx', result.data.data.open_id);
							uni.navigateTo({
								url: '/pages/login/tags?op=xcx',
							});
						} else {
							let token = result.data.data.login_token;
							that.$store.commit('setToken', token);
							uni.setStorageSync('token', token);
							let user_id = result.data.data.user_id;
							uni.setStorageSync('user_id', user_id);
							that.bind()
							uni.hideLoading();
							uni.showLoading({});
							that.hasTokenGetUserInfo(() => {
								uni.hideLoading();
								uni.showToast({
									icon: 'success',
									title: '登录成功'
								});
								uni.$emit('loginok', true);
								that.closeGlobalLoginFn(false);
							});
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

			checkboxGroupChange(event) {
				this.fruit = event
			},


			// 开启倒计时
			startIntervalFn() {
				let that = this;
				that.showIntervalStr = that.intervalTime;
				clearInterval(timer);
				timer = setInterval(() => {
					that.showIntervalStr--;
					if (that.showIntervalStr <= 0) {
						that.sendIng = false;
					}
				}, 1000);
			},
			// 发送验证码
			async sendSmFn() {
				let that = this;
				if (that.sendIng) {
					return false;
				}
				if (!that.regTel(that.telStr)) {
					uni.showToast({
						icon: 'none',
						title: '手机号码格式错误'
					});
					return false;
				}
				that.sendSmCont++;
				that.sendIng = true;

				that.startIntervalFn();
				let result = await that.$request({
					method: 'post',
					url: `/api/login/sendsms`,
					data: {
						mobile: that.telStr,
						event: 'mobilelogin'
					}
				});

				if (result.statusCode == 200) {
					if (result.data.code == 200) {

						if (result.data.data.sms_is == 0) {

							that.coedStr = result.data.data.code


							uni.showModal({
								title: '提示',
								showCancel: false,
								content: '未开启短信发送,系统自动填写验证码,直接登录即可',
								success: function(res) {
									if (res.confirm) {

									} else if (res.cancel) {

									}
								}
							});



						} else {
							uni.showToast({
								icon: 'none',
								title: '发送成功，请查收'
							});
						}


					} else {
						uni.showToast({
							icon: 'none',
							title: result.data.msg
						});
						that.sendIng = false;
					}
				} else {
					uni.showToast({
						icon: 'none',
						title: that.$errorMsg
					});
					that.sendIng = false;
				}
			},
			// 开始登录
			async telLoginFn() {
				let that = this;

				if (that.fruit[0] != "同意") {
					uni.showToast({
						icon: 'none',
						title: '请先同意协议和政策'
					});
					return false;
				}




				if (that.telStr.length <= 0) {
					uni.showToast({
						icon: 'none',
						title: '手机号码不能为空'
					});
					return false;
				}





				if (this.configInfo.regtype == 1) {
					if (that.password.length <= 0) {
						uni.showToast({
							icon: 'none',
							title: '密码不能为空'
						});
						return false;
					}
				} else {
					if (that.coedStr.length <= 0) {
						uni.showToast({
							icon: 'none',
							title: '验证码不能为空'
						});
						return false;
					}
				}

				let loginData = {};
				// #ifdef MP-MP-WEIXIN
				loginData = await that.getLoginData();
				if (loginData.type != 'success') {
					return false;
				}
				// #endif

				let platformObj = {};

				// #ifdef H5
				platformObj.platform = 'H5';
				if (this.wxcha_code){
				platformObj.wxcha_code =this.wxcha_code;
				}
				// #endif

				// #ifdef APP-PLUS
				platformObj.platform = 'App';
				platformObj.cid = that.cid;
				// #endif

				// #ifdef MP
				platformObj.platform = '微信';
				// #endif
				// #ifdef MP-MP-TOUTIAO
				platformObj.platform = '抖音';
				// #endif
				let data = {
					// #ifdef MP-WEIXIN
					...loginData.result,
					// #endif
					mobile: that.telStr,
					password: that.password,
					code: that.coedStr,
					...platformObj
				};


				let result = await that.$request({
					loading: true,
					method: 'post',
					url: `/api/login/mobileLogin_new`,
					data
				});


				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						// 先退出登录一下
						//	that.logOutFn();
						if (result.data.msg == '新用户') {
							  if (result.data.data.wxchat_openid){
								  uni.setStorageSync('wxchat_openid',result.data.data.wxchat_openid);
							  }
							uni.setStorageSync('user_reg', data);
							uni.navigateTo({
								url: '/pages/login/tags?op=denglu',
							});
						} else {
							let token = assertObject(result.data.data).login_token;
							let user_id = result.data.data.user_id;
							uni.setStorageSync('user_id', user_id);
							that.$store.commit('setToken', token);
							// #ifdef APP||H5||MP-WEIXIN
							that.bind()
							// #endif

							uni.setStorageSync('token', token);
							uni.hideLoading();

							that.hasTokenGetUserInfo(() => {
								uni.hideLoading();
								uni.showToast({
									icon: 'success',
									title: '登录成功'
								});

								uni.$emit('loginok', true);

								setTimeout(() => {
									that.toBackFn();
								}, 500);
							});
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

			bind() {
				let msg = {
					'type': 'bind',
					'fromid': uni.getStorageSync('user_id')
				};
				uni.sendSocketMessage({
					data: JSON.stringify(msg),
					success: (res) => {
						console.log('login绑定会员id成功' + uni.getStorageSync('user_id'), res)
					},
					fail: (res) => {
						//console.log('绑定会员id失败'+uni.getStorageSync('user_id'), res)
					}
				});

			},
			async userreg() {
				let that = this
				if (that.fruit[0] != "同意") {
					uni.showToast({
						icon: 'none',
						title: '请先同意协议和政策'
					});
					return false;
				}
				if (this.telStr == '') {
					this.msg('请输入账号')
					return
				}
				if (this.telStr.length < 6) {
					this.msg('账号必须大于6个字')
					return
				}
				if (this.password == '') {
					this.msg('请输入密码')
					return
				}
				if (this.password.length < 6) {
					this.msg('账号必须大于6个字')
					return
				}

				if (this.passwordto == '') {
					this.msg('请输入确认密码')
					return
				}

				let platform
				// #ifdef H5
				platform = 'H5';
				// #endif

				// #ifdef APP-PLUS
				platform = 'App';
				// #endif

				// #ifdef MP
				platform = '微信';
				// #endif

				if (this.passwordto != this.password) {
					this.msg('两次密码不一致，请检查')
					return
				}

				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/login/regname',
					data: {
						daren_id: uni.getStorageSync('daren_id'),
						username: this.telStr,
						password: this.password,
						platform: platform
					}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						this.msg('注册成功')
						this.is_reg = false
						this.telLoginFn()
					} else {
						uni.showToast({
							icon: 'none',
							title: result.data.msg
						});
					}
				}

			}



		},
		// ↑↑↑↑↑ methods 结束
		computed: {
			// 发送验证码 按钮的文字
			calcTextStr() {
				let that = this;
				// 第一次发送验证码 - 获取验证码
				// 第多次发送验证码 - 重新获取验证码
				let str = ``;
				if (that.sendSmCont <= 0) {
					if (that.sendIng) {
						str = `重新获取(${that.showIntervalStr})`;
					} else {
						str = `获取验证码`;
					}
				} else {
					if (that.sendIng) {
						str = `重新获取(${that.showIntervalStr})`;
					} else {
						str = `获取验证码`;
					}
				}
				return str;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.page {
		display: block;
		position: relative;
		width: 100%;
		height: 100vh;
		background: #ffffff;
		overflow: hidden;

		.after-dom {}

		.title {
			position: relative;
			margin-top: 84rpx;

			.text {
			
				position: relative;
				z-index: 10;
				padding-left: 112rpx;
				font-size: 60rpx;
				font-weight: bold;
				color: #000000;
				line-height: 66rpx;
			}

			.after {
				position: absolute;
				left: 0;
				bottom: 0;
				width: 246rpx;
				height: 16rpx;
			}
		}

		.input-group-block {
			margin-top: 126rpx;
			padding: 0 110rpx;

			.input-item {
				display: flex;
				padding-top: 46rpx;
				padding-left: 0.2em;
				border-bottom: 1px solid #c2c2c2;

				.input-dom {
					flex: 1;
					font-size: 28rpx;
					height: 70rpx;
					padding-left: 0.2em;
					padding-right: 1em;
				}

				.text {
					font-size: 30rpx;
					color: #2c2c2c;
				}
			}
		}

		.fh-apple-login-mainsd {
			width: 200pt;
			height: 32pt;
			border-radius: 6pt;
			border: 1rpx solid #55aa00;

			.fh-apple-login-button {
				width: 200pt;
				height: 32pt;
				border-radius: 6pt;
				display: flex;
				justify-content: center;
				align-items: center;
				line-height: 32pt;
				font-family: PingFangSC-Medium;
				font-size: 14pt;
				color: #333333;

				.fh-apple-icon {
					color: #55aa00;
					font-size: 40px;
					margin-right: 15pt;
				}
			}
		}


		.btn-dom {
			margin: 66rpx 56rpx;
			text-align: center !important;
			height: 113rpx;
			line-height: 113rpx !important;
			color: #ffffff;
			border-radius: 1000px !important;
		}

		.zIndex10 {
			position: relative;
			z-index: 10;
		}

		.login-third {
			display: flex;
			align-items: center;
			justify-content: center;

			.weixin-login-btn {
				display: flex;
				flex-direction: column;
				align-items: center;

				.icon-blcok {
					width: 80rpx;
					height: 80rpx;
					background: #28c445;
					border-radius: 1000rpx;

					image {
						width: 100%;
						height: 100%;
					}
				}

				.text {
					font-size: 24rpx;
					color: #848484;
					line-height: 2;
				}
			}
		}

		.reg-block {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100vw;

			.description-text {
				font-size: 26rpx;
				color: #686a68;

				.text {
					display: inline-block;
					text-decoration: underline;
				}
			}
		}
	}
</style>
