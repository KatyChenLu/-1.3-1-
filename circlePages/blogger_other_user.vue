<template>
	<view class="template-mine tn-safe-area-inset-bottom ">

		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class='tn-custom-nav-bar__back'>
				<text class='icon tn-icon-left' @click="goBack"></text>
				<text class='icon tn-icon-home-capsule-fill' @click="gohome"></text>

			</view>
			<!-- #ifdef APP-PLUS||H5 -->
			<view slot="right" class="tn-flex tn-flex-col-right tn-flex-row-right">
				<view class="custom-nav__right" style="margin-right: 10px;">
					<text class=" tn-icon-share-square tn-color-white" @click="appshare()"
						style="font-size: 20px;"></text>
				</view>
			</view>
			<!-- #endif -->



		</tn-nav-bar>

		<mescroll-body ref="mescrollRef" @down="downCallback" @up="upCallback">

			<view class="about__wrap">
				<view class="meng  ">
					<!-- 图标logo/头像 -->
					<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-bottom ">
						<view class="justify-content-item" style="width: 100%;">
							<view class="tn-flex tn-flex-col-center tn-flex-row-left">

								<view class="image-pic tn-margin-sm"
									:style="'background-image:url(' + body.avatar + ')'" @click="datu(body.avatar)">
									<view class="image-article">
									</view>
								</view>


								<view class="" style="width:540rpx">

									<view class="tn-padding-right tn-padding-left-sm tn-text-xl tn-text-bold" 
									@click="navigateToFn({url: '/circlePages/blogger_other?id='+body.id,checkLogin: true})">


										<text class=""
											:class="{'tn-color-red': body.vip===1,'': body.vip===0}">{{body.nickname}}</text>
										<text class="tn-icon-sex-female tn-color-purplered" v-if="body.sex==2"></text>
										<text class="tn-icon-sex-male  tn-color-blue" v-if="body.sex==1"></text>
										<text class="tn-icon-sex  " v-if="body.sex==0"></text>
										<text class="dk-lv tn-main-gradient-indigo--light"
											v-if="body.vip==0&&configInfo.is_lv">LV {{body.lv}}</text>
										<text class="dk-vip tn-main-gradient-orangeyellow" v-if="body.vip==1"><text
												class="tn-icon-vip tn-color-black"
												style="font-size: 14px;margin-left: -5px;"></text>VIP{{body.vip_lv}}</text>

									</view>
									<view class="tn-padding-right tn-padding-top-xs tn-padding-left tn-text-ellipsis">
										<text v-if="body.online==1" class="tn-tag-class tn-tag  tn-cool-bg-color-6 "
											style="padding: 0 5px;font-size: 12px;margin-right:3px;">
											在线</text>
										<text class="" style="font-size:12px">IP属地:{{body.city}}
										</text>

									</view>
									<view
										class="tn-padding-right  tn-padding-left tn-text-sm clamp-text-2 tn-padding-top-sm">
										{{gameshow.dec}}
									</view>

									<view class="tn-tag-content tn-margin-left-sm tn-margin-right-sm tn-padding-top-sm"
										v-if="gameshow.voc">
										<tn-button shape="round" backgroundColor="tn-cool-bg-color-9"
											padding="40rpx 0" width="80%" shadow fontBold @click="bofang(gameshow.voc)">
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
												<block v-else>
													<view
														class="tn-icon-play-fill tn-color-white tn-text-xxl tn-text-left">
													</view>
												</block>
												<text class="tn-color-white "
													style="margin-left: 15px;">{{gameshow.vocsen}}
													''</text>
											</view>

										</tn-button>
									</view>

								</view>
							</view>
						</view>
					</view>

				</view>


				<!-- 帖子列表 -->


				<!-- 更多信息-->

				<view class="about-shadow tn-margin-top-xl tn-padding-top-sm tn-padding-bottom-sm tn-bg-white">
				<view class="tn-padding-left tn-padding-bottom"><text class="tn-color-red"
						style="font-size: 32px;">{{goods.price}}</text><text class="">币/{{goods.danwei}}</text>
				</view>
					<view class="tn-padding-left tn-padding-bottom" style="font-size: 22px;">{{gameshow.game_title}}</view>
					

					<view class="tn-flex tn-flex-row-between ">
						<view class="justify-content-item tn-margin-left-sm tn-margin-right-sm tn-text-bold">
							我的特色
						</view>
					</view>
					<view
						class="tn-tag-content tn-margin-left-sm tn-margin-top tn-margin-right-sm  tn-text-justify tn-padding-bottom">
						<tn-tag :plain="true" shape="radius" backgroundColor="rgb(255 96 88 /0.3)" margin="5rpx">
							<text style="font-size:12px;color:rgb(255 12 0);">{{goods.duanwei}}</text>
						</tn-tag>

						<block v-for="(itemdd, indexd) in gameshow.tags" :key="indexd">
							<tn-tag :plain="true" shape="radius" backgroundColor="rgb(255 96 88 /0.3)" margin="5rpx">
								<text style="font-size:12px;color:rgb(255 12 0);">{{itemdd.title}}</text>
							</tn-tag>
						</block>
					</view>

					<view class="tn-flex tn-flex-row-between ">
						<view class="justify-content-item tn-margin-left-sm tn-margin-right-sm tn-text-bold">
							技能卡片
						</view>
					</view>

					<view class=" tn-margin-sm " @click="datu(gameshow.bg_img)">
						<image :src="gameshow.bg_img" style="height: 200px;width: 100%;" mode="aspectFill"></image>
					</view>

					<view class="tn-flex tn-flex-row-between " v-if="body.tags.length>1">
						<view class="justify-content-item tn-margin-left-sm tn-margin-right-sm tn-text-bold">
							官方标签
						</view>
					</view>
					<view class="tn-tag-content tn-margin-left-sm tn-margin-right-sm  tn-text-justify tn-padding-bottom"
						v-if="body.tags.length>1">


						<view v-for="(item,indexsdsf) in body.tags" :key="indexsdsf"
							class="tn-tag-content__item tn-margin-right tn-round tn-text-sm tn-text-bold tn-bg-green--light tn-color-black">
							{{item}}
						</view>


					</view>




					<view class="tn-flex tn-flex-row-between tn-padding-top-sm">
						<view class="justify-content-item tn-margin-left-sm tn-margin-right-sm tn-text-bold">
							动态
						</view>
					</view>
					<view class="tn-tag-content   tn-padding-top-sm">
						<tn-empty icon="/static/images/no.png" text="空空如也~~~" v-if="content.length==0">
						</tn-empty>
						<quan-list :list="content" :index="true"></quan-list>
					</view>

					</block>


				</view>
			</view>

			<view class='tn-tabbar-height'></view>
		</mescroll-body>
		<login-fn :is-show-login="loginBoxFlag" @loginSuccessCallback="refreshFn" @close="closeGlobalLoginFn">
		</login-fn>



		<view class="input-box" >
			
			<view @click="guanzhu(id)"
				class="blogger__author__btn justify-content-item tn-flex-col-center tn-flex-row-center"
				style="margin-top:15px;">			

				<text v-if="body.is_follow" class="tn-bg-yellow--light  tn-round  tn-text-bold tn-color-black"
					style="padding: 15rpx 28rpx;font-size: 14px;">
					已关注</text>
				<text v-else class="tn-icon-my-add tn-bg-yellow  tn-round  tn-text-bold tn-color-black"
					style="padding: 15rpx 28rpx;font-size: 14px;">
					关注</text>
			</view>
			<view @tap="sendmsg" class="blogger__author__btn justify-content-item tn-flex-col-center tn-flex-row-center"
				style="margin-top:10px;">
			<tn-button :fontSize="28"   backgroundColor="tn-cool-bg-color-9"
				fontColor="#ffffff" shape="round">
				聊一聊
			</tn-button>
				</view>
			<view class="send " @tap="xiadanpass()">
				<view class="btn ">
					<text style="margin-left: 5px;font-size:16px;">下单 </text>
					<text style="margin-left: 5px;font-size:12px;">({{goods.price}}币/{{goods.danwei}}) </text>
				</view>
			</view>
		</view>





		<tn-popup v-model="popshow" width="80%" height="600rpx" mode="bottom" backgroundColor="rgba(64, 64, 64, 0.82)"
			:borderRadius="30" :closeBtn="false" :maskCloseable="true" @close="closedPopup">
			<gift-list :user_id="id"></gift-list>
		</tn-popup>



		<dk-tanchuang v-model="giftianchu" width="80%" height="40%" mode="center" :borderRadius="30"
			:giftitle="giftitle" :gifcontent="gifcontent" :giftimg="giftimg" :maskCloseable="true" @close="closedPopup">
		</dk-tanchuang>




		<tn-popup v-model="liwusvgashow" width="100%" height="100%" mode="center"
			backgroundColor="rgba(255, 255, 255, 0.1)" :borderRadius="30" :closeBtn="false" :maskCloseable="true"
			@close="closedPopup">
			<l-svga ref="svga"></l-svga>
		</tn-popup>




		<uni-popup ref="sharepopup" type="bottom">
			<share-btn :sharedataTemp="sharedata" @jubaolist="jubaoshowchick" @haobaoche="share_qrcode"></share-btn>
		</uni-popup>


		<tn-modal width="80%" v-model="jubaoshow" backgroundColor="#E4E9EC" padding="30rpx 20rpx" :radius="25"
			title="举报" :showCloseBtn="false" :button="button" :maskCloseable="true" :zoom="true" :custom="true">

			<view class="custom-modal-content tn-padding-sm ">
				<view class="tn-text-left tn-color-gray" style="font-size: 14px;">
					为帮助审核人员更快速度处理，请补充违规内容等详细信息
				</view>
				<view class=" tn-border-solid ">
					<textarea maxlength="200" placeholder="请填写举报理由" v-model="jubao_body"
						placeholder-style="color:#7e7e7e" style="width:230px;font-size: 14px;"></textarea>
				</view>
				<view class="tn-text-center tn-padding-top" @click="jubaopass()">

					<tn-button :fontSize="28" padding="20rpx" height="56rpx" backgroundColor="tn-cool-bg-color-7"
						fontColor="tn-color-white">提交投诉</tn-button>
				</view>

			</view>
		</tn-modal>




		<tn-modal width="80%" v-model="show_poster" backgroundColor="#E4E9EC" padding="30rpx 20rpx" :radius="25"
			title="举报" :showCloseBtn="false" :button="button" :maskCloseable="true" :zoom="true" :custom="true">

			<image :src="path" mode="widthFix" @click="previewImg" style="width: 100%;" v-if="path"></image>
			<lPainter :board="posterObj" ref="painter" v-else></lPainter>
			<view class="tn-text-center tn-padding-top">
				<text>点击图片保存到手机</text>

			</view>
		</tn-modal>

		
		<tn-popup v-model="payshow" width="80%" height="1060rpx" mode="bottom" backgroundColor="#ffffff"
			:borderRadius="30" :closeBtn="true" :maskCloseable="true" >	
			<view class=" tn-flex tn-flex-row-center " style="margin-top:20rpx;">
				<view class="tn-padding-xs tn-text-bold ">确认下单</view>
			</view>
				<view class="tn-border-solid tn-shadow tn-margin tn-bg-white tn-padding">
					<view class="tn-flex">
						<view class="image-pic tn-margin-sm">
							<view class="image-article" style="width: 100px;height: 80px;">
								<image :src="goods.game_image" mode="aspectFill" style="width: 80px;height: 80px;">
								</image>
							</view>
						</view>
						<view class="tn-margin-sm tn-padding-top-xs" style="width: 100%;">
							<view class="clamp-text-2" style="height: 40px; font-size:22px;">
								{{ goods.game_title}}
							</view>
							<view class="tn-flex tn-flex-row-between tn-flex-col-between"
								style="margin-top: 10px;">
								<text class="tn-tag-content __item--prefix ">{{ goods.price}}/{{ goods.danwei}}</text>
							</view>
						</view>
					</view>	
					<view
						class="tn-bg-white tn-flex tn-flex-row-between  tn-padding-left-sm tn-padding-right-sm">
						<view class="justify-content-item tn-text-bold">
							<text class="">购买数量</text>
						</view>
					
						<view class="justify-content-item tn-color-gray tn-padding-right-sm ">
							<view class="">
								<tn-number-box v-model="num" :min="1" :longPress="false" @change="change"  backgroundColor="#d9d9d9" fontColor="#000000">	
								</tn-number-box>
							</view>
						</view>
					</view>
					
					<view
						class="tn-bg-white tn-flex tn-flex-row-between  tn-padding-top  tn-padding-left-sm tn-padding-right-sm">
						<view class="justify-content-item ">
							<text class="">合计：</text>
							<text class="tn-color-red" style="font-size:22px ;">{{goods.price*num}}</text>
								<text class="tn-margin-left-sm" >{{configInfo.site_moneyname}}</text>
						</view>
					</view>
					
					<view  class="tn-margin-sm tn-bg-gray--light" style="border-radius: 10rpx;padding: 20rpx 30rpx;">
						<input placeholder="请填写备注" type="text" v-model="beizhu" placeholder-style="color:#AAAAAA"></input>
					</view>
					<view v-if="goods.type==1" class="tn-margin-sm tn-bg-gray--light" style="border-radius: 10rpx;padding: 20rpx 30rpx;">
						<input placeholder="请填写见面地址" type="text" v-model="address" placeholder-style="color:#AAAAAA"></input>
					</view>
					<view v-if="goods.type==1" class="tn-margin-sm tn-bg-gray--light" style="border-radius: 10rpx;padding: 20rpx 30rpx;">
						<input placeholder="请填写预约时间" type="text" v-model="yutime" placeholder-style="color:#AAAAAA"></input>
					</view>
					<view
						class="tn-bg-white tn-flex tn-flex-row-between    tn-padding-left-sm tn-padding-right-sm">
						<view class="justify-content-item ">
							<text class="tn-color-gray">下单后请私聊完成订单</text>
						
						</view>
					</view>
				</view>	
				<view class="tn-padding-left-sm tn-padding-right-sm " @click="jiesuan(goods.id,goods.type)">
					<tn-button :shadow="true" width="100%" height="80rpx" backgroundColor="tn-cool-bg-color-2"
						fontColor="#FFFFFF" margin="10rpx 0">提交订单</tn-button>
				</view>
			</tn-popup>
	
