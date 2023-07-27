<template>
	<view class="container">
		<view class="cropper">
			<bt-cropper v-if="imageSrc" ref="croper" :ratio="ratio" :dWidth="400" :rotate="rotate" fileType="png" showGrid @change="onChange"
				:imageSrc="imageSrc" :mask="mask">
			</bt-cropper>
		</view>
		<view class="footer">
			<scroll-view :scroll-x="true" class="scroller">
				<view class="scrollerContainer">
					<view @click="ratio=0" class="item" :class="{
						active: ratio==0
					}">
						<view class="itemContent ratio-1-1">
							自由
						</view>
					</view>
					<view v-for="(item,index) in ratioList" :key="index" @click="chooseRatio(index)" class="item"
						:class="{
						active:activeIndex===index && ratio!==0
					}">
						<view :class="'itemContent ratio-' + item.width + '-' + item.height">
							{{item.width}}:{{item.height}}
						</view>
					</view>
				</view>
			</scroll-view>
			<view class="btnGroup">
				<view class="btn choose" @click="chooseImage">
					重选
				</view>
				<view class="btn" @click="onCrop">
					确定剪裁
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageSrc: "",
				// 蒙版，非黑色区域会裁剪为透明
				// mask: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a3b890b4-7cb2-4b29-aa78-e652572bdef6/d6bc69ee-cdc0-4a13-a744-d79db42e0dbe.png",
				mask: "",
				dWidth: 500,
				rotate: 0,
				// 输出的宽高比例
				// ratio: 3 / 2,
				ratio: 1 / 1,
				activeIndex: 0,
				ratioList: [{
					width: 1,
					height: 1,
				}, {
					width: 16,
					height: 9,
				}, {
					width: 9,
					height: 16,
				}, {
					width: 4,
					height: 3,
				}, {
					width: 3,
					height: 4,
				}, {
					width: 3,
					height: 2,
				}, {
					width: 2,
					height: 3,
				}]
			}
		},
		onLoad(options) {
			this.imageSrc =options.url
		},
		mounted() {},
		methods: {
			onChange(ev) {
				console.log(ev)
			},
			chooseRatio(index) {
				this.activeIndex = index
				let item = this.ratioList[index]
				this.ratio = item.width / item.height
			},
			chooseImage() {
				uni.chooseImage({
					count: 1,
					sizeType: ['original'],
					success: (res) => {
						let tempFilePaths = res.tempFilePaths[0]
						this.imageSrc = tempFilePaths
					}
				})
			},
			onCrop(cb) {
				this.$refs.croper.crop().then(path => {
					uni.$emit('headimg',path)
					uni.navigateBack()
				})
			},
			onRotate(ev){
				this.rotate = 360 * (ev.detail.value / 100)
			}
		},
	}
</script>

<style lang="scss" scoped>
	.container {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		// #ifndef H5
		height: 100vh;
		// #endif
		// #ifdef H5
		height: 100%;
		// #endif
		background-color: #000;
		.cropper{
			flex: 1;
		}
	}
	
	uni-page-body {
		height: 100%;
	}

	.footer {
		.scroller {
			// align-items: center;
			width: 100vw;
			height: 100rpx;
			touch-action: none;

			.scrollerContainer {
				display: flex;
				flex-wrap: nowrap;
				height: 100rpx;
				align-items: center;
			}

			.item {
				display: flex;
				justify-content: center;
				align-items: center;
				margin-left: 40rpx;
				width: 70rpx;
				height: 70rpx;
				flex-shrink: 0;
				color: #FFFFFF;

				&.active {
					color: #0070F3;

					.itemContent {
						border: 1px solid #0070F3;
					}
				}

				.itemContent {
					border-radius: 10rpx;
					padding: 10rpx;
					border: 1px solid #FFFFFF;
					font-size: 16rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					white-space: nowrap;
				}

				.ratio-1-1 {
					width: 70%;
					height: 70%;
				}

				.ratio-16-9 {
					width: 100%;
					height: 56.25%;
				}

				.ratio-9-16 {
					width: 56.25%;
					height: 100%;
				}

				.ratio-4-3 {
					width: 100%;
					height: 75%;
				}

				.ratio-3-4 {
					width: 75%;
					height: 100%;
				}

				.ratio-3-2 {
					width: 100%;
					height: 66.6%;
				}

				.ratio-2-3 {
					width: 66.6%;
					height: 100%;
				}
			}
		}

		.btnGroup {
			display: flex;
			align-items: center;
			justify-content: space-around;
			background-color: #000000;
			height: calc(100rpx + env(safe-area-inset-bottom));
			padding-bottom: 20rpx;
			padding-top: 20rpx;
			width: 100%;

			.btn {
				width: 300rpx;
				background-color: #007AFF;
				color: #FFFFFF;
				border-radius: 99px;
				text-align: center;
				color: #FFFFFF;
				line-height: 70rpx;

				&.choose {
					margin-right: 20rpx;
					background-color: #F0AD4E;
				}
			}
		}
	}
</style>
