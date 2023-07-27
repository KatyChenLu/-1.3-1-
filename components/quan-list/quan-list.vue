<template>
	<view>
		<!-- #ifdef APP-PLUS -->
		<video v-show="video.visible" :src="video.url" id="videoPlayer"
			@fullscreenchange="onVideoFullScreenChange"></video>
		<!-- #endif -->
		

		<block v-for="(item, tieziliindex) in list" :key="tieziliindex">
		
			<view class="blogger__item tn-border-solid tn-shadow">
			<view class="" style="margin-left: -10px;margin-top: -10px;margin-bottom: 5px;" >
					<tn-button v-if="item.is_ding==1" :plain="true" backgroundColor="tn-bg-red" fontColor="#ff0000" size="sm">
						置顶
					</tn-button>
					
					<tn-button  v-if="item.is_tuijian==1" :plain="true" backgroundColor="#55aa00" fontColor="#55aa00"  size="sm" margin="0 10px">
						推荐
					</tn-button>
					
					<tn-button v-if="item.price_is>0" :plain="true" backgroundColor="#aa00ff" fontColor="#aa00ff"  size="sm"  margin="0 10px">
						付费
					</tn-button>
					
				</view>
			
				<view class="blogger__author tn-flex tn-flex-row-between tn-flex-col-center">
					
					<view class="justify__author__info"
						@click="navigateToFn({ url: '/circlePages/blogger_other?id='+item.user_id, checkLogin: false })">
						<view class="tn-flex tn-flex-row-center">
							
							
							<view class="tn-flex tn-flex-row-center tn-flex-col-center">
								<view class="">
									<tn-avatar :badge="item.is_manage_normal" badgeText="管" :badgePosition="[8,20]"
										badgeBgColor="#00aa00" class="" shape="circle" :src="item.userAvatar" :bg="item.bg" size="lg">

									</tn-avatar>
								</view>
								<view class="tn-padding-right tn-text-ellipsis">
									<view class="tn-padding-right tn-padding-left-sm ">

										<text class=" tn-text-bold" :class="{'tn-color-red': item.vip===1}">{{ item.userName }}</text>

										<text class="tn-icon-sex-female tn-color-purplered" v-if="item.sex==2"></text>
										<text class="tn-icon-sex-male  tn-color-blue" v-if="item.sex==1"></text>
										<text class="tn-icon-sex  tn-color-gray" v-if="item.sex==0"></text>
										<text v-if="item.is_dav==1" class=" tn-icon-success-circle-fill tn-color-blue"
											style="font-size: 16px;">
										</text>
										<text class="dk-lv tn-main-gradient-indigo--light"
											v-if="item.vip==0&&configInfo.is_lv">LV {{item.lv}}</text>
										<text class="dk-vip tn-main-gradient-orangeyellow" v-if="item.vip==1"><text
												class="tn-icon-vip tn-color-black"
												style="font-size: 14px;margin-left: -5px;"></text>VIP{{item.vip_lv}}</text>
									</view>
									<view class="tn-padding-right tn-padding-left-sm tn-padding-top-xs tn-color-gray tn-text-ellipsis" style="font-size: 12px;">

										{{timeChange(item.date)}} <text v-if="item.city">发布于{{item.city}}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view v-if="item.manage ==1||item.ziji == 1"
						class="blogger__author__btn justify-content-item tn-flex-col-center tn-flex-row-center"
						@click="chaozuo(item,tieziliindex,item.ziji)">
						<text class="tn-icon-more-vertical tn-color-gray tn-text-bold tn-text-xxl"></text>
					</view>
				</view>

				

				<view v-if="item.price_is>0" @click="dakai(item)">
					<tn-button width="100%" height="100rpx" margin="10rpx 0">
						付费帖子，您需要支付
						<text class="tn-color-red">{{item.price_is}}</text>
						{{configInfo.site_moneyname}}
					</tn-button>

				</view>
				<block >
					<!-- 内容太多疲劳了-->
					<view v-if="item.content" class="blogger__content dk-top-10 tn-text-content"
						@click="dakai(item)">
						<view class="blogger__content__data tn-text-ellipsis-3">
					<text >{{zhuantihang(item.content)}}</text>	
						</view>
					</view>

					<view v-if="item.price_is==0" class="blogger__content dk-top-10 tn-text-content" @click="dakai(item,tieziliindex)">

						<view @click.stop="bofang(item.voc,tieziliindex)" style="width: 60%;">
							<tn-button backgroundColor="#00FFC6" padding="40rpx 0" width="100%" shadow fontBold
								v-if="item.voc">
								<view class="voice-line-wrap"
									style="--line-height:15px;--line-start-color:royalblue ;--line-end-color:indianred">
									<block v-if="item.isplay">
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
									<block v-else>
										<view class="tn-icon-sound"></view>
									</block>
									<text class="tn-color-black" style="margin-left: 15px;">{{item.vocscend}} ''</text>
								</view>

							</tn-button>
						</view>
							<view @click="dakai(item)">
						
						<!-- #ifdef APP-PLUS -->
						<view class="" style="position: relative" v-if="item.vod_img" >
							<image :src="item.vod_img" mode="aspectFill" style="width: 50%;" @click.stop="playVideo(item.vod)"></image>
							<view class="video-img tn-flex"
								style="position: absolute;border-radius: 2500px;background-color: rgb(13, 13, 13,0.3);top: 40%;left:20%;width: 40px;height: 40px;"
								@click.stop="playVideo(item.vod)">
								<view class="tn-icon-play-fill tn-color-white"
									style="font-size: 30px;margin-left: 6px;margin-top:-3px;"></view>
							</view>

						</view>
						<!-- #endif -->
							<!-- #ifdef MP||H5 -->
							<view style="width: 100%;" class="" v-if="item.vod_img" @tap.stop="" >
						<video  controls id="myvideo" style="width: 100%;"  enable-play-gesture="true" :poster="item.vod_img"  :src="item.vod" @fullscreenchange="screenChange" ></video>
							</view>
						<!-- #endif -->
							</view>

					</view>







					<block v-if="item.mainImage">
						<view v-if="[1,2,4].indexOf(item.mainImage.length) != -1" class="tn-padding-top-xs " @click="dakai(item)">
							<image v-for="(image_item,image_index) in item.mainImage" :key="image_index"
								class="blogger__main-image " :class="{
				   'fufei': item.price_is>0,
                  'blogger__main-image--1 tn-margin-bottom-sm': item.mainImage.length === 1,
                  'blogger__main-image--2 tn-margin-right-sm tn-margin-bottom-sm': item.mainImage.length === 2 || item.mainImage.length === 4
                }" :src="image_item" mode="aspectFill"
								@click.stop="tupian(image_index,item.mainImage,item.price_is,item.id)"></image>
						</view>
						<view v-else class="tn-padding-top-xs" @click="dakai(item)">
							<tn-grid hoverClass="none" :col="3">
								<block v-for="(image_item,image_index) in item.mainImage" :key="image_index">
									<!-- #ifndef MP -->
									<tn-grid-item style="width: 30%;margin: 10rpx;">
										<image class="blogger__main-image blogger__main-image--3" :src="image_item"
											mode="aspectFill" :class="{
				   'fufei': item.price_is>0
				   }" @click.stop="tupian(image_index,item.mainImage,item.price_is,item.id)"></image>
									</tn-grid-item>
									<!-- #endif-->
									<!-- #ifdef MP -->
									<tn-grid-item style="width: 30%;margin: 10rpx;">
										<image class="blogger__main-image blogger__main-image--3" :src="image_item"
											mode="aspectFill" :class="{
				   'fufei': item.price_is>0
				   }" @click.stop="tupian(image_index,item.mainImage,item.price_is,item.id)"></image>
									</tn-grid-item>
									<!-- #endif-->
								</block>
							</tn-grid>

						</view>
						<view class="tn-flex tn-margin-top tn-flex-row-left" v-if="item.label.length>0">
							<view>
								<view v-for="(label_item,label_index) in item.label" :key="label_index"
									class="blogger__desc__labeldd tn-float-left tn-bg-gray--light  tn-round tn-text-sm tn-text-bold"
									style="padding: 6px;"
									@click="navigateToFn({ url: '/circlePages/tags_list?id='+label_item.id, checkLogin: false })">
									<text class="blogger__desc__label--prefix">#</text>
									<text class="tn-text-df">{{ label_item.title }}</text>
								</view>
							</view>
						</view>
					</block>


					<!-- 内容太多疲劳了-->
					<view v-if="item.lat>0" class="blogger__content dk-top-10 tn-text-content ">
						<view @click="selectAddressFn(item)"
							class="tn-tag-content__item tn-margin-right tn-round tn-text-sm tn-text-bold tn-text-ellipsis tn-color-blue">
							<text class="tn-icon-location  tn-round tn-text-df tn-text-bold "
								style="padding: 5px 8px;font-size: 12px;color: #747474;background: #ececec;">{{ item.address}}</text>
						</view>
					</view>
				</block>

				<view class="tn-bg-gray--light" style="border-radius: 10px;padding: 5px 5px;margin-top: 5px;"
					v-if="item.cate_id&&item.paramcate_id==0">
				<view class="justify__author__info"
					@click="navigateToFn({ url: '/circlePages/group?id='+item.cate_id, checkLogin: false })">
				
					<view class="tn-flex tn-flex-col-center">
						<view class="" style="flex-basis: 10%;">
							<image :src="item.groupimg" style="width: 40px;height:40px;border-radius:6px;"></image>
						</view>
						<view class="tn-padding-right tn-text-ellipsis" style="flex-basis: 70%;">
							<view class="tn-padding-right tn-padding-left-sm ">
								<text class="tn-text-bold" style="font-size: 12px;">{{ item.grouptitle}}</text>
							</view>
							<view class="tn-padding-right tn-padding-left-sm tn-padding-top-xs tn-color-gray"
								style="font-size: 12px;">
								{{item.grouptitle_sub}}
							</view>
						</view>
						<view class="tn-flex-basic-xs "  style="flex-basis: 30%;">
							<tn-button shape="round" backgroundColor="rgb(255, 244, 32,0.5)" fontColor="#0808085" >
							<text class="" >去圈子</text>
							</tn-button>							
						</view>
					</view>
				
				</view>
				</view>

				<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-top-xs">
					<view class="justify-content-item tn-color-gray tn-text-center">
						<view class="">
							<text class="blogger__count-icon tn-icon-footprint" style="font-size: 20px;"></text>
							<text class="tn-padding-right">
								{{ $t.number.formatNumberAddPriceUnit(item.collectionCount) }}
							</text>
							<text class="blogger__count-icon tn-icon-message" style="font-size: 20px;"
								@click="dakai(item)"></text>
							<text class="tn-padding-right" @click="dakai(item)">
								{{ $t.number.formatNumberAddPriceUnit(item.commentCount) }}
							</text>
							<text v-if="item.is_like" class="blogger__count-icon  tn-icon-praise-fill tn-color-red "
								@click="dianzantiezi(item,tieziliindex)" style="font-size: 20px;"></text>
							<text v-else class="blogger__count-icon tn-icon-praise "
								@click="dianzantiezi(item,tieziliindex)" style="font-size: 20px;"></text>

							<text class="">
								{{ $t.number.formatNumberAddPriceUnit(item.likeCount) }}</text>
						</view>
					</view>
					<view class="justify-content-item tn-flex tn-flex-col-center">
						<view style="margin-right: 10rpx;margin-left: 20rpx;">
							<tn-avatar-group :lists="item.viewUser.latestUserAvatar" size="sm"></tn-avatar-group>
						</view>
						<text class="tn-color-gray">{{ item.likeCount }}人</text>
					</view>
				</view>
			</view>
			
		</block>
	</view>



