<template>
	<view>
		<view 
			class="record-popup "
			:style="{ '--popup-height': popupHeight, '--popup-width': upx2px(popupMaxWidth), '--popup-bottom': upx2px(popupFixBottom), '--popup-bg-color': popupBgColor }"
		>
			<view class="inner-content" >
				<view class="title">{{ btnTextContent }}{{showIntervalStr}}''</view>
				<view
					class="voice-line-wrap"
					v-if="recording"
					:style="{ '--line-height': upx2px(lineHeight+100), '--line-start-color': lineStartColor, '--line-end-color': lineEndColor }"
				@click="endRecord()">
					<view class="voice-line one"></view>
					<view class="voice-line two"></view>
					<view class="voice-line three"></view>
					<view class="voice-line four"></view>
					<view class="voice-line five"></view>
					<view class="voice-line six"></view>
					<view class="voice-line seven"></view>
					<view class="voice-line six"></view>
					<view class="voice-line five"></view>
					<view class="voice-line four"></view>
					<view class="voice-line three"></view>
					<view class="voice-line two"></view>
					<view class="voice-line one"></view>
				</view>
				<view class="tn-icon-voice  " style="font-size: 80px;" v-if="!recording" @click="startRecord()"></view>
			
				

				<view v-if="recording" class="tn-flex-1 justify-content-item tn-margin-sm tn-text-center" @click="endRecord()" style="width:200px;">
					<tn-button backgroundColor="#cfcfcf" padding="40rpx 0" width="60%" shadow fontBold>
						<text class="tn-icon-edit tn-padding-right-xs tn-color-black"></text>
						<text class="tn-color-black">停止录音</text>
					</tn-button>
				</view>
				
				
				<view v-else class="tn-flex-1 justify-content-item tn-margin-sm tn-text-center" @click="startRecord()" style="width:200px;">
					<tn-button backgroundColor="tn-cool-bg-color-5" padding="40rpx 0" width="60%" shadow fontBold>
						
						<text class="">开始录音</text>
					</tn-button>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
