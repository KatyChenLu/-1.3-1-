<template>
	<view class="ranking_content" :style="'background-image:url('+bg + ')'">
		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class='tn-custom-nav-bar__back'>
				<text class='icon tn-icon-left' @click="goBack"></text>
				<text class='icon tn-icon-home-capsule-fill' @click="gohome"></text>
			</view>
		</tn-nav-bar>

		<view class="ranking_content_nav">



			<view class="ranking_content_nav_subsection tn-padding">
				<view class="u-subsection u-subsection--button" style="border: 1px solid rgb(255, 255, 255); 
				background: rgba(255, 255, 255, 0.31); 
				box-shadow: rgba(255, 255, 255, 0.31) 5px 3px 7px inset;
				 backdrop-filter: blur(84.2667px); border-radius: 17px;
				  height:100rpx; padding: 0px;">
		<view class="tn-flex  tn-flex-row-around " >
          <view v-for="(item,idd) in list" :key="idd" :class="{
                  'tn-cool-bg-color-5': tabsIndex=== idd}"  
				  class="justify-content-item tn-padding-sm tn-text-center tn-margin-xs " @click="tabsChange(idd)">
			  {{item.name}}
			  </view>
      
        </view>
				</view>

			</view>

		</view>
		<!-- 标签内容 -->


		<!-- top three -->
		<view class="ranking_content_top">

			

			<!-- left -->
			<view class="ranking_content_top_left"
				@click="navigateToFn({ url: '/circlePages/blogger_other?id='+rankList[1].id, checkLogin: false })">
				<image style="width: 240rpx;height: 300rpx;" :src="left" mode="as"></image>
				<image
					style="width: 125rpx;height: 125rpx;border: 3px solid rgb(230, 208, 255);border-radius: 50%;position: relative;bottom: 410rpx;left: 20rpx;"
					:src="rankList[1].avatar" mode="aspectFit"></image>
				<image style="width: 100rpx;height: 90rpx;position: relative;bottom: 480rpx;left: -82rpx;" :src="ding"
					mode="aspectFit"></image>
				<view style="position: relative;bottom: 350rpx;left: 60rpx;">
					<view style="color:#956AAA; font-size: 28rpx;display: inline-block;transform:rotate(-10deg);">
						{{rankList[1].nickname}}
					</view>
					<view>
						<image style="width: 120rpx;height: 120rpx;" :src="er" mode="aspectFit"></image>
					</view>
				</view>
			</view>

			<!-- center -->
			<view class="ranking_content_top_center"
				@click="navigateToFn({ url: '/circlePages/blogger_other?id='+rankList[0].id, checkLogin: false })">
				<image style="width: 330rpx;height: 470rpx;" :src="zhong" mode="as"></image>
				<image
					style="width: 150rpx;height: 150rpx;border: 3px solid rgb(230, 208, 255);border-radius: 50%;position: relative;bottom: 600rpx;left: 80rpx;"
					:src="rankList[0].avatar" mode="aspectFit"></image>
				<image style="width: 100rpx;height: 80rpx;position: relative;bottom: 695rpx;left: -15rpx;" :src="dingz"
					mode="aspectFit"></image>
				<view style="position: relative;bottom: 500rpx;left: 75rpx;">
					<view style="color:#437C84; position: relative;font-size: 32rpx;display: inline-block;">
						{{rankList[0].nickname}}
					</view>
					<view>
						<image style="width: 140rpx;height: 140rpx;position: relative;" :src="yi" mode="aspectFit">
						</image>
					</view>
				</view>
			</view>
			<!-- right -->
			<view class="ranking_content_top_right"
				@click="navigateToFn({ url: '/circlePages/blogger_other?id='+rankList[2].id, checkLogin: false })">
				<image style="width: 240rpx;height: 300rpx;" :src="you" mode="as"></image>
				<image
					style="width: 120rpx;height: 120rpx;border: 3px solid rgb(230, 208, 255);border-radius: 50%;position: relative;bottom: 400rpx;left: 110rpx;"
					:src="rankList[2].avatar" mode="aspectFit"></image>
				<image style="width: 100rpx;height: 80rpx;position: relative;bottom: 465rpx;left: 30rpx;" :src="dingy"
					mode="aspectFit"></image>
				<view style="position: relative;bottom: 400rpx;left: 90rpx;">
					<view
						style="color:#3F7AA0; position: relative;font-size: 28rpx;display: inline-block;transform:rotate(10deg);">
						{{rankList[2].nickname}}
					</view>
					<view>
						<image style="width: 120rpx;height: 120rpx;left:0rpx;" :src="san" mode="aspectFit"></image>
					</view>
				</view>
			</view>
		</view>
		<!-- top list -->
		<view class="ranking_content_list">
			<view class="ranking_content_list_top">
				<text>排名</text>

				<text v-if="tabsIndex==0">获得{{configInfo.site_moneyname}}</text>
				<text v-if="tabsIndex==1">消费{{configInfo.site_moneyname}}</text>
				<text v-if="tabsIndex==2">粉丝数</text>
				<text v-if="tabsIndex==3">评论数</text>

			</view>
			<view v-for="(item,i) in rankList" :key="i" class="ranking_content_list_item" v-if="i>2"
				@click="navigateToFn({ url: '/circlePages/blogger_other?id='+item.id, checkLogin: false })">
				<view style="color: #99A7AD;font-size: 50rpx;margin-right: 20rpx;width: 50rpx;">{{i+1}}</view>
				<image style="width: 90rpx;height: 90rpx;display: inline-block;border-radius: 50%;" :src="item.avatar" ></image>
				<view class="ranking_content_list_item_name">
					<text style="color:#333330;font-size: 35rpx;margin-bottom: 10rpx;">{{item.nickname}}</text>
					<text
						style="width: 260rpx;color:#666660;font-size: 26rpx;overflow: hidden; text-overflow: ellipsis;white-space: nowrap;display: inline-block;">{{item.described}}</text>
				</view>
				<text>{{item.rank}}</text>
			</view>
		</view>


	</view>
