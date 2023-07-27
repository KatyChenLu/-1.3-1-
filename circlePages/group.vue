<template>
	<view class="template-group tn-safe-area-inset-bottom">
	<tn-nav-bar fixed alpha :isBack="true" >
		圈子详情		
	</tn-nav-bar>

		<swiper class="card-swiper" :class="[`tn-cool-bg-color-${body.bg}`]" :circular="true" :autoplay="true"
			duration="500" interval="28000" @change="cardSwiper">
			<swiper-item v-for="(item,indexflash) in swiperList" :key="indexflash">
				<view class="swiper-item image-banner">
					<image :src="item" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 头部start-->
		<view class="shop-function tn-margin-bottom-xl" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin">
				<view class="justify-content-item">
					<view class="tn-flex tn-flex-col-center tn-flex-row-left">
						<view class="logo-pic tn-shadow-blur" :style='"background-image:url("+body.image+")"'>
							<view class="logo-image">
							</view>
						</view>
						<view class="tn-color-white" style="width: 50vw;">
							<view class="tn-padding-right tn-padding-left-sm tn-text-xl tn-text-bold">
								{{body.title}}
							</view>							
						</view>
					</view>
				</view>
				<view class="justify-content-item tn-flex-row-center"
					@click="navigateToFn({ url: '/circlePages/group_fans?id='+id, checkLogin: false })">

					<view class="tn-padding-xs tn-color-white tn-round tn-shadow-blur">
						<text>{{body.follow_num}}人关注</text>
						<text class="tn-icon-right-double tn-padding-xs"></text>
					</view>
				</view>
				
			</view>
			<view
				class="tn-padding-right tn-padding-top-xs  tn-padding-left-sm tn-text-sm tn-color-white">
				<text> {{body.title_sub}}</text>
			</view>
		</view>


		<view class="group-wrap tn-bg-white" id="page_tips">
			<mescroll-body ref="mescrollRef" @down="downCallback" @up="upCallback">
			
				<view class="" style="padding: 10px 5px;" v-if="body.news">
					<tn-notice-bar :show="true" :list="body.news" backgroundColor="#EFEFEF"></tn-notice-bar>
				</view>
				<view class="tn-flex tn-flex-row-between" style="padding: 10rpx 0 10rpx 0;">
					
					
					<view class="tn-flex-1 justify-content-item tn-margin-xs tn-text-center" @click="flow()">


						<tn-button backgroundColor="#cfcfcf" padding="40rpx 0" width="90%" shadow fontBold
							v-if="body.is_follow">
							<text class="tn-icon-close tn-padding-right-xs tn-color-black"></text>
							<text class="tn-color-black">取消关注</text>
						</tn-button>
						<tn-button backgroundColor="#00FFC6" padding="40rpx 0" width="90%" shadow fontBold v-else>
							<text class="tn-icon-add tn-padding-right-xs tn-color-black"></text>
							<text class="tn-color-black">关 注</text>
						</tn-button>


					</view>
					<!-- #ifdef APP-PLUS||H5 -->
					<view class="tn-flex-1 justify-content-item tn-margin-xs tn-text-center" @click="appshare()">
						<tn-button backgroundColor="#FFF00D" padding="40rpx 0" width="90%" shadow fontBold>
							<text class="tn-icon-share-triangle tn-padding-right-xs tn-color-black"></text>
							<text class="tn-color-black">分 享</text>
						</tn-button>
					</view>
					<!-- #endif -->
					<!-- #ifdef MP -->
					<view class="tn-flex-1 justify-content-item tn-margin-xs tn-text-center">
						<tn-button backgroundColor="#FFF00D" padding="40rpx 0" width="90%" shadow fontBold
							open-type="share">
							<text class="tn-icon-share-triangle tn-padding-right-xs tn-color-black"></text>
							<text class="tn-color-black">分 享</text>
						</tn-button>
					</view>
					<!-- #endif -->
				</view>

				<view class="">
						<view v-if="body.price>0&&body.is_buy==0">
							<tn-button width="100%" height="100rpx" margin="10rpx 0">
								付费圈子，您需要支付
								<text class="tn-color-red">{{body.price}}</text>
								{{configInfo.site_moneyname}}
							</tn-button>
							<view class="dk-center" style="margin-bottom: 50px;" @click="goumai()">
								<tn-button backgroundColor="tn-bg-yellow" fontColor="#000000" margin="10rpx 10rpx">
									购买
								</tn-button>
							</view>
						</view>

					<view v-else>
					<quan-list :list="content" :index="true" :cate_id="0"></quan-list>
					</view>
					
					
					
					
					
					

				</view>
			</mescroll-body>
		</view>
		<!-- 登录框组件 -->
		<login-fn :is-show-login="loginBoxFlag" @loginSuccessCallback="refreshFn" @close="closeGlobalLoginFn">
		</login-fn>



		<view class="tn-fab-class tn-fab"
			@click="navigateToFn({ url: '/circlePages/edit?id='+body.id+'&title='+body.title, checkLogin: true })">
			<view class="tn-fab__box tn-fab--right" style="left: auto; right: 20px; bottom: 100px; z-index: 19060;">
				<view data-v-710e8188="" class="tn-fab__item__btn tn-fab__item__btn--fab tn-cool-bg-color-1"
					style="width: 44px; height: 44px; border-radius: 50%; z-index: 19059;">
					<view class="tn-fab__item__btn__icon tn-icon-edit-form" style="font-size: 20px;">
					<view style="font-size: 12px;">	
					 发布
					 </view>
					</view>
				</view>
			</view>
		</view>


		<uni-popup ref="sharepopup" type="bottom">
			<share-btn :sharedataTemp="sharedata" @jubaolist="jubaoshowchick" @haobaoche="share_qrcode"></share-btn>
		</uni-popup>
		
			<tn-modal width="80%" v-model="jubaoshow" backgroundColor="#E4E9EC" padding="30rpx 20rpx" :radius="25"
				title="举报" :showCloseBtn="false"  :maskCloseable="true" :zoom="true" :custom="true">
		
				<view class="custom-modal-content tn-padding-sm ">
					<view class="tn-text-left tn-color-gray" style="font-size: 14px;">
						为帮助审核人员更快速度处理，请补充违规内容等详细信息
					</view>
					<view class=" tn-border-solid ">
						<textarea maxlength="200" placeholder="请填写举报理由" v-model="jubao_body"
							placeholder-style="color:#7e7e7e" style="width:230px;font-size: 14px;"></textarea>
					</view>
					<view class="tn-text-center tn-padding-top" @click="jubaopass()">
		
						<tn-button :fontSize="28" padding="20rpx" height="56rpx" backgroundColor="tn-cool-bg-color-7"
							fontColor="tn-color-white">提交投诉</tn-button>
					</view>
		
				</view>
			</tn-modal>		
		
		
			<tn-modal width="80%" v-model="show_poster" backgroundColor="#E4E9EC" padding="30rpx 20rpx" :radius="25"
				title="举报" :showCloseBtn="false" :button="button" :maskCloseable="true" :zoom="true" :custom="true">
		
		<image :src="path" mode="widthFix" @click="previewImg" style="width: 100%;" v-if="path"></image>
		<lPainter :board="posterObj" ref="painter" v-else></lPainter>
		<view class="tn-text-center tn-padding-top" >			
				<text >点击图片保存到手机</text>
				
		</view>
		</tn-modal>
		

	</view>
