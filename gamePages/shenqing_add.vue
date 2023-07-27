<template>
	<view class="template-create tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed :isBack="true">
			申请认证
		</tn-nav-bar>
	<view class=" tn-bg-white" :style="{paddingTop: vuex_custom_bar_height + 'px'}" v-if="status==0">
			<view class="tn-margin  tn-padding tn-flex  tn-flex-row-center tn-margin-top-sm" style="border-radius: 10rpx;margin-top: 350rpx;">
						<view @click="voctap" 
							style="font-size: 20px;padding: 80rpx;" >
							<view class="tn-icon-more-circle-fill tn-color-red" style="font-size: 100px;"></view>
							<view style="font-size: 14px;" class="tn-text-center">审核人员将在三个工作日内进行审核，尽情留言系统通知，（优质用户，可能需要配合进行人工过审核，如有疑问需要帮助，请联系客服）</view>							
						<view class="tn-color-black tn-text-df tn-text-center tn-padding-top" @click="fanhui()">
						<tn-tag  :plain="true" shape="radius" margin="10rpx"  width="150rpx">
						<text >返回</text>
						</tn-tag>
						
						</view>
						
						</view>
		</view>
	
	</view>		
			
			<view class=" tn-bg-white" :style="{paddingTop: vuex_custom_bar_height + 'px'}" v-if="status==1">
					<view class="tn-margin  tn-padding tn-flex  tn-flex-row-center tn-margin-top-sm" style="border-radius: 10rpx;margin-top: 350rpx;">
								<view @click="voctap" 
									style="font-size: 20px;padding: 80rpx;" >
									<view class="tn-icon-success-circle-fill tn-color-green" style="font-size: 100px;"></view>
									<view style="font-size: 14px;" class="tn-text-center">你已经申请通过了，请到我的-点击服务中心-添加你的服务价格</view>							
								<view class="tn-color-black tn-text-df tn-text-center tn-padding-top" @click="fanhui()">
								<tn-tag  :plain="true" shape="radius" margin="10rpx"  width="150rpx">
								<text >返回</text>
								</tn-tag>
								
								</view>
								
								</view>
				</view>
			
			</view>	
			
		<view class=" tn-bg-white" :style="{paddingTop: vuex_custom_bar_height + 'px'}" v-if="status==-1">
						
			<view class=" clamp-text-1 tn-text-justify tn-margin" @click="chooseImagebj()">
				<text class="tn-text-bold">上传图片</text> <text style="font-size: 12px;">（禁止盗用他人图片，发现将封号）</text>
				<view class="tn-margin-top tn-bg-gray--light" style="border-radius: 10rpx;position: relative;">
					<image :src="bgimgnews" mode="aspectFill"></image>
					<view class="tn-icon-camera-fill tn-color-black" style="left: 45%;
							position: absolute;
							top:45%;
							font-size: 40px;"></view>
					<view class=" tn-color-gray" style="left: 20%;
							position: absolute;
							top:65%;
							font-size: 14px;">
							<text v-if="type==0">请上传与你技能等级相符的截图</text>
							<text v-else>请上传与你的个人正面照片或者生活照</text>
							</view>		
							
							
				</view>
			</view>				
			<view class=" tn-text-bold  clamp-text-1 tn-text-justify tn-margin ">
				
				<text class="tn-text-bold">技能介绍</text>
				<text class="tn-color-red">*</text><text class="tn-color-gray" style="font-size: 12px;">（一句话介绍技能,点击实例快速使用）</text>

			</view>
			
			<view class="tn-margin tn-bg-red--light tn-padding" style="border-radius: 10rpx;" 
			@click="dec='人皮话多，精通各类密室逃脱，快来下单一起玩吧！'">
			实例1：人皮话多，精通各类密室逃脱，快来下单一起玩吧！
			</view>
			<view class="tn-margin tn-bg-red--light tn-padding" style="border-radius: 10rpx;"
			 @click="dec='老板好，我是xxx，对电影和音乐有天赋，一起玩耍吧'">
			实例2：老板好，我是xxx，对电影和音乐有天赋，一起玩耍吧！
			</view>
			
			<view class="tn-margin tn-bg-gray--light tn-padding" style="border-radius: 10rpx;">
				<textarea maxlength="200" placeholder="声音特点/擅长位置/KD,技术特点/娱乐/技术陪/聊天/唱歌等" v-model="dec"
					placeholder-style="color:#AAAAAA"></textarea>		

			</view>

