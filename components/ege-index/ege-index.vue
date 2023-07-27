<template>
	<view>
		<!-- 背景图 -->
		<view class="wh-w750" style=" position: relative;">
			<image :src="nImg" mode="aspectFill" style="height:700px; width: 750rpx;"></image>
		</view>
		<!-- 转盘 -->

		<view class="tn-flex tn-flex-row-between tn-margin-top-sm"
			style="position: absolute;top: 15rpx;right: 0;left:0;">
			<view class="justify-content-item  tn-text-center tn-margin-xs dk-bg-touming" @click="guizeshow=true">
				规则
			</view>
			<view class="justify-content-item  tn-text-center tn-margin-xs dk-bg-touming" @click="openjilu()">
				记录
			</view>
		</view>
		<view class="tn-flex tn-flex-row-between tn-margin-top-sm"
			style="position: absolute;top: 105rpx;right: 0;left:0;">
			<view class="justify-content-item  tn-text-center tn-margin-xs dk-bg-touming" @click="jiangchishow=true">
				奖池
			</view>
			<view class="justify-content-item  tn-text-center tn-margin-xs dk-bg-touming" @click="bangdang()">
				榜单
			</view>
		</view>

		<view class="luck-list tn-flex tn-flex-row-center"
			style="position: absolute;top: 15rpx;right: 0;left: 72rpx; width: 600rpx; ">
			<image mode="widthFix" style="width:180px;"
				:src="baotitle"></image>
		</view>

		<view class="luck-list tn-flex-row-center" 
			style="position: absolute;top:355rpx;right: 0;left: 72rpx; width: 600rpx;" v-if="!kaijiang">
			<image :animation="baoxiangmone"  :src="baobigimg"
				style="top:10rpx; left:0rpx; width: 8.53333rem; height: 9.51467rem;"></image>
		</view>



		<view class="tn-flex tn-flex-row-around tn-margin-top-sm"
			style="position: absolute;bottom:100rpx;right: 0;left:0; width:100%;">
			<view class="justify-content-item  tn-text-center tn-margin-sm tn-radius  ">
				<view class="tn-color-white tn-margin-bottom-sm tn-text-bold">
					{{price}}{{configInfo.site_moneyname}}
				</view>

				<tn-button @click="dakai(1)" shape="round" backgroundColor="#ffff00" fontColor="#080808">
					打开1个
				</tn-button>
			</view>
			<view class="justify-content-item  tn-text-center tn-margin-sm tn-radius" style="width: 100px;">
				<view class="tn-color-white tn-margin-bottom-sm tn-text-bold">
					{{price*10}}{{configInfo.site_moneyname}}
				</view>
				<tn-button @click="dakai(10)" shape="round" backgroundColor="#ffff00" fontColor="#080808">
					打开10个
				</tn-button>
			</view>
			<view class="justify-content-item  tn-text-center tn-margin-sm tn-radius  ">
				<view class="tn-color-white tn-margin-bottom-sm tn-text-bold">
					{{price*100}}{{configInfo.site_moneyname}}
				</view>
				<tn-button @click="dakai(100)" shape="round" backgroundColor="#ffff00" fontColor="#080808">
					打开100个
				</tn-button>
			</view>
		</view>

		<view @click="navigateToFn({ url: '/minePages/gift/chongzhi', checkLogin: true })"
			class="luck-list tn-flex-row-center"
			style="position: absolute;bottom:30rpx;right: 0;left: 72rpx; width: 600rpx;">

			<view class="" style="padding: 5px 10px;border-radius: 2500px;background-color: rgba(8, 8, 8, 0.26);">
				<text class=" tn-color-white ">我的{{configInfo.site_moneyname}}{{mymoney}}个
				</text>
			</view>

		</view>

		<tn-modal width="80%" v-model="show_shenqing" backgroundColor="#E4E9EC" padding="30rpx 80rpx" :radius="25"
			:title="chongzhtitle" :button="button" :showCloseBtn="true" :maskCloseable="true" :zoom="true"
			:custom="false" @click="clickBtn_shenqing">

		</tn-modal>

		<dk-tanchuang v-model="kaijiang" width="80%" height="40%" mode="center" :borderRadius="30" giftitle="恭喜您"
			gifcontent="开箱成功,请到记录查看"			
			:maskCloseable="true" @close="closedPopup">
		</dk-tanchuang>



		<tn-popup v-model="guizeshow" width="80%" height="80%" mode="bottom" backgroundColor="rgb(0 0 0 / 0.68)"
			:borderRadius="30" :closeBtn="true" :maskCloseable="false" @close="closedPopup">
			<view class="tn-text-center tn-padding">
				<text class=" tn-color-white tn-text-xl">规则说明</text>
			</view>
			<scroll-view class="" scroll-y scroll-with-animation style="height:100%">
				<view class="tn-text-left tn-padding tn-color-white" style="font-size: 14px;padding-top:20px;">
			
				<rich-text :nodes="guize"></rich-text>	
				</view>
			</scroll-view>
		</tn-popup>
		<tn-popup v-model="jiangchishow" width="80%" height="80%" mode="bottom" backgroundColor="rgb(0 0 0 / 0.68)"
			:borderRadius="30" :closeBtn="true" :maskCloseable="false" @close="closedPopup">
			<view class="tn-text-center tn-padding">
				<text class=" tn-color-white tn-text-xl">奖池</text>
			</view>
			<scroll-view class="" scroll-y scroll-with-animation style="height:90%">
				<view
					class="tn-flex tn-flex-wrap tn-margin-left-sm tn-margin-bottom-sm tn-margin-right-sm tn-margin-top-xs">
					<block v-for="(item, index) in jiangchilist" :key="index">
						<view class="" style="width: 25%;position: relative;">
							<view class="tn-flex tn-flex-row-center tn-padding-top tn-text-bold">
								<image :src="item.image"
									style="border-radius: 20px;width: 64px;height: 64px;"></image>
							</view>
							<view class="tn-flex tn-flex-row-center tn-text-bold" style="margin-top: 10px;">
								<text class="" style="font-size: 12px;color: #ffffff;">{{item.title}}</text>
							</view>
							<view class="tn-flex tn-flex-row-center tn-text-bold">
								<text class="" style="font-size: 12px;color: #31e749;">钻石{{item.price}}</text>
							</view>
						</view>
					</block>
				</view>
			</scroll-view>
		</tn-popup>
		<tn-popup v-model="jilushow" width="80%" height="80%" mode="bottom" backgroundColor="rgb(0 0 0 / 0.68)"
			:borderRadius="30" :closeBtn="true" :maskCloseable="false" @close="closedPopup">
			<view class="tn-text-center tn-padding">
				<text class=" tn-color-white tn-text-xl">我的开箱记录</text>
			</view>
			<scroll-view class="" scroll-y scroll-with-animation style="height:100%">
				<tn-list-cell backgroundColor="rgb(0 0 0 / 0)" v-for="(itemuser, useronlineindex) in mujilulist"
					:key="useronlineindex">
					<view class="list-icon-text">
						<view class="list__left tn-color-white">
							<view class="list__left__text">{{itemuser.gift_name}} * 1</view>
						</view>
						<view class="list__right">
							<image :src="itemuser.gift_image"
								style="border-radius:10px;width: 34px;height: 34px;"></image>
				 	</view>
					</view>
				</tn-list-cell>

			</scroll-view>
		</tn-popup>
		<tn-popup v-model="bangdanshow" width="80%" height="80%" mode="bottom" backgroundColor="rgb(0 0 0 / 0.68)"
			:borderRadius="30" :closeBtn="true" :maskCloseable="true" @close="closedPopup">
			<view class="tn-text-center tn-padding">
				<text class=" tn-color-white tn-text-xl">本期榜单</text>
			</view>
			<scroll-view class="" scroll-y scroll-with-animation style="height:100%">
				<view style="padding: 8px 15px;" v-for="(itemuser, bangdanindex) in banglist" :key="bangdanindex">
					<view class="message">
						<view class="message__left" >
							<tn-avatar :src="itemuser.avatar"></tn-avatar>
						</view>
						<view class="message__middle" style="width:70%;">
							<view class="message__name" style="font-size: 14px;">{{itemuser.name}}</view>
							<view class="message__content tn-text-ellipsis" style="font-size: 12px;color: #55ff00;">{{itemuser.gift_name}} * 1</view>
						</view>
						<view class="message__right">
							<image :src="itemuser.gift_image"
								style="border-radius:10px;width: 34px;height: 34px;"></image>
						</view>
					</view>
				</view>

			</scroll-view>
		</tn-popup>
	</view>