<tn-modal width="80%" v-model="chongzhiis" backgroundColor="#E4E9EC" padding="30rpx 80rpx" :radius="25"
				title="抱歉.余额不足!" :button="button" :showCloseBtn="false" :maskCloseable="false" :zoom="true"
				:custom="false" @click="clickBtn_shenqing">

			</tn-modal>

	</view>
</template>

<script>
	import {
		host
	} from '@/siteinfo.js'
	const audioContext = uni.createInnerAudioContext()
	import lPainter from '@/components/lime-painter/'
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	import MescrollBody from '@/components/mescroll-uni/mescroll-body.vue';
	import MescrollUni from '@/components/mescroll-uni/mescroll-uni.vue';
	import MescrollMixin from '@/components/mescroll-uni/mescroll-mixins.js';
import { render } from "vue";
	export default {
		name: 'TemplateGroup',
		mixins: [template_page_mixin, MescrollMixin],
		components: {
			MescrollBody,
			lPainter
		},
		data() {
			return {
				beizhu:'',
				isplay: false,
				morendongtaishow: 0,
				list: ['个人资料', '我的动态'],
				showchongwu: false,
				//、
				liwusvgashow: false,
				giftimg: '',
				giftianchu: false,
				giftitle: '',
				gifcontent: '',
				//、
				goods: [],
				button: [{
						text: '取消',
						backgroundColor: '#c1c1c1',
						fontColor: '#000000'
					},
					{
						text: '立即充值',
						backgroundColor: '#ffff00',
						fontColor: '#000000'
					}
				],
				chongzhiis: false,
				shouhutype: '3',
				shouhuxiu: false,
				isReady: false,
				popshow: false,
				valuetop: false,
				loginBoxFlag: false, // 登录框显示隐藏状态
				id: 0,
				game_id: 0,
				shouhuimg: '/static/keeper.png',
				body: {
					"nickname": '',
					"lv": 0,
					"dec": 0,
					"city": 0,
					"bg_img": '',
					"keeper": [],
					"giftlog": [],
					"tags": [],
					"giftCount": 0,
					"keeperCount": 0,

				},
				address:'',
				num:1,
				yutime:'',
				payshow:false,
				gameshow: [],
				content: [],
				swiperList: [],
				////////
				jubao_body: '',
				jubaoshow: false,
				show_poster: false, //显示海报
				path: '', //生成的图片地址				
				posterObj: {
					width: '580rpx',
					height: '928rpx',
					background: '#fff',
					borderRadius: '16rpx',
					views: []
				}, //画板数据
				sharedata: [],



			}
		},
		onLoad(option) {
			let that = this
			if (option.daren_id) {
				uni.setStorageSync('daren_id', option.daren_id)
			}
			uni.$off('setLoginBoxFlag');
			uni.$on('setLoginBoxFlag', loginBoxFlag => {
				that.loginBoxFlag = loginBoxFlag;
			});


			uni.$on('liwuok', data => {
				console.log(3333333)
				this.giftimg = data
				this.giftitle = "成功送出礼物"
				this.giftianchu = true
				this.gifcontent = ''
				//this.info()
				this.popshow = false
				setTimeout(() => {
					this.giftianchu = false
				}, 2000);
			});
			uni.$on('liwuoksvga', data => {

				this.gifcontent = ''
				this.popshow = false
				this.liwu(data)
				this.info()
			});


			if (option.id) {
				this.id = Number(option.id)
			}
			if (option.game_id) {
				this.game_id = Number(option.game_id)
			}

			this.info()

		},
		onUnload() {
			audioContext.stop()
		},
		onShareAppMessage(res) {
			if (res.from === 'button') { // 来自页面内分享按钮
				console.log(res.target)
			}
			return {
				title: this.body.nickname + '的个人主页', //分享的名称
				path: '/circlePages/blogger_other_user?id=' + this.id + '&daren_id=' + uni.getStorageSync('user_id'),
				imageUrl: this.body.avatar
			}
		},
		//分享到朋友圈
		onShareTimeline(res) {
			return {
				title: this.body.nickname + '的个人主页',
				path: '/circlePages/blogger_other_user?id=' + this.id + '&daren_id=' + uni.getStorageSync('user_id'),
				imageUrl: this.body.avatar
			}
		},

		methods: {
		xiadanpass(item){	
			if (!this.isLogin) {
				this.loginBoxFlag = true
				return false;
			}
			this.payshow=true
		},
			appshare() {

				let sharedata = {
					type: 1,
					strShareUrl: this.body.share.share_url,
					strShareTitle: this.body.share.share_title,
					strShareSummary: this.body.share.share_sub,
					strShareImageUrl: this.body.share.share_img,
				}

				console.log(1111111111, sharedata)

				this.sharedata = sharedata
				this.$refs.sharepopup.open();

			},
			sharelist() {

				this.posterObj.views = [{
						type: 'image',
						src: this.body.bg_img,
						css: {
							left: '0',
							top: '0',
							width: '100%',
							height: '100%'
						}
					},
					{
						type: 'image',
						src: this.body.avatar,
						css: {
							left: '32rpx',
							top: '32rpx',
							borderRadius: '50%',
							width: '80rpx',
							height: '80rpx'
						}
					},
					{
						type: 'text',
						text: this.body.nickname,
						css: {
							fontSize: '28rpx',
							fontWeight: 'bold',
							color: '#1A2033',
							lineHeight: '28rpx',
							left: '136rpx',
							top: '39rpx'
						}
					},
					{
						type: 'text',
						text: this.body.share.share_title,
						css: {
							fontSize: '24rpx',
							color: '#4070FF',
							lineHeight: '24rpx',
							left: '136rpx',
							top: '80rpx'
						}
					},

					{
						type: 'qrcode',
						text: this.body.share.share_url,
						css: {
							left: '190rpx',
							top: '120rpx',
							width: '200rpx',
							height: '200rpx',
						}
					},
					{
						type: 'text',
						text: '————  长按二维码 快来看看吧  ————',
						css: {
							left: '0',
							top: '340rpx',
							width: '100%',
							textAlign: 'center',
							fontSize: '24rpx',
							color: '#000000',
							lineHeight: '33rpx'
						}
					}
				]
			},

			datu(img) {

				uni.previewImage({
					current: img,
					urls: [img]
				});
			},


			previewImg() {

				uni.previewImage({
					current: this.path,
					urls: [this.path]
				});
			},
			toSave() {
				uni.showLoading({
					title: '海报生成中',
				})
				const painter = this.$refs.painter;
				painter.canvasToTempFilePath().then(res => {
					this.path = res.tempFilePath;
					setTimeout(() => {
						uni.hideLoading()
					}, 1000);

				});
			},
			share_qrcode() {

				this.sharelist()
				this.show_poster = true
				this.$refs.sharepopup.close();
				if (!this.path) {
					setTimeout(() => {
						this.toSave()
					}, 500);
				}

			},

			async jubaopass() {
				let that = this;
				if (!this.isLogin) {
					this.loginBoxFlag = true
					return false;
				}

				if (that.jubao_body == '') {
					this.msg('请输入举报理由')
					return
				}

				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/user/addReport',
					data: {
						goods_id: that.id,
						type: 1,
						content: that.jubao_body
					}
				});

				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						that.jubao_body = ''
						this.msg(result.data.msg)
						this.jubaoshow = false
					}
				}
			},

			jubaoshowchick() {
				if (!this.isLogin) {
					this.loginBoxFlag = true
					this.$refs.sharepopup.close();
					return false;
				}
				console.log(33333333)
				this.jubaoshow = true
				this.$refs.sharepopup.close();
			},

			huadong(e) {
				console.log(e)
				this.morendongtaishow = e.index
			},
			liwu(url) {
				this.liwusvgashow = true
				setTimeout(() => {
					this.bofangsvga(url)
				}, 500);
			},

		async jiesuan(id,type) {
	  	let that = this;		
		if (!this.isLogin) {
			this.loginBoxFlag = true
			return false;
		}
		
		if (type==1&&!this.address){
			this.msg('请填写见面地址')
			return
		}
		if (type==1&&!this.yutime){
			this.msg('请填写预约时间')
			return
		}
		
		
		
		
		uni.showLoading({
			title:'提交中',
			mask:true
		})
		
	  	let result = await that.$request({
	  		loading: 0,
	  		method: 'post',
	  		url: '/api/games/paygoods',
	  		data: {
				id:id,
				yutime:this.yutime,
				remark:that.beizhu,
				num:this.num,
				address:that.address
			}
	  	});
	  
	  
	  	if (result.statusCode == 200) {
	  		if (result.data.code == 200) {	
				uni.hideLoading()
	  				that.payshow=false				
					uni.showModal({
						title: '提示',
						content: '下单成功,去和TA聊聊',
						confirmText: '去聊聊',
						success: function(res) {
							if (res.confirm) {											
								that.sendmsg()
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
					
	  		} else {
				if (result.data.msg == '余额不足') {
					that.chongzhiis = true
						return false;
				}
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
			bofangsvga(url) {

				this.$refs.svga.render(async (parser, player) => {
					const videoItem = await parser.load(url);
					await player.setVideoItem(videoItem);
					// 设置当前动画的循环次数，0代表无限循环 默认 0
					player.loops = 1
					player.clearsAfterStop = true
					// 开始播放动画，reverse = true 时则反向播放。
					player.startAnimation()

					player.onPercentage((percentage) => {
						// 由于有动画未完成时需要显示其他效果的需求，所以监听动画播放进度
						// svga动画播放进度大于 70% 时，显示卡牌
						if (percentage * 100 > 70) {
							//this.svgaShow = false
						}
					})
					// 监听动画完成
					player.onFinished(() => {
						console.log('播放完毕')
						player.clear()
						this.liwusvgashow = false
					})
				})
			},


change(){
			console.log(3333)
			//this.num=e
		},



			toubuxiugai(ted) {
				this.valuetop = ted
				console.log(ted)
			},
			closedPopup() {
				this.popshow = false
			},

			shuhouta() {
				if (this.id == 0) {
					this.msg('自己不能守护自己')
					return
				}
				this.shouhuxiu = true
			},
			rechargeChange(item) {
				this.shouhutype = item
			},


			async ondianzan(data) {
				for (let i in this.content) {
					if (this.content[i].id == data.id) {

						console.log(data.msg)

						if (data.msg == '点赞成功') {
							this.content[i].is_like = true
							this.content[i].likeCount++
							const xinzeng = {
								src: this.$store.state.userInfo.userInfoAvatar
							}
							this.content[i].viewUser.latestUserAvatar.push(xinzeng)
						} else {
							this.content[i].is_like = false;
							this.content[i].likeCount--;
							let listuser = this.content[i].viewUser.latestUserAvatar;
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


			async guanzhu(id) {

				if (!this.isLogin) {
					this.loginBoxFlag = true
					return false;
				}
				let result = await this.flowUser(id)
				this.body.is_follow = result.is_follow
				this.msg(result.msg)


			},



			async good_show() {
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/games/good_show',
					data: {
						game_id: this.game_id
					}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						that.gameshow = result.data.data;
						that.goods = result.data.data.goods;
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


			async info() {
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/index/GetUser',
					data: {
						user_id: this.id
					}
				});


				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						that.body = result.data.data.userinfo;
						that.swiperList = result.data.data.swiperList;
						uni.setNavigationBarTitle({
							title: that.body.nickname
						});
						if (that.body.chongwu) {
							that.showchongwu = true
						}
						
						if (!this.game_id&&that.body.goods_id){
							this.game_id=that.body.goods_id							
						 }
					this.good_show()

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


			async shouhuosend() {
				let that = this;




				if (!uni.getStorageSync('token')) {
					this.loginBoxFlag = true
					this.shouhuxiu = false
					return false;
				}
				this.giftimg = ''


				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/gift/doKeeper',
					data: {
						user_id: this.id,
						type: this.shouhutype
					}
				});

				if (result.statusCode == 200) {
					if (result.data.code == 200) {

						if (result.data.msg == '余额不足') {
							that.chongzhiis = true
						}
						if (result.data.msg == '守护成功') {
							that.shouhuxiu = false
							that.gifcontent = "成功守护TA" + this.shouhutype + "个月"
							that.giftitle = "恭喜你"
							that.giftianchu = true
							this.info()
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
						title: result.data.data
					});
				}
			},

			fuzhi(wx) {
				uni.setClipboardData({
					data: wx,
					complete() {
						uni.showToast({
							title: "已复制到剪贴板"
						})
					}
				})
			},
			refreshFn() {
				this.info()
			},

			sendmsg() {
				if (this.id == 0) {
					this.msg('自己不能撩自己')
					return
				}
				this.navigateToFn({
					url: '/minePages/chat/talk?game_id='+this.game_id+'&toid=' + this.id + '&toname=' + this.body.nickname,
					checkLogin: true
				})

			},



			opengift() {
				if (this.id == 0) {
					this.msg('自己不能送自己')
					return
				}
				this.popshow = true
			},

			/// 列表调用
			downCallback(mescroll) {
				mescroll.endSuccess();
				mescroll.resetUpScroll();
			},

			async upCallback(mescroll) {
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/index/getGoodslist',
					data: {
						to_id: that.id,
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
						mescroll.removeEmpty();
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

			tofans(type) {

				if (this.body.is_see_follow == 1 && type == 'follow') {
					this.msg('博主设置不可见')
					return
				}

				if (this.body.is_see_fans == 1 && type == 'fans') {
					this.msg('博主设置不可见')
					return
				}

				this.navigateToFn({
					url: '/circlePages/fans?type=' + type + '&user_id=' + this.id,
					checkLogin: false
				})


			},

			clickBtn_shenqing(res) {

				if (res == 1) {
					this.chongzhiis = false
					this.navigateToFn({
						url: '/minePages/gift/chongzhi',
						checkLogin: true
					})
				} else {
					this.chongzhiis = false
				}
			},

			bofang(vocurl) {
				if (this.isplay) {
					audioContext.stop()
					this.isplay = false
					return
				}
				this.isplay = !this.isplay;
				let that = this
				audioContext.src = vocurl
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



		}
	}
</script>

<style lang="scss" scoped>
	.meng {}




	.template-mine {
		max-height: 100vh;
	}

	.tn-tabbar-height {
		min-height: 120rpx;
		height: calc(140rpx + env(safe-area-inset-bottom) / 2);
	}

	/* 自定义导航栏内容 start */
	.custom-nav {
		height: 100%;

		&__back {
			margin: auto 5rpx;
			font-size: 40rpx;
			margin-right: 10rpx;
			flex-basis: 5%;
			width: 100rpx;
			position: absolute;
		}
	}

	/* 自定义导航栏内容 end */

	/* 顶部背景图 start */
	.top-backgroup {


		height: 550rpx;
		z-index: -1;

		.backgroud-image {
			width: 100%;
			height: 250rpx;
			// z-index: -1;
		}
	}

	/* 顶部背景图 end */

	/* 标题 start */
	.nav_title {
		-webkit-background-clip: text;
		color: #0E122A;


		&--wrap {
			position: relative;
			display: flex;
			height: 120rpx;
			align-items: center;
			justify-content: center;
			font-weight: bold;

			background-size: cover;
		}
	}

	/* 标题 end */

	/* 用户头像 start */
	.logo-image {
		width: 150rpx;
		height: 150rpx;
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

	/* 页面 start*/
	.about-shadow {
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	.about {

		&__wrap {
			position: relative;
			z-index: 1;
			margin: 20rpx 30rpx;
			margin-top: 130rpx;
		}
	}

	/* 页面 end*/

	/* 图标容器12 start */
	.tn-three {
		position: absolute;
		top: 50%;
		right: 50%;
		bottom: 50%;
		left: 50%;
		transform: translate(-38rpx, -16rpx) rotateX(30deg) rotateY(20deg) rotateZ(-30deg);
		text-shadow: -1rpx 2rpx 0 #f0f0f0, -2rpx 4rpx 0 #f0f0f0, -10rpx 20rpx 30rpx rgba(0, 0, 0, 0.2);
	}

	.icon20 {
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
					background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg.png);
				}
			}
		}
	}

	/* 图标容器12 start */
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
				width: 15rpx;
				height: 15rpx;
				font-size: 50rpx;
				border-radius: 50%;
				margin-bottom: 38rpx;
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

	/* 图标容器1 start */
	.icon1 {
		&__item {
			// width: 30%;
			background-color: #FFFFFF;
			border-radius: 10rpx;
			padding: 30rpx;
			margin: 20rpx 10rpx;
			transform: scale(1);
			transition: transform 0.3s linear;
			transform-origin: center center;

			&--icon {
				width: 40rpx;
				height: 40rpx;
				font-size: 28rpx;
				border-radius: 50%;
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
					background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg.png);
				}
			}
		}
	}

	/* 图标容器1 end */

	/* 大嘴鸟*/
	.dong {
		z-index: 9999;
		position: fixed;
		top: -40px;
		right: -80px;
		transform: scale(0.24);
		-webkit-transform: scale(0.24);
		-moz-transform: scale(0.24);

	}

	.monster {
		transform: rotate(-50deg);
		-ms-transform: rotate(-50deg);
		/* IE 9 */
		-moz-transform: rotate(-50deg);
		/* Firefox */
		-webkit-transform: rotate(-50deg);
		/* Safari 和 Chrome */
		-o-transform: rotate(-50deg);
		/* Opera */
		display: flex;
		justify-content: center;
		position: relative;
		width: 170px;
		height: 400px;
		border-top-left-radius: 200px;
		border-top-right-radius: 200px;
		background-color: #3C47D7;
		box-shadow: 20px 20px 60px #4650E5;
	}

	.monster__face {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: absolute;
		top: 14%;
		width: 75%;
		height: 160px;
	}

	.monster__noses {
		top: 50%;
		display: flex;
		justify-content: space-between;
		width: 28%;
		height: auto;
		margin-bottom: 10px;
	}

	.monster__nose {
		width: 8px;
		height: 12px;
		border-radius: 20px;
		background: rgba(0, 0, 0, 0.5);
		box-shadow: 4px 8px 5px rgba(0, 0, 0, 0.1);
	}

	.monster__mouth {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		width: 100%;
		height: 0%;
		overflow: hidden;
		border: 25px solid #FFC333;
		border-radius: 100px;
		background-color: #810332;
		animation: mouth 1.75s infinite;
		box-shadow: 4px 8px 5px rgba(0, 0, 0, 0.2);
		box-sizing: border-box;
	}

	.monster__mouth::before {
		content: '';
		position: absolute;
		width: 150px;
		height: 80px;
		border-radius: 100px;
		background-color: #400018;
	}

	.monster__mouth::after {
		content: '';
		position: absolute;
		bottom: -80px;
		width: 160px;
		height: 80px;
		border-top-left-radius: 50%;
		border-top-right-radius: 50%;
		background-color: #DC1B50;
		animation: tongue 1.75s infinite;
	}

	.monster__top {
		position: absolute;
		top: -30px;
		width: 170px;
		height: 30px;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		background-color: #ffffff;
		z-index: 100;
		animation: t 1.75s infinite;
	}

	.monster__bottom {
		position: absolute;
		bottom: 0;
		width: 100px;
		height: 30px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		background-color: #ffffff;
		z-index: 100;
		animation: b 1.75s infinite;
	}


	.avatar-eye {
		position: absolute;
		top: -10%;
		width: 65px;
		height: 65px;
		background: linear-gradient(105deg, white, #cb87f4);
		border-radius: 100%;
		box-shadow: 4px 8px 5px rgba(0, 0, 0, 0.2);
		margin: 3px;
		-webkit-transform: translateX(-50%);
		transform: translateX(-50%);
	}


	.avatar-eye--green {
		background: linear-gradient(to bottom, #fdfdfd, #c3efea);
	}

	.avatar-eye--violet {
		background: linear-gradient(to bottom, #fdfdfd, #e6d6f6);
	}


	.eye--left {
		left: 10%;
	}

	.eye--right {
		left: 85%;
	}

	.eye--center {
		left: 45%;
		top: 10%;
	}

	.avatar-eye-pupil {
		position: absolute;
		width: 55%;
		height: 55%;
		left: 50%;
		top: 25%;
		-webkit-transform: translate(-50%);
		transform: translate(-50%);
		z-index: 100;
		border-radius: 100%;
	}


	.pupil--green {
		background: linear-gradient(135deg, rgba(188, 248, 177, 0.7), #2fa38c 75%);
	}

	.pupil--pink {
		background: linear-gradient(135deg, #f1a183, #8535cd);
	}


	.avatar-eye-pupil-blackThing {
		position: absolute;
		width: 55%;
		height: 55%;
		left: 50%;
		top: 25%;
		background: #2c2f32;
		-webkit-transform: translate(-50%);
		transform: translate(-50%);
		border-radius: 100%;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	}

	.avatar-eye-pupil-lightReflection {
		position: absolute;
		width: 7px;
		height: 7px;
		left: 25%;
		top: 10%;
		background: #ebebeb;
		-webkit-transform: translate(-50%);
		transform: translate(-50%);
		border-radius: 100%;
		box-shadow: 10px 10px 10px rgba(255, 255, 255, 0.2);
	}


	.input-box {
		justify-content: space-between;
		width: 100vw;
		min-height: 100upx;
		padding: 0 15px;
		background-color: #ffffff;
		display: flex;
		position: fixed;
		z-index: 120;
		bottom: -2upx;

		.voice {
			width: 50px;
			padding: 10px;
		}

		.send {
			//H5发送按钮左边距
			/* #ifdef H5 */
			margin-left: 20upx;
			/* #endif */
			flex-shrink: 0;
			width: 50%;
			height: 100upx;
			display: flex;
			align-items: center;

			.btn {

				font-weight: bold;
				border-radius: 2500px !important;
				width: 100%;
				height: 86upx;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: #FFF420;
				color: #000000;
				border-radius: 6upx;
			}
		}

		.textbox {
			padding: 0 20px;
			width: 100%;
			min-height: 70upx;
			margin-top: 15upx;

			.voice-mode {
				width: calc(100% - 2upx);
				height: 68upx;
				border-radius: 70upx;
				border: solid 1upx #cdcdcd;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 28upx;
				background-color: #fff;
				color: #555;

				&.recording {
					background-color: #e5e5e5;
				}
			}

			.text-mode {
				width: 100%;
				min-height: 70upx;
				display: flex;
				background-color: #fff;
				border-radius: 40upx;

				.box {
					width: 100%;

					padding-left: 30upx;
					min-height: 70upx;
					display: flex;
					align-items: center;

					textarea {
						width: 100%;
					}
				}

				.em {
					flex-shrink: 0;
					width: 80upx;
					padding-left: 10upx;
					height: 70upx;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}
		}
	}

	.money-area {
		margin-top: 30rpx;
		margin-bottom: 20rpx;

		.item {
			height: 150rpx;
			background: #f5f5f5;
			border-radius: 14rpx;

			.price {
				color: #333;
				margin-bottom: 10rpx;
			}

			text {
				color: #9a9a9a;
			}

			&:nth-child(2) {
				margin-left: 20rpx;
				margin-right: 20rpx;
			}
		}

		.active {
			background: #ffbc49;
			color: #fff;

			.price,
			text {
				color: #fff !important;
			}
		}
	}

	/* 轮播视觉差 start */
	.card-swiper {
		height: 500rpx !important;
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

	.share {
		width: 110rpx;
		height: 110rpx;
		border-radius: 50%;
		position: absolute;
		top: 50%;
		right: 29rpx;

		#shareBtn {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			opacity: 0;
		}
	}

	.bottom_in {
		color: #ffffff;
		border: 0px solid #353535;
		display: initial;
		margin-left: 0px;
		margin-right: 0px;
		padding-left: 0px;
		padding-right: 0px;
		width: 30px;

	}

	/* 资讯主图 start*/
	.image-article {
		border-radius: 8rpx;
		width: 200rpx;
		height: 250rpx;
		position: relative;
	}


	.image-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 10rpx;
	}
</style>