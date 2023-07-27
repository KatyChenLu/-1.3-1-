<template>
	<view class="template-create tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed :isBack="true">
			设置
		</tn-nav-bar>


		<view class="tn-safe-area-inset-bottom " :style="{paddingTop: vuex_custom_bar_height + 'px'}">

			<view class="about-shadow  tn-margin">
				<tn-list-cell :unlined="true" :radius="true" :fontSize="30"
					@click="navigateToFn({ url: '/minePages/edit', checkLogin: true })">
					<view class="tn-flex tn-flex-row-between" style="width: 100%;">
						<view class="tn-margin-left-sm">账户与资料</view>
						<view class="tn-color-gray tn-icon-right"></view>
					</view>
				</tn-list-cell>
				<tn-list-cell :unlined="true" :radius="true" :fontSize="30"
					@click="passhow=true" v-if="configInfo.regtype==1">
					<view class="tn-flex tn-flex-row-between" style="width: 100%;">
						<view class="tn-margin-left-sm">修改密码</view>
						<view class="tn-color-gray tn-icon-right"></view>
					</view>
				</tn-list-cell>
				
				
				<dk-shezhi  v-model="passhow" width="80%" height="40%" mode="center" :borderRadius="30"
					giftitle="修改密码" :closeBtn="true" :maskCloseable="false">
					<slot>
					
							<view class="custom-modal-content tn-padding">
				
								<tn-form :labelWidth="180">
									<tn-form-item label="修改密码" :borderBottom="false"   >
										<tn-input placeholder="请输入新密码" :clearable="false" v-model="password"></tn-input>
									</tn-form-item>									
								</tn-form>
								<view class="tn-text-center" >
									<tn-button :fontSize="28" padding="20rpx" height="56rpx" backgroundColor="#ffaa00"
										fontColor="tn-color-white" @click="savepassword()">提交</tn-button>
								</view>
							</view>
					
					</slot>
				</dk-shezhi>
					
				
				
				
				
				
				
				
				<tn-list-cell :unlined="true" :radius="true" :fontSize="30">
					<view class="tn-flex tn-flex-row-between" style="width: 100%;">
						<view class="tn-margin-left-sm">手机号</view>
						
						<view class="tn-color-gray " v-if="body.mobile">{{body.mobile}}</view>
						<view class="tn-color-gray " v-else>未绑定</view>
						
					</view>
				</tn-list-cell>
				
				
		
			
				
				
				
				
				
				
				
				
				
				
				<tn-list-cell :unlined="true" :radius="true" :fontSize="30">
					<view class="tn-flex tn-flex-row-between" style="width: 100%;">
						<view class="tn-margin-left-sm">实名认证</view>
						<text v-if="body.is_renzheng">已认证</text>
						<text v-else @click="renzheng()">未认证</text>
					</view>
				</tn-list-cell>

				<dk-shezhi ref="dkshezhi" v-model="giftianchu" width="80%" height="40%" mode="center" :borderRadius="30"
					giftitle="实名认证" :closeBtn="true" :maskCloseable="false">
					<slot>
						<view v-if="!body.is_renzheng">
							<view class="custom-modal-content tn-padding">

								<tn-form :labelWidth="140">
									<tn-form-item label="姓名" :borderBottom="false">
										<tn-input placeholder="请输入姓名" :clearable="false" v-model="body.sfz_name"></tn-input>
									</tn-form-item>
									<tn-form-item label="身份证号" :borderBottom="false">
										<tn-input placeholder="请输入身份证号" :clearable="false" v-model="body.sfz_number"></tn-input>
									</tn-form-item>
								</tn-form>
								<view class="tn-text-center" @click="renzhengpass()">
									<tn-button :fontSize="28" padding="20rpx" height="56rpx" backgroundColor="#ffaa00"
										fontColor="tn-color-white">提交</tn-button>
								</view>
							</view>
						</view>
					</slot>
				</dk-shezhi>

				<tn-list-cell :unlined="true" :radius="true" :fontSize="30"
					@click="navigateToFn({ url: '/minePages/shouru', checkLogin: true })">
					<view class="tn-flex tn-flex-row-between" style="width: 100%;">
						<view class="tn-margin-left-sm">我的收入</view>
						<view class="tn-color-gray tn-icon-right"></view>
					</view>
				</tn-list-cell>
				
				<tn-list-cell :unlined="true" :radius="true" :fontSize="30">
					<view class="tn-flex tn-flex-row-between" style="width: 100%;">
						<view class="">个性化内容推荐
							<view class="" style="font-size: 12px;color: #626262;">关闭后你将不在收到基于个人兴趣的推荐内容</view>
						</view>
						<tn-switch v-model="is_tuisong" @change="is_tuisongd()"></tn-switch>
					</view>
				</tn-list-cell>
				
				<tn-list-cell :unlined="true" :radius="true" :fontSize="30">
					<view class="tn-flex tn-flex-row-between" style="width: 100%;">
						<view class="tn-margin-left-sm">推送通知（点评点赞聊天）</view>
						<tn-switch v-model="body.is_tuisong" @change="is_tuisongd"></tn-switch>
					</view>
				</tn-list-cell>

				<tn-list-cell :unlined="true" :radius="true" :fontSize="30">
					<view class="tn-flex tn-flex-row-between" style="width: 100%;">
						<view class="tn-margin-left-sm">是否允许查看我的关注</view>
						<tn-switch v-model="body.is_see_follow" @change="is_see_follow"></tn-switch>
					</view>
				</tn-list-cell>
				<tn-list-cell :unlined="true" :radius="true" :fontSize="30">
					<view class="tn-flex tn-flex-row-between" style="width: 100%;">
						<view class="tn-margin-left-sm">是否允许查看我的粉丝</view>
						<tn-switch v-model="body.is_see_fans" @change="is_see_fans"></tn-switch>
					</view>
				</tn-list-cell>
				<tn-list-cell :unlined="true" :radius="true" :fontSize="30"
					@click="zhuxiao()">
					<view class="tn-flex tn-flex-row-between" style="width: 100%;">
						<view class="tn-margin-left-sm">账号注销</view>
						<view class="tn-color-gray tn-icon-right"></view>
					</view>
				</tn-list-cell>

				<block v-for="(item, index) in news" :key="index" >
					<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30"
						@click="navigateToFn({ url: '/homePages/about?id='+item.id, checkLogin: false })">
						<view class="tn-flex tn-flex-col-center">
							<view class="tn-margin-left-sm tn-flex-1">{{item.title}}</view>
							<view class="tn-color-gray tn-icon-right"></view>
						</view>
					</tn-list-cell>

				</block>

				<!-- #ifdef APP-PLUS -->
				<tn-list-cell :hover="true" :unlined="true" :radius="true" :fontSize="30" @click="clearStorage">
					<view class="tn-flex tn-flex-col-center">
						<view class="tn-margin-left-sm tn-flex-1">清除缓存</view>
						<view class="tn-color-gray ">{{currentSize}}</view>
					</view>
				</tn-list-cell>
				
				
			<tn-list-cell :unlined="true" :radius="true" :fontSize="30"
				@click="gengxin()">
				<view class="tn-flex tn-flex-row-between" style="width: 100%;">
					<view class="tn-margin-left-sm">在线更新</view>
					<view class="tn-color-gray tn-icon-right"></view>
				</view>
			</tn-list-cell>
				
			<!-- #endif -->
				
				<tn-list-cell :unlined="true" :radius="true" :fontSize="30"
					@click="out()">
					<view class="tn-flex tn-flex-row-between" style="width: 100%;">
						<view class="tn-margin-left-sm tn-color-red">退出登录</view>
						<view class="tn-color-gray tn-icon-right"></view>
					</view>
				</tn-list-cell>
				
			</view>

		</view>

	<get-tel @callback="showFn" :is-show="showGetTelModal" @close="closeGetTelModalFn"></get-tel>
				
	</view>