</template>

<script>
	const audioContext = uni.createInnerAudioContext()

	export default {
		props: ['list', 'index'],
		created() {
			uni.$on('onlist_change', data => {
				this.ondianzan(data)
			});
		},
		data() {
			return {
				video: {
					visible: false,
					url: '',
					context: null
				},
				noClick: true,
				videoPlay: false,
				isplay: false,
				//	body: this.item.content.replace(/<br>/g, "\n").replace(/<p>/g, "").replace(/<\/p>/g, "\n")
			}
		},
 created() {
 	this.video.context = uni.createVideoContext('videoPlayer')
 },

		methods: {


			async ondianzan(data) {
				console.log(data)
				for (let i in this.list) {
					if (this.list[i].id == data.id) {

						if (data.is_like == true) {
							this.list[i].is_like = true
							this.list[i].likeCount++
							const xinzeng = {
								src: this.$store.state.userInfo.userInfoAvatar
							}
							this.list[i].viewUser.latestUserAvatar.push(xinzeng)
						} else {
							this.list[i].is_like = false;
							this.list[i].likeCount--;
							let listuser = this.list[i].viewUser.latestUserAvatar;
							for (let ddd in listuser) {
								if (listuser[ddd].src == this.$store.state
									.userInfo.userInfoAvatar) {
									listuser.splice(ddd, 1);
								}
							}
						}
					}
				}
			},


			screenChange(e) {
				let _this = this;
				let fullScreen = e.detail.fullScreen;
				if (!fullScreen) {
					//_this.videoContext.pause();
					//_this.videoPlay = false;
				}
			},
			videoShow(vod) {
				uni.navigateTo({
					url: '/homePages/vodplay?vodurl=' + vod
				})
			},
			tupian(i, tulist, price, id) {		
				if (price > 0) {
					uni.navigateTo({
						url: '/circlePages/details?id=' + id
					});
				} else {
					uni.previewImage({
						current: i,
						urls: tulist
					});
				}

			},
			dakai(item) {
				for (let i in this.list) {
				 this.list[i].isplay = false
				}
				audioContext.stop()
				
				if (item.vod){
					uni.navigateTo({
						url: '/homePages/vod/vod?id=' + item.id
					});
				}else{				
				uni.navigateTo({
					url: '/circlePages/details?id=' + item.id
				});
				}
			},

			shipin(vod) {
				this.videoPlay = true
				//this.$emit('bofang', vod)
			},

			chaozuo(item, tieziliindex,ziji) {
				let that = this
				if (!uni.getStorageSync('token')) {
					that.msg('请登陆')
				}
				let list = []
				if (item.ziji == 1 && uni.getStorageSync('token')&&item.manage ==0) {
					list = ['删除帖子', '刷新帖子'];
				}
				if (item.manage == 1) {
					list = ['删除帖子', '推荐贴子', '置顶帖子','刷新帖子'];
				}
				uni.showActionSheet({
					itemList: list,
					success: function(res) {
						if (list[res.tapIndex] == '删除帖子') {
							that.list.splice(tieziliindex, 1);
							that.edieGoods(item.id, 1)
						}
						if (list[res.tapIndex] == '推荐贴子') {
							that.edieGoods(item.id, 2)
						}

						if (list[res.tapIndex] == '置顶帖子') {
							that.edieGoods(item.id, 3)
						}
						if (list[res.tapIndex] == '刷新帖子') {
							that.edieGoods(item.id, 4,ziji)
						}
						

					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});


			},

			async edieGoods(id, type,ziji=0) {
				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/user/edieGoods',
					data: {
						id: id,
						type: type,
						ziji: ziji
					}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						that.msg(result.data.msg)
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



			selectAddressFn(body) {
				if (body.lng) {
					uni.openLocation({
						longitude: Number(body.lng),
						latitude: Number(body.lat),
						name: '发布位置',
						address: body.address
					})
				} else {
					this.msg('未标注地图')
				}
			},



			dianzantiezi(item, index) {
				let that = this;
				if (that.noClick) {
					// 第一次点击
					that.noClick = false;
					console.log('点击', that.noClick)
					that.dianzantiezi_pass(item, index);
					setTimeout(() => {
						that.noClick = true;
					}, 2000)
				} else {
					this.msg('操作太频繁')
					// 这里是重复点击的判断
				}




			},

			tiezi() {
				console.log(333)
			},

			async dianzantiezi_pass(item, index) {
				if (!this.isLogin) {
					this.loginBoxFlag = true
					return false;
				}

				if (this.list[index].is_like == false) {
					this.list[index].is_like = true
					this.list[index].likeCount++
					const xinzeng = {
						src: this.$store.state.userInfo.userInfoAvatar
					}
					this.list[index].viewUser.latestUserAvatar.push(xinzeng)
				} else {
					this.list[index].is_like = false;
					if (this.list[index].likeCount > 0) {
						this.list[index].likeCount--;
					}
					let listuser = this.list[index].viewUser.latestUserAvatar;
					for (let ddd in listuser) {
						if (listuser[ddd].src == this.$store.state.userInfo.userInfoAvatar) {
							listuser.splice(ddd, 1);
						}
					}
				}

				let result = await this.flowgoods(item.id)

			},


			bofang(vocurl, index) {

				if (this.list[index].isplay) {
					audioContext.stop()
					this.list[index].isplay = false
					return
				}


				for (let i in this.list) {
					this.list[i].isplay = false
				}

				this.list[index].isplay = !this.list[index].isplay;

				let that = this
				audioContext.src = vocurl
				audioContext.play()
				audioContext.onPlay(() => {})
				audioContext.onEnded(() => {
					this.list[index].isplay = false
				})
				audioContext.onError(() => {
					this.list[index].isplay = false
					that.msg('不支持播放该音频格式')
				})
			},

			playVideo(url) {
				this.video.visible = true;
				this.video.url = url;
				this.$nextTick(() => {
					this.video.context.requestFullScreen({
						direction: 0
					});
					this.video.context.play();
				});
			},
			onVideoFullScreenChange(e) {
				//当退出全屏播放时，隐藏播放器
				if (this.video.visible && !e.detail.fullScreen) {
					this.video.visible = false;
					this.video.context.stop();
				}
			},

		}
	};
</script>


<style scoped lang="scss">
	.xunzhang {
		width: 20px;
	}

	.blogger__desc__label--prefix {
		color: #00FFC8;
		padding-right: 5px;
	}

	.blogger__desc__label {
		height: 24px;
		padding: 4px 6px;
		margin: 5px 9px 0 0;
	}

	.blogger__item {
		border-radius: 10px;
		margin: 10px;
		padding: 15px;
	}

	.blogger__main-image--2 {
		max-width:45%;
		max-height: 130px;
	}

	.blogger__main-image--3 {
		height: 106px;
		width: 100%;
	}

	.blogger__main-image {
		border-radius: 8px;
	}


	.fufei {
		-webkit-filter: blur(2px);
		/*像素值越大，越模糊*/
		-moz-filter: blur(2px);
		-ms-filter: blur(2px);
		filter: blur(3px);
		filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=2, MakeShadow=false);

	}


	.blogger__main-image--1 {
		max-width: 100%;
		max-height: 150px;
	}
</style>