</template>

<script>
		import lPainter from '@/components/lime-painter/'
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	import MescrollBody from '@/components/mescroll-uni/mescroll-body.vue';
	import MescrollUni from '@/components/mescroll-uni/mescroll-uni.vue';
	import MescrollMixin from '@/components/mescroll-uni/mescroll-mixins.js';
	export default {
		name: 'TemplateGroup',
		mixins: [template_page_mixin, MescrollMixin],
		components: {
			MescrollBody,lPainter
		},
		data() {
			return {
	jubao_body: '',
				jubaoshow: false,
				loginBoxFlag: false, // 登录框显示隐藏状态
				id: 1294,
				body: {
					"title": '',
					"title_sub": '',
					"follow_num": 0,
				},
				show1: false,
				cardCur: 0,
				swiperList: [],
				content: [],
				activeBgAnimation: {},
					sharedata: [],
					show_poster:false,//显示海报
					path: '', //生成的图片地址					
					posterObj: {
						width: '580rpx',
						height: '928rpx',
						background: '#fff',
						borderRadius: '16rpx',
						views: []
					}, //画板数据
					isUp:false,
					button: [{
							text: '取消',
							backgroundColor: '#c1c1c1',
							fontColor: '#000000'
						},
						{
							text: '立即充值',
							backgroundColor: '#ffff00',
							fontColor: '#000000'
						}
					],
			}
		},
	onShareAppMessage(res) {
		    if (res.from === 'button') {// 来自页面内分享按钮
		        console.log(res.target)
		    }
		    return {
		        title: this.body.title, //分享的名称
		        path: '/circlePages/group?id='+this.id+'&daren_id='+uni.getStorageSync('user_id'),
				imageUrl:this.body.share_img				
		    }
		},
		//分享到朋友圈
		onShareTimeline(res) {
		    return {
		    title: this.body.title, //分享的名称
		    path: '/circlePages/group?id='+this.id+'&daren_id='+uni.getStorageSync('user_id'),
		    imageUrl:this.body.share_img				
		    }
		},
		onLoad(option) {
			let that = this
			if (option.daren_id){
			uni.setStorageSync('daren_id',option.daren_id)
			}
			uni.$off('setLoginBoxFlag');
			uni.$on('setLoginBoxFlag', loginBoxFlag => {
				that.loginBoxFlag = loginBoxFlag;
			});
		

			if (option.id) {
				this.id = option.id
			}

			uni.$on('fabu_ok', data => {
				that.content = []
				that.mescroll.resetUpScroll();
			});


			this.info()

		},







		methods: {

			fabu() {
				this.navigateToFn({
					url: '/circlePages/edit?id=' + this.body.id + '&title=' + this.body.title,
					checkLogin: true
				})
			},

			async ondianzan(data) {
				for (let i in this.content) {
					if (this.content[i].id == data.id) {

						console.log(data.msg)

						if (data.msg == '点赞成功') {
							this.content[i].is_like = true
							this.content[i].likeCount++
							const xinzeng = {
								src: this.$store.state.userInfo.userInfoAvatar
							}
							this.content[i].viewUser.latestUserAvatar.push(xinzeng)
						} else {
							this.content[i].is_like = false;
							this.content[i].likeCount--;
							let listuser = this.content[i].viewUser.latestUserAvatar;
							for (let ddd in listuser) {
								if (listuser[ddd].src == this.$store.state
									.userInfo.userInfoAvatar) {
									listuser.splice(ddd, 1);
								}
							}
						}
					}
				}
			},

			async info() {
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/Category/GetCategory',
					data: {
						id: this.id
					}
				});


				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						that.body = result.data.data;
						that.swiperList = result.data.data.banner;

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
			refreshFn() {
				this.info()
			},
			/// 列表调用
			downCallback(mescroll) {
				mescroll.endSuccess();
				mescroll.resetUpScroll();
			},
			async upCallback(mescroll) {
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/index/getGoodslist',
					data: {
						cate_id: that.id,
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



			async flow() {


				if (!this.isLogin) {
					this.loginBoxFlag = true
					return false;
				}


				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/user/followgroup',
					data: {
						id: that.id
					}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						if (result.data.msg == '取消成功') {
							that.body.is_follow = false
						} else {
							that.body.is_follow = true
						}
						uni.showToast({
							icon: 'none',
							title: result.data.msg
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
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},

			// 弹出模态框
			showModal(event) {
				this.openModal()
			},
			// 打开模态框
			openModal() {
				this.show1 = true
			},
			// 初始化导航栏信息
			async initNavBarRectInfo() {
				const navBarRectInfo = await this._tGetRect('#navbar')
				const pageTipsRectInfo = await this._tGetRect('#page_tips')
				// console.log(navBarRectInfo, pageTipsRectInfo, navBarRectInfo?.top, pageTipsRectInfo?.top);
				if (!navBarRectInfo.hasOwnProperty('top') || !pageTipsRectInfo.hasOwnProperty('top')) {
					setTimeout(() => {
						this.initNavBarRectInfo()
					}, 10)
					return
				}
				this.navBarRectInfo = {
					top: navBarRectInfo.top
				}
				this.navBarChangebaseLineHeight = pageTipsRectInfo.top - navBarRectInfo.top
			},
			// 更新导航栏信息
			updateNavBarRectInfo() {
				this._tGetRect('#page_tips').then((res) => {
					const top = res?.top || 0
					if (!top) {
						return
					}
					const differHeight = top - this.navBarRectInfo.top
					const opacity = differHeight / this.navBarChangebaseLineHeight
					if (opacity < 0) {
						// this.navBarStyle.opacity = 1
						// this.navBarStyle.display = 'flex'
						this.navBarStyle.color = 'rgba(0, 0, 0, ${opacity})'
						this.navBarStyle2.color = 'rgba(0, 0, 0, ${opacity})'
						this.navBarBackgroundColor = `rgba(255, 255, 255, 1)`
					} else {
						// this.navBarStyle.opacity = 1 - opacity
						// this.navBarStyle.display = 'flex'
						this.navBarStyle.color = 'rgba(255, 255, 255, 1)'
						this.navBarStyle2.color = 'rgba(255, 255, 255, 0)'
						this.navBarBackgroundColor = `rgba(255, 255, 255, ${1 - opacity})`
					}

					// console.log(top, differHeight, opacity);
				})
			},
			previewQRCodeImage() {
				wx.previewImage({
					urls: [this.body.image]
				})
			},
			
			async goumai() {
				let that = this;
				if (!this.isLogin) {
					this.loginBoxFlag = true
					return false;
				}
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/user/buy_cate',
					data: {
						id: that.id
					}
				});
			
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
			
						if (result.data.msg == '余额不足') {
							that.chongzhiis = true
						}
			
						this.msg(result.data.msg)
						this.info()
			
			
					}
				}
			},
			
			appshare() {
			
				let sharedata = {
					type: 1,
					strShareUrl: this.body.share_url,
					strShareTitle: this.body.share_title,
					strShareSummary: this.body.share_sub,
					strShareImageUrl: this.body.share_img,
				}
				this.sharedata = sharedata
				this.$refs.sharepopup.open();
			
			},
			handleClick () {
				      this.isUp = !this.isUp
				    },
				
				
				sharelist(){
				
					this.posterObj.views=[					
							{
							type: 'image',
							src: this.body.image,
							css: {
								left: '32rpx',
								top: '32rpx',
								borderRadius: '50%',
								width: '80rpx',
								height: '80rpx'
							}
						},
						{
							type: 'text',
							text: this.body.title,
							css: {
								fontSize: '28rpx',
								fontWeight: 'bold',
								color: '#1A2033',
								lineHeight: '28rpx',
								left: '136rpx',
								top: '39rpx'
							}
						},
						{
							type: 'text',
							text:  this.body.share_title,
							css: {
								fontSize: '24rpx',
								color: '#4070FF',
								lineHeight: '24rpx',
								left: '136rpx',
								top: '80rpx'
							}
						},
						
						{
							type: 'qrcode',
							text: this.body.share_url,
							css: {
								left: '190rpx',
								top: '120rpx',
								width: '200rpx',
								height: '200rpx',
							}
						},
						{
							type: 'text',
							text: '————  长按二维码 快来看看吧  ————',
							css: {
								left: '0',
								top: '340rpx',
								width: '100%',
								textAlign: 'center',
								fontSize: '24rpx',
								color: '#000000',
								lineHeight: '33rpx'
							}
						},
						{
							type: 'image',
							src: this.body.share_img,
							css: {
								left: '32rpx',
								top: '384rpx',					
								width: '90%',							
								borderRadius: '16rpx'
							}
						},
						]
				},
				
				
				
				
				previewImg(){
					
					uni.previewImage({
						current:this.path,
						urls: [this.path]
					});
				},
				toSave() {			
					uni.showLoading({
						title:'海报生成中',
					})
					const painter = this.$refs.painter;
					painter.canvasToTempFilePath().then(res => {
						this.path = res.tempFilePath;	
									setTimeout(() => {
									uni.hideLoading()
									}, 1000);
					
					});
				},
			share_qrcode() {	
			
				this.sharelist()
				this.show_poster=true
				this.$refs.sharepopup.close();	
					if (!this.path){	
					setTimeout(() => {
					this.toSave()
					}, 500);
					}
				
			},
			
				async jubaopass() {
					let that = this;
					if (!this.isLogin) {
						this.loginBoxFlag = true
						return false;
					}
					
					if (that.jubao_body==''){
						this.msg('请输入举报理由')
						return
					}	
					
					let result = await that.$request({
						loading: 0,
						method: 'post',
						url: '/api/user/addReport',
						data: {
							goods_id: that.id,
							type:0,
							content:that.jubao_body
						}
					});
			
					if (result.statusCode == 200) {
						if (result.data.code == 200) {
							that.jubao_body=''
							this.msg(result.data.msg)
							this.jubaoshow=false
						}
					}
				},
			
				jubaoshowchick() {
					console.log(33333333)
					this.jubaoshow = true
					this.$refs.sharepopup.close();
				},
		}
	}