</template>

<script>
	import {
		host
	} from '@/siteinfo.js'
	import getTel from '@/components/loginFn/get-tel';
	import silenceUpdate from '@/uni_modules/rt-uni-update/js_sdk/silence-update.js' //引入静默更新
	export default {
components: {
		getTel
	},
		data() {
			return {
				is_tuisong: true,
				password:'',
				passhow:false,
					showGetTelModal: false, // 是否显示 获取手机号的模态框
				davshow:false,
				currentSize: 0,
				news: [],
				body: [],
				giftianchu: false
			}
		},
		onLoad(option) {
			let that = this
			console.log(host)
			that.info()
			// #ifdef APP-PLUS
			this.getStorageSize()
			// #endif			
		},
		methods: {

	shouquanshouji(){
		// #ifdef MP
		this.showGetTelModal = true;
		// #endif
	
	},
		showFn() {
			let that = this;	
		// #ifdef MP
			that.info()
		// #endif
		},
		closeGetTelModalFn() {
			this.showGetTelModal = false;
		},
			shifouturedd(timeValue) {
				if (timeValue) {
					return true
				} else {
					return false
				}
			},
			shifouturefanzhe(timeValue) {
				if (timeValue) {
					return false
				} else {
					return true
				}
			},
			renzheng() {
				this.giftianchu = true
			},
			async info() {
				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/user/setindex',
					data: {}
				});


				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						that.body = result.data.data;
						that.body.is_tuisong = this.shifouturedd(result.data.data.is_tuisong)
						that.body.is_online = this.shifouturedd(result.data.data.is_online)
						that.body.is_see_follow = this.shifouturefanzhe(result.data.data.is_see_follow)
						that.body.is_see_fans = this.shifouturefanzhe(result.data.data.is_see_fans)
						that.news = result.data.data.news


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

			async renzhengpass() {
				let that = this;

				if (this.body.sfz_name == '') {
					this.msg('姓名不能为空')
					return;
				}
				if (this.body.sfz_number == '') {
					this.msg('身份证号码不能为空')
					return;
				}


				let arrExp = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; //加权因子  
				let arrValid = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2]; //校验码  
				if (/^\d{17}\d|x$/i.test(this.body.sfz_number)) {
					let sum = 0,
						idx;
					for (let i = 0; i < this.body.sfz_number.length - 1; i++) {
						// 对前17位数字与权值乘积求和  
						sum += parseInt(this.body.sfz_number.substr(i, 1), 10) * arrExp[i];
					}
					// 计算模（固定算法）  
					idx = sum % 11;
					// 检验第18为是否与校验码相等  
					if (arrValid[idx] == this.body.sfz_number.substr(17, 1).toUpperCase()) {

					} else {
						uni.showToast({
							title: '身份证号码错误！',
							icon: 'none',
							duration: 2000
						});
						return;
					}


				} else {
					uni.showToast({
						title: '身份证号码不正确！',
						icon: 'none',
						duration: 2000
					});
					return;
				}



				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/user/set_sfz',
					data: {
						sfz_number: this.body.sfz_number,
						sfz_name: this.body.sfz_name
					}
				});


				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						uni.hideLoading()
						this.msg(result.data.msg)
						this.body.is_renzheng=1
						this.giftianchu=false
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
			
			is_tuisongd(ted) {
				this.xiugai('is_tuisong', ted)
			},
			is_online(ted) {
				console.log(this.body)
				if (this.body.vip==0)
				{
				this.msg('你不是VIP哦')	
				return
				}
				this.xiugai('is_online', ted)
			},

			is_see_fans(ted) {

				if (ted) {
					ted = 0
				} else {
					ted = 1
				}
				this.xiugai('is_see_fans', ted)
			},
			is_see_follow(ted) {
				if (ted) {
					ted = 0
				} else {
					ted = 1
				}
				this.xiugai('is_see_follow', ted)
			},
			async xiugai(type, arr) {
				let zhi
				if (arr) {
					zhi = 1
				} else {
					zhi = 0
				}
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/user/set_passmore?type=' + type + '&key=' + zhi,
					data: {}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						this.msg('设置成功')
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

			async renzhengdawv(){
	
				if (this.body.dav_name =='') {
					this.msg('请输入认证名称')
					return
				} 
				if (this.body.dav_liyou =='') {
					this.msg('请输入申请理由')
					return
				} 			
			
				let that = this;
				let result = await that.$request({
					loading:1,
					method: 'post',
					url: '/api/user/set_davshen',
					data: {
						dav_liyou:this.body.dav_liyou,
						dav_name:this.body.dav_name						
					}
				});		
					this.body.is_dav=1
					this.msg('申请成功等待审核')
				 
			},


		async savepassword(){	
				if (this.password=='') {
					this.msg('请输入新密码')
					return
				} 				
			
				let that = this;
				let result = await that.$request({
					loading:1,
					method: 'post',
					url: '/api/user/set_passmore',
					data: {
						type:'password',										
						zhi:this.password,										
					}
				});		
					this.passhow=false
					this.msg('修改成功')
				 
			},



			// 获取本地缓存大小
			getStorageSize() {
				// #ifdef APP-PLUS

				// #endif
				let that = this;
				plus.cache.calculate(function(size) {
					let sizeCache = parseInt(size);
					if (sizeCache == 0) {
						that.currentSize = "0B";
					} else if (sizeCache < 1024) {
						that.currentSize = sizeCache + "B";
					} else if (sizeCache < 1048576) {
						that.currentSize = (sizeCache / 1024).toFixed(2) + "KB";
					} else if (sizeCache < 1073741824) {
						that.currentSize = (sizeCache / 1048576).toFixed(2) + "MB";
					} else {
						that.currentSize = (sizeCache / 1073741824).toFixed(2) + "GB";
					}
				});
			},
			// 清理缓存
			clearStorage() {
				let that = this;
				let os = plus.os.name;
				if (os == 'Android') {
					let main = plus.android.runtimeMainActivity();
					let sdRoot = main.getCacheDir();
					let files = plus.android.invoke(sdRoot, "listFiles");
					let len = files.length;
					console.log(files, len)
					for (let i = 0; i < len; i++) {
						let filePath = '' + files[i]; // 没有找到合适的方法获取路径，这样写可以转成文件路径  
						plus.io.resolveLocalFileSystemURL(filePath, function(entry) {
							if (entry.isDirectory) {
								entry.removeRecursively(function(entry) { //递归删除其下的所有文件及子目录
									that.files = []
									uni.showToast({
										title: '清除成功',
										duration: 2000
									});
									that.getStorageSize(); // 重新计算缓存  
								}, function(e) {
									console.log(e.message)
								});
							} else {
								entry.remove();
							}
						}, function(e) {
							console.log('文件路径读取失败')
						});
					}
				} else { // ios  
					plus.cache.clear(function() {
						uni.showToast({
							title: '清除成功',
							duration: 2000
						});
						that.getStorageSize();
					});
				}
			},			
			zhuxiao() {
				let that = this
				uni.showModal({
					title: '提示',
					content: '1、账号注销为不可恢复操作，\n2、将视为您自愿主动放弃个人信息、发布内容、虚拟币等虚拟权益',
					confirmText: '确定',
					success: function(res) {
						if (res.confirm) {
						that.logOutFn();	
					 that.$request({
							loading: 0,
							method: 'post',
							url: '/api/user/deluser',
							data: {							
							}
						});						
						
												
							uni.reLaunch({
								url: '/pages/index'
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
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
							uni.reLaunch({
								url: '/pages/index'
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			
			gengxin() {
			//#ifdef APP-PLUS 
			
			// 获取本地应用资源版本号
					plus.runtime.getProperty(plus.runtime.appid, (inf) => {
						//获取服务器的版本号
						uni.request({
							url: host + '/api/index/app_up', //示例接口
							data: {
								edition_type: plus.runtime.appid,
								version_type: uni.getSystemInfoSync().platform, //android或者ios
								edition_number: inf.versionCode // 打包时manifest设置的版本号 
							},
							success: (res) => {
								//res.data.xxx根据后台返回的数据决定（我这里后端返回的是data），所以是res.data.data 
								//判断后台返回版本号是否大于当前应用版本号 && 是否发行 （上架应用市场时一定不能弹出更新提示）
								if (Number(res.data.data.edition_number) > Number(inf.versionCode) && res
									.data.data.edition_issue == 1) {
			
									//如果是wgt升级，并且是静默更新 （注意！！！ 如果是手动检查新版本，就不用判断静默更新，请直接跳转更新页，不然点击检查新版本后会没反应）
									if (res.data.data.package_type == 1 && res.data.data.edition_silence == 1) {
			
										//调用静默更新方法 传入下载地址
										silenceUpdate(res.data.data.edition_url)
			
									} else {
										//跳转更新页面 （注意！！！如果pages.json第一页的代码里有一打开就跳转其他页面的操作，下面这行代码最好写在setTimeout里面设置延时3到5秒再执行）
										uni.navigateTo({
											url: '/uni_modules/rt-uni-update/components/rt-uni-update/rt-uni-update?obj=' +
												JSON.stringify(res.data.data)
										});
									}
								} else {
			
									uni.showModal({
										title: '提示',
										content: '已是最新版本',
										showCancel: false
									})
								}
							}
			
			
						})
			
					});
					
					//#endif	
						
							},


		}
	}
</script>

<style lang="scss" scoped>
	.template-edit {}

	/* 用户头像 start */
	.logo-image {
		width: 210rpx;
		height: 210rpx;
		position: relative;
	}

	.about-shadow {
		border-radius: 15rpx;
		box-shadow: 0rpx 50rpx 50rpx 50rpx rgba(0, 0, 0, 0.07);
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
	.tn-tabbar-height {
		min-height: 100rpx;
		height: calc(120rpx + env(safe-area-inset-bottom) / 2);
	}

	.tn-footerfixed {
		position: fixed;
		width: 100%;
		bottom: calc(30rpx + env(safe-area-inset-bottom));
		z-index: 1024;
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

	.list {
		&__left {
			display: flex;
			align-items: center;
			justify-content: flex-start;

			&__icon,
			&__image {
				margin-right: 18rpx;
			}
		}

		&__right {
			display: flex;
			align-items: center;
			justify-content: flex-end;
		}
	}

	.list-icon-text,
	.list-image-text {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.list-image-text {
		.list {
			&__left {
				&__image {
					width: 20rpx;
					height: 20rpx;
				}
			}
		}
	}

	/* 标签内容 end*/
</style>
