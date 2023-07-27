<template>
	<view class="template-content">

		<tn-nav-bar fixed :isBack="true">
			<text class=""
				@click="navigateToFn({ url: '/circlePages/blogger_other?id='+toid, checkLogin: false })">{{toname}}</text>
			<block v-if="to_is_online==1">
			<!-- <text class="tn-color-gray tn-text-xs tn-margin-left-sm" v-if="is_online=='离线'">{{is_online}}</text>
			<text class="tn-color-blue tn-text-xs tn-margin-left-sm" v-else>{{is_online}}</text>
			 --></block>
	
		</tn-nav-bar>

		<view class="" :style="{paddingTop: vuex_custom_bar_height + 'px'}">


			<view :class="isRecording ? '' : 'modal-display'" class="record-modal ">
				<view class="wrapper">
					<view class="modal-loading"></view>
				</view>
				<view class="modal-title">
					{{title}}{{sec}}''
				</view>


			</view>






			<view class="tn-text-justify">



				<view class="tn-text-center">
					<tn-loading :show="ajax.loading" color="#01BEFF"></tn-loading>
				</view>

	


				<view v-for="(item,index) in talkList" :key="index" :id="`msg-${item.id}`">

					<view class="tn-text-center" v-if="withinArry.indexOf(index) ==-1">
						<text class="tn-bg-gray--light tn-text-xs" style="border-radius: 6rpx;padding: 10rpx 14rpx;">
							{{timeChange(item.create_time)}}</text>
					</view>


					<view class="tn-margin" v-if="item.is_self==false">
						<view class="tn-flex tn-flex-row-between tn-flex-col-center">
							<view class="justify-content-item">
								<view class="tn-flex tn-flex-col-top tn-flex-row-left">
									<view class="logo-pic tn-shadow-blur tn-margin-top-sm"
										:style="'background-image:url('+tohead+')'" @click="navigateToFn({ url: '/circlePages/blogger_other?id='+toid, checkLogin: false })">
										<view class="logo-image">
										</view>
									</view>
									<view class="tn-padding-right tn-color-black">

										<view class="tn-padding-left-sm tn-text-bold tn-margin-top-sm"
											style="max-width: 62vw;" @click="navigateToFn({ url: '/circlePages/blogger_other?id='+toid, checkLogin: false })">
											{{toname}}
										</view>
										<view class="tn-flex tn-flex-col-center" v-if="item.type=='text'">
											<view class="tnchat3 tn-margin-sm" style="max-width: 62vw;">
												<rich-text :nodes="item.content"></rich-text>
											</view>
											<view class="">
												<!-- 发送失败 -->
												<!-- <text class="tn-icon-warning-fill tn-color-purplered tn-text-xxl"></text> -->
											</view>
										</view>



										<view v-if="item.type=='music'" @click="paymp3(item.content,item.id)"
											class="tn-margin-sm tn-padding-sm" :style="{width: item.sec+24 + 'vw'}"
											style="max-width: 60vw;min-width: 20vw;border-radius: 0 15rpx 15rpx 15rpx;background-color: #6fde89;">

											<view class="yuyinbg" :class="playMsgid == item.id?'voicePlay':''">
											</view>
											<view class="tn-color-white" style="margin-left: 20px;">{{item.sec}} ''
											</view>

										</view>


										<view class=" tn-margin-sm " v-if="item.type=='image'" style="max-width: 60vw;"
											@tap="showPic(item.content)">
											<image mode="widthFix" :src="item.content" style="width: 40vw"></image>
										</view>

					<view class=" tn-margin-sm " v-if="item.type=='img'" style="max-width: 60vw;"
											@tap="showPic(item.content)">
											<image mode="widthFix" :src="item.content" style="width: 40vw"></image>
										</view>







									</view>
								</view>
							</view>
							<view class="justify-content-item">
								<!-- 预留空位 -->
							</view>
						</view>
					</view>




					<view class="tn-margin" v-else>
						<view class="tn-flex tn-flex-row-between tn-flex-col-center">
							<view class="justify-content-item">
								<!-- 预留空位 -->
							</view>
							<view class="justify-content-item">
								<view class="tn-flex tn-flex-col-top tn-flex-row-left">

									<view class="tn-padding-left tn-color-black">
										<view class="tn-padding-right tn-text-bold tn-margin-top-sm tn-text-right"
											style="max-width: 62vw;">
											{{fromname}}
										</view>
										<view class="tn-flex tn-flex-col-center">
											<view class="" v-if="item.send_ok==0">
												<text
													class=" tn-icon-warning-fill tn-color-purplered tn-text-xxl"></text>
											</view>
											<view class="tnchat4 tn-margin-sm" style="max-width: 62vw;"
												v-if="item.type=='text'">

												<rich-text :nodes="item.content"></rich-text>
											</view>


											<view v-if="item.type=='music'" @click="paymp3(item.content,item.id)"
												class="tn-margin-sm tn-padding-sm tn-text-right"
												:style="{width: item.sec+24 + 'vw'}"
												style="max-width: 60vw;min-width: 20vw;border-radius: 15rpx 0rpx 15rpx 15rpx;background-color: #6fde89;">

												<view class="yuyinbg_right"
													:class="playMsgid == item.id?'voicePlay_right':''">
												</view>
												<view class="tn-color-white">{{item.sec}} ''</view>

											</view>


											<view v-if="item.type=='img'" class=" tn-margin-sm "
												style="max-width: 60vw;" @tap="showPic(item.content)">
												<view class="">
													<image mode="widthFix" :src="item.content" style="width: 40vw">
													</image>
												</view>
											</view>



										</view>






									</view>
									<view class="logo-pic tn-shadow-blur tn-margin-top-sm"
										:style="'background-image:url('+fromhead+')'">
										<view class="logo-image">
										</view>
									</view>

								</view>
							</view>
						</view>
						
					</view>



				</view>
			</view>

		</view>






		<!--  输入框及选择框部分 -->
		<view class="bottom">
			<view class="bottom-div">
				<!-- <view class="btn-left" @click="chooseRecord">
					<image v-if="!isRecord" style="width:48rpx;height:48rpx" src="@/static/images/audio.png" mode="" />

					<text v-else class="tn-icon-keyboard-circle" style="font-size: 26px;"></text>

				</view> -->
				<view v-if="!isRecord" style="width: 100%">
					<input type="text" class="input" @confirm="sendmsg" confirm-type="send" :adjust-position="true"
						:auto-blur="true" :confirm-hold="true" v-model="sendmsgBoy" placeholder="输入新消息" :focus="isFocus">
				</view>
				<view class="record" id="record" v-if="isRecord" @longpress="handleLongPress"
					@touchcancel="handleTouchEnd" @touchmove="handleTouchMove" @touchend="handleTouchEnd"
					@touchmove.prevent>
					<template v-if="!isRecording">
						按住 说话
					</template>
					<template v-if="isRecording">
						松开 结束
					</template>
				</view>

				</text>
				

				<view class="btn" @click="chooseImage()">
					<text class="tn-icon-image" style="font-size: 26px;"></text>
				</view>

			</view>
			<!-- emoji部分-->
			<view class="bottom-emoji" v-if="isEmojiOpen">
				<view class="emoji-tab">


					<tn-tabs :list="configInfo.emolist" :current="emojiindex" backgroundColor="#FFFFFF"
						@change="tabChange"></tn-tabs>



				</view>

				<view class="emojis" v-if="emojiShow">
					<view v-for="(emojiItem, index3) in configInfo.emolist[emojiindex].emolist_pic" class="emoji"
						:key="index3" @click="chooseEmoji(emojiItem)">
						<image :src="emojiItem" style="width:100%;height:100%" mode="widthFix" />
					</view>
				</view>
			</view>
			<!--    更多部分-->
			<view class="bottom-image" v-if="isMoreOpen">


			</view>
		</view>









		<view class='tn-tabbar-height'></view>

	</view>
