<template>
	<view>	
	<tn-nav-bar fixed alpha customBack>
	  <view slot="back" class='tn-custom-nav-bar__back'>
	    <text class='icon tn-icon-left' @click="goBack"></text>
	   	<text class='icon tn-icon-home-capsule-fill' @click="gohome"></text>
	  </view>
	</tn-nav-bar>
		<!-- #ifdef MP -->
		<swiper :style="'width: '+ windowWidth +'px; height: '+ windowHeight +'px; background-color: #000000;'" :vertical="true" @animationfinish="animationfinish" @change="change" :current="current" :indicator-dots="false" @touchstart="mpTouchstart" @touchend="mpTouchend">
			<swiper-item v-for="(list,index) in dataList" :key="index">
				<view v-if="Math.abs(k-index)<=1">
					<view>
						<!-- 
						1.v-if：用于控制视频在节点的渲染数
						2.muted的默认值是 false，代表默认是禁音视频的
						3.http-cache默认开启视频缓存
						4.poster（封面（方案一））：这里的封面默认处理存储在阿里云的视频
						5.show-loading：这里默认去掉播放转圈的标志
						v-if="Math.abs(k-index)<=1"
						 -->
						<video
						v-if="isShow"
						:id="list._id+''+index"
						:loop="true"
						:muted="list.isplay"
						:controls="false"
						:http-cache="true"
						:page-gesture="false"
						:show-fullscreen-btn="false"
						:show-loading="false"
						:show-center-play-btn="false"
						:enable-progress-gesture="false"
						:src="list.src"
						@ended="ended"
						@click="tapVideoHover(list.state,$event)"
						:style="'width: '+ windowWidth +'px; height: '+ windowHeight +'px; background-color: #000000; z-index: -1;'"
						:poster="list.vod_img"
						></video>
						<!-- 
						1.这里是封面（方案二）：这里的封面可以自定义。
						2.也在代码中做了批注，两种方案可以共存，不会相互影响。
						-->
						<image
						v-if="!list.playIng"
						:src="list.src+'?x-oss-process=video/snapshot,t_100,f_jpg'"
						:style="'width: '+ windowWidth +'px; height: '+ windowHeight +'px; position: absolute;'"
						mode="aspectFit"
						></image>
					</view>
					<!-- 播放状态：pause 的时候就会暂停 -->
					<view class="videoHover" @click="tapVideoHover(list.state,$event)" :style="'width: '+ windowWidth +'px; height: '+ windowHeight +'px;'">
						<image v-if="list.state=='pause'" class="playState" src="@/static/img/index/play.png"></image>
					</view>
					
			
								<view class="videoHover" v-if="list.price>0&&list.is_buy==0"   :style="'width: '+ windowWidth +'px; height: '+ windowHeight +'px;'">
									<view class="" style=" 
							 margin-top: 100%;
					    margin-left: 20%;
					width:  160rpx;
					height: 160rpx;">
									<view  @click="goumai(list._id)">
										<view class="tn-bg-white tn-padding " style="opacity: 0.6;width: 250px;"> 付费视频,花费{{list.price}}{{list.moneyname}}</view>
									
										</view>
									</view>
									<view class="" style="  
			  margin-left: 40%;
			width:  160rpx;
			height: 160rpx;">						
									<view  @click="goumai(list._id)">
									
										<tn-button backgroundColor="#FFF00D" padding="40rpx 0" width="90%" shadow fontBold>
										
											<text class="tn-color-black">购买</text>
										</tn-button>
										</view>
									</view>
									
									
								</view>
								
					
				<view class="userInfo">
					<!-- 1.头像 -->
					<image @click="navigateToFn({ url: '/circlePages/blogger_other?id='+list.userID, checkLogin: false })" class="userAvatar" :src="list.href" mode="aspectFill"></image>
					<!-- 2.点赞 -->
					<view @click="cLike(list.like,list._id);" style="opacity: 0.9;">
						<image v-if="list.like" src="@/static/img/index/xin.png" style="width: 40px; height: 40px; position: absolute; right: 6px;"></image>
						<image v-if="!list.like" src="@/static/img/index/xin-2.png" style="width: 40px; height: 40px; position: absolute; right: 6px;"></image>
						
					</view>
					<view style="color: #FFFFFF; margin-top: 40px; font-size: 14px; text-align: center;  font-weight: bold;" :class="{'likeNumActive':list.like}">{{list.like_n}}</view>
					<!-- 3.评论 -->
					<view class="comment" @click="toComment(index,list._id)" style="opacity: 0.9; margin-top: 10px;">
						<image src="@/static/img/index/liaotian-2.png" style="width: 35px; height: 35px; position: absolute; right: 7px;"></image>
						
					</view>
					<view style="color: #FFFFFF; margin-top:50px; font-size: 14px; font-weight: bold; text-align: center; ">{{list.sms_n}}</view>
					<!-- 4.分享 -->
					<!-- #ifdef APP||H5 -->						
					<view @click="appshare()" style="opacity: 0.9; margin-top: 10px;">
						<image src="@/static/img/index/share-fill.png" style="width: 40px; height: 40px; position: absolute; right: 5px;"></image>
						
					</view>
					<view style="color: #FFFFFF; margin-top:50px; font-size: 14px; text-align: center; font-weight: bold; ">分享</view>
					
					<!-- #endif -->
					<!-- #ifdef MP -->
					<view class="" style="opacity: 0.9; margin-top: 10px;">
						<button
						  class="button"
						  open-type="share"							
						>
						<image src="@/static/img/index/share-fill.png" style="width: 40px; height: 40px; position: absolute; right: 5px;"></image>
					
							</button>
					
					
					</view>
					<!-- #endif -->
					
					<!-- <view @click="dealVoice" style="margin-top: 17px;">
						<view style="width: 48px; height: 48px; border-radius: 50px; position: absolute; right: 2.5px;">
							<image :style="'width: 48px; height: 48px; border-radius: 50px; transform: rotate('+ rotates +'deg);'" src="@/static/img/index/bfq.png" mode="aspectFill"></image>
							
						</view>
					</view> -->
				</view>
					<!-- 最底下的文字部分 -->
					
					<view class="content">						
						<view class="userName" :style="'width: '+ (windowWidth - 90) +'px;'">@{{list.username}}</view>
						<text class="words tn-padding-top" :style="'width: '+ (windowWidth - 90) +'px;'">{{list.msg}}</text>
						<view class="words tn-color-gray" style="font-size: 12px;" :style="'width: '+ (windowWidth - 90) +'px;'">{{list.date}} IP归属地{{list.city}}</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
		<!-- #endif -->
		<!-- #ifdef H5 -->
		<swiper :style="'width: '+ windowWidth +'px; height: '+ windowHeight +'px; background-color: #000000;'" :vertical="true" @animationfinish="animationfinish" @change="change" :current="current" :indicator-dots="false" :duration="duration">
			<swiper-item v-for="(list,index) in dataList" :key="index">
				<view v-if="Math.abs(k-index)<=1">
					<view>
						<!-- 
						1.v-if：用于控制视频在节点的渲染数
						2.muted的默认值是 false，代表默认是禁音视频的
						3.http-cache默认开启视频缓存
						4.poster（封面（方案一））：这里的封面默认处理存储在阿里云的视频
						5.show-loading：这里默认去掉播放转圈的标志
						v-if="Math.abs(k-index)<=1"
						 -->
						<video
						v-if="isShow"
						:id="list._id+''+index"
						:loop="true"
						:muted="list.isplay"
						:controls="false"
						:http-cache="true"
						:page-gesture="false"
						:show-fullscreen-btn="false"
						:show-loading="false"
						:show-center-play-btn="false"
						:enable-progress-gesture="false"
						:src="list.src"
						@ended="ended"
						@click="tapVideoHover(list.state,$event)"
						:style="'width: '+ windowWidth +'px; height: '+ windowHeight +'px; background-color: #000000; z-index: -1;'"
						:poster="list.vod_img"
						></video>
						<!-- 
						1.这里是封面（方案二）：这里的封面可以自定义。
						2.也在代码中做了批注，两种方案可以共存，不会相互影响。
						-->
						<image
						v-if="!list.playIng"
						:src="list.src+'?x-oss-process=video/snapshot,t_100,f_jpg'"
						:style="'width: '+ windowWidth +'px; height: '+ windowHeight +'px; position: absolute;'"
						mode="aspectFit"
						></image>
					</view>
					<!-- 播放状态：pause 的时候就会暂停 -->
					<view class="videoHover" @click="tapVideoHover(list.state,$event)" :style="'width: '+ windowWidth +'px; height: '+ windowHeight +'px;'">
						<image v-if="list.state=='pause'" class="playState" src="@/static/img/index/play.png"></image>
					</view>
					
					
					<view class="videoHover" v-if="list.price>0&&list.is_buy==0"   :style="'width: '+ windowWidth +'px; height: '+ windowHeight +'px;'">
						<view class="" style=" 
				 margin-top: 100%;
		    margin-left: 20%;
		width:  160rpx;
		height: 160rpx;">
						<view  @click="goumai(list._id)">
							<view class="tn-bg-white tn-padding " style="opacity: 0.6;width: 250px;"> 付费视频,花费{{list.price}}{{list.moneyname}}</view>
						
							</view>
						</view>
						<view class="" style="  
    margin-left: 40%;
  width:  160rpx;
  height: 160rpx;">						
						<view  @click="goumai(list._id)">
						
							<tn-button backgroundColor="#FFF00D" padding="40rpx 0" width="90%" shadow fontBold>
							
								<text class="tn-color-black">购买</text>
							</tn-button>
							</view>
						</view>
						
						
					</view>
					
					
					
					
					
					<view class="userInfo">
						<!-- 1.头像 -->
						<image @click="navigateToFn({ url: '/circlePages/blogger_other?id='+list.userID, checkLogin: false })" class="userAvatar" :src="list.href" mode="aspectFill"></image>
						<!-- 2.点赞 -->
						<view @click="cLike(list.like,list._id);" style="opacity: 0.9;">
							<image v-if="list.like" src="@/static/img/index/xin.png" style="width: 40px; height: 40px; position: absolute; right: 6px;"></image>
							<image v-if="!list.like" src="@/static/img/index/xin-2.png" style="width: 40px; height: 40px; position: absolute; right: 6px;"></image>
							
						</view>
						<view style="color: #FFFFFF; margin-top: 40px; font-size: 14px; text-align: center;  font-weight: bold;" :class="{'likeNumActive':list.like}">{{list.like_n}}</view>
						<!-- 3.评论 -->
						<view class="comment" @click="toComment(index,list._id)" style="opacity: 0.9; margin-top: 10px;">
							<image src="@/static/img/index/liaotian-2.png" style="width: 35px; height: 35px; position: absolute; right: 7px;"></image>
							
						</view>
						<view style="color: #FFFFFF; margin-top:50px; font-size: 14px; font-weight: bold; text-align: center; ">{{list.sms_n}}</view>
						<!-- 4.分享 -->
						<!-- #ifdef APP||H5 -->						
						<view @click="appshare()" style="opacity: 0.9; margin-top: 10px;">
							<image src="@/static/img/index/share-fill.png" style="width: 40px; height: 40px; position: absolute; right: 5px;"></image>
							
						</view>
						<view style="color: #FFFFFF; margin-top:50px; font-size: 14px; text-align: center; font-weight: bold; ">分享</view>
						
						<!-- #endif -->
						<!-- #ifdef MP -->
						<view class="" style="opacity: 0.9; margin-top: 10px;">
							<button
							  class="button"
							  open-type="share"							
							>
							<image src="@/static/img/index/share-fill.png" style="width: 40px; height: 40px; position: absolute; right: 5px;"></image>
						
								</button>
						
						
						</view>
						<!-- #endif -->
						
						<!-- <view @click="dealVoice" style="margin-top: 17px;">
							<view style="width: 48px; height: 48px; border-radius: 50px; position: absolute; right: 2.5px;">
								<image :style="'width: 48px; height: 48px; border-radius: 50px; transform: rotate('+ rotates +'deg);'" src="@/static/img/index/bfq.png" mode="aspectFill"></image>
								
							</view>
						</view> -->
					</view>
					<!-- 最底下的文字部分 -->
					<view class="content">
						
						<view class="userName" :style="'width: '+ (windowWidth - 90) +'px;'">@{{list.username}}</view>
						<text class="words tn-padding-top" :style="'width: '+ (windowWidth - 90) +'px;'">
						<rich-text :nodes="list.msg"></rich-text>
						</text>
						<view class="words tn-color-gray" style="font-size: 12px;" :style="'width: '+ (windowWidth - 90) +'px;'">{{list.date}} IP归属地{{list.city}}</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
		<!-- #endif -->
		<login-fn :is-show-login="loginBoxFlag" @loginSuccessCallback="refreshFn" @close="closeGlobalLoginFn">
		</login-fn>
		<uni-popup ref="sharepopup" type="bottom">
			<share-btn :sharedataTemp="sharedata" @jubaolist="jubaoshowchick" @haobaoche="share_qrcode"></share-btn>
		</uni-popup>
		
		
		<tn-popup v-model="showpinglun" width="80%" height="50%" mode="bottom" :borderRadius="30" :closeBtn="true"
			:maskCloseable="true" @close="closedPopup">
		
	
		
		<view class="tn-flex tn-flex-row-between ">
			<view class="justify-content-item tn-margin tn-text-bold">
				最新评论 <text class="tn-padding-xs">({{content.length}})</text>
			</view>
		</view>
		<!-- 评论 -->
	
		<scroll-view class="" scroll-y scroll-with-animation style="height: 100%;">
			<view class="empty__item" v-if="content.length==0" style="margin-top: 100px;" @click="guangchang()">
				<tn-empty icon="/static/images/no.png" text="暂无评论" >			
				</tn-empty>
			</view>
			
		<view class="tn-margin" style="padding-bottom:100px;" v-if="content.length>0">
		
			<view v-for="(item,pinglun) in content" :key="pinglun">
				<!-- 图标logo/头像 -->
				<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-top-xl tn-margin-bottom-sm">
					<view class="justify-content-item">
						<view class="tn-flex tn-flex-col-center tn-flex-row-left">
							<view class="logo-pic tn-shadow"
								@click="navigateToFn({ url: '/circlePages/blogger_other?id='+item.user_id, checkLogin: false })">
								<view class="logo-image">
									<view class="tn-shadow-blur"
										:style="'background-image:url('+item.avatar+');width: 60rpx;height: 60rpx;background-size: cover;'">
									</view>
								</view>
							</view>
							<view class="tn-padding-right tn-padding-left-sm">
								<view class="tn-padding-right tn-text-df tn-text-bold tn-color-black"
									@click="navigateToFn({ url: '/circlePages/blogger_other?id='+item.user_id, checkLogin: false })">
		
		
									<text v-if="item.user_id==item.fa_user_id" class="tn-color-red">作者</text>
									{{item.nickname}}
								</view>
								<view class="tn-padding-right tn-text-ellipsis  tn-color-gray"
									style="padding-top: 5rpx;">
									{{timeChange(item.create_time)}} 来自{{item.city}}
									<text @click="hiufu(item.nickname,item.id,pinglun)"
										class=" tn-color-blue tn-margin-left tn-text-xs">
										回复
									</text>
									<text @click="delcomment(item.id,'del',0,0,pinglun,0)"
										class=" tn-color-blue tn-margin-left"
										v-if="item.user_id==item.ziji_id||item.fa_user_id==item.ziji_id">
										删除
									</text>
									<text @click="top(item.id,'top',1,0,pinglun,0)"
										class=" tn-color-blue tn-margin-left"
										v-if="item.is_ding==0&&item.fa_user_id==item.ziji_id">
										置顶
									</text>
									<text @click="top(item.id,'top',0,0,pinglun,0)"
										class=" tn-color-blue tn-margin-left"
										v-if="item.is_ding==1&&item.fa_user_id==item.ziji_id">
										取消置顶
									</text>
								</view>
							</view>
						</view>
					</view>
					<view class="justify-content-item tn-flex-row-center tn-flex-col-center tn-color-gray"
						@click="likeComment(item.id,pinglun,0,0)">
						<view class="tn-text-center">
							<text class="tn-icon-praise-fill tn-padding-xs "
								:class="item.is_like?'tn-color-red':''"></text>
						</view>
						<view class="tn-text-center">
							<text class="">{{item.like_num}}</text>
						</view>
					</view>
				</view>
		
				<view class="" style="margin: 20rpx 30rpx 30rpx 80rpx;"
					@click="hiufu(item.nickname,item.id,pinglun)">
					<text v-if="item.is_ding" style="padding: 3px 10px;
						font-size: 12px;
						height: 18px;
						margin: 5px 10px 5px 0;
						width: auto;" class="tn-bg-gray--light tn-btn-class tn-btn tn-round tn-color-red">
						作者置顶
					</text>
					
				<view class="tnchat7 " style="max-width: 62vw;" :style="'border-image-source:url('+item.qipao+')'" v-if="item.qipao">
				<rich-text :nodes="item.content"></rich-text>
					</view>			
				<view class="" style="max-width: 62vw;" v-else>
				<rich-text :nodes="item.content"></rich-text>
					</view>			
				
		
				</view>
		
				<view v-for="(itemhuifu,pinglunhuifu) in item.child" :key="pinglunhuifu"
					class="tn-bg-gray--light tn-padding-sm"
					style="margin: 8rpx 30rpx 8rpx 80rpx;border-radius: 10rpx;">
					<view>
						<text class="tn-color-gray tn-padding-right-xs ">
							<text v-if="itemhuifu.user_id==itemhuifu.fa_user_id" class="tn-color-red">作者</text>
		
							{{itemhuifu.nickname}}:
						</text>
						<text class="tn-text-bold " v-if="itemhuifu.to_name">回复</text>
						<text class="tn-color-gray " v-if="itemhuifu.to_name">:{{itemhuifu.to_name}}</text>
						<text class="" style="line-height: 40rpx;">:{{itemhuifu.content}}</text>
					</view>
		
		
					<view class="tn-flex tn-flex-row-between tn-margin-top-xs">
						<view class="justify-content-item  tn-color-gray" style="padding-top: 5rpx;">
							<text @click="delcomment(itemhuifu.id,'del',0,pinglunhuifu,pinglun,1)"
								class=" tn-color-blue tn-margin-right"
								v-if="itemhuifu.user_id==itemhuifu.ziji_id||item.fa_user_id==itemhuifu.ziji_id">
								删除
							</text>
		
							<text style="font-size: 12px;">{{timeChange(itemhuifu.create_time)}} 来自{{item.city}}
							</text>
							<text @click="hiufu(itemhuifu.nickname,item.id,pinglun)"
								class=" tn-color-blue tn-margin-left tn-text-xs">
								回复
							</text>
		
						</view>
						<view class="justify-content-item  tn-color-gray"
							@click="likeComment(itemhuifu.id,pinglun,pinglunhuifu,1)">
							<text class="tn-padding-xs">{{itemhuifu.like_num}}</text>
							<text class="tn-icon-praise-fill" :class="itemhuifu.is_like?'tn-color-red':''"></text>
						</view>
					</view>
					<view>
		
					</view>
		
				</view>
			</view>
		</view>
	
			</scroll-view>
		
			
	
			<view class="input-box tn-flex tn-flex-row-between">			
			
				    <view class="justify-content-item tn-margin-left tn-margin-right" style="width: 100%;" >
				      <view class="tn-bg-gray--light tn-flex tn-flex-col-center" style="border-radius: 100rpx;padding: 10rpx 20rpx 10rpx 20rpx;">
				        <text class="tn-icon-search justify-content-item tn-padding-right-xs tn-color-gray tn-text-lg"></text>
				        <input class="justify-content-item" auto-height="true" @blur="lostfocus" :adjust-position="true" v-model="sendmsgBoy"
								style="font-size: 14px;" cursor-spacing="10" :placeholder="huifubody"
								placeholder-style="font-size: 14px;" :focus="is_focus"  ></input>
				      </view>
				    </view>
				    
				     <view class="justify-content-item">
				      <view class="justify-content-item tn-text-center" @tap="sendmsg()">
				        <tn-button fontColor="#000000" :shadow="true" backgroundColor="tn-main-gradient-yellow--reverse"   shape="round" padding="20rpx 20rpx" width="150rpx" shadow fontBold >
				          <text >发送</text>
				        </tn-button>
						
				      </view>
				    </view>
			
			
				
			
			</view>
			

				
		</tn-popup>
		
		<tn-modal width="80%" v-model="jubaoshow" backgroundColor="#E4E9EC" padding="30rpx 20rpx" :radius="25"
			title="举报" :showCloseBtn="false"  :maskCloseable="true" :zoom="true" :custom="true">
		
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
		
		
	</view>
