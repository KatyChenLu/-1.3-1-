<template>
	<view class="warp">
		<tn-nav-bar fixed :isBack="true">
			任务中心
		</tn-nav-bar>

		<!-- 金币收集 -->
		<view class="exchange-box tn-bg-green--dark tn-padding tn-margin"
			:style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<view class="title">

				<view class="exchange-btn tn-bg-green--light">我的积分： {{body.score}}个</view>
			</view>

			<view class="content">
				<view class="sign-box" style="left:10%;top: 60rpx;" :class="{'addAnimation':receive}">
					<view class="sign-content">
						<text class="sign-title">评论</text>
						<view class="sign-garden">
							+{{body.add_conmont_score}}
						</view>
					</view>
				</view>
				<view class="sign-box" style="left:30%;top: 0rpx;" :class="{'addAnimation':receive}">
					<view class="sign-content">
						<text class="sign-title">发帖</text>
						<view class="sign-garden">
							+{{body.add_goods_score}}
						</view>
					</view>
				</view>
				<view class="sign-box" style="left: 60%;top: 0rpx;" :class="{'addAnimation':receive}">
					<view class="sign-content">
						<text class="sign-title">发活动</text>
						<view class="sign-garden">
							+{{body.add_active_score}}
						</view>
					</view>
				</view>
				<view class="sign-box" style="left: 80%;top: 60rpx;" :class="{'addAnimation':receive}">
					<view class="sign-content">
						<text class="sign-title">建圈子</text>
						<view class="sign-garden">
							+{{body.add_category_score}}
						</view>
					</view>
				</view>

				<view class="footer-box" @click="toReceive">
					<view class="footer-outer">
						<view class="footer-inside b-fontw tn-text-center">
							<text style="width: 40px; ">{{name}}</text>
						</view>
					</view>
				</view>

			</view>
		</view>

		<!-- 连续签到 -->
		<view class="signIn-box b-card">
			<view class="signIn-heard">
				<view class="title">
					<view class="title-today b-fontw">
						已累计签到<text style="color: #00c657;margin: 0 4rpx;">{{body.tian}}</text>天
					</view>
					<view class="title-tomorrow">
						累计7天可获得{{body.sore_qian_qitian}}积分
					</view>
				</view>
				<!-- <view class="total b-fontw">
					<image class="img" src="https://zhoukaiwen.com/img/clockImg/icon-money.png" mode=""></image>
					<text>456</text>
				</view> -->
			</view>
			<!-- <view class="signIn-content b-flex-space">
				<view class="item">
					<view class="b-flex-space">
						<view class="item item-flex card" :class="{'card-check':true}">
							<text class="title">第1天</text>
							<image class="img" src="https://zhoukaiwen.com/img/clockImg/icon-money.png" mode=""></image>
							<text class="describe">{{body.sore_qian}}积分</text>
						</view>
						<view class="item item-flex card">
							<text class="title">第2天</text>
							<image class="img" src="https://zhoukaiwen.com/img/clockImg/icon-money.png" mode=""></image>
							<text class="describe">{{body.sore_qian}}金币</text>
						</view>
					</view>
					<view class="b-flex-space">
						<view class="item item-flex card">
							<text class="title">第5天</text>
														<image class="img" src="https://zhoukaiwen.com/img/clockImg/icon-money.png" mode=""></image>
							<text class="describe">{{body.sore_qian}}金币</text>
						</view>
						<view class="item item-flex card">
							<text class="title">第6天</text>
														<image class="img" src="https://zhoukaiwen.com/img/clockImg/icon-money.png" mode=""></image>
							<text class="describe">{{body.sore_qian}}金币</text>
						</view>
					</view>
				</view>
				<view class="item">
					<view class="b-flex-space">
						<view class="item item-flex card">
							<text class="title">第3天</text>
							<image class="img" src="https://zhoukaiwen.com/img/clockImg/icon-money.png" mode=""></image>
							<text class="describe">{{body.sore_qian}}金币</text>
						</view>
						<view class="item item-flex card">
							<text class="title">第4天</text>
							<image class="img" src="https://zhoukaiwen.com/img/clockImg/icon-money.png" mode=""></image>
							<text class="describe">{{body.sore_qian}}金币</text>
						</view>
					</view>
					<view class="b-flex-space">
						<view class="card" style="width: 100%;display: flex;justify-content: space-between;">
							<view class="" style="display: flex;flex-direction: column;">
								<text class="title">第7天</text>
								<text class="describe">神秘大礼包</text>
							</view>
							<image class="img" style="width: 120rpx;height: 110rpx;margin-top: 20rpx;" src="https://zhoukaiwen.com/img/clockImg/icon-gift.png" mode=""></image>
						</view>
					</view>
				</view>
				
			</view> -->

		</view>

		<!-- 任务 -->
		<view class="task-box b-card">
			<view class="title b-fontw">
				做任务赚积分
			</view>

			<view class="task-item b-flex-space">
				<view class="task-item-left b-flex-space">
					<image class="task-item-icon" src="https://zhoukaiwen.com/img/clockImg/icon-signs.png" mode="">
					</image>
					<view class="task-item-describe">
						<view class="title b-fontw">
							累计签到{{body.tian}}天
						</view>
						<view class="text">
							连续签到7天额外获取
						</view>
					</view>
				</view>
				<view class="task-item-btn">
					积分
					+{{body.sore_qian_qitian}}
				</view>
			</view>

			<view class="task-item b-flex-space">
				<view class="task-item-left b-flex-space">
					<image class="task-item-icon" src="https://zhoukaiwen.com/img/clockImg/icon-signs.png" mode="">
					</image>
					<view class="task-item-describe">
						<view class="title b-fontw">
							发帖奖励积分
						</view>
						<view class="text">
							发布帖子并审核通过
						</view>
					</view>
				</view>
				<view class="task-item-btn">
					积分
					+{{body.add_goods_score}}
				</view>
			</view>

			<view class="task-item b-flex-space">
				<view class="task-item-left b-flex-space">
					<image class="task-item-icon" src="https://zhoukaiwen.com/img/clockImg/icon-takeOut.png" mode="">
					</image>
					<view class="task-item-describe">
						<view class="title b-fontw">
							实名认证
						</view>
						<view class="text">
							在设置里进行实名认证
						</view>
					</view>
				</view>
				<view class="task-item-btn">
					积分
					+{{body.sore_realname}}
				</view>
			</view>
			<view class="task-item b-flex-space">
				<view class="task-item-left b-flex-space">
					<image class="task-item-icon" src="https://zhoukaiwen.com/img/clockImg/icon-since.png" mode="">
					</image>
					<view class="task-item-describe">
						<view class="title b-fontw">
							创建活动
						</view>
						<view class="text">
							建立下线活动并审核成功
						</view>
					</view>
				</view>
				<view class="task-item-btn">
					积分
					+{{body.add_category_score}}
				</view>
			</view>
			<view class="task-item b-flex-space">
				<view class="task-item-left b-flex-space">
					<image class="task-item-icon" src="https://zhoukaiwen.com/img/clockImg/icon-since.png" mode="">
					</image>
					<view class="task-item-describe">
						<view class="title b-fontw">
							大v认证
						</view>
						<view class="text">
							申请大v认证并审核成功
						</view>
					</view>
				</view>
				<view class="task-item-btn">
					积分
					+{{body.sore_dav}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '点击签到',
				body:{
					"score": 0, "sore_qian": "0", "sore_qian_qitian": "0", "add_conmont_score": "0",
					"add_active_score": "0", "add_category_score": "0", "add_goods_score": "0", "sore_dav": "0",
					"sore_realname": "0", "is_sign": "点击签到", "tian": 0
				},
				receive: false,
				total_start: 0,
				total: 0
				
			}
		},
		onLoad() {
			this.info()

				
		},
		methods: {

			async info() {
				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/user/sore',
					data: {}
				});


				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						that.body = result.data.data;
						that.name = result.data.data.is_sign
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


			async toReceive() {


				if (this.name == '今日已签') {
					this.msg('今日已签')
					return
				}

				this.receive = true

				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/gift/day_sign',
					data: {}
				});


				if (result.statusCode == 200) {
					if (result.data.code == 200) {				
						that.$store.commit('setsore', this.$store.state.my_score + result.data.data);
				
						this.body.tian++
						this.name = "今日已签"
						this.msg('签到成功')
						
						setTimeout(() => {
							this.receive = false
						}, 1800)

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

			}
		}
	}
