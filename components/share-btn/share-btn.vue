<template>
	<view class="sharebtn">
		<view class="uni-share">			
			<view class="uni-share-content">				
				<view v-for="(item, index) in bottomData" :key="index" class="uni-share-content-box" @click='btnShare(index)'>
					<view class="uni-share-content-image">
						<image :src="item.icon" class="content-image" v-if="item.imges"/>
						<text :class="item.name" v-else style="font-size: 40px;color: #000;"></text>
					</view>
					<text class="uni-share-content-text">{{ item.text }}</text>
				</view>				
			</view>		
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {			
				bottomData: [{
						text: '微信',
						icon: '/static/index/weixin.png',
						name: 'wx',
						imges:true
					},
					{
						text: '朋友圈',
						icon: '/static/index/pengyouquan.png',
						name: 'copy',
						imges:true
					},
					{
						text: '海报',
						icon: '/static/index/weibo.png',
						name: 'copy',
						imges:true
					},
					{
						text: '复制',
						icon: '/static/index/copy.png',
						name: 'tn-icon-link',
						imges:false
					},					
					{
						text: '举报',
						icon: '/static/index/copy.png',
						name: 'tn-icon-warning',
						imges:false
					}
				],
				// sharedataTemp: {
				// 	type: 0,
				// 	strShareUrl: "https://uniapp.dcloud.io",
				// 	strShareTitle: "分享标题",
				// 	strShareSummary: "分享总结",
				// 	strShareImageUrl: "/static/sharemenu/copyurl.png"
				// }
			}
		},
		props: ["sharedataTemp"],
		// onLoad() {
		// 	console.log('sharedataTemp',this.sharedataTemp);
		// },
		methods: {
			btnShare(ind) {
				let that=this
				console.log(ind);
				var strProvider = "",
					strScene = "",
					mytype = '';
				switch (ind) {
					case 0:
						strProvider = "weixin"
						strScene = "WXSceneSession"
						mytype = 0
						break;
					case 1:
						strProvider = "weixin"
						strScene = "WXSenceTimeline"
						mytype = 0
						break;
					case 2:
						that.$emit('haobaoche');
						break;
					case 3:
						uni.setClipboardData({
							data: this.sharedataTemp.strShareUrl,
							complete() {
								uni.showToast({
									title: "已复制到剪贴板"
								})
							}
						})
						break;
					case 4:
						that.$emit('jubaolist');								
						break;
				}
				if (strProvider != "") { //点击了0-3序号的这4个按钮
				
				console.log(this.sharedataTemp)
				
					uni.share({
						provider: strProvider,
						scene: strScene,
						type: mytype,
						href: this.sharedataTemp.strShareUrl,
						title: this.sharedataTemp.strShareTitle,
						summary: this.sharedataTemp.strShareSummary,
						imageUrl: this.sharedataTemp.strShareImageUrl,
						success: function(res) {
							console.log("success:" + JSON.stringify(res));
						},
						fail: function(err) {
							console.log("fail:" + JSON.stringify(err));
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	/* 底部分享 */
	.sharebtn {
		.uni-share {
		
			margin: 30rpx;
			border-radius: 30rpx;
			/* #ifndef APP-NVUE */
			display: flex;
			flex-direction: column;
			/* #endif */
			background-color: #fff;
			.uni-share-content {
				/* #ifndef APP-NVUE */
				display: flex;
				/* #endif */
				flex-direction: row;
				flex-wrap: nowrap;
				justify-content: center;
				
				padding: 15px 50rpx;
				.uni-share-content-box {
					/* #ifndef APP-NVUE */
					display: flex;
					/* #endif */
					flex-direction: column;
					align-items: center;
					// width: 25%;
					// justify-content: space-between;
					margin-right: 40rpx;
					&:nth-last-child(1) {
						margin-right: 0;
					}
					.uni-share-content-image {
						/* #ifndef APP-NVUE */
						display: flex;
						/* #endif */
						flex-direction: row;
						justify-content: center;
						align-items: center;
						width: 90rpx;
						height: 90rpx;
						overflow: hidden;
						border-radius: 10rpx;
						.content-image {
							width: 90rpx;
							height: 90rpx;
						}
					}
					&:nth-last-child(1){
						.uni-share-content-image .content-image {
							width: 50rpx!important;
							height: 50rpx!important;
						}
					}
					.uni-share-content-text {
						font-size: 26rpx;
						color: #333;
						padding-top: 5px;
						padding-bottom: 10px;
					}
				}
			}
		}
	}
</style>
