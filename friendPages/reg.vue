<template>
	<view class="template-create tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed :isBack="true">
			资料完善
		</tn-nav-bar>


		<view class=" login tn-bg-white" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
		
		<scroll-view id="scrollview" scroll-y scroll-with-animation :style="{height: pingmugaodu + 'rpx'}">
		
		
		
			<view class="login__wrapper ">

				<view class="tn-flex tn-flex-row-between tn-margin-top">
					<view  class="justify-content-item tn-margin tn-text-bold" style="font-size: 24px;">
						填写基本资料
					</view>					
					<view class="justify-content-item tn-margin" style="font-size: 28px;">
					

					</view>
				</view>

				<view class="tn-margin-left " style="margin-top: -25rpx;">
					<text class="tn-color-gray">更多了解你，提成你的魅力</text>
				</view>

				<ksp-cropper v-show="show" mode="fixed" :width="200" :height="200" :maxWidth="400" :maxHeight="400"
					:url="imageUrl" @cancel="close" @ok="cropperFinish"></ksp-cropper>
				<!-- 
	<tn-cropper v-show="show" :imageUrl="imageUrl" :isRound="isRound" @cropper="cropperFinish"
				@closecopper="close"></tn-cropper> -->
				

		
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
						兴趣标签
					</view>
					<view class="tn-margin tn-bg-white" style="border-radius: 10rpx;">

						<tn-tag size='lg' width="20%" height="40px"
							:backgroundColor="item.checked ?  'tn-cool-bg-color-3' : 'huise'" margin="15rpx 15rpx"
							v-for="(item, index) in tags_user" :key="index" class="tag-view"
							@click="labelBtn(item,index)">{{item.name}}</tn-tag>
					</view>
					<view style="height: 80px;"></view>
				<view class=" tn-text-bold  clamp-text-1 tn-text-center  tn-padding-top tn-footerfixeddd">
				
					<tn-button :shadow="true" shape="round" width="40%" height="80rpx" backgroundColor="tn-cool-bg-color-3"
						fontColor="#ffffff" margin="10rpx 0" @click="nexttheer">提 交</tn-button>
				</view>
						

				
			


			</view>
			</scroll-view>
		</view>

	</view>
</template>

