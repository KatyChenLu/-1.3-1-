<template>
	<view class="template-circle tn-safe-area-inset-bottom ">	
		<tn-nav-bar fixed :bottomShadow="false">线下</tn-nav-bar>
	
	
		<!-- 推荐 -->
				<mescroll-body ref="mescrollRef" @down="downCallback" @up="upCallback" >
		<view class="" v-if="current==1" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
		
		<!-- #ifdef MP -->
		<add-tip  />
		<!-- #endif -->

				
				
					<block v-if="configInfo.xcx_sh==1">
					
					
						<view class="tn-flex tn-flex-wrap  tn-padding-sm" style=" box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);">
											  <view class=" tn-radius" v-for="(item, indexsdf) in iconnew" :key="indexsdf"  :class="{
						'wuge': configInfo.daohanggeshu ==0,
						'sige': configInfo.daohanggeshu ==1}" v-if="!item.appId">
											    <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center" @click="navigateToFn({ url: '/gamePages/index?type=1&id='+item.id+'&title='+item.title, checkLogin: false })">
											      <view class="icon7__item--icon tn-flex tn-flex-row-center tn-flex-col-center">
											        <image class="" :src='item.image' mode='aspectFit' style="height:90rpx;width: 90rpx;"></image>
											      </view>
											      <view class=" tn-text-center tn-margin-top-sm">
											        <text class="tn-text-ellipsis">{{item.title}}</text>
											      </view>
											    </view>
											  </view>
						</view>
					
					</block>	
				<view class="tn-flex tn-flex-direction-column tn-margin-bottom">
			
				<view class="" style="width: 100%;position: relative;">
					<tn-tabs :list="list" activeColor="#5500ff" inactiveColor="#000000" :isScroll="true" :current="currenttiezi" name="tab-name"
						@change="tabsChange"></tn-tabs>	
				</view>		
					<quan-news :list="content" :index="true"></quan-news>
				</view>

			    <view class='tn-tabbar-height'></view> 
		
		</view>



	
		
	</mescroll-body>
		<!-- 登录框组件 -->
		<login-fn :is-show-login="loginBoxFlag" @loginSuccessCallback="refreshFn" @close="closeGlobalLoginFn">
		</login-fn>
		<!-- 压屏窗-->
		<tn-landscape :show="tanchuangshow" :maskCloseable="false" closePosition="rightTop" @close="closeLandscape">
			<image :src="tanchuanglistimage" mode="widthFix" @click="tanchuang()"></image>
		</tn-landscape>
	<view style="height: 50px;"></view>
	</view>
</template>

