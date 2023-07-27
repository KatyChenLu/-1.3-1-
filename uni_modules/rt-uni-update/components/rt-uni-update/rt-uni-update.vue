<template>
	<view class="mask flex-center">
		<view class="content botton-radius">
			<view class="content-top">
				<text class="content-top-text">发现新版本</text>
				<image class="content-top" style="top: 0;" width="100%" height="100%" src="/uni_modules/rt-uni-update/static/bg_top.png"></image>
			</view>
			<view class="content-header"></view>
			<view class="content-body">
				<view class="title"><text>更新内容</text></view>
				<view class="body">
					<scroll-view class="box-des-scroll" scroll-y="true"><rich-text :nodes="data.describe"></rich-text></scroll-view>
				</view>
				<view class="footer flex-center">
					<view class="progress-box flex-column" v-if="!updateBtn">
						<progress class="progress" border-radius="35" :percent="percent" activeColor="#3DA7FF" show-info stroke-width="10" />
						<!-- <u-line-progress :striped="true" :percent="percent" :striped-active="true"></u-line-progress> -->
						<view><text>正在下载，请稍后</text></view>
					</view>

					<button class="content-button" style="border: none;color: #fff;" plain @click="confirm" v-if="updateBtn">立即升级</button>
				</view>
			</view>

			<image v-if="cancleBtn" class="close-img" src="/uni_modules/rt-uni-update/static/app_update_close.png" @click.stop="cancel"></image>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			percent: 0, //进度条百分比
			updateBtn: true, //是否显示立即更新
			cancleBtn: false,
			data: {
				describe: '',
				edition_url: '', //安装包下载地址或者通用应用市场地址
				edition_force: 1, //是否强制更新 0代表否 1代表是
				package_type: 1 //0是整包升级 1是wgt升级
			}
		};
	},
	onLoad({ obj }) {
		this.data = JSON.parse(obj);
		if (this.data.edition_force == 0) {
			this.cancleBtn = true;
		}
	},

	onBackPress() {
		// 强制更新不允许返回
		if (this.data.edition_force == 1 || this.percent > 0) {
			return true;
		}
	},

	methods: {
		cancel() {
			//取消升级 返回上一页
			uni.navigateBack({
				delta: 1
			});
		},
		confirm() {
			if (this.data.package_type == 0) {
				//apk整包升级
				if (this.data.edition_url.includes('.apk')) {
					this.updateBtn = false;
					this.cancleBtn = false;
					this.download();
				} else {
					this.data.edition_force = 0; // 解决跳转外部链接后，更新提示还在的问题
					plus.runtime.openURL(this.data.edition_url);
					uni.navigateBack({
						delta: 1
					});
				}
			} else {
				this.updateBtn = false;
				this.cancleBtn = false;
				//wgt资源包升级
				this.download();
			}
		},
		download() {
			let package_type = this.data.package_type;
			const downloadTask = uni.downloadFile({
				url: this.data.edition_url,
				success: res => {
					if (res.statusCode === 200) {
						plus.runtime.install(
							res.tempFilePath,
							{
								force: true //true表示强制安装，不进行版本号的校验；false则需要版本号校验，
							},
							function() {
								// console.log('package_type', package_type);
								if (package_type == 1) {
									plus.runtime.restart();
								}
							},
							function(e) {
								console.error('install fail...');
								console.log('package_type', package_type);
							}
						);
					}
				}
			});
			downloadTask.onProgressUpdate(res => {
				this.percent = res.progress;
			});
		}
	}
};
</script>

<style>
page {
	background: transparent;
}

.flex-center {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	justify-content: center;
	align-items: center;
}

.mask {
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.65);
}

.botton-radius {
	border-bottom-left-radius: 30rpx;
	border-bottom-right-radius: 30rpx;
}

.content {
	position: relative;
	top: 0;
	width: 600rpx;
	background-color: #fff;
	box-sizing: border-box;
	padding: 0 50rpx;
	font-family: Source Han Sans CN;
}

.text {
	/* #ifndef APP-NVUE */
	display: block;
	/* #endif */
	line-height: 200px;
	text-align: center;
	color: #ffffff;
}

.content-top {
	position: absolute;
	top: -195rpx;
	left: 0;
	width: 600rpx;
	height: 270rpx;
}

.content-top-text {
	font-size: 45rpx;
	font-weight: bold;
	color: #f8f8fa;
	position: absolute;
	top: 120rpx;
	left: 50rpx;
	z-index: 1;
}

.content-header {
	height: 70rpx;
}

.title {
	font-size: 33rpx;
	font-weight: bold;
	color: #3da7ff;
	line-height: 38px;
}

.footer {
	height: 150rpx;
	display: flex;
	align-items: center;
	justify-content: space-around;
}

.box-des-scroll {
	box-sizing: border-box;
	padding: 0 40rpx;
	text-align: left;
}

.box-des {
	font-size: 26rpx;
	color: #000000;
	line-height: 50rpx;
}

.progress-box {
	width: 100%;
}

.progress {
	width: 90%;
	height: 40rpx;
	border-radius: 35px;
}

.close-img {
	width: 70rpx;
	height: 70rpx;
	z-index: 1000;
	position: absolute;
	bottom: -120rpx;
	left: calc(50% - 70rpx / 2);
}

.content-button {
	text-align: center;
	flex: 1;
	font-size: 30rpx;
	font-weight: 400;
	color: #ffffff;
	border-radius: 40rpx;
	margin: 0 18rpx;

	height: 80rpx;
	line-height: 80rpx;

	background: linear-gradient(to right, #1785ff, #3da7ff);
}

.flex-column {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