</template>

<script>
	import {
		host
	} from '@/siteinfo.js'
	export default {
		data() {
			return {
				san: host + '/api/pai/3.png',
				bg: host + '/api/pai/bg.png',
				yi: host + '/api/pai/1.png',
				er: host + '/api/pai/2.png',
				dingy: host + '/api/pai/dingy.png',
				dingz: host + '/api/pai/dingz.png',
				ding: host + '/api/pai/ding.png',
				left: host + '/api/pai/left.png',
				zhong: host + '/api/pai/zhong.png',
				you: host + '/api/pai/you.png',

				activeItemStyle: {
					fontSize: `36rpx`
				},
				list: [{
						name: '魅力榜'
					},
					{
						name: '富豪榜'
					},
					{
						name: '红人榜'
					},
					{
						name: '话痨榜'
					},
				],
				tabsIndex: 0,
				swiperIndex: 0,
				swiperTop: 0,
				swiperHeight: 0,
				rankList: [{
					name: 'chouttt',
					described: '那个只有我们知道的地方',
					sum: '179999'
				}]
			}
		},
		onLoad() {
			this.info()
		},
		methods: {
			async info() {
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/four/meili',
					data: {
						type: this.tabsIndex
					}
				});
				if (result.data.code == 200) {
					this.rankList = result.data.data
				}

			},
			// 标签栏值发生改变
			tabsChange(index) {
				this.tabsIndex = index
				this.info()
			},
			goBack() {
				// 通过判断当前页面的页面栈信息，是否有上一页进行返回，如果没有则跳转到首页
				const pages = getCurrentPages()
				if (pages && pages.length > 0) {
					const firstPage = pages[0]
					if (pages.length == 1 && (!firstPage.route || firstPage.route != 'pages/index')) {
						uni.reLaunch({
							url: '/pages/index'
						})
					} else {
						uni.navigateBack({
							delta: 1
						})
					}
				} else {
					uni.reLaunch({
						url: '/pages/index'
					})
				}
			},

			gohome() {
				uni.reLaunch({
					url: '/pages/index'
				})
			},

		}
	}
</script>

