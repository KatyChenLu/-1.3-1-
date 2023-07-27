<template>
	<view class="template-create tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed :isBack="true">
			资料完善
		</tn-nav-bar>

		<view class=" login tn-bg-white" :style="{paddingTop: vuex_custom_bar_height+30 + 'px'}">
			<view class="login__wrapper ">
				<view class="tn-margin-left tn-margin-right tn-text-bold" style="font-size: 50rpx;">
					完善资料
				</view>
				<view class="tn-margin tn-color-grey tn-text-lg">
					让大家更好认识你
				</view>
				<ksp-cropper v-show="show" mode="fixed" :width="500" :height="500" :maxWidth="500" :maxHeight="500"
					:url="imageUrl" @cancel="close" @ok="cropperFinish"></ksp-cropper>
				<!-- 
	<tn-cropper v-show="show" :imageUrl="imageUrl" :isRound="isRound" @cropper="cropperFinish"
				@closecopper="close"></tn-cropper> -->
<!-- #ifndef MP-WEIXIN -->
				<view
					class=" user-info__container tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center"
					@click="chooseImage()">
					<view class="user-info__avatar  tn-flex tn-flex-col-center tn-flex-row-center"
						style="position: relative;">
						<view class="logo-pic tn-shadow">
							<view class="logo-image">
								<view class="tn-shadow-blur"
									:style="'background-image:url('+avatar+');width: 210rpx;height: 210rpx;background-size: cover;'">
								</view>

							</view>
						</view>
						<view class="tn-icon-camera-fill tn-color-red" style="left: 80px;
    position: absolute;
    top: 80px;
    font-size: 40px;"></view>
					</view>

				</view>
	<!-- #endif -->			
				
				<!-- #ifdef MP-WEIXIN -->
				<button
				  class="button"
				  open-type="chooseAvatar"
				  @chooseavatar="chooseAvatarEvent"
				>
				
				<view
								class=" user-info__container tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center"
								>
								<view class="user-info__avatar  tn-flex tn-flex-col-center tn-flex-row-center"
									style="position: relative;">
									<view class="logo-pic tn-shadow">
										<view class="logo-image">
											<view class="tn-shadow-blur"
												:style="'background-image:url('+avatar+');width: 210rpx;height: 210rpx;background-size: cover;'">
											</view>
				
										</view>
									</view>
									<view class="tn-icon-camera-fill tn-color-red" style="left: 80px;
				position: absolute;
				top: 80px;
				font-size: 40px;"></view>
								</view>
				
							</view>
				
				</button>
				<!-- #endif -->	
				
				
				
				<view class="login__info tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center">
					<!-- 昵称 -->
					<view
						class="login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left">

						<view class="login__info__item__input__left-icon">
							<view class="tn-icon-my"></view>
						</view>
						<view class="login__info__item__input__content">
							<input maxlength="20" @change="getNickname" placeholder-class="input-placeholder" type="nickname" v-model="title"
								placeholder="请输入昵称" />
						</view>
					</view>
				</view>
				<view class=" tn-text-bold  clamp-text-1 tn-text-center tn-margin tn-padding-top ">

					<tn-button :backgroundColor="yanse2" padding="30rpx 0" width="46%" height="80rpx" shadow fontBold
						style="margin-left: 10px;" @tap="gaibian(2)">
						<text class="tn-icon-sex-female tn-padding-right-xs tn-color-black tn-text-xxl"></text>
						<text class="tn-color-black">小姐姐</text>

					</tn-button>
					<tn-button :backgroundColor="yanse1" padding="30rpx 0" width="46%" height="80rpx" shadow fontBold
						style="margin-left: 10px;" @tap="gaibian(1)">
						<text class="tn-icon-sex-male tn-padding-right-xs tn-color-black tn-text-xxl"></text>
						<text class="tn-color-black">小哥哥</text>
					</tn-button>
				</view>


				<view class=" tn-text-bold  clamp-text-1 tn-text-center tn-margin tn-padding-top" @click="send">

					<tn-button :shadow="true" shape="round" width="50%" height="80rpx"
						backgroundColor="tn-cool-bg-color-5" fontColor="#ffffff" margin="10rpx 0">保存
					</tn-button>
				</view>



			</view>
		</view>

		<get-tel @callback="showFn" :is-show="showGetTelModal" @close="closeGetTelModalFn"></get-tel>


	</view>
