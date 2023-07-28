<template>
	<view class="template-circle tn-safe-area-inset-bottom ">
		<tn-nav-bar :isBack="false" :bottomShadow="false" backgroundColor="transparent">
			<!-- <text class="">{{configInfo.shoname}}</text>		
		  <view slot="right" class="tn-flex tn-flex-col-right tn-flex-row-right ">
		  	<view class="custom-nav__right" style="margin-left: 10px;" 
			 @click="navigateToFn({ url: '/homePages/search', checkLogin: false })">
		  		<text class="tn-icon-search" style="font-size: 18px;"></text>搜索
		  </view>			
		  </view> -->
		</tn-nav-bar>



		<!-- 推荐 -->
		<mescroll-body ref="mescrollRef" @down="downCallback" @up="upCallback">
			<view v-if="current==1" class="indexbg" :style="{paddingTop: vuex_custom_bar_height + 'px'}">

				<!-- #ifdef MP -->
				<add-tip />
				<!-- #endif -->

				<!-- <view class="" style="padding: 10px 15px;" v-if="swiperList.length>0">
					<tn-swiper :list="swiperList" imageMode="aspectFill" @click="hpicto" :height="200"></tn-swiper>
				</view> -->

				<view class="index-top">
					<view class="index-top-left flex-base">
						<view :class="{'top-tab-view-select':topTabSelect==0,'top-tab-view-normal':topTabSelect!=0}">交友
						</view>
						<view :class="{'top-tab-view-select':topTabSelect==1,'top-tab-view-normal':topTabSelect!=1}">电竞
						</view>
						<view :class="{'top-tab-view-select':topTabSelect==2,'top-tab-view-normal':topTabSelect!=2}">搭子
						</view>
					</view>
					<view class="index-top-right flex-base">
						<view class="search-box" @click="navigateToFn({ url: '/homePages/search', checkLogin: false })">

							<image src="../static/newUI/search_box.png" mode="" class="search-bg"></image>
							<image src="../static/newUI/search_icon.png" mode="" class="search-icon"></image>
							<view class="search-tip">
								搜一搜
							</view>
						</view>
						<view class="gift-box">
							<image src="../static/newUI/gift.png" mode="" class="gift"></image>
						</view>
					</view>
				</view>
				<view class="bulletin_box">
					<view class="bull_box">
						<image src="../static/newUI/bulletin_bg.png" mode="" class="bulletin-bg"></image>
						<view class="bulletin-tip">
							公告 : <text class="bulletin-tip-text">测试内容.测试内容.测试内容.测试内容.测试内容.测试内容</text>
						</view>
					</view>

				</view>



				<!-- 	<view class="nav-list  tea-user__wrap">
					 <view
					       class="nav-list-item tn-shadow-blur tn-cool-bg-image tn-main-gradient-purplered--single"		       
					     style="height: 100rpx;" @click="navigateToFn({ url: '/pages/diaoyou', checkLogin: false })">
					       <view class="nav-link" style="margin-top:-30rpx;margin-left:-20rpx;">
					         <view class='title'>线下钓友</view>					     
					       </view>					      
					     </view>
					 
					 <view
					   class="nav-list-item tn-shadow-blur tn-cool-bg-image tn-main-gradient-indigo--single"		       
					 style="height: 100rpx;" @click="navigateToFn({ url: '/pages/liaotian', checkLogin: false })">
					   <view class="nav-link" style="margin-top:-30rpx;margin-left:-20rpx;">
					     <view class='title'>同城交友</view>					 
					   </view>
					  
					 </view>	
				</view> -->


				<block v-if="configInfo.xcx_sh==1">
					<view class="tn-flex tn-flex-wrap  "
						style=" box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);padding: 22rpx 22rpx 0;">
						<view class=" tn-radius" v-for="(item, indexsdf) in iconnew" :key="indexsdf"
							:class="{'sige': 1}" v-if="!item.appId">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"
								style="margin-bottom: 26rpx;"
								@click="navigateToFn({ url: '/gamePages/index?type=0&id='+item.id+'&title='+item.title, checkLogin: false })">
								<view class=" tn-flex tn-flex-row-center tn-flex-col-center"
									style="height:66rpx;width: 66rpx;">
									<image class="" :src='item.image' mode='aspectFit'
										style="height:66rpx;width: 66rpx;"></image>
								</view>
								<view class=" tn-text-center" style="margin-top: 14rpx;">
									<text class="jingang-text">{{item.title}}</text>
								</view>
							</view>
						</view>
						<view class=" tn-radius" :class="{'sige': 1}" v-if="1">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"
								style="margin-bottom: 26rpx;"
								@click="navigateToFn({ url: ''+item.title, checkLogin: false })">
								<view class=" tn-flex tn-flex-row-center tn-flex-col-center"
									style="height:66rpx;width: 66rpx;">
									<image class="" src="../static/newUI/more_game.png" mode='aspectFit'
										style="height:66rpx;width: 66rpx;"></image>
								</view>
								<view class=" tn-text-center" style="margin-top: 14rpx;">
									<text class="jingang-text">更多</text>
								</view>
							</view>
						</view>
					</view>

					<!-- <view class="tn-flex tn-flex-wrap  tn-padding-sm"
						style=" box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);">
						<view class=" tn-radius" v-for="(item, indexsdf) in iconnew" :key="indexsdf" :class="{
						'wuge': configInfo.daohanggeshu ==0,
						'sige': configInfo.daohanggeshu ==1}" v-if="!item.appId">
							<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"
								@click="navigateToFn({ url: '/gamePages/index?type=0&id='+item.id+'&title='+item.title, checkLogin: false })">
								<view class="icon7__item--icon tn-flex tn-flex-row-center tn-flex-col-center">
									<image class="" :src='item.image' mode='aspectFit'
										style="height:90rpx;width: 90rpx;"></image>
								</view>
								<view class=" tn-text-center" style="margin-top: 14rpx;">
									<text class="tn-text-ellipsis tn-text-color">{{item.title}}</text>
								</view>
							</view>
						</view>
					</view> -->
				</block>
				<view class="nav-list  tea-user__wrap">
					<view class="nav-list-item  image-bg"
						@click="navigateToFn({ url: '/pages/diaoyou', checkLogin: false })">
					</view>
					<view class="nav-list-item image-bg1"
						@click="navigateToFn({ url: '/pages/liaotian', checkLogin: false })">
					</view>
					<view class="nav-list-item image-bg2"
						@click="navigateToFn({ url: '/pages/liaotian', checkLogin: false })">
					</view>
				</view>





				<view class="tn-flex tn-flex-row-between tn-margin-sm"
					v-if="configInfo.yuyin_open==1&&configInfo.xcx_sh==1&&roomlist.length>0">
					<view class="justify-content-item tn-text-bold tn-text-xl">

						<text class="">语音房间</text>
					</view>
					<view class="justify-content-item tn-text-lg"
						@click="navigateToFn({ url: '/homePages/party', checkLogin: false })">
						<text class="tn-padding-xs">更多</text>
						<text class="tn-icon-right"></text>
					</view>
				</view>



				<!-- 比例 start-->
				<view class="tn-flex tn-flex-wrap tn-margin-sm" v-if="configInfo.yuyin_open==1&&configInfo.xcx_sh==1">
					<block v-for="(item, indexdroom) in roomlist" :key="indexdroom">
						<view class="tn-padding-xs tn-padding-bottom " style="width: 50%;" @click="jinruroom(item.id)">

							<view class="tn-blogger-content__wrap tn-cool-bg-color-15" style="border-radius: 10px;
			       position: relative;	
			       background-blend-mode: multiply;
			   	 background-size: cover;">




								<view class="dk-tags" style="background-color: rgba(29, 29, 29, 0.4);">
									<text class="tn-icon-voice"></text>
									{{item.type}}
								</view>

								<view class="tn-blogger-content__label  tn-padding-sm" style="height: 70px;">
									<text
										class="tn-blogger-content__label__desc  dk-text-over2 ">{{ item.title }}</text>
								</view>

								<view
									class="tn-flex tn-flex-row-between tn-flex-col-center  tn-padding-right-sm tn-padding-bottom-sm"
									style="height: 35px;">
									<view class="justify-content-item tn-flex tn-flex-col-center">
										<view style="margin-right: 10rpx;margin-left: 20rpx;">
											<tn-avatar-group :lists="item.viewUser.latestUserAvatar" size="sm">
											</tn-avatar-group>
										</view>
										<text
											class="tn-color-white tn-text-xs">{{ item.viewUser.viewUserCount }}人在线</text>
									</view>
								</view>


							</view>
						</view>
					</block>
				</view>
				<view>
				</view>









				<view class="tn-flex tn-flex-direction-column tn-margin-bottom">

					<view class="" style="width: 100%;position: relative;">
						<!-- 	<tn-tabs :list="list" activeColor="#5500ff" inactiveColor="#000000" :isScroll="true"
							:current="currenttiezi" name="tab-name" @change="tabsChange"></tn-tabs> -->
						<view class="list-tab-box">
							<image src="../static/newUI/tap_first.png" mode="" class="tab_first"></image>
							<view class="list-tab-right">
								<view class="list-tab" v-for="(item, tabItem) in list" :key="tabItem"
									@click="tabsChange(tabItem)">
									{{item.name}}
								</view>
							</view>
						</view>
					</view>
					<view class="warm-box">
						<image src="../static/newUI/warm_tips_bg.png" class="warm-img" mode=""></image>
						<text class="warm-text1">每日可领券，天天享</text>
						<text class="warm-text2">9</text>
						<text class="warm-text3">折</text>
					</view>
					<quan-news :list="content" :index="true"></quan-news>
				</view>


			</view>


		</mescroll-body>
		<!-- 登录框组件 -->
		<login-fn :is-show-login="loginBoxFlag" @loginSuccessCallback="refreshFn" @close="closeGlobalLoginFn">
		</login-fn>
		<!-- 压屏窗-->
		<tn-landscape :show="tanchuangshow" :maskCloseable="false" closePosition="rightTop" @close="closeLandscape">
			<image :src="tanchuanglistimage" mode="widthFix" @click="tanchuang()"></image>
		</tn-landscape>
		<view style="height: 50px;"></view>
	</view>