</template>

<script>	
	import {
		host
	} from '@/siteinfo.js'
	let audo = uni.createInnerAudioContext()
	audo.loop = true
	export default {
		data() {
			return {
				jubao_body:'',
				jubaoshow:false,
				sharedata: [],
				goods_id:0,
				pid:0,
				huifubody: '说点啥吧',
				is_focus: false,
				sendmsgBoy: '',
				sendmsgBoy_huifuname: '',
				pingpage:1,
				id:0,
				content:[],
				showpinglun:false,
				loginBoxFlag:false,
				windowWidth: 0,
				windowHeight: 0,
				platform: "",
				model: "",
				deleteHeight: 0,
				dataList: [],
				k: 0,
				oldVideo: "",
				voice: "",
				timeout: "",
				current: 0,
				boxStyle:{//视频，图片封面样式🌟💗
					'height': 0,
					'width': 0,
				},
				
				videoID: "",
				isShow: false,
				
				showPlay: false,//转轮显示控制
				rotates: 0,//转轮旋转角度
				rotateTime: "",//转轮递归事件控制
				xrotats: "",
				
				mpcleartime: "",
				
				isClick: false,
				
				changeTimeout: "",
				mptime: 0,
				mpstartTime: 0,
				
				duration: 500,
				page:2
			}
		},
		components:{
			
		},
		watch:{
			async k(k,old_k){
				// console.log(k, old_k)
				// #ifndef MP
				this.clearToTime();
				// #endif
				this.isShow = false
				this.dataList[old_k].playIng = false//如果视频暂停，就加载封面
				this.dataList[old_k].isplay = true
				this.dataList[old_k].state = 'pause'
				console.log('预留第' + (old_k + 1) + '个视频：' + this.dataList[old_k]._id+''+old_k)
				// 2.0版本已经去掉了下面这一句，视频不用暂停，只需要把声音禁止就行
				uni.createVideoContext(this.dataList[old_k]._id + '' + old_k,this).stop()//如果视频暂停，那么旧视频停止，这里的this.dataList[old_k]._id + '' + old_k，后面加 old_k 是为了每一个视频的 id 值不同，这样就可以大程度的避免串音问题
				console.log('已经暂停 --> 第' + (old_k + 1) + '个视频～')//提示
				this.dataList[k].state = 'play'
				this.isShow = true
				this.xrotats = setTimeout(()=>{
					this.showPlay = true;
					// #ifndef MP
					this.rotateX();
					// #endif
				},200)
				// #ifdef MP
				// 如果是小程序端
				clearTimeout(this.changeTimeout);
				this.dataList[k].isplay = false
				setTimeout(()=>{
					this.dataList[k].playIng = true
				},250)
				if(this.mptime < 0.2){
					this.changeTimeout = setTimeout(()=>{
						uni.createVideoContext(this.dataList[this.k]._id+''+this.k,this).play()
					},1400)
				} else {
					uni.createVideoContext(this.dataList[this.k]._id+''+this.k,this).play()
				}
				// #endif
				// #ifdef H5
				this.dataList[k].isplay = true
				audo.src = this.dataList[k].src
				if(this.isClick){
					setTimeout(()=>{
						if (typeof WeixinJSBridge == "undefined") {
							setTimeout(()=>{
								audo.play()
								uni.createVideoContext(this.dataList[k]._id+''+k,this).seek(0)
								uni.createVideoContext(this.dataList[k]._id+''+k,this).play()
								setTimeout(()=>{
									this.dataList[k].playIng = true
								},650)
							},500)
						} else {
							WeixinJSBridge.invoke('getNetworkType', {}, e => {
								setTimeout(()=>{
									audo.play()
									uni.createVideoContext(this.dataList[k]._id+''+k,this).seek(0)
									uni.createVideoContext(this.dataList[k]._id+''+k,this).play()
									setTimeout(()=>{
										this.dataList[k].playIng = true
									},850)
								},200)
							})
						}
					},200)
				} else {
					audo.pause()
					this.dataList[k].state = 'pause'
					uni.createVideoContext(this.dataList[k]._id+''+k,this).seek(0)
					uni.createVideoContext(this.dataList[k]._id+''+k,this).pause()
				}
				// #endif
				var p = k+1;
				console.log('预加载第' + (p + 1) + '个视频：' + this.dataList[p]._id+''+p)
			}
		},
		onLoad(option) {
				let that = this
			uni.$off('setLoginBoxFlag');
			uni.$on('setLoginBoxFlag', loginBoxFlag => {
				that.loginBoxFlag = loginBoxFlag;
			});
			
			if (option.id) {
				this.id = Number(option.id)
			}
			this.platform = uni.getSystemInfoSync().platform
			this.model = uni.getSystemInfoSync().model
			var model = this.model
			if(this.platform == 'ios' && (model !== 'iPhone6' || model !== 'iPhone6s' || model !== 'iPhone7' || model !== 'iPhone8')){
				this.deleteHeight = 0//有 tabbar的 修改这里可以改变视频高度
			}
			this.windowWidth = uni.getSystemInfoSync().windowWidth
			this.windowHeight = uni.getSystemInfoSync().windowHeight
			this.boxStyle.width = this.windowWidth + 'px'//给宽度加px
			this.boxStyle.height = this.windowHeight - this.deleteHeight;//有 tabbar的 修改这里可以改变视频高度
			this.get() //刚进入页面加载数据
			// #ifndef MP
			this.rotateX();
			// #endif
		},
		onUnload() {
		// #ifdef MP
		this.dataList[this.k].state = 'pause';
		uni.createVideoContext(this.dataList[this.k]._id+''+this.k,this).pause()
		// #endif
		// #ifdef H5
		if(this.isClick){
			this.dataList[this.k].state = 'pause';
			uni.createVideoContext(this.dataList[this.k]._id+''+this.k,this).pause()
			audo.pause()
		}
		// #endif
		console.log('到后台');
		},
		onShow(){
			console.log('回到前台');
			if(this.dataList.length !== 0){
				// #ifdef MP
				this.dataList[this.k].state = 'play';
				uni.createVideoContext(this.dataList[this.k]._id+''+this.k,this).play()
				// #endif
				// #ifdef H5
				if(this.isClick){
					this.dataList[this.k].state = 'play';
					uni.createVideoContext(this.dataList[this.k]._id+''+this.k,this).play()
					audo.play()
				}
				// #endif
				if (this.dataList[this.k].price>0&&this.dataList[this.k].is_buy==0){
					 setTimeout(()=>{
						uni.createVideoContext(this.dataList[this.k]._id,this).pause()	
					    audo.pause()
					},0)				
				}	
			}
			//付费
			
		},
		onHide(){
			// #ifdef MP
			this.dataList[this.k].state = 'pause';
			uni.createVideoContext(this.dataList[this.k]._id+''+this.k,this).pause()
			// #endif
			// #ifdef H5
			if(this.isClick){
				this.dataList[this.k].state = 'pause';
				uni.createVideoContext(this.dataList[this.k]._id+''+this.k,this).pause()
				audo.pause()
			}
			// #endif
			console.log('到后台');
		},
		methods: {
			
			async likeComment(id, index, cindex, type) {
				
				console.log(id, index, cindex, type)
				if (!this.isLogin) {
					this.loginBoxFlag = true
					return false;
				}
				let result = await this.getlikeComment(id)
				if (type == 0) {
					if (result.msg == '点赞成功') {
						this.content[index].is_like = true
						this.content[index].like_num += 1
			
					} else {
						this.content[index].is_like = false
						this.content[index].like_num -= 1
					}
				} else {
					if (result.msg == '点赞成功') {
						this.content[index].child[cindex].is_like = true
						this.content[index].child[cindex].like_num += 1
			
					} else {
						this.content[index].child[cindex].like_num -= 1
						this.content[index].child[cindex].is_like = false
					}
			
				}
			
				this.msg(result.msg)
			},
			
			
		lostfocus() {
			this.is_focus = false
		},
		
		huifuzhuti() {
			if (this.is_focus == false) {
				this.callerhuifu()
			}
		},
		
		callerhuifu() {
			this.huifubody = '说点啥吧'
			this.sendmsgBoy_huifuname = ''
			this.huifuindex = 0
			this.sendmsgBoy = ''
			this.pid = 0
			this.is_focus = false
		
		
		},
		
		hiufu(name, pid, index) {
			this.huifubody = '回复：' + name
			this.sendmsgBoy_huifuname = name
			this.huifuindex = index
			this.pid = pid
			this.is_focus = true
		},
			mpTouchend(){
				this.mptime = (new Date()/1000) - this.mpstartTime;
			},
			mpTouchstart(){
				this.mpstartTime = (new Date()/1000);
			},
			dealVoice(){
				// uni.showToast({
				// 	title: '处理声音',
				// 	icon: 'none'
				// })
			},
			clearToTime(){
				//清理定时器
				for(let i=0;i<20;i++){
					clearTimeout(this.rotateTime);
					clearTimeout(this.xrotats);
					this.showPlay = false;
					this.rotates = 0;
				}
			},
			clearTime(){
				//清理定时器
				for(let i=0;i<20;i++){
					clearTimeout(this.rotateTime);
					clearTimeout(this.xrotats);
				}
			},
			rotateX(){
				// clearTimeout(this.rotateTime);
				this.rotateTime = setTimeout(()=>{
					this.rotateX();
					this.showPlay = true;
					this.rotates += 1;
				},30)
			},
			closeScrollview(){
				// 点击评论里面的叉叉，就会关闭评论
				this.$refs.pinglun.close();
			},
			ended(){
				// 1.播放当前视频结束时触发，自动切换下一个视频
				// this.current = this.k+1
			},
			//点击播放&&暂停
			tapVideoHover(state,event){
				console.log('state--',state);				
				if (this.dataList[this.k].price>0&&this.dataList[this.k].is_buy==0){
					return
				}	
				if(state=='play'||state=='continue'){
					this.dataList[this.k].state = 'pause';
				}else{
					this.dataList[this.k].state = 'continue';
				}
			
				
					
				
				if(this.dataList[this.k].state == 'continue'){
					this.isClick = true;
					this.dataList[this.k].playIng = true
					uni.createVideoContext(this.dataList[this.k]._id+''+this.k,this).play();//暂停以后继续播放
					// #ifdef MP
					this.dataList[this.k].isplay = false
					// #endif
					// #ifdef H5
					audo.play()
					// #endif
				}
				if(this.dataList[this.k].state == 'pause'){
					uni.createVideoContext(this.dataList[this.k]._id+''+this.k,this).pause();//暂停以后继续播放
					// #ifdef MP
					this.dataList[this.k].isplay = true
					// #endif
					// #ifdef H5
					audo.pause()
					// #endif
				}
			},
			change(event){
				this.k = event.detail.current
			},
			animationfinish(event){
				// 1.这里进行判断，如果是最后一个视频就进入 get() 方法加载视频进入列表
				if(this.k == this.dataList.length - 1){
					this.GET()
				}
			},
			//每一组结束时新的请求
			GET(){
				
				let headerObj = {};
				if (uni.getStorageSync('token')) {
					headerObj.token = this.globalToken				
				}
				uni.request({
					url: host+'/api/four/vod',
					method: 'POST',
					data:{					
						page: this.page++
					},
					header: {
						...headerObj,					
					},
					success: (res) => {
						var msg = res.data.data.data
						// 2.这里把视频添加到视频列表
						for (let i = 0; i < msg.length; i++) {
							this.dataList.push(msg[i])
						}
					}
				})
			},
			get(){
				// 1.这里引入后端请求数据
				// var msg = userList
				let headerObj = {};
				if (uni.getStorageSync('token')) {
					headerObj.token = this.globalToken				
				}
				uni.request({
					url: host+'/api/four/vod',
					method: 'POST',
					data:{
						id:this.id,
						page: 1
					},
					header: {
						...headerObj,					
					},
					success: (res) => {
						this.isShow = false;
						var msg = res.data.data.data
						// 2.这里把视频添加到视频列表
						for (let i = 0; i < msg.length; i++) {
							this.dataList.push(msg[i])
						}
						// 3.播放当前视频
						setTimeout(()=>{
							this.isShow = true;
							// #ifdef H5
							this.dataList[this.k].isplay = true
							// #endif
							// #ifdef MP
							// 如果是小程序端
							this.dataList[this.k].isplay = false
							this.dataList[this.k].state = 'play'
							// #endif
							this.dataList[this.k].playIng = true
							setTimeout(()=>{
								// #ifdef H5
								uni.createVideoContext(this.dataList[this.k]._id+''+this.k,this).seek(0)
								uni.createVideoContext(this.dataList[this.k]._id+''+this.k,this).pause()
								this.dataList[this.k].state = 'pause';
								audo.src = this.dataList[this.k].src;
								// #endif
								// #ifdef MP
								uni.createVideoContext(this.dataList[this.k]._id+''+this.k,this).play()
								// #endif
							},500)
						},200)
						this.videoID = this.dataList[this.k]._id
					}
				})
			},
			share(){
				uni.showToast({
					title: '分享',
					icon: 'none'
				})
			},
			closedPopup() {
				this.showpinglun = false
			},
			toComment(index,id){				
				uni.showToast({
					title: '加载中...',
					icon: 'none',
					position: 'bottom',
					duration: 300
				})
			
				this.showpinglun=true
				this.goods_id=id
				this.getpinglun(id);
				//this.$refs.pinglun.open('bottom')
			},	
			moregetpinglun(){
			
			},
			getpinglun(id){	
				this.pingpage=1
					let headerObj = {};
					if (uni.getStorageSync('token')) {
						headerObj.token = this.globalToken				
					}
					uni.request({
					url: host+'/api/index/goodsCommentList',
						method: 'POST',
						data:{
							id:id,
							page:this.pingpage
						},
						header: {
							...headerObj,					
						},
						success: (res) => {
							var msg = res.data.data.data
							this.content=msg
						}
					})
				
			},
			cLike(sss,id){
				if (!this.isLogin) {
					this.loginBoxFlag = true
					return false;
				}		
				this.dianzantiezi(id,this.dataList[this.k].like);	
				this.dataList[this.k].like = !this.dataList[this.k].like
				const video = this.dataList[this.k];
				sss?video.like_n -= 1:video.like_n += 1;
						
			},
			async dianzantiezi(id,like) {			
				if (!this.isLogin) {
					this.loginBoxFlag = true
					return false;
				}			
				const shaya = {
					id: id,	
					is_like:like			
				}
			
				uni.$emit('onlist_change', shaya)
				
			let result = await this.flowgoods(id)
			},
			async sendmsg() {			
			
				let that = this;
				if (!this.isLogin) {
					this.loginBoxFlag = true
					return false;
				}
				if (that.sendmsgBoy == '') {
					that.is_focus = true
					that.msg('说点啥呗')
					return
				}
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/user/addGoodsComment',
					data: {
						goods_id:this.goods_id,
						content: that.sendmsgBoy,
						pid: that.pid,
						to_name: that.sendmsgBoy_huifuname
					}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						if (that.content.length == 0) {
							//that.mescroll.resetUpScroll();
							//that.mescroll.removeEmpty()
						}
						if (that.pid == 0) {						
							that.content = result.data.data.concat(that.content);
						} else {
							console.log(that.content[that.huifuindex])
							if (that.content[that.huifuindex].child.length==0){
								that.content[that.huifuindex].child=result.data.data
							}else{							
							that.content[that.huifuindex].child = result.data.data.concat(that.content[that.huifuindex].child);
							}
						}
			
				
			
						that.commentCount++
						that.callerhuifu()
						uni.showToast({
							icon: 'none',
							title: result.data.msg
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
			appshare() {			
				let sharedata = {
					type: 1,
					strShareUrl:this.dataList[this.k].share_url,
					strShareTitle: this.dataList[this.k].share_title,
					strShareSummary: this.dataList[this.k].share_sub,
					strShareImageUrl:this.dataList[this.k].share_img,
				}
				this.sharedata = sharedata
				this.$refs.sharepopup.open();			
			},
			jubaoshowchick() {			
				this.jubaoshow = true
				this.$refs.sharepopup.close();
			},
			share_qrcode() {			
				this.sharelist()
				this.show_poster=true
				this.$refs.sharepopup.close();	
					if (!this.path){	
					setTimeout(() => {
					this.toSave()
					}, 500);
					}
				
			},
			
			async goumai(id) {
				let that = this;
				if (!this.isLogin) {
					this.loginBoxFlag = true
					return false;
				}
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/user/buy_goods',
					data: {
						id:id
					}
				});
			
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
			
						if (result.data.msg == '余额不足') {
							that.chongzhiis = true
						}
						this.msg(result.data.msg)
						this.dataList[this.k].is_buy=1
						// #ifdef MP
						this.dataList[this.k].state = 'play';
						uni.createVideoContext(this.dataList[this.k]._id+''+this.k,this).play()
						// #endif
						// #ifdef H5
						if(this.isClick){
							this.dataList[this.k].state = 'play';
							uni.createVideoContext(this.dataList[this.k]._id+''+this.k,this).play()
							audo.play()
						}
						// #endif
					}
				}
			},
			sharelist(){
				console.log(this.item)
			
				this.posterObj.views=[					
						{
						type: 'image',
						src: this.item.userAvatar,
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
						text: this.item.userName,
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
						text: '发布了一条有趣的动态',
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
						text: this.item.share_url,
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
					},
					{
						type: 'image',
						src: this.item.share_img,
						css: {
							left: '32rpx',
							top: '384rpx',					
							width: '90%',							
							borderRadius: '16rpx'
						}
					},
					]
			},
			
			
			
			
			previewImg(){
				
				uni.previewImage({
					current:this.path,
					urls: [this.path]
				});
			},
			toSave() {			
				uni.showLoading({
					title:'海报生成中',
				})
				const painter = this.$refs.painter;
				painter.canvasToTempFilePath().then(res => {
					this.path = res.tempFilePath;	
								setTimeout(() => {
								uni.hideLoading()
								}, 1000);
				
				});
			},
			
			async jubaopass() {
				let that = this;
				if (!this.isLogin) {
					this.loginBoxFlag = true
					return false;
				}
				
				if (that.jubao_body==''){
					this.msg('请输入举报理由')
					return
				}	
				
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/user/addReport',
					data: {
						goods_id: that.goods_id,
						type:0,
						content:that.jubao_body
					}
				});
			
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						that.jubao_body=''
						this.msg(result.data.msg)
						this.jubaoshow=false
					}
				}
			},
			top(id, type, num, ziindex, index, is_zi) {
			
				let typename = ''
				if (num == 0) {
					typename = '取消'
				}
				let that = this
				uni.showModal({
					title: '提示',
					content: '确定要' + typename + '置顶该条评论吗？',
					success: function(res) {
						if (res.confirm) {
							that.editcommet(id, type, num, ziindex, index, is_zi)
						} else if (res.cancel) {
			
						}
					}
				});
			},
			delcomment(id, type, num, ziindex, index, is_zi) {
			
			
			
				let that = this
				uni.showModal({
					title: '提示',
					content: '确定要删除该条评论吗？',
					success: function(res) {
						if (res.confirm) {
							that.editcommet(id, type, num, ziindex, index, is_zi)
						} else if (res.cancel) {
			
						}
					}
				});
			},
			
			async editcommet(id, type, num, ziindex, index, is_zi) {
				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/user/editcomment',
					data: {
						id: id,
						type: type,
						num: num,
						goods_id: that.id
					}
				});
			
			
				if (result.statusCode == 200) {
				  if (result.data.code==0){
					  
					  uni.showToast({
					  	icon: 'none',
					  	title: result.data.msg
					  });
					  return
				  }
			
					if (type == 'del' && is_zi == 0) {
						that.content.splice(index, 1);
						that.commentCount--
						//删除主评论
					}
					if (type == 'del' && is_zi == 1) {
						that.commentCount--
						//删除回复
						that.content[index].child.splice(ziindex, 1);
					}
					if (type == 'top') {
						//操作置顶			
						that.content[index].is_ding = num
					}
			
					uni.showToast({
						icon: 'none',
						title: result.data.msg
					});
				} else {
					uni.showToast({
						icon: 'none',
						title: that.$errorMsg
					});
				}
			
			
			},
			
			goBack() {
				
				
				uni.createVideoContext(this.dataList[this.k]._id+''+this.k,this).stop();	
				
				
			  // 通过判断当前页面的页面栈信息，是否有上一页进行返回，如果没有则跳转到首页
			  const pages = getCurrentPages()
			  if (pages && pages.length > 0) {
			    const firstPage = pages[0]
			    if (pages.length == 1 && (!firstPage.route || firstPage.route != 'pages/index')) {
			      uni.reLaunch({
			        url: '/pages/index'
			      })
			    } else {
			      uni.navigateBack({
			        delta: 1
			      })
			    }
			  } else {
			    uni.reLaunch({
			      url: '/pages/index'
			    })
			  }
			},
			
			gohome() {	
				uni.createVideoContext(this.dataList[this.k]._id+''+this.k,this).stop();	
			    uni.reLaunch({
			      url: '/pages/index'
			    })	 
			},
			
			
		}
	}