<view class=" tn-text-bold  clamp-text-1 tn-text-justify tn-margin ">				
				<text class="tn-text-bold">语音介绍</text>
				<text class="tn-color-red" v-if="configInfo.peipei_voc">*</text><text class="tn-color-gray" style="font-size: 12px;">（一句话介绍技能,点击实例快速使用）</text>

			</view>
 

	<view class="tn-margin tn-bg-gray--light tn-padding tn-flex tn-flex-row-center tn-margin-top-sm" style="border-radius: 10rpx;">
				<view @click="voctap" class=""
					style="font-size: 20px;" v-if="vocurl==false">
					<view class="tn-icon-voice" style="font-size: 40px;"></view>
					<view style="font-size: 14px;" class="tn-text-center">点击录音</view>
					<view class="tn-color-gray tn-text-center" style="font-size: 12px;">录制一段自我介绍</view>
				</view>
				
				
				<view v-if="vocurl" @click="bofang">
					<tn-button backgroundColor="#947eff" padding="40rpx 0" width="60%" shadow fontBold>
						<view class="voice-line-wrap"
							style="--line-height:15px;--line-start-color:royalblue ;--line-end-color:indianred">
							<block v-if="isplay">
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
							</block>
							<text class="tn-color-black" style="margin-left: 15px;">{{vocscend}}s</text>
						</view>
						<view style="margin-left: 20px;" @click="quixiaovoc">
							<tn-badge :radius="53" backgroundColor="#c5c5c5" fontColor="#000000" size=50
								:absolute="true" :translateCenter="false">
								<text>x</text>
							</tn-badge>
						</view>
					</tn-button>

				</view>
	</view>


			<tn-popup v-model="voc" width="80%" height="40%" mode="bottom" :borderRadius="30" :closeBtn="false"
				:maskCloseable="true" @close="closedPopup_voc">
				<nb-voice-record ref="luyinUpload" @startRecord="start" @endRecord="end" @cancelRecord="cancel">
				</nb-voice-record>
			</tn-popup>
			<view class="tn-flex-1 justify-content-item tn-margin-sm tn-text-center" @click="chuanbgip()">
						<tn-button backgroundColor="tn-cool-bg-color-5"   padding="40rpx 0" width="60%" shadow fontBold>
							<text class="">确定申请</text>
						</tn-button>
					</view>
		</view>
		


			
			<view style="height: 30px;">
			</view>
	<tn-cropper v-show="bgshow" :imageUrl="imageUrl" :isRound="isRound" @cropper="cropperFinish"
				@closecopper="close"></tn-cropper>


	

	</view>
</template>

