<template>
	<div class="trtc-container">
		<view class="trtc-video-area">
			<view class="trtc-video-view" id='root'>
				<trtc-local-view :viewId="userId" style="height: 403.84rpx;flex: 1;"></trtc-local-view>
			</view>
			<view class="trtc-video-view">
				<trtc-remote-view v-if="remoteUserId" :userId="remoteUserId" :viewId="remoteUserId" style="height: 403.84rpx;flex: 1">
				</trtc-remote-view>
			</view>
		</view>
		<view class="trtc-title-container">
			<text class="trtc-title-text" style="text-align: center;">Local Preview</text>
			<text class="trtc-title-text" style="text-align: center;">Remote View</text>
		</view>

		<view class="trtc-row-area">
			<text class="trtc-title-text">roomId</text>
			<input type="text">
			<input class="trtc-input" style="width: 182.69rpx;" type="number" auto-blur=true :value="roomId"
				@input="bindInputChange($event, 'roomId')" />
			<text class="trtc-title-text">userId</text>
			<input class="trtc-input" style="width: 182.69rpx;" auto-blur=true :value="userId"
				@input="bindInputChange($event, 'userId')" />
		</view>
		<view class="trtc-line"></view>
		<view class="trtc-row-area">
			<text class="trtc-title-text">Step1</text>
			<text class="trtc-conent-text">Create TrtcCloud</text>
			<button class="trtc-btn-mid" type="primary" size="mini" @click="createTrtcCloud">Create TrtcCloud</button>
		</view>
		<view class="trtc-row-area ">
			<text class="trtc-title-text">Step2</text>
			<text class="trtc-conent-text">Enter Room</text>
			<button class="trtc-btn-mid" type="primary" size="mini" @click="enterRoom">Enter Room</button>
		</view>
		<view class="trtc-row-area">
			<text class="trtc-title-text">Step3</text>
			<text class="trtc-conent-text">Start Local Preview</text>
			<button class="trtc-btn-mid" type="primary" size="mini" @click="startLocalPreview">Start Local Preview</button>
		</view>
    <view class="trtc-row-area">
			<text class="trtc-title-text">Step4</text>
			<text class="trtc-conent-text">Start Local Audio</text>
			<button class="trtc-btn-mid" type="primary" size="mini" @click="startLocalAudio">Start Local Audio</button>
		</view>
		<view class="trtc-row-area">
			<text class="trtc-title-text">Step5</text>
			<text class="trtc-conent-text">Start Remote View</text>
			<button class="trtc-btn-mid" type="primary" size="mini" @click="startRemoteView">Start Remote View</button>
		</view>
		<button class="trtc-btn-long" style="margin-top: 20rpx;" type="primary" @click="muteRemoteAudio">{{remoteAudioMuteState ? 'Unmute' : 'Mute'}} Remote Audio</button>
		<button class="trtc-btn-long" style="margin-top: 20rpx;" type="primary" @click="switchCamera">切到{{isFrontCamera ? '后' : '前'}}置Camera</button>
		<button class="trtc-btn-long" style="margin-top: 20rpx;" type="primary" @click="muteLocalAudio">{{localAudioMuteState ? 'Unmute' : 'Mute'}} Local Audio</button>
		<button class="trtc-btn-long" style="margin-top: 20rpx;" type="primary" @click="muteLocalVideo">{{localVideoMuteState ? 'Unmute' : 'Mute'}} Local Video</button>
		<button class="trtc-btn-long" style="margin-top: 20rpx;" type="primary" @click="switchAudioRoute">切换到 {{audioRoute === 0 ? '听筒' : '免提'}}</button>
		<button class="trtc-btn-long" style="margin-top: 20rpx;" type="primary" @click="exitRoom">Exit Room</button>
		<button class="trtc-btn-long" type="primary" @click="destroyInstance">Destroy TrtcCloud</button>
	</div>
</template>

