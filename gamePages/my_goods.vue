<template>
	<view class="template-mine tn-safe-area-inset-bottom">

		<tn-nav-bar fixed :bottomShadow="false">
			陪陪中心
		</tn-nav-bar>
		 <mescroll-body ref="mescrollRef" @down="downCallback" @up="upCallback">
		<view class="tn-padding" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<!-- 更多信息-->
			<view class="about-shadow tn-padding-top-sm tn-padding-bottom-sm tn-bg-white" >


<view class="  tn-cool-bg-color-6 " style="border-radius: 10px 10px 10px 10px;">
					<!-- 更多信息-->
					<view class="tn-padding-top-sm">
			
						<view class="tn-flex tn-flex-row-between" @click="tipshow=true">
							<view class="justify-content-item tn-margin-sm " style="color: #dddddd;">
								可提现{{infouser.gift_name}}
								 <text class="tn-icon-help tn-margin-left" ></text>
							</view>	
								<view class="justify-content-item tn-margin-sm tn-margin-right  " @click="navigateToFn({ url: '/minePages/money_log_shouru', checkLogin: true })"	>
									
									<tn-tag shape="circle" backgroundColor="tn-main-gradient-purple--light"   margin="10rpx" width="150rpx">
									收入明细
									</tn-tag>
								</view>					
											
												
												
						</view>
			
						<view class="tn-flex tn-flex-row-between tn-flex-col-center  "
							style="width:100%;border-radius: 15rpx  15rpx  0rpx  0rpx;">
							<view class="justify-content-item tn-margin-left">
								<view class="tn-text-bold tn-padding-bottom-xs" style="font-size:60rpx;">							
							{{infouser.gift_money}}
								</view>
							</view>
							<view class="justify-content-item tn-margin " 
								@click="navigateToFn({ url: '/minePages/shouru', checkLogin: true })">
								<tn-tag shape="circle" backgroundColor="#FFF420" fontColor="#080808"  margin="10rpx" width="150rpx">
								提现
								</tn-tag>
							</view>
						</view>						
					</view>
			</view>	
				
				<view class="adver-wrap tn-bg-white">
					<view class=" tn-margin-top  tn-padding-bottom-sm">

						<view class="tn-flex tn-margin-left-sm tn-margin-right-sm tn-margin-top">


							<view class="tn-flex-1 tn-padding-sm tn-radius" >
								<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
									<view
										class="icon11__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur">
										<view>{{infouser.money_total}}</view>
									</view>
									<view class="tn-color-black tn-text-df tn-text-center ">
										<text class="tn-text-ellipsis">总收入</text>
									</view>
								</view>
							</view>						

							<view class="tn-flex-1 tn-padding-sm tn-radius">
								<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
									<view
										class="icon11__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur">
										<view>{{infouser.tixianzhong}}</view>
									</view>
									<view class="tn-color-black tn-text-df tn-text-center ">
										<text class="tn-text-ellipsis">提现中</text>
									</view>
								</view>
							</view>

							<view class="tn-flex-1 tn-padding-sm tn-radius" @click="jinru(item)">
								<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
									<view
										class="icon11__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur">
										<view>{{infouser.yitixian}}</view>
									</view>
									<view class="tn-color-black tn-text-df tn-text-center ">
										<text class="tn-text-ellipsis">已提现</text>
									</view>
								</view>
							</view>


						</view>

					</view>
				</view>

				<view class="" v-if="infouser.team_id">
					<view class="tn-flex tn-flex-row-between">
						<view class="justify-content-item tn-margin tn-text-bold tn-text-xl">
							所属工会：{{infouser.teamname}}
						</view>
						
					</view>
				</view>
				<view class="" v-else>
					<view class="tn-flex tn-flex-row-between">
						<view class="justify-content-item  ">
						<view class=" tn-margin-left tn-bg-gray--light" style="border-radius: 10rpx;padding: 20rpx 5rpx;">
							<input placeholder="请输入工会名称" name="input" v-model="gonghui" placeholder-style="color:#AAAAAA"></input>
						</view>
						</view>
						<view class="tn-margin-right" @click="teampass">							
								<tn-button size="sm" :shadow="true" width="100%" backgroundColor="tn-bg-green"
									height="60rpx" margin="10rpx 0" @click="shezhishow=true">加入工会</tn-button>
							
						</view>
					</view>
				</view>
				
				
				
			</view>




		</view>
		
	


		<view class="about-shadow tn-padding-top-sm tn-padding-bottom-sm tn-bg-white">


			<view class="adver-wrap tn-bg-white">
				<view class=" tn-margin-top  tn-padding-bottom-sm">
					<view class="tn-flex tn-margin-left-sm tn-margin-right-sm tn-margin-top">
						<view class="tn-flex-1 tn-padding-sm tn-radius" @click="navigateToFn({ url: '/gamePages/my_order_fuwu?type=2', checkLogin: true })">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
								<view
									class="icon12__item--icon  tn-bg-red--light tn-color-purplered   tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur">
									<view class="tn-icon-data"></view>
								</view>
								<view class="tn-color-black tn-text-df tn-text-center ">
									<text class="tn-text-ellipsis">我的服务订单</text>
								</view>
							</view>
						</view>