</template>

<script>
	import {
		host
	} from '@/siteinfo.js'
	import getTel from '@/components/loginFn/get-tel';
	const audioContext = uni.createInnerAudioContext()
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	import {
		assertObject,
		assertString
	} from '@/tools/tools.js';
	export default {
		components: {
			getTel
		},
		name: 'TemplateCreate',
		mixins: [template_page_mixin],
		data() {
			return {
				mobile: '',
				showGetTelModal: false, // 是否显示 获取手机号的模态框
				//录音
				bgimgnews: '',
				bgshow: false,
				voc: false,
				vocurl: "",
				vocscend: 0,
				vocurlpass: "",
				isplay: false,
				op: '',
				truehead: '',
				isRound: true,
				imageUrl: '',
				show: false,
				avatar: '',
				body: [],
				action: '',
				title: '',
				dec: '',
				vovnew: '',
				sex: 0,
				yanse0: "#e6e6e6",
				yanse1: "#e6e6e6",
				yanse2: "#e6e6e6",
				tagLength: 5, //标签选择的最多个数
				headerPosition: 'fixed',
				checktags: '',
				tags_user: [],
				bgimgbendi: '',
				tjbgimg: ''
			}
		},
		onLoad(option) {
			let that = this
			that.action = host + '/api/login/up_img'
			that.info()
			if (option.op) {
				this.op = option.op
			}
			// #ifdef MP
			this.showGetTelModal = true;
			// #endif
		},
		methods: {
		
		getNickname: function (e){
			this.title=e.detail.value
		       // console.log(e.detail.value)
		 },
	
			chooseAvatarEvent(e) {
			  this.cropperImageUrl= e.detail.avatarUrl		
			  this.avatar =e.detail.avatarUrl
			},
			
			closeGetTelModalFn() {
				this.showGetTelModal = false;
			},
			start() {
				console.log('开始录音')
				// 开始录音
			},
			end(event) {
				this.voc = false
				console.log(event)
				this.vocurl = event.tempFilePath
				this.vocscend = event.duration
				// 结束录音并处理得到的录音文件
				// event中，app端仅有tempFilePath字段，微信小程序还有duration和fileSize两个字段
			},
			cancel() {
				console.log('用户取消录音')
			},

			voctap() {
				this.voc = true
			},
			closedPopup_voc() {
				this.voc = false
				// #ifdef APP||MP
				this.$refs.luyinUpload.stopRecord()
				// #endif
			},
			labelBtn(name, index) {
				this.tags_user[index].checked = !this.tags_user[index].checked
			},
			// 选择图片
			close() {
				this.show = false
			},
		
		
			chooseImage() {
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success: (res) => {
						const tempFilePaths = res.tempFilePaths[0]
						this.imageUrl = tempFilePaths
						this.show = true
					}
				})
			},

			showFn(e) {
				let that = this;
				this.mobile = e.data.msg
				this.showGetTelModal=false
			},
			// 裁剪完成
			cropperFinish(res) {
				this.cropperImageUrl = res.path;
				this.avatar = this.cropperImageUrl
				this.show = false

			},
			gaibian(sex) {
				this.sex = sex
				if (sex == 0) {
					this.yanse0 = "#00FFC6"
					this.yanse1 = "#00FFC6"
					this.yanse2 = "#ff55ff"
				}
				if (sex == 1) {
					this.yanse1 = "#00FFC6"
					this.yanse0 = "#e6e6e6"
					this.yanse2 = "#e6e6e6"
				}
				if (sex == 2) {
					this.yanse2 = "#ff55ff"
					this.yanse0 = "#e6e6e6"
					this.yanse1 = "#e6e6e6"
				}
			},
			async info() {
				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/index/GetUser',
					data: {}
				});


				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						that.body = result.data.data.userinfo;
						that.avatar = that.body.avatar
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












			uploadSuccess() {

				uni.uploadFile({
					url: this.action, //仅为示例，非真实的接口地址
					filePath: this.cropperImageUrl,
					name: 'file',
					formData: {
						'token': uni.getStorageSync('token'),
						'user': 'test'
					},
					success: (uploadFileRes) => {
						let data = JSON.parse(uploadFileRes.data)
						this.avatar = data.data.file
						this.truehead = data.data.file
						this.post()

					}
				});


			},


			send() {
				if (this.title == '') {
					this.msg('请输入昵称')
					return
				}

				if (this.sex == 0) {
					this.msg('请选择性别')
					return
				}



				if (this.cropperImageUrl) {
					this.uploadSuccess()
				} else {
					this.post()
				}


			},

			post() {
			
				// #ifdef MP-WEIXIN
				this.post_xcx()
				// #endif
				// #ifndef MP-WEIXIN
					this.post_app()
				// #endif

			},

			async post_app() {
				let that = this;
				let data = uni.getStorageSync('user_reg')
				data.nickname = that.title
				data.sex = that.sex
				data.avatar = that.avatar
				data.op = that.op
				if (uni.getStorageSync('wxchat_openid')){
				data.wxchat_openid = that.wxchat_openid	
				}
				data.daren_id = uni.getStorageSync('daren_id')
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/login/set_user',
					data: data
				});

				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						uni.hideLoading()

						let token = assertObject(result.data.data).login_token;
						let user_id = result.data.data.user_id;
						uni.setStorageSync('user_id', user_id);
						that.$store.commit('setToken', token);
						uni.setStorageSync('user_reg_xcx', '');
						uni.setStorageSync('user_reg', '');
						that.bind()
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
								uni.navigateBack({
									delta: 2
								});
							}, 500);
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


			},


			async post_xcx() {
				let that = this;
				let data = {}
				data.nickname = that.title
				data.sex = that.sex
				data.avatar = that.avatar
				data.open_id = uni.getStorageSync('user_reg_xcx')
				data.mobile = that.mobile
				data.daren_id = uni.getStorageSync('daren_id')
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/login/set_user_xcx',
					data: data
				});
				///////////要去检查手机号是否有这个用户，保持通用
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						uni.hideLoading()

						let token = assertObject(result.data.data).login_token;
						let user_id = result.data.data.user_id;
						uni.setStorageSync('user_id', user_id);
						that.$store.commit('setToken', token);
						uni.setStorageSync('user_reg_xcx', '');
						uni.setStorageSync('user_reg', '');
						that.bind()
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
								uni.navigateBack({
									delta: 1
								});
							}, 500);
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


			},



			bind() {
				
				// #ifdef APP-PLUS||MP-WEIXIN||H5				
			
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
					// #endif
					
			},


		}
	}