<script>
	import permision from "@/TrtcCloud/permission.js";
	import TrtcCloud from '@/TrtcCloud/lib/index';
	import { TRTCAppScene, TRTCVideoStreamType, TRTCAudioRoute, TRTCAudioQuality } from '@/TrtcCloud/lib/TrtcDefines';
	import { genTestUserSig } from '@/debug/GenerateTestUserSig';
	const roomId = Math.floor(Math.random() * 100000).toString();
	const userId = 'user_' + Math.floor(Math.random() * 100000).toString();

	export default {
		components: {		
		},
		data() {
			return {
				trtcCloud: null,
				sdkAppId: 0,
				userSig: '',
				roomId: Math.floor(Math.random() * 100000),
				userId: 'user_' + Math.floor(Math.random() * 100000).toString(),
				appScene: TRTCAppScene.TRTCAppSceneVideoCall, // TRTCAppSceneVideoCall
				isFrontCamera: true,
				streamType: TRTCVideoStreamType.TRTCVideoStreamTypeBig,
				remoteUserId: '',
				audioRoute: TRTCAudioRoute.TRTCAudioRouteSpeaker,
				remoteAudioMuteState: false,
				localAudioMuteState: false,
				localVideoMuteState: false,
			}
		},
		onLoad(option) {
			this.roomId=option.id
		},
		mounted() {
			if (uni.getSystemInfoSync().platform === 'android') {
				permision.requestAndroidPermission('android.permission.RECORD_AUDIO');
				permision.requestAndroidPermission('android.permission.CAMERA');
			}

			// 生成 userSig
			const { sdkAppId, userSig } = genTestUserSig(this.userId);
			this.sdkAppId = sdkAppId;
			this.userSig = userSig;
			if (!sdkAppId || !userSig) {
				uni.showToast({
					title: '请填写 sdkAppId、userSig',
					icon: 'none'
				});
			}
		},
		onUnload() {
			this.destroyInstance();
			console.log('- onUnload');
		},
		unmounted() {
			this.handleUninstallEvents();
		},
		onBackPress() {
			this.destroyInstance();
		},
		methods: {
			bindInputChange(event, type) {
				const value = event.detail.value;
				switch (type) {
					case 'roomId': {
						this.roomId = value;
						break;
					}
					case 'userId': {
						this.userId = value;
						break;
					}
				}
			},
			destroyInstance() {
				if (this.trtcCloud) {
					TrtcCloud.destroyInstance();
					this.trtcCloud = null;
					uni.showToast({
						title: '销毁实例',
						icon: 'none'
					});
				}
			},
			createTrtcCloud() {
				uni.showToast({
					title: '创建实例 ',
					icon: 'none',
				});
				this.trtcCloud = TrtcCloud.createInstance();
				this.handleEvents();
			},
			enterRoom() {
				try {
					const { roomId, userId, sdkAppId, appScene, userSig } = this;
					let param = { roomId: +roomId, userId, sdkAppId, userSig };
					this.trtcCloud.enterRoom(param, appScene);
					uni.showToast({
						title: 'enterRoom ',
						icon: 'none',
					});
				} catch (error) {
					console.log(`enterRoom error = ${JSON.stringify(error)}`);
				}
			},
			exitRoom() {
				try {
					this.stopLocalPreview();
					this.stopRemoteView();
          this.stopLocalAudio();
					this.trtcCloud.exitRoom();
          this.remoteUserId = '';
					this.handleUninstallEvents();
				} catch (e) {
					// TODO handle the exception
				}
			},
      // 本地预览
			startLocalPreview() {
				this.trtcCloud.startLocalPreview(this.isFrontCamera, this.userId);
				uni.showToast({
					title: 'localPreview',
					icon: 'none',
				});
			},
			stopLocalPreview() {
				this.trtcCloud.stopLocalPreview();
			},
			// 切前置、后置
			switchCamera() {
				this.isFrontCamera = !this.isFrontCamera;
				this.trtcCloud.switchCamera(this.isFrontCamera);
			},
      muteLocalVideo() {
				this.localVideoMuteState = !this.localVideoMuteState;
				this.trtcCloud.muteLocalVideo(TRTCVideoStreamType.TRTCVideoStreamTypeBig, this.localVideoMuteState);
			},
			startLocalAudio() {
        try {
          this.trtcCloud.startLocalAudio();
          uni.showToast({ title: 'start local audio', icon: 'none' })
        } catch (e) {

        }
      },
      stopLocalAudio() {
        this.trtcCloud.stopLocalAudio();
      },
			muteLocalAudio() {
				this.localAudioMuteState = !this.localAudioMuteState;
				this.trtcCloud.muteLocalAudio(this.localAudioMuteState);
			},
			startRemoteView() {
				if (this.remoteUserId) {
					this.trtcCloud.startRemoteView(this.remoteUserId, this.streamType, this.remoteUserId);
					uni.showToast({
						title: `the remoteUserId: ${this.remoteUserId}`,
						icon: 'none',
					});
				} else {
					uni.showToast({
						title: '无远端用户',
						icon: 'none',
					});
				}
			},
			stopRemoteView() {
				if (this.remoteUserId) {
					this.trtcCloud.stopRemoteView(this.remoteUserId, this.streamType);
				}
			},
			muteRemoteAudio() {
				this.remoteAudioMuteState = !this.remoteAudioMuteState;
				console.log('远端用户 id = ', this.remoteUserId, '状态 = ', this.remoteAudioMuteState);
				this.remoteUserId && this.trtcCloud.muteRemoteAudio(this.remoteUserId, this.remoteAudioMuteState);
			},
			// 听筒、免提 切换
			switchAudioRoute() {
				this.audioRoute = this.audioRoute === TRTCAudioRoute.TRTCAudioRouteSpeaker ? TRTCAudioRoute.TRTCAudioRouteEarpiece : TRTCAudioRoute.TRTCAudioRouteSpeaker;
				this.trtcCloud.setAudioRoute(this.audioRoute);
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
					console.log(`- onEnterRoom = ${result}`);
					if (result > 0) {
						uni.showToast({
							title: `进房成功，耗时: ${result}ms`,
							icon: 'none',
						});
					} else {
						console.log(`enter room failed，error code = ${result}`);
					}
				});
				this.trtcCloud.on('onExitRoom', (reason) => {
					const reasonList = ['主动调用 exitRoom 退房', '被服务器踢出当前房间', '当前房间整个被解散'];
					uni.showToast({
						title: `退房 ${reasonList[reason]}`,
						icon: 'none',
						duration: 1000
					});
				});
				this.trtcCloud.on('onFirstVideoFrame', (res) => {
					console.log(`渲染的首帧画面响应 = ${JSON.stringify(res)}`);
				});
				this.trtcCloud.on('onRemoteUserEnterRoom', (userId) => {
					this.remoteUserId = userId;
					uni.showToast({
						title: `远端进房: userId = ${userId}`,
						icon: 'none',
					});
				});
				this.trtcCloud.on('onUserVideoAvailable', (res) => {
					const {
						userId,
						available
					} = res;
					console.log('onUserVideoAvailable = ', res);
					if (userId && available) {
						this.remoteUserId = userId;
					}
				});
			},
			handleUninstallEvents() {
				this.trtcCloud.off('*');
			}
		}
	}
</script>

<style>

</style>