<!-- 
						<view class="tn-flex-1 tn-padding-sm tn-radius" @click="navigateToFn({ url: '/minePages/fenxiao/money_log', checkLogin: true })">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
								<view
									class="icon12__item--icon  tn-bg-red--light tn-color-blue   tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur">
									<view class="tn-icon-money"></view>
								</view>
								<view class="tn-color-black tn-text-df tn-text-center ">
									<text class="tn-text-ellipsis">分销佣金</text>
								</view>
							</view>
						</view>
 -->

					</view>
					
				</view>
			</view>
		</view>
		
		
		<tn-modal width="80%" v-model="addshow" backgroundColor="#ffffff" padding="30rpx 20rpx" :radius="25"
			title="设置" :showCloseBtn="false"  :maskCloseable="true" :zoom="true" :custom="true">
		
			<view class="custom-modal-content tn-padding-sm ">
				<view class="tn-text-left tn-color-black" style="font-size: 14px;">
				请认真填写
				</view>			
				<view class="tn-bg-gray--light "
					style=" margin-top:8px; border-radius: 10rpx;padding: 20rpx 30rpx;">
				
					<view class="tn-margin-bottom-sm tn-text-bold">服务类型：<text class="tn-text-sm tn-color-gray">已审核的类型</text></view>
					<view class="tn-color-black" >
					<tn-radio-group @change="getgameid">
						<tn-radio :name="ganelisindex" v-for="(item,ganelisindex) in gameclass" :key="ganelisindex">{{item.game_title}}</tn-radio>
					</tn-radio-group>
					</view>					
				</view>
				<view class="tn-bg-gray--light "
					style=" margin-top:8px; border-radius: 10rpx;padding: 20rpx 30rpx;">
					<view class="tn-margin-bottom-sm tn-text-bold">特色：<text class="tn-text-sm tn-color-gray">(可填写段位、声音特色等)</text></view>
					<input placeholder="5字内" type="text" maxlength="5" v-model="duanwei" placeholder-style="color:#343434"
						style="font-size: 14px;color: #000;"></input>
				</view>
				<view class="tn-bg-gray--light "
					style=" margin-top:8px; border-radius: 10rpx;padding: 20rpx 30rpx;">
					<view class="tn-margin-bottom-sm tn-text-bold">价格：<text class="tn-text-sm tn-color-gray">({{configInfo.site_moneyname}})</text></view>
					<input placeholder="请输入价格" type="number" v-model="price" placeholder-style="color:#343434"
						style="font-size: 14px;color: #000;"></input>
				</view>
				<view class="tn-bg-gray--light "
					style=" margin-top:8px; border-radius: 10rpx;padding: 20rpx 30rpx;">
					<view class="tn-margin-bottom-sm tn-text-bold">单位：<text class="tn-text-sm tn-color-gray">（局/小时/天）</text></view>
					<input placeholder="请输入单位" type="text" v-model="danwei" placeholder-style="color:#343434"
						style="font-size: 14px;color: #000;"></input>
					
				</view>
				
				
				<view class="tn-text-center tn-padding-top" @click="xiugairoom()">
					<tn-button :fontSize="28" padding="20rpx" height="56rpx" fontColor="#080808"
						backgroundColor="rgb(255, 240, 13)">提交</tn-button>
				</view>
		
			</view>
		</tn-modal>
		 
		 <tn-modal width="80%" v-model="exitshow" backgroundColor="#ffffff" padding="30rpx 20rpx" :radius="25"
		 	title="设置" :showCloseBtn="false"  :maskCloseable="true" :zoom="true" :custom="true">
		 
		 	<view class="custom-modal-content tn-padding-sm ">
		 		<view class="tn-text-left tn-color-black" style="font-size: 14px;">
		 		修改{{item.game_title}}服务
		 		</view>			
		 
		 		<view class="tn-bg-gray--light "
		 			style=" margin-top:8px; border-radius: 10rpx;padding: 20rpx 30rpx;">
		 			<view class="tn-margin-bottom-sm tn-text-bold">特色：<text class="tn-text-sm tn-color-gray">(可填写段位、声音特色等)</text></view>
		 			<input placeholder="请输入" type="text" v-model="item.duanwei" placeholder-style="color:#343434"
		 				style="font-size: 14px;color: #000;"></input>
		 		</view>
		 		<view class="tn-bg-gray--light "
		 			style=" margin-top:8px; border-radius: 10rpx;padding: 20rpx 30rpx;">
		 			<view class="tn-margin-bottom-sm tn-text-bold">价格：<text class="tn-text-sm tn-color-gray">({{configInfo.site_moneyname}})</text></view>
		 			<input placeholder="请输入价格" type="number" v-model="item.price" placeholder-style="color:#343434"
		 				style="font-size: 14px;color: #000;"></input>
		 		</view>
		 		<view class="tn-bg-gray--light "
		 			style=" margin-top:8px; border-radius: 10rpx;padding: 20rpx 30rpx;">
		 			<view class="tn-margin-bottom-sm tn-text-bold">单位：<text class="tn-text-sm tn-color-gray">（局/小时/天）</text></view>
		 			<input placeholder="请输入单位" type="text" v-model="item.danwei" placeholder-style="color:#343434"
		 				style="font-size: 14px;color: #000;"></input>
		 			
		 		</view>
		 		
		 		
		 		<view class="tn-text-center tn-padding-top" @click="xiugaixiugai()">
		 			<tn-button :fontSize="28" padding="20rpx" height="56rpx" fontColor="#080808"
		 				backgroundColor="rgb(255, 240, 13)">提交</tn-button>
		 		</view>
		 
		 	</view>
		 </tn-modal>
		 
		<view class="tn-p" >
							<view class="tn-flex tn-flex-row-between">
								<view class="justify-content-item tn-margin tn-text-bold tn-text-xl">
									我的服务
								</view>
		<view class="tn-margin"  @click="addshow=true">
		  
		  <tn-button fontColor="#000000" :shadow="true" backgroundColor="tn-bg-yellow"   shape="round" padding="20rpx 20rpx" width="180rpx" shadow fontBold >
		    	 <text >添加服务</text>
		  </tn-button>
		</view>
							</view>
						</view>
						
	
	<view v-if="gamelist.length>0" class="tn-flex tn-flex-col-top  tn-cat-shadow tn-padding"  v-for="(item,index) in gamelist" :key="index">
	  <view class="" @click="navigateToFn({ url: '/circlePages/blogger_other?id='+item.id, checkLogin: true })">
	    <view class="logo-pic tn-shadow">
	    <tn-avatar size="80rpx" :src="item.game_image"></tn-avatar>
	    </view>
	  </view>
	  <view class="tn-padding-left-sm tn-text-ellipsis" style="width: 100%;">
	    <view class="tn-flex tn-flex-row-between tn-flex-col-between">
	      <view class="justify-content-item" @click="navigateToFn({ url: '/circlePages/blogger_other?id='+item.id, checkLogin: true })">
	        <text class="tn-color-cat tn-text-lg tn-text-bold">{{item.game_title}}</text>
	        <text class="tn-color-gray tn-padding-left-sm tn-padding-right-xs">{{item.duanwei}}</text>
					<view class=" tn-padding-top-xs ">
					  <text class="tn-color-gray ">{{configInfo.site_moneyname}}{{item.price}}/{{item.danwei}}</text>
					</view>			
	      </view>
	      <view class="justify-content-item tn-round tn-text-xs  tn-color-white" style="padding: 10rpx 20rpx;" >
				 <view>
				<tn-tag  backgroundColor="tn-bg-red" fontColor="tn-color-white" shape="circle"
					width="auto" size="sm" style="margin-left: 15px;" @click="del(index,item.id)">
				删除</tn-tag>
				</view>
				 <view class="tn-margin-top-sm">
				<tn-tag  backgroundColor="tn-bg-red" fontColor="tn-color-white" shape="circle"
					width="auto" size="sm" style="margin-left: 15px;" @click="exit(item)">
				修改</tn-tag>
				</view>
	      </view>
		 
	    </view>
	   	   
	  </view>
	</view>
	
	<tn-empty icon="/static/images/no.png" text="暂无服务,请添加服务!" v-else>
	
	</tn-empty>

		<!-- 登录框组件 -->
		<login-fn :is-show-login="loginBoxFlag" @loginSuccessCallback="refreshFn" @close="closeGlobalLoginFn">
		</login-fn>
	</mescroll-body>
	</view>
