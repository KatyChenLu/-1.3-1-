<template>

	<view class="bottom-emoji ">
		<view class="emoji-tab">

			<tn-tabs :list="content" activeColor="#00ffff" inactiveColor="#ffffff" :current="emojiindex"
				@change="tabChange" :showBar="true" :bold="true"></tn-tabs>
		</view>

		<view class="emojis">


				<scroll-view class="" scroll-y scroll-with-animation style="height:400rpx;">
					<view class="swiper-item"> 
						<view :class="[{'tn-shadow-blurddd': leixingcudin === indexdsdsd}]" class="swiper-item-view"
							v-for="(item, indexdsdsd) in giftlist" :key="indexdsdsd" 
							@click="clickItem(item,indexdsdsd)">
							
						<image class="" :src="item.image" style="width: 150upx;
						height: 100upx;" mode="widthFix" v-if="emojiindex==3"></image>
						<image class="" :src="item.image" style="width: 80upx;
						height: 100upx;" mode="heightFix" v-else></image>
						
							<text class="" style="color: #ffff00;">{{ item.title }}</text>
							<text style="font-size: 12px;color: #00ffff;" v-if="item.num>0">x {{item.num}}</text>
							<text style="font-size: 12px;color: #00ffff;" v-else>{{ item.money }}{{configInfo.site_moneyname}}</text>	
						</view>
					</view>
					<view class="swiper-item" style="color: aliceblue; padding:100px 40%;"  v-if="giftlist.length==0">
					空空如也~~
					</view>
						</scroll-view>
		
		</view>

		<view class="input-box">
			<view class="voice ">
				<view class="tn-text-left tn-color-white" @click="navigateToFn({ url: '/minePages/gift/chongzhi', checkLogin: true })">
					{{configInfo.site_moneyname}} {{my_money}}
					<text class="tn-icon-right" style="margin-left: 5px;"></text>
				</view>
			</view>

			<view class="send ">
				<view class="btn" style="justify-content: space-between;">
					<view class=" tn-icon-up tn-color-white" style="margin-left:8px;" @click="shuliangxiucick()">
					</view>
					<view class=" tn-color-white" style="padding: 10px 20px 10px 20px;" @click="shuliangxiucick()">
						{{shuliang}}</view>
					<view class="btn_dd" @click="zengsong">
						赠送
					</view>
				</view>
			</view>
		</view>


		<view class="tn-padding-right xuanfuyou" v-if="shuliangxiu">
			<scroll-view class="" scroll-y scroll-with-animation style="height: 180px;">

				<view class="tn-flex tn-flex-wrap">
					<view class="dk-ban" v-for="(item, indexsdsd) in shuliang_list" :key="indexsdsd"
						:class="[{'tn-shadow-blurdddssd': shuzixuanzhong === indexsdsd}]"
						@click="pickerColorClickleid(indexsdsd,item)">
						<view class="dk-bantext">
							{{item.num}} {{item.name}}
						</view>
					</view>

				</view>


			</scroll-view>
		</view>


	<tn-modal width="80%" v-model="show_shenqing" backgroundColor="#E4E9EC" padding="30rpx 80rpx" :radius="25"
			:title="chongzhtitle" :button="button" :showCloseBtn="false" :maskCloseable="false" :zoom="true"
			:custom="false" @click="clickBtn_shenqing">

		</tn-modal>




	</view>
</template>