</script>

<style lang="scss" scoped>
	$W: 140rpx;
	$titleSize: 32rpx;
	$signH: 80rpx;

	.b-card {
		margin: 30rpx;
		padding: 30rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;
		box-shadow: 2rpx 2rpx 10rpx #C0C0C0;
	}

	.b-flex-space {
		display: flex;
		justify-content: space-between;
	}

	.b-fontw {
		font-weight: 600;
	}

	@keyframes middles {
		from {
			transform: scale(1);
		}

		to {
			transform: scale(0);
		}
	}

	.addAnimation {
		animation: middles 0.5s linear;
	}

	.warp {

		// padding: 0 20rpx;
		.exchange-box {
			color: #F1F1F1;
			height: 600rpx;

			.title {
				display: flex;
				height: 80rpx;
				align-items: center;
				font-size: 32rpx;
				font-weight: 600;

				.exchange-btn {
					margin-left: 20rpx;
					padding: 4rpx 20rpx;
					font-size: 14px;
					border-radius: 40rpx;
					color: #000000;
					opacity: 0.8;
				}
			}

			.content {
				height: 270rpx;
				margin-top: 40rpx;
				// background-color: rgba(0,0,0,0.6);
				position: relative;

				.sign-box {
					position: absolute;
					left: 20rpx;
					top: 30rpx;

					.sign-content {
						display: flex;
						justify-content: center;
						align-items: center;
						flex-direction: column;

						.sign-title {
							font-size: 28rpx;
						}

						.sign-garden {
							width: $W/2;
							height: $W/2;
							border-radius: 50%;
							color: #444a62;
							font-weight: 600;
							background-color: rgba(255, 255, 255, 0.9);
							display: flex;
							justify-content: center;
							align-items: center;
						}
					}
				}

				.footer-box {
					position: absolute;
					bottom: 0;
					left: 50%;
					margin-left: -$W/2;

					.footer-outer {
						width: $W;
						height: $W;
						padding: 10rpx;
						box-sizing: border-box;
						background-color: rgba(255, 255, 255, 0.5);
						border-radius: 50%;
						display: flex;
						justify-content: center;
						align-items: center;

						.footer-inside {
							width: 100%;
							height: 100%;
							background-color: rgba(255, 255, 255, 0.9);
							border-radius: 50%;
							display: flex;
							font-size: 28rpx;
							color: #444a62;
							justify-content: center;
							align-items: center;
							flex-direction: column;
						}
					}
				}

			}
		}

		.signIn-box {
			.signIn-heard {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.title {
					height: $signH;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.title-today {
						font-size: $titleSize;
					}

					.title-tomorrow {
						font-size: 24rpx;
						color: #C0C0C0;
					}
				}

				.total {
					height: $signH - 10;
					font-size: 32rpx;
					padding: 0 20rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 20rpx;
					border: 2rpx solid #C0C0C0;

					.img {
						width: 60rpx;
						height: 60rpx;
						margin-right: 10rpx;
					}
				}
			}

			.signIn-content {
				.item {
					width: calc(50% - 10rpx);

					.img {
						height: 60rpx;
						width: 60rpx;
						margin: 6rpx 0;
					}
				}

				.item-flex {
					display: flex;
					flex-direction: column;
					// justify-content: center;
					align-items: center;

				}

				.card {
					height: 180rpx;
					padding: 15rpx 24rpx;
					box-sizing: border-box;
					background-color: #f5f6fa;
					border-radius: 10rpx;
					margin-top: 20rpx;

					.title {
						font-size: 28rpx;
					}

					.describe {
						font-size: 20rpx;
						color: #C0C0C0;
					}

					.item-check {}
				}

				.card-check {
					color: #FFFFFF;
					// background-color: #444a62;
					background-color: #00c657;

					.describe {
						color: #FFFFFF;
					}
				}

			}
		}

		.task-box {
			.title {
				font-size: $titleSize;
			}

			.task-item {
				margin: 60rpx 0;
				align-items: center;

				.task-item-left {
					align-items: center;

					.task-item-icon {
						width: 60rpx;
						height: 60rpx;
					}

					.task-item-describe {
						height: 80rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						margin-left: 30rpx;

						.title {
							font-size: 28rpx;
						}

						.text {
							font-size: 20rpx;
							color: #C0C0C0;
						}
					}
				}

				.task-item-btn {
					width: 180rpx;
					color: #FFFFFF;
					padding: 10rpx 20rpx;
					font-size: 28rpx;
					font-weight: 600;
					// background-color: #00c657;
					// background-image: linear-gradient( to left, #454c64,#262d47);
					background-image: linear-gradient(to top right, #06c852, #66e805);
					box-shadow: 2rpx 2rpx 10rpx #f5f6fa;
					border-radius: 40rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;

					.img {
						width: 40rpx;
						height: 40rpx;
					}
				}
			}
		}
	}
</style>
