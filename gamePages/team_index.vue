<template>
	<view class="template-mine tn-safe-area-inset-bottom">

		<tn-nav-bar fixed :bottomShadow="false">
			工会中心
		</tn-nav-bar>
		  	<mescroll-body ref="mescrollRef" @down="downCallback" >
		<view class="tn-padding" :style="{paddingTop: vuex_custom_bar_height + 'px'}">

			<view class="meng tn-bg-white about-shadow">
				<!-- 图标logo/头像 -->
				<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-bottom"
					>
					<view class="justify-content-item" style="width: 100%;">
						<view class="tn-flex tn-flex-col-center tn-flex-row-left" style="width: 100%;">
							<view class="logo-pic tn-shadow">
								<view class="logo-image">
									<tn-avatar size="150rpx" :src="body.avatar"></tn-avatar>
								</view>
							</view>
							<view class="" style="width:100%;">
								<view
									class="tn-padding-right tn-padding-left-sm tn-text-xl tn-text-bold tn-text-justify">
									<text class="">{{body.nickname}}</text>	
								</view>
								<view class="tn-padding-right tn-padding-top-xs tn-padding-left-sm tn-text-ellipsis">
								<tn-tag v-if="regshow" shape="circle" backgroundColor="tn-cool-bg-color-15" margin="10rpx" width="190rpx">
								未申请工会
								</tn-tag>
								<tn-tag v-if="!regshow" shape="circle" backgroundColor="tn-cool-bg-color-15" margin="10rpx" width="190rpx">
								<text v-if="team.status==0">工会审核中</text>
								<text v-if="team.status==1">工会已审核</text>
								<text v-if="team.status==2">工会被拒绝</text>								
								<text v-if="team.status==3">工会被冻结</text>								
								</tn-tag>
								</view>

							</view>
						</view>
					</view>
				</view>

			</view>

		</view>
		
		  <view v-if="team.status==0">
			  <view class="tn-margin  tn-padding tn-flex  tn-flex-row-center tn-margin-top-sm" style="border-radius: 10rpx;margin-top:150rpx;">
			  				<view 
			  					style="font-size: 20px;padding: 80rpx;" >
			  					<view class="tn-icon-success-circle-fill tn-color-green" style="font-size: 100px;"></view>
			  					<view style="font-size: 14px;" class="tn-text-center">你的工会申请正在审核中</view>							
			  				<view class="tn-color-black tn-text-df tn-text-center tn-padding-top" >
			  				<tn-tag  :plain="true" shape="radius" margin="10rpx"  width="150rpx" @click="fanhui()">
			  				<text >返回</text>
			  				</tn-tag>
							<tn-tag  :plain="true"  shape="radius" margin="10rpx"  width="150rpx" @click="del(team.id)">
							<text >重新申请</text>
							</tn-tag>
			  				
			  				</view>
			  				
			  				</view>
			  </view>			  			
		</view>
		
		
		
		  <view v-if="team.status==2">
			  <view class="tn-margin  tn-padding tn-flex  tn-flex-row-center tn-margin-top-sm" style="border-radius: 10rpx;margin-top:150rpx;">
			  				<view  
			  					style="font-size: 20px;padding: 80rpx;" >
			  					<view class="tn-icon-warning-fill tn-color-green" style="font-size: 100px;"></view>
			  					<view style="font-size: 14px;" class="tn-text-center">你的工会被拒绝：</view>							
			  					<view style="font-size: 14px;" class="tn-text-center">原因：{{team.liyou}}</view>							
			  				<view class="tn-color-black tn-text-df tn-text-center tn-padding-top">
			  				<tn-tag  :plain="true" shape="radius" margin="10rpx"  width="150rpx"  @click="fanhui()">
			  				<text >返回</text>
			  				</tn-tag>	
							<tn-tag  :plain="true"  shape="radius" margin="10rpx"  width="150rpx" @click="del(team.id)">
							<text >重新申请</text>
							</tn-tag>
			  				</view>
			  				</view>
			  </view>			  			
		</view>
		
		<view v-if="team.status==3">
			  <view class="tn-margin  tn-padding tn-flex  tn-flex-row-center tn-margin-top-sm" style="border-radius: 10rpx;margin-top:150rpx;">
			  				<view  
			  					style="font-size: 20px;padding: 80rpx;" >
			  					<view class="tn-icon-warning-fill tn-color-red" style="font-size: 100px;"></view>
			  					<view style="font-size: 14px;" class="tn-text-center">你的工会被冻结：</view>							
			  					<view style="font-size: 14px;" class="tn-text-center">联系管理员咨询</view>							
			  				<view class="tn-color-black tn-text-df tn-text-center tn-padding-top">
			  				<tn-tag  :plain="true" shape="radius" margin="10rpx"  width="150rpx"  @click="fanhui()">
			  				<text >返回</text>
			  				</tn-tag>	
						
			  				</view>
			  				</view>
			  </view>			  			
		</view>
		
		
		
		
			  
	  <view v-if="regshow&&team.status==4">
				<view class="about-shadow  tn-padding-bottom-sm tn-bg-white">					
					<view class="tn-margin tn-bg-gray--light" style="border-radius: 10rpx;padding: 20rpx 30rpx;">
						<input placeholder="请填写工会名称" name="input" v-model="title" placeholder-style="color:#AAAAAA"></input>
					</view>
					<view class="tn-margin tn-bg-gray--light tn-padding" style="border-radius: 10rpx;">
						<textarea maxlength="500" placeholder="请输入工会介绍" v-model="dec"
							placeholder-style="color:#AAAAAA"></textarea>
					</view>	
					<view class="tn-flex-1 justify-content-item tn-margin-sm tn-text-center" @click="fabuba()">
					  <tn-button backgroundColor="tn-cool-bg-color-2" padding="40rpx 0" width="60%"   >
					   <text class="tn-icon-edit tn-padding-right-xs tn-color-white"></text>
					    <text class="tn-color-white">提交申请</text>
					 
					  </tn-button>
					</view>
				</view>
				
		</view>
		
		
		
		
		
	   <view v-if="!regshow&&team.status==1">
			
		<view class="about-shadow  tn-padding-bottom-sm tn-bg-white">


			<!-- 帖子列表 -->

			<!-- 更多信息-->
			<view class="about-shadow tn-padding-top-sm tn-padding-bottom-sm tn-bg-white" >
				<view class="">
					<view class="tn-flex tn-flex-row-between" >
						<view class="justify-content-item tn-margin  ">
							工会名称：{{team.title}}
						</view>						
					</view>
				</view>
			</view>

			<view class="about-shadow tn-padding-top-sm tn-padding-bottom-sm tn-bg-white" >
				<view class="">
					<view class="tn-flex tn-flex-row-between" >
						<view class="justify-content-item tn-margin  ">
							工会介绍：{{team.dec}}
						</view>
						
					</view>
				</view>
			</view>

	<view class="about-shadow tn-padding-top-sm tn-padding-bottom-sm tn-bg-white" >
				<view class="">
					<view class="tn-flex tn-flex-row-between" >
						<view class="justify-content-item tn-margin  ">
							工会费率：{{team.feilv}}%
						</view>
						
					</view>
				</view>
			</view>
			<view class="adver-wrap tn-bg-white">
				<view class=" tn-margin-top  tn-padding-bottom-sm">				
					<view class="tn-flex tn-margin-left-sm tn-margin-right-sm tn-margin-top">
						<view class="tn-flex-1 tn-padding-sm tn-radius" @click="navigateToFn({ url: '/gamePages/team_user?id='+team.id, checkLogin: true })">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
								<view
									class="icon12__item--icon  tn-bg-red--light tn-color-red   tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur">
									<text class="">{{team.reguser}}</text>
								</view>								
								<view class="tn-color-black tn-text-df tn-text-center ">
									<text class="tn-text-ellipsis">旗下陪陪</text>
								</view>							
							</view>
						</view>

					

						<view class="tn-flex-1 tn-padding-sm tn-radius" @click="navigateToFn({ url: '/gamePages/team_money_log?id='+team.id, checkLogin: true })">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
								<view
									class="icon12__item--icon  tn-bg-red--light tn-color-red   tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur">
									<view class="">{{team.zong_money}}</view>
								</view>
								<view class="tn-color-black tn-text-df tn-text-center ">
									<text class="tn-text-ellipsis">工会总收入</text>
								</view>
							</view>
						</view>
					</view>					
				</view>			
				
			</view>
		
							
			
			
		</view>		
		<view class="about-shadow tn-padding-top-sm tn-padding-bottom-sm tn-bg-white">
			<view class="tn-flex tn-flex-row-between">
				<view class="justify-content-item tn-margin tn-text-bold tn-text-xl">
					可提现{{team.gift_name}}{{team.money}}个
				</view>
				<view class="tn-margin-right"  @click="navigateToFn({ url: '/gamePages/team_shouru?id='+team.id, checkLogin: true })">
					
						<tn-button :shadow="true" width="100%" backgroundColor="tn-bg-yellow"
							height="80rpx" margin="10rpx 0" @click="shezhishow=true">去提现</tn-button>
					
				</view>
			</view>
		</view>
			</view>				
		
		<view class='tn-tabbar-height'></view>

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
				title:'',
				dec:'',
				content:[],
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
				body: [],
				team:[],
				regshow:false 
				
			}
		},

		onLoad(option) {
		
		},

	onShareAppMessage() {
	   return {
	      title: this.body.nickname+'邀请你加入', //分享的名称
	      path: '/pages/index?daren_id='+uni.getStorageSync('user_id'),
	　　　 imageUrl: this.body.avatar 
	   }
		},	 
	
	
		methods: {
			fanhui(){
				uni.navigateBack()
			},
			datu(img){
				this.shouhuxiu=false
				uni.previewImage({
					current:img,
					urls: [img]
				});
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
				},
				
			
			async del(id) {
				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/games/team_del',
					data: {id:id}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
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
				
			async info() {
				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/games/team_index',
					data: {}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						this.mescroll.endErr();
						that.body = result.data.data.userInfo;					
						that.team = result.data.data.team;	
										
						if (that.team.status==4){
							this.regshow=true
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
				async fabuba() {
					let that = this;
					
					if (this.title==''){
						this.msg('名称必填')
						return
					}
					if (this.dec==''){
						this.msg('介绍必填')
						return
					}
					
					let result = await that.$request({
						loading: 1,
						method: 'post',
						url: '/api/games/team_reg',
						data: {
							title:this.title,
							dec:this.dec
						}
					});
					if (result.statusCode == 200) {
						if (result.data.code == 200) {						
							this.info()
							this.msg('申请成功，等待审核')	
											
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
				
				
				
				
				
				
			async ma(){				
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/Share/xcxImages',
					data: {
					}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						this.shezhishow=true
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
				mescroll.endErr();
				mescroll.endSuccess();			
			this.info()
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
		width: 190rpx;
		height: 150rpx;
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
