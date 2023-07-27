<template>

	<view class="bottom-emoji ">
		
		<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-sm">
			<view class="beijing "	>
				<view class="tn-flex tn-flex-row-center">
					
					<view class="tn-flex tn-flex-row-center tn-flex-col-center" >
						<tn-button shape="round" backgroundColor="#505050" fontColor="#ffffff" @click="quanmai()" v-if="gift_userid==0">
						全麦
						</tn-button>
						<view class="tn-flex tn-flex-wrap tn-margin-left-sm tn-margin-bottom-sm tn-margin-right-sm">
							<block  v-for="(item, indexuserd) in gifmalist" :key="indexuserd" v-if="item.id>0">
												<view class=""  style="margin-left: 5px;">												
													<view  style="position: relative;" class="tn-flex tn-flex-row-center tn-padding-top tn-text-bold" @click="xuanzhong(indexuserd)">
													<tn-avatar badgeBgColor="#00aa00" class="" shape="circle" :src="item.avatar" size="sm">
													</tn-avatar>
							<text class="tn-icon-success tn-text-sm tn-color-green" style="right: 3px;
							position: absolute;
							bottom: 0px;
							font-size: 20px;
							z-index: 1;" v-if="item.nickname=='选中'">							
													</text>	
													</view>
													
													<view class="tn-flex tn-flex-row-center tn-text-bold" style="margin-top:1px;">
													<text class="" style="font-size: 12px;color: #00dcdc;" v-if="indexuserd>0">{{indexuserd}}麦</text>						
													<text class="" style="font-size: 12px;color: #00dcdc;" v-if="indexuserd==0&&gift_userid==0">主播</text>						
													<text class="" style="font-size: 12px;color: #00dcdc;" v-if="indexuserd==0&&gift_userid>0">{{item.name}}</text>						
																		
													</view>
												</view>
											
											</block>
						</view>
					</view>
					
				</view>
			</view>
			
		</view>

		<view class="emojis">
			<view class="emoji-tab">
			
				<tn-tabs :list="content" activeColor="#00ffff" inactiveColor="#ffffff" :current="emojiindex"
					@change="tabChange" :showBar="true" :bold="true"></tn-tabs>
			</view>
		
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
					{{configInfo.site_moneyname}} {{money}}
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
			<scroll-view class="" scroll-y scroll-with-animation style="height: 400px;">

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


	<tn-modal width="80%" v-model="show_shenqingren" backgroundColor="#E4E9EC" padding="30rpx 80rpx" :radius="25"
			title="提示" content="请选择接收人" :showCloseBtn="true" :maskCloseable="true" :zoom="true"
			:custom="false" @click="clickBtn_shenqing">

		</tn-modal>


	</view>
</template>

<script>
	export default {
			props: ['gift_userid', 'mailistgift'],
	

		data() {
			return {				
				cardCur:0,
				show_shenqingren:false,
				money:0,
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
				swiperActiveColor: '#ffff00',
				swiperColor: '#999999',
				giftlist: [],	
				giftlistzong:0,
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
				gifmalist:[],
				shuliang: 1	,
				quanmxuan:false,
				yeshu:0
			}
		},



		mounted() {			

			 // #ifdef APP||H5
			 let str = decodeURIComponent(this.mailistgift || [])
			 this.gifmalist=JSON.parse(str)				
			  this.gifmalist[0].nickname='选中'  
			 // #endif
			// #ifdef MP			
		console.log(134567,this.mailistgift)
			this.gifmalist=this.mailistgift	
			this.gifmalist.push({"nickname":"选中"});		
			// this.gifmalist[0].nickname='选中' 	
				 console.log( 22222,this.gifmalist)
			// #endif
		 
			 this.info()			
			this.chongzhtitle=this.configInfo.site_moneyname+'不足'					
		},

		methods: {
			
			xuanzhong(index){
			  if (this.gifmalist[index].nickname=='选中'){
				  this.gifmalist[index].nickname='取消'  
			  }else{
				this.gifmalist[index].nickname='选中'  
			  }
			  
			},
			
			quanmai(){
				this.quanmxuan=!this.quanmxuan
				for (let i in this.gifmalist) {
						if (this.quanmxuan){
						 this.gifmalist[i].nickname='取消'  
						}else{
						this.gifmalist[i].nickname='选中'  
						}
				}
				
			},			
			
			clickBtn_shenqing(res) {
			this.show_shenqingren=false	
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
					url: '/api/gift/liwulist_chat',
					data: {
						user_id: 0
					}
				});


				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						console.log()
						that.content = result.data.data;
						that.money=result.data.data[0].money;
						that.giftlist = result.data.data[0].data
						that.giftlistzong=that.giftlist.length
						if (that.giftlistzong==0){
						that.yeshu=0	
						}else{
						that.yeshu=Math.ceil(that.giftlistzong/8)-1	
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


			},

			tabChange(e) {
				this.cardCur=0	
				this.leixingcudin = 0
				this.emojiindex = e
				this.giftlist = this.content[e].data
				this.giftlistzong=this.giftlist.length
				if (this.giftlistzong==0){
				this.yeshu=0	
				}else{
				this.yeshu=Math.ceil(this.giftlistzong/8)-1	
				}
				
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
					
				let ss = ''
				let ssnum =0
				for (let i in this.gifmalist) {
					if (this.gifmalist[i].nickname=='选中') {
						ssnum++
						ss += this.gifmalist[i].id + '@'
					}				
				}
				ss = ss.slice(0, ss.length - 1);	
				
				if (ssnum<1){
					console.log(ssnum)
				this.show_shenqingren=true
				return
				}	
							
				if (this.money<this.shuliang*this.giftlist[this.leixingcudin].money*ssnum){
				this.show_shenqing=true
				return
				}		
				
				let url
				if (this.giftlist[this.leixingcudin].bag==0){
					url="/api/gift/giftfouserchat"
				}else{
					url="/api/gift/giftfouserchat_bag"
				}
				
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: url,
					data: {
						ssnum:ssnum,
						user_id: ss,
						num:this.shuliang,
						gift_id:this.giftlist[this.leixingcudin].id,
						gift_title:this.giftlist[this.leixingcudin].title,
						gift_money:this.giftlist[this.leixingcudin].money,
						gift_image:this.giftlist[this.leixingcudin].image,
						gift_bag:this.giftlist[this.leixingcudin].bag
						
					}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {					
					that.$store.commit('setmoney',result.data.data.usermoney);
					that.money=result.data.data.usermoney
					if (that.giftlist[that.leixingcudin].svga){						
						uni.$emit('liwuguangbo',{type:'svga',giftnum:that.shuliang,giftname:that.giftlist[that.leixingcudin].title,url:that.giftlist[that.leixingcudin].svga})
						uni.$emit('liwuoksvga_chat',{type:'svga',giftnum:that.shuliang,giftname:that.giftlist[that.leixingcudin].title,url:that.giftlist[that.leixingcudin].svga})
						}
						else
						{
						uni.$emit('liwuguangbo',{type:'img',giftnum:that.shuliang,giftname:that.giftlist[that.leixingcudin].title,url:that.giftlist[that.leixingcudin].image})	
						uni.$emit('liwuok_chat',{type:'img',giftnum:that.shuliang,giftname:that.giftlist[that.leixingcudin].title,url:that.giftlist[that.leixingcudin].image})	
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
		bottom: 35px;
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
		padding: 10px;
		background-color: rgb(80, 80, 80);
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
