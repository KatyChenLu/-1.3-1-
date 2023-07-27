<template>
	<view class="template-wave">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
				<text class='icon tn-icon-left'></text>
				<text class='icon tn-icon-home-capsule-fill'></text>
			</view>
		</tn-nav-bar>

		<view class="" style="position: fixed;">
		<view class="space">
			<view class="planet">
				<view class="planet_shadow"></view>
				<view class="crater1"></view>
				<view class="crater2"></view>
				<view class="crater3"></view>
				<view class="crater4"></view>
			</view>
			<view class="stars">
				<view class="star"></view>
				<view class="star pink"></view>
				<view class="star blue"></view>
				<view class="star yellow"></view>
			</view>
		
		</view>
		<view style="padding: 200px;">
			<view class="avatar"></view>
			<view class="inner"></view>
			<view class="inner outter"></view>
			<view class="inner outter1"></view>
			<view class="inner outter2"></view>
		</view>
		</view>
		<view v-for="(item, index) in userlist" :key="index" :style="{top: item.x + 'px',left: item.y + 'px'}" style="position: fixed">
			<tn-avatar size="xl" :src="item.avatar"></tn-avatar>
		</view>
		
	
		<view class=" tn-flex tn-flex-row-center" style="position: fixed;bottom: 410rpx;width:100%;">			
			<view class="justify-content-item  tn-text-center tn-color-white" style="font-size: 14px;">当前{{body.renshu}}人正在匹配</view>
			<view class="justify-content-item tn-color-gray" style="font-size: 14px;"> Tips:聊天是匿名的哦</view>
		</view>
	
		

		<button class="tn-btn-class tn-btn tn-padding-sm tn-margin-sm  tn-main-gradient-purple--reverse"
			style="position: fixed;bottom: 50px;width: 95%;border-radius: 150px;"
			@click="kaishipipei()" v-if="jinggaoshow==false">
			开始匹配
			<!-- <view class="tn-color-yellow" style="font-size: 14px;">今日免费还剩{{body.mianfeici}}次</view> -->
			<view class="tn-color-yellow" style="font-size: 14px;" v-if="body.money>0">{{body.money}}钻石/次</view>
			<view class="tn-color-yellow" style="font-size: 14px;" v-else>当前免费畅聊</view>
		
		</button>
		
		
	<view  v-if="jinggaoshow==true" @click="guaduan()" class="tn-flex tn-flex-row-center" style="position: fixed;bottom:300rpx;width: 95%;border-radius: 50px;">
		<view  class="justify-content-item tn-padding-sm tn-text-center tn-margin-xs tn-radius bg-flex-shadow tn-cool-bg-color-15 tn-shadow-blur">		
		<view class="tn-text-center tn-color-white">挂断</view>
		</view>
		
	</view>
		
		
		<view  v-if="jinggaoshow==true" class="tn-flex tn-flex-row-between tn-margin-top-sm" style="position: fixed;bottom: 50px;width: 95%;border-radius: 50px;">
			
				
				<view class="justify-content-item tn-padding-sm">
				<tn-avatar size="lg" src="/static/images/avatar.png"></tn-avatar>
				<view class="tn-text-center tn-color-white">对方</view>
				</view>
				<view class="justify-content-item tn-padding-sm tn-text-center tn-margin-xs tn-bg-yellow tn-radius bg-flex-shadow tn-shadow-blur">
				畅聊中
				<view>还剩{{showIntervalStr}}秒</view>
				
				<view class="tn-icon-voice-fill tn-text-sm tn-color-orangeyellow" style="						
				font-size: 30px;
				" ></view>
				
				</view>
				<view class="justify-content-item tn-padding-sm">
				<tn-avatar size="lg" src="/static/images/avatar.png"></tn-avatar>
				<view class="tn-text-center tn-color-white">我</view>
				</view>
		
		</view>
		
	
		<tn-modal width="80%" v-model="pipeishow" backgroundColor="#E4E9EC" padding="30rpx 80rpx" :radius="25"
				title="正在匹配中" :button="button" :showCloseBtn="false" :maskCloseable="false" :zoom="true"
				:custom="true" >
				<view class="custom-modal-content tn-padding-sm ">
					<view class="tn-text-center tn-color-black" style="font-size: 14px;">
						系统正在为你匹配
					</view>
					<view class=" tn-text-center tn-padding-sm">
						<tn-loading show="show" :size="80" color="#aa00ff"></tn-loading>
					</view>
					<view class="tn-text-center tn-padding-top" @click="quxiaopipei()">
				
						<tn-button :fontSize="28" padding="20rpx" height="56rpx" backgroundColor="tn-cool-bg-color-3"
							fontColor="tn-color-white">取消匹配</tn-button>
					</view>				
				</view>		
			</tn-modal>
		
		
		<tn-modal width="80%" v-model="tanchutongyi" backgroundColor="#E4E9EC" padding="30rpx 80rpx" :radius="25"
			title="有人邀请你聊天" :button="button" :showCloseBtn="false" :maskCloseable="false" :zoom="true"
			:custom="false" @click="manage_tongyishangmai">		
		</tn-modal>
		
		<tn-popup v-model="tishishow" width="50%" height="180px" mode="center"
			backgroundColor="rgba(255, 255, 255, 0.1)" :borderRadius="30" :closeBtn="false" :maskCloseable="false"
			>
			<view class="custom-modal-content tn-padding-sm ">
				<view class="tn-text-center tn-color-black" style="font-size: 16px;">
					{{titletip}}
				</view>
			
				<view class="tn-text-center tn-padding-top" @click="tishishow=false">
			
					<tn-button :fontSize="28" padding="20rpx" height="56rpx" backgroundColor="tn-cool-bg-color-3"
						fontColor="tn-color-white">知道了</tn-button>
				</view>				
			</view>		
		</tn-popup>
		
	</view>
