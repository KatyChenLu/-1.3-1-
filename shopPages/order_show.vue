<template>
	<view class="template-product tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed :bottomShadow="false">订单详情</tn-nav-bar>




		<view class="tn-margin" :style="{paddingTop: vuex_custom_bar_height + 'px'}" v-if="body.type==0">
			<view class="tn-padding-left-sm tn-padding-right-sm ">
				<view class="tn-padding-sm">收件人：{{body.name}} {{body.mobile}}
				</view>
				<view class="tn-padding-sm">详细地址：{{body.address}}
				</view>

			</view>
		</view>

		<view class="tn-margin" :style="{paddingTop: vuex_custom_bar_height + 'px'}" v-if="body.type==2">
			<view class="tn-padding-left-sm tn-padding-right-sm ">
				<view class="tn-padding-sm">虚拟物品发货信息
				</view>
				<view class="tn-padding-sm">{{body.remarks}}
				</view>
					<tn-button :plain="true" height="22px" shape="round" size="sm" @click="fuzhi(body.remarks)">复制</tn-button>	
				
			</view>
		</view>



		<view class="tn-margin" :style="{paddingTop: vuex_custom_bar_height + 'px'}" v-if="body.type==1">
			
		</view>
		<view class="tn-padding-left-sm tn-padding-right-sm tn-padding-bottom-sm " v-if="body.state==2">
		
			<view class="tn-padding-sm">	
	 <view class=" tn-bg-gray--light" style="border-radius: 10rpx;padding: 20rpx 30rpx;">
      	<input placeholder="请商家输入核销密码" v-model="mima"  name="input" placeholder-style="color:#AAAAAA" ></input>
      </view>
			</view>
			<view class="tn-flex tn-flex-row-center tn-margin-top-sm" >
							<view @click="hexiao()"
								style="width: 90%;padding: 8px 10px;height: 35px;background-color:#00aa00;color: #ffffff;"
								class="justify-content-item tn-padding tn-text-center tn-margin-xs tn-radius bg-flex-shadow tn-round tn-shadow-blur">
								商家核销按钮（商家专用）</view>
							
			</view>
		</view>
		
		<view class="tn-padding-left-sm tn-padding-right-sm tn-padding-bottom-sm " v-if="body.state==4&&body.shou_time">
				
					<view class="tn-padding-sm">	
		<view class=" tn-bg-gray--light" style="border-radius: 10rpx;padding: 20rpx 30rpx;">
		 已核销：{{body.shou_time}}
		 </view>
					</view>
					
				</view>
		
		<!-- 边距间隔 -->
		<view class="tn-strip-bottom"></view>

		<view class=" tn-margin-sm">
			<view class="tn-padding-sm tn-text-bold">
			<text style="font-size: 12px;">	
			<tn-button shadow  fontColor="#ffffff" backgroundColor="#00aa00" :fontSize="24" height="auto" padding="20rpx 28rpx">
										{{body.leixing}}
											</tn-button>
											</text>
											<text style="font-size: 12px;tn-margin-left">	
											<tn-button shadow  fontColor="#ffffff" backgroundColor="#00aa00" :fontSize="24" height="auto" padding="20rpx 28rpx" margin="0px 20px">
										{{body.zhuangtai}}
											</tn-button>
											</text>
											<text class="tn-margin-left">商品信息</text>
			</view>
			<view class="tn-flex">
				<view class="image-pic tn-margin-sm" :style="'background-image:url(' + body.goodsimage + ')'">
					<view class="image-article">
					</view>
				</view>
				<view class="tn-margin-sm tn-padding-top-xs" style="width: 100%;">
					<view class="   clamp-text-2" style="height: 40px;">
						{{body.goods_name}}
					</view>
					<view class="tn-flex tn-flex-row-between tn-flex-col-between" style="margin-top: 10px;">
						<text
							class="tn-tag-content__item--prefix tn-color-red tn-text-bold">￥{{body.goods_price}}</text>
						<text class="tn-tag-content__item--prefix  tn-text-bold tn-margin-right">x{{body.num}}</text>
					</view>

				</view>
			</view>
			<view class="tn-padding-left tn-padding-top tn-padding-right-sm ">
				<view class="tn-flex tn-flex-row-between tn-flex-col-between">
					<text class="tn-tag-content__item--prefix  ">
						总支付</text>
					<text class="tn-tag-content__item--prefix tn-color-red  tn-margin-right">
						￥{{body.total_price}}</text>
				</view>
			</view>
		
		
			<view class="tn-padding-left  tn-padding-top tn-padding-right-sm ">
				<view class="tn-flex tn-flex-row-between tn-flex-col-between">
					<text class="tn-tag-content__item--prefix  ">
						备注</text>
					<text class="tn-tag-content__item--prefix   tn-margin-right">
						{{body.remark}}</text>
				</view>
			</view>
			<view class="tn-padding-left  tn-padding-top tn-padding-right-sm ">
				<view class="tn-flex tn-flex-row-between tn-flex-col-between">
					<text class="tn-tag-content__item--prefix  ">
						订单编号</text>
					<text class="tn-tag-content__item--prefix   tn-margin-right">
						{{body.id}}</text>
				</view>
			</view>

		

			<view class="tn-padding-left  tn-padding-top tn-padding-right-sm ">
				<view class="tn-flex tn-flex-row-between tn-flex-col-between">
					<text class="tn-tag-content__item--prefix  ">
						支付类型</text>
					<text class="tn-tag-content__item--prefix   tn-margin-right" v-if="body.pay_type=='wxpay'">
						微信支付</text>
						<text class="tn-tag-content__item--prefix   tn-margin-right" v-if="body.pay_type=='alipay'">
						支付宝支付</text>
				</view>
			</view>

		



	
			<view class="tn-padding-left  tn-padding-top tn-padding-right-sm " v-if="body.kuaidi_name">
				<view class="tn-flex tn-flex-row-between tn-flex-col-between">
					<text class="tn-tag-content__item--prefix  ">						
						配送公司：{{body.kuaidi_name}}</text>
						
				</view>
			</view>


			<view class="tn-padding-left  tn-padding-top tn-padding-right-sm " v-if="body.kuaidi_no">
				<view class="tn-flex tn-flex-row-between tn-flex-col-between">
					<text class="tn-tag-content__item--prefix  ">
						配送单号：{{body.kuaidi_no}}
					</text> 
					<!-- <text class="tn-tag-content__item--prefix text  tn-margin-right tn-color-blue" @click="kuaid('https://m.kuaidi100.com/result.jsp?nu='+body.kuaidi_no)">
						查看快递</text> -->
						<tn-button :plain="true" height="22px" shape="round" size="sm" @click="fuzhi(body.kuaidi_no)">复制</tn-button>									
				</view>
			</view>




		</view>

		<view class="time-line__wrap">
			<!-- 边距间隔 -->
			<tn-time-line>
				
				<tn-time-line-item v-if="body.pay_time">
					<template slot="content">
						<view>
							<view class="time-line-item__content__title">付款时间</view>
							<view class="time-line-item__content__desc">{{body.pay_time}}</view>
						</view>
			 	</template>
				</tn-time-line-item>
			
				<tn-time-line-item v-if="body.kuaidi_time">
					<template slot="content">
						<view>
							<view class="time-line-item__content__title">发货时间</view>
							<view class="time-line-item__content__desc">{{body.kuaidi_time}}</view>
						</view>
					</template>
				</tn-time-line-item>
				<tn-time-line-item v-if="body.shou_time">
					<template slot="content">
						<view>
							<view class="time-line-item__content__title">完成时间</view>
							<view class="time-line-item__content__desc">{{body.shou_time}}</view>
						</view>
					</template>
				</tn-time-line-item>
			</tn-time-line>
		</view>

		<view class='tn-tabbar-height'></view>


		<view class="footerfixed dd-glass tn-padding-left-sm tn-padding-right tn-padding-top-xs tn-padding-bottom-sm">
			<view class="tn-goods-nav-class tn-goods-nav tn-safe-area-inset-bottom" style="z-index: 20089;">
			
				
				<view class="buttons"  v-if="body.state==3" @click="shouhuo()">
					<view class="buttons__item  buttons__item--round"
						style="background-color:#00aa00; color: rgb(255, 255, 255);">
						<view data-v-4d4efb9c="" class="buttons__item__text">确认收货</view>
					</view>
				</view>

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
				mima:'',
				id: 1010,
				body: [],
				//图片上传参数
				action: '',
				formData: {
					apiType: 'this,ali',
					token: uni.getStorageSync('token'),
					image: null
				},
				fileList: [],
				okpiclist: '', //上传完毕的图片字符逗号隔开
				showUploadList: true,
				customBtn: false,
				autoUpload: true,
				showProgress: true,
				deleteable: true,
				customStyle: false,
				maxCount: 1,
				disabled: false,

			}
		},
		onLoad(option) {
			if (option.id) {
				this.id = option.id
			}
			this.action = host + '/api/user/up_img'
			this.info()
		},
		
		onPullDownRefresh() {
			this.info()
			uni.stopPullDownRefresh()
		},
		methods: {

			onUploaded(list) {
				if (list.length > 0) {
					let imageList = list.map(i => i.response.data.file).join(',');
					this.tijiaojietu(imageList)
				}
			},

			async hexiao() {
				let that = this;
				if (this.mima==''){
				this.msg('请输入核销密码')
				return
				}
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/shop/hexiao',
					data: {
						id: this.id,
						mima: this.mima
					}
				});
				if (result.data.code == 200) {
					this.info()				
				uni.showModal({
					title: '温馨提示',
					content:'核销成功，请为顾客服务哟！',			
					success: function(res) {
						if (res.confirm) {				
					
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				}); 									
				
				}
				else{
						this.msg(result.data.data)
				}
			},
			onSortList() {
			},
			delimg(list) {
				this.tijiaojietu('')
			},

			async info() {
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/shop/order_detail',
					data: {
						id: this.id
					}
				});
				if (result.data.code == 200) {
					this.body = result.data.data

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
			// tab选项卡切换
			tabChange(index) {
				this.current = index
			},
			getRandomCoolBg() {
				return this.$t.colorUtils.getRandomCoolBgClass()
			},
			kantu() {

			},

			onButtonClick(e) {
				if (e.index == 1) {
					this.tanchushow = true
				}
			},

			closedPopup() {
				this.tanchushow = false
			},
			jiesuan() {
				this.$topage('/pages/order/show?id=' + id)
			},
			
			kuaid(url) {
				uni.navigateTo({
					url:'/pages/url?url='+url
				})
			},
			
			async shouhuo() {
				let that = this;				
				
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/shop/upstate',
					data: {
						id: this.id,
						state:4
					}
				});
				if (result.data.code == 200) {
					this.info()
					this.msg('确认成功')	
				}
			
			},
			
			

			fuzhi(neirong) {

				uni.setClipboardData({
					data: neirong,
					complete() {
						uni.showToast({
							title: "已复制到剪贴板"
						})
					}
				})

			}
		}
	}