<script>
	import {
		host
	} from '@/siteinfo.js'
	import silenceUpdate from '@/uni_modules/rt-uni-update/js_sdk/silence-update.js' //引入静默更新
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	import MescrollBody from '@/components/mescroll-uni/mescroll-body.vue';
	import MescrollUni from '@/components/mescroll-uni/mescroll-uni.vue';
	import MescrollMixin from '@/components/mescroll-uni/mescroll-mixins.js';

	export default {
		name: '',
		mixins: [template_page_mixin, MescrollMixin],
		components: {		
			MescrollBody
		},
		data() {
			return {
				numindex:0,
				shoplist: [],
				vodurl: '',
				videoPlay: false,
				tanchuanglistimage: '',
				activeItemStyle: {
					fontSize: `36rpx`
				},
				list: [
				],
				barStyle: {
					boxShadow: `12rpx 12rpx 16rpx #01BEFF`
				},
				show_fabu: false,
				loading: true,
				skeleton1: {
					avatarSize: '52px',
					row: 3,
					showTitle: true,
				},
				loginBoxFlag: false, // 登录框显示隐藏状态
				cardCur: 0,
				swiperList: [],
				current: 1,
				currenttiezi: 0,
				scrollList: [{
						name: '关注'
					},
					{
						name: '首页',
					},
					{
						name: '热门'
					},
				],
				tagsid:0,
				latestUserAvatar: [],
				bloggerList: [],
				// 内容默认隐藏显示的高度
				contentHideShowHeight: 0,
				content: [],
				adList: [],
				roomlist: [],
				adAutoplay: false,
				mygrouplist: [],
				bloggerhotList: [],
				tanchuangshow: false,
				msgcount:0,
				iconnew:[],
				title:''

			}
		},
		onShow() {

		},
		onShareAppMessage(res) {
			return {
				title: this.item.share_title, //分享的名称
				path: '/circlePages/details?id=' + this.id+'&daren_id='+uni.getStorageSync('user_id'),
			}
		},
		//分享到朋友圈
		onShareTimeline(res) {
			return {
				title: this.item.share_title, //分享的名称
				path: '/circlePages/blogger_other?id=' + this.id+'&daren_id='+uni.getStorageSync('user_id'),
			}
		},
	
		
		
				
		onLoad(option) {			
			let that=this									
	
		uni.setNavigationBarTitle({
			title:this.configInfo.shoname
		})
	
	
	

			
		},
		onPullDownRefresh() {
			this.info()
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		

	
		
		
		mounted() {
			let that = this;
			that.info('rec')
			that.initContentData()
			that.contentHideShowHeight = uni.upx2px(56) * 3
			that.adAutoplay = true

			uni.$off('setLoginBoxFlag_home');
			uni.$on('setLoginBoxFlag_home', loginBoxFlag => {
				that.loginBoxFlag = loginBoxFlag;
			});
	
		},

		methods: {
			
				   
			screenChange(e) {
				let _this = this;
				let fullScreen = e.detail.fullScreen;
				if (!fullScreen) {
					_this.videoContext.pause();
					_this.videoPlay = false;
				}
			},
			videoShow(vod) {
				let _this = this;
				_this.vodurl = vod;
				_this.videoPlay = true;
				_this.videoContext = uni.createVideoContext("myvideo", _this);
				_this.videoContext.requestFullScreen();
				_this.videoContext.play();
			},



			async info() {
				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/index/index_xianxia',
					data: {
						type: 1
					}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						that.iconnew = result.data.data.iconnew;						
						that.list = result.data.data.tagslist;
						that.loading = false						
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
				if (this.current==0){
					this.myinfo()
				}	
				mescroll.endSuccess();
				mescroll.resetUpScroll();
			},
			async upCallback(mescroll) {
				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/games/user_list_down',
					data: {
						searchKey:'',
						xiaolei:'',
						tesetitle:'',
						sextitle:'',
						paixutitle:'',
						latitude:'',
						longitude:'',
						tagsindex: that.tagsid,					
						page: mescroll.num
					}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {

						if (mescroll.num == 1) {
							that.content = result.data.data.data;
						} else {
							that.content = that.content.concat(result.data.data.data);
						}
						mescroll.endSuccess(result.data.data.data.length, result.data.data.data.length >= mescroll
							.size);

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




			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
				for (let i = 0; i < this.swiperList.length; i++) {
					const videoContext = uni.createVideoContext(`video-${this.swiperList[i]['id']}`, this)
					if (i === this.cardCur) {
						// #ifdef H5
						videoContext.play()
						// #endif
						// #ifndef H5
						videoContext.play()
						// #endif

					} else {
						// #ifdef MP
						videoContext.stop()
						// #endif
						// #ifndef MP
						videoContext.pause()
						// #endif
					}
				}
			},
			// 暂停所有视频
			stopAllVideo() {
				this.current = 0
			},
			// tab选项卡切换
			tabChange(index) {

				this.content = []
				if (index == 0) {
					if (!uni.getStorageSync('token')) {
						this.loginBoxFlag = true
						return false;
					}
					this.myinfo()
				}

				this.current = index
				this.mescroll.resetUpScroll()


			},
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},

			// 震动跳转
			navCreate(e) {
				wx.vibrateLong();
				uni.navigateTo({
					url: '/circlePages/create'
				})
			},
			// 震动跳转
			navBuild(e) {
				wx.vibrateLong();
				uni.navigateTo({
					url: '/circlePages/build'
				})
			},
			// 处理内容，给内容添加对应的标识信息
			initContentData() {
				this.content.forEach((item, index) => {
					// 是否需要隐藏内容
					item.hideContent = false
					// 显示所有内容
					item.showAllContent = false
					// 内容容器的实际高度
					item.contentContainerHeight = 0
					// 内容容器是否初始化完成
					item.contentContainerInit = false
					this.$set(this.content, index, item)
				})
			},
			// 获取内容容器的信息
			getContentRectInfo() {
				let contentRect = {}
				const query = uni.createSelectorQuery().in(this)
				// 筛选出存在内容的数据
				this.content.forEach((item, index) => {
					if (item?.content) {
						query.select(`#blogger__content--${index}`).boundingClientRect()
						contentRect[index] = item
					}
				})
				// 获取所有内容的宽高信息
				query.exec(res => {
					if (!res) {
						setTimeout(() => {
							this.getContentRectInfo()
						}, 10)
						return
					}
					// console.log(res);
					res.map((item) => {
						// console.log(item.height, this.contentHideShowHeight);
						// 获取对应的标号
						const id = item.id
						const idIndex = /blogger__content--(\d)/.exec(id)[1]
						let contentItem = this.content[idIndex]
						contentItem.hideContent = item.height > this.contentHideShowHeight
						contentItem.showAllContent = false
						contentItem.contentContainerHeight = item.height
						contentItem.contentContainerInit = true
						this.$set(this.content, idIndex, contentItem)

						// console.log(/blogger__content--(\d)/.exec(id)[1]);
					})
				})
			},
		
		
			refreshFn() {

			},
			jinruroom(id) {
				// #ifdef APP-PLUS
				this.navigateToFn({
					url: '/minePages/chat/room_text?id=' + id,
					checkLogin: true
				})
				// #endif
				// #ifndef APP-PLUS		
		
				this.navigateToFn({
					url: '/minePages/chat/room_text?id=' + id,
					checkLogin: true
				})
				// #endif				
			},
		


			tabsChange(index) {
				this.currenttiezi = index
				this.tagsid=this.list[index].id
				this.mescroll.resetUpScroll()
			},
		
		}
	}
</script>

<style lang="scss" scoped>
	.template-circle {
		max-height: 100vh;
	}

	.tn-tabbar-height {
		min-height: 120rpx;
		height: calc(140rpx + env(safe-area-inset-bottom) / 2);
	}

	/* 自定义导航栏内容 start */
	.custom-nav {
		height: 100%;
		//	background-image: repeating-linear-gradient(-45deg, #fbf7ac69, #fff20014);
		color: #080808;


		&__back {
			margin: auto 5rpx;
			font-size: 40rpx;
			margin-right: 10rpx;
			margin-left: 30rpx;
			flex-basis: 5%;
		}

		&__search {
			flex-basis: 60%;
			width: 100%;
			height: 100%;

			&__box {
				width: 100%;
				height: 70%;
				padding: 10rpx 0;
				margin: 0 30rpx;
				border-radius: 60rpx 60rpx 0 60rpx;
				font-size: 24rpx;
			}

			&__icon {
				padding-right: 10rpx;
				margin-left: 20rpx;
				font-size: 30rpx;
			}

			&__text {
				color: #AAAAAA;
			}
		}
	}

	.logo-image {
		width: 60rpx;
		height: 60rpx;
		position: relative;
		margin-top: -15rpx;
	}

	.logo-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 50%;
	}

	/* 自定义导航栏内容 end */
	/* 博主头像 start*/
	.image-circle {
		// padding: 95rpx;
		width: 190rpx;
		height: 190rpx;
		font-size: 40rpx;
		font-weight: 300;
		position: relative;
	}

	.image-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 10rpx;
	}


	/* 文章内容 start*/
	.blogger {
		&__item {
			padding: 30rpx;
		}

		&__author {
			&__btn {
				margin-right: -12rpx;
				opacity: 0.5;
			}
		}

		&__desc {
			line-height: 55rpx;

			&__label {
				padding: 0 20rpx;
				margin: 0rpx 18rpx 0 0;

				&--prefix {
					color: #00FFC8;
					padding-right: 10rpx;
				}
			}

			&__content {}
		}

		&__content {
			margin-top: 18rpx;
			padding-right: 18rpx;

			&__data {
				line-height: 46rpx;
				text-align: justify;
				overflow: hidden;
				transition: all 0.25s ease-in-out;

			}

			&__status {
				margin-top: 10rpx;
				font-size: 26rpx;
				color: #82B2FF;
			}
		}

		&__main-image {
			border-radius: 16rpx;

			&--1 {
				max-width: 80%;
				max-height: 300rpx;
			}

			&--2 {
				max-width: 260rpx;
				max-height: 260rpx;
			}

			&--3 {
				height: 212rpx;
				width: 100%;
			}
		}

		&__count-icon {
			font-size: 40rpx;
			padding-right: 5rpx;
		}

		&__ad {
			width: 100%;
			height: 500rpx;
			transform: translate3d(0px, 0px, 0px) !important;

			::v-deep .uni-swiper-slide-frame {
				transform: translate3d(0px, 0px, 0px) !important;
			}

			.uni-swiper-slide-frame {
				transform: translate3d(0px, 0px, 0px) !important;
			}

			&__item {
				position: absolute;
				width: 100%;
				height: 100%;
				transform-origin: left center;
				transform: translate3d(100%, 0px, 0px) scale(1) !important;
				transition: transform 0.25s ease-in-out;
				z-index: 1;

				&--0 {
					transform: translate3d(0%, 0px, 0px) scale(1) !important;
					z-index: 4;
				}

				&--1 {
					transform: translate3d(13%, 0px, 0px) scale(0.9) !important;
					z-index: 3;
				}

				&--2 {
					transform: translate3d(26%, 0px, 0px) scale(0.8) !important;
					z-index: 2;
				}
			}

			&__content {
				border-radius: 40rpx;
				width: 640rpx;
				height: 500rpx;
				overflow: hidden;
			}

			&__image {
				width: 100%;
				height: 100%;
			}
		}
	}

	/* 文章内容 end*/

	/* 间隔线 start*/
	.tn-strip-bottom {
		width: 100%;
		border-bottom: 20rpx solid rgba(241, 241, 241, 0.8);
	}

	/* 间隔线 end*/

	/* 广告内容 start */
	.ad-image {
		width: 80rpx;
		height: 80rpx;
		position: relative;
	}

	.ad-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 20%;
	}

	/* 自定义导航栏内容 end */


	/* 全屏轮播  start*/

	/* 轮播视觉差 start */
	.card-swiper {
		height: 200rpx !important;
	}

	.card-swiper swiper-item {

		width: 750rpx !important;
		left: 0rpx;
		box-sizing: border-box;
		// padding: 0rpx 30rpx 90rpx 30rpx;
		overflow: initial;
	}

	.card-swiper swiper-item .swiper-item {
		width: 100%;
		display: block;
		height: 100%;
		transform: scale(1);
		transition: all 0.2s ease-in 0s;
		overflow: hidden;
	}

	.card-swiper swiper-item.cur .swiper-item {
		transform: none;
		transition: all 0.2s ease-in 0s;
	}

	.card-swiper swiper-item .swiper-item-text {
		margin-top: -260rpx;
		text-align: center;
		width: 100%;
		display: block;
		height: 50%;
		border-radius: 10rpx;
		transform: translate(100rpx, -60rpx) scale(0.9, 0.9);
		transition: all 0.6s ease 0s;
		overflow: hidden;
	}

	.card-swiper swiper-item.cur .swiper-item-text {
		margin-top: -320rpx;
		width: 100%;
		transform: translate(0rpx, 0rpx) scale(0.9, 0.9);
		transition: all 0.6s ease 0s;
	}

	.image-banner {
		border-radius: 10px !important;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.image-banner image {
		width: 100%;
		height: 100%;
	}

	/* 轮播指示点 start*/
	.indication {
		z-index: 9999;
		width: 100%;
		height: 36rpx;
		position: absolute;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.spot {
		background-color: #FFFFFF;
		opacity: 0.6;
		width: 10rpx;
		height: 10rpx;
		border-radius: 20rpx;
		top: -60rpx;
		margin: 0 8rpx !important;
		position: relative;
	}

	.spot.active {
		opacity: 1;
		width: 30rpx;
		background-color: #FFFFFF;
	}


	/* 资讯主图 start*/
	.image-article {
		border-radius: 8rpx;
		border: 1rpx solid #F8F7F8;
		width: 200rpx;
		height: 200rpx;
		position: relative;
	}

	.image-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 10rpx;
	}

	.article-shadow {
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	/* 文字截取*/
	.clamp-text-1 {
		-webkit-line-clamp: 1;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.clamp-text-2 {
		-webkit-line-clamp: 2;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	/* 标签内容 start*/
	.tn-tag-content {
		&__item {
			display: inline-block;
			line-height: 35rpx;
			padding: 5rpx 25rpx;

			&--prefix {
				padding-right: 10rpx;
			}
		}
	}



	/* 悬浮 */
	.tnxuanfu {
		animation: suspension 3s ease-in-out infinite;
	}

	@keyframes suspension {

		0%,
		100% {
			transform: translateY(0);
		}

		50% {
			transform: translateY(-0.8rem);
		}
	}

	/* 悬浮按钮 */
	.button-shop {
		width: 90rpx;
		height: 90rpx;
		display: flex;
		flex-direction: row;
		position: fixed;
		/* bottom:200rpx;
      right: 20rpx; */
		left: 5rpx;
		top: 5rpx;
		z-index: 1001;
		border-radius: 100px;
		opacity: 0.9;
	}


	/* 按钮 */
	.edit {
		bottom: 300rpx;
		right: 75rpx;
		position: fixed;
		z-index: 9999;
	}


	.pa,
	.pa0 {
		position: absolute
	}

	.pa0 {
		left: 0;
		top: 0
	}


	.bg0 {
		width: 100rpx;
		height: 100rpx;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.bg1 {
		width: 100%;
		height: 100%;
	}




	.hx-box {
		top: 50%;
		left: 50%;
		width: 100rpx;
		height: 100rpx;
		transform-style: preserve-3d;
		transform: translate(-50%, -50%) rotateY(75deg) rotateZ(10deg);
	}

	.hx-box .pr {
		width: 100rpx;
		height: 100rpx;
		transform-style: preserve-3d;
		animation: hxz 20s linear infinite;
	}

	@keyframes hxz {
		0% {
			transform: rotateX(0deg);
		}

		100% {
			transform: rotateX(-360deg);
		}
	}



	.hx-box .pr .pa0 {
		width: 100rpx;
		height: 100rpx;
		/* border: 4px solid #5ec0ff; */
		border-radius: 1000px;
	}

	.hx-box .pr .pa0 .span {
		display: block;
		width: 100%;
		height: 100%;
		background: url(https://tnuiimage.tnkjapp.com/cool_bg_image/arc4.png) no-repeat center center;
		background-size: 100% 100%;
		animation: hx 4s linear infinite;
	}

	@keyframes hx {
		to {
			transform: rotate(360deg);
		}
	}

	.hx-k1 {
		transform: rotateX(-60deg) rotateZ(-60deg)
	}

	.hx-k2 {
		transform: rotateX(-30deg) rotateZ(-30deg)
	}

	.hx-k3 {
		transform: rotateX(0deg) rotateZ(0deg)
	}

	.hx-k4 {
		transform: rotateX(30deg) rotateZ(30deg)
	}

	.hx-k5 {
		transform: rotateX(60deg) rotateZ(60deg)
	}

	.hx-k6 {
		transform: rotateX(90deg) rotateZ(90deg)
	}

	.drag-button {
		background: #FFFFFF;
		border: 0.5px solid #EEEEEE;
		box-shadow: 0 5rpx 10rpx 0 rgba(0, 0, 0, 0.08);
		width: 100rpx;
		height: 100rpx;
		font-size: 24rpx;
		color: #000000;
		position: absolute;
		right: 40rpx;
		bottom: 188rpx;
		border-radius: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.image-music {
		padding: 100rpx 0rpx;
		font-size: 16rpx;
		font-weight: 300;
		position: relative;
	}

	.image-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 20rpx 20rpx 0 0;
	}

	/* 文章内容 end*/



	/* 信息展示 start */
	.tn-info {

		&__container {
			margin-top: 40rpx;
		}

		&__item {
			width: 32%;
			margin: 15rpx 0rpx;
			padding: 38rpx 20rpx;
			border-radius: 10rpx;

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
						background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg3.png);
					}
				}

				&__content {
					font-size: 28rpx;

					&--data {
						margin-top: 5rpx;
						font-weight: bold;
					}
				}
			}

			&__right {
				&--icon {
					font-size: 30rpx;
					opacity: 0.5;
				}
			}
		}
	}

	.job-shadow {
		box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.07);
		border-radius: 20rpx;
	}

	/* 信息展示 end */


	//一排3个横的

	.dk-fangkuang {
		position: relative;
		background-blend-mode: multiply;
		background-repeat: no-repeat;
		//background-image: url(https://uptx-cdn2.q0n5k964.com/upload/images/base_web_per/lol_257154660915053_pc_rec_01.png);
	}



	.dk-ban {
		border: 0.0625rem solid rgba(255, 255, 255, 0.1);
		border-radius: 0.3125rem;
		background: rgb(29, 33, 43);
		color: rgba(255, 255, 255, 0.8);
	}

	.dk-bantext {
		color: rgba(255, 255, 255, 0.6);
		background: rgba(216, 216, 216, 0.08);
		border-right: 0.0625rem solid rgba(255, 255, 255, 0.1);
		min-width: 7.3rem;
		height: 2rem;
		line-height: 2rem;
		text-align: center;
		cursor: pointer;
		padding: 0px 10px;
	}

	.tn-icon-voice {
		animation: msClock 1.2s linear infinite;
	}

	@keyframes msClock {

		0%,
		90%,
		100% {
			transform: rotate(0) scale(1);
		}

		20%,
		40% {
			transform: rotate(-15deg) scale(1.2);
		}

		30%,
		50% {
			transform: rotate(15deg) scale(1.3);
		}
	}


	/* 组件导航列表 start*/
	.nav-list {
	  display: flex;
	  justify-content: space-between;
	  
	  /* 列表元素 start */
	  .nav-list-item {
	    padding: 35rpx 30rpx 5rpx 30rpx;
	    border-radius: 12rpx;
	    width: 50%;
	    margin: 0 18rpx 40rpx;
	    background-size: cover;
	    background-position: center;
	    position: relative;
	    z-index: 99;
	    
	    
	    
	    /* 元素标题 start */
	    .nav-link {	
	      text-transform: capitalize;
	      padding: 0 0 10rpx 0;
	      position: relative;
	      
	      .title {
	        font-weight: bold;	       
	        color: #FFFFFF;
	        margin-top: 30rpx;
	        text-align: center;
	      }
	      .author {	     
	        color: #FFFFFF;
	        margin-top: 50rpx;
	        margin-left: -10rpx;
	        text-align: center;
	      }
	    }
	    /* 元素标题 end */
	    
	    /* 元素图标 start */
	    .icon {
	      font-variant: small-caps;
	      position: absolute;
	      top: 20rpx;
	      right: 50rpx;
	      left: 37%;
	      width: 90rpx;
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
	      border-radius: 5000rpx;
	    }
	    /* 元素图标 end */
	  }
	  /* 列表元素 end */
	}
	/* 组件导航列表 end*/
	/* 热门图片 start*/
	.image-tuniao1 {
		padding: 164rpx 0rpx;
		font-size: 40rpx;
		font-weight: 300;
		position: relative;
	}

	.image-tuniao2 {
		padding: 75rpx 0rpx;
		font-size: 40rpx;
		font-weight: 300;
		position: relative;
	}

	.image-tuniao3 {
		padding: 90rpx 0rpx;
		font-size: 40rpx;
		font-weight: 300;
		position: relative;
	}

	.image-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 10rpx;
	}
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
	          
	      }
	    }
	  }
	}
	
	/* 图标容器7 start */
	.icon7 {
	  &__item {
	    width: 30%;
	    background-color: #FFFFFF;
	    border-radius: 10rpx;
	    padding: 10rpx;
	    margin: 20rpx 10rpx;
	    transform: scale(1);
	    transition: transform 0.3s linear;
	    transform-origin: center center;
	    
	    &--icon {
	      width: 120rpx;
	      height: 120rpx;
	      font-size: 50rpx;
	      border-radius: 0;
	      margin-bottom: -10rpx;
	      position: relative;
	      z-index: 1;
	    }
	  }
	}    
	.wuge{
	width: 20%;	
	}
	.sige{
	width: 25%;	
	}
</style>