</template>

<script>
	export default {
		props: {
			// 背景图
			nImg: String,
			baotitle: String,
			baobigimg: String,
			room_id: {
				type: Number,
				default: 0
			},

		},
		data() {
			return {
				cid:0,
				bangdanshow: false,
				jilushow: false,
				jiangchishow: false,
				guizeshow: false,
				gifcontent: '',
				giftimg: '',
				kaijiang: false,
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
				chongzhtitle: '充值',
				show_shenqing: false,
				sel: '',
				FastNums: 0,
				SlowNums: 0,
				time: 1000,
				LoopStatus: true,
				noClick: true,
				type: 0,
				baoxiangmone:{},
				jiangchilist:[],
				guize:'',
				price:0,
				mymoney:0,
				mujilulist:[],
				banglist:[]
			}
		},
	
		mounted() {
			this.info()	
		
		},
		methods: {
			closedPopup() {

			},
			clickBtn_shenqing(res) {

				if (res == 1) {
					this.show_shenqing = false
					this.navigateToFn({
						url: '/minePages/gift/chongzhi',
						checkLogin: true
					})
				} else {
					this.show_shenqing = false
				}
			},
			// 中奖后的逻辑
			updateMoney(sjNum) {
				this.$emit('updateMoney', sjNum)
			},
			// 开始抽奖
			dakai(num) {
				this.chongzhtitle = this.configInfo.site_moneyname + '不足'
				if (!this.noClick) {
					uni.showToast({
						title: '请勿频繁点击',
						icon: "none",
						position: 'bottom'
					});
					return
				};
				this.loop(num)

			},
			donghua(){
				var baoxiangmone = uni.createAnimation({
				     duration: 1000,
				     timingFunction: 'ease',
				   })
				this.baoxiangmone = baoxiangmone
				baoxiangmone.translateY(-100).step({ duration:0 })
				baoxiangmone.scale(3, 3).step({ duration:1000 })
				baoxiangmone.scale(1, 1).step({ duration:1000 })
				baoxiangmone.translateY(0).step({ duration:100 })
				baoxiangmone.rotateZ(20).step({ duration:100 })
				baoxiangmone.rotateZ(-20).step({ duration:100 })
				baoxiangmone.rotateZ(20).step({ duration:100 })
				baoxiangmone.rotateZ(-20).step({ duration:100 })
				baoxiangmone.rotateZ(0).step({ duration:100 })
				this.baoxiangmone = baoxiangmone.export()			
					setTimeout(() => {
					this.kaijiang = true;	
						this.baoxiangmone={}
					}, 3000);
			
			},
			// 抽奖过程 控制
			async loop(num) {
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/game/gamechoupass',
					data: {
						cid: this.cid,
						num: num,
						room_id: this.room_id,
						type: 0
					}
				});

				if (result.data.code == 200) {

					if (result.data.msg == '金额不足') {
						this.show_shenqing = true
						return
					}


					if (result.data.code == 200) {
						this.noClick = true;
						this.info()
						this.donghua()
						//this.kaijiang = true;
					} else {
						uni.showToast({
							icon: 'none',
							title: result.data.data
						});
					}

				} else {
					uni.showToast({
						icon: 'none',
						title: result.data.data
					});
				}

			},
			async info() {
				
				let that = this;
				let result = await that.$request({
					loading:1,
					method: 'post',
					url: '/api/game/infobao',
					data: {
					//room_id: this.room_id,
					}
				});
			
			
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						console.log(result.data.data.liwulist)
						this.jiangchilist=result.data.data.liwulist
						this.cid=result.data.data.cid
						this.guize=result.data.data.guize
						this.price=result.data.data.price
						this.mymoney=result.data.data.mymoney
						
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
			async openjilu() {
				this.jilushow=true
				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/game/myjilu',
					data: {
					cid:this.cid,
					room_id: this.room_id
					}
				});	
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						this.mujilulist=result.data.data			
					
					} 
				} 			
			},
			async bangdang() {
				this.bangdanshow=true
				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/game/bangdan',
					data: {
					cid:this.cid,
					room_id: this.room_id
					}
				});	
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						this.banglist=result.data.data			
						
					} 
				} 			
			}
			
	


		}

	}
</script>

<style scoped>
	/* 抽奖 */
	.luck-list {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}

	.cell-item {
		width: 150rpx;
		height: 158rpx;
		border-radius: 30rpx;
		margin: 5rpx;
	}

	.cell-content {
		width: 150rpx;
		height: 138rpx;
		border-radius: 30rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.w {
		background-color: #fdf2ee;
	}

	.w-b {
		background-color: #f8d0c3;
	}

	.y {
		background-color: #fee610;
	}

	.y-b {
		background-color: #EFCD22;
	}

	.dk-bg-touming {
		padding: 5px 10px;
		border-radius: 2500px;
		background-color: rgba(8, 8, 8, 0.26);
	}

	.fangda {
		animation: mymove 2s infinite;
		animation-fill-mode: forwards;
	}

	@keyframes mymove {

		//滑动出来1s 停留展示1s
		0% {
			transform: scale(1);
			-webkit-transform: scale();
			display: none;
		}

		80% {
			transform: scale(1.58);
			-webkit-transform: scale(1.58);
		}

		100% {
			transform: scale(1);
			-webkit-transform: scale(1);
			display: none;
		}
	}



	.list-icon-text,
	.list-image-text {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.list-image-text {
		
	}

	.message {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;

		


	}
</style>