<script>
	import {
		host
	} from '@/siteinfo.js'

	import getTel from '@/components/loginFn/get-tel'
	const audioContext = uni.createInnerAudioContext()
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	import {
		assertObject,
		assertString
	} from '@/tools/tools.js';
	export default {
		components: {
			getTel
		},
		name: 'TemplateCreate',
		mixins: [template_page_mixin],
		data() {

			return {
				zhiye:'',
				wxhao:'',
				city:'请选择城市',
				popshow:false,
				pingmugaodu:0,
				shengaozhi:'50',
				tizhongzhi:'50',
				shengao:'150',
				tizhong:'75',
				quxiang: '',
				hun: '',
				shuxingindex: 0,			
				ruquanindex: 0,			
				jingyanindex: 0,			
				dec: '',
				tags_user: [{
						name: "FtoM",
						checked: false
					}
				],
				//、、、	
				date: '请选择生日',
				riqishow: false,
				mode: 'date',
				showLunar: true,
				activeBgColor: '#01BEFF',
				activeColor: '#FFFFFF',
				rangeBgColor: '#E6E6E655',
				rangeColor: '#01BEFF',
				btnColor: '#01BEFF',
				lunarColor: '#AAAAAA',
				startText: '开始',
				endText: '结束',
				toolTips: '请选择日期',
				changeYear: true,
				changeMonth: true,
				result: '',
				//、、
				page:1,
				shengri: '',
				mobile: '',
				showGetTelModal: false, // 是否显示 获取手机号的模态框
				//录音
				bgimgnews: '',
				bgshow: false,
				voc: false,
				vocurl: "",
				vocscend: 0,
				vocurlpass: "",
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
				bgimgbendi: '',
				tjbgimg: ''
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
			that.action = host + '/api/login/up_img'
			that.info()
			if (option.op) {
				this.op = option.op
			}
			// #ifdef MP
			this.showGetTelModal = true;
			// #endif
			
			 uni.getSystemInfo({ 
			      success: (res) => {
			
			        console.log(res.screenHeight); // 屏幕高度，包含导航栏
			        console.log(res.screenWidth); // 屏幕宽度
			        console.log(res.windowHeight); // 可使用窗口高度，不包含导航栏
			        console.log(res.windowWidth); // 可使用窗口宽度
			        // 可使用窗口高度，将px转换rpx
			        let phoneHeight = (res.windowHeight * (750/res.windowWidth))
						this.pingmugaodu=phoneHeight;
			  
			      }
			    })
	
			
			
			
			
		},
		methods: {
			handleGetRegion(region){
			this.region = region[0].name+'-'+region[1].name
			this.city=region[1].name			
			if (region[1].name=='市辖区'){
				this.city=region[0].name
			}
			},
			getquannei(e){
				this.shuxingtitle = e	
			},
			closedPopup() {
				this.popshow = false
			},
			getsex(e) {
				this.sex = e
			},
			gethun(e) {
				this.hun = e
			},
			getquxiang(e) {
				this.quxiang = e
			},
			gettizhong(e) {
				let tizhong=150*e/100
				this.tizhong =tizhong
			},
			getshengao(e) {
				let shengao=300*e/100
				this.shengao =shengao
			},
			

			binshuxing: function(e) {
				console.log(11111111111)
				this.shuxingindex = e.detail.value
				this.shuxingtitle = this.shuxing[e.detail.value]
			},
			bindshijian: function(e) {
				this.ruquanindex = e.detail.value
				this.ruquantitle = this.ruquanlist[e.detail.value]
			},
			bindjingyan: function(e) {
				this.jingyanindex = e.detail.value
				this.jingyantitle = this.jingyanlist[e.detail.value]
			},

			bindDateChange: function(e) {
				this.date = e.detail.value
			},

			closeGetTelModalFn() {
				this.showGetTelModal = false;
			},

			nexttow() {
				if (this.title == '') {
					this.msg('请填写昵称')
					return
				}				
			
				
				if (this.sex == 0) {
					this.msg('请选择性别')
					return
				}
				if (this.date == '请选择生日') {
					this.msg('请选择生日')
					return
				}
				
				
						var csrq =this.date;
						var age = '';
						var d = new Date();
						var year = d.getFullYear();
						var month = d.getMonth() + 1;
						var day = d.getDate();
						if (month < 10) {
							month = '0'+month;
						}
						if(day < 10){
							day = '0'+day;
						}
						var now = year+'-'+month+'-'+day;
						if (now.substring(0,4) >= csrq.substring(0,4) && now.substring(5,7) >=csrq.substring(5,7) 
							&& now.substring(8,10)>=csrq.substring(8,10)) {
							age = year - parseInt(csrq.substring(0,4));
						}else{
							age = year - parseInt(csrq.substring(0,4)) - 1;
						}
			
			
				if (age <18) {
					this.msg('不开放18岁以下注册使用')
					return
				}
				
				this.page = 2
			},
			
			
			nexttheer() {
				if (this.shuxingtitle == '请选择圈内属性') {
					this.msg('请选择圈内属性')
					return
				}
				if (this.ruquantitle == '请选择实践经验') {
					this.msg('请选择入圈时间')
					return
				}
				if (this.jingyantitle == '请选择实践经验') {
					this.msg('请选择实践经验')
					return
				}
				if (this.dec == '') {
					this.msg('请填写简介')
					return
				}
				this.page = 3
			},
			
			nextfour(){				
					let num=0
					for (let i in this.tags_user) {
						if (this.tags_user[i].checked) {
							num++
						}
					}
					if (num==0){
						this.msg('请选择标签')
						return
					}
					this.page = 4
			},
			
			
			nextfive(){				
					let num=0
					for (let i in this.tags_user_aiwan) {
						if (this.tags_user_aiwan[i].checked) {
							num++
						}
					}
					if (num==0){
						this.msg('请选择标签')
						return
					}
					this.page = 5
			},
			
			
			

			next() {
				this.page++
			},
			back() {
				this.page--
			},

			start() {
				console.log('开始录音')
				// 开始录音
			},
			end(event) {
				this.voc = false
				console.log(event)
				this.vocurl = event.tempFilePath
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
				let num=0
				for (let i in this.tags_user) {
					if (this.tags_user[i].checked) {
						num++
					}
				}
				if (num==3&&this.tags_user[index].checked==false){
					this.msg('最多可选3个')
					return
				}
				this.tags_user[index].checked = !this.tags_user[index].checked
			
			},
			labelBtn_juju(name, index) {
				let num=0
				for (let i in this.tags_user_jujue) {
					if (this.tags_user_jujue[i].checked) {
						num++
					}
				}
				if (num==3&&this.tags_user_jujue[index].checked==false){
					this.msg('最多可选3个')
					return
				}
				this.tags_user_jujue[index].checked = !this.tags_user_jujue[index].checked
			
			},
			
			labelBtn_aiwan(name, index) {
				let num=0
				for (let i in this.tags_user_aiwan) {
					if (this.tags_user_aiwan[i].checked) {
						num++
					}
				}
				if (num==3&&this.tags_user_aiwan[index].checked==false){
					this.msg('最多可选3个')
					return
				}
				this.tags_user_aiwan[index].checked = !this.tags_user_aiwan[index].checked
			
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

			showFn(e) {
				let that = this;
				this.mobile = e.data.msg
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
					this.yanse1 = "#00FFC6"
					this.yanse2 = "#ff55ff"
				}
				if (sex == 1) {
					this.yanse1 = "#00FFC6"
					this.yanse0 = "#e6e6e6"
					this.yanse2 = "#e6e6e6"
				}
				if (sex == 2) {
					this.yanse2 = "#ff55ff"
					this.yanse0 = "#e6e6e6"
					this.yanse1 = "#e6e6e6"
				}
			},
			async info() {
				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/four/friend_usershow',
					data: {}
				});


				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						that.body = result.data.data.userinfo;
						that.avatar = that.body.avatar
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












			uploadSuccess() {

				uni.uploadFile({
					url: this.action, //仅为示例，非真实的接口地址
					filePath: this.cropperImageUrl,
					name: 'file',
					formData: {
						'token': uni.getStorageSync('token'),
						'user': 'test'
					},
					success: (uploadFileRes) => {
						let data = JSON.parse(uploadFileRes.data)
						this.avatar = data.data.file
						this.truehead = data.data.file
						this.post()

					}
				});


			},


			send() {
				if (this.title == '') {
					this.msg('请输入昵称')
					return
				}

				if (this.sex == 0) {
					this.msg('请选择性别')
					return
				}



				if (this.cropperImageUrl) {
					this.uploadSuccess()
				} else {
					this.post()
				}


			},

		
		post() {
		
			// #ifdef MP-WEIXIN
			this.post_xcx()
			// #endif
			// #ifndef MP-WEIXIN
				this.post_app()
			// #endif
		
		},
		
		async post_app() {
		
			let that = this;
			let data = uni.getStorageSync('user_reg')
			data.nickname = that.title
			data.sex = that.sex
			data.avatar = that.avatar
			data.op = that.op
			data.daren_id = uni.getStorageSync('daren_id')
			
			
			let woshi=''
			for (let i in this.tags_user) {
				if (this.tags_user[i].checked){
					woshi+=this.tags_user[i].name+','
				}
			}
			let jujue=''
			for (let i in this.tags_user_jujue) {
				if (this.tags_user_jujue[i].checked){
					jujue+=this.tags_user_jujue[i].name+','
				}
			}
			let aiwan=''
			for (let i in this.tags_user_aiwan) {
				if (this.tags_user_aiwan[i].checked){
					aiwan+=this.tags_user_aiwan[i].name+','
				}
			}
			
			
			data.date=this.date
			data.dec=this.dec
			data.shuxingtitle=this.shuxingtitle
			data.ruquantitle=this.ruquantitle
			data.jingyantitle=this.jingyantitle
			data.hun=this.hun
			data.quxiang=this.quxiang
			data.tizhong=this.tizhong
			data.shengao=this.shengao	
			data.woshi=woshi
			data.jujue=jujue
			data.aiwan=aiwan
			data.city=this.city
			
			
			let result = await that.$request({
				loading: 1,
				method: 'post',
				url: '/api/LoginNew/set_user',
				data: data
			});
		
			if (result.statusCode == 200) {
				if (result.data.code == 200) {
					uni.hideLoading()
		
					let token = assertObject(result.data.data).login_token;
					let user_id = result.data.data.user_id;
					uni.setStorageSync('user_id', user_id);
					that.$store.commit('setToken', token);
					uni.setStorageSync('user_reg_xcx', '');
					uni.setStorageSync('user_reg', '');
					that.bind()
					uni.setStorageSync('token', token);
					uni.hideLoading();
					that.hasTokenGetUserInfo(() => {
						uni.hideLoading();
						uni.showToast({
							icon: 'success',
							title: '登录成功'
						});
		
						uni.$emit('loginok', true);
		
						setTimeout(() => {
							uni.navigateBack({
								delta: 2
							});
						}, 500);
					});
		
		
		
		
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
		
		
		async post_xcx() {
			let that = this;
			let data = {}
			data.nickname = that.title
			data.sex = that.sex
			data.avatar = that.avatar
			data.open_id = uni.getStorageSync('user_reg_xcx')
			data.mobile = that.mobile
			data.daren_id = uni.getStorageSync('daren_id')
			
			let woshi=''
			for (let i in this.tags_user) {
				if (this.tags_user[i].checked){
					woshi+=this.tags_user[i].name+','
				}
			}
			let jujue=''
			for (let i in this.tags_user_jujue) {
				if (this.tags_user_jujue[i].checked){
					jujue+=this.tags_user_jujue[i].name+','
				}
			}
			let aiwan=''
			for (let i in this.tags_user_aiwan) {
				if (this.tags_user_aiwan[i].checked){
					aiwan+=this.tags_user_aiwan[i].name+','
				}
			}
			
			
			data.date=this.date
			data.dec=this.dec
			data.shuxingtitle=this.shuxingtitle
			data.ruquantitle=this.ruquantitle
			data.jingyantitle=this.jingyantitle
			data.hun=this.hun
			data.quxiang=this.quxiang
			data.tizhong=this.tizhong
			data.shengao=this.shengao	
			data.woshi=woshi
			data.jujue=jujue
			data.aiwan=aiwan
			data.city=this.city
			
			let result = await that.$request({
				loading: 1,
				method: 'post',
				url: '/api/LoginNew/set_user_xcx',
				data: data
			});
			///////////要去检查手机号是否有这个用户，保持通用
			if (result.statusCode == 200) {
				if (result.data.code == 200) {
					uni.hideLoading()		
					let token = assertObject(result.data.data).login_token;
					let user_id = result.data.data.user_id;
					uni.setStorageSync('user_id', user_id);
					that.$store.commit('setToken', token);
					uni.setStorageSync('user_reg_xcx', '');
					uni.setStorageSync('user_reg', '');
					that.bind()
					uni.setStorageSync('token', token);
					uni.hideLoading();
					that.hasTokenGetUserInfo(() => {
						uni.hideLoading();
						uni.showToast({
							icon: 'success',
							title: '登录成功'
						});
		
						uni.$emit('loginok', true);
		
						setTimeout(() => {
							uni.navigateBack({
								delta: 1
							});
						}, 500);
					});
		
		
		
		
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
		

			bind() {
				let msg = {
					'type': 'bind',
					'fromid': uni.getStorageSync('user_id')
				};
				uni.sendSocketMessage({
					data: JSON.stringify(msg),
					success: (res) => {
						console.log('login绑定会员id成功' + uni.getStorageSync('user_id'), res)
					},
					fail: (res) => {
						//console.log('绑定会员id失败'+uni.getStorageSync('user_id'), res)
					}
				});

			},


		}
	}
</script>

<style lang="scss" scoped>
	.template-edit {}

	.tag-view {
		border-radius: 2000px !important;
		border: 1px solid #dfe2e5
	}

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
		z-index: 1000;
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


	.login {
	
	
		/* 背景图片 start */
		&__bg {
			z-index: -1;
			position: fixed;

			&--top {
				top: 0;
				left: 0;
				right: 0;
				width: 100%;

				.bg {
					width: 050rpx;
					will-change: transform;
				}
			}

			&--bottom {
				bottom: -10rpx;
				left: 0;
				right: 0;
				width: 100%;
				// height: 144px;
				// margin-bottom: env(safe-area-inset-bottom);

				image {
					width: 750rpx;
					will-change: transform;
				}
			}
		}

		/* 背景图片 end */

		/* 内容 start */
	
		/* 切换 start */
		&__mode {
			position: relative;
			margin: 0 auto;
			width: 476rpx;
			height: 77rpx;
			margin-top: 100rpx;
			background-color: rgba(255, 255, 255, 0.1);
			box-shadow: 0rpx 10rpx 50rpx 0rpx rgba(0, 3, 72, 0.1);
			border-radius: 39rpx;

			&__item {
				height: 77rpx;
				width: 100%;
				line-height: 77rpx;
				text-align: center;
				font-size: 31rpx;
				color: #78909C;
				letter-spacing: 1em;
				text-indent: 1em;
				z-index: 2;
				transition: all 0.4s;

				&--active {
					font-weight: bold;
					color: #FFFFFF;
				}
			}

			&__slider {
				position: absolute;
				height: inherit;
				width: calc(476rpx / 2);
				border-radius: inherit;
				box-shadow: 0rpx 18rpx 72rpx 18rpx rgba(0, 195, 255, 0.1);
				z-index: 1;
				transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
			}
		}

		/* 切换 end */

		/* 登录注册信息 start */
		&__info {
			margin: 80rpx 30rpx 10rpx 30rpx;
			padding-bottom: 0;
			border-radius: 20rpx;

			&__item {

				&__input {
					margin-top: 59rpx;
					width: 100%;
					height: 77rpx;
					border: 1rpx solid #C6D1D8;
					border-radius: 39rpx;

					&__left-icon {
						width: 10%;
						font-size: 44rpx;
						margin-left: 20rpx;
						color: #78909C;
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
						font-size: 44rpx;
						margin-right: 20rpx;
						color: #78909C;
					}

					&__right-verify-code {
						width: 34%;
						margin-right: 20rpx;
					}
				}

				&__button {
					margin-top: 75rpx;
					margin-bottom: 39rpx;
					width: 100%;
					height: 77rpx;
					text-align: center;
					font-size: 31rpx;
					font-weight: bold;
					line-height: 77rpx;
					letter-spacing: 1em;
					text-indent: 1em;
					border-radius: 39rpx;
					box-shadow: 1rpx 10rpx 24rpx 0rpx rgba(60, 129, 254, 0.35);
				}

			}
		}

		/* 登录注册信息 end */

		/* 内容 end */

	}

	/deep/.input-placeholder {
		font-size: 30rpx;
		color: #C6D1D8;
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
  .tn-footerfixeddd {
  	bottom: 10px;  	 	  
    position: fixed;
    width: 100%; 
    box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0);
  }
	/* 标签内容 end*/
</style>