</template>

<script>
	import {
		host,
		webSocket,
		secretkey,
		sdkappid
	} from '@/siteinfo.js'


		
	///语音/
	import permision from "@/TrtcCloud/permission.js";
	import TrtcCloud from '@/TrtcCloud/lib/index';
	import {
		TRTCAppScene,
		TRTCVideoStreamType,
		TRTCCloudDef
	} from '@/TrtcCloud/lib/TrtcDefines';
	import {
		genTestUserSig
	} from '@/debug/GenerateTestUserSig';
	
	import {
		TRTCRoleType
	} from '@/TrtcCloud/lib/TrtcDefines';
	
	///
	
	
	
	
	
	
	
	

	let timer;
	const audioContext = uni.createInnerAudioContext()
	const recorderManager = uni.getRecorderManager()
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	import NavIndexButton from '@/libs/components/nav-index-button.vue'
	export default {
		name: 'TemplateWave',
		mixins: [template_page_mixin],
		components: {
			NavIndexButton
		},
		data() {
			return {
				titletip:'聊天结束了',
				tishishow:false,
				tanchutongyi:false,
				fauser_id:0,
				room_id:'123456789',
				button: [{
						text: '拒绝',
						backgroundColor: '#c1c1c1',
						fontColor: '#000000'
					},
					{
						text: '同意',
						backgroundColor: '#ffff00',
						fontColor: '#000000'
					}
				],
				// 间隔一分钟 后可以再次发送
				pipeishow:false,
				intervalTime: 60,
				// 显示在页面上的倒计时
				showIntervalStr: 0,
				jinggaoshow:false,
				userlist:[],
				body:[],
				sdkAppId: 0,
				userSig: '',
				userId: 0,
				roomId: 0,
				role: TRTCRoleType.TRTCRoleAnchor, //身份观众
				appScene: TRTCAppScene.TRTCAppSceneAudioCall, // 语音聊天室模式
				isFrontCamera: true,
				streamType: TRTCVideoStreamType.TRTCVideoStreamTypeBig,
				
				
				remoteUserId: '',
		
				remoteAudioMuteState: false,
				localAudioMuteState: false,
				localVideoMuteState: false,
			}
		},
		onLoad() {
			this.userId = 'user_' + uni.getStorageSync('user_id')
			this.roomId = uni.getStorageSync('user_id')
		// #ifdef APP	
			const {
				userSig
			} = genTestUserSig(this.userId, sdkappid, secretkey);
			this.sdkAppId = sdkappid;
			this.userSig = userSig;
			if (!this.sdkAppId || !userSig) {
				uni.showToast({
					title: '请填写 sdkAppId、userSig',
					icon: 'none'
				});
			}
			if (uni.getSystemInfoSync().platform === 'android') {
				permision.requestAndroidPermission('android.permission.RECORD_AUDIO');
			}
		// #endif
			this.info()
			this.bind()
			
			
			
			// 注册接受消息监听
			uni.$on('talkMessage', message => {	
				
				switch (message.type) {					
						case 'roomqita': //通用广播
						this.zhixing(message)
						return;			
				}
			});
			

		},
		onUnload() {
			this.destroyInstance();
			console.log('- onUnload');
		},
		unmounted() {
			this.handleUninstallEvents();
		},
		onBackPress() {
			console.log('返回')
			this.destroyInstance();
		},
		methods: {
			zhixing(msg){
				let that=this
				if (msg.datatype=='pipeitongzhi'){
					
					console.log(msg.userid,uni.getStorageSync('user_id'),msg.fauser_id)
					if (msg.userid==uni.getStorageSync('user_id')){
						this.fauser_id=msg.fauser_id
						this.tanchutongyi=true
					}
				}
				
				if (msg.datatype=='tongyili_no'){
					
					if (msg.fauser_id==uni.getStorageSync('user_id')){
						setTimeout(() => {
						console.log('对方不同意继续匹配')
						that.kaishipipei_user()
						}, 3000);
						
					}
				}
				
				if (msg.datatype=='tongyili_yes'){	
					
					if (msg.fauser_id==uni.getStorageSync('user_id')){
						console.log('对方同意开始进入语聊')
						//聊天后，对方的id
						this.roomId = +uni.getStorageSync('user_id')
						this.fauser_id=msg.user_id
						this.pipeiok()
						this.pipeishow=false
					}
				}
				if (msg.datatype=='guaduan'){
					
					if (msg.fauser_id==uni.getStorageSync('user_id')){
							this.paymp3('/static/shou.mp3', 0)
						console.log('对方挂断')						
						this.titletip='对方挂断聊天'
						this.tishishow=true
						this.fauser_id=0						
						this.jinggaoshow=false
						this.exitRoom()
					}
				}
				
			},
			quxiaopipei(){
				this.pipeishow=false
			},
			
			manage_tongyishangmai(res) {
				let that=this
				
				this.tanchutongyi = false
				if (res == 1) {
					//我同意聊天
					
					// #ifndef APP
					this.tishishow=true
					this.titletip='APP才可以语聊哦'
					   uni.sendSocketMessage({
						data: JSON.stringify({
						type: 'roomqita',
						room_id: that.room_id,							
						fauser_id: that.fauser_id,							
						datatype: 'tongyili_no'
						})
					   });	
					   this.fauser_id=0
					// #endif
					
					// #ifdef APP										
					this.roomId =that.fauser_id
					uni.sendSocketMessage({
						data: JSON.stringify({
						type: 'roomqita',
						room_id: that.room_id,							
						fauser_id: that.fauser_id,	
						user_id:uni.getStorageSync('user_id'),						
						datatype: 'tongyili_yes'
						})
					});	
					this.pipeiok()
					// #endif
					
				}else{
					
					uni.sendSocketMessage({
						data: JSON.stringify({
						type: 'roomqita',
						room_id: that.room_id,							
						fauser_id: that.fauser_id,							
						datatype: 'tongyili_no'
						})
					});	
					this.fauser_id=0
					
				}
			},
			
			clickBtn_shenqing(res) {				
				if (res == 1) {		
	
				}else{
			
				}
			},
			
			guaduan(){
				uni.sendSocketMessage({
					data: JSON.stringify({
					type: 'roomqita',
					room_id: this.room_id,							
					fauser_id: this.fauser_id,	
					user_id:uni.getStorageSync('user_id'),						
					datatype: 'guaduan'
					})
				});	
				
				this.titletip='你挂断聊天'
				this.tishishow=true
				this.jinggaoshow=false
				this.exitRoom()
			},
			async info() {
				let that = this;
				let result = await that.$request({
					loading:0,
					method: 'post',
					url: '/api/four/pipeiindex',
					data: {
							page:that.page,
						}
				});	  
			
				if (result.statusCode == 200) {
					if (result.data.code == 200) {			
							that.userlist=result.data.data.userlist
							that.body = result.data.data
							that.intervalTime=	that.body.frinedmin*60										
					} 
					else {
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
			
			kaishipipei(){
				this.pipeishow=true	
				this.kaishipipei_user()				
			},
			async kaishipipei_user() {
				let that = this;
				let result = await that.$request({
					loading:0,
					method: 'post',
					url: '/api/four/pipeiuser',
					data: {
							page:that.page,
						}
				});	  
			
				if (result.statusCode == 200) {
					if (result.data.code == 200) {			
					console.log('匹配到人对方id'+result.data.data.userlist.id)
					uni.sendSocketMessage({
						data: JSON.stringify({
							type: 'roomqita',
							room_id: that.room_id,							
							fauser_id:uni.getStorageSync('user_id'),							
							userid: result.data.data.userlist.id,							
							datatype: 'pipeitongzhi'
						})
					});	
																			
					} 
					else {
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
			
			
			
			
			
			
			
			
			
			pipeiok(){
				// #ifdef APP
					this.enterRoom()
					this.jinggaoshow=true
					this.startIntervalFn()
				// #endif
			   // #ifndef APP
			   this.tishishow=true
			   this.titletip='APP才可以语聊哦'			   
			   // #endif
			
			},
			
			startIntervalFn() {
				let that = this;
				that.showIntervalStr = that.intervalTime;
				clearInterval(timer);
				timer = setInterval(() => {
					that.showIntervalStr--;
					if (that.showIntervalStr <= 0) {
						that.guaduan();
					}
				}, 1000);
			},
			
			
			
		
		handleEvents() {
			this.trtcCloud.on('onWarning', (res) => {
				uni.showToast({
					title: `onWarning: ${JSON.stringify(res)}`,
					icon: 'none',
				});
			});
			this.trtcCloud.on('onError', (res) => {
				console.log('- onError: ', JSON.stringify(res));
				uni.showToast({
					title: `error: ${JSON.stringify(res)}`,
					icon: 'none',
				});
			});
			this.trtcCloud.on('onEnterRoom', (result) => {
		
				if (result > 0) {
					console.log('连接腾讯云成功')		
					// #ifdef APP-PLUS				
					this.trtcCloud.startLocalAudio();					
					// #endif		
						
				} else {
					console.log(`enter room failed，error code = ${result}`);
				}
			});
			this.trtcCloud.on('onExitRoom', (reason) => {		
		
			});
			this.trtcCloud.on('onSendFirstLocalAudioFrame', (res) => {
				console.log(`开始传输音频，可以说话 = ${JSON.stringify(res)}`);
			});
		
			this.trtcCloud.on('onSwitchRole', (res) => {
				console.log(`转换身份结果 = ${JSON.stringify(res)}`);
			});
		
			this.trtcCloud.on('onUserAudioAvailable', (res) => {
			
		
			});
		
		
		
		
			this.trtcCloud.on('onRemoteUserEnterRoom', (userId) => {			
				console.log('远端用户进入' + userId)
			});
		
		
			this.trtcCloud.on('onRemoteUserLeaveRoom', (res) => {
				const {
					userId,
					reason
				} = res;				
				console.log('远端用户退出' + userId)
		
			});
		
		
		},
		handleUninstallEvents() {
			this.trtcCloud.off('*');
		},
		//、、、、、、、、、、、
		
			destroyInstance() {
				uni.sendSocketMessage({
					data: JSON.stringify({
					type: 'leaveGroup',
					room_id: this.room_id
					})
				});	
			
			
				// #ifdef APP-PLUS
					this.exitRoom()
				TrtcCloud.destroyInstance();
				// #endif
			
			},
			createTrtcCloud() {
				this.trtcCloud = TrtcCloud.createInstance();
				this.handleEvents();
			},
			
			
			enterRoom() {
				
				try {
					this.createTrtcCloud(); //连接云	   
					const {
						roomId,
						userId,
						sdkAppId,
						appScene,
						userSig,
						role
					} = this;
					let param = {
						roomId,
						userId,
						sdkAppId,
						userSig,
						role
					};
					console.log(param)
					this.trtcCloud.enterRoom(param, appScene);
					uni.showToast({
						title: '麦克风已打开 ',
						icon: 'none',
					});		
								
								
				} catch (error) {
					console.log(`enterRoom error = ${JSON.stringify(error)}`);
				}
			},
			exitRoom() {
			// #ifdef APP-PLUS
			console.log('执行退出房间')
			this.trtcCloud.stopLocalAudio();
			this.trtcCloud.exitRoom();
			// #endif
			},
			bind() {
				let msg = {
					'type': 'bind',
					'fromid': uni.getStorageSync('user_id')
				};
			
				uni.sendSocketMessage({
					data: JSON.stringify(msg),
					success: (res) => {
						console.log('重新连接聊天服务器' + uni.getStorageSync('user_id'), res)
						
						uni.sendSocketMessage({
							data: JSON.stringify({
								type: 'join_room',
								room_id:this.room_id
							})
						});
						
						
						
					},
					fail: (res) => {
						console.log('重复绑定会员id')
						//console.log('绑定会员id失败'+uni.getStorageSync('user_id'), res)
					}
				});
			
			},
			
			paymp3(url, id = 0) {
				let that = this
				audioContext.src = url
				audioContext.play()
				audioContext.onPlay(() => {})
				audioContext.onEnded(() => {
				
				})
				audioContext.onError(() => {
				
				})
			},

		}
	}
</script>

<style lang="scss" scoped>
	.template-wave {
		background-image: linear-gradient(to top, #4C3FAE 20%, #6E26BA 80%);
		width: 100vw;
		height: 100vh;
	}

	@keyframes move_wave {
		0% {
			transform: translateX(0) translateZ(0) scaleY(1)
		}

		50% {
			transform: translateX(-25%) translateZ(0) scaleY(1)
		}

		100% {
			transform: translateX(-50%) translateZ(0) scaleY(1)
		}
	}

	.inner {
		width: 100rpx;
		height: 100rpx;
		background: #aabdaf;
		border-radius: 50%;
		position: fixed;
		left: 50%;
		margin-left: -50rpx;
		margin-top: 150rpx;
		z-index: 10;
		animation-duration: 2s;
		-webkit-animation-name: state1;
		animation-name: state1;
		-webkit-animation-timing-function: linear;
		animation-timing-function: linear;
		-webkit-animation-iteration-count: infinite;
		animation-iteration-count: infinite;
		opacity: 0;
	}

	@keyframes state1 {
		0% {
			opacity: .5;
			-webkit-transform: scale(1);
			transform: scale(1);
		}

		100% {
			opacity: 0;
			-webkit-transform: scale(8);
			transform: scale(8);
		}
	}

	.avatar {
		position: fixed;
		left: 50%;
		margin-left: -40rpx;
		margin-top: 160rpx;
		border-radius: 100%;
		width: 80rpx;
		height: 80rpx;
		background-color: #a4b6a9;
		z-index: 11;
	}

	.outter {
		animation-delay: 0.5s;
	}

	.outter1 {
		animation-delay: 1s;
	}

	.outter2 {
		animation-delay: 1.5s;
	}

	.planet {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		background: #333;
		position: absolute;
		left: 50%;
		top: 105px;
		margin: -75px 0 0 -75px;
		overflow: hidden;
		z-index: 2;
	}

	.planet_shadow {
		position: absolute;
		border-radius: 50%;
		height: 100%;
		width: 100%;
		top: -40%;
		right: -10%;
		border: 35px solid rgba(0, 0, 0, .15);
	}

	.crater1,
	.crater2,
	.crater3,
	.crater4 {
		position: absolute;
		border-radius: 50%;
		background: rgba(0, 0, 0, .3);
		box-shadow: inset 3px 3px 0 rgba(0, 0, 0, .2);
	}

	.crater1 {
		width: 20px;
		height: 20px;
		left: 25%;
		top: 20%;
	}

	.crater2 {
		width: 10px;
		height: 10px;
		left: 50%;
		top: 20%;
	}

	.crater3 {
		width: 15px;
		height: 15px;
		left: 30%;
		top: 35%;
	}

	.crater4 {
		width: 15px;
		height: 15px;
		left: 60%;
		top: 45%;
	}

	.star {
		display: block;
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: #FFF;
		top: 100px;
		left: 400px;
		position: relative;
		transform-origin: 100% 0;
		animation: star-ani 6s infinite ease-out;
		box-shadow: 0 0 5px 5px rgba(255, 255, 255, .3);
		opacity: 0;
		z-index: 2;
	}

	.star:after {
		content: '';
		display: block;
		top: 0px;
		left: 4px;
		border: 0px solid #fff;
		border-width: 0px 90px 2px 90px;
		border-color: transparent transparent transparent rgba(255, 255, 255, .3);
		transform: rotate(-45deg) translate3d(1px, 3px, 0);
		box-shadow: 0 0 1px 0 rgba(255, 255, 255, .1);
		transform-origin: 0% 100%;
		animation: shooting-ani 3s infinite ease-out;
	}

	.pink {
		top: 30px;
		left: 395px;
		background: #ff5a99;
		animation-delay: 5s;
		-webkit-animation-delay: 5s;
		-moz-animation-delay: 5s;
	}

	.pink:after {
		border-color: transparent transparent transparent #ff5a99;
		animation-delay: 5s;
		-webkit-animation-delay: 5s;
		-moz-animation-delay: 5s;
	}

	.blue {
		top: 35px;
		left: 432px;
		background: cyan;
		animation-delay: 7s;
		-webkit-animation-delay: 7s;
		-moz-animation-delay: 7s;
	}

	.blue:after {
		// border-color: transpareanimation-delay: 12s;
		-webkit-animation-delay: 7s;
		-moz-animation-delay: 7s;
		animation-delay: 7s;
	}

	.yellow {
		top: 50px;
		left: 600px;
		background: #ffcd5c;
		animation-delay: 5.8s;
	}

	.yellow:after {
		border-color: transparent transparent transparent #ffcd5c;
		animation-delay: 5.8s;
	}

	@keyframes star-ani {
		0% {
			opacity: 0;
			transform: scale(0) rotate(0) translate3d(0, 0, 0);
			-webkit-transform: scale(0) rotate(0) translate3d(0, 0, 0);
			-moz-transform: scale(0) rotate(0) translate3d(0, 0, 0);
		}

		50% {
			opacity: 1;
			transform: scale(1) rotate(0) translate3d(-200px, 200px, 0);
			-webkit-transform: scale(1) rotate(0) translate3d(-200px, 200px, 0);
			-moz-transform: scale(1) rotate(0) translate3d(-200px, 200px, 0);
		}

		100% {
			opacity: 0;
			transform: scale(1) rotate(0) translate3d(-300px, 300px, 0);
			-webkit-transform: scale(1) rotate(0) translate3d(-300px, 300px, 0);
			-moz-transform: scale(1) rotate(0) translate3d(-300px, 300px, 0);
		}
	}
</style>