<style lang="scss" scoped>
	.ranking_content {
		position: relative;
		height: 100%;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		/* #ifdef MP-WEIXIN  || APP-PLUS */
		overflow: auto;
		/* #endif */
	

		.ranking_content_nav {
			position: relative;
			/* #ifndef MP-WEIXIN */
			padding-top: 120rpx;
			/* #endif */
			/* #ifdef MP-WEIXIN */
			padding-top: 220rpx;

			/* #endif */
			.ranking_content_nav_subsection {
				width:100%;
				margin: 0 auto;
			}
		}

		.ranking_content_top {
			// border: solid 1px red;
			width: 60%;
			height: 600rpx;
			margin: 40rpx auto 0;
			display: flex;
			justify-content: center;
			padding-top: 120rpx;

			.ranking_content_top_center {
				z-index: 3;
			}

			.ranking_content_top_left {
				position: relative;
				left: 120rpx;
				top: 140rpx;
			}

			.ranking_content_top_right {
				position: relative;
				right: 140rpx;
				top: 170rpx;
			}
		}

		.ranking_content_list {
			background: rgba(255, 255, 255, 0.59);
			border: 1px solid rgb(255, 255, 255);
			backdrop-filter: blur(32.619361877441406px);
			border-radius: 40rpx 40rpx 0px 0px;
			opacity: 0.8;
			// border: solid 1px red;
			position: relative;
			bottom: 110rpx;
			z-index: 99999999;
			width: 90%;
			margin: 0 auto;
			// padding-bottom: 100rpx;
			// height: 500rpx;
			// overflow: scroll;


			.ranking_content_list_top {
				display: flex;
				justify-content: space-between;
				color: #333330;
				padding: 40rpx 60rpx;
				font-size: 30rpx;
			}

			.ranking_content_list_item {
				display: flex;
				// justify-content: space-around;
				flex-direction: row;
				align-items: center;
				height: 160rpx;
				padding: 30rpx 60rpx 0 50rpx;
				border-bottom: 1px solid rgba(214, 229, 228, 0.57);
				// border: solid 1px red;

				.ranking_content_list_item_name {
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					margin: 0 20rpx 0 20rpx;
					// border: solid 1px red;
					width: 260rpx;
				}
			}
		}
	}

	/deep/.u-subsection--button {
		background: rgba(255, 255, 255, 0.31) !important;
		border: 1px solid rgb(255, 255, 255) !important;
		box-shadow: inset 5px 3px 7px rgba(255, 255, 255, 0.31) !important;
		backdrop-filter: blur(84.26667785644531px) !important;
		border-radius: 35rpx !important;
		height: 80rpx;
		padding: 0;
	}

	/deep/ .u-subsection--button__bar {
		background: linear-gradient(rgba(255, 255, 255, 0.4196078431372549) 0%, rgba(255, 255, 255, 0.4196078431372549) 100%);
		border: 1px solid rgb(255, 255, 255);
		box-shadow: inset 5px 3px 7px rgba(255, 255, 255, 0.31);
		;
		backdrop-filter: blur(84.26667785644531px);
		border-radius: 40px 0px 0px 40px;
		padding: 0 !important;
	}


	.u-subsection {

		position: relative;
		overflow: hidden;
		/* #ifndef APP-NVUE */
		width: 100%;
		box-sizing: border-box;
		/* #endif */

		&--button {
			height: 32px;
			background-color: rgb(238, 238, 239);
			padding: 3px;
			border-radius: 3px;
			align-items: stretch;

			&__bar {
				background-color: #ffffff;
				border-radius: 3px !important;
			}
		}

		&--subsection {
			height: 30px;
		}

		&__bar {
			position: absolute;
			/* #ifndef APP-NVUE */
			transition-property: transform, color;
			transition-duration: 0.3s;
			transition-timing-function: ease-in-out;
			/* #endif */

			&--first {
				border-top-left-radius: 3px;
				border-bottom-left-radius: 3px;
				border-top-right-radius: 0px;
				border-bottom-right-radius: 0px;
			}

			&--center {
				border-top-left-radius: 0px;
				border-bottom-left-radius: 0px;
				border-top-right-radius: 0px;
				border-bottom-right-radius: 0px;
			}

			&--last {
				border-top-left-radius: 0px;
				border-bottom-left-radius: 0px;
				border-top-right-radius: 3px;
				border-bottom-right-radius: 3px;
			}
		}

		&__item {

			flex: 1;
			justify-content: center;
			align-items: center;
			// vue环境下，需要设置相对定位，因为滑块为绝对定位，item需要在滑块的上面
			position: relative;

			&--no-border-right {
				border-right-width: 0 !important;
			}

			&--first {
				border-top-left-radius: 3px;
				border-bottom-left-radius: 3px;
			}

			&--last {
				border-top-right-radius: 3px;
				border-bottom-right-radius: 3px;
			}

			&__text {
				font-size: 12px;
				line-height: 12px;

				align-items: center;
				transition-property: color;
				transition-duration: 0.3s;
			}
		}
	}
</style>