</script>

<style lang="scss" scoped>
	.template-product {}

	.tn-tabbar-height {
		min-height: 120rpx;
		height: calc(140rpx + env(safe-area-inset-bottom) / 2);
	}

	/* 用户头像 start */
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
		border-radius: 10rpx;
		overflow: hidden;
		// background-color: #FFFFFF;
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

	/* 轮播视觉差 start */
	.card-swiper {
		height: 750rpx !important;
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

	/* 间隔线 start*/
	.tn-strip-bottom {
		width: 100%;
		border-bottom: 20rpx solid rgba(241, 241, 241, 0.8);
	}

	/* 间隔线 end*/
	/* 标题 start */
	.nav_title {
		-webkit-background-clip: text;
		color: transparent;

		&--wrap {
			position: relative;
			display: flex;
			height: 120rpx;
			font-size: 46rpx;
			align-items: center;
			justify-content: center;
			font-weight: bold;
			background-image: url(https://tnuiimage.tnkjapp.com/title_bg/title44.png);
			background-size: cover;
		}
	}

	/* 标题 end */

	/* 底部tabbar start*/
	.footerfixed {
		position: fixed;
		width: 100%;
		bottom: 0;
		z-index: 999;
		background-color: #FFFFFF;
		box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
	}


	/* 毛玻璃*/
	.dd-glass {
		width: 100%;
		backdrop-filter: blur(20rpx);
		-webkit-backdrop-filter: blur(20rpx);
	}

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

	/* 标签内容 end*/

	/* 内容图 start */
	.content-backgroup {
		z-index: -1;

		.backgroud-image {
			border-radius: 15rpx;
			width: 100%;
		}
	}

	/* 内容图 end */

	/* 商家商品 start*/
	.tn-blogger-content {
		&__wrap {
			box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
			border-radius: 20rpx;
			margin: 15rpx;
		}

		&__info {
			&__btn {
				margin-right: -12rpx;
				opacity: 0.5;
			}
		}

		&__label {
			&__item {
				line-height: 45rpx;
				padding: 0 10rpx;
				margin: 5rpx 18rpx 0 0;

				&--prefix {
					color: #E83A30;
					padding-right: 10rpx;
				}
			}

			&__desc {
				line-height: 35rpx;
			}
		}

		&__main-image {
			border-radius: 16rpx 16rpx 0 0;

			&--1 {
				max-width: 690rpx;
				min-width: 690rpx;
				max-height: 400rpx;
				min-height: 400rpx;
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
			font-size: 24rpx;
			padding-right: 5rpx;
		}
	}

	.image-book {
		padding: 150rpx 0rpx;
		font-size: 16rpx;
		font-weight: 300;
		position: relative;
	}

	.image-picbook {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 15rpx 15rpx 0 0;
	}

	/* 毛玻璃*/
	.dd-glass {
		width: 100%;
		backdrop-filter: blur(20rpx);
		-webkit-backdrop-filter: blur(20rpx);
	}

	/* 资讯主图 start*/
	.image-article {
		border-radius: 8rpx;

		width: 160rpx;
		height: 150rpx;
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
		width: 100%;
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

	.clamp-text-3 {
		-webkit-line-clamp: 3;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
	}


	.time-line {

		&__wrap {
			padding: 60rpx 30rpx 30rpx 60rpx;
		}

		&-item {
			&__node {
				width: 44rpx;
				height: 44rpx;
				border-radius: 100rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: #AAAAAA;

				&--active {
					background-color: $tn-main-color;
				}

				&--icon {
					color: #FFFFFF;
					font-size: 24rpx;
				}
			}

			&__content {
				&__title {
					font-weight: bold;
					font-size: 32rpx;
				}

				&__desc {
					color: $tn-font-sub-color;
					font-size: 28rpx;
					margin-bottom: 6rpx;
				}

				&__time {
					color: $tn-font-holder-color;
					font-size: 26rpx;
				}
			}
		}
	}

	/* 毛玻璃*/
	.dd-glass {
		width: 100%;
		backdrop-filter: blur(20rpx);
		-webkit-backdrop-filter: blur(20rpx);
	}

	.tn-goods-nav {
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 88rpx;
		width: 100%;
		box-sizing: content-box;

		&--shadow {
			box-shadow: 0rpx -10rpx 30rpx 0rpx rgba(0, 0, 0, 0.05);

			&::before {
				content: " ";
				position: absolute;
				width: 100%;
				height: 100%;
				bottom: 0;
				left: 0;
				right: 0;
				margin: auto;
				background-color: transparent;
				z-index: -1;
			}
		}

		&--fixed {
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
		}

		.options {
			display: flex;
			flex-direction: row;
			align-items: center;
			height: 100%;
			color: #AAAAAA;

			&__item {
				padding: 0 26rpx;

				&--avatar {
					padding: 0rpx 0rpx 0rpx 26rpx !important;
				}

				&__icon {
					position: relative;
					font-size: 36rpx;
					margin-bottom: 6rpx;
				}

				&__text {
					font-size: 22rpx;
				}
			}
		}

		.buttons {
			flex: 1;
			display: flex;
			flex-direction: row;
			align-items: center;
			height: 100%;

			&__item {
				flex: 1;
				padding: 0 10rpx;
				display: flex;
				align-items: center;
				justify-content: center;

				&--rect {
					height: 100%;
				}

				&--padding-rect {
					height: 80%;
				}

				&--round {
					height: 75%;

					&:first-child {
						border-top-left-radius: 100rpx;
						border-bottom-left-radius: 100rpx;
					}

					&:last-child {
						border-top-right-radius: 100rpx;
						border-bottom-right-radius: 100rpx;
					}
				}

				&__text {
					display: inline-block;
					font-weight: bold;
					font-size: 30rpx;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}
			}
		}
	}
</style>
