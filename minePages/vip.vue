<template>
	<view class="warp">
		<tn-nav-bar fixed :isBack="true">
			会员中心
		</tn-nav-bar>


		<swiper class="swiper" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<swiper-item v-for="(items,indexs) in levelList" :key="indexs">
				<div class="topBg">
					<view class="progress b-card" :class="{'b-level-1': body.vip<1,
					'b-level-2': body.vip >0}">
						<view class="heard">
							尊贵VIP会员
						</view>
						<view class="title">
							这是您尊贵的身份象征
						</view>
						<view class="progress-artice">
							<view class="outer">
								<view class="inside" :style="{'width': items.ratio+'%'}">

								</view>
							</view>
							<view class="content">
								<view class="content-item" :style="{'flex':item.flex}"
									v-for="(item,index) in items.list" :key="index">
									<view class="rangle">
										<view class="rangle-text" v-show="index<items.list.length-1"></view>

									</view>
									<view class="level">
										{{item.name}}
									</view>
								</view>
							</view>
						</view>
						<view class="text" @tap="shouhuxiu=true" v-if="body.vip==1">
							<tn-button :shadow="true" shape="round" width="100%" height="80rpx"
								backgroundColor="tn-main-gradient-red" fontColor="#ffffff" margin="10rpx 0">VIP
								Lv.{{body.vip_lv}} 到期日期：{{body.vip_time}}</tn-button>
						</view>

						<view class="text" @tap="shouhuxiu=true" v-if="body.vip==0">
							<tn-button :shadow="true" shape="round" width="100%" height="80rpx"
								backgroundColor="tn-main-gradient-purplered--reverse" fontColor="#ffffff"
								margin="10rpx 0">立即开通</tn-button>
						</view>
					</view>
				</div>
			</swiper-item>
		</swiper>


		<view class="medal tn-padding-top-sm">
			<view class="medal-title">
				<text>会员权益</text>
				<text class="text">9个</text>
			</view>

			<view class="medal-box">
				<view class="medal-item" v-for="(item,index) in medalList" :key="index">
					<image class="img" :src="item.imgUrl">
					</image>
					<view class="title">
						{{item.title}}
					</view>
					<view class="text">
						{{item.text}}
					</view>
				</view>
			</view>
		</view>


		<tn-popup v-model="shouhuxiu" width="80%" height="30%" mode="bottom" :borderRadius="30" :closeBtn="false"
			:maskCloseable="true">

			<view class="tn-flex tn-flex-row-around tn-margin-top-sm money-area ">
				<view
					class="justify-content-item item tn-padding-xl tn-text-center tn-margin-xs tn-radius bg-flex-shadow tn-shadow-blur"
					v-for="(item, indexsshhud)  in body.vipjiage" :key="item"
					:class="{ active:indexsshhud == shouhutype}" @click="rechargeChange(indexsshhud)">
					<view class="price">{{indexsshhud}}个月</view>
					<text class="fs-xs">{{configInfo.site_moneyname}}{{item}}</text>
				</view>
			</view>
			<view class="tn-text-center" >
				<view @click="shouhuosend">
				<tn-button :shadow="true" width="60%" backgroundColor="tn-main-gradient-red"
					height="80rpx" margin="10rpx 0">确认开通</tn-button>
					</view>
					<view class="title tn-padding-top" @click="navigateToFn({ url: '/homePages/about?title=VIP会员协议', checkLogin: false })">
						查看VIP会员协议
					</view>
			</view>
			<tn-modal width="80%" v-model="chongzhiis" backgroundColor="#E4E9EC" padding="30rpx 80rpx" :radius="25"
				title="抱歉.余额不足!" :button="button" :showCloseBtn="false" :maskCloseable="false" :zoom="true"
				:custom="false" @click="clickBtn_shenqing">

			</tn-modal>
		</tn-popup>

		<view class="medal tn-padding-top-sm">
			<view class="medal-title">
				<text>会员每日抽奖</text>
				<text class="text"></text>
			</view>
		<view class="" style="margin-top: 20px;text-align: center;justify-content: center;">
				<almost-lottery :prize-list="prizeList" :ring-count="2" :duration="1" :canvas-width="canvasData.width"
					:canvas-height="canvasData.height" :prize-index="prizeIndex" @reset-index="prizeIndex = -1"
					@draw-start="handleDrawStart" @draw-end="handleDrawEnd" @finish="handleDrawFinish"
					v-if="prizeList.length" />
			</view>
		</view>
		
		<dk-tanchuang  v-model="zhongjianxiu" width="80%" height="40%" mode="center" :borderRadius="30"
			giftitle="恭喜您"  :gifcontent="jiangpin" :closeBtn="true" :maskCloseable="false">
		</dk-tanchuang>
	</view>
