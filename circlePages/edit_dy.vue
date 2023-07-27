<template>
	<view class="template-edit tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
				<text class='icon tn-icon-close'></text>

			</view>
			<!-- 
	  <view slot="right" @click="fabu()" style="margin-right: 10px;">
	  <tn-button backgroundColor="#00FFC6"  width="80px" shadow fontBold>

	  	<text class="tn-color-black">发布</text>
		     <text class="tn-icon-camera tn-padding-left-xs tn-color-black"></text>
	  					
	  </tn-button>
	  </view> -->
		</tn-nav-bar>

		<view class="tn-safe-area-inset-bottom" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<view class="tn-text-center" style="margin-left:30rpx;">
				<tn-tabs :list="scrollList" :itemWidth="150" :activeItemStyle="activeItemStyle" :current="current"
					@change="tabChange" :isScroll="false" activeColor="#000000" :bold="true" :fontSize="30">
				</tn-tabs>
			</view>

			<view v-if="current==1" style="padding-top: 10px;">
				<view class="tn-flex tn-flex-row-between" >
					<view style="padding: 10rpx 5px;margin: 5px 15px; "
						class="tn-border-solid tn-flex-1  justify-content-item  tn-text-left tn-flex tn-flex-wrap">
						<view style="font-size: 16px;">天气</view>
						<view style="width:70%;margin-left: 5px;">
							<input placeholder="33" v-model="ding_tianqi" name="input"
								placeholder-style="color:#AAAAAA"></input>
						</view>

					</view>
					<view style="padding: 10rpx 5px;margin: 5px 15px; "
						class="tn-border-solid tn-flex-1 tn-flex tn-flex-wrap justify-content-item tn-margin-xs tn-text-left">
						<view style="font-size: 16px;">气温</view>
						<view style="width:60%;margin-left: 5px;">
						 <input placeholder="333" v-model="ding_wendu" name="input"
								placeholder-style="color:#AAAAAA"></input>
						</view>
					</view>
				</view>


				<view class="tn-flex tn-flex-row-between">
					<view style="padding: 10rpx 5px;margin: 5px 15px; "
						class="tn-border-solid tn-flex-1  justify-content-item  tn-text-left tn-flex tn-flex-wrap">
						<view style="font-size: 16px;">气压</view>
						<view style="width:70%;margin-left: 5px;">
							<input placeholder="33" v-model="ding_qiya" name="input"
								placeholder-style="color:#AAAAAA"></input>
						</view>

					</view>
					<view style="padding: 10rpx 5px;margin: 5px 15px; "
						class="tn-border-solid tn-flex-1 tn-flex tn-flex-wrap justify-content-item tn-margin-xs tn-text-left">
						<view style="font-size: 16px;">湿度</view>
						<view style="width:60%;margin-left: 5px;">
							<input placeholder="333" v-model="ding_shidu" name="input"
								placeholder-style="color:#AAAAAA"></input>
						</view>
					</view>
				</view>
		

			<view class="tn-margin tn-bg-gray--light tn-flex tn-flex-wrap"
				style="border-radius: 10rpx;padding: 20rpx 30rpx;">

				<view style="font-size: 16px;">作钓日期</view>
				<view style="margin-left: 10px;font-size: 14px;margin-top: 3px;" @click="showCalendar">				
					{{times?times:'请选择时间'}}
				</view>
			</view>
			
			
			<tn-calendar			
			  v-model="show"
			  :mode="mode"
			  :showLunar="showLunar"
			  :activeBgColor="activeBgColor"
			  :activeColor="activeColor"
			  :rangeBgColor="rangeBgColor"
			  :rangeColor="rangeColor"
			  :btnColor="btnColor"
			  :lunarColor="lunarColor"
			  :startText="startText"
			  :endText="endText"
			  :toolTips="toolTips"
			  :changeYear="changeYear"
			  :changeMonth="changeMonth"
			  @change="onChange"
			></tn-calendar>
			
			
			
			
			
			
			
			
			<view class="tn-margin tn-bg-gray--light tn-flex tn-flex-wrap"
				style="border-radius: 10rpx;padding: 20rpx 30rpx;">

				<view style="font-size: 16px;">渔具</view>
				<view style="margin-left: 10px;">
					<input placeholder="例如台钓4.5" v-model="ding_yuju" name="input"
						placeholder-style="color:#AAAAAA"></input>
				</view>
			</view>

			<view class="tn-margin tn-bg-gray--light tn-flex tn-flex-wrap"
				style="border-radius: 10rpx;padding: 20rpx 30rpx;">

				<view style="font-size: 16px;">线组</view>
				<view style="margin-left: 10px;">
					<input placeholder="例如1.0号主线配0.6号子线" v-model="ding_xianzu" name="input"
						placeholder-style="color:#AAAAAA"></input>
				</view>
			</view>


			<view class="tn-margin tn-bg-gray--light tn-flex tn-flex-wrap"
				style="border-radius: 10rpx;padding: 20rpx 30rpx;">

				<view style="font-size: 16px;">鱼饵</view>
				<view style="margin-left: 10px;">
					<input placeholder="例如化4+化6+藻元素" v-model="ding_yuer" name="input"
						placeholder-style="color:#AAAAAA"></input>
				</view>
			</view>


	</view>


			<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top tn-margin">
				<view class="tn-flex justify-content-item">
					<view class="tn-bg-black tn-color-white tn-text-center"
						style="border-radius: 100rpx;margin-right: 8rpx;width: 45rpx;height: 45rpx;line-height: 45rpx;">
						<text class="tn-icon-topics" style="font-size: 30rpx;"></text>
					</view>
					<view class="tn-text-lg tn-padding-right-xs tn-text-bold">想说点什么</view>
				</view>
				<view class="justify-content-item tn-text-df tn-color-grey">
					<text class="tn-padding-xs">{{zishu}}/{{configInfo.tiezi_zishu}}字内</text>
					<text class="tn-icon-keyboard-circle"></text>
				</view>
			</view>

			<!-- <view class="tn-margin tn-bg-gray--light" style="border-radius: 10rpx;padding: 20rpx 30rpx;">
      	<input placeholder="写下一句简短的标题" name="input" placeholder-style="color:#AAAAAA" ></input>
      </view> -->
			<view class="tn-margin tn-bg-gray--light tn-padding" style="border-radius: 10rpx;">
				<textarea :maxlength="configInfo.tiezi_zishu" v-model="content" placeholder="说点什么 , 万一火了呢"
					placeholder-style="color:#AAAAAA" @input="descInput($event)" show-confirm-bar="true"></textarea>

				<tn-button backgroundColor="#00FFC6" padding="40rpx 0" width="60%" shadow fontBold v-if="vocurl"
					@click="bofang">
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
						<tn-badge :radius="53" backgroundColor="#c5c5c5" fontColor="#000000" size=50 :absolute="true"
							:translateCenter="false">
							<text>x</text>
						</tn-badge>
					</view>
				</tn-button>


			</view>

			<view class="tn-flex tn-flex-row-between tn-flex-col-center  tn-margin-left tn-margin-right">
				<view class="tn-flex justify-content-item">
					<view class="tn-icon-image  tn-bg-gray--light tn-color-black"
						style="font-size: 20px;margin-left: 10px;" @click="tupiantap">

					</view>
					<view @click="voctap" class="tn-icon-voice tn-bg-gray--light tn-color-black"
						style="font-size: 20px;margin-left: 15px;" v-if="is_add_voc">
						<text class="dk-icon-vip" v-if="configInfo.vocd_is_vip"></text>
					</view>
					<view @click="vodiantap" class="tn-icon-video tn-bg-gray--light tn-color-black"
						style="font-size: 20px;margin-left: 15px;" v-if="is_add_vod">
						<text class="dk-icon-vip" v-if="configInfo.vocd_is_vip"></text>
					</view>
				</view>
			</view>

			<view class="tn-flex tn-flex-wrap  tn-margin-bottom-sm  tn-margin-top-xs">
				<view class=" justify-content-item">
					<view v-if="cate_id==0&&configInfo.is_quanzi==1"
						@click="navigateToFn({ url: '/circlePages/edit_quan?id=', checkLogin: false })"
						class="tn-tag-content__item  tn-round tn-text-sm tn-text-bold tn-bg-gray--light tn-color-black">
						<text class="tn-icon-moments" style="font-size: 14px;">{{ quan_title}}</text>
					</view>
					<view @click="xuanzehuati()"
						class=" tn-tag-content__item  tn-round tn-text-sm tn-text-bold tn-bg-gray--light tn-color-black">
						<text class="tn-icon-team" style="font-size: 14px;">{{ tags_title}}</text>
					</view>
					<view @click="quanxianxuanze()"
						class=" tn-tag-content__item  tn-round tn-text-sm tn-text-bold tn-bg-gray--light tn-color-black">
						<text class="tn-icon-team" style="font-size: 14px;">{{ quanxian}}</text>
					</view>
					<view v-if="configInfo.is_fujin" @click="selectAddressFn()"
						class=" tn-tag-content__item  tn-round tn-text-sm tn-text-bold tn-bg-gray--light tn-color-black">
						<text class="tn-icon-location" style="font-size: 14px;">{{ address}}</text>
					</view>
				</view>
			</view>




			<view class="tn-margin-left tn-padding-top-xs" v-if="tupian">
				<tn-image-upload-drag ref="imageUpload" :action="action" :width="236" :height="236" :formData="formData"
					:fileList="fileList" :disabled="disabled" :autoUpload="autoUpload" :maxCount="maxCount"
					:showUploadList="showUploadList" :showProgress="showProgress" :deleteable="deleteable"
					:customBtn="customBtn" @sort-list="onSortList" @on-uploaded="onUploaded" />

			</view>

			<view class="tn-margin-left tn-padding-top-xs" style="position: relative;" v-if="vod">
				<video :src="vodurl" v-if="vodurl"></video>
				<view class="tn-icon-delete-fill tn-color-red" style="left: 10px;
    position: absolute;
    top: 10px;
    font-size: 40px;z-index: 998;" @click="delvod" v-if="vodurl"></view>
			</view>


			<tn-popup v-model="voc" width="80%" height="40%" mode="bottom" :borderRadius="30" :closeBtn="false"
				:maskCloseable="true" @close="closedPopup_voc">
				<nb-voice-record ref="luyinUpload" :shijian="vocdtime" v-model="voc" @startRecord="start"
					@endRecord="end" @cancelRecord="cancel">
				</nb-voice-record>

			</tn-popup>

			<tn-popup v-model="popshow" width="80%" height="40%" mode="bottom" :borderRadius="30" :closeBtn="false"
				:maskCloseable="true" @close="closedPopup">

				<scroll-view class="tn-classify__left-box tn-flex-basic-sm" scroll-top="300" scroll-y
					scroll-with-animation style="height: 400px;">
					<view class="tn-tag-content tn-margin tn-text-justify tn-padding-bottom">
						<view v-for="(item, indexdsdf) in tagList" :key="indexdsdf"
							class="tn-tag-content__item tn-margin-right tn-round tn-text-sm tn-text-bold tn-bg-orange--light tn-color-black"
							:class="item.checked ?  'tn-main-gradient-green' : ''"
							@click="huati(item.id,item.title,indexdsdf)">
							<text class="tn-tag-content__item--prefix">#</text> {{ item.title }}
						</view>
					</view>
				</scroll-view>


			</tn-popup>


			<tn-popup v-model="quanxianshow" width="80%" height="40%" mode="bottom" :borderRadius="30" :closeBtn="false"
				:maskCloseable="true" @close="closedPopup">



				<view class=" tn-flex tn-flex-row-between tn-flex-col-center tn-padding  dd-glass"
					@click="xuanzequqanxian(0,'公开可见')">
					<view class="justify-content-item tn-padding-bottom">
						<view class="tn-flex tn-flex-col-center tn-flex-row-left">
							<view class="tn-padding-right tn-color-black">
								<view class="tn-padding-right tn-padding-left-sm">
									<text class=" tn-text-bold tn-icon-open">公开可见</text>
								</view>
								<view class="tn-padding-right tn-padding-top-xs tn-padding-left-sm tn-text-ellipsis">
									<text class="tn-color-gray tn-text-bold">帖子动态将在广场展示</text>
								</view>
							</view>
						</view>
					</view>
					<view
						class="justify-content-item tn-flex-col-center tn-flex-row-center tn-text-center tn-padding-bottom">
						<view class="">
							<text class="tn-icon-success" style="font-size: 20px;" v-if="quanxian_id==0"></text>
						</view>
					</view>


				</view>


				<view class=" tn-flex tn-flex-row-between tn-flex-col-center tn-padding  dd-glass"
					@click="xuanzequqanxian(1,'仅主页可见')">
					<view class="justify-content-item tn-padding-bottom">
						<view class="tn-flex tn-flex-col-center tn-flex-row-left">
							<view class="tn-padding-right tn-color-black">
								<view class="tn-padding-right tn-padding-left-sm">
									<text class=" tn-text-bold tn-icon-lock">主页可见</text>
								</view>
								<view class="tn-padding-right tn-padding-top-xs tn-padding-left-sm tn-text-ellipsis">
									<text class="tn-color-gray tn-text-bold">他人只能在你的主页看见</text>
								</view>
							</view>
						</view>
					</view>
					<view
						class="justify-content-item tn-flex-col-center tn-flex-row-center tn-text-center tn-padding-bottom">
						<view class="">
							<text class="tn-icon-success" style="font-size: 20px;" v-if="quanxian_id==1"></text>
						</view>
					</view>
				</view>
				<view class=" tn-flex tn-flex-row-between tn-flex-col-center tn-padding  dd-glass"
					@click="xuanzequqanxian(2,'仅自己可见')">
					<view class="justify-content-item tn-padding-bottom">
						<view class="tn-flex tn-flex-col-center tn-flex-row-left">
							<view class="tn-padding-right tn-color-black">
								<view class="tn-padding-right tn-padding-left-sm">
									<text class=" tn-text-bold tn-icon-lock">自己可见</text>
								</view>
								<view class="tn-padding-right tn-padding-top-xs tn-padding-left-sm tn-text-ellipsis">
									<text class="tn-color-gray tn-text-bold">他人无法查看帖子</text>
								</view>
							</view>
						</view>
					</view>
					<view
						class="justify-content-item tn-flex-col-center tn-flex-row-center tn-text-center tn-padding-bottom">
						<view class="">
							<text class="tn-icon-success" style="font-size: 20px;" v-if="quanxian_id==2"></text>
						</view>
					</view>
				</view>

			</tn-popup>









		</view>
		<view class="tn-flex tn-footerfixed">
			<view class="tn-flex-1 justify-content-item tn-margin-sm tn-text-center" @click="fabuba()">
				<tn-button backgroundColor="#00FFC6" padding="40rpx 0" width="60%" shadow fontBold>
					<text class="tn-icon-edit tn-padding-right-xs tn-color-black"></text>
					<text class="tn-color-black">确 定 发 布</text>
				</tn-button>
			</view>
		</view>
		<view class='tn-tabbar-height'></view>




		<tn-modal width="50%" v-model="wancheng" backgroundColor="#E4E9EC" padding="30rpx 80rpx" :radius="25"
			:content="wanchengtitle" :showCloseBtn="false" :maskCloseable="false" :zoom="true" :custom="false">

		</tn-modal>


		<tn-modal width="80%" v-model="is_fatie" backgroundColor="#E4E9EC" padding="30rpx 80rpx" :radius="25" title="提醒"
			content='发帖需要实名认证' :button="button" :showCloseBtn="false" :maskCloseable="false" :zoom="true"
			:custom="false" @click="clickBtn_shenqing">

		</tn-modal>

		<dk-shezhi v-model="tijiaoisshow" width="80%" height="40%" mode="center" :borderRadius="30" giftitle="提交帖子"
			:closeBtn="false" :maskCloseable="false">
			<slot>
				<view v-if="vodurl||vocurl">
					<view class="custom-modal-content tn-padding">
						<tn-circle-progress :percent="progress" :showPercent="true"></tn-circle-progress>
					</view>
					<view class="custom-modal-content tn-padding">
						{{wanchengtitle}}
					</view>
				</view>
				<view v-else>
					<view class="custom-modal-content tn-padding">
						<tn-circle-progress :percent="progress" :showPercent="true"></tn-circle-progress>
					</view>
					<view class="custom-modal-content tn-padding">
						{{wanchengtitle}}
					</view>
				</view>

			</slot>
		</dk-shezhi>


	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'

	import {
		host
	} from '@/siteinfo.js'
	const audioContext = uni.createInnerAudioContext()
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	export default {
		name: 'TemplateEdit',
		mixins: [template_page_mixin],
		data() {
			return {
				//、
				times:'',
				show: false,
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
				//、
				
				//、、、、
				ding_riqi: '晴',
				ding_tianqi: '晴',
				ding_wendu: '26度',
				ding_qiya: '45帕',
				ding_shidu: '25%',

				ding_yuer: '',
				ding_xianzu: '',
				ding_yuju: '',
				//、、、、、、、
				current: 0,
				activeItemStyle: {
					fontSize: `36rpx`
				},
				scrollList: [{
						name: '随便说说'
					},
					{
						name: '鱼获分享',
					}
				],
				//、、、、、、、、、、
				tijiaoisshow: false,
				vocdtime: 60,
				is_add_voc: 0,
				is_add_vod: 0,
				is_fatie: false,
				button: [{
						text: '取消',
						backgroundColor: '#c1c1c1',
						fontColor: '#000000'
					},
					{
						text: '去认证',
						backgroundColor: '#ffff00',
						fontColor: '#000000'
					}
				],
				wanchengtitle: '正在提交，请稍等',
				wancheng: false,
				zishu: 0,
				tupian: false,
				voc: false,
				vod: false,
				quanxianshow: false,
				popshow: false,
				cate_id: 0,
				quanxian_id: 0,
				content: '',
				quan_title: '选圈子',
				tags_title: '选话题',
				tags_id: 0,
				quanxian: '公开可见',
				tagList: [],
				quan: {
					"id": 0,
					"title": ''
				},
				//图片上传参数
				action: '',
				formData: {
					apiType: 'this,ali',
					token: uni.getStorageSync('token'),
					image: null
				},
				fileList: [],
				okpiclist: '', //上传完毕的图片字符逗号隔开
				showUploadList: true,
				customBtn: false,
				autoUpload: false,
				showProgress: true,
				deleteable: true,
				customStyle: false,
				maxCount: 9,
				disabled: false,
				lng: '',
				lat: '',
				address: '你在哪里',
				//
				//录音
				vocurl: "",
				vocscend: 0,
				vocurlpass: "",
				isplay: false,
				///视频
				vodurl: '',
				vodurlpass: "",
				progress: 0
			}
		},
		onShow() {
			this.panduan()
		},
		onLoad(option) {
			let that = this
			uni.$off('setLoginBoxFlag');
			uni.$on('setLoginBoxFlag', loginBoxFlag => {
				that.loginBoxFlag = loginBoxFlag;
			});
			uni.$on('quan', loginBoxFlag => {
				that.quan = loginBoxFlag
				that.quan_title = loginBoxFlag.title
			});
			that.action = host + '/api/user/up_img'

			if (option.id) {
				this.quan.id = option.id
				this.cate_id = option.id
				this.quan_title = option.title
			}

			//	this.panduan()
			this.info()
		},
		computed: {
			...mapState({
				isVip: store => store.userInfo.isVip,
			})
		},
		methods: {
			onChange(event) {
			  if (this.mode === 'date') {
			    this.times = event.date
			  }
			 
			  
			},
 showCalendar() {
         this.show = true
      },
			tabChange(index) {
				this.current = index
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

			xuanzehuati() {
				this.popshow = true
			},
			quanxianxuanze() {
				this.quanxianshow = true
			},

			delImage(done) {
				uni.showModal({
					content: '是否删除?',
					success: (res) => {
						if (res.confirm) {
							// 执行 done() 删除
							done()
						}
					}
				})
			},
			quixiaovoc() {
				uni.showModal({
					content: '是否删除?',
					success: (res) => {
						if (res.confirm) {
							this.vocurl = ""
							this.vocscend = 0
						}
					}
				})
			},

			closedPopup_voc() {
				this.voc = false
				// #ifdef APP||MP
				this.$refs.luyinUpload.stopRecord()
				// #endif
			},
			closedPopup() {

				this.popshow = false
				this.quanxianshow = false
			},

			tupiantap() {

				this.tupian = !this.tupian
				this.vod = false
				this.voc = false
			},
			delvod(done) {
				uni.showModal({
					content: '是否删除?',
					success: (res) => {
						if (res.confirm) {
							// 执行 done() 删除
							this.vod = false
							this.vodurl = ''
						}
					}
				})
			},


			vodiantap() {
				if (this.vocurl) {
					this.msg('请先删除语音哦')
					return
				}
				this.vod = true
				let self = this;
				uni.chooseVideo({
					sourceType: ['camera', 'album'],
					maxDuration: self.vocdtime,
					success: function(res) {
						self.tupian = false
						self.vodurl = res.tempFilePath;
					}
				});

			},
			voctap() {
				if (this.configInfo.vocd_is_vip && !this.isVip) {
					this.msg('vip专属功能')
					return
				}


				if (this.vodurl) {
					this.msg('请先删除视频哦')
					return
				}
				this.voc = true
				this.vod = false
			},

			huatidel() {
				this.tags_title = '请选择下面的话题'
				this.tags_id = 0
			},
			huati(id, title, index) {
				let yixuan = []
				for (let i in this.tagList) {
					if (this.tagList[i].checked) {
						yixuan.push(this.tagList[i])
					}
				}

				if (this.tagList[index].checked == false) {
					if (yixuan.length >= this.configInfo.huatishu) {
						this.msg('话题数不能超过' + this.configInfo.huatishu + '个')
						return
					}
				}

				this.tagList[index].checked = !this.tagList[index].checked
				//	this.popshow = false



				console.log(yixuan.length)


				this.tags_title = title
				this.tags_id = id
			},
			xuanzequqanxian(id, title) {
				this.quanxianshow = false
				this.quanxian_id = id
				this.quanxian = title
			},
			clickBtn_shenqing(res) {
				if (res == 1) {
					this.navigateToFn({
						url: '/minePages/set',
						checkLogin: true
					})
				}
				if (res == 0) {
					uni.navigateBack({})
				}
			},

			async panduan() {
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/user/addAuth',
					data: {

					}
				});
				if (result.data.code == 200) {
					if (result.data.data.is_add == 0) {
						this.is_fatie = true
					}
					this.is_add_voc = result.data.data.is_add_voc
					this.is_add_vod = result.data.data.is_add_vod

					if (!this.isVip) {
						this.vocdtime = Number(this.configInfo.vocd_add_time)
					}

				}

			},


			async info() {
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/index/guangChang',
					data: {

					}
				});

				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						that.tagList = result.data.data.tags;
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
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},


			// 手动清空列表
			clear() {
				this.$refs.imageUpload.clear()
			},
			// 图片拖拽重新排序
			onSortList(list) {},
			// 图片
			onUploaded(list) {
				if (list.length > 0) {
					let imageList = list.map(i => i.response.data.file).join(',');
					this.okpiclist = imageList
					this.send()
				} else {
					this.send()
				}
			},

			fabuba() {
				this.$common.noMultipleClicks(this.fabu(), 1000);
			},
			descInput: function(e) {
				this.zishu = e.detail.cursor
			},
			fabu() {
				let that = this

				if (this.vocurl == "" && this.vodurl == "") {
					if (this.content == '') {
						this.msg('说点啥呀')
						return
					}
				}

				if (this.configInfo.is_quanzi == 1 && this.configInfo.is_quanzi_fa == 1 && !this.quan.id) {
					this.msg('请选择圈子')
					return
				}


				this.tijiaoisshow = true
				if (this.vocurl) {

					const uploadTask = uni.uploadFile({
						url: this.action, //仅为示例，非真实的接口地址
						filePath: this.vocurl,
						name: 'file',
						formData: {
							'token': uni.getStorageSync('token'),
							'user': 'test'
						},
						success: (uploadFileRes) => {
							let data = JSON.parse(uploadFileRes.data)
							this.vocurlpass = data.data.file
							if (this.tupian) {
								this.wanchengtitle = "音频上传成功"
								this.$refs.imageUpload.upload()
							} else {
								this.send()
							}
						}

					});


					uploadTask.onProgressUpdate((res) => {
						this.progress = res.progress

						console.log('上传进度' + res.progress);

					});


				} else if (this.vodurl) {

					const uploadTask = uni.uploadFile({
						url: this.action, //仅为示例，非真实的接口地址
						filePath: this.vodurl,
						name: 'file',
						formData: {
							'token': uni.getStorageSync('token'),
							'user': 'test'
						},
						success: (uploadFileRes) => {
							let data = JSON.parse(uploadFileRes.data)
							this.vodurlpass = data.data.file
							console.log('视频上传成功')
							if (this.tupian) {
								this.wanchengtitle = "视频上传成功"
								this.$refs.imageUpload.upload()
							} else {
								this.send()
							}
						}
					});


					uploadTask.onProgressUpdate((res) => {
						this.progress = res.progress
						console.log('上传进度' + res.progress);
					});
				} else {
					if (that.tupian) {
						this.$refs.imageUpload.upload()
					} else {
						that.send()
					}
				}








			},

			async send() {
				let ss = ''
				for (let i in this.tagList) {
					if (this.tagList[i].checked) {
						ss += this.tagList[i].id + ','
					}

				}
				ss = ss.slice(0, ss.length - 1);

				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/user/addNewGoods',
					data: {
						content: that.content,
						tags_ids: ss,
						cate_id: that.quan.id,
						address: that.address,
						lat: that.lat,
						lng: that.lng,
						address: that.address,
						type: that.quanxian_id,
						images: that.okpiclist,
						voc: that.vocurlpass,
						vocscend: that.vocscend,
						vod: that.vodurlpass,
					}
				});

				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						uni.hideLoading()
						this.progress = 100
						//this.wancheng = true					
						this.wanchengtitle = result.data.msg
						uni.$emit('fabu_ok', result.data.code)
						setTimeout(() => {
							this.tijiaoisshow = false
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



			selectAddressFn() {
				let that = this;


				uni.chooseLocation({
					async success(e) {
						console.log(e);
						let str, longitude, latitude;
						if (e.errMsg == 'chooseLocation:ok' && e.address) {
							str = `${e.name}`;
							longitude = e.longitude;
							latitude = e.latitude;
						} else {
							str = '点击选择地址';
							longitude = '';
							latitude = '';
						}
						that.address = str;
						that.lng = longitude;
						that.lat = latitude;
					},
					fail(e) {
						console.log('失败', e);
						uni.showModal({
							showCancel: false, //不显示取消按钮
							title: '允许系统获取位置信息',
							success(e) {
								//确认后的回调
								uni.openSetting();
							}
						});
					}
				});
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


		}
	}
</script>

<style lang="scss" scoped>
	.template-edit {}

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
			padding: 10rpx 20rpx;
			margin: 20rpx 20rpx 5rpx 0rpx;

			&--prefix {
				padding-right: 10rpx;
			}
		}
	}

	/* 标签内容 end*/
</style>