</template>

<script>
	import {
		host
	} from '@/siteinfo.js'
	import silenceUpdate from '@/uni_modules/rt-uni-update/js_sdk/silence-update.js' //引入静默更新
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	import MescrollBody from '@/components/mescroll-uni/mescroll-body.vue';
	import MescrollUni from '@/components/mescroll-uni/mescroll-uni.vue';
	import MescrollMixin from '@/components/mescroll-uni/mescroll-mixins.js';

	export default {
		name: '',
		mixins: [template_page_mixin, MescrollMixin],
		components: {
			MescrollBody
		},
		data() {
			return {
				topTabSelect: 1,
				numindex: 0,
				shoplist: [],
				vodurl: '',
				videoPlay: false,
				tanchuanglistimage: '',
				activeItemStyle: {
					fontSize: `36rpx`
				},
				list: [],
				barStyle: {
					boxShadow: `12rpx 12rpx 16rpx #01BEFF`
				},
				show_fabu: false,
				loading: true,
				skeleton1: {
					avatarSize: '52px',
					row: 3,
					showTitle: true,
				},
				loginBoxFlag: false, // 登录框显示隐藏状态
				cardCur: 0,
				swiperList: [],
				current: 1,
				currenttiezi: 0,
				scrollList: [{
						name: '关注'
					},
					{
						name: '首页',
					},
					{
						name: '热门'
					},
				],
				tagsid: 0,
				latestUserAvatar: [],
				bloggerList: [],
				// 内容默认隐藏显示的高度
				contentHideShowHeight: 0,
				content: [],
				adList: [],
				roomlist: [],
				adAutoplay: false,
				mygrouplist: [],
				bloggerhotList: [],
				tanchuangshow: false,
				msgcount: 0,
				iconnew: [],
				title: ''

			}
		},
		onShow() {

		},
		onShareAppMessage(res) {
			return {
				title: this.item.share_title, //分享的名称
				path: '/circlePages/details?id=' + this.id + '&daren_id=' + uni.getStorageSync('user_id'),
			}
		},
		//分享到朋友圈
		onShareTimeline(res) {
			return {
				title: this.item.share_title, //分享的名称
				path: '/circlePages/blogger_other?id=' + this.id + '&daren_id=' + uni.getStorageSync('user_id'),
			}
		},




		onLoad(option) {
			let that = this

			uni.setNavigationBarTitle({
				title: this.configInfo.shoname
			})


			// #ifdef H5
			if (window.location.href.indexOf('?code=') !== -1 || window.location.href.indexOf('&code=') !== -1) {
				let code;
				if (window.location.href.indexOf('?code=') !== -1) {
					code = window.location.href.split('?code=')[1].split('&')[0];

					uni.navigateTo({
						url: '/pages/login/login?code=' + code
					})
				}

			}
			// #endif

			if (option.daren_id) {
				uni.setStorageSync('daren_id', option.daren_id)
			}
			//手动刷新	uni.startPullDownRefresh();

			uni.onTabBarMidButtonTap(() => {
				uni.navigateTo({
					url: '/circlePages/edit?tab=1',
				});
			})


		},
		onPullDownRefresh() {
			this.info()
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},





		mounted() {
			let that = this;
			that.info('rec')
			that.initContentData()
			that.contentHideShowHeight = uni.upx2px(56) * 3
			that.adAutoplay = true

			uni.$off('setLoginBoxFlag_home');
			uni.$on('setLoginBoxFlag_home', loginBoxFlag => {
				that.loginBoxFlag = loginBoxFlag;
			});
			uni.$on('jianshacount', (shu) => {
				if (shu == 10000) {
					//this.paymp3('/static/shou.mp3', 0)
					this.msgcount++
					this.msggai(this.msgcount)
				} else if (this.msgcount > 0 || shu > 0) {
					this.msgcount = this.msgcount - shu
					this.msggai(this.msgcount)
				}

			});
			// 注册接受消息监听
			uni.$on('index', (message) => {
				uni.$emit('jianshacount', 10000)
			});

			//#ifdef APP-PLUS 
			this.$nextTick(() => {
				that.gengxin()
			})
			//#endif
		},

		methods: {
			onTabItemTap(e) {
				console.log('在首页点击按钮')
				console.log(e)
				if (e.index == 2) {
					uni.navigateTo({
						url: '/circlePages/edit?tab=1'
					})
				}

			},

			screenChange(e) {
				let _this = this;
				let fullScreen = e.detail.fullScreen;
				if (!fullScreen) {
					_this.videoContext.pause();
					_this.videoPlay = false;
				}
			},
			videoShow(vod) {
				let _this = this;
				_this.vodurl = vod;
				_this.videoPlay = true;
				_this.videoContext = uni.createVideoContext("myvideo", _this);
				_this.videoContext.requestFullScreen();
				_this.videoContext.play();
			},



			async info() {
				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/index/index',
					data: {
						type: 1
					}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						that.swiperList = result.data.data.swiperList;
						that.roomlist = result.data.data.roomlist;
						that.tanchuanglist = result.data.data.tanchuanglist[0];

						that.list = result.data.data.tagslist;
						let moreIcon = {
							'create_time': 1685611505,
							'id': 48,
							'image': "../static/newUI/more_game.png",
							'sort': 7,
							'status': 1,
							'title': "更多",
							'url': "../static/newUI/more_game.png"
						}
						that.iconnew = result.data.data.iconnew.slice(0, 7);
						// that.iconnew =that.iconnew.push(moreIcon)
						if (result.data.data.tanchuanglist.length > 0) {
							that.tanchuangshow = true
							that.tanchuanglistimage = that.tanchuanglist.image
						}

						that.loading = false
						this.msgcoutget()
						if (result.data.data.is_openweb == 0) {
							uni.showModal({
								title: '提示',
								content: result.data.data.is_openwebtishi,
								showCancel: false,
								success: (res) => {
									if (res.confirm) {

										// #ifdef APP-PLUS
										uni.getSystemInfo({
											success: function(res) {
												// 判断为安卓的手机       
												if (res.platform == 'android') {
													// 安卓退出app     
													plus.runtime.quit();
												} else {
													// 判断为ios的手机，退出App   
													plus.ios.import("UIApplication")
														.sharedApplication().performSelector(
															"exit");
												}
											}
										});
										// #endif
										// #ifdef MP||H5
										uni.reLaunch({
											url: '/pages/index/index'
										})
										// #endif
									}
								}
							})

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
			async msgcoutget() {
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/index/getmsgcount',
					data: {}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						this.msgcount = result.data.msg
						this.msggai(this.msgcount)
					}
				}
			},
			async myinfo() {
				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/user/flowGroup',
					data: {
						num: 6
					}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						that.mygrouplist = result.data.data.data;
						that.loading = false
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
				if (this.current == 0) {
					this.myinfo()
				}
				mescroll.endSuccess();
				mescroll.resetUpScroll();
			},
			async upCallback(mescroll) {
				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/games/user_list',
					data: {
						searchKey: '',
						xiaolei: '',
						tesetitle: '',
						sextitle: '',
						paixutitle: '',
						latitude: '',
						longitude: '',
						tagsindex: that.tagsid,
						page: mescroll.num
					}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {

						if (mescroll.num == 1) {
							that.content = result.data.data.data;
						} else {
							that.content = that.content.concat(result.data.data.data);
						}
						mescroll.endSuccess(result.data.data.data.length, result.data.data.data.length >= mescroll
							.size);

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




			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
				for (let i = 0; i < this.swiperList.length; i++) {
					const videoContext = uni.createVideoContext(`video-${this.swiperList[i]['id']}`, this)
					if (i === this.cardCur) {
						// #ifdef H5
						videoContext.play()
						// #endif
						// #ifndef H5
						videoContext.play()
						// #endif

					} else {
						// #ifdef MP
						videoContext.stop()
						// #endif
						// #ifndef MP
						videoContext.pause()
						// #endif
					}
				}
			},
			// 暂停所有视频
			stopAllVideo() {
				this.current = 0
			},
			// tab选项卡切换
			tabChange(index) {

				this.content = []
				if (index == 0) {
					if (!uni.getStorageSync('token')) {
						this.loginBoxFlag = true
						return false;
					}
					this.myinfo()
				}

				this.current = index
				this.mescroll.resetUpScroll()


			},
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},

			// 震动跳转
			navCreate(e) {
				wx.vibrateLong();
				uni.navigateTo({
					url: '/circlePages/create'
				})
			},
			// 震动跳转
			navBuild(e) {
				wx.vibrateLong();
				uni.navigateTo({
					url: '/circlePages/build'
				})
			},
			// 处理内容，给内容添加对应的标识信息
			initContentData() {
				this.content.forEach((item, index) => {
					// 是否需要隐藏内容
					item.hideContent = false
					// 显示所有内容
					item.showAllContent = false
					// 内容容器的实际高度
					item.contentContainerHeight = 0
					// 内容容器是否初始化完成
					item.contentContainerInit = false
					this.$set(this.content, index, item)
				})
			},
			// 获取内容容器的信息
			getContentRectInfo() {
				let contentRect = {}
				const query = uni.createSelectorQuery().in(this)
				// 筛选出存在内容的数据
				this.content.forEach((item, index) => {
					if (item?.content) {
						query.select(`#blogger__content--${index}`).boundingClientRect()
						contentRect[index] = item
					}
				})
				// 获取所有内容的宽高信息
				query.exec(res => {
					if (!res) {
						setTimeout(() => {
							this.getContentRectInfo()
						}, 10)
						return
					}
					// console.log(res);
					res.map((item) => {
						// console.log(item.height, this.contentHideShowHeight);
						// 获取对应的标号
						const id = item.id
						const idIndex = /blogger__content--(\d)/.exec(id)[1]
						let contentItem = this.content[idIndex]
						contentItem.hideContent = item.height > this.contentHideShowHeight
						contentItem.showAllContent = false
						contentItem.contentContainerHeight = item.height
						contentItem.contentContainerInit = true
						this.$set(this.content, idIndex, contentItem)

						// console.log(/blogger__content--(\d)/.exec(id)[1]);
					})
				})
			},
			// 切换内容的显示与隐藏
			switchContentShowStatus(index) {
				const contentItem = this.content[index]
				contentItem.showAllContent = !contentItem.showAllContent
				this.$set(this.content, index, contentItem)
			},
			// 关闭压屏窗
			closeLandscape() {
				this.tanchuangshow = false
				this.show_fabu = false
			},
			hpicto(index) {
				if (this.swiperList[index].url && this.swiperList[index].leixing == 0) {
					this.tn('/circlePages/details?id=' + this.swiperList[index].url + '')
				}
				if (this.swiperList[index].url && this.swiperList[index].leixing == 1) {
					this.tn('/circlePages/group?id=' + this.swiperList[index].url + '')
				}
				if (this.swiperList[index].url && this.swiperList[index].leixing == 2) {
					this.navigateToFn({
						url: '/minePages/chat/room_text?id=' + this.swiperList[index].url,
						checkLogin: true
					})
				}
				if (this.swiperList[index].url && this.swiperList[index].leixing == 4) {
					this.tn('/shopPages/product?id=' + this.swiperList[index].url + '')
				}
				if (this.swiperList[index].url && this.swiperList[index].leixing == 5) {
					this.tn('/circlePages/team/show?id=' + this.swiperList[index].url + '')
				}

			},
			tanchuang() {
				if (this.tanchuanglist.url && this.tanchuanglist.leixing == 0) {
					this.tn('/circlePages/details?id=' + this.tanchuanglist.url + '')
				}
				if (this.tanchuanglist.url && this.tanchuanglist.leixing == 1) {
					this.tn('/circlePages/group?id=' + this.tanchuanglist.url + '')
				}
				if (this.tanchuanglist.url && this.tanchuanglist.leixing == 2) {
					this.navigateToFn({
						url: '/minePages/chat/room_text?id=' + this.tanchuanglist.url,
						checkLogin: true
					})
				}
				if (this.tanchuanglist.url && this.tanchuanglist.leixing == 4) {
					this.tn('/shopPages/product?id=' + this.tanchuanglist.url + '')
				}
				if (this.tanchuanglist.url && this.tanchuanglist.leixing == 5) {
					this.tn('/circlePages/team/show?id=' + this.tanchuanglist.url + '')
				}



			},
			refreshFn() {

			},
			jinruroom(id) {
				// #ifdef APP-PLUS
				this.navigateToFn({
					url: '/minePages/chat/room_text?id=' + id,
					checkLogin: true
				})
				// #endif
				// #ifndef APP-PLUS		

				this.navigateToFn({
					url: '/minePages/chat/room_text?id=' + id,
					checkLogin: true
				})
				// #endif				
			},

			geturl(item) {
				if (item.appId) {
					// #ifdef MP
					uni.navigateToMiniProgram({
						appId: item.appId,
						path: item.page_url,
						success(res) {
							// 打开成功
						}
					})
					// #endif
					// #ifndef MP
					this.msg('小程序内使用')
					// #endif


				} else {
					this.navigateToFn({
						url: item.page_url,
						checkLogin: true
					})
				}
			},




			tabsChange(index) {
				this.currenttiezi = index
				this.tagsid = this.list[index].id
				this.mescroll.resetUpScroll()
			},

			msggai(shuzi) {
				if (shuzi <= 0) {
					uni.removeTabBarBadge({
						index: 2
					}); //移除条数	
				} else {
					uni.setTabBarBadge({
						index: 3,
						text: `${shuzi}`
					});
				}

			},
			gengxin() {
				// 获取本地应用资源版本号
				plus.runtime.getProperty(plus.runtime.appid, (inf) => {
					uni.request({
						url: host + '/api/index/app_up', //示例接口
						data: {
							edition_type: plus.runtime.appid,
							version_type: uni.getSystemInfoSync().platform,
							edition_number: inf.versionCode
						},
						success: (res) => {
							//	console.log(res.data.data)
							//	console.log(inf.versionCode)

							if (Number(res.data.data.edition_number) > Number(inf.versionCode) && res
								.data.data.edition_issue == 1) {
								if (res.data.data.package_type == 1 && res.data.data.edition_silence ==
									1) {

									silenceUpdate(res.data.data.edition_url)

								} else {
									//跳转更新页面 （注意！！！如果pages.json第一页的代码里有一打开就跳转其他页面的操作，下面这行代码最好写在setTimeout里面设置延时3到5秒再执行）
									uni.navigateTo({
										url: '/uni_modules/rt-uni-update/components/rt-uni-update/rt-uni-update?obj=' +
											JSON.stringify(res.data.data)
									});
								}
							} else {

							}
						}


					})

				});
			},
			tiaozhuan() {

				uni.navigateToMiniProgram({
					appId: 'wxd2ade0f25a874ee2', // 此为生活缴费appid
					path: 'main/pages/nativeindex/nativeindex', // 此为生活缴费首页路径
					envVersion: "release",
					success: res => {
						console.log("打开成功", res)
					}

				})
			}








		}
	}
