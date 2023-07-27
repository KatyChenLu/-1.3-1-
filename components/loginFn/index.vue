<template>
	<view
		class="login-tips-block"
		:class="[hidePage ? 'hidePage' : '']"
		v-if="isShowLogin"
		@touchmove.stop="catchTouchMove"
	>
		<view class="login-tips " style="">
			<view class="icon-top-play" ><image :src="configInfo.site_logo"></image></view>
			<view class="h4">您还未登录</view>
			<view class="h5">
				<text>为了完整体验,需要注册并登录</text>
				<text>5秒即可完成哦~</text>
			</view>
	
			

		
		
			
			<!-- #ifdef MP-WEIXIN -->
				<view
				:blockRepeatClick="true" v-if="calcIsOpenSMFlag"
				:class="['login-btn', isAllAngle ? 'border-radius-style-all-arg' : 'border-radius-style-half-arg']"
				@click="loginFn"
				backgroundColor="tn-cool-bg-color-5" width="90%" padding="40rpx 30rpx" margin="30rpx"
			>
				立即登录
			</view>
			<tn-button
				v-else
				:blockRepeatClick="true" :class="['login-btn', isAllAngle ? 'border-radius-style-all-arg' : 'border-radius-style-half-arg']"
				@click="loginFn"
		backgroundColor="tn-cool-bg-color-5" width="90%" padding="40rpx 30rpx" margin="30rpx"
			>
				立即登录
			</tn-button>
				
			<!-- #endif -->
			
			<!-- #ifndef  MP-WEIXIN -->
			<tn-button
				:blockRepeatClick="true" width="90%" :class="['login-btn', isAllAngle ? 'border-radius-style-half-arg' : 'border-radius-style-half-arg']"
				backgroundColor="tn-cool-bg-color-5" padding="40rpx 30rpx" margin="30rpx"			
				@click="gzhH5WxloginFn"
			>
				立即登录
			</tn-button>	
			<!-- #endif -->
			
			
			
			<text  class="say-no" @click="closeFn" style="color:#000000">暂不登录</text>
		</view>
	</view>
</template>

<script>

export default {
	props: {
		// 是否显示 登录框 组件
		isShowLogin: {
			type: Boolean,
			required: true,
			default: false
		},
		// 是否显示 退出小程序按钮 (显示退出 就不显示 取消了  用在转发页面必须登录)
		isShowExit: {
			type: Boolean,
			default: false
		},
		// 登录框显示时 是否隐藏页面是所有元素
		hidePage: {
			type: Boolean,
			default: false
		},
		/* 
			@description
				toBack默认false
				当 toBack 是 true时 表示 用户点击暂不登录 就返回上一页面
		*/
		toBack: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
		
		};
	},
	methods: {
		// 小程序 登录功能
		async loginFn() {
			let that = this;
			let userProfileObject = await that.getUserProfileFn();
			let avatarUrl, nickName, province, city, gender;

			if (userProfileObject.type == 'success') {
				avatarUrl = userProfileObject.result.avatarUrl;
				nickName = userProfileObject.result.nickName;
				province = userProfileObject.result.province;
				city = userProfileObject.result.city;
				gender = userProfileObject.result.gender;
			} else {
				uni.showToast({
					icon: 'none',
					title: '获取个人信息失败'
				});
				return false;
			}

			uni.login({
				async success(e) {
					console.log('先获取code那堆数据', e);

					uni.getUserInfo({
						//获取用户信息
						async success(userInfoRes) {
							let iv = encodeURIComponent(userInfoRes.iv);
							let encryptedData = encodeURIComponent(userInfoRes.encryptedData);
							console.log('uni.getUserInfo 成功的数据', userInfoRes, '\n');
							//第一次提示用户授权 成功后的回调 授权后再点直接成功 拿回来用户信息

							console.log('后获取用户信息 包括iv 和 xxxdata字符串', userInfoRes);

							let code = e.code;

							// 登录时 把分享者的字符串带上
							let sharerObj = {};
							let sharerStr = uni.getStorageSync('sharer'); // 带上分享上级的加密字符串
							if (sharerStr) {
								sharerObj.sharer = sharerStr;
							}

							let data = {
								avatar: avatarUrl,
								nickname: nickName,
								area: city,
								sex: gender,
								platform: '小程序',
								code,
								iv,
								encryptedData,

								...sharerObj
							};
							let result = await that.$request({
								loading: true,
								url: '/api/login/third_new',
								data
							});
							console.log('用户登录时带的参数', data, '\n', '返回的结果', result, '\n');

							if (result.statusCode == 200) {
								if (result.data.code == 200) {
									
									//that.logOutFn(); // 先退出登录一下
									if (!result.data.data.avatar){
									uni.setStorageSync('user_reg_xcx', result.data.data.open_id);					
									uni.navigateTo({				
										url:'/pages/login/tags?op=xcx',
									});	
									}
									else{

									let token = result.data.data.login_token;
									that.$store.commit('setToken', token);
									uni.setStorageSync('token', token);
									let user_id = result.data.data.user_id;
									uni.setStorageSync('user_id', user_id);
									that.$emit('loginok',true);	
									that.bind()		
									uni.hideLoading();
									uni.showLoading({});
									that.hasTokenGetUserInfo(() => {
										uni.hideLoading();
										uni.showToast({
											icon: 'success',
											title: '登录成功'
										});
										that.$emit('loginok',true);	
										that.$emit('loginSuccessCallback');
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
						fail(e) {
							console.log('登录失败 小程序 getUserInfo 接口fail ', e);
						}
					});
				}
			});
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
		loginFn_h5() {
			console.log('0');
			uni.showToast({
				icon: 'none',
				title: '未接入开放平台'
			});
		},
		closeFn() {
			this.$emit('close');
			this.$emit('guanbi');		
			if (this.toBack) {
				this.toBackFn();
			}
		},
		
		ok(){
			console.log('发送')
			this.$emit('loginSuccessCallback',true);	
		},
		
		gzhH5WxloginFn() {
			let that = this;
			that.navigateToFn({
				url: `/pages/login/login`
			});			
		}
	
	}
	// ↑↑↑↑↑ methods 结束
};
</script>

<style lang="scss">
.login-tips-block {
	position: fixed;
	z-index: 1990;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.3);

	&.hidePage {
		background: #a9a9a9;
	}

	.login-tips {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		width: 600rpx;
		height: 600rpx;
		background: #ffffff;
		border-radius:10px;
		.icon-top-play {
			image {
				position: absolute;
				left: 50%;
				transform: translateX(-50%) translateY(-50%);
				width: 200rpx;
				height: 200rpx;
			}
		}

		.h4 {
			margin-top: 175rpx;
			text-align: center;
			font-weight: 600;
			color: #000000;
			font-size: 36rpx;
		}

		.h5 {
			margin-top: 40rpx;
			color:#000000;
			font-size: 30rpx;
			text-align: center;

			text {
				display: block;
				line-height: 50rpx;
			}
		}

		.say-no,
		.login-btn {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 35rpx auto 0;
			width: 536rpx;
			height: 88rpx;
			color: #ffffff;
			font-size: 30rpx;
		}

		.login-btn {
			border-radius: 14rpx;
		}

		.say-no {
			margin-top: 10rpx;
			background: transparent;
			text-decoration: underline;
		}
	}
}
</style>