<script>
	export default {
		props: {
			user_id: {
				type: Number,
			 default: 0
			},
			yemian: {//1为私人聊天
			type: Number,
			 default: 0
			}
		},

		data() {
			return {
				cardCur:0,
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
				show_shenqing:false,
				shuliangxiu: false,
				shuzixuanzhong: 0,
				leixingcudin: 0,
				swiperCurrent: 0,
				chongzhtitle:'',
				swiperActiveColor: '#FFCC00',
				swiperColor: '#999999',
				giftlist: [],		
				shuliang_list: [{
						"num": 1,
						"name": "一心一意"
					},
					{
						"num": 2,
						"name": "好事成双"
					},
					{
						"num": 6,
						"name": "六六大顺"
					},
					{
						"num": 10,
						"name": "十全十美"
					},
					{
						"num": 20,
						"name": "就是爱你"
					},
					{
						"num": 99,
						"name": "天长地久"
					}
				],
				emojiindex: 0,
				content: [],
				shuliang: 1
			}
		},



		mounted() {
			this.info()
		
			this.chongzhtitle=this.configInfo.site_moneyname+'不足'
		
		},

		methods: {
			clickBtn_shenqing(res) {
				
				if (res == 1) {		
			this.show_shenqing=false		
			this.navigateToFn({ url: '/minePages/gift/chongzhi', checkLogin: true })
				}else{
			this.show_shenqing=false		
				}
			},
			shuliangxiucick() {
				this.shuliangxiu = !this.shuliangxiu
			},

			pickerColorClickleid(index, item) {
				this.shuzixuanzhong = index
				this.shuliang = item.num
				this.shuliangxiucick()
			},
			async info() {
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/gift/liwulist',
					data: {
						user_id: 0
					}
				});


				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						that.content = result.data.data;
						that.giftlist = result.data.data[0].data
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

			tabChange(e) {
		
				this.cardCur=0		
				this.leixingcudin = 0
				this.emojiindex = e				
				this.giftlist = this.content[e].data
			},
	
			clickItem(item, index) {
				this.leixingcudin = index
			},
			// 图片自动切换时触发
			change(event) {			
				const current = event.detail.current
				this.swiperCurrent = current
				this.cardCur=current
				
			},
			async zengsong() {
				let that = this;				
				if (!uni.getStorageSync('token')){
					this.msg('请登录')
					return
				}			
							
							
				if (this.$store.state.my_money<this.shuliang*this.giftlist[this.leixingcudin].money){
				this.show_shenqing=true
				return
				}		
				
				let url
				if (this.giftlist[this.leixingcudin].type==666){
					url="/api/gift/giftfouser_bag"
				}else{
					url="/api/gift/giftfouser"
				}
			
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: url,
					data: {
						user_id: this.user_id,
						num:this.shuliang,
						gift_id:this.giftlist[this.leixingcudin].id,
						gift_title:this.giftlist[this.leixingcudin].title,
						gift_money:this.giftlist[this.leixingcudin].money,
						gift_image:this.giftlist[this.leixingcudin].image
						
					}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {					
					that.$store.commit('setmoney',result.data.data.usermoney);
						let giftlist=that.giftlist[that.leixingcudin]
							giftlist.title=that.shuliang+'个'+giftlist.title
					if (that.giftlist[that.leixingcudin].svga){						
							if (that.yemian){
								console.log('赠送开始发送监听liwuoksvga_talk')												
								uni.$emit('liwuoksvga_talk',giftlist)	
							}else{
								uni.$emit('liwuoksvga',that.giftlist[that.leixingcudin].svga)		
							}
											
						}
						else
						{
							 if (that.yemian){
								 uni.$emit('liwuok_talk',giftlist)	
							 }
							 else{
								uni.$emit('liwuok',that.giftlist[that.leixingcudin].image)	
								}
						
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
						title: that.$errorMsg
					});
				}
			}
			
			
			
			

		}
	};
</script>


