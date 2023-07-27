<template>
	<view class="template-content">

		<tn-nav-bar fixed :isBack="true">
			<text class=""
				@click="navigateToFn({ url: '/circlePages/blogger_other?id='+toid, checkLogin: false })">{{toname}}</text>
			<block v-if="configInfo.frinedonline==1">
				<text class="tn-color-gray tn-text-xs tn-margin-left-sm" v-if="to_is_online==0">离线</text>
				<text class="tn-color-blue tn-text-xs tn-margin-left-sm" v-else>在线</text>
			</block>

		</tn-nav-bar>

		<view class="" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<tn-action-sheet v-model="listshow" :list="listanniu" @click="click"></tn-action-sheet>
			<view class=" tn-padding" v-if="is_liao==1">
				<tn-button shape="round" backgroundColor="tn-main-gradient-aquablue--light">
				付费聊天：每天信息收费{{configInfo.sms_money}}{{configInfo.site_moneyname}}
				</tn-button>
			
			</view>

			<view class="tn-margin-left  tn-text-sm tn-color-gray">
				<text class="tn-icon-train" style="color: #00aa82;font-size: 14px;">
				</text>
				<text>
					TA的兴趣标签:</text><text class="tn-color-black">{{totags}}</text>
			</view>
			<view class="tn-margin-left tn-margin-top-sm tn-text-sm tn-color-gray">
				<text class="tn-icon-train" style="color: #00aa82;font-size: 14px;">
				</text>
				<text>
					最近看了什么电影/电视剧/跟TA一起分享吧</text>
			</view>
			<view class="tn-margin-left tn-margin-top-sm tn-text-sm tn-color-gray">
				<text class="tn-icon-train" style="color: #00aa82;font-size: 14px;">
				</text>
				<text>跟TA聊聊即将上映的电影吧</text>
			</view>
			<view class="tn-margin-left tn-margin-top-sm tn-text-sm tn-color-gray">
				<text class="tn-icon-train" style="color: #00aa82;font-size: 14px;">
				</text>
				<text>跟TA聊聊最喜欢吃的食物吧~</text>
			</view>
			<view :class="isRecording ? '' : 'modal-display'" class="record-modal ">
				<view class="wrapper">
					<view class="modal-title">
						{{title}}{{sec}}s
					</view>

					<view class="modal-loading"></view>
				</view>


			</view>






			<view class="tn-text-justify">



				<view class="tn-text-center">
					<tn-loading :show="ajax.loading" color="#01BEFF"></tn-loading>
				</view>

				<view v-if="is_liaoguo==false"
					class="tn-text-sm tn-margin-xl tn-padding tn-text-center  tn-radius bg-flex-shadow tn-shadow-blur tn-bg-gray tn-color-white">
					收到回复前你只能发送{{configInfo.siliaoxianzhi}}条消息，对方回复后，即可与TA畅聊~

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
										:style="'background-image:url('+tohead+')'"
										@click="navigateToFn({ url: '/circlePages/blogger_other?id='+toid, checkLogin: false })">
										<view class="logo-image">
										</view>
									</view>
									<view class="tn-padding-right tn-color-black">

										<view class="tn-padding-left-sm tn-text-bold tn-margin-top-sm"
											style="max-width: 62vw;"
											@click="navigateToFn({ url: '/circlePages/blogger_other?id='+toid, checkLogin: false })">
											{{toname}}
										</view>
										<view class="tn-flex tn-flex-col-center" v-if="item.type=='text'&&!item.sec"
											@longpress="longpress(item.content)">
											<view class="tnchat7 tn-margin-sm" style="max-width: 62vw;"
												:style="'border-image-source:url('+qipaoto+')'" v-if="qipaoto">
												<rich-text :nodes="item.content"></rich-text>
											</view>
											<view class="tnchat7 tn-margin-sm" style="max-width: 62vw;" v-else>
												<rich-text :nodes="item.content"></rich-text>
											</view>
											<view class="">
												<!-- 发送失败 -->
												<!-- <text class="tn-icon-warning-fill tn-color-purplered tn-text-xxl"></text> -->
											</view>
										</view>

										<view class="tn-flex tn-flex-col-center" v-if="item.type=='text'&&item.sec>0"
											@click="navigateToFn({ url: '/circlePages/team/show?id='+item.sec, checkLogin: false })">
											<view class="tnchat7 tn-margin-sm" style="max-width: 62vw;"
												:style="'border-image-source:url('+qipaoto+')'" v-if="qipaoto">
												<view>【邀请】您参加组局</view>
												<rich-text :nodes="item.content"></rich-text>
											</view>
											<view class="tnchat7 tn-margin-sm" style="max-width: 62vw;" v-else>
												<view>【邀请】您参加组局</view>
												<rich-text :nodes="item.content"></rich-text>

											</view>
											<view class=""
												@click="navigateToFn({ url: '/circlePages/team/show?id='+item.sec, checkLogin: false })">
												<text class="tn-icon-right-arrow tn-color-blue tn-text-sm">去看看</text>
											</view>
										</view>



										<view v-if="item.type=='music'" @click="paymp3(item.content,item.id)"
											class="tn-margin-sm tn-padding-sm" :style="{width: item.sec+24 + 'vw'}"
											style="max-width: 60vw;min-width: 20vw;border-radius: 0 15rpx 15rpx 15rpx;background-color: #6fde89;">

											<view class="yuyinbg" :class="playMsgid == item.id?'voicePlay':''">
											</view>
											<view class="tn-color-white" style="margin-left: 20px;">{{item.sec}} s
											</view>

										</view>


										<view class=" tn-margin-sm " v-if="item.type=='image'" style="max-width: 60vw;"
											@tap="showPic(item.content)">
											<image mode="widthFix" :src="item.content" style="width: 40vw"></image>
										</view>

										<view v-if="item.type=='face'" class=" tn-margin-sm " style="max-width: 60vw;"
											@tap="showPic(item.content)">
											<view class="">
												<image mode="aspectFit" :src="item.content"
													style="width:60px;height: 60px;"></image>
											</view>
										</view>

										<view v-if="item.type=='liwuuser'&&item.gift!=null"
											class=" tn-margin-sm tn-bg-gray--light " style="max-width: 60vw;">
											<view
												class="tn-border-solid-bottom tn-padding-left tn-padding-right tn-padding-top tn-flex tn-flex-row-right ">
												<view class="justify-content-item">
													<view class="tn-text-bold  ">
														TA送出[{{item.gift['title']}}]
													</view>
													<view class="tn-color-gray tn-margin-top-sm">
														{{item.gift['money']}}{{configInfo.site_moneyname}}
													</view>
												</view>
												<view class="justify-content-item">
													<image :src="item.gift['image']" style="width: 50px;height:50px;"
														mode="widthFix"></image>
												</view>
											</view>
											<view v-if="item.isread==0" @tap="liwu(item.gift['svga'])"
												class="tn-padding-top-sm tn-padding-left tn-padding-right tn-padding-bottom tn-color-gray ">
												收到动画礼物点击重播
											</view>

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
											<view class="">
												<!-- <text	class="  tn-color-gray" v-if="item.isread==1">已读</text>
												<text	class="  tn-color-gray" v-if="item.isread==0">未读</text> -->
											</view>
											<block v-if="item.type=='text'&&item.sec==0">
												<view class="tnchat6 tn-margin-sm" style="max-width: 62vw"
													v-if="qipaofrom" :style="'border-image-source:url('+qipaofrom+')'"
													@longpress="longpress(item.content)">
													<rich-text :nodes="item.content"></rich-text>
												</view>
												<view class="tnchat6 tn-margin-sm" style="max-width: 62vw" v-else
													@longpress="longpress(item.content)">
													<rich-text :nodes="item.content"></rich-text>
												</view>
											</block>
											<block v-if="item.type=='text'&&item.sec>0">
												<view class="tnchat6 tn-margin-sm" style="max-width: 62vw"
													v-if="qipaofrom" :style="'border-image-source:url('+qipaofrom+')'"
													@click="navigateToFn({ url: '/circlePages/team/show?id='+item.sec, checkLogin: false })">
													<view>【邀请】对方参加组局</view>
													<rich-text :nodes="item.content"></rich-text>
												</view>
												<view class="tnchat6 tn-margin-sm" style="max-width: 62vw" v-else
													@click="navigateToFn({ url: '/circlePages/team/show?id='+item.sec, checkLogin: false })">
													<view>【邀请】对方参加组局</view>
													<rich-text :nodes="item.content"></rich-text>
												</view>
												<view class="">
													<text
														class="tn-icon-right-arrow tn-color-blue tn-text-sm">去看看</text>
												</view>
											</block>

											<view v-if="item.type=='music'" @click="paymp3(item.content,item.id)"
												class="tn-margin-sm tn-padding-sm tn-text-right"
												:style="{width: item.sec+24 + 'vw'}"
												style="max-width: 60vw;min-width: 20vw;border-radius: 15rpx 0rpx 15rpx 15rpx;background-color: #6fde89;">

												<view class="yuyinbg_right"
													:class="playMsgid == item.id?'voicePlay_right':''">
												</view>
												<view class="tn-color-white">{{item.sec}} s</view>

											</view>


											<view v-if="item.type=='image'" class=" tn-margin-sm "
												style="max-width: 60vw;" @tap="showPic(item.content)">
												<view class="">
													<image mode="widthFix" :src="item.content" style="width: 40vw">
													</image>
												</view>
											</view>

											<view v-if="item.type=='face'" class=" tn-margin-sm "
												style="max-width: 60vw;" @tap="showPic(item.content)">
												<view class="">
													<image mode="aspectFit" :src="item.content"
														style="width:60px;height: 60px;"></image>
												</view>
											</view>

											<view v-if="item.type=='liwuuser'&&item.gift"
												class=" tn-margin-sm tn-bg-gray--light tn-margin-top-sm "
												style="max-width: 60vw;">
												<view
													class="tn-border-solid-bottom tn-padding-left tn-padding-right tn-padding-top tn-flex tn-flex-row-right ">
													<view class="justify-content-item">
														<view class="tn-text-bold  ">
															送出[{{item.gift['title']}}]
														</view>
														<view class="tn-color-gray tn-margin-top-sm">
															{{item.gift['money']}}{{configInfo.site_moneyname}}
														</view>
													</view>
													<view class="justify-content-item">
														<image :src="item.gift['image']"
															style="width: 50px;height:50px;" mode="widthFix"></image>
													</view>
												</view>
												<view @click="songliwushow()"
													class="tn-padding-top-sm tn-padding-left tn-padding-right tn-padding-bottom tn-color-gray ">
													送礼物给TA
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
				<view class="btn-left" @click="chooseRecord">
					<image v-if="!isRecord" style="width:48rpx;height:48rpx" src="@/static/images/audio.png" mode="" />

					<text v-else class="tn-icon-keyboard-circle" style="font-size:48rpx;"></text>

				</view>
				<view v-if="!isRecord" style="width: 100%">
					<input type="text" class="input" @confirm="sendmsg" confirm-type="send" :adjust-position="true"
						:auto-blur="true" :confirm-hold="true" v-model="sendmsgBoy" placeholder="输入新消息"
						:focus="isFocus">
				</view>


				<view class="record" id="record" v-if="isRecord" @longpress="handleLongPress"
					@touchcancel="handleTouchEnd" @touchmove="handleTouchMove" @touchend="handleTouchEnd"
					@touchmove.prevent>
					<template v-if="!isRecording">
						<text class="">按住 说话</text>
					</template>
					<template v-if="isRecording">

						<text class="">松开 结束</text>
					</template>
				</view>
			</view>
			<view class="tn-flex tn-flex-row-around tn-margin-bottom-sm">
				<view class="justify-content-item  tn-text-center " @click="handleEmoji()">
					<text class="tn-icon-emoji-good" style="font-size: 26px;"></text>
				</view>

				<view class="justify-content-item  tn-text-center " @click="album()">
					<text class="tn-icon-image" style="font-size: 26px;"></text>
				</view>

				<view class="justify-content-item  tn-text-center " @click="camera()">
					<text class="tn-icon-camera" style="font-size: 26px;"></text>
				</view>
				<view class="justify-content-item  tn-text-center " @click="songliwushow()">
					<text class="tn-icon-gift" style="font-size: 26px;"></text>
				</view>
				<view class="justify-content-item  tn-text-center " @click="listshow=true">
					<text class="tn-icon-more-circle" style="font-size: 26px;"></text>
				</view>
			</view>


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

						<tn-button :fontSize="28" padding="20rpx" height="56rpx" :backgroundColor="configInfo.button"
							fontColor="tn-color-white">提交投诉</tn-button>
					</view>

				</view>
			</tn-modal>

			<tn-popup v-model="moreshow" width="80%" height="200rpx" mode="bottom" :borderRadius="30" :closeBtn="false"
				:maskCloseable="true" @close="closedPopup">
				<view class="emoji-tab">

					<view
						class="tn-flex tn-flex-wrap tn-margin-left-sm tn-margin-bottom-sm tn-margin-right-sm tn-margin-top-xs">
						<view class="" style="width: 33%;" @click="dakaijuju();">
							<view class="tn-flex tn-flex-row-center tn-padding-top tn-text-bold">
								<view class="tn-flex tn-flex-row-center "
									style="background-color: #00aaff5c;height: 88rpx;width:88rpx;border-radius: 5000rpx;">
									<text class="tn-icon-warning"
										style="font-size: 26px;margin-top: 20rpx;color: #ffffff;"></text>
								</view>
							</view>
							<view class="tn-flex tn-flex-row-center tn-text-bold">
								<text class="" style="font-size: 12px;color: #8d8d8d;">组局</text>
							</view>
						</view>
					</view>
				</view>
			</tn-popup>



			<tn-popup v-model="zujushow" width="80%" height="80%" mode="bottom" :borderRadius="30" :closeBtn="true"
				:maskCloseable="true" @close="closedPopup">

				<view class="tn-search-fixed tn-padding-top">
					<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin">
						<view class="justify-content-item align-content-item">
							<view class="tn-bg-gray--light tn-flex tn-flex-col-center"
								style="border-radius: 100rpx;padding: 10rpx 20rpx 10rpx 20rpx;width: 100%;">
								<text
									class="tn-icon-search justify-content-item tn-padding-right-xs tn-color-gray tn-text-lg"></text>
								<input class="justify-content-item" placeholder="输入关键词" v-model="zujukey"
									placeholder-style="color:#AAAAAA"></input>
							</view>
						</view>

						<view class="align-content-item">
							<view class="justify-content-item tn-text-center" @click="dakaijuju()">
								<tn-button fontColor="#000000" :shadow="true"
									backgroundColor="tn-main-gradient-yellow--reverse" shape="round"
									padding="20rpx 20rpx" width="150rpx" shadow fontBold>
									<text>搜索</text>
								</tn-button>

							</view>
						</view>
					</view>
				</view>


				<scroll-view class="tn-classify__left-box tn-flex-basic-sm" scroll-y scroll-with-animation
					style="height:100%;">
					<view class="tn-flex tn-flex-row-center tn-margin-top-sm" v-if="zujulist.length==0">
						<view class="">
							<tn-empty icon="/static/images/no.png" text="没有组局信息">

							</tn-empty>
						</view>
					</view>
					<view class="about-shadow  tn-margin">
						<tn-list-cell :unlined="true" :radius="true" :fontSize="30"
							v-for="(item, indexdsdf) in zujulist" :key="indexdsdf" @click="fazuju(item)">
							<view class="tn-flex tn-flex-row-between" style="width: 100%;">
								<view class="tn-margin-left-sm">
									<text class="tn-tag-content__item--prefix tn-text-ellipsis">#</text>
									{{ item.detail }}
								</view>
								<view class=" ">
									<tn-button fontColor="#000000" :shadow="true" backgroundColor="tn-cool-bg-color-2"
										shape="round" padding="10rpx 10rpx" width="100rpx" shadow fontBold>
										<text>发送</text>
									</tn-button>
								</view>
							</view>
						</tn-list-cell>
					</view>
				</scroll-view>
			</tn-popup>








			<tn-popup v-model="isEmojiOpen" width="80%" height="600rpx" mode="bottom"
				backgroundColor="rgba(0, 0, 0, 0.4)" :borderRadius="30" :closeBtn="false" :maskCloseable="true"
				@close="closedPopup">
				<view class="emoji-tab">
					<tn-tabs :list="configInfo.emolist" :current="emojiindex" activeColor="#00ffff"
						inactiveColor="#ffffff" @change="tabChange"></tn-tabs>
				</view>
				<scroll-view class="" scroll-y scroll-with-animation style="height:600rpx">
					<view class="bottom-emoji">



						<view class="emojis" v-if="emojiShow">
							<view v-for="(emojiItem, index3) in configInfo.emolist[emojiindex].emolist_pic"
								class="emoji" :key="index3" @click="chooseEmoji(emojiItem)">
								<image :src="emojiItem" style="width:100%;height:100%" mode="widthFix" />
							</view>
						</view>
					</view>
				</scroll-view>
			</tn-popup>




			<!--    更多部分-->
			<view class="bottom-image" v-if="isMoreOpen">


			</view>
		</view>




		<tn-popup v-model="popshow" width="80%" height="600rpx" mode="bottom" backgroundColor="rgba(0, 0, 0, 0.4)"
			:borderRadius="30" :closeBtn="false" :maskCloseable="true" @close="closedPopup">
			<gift-list :user_id="Number(toid)" :yemian="1"></gift-list>
		</tn-popup>

		<dk-tanchuang v-model="giftianchu" width="80%" height="40%" mode="center" :borderRadius="30"
			:giftitle="giftitle" :gifcontent="gifcontent" :giftimg="giftimg" :maskCloseable="true" @close="closedPopup">
		</dk-tanchuang>




		<tn-popup v-model="liwusvgashow" width="100%" height="100%" mode="center"
			backgroundColor="rgba(255, 255, 255, 0.1)" :borderRadius="30" :closeBtn="false" :maskCloseable="true"
			@close="closedPopup">


			<l-svga ref="svga"></l-svga>



		</tn-popup>



		<view class='tn-tabbar-height' style="height:90px;"></view>

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
				is_liao:0,
				chatindex: -1,
				listanniu: [{
					text: '拉黑'
				}, {
					text: '删除记录'
				}, {
					text: '举报'
				}],
				listshow: false,
				//、
				zujukey: '',
				zujulist: [],
				zujushow: false,
				moreshow: false,
				/////
				qipaofrom: '',
				qipaoto: '',
				liwusvgashow: false,
				giftimg: '',
				giftianchu: false,
				giftitle: '',
				gifcontent: '',
				//、
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
				//、、
				is_xianzhi: false,
				is_liaoguo: true,
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
				to_is_online: 0,
				totags: '',
				pipei: 0,
				jubaoshow: false,
				jubao_body: ''
			}
		},
		onLoad(option) {
			let that = this
		uni.$off('talkMessage')
		uni.$off('liwuoksvga_talk')
		uni.$off('liwuok_talk')
		uni.$off('talkMessage')		
			if (option.toid) {
				this.toid = option.toid
			}
			if (option.index) {
				this.chatindex = option.index
			}
			this.fromid = uni.getStorageSync('user_id')
			this.$socket.bind();

			this.jintian = this.getNowDate()
			this.info()
			this.getHistoryMsg()
			var online = '{"type":"online","toid":"' + this.toid + '","fromid":"' + this.fromid + '"}';
			this.$socket.send(online);

			// 注册接受消息监听
			uni.$on('talkMessage', (message) => {

				switch (message.type) {
					case "text":
						if (this.toid == message.fromid) {
							let inmsg = {
								is_self: false,
								type: 'text',
								content: message.data,
								create_time: message.create_time
							};
							this.pushmsg(inmsg)
							this.paymp3('/static/shou.mp3', 0)
							this.changeNoRead();
							this.is_liaoguo = true
							uni.$emit('jianshacount', 1)
						}
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
							this.is_liaoguo = true
							this.pushmsg(inmsg)
							this.paymp3('/static/shou.mp3', 0)
							this.changeNoRead()
							uni.$emit('jianshacount', 1)
						}
						return;

					case "liwuuser":
						if (this.toid == message.fromid) {
							let liwudata = message.data.replace(/\'/g, '"');
							let liwujosn = JSON.parse(liwudata)

							let inmsg = {
								is_self: false,
								type: 'liwuuser',
								sec: message.sec,
								content: liwujosn,
								gift: liwujosn,
								create_time: message.create_time
							};
							this.is_liaoguo = true
							this.pushmsg(inmsg)
							this.paymp3('/static/shou.mp3', 0)
							this.changeNoRead()
							uni.$emit('jianshacount', 1)
							if (message.sec == 1) {
								this.giftimg = liwujosn.image
								this.giftitle = "收到礼物"
								this.giftianchu = true
								this.gifcontent = ''
								this.popshow = false
								setTimeout(() => {
									this.giftianchu = false
								}, 2000);
							}
							if (message.sec == 2) {
								this.gifcontent = ''
								this.popshow = false
								this.liwu(liwujosn.svga)
							}

						}
						return;

					case "face":
						if (this.toid == message.fromid) {
							let inmsg = {
								is_self: false,
								type: 'face',
								sec: message.sec,
								content: message.data,
								create_time: message.create_time
							};
							this.is_liaoguo = true
							this.pushmsg(inmsg)
							this.paymp3('/static/shou.mp3', 0)
							this.changeNoRead()
							uni.$emit('jianshacount', 1)
						}
						return;

					case "image":
						if (this.toid == message.fromid) {
							let inmsg = {
								is_self: false,
								type: 'image',
								sec: message.sec,
								content: message.data,
								create_time: message.create_time
							};
							this.is_liaoguo = true
							this.pushmsg(inmsg)
							this.paymp3('/static/shou.mp3', 0)
							this.changeNoRead()
							uni.$emit('jianshacount', 1)
						}
						return;
					case "save":
						if (message.isread == 1) {
							this.is_online = '已读'
						} else {
							this.is_online = '未读'
						}
						return;
					case "online":
						if (message.status == 1) {
							this.is_online = '在线'

						} else {
							this.is_online = '离线'
						}
						return;
					case 'roomqita': //通用广播
						if (this.toid == message.fromid) {
							this.zhixing(message)
						}
						return;

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
					// #ifdef APP-PLUS
					sec = Math.round(audioContext.duration)
					// #endif				
					// #ifdef MP
					sec = that.sec
					// #endif

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



			uni.$on('liwuok_talk', data => {
				this.giftimg = data.image
				this.giftitle = "成功送出礼物"
				this.giftianchu = true
				this.gifcontent = ''
				this.popshow = false
				setTimeout(() => {
					this.giftianchu = false
				}, 2000);
				let postdata = JSON.stringify(data).replace(/\"/g, "'");
				console.log('送出gifliwu')
				this.faliwu(postdata, 1)

			});
			uni.$on('liwuoksvga_talk', data => {
				console.log('收到svga'+data.svga)
				this.gifcontent = ''
				this.popshow = false		
				this.liwu(data.svga)		
				let postdata = JSON.stringify(data).replace(/\"/g, "'");
			this.faliwu(postdata, 2)
			});		
				
				
		

		},



		onPageScroll(e) {

			if (e.scrollTop < 5) {
				this.getHistoryMsg()
			}
		},

		onUnload: function() {
		
		},




		methods: {

			click(index) {
				//2删除 1拉黑
				if (index == 2) {
					this.jubaoshow = true
					return
				}
				this.onSwiperItemClick(index + 1)


			},
			async onSwiperItemClick(status) {

				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/chat/delChatLognew',
					data: {
						toid: this.toid,
						status: status
					}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						if (status == 1) {
							this.msg('拉黑成功')
							uni.$emit('lahie', this.chatindex)
							uni.navigateBack()
						}
						if (status == 2) {
							this.msg('删除记录成功')
							this.talkList = []
						}
						//this.content.splice(e.name, 1);			
					}
				}
			},


			songliwushow() {
				if (this.talkList.length >= this.configInfo.siliaoxianzhi && this.is_liaoguo == false) {
					this.msg('等待对方回复')
					return
				}
				this.popshow = true
			},

			faliwu(item, gif) {
				let that = this
				var message = '{"data":"' + item + '","sec":"' + gif + '","type":"liwuuser","fromid":"' + this
					.fromid + '","toid":"' +
					this.toid + '"}';

				let liwudata = item.replace(/\'/g, '"');
				let liwujosn = JSON.parse(liwudata)

				let inmsg = {
					is_self: true,
					content: item,
					gift: liwujosn,
					type: 'liwuuser',
					sec: gif,
					create_time: that.jintian
				};
				this.pushmsg(inmsg)
				this.paymp3('/static/fa.mp3', 0)
				console.log('传输到后台')
				this.save_message(message);
			},









			zhixing(msg) {
				let that = this
				if (msg.datatype == 'pipeitongzhi') {

				}
			},
			fazuju(item) {
				let that = this
				var message = '{"data":"' + item.detail + '","sec":"' + item.id + '","type":"text","fromid":"' + this
					.fromid + '","toid":"' +
					this.toid + '"}';

				if (this.talkList.length >= this.configInfo.siliaoxianzhi && this.is_liaoguo == false) {
					this.msg('等待对方回复')
					return
				}
				let inmsg = {
					is_self: true,
					content: item.detail,
					type: 'text',
					sec: item.id,
					create_time: that.jintian
				};
				this.pushmsg(inmsg)
				this.paymp3('/static/fa.mp3', 0)
				this.save_message(message);

				this.zujushow = false
				this.moreshow = false
			},
			async dakaijuju() {
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/zuju/getList',
					data: {
						key: this.zujukey
					}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						this.zujushow = true
						this.zujulist = result.data.data.data
					}
				}
			},



			async jubaopass() {
				let that = this;
				if (that.jubao_body == '') {
					this.msg('请输入举报理由')
					return
				}

				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/user/addReport',
					data: {
						goods_id: that.toid,
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


			closedPopup() {
				this.popshow = false
			},
			async info() {
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/chat/getChatTwoUser',
					data: {
						toid: that.toid,
						fromid: that.fromid
					}
				});

				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						if (result.data.data.is_liaoguo == 0) {
							that.is_liaoguo = false
						}
						that.is_liao = result.data.data.toInfo.is_liao
						that.qipaofrom = result.data.data.fromInfo.qipao
						that.qipaoto = result.data.data.toInfo.qipao
						that.to_is_online = result.data.data.toInfo.is_online
						that.userinfo = result.data.data
						that.toname = result.data.data.toInfo.nickname
						that.fromname = result.data.data.fromInfo.nickname
						that.tohead = result.data.data.toInfo.avatar
						that.fromhead = result.data.data.fromInfo.avatar
						that.totags = result.data.data.toInfo.tags
						that.pipei = result.data.data.toInfo.pipei
					} else {
						uni.showModal({
							title: '提示',
							content: result.data.msg,
							confirmText: '知道了',
							showCancel: false,
							success: function(res) {
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
					url: '/api/chat/changeNoRead',
					data: {
						toid: that.toid
					}
				});
			},
			async save_message(datassd) {
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/chat/save_message',
					data: datassd
				});
				if (result.data.code == 200) {
						this.$socket.send(datassd);
					}else{
						uni.showModal({
							title: '提示',
							content:result.data.msg ,
							confirmText: '去充值',
							success: function(res) {
								if (res.confirm) {
							this.navigateToFn({ url: '/minePages/gift/chongzhi', checkLogin: true })
								} else if (res.cancel) {
									console.log('用户点击取消');
								}
							}
						});
					}
				//暂时关闭聊天列表刷新
				uni.$emit('fasonglist', true)			
			},

			sendmsg() {

				if (!this.sendmsgBoy) {
					return
				}


				let that = this
				var message = '{"data":"' + this.sendmsgBoy + '","sec":"' + this.sec + '","type":"text","fromid":"' + this
					.fromid + '","toid":"' +
					this.toid + '"}';

				if (this.talkList.length >= this.configInfo.siliaoxianzhi && this.is_liaoguo == false) {
					this.msg('等待对方回复')
					return
				}
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
				this.isFocus = true
			},
			sendmp3(url, sec) {

				let that = this
				if (this.talkList.length >= this.configInfo.siliaoxianzhi && this.is_liaoguo == false) {
					this.msg('等待对方回复')
					return
				}

				let inmsg = {
					is_self: true,
					content: url,
					id: 1,
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
						let mp3url = data.data.file

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
					url: '/api/chat/load',
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
						var lst = Date.parse(this.talkList[i + 1].create_time.replace(/-/g, '/')) - Date.parse(this
							.talkList[i].create_time.replace(/-/g, '/'));
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
				if (this.talkList.length >= this.configInfo.siliaoxianzhi && this.is_liaoguo == false) {
					this.msg('等待对方回复')
					return
				}
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
								this.title = '正在录音中'
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
				// #ifdef APP-PLUS	
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
						this.isRecording = true
						this.startDate()
						recorderManager.start(recordOptions)
					} else {
						uni.showToast({
							title: '您拒绝了录音授权，请在应用设置中手动打开',
							icon: 'none',
						})
					}
				}
				// #endif			


				// #ifdef MP
				this.isRecording = true
				this.canSend = true
				console.log('小程序开始录音')
				this.startDate()
				recorderManager.start(recordOptions)
				// #endif


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
			album() {
				if (this.talkList.length >= this.configInfo.siliaoxianzhi && this.is_liaoguo == false) {
					this.msg('等待对方回复')
					return
				}
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
			camera() {
				if (this.talkList.length >= this.configInfo.siliaoxianzhi && this.is_liaoguo == false) {
					this.msg('等待对方回复')
					return
				}
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
					type: 'image',
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
						let avatar = data.data.file

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
				if (this.talkList.length >= this.configInfo.siliaoxianzhi && this.is_liaoguo == false) {
					this.msg('等待对方回复')
					return
				}

				let inmsg = {
					is_self: true,
					content: item,
					type: 'face',
					sec: 0,
					create_time: this.jintian
				};
				this.pushmsg(inmsg)
				this.paymp3('/static/fa.mp3', 0)
				var message = '{"data":"' + item + '","sec":"0","type":"face","fromid":"' + this
					.fromid + '","toid":"' +
					this.toid + '"}';
				this.save_message(message);
			},
			liwu(url) {
				this.liwusvgashow = true
				setTimeout(() => {
					this.bofangsvga(url)
				}, 500);
			},

			bofangsvga(url) {
				console.log('开始播放')
				this.$refs.svga.render(async (parser, player) => {
					const videoItem = await parser.load(url);
					await player.setVideoItem(videoItem);
					// 设置当前动画的循环次数，0代表无限循环 默认 0
					player.loops = 1
					player.clearsAfterStop = true
					// 开始播放动画，reverse = true 时则反向播放。
					player.startAnimation()
					// player.onPercentage((percentage) => {
					// 	// 由于有动画未完成时需要显示其他效果的需求，所以监听动画播放进度
					// 	// svga动画播放进度大于 70% 时，显示卡牌
					// 	if (percentage * 100 > 70) {
					// 		//this.svgaShow = false
					// 	}
					// })
					// 监听动画完成
					player.onFinished(() => {
						console.log('播放完毕')
						player.clear()
						this.liwusvgashow = false
					})
				})
			},

			longpress(e) {
				//
				uni.setClipboardData({
					data: e,
					success: function() {

					}
				});

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
		border-image-source: url(@/static/img/tnchat4.png);
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
			background-color: #00aa00;
			color: white;
			border-radius: 4px;
			width: 160rpx;
			height: fit-content;
			padding: 6px;
			margin-left: 12rpx;
			text-align: center;
		}
	}

	.bottom-emoji {
		position: relative;

		.emojis {

			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			overflow-y: scroll;
			box-sizing: border-box;

			.emoji {
				width: 20%;
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
		background-color: #ffffff;
		color: #000000;
		border-radius: 6px;
		box-sizing: border-box;
		height: 50rpx;
		line-height: 50rpx;
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




	.message {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;

		&__left {
			width: 20%;
		}

		&__middle {
			padding-left: 10rpx;
			padding-right: 40rpx;
		}

		&__right {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		&__name {
			font-size: 32rpx;
			margin-bottom: 8rpx;
		}

		&__content {
			font-size: 26rpx;
			color: #838383;
		}

		&__tips {
			&__icon {
				font-size: 36rpx;
				color: #AAAAAA;
			}
		}
	}



	//、、
</style>