</template>

<script>
	export default {

		data() {
			return {
				///
				// canvas 宽高
				zhongjianxiu:false,
				canvasData: {
					width: 240,
					height: 240
				},
				// 奖品数据
				jiangpin:'',
				prizeList: [],
				// 中奖下标
				prizeIndex: -1,
				// 是否正在抽奖中
				prizeing: false,
				// 中奖类目名称
				targetName: '',
				// 奖品是否设有库存
				onStock: false,
				// 是否由前端控制概率，默认不开启
				onFrontend: true,
				// 权重随机数的最大值
				weightTotal: 0,
				// 权重数组
				weightArr: [],
				games: [],
				///
				chongzhiis: false,
				shouhutype:1,
				body: [],
				shouhuxiu: false,
				levelList: [{
					level: 0,
					ratio: 50,
					list: [{
						flex: 1,
						achieve: 14.2,
						name: 'LV.1'
					}, {
						flex: 2,
						achieve: 42.8,
						name: 'LV.2'
					}, {
						flex: 2,
						achieve: 71.5,
						name: 'LV.3'
					}, {
						flex: 2,
						achieve: 100,
						name: 'LV.4'
					}]
				}],


				medalList: [{
					imgUrl: "https://zhoukaiwen.com/img/medal/icon-medal-1.png",
					title: "专属徽章",
					text: "炫酷VIP徽章标识"
				}, {
					imgUrl: "https://zhoukaiwen.com/img/medal/icon-medal-2.png",
					title: "状态隐身",
					text: "聊天状态可隐身"
				}, {
					imgUrl: "https://zhoukaiwen.com/img/medal/icon-medal-3.png",
					title: "每日抽奖",
					text: "每日参加抽奖1次"
				}, {
					imgUrl: "https://zhoukaiwen.com/img/medal/icon-medal-4.png",
					title: "动态置顶",
					text: "个人动态可置顶"
				}, {
					imgUrl: "https://zhoukaiwen.com/img/medal/icon-medal-5.png",
					title: "专属礼物",
					text: "专属VIP礼物"
				}, {
					imgUrl: "https://zhoukaiwen.com/img/medal/icon-medal-6.png",
					title: "积分经验",
					text: "经验和积分倍"
				}],
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
		onLoad() {
			this.info()

		},
		methods: {

			async shouhuosend() {
				let that = this;

				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/user/vippass',
					data: {
						type: this.shouhutype
					}
				});

				if (result.statusCode == 200) {
					if (result.data.code == 200) {

						if (result.data.msg == '余额不足') {
							that.chongzhiis = true
						}
						if (result.data.msg == '开通成功') {
							that.hasTokenGetUserInfo(() => {
								uni.hideLoading();
								that.info()
								that.shouhuxiu = false
								uni.showToast({
									icon: 'success',
									title: '开通成功'
								});

							});

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
						title: result.data.data
					});
				}
			},

			clickBtn_shenqing(res) {

				if (res == 1) {
					this.chongzhiis = false
					this.navigateToFn({
						url: '/minePages/gift/chongzhi',
						checkLogin: true
					})
				} else {
					this.chongzhiis = false
				}
			},
			rechargeChange(item) {
				this.shouhutype = item
			},
			async info() {
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/user/getvip',
					data: {}
				});


				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						that.body = result.data.data;
						that.games = result.data.data.games;
						that.medalList[5].text = '经验和积分' + result.data.data.vip_bei + '倍'
						that.getPrizeList()
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

			// 获取奖品列表
			async getPrizeList() {			
				let res = await this.requestPrizeList()
				console.log('获取奖品列表', res)

				if (res.ok) {
					let data = res.data
					if (data.length) {
						// stock 奖品库存
						// weight 中奖概率，数值越大中奖概率越高
						this.prizeList = data

						// 如果开启了前端控制概率
						// 计算出权重的总和并生成权重数组
						if (this.onFrontend) {
							this.prizeList.forEach((item) => this.weightTotal +=Number(item.weight))
							this.weightArr = this.prizeList.map((item) => Number(item.weight))
						}
					}
				} else {
					uni.hideLoading()
					uni.showToast({
						title: '获取奖品失败'
					})
				}
			},
			// 模拟请求奖品列表接口
			requestPrizeList() {
				return new Promise((resolve, reject) => {
					let requestTimer = setTimeout(() => {
						clearTimeout(requestTimer)
						requestTimer = null

						resolve({
							ok: true,
							data: this.games
						})
					}, 2000)
				})
			},
			// 本次抽奖开始
			handleDrawStart() {				
				if (this.prizeing) return
				this.prizeing = true

				this.targetName = ''

				let list = [...this.prizeList]

				// 判断是否由前端控制概率
				// 前端控制概率的情况下，需要拿到最接近随机权重且大于随机权重的值
				// 后端控制概率的情况下，通常会直接返回 prizeId
				if (this.onFrontend) {
					if (!this.weightTotal) {
						
						return
					}
				

					// 注意这里使用了 Math.ceil，如果某个权重的值为 0，则始终无法中奖
				// 	let weight = Math.ceil(Math.random() * this.weightTotal)
				// 	console.log('本次权重随机数 =>', weight)

				
				// 		let tempWeightArr = [...this.weightArr]
				// 		tempWeightArr.sort((a, b) => a - b)
				// 		this.prizeIndex = this.weightArr.indexOf(tempWeightArr[tempWeightArr.length - 1])
				
				let tempWeightArr = [...this.weightArr,0,0]
			 	let random = Math.ceil(Math.random() * this.weightTotal)			
				let result = 0
				for (let i = 0, len = tempWeightArr.length; i < len; i ++) {
				    random -= tempWeightArr[i]
				    if (random <= 0) {
				        result = i
				        break
				    }
				}
				
				this.prizeIndex =result
								
				console.log('本次抽中奖品 =>', this.prizeList[this.prizeIndex].name)

					// 如果奖品设有库存
					if (this.onStock) {
						console.log('本次奖品库存 =>', this.prizeList[this.prizeIndex].stock)
					}
				} else {
					//后台计算概率
				}
			},
			// 本次抽奖结束
			handleDrawEnd() {
				this.prizeing = false		
				this.zhongjiang(this.prizeIndex)
			},
			// 抽奖转盘绘制完成
			handleDrawFinish(res) {
				uni.showToast({
					title: res.msg,
					duration: 2000,
					mask: true,
					icon: 'none'
				})
			},
			async zhongjiang(id) {
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/gift/zhuanpan',
					data: {
						id: this.prizeList[id].prizeId
					}
				});
				 if (result.data.code==0){
					 this.msg(result.data.msg)
				 }
				 if (result.data.code==200){
					 if (result.data.data.type==0){
					that.$store.commit('setsore',this.$store.state.sore+result.data.data.num); 
					}
					if (result.data.data.type==1){
					that.$store.commit('setmoney',this.$store.state.money+result.data.data.num); 
					}
					
				 	this.zhongjianxiu=true
				 	this.jiangpin='抽中了'+this.prizeList[id].name
				 	setTimeout(() => {
				 	this.zhongjianxiu=false
				 	}, 4000);
				 }

			}


		}
	}