var that;
let timer;
const recorderManager = uni.getRecorderManager();
// #ifdef APP-PLUS
// 引入权限判断
import permision from '../../js_sdk/wa-permission/permission.js';
// #endif
export default {
	name: 'nbVoiceRecord',
	/**
	 * 录音交互动效组件
	 * @property {Object} recordOptions 录音配置
	 * @property {Object} btnStyle 按钮样式
	 * @property {Object} btnHoverFontcolor 按钮长按时字体颜色
	 * @property {String} btnHoverBgcolor 按钮长按时背景颜色
	 * @property {String} btnDefaultText 按钮初始文字
	 * @property {String} btnRecordingText 录制时按钮文字
	 * @property {Boolean} vibrate 弹窗时是否震动
	 * @property {String} popupTitle 弹窗顶部文字
	 * @property {String} popupDefaultTips 录制时弹窗底部提示
	 * @property {String} popupCancelTips 滑动取消时弹窗底部提示
	 * @property {String} popupMaxWidth 弹窗展开后宽度
	 * @property {String} popupMaxHeight 弹窗展开后高度
	 * @property {String} popupFixBottom 弹窗展开后距底部高度
	 * @property {String} popupBgColor 弹窗背景颜色
	 * @property {String} lineHeight 声波高度
	 * @property {String} lineStartColor 声波波谷时颜色色值
	 * @property {String} lineEndColor 声波波峰时颜色色值
	 * @event {Function} startRecord 开始录音回调
	 * @event {Function} endRecord 结束录音回调
	 * @event {Function} cancelRecord 滑动取消录音回调
	 * @event {Function} stopRecord 主动停止录音
	 */
	props: {		
		
		btnStyle: {
			type: Object,
			default() {
				return {
					width: '300rpx',
					height: '80rpx',
					borderRadius: '20rpx',
					backgroundColor: '#fff',
					border: '1rpx solid whitesmoke',
					permisionState: false
				};
			}
		},
		btnHoverFontcolor: {
			type: String,
			default: '#000' // 颜色名称或16进制色值
		},
		btnHoverBgcolor: {
			type: String,
			default: 'whitesmoke' // 颜色名称或16进制色值
		},
		btnDefaultText: {
			type: String,
			default: '准备录音'
		},
		btnRecordingText: {
			type: String,
			default: '录音中'
		},
		vibrate: {
			type: Boolean,
			default: true
		},
		popupTitle: {
			type: String,
			default: '正在录制音频'
		},
		popupDefaultTips: {
			type: String,
			default: '左右滑动后松手完成录音'
		},
		popupCancelTips: {
			type: String,
			default: '松手取消录音'
		},
		popupMaxWidth: {
			type: Number,
			default: 600 // 单位为rpx
		},
		popupMaxHeight: {
			type: Number,
			default: 300 // 单位为rpx
		},
		popupFixBottom: {
			type: Number,
			default: 200 // 单位为rpx
		},
		popupBgColor: {
			type: String,
			default: 'whitesmoke'
		},
		lineHeight: {
			type: Number,
			default: 50 // 单位为rpx
		},
		lineStartColor: {
			type: String,
			default: 'royalblue' // 颜色名称或16进制色值
		},
		lineEndColor: {
			type: String,
			default: 'indianred' // 颜色名称或16进制色值
		},
		shijian: {
			type: Number,
			default:60 // 
		}	
	},
	data() {
		return {	
			intervalTime:60,
			showIntervalStr: 0,
			stopStatus: false, // 是否已被父页面通知主动结束录音
			btnTextContent: this.btnDefaultText,
			startTouchData: {},
			popupHeight: '120px', // 这是初始的高度
			recording: false, // 录音中
			recordPopupShow: false,
			recordTimeout: null ,// 录音定时器
			permisionState: false,
		};
	},
	created() {
		let that=this
		this.recordOptions= '{"duration":"' + this.shijian*1000 + '"}';
		this.intervalTime=this.shijian
	    console.log(this.shijian,1111111)
		// 请求权限
		//this.checkPermission();
		that.showIntervalStr = that.intervalTime;
		recorderManager.onStop(res => {	
			res['duration']=that.intervalTime-that.showIntervalStr		
			that.showIntervalStr=0
			that.recording=false
			that.popupHeight = '0px';
			that.recordPopupShow = false;		
			that.btnTextContent = this.btnDefaultText;		
			clearInterval(that.recordTimeout);
		
			if (res['duration']<5){
			that.msg('不能低于5秒哦')
			that.showIntervalStr=that.intervalTime
			}else{
			that.$emit('endRecord', res);
			}
			
		});

	
	},
	computed: {},
	methods: {
		
		startIntervalFn() {
			let that = this;
			that.showIntervalStr = that.intervalTime;
			clearInterval(that.recordTimeout);
			that.recordTimeout = setInterval(() => {
				that.showIntervalStr--;
				if (that.showIntervalStr <= 0) {
					that.stopRecord(); // 结束录音动画（实际上录音的end回调已经先执行）
				}
			}, 1000);
		},
		
		upx2px(upx) {
			return uni.upx2px(upx) + 'px';
		},
		
		
		
		checkPermission_xcx(){
			// #ifdef MP
			let that=this
				
			uni.authorize({
				scope: 'scope.record',
				success(e) {
					console.warn(e)
					that.permisionState = true;
					 that.startRecord();
				},
				fail() {
					uni.showToast({
						title: '请授权使用录音',
						icon: 'none'
					});
				}
			});
			// #endif
		},
		
		
		
		async checkPermission() {
			
			// #ifdef APP-PLUS
			// 先判断os
			let os = uni.getSystemInfoSync().osName;
			if (os == 'ios') {
				this.permisionState = await permision.judgeIosPermission('record');
			} else {
				this.permisionState = await permision.requestAndroidPermission('android.permission.RECORD_AUDIO');
			}
			if (this.permisionState !== true && this.permisionState !== 1) {
				uni.showToast({
					title: '请先授权使用录音',
					icon: 'none'
				});
				return;
			}
			// #endif		
			// #ifdef H5
			this.msg('H5不支持语音录制')
			// #endif
		},


		tanchulyin(){
		this.recordPopupShow = true;	
		},

		startRecord() {
		
			if (!this.permisionState) {	
				
				// #ifdef APP-PLUS||H5
				this.checkPermission();
				// #endif		
				
				// #ifdef MP
				this.checkPermission_xcx();
				// #endif
				
				return;
			}		
				
			
				
			this.recording = true;
			this.stopStatus = false;
			setTimeout(() => {
				this.popupHeight = this.upx2px(this.popupMaxHeight);
				setTimeout(() => {					
					this.btnTextContent = this.btnRecordingText;
					if (this.vibrate) {
						// #ifdef APP-PLUS
						plus.device.vibrate(35);
						// #endif
						// #ifdef MP
						uni.vibrateShort();
						// #endif
					}
					// 开始录音
					this.startIntervalFn()
					recorderManager.start(this.recordOptions);
					// 设置定时器
				

					this.$emit('startRecord');
				}, 100);
			}, 200);
		},
		endRecord() {
			if (this.stopStatus) {
				return;
			}
		
			recorderManager.stop();
		},
		stopRecord() {		
			// 用法如你录音限制了时间，那么将在结束时强制停止组件的显示
			this.endRecord();
			this.stopStatus = true;
		}
	
	}
};
</script>
<style lang="scss">
.record-btn {
	color: #000;
	font-size: 24rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.25s all;
	border: 1rpx solid whitesmoke;
}

.record-btn-hover {
	color: var(--btn-hover-fontcolor) !important;
	background-color: var(--btn-hover-bgcolor) !important;
}

.record-popup {
	position: absolute;
	bottom: var(--popup-bottom);
	width: 100%;
	height: var(--popup-height);
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 10rpx;
	color: #000;
	transition: 0.2s height;

	.inner-content {
		height: var(--popup-height+50);
		font-size: 36rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;

		.title {
			font-weight: bold;
			padding: 20rpx 0;
		}
		.tips {
			color: #999;
			padding: 20rpx 0;
		}
	}
}

.cancel-icon {
	width: 100rpx;
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	font-size: 44rpx;
	line-height: 44rpx;
	background-color: pink;
	border-radius: 50%;
	transform: rotate(45deg);
}

.voice-line-wrap {
	display: flex;
	align-items: center;
	.voice-line {
		width: 10rpx;
		height: var(--line-height);
		border-radius: 3rpx;
		margin: 0 5rpx;
	}

	.one {
		animation: wave 0.4s 1s linear infinite alternate;
	}
	.two {
		animation: wave 0.4s 0.9s linear infinite alternate;
	}
	.three {
		animation: wave 0.4s 0.8s linear infinite alternate;
	}
	.four {
		animation: wave 0.4s 0.7s linear infinite alternate;
	}
	.five {
		animation: wave 0.4s 0.6s linear infinite alternate;
	}
	.six {
		animation: wave 0.4s 0.5s linear infinite alternate;
	}
	.seven {
		animation: wave 0.4s linear infinite alternate;
	}
}

@keyframes wave {
	0% {
		transform: scale(1, 1);
		background-color: var(--line-start-color);
	}
	100% {
		transform: scale(1, 0.2);
		background-color: var(--line-end-color);
	}
}
</style>