</template>

<script>
	import {
		host
	} from '@/siteinfo.js'

	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	import permision from "@/js_sdk/wa-permission/permission.js"
	const audioContext = uni.createInnerAudioContext()
	const recorderManager = uni.getRecorderManager()
	const recordOptions = {
		duration: 60000,
		sampleRate: 44100,
		numberOfChannels: 1,
		encodeBitRate: 192000,
		format: 'aac' // 音频格式，选择此格式创建的音频消息，可以在即时通信 IM 全平台（Android、iOS、微信小程序和Web）互通
	}




	export default {

		data() {
			return {
				is_xianzhi:false,
				is_liaoguo:true,
				emojiindex: 0,
				isplay: false,
				playMsgid: 0,
				is_frind: 0,
				jintian: '',
				talkList: [],
				ajax: {
					rows: 10, //每页数量
					page: 1, //页码
					flag: true, // 请求开关
					loading: true, // 加载中
					loadText: '正在获取消息'
				},
				withinArry: [],
				userinfo: [],
				toname: '',
				fromname: '',
				tohead: '',
				fromhead: '',
				content: [],
				userInfoAvatar_no: '/static/navigation.png',
				sendmsgBoy: '',
				toid: 0,
				fromid: 0,
				is_online: '离线',
				/////
				messageContent: '',
				conversation: {},
				messageKey: '',
				lastMsgTime: '',
				count: 15,
				isEmojiOpen: false,
				isMoreOpen: false,
				isFocus: false,
				isGroup: false,
				messageList: [],
				height: 0,
				modalVisible: false,
				downloadInfo: {},
				percent: 0,
				sysInfo: {},
				customModalVisible: false,
				customData: '',
				customDescription: '',
				customExtension: '',
				focusedInput: '',
				safeBottom: 34,
				isRecord: false,
				isRecording: false,
				canSend: true,
				startPoint: 0,
				title: '正在录音',
				rateModal: false,
				rate: 5,
				isShow: false,
				faceUrl: '',
				emojiShow: true,
				revokeModal: false,
				revokeMessage: {},
				currentTime: 0,
				currentTimeID: '',
				isIphoneX: true,
				timer: null,
				sec: 0,
				to_is_online:0,
			}
		},
		onLoad(option) {
			let that = this
			this.toid = 1		
			this.fromid = uni.getStorageSync('user_id')
			this.$socket.bind();	
			this.jintian = this.getNowDate()
			this.info()
			this.getHistoryMsg()		
			// 注册接受消息监听
			uni.$on('talkMessage', (data) => {
			
				let message=data.data								
				console.log(message)	
			
				switch (message.type) {
					case "friend":						
							let inmsg = {
								is_self: false,
								type: 'text',
								content: message.content,
								create_time: message.create_time
							};
							this.pushmsg(inmsg)
							this.paymp3('/static/shou.mp3', 0)				
							this.is_liaoguo=true
					//	uni.$emit('jianshacount',1)
					
						return;


					case "music":
						if (this.toid == message.fromid) {
							let inmsg = {
								is_self: false,
								type: 'music',
								sec: message.sec,
								content: message.data,
								create_time: message.create_time
							};
							this.is_liaoguo=true
							this.pushmsg(inmsg)
							this.paymp3('/static/shou.mp3', 0)
							this.changeNoRead()
							uni.$emit('jianshacount',1)
						}
						return;

					case "img":
						if (message.type) {
							let inmsg = {
								is_self: false,
								type: 'image',
								sec: message.content,
								content: message.content,
								create_time: message.create_time
							};
							this.is_liaoguo=true
							this.pushmsg(inmsg)
							this.paymp3('/static/shou.mp3', 0)
							this.changeNoRead()
							uni.$emit('jianshacount',1)
						}
						return;
					case "save":
						if (message.isread == 1) {
							this.is_online = '在线'
						} else {
							this.is_online = '离线'
						}
						return;
					case "online":
						if (message.status == 1) {
							this.is_online = '在线'

						} else {
							this.is_online = '离线'
						}



				}
			});


			///监听语音
			recorderManager.onStart(() => {
				console.log('recorder start')
			})
			recorderManager.onPause(() => {
				console.log('recorder pause')
			})


			recorderManager.onStop(function(res) {
				audioContext.src = res.tempFilePath
				let sec = 0
				setTimeout(() => {
					sec = Math.round(audioContext.duration)
					console.log(sec, that.sec)

					if (that.canSend) {
						if (sec < 2) {
							that.msg('太短了')
						} else {
							that.sendmp3(res.tempFilePath, sec)
						}
					}
				}, 500);






			});







		},



		onPageScroll(e) {

			if (e.scrollTop < 5) {
				this.getHistoryMsg()
			}
		},

		onUnload: function() {
			uni.$off('talkMessage')
		},




		methods: {

			async info() {
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/Service/getChatTwoUser',
					data: {
						toid: that.toid,
						fromid: that.fromid
					}
				});

				if (result.statusCode == 200) {
					if (result.data.code == 200) {						
						if (result.data.data.is_liaoguo==0){
						that.is_liaoguo=false
						}		
						that.to_is_online = result.data.data.toInfo.is_online
						that.userinfo = result.data.data
						that.toname = result.data.data.toInfo.nickname
						that.fromname = result.data.data.fromInfo.nickname
						that.tohead = result.data.data.toInfo.avatar
						that.fromhead = result.data.data.fromInfo.avatar
					} else {
						uni.showModal({
							title: '提示',
							content: result.data.msg,
							confirmText:'知道了',
							showCancel:false,
							success: function (res) {
								if (res.confirm) {
									uni.navigateBack()
								} else if (res.cancel) {
									console.log('用户点击取消');
								}
							}
						});	
						
					
					}
				} else {
					uni.showToast({
						icon: 'none',
						title: that.$errorMsg
					});
				}

			},

			async changeNoRead() {
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/Service/changeNoRead',
					data: {
						toid: that.toid
					}
				});
			},
			async save_message(datassd) {
				let that = this;
				
				
				//this.$socket.send(datassd);
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/Service/sendMessage',
					data:datassd
				});


			},

			sendmsg() {
				
				if (!this.sendmsgBoy){
					return
				}
				
				
				let that = this
				var message = '{"data":"' + this.sendmsgBoy + '","sec":"' + this.sec + '","type":"text","fromid":"' + this
					.fromid + '","toid":"' +
					this.toid + '"}';

			
				let inmsg = {
					is_self: true,
					content: this.sendmsgBoy,
					type: 'text',
					sec: 0,
					create_time: that.jintian
				};
				this.pushmsg(inmsg)
				this.paymp3('/static/fa.mp3', 0)
				this.isEmojiOpen = false
				this.save_message(message);
			},
			sendmp3(url, sec) {

				let that = this			

				let inmsg = {
					is_self: true,
					content: url,
					type: 'music',
					sec: sec,
					create_time: that.jintian
				};
				this.pushmsg(inmsg)
				this.paymp3('/static/fa.mp3')

				uni.uploadFile({
					url: host + '/api/user/up_mp3', //仅为示例，非真实的接口地址
					filePath: url,
					name: 'file',
					formData: {
						'token': uni.getStorageSync('token'),
						'user': 'test'
					},
					success: (uploadFileRes) => {
						let data = JSON.parse(uploadFileRes.data)
						let mp3url =data.data.file

						var message = '{"data":"' + mp3url + '","sec":"' + sec +
							'","type":"music","fromid":"' + this.fromid + '","toid":"' +
							this.toid + '"}';
						this.save_message(message);

					}
				});







			},











			pushmsg(data) {
				this.sendmsgBoy = ''
				this.talkList.push(data);
				this.doHistory()
				this.bootem()
			},

			bootem() {
				this.$nextTick(() => {
					uni.pageScrollTo({
						scrollTop: 999999, // 设置一个超大值，以保证滚动条滚动到底部
						duration: 0
					});
				})

			},






			async list() {
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/Service/load',
					data: {
						toid: that.toid,
						page: that.ajax.page
					}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						return result.data.data.data.reverse()
					}

				} else {
					uni.showToast({
						icon: 'none',
						title: that.$errorMsg
					});
				}
			},

			doHistory() {
		
				var within = [];
				for (var i = 0; i < this.talkList.length; i++) {
					if (this.talkList.length >= (i + 2)) {
						var lst = Date.parse(this.talkList[i + 1].create_time.replace(/-/g, '/')) - Date.parse(this.talkList[i].create_time.replace(/-/g, '/'));
						//（60000 == 一分钟）
						if (lst < 300000) {
							//获取小于5分钟的信息的下标存到数组中
							within.push(i + 1)
							within.forEach((item, i) => {
								//6条信息后显示一次发送时间
								if (item % 8 == 0) {
									within.splice(i, 1);
								} else {
									return true;
								}
							})
							this.withinArry = within;

						}
					}
				}
			},
			
	
			


			// 获取消息
			getHistoryMsg() {


				if (!this.ajax.flag) {
					return;
				}

				let get = async () => {
					//this.hideLoadTips();
					this.ajax.flag = false;
					let data = await this.list();

					if (data.length == 0) {
						this.ajax.loading = false;
						return
					}
					let selector = '';
					if (this.ajax.page > 1) {
						// 非第一页，则取历史消息数据的第一条信息元素
						selector = `#msg-${this.talkList[0].id}`;
					} else {
						// 第一页，则取当前消息数据的最后一条信息元素
						selector = `#msg-${data[data.length-1].id}`;

					}

					// 将获取到的消息数据合并到消息数组中
					this.talkList = [...data, ...this.talkList];

					this.doHistory()

					// 数据挂载后执行，不懂的请自行阅读 Vue.js 文档对 Vue.nextTick 函数说明。
					this.$nextTick(() => {
						// 设置当前滚动的位置
						this.setPageScrollTo(selector);

						this.hideLoadTips(true);

						if (data.length < this.ajax.rows) {
							//this.msg('没有记录了哦')
						} else {
							this.ajax.page++;
							// 延迟 200ms ，以保证设置窗口滚动已完成
							setTimeout(() => {
								this.ajax.flag = true;
							}, 200)
						}

					})
				}
				get();
			},

			// 设置页面滚动位置
			setPageScrollTo(selector) {
				let view = uni.createSelectorQuery().in(this).select(selector);
				view.boundingClientRect((res) => {
					uni.pageScrollTo({
						scrollTop: res.top - 50, // -30 为多显示出大半个消息的高度，示意上面还有信息。
						duration: 0
					});
				}).exec();
			},
			// 隐藏加载提示
			hideLoadTips(flag) {
				if (flag) {
					setTimeout(() => {
						this.ajax.loading = false;
					}, 300);
				} else {
					this.ajax.loading = true;

				}
			},




			getNowDate() {
				let date = new Date();
				let sign2 = ":";
				let year = date.getFullYear() // 年
				let month = date.getMonth() + 1; // 月
				let day = date.getDate(); // 日
				let hour = date.getHours(); // 时
				let minutes = date.getMinutes(); // 分
				let seconds = date.getSeconds() //秒
				let weekArr = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'];
				let week = weekArr[date.getDay()];
				// 给一位数的数据前面加 “0”
				if (month >= 1 && month <= 9) {
					month = "0" + month;
				}
				if (day >= 0 && day <= 9) {
					day = "0" + day;
				}
				if (hour >= 0 && hour <= 9) {
					hour = "0" + hour;
				}
				if (minutes >= 0 && minutes <= 9) {
					minutes = "0" + minutes;
				}
				if (seconds >= 0 && seconds <= 9) {
					seconds = "0" + seconds;
				}
				return year + "-" + month + "-" + day + " " + hour + sign2 + minutes + sign2 + seconds;
			}

			,
			// 处理emoji选项卡

			handleEmoji() {
				this.isRecord = false
				if (this.isFocus) {
					this.isFocus = false
					this.isMoreOpen = false
					this.isEmojiOpen = true
				} else {
					this.isEmojiOpen = !this.isEmojiOpen
					this.isMoreOpen = false
				}
			},
			// 处理更多选项卡
			handleMore() {
				if (this.isFocus) {
					this.isFocus = false
					this.isEmojiOpen = false
					this.isMoreOpen = true
				} else {
					this.isMoreOpen = !this.isMoreOpen
					this.isEmojiOpen = false
				}
			},
			// 选项卡关闭
			handleClose() {
				this.rateModal = false
				this.isFocus = false
				this.isMoreOpen = false
				this.isEmojiOpen = false
			},

			sendPhoto(name) {
				console.log('选择图片')
				this.handleClose()
			},
			chooseRecord() {
				this.handleClose()
				this.isRecord = !this.isRecord
				if (this.isRecord) {
					this.isFocus = false
				}


				// #ifdef MP				
				if (this.isRecord) {
					uni.getSetting({
						success: (res) => {
							if (res.authSetting['scope.record'] === false) { // 已申请授权，但已被用户拒绝
								this.toSettingPage({
									content: '请前往设置页打开麦克风',
									suc: (res) => {
										if (!res.authSetting['scope.record']) {
											this.isRecord = false
										}
									},
									fail: () => {
										this.isRecord = false
									},
									cancel: () => {
										this.isRecord = false
									}
								})
							}
						},
						fail: () => {
							wx.showToast({
								title: '获取授权信息失败',
								icon: 'none',
								duration: 1500
							})
						}
					})
				}
				// #endif





			},


			// 提示前往设置页
			toSettingPage(options) {
				uni.showModal({
					title: '授权提示',
					content: options.content,
					success: (tipRes) => {
						if (tipRes.confirm) {
							uni.openSetting({
								success: (settingRes) => {
									options.suc && options.suc(settingRes)
								},
								fail: () => {
									options.fail && options.fail()
								}
							})
						} else {
							options.cancel && options.cancel()
						}
					}
				})
			},
			// 长按录音，监听在页面最外层div，如果是放在button的话，手指上划离开button后获取距离变化有bug
			handleLongPress(e) {
				this.startPoint = e.touches[0]

				// #ifdef APP			
				this.startRecording()
				// #endif



				// #ifdef MP				
				if (e.target.id === 'record') {
					uni.getSetting({
						success: (res) => {
							let auth = res.authSetting['scope.record']
							if (auth === true) { // 用户已经同意授权
								this.title = '正在录音'
								this.isRecording = true
								this.startRecording()
								this.canSend = true
							} else if (auth === false) { // 首次发起授权
								this.toSettingPage({
									content: '请前往设置页打开麦克风',
									suc: (res) => {
										if (!res.authSetting['scope.record']) {
											this.isRecord = false
										}
									},
									fail: () => {
										this.isRecord = false
									},
									cancel: () => {
										this.isRecord = false
									}
								})
							}
						},
						fail: () => {}
					})
				}

				// #endif

			},




			// 录音时的手势上划移动距离对应文案变化
			handleTouchMove(e) {
				if (this.isRecording) {
					if (this.startPoint.clientY - e.touches[e.touches.length - 1].clientY > 200) {
						this.title = '松开手指，取消发送'
						this.canSend = false
					} else if (this.startPoint.clientY - e.touches[e.touches.length - 1].clientY > 80) {
						this.title = '上划可取消'
						this.canSend = true
					} else {
						this.title = '正在录音'
						this.canSend = true
					}
				}
			},
			// 手指离开页面滑动
			handleTouchEnd() {
				console.log('录音结束');
				clearInterval(this.timer)
				this.isRecording = false
				recorderManager.stop()
			},
			// 开始录音
			startRecording() {

				let env = uni.getSystemInfoSync().platform
				if (env === 'android') {
					permision.requestAndroidPermission('android.permission.RECORD_AUDIO').then((e) => {
						if (e === -1) {
							uni.showToast({
								title: '您已经永久拒绝录音权限，请在应用设置中手动打开',
								icon: 'none',
							})
							permision.gotoAppPermissionSetting()
						} else if (e === 0) {
							uni.showToast({
								title: '您拒绝了录音授权',
								icon: 'none',
							})
						} else if (e === 1) {
							this.title = '正在录音'
							this.isRecording = true
							this.canSend = true
							console.log('开始录音')
							this.startDate()
							recorderManager.start(recordOptions)
						} else {
							uni.showToast({
								title: '授权返回值错误',
								icon: 'none',
							})
						}
					}).catch((err) => {
						uni.showToast({
							title: '拉起录音授权失败',
							icon: 'none',
						})
					})
				} else if (env === 'ios') {
					if (permision.judgeIosPermission("record")) {
						console.log('开始录音')
						this.startDate()
						recorderManager.start(recordOptions)
					} else {
						uni.showToast({
							title: '您拒绝了录音授权，请在应用设置中手动打开',
							icon: 'none',
						})
					}
				}


			},
			//录音计时
			startDate() {
				let that = this
				that.sec = 0
				that.timer = setInterval(() => {
					that.sec++
				}, 1000)
			},





			// 预览图片
			showPic(msg) {

				uni.previewImage({
					indicator: "none",
					current: msg,
					urls: ["" + msg + ""]
				});
			},


			paymp3(url, id = 0) {

				console.log(this.isplay)

				if (this.isplay) {
					audioContext.stop()
					this.playMsgid = null;
					this.isplay = false
					return
				}

				this.isplay = !this.isplay;
				this.playMsgid = id;
				let that = this
				audioContext.src = url
				audioContext.play()
				audioContext.onPlay(() => {})
				audioContext.onEnded(() => {
					this.isplay = false
					this.playMsgid = null;
				})
				audioContext.onError(() => {
					this.playMsgid = null;
					this.isplay = false
				//	that.msg('不支持播放该音频格式')
				})
			},
			// replaceEmoji(str) {
			// 	let replacedStr = str.replace(/\[([^(\]|\[)]*)\]/g, (item, index) => {
			// 		return '<img src="' + emojiUrl + '' + this.emojiMap[item] +
			// 			'" style="width:20px;" mode="heightFix"></img>';
			// 	});
			// 	return '' + replacedStr + '';

			// },

			tabChange(e) {
				this.emojiindex = e
			},
			chooseImage() {
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success: (res) => {
						const tempFilePaths = res.tempFilePaths[0]
						// #ifdef APP-PLUS||MP
						uni.compressImage({
					  src: tempFilePaths,
							quality: 80,
							success: resdd => {
								this.uploadSuccess(resdd.tempFilePath)
					  }
						})
						// #endif
						// #ifdef H5
						this.uploadSuccess(tempFilePaths)
						// #endif			   






					}
				})
			},

			uploadSuccess(image) {
				let inmsg = {
					is_self: true,
					content: image,
					type: 'img',
					sec: 0,
					create_time: this.jintian
				};
				this.pushmsg(inmsg)
				this.paymp3('/static/fa.mp3', 0)
				uni.uploadFile({
					url: host + '/api/user/up_img', //仅为示例，非真实的接口地址
					filePath: image,
					fileType: 'image',
					name: 'file',
					formData: {
						'token': uni.getStorageSync('token'),
						'user': 'test'
					},
					success: (uploadFileRes) => {
						let data = JSON.parse(uploadFileRes.data)
						let avatar =  'img['+data.data.file+']'
						
						var message = '{"data":"' + avatar + '","sec":"0","type":"image","fromid":"' + this
							.fromid + '","toid":"' +
							this.toid + '"}';
						this.save_message(message);



					}
				});


			},

			// 发消息选中emoji
			chooseEmoji(item) {
				 this.handleEmoji()
		
				 
				let inmsg = {
					is_self: true,
					content: item,
					type: 'image',
					sec: 0,
					create_time: this.jintian
				};
				this.pushmsg(inmsg)
				this.paymp3('/static/fa.mp3', 0)
			var message = '{"data":"' + item + '","sec":"0","type":"image","fromid":"' + this
							.fromid + '","toid":"' +
							this.toid + '"}';
				this.save_message(message);
			},







		}
	}