<script>
	import {
		host
	} from '@/siteinfo.js'
	const audioContext = uni.createInnerAudioContext()
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	export default {
		name: 'TemplateCreate',
		mixins: [template_page_mixin],
		data() {
			return {
				//录音
				
				status:111,
				game_id:0,
				shengaozhi:'50',
				tizhongzhi:'50',
				shengao:'150',
				tizhong:'75',
				zhiye:'',
				wxhao:'',
				date: '请选择生日',
				riqishow: false,
				mode: 'date',
				bgimgnews:'',
				bgshow:false,
				voc: false,
				vocurl: "",
				vocscend: 0,
				vocurlpass: "",
				vocurlxuanze: "",
				isplay: false,
				op: '',
				truehead: '',
				isRound: true,
				imageUrl: '',
				show: false,
				avatar: '',
				body: [],
				action: '',
				title: '',
				dec: '',
				vovnew: '',
				price:'',
				sex: 0,
				danwei:'局',
				yanse0: "#e6e6e6",
				yanse1: "#e6e6e6",
				yanse2: "#e6e6e6",
				tagLength: 5, //标签选择的最多个数
				headerPosition: 'fixed',
				checktags: '',
				tags_user: [],
				bgimgbendi:'',
				tjbgimg:'',
				type:0
			}
		},
		computed: {
			startDate() {
				return '1965-01-01';
			},
			endDate() {
				return '2023-01-01';
			}
		},
		onLoad(option) {
			
			let that = this
			that.action = host + '/api/user/up_img'
		if (option.type){
			this.type=option.type
		}
			if (option.id) {
				this.game_id = option.id
			}
				that.info()
		},
		methods: {
			fanhui(){
				uni.navigateBack()
			},
			gettizhong(e) {
				let tizhong=150*e/100
				this.tizhong =tizhong
			},
			getshengao(e) {
				let shengao=300*e/100
				this.shengao =shengao
			},
			bindDateChange: function(e) {
				this.date = e.detail.value
			},
			start() {
				console.log('开始录音')
				// 开始录音
			},
			end(event) {
				this.voc = false
				console.log(event)
				this.vocurl = event.tempFilePath			
				this.vocurlxuanze = event.tempFilePath				
				this.vocscend = event.duration
				// 结束录音并处理得到的录音文件
				// event中，app端仅有tempFilePath字段，微信小程序还有duration和fileSize两个字段
			},
			cancel() {
				console.log('用户取消录音')
			},

			voctap() {
				this.voc = true
			},
			closedPopup_voc() {
				this.voc = false
				// #ifdef APP||MP
				this.$refs.luyinUpload.stopRecord()
				// #endif
			},
			labelBtn(name, index) {
				this.tags_user[index].checked = !this.tags_user[index].checked
			},
			// 选择图片
			close() {
				this.show = false
			},

			chooseImage() {
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success: (res) => {
						const tempFilePaths = res.tempFilePaths[0]
						this.imageUrl = tempFilePaths
						this.show = true
					}
				})
			},
			
			chooseImagebj() {
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success: (res) => {
						const tempFilePaths = res.tempFilePaths[0]
					  this.bgimgnews=tempFilePaths
					  this.bgimgbendi=tempFilePaths
						
					}
				})
			},
			
			
			
			
			// 裁剪完成
			cropperFinish(res) {
				 this.cropperImageUrl = res.path;
				this.avatar = this.cropperImageUrl
				this.show = false

			},
			gaibian(sex) {
				this.sex = sex
				if (sex == 0) {
					this.yanse0 = "#00FFC6"
					this.yanse1 = "#e6e6e6"
					this.yanse2 = "#e6e6e6"
				}
				if (sex == 1) {
					this.yanse1 = "#00FFC6"
					this.yanse0 = "#e6e6e6"
					this.yanse2 = "#e6e6e6"
				}
				if (sex == 2) {
					this.yanse2 = "#00FFC6"
					this.yanse0 = "#e6e6e6"
					this.yanse1 = "#e6e6e6"
				}
			},
			async info() {
				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/games/game_auth',
					data: {
						game_id:this.game_id
					}
				});


				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						
						that.body = result.data.data;
						if (that.body.status>-1){						
						that.status=that.body.status
						}else{
						that.status=-1	
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




		chuanbgip() {
			if (this.dec == '') {
				this.msg('请输入技能介绍')
				return
			}
			if (!this.bgimgbendi) {
				this.msg('请上传技能截图')
				return
			}	
			if (!this.vocurlxuanze&&this.configInfo.peipei_voc) {
				this.msg('请上传语音介绍')
				return
			}
		
			
			uni.showLoading({
				title:'提交中'
			})
		  if (this.bgimgbendi){
			  console.log(this.bgimgbendi)
			uni.uploadFile({
				url: this.action, //仅为示例，非真实的接口地址
				filePath: this.bgimgbendi,
				name: 'file',
				formData: {
					'token': uni.getStorageSync('token'),
					'user': 'test'
				},
				success: (uploadFileRes) => {
					let data = JSON.parse(uploadFileRes.data)
					this.tjbgimg = data.data.file	
						this.send()
				}
			});
		}
		else{
			this.send()
		}
		
		},









			uploadSuccess() {
			console.log(this.cropperImageUrl)
				uni.uploadFile({
					url: this.action, //仅为示例，非真实的接口地址
					filePath: this.cropperImageUrl,
					name: 'file',
					formData: {
						'token': uni.getStorageSync('token'),
						'user': 'test'
					},
					success: (uploadFileRes) => {
						console.log(uploadFileRes)
						let data = JSON.parse(uploadFileRes.data)
						this.avatar = data.data.file
						this.truehead = data.data.file
						if (this.vocurlxuanze) {
							this.upvoc()
						} else {
							this.post()
						}


					}
				});


			},

			upvoc() {
			
				uni.uploadFile({
					url: this.action, //仅为示例，非真实的接口地址
					filePath: this.vocurlxuanze,
					name: 'file',
					formData: {
						'token': uni.getStorageSync('token'),
						'user': 'test'
					},
					success: (uploadFileRes) => {
						let data = JSON.parse(uploadFileRes.data)
						this.vocurlpass = data.data.file
						this.vovnew = data.data.file
						this.post()
					}
				});
			},

			send() {
				if (this.vocurlxuanze) {
					this.upvoc()
				} else {
					this.post()
				}


			},

			async post() {
				let that = this;		
				let result = await that.$request({
					loading:1,
					method: 'post',
					url: '/api/games/add_new',
					data: {
						game_id:this.game_id,
						type:this.type,
						voc: that.vovnew,					
						vocsen: that.vocscend,					
						dec: that.dec,
						bg_img:that.tjbgimg
					}
				});
	
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						uni.hideLoading()
						console.log(333)
						that.msg('申请成功等待审核')											
						that.info()

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
			bofang() {
				console.log('播放', this.vocurl)
				if (this.isplay) {
					audioContext.stop()
					this.isplay = false
					return
				}


				this.isplay = !this.isplay;
				let that = this
				audioContext.src = this.vocurl
				audioContext.play()
				audioContext.onPlay(() => {})
				audioContext.onEnded(() => {
					this.isplay = false
				})
				audioContext.onError(() => {
					this.isplay = false
					that.msg('不支持播放该音频格式')
				})
			},
			quixiaovoc() {
				uni.showModal({
					content: '是否删除?',
					success: (res) => {
						if (res.confirm) {
							this.vocurl = ""
							this.voc = false
							this.vovnew = ""
						}
					}
				})
			},

		}
	}