</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	import MescrollBody from '@/components/mescroll-uni/mescroll-body.vue';
	import MescrollUni from '@/components/mescroll-uni/mescroll-uni.vue';
	import MescrollMixin from '@/components/mescroll-uni/mescroll-mixins.js';
	export default {
		name: 'TemplateGroup',
		mixins: [template_page_mixin, MescrollMixin],
		components: {
			MescrollBody
		},
		data() {
			return {
				gonghui:'',
				exitshow:false,
				item:[],
				gameid:0,
				type:0,
				duanwei:'',
				danwei:'',
				price:'',
				
				gamelist:[],
				gameclass:[],		
				addshow:false,
				shouhuxiu:false,
				ti_kano:'',
				ti_name:'',
				ti_money:'',
				news: [],
				loginis: '',
				shezhishow: false,
				loading: true,
				loginBoxFlag: false, // 登录框显示隐藏状态
				id: 0,
				baifenbi: 0,
				chajifen: 0,
				latitude:"",
				longitude:"",							
				body: [],
				infouser:[],
				historyData: [
				]
			}
		},

		onLoad() {
		   	
		uni.$on("querenjidan",async (res)=>{		
		    	this.info()
				
		  })		
			
		this.juli()
		},
	
	
	
		methods: {
			
			
			juli(){
				let that = this			
					this.content = []
					// #ifdef APP-PLUS||H5		
					uni.getLocation({
						type: 'gcj02',
						geocode: true,
						success: function(res) {
							
							that.latitude=res.latitude
							that.longitude=res.longitude
							that.info()
						},
						fail: function(res) {
							that.info()
							console.log(res)
						}
					});
					// #endif
			
					// #ifdef MP		
					wx.getFuzzyLocation({
						type: 'wgs84',
						success(res) {					
							that.latitude=res.latitude
							that.longitude=res.longitude				
						that.info()
						}
					})
					// #endif		
			},
			
			getgameid(e) {			
				this.gameid =e			
			},
			getsex(e) {
				this.danwei = e
			},
			downCallback(mescroll) {
			mescroll.endSuccess();
			this.info()
			},
			
			exit(item){
				this.item=item
				this.exitshow=true
			},
			
			async  teampass(){
				let that = this;				
				if (!this.gonghui){
					this.msg('请输入工会名称');
					return
				}
				let result = await that.$request({
					loading:0,
					method: 'post',
					url: '/api/games/team_add',
					data: {		  			
						title:this.gonghui					
					}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {					
						this.msg('加入成功')				
						this.info()						
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
			
			async  xiugaixiugai(){
				let that = this;
				
				if (!this.item.price){
					this.msg('请输入价格');
					return
				}
				if (!this.item.duanwei){
					this.msg('请填写特色');
					return
				}	
				if (!this.item.danwei){
					this.msg('请填写单位');
					return
				}				
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/games/edit_goods',
					data: {		  			
						id:this.item.id,
						price:this.item.price,
						type:this.item.type,
						duanwei:this.item.duanwei,
						danwei:this.item.danwei,
					}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						this.exitshow=false
						this.item=[]
						this.msg('修改成功')				
						this.info()
						
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
			
			
			async xiugairoom(){				
				let that = this;
			
				if (!this.gameclass[this.gameid].id){
					this.msg('请选择服务类型');
					return
				}
				if (!this.duanwei){
					this.msg('请填写特色');
					return
				}	
				if (!this.price){
					this.msg('请输入价格');
					return
				}
				if (!this.danwei){
					this.msg('请填写单位');
					return
				}
			
				
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/games/add',
					data: {		  			
						game_id:this.gameclass[this.gameid].game_id,
						price:this.price,
						type:this.gameclass[this.gameid].type,
						duanwei:this.duanwei,
						danwei:this.danwei,
					}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						this.addshow=false
						this.msg('添加成功')				
						this.info()
						
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
		async upCallback(mescroll) {
			
			mescroll.endErr()
			return
			},
			async info(mescroll) {
				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/games/userIndex',
					data: {	
						lat:this.latitude,						
						lng:this.longitude
					}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						that.body = result.data.data;
						that.gameclass = result.data.data.game;
						that.gamelist = result.data.data.list;
						that.infouser= result.data.data.info;
						that.mescroll.endErr();							
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
			
			
			
			del(index,id){
				let that = this
				
				uni.showModal({
					title: '提示',
					content: '确认删除吗?',
					confirmText: '确定',
					success: function(res) {
						if (res.confirm) {
							that.getchuli(index,id)
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
				
			},
			
			
			
			async getchuli(index,id) {
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/games/delGoods',
					data: {					
					  id:id
					}
				});
			     
			     
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						this.msg('删除成功')
								this.gamelist.splice(index, 1);
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
			
			
			jinru(item) {
				this.navigateToFn({
					url: item.url,
					checkLogin: item.login
				})
			},
			refreshFn() {
				this.infobody()
			},
			
			dianhua(){
				uni.makePhoneCall({
				phoneNumber:this.configInfo.mobile,//电话号码
				success:function(e){
					console.log(e);
				},
				fail:function(e){
					console.log(e);

				}
			})
			},
			
			out() {
				let that = this
				uni.showModal({
					title: '提示',
					content: '确认退出账号吗?',
					confirmText: '确定',
					success: function(res) {
						if (res.confirm) {
							that.logOutFn();
							that.body.lv = 0
							uni.reLaunch({
								url: '/pages/index'
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},






			/// 列表调用
			myhome() {
				this.navigateToFn({
					url: '/circlePages/blogger_other?id=' + uni.getStorageSync('user_id'),
					checkLogin: true
				})
			},


			// 关闭压屏窗
			closeLandscape() {
				this.show_fabu = false
			}



		}
	}
</script>

<style lang="scss" scoped>
	.meng {}

	.icon11 {
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
				height: 50rpx;
				font-size: 20px;
				border-radius: 50%;
				margin-bottom: 2rpx;
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
					background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg.png);
				}
			}
		}
	}

	.icon12 {
		&__item {
			width: 33%;
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
				font-size: 20px;
				border-radius: 50%;
				margin-bottom: 2rpx;
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
					background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg.png);
				}
			}
		}
	}


	.template-mine {
		max-height: 100vh;
	}

	.tn-tabbar-height {
		min-height: 120rpx;
		height: calc(140rpx + env(safe-area-inset-bottom) / 2);
	}

	/* 自定义导航栏内容 start */
	.custom-nav {
		height: 100%;

		&__back {
			margin: auto 5rpx;
			font-size: 40rpx;
			margin-right: 10rpx;
			flex-basis: 5%;
			width: 100rpx;
			position: absolute;
		}
	}

	/* 自定义导航栏内容 end */

	/* 顶部背景图 start */
	.top-backgroup {


		height: 380rpx;
		z-index: -1;

		.backgroud-image {
			width: 100%;
			height: 250rpx;
			// z-index: -1;
		}
	}

	/* 顶部背景图 end */

	/* 标题 start */
	.nav_title {
		-webkit-background-clip: text;
		color: #0E122A;


		&--wrap {
			position: relative;
			display: flex;
			height: 120rpx;
			align-items: center;
			justify-content: center;
			font-weight: bold;
			background-image: url(https://tnuiimage.tnkjapp.com/title_bg/title44.png);
			background-size: cover;
		}
	}

	/* 标题 end */

	/* 用户头像 start */
	.logo-image {
		width: 60rpx;
		height: 60rpx;
		position: relative;
	}

	.logo-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border: 8rpx solid rgba(255, 255, 255, 0.05);
		box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
		border-radius: 50%;
		overflow: hidden;
		// background-color: #FFFFFF;
	}

	/* 页面 start*/
	.about-shadow {
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	.about {

		&__wrap {
			position: relative;
			z-index: 1;
			margin: 20rpx 30rpx;
			margin-top: -230rpx;
		}
	}

	.about-shadow {
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	/* 页面 end*/

	/* 图标容器12 start */
	.tn-three {
		position: absolute;
		top: 50%;
		right: 50%;
		bottom: 50%;
		left: 50%;
		transform: translate(-38rpx, -16rpx) rotateX(30deg) rotateY(20deg) rotateZ(-30deg);
		text-shadow: -1rpx 2rpx 0 #f0f0f0, -2rpx 4rpx 0 #f0f0f0, -10rpx 20rpx 30rpx rgba(0, 0, 0, 0.2);
	}

	.icon20 {
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
					background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg.png);
				}
			}
		}
	}

	/* 图标容器12 start */
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
				width: 15rpx;
				height: 15rpx;
				font-size: 50rpx;
				border-radius: 50%;
				margin-bottom: 38rpx;
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

	/* 图标容器1 start */
	.icon1 {
		&__item {
			// width: 30%;
			background-color: #FFFFFF;
			border-radius: 10rpx;
			padding: 30rpx;
			margin: 20rpx 10rpx;
			transform: scale(1);
			transition: transform 0.3s linear;
			transform-origin: center center;

			&--icon {
				width: 40rpx;
				height: 40rpx;
				font-size: 28rpx;
				border-radius: 50%;
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
					background-image: url(@/static/icon_bg.png);
				}
			}
		}
	}

	/* 图标容器1 end */

	/* 大嘴鸟*/
	.dong {
		z-index: 9999;
		position: fixed;
		top: -40px;
		right: -80px;
		transform: scale(0.24);
		-webkit-transform: scale(0.24);
		-moz-transform: scale(0.24);

	}

	.monster {
		transform: rotate(-50deg);
		-ms-transform: rotate(-50deg);
		/* IE 9 */
		-moz-transform: rotate(-50deg);
		/* Firefox */
		-webkit-transform: rotate(-50deg);
		/* Safari 和 Chrome */
		-o-transform: rotate(-50deg);
		/* Opera */
		display: flex;
		justify-content: center;
		position: relative;
		width: 170px;
		height: 400px;
		border-top-left-radius: 200px;
		border-top-right-radius: 200px;
		background-color: #3C47D7;
		box-shadow: 20px 20px 60px #4650E5;
	}

	.monster__face {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: absolute;
		top: 14%;
		width: 75%;
		height: 160px;
	}

	.monster__noses {
		top: 50%;
		display: flex;
		justify-content: space-between;
		width: 28%;
		height: auto;
		margin-bottom: 10px;
	}

	.monster__nose {
		width: 8px;
		height: 12px;
		border-radius: 20px;
		background: rgba(0, 0, 0, 0.5);
		box-shadow: 4px 8px 5px rgba(0, 0, 0, 0.1);
	}

	.monster__mouth {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		width: 100%;
		height: 0%;
		overflow: hidden;
		border: 25px solid #FFC333;
		border-radius: 100px;
		background-color: #810332;
		animation: mouth 1.75s infinite;
		box-shadow: 4px 8px 5px rgba(0, 0, 0, 0.2);
		box-sizing: border-box;
	}

	.monster__mouth::before {
		content: '';
		position: absolute;
		width: 150px;
		height: 80px;
		border-radius: 100px;
		background-color: #400018;
	}

	.monster__mouth::after {
		content: '';
		position: absolute;
		bottom: -80px;
		width: 160px;
		height: 80px;
		border-top-left-radius: 50%;
		border-top-right-radius: 50%;
		background-color: #DC1B50;
		animation: tongue 1.75s infinite;
	}

	.monster__top {
		position: absolute;
		top: -30px;
		width: 170px;
		height: 30px;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		background-color: #ffffff;
		z-index: 100;
		animation: t 1.75s infinite;
	}

	.monster__bottom {
		position: absolute;
		bottom: 0;
		width: 100px;
		height: 30px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		background-color: #ffffff;
		z-index: 100;
		animation: b 1.75s infinite;
	}


	.avatar-eye {
		position: absolute;
		top: -10%;
		width: 65px;
		height: 65px;
		background: linear-gradient(105deg, white, #cb87f4);
		border-radius: 100%;
		box-shadow: 4px 8px 5px rgba(0, 0, 0, 0.2);
		margin: 3px;
		-webkit-transform: translateX(-50%);
		transform: translateX(-50%);
	}


	.avatar-eye--green {
		background: linear-gradient(to bottom, #fdfdfd, #c3efea);
	}

	.avatar-eye--violet {
		background: linear-gradient(to bottom, #fdfdfd, #e6d6f6);
	}


	.eye--left {
		left: 10%;
	}

	.eye--right {
		left: 85%;
	}

	.eye--center {
		left: 45%;
		top: 10%;
	}

	.avatar-eye-pupil {
		position: absolute;
		width: 55%;
		height: 55%;
		left: 50%;
		top: 25%;
		-webkit-transform: translate(-50%);
		transform: translate(-50%);
		z-index: 100;
		border-radius: 100%;
	}


	.pupil--green {
		background: linear-gradient(135deg, rgba(188, 248, 177, 0.7), #2fa38c 75%);
	}

	.pupil--pink {
		background: linear-gradient(135deg, #f1a183, #8535cd);
	}


	.avatar-eye-pupil-blackThing {
		position: absolute;
		width: 55%;
		height: 55%;
		left: 50%;
		top: 25%;
		background: #2c2f32;
		-webkit-transform: translate(-50%);
		transform: translate(-50%);
		border-radius: 100%;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	}

	.avatar-eye-pupil-lightReflection {
		position: absolute;
		width: 7px;
		height: 7px;
		left: 25%;
		top: 10%;
		background: #ebebeb;
		-webkit-transform: translate(-50%);
		transform: translate(-50%);
		border-radius: 100%;
		box-shadow: 10px 10px 10px rgba(255, 255, 255, 0.2);
	}
</style>