</script>

<style lang="scss" scoped>
	.template-edit {}

	.about {

		&__wrap {
			position: relative;
			z-index: 1;
			margin: 20rpx 30rpx;
			margin-top: -230rpx;
		}
	}

	/* 顶部背景图 start */
	.top-backgroup {
		height: 350rpx;
		z-index: -1;

		.backgroud-image {
			width: 100%;
			height: 250rpx;
			// z-index: -1;
		}
	}

	/* 用户头像 start */
	.logo-image {
		width: 210rpx;
		height: 210rpx;
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
	/* 底部悬浮按钮 start*/
	.tn-tabbar-height {
		min-height: 100rpx;
		height: calc(120rpx + env(safe-area-inset-bottom) / 2);
	}

	.tn-footerfixed {
		bottom: 0;
		left: 0;
		position: fixed;
		width: 100%;
		bottom: calc(30rpx + env(safe-area-inset-bottom));
		z-index: 1000;
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


	.login {
		position: relative;
		height: 100%;
		z-index: 1;

		/* 背景图片 start */
		&__bg {
			z-index: -1;
			position: fixed;

			&--top {
				top: 0;
				left: 0;
				right: 0;
				width: 100%;

				.bg {
					width: 050rpx;
					will-change: transform;
				}
			}

			&--bottom {
				bottom: -10rpx;
				left: 0;
				right: 0;
				width: 100%;
				// height: 144px;
				// margin-bottom: env(safe-area-inset-bottom);

				image {
					width: 750rpx;
					will-change: transform;
				}
			}
		}

		/* 背景图片 end */

		/* 内容 start */
		&__wrapper {
			margin-top: 50rpx;
			width: 100%;
		}

		/* 切换 start */
		&__mode {
			position: relative;
			margin: 0 auto;
			width: 476rpx;
			height: 77rpx;
			margin-top: 100rpx;
			background-color: rgba(255, 255, 255, 0.1);
			box-shadow: 0rpx 10rpx 50rpx 0rpx rgba(0, 3, 72, 0.1);
			border-radius: 39rpx;

			&__item {
				height: 77rpx;
				width: 100%;
				line-height: 77rpx;
				text-align: center;
				font-size: 31rpx;
				color: #78909C;
				letter-spacing: 1em;
				text-indent: 1em;
				z-index: 2;
				transition: all 0.4s;

				&--active {
					font-weight: bold;
					color: #FFFFFF;
				}
			}

			&__slider {
				position: absolute;
				height: inherit;
				width: calc(476rpx / 2);
				border-radius: inherit;
				box-shadow: 0rpx 18rpx 72rpx 18rpx rgba(0, 195, 255, 0.1);
				z-index: 1;
				transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
			}
		}

		/* 切换 end */

		/* 登录注册信息 start */
		&__info {
			margin: 80rpx 30rpx 10rpx 30rpx;
			padding-bottom: 0;
			border-radius: 20rpx;

			&__item {

				&__input {
					margin-top: 59rpx;
					width: 100%;
					height: 77rpx;
					border: 1rpx solid #C6D1D8;
					border-radius: 39rpx;

					&__left-icon {
						width: 10%;
						font-size: 44rpx;
						margin-left: 20rpx;
						color: #78909C;
					}

					&__content {
						width: 80%;
						padding-left: 10rpx;

						&--verify-code {
							width: 56%;
						}

						input {
							font-size: 30rpx;
							color: #78909C;
							// letter-spacing: 0.1em;
						}
					}

					&__right-icon {
						width: 10%;
						font-size: 44rpx;
						margin-right: 20rpx;
						color: #78909C;
					}

					&__right-verify-code {
						width: 34%;
						margin-right: 20rpx;
					}
				}

				&__button {
					margin-top: 75rpx;
					margin-bottom: 39rpx;
					width: 100%;
					height: 77rpx;
					text-align: center;
					font-size: 31rpx;
					font-weight: bold;
					line-height: 77rpx;
					letter-spacing: 1em;
					text-indent: 1em;
					border-radius: 39rpx;
					box-shadow: 1rpx 10rpx 24rpx 0rpx rgba(60, 129, 254, 0.35);
				}

			}
		}

		/* 登录注册信息 end */

		/* 内容 end */

	}

	/deep/.input-placeholder {
		font-size: 30rpx;
		color: #C6D1D8;
	}
	.button {
	  position: relative;
	  width: 100%;
	  height: 100%;
	  border-radius: 50%;
	  overflow: visible;	 
	  color: #FFFFFF;
	  background-color: transparent;
	  padding: 0;
	  margin: 0;
	  font-size: inherit;
	  line-height: inherit;
	  border: none;
	  &::after {
	    border: none;
	  }
	}


	/* 标签内容 end*/
</style>