<style scoped lang="scss">
	.xuanfuyou {
		z-index: 200741;
		position: fixed;
		bottom:  50px;
		right: 40px;
		width: 120px;
	}

	.xunzhang {
		width: 20px;
	}

	.blogger__desc__label--prefix {
		color: #00FFC8;
		padding-right: 5px;
	}

	.blogger__desc__label {
		height: 24px;
		padding: 4px 6px;
		margin: 5px 9px 0 0;
	}

	.blogger__item {
		padding: 15px;
	}

	.blogger__main-image--2 {
		max-width: 130px;
		max-height: 130px;
	}

	.blogger__main-image--3 {
		height: 106px;
		width: 100%;
	}

	.blogger__main-image {
		border-radius: 8px;
	}

	.blogger__main-image--1 {
		max-width: 80%;
		max-height: 150px;
	}

	.bottom-emoji {
		position: relative;

		.emojis {

			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			overflow-y: scroll;
			box-sizing: border-box;

			.emoji {
				width: 25%;
				padding: 8px;
				box-sizing: border-box;
			}

			.bigemoji {
				height: 20vw;
				width: 20vw;
				padding: 10px;
				box-sizing: border-box;
			}
		}
	}

	.emoji-tab {
		box-sizing: border-box;

	}

	.bottom-image {
		box-sizing: border-box;

		.images {
			box-sizing: border-box;
			display: flex;
			padding: 0 12px;
			margin-top: 16px;

			&:last-child {
				margin-bottom: 16px;
			}

			.block {
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin: 0 12px;

				.name {
					margin-top: 6px;
					font-size: 12px;
					color: #000000;
					text-align: center;
				}

				.image {
					width: 64px;
					height: 64px;
					display: flex;
					justify-content: center;
					align-items: center;
					box-sizing: border-box;
					border-radius: 8px;
					background-color: white;
					padding: 3vw;
				}

				.icon {
					width: 26px;
					height: 26px;
				}
			}
		}
	}

	.tn-shadow-blurddd {
	margin: 10px;
	padding:0px;
	background-color: rgba(22, 22, 22, 0.5);
	}

	.swiper {
		width: 100%;
		height: 410upx;
		padding-top: 20upx;
	}

	.swiper-item {
		display: flex;
		flex-wrap: wrap;
	}

	.swiper-item-view {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 23%; 
		margin-top:5px;
		height: 180upx;
	}

	.swiper-imgdd {
		width: 80upx;
		height: 80upx;
	}

	/* 轮播圆点样式修改 */
	.dots {
		position: absolute;
		left: 0;
		right: 0;
		bottom: -20px;
		display: flex;
		justify-content: center;
	}

	.dots .dot {
		margin: 0 5upx;
		width: 40upx;
		height: 6upx;
		border-radius: 20%;
		transition: all 0.6s;
	}

	.dots .dot.active {
		width: 40upx;
	}

	.input-box {
		text-align: center;
		align-items: center;
		width: 100vw;
		min-height: 100upx;
		padding: 0 1%;
		justify-content: space-between;
		display: flex;
		position: fixed;
		z-index: 120;
		bottom: -2upx;

		.voice {

			width: 140px;
			padding: 10px;
		}

		.send {
			//H5发送按钮左边距
			/* #ifdef H5 */
			margin-left: 20upx;
			/* #endif */
			flex-shrink: 0;
			width: 40%;
			height: 100upx;
			display: flex;
			align-items: center;

			.btn_dd {
				font-weight: bold;
				border-radius: 2500px !important;
				width: 100%;
				height: 56upx;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: #ffff00;
				color: #000000;
				border-radius: 6upx;
				font-size: 24upx;
			}

			.btn {
				font-weight: bold;
				border-radius: 2500px !important;
				width: 100%;
				height: 56upx;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: #9f9f9f;
				color: #000000;
				border-radius: 6upx;
				font-size: 24upx;
			}
		}


	}


	.dk-ban {
		margin: 5px;
		width: 130px;
		border-radius: 0.3125rem;
		background-color: #636363;

	}

	.dk-bantext {
		font-size: 12px;
		background: rgba(216, 216, 216, 0.08);
		border-right: 0.0625rem solid rgba(255, 255, 255, 0.1);
		height: 2rem;
		line-height: 2rem;
		text-align: center;
		cursor: pointer;
		padding: 0px 10px;
	}


	.tn-shadow-blurdddssd {
		background-color: #ffff00;
		color: #000000;
	}
</style>