</script>

<style lang="scss" scoped>
	.template-edit {}

	.about {

		&__wrap {
			position: relative;
			z-index: 1;
			margin: 20rpx 30rpx;
			margin-top: -230rpx;
		}
	}

	/* 顶部背景图 start */
	.top-backgroup {
		height: 350rpx;
		z-index: -1;

		.backgroud-image {
			width: 100%;
			height: 250rpx;
			// z-index: -1;
		}
	}

	/* 用户头像 start */
	.logo-image {
		width: 210rpx;
		height: 210rpx;
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

	.bg-flex-shadow {
		background-color: #00C3FF;
		z-index: 9999;
	}

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

	/* 底部悬浮按钮 start*/
	/* 底部悬浮按钮 start*/
	.tn-tabbar-height {
		min-height: 100rpx;
		height: calc(120rpx + env(safe-area-inset-bottom) / 2);
	}

	.tn-footerfixed {
		bottom: 0;
		left: 0;
		position: fixed;
		width: 100%;
		bottom: calc(30rpx + env(safe-area-inset-bottom));
		z-index: 10;
		box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0);

	}

	/* 底部悬浮按钮 end*/

	/* 标签内容 start*/
	.tn-tag-content {
		&__item {
			display: inline-block;
			line-height: 45rpx;
			padding: 10rpx 30rpx;
			margin: 20rpx 20rpx 5rpx 0rpx;

			&--prefix {
				padding-right: 10rpx;
			}
		}
	}

	.tn-shadow-blurddd {
		border: 2px solid black;
	}



  .tn-slider__custom-block {
   
    width: auto;
    height: 60rpx;
    line-height: 60rpx;
    padding: 0 10rpx;
    border-radius:20px;
    text-align: center;
    color: #FFFFFF;
  }
	/* 标签内容 end*/
</style>