</script>

<style lang="scss" scoped>
	/* 胶囊*/
	.tn-custom-nav-bar__back {
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		box-sizing: border-box;
		background-color: rgba(0, 0, 0, 0.03);
		border-radius: 1000rpx;
		border: 1rpx solid rgba(255, 255, 255, 0.5);
		// color: #FFFFFF;
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
			opacity: 0.05;
			background-color: #000000;
		}
	}


	/* 轮播视觉差 start */
	.card-swiper {
		height: 500rpx !important;
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

	.image-banner {
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
		opacity: 0;
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

	/* 顶部店铺 */
	.shop-function {
		position: relative;
		z-index: 1;
		margin-top: -450rpx;
		padding-bottom: 110rpx;
		background-image: linear-gradient(rgba(255, 255, 255, 0.01), rgba(0, 0, 0, 0.4));
	}

	/* 阴影 start*/
	.group-shadow {
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	/* 头像 start */
	.logo-image {
		width: 110rpx;
		height: 110rpx;
		position: relative;
	}

	.logo-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
		border-radius: 10px;
		overflow: hidden;
		// background-color: #FFFFFF;
	}

	/* 内容*/
	.group-wrap {
		position: relative;
		z-index: 1;
		// padding: 20rpx 30rpx;
		margin-top: -130rpx;
		margin-bottom: 40rpx;
		border-radius: 30rpx 30rpx 0 0;
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
		left: 5rpx;
		top: 5rpx;
		z-index: 1001;
		border-radius: 100px;
		opacity: 0.9;
	}


	/* 按钮 */
	.edit {
		bottom: 300rpx;
		right: 125rpx;
		position: fixed;
		z-index: 9999;
	}


	.bg1 {
		margin-top: 8px;
		font-size: 30px;
		color: #ffffff;
		width: 100%;
		height: 100%;
	}

	.tn-fab {
		&__box {
			display: flex;
			justify-content: center;
			align-items: flex-start;
			flex-direction: column;
			position: fixed;
			transition: all 0.25s ease-in-out;
		}

		&--right {
			align-items: flex-end;
		}

		&__btns {
			transition: all 0.25s cubic-bezier(0, .13, 0, 1.43);
			transform-origin: 80% bottom;

			&__animation--up {
				opacity: 0;
				transform: translateY(100%);
			}

			&__animation--around {
				position: absolute;
				top: 0;
				left: 0;
			}

			&--visible--up {
				// visibility: visible;
				opacity: 1;
				transform: translateY(0);
			}

			&--visible--around {
				// visibility: visible;
				// opacity: 1;
			}
		}

		&__item {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			padding-bottom: 20rpx;

			&__animation--around {
				position: absolute;
				top: 0;
				left: 0;
				transition: transform 0.25s ease-in-out;
				transform-origin: 50% 50%;
				padding-bottom: 0 !important;
			}

			&--left {
				flex-flow: row-reverse;
			}

			&__text {
				&--left {
					padding-left: 14rpx;
				}

				&--right {
					padding-right: 14rpx;
				}
			}

			&__btn {
				display: flex;
				align-items: center;
				justify-content: center;
				box-shadow: 0 0 5rpx 2rpx rgba(0, 0, 0, 0.07);
				transition: all 0.2s linear;

				&--active {
					animation-name: fab-button-animation;
					animation-duration: 0.2s;
					animation-timing-function: cubic-bezier(0, .13, 0, 1.43);
				}

				&__title {
					width: 90%;
					text-align: center;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}

				&__icon {
					text-align: center;
					font-size: 64rpx;
				}

				&__image {
					display: block;
				}
			}
		}

		&__mask {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: $tn-mask-bg-color;
			transition: all 0.2s ease-in-out;
			opacity: 0;

			&--visible {
				opacity: 1;
			}
		}
	}

	@keyframes fab-button-animation {
		0% {
			transform: scale(0.6);
		}

		// 20% {
		//   transform: scale(1.8);
		// }
		// 40% {
		//   transform: scale(0.4);
		// }
		// 50% {
		//   transform: scale(1.4);
		// }
		// 80% {
		//   transform: scale(0.8);
		// }
		100% {
			transform: scale(1);
		}
	}
</style>