</script>

<style lang="scss" scoped>
	.warm-text1{
		margin-left: 22.67rpx;
		height: 32rpx;
		font-size: 23rpx;
		// font-family: PingFang SC-Bold, PingFang SC;
		font-weight: bold;
		color: #493C45;
		line-height: 29rpx;
	}
	.warm-text2{
		width: 23rpx;
		height: 54rpx;
		font-size: 39rpx;
		// font-family: PingFang SC-Bold, PingFang SC;
		font-weight: bold;
		color: #FC357C;
		line-height: 49rpx;
			margin-left: 4rpx;
	}
	.warm-text3{
		width: 22rpx;
		height: 31rpx;
		font-size: 22rpx;
		// font-family: PingFang SC-Bold, PingFang SC;
		font-weight: bold;
		color: #FC357C;
		line-height: 37rpx;
			margin-left: 2rpx;
	}
	
	.warm-box{
		display: flex;
		padding: 0 20rpx;
		margin-bottom: -20rpx;
		align-items: center;
	}
	.warm-img{
		width: 105.33rpx;
		height: 42rpx;
	}
	.tab_first {
		width: 72.81rpx;
		height: 34.92rpx;
		margin-left: 24rpx;
	}

	.list-tab-box {
		display: flex;
		margin-bottom: 26rpx;
	}

	.list-tab-right {
		width: 653rpx;
		overflow: hidden;
		overflow-x: auto;
		white-space: nowrap;
		text-align: center;
	}

	.list-tab {
		display: inline-block;
		padding: 6rpx 14rpx;
		font-size: 20rpx;
		// font-family: PingFang SC-Bold, PingFang SC;
		font-weight: bold;
		color: #202542;
		background-color: #ECDEFC;
		border-radius: 7.33rpx;
		// height: 28rpx;
		// line-height: 20rpx;
		margin-left: 20rpx;
	}

	.jingang-text {
		width: 88rpx;
		height: 31rpx;
		font-size: 22rpx;
		// font-family: PingFang SC-Bold, PingFang SC;
		font-weight: bold;
		color: #FFFFFF;
		line-height: 31rpx;
	}

	.indexbg {
		background-image: url('../static/newUI/bg.png');
		background-size: contain;
		background-repeat: no-repeat; 
	}

	.top-tab-view-normal {
		font-size: 32rpx;
		// font-family: PingFang SC-Bold, PingFang SC;
		font-weight: bold;
		color: #FFFFFF;
		margin-right: 32rpx;
		opacity: 0.7;
	}

	.top-tab-view-select {
		font-size: 60rpx;
		// font-family: PingFang SC-Bold, PingFang SC;
		font-weight: bold;
		color: #FFFFFF;
		margin-right: 32rpx;
	}

	.index-top {
		display: flex;
		background-color: transparent;
		height: 100rpx;
		align-items: center;
		margin-left: 22rpx;
		justify-content: space-between;
		margin-bottom: 20rpx;
	}

	.flex-base {
		display: flex;
	}

	.search-box {
		position: relative;
		width: 176rpx;
		height: 65rpx;
	}

	.search-bg {
		position: absolute;
		width: 174.21rpx;
		height: 64.64rpx;
		opacity: 0.3
	}

	.search-icon {
		position: absolute;
		width: 25.6rpx;
		height: 25.67rpx;
		top: 22rpx;
		left: 24rpx;
	}

	.search-tip {
		position: absolute;
		height: 32rpx;
		font-size: 23rpx;
		// font-family: PingFang SC-Bold, PingFang SC;
		font-weight: bold;
		color: #FFFFFF;
		line-height: 24rpx;
		top: 22rpx;
		left: 70rpx;
	}

	.gift-box {
		width: 53.92rpx;
		height: 52.54rpx;
		margin: 0 30rpx;
	}

	.gift {
		width: 53.92rpx;
		height: 52.54rpx;
	}

	.index-top-left {
		align-items: center;
	}

	.index-top-right {
		align-items: center;
		height: 66rpx;
	}

	.bulletin_box {

		padding: 0 20rpx;
		width: 710rpx;

	}

	.bull_box {
		position: relative;
		width: 710rpx;
		height: 54rpx;
	}

	.bulletin-bg {
		position: absolute;
		top: 0;
		left: 0rpx;
		width: 710rpx;
		height: 66rpx;
		opacity: 0.3;
	}

	.bulletin-tip {
		position: absolute;
		top: 12rpx;
		left: 28rpx;
		width: 770rpx;
		height: 40rpx;
		font-size: 29rpx;
		// font-family: PingFang SC-Bold, PingFang SC;
		font-weight: bold;
		color: #EEFF00;
		line-height: 40rpx;
	}

	.bulletin-tip-text {
		margin-left: 24rpx;
		width: 541rpx;
		height: 30rpx;
		font-size: 21rpx;
		// font-family: PingFang SC-Bold, PingFang SC;
		font-weight: bold;
		color: #FFFFFF;
		line-height: 30rpx;
	}

	.tn-text-color {
		width: 68rpx;
		height: 31rpx;
		font-size: 22rpx;
		// font-family: PingFang SC-Bold, PingFang SC;
		font-weight: bold;
		color: #FFFFFF;
		line-height: 41rpx;
	}


	.template-circle {
		max-height: 100vh;
	}

	.tn-tabbar-height {
		min-height: 120rpx;
		height: calc(140rpx + env(safe-area-inset-bottom) / 2);
	}

	/* 自定义导航栏内容 start */
	.custom-nav {
		height: 100%;
		//	background-image: repeating-linear-gradient(-45deg, #fbf7ac69, #fff20014);
		color: #080808;


		&__back {
			margin: auto 5rpx;
			font-size: 40rpx;
			margin-right: 10rpx;
			margin-left: 30rpx;
			flex-basis: 5%;
		}

		&__search {
			flex-basis: 60%;
			width: 100%;
			height: 100%;

			&__box {
				width: 100%;
				height: 70%;
				padding: 10rpx 0;
				margin: 0 30rpx;
				border-radius: 60rpx 60rpx 0 60rpx;
				font-size: 24rpx;
			}

			&__icon {
				padding-right: 10rpx;
				margin-left: 20rpx;
				font-size: 30rpx;
			}

			&__text {
				color: #AAAAAA;
			}
		}
	}

	.logo-image {
		width: 60rpx;
		height: 60rpx;
		position: relative;
		margin-top: -15rpx;
	}

	.logo-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 50%;
	}

	/* 自定义导航栏内容 end */
	/* 博主头像 start*/
	.image-circle {
		// padding: 95rpx;
		width: 190rpx;
		height: 190rpx;
		font-size: 40rpx;
		font-weight: 300;
		position: relative;
	}

	.image-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 10rpx;
	}


	/* 文章内容 start*/
	.blogger {
		&__item {
			padding: 30rpx;
		}

		&__author {
			&__btn {
				margin-right: -12rpx;
				opacity: 0.5;
			}
		}

		&__desc {
			line-height: 55rpx;

			&__label {
				padding: 0 20rpx;
				margin: 0rpx 18rpx 0 0;

				&--prefix {
					color: #00FFC8;
					padding-right: 10rpx;
				}
			}

			&__content {}
		}

		&__content {
			margin-top: 18rpx;
			padding-right: 18rpx;

			&__data {
				line-height: 46rpx;
				text-align: justify;
				overflow: hidden;
				transition: all 0.25s ease-in-out;

			}

			&__status {
				margin-top: 10rpx;
				font-size: 26rpx;
				color: #82B2FF;
			}
		}

		&__main-image {
			border-radius: 16rpx;

			&--1 {
				max-width: 80%;
				max-height: 300rpx;
			}

			&--2 {
				max-width: 260rpx;
				max-height: 260rpx;
			}

			&--3 {
				height: 212rpx;
				width: 100%;
			}
		}

		&__count-icon {
			font-size: 40rpx;
			padding-right: 5rpx;
		}

		&__ad {
			width: 100%;
			height: 500rpx;
			transform: translate3d(0px, 0px, 0px) !important;

			::v-deep .uni-swiper-slide-frame {
				transform: translate3d(0px, 0px, 0px) !important;
			}

			.uni-swiper-slide-frame {
				transform: translate3d(0px, 0px, 0px) !important;
			}

			&__item {
				position: absolute;
				width: 100%;
				height: 100%;
				transform-origin: left center;
				transform: translate3d(100%, 0px, 0px) scale(1) !important;
				transition: transform 0.25s ease-in-out;
				z-index: 1;

				&--0 {
					transform: translate3d(0%, 0px, 0px) scale(1) !important;
					z-index: 4;
				}

				&--1 {
					transform: translate3d(13%, 0px, 0px) scale(0.9) !important;
					z-index: 3;
				}

				&--2 {
					transform: translate3d(26%, 0px, 0px) scale(0.8) !important;
					z-index: 2;
				}
			}

			&__content {
				border-radius: 40rpx;
				width: 640rpx;
				height: 500rpx;
				overflow: hidden;
			}

			&__image {
				width: 100%;
				height: 100%;
			}
		}
	}

	/* 文章内容 end*/

	/* 间隔线 start*/
	.tn-strip-bottom {
		width: 100%;
		border-bottom: 20rpx solid rgba(241, 241, 241, 0.8);
	}

	/* 间隔线 end*/

	/* 广告内容 start */
	.ad-image {
		width: 80rpx;
		height: 80rpx;
		position: relative;
	}

	.ad-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 20%;
	}

	/* 自定义导航栏内容 end */


	/* 全屏轮播  start*/

	/* 轮播视觉差 start */
	.card-swiper {
		height: 200rpx !important;
	}

	.card-swiper swiper-item {

		width: 750rpx !important;
		left: 0rpx;
		box-sizing: border-box;
		// padding: 0rpx 30rpx 90rpx 30rpx;
		overflow: initial;
	}

	.card-swiper swiper-item .swiper-item {
		width: 100%;
		display: block;
		height: 100%;
		transform: scale(1);
		transition: all 0.2s ease-in 0s;
		overflow: hidden;
	}

	.card-swiper swiper-item.cur .swiper-item {
		transform: none;
		transition: all 0.2s ease-in 0s;
	}

	.card-swiper swiper-item .swiper-item-text {
		margin-top: -260rpx;
		text-align: center;
		width: 100%;
		display: block;
		height: 50%;
		border-radius: 10rpx;
		transform: translate(100rpx, -60rpx) scale(0.9, 0.9);
		transition: all 0.6s ease 0s;
		overflow: hidden;
	}

	.card-swiper swiper-item.cur .swiper-item-text {
		margin-top: -320rpx;
		width: 100%;
		transform: translate(0rpx, 0rpx) scale(0.9, 0.9);
		transition: all 0.6s ease 0s;
	}

	.image-banner {
		border-radius: 10px !important;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.image-banner image {
		width: 100%;
		height: 100%;
	}

	/* 轮播指示点 start*/
	.indication {
		z-index: 9999;
		width: 100%;
		height: 36rpx;
		position: absolute;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.spot {
		background-color: #FFFFFF;
		opacity: 0.6;
		width: 10rpx;
		height: 10rpx;
		border-radius: 20rpx;
		top: -60rpx;
		margin: 0 8rpx !important;
		position: relative;
	}

	.spot.active {
		opacity: 1;
		width: 30rpx;
		background-color: #FFFFFF;
	}


	/* 资讯主图 start*/
	.image-article {
		border-radius: 8rpx;
		border: 1rpx solid #F8F7F8;
		width: 186rpx;
		height: 202rpx;
		position: relative;
	}

	.image-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 10rpx;
	}

	.article-shadow {
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	/* 文字截取*/
	.clamp-text-1 {
		-webkit-line-clamp: 1;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.clamp-text-2 {
		-webkit-line-clamp: 2;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	/* 标签内容 start*/
	.tn-tag-content {
		&__item {
			display: inline-block;
			line-height: 35rpx;
			padding: 5rpx 25rpx;

			&--prefix {
				padding-right: 10rpx;
			}
		}
	}



	/* 悬浮 */
	.tnxuanfu {
		animation: suspension 3s ease-in-out infinite;
	}

	@keyframes suspension {

		0%,
		100% {
			transform: translateY(0);
		}

		50% {
			transform: translateY(-0.8rem);
		}
	}

	/* 悬浮按钮 */
	.button-shop {
		width: 90rpx;
		height: 90rpx;
		display: flex;
		flex-direction: row;
		position: fixed;
		/* bottom:200rpx;
      right: 20rpx; */
		left: 5rpx;
		top: 5rpx;
		z-index: 1001;
		border-radius: 100px;
		opacity: 0.9;
	}


	/* 按钮 */
	.edit {
		bottom: 300rpx;
		right: 75rpx;
		position: fixed;
		z-index: 9999;
	}


	.pa,
	.pa0 {
		position: absolute
	}

	.pa0 {
		left: 0;
		top: 0
	}


	.bg0 {
		width: 100rpx;
		height: 100rpx;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.bg1 {
		width: 100%;
		height: 100%;
	}




	.hx-box {
		top: 50%;
		left: 50%;
		width: 100rpx;
		height: 100rpx;
		transform-style: preserve-3d;
		transform: translate(-50%, -50%) rotateY(75deg) rotateZ(10deg);
	}

	.hx-box .pr {
		width: 100rpx;
		height: 100rpx;
		transform-style: preserve-3d;
		animation: hxz 20s linear infinite;
	}

	@keyframes hxz {
		0% {
			transform: rotateX(0deg);
		}

		100% {
			transform: rotateX(-360deg);
		}
	}



	.hx-box .pr .pa0 {
		width: 100rpx;
		height: 100rpx;
		/* border: 4px solid #5ec0ff; */
		border-radius: 1000px;
	}

	.hx-box .pr .pa0 .span {
		display: block;
		width: 100%;
		height: 100%;
		background: url(https://tnuiimage.tnkjapp.com/cool_bg_image/arc4.png) no-repeat center center;
		background-size: 100% 100%;
		animation: hx 4s linear infinite;
	}

	@keyframes hx {
		to {
			transform: rotate(360deg);
		}
	}

	.hx-k1 {
		transform: rotateX(-60deg) rotateZ(-60deg)
	}

	.hx-k2 {
		transform: rotateX(-30deg) rotateZ(-30deg)
	}

	.hx-k3 {
		transform: rotateX(0deg) rotateZ(0deg)
	}

	.hx-k4 {
		transform: rotateX(30deg) rotateZ(30deg)
	}

	.hx-k5 {
		transform: rotateX(60deg) rotateZ(60deg)
	}

	.hx-k6 {
		transform: rotateX(90deg) rotateZ(90deg)
	}

	.drag-button {
		background: #FFFFFF;
		border: 0.5px solid #EEEEEE;
		box-shadow: 0 5rpx 10rpx 0 rgba(0, 0, 0, 0.08);
		width: 100rpx;
		height: 100rpx;
		font-size: 24rpx;
		color: #000000;
		position: absolute;
		right: 40rpx;
		bottom: 188rpx;
		border-radius: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.image-music {
		padding: 100rpx 0rpx;
		font-size: 16rpx;
		font-weight: 300;
		position: relative;
	}

	.image-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 20rpx 20rpx 0 0;
	}

	/* 文章内容 end*/



	/* 信息展示 start */
	.tn-info {

		&__container {
			margin-top: 40rpx;
		}

		&__item {
			width: 32%;
			margin: 15rpx 0rpx;
			padding: 38rpx 20rpx;
			border-radius: 10rpx;

			&__left {

				&--icon {
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
					font-size: 40rpx;
					margin-right: 20rpx;
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
						background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg3.png);
					}
				}

				&__content {
					font-size: 28rpx;

					&--data {
						margin-top: 5rpx;
						font-weight: bold;
					}
				}
			}

			&__right {
				&--icon {
					font-size: 30rpx;
					opacity: 0.5;
				}
			}
		}
	}

	.job-shadow {
		box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.07);
		border-radius: 20rpx;
	}

	/* 信息展示 end */


	//一排3个横的

	.dk-fangkuang {
		position: relative;
		background-blend-mode: multiply;
		background-repeat: no-repeat;
		//background-image: url(https://uptx-cdn2.q0n5k964.com/upload/images/base_web_per/lol_257154660915053_pc_rec_01.png);
	}



	.dk-ban {
		border: 0.0625rem solid rgba(255, 255, 255, 0.1);
		border-radius: 0.3125rem;
		background: rgb(29, 33, 43);
		color: rgba(255, 255, 255, 0.8);
	}

	.dk-bantext {
		color: rgba(255, 255, 255, 0.6);
		background: rgba(216, 216, 216, 0.08);
		border-right: 0.0625rem solid rgba(255, 255, 255, 0.1);
		min-width: 7.3rem;
		height: 2rem;
		line-height: 2rem;
		text-align: center;
		cursor: pointer;
		padding: 0px 10px;
	}

	.tn-icon-voice {
		animation: msClock 1.2s linear infinite;
	}

	@keyframes msClock {

		0%,
		90%,
		100% {
			transform: rotate(0) scale(1);
		}

		20%,
		40% {
			transform: rotate(-15deg) scale(1.2);
		}

		30%,
		50% {
			transform: rotate(15deg) scale(1.3);
		}
	}


	/* 组件导航列表 start*/
	.nav-list {
		display: flex;
		justify-content: space-between;
		padding: 0 24rpx;
		margin-bottom: 26rpx;

		.image-bg {
			background-image: url('../static/newUI/nac_list_1.png');
			width: 240.87rpx;
			height: 109.29rpx;
		}

		.image-bg1 {
			background-image: url('../static/newUI/nac_list_2.png');
			width: 238.3rpx;
			height: 109.81rpx;
			margin-left: -10rpx;
		}

		.image-bg2 {
			background-image: url('../static/newUI/nac_list_3.png');
			width: 240.87rpx;
			height: 109.29rpx;
			margin-left: -10rpx;
		}

		/* 列表元素 start */
		.nav-list-item {


			background-size: cover;
			background-position: center;
			position: relative;
			z-index: 99;



			/* 元素标题 start */
			.nav-link {
				text-transform: capitalize;
				padding: 0 0 10rpx 0;
				position: relative;

				.title {
					font-weight: bold;
					color: #FFFFFF;
					margin-top: 30rpx;
					text-align: center;
				}

				.author {
					color: #FFFFFF;
					margin-top: 50rpx;
					margin-left: -10rpx;
					text-align: center;
				}
			}

			/* 元素标题 end */

			/* 元素图标 start */
			.icon {
				font-variant: small-caps;
				position: absolute;
				top: 20rpx;
				right: 50rpx;
				left: 37%;
				width: 90rpx;
				height: 90rpx;
				line-height: 90rpx;
				margin: 0;
				padding: 0;
				display: inline-flex;
				text-align: center;
				justify-content: center;
				vertical-align: middle;
				font-size: 50rpx;
				color: #FFFFFF;
				white-space: nowrap;
				opacity: 0.9;

				background-size: cover;
				background-position: 50%;
				border-radius: 5000rpx;
			}

			/* 元素图标 end */
		}

		/* 列表元素 end */
	}

	/* 组件导航列表 end*/
	/* 热门图片 start*/
	.image-tuniao1 {
		padding: 164rpx 0rpx;
		font-size: 40rpx;
		font-weight: 300;
		position: relative;
	}

	.image-tuniao2 {
		padding: 75rpx 0rpx;
		font-size: 40rpx;
		font-weight: 300;
		position: relative;
	}

	.image-tuniao3 {
		padding: 90rpx 0rpx;
		font-size: 40rpx;
		font-weight: 300;
		position: relative;
	}

	.image-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 10rpx;
	}

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

				}
			}
		}
	}

	/* 图标容器7 start */
	.icon7 {
		&__item {
			width: 30%;
			background-color: #FFFFFF;
			border-radius: 10rpx;
			padding: 10rpx;
			margin: 20rpx 10rpx;
			transform: scale(1);
			transition: transform 0.3s linear;
			transform-origin: center center;

			&--icon {
				width: 120rpx;
				height: 120rpx;
				font-size: 50rpx;
				border-radius: 0;
				margin-bottom: -10rpx;
				position: relative;
				z-index: 1;
			}
		}
	}

	.wuge {
		width: 20%;
	}

	.sige {
		width: 25%;
	}
</style>