</script>

<style lang="scss" scoped>
	.container {background-color: #000000;}
	.button {
	  position: relative;
	  width: 100%;
	  height: 100%;
	  border-radius: 50%;
	  overflow: visible;	 
	  color: #FFFFFF;
	  background-color: transparent;
	  padding: 0;
	  margin: 0;
	  font-size: inherit;
	  line-height: inherit;
	  border: none;
	  &::after {
	    border: none;
	  }
	}
	.item {
		/* width : 750rpx; */
		background-color: #000000;
		position: relative;
	}
	.videoHover{
		position: absolute;
		top: 0;
		left: 0;
		flex: 1;
		background-color: rgba(0,0,0,0.1);
		justify-content: center;
		align-items: center;
		
		/* border-style: dashed;
		border-color: #DD524D;
		border-width: 1px; */
	}
	.playState{
		    margin-top: 100%;
		    margin-left: 40%;
		width:  160rpx;
		height: 160rpx;
		opacity: 0.2;
	}
	.playStatedd{
		    margin-top: 100%;
		    margin-left: 40%;
		width:  160rpx;
		height: 160rpx;
		
	}
	.userInfo{
		position: absolute;
		bottom:140px;
		right: 10px;
		flex-direction: column;
		
	}
	.userAvatar{
		border-radius: 500%;
		margin-bottom: 15px;
		border-style: solid;
		border-width: 2px;
		border-color: #ffffff;
	}
	.userAvatar{
		width : 100rpx;
		height: 100rpx;
	}
	.likeIco,.shareIco,.commentIco{
		width : 60rpx;
		height: 60rpx;
		margin-top: 15px;
	}
	.likeNum,.commentNum,.shareTex{
		color: #ffffff;
		font-size: 30rpx;
		text-align: center;
		margin: 5px;
	}
	.likeNumActive{
		color: red;
	}
	.content{
	  width: 620rpx;
	  z-index: 99;
	  position: absolute;
	  bottom: 30px;
	  /* justify-content: center; */
	  padding: 15rpx;
	  flex-direction: column;
	  justify-content: flex-start;
	  color: #ffffff;
	}
	.userName {
	  font-size: 30rpx;
	  color: #ffffff;
	  margin-top: 80upx;
	}
	.words {
	  margin-top: 10rpx;
	  font-size: 30rpx;
	  color: #ffffff;
	}
	.root{
		background-color: #000000;
	}
	/deep/.input-placeholder {
		font-size: 30rpx;
		color: #C6D1D8;
	}
	
	.input-box {
		position: fixed;		
		width: 100%;
		transition: all 0.25s ease-out;		
		min-height: 100upx;
		padding:10px;
		background-color: #ffffff;
		display: flex;
		position: fixed;
		z-index: 120;
		bottom: -2upx;		
	}

</style>
