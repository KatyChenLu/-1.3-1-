<template>
	<view class="template-create tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed :isBack="true">
			认证中心
		</tn-nav-bar>


		<view class="tn-safe-area-inset-bottom " :style="{paddingTop: vuex_custom_bar_height + 'px'}">

		<view class="about-shadow  tn-margin">
		  <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
		    <button class="tn-flex tn-flex-col-center tn-button--clear-style" open-type="contact">
		      <view
		        class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center" style="color: #7C8191;">
		        <view class="tn-icon-wechat-fill"></view>
		      </view>
		      <view class="tn-flex tn-flex-row-between" style="width: 100%;">
		        <view class="tn-margin-left-sm">合作勾搭</view>
		        <view class="tn-color-gray tn-icon-right"></view>
		      </view>
		    </button>
		  </tn-list-cell>
		  <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30">
		    <button class="tn-flex tn-flex-col-center tn-button--clear-style" open-type="feedback">
		      <view
		        class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center" style="color: #7C8191;">
		        <view class="tn-icon-message-fill"></view>
		      </view>
		      <view class="tn-flex tn-flex-row-between" style="width: 100%;">
		        <view class="tn-margin-left-sm">问题反馈</view>
		        <view class="tn-color-gray tn-icon-right"></view>
		      </view>
		    </button>
		  </tn-list-cell>
		  <tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30" @click="callPhoneNumber" data-number="18266666666">
		    <view class="tn-flex tn-flex-col-center">
		      <view
		        class="icon1__item--icon tn-flex tn-flex-row-center tn-flex-col-center" style="color: #7C8191;">
		        <view class="tn-icon-tel-circle-fill"></view>
		      </view>
		      <view class="tn-margin-left-sm tn-flex-1">技术支持</view>
		      <view
		        class="tn-margin-left-sm tn-color-cat tn-text-sm tn-padding-left-xs tn-padding-right-xs tn-bg-gray--light tn-round">
		        188****8888</view>
		    </view>
		  </tn-list-cell>
		</view>

		</view>



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
				truehead: '',
				isRound: true,
				imageUrl: '',
				show: false,
				avatar: '',
				body: [],
				action: '',
				title: '',
				dec: '',
				sex: 0,
				yanse0: "#e6e6e6",
				yanse1: "#e6e6e6",
				yanse2: "#e6e6e6"
			}
		},
		onLoad(option) {
			let that = this
			that.action = host + '/api/user/up_img'
			that.info()

		}, 
		methods: {

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
			// 裁剪完成
			cropperFinish(res) {
				if (res.url) {
					this.cropperImageUrl = res.url
				}
				if (res.base64) {
					this.cropperImageUrl = `${res.base64}`
				}
				this.avatar = this.cropperImageUrl
				this.show = false

			},
			gaibian(sex) {
				this.sex = sex
				if (sex==0){
				this.yanse0 = "#00FFC6"
				this.yanse1 = "#e6e6e6"
				this.yanse2 = "#e6e6e6"
				}if (sex==1){
				this.yanse1 = "#00FFC6"
				this.yanse0 = "#e6e6e6"
				this.yanse2 = "#e6e6e6"
				}if (sex==2){
				this.yanse2 = "#00FFC6"
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
						that.title = that.body.nickname
						that.dec = that.body.dec
						that.avatar = that.body.avatar
						that.truehead = that.body.truehead
						that.sex = that.body.sex
						if (that.sex==0){
							this.yanse0 = "#00FFC6"
						}
							if (that.sex==1){
								this.yanse1 = "#00FFC6"
							}	
							if (that.sex==2){
								this.yanse2 = "#00FFC6"
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


			uploadSuccess() {
				uni.showToast({
					title: '上传成功'
				})
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
						this.avatar = host + data.data.file
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

				if (this.cropperImageUrl) {
					this.uploadSuccess()
				} else {
					this.post()
				}


			},

			async post() {


				let that = this;

				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/user/set',
					data: {
						nickname: that.title,
						dec: that.dec,
						sex:that.sex,
						avatar: that.truehead
					}
				});

				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						uni.hideLoading()
						that.msg('修改成功')
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
	.logo-image {
		width: 210rpx;
		height: 210rpx;
		position: relative;
	}
  .about-shadow {
    border-radius: 15rpx;
    box-shadow: 0rpx 50rpx 50rpx 50rpx rgba(0, 0, 0, 0.07);
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



	/* 标签内容 end*/
</style>