</script>

<style lang="scss" scoped>
	/* 胶囊*/
	.tn-custom-nav-bar__back {
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		box-sizing: border-box;
		background-color: rgba(0, 0, 0, 0.15);
		border-radius: 1000rpx;
		border: 1rpx solid rgba(255, 255, 255, 0.5);
		color: #FFFFFF;
		font-size: 18px;

		.icon {
			display: block;
			flex: 1;
			margin: auto;
			text-align: center;
		}

		&:before {
			content: " ";
			width: 1rpx;
			height: 110%;
			position: absolute;
			top: 22.5%;
			left: 0;
			right: 0;
			margin: auto;
			transform: scale(0.5);
			transform-origin: 0 0;
			pointer-events: none;
			box-sizing: border-box;
			opacity: 0.7;
			background-color: #FFFFFF;
		}
	}

	.tn-tabbar-height {
		min-height: 100rpx;
		height: calc(120rpx + env(safe-area-inset-bottom) / 2);
	}

	/* 用户头像 start */
	.logo-image {
		width: 80rpx;
		height: 80rpx;
		position: relative;
	}

	.logo-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		// box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
		border-radius: 50%;
		// overflow: hidden;
		// background-color: #FFFFFF;
	}

	.bg-img-cont {
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		height: 260rpx;
		width: 55vw;
		margin: 10rpx 0 0 0;
		border-radius: 12rpx;
	}

	/* 聊天*/
	.tnchat1 {
		border-style: solid;
		border-width: 71rpx;
		border-image-source: url(@/static/img/tnchat0.png);
		border-image-slice: 71 71 71 71 fill;
		border-image-repeat: repeat;
		word-break: break-word;
		width: fit-content;
	}

	.tnchat2 {
		border-style: solid;
		border-width: 26rpx 43rpx;
		border-image-source: url(@/static/img/tnchat3.png);
		border-image-slice: 26 43 26 43 fill;
		border-image-repeat: repeat;
		word-break: break-word;
		width: fit-content;
	}

	.tnchat3 {
		border-style: solid;
		border-width: 26rpx 43rpx;
		border-image-source: url(@/static/img/tnchat6.png);
		border-image-slice: 26 43 26 43 fill;
		border-image-repeat: repeat;
		word-break: break-word;
		width: fit-content;
	}

	.tnchat4 {
		border-style: solid;
		border-width: 26rpx 43rpx;
		border-image-source: url(@/static/img/tnchat4.png);
		border-image-slice: 26 43 26 43 fill;
		border-image-repeat: repeat;
		word-break: break-word;
		width: fit-content;
	}

	.tnchat5 {
		border-style: solid;
		border-width: 26rpx 43rpx;
		border-image-source: url(@/static/img/tnchat7.png);
		border-image-slice: 26 43 26 43 fill;
		border-image-repeat: repeat;
		word-break: break-word;
		width: fit-content;
	}

	.tnchat6 {
		border-style: solid;
		border-width: 26rpx 43rpx;
		border-image-source: url(@/static/img/tnchat8.png);
		border-image-slice: 26 43 26 43 fill;
		border-image-repeat: repeat;
		word-break: break-word;
		width: fit-content;
	}

	.tnchat7 {
		border-style: solid;
		border-width: 26rpx 43rpx;
		border-image-source: url(@/static/img/tnchat9.png);
		border-image-slice: 26 43 26 43 fill;
		border-image-repeat: repeat;
		word-break: break-word;
		width: fit-content;
	}


	/* 间隔线 start*/
	.tn-strip-bottom {
		width: 100%;
		border-bottom: 20rpx solid rgba(241, 241, 241, 0.8);
	}

	/* 间隔线 end*/

	/* 头像 start */
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
		box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
		border-radius: 50%;
		overflow: hidden;
		// background-color: #FFFFFF;
	}


	/* 底部 start*/
	.footerfixed {
		position: fixed;
		width: 100%;
		bottom: 0;
		z-index: 9990;
		background-color: #ffffff;
		box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	.tabbar {
		align-items: center;
		min-height: 130rpx;
		padding: 0;
		height: calc(130rpx + env(safe-area-inset-bottom) / 2);
		padding-bottom: calc(30rpx + env(safe-area-inset-bottom) / 2);
		padding-left: 10rpx;
		padding-right: 10rpx;
	}

	/* 毛玻璃*/
	.dd-glass {
		width: 100%;
		backdrop-filter: blur(20rpx);
		-webkit-backdrop-filter: blur(20rpx);
	}

	/* 头像*/
	.avatar-all {
		width: 60rpx;
		height: 60rpx;
		border: 4rpx solid rgba(255, 255, 255, 0.05);
		border-radius: 50%;
		overflow: hidden;
		box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
	}

	/* 内容*/
	.topic {
		position: relative;
		height: 100%;
		z-index: 1;
		margin-bottom: 120rpx;


		/* 表单信息 start */
		&__info {
			margin: 0 50rpx;
			margin-top: 105rpx;
			padding: 30rpx 51rpx;
			border-radius: 20rpx;
			background-color: rgba(255, 255, 255, 1);
			border: 2rpx solid rgba(255, 255, 255, 0.1);
			box-shadow: 0rpx 10rpx 50rpx 0rpx rgba(0, 3, 72, 0.1);

			&__item {

				&__input {
					width: 400rpx;
					height: 60rpx;
					border: 1rpx solid #C6D1D8;
					border-radius: 39rpx;

					&__left-icon {
						width: 10%;
						font-size: 44rpx;
						margin-left: 20rpx;
						margin-right: 5rpx;
						color: #C6D1D8;
					}

					&__content {
						width: 80%;
						padding-left: 10rpx;

						&--verify-code {
							width: 56%;
						}

						input {
							font-size: 30rpx;
							color: #78909C;
							// letter-spacing: 0.1em;
						}
					}

					&__right-icon {
						width: 10%;
						font-size: 34rpx;
						margin-right: 20rpx;
						color: #78909C;
					}

					&__right-verify-code {
						width: 34%;
						margin-right: 20rpx;
					}
				}

				&__button {
					width: 100%;
					height: 60rpx;
					text-align: center;
					font-size: 31rpx;
					font-weight: bold;
					line-height: 77rpx;
					// text-indent: 1em;
					border-radius: 100rpx;
					color: #FFFFFF;
					background-color: rgba(255, 255, 255, 0.2);
					// border: 2rpx solid #FFFFFF;
				}

				&__sure {
					height: 60rpx;
					width: 140rpx;
				}

			}
		}

		/* 表单信息 end */

		/* 内容 end */

	}

	/deep/.input-placeholder {
		font-size: 30rpx;
		color: #C6D1D8;
	}

	///聊天录入框
	.emoji-open {
		height: calc(100vh - 262px);
	}

	.emoji-close {
		height: calc(100vh - 82px);
	}

	.chat {
		background-color: white;
		box-sizing: border-box;
	}

	.file {
		display: flex;
		text-align: left;
		width: fit-content;
		word-break: break-all;
		font-size: 14px;
		background-color: white;
		padding: 10px 8px;
	}

	.bottom {
	 background-color: #ececec;
	 position: fixed;
	 bottom: 0;
	 left: 0;
	 width: 100%;
	}

	.bottom-div {
		width: 100%;
		display: flex;
		align-items: center;
		border-top: 1px solid #e6e6e6;
		padding: 10px;
		flex-direction: row;
		box-sizing: border-box;
		transition: all 0.3s;

		.send {
			font-size: 14px;
			background-color: #ff007f;
			color: white;
			border-radius: 4px;
			width: 50px;
			height: fit-content;
			padding: 6px;
			margin-left: 12rpx;
			text-align: center;
		}
	}

	.bottom-emoji {
		position: relative;

		.emojis {
			height: 160px;
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
		border-bottom: 1px solid #000000;

		.tabs {
			display: flex;
			height: 29px;
			flex-direction: row;
			padding-left: 10px;
			box-sizing: border-box;

			.single {
				display: flex;
				margin-top: 2px;
				width: 26px;
				height: 26px;
				padding: 2px;
				border-radius: 6px;
				box-sizing: border-box;
				margin-right: 8px;
			}

			.choosed {
				background-color: rgba(255, 0, 0, 0.7);
			}
		}
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

	.input {
		background-color: white;
		border-radius: 6px;
		height: 34px;
		box-sizing: border-box;
		padding: 0 8px;
	}

	.btn-left {
		display: flex;
		padding: 0;
		margin: 0;
		margin-right: 10px;
	}

	.btn {
		display: flex;
		padding: 0;
		margin: 0;
		margin-left: 10px;
	}

	.button {
		color: white;
		background-color: #ff007f;
		border-radius: 8px;
		height: 26px;
		padding: 0 6px;
		line-height: 26px;
		font-size: 16px;
	}

	// 添加用户当弹窗
	.input-wrapper {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	li {
		margin-top: 18px;
		padding: 0 12px;
	}

	.fail::before {
		padding: 2px 8px;
		background-color: #ff007f;
		color: white;
		content: '!';
		font-size: 12px;
		border-radius: 50%;
		cursor: pointer;

	}

	// 音频解析
	.box {
		display: flex;
		height: 20px;
		line-height: 20px;
	}

	.record {
		width: 100%;
		background-color: white;
		color: #000000;
		border-radius: 6px;
		box-sizing: border-box;
		height: 34px;
		line-height: 34px;
		display: flex;
		justify-content: center;
	}

	.record-modal {
		height: 150px;
		width: 60vw;
		background-color: black;
		opacity: 0.8;
		position: fixed;
		top: 200px;
		z-index: 9999;
		left: 20vw;
		border-radius: 12px;
		display: flex;
		flex-direction: column;

		.wrapper {
			display: flex;
			height: 100px;
			box-sizing: border-box;
			padding: 10vw;

			.modal-loading {
				opacity: 1;
				width: 20px;
				height: 10px;
				border-radius: 2px;
				background-color: #ff0000;
				animation: loading 2s cubic-bezier(.17, .37, .43, .67) infinite;
			}
		}

		.modal-title {
			text-align: center;
			color: white;
		}
	}

	.modal-display {
		display: none;
	}

	@-webkit-keyframes loading {
		0% {
			transform: translate(0, 0);
		}


		50% {
			transform: translate(30vw, 0);
			background-color: #f5634a;
			width: 40px;
		}

		100% {
			transform: translate(0, 0);
		}
	}




	.yuyinbg {
		float: left;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAYCAYAAAAF6fiUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzlFRDZDRDNENzlFMTFFNkJDN0NFMjA2QTFFRTRDQkIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzlFRDZDRDJENzlFMTFFNkJDN0NFMjA2QTFFRTRDQkIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTAxQkEzQ0RENzM2MTFFNjgyMEI5MTNDRkQ0OTM5QUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTAxQkEzQ0VENzM2MTFFNjgyMEI5MTNDRkQ0OTM5QUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4K4iKVAAACUUlEQVR42uSazytEURTHvTHjR4kaU8xsSDZSdmbjx4oSK8XGQrJlpSwYTSmxEWWhUIpsZK3kD7DRNBuSBZFCNjZ+JPKcV6ecXu/d3sy7595bc+vbfXPue5/749z77o83lm3bZYYFC8RZqAbQAigP2tXNj5aZF7gdkAZNk9+7WvnOCCgxRUCb9n/o1sk3pUH6QDHF/GNsoM+QeYfiy6qkFeLZDBb0GlTB4AAR/xXT9nXxZVa0WCekQd9Y0HOJjg3CHySviiZmfjO3AyIhnu0gBc0wjAIR/wLtW8z87aAOWAI9gqaYRoAff4ZUoi7EKCiUP462j4CdSCrfK4N1Ahpi6I0i/hPa50M4oFB+Dbm/SzXfL5MD4rUogxP8+Itozynm59E+q5ovyuQdHxphWh568XvR5kxq1SEn40L4e0XMA1L4EcEe7RTjLqYdqRf/gezQUwr5LxjXq+aLHPCFcTmTA7z4tutIQhXfLiJPKXyRA/oxzgW8v9DgxU+S62eF/ATGr6r5fg26Corj9RHD4Z0fvwfjS9CbQn4bxrfK+R6TyzxZNk260solTL4i/g3al10TsMXIryA72T7VfK8MnJO8X9CKy14lafXjxx8jFUsSeyUzfxhtPwHPoqTy/TJJMJzJiPgNpJdsuNJizPwztB/q4JtwHN2KW3sn3HuMOouR30l6bbsOvgkOyGIBnaPbRldalJl/h2knuvgmOKAWNAFKMUz4Iv4O6Z1xXXxTPxtazHy6khnVyS/Fb8IDpHGyuvmWgX9L4Q4toDnQFWhNN/9PgAEAR4w1ULjdCbEAAAAASUVORK5CYII=) right 0 no-repeat;
		width: 16px;
		height: 16px;
		background-size: 400%;
	}

	.voicePlay {
		animation-name: voicePlay;
		animation-duration: 1s;
		animation-direction: normal;
		animation-iteration-count: infinite;
		animation-timing-function: steps(3);
	}

	@keyframes voicePlay {
		0% {
			background-position: 0;
		}

		100% {
			background-position: 100%;
		}
	}

	.yuyinbg_right {
		float: right;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAYCAYAAAAF6fiUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzlFRDZDRDNENzlFMTFFNkJDN0NFMjA2QTFFRTRDQkIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzlFRDZDRDJENzlFMTFFNkJDN0NFMjA2QTFFRTRDQkIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTAxQkEzQ0RENzM2MTFFNjgyMEI5MTNDRkQ0OTM5QUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTAxQkEzQ0VENzM2MTFFNjgyMEI5MTNDRkQ0OTM5QUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4K4iKVAAACUUlEQVR42uSazytEURTHvTHjR4kaU8xsSDZSdmbjx4oSK8XGQrJlpSwYTSmxEWWhUIpsZK3kD7DRNBuSBZFCNjZ+JPKcV6ecXu/d3sy7595bc+vbfXPue5/749z77o83lm3bZYYFC8RZqAbQAigP2tXNj5aZF7gdkAZNk9+7WvnOCCgxRUCb9n/o1sk3pUH6QDHF/GNsoM+QeYfiy6qkFeLZDBb0GlTB4AAR/xXT9nXxZVa0WCekQd9Y0HOJjg3CHySviiZmfjO3AyIhnu0gBc0wjAIR/wLtW8z87aAOWAI9gqaYRoAff4ZUoi7EKCiUP462j4CdSCrfK4N1Ahpi6I0i/hPa50M4oFB+Dbm/SzXfL5MD4rUogxP8+Itozynm59E+q5ovyuQdHxphWh568XvR5kxq1SEn40L4e0XMA1L4EcEe7RTjLqYdqRf/gezQUwr5LxjXq+aLHPCFcTmTA7z4tutIQhXfLiJPKXyRA/oxzgW8v9DgxU+S62eF/ATGr6r5fg26Corj9RHD4Z0fvwfjS9CbQn4bxrfK+R6TyzxZNk260solTL4i/g3al10TsMXIryA72T7VfK8MnJO8X9CKy14lafXjxx8jFUsSeyUzfxhtPwHPoqTy/TJJMJzJiPgNpJdsuNJizPwztB/q4JtwHN2KW3sn3HuMOouR30l6bbsOvgkOyGIBnaPbRldalJl/h2knuvgmOKAWNAFKMUz4Iv4O6Z1xXXxTPxtazHy6khnVyS/Fb8IDpHGyuvmWgX9L4Q4toDnQFWhNN/9PgAEAR4w1ULjdCbEAAAAASUVORK5CYII=) right 0 no-repeat;
		width: 16px;
		height: 16px;
		background-size: 400%;
		transform: scale(-1, 1);
	}

	.voicePlay_right {
		animation-name: voicePlay_right;
		animation-duration: 1s;
		animation-direction: normal;
		animation-iteration-count: infinite;
		animation-timing-function: steps(3);
	}

	@keyframes voicePlay_right {
		0% {
			background-position: 0;
		}

		100% {
			background-position: 100%;
		}
	}







	//、、
</style>
