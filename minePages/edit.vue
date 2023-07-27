<template>
	<view class="template-create tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed :isBack="true">
			资料修改
		</tn-nav-bar>

		<view class=" tn-bg-white" :style="{paddingTop: vuex_custom_bar_height+30 + 'px'}">

 <ksp-cropper v-show="show" mode="fixed" :width="500" :height="500" :maxWidth="500" :maxHeight="500" :url="imageUrl" @cancel="close" @ok="cropperFinish"></ksp-cropper>
 
<!-- 			<tn-cropper v-show="show" :imageUrl="imageUrl" :isRound="isRound" @cropper="cropperFinish"
				@closecopper="close"></tn-cropper> -->

			<view class=" user-info__container tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center"
				@click="chooseImage()">
				<view class="user-info__avatar  tn-flex tn-flex-col-center tn-flex-row-center"
					style="position: relative;">
					<view class="logo-pic tn-shadow">
						<view class="logo-image">							
						<image :src="avatar" mode="aspectFill" style="width: 120px;height: 120px;"></image>	
						</view>
					</view>
					<view class="tn-icon-camera-fill tn-color-red" style="left: 80px;
    position: absolute;
    top: 80px;
    font-size: 40px;"></view>
				</view>

			</view>

			<view class=" tn-text-bold  clamp-text-1 tn-text-center tn-margin ">

				<tn-button :backgroundColor="yanse2" padding="30rpx 0" width="80px" height="13px" shadow fontBold
					style="margin-left: 10px;" @tap="gaibian(2)">
					<text class="tn-icon-sex-female tn-padding-right-xs tn-color-black tn-text-xxl"></text>
					<text class="tn-color-black">小姐姐</text>

				</tn-button>
				<tn-button :backgroundColor="yanse1" padding="30rpx 0" width="80px" height="13px" shadow fontBold
					style="margin-left: 10px;" @tap="gaibian(1)">
					<text class="tn-icon-sex-male tn-padding-right-xs tn-color-black tn-text-xxl"></text>
					<text class="tn-color-black">小哥哥</text>
				</tn-button>			
			</view>


			<view class=" tn-text-bold  clamp-text-1 tn-text-justify tn-margin ">
				昵称<text class="tn-color-red">*</text>
			</view>
			<view class="tn-margin tn-bg-gray--light" style="border-radius: 10rpx;padding: 20rpx 30rpx;">
				<input placeholder="给自己取号好听的名字吧" maxlength="10" v-model="title"
					placeholder-style="color:#AAAAAA"></input>
			</view>
			
			<view class=" tn-text-bold  clamp-text-1 tn-text-justify tn-margin ">
				生日
			</view>
			<view class="tn-flex tn-flex-row-between tn-bg-gray--light tn-margin"
				style="border-radius: 10rpx;padding: 20rpx 30rpx;">
				<view class="justify-content-item" style="width: 100%;">
					<picker mode="date" :value="date" :start="startDate" :end="endDate"
						@change="bindDateChange">
						<view class="uni-input">{{date}}</view>
					</picker>
				</view>
				<view class="justify-content-item tn-icon-right tn-text-xxl"></view>
			</view>
			
							<view class=" tn-text-bold  clamp-text-1 tn-text-justify tn-margin ">
								身高
							</view>
							<view style="border-radius: 10rpx;padding: 20rpx 30rpx;" class=" tn-text-bold tn-bg-gray--light clamp-text-1 tn-text-center tn-margin  ">
								<tn-slider v-model="shengaozhi" @input="getshengao" :min="40" activeColor="#9D12FF"> 
									<view class="tn-slider__custom-block tn-cool-bg-color-3">
										{{ shengao }}cm
									</view>
								</tn-slider>
							</view>
			
			
			<view class=" tn-text-bold  clamp-text-1 tn-text-justify tn-margin ">
				体重
			</view>
			<view style="border-radius: 10rpx;padding: 20rpx 30rpx;" class=" tn-text-bold tn-bg-gray--light clamp-text-1 tn-text-center tn-margin  ">
				<tn-slider v-model="tizhongzhi" @input="gettizhong" :min="20" activeColor="#9D12FF">
					<view class="tn-slider__custom-block tn-cool-bg-color-3">
						{{ tizhong }}Kg
					</view>
				</tn-slider>
			</view>  
							<view class=" tn-text-bold  clamp-text-1 tn-text-justify tn-margin ">
								职业
							</view>
							<view class="tn-margin tn-bg-gray--light" style="border-radius: 10rpx;padding: 20rpx 30rpx;">
								<input placeholder="请输入你的职业" name="input" maxlength="50" v-model="zhiye"
									placeholder-style="color:#AAAAAA"></input>
							</view>					
							<view class=" tn-text-bold  clamp-text-1 tn-text-justify tn-margin ">
								微信号
							</view>
							<view class="tn-margin tn-bg-gray--light" style="border-radius: 10rpx;padding: 20rpx 30rpx;">
								<input placeholder="请输入你的微信号" name="input" maxlength="50" v-model="wxhao"
									placeholder-style="color:#AAAAAA"></input>
							</view>
							
							
							
							
							
							
							
			<view class=" tn-text-bold  clamp-text-1 tn-text-justify tn-margin ">
				个性签名<text class="tn-color-red">*</text>

			</view>

			<view class="tn-margin tn-bg-gray--light tn-padding" style="border-radius: 10rpx;">
				<textarea maxlength="100" placeholder="写点有意思的签名吧(100字以内)" v-model="dec"
					placeholder-style="color:#AAAAAA"></textarea>


				<view @click="voctap" class="tn-icon-voice tn-bg-gray--light tn-color-red tn-text-left"
					style="font-size: 20px;" v-if="vocurl==false"><text style="font-size: 14px;">语音介绍</text>
				</view>
				<view v-if="vocurl" @click="bofang">
					<tn-button backgroundColor="#00FFC6" padding="40rpx 0" width="60%" shadow fontBold>
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
						<view style="margin-left: 20px;" @click.stop="quixiaovoc">
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




			<view class=" tn-text-bold  clamp-text-1 tn-text-justify tn-margin">
				兴趣标签<text class="tn-color-red">*</text>
			</view>
			<view class="tn-margin tn-bg-white" style="border-radius: 10rpx;">

				<tn-tag size='lg'
					:backgroundColor="item.checked ?  'tn-main-gradient-purple' : 'tn-main-gradient-purple--light '"
					margin="15rpx 15rpx" v-for="(item, index) in tags_user" :key="index" class="tag-view"
					@click="labelBtn(item,index)">{{item.name}}</tn-tag>
			</view>
		</view>

		<view class=" tn-text-bold  clamp-text-1 tn-text-justify tn-margin" @click="chooseImagebj()">
			背景图
			<view class="tn-margin tn-bg-white" style="border-radius: 10rpx;position: relative;">
				<image :src="bgimgnews" mode="aspectFill"></image>
				<view class="tn-icon-camera-fill tn-color-white" style="left: 45%;
						position: absolute;
						top:45%;
						font-size: 40px;"></view>
			</view>
		</view>
	<tn-cropper v-show="bgshow" :imageUrl="imageUrl" :isRound="isRound" @cropper="cropperFinish"
				@closecopper="close"></tn-cropper>


		<view class="tn-flex tn-footerfixed">
			<view class="tn-flex-1 justify-content-item tn-margin-sm tn-text-center" @click="chuanbgip()">
				<tn-button :backgroundColor="configInfo.button" padding="40rpx 0" width="60%" shadow fontBold>
					<text class="tn-icon-edit tn-padding-right-xs "></text>
					<text class="">确 定 保 存</text>
				</tn-button>
			</view>
		</view>


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
				sex: 0,
				yanse0: "#e6e6e6",
				yanse1: "#e6e6e6",
				yanse2: "#e6e6e6",
				tagLength: 5, //标签选择的最多个数
				headerPosition: 'fixed',
				checktags: '',
				tags_user: [],
				bgimgbendi:'',
				tjbgimg:''
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
		onUnload() {
			audioContext.stop()
		},
		onLoad(option) {
			let that = this
			that.action = host + '/api/user/up_img'
			that.info()
			if (option.op) {
				this.op = option.op
			}
			
		},
		methods: {
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
					//	this.avatar=tempFilePaths						
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
					url: '/api/four/GetUser',
					data: {}
				});


				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						that.body = result.data.data.userinfo;
						that.title = that.body.nickname
						that.dec = that.body.dec
						that.avatar = that.body.avatar
						that.tags_user = result.data.data.biaoqian
						that.truehead = that.body.truehead
						that.sex = that.body.sex
						that.vocscend = that.body.vocsen
						that.vocurl = that.body.voc
						that.bgimgnews= that.body.bg_img	
						if (that.body.shengao){			
						that.shengao= that.body.shengao	
						}
						if (that.body.tizhong){	
						that.tizhong= that.body.tizhong	
						}
						that.zhiye= that.body.zhiye	
						that.wxhao= that.body.wxhao	
						if (that.sex == 0) {
							this.yanse0 = "#00FFC6"
						}
						if (that.sex == 1) {
							this.yanse1 = "#00FFC6"
						}
						if (that.sex == 2) {
							this.yanse2 = "#00FFC6"
						}
						if (that.body.shengri){
						that.date=that.body.shengri
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
			if (this.title == '') {
				this.msg('请输入昵称')
				return
			}
	
		
			
			
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
				if (this.title == '') {
					this.msg('请输入昵称')
					return
				}

				if (this.cropperImageUrl) {
					this.uploadSuccess()
				} else if (!this.cropperImageUrl && this.vocurlxuanze) {
					this.upvoc()
				} else {
					this.post()
				}


			},

			async post() {
				let that = this;
				let ss = ''
				for (let i in this.tags_user) {
					if (this.tags_user[i].checked) {
						ss += this.tags_user[i].name + '@'
					}

				}
				ss = ss.slice(0, ss.length - 1);

				if (!that.vocurlpass) {
					that.vocurlpass = that.body.voc
					that.vocscend = that.body.vocsen
				}
				if (that.date=='请选择生日'){
					that.date=0
				}			
					if (!that.tjbgimg){
						that.tjbgimg=that.body.bg_img
					}						

				let result = await that.$request({
					loading:1,
					method: 'post',
					url: '/api/four/userset',
					data: {
						shengri: that.date,
						tizhong: that.tizhong,
						zhiye: that.zhiye,
						shengao: that.shengao,
						wxhao: that.wxhao,						
						voc: that.vocurlpass,
						vovnew: that.vovnew,
						vocsen: that.vocscend,
						nickname: that.title,
						dec: that.dec,
						sex: that.sex,
						avatar: that.truehead,
						tags: ss,
						bg_img:that.tjbgimg
					}
				});
	
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						uni.hideLoading()
						console.log(333)
						that.msg('修改成功')											
							setTimeout(() => {
							uni.navigateBack()
							}, 1000);		

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
				let that=this
				uni.showModal({
					content: '是否删除?',
					success: (res) => {
						if (res.confirm) {						
							that.vocurl = ""
							that.vocurlpass = ""
							that.voc = false							
							that.vovnew = ""
							that.body.voc= ""
							that.body.vocsen= ""
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