</script>

<style lang="scss" scoped>
	.topBg {
		width: 100%;
		height: 400rpx;
		padding-top: 20rpx 0 20rpx 0;
		background-repeat: no-repeat;
		background-size: 100%;
	}

	.b-card {
		background-color: #fefefe;
		background-image: linear-gradient(-45deg, #e8e9ec, #f2f2f2);
		padding: 30rpx 40rpx;
		margin: 0 30rpx;
		height: 500rpx;
		border-radius: 20rpx;
		box-shadow: 2rpx 2rpx 2rpx #efeef3;
		color: #9a9ca1;

		.heard {
			color: #6f7275;
		}

		.text {
			//	background-color: #d8dcdd;
		}

		.outer {
			background-color: #d8dcdd;

			.inside {
				background-color: #6f7275;
			}
		}

		.rangle {
			.rangle-text {
				background-color: #6f7275;
			}
		}
	}

	.b-level-1 {
		background-image: linear-gradient(45deg, #dde1ea, #a3abb8);
		color: #34424b;

		.heard {
			color: #34424b;
		}

		.text {
			//	background-color: #e4e9ed;
		}

		.outer {
			background-color: #e4e9ed;

			.inside {
				background-color: #34424b;
			}
		}

		.rangle {
			.rangle-text {
				background-color: #34424b;
			}
		}
	}

	.b-level-2 {
		background-image: linear-gradient(45deg, #f0daa4, #d1a165);
		color: #323b4a;

		.heard {
			color: #313a49;
		}

		.text {
			//	background-color: #e4e7ec;
		}

		.outer {
			background-color: #e4e7ec;

			.inside {
				background-color: #313a49;
			}
		}

		.rangle {
			.rangle-text {
				background-color: #323b4a;
			}
		}
	}

	.b-level-3 {
		background-image: linear-gradient(45deg, #ddc1b5, #c59073);
		color: #333333;

		.heard {
			color: #333333;
		}

		.text {
			background-color: #e8e8e8;
		}

		.outer {
			background-color: #e8e8e8;

			.inside {
				background-color: #333333;
			}
		}

		.rangle {
			.rangle-text {
				background-color: #333333;
			}
		}

	}

	.b-level-4 {
		background-image: linear-gradient(45deg, #303030, #1a1a1a);
		color: #f0daa4;

		.heard {
			color: #f0daa4;
		}

		.text {
			background-color: #f2e3c4;
			color: #77582a;
		}

		.outer {
			background-color: #f2e3c4;

			.inside {
				background-color: #f2e3c4;
			}
		}

		.rangle {
			.rangle-text {
				background-color: #77582a;
			}
		}
	}

	.warp {
		.swiper {
			height: 600rpx;

			.progress {
				.heard {
					font-size: 36rpx;
					font-weight: 600;
					text-align: center;
					line-height: 120rpx;
				}

				.title {
					font-size: 28rpx;
				}

				.progress-artice {
					margin-top: 30rpx;
					font-size: 28rpx;

					.outer {
						height: 10rpx;
						border-radius: 20rpx;
						margin: 0;
						overflow: hidden;

						.inside {
							height: 100%;
						}
					}

					.content {
						margin: 0;
						display: flex;
						text-align: right;

						.content-item {
							display: flex;
							flex-direction: column;

							.rangle {
								height: 10rpx;
								line-height: 10rpx;
								margin-top: -10rpx;
								display: flex;
								justify-content: flex-end;
								align-items: center;

								.rangle-text {
									width: 10rpx;
									height: 10rpx;
									display: inline-block;
									border-radius: 50%;
									display: none;
								}

								.rangle-gift {
									width: 60rpx;
									height: 60rpx;
									background-color: #cacdd0;
									display: inline-block;
									border-radius: 50%;
								}

								.achieveClass {
									background-color: #765528;
								}
							}

							.level {
								margin-top: 50rpx;
								margin-right: -20rpx;
							}

							&:nth-child(4) {
								.level {
									margin-right: 0rpx;
								}
							}
						}

					}
				}

				.text {

					padding: 2rpx 20rpx;
					border-radius: 10rpx;
					font-size: 28rpx;
					font-weight: 600;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.text-des {
						font-size: 20rpx;
						font-weight: 300;
					}
				}
			}
		}

		.medal {
			margin: 10rpx 30rpx;

			.medal-title {
				font-size: 32rpx;
				font-weight: 700;
				color: #30333b;
				padding: 0 10rpx;

				.text {
					font-size: 28rpx;
					font-weight: 300;
					color: #7c7f81;
					margin-left: 10rpx;
				}
			}

			.medal-box {
				display: flex;
				flex-wrap: wrap;

				.medal-item {
					width: 33.3333333333333%;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					margin-top: 40rpx;

					.img {
						width: 140rpx;
						height: 140rpx;
						border-radius: 50%;
					}

					.title {
						font-size: 24rpx;
						line-height: 60rpx;
						font-weight: 600;
						color: #30333b;
					}

					.text {
						font-size: 24rpx;
						color: #7c7f81;
					}
				}

			}
		}
	}

	.money-area {
		margin-top: 30rpx;
		margin-bottom: 20rpx;

		.item {
			height: 150rpx;
			background: #f5f5f5;
			border-radius: 14rpx;

			.price {
				color: #333;
				margin-bottom: 10rpx;
			}

			text {
				color: #9a9a9a;
			}

			&:nth-child(2) {
				margin-left: 20rpx;
				margin-right: 20rpx;
			}
		}

		.active {
		background-image: repeating-linear-gradient(
		45deg
		, #E83A30, #E72F8C);
		    color: #FFFFFF;

			.price,
			text {
				color: #fff !important;
			}
		}
	}
</style>
