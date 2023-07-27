<template>

	<view class="template-content" style="background-image: linear-gradient(to top, #3d0973 20%, #4b2a6d 80%);"
		:style="[avatarStyle]">
		<view class="shangbanquanbu">
			<view class="shangban" :style="{paddingTop: vuex_status_bar_height + 'px'}">
				<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-sm">
					<view class="beijing ">
						<view class="tn-flex tn-flex-row-center">							
							<!-- #ifdef MP -->					
							<view style="margin-left: 10px;margin-top:5px;"
								class="tn-icon-close tn-color-white tn-text-bold tn-text-xxl"
								@click="guanbishow=true"></view>										
								<!-- #endif -->									
							<view class="tn-flex tn-flex-row-center tn-flex-col-center">
								<view class="">
									<tn-avatar badgeBgColor="#00aa00" class="" shape="circle" :src="roomInfo.image"
										size="zj">
									</tn-avatar>
								</view>
								<view class="tn-padding-right tn-text-ellipsis " style="max-width: 250rpx;">
									<view class="tn-padding-right tn-padding-left-sm ">
										<text class=" tn-text-bold">{{roomInfo.title}}</text>
									</view>
									<view class="tn-padding-right tn-padding-left-sm tn-padding-top-xs">
										ID:{{roomInfo.id}}
										<text class=" tn-color-white tn-margin-left-sm"
											v-if="roomInfo.moshi==0">自由上麦</text>
										<text class=" tn-color-white tn-margin-left-sm" v-else>申请上麦</text>
									</view>
								</view>
							</view>
							<tn-button @click="guanzhu()" v-if="roomInfo.is_follow" shape="round"
								backgroundColor="#969696" fontColor="#080808">
								已关注
							</tn-button>
							<tn-button @click="guanzhu()" v-else shape="round" backgroundColor="#FFF00D"
								fontColor="#080808">
								关注
							</tn-button>
					
							
								
						</view>
					</view>
						<!-- #ifndef MP -->		
					<view class="blogger__author__btn justify-content-item tn-flex-col-center tn-flex-row-center" >
						<text class="tn-icon-my tn-color-white  beijing2"
							@click="showrenshu=true;chanebang(4)">{{userlist.length}}人</text>
										
							<text style="margin-left: 10px;"
								class="tn-icon-close tn-color-white tn-text-bold tn-text-xxl"
								@click="guanbishow=true"></text>
							
					</view>
					<!-- #endif -->
										
				</view>

				<view style="z-index: 150;height: 30px;position: fixed;top: 100px;left:20px;">


					<view class="tn-flex">
						<view class="tn-flex-2  tn-margin-right tn-radius bg-flex-shadow tn-shadow-blur"
							@click="showrenshu=true;chanebang(0)">
					  <view class=""
								style="padding: 5px 10px;border-radius: 2500px;background-color: rgba(8, 8, 8, 0.26);">
								<text class=" tn-color-white ">榜单</text>
							</view>
						</view>
						<view class="tn-flex-2" @click="gonggaoshow=true">
							<view class=""
								style="padding: 5px 10px;border-radius: 2500px;background-color: rgba(8, 8, 8, 0.26);">
								<text class=" tn-color-white ">公告</text>
							</view>
						</view>

					</view>

					<view class="tn-flex tn-margin-top" v-if="chaoguan==1">
						<view class="tn-flex-2  tn-margin-right tn-radius bg-flex-shadow tn-shadow-blur"
							@click="jinggaoshow=true">
							<view class=""
								style="padding: 5px 10px;border-radius: 2500px;background-color: rgba(0, 255, 255, 0.2);">
								<text class=" tn-color-white ">警告</text>
							</view>
						</view>
						<view class="tn-flex-2" @click="jinggaoguanbo()">
							<view class=""
								style="padding: 5px 10px;border-radius: 2500px;background-color: rgba(255, 0, 0, 0.6);">
								<text class=" tn-color-white ">关播</text>
							</view>
						</view>
					</view>

				</view>

				<view v-if="is_manage" 
					style="z-index: 150;height: 30px;position: fixed;top: 100px;right:20px;">
					<view class="" @click="shezhishow=true"
						style="padding: 5px 10px;border-radius: 2500px;background-color: rgba(8, 8, 8, 0.26);">
						<text class=" tn-color-white ">设置房间</text>
					</view>
					<view class="" @click="bgmshowopen()"
						style="padding: 20px 10px;border-radius: 2500px;background-color: rgba(8, 8, 8, 0.26);">
						<text class=" tn-color-white ">背景音乐</text>
					</view>
					
					

				</view>


				<view @click="egeshow=true" style="z-index: 150;height: 30px;position: fixed;bottom:300px;right:5px;" v-if="roomInfo.baoopen">
					<image :animation="baoxiangmone" mode="aspectFill" style="width: 100px;height: 100px;"
						:src="roomInfo.baoimg">
					</image>
				</view>






				<view  >
				
					<view class="tn-flex tn-flex-row-center tn-padding-top tn-text-bold"
						 style="position: relative;">
						
						<view v-if="managemsg" style="position: absolute;top:5px;z-index: 11;padding: 5px 10px;border-radius: 2500px;background-color: rgba(0, 0, 0, 0.6);">
							<text class=" tn-color-white ">{{managemsg}}</text>
							</view>
							
							
						<view class="" style="position: relative;" @click="showinfo(mailist[0].id)">														
							<tn-avatar badgeBgColor="#00aa00" class="" shape="circle" :src="mailist[0].avatar"
								size="xl">
							</tn-avatar>
							<text class="dk-icon-guanbimaikefeng tn-text-sm tn-color-red" style="right: 3px;
    position: absolute;
    bottom: 0px;
    font-size: 20px;
    z-index: 1;" v-if="mailist[0].is_mai==1"></text>

							<text class="tn-icon-voice-fill tn-text-sm tn-color-green" style="right: 3px;
							position: absolute;
							bottom: 0px;
							font-size: 20px;
							z-index: 1;" v-if="mailist[0].maikefeng"></text>

						</view>

					</view>
					<view class="tn-flex tn-flex-row-center tn-text-bold" style="margin-top: 10px;">
						<text class="" style="font-size: 12px;color: #ffffff;">{{mailist[0].nickname}}</text>
						<text class="tn-icon-sex  tn-color-purplered" style="font-size: 14px;"></text>
					</view>
				</view>
				<view
					class="tn-flex tn-flex-wrap tn-margin-left-sm tn-margin-bottom-sm tn-margin-right-sm tn-margin-top-xs">
					<block v-for="(item, index) in mailist" :key="index" v-if="index>0">
						<view class="" style="width: 25%;position: relative;">
							<view class="tn-flex tn-flex-row-center tn-padding-top tn-text-bold" v-if="item.id==0"
								@click="gloumai(item,index)">
								<view class="tn-flex tn-flex-row-center "
									style="background-color: #0808085c;height: 128rpx;width:128rpx;border-radius: 5000rpx;">
									<text class="tn-icon-add" style="font-size: 26px;margin-top: 34rpx;color: #d6d6d6;"
										v-if="item.open==0"></text>
									<text class="dk-icon-guanbimaikefeng"
										style="font-size: 26px;margin-top: 34rpx;color: #d6d6d6;"
										v-if="item.open==1"></text>
									<text class="tn-icon-voice-fill tn-text-sm tn-color-green" style="right: 13px;
							position: absolute;
							bottom:25px;
							font-size: 20px;
							z-index: 1;" v-if="item.maikefeng"></text>
								</view>

							</view>
							<view v-else class="tn-flex tn-flex-row-center tn-padding-top tn-text-bold"
								@click="showinfo(item.id)">
								<tn-avatar badgeBgColor="#00aa00" class="" shape="circle" :src="item.avatar" size="xl">
								</tn-avatar>
								<text class="dibumimai dk-icon-guanbimaikefeng tn-text-sm tn-color-red"
									v-if="item.is_mai">
								</text>
							</view>

							<view class="tn-flex tn-flex-row-center tn-text-bold" style="margin-top: 10px;">
								<text class="" style="font-size: 12px;color: #ffffff;"
									v-if="item.open==0">{{item.nickname}}</text>
								<text class="" style="font-size: 12px;color: ##080808;" v-if="item.open==1">房主封位</text>
							</view>
						</view>

					</block>

				</view>
			</view>


			<view style="width:80vw;" class="message-scroll">
				<scroll-view id="scrollview" scroll-y scroll-with-animation :scroll-top="leftScrollViewTop"
					:style="{height: scrollViewHeight_room + 'px'}" :scroll-into-view="scrollIntoIndex">

					<view class="tn-margin-left-sm">
						<view class="tn-flex tn-flex-col-center">
							<view class="tn-margin-sm " style="padding: 5px 10px;							
								max-width: 62vw;border-radius:25rpx;
								background-color: rgba(0, 0, 0, 0.5);">
								<view style="color: #ffffff;" class="tn-text-bold">
									<text class="tn-icon-sound tn-margin-sm tn-bg-yellow" style="padding: 1px 3px;color: #000000;font-size: 12px;
									border-radius:5rpx;
									">系统公告</text>
									<text style="color:#24f083;"
										class="tn-text-bold">聊天室中请保持文明用于，低俗、色情、政治敏感、广告等不良聊天内容将会被严肃处理
									</text>
								</view>
							</view>
						</view>

					</view>
					<view class="tn-margin-left-sm">
						<view class="tn-flex tn-flex-col-center">
							<view class="tn-margin-sm " style="padding: 5px 10px;							
								max-width: 62vw;border-radius:25rpx;
								background-color:rgba(0, 0, 0, 0.5);">
								<view style="color: #ffffff;" class="tn-text-bold">房间公告：
									<text style="color:#fff420;" class="tn-text-bold">{{roomInfo.title_sub}}
									</text>
								</view>

							</view>
						</view>

					</view>

					<view class="tn-margin-left-sm" v-for="(item, index) in talkList" :key="index"
						:id="'chatItem_' + index">
						<view class="tn-flex tn-flex-row-between tn-flex-col-center"
							v-if="item.type=='text'||item.type=='image'">
							<view class="justify-content-item">
								<view class="tn-flex tn-flex-col-top tn-flex-row-left">
									<view class="logo-pic tn-shadow-blur tn-margin-top-sm"
										:style="'background-image:url('+item.fromhead+')'"
										@click="showinfo(item.user_id)">
										<view class="logo-image">
										</view>
									</view>
									<view class="tn-padding-right ">

										<view class="tn-padding-left-sm tn-text-bold tn-margin-top-sm"
											style="max-width: 62vw;" @click="showinfo(item.user_id)">
											<text v-if="item.chaoguan==1"
												class="dk-icon-icon-person-jingcha tn-margin-sm tn-bg-yellow" style="padding: 1px 3px;color: #000000;font-size: 12px;
											border-radius:5rpx;
											">巡管</text>


											<text class="dk-lv tn-main-gradient-indigo--light"
												v-if="item.vip==0&&configInfo.is_lv">LV {{item.lv}}</text>

											<text class="dk-vip tn-main-gradient-orangeyellow"
												v-if="item.vip==1&&configInfo.is_lv">
												<text class="tn-icon-vip tn-color-black"
													style="font-size: 14px;margin-left: -5px;"></text>
												VIP{{item.lv}}
											</text>

											<text style="color:#ffffff;">{{ item.fromname }}</text>


										</view>
										<view class="tn-flex tn-flex-col-center" v-if="item.type=='text'">
											<view class="tn-margin-sm tn-padding-sm tn-text-left"
												style="max-width: 62vw;border-radius: 0 25rpx 10px 25rpx;background-color: rgba(0, 0, 0, 0.2);">
												<text class="tn-color-white">{{ item.content }}</text>
											</view>
											<!--  <view class="">               
	          <text class="tn-icon-warning-fill tn-color-purplered tn-text-xxl"></text>
	        </view> -->
										</view>

										<view class="tn-flex tn-flex-col-center" v-if="item.type=='image'">
											<view class="tn-margin-sm tn-padding-sm"
												style="max-width: 62vw;border-radius: 0 25rpx 10px 25rpx;">
												<image mode="widthFix" :src="item.content" style="width: 20vw">
											</view>
											<!--  <view class="">               
			  <text class="tn-icon-warning-fill tn-color-purplered tn-text-xxl"></text>
			</view> -->
										</view>



									</view>
								</view>
							</view>
							<view class="justify-content-item">
								<!-- 预留空位 -->
							</view>
						</view>

						<view class="tn-flex tn-flex-col-center" v-if="item.type=='system'">
							<view class="tn-margin-sm " style="padding: 5px 10px;							
					max-width: 62vw;border-radius:25rpx;
					background-color:rgba(0, 0, 0, 0.2)">
								<text v-if="item.chaoguan==1"
									class="dk-icon-icon-person-jingcha tn-margin-sm tn-bg-yellow" style="padding: 1px 3px;color: #000000;font-size: 12px;
						border-radius:5rpx;
						">巡管</text>
								<text v-if="item.vip==1" class="dk-icon-icon-person-jingcha tn-margin-sm tn-bg-yellow"
									style="padding: 1px 3px;color: #000000;font-size: 12px;
							border-radius:5rpx;
							">VIP会员</text>
								<text style="color:#a4e82f;;margin-right: 5px;">{{item.content}}</text>
								<text class="tn-text-bold">进入房间</text>
							</view>
						</view>
					</view>

				</scroll-view>


			</view>






			<!--  输入框及选择框部分 -->
			<view class="bottom_room">
				<view class="bottom-div_room">
					<view class="tn-color-gray" style="width: 100%;">
						<input :focus="isFocus" type="text" class="input" @confirm="sendmsg" confirm-type="send"
							:auto-blur="true" v-model="sendmsgBoy" placeholder="说点什么..." style="padding: 5px 20px;color: #ffffff;width: 100%;
		 			border-radius:50rpx;
		 			background-color:rgba(0, 0, 0, 0.2)">
					</view>
					<view class="btn" @click="handleEmoji()">
						<text class="tn-icon-emoji-good" style="font-size: 20px;color: #42ffd6;"></text>
					</view>

					<view class=" " @click="liwu()" style="padding: 4px;">
						<image :animation="animation" src="../../static/ksad_reward_gift.png"
							style="width: 40px;height: 40px;"></image>

					</view>

					<view class="btn" @click="stopLocalAudio()" v-if="is_kaimai==true&&is_zhubo==true">
						<text class="tn-icon-voice-fill" style="font-size: 20px;color: #42ffd6;"></text>
						<text style="font-size: 14px;color:#ffff00;"></text>
					</view>
					<view class="btn" @click="startLocalAudio()" v-if="is_kaimai==false&&is_zhubo==true">
						<text class="dk-icon-guanbimaikefeng" style="font-size: 20px;color: #ff0000;"></text>
						<text style="font-size: 14px;color:#ffff00;"></text>
					</view>

					<view class="tn-flex tn-flex-col-center "  v-if="is_zhubo&&is_manage==false"
						@click="xiamai">
						<view class="tn-margin-sm tn-bg-yellow" style="padding: 5px 10px;color: #000000;font-size: 12px;						
						border-radius:25rpx;
						">
							<text>下麦</text>
						</view>
					</view>
					<view class="tn-flex tn-flex-col-center " style="" v-if="is_zhubo&&is_manage==true"
						@click="guanbo()">
						<view class="tn-margin-sm tn-bg-yellow" style="padding: 5px 10px;color: #000000;font-size: 12px;						
						border-radius:25rpx;
						">
							<text>关播</text>
						</view>
					</view>

				</view>
				<!-- emoji部分-->
			</view>

			<tn-modal width="80%" v-model="jinggaoshow" backgroundColor="#ffffff" padding="30rpx 20rpx" :radius="25"
				title="设置" :showCloseBtn="false" :maskCloseable="true" :zoom="true" :custom="true">

				<view class="custom-modal-content tn-padding-sm ">
					<view class="tn-text-left tn-color-black" style="font-size: 14px;">
						请填写警告内容，将会全屏提示所有人员
					</view>

					<view class="tn-bg-gray--light" style="margin-top:8px">
						<textarea maxlength="200" placeholder="请填警告内容" v-model="jinggaobody"
							placeholder-style="color:#343434"
							style="height: 100px; width:100%;font-size: 14px;color: #000;padding: 20rpx 30rpx;"></textarea>
					</view>
					<view class="tn-text-center tn-padding-top" @click="jinggaopass()">
						<tn-button :fontSize="28" padding="20rpx" height="56rpx" fontColor="#080808"
							backgroundColor="rgb(255, 240, 13)">发布</tn-button>
					</view>

				</view>
			</tn-modal>








			<tn-modal width="80%" v-model="shezhishow" backgroundColor="#ffffff" padding="30rpx 20rpx" :radius="25"
				title="设置" :showCloseBtn="false" :button="button" :maskCloseable="true" :zoom="true" :custom="true">

				<view class="custom-modal-content tn-padding-sm ">
					<view class="tn-text-left tn-color-black" style="font-size: 14px;">
						请规范填写信息
					</view>
					<view class="tn-bg-gray--light "
						style=" margin-top:8px; border-radius: 10rpx;padding: 20rpx 30rpx;">
						<text class="tn-color-black">上麦模式：</text>
						<text class="tn-color-black" @click="roommoshi=0">
							<tn-button v-if="roommoshi==0" :fontSize="28" padding="20rpx" height="56rpx"
								fontColor="#080808" backgroundColor="rgb(255, 240, 13)">自由上麦</tn-button>
							<tn-button v-if="roommoshi==1" :fontSize="28" padding="20rpx" height="56rpx"
								fontColor="#080808" backgroundColor="rgb(162, 162, 162)" :plain="true">自由上麦</tn-button>
						</text>
						<text class="tn-color-black tn-margin-left-sm" @click="roommoshi=1">
							<tn-button v-if="roommoshi==0" :fontSize="28" padding="20rpx" height="56rpx"
								fontColor="#080808" backgroundColor="rgb(162, 162, 162)" :plain="true">申请上麦</tn-button>
							<tn-button v-if="roommoshi==1" :fontSize="28" padding="20rpx" height="56rpx"
								fontColor="#080808" backgroundColor="rgb(255, 240, 13)">申请上麦</tn-button>
						</text>
					</view>
					<view class="tn-bg-gray--light "
						style=" margin-top:8px; border-radius: 10rpx;padding: 20rpx 30rpx;">
						<input placeholder="请填写标题" type="text" v-model="roomtitle" placeholder-style="color:#343434"
							style="font-size: 14px;color: #000;"></input>
					</view>
					<view class="tn-bg-gray--light" style="margin-top:8px">
						<textarea maxlength="200" placeholder="请填写公告内容" v-model="roomtitle_sub"
							placeholder-style="color:#343434"
							style="height: 100px; width:100%;font-size: 14px;color: #000;padding: 20rpx 30rpx;"></textarea>
					</view>
					<view class="tn-text-center tn-padding-top" @click="xiugairoom()">
						<tn-button :fontSize="28" padding="20rpx" height="56rpx" fontColor="#080808"
							backgroundColor="rgb(255, 240, 13)">提交设置</tn-button>
					</view>

				</view>
			</tn-modal>

			<tn-modal width="80%" v-model="tishishow" backgroundColor="#E4E9EC" padding="30rpx 80rpx" :radius="25"
				:title="tishi_title" :content="tishi_body" :showCloseBtn="true" :maskCloseable="true" :zoom="true"
				:custom="false" @click="manage_tongyishangmai">
			</tn-modal>

			<tn-modal width="80%" v-model="gonggaoshow" backgroundColor="#E4E9EC" padding="30rpx 80rpx" :radius="25"
				title="公告" :content="roomInfo.title_sub" :showCloseBtn="true" :maskCloseable="true" :zoom="true"
				:custom="false" @click="manage_tongyishangmai">
			</tn-modal>

			<tn-popup v-model="guanboshow" width="80%" height="100%" mode="bottom" backgroundColor="rgb(0 0 0 / 0.68)"
				:borderRadius="30" :closeBtn="false" :maskCloseable="true" @close="closedPopup">
				<view class=" tn-flex-col-center tn-flex-row-center" style="padding:100% 20% ;">

					<view class=" tn-flex-row-center">
						<view @click="goBackfanhui()"
							style="width: 90%;padding: 8px 10px;height: 35px;background-color:#ffff00;color: #000000;"
							class="justify-content-item tn-padding tn-text-center tn-margin-xs tn-radius bg-flex-shadow tn-round tn-shadow-blur">
							主播已关播，看看其他房间</view>

					</view>
				</view>
			</tn-popup>

			<tn-popup v-model="popshowgift" width="80%" height="800rpx" mode="bottom" backgroundColor="rgb(0 0 0 / 0.68"
				:borderRadius="30" :closeBtn="false" :maskCloseable="true" @close="closedPopup">
				<gift-listchat :gift_userid="gift_userid" :mailistgift="mailist_gift" ></gift-listchat>
			</tn-popup>



			<tn-popup v-model="bgmshow" width="80%" height="70%" mode="bottom" backgroundColor="rgb(0 0 0 / 0.68)"
				:borderRadius="30" :closeBtn="false" :maskCloseable="true">			
				<scroll-view class="" scroll-y scroll-with-animation style="height:100%">
					<view  style="padding: 8px 15px;" v-for="(itemuser, gmbindex) in musiclist"
						:key="gmbindex">
						<view class="message" >						
							<view class="message__middle">
								<view class="message__name">{{itemuser.title}}</view>
								<!--   <view class="message__content tn-text-ellipsis">欢迎使用图鸟UI，图鸟UI专做UI界面100年</view> -->
							</view>
							<view class="message__right" style="width: 180rpx;">							
							<tn-button @click="bgmpay(itemuser.id,itemuser.url)"  shape="round" backgroundColor="#FFF00D"
								fontColor="#080808">
								播放
							</tn-button>
							</view>
						</view>
					</view>
			
					<view v-if="bang_type<4" style="padding: 8px 15px;" v-for="(itemuser, bangdanindex) in bangdanlist"
						:key="bangdanindex">
						<view class="message" @click="showinfo(itemuser.song_user_id)">
							<view class="message__left tn-text-center tn-text-bold"
								style=" padding: 5px 5px;border-radius: 2500px;background-color:#ffff00;color: #000;">
								{{bangdanindex+1}}
							</view>
							<view class="message__left" style="margin-left: 5px;">
								<tn-avatar :src="itemuser.avatar"></tn-avatar>
							</view>
							<view class="message__middle">
								<view class="message__name">{{itemuser.nickname}}</view>
								<!--   <view class="message__content tn-text-ellipsis">欢迎使用图鸟UI，图鸟UI专做UI界面100年</view> -->
							</view>
							<view class="message__right">
			
							</view>
						</view>
					</view>
			
				</scroll-view>
			
			
			</tn-popup>
			



			<tn-popup v-model="showrenshu" width="80%" height="70%" mode="bottom" backgroundColor="rgb(0 0 0 / 0.68)"
				:borderRadius="30" :closeBtn="false" :maskCloseable="true" @close="closedPopup">
				<view class="tn-flex tn-flex-col-center tn-flex-row-center ">
					<view @click="chanebang(2)" class="tn-margin-sm "
						style="padding: 5px 10px;max-width: 62vw;border-radius:25rpx;background-color: rgba(255, 255, 255, 0.2);"
						:style="bang_type==2 ?  'background-color:#ffff00;color:#000000' : ''">
						<text class="tn-text-bold">日榜</text>
					</view>
					<view @click="chanebang(1)" class="tn-margin-sm "
						:style="bang_type==1 ?  'background-color:#ffff00;color:#000000' : ''"
						style="padding: 5px 10px;max-width: 62vw;border-radius:25rpx;background-color: rgba(255, 255, 255, 0.2);">
						<text class="tn-text-bold">月榜</text>
					</view>
					<view @click="chanebang(0)" class="tn-margin-sm "
						:style="bang_type==0 ?  'background-color:#ffff00;color:#000000' : ''"
						style="padding: 5px 10px;max-width: 62vw;border-radius:25rpx;background-color: rgba(255, 255, 255, 0.2);">
						<text class="tn-text-bold">总榜</text>
					</view>
					<view @click="chanebang(4)" class="tn-margin-sm "
						:style="bang_type==4 ?  'background-color:#ffff00;color:#000000' : ''"
						style="padding: 5px 10px;max-width: 62vw;border-radius:25rpx;background-color: rgba(255, 255, 255, 0.2);">
						<text class="tn-text-bold">当前在线</text>
					</view>
				</view>
				<scroll-view class="" scroll-y scroll-with-animation style="height:100%">
					<view v-if="bang_type==4" style="padding: 8px 15px;" v-for="(itemuser, useronlineindex) in userlist"
						:key="useronlineindex">
						<view class="message" @click="showinfo(itemuser.user_id)">
							<view class="message__left">
								<tn-avatar :src="itemuser.headimg"></tn-avatar>
							</view>
							<view class="message__middle">
								<view class="message__name">{{itemuser.nickname}}</view>
								<!--   <view class="message__content tn-text-ellipsis">欢迎使用图鸟UI，图鸟UI专做UI界面100年</view> -->
							</view>
							<view class="message__right">

							</view>
						</view>
					</view>

					<view v-if="bang_type<4" style="padding: 8px 15px;" v-for="(itemuser, bangdanindex) in bangdanlist"
						:key="bangdanindex">
						<view class="message" @click="showinfo(itemuser.song_user_id)">
							<view class="message__left tn-text-center tn-text-bold"
								style=" padding: 5px 5px;border-radius: 2500px;background-color:#ffff00;color: #000;">
								{{bangdanindex+1}}
							</view>
							<view class="message__left" style="margin-left: 5px;">
								<tn-avatar :src="itemuser.avatar"></tn-avatar>
							</view>
							<view class="message__middle">
								<view class="message__name">{{itemuser.nickname}}</view>
								<!--   <view class="message__content tn-text-ellipsis">欢迎使用图鸟UI，图鸟UI专做UI界面100年</view> -->
							</view>
							<view class="message__right">

							</view>
						</view>
					</view>

				</scroll-view>


			</tn-popup>



			<tn-popup v-if="popshow" v-model="popshow" width="80%" height="600rpx" mode="bottom"
				backgroundColor="rgb(0 0 0 / 0.68)" :borderRadius="30" :closeBtn="false" :maskCloseable="true"
				@close="closedPopup">
					<scroll-view class="" scroll-y scroll-with-animation style="height:600rpx">
				<view class="bottom-emoji " v-if="emolist.length>0">
					<view class="emoji-tab">
						<tn-tabs :list="emolist" activeColor="#ffffff" inactiveColor="#ffffff" :current="emojiindex"
							@change="tabChange"></tn-tabs>
					</view>
					<view class="emojis">
						<view v-for="(emojiItem, index3) in emolist[emojiindex].emolist_pic" class="emoji" :key="index3"
							@click="chooseEmoji(emojiItem)">
							<image :src="emojiItem" style="width:100%;height:100%" mode="widthFix" />
						</view>
					</view>
				</view>
	</scroll-view>
			</tn-popup>

			<!-- 登录框组件 -->





			<tn-modal width="80%" v-model="show_shenqing" backgroundColor="#E4E9EC" padding="30rpx 80rpx" :radius="25"
				title="向群主申请上麦聊天？" :button="button" :showCloseBtn="false" :maskCloseable="false" :zoom="true"
				:custom="false" @click="clickBtn_shenqing">

			</tn-modal>

			<tn-modal width="80%" v-model="tanchutongyiis" backgroundColor="#E4E9EC" padding="30rpx 80rpx" :radius="25"
				:title="shen_nickename" :button="button" :showCloseBtn="false" :maskCloseable="false" :zoom="true"
				:custom="false" @click="manage_tongyishangmai">

			</tn-modal>







			<tn-popup v-model="userinfoshow" width="80%" height="40%" mode="bottom" backgroundColor="rgb(0 0 0 / 0.68)"
				:borderRadius="30" :closeBtn="false" :maskCloseable="true" @close="closedPopup">
				<view class="bottom-emoji ">
					<view class="about__wrap">
						<!-- 头像用户信息 -->
						<view
							class="user-info__container tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center">
							<view
								@click="navigateToFn({ url: '/circlePages/blogger_other?id='+userinfo.id, checkLogin: false })"
								class="user-info__avatar tn-bg-grey--light tn-flex tn-flex-col-center tn-flex-row-center">
								<view class="tn-shadow-blur" :style="'background-image:url('+userinfo.avatar+')'"
									style="width: 170rpx;height: 170rpx;background-size: cover;">
								</view>
							</view>
							<view class="tn-padding-right tn-padding-left-sm tn-margin-top-sm">

								<text class="tn-color-white tn-text-bold"
									style="font-size: 14px;">{{userinfo.nickname}}</text>
								<text class="tn-icon-sex-female tn-color-purplered tn-text-xl tn-text-bold"
									v-if="userinfo.sex==2"></text>
								<text class="tn-icon-sex-male  tn-color-blue tn-text-xl tn-text-bold"
									v-if="userinfo.sex==1"></text>
								<text class="tn-icon-sex  tn-color-white tn-text-xl tn-text-bold"
									v-if="userinfo.sex==0"></text>
								<text class="dk-lv tn-main-gradient-indigo--light"
									v-if="userinfo.vip==0&&configInfo.is_lv">LV {{userinfo.lv}}</text>
								<text class="dk-vip tn-main-gradient-orangeyellow" v-if="userinfo.vip==1"><text
										class="tn-icon-vip tn-color-black"
										style="font-size: 14px;margin-left: -5px;"></text>VIP{{userinfo.vip_lv}}</text>

							</view>
							<view class="tn-padding-right tn-padding-top-xs tn-padding-left tn-text-ellipsis">

								<text v-if="userinfo.is_dav==1" class=" tn-icon-success-circle-fill tn-color-red"
									style="font-size: 14px;margin-right:10px;">
									<text class=" tn-color-white tn-text-bold" style="font-size:14px;margin-left: 5px;">
										{{userinfo.dav_name}}
									</text>
								</text>
								<text class="tn-color-white"
									style="font-size:12px;margin-right: 10px;">ID:{{userinfo.id}}
								</text>
								<text class="tn-color-white"
									style="font-size:12px;margin-right: 10px;">IP属地:{{userinfo.city}}
								</text>

							</view>

							<view class="tn-padding-right tn-padding-top-xs tn-padding-bottom-sm tn-padding-left-sm"
								@click="navigateToFn({ url: '/circlePages/medal?id='+id, checkLogin: false })">
								<block v-for="(item,indexdd) in userinfo.medal_list" :key="indexdd">
									<tn-tag backgroundColor="tn-cool-bg-color-5" margin="10rpx 10rpx">
										{{item.title}}
									</tn-tag>

								</block>
							</view>
						</view>

						<view class="blogger-tips-data__info tn-flex">
							<view class="tn-flex-1 tn-padding-sm tn-margin-xs" @click="tofans('follow')">
								<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
									<view class="">
										<view class="tn-text-xl tn-color-white">
											{{ $t.number.formatNumberAddPriceUnit(userinfo.guanzhu) }}
										</view>
									</view>
									<view class="tn-margin-top-xs tn-color-gray tn-text-df tn-text-center">
										<text class="tn-padding-left-xs tn-color-white"
											style="font-size: 12px;">关注</text>
									</view>
								</view>
							</view>
							<view class="tn-flex-1 tn-padding-sm tn-margin-xs" @click="tofans('fans')">
								<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
									<view class="">
										<view class="tn-text-xl tn-color-white">
											{{ $t.number.formatNumberAddPriceUnit(userinfo.fansi) }}
										</view>
									</view>
									<view class="tn-margin-top-xs tn-color-gray tn-text-df tn-text-center">

										<text class="tn-padding-left-xs tn-color-white"
											style="font-size: 12px;">粉丝</text>
									</view>
								</view>
							</view>
							<view class="tn-flex-1 tn-padding-sm tn-margin-xs">
								<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
									<view class="">
										<view class="tn-text-xl tn-color-white">
											{{ $t.number.formatNumberAddPriceUnit(userinfo.zhan) }}
										</view>
									</view>
									<view class="tn-margin-top-xs tn-color-gray tn-text-df tn-text-center">

										<text class="tn-color-white tn-color-white " style="font-size: 12px;">获赞</text>
									</view>
								</view>
							</view>
						</view>
						<view class="tn-flex tn-flex-row-center tn-margin-top-sm">
							<view @click="giftusere(userinfo)"
								style="width: 90%;padding: 8px 10px;height: 35px;background-color:#ffff00;color: #000000;"
								class="justify-content-item tn-padding tn-text-center tn-margin-xs tn-radius bg-flex-shadow tn-round tn-shadow-blur">
								送礼物</view>

						</view>

						<view class="tn-flex tn-flex-row-center tn-margin-top-sm tn-text-xl" v-if="is_manage==true"
							style="right: 3px;
    position: absolute;
    top: 0px;
    font-size: 14px;
    z-index: 1;">
							<view @click="qianzhixiamia(userinfo.id)"
								style="padding: 8px 10px;background-color:#ff0000;color: #ffffff;"
								class="justify-content-item tn-padding tn-text-center tn-margin-xs tn-radius bg-flex-shadow  tn-shadow-blur"
								v-if="ismaishang">
								踢下麦</view>
							<view @click="tichufanfgjian(userinfo.id)"
								style="padding: 8px 10px;background-color:#ff0000;color: #ffffff;"
								class="justify-content-item tn-padding tn-text-center tn-margin-xs tn-radius bg-flex-shadow  tn-shadow-blur">
								踢出房</view>
						</view>




					</view>
				</view>

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
							placeholder-style="color:#7e7e7e"
							style="width:230px;font-size: 14px;color: #000;"></textarea>
					</view>
					<view class="tn-text-center tn-padding-top" @click="jubaopass()">

						<tn-button :fontSize="28" padding="20rpx" height="56rpx" backgroundColor="tn-cool-bg-color-1"
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


			<dk-tanchuang v-model="giftianchu" width="80%" height="40%" mode="center" :borderRadius="30"
				:giftitle="giftitle" :gifcontent="gifcontent" :giftimg="giftimg" :maskCloseable="true"
				@close="closedPopup">
			</dk-tanchuang>

			<view class="giftmove" v-if="giftAnimation">
				<image :src="giftheadimg" class="gifimgsong"></image>
				{{giftformname}}送出<text class="yishuzi" style="margin-left: 15px;">{{giftname}}x{{giftnum}}</text>
			</view>


			<tn-popup v-model="liwusvgashow" width="100%" height="100%" mode="center"
				backgroundColor="rgba(255, 255, 255, 0.1)" :borderRadius="30" :closeBtn="false" :maskCloseable="true"
				@close="closedPopup">
				<l-svga ref="svga"></l-svga>
			</tn-popup>

			<!-- 登录框组件 -->
			<login-fn :is-show-login="loginBoxFlag" @loginSuccessCallback="refreshFn" @close="closeGlobalLoginFn">
			</login-fn>


			<tn-popup v-model="guanbishow" width="100%"  mode="top" backgroundColor="rgba(241, 241, 241, 0.8)"
				:borderRadius="30" :closeBtn="false" :maskCloseable="true" @close="closedPopup">


				<view
					class="tn-flex tn-flex-wrap tn-margin-left-sm tn-margin-bottom-sm tn-margin-right-sm tn-margin-top-xs" style="margin-top: 150rpx;">
					<view class="" style="width: 33%;" @click="jubaoshowchick();guanbishow=false">
						<view class="tn-flex tn-flex-row-center tn-padding-top tn-text-bold">
							<view class="tn-flex tn-flex-row-center "
								style="background-color: #0808085c;height: 88rpx;width:88rpx;border-radius: 5000rpx;">
								<text class="tn-icon-warning"
									style="font-size: 26px;margin-top: 20rpx;color: #d6d6d6;"></text>
							</view>
						</view>
						<view class="tn-flex tn-flex-row-center tn-text-bold">
							<text class="" style="font-size: 12px;color: #000000;">举报</text>
						</view>
					</view>
					<view class="" style="width: 33%;" @click="appshare();guanbishow=false">
						<view class="tn-flex tn-flex-row-center tn-padding-top tn-text-bold">
							<view class="tn-flex tn-flex-row-center "
								style="background-color: #0808085c;height: 88rpx;width:88rpx;border-radius: 5000rpx;">
								<text class="tn-icon-share-square"
									style="font-size: 26px;margin-top: 20rpx;color: #d6d6d6;"></text>
							</view>
						</view>
						<view class="tn-flex tn-flex-row-center tn-text-bold">
							<text class="" style="font-size: 12px;color: #000000;">分享</text>
						</view>
					</view>
					<!-- <view class="" style="width: 25%;">
					<view class="tn-flex tn-flex-row-center tn-padding-top tn-text-bold" @click="mixwindows">
						<view class="tn-flex tn-flex-row-center "
							style="background-color: #0808085c;height: 88rpx;width:88rpx;border-radius: 5000rpx;">
							<text class="dk-icon-zuixiaohua" style="font-size: 26px;margin-top: 34rpx;color: #d6d6d6;"></text>
						</view>		
					</view>
					<view class="tn-flex tn-flex-row-center tn-text-bold" >						
						<text class="" style="font-size: 12px;color: #8d8d8d;" >最小化</text>
					</view>
				</view>	 -->
					<view class="" style="width: 33%;" @click="goBackfanhui();guanbishow=false">
						<view class="tn-flex tn-flex-row-center tn-padding-top tn-text-bold">
							<view class="tn-flex tn-flex-row-center "
								style="background-color: #0808085c;height: 88rpx;width:88rpx;border-radius: 5000rpx;">
								<text class="tn-icon-power"
									style="font-size: 26px;margin-top: 20rpx;color: #d6d6d6;"></text>
							</view>
						</view>
						<view class="tn-flex tn-flex-row-center tn-text-bold">
							<text class="" style="font-size: 12px;color: #000000;">退出房间</text>
						</view>
					</view>
				</view>
			</tn-popup>



			<tn-popup v-model="egeshow" width="100%" height="60%" mode="bottom"
				backgroundColor="rgba(255, 255, 255, 0.1)" :borderRadius="30" :closeBtn="false" :maskCloseable="true"
				@close="closedPopup">
				<ege-index :baobigimg="roomInfo.baobigimg" :baotitle="roomInfo.baotitle" :nImg="roomInfo.baobg" :room_id='roomInfo.id'   @updateMoney="updateMoney"></ege-index>


			</tn-popup>







		</view>
	</view>
</template>

<script>
	import {
		host,
		webSocket,
		secretkey,
		sdkappid
	} from '@/siteinfo.js'
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js';

	import lPainter from '@/components/lime-painter/'


	///语音/
	import permision from "@/TrtcCloud/permission.js";
	import TrtcCloud from '@/TrtcCloud/lib/index';
	import {	
		TRTCAppScene,
		TRTCVideoStreamType,
		TRTCCloudDef
	} from '@/TrtcCloud/lib/TrtcDefines';
	import {
		genTestUserSig
	} from '@/debug/GenerateTestUserSig';

	import {
		TRTCRoleType
	} from '@/TrtcCloud/lib/TrtcDefines';
	import { AudioMusicParam } from '@/TrtcCloud/lib/TrtcDefines';
	///


	const sysinfo = uni.getSystemInfoSync()
	const audioContext = uni.createInnerAudioContext();
	const recorderManager = uni.getRecorderManager();
	const recordOptions = {
		duration: 60000,
		sampleRate: 44100,
		numberOfChannels: 1,
		encodeBitRate: 192000,
		format: 'aac' // 音频格式，选择此格式创建的音频消息，可以在即时通信 IM 全平台（Android、iOS、微信小程序和Web）互通
	};

	export default {
		components: {
			lPainter
		},
		data() {
			return {
				//背景音乐
				musiclist:[],
				bgmshow:false,	
				//
				///				
				egeshow: false,
				isQd: true,
				cid: 0, //奖池id
				AwardList: [],
				///
				managemsg:'',
				jinggaoshow: false,
				jinggaobody: '请注意规范聊天内容，请勿谈论违规话题~',
				tishishow: false,
				tishi_title: '',
				tishi_body: '',
				bangdanlist: [],
				bang_type: 0,
				roomtitle: '',
				roomtitle_sub: '',
				roommoshi: 0,
				gongaobody: '',
				shezhishow: false,
				gonggaoshow: false,
				id: 1002,
				guanbishow: false,
				//、			
				giftnum: 0,
				giftformname: '',
				giftheadimg: '',
				giftname: '',
				giftAnimation: false,
				liwusvgashow: false,
				giftimg: '',
				giftianchu: false,
				giftitle: '',
				gifcontent: '',
				//、
				guanboshow: false,
				gift_userid: 0,
				popshowgift: false,
				ismaishang: false,
				manage: [],
				showrenshu: false,
				emolist: [],
				mailist: [{
						nickname: '主播',
						avatar: '',
						id: 0,
						maikefeng: false,
						is_mai: 0,
						open: 1
					},
					{
						nickname: '1号麦位',
						avatar: '',
						id: 0,
						maikefeng: false,
						is_mai: 0,
						open: 0
					}, {
						nickname: '2号麦位',
						avatar: '',
						id: 0,
						maikefeng: false,
						is_mai: 0,
						open: 0
					}, {
						nickname: '3号麦位',
						id: 0,
						maikefeng: false,
						is_mai: 0,
						avatar: '',
						open: 0
					}, {
						nickname: '4号麦位',
						id: 0,
						maikefeng: false,
						is_mai: 0,
						avatar: '',
						open: 0
					}, {
						nickname: '5号麦位',
						id: 0,
						maikefeng: false,
						is_mai: 0,
						avatar: '',
						open: 0
					}, {
						nickname: '6号麦位',
						id: 0,
						maikefeng: false,
						is_mai: 0,
						avatar: '',
						open: 0
					}, {
						nickname: '7号麦位',
						id: 0,
						maikefeng: false,
						is_mai: 0,
						avatar: '',
						open: 0
					}, {
						nickname: '8号麦位',
						id: 0,
						maikefeng: false,
						is_mai: 0,
						avatar: '',
						open: 0
					}
				],
				screenHeight: sysinfo.screenHeight,
				userinfoshow: false,
				userinfo: [],
				roomInfo: [],
				fangjianhao: '',
				roombg: '',
				scrollIntoIndex: "chatItem_0",
				liwushow: false,
				shen_nickename: '',
				shen_userid: 0,
				tanchutongyiis: false,
				show_shenqing: false,
				loginBoxFlag: false, // 登录框显示隐藏状态
				userlist: [],
				manage_id: 0,
				popshow: false,
				isshuru: false,
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
				chaoguan: 0,
				content: [],
				userInfoAvatar_no: '/static/navigation.png',
				sendmsgBoy: '',
				room_id: 1003,
				fromid: 0,
				is_online: '离线',
				roomTitle: '聊天室',
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
				lv: 0,
				vip: 0,
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
				faceUrl: 'https://webim-1252463788.file.myqcloud.com/assets/face-elem/',
				emojiShow: true,
				revokeModal: false,
				revokeMessage: {},
				currentTime: 0,
				currentTimeID: '',
				isIphoneX: true,
				timer: null,
				sec: 0,
				////
				scrollViewBasicTop: 0,
				scrollViewHeight: 0,
				scrollViewHeight_room: 0,
				leftScrollViewTop: 200,
				//语聊//
				trtcCloud: null,
				sdkAppId: 0,
				userSig: '',
				role: TRTCRoleType.TRTCRoleAudience, //身份观众
				roomId: 1,
				userId: 0,
				appScene: TRTCAppScene.TRTCAppSceneVoiceChatRoom, // 语音聊天室模式
				isFrontCamera: true,
				streamType: TRTCVideoStreamType.TRTCVideoStreamTypeBig,
				remoteUserIdList: [],
				remoteAudioMuteState: false,
				is_kaimai: false,
				is_manage: false,
				is_zhubo: false,
				//、、、、、、
				button: [{
						text: '取消',
						backgroundColor: '#c1c1c1',
						fontColor: '#000000'
					},
					{
						text: '确定',
						backgroundColor: 'tn-bg-indigo',
						fontColor: '#FFFFFF'
					}
				],
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
				share: [],
				mailist_gift: [],
				animation:{},
				baoxiangmone:{}
			};
		},

		computed: {
			avatarStyle() {
				let style = {}
				if (this.roombg) {
					style.backgroundImage = `url(${this.roombg})`
				}
				return style
			},
		},


		onShareAppMessage(res) {
			if (res.from === 'button') { // 来自页面内分享按钮
				console.log(res.target)
			}
			return {
				title: this.share.share_title, //分享的名称
				path: '/minePages/chat/room_text?id=' + this.id + '&daren_id=' + uni.getStorageSync('user_id'),
				imageUrl: this.share.share_img
			}
		},
		//分享到朋友圈
		onShareTimeline(res) {
			return {
				title: this.share.share_title, //分享的名称
				path: '/minePages/chat/room_text?id=' + this.id + '&daren_id=' + uni.getStorageSync('user_id'),
				imageUrl: this.share.share_img
			}
		},




		onLoad(option) {
			let that = this;
			uni.$off('talkMessage')
			uni.$off('liwuok')
			uni.$off('liwuoksvga_chat')
			uni.$off('liwuok_chat')
			uni.$off('liwuguangbo')

			if (option.daren_id) {
				uni.setStorageSync('daren_id', option.daren_id)
			}
			if (option.id) {
				this.id = option.id;
				this.room_id = option.id;
				this.roomId = option.id;
				this.fangjianhao = 'ID' + this.room_id
			}

			uni.$on("loginok", async (res) => {
				console.log('登录成功执行')

				var pages = getCurrentPages(); //获取所有页面的数组对象
				var currPage = pages[pages.length - 2]; //当前页面
				uni.reLaunch({
					url: currPage.$page.fullPath
				})
			})



			uni.$off('setLoginBoxFlag');
			uni.$on('setLoginBoxFlag', loginBoxFlag => {
				that.loginBoxFlag = loginBoxFlag;
			});

			if (!this.isLogin) {
				console.log('未登录')
				this.loginBoxFlag = true
				return false;
			}

			this.bind()
			this.fromid = uni.getStorageSync('user_id');
			this.userId = "user_" + uni.getStorageSync('user_id')


			if (uni.getSystemInfoSync().platform === 'android') {
				permision.requestAndroidPermission('android.permission.RECORD_AUDIO');
				permision.requestAndroidPermission('android.permission.CAMERA');
			}
			const {
				userSig
			} = genTestUserSig(this.userId, sdkappid, secretkey);
			
		
			
			this.sdkAppId = sdkappid;
			this.userSig = userSig;
			if (!sdkappid || !userSig) {
				uni.showToast({
					title: '请填写 sdkAppId、userSig',
					icon: 'none'
				});
			}

	

			this.info();
			this.$nextTick(() => {
				const query = uni.createSelectorQuery().in(this);
				query.select('.shangban').boundingClientRect(data => {
					const systemInfo = uni.getSystemInfoSync()
					this.scrollViewBasicTop = systemInfo.statusBarHeight + uni.upx2px(10)
					this.scrollViewHeight_room = systemInfo.safeArea.height + systemInfo.statusBarHeight -
						data.height - uni.upx2px(140)


				}).exec();

			})





			// 注册接受消息监听
			uni.$on('talkMessage', message => {
				console.log(message.type);
				switch (message.type) {
					case 'room_text':
						let inmsgsd = {
							is_self: false,
							type: 'text',
							lv: message.lv,
							content: message.data,
							fromhead: message.fromhead,
							chaoguan: message.chaoguan,
							vip: message.vip,
							fromid: message.fromid,
							fromname: message.fromname
						};
						if (message.fromid != this.fromid) {
							this.pushmsg(inmsgsd);
						}
						if (message.fromid == this.manage_id) {
							this.managemsg=message.data
							setTimeout(() => {
							this.managemsg=''
							}, 5000);
						}
						return;


					case "image":
						let inmsgsdsd = {
							is_self: false,
							type: 'image',
							lv: message.lv,
							content: message.data,
							fromhead: message.fromhead,
							fromid: message.fromid,
							fromname: message.fromname
						}
						if (message.fromid != this.fromid) {
							this.pushmsg(inmsgsdsd);
						}
						return;

					case 'system':
						let inmsg = {
							is_self: false,
							type: 'system',
							chaoguan: message.chaoguan,
							content: message.data
						};

						this.pushmsg(inmsg); //p收到有人进来了
						this.gaosuxinrenmailis() //告诉新人麦上的情况


						let yobianlist = {
							headimg: message.headimg,
							nickname: message.data,
							user_id: message.fromid
						};
						this.pushuserlist(yobianlist) //收到新人加入在线	
						this.gaosuxinrenuserlist() //告诉新人在线的情况


						return;
					case 'liwu': //广播礼物							
						this.guangbogiftshoudao(message)
						return;
					case 'roomqita': //通用广播
						this.tongyongmessge(message)
						return;
					case 'leaveGroup': //远端用户退出，list删除这个id							
						this.shanchuuserlist(message.fromid)
						return;
					case 'reglianmai': //向管理员申请上麦					
						if (message.manage_id == this.fromid) {
							this.tanchutongyi(message.fromid, message.fromname, message.fromhead)
						}
						return;

					case 'tongyishangmai': //管理员统一了我
						if (message.fromid == this.fromid) {
							this.tongyishangmai_zijikeshangmai()
						}
						//this.chulimourenhuatong(message.fromid, 1)
						return;

					case 'qianzhixiamia': //管理员强制下麦我
						if (message.fromid == this.fromid) {
							this.qiangzhiwoxiamai()
						}
						//this.chulimourenhuatong(message.fromid, 0) //
						return;

					case 'tichufangjian': //管理员踢出去
						if (message.fromid == this.fromid) {
							this.tichufangjian()
						}
						return;
					case 'userlist': //麦上的人发生变化
						this.shoudaozaixainuser(message.userlist)

					case 'mailist': //麦上的人发生变化

						if (message.mailistdata) {
							this.zijimaichane(message.mailistdata)
						}

						return;
					case 'guanbo':
						this.shoudaoguanbo()
						return;


				}
			});


			uni.$on('liwuguangbo', data => {
				uni.sendSocketMessage({
					data: JSON.stringify({
						type: 'liwu',
						room_id: this.room_id,
						fromid: this.fromid,
						headimg: this.fromhead,
						fromname: this.fromname,
						giftnum: data.giftnum,
						giftname: data.giftname,
						img: data.url,
						giftype: data.type
					})
				});
			});


			uni.$on('liwuok_chat', data => {
				this.guangtext(data)
				this.imggifshow(data.url)
			});
			uni.$on('liwuoksvga_chat', data => {
				this.guangtext(data)
				this.savggifshow(data.url)
			});
			this.donghua()
		},


		unmounted() {
			this.handleUninstallEvents();
		},
		onUnload() {
			this.destroyInstance();
			this.likaisocket()
			console.log('离开房间');
		},
		onBackPress(options) {
			if (options.from == 'backbutton') {
				this.guanbishow = true
				return true;
			}
			this.likaisocket()
			this.destroyInstance();

		},



		methods: {
			bgmpay(id,url) {
				
			// #ifndef APP
			this.msg('仅支持app内播放')
			return
			// #endif	
				
			const musicParam = {
			 id: 1,
			 path:url,
			 loopCount:0,
			 publish: true,
			 isShortFile: false,
			 startTimeMS: 0,
			 endTimeMS: 0,
			};
			this.trtcCloud.startPlayMusic(musicParam);
			},		
	
			async bgmshowopen() {
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/chat/musiclist',
					data: {}
				});
			if (result.statusCode == 200) {
				if (result.data.code == 200) {
					this.bgmshow=true
					this.musiclist=result.data.data
			}
			}	
					
					
			},
			
			refreshFn() {
				console.log('refreshFn登录返回')
			},
			closeGlobalLoginFn(e) {
				console.log(e)
				if (e != false) {
					this.loginBoxFlag = false;
					this.gohome()
				}
			},

			guangbogiftshoudao(massge) {
				if (massge.fromid != this.fromid) {
					if (massge.giftype == 'svga') {
						this.savggifshow(massge.img)
						setTimeout(() => {
							this.giftnum = massge.giftnum
							this.giftheadimg = massge.headimg
							this.giftname = massge.giftname
							this.giftformname = massge.fromname
							this.giftAnimation = true
						}, 2000);
					}
					if (massge.giftype == 'img') {
						setTimeout(() => {
							this.giftnum = massge.giftnum
							this.giftheadimg = massge.headimg
							this.giftname = massge.giftname
							this.giftformname = massge.fromname
							this.giftAnimation = true
						}, 2000);
						this.imggifshow(massge.img)
					}
					setTimeout(() => {
						this.giftAnimation = false
					}, 4000);

				}
			},
			savggifshow(data) {
				this.gifcontent = ''
				this.popshowgift = false
				this.liwubofang(data)
			},
			imggifshow(data) {
				this.giftimg = data
				this.giftitle = "成功送出礼物"
				this.giftianchu = true
				this.gifcontent = ''
				this.popshowgift = false
				setTimeout(() => {
					this.giftianchu = false
				}, 5000);
			},
			gloumai(item, index) {

				let that = this
				if (item.id == 0 && this.manage_id == this.fromid) {
					if (this.mailist[index].open == 0) {
						uni.showModal({
							title: '提示',
							content: '你确定要关闭' + index + '号麦位吗',
							success: function(res) {
								if (res.confirm) {
									that.mailist[index].open = 1
									that.maiweichage()
								} else if (res.cancel) {
									console.log('用户点击取消');
								}
							}
						});
					}
					if (this.mailist[index].open == 1) {
						uni.showModal({
							title: '提示',
							content: '你确定要打开' + index + '号麦位吗',
							success: function(res) {
								if (res.confirm) {
									that.mailist[index].open = 0
									that.maiweichage()
								} else if (res.cancel) {
									console.log('用户点击取消');
								}
							}
						});
					}
					return
				}




				if (item.open == 1) {
					this.msg('已封位，无法上麦')
					return
				}

				for (let i in this.mailist) {
					if (this.mailist[i].id == this.userinfo.fromInfo.id) {
						this.msg('你已经在麦上，请先下麦')
						return
					}
				}

				if (this.roomInfo.moshi == 1) {
					this.show_shenqing = true
					return
				}




				this.mailist[index].id = this.userinfo.fromInfo.id
				this.mailist[index].open = 0
				this.mailist[index].is_mai = 0
				this.mailist[index].avatar = this.userinfo.fromInfo.avatar
				this.mailist[index].nickname = this.userinfo.fromInfo.nickname
				this.is_kaimai = true
				this.maiweichage()
				this.zhudongshangmai()
			},

			appshare() {

				console.log(sharedata)

				let sharedata = {
					type: 1,
					strShareUrl: this.share.share_url,
					strShareTitle: this.share.share_title,
					strShareSummary: this.share.share_sub,
					strShareImageUrl: this.share.share_img,
				}
				this.sharedata = sharedata
				this.$refs.sharepopup.open();

			},
			sharelist() {

				this.posterObj.views = [

					{
						type: 'text',
						text: this.share.share_title,
						css: {
							left: '0',
							top: '80rpx',
							width: '100%',
							textAlign: 'center',
							fontSize: '24rpx',
							color: '#4070FF',
							lineHeight: '33rpx'
						}
					},


					{
						type: 'qrcode',
						text: this.share.share_url,
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
						src: this.roomInfo.image,
						css: {
							left: '32rpx',
							top: '384rpx',
							width: '90%',
							borderRadius: '16rpx'
						}
					}

				]
				console.log(this.posterObj.views)
			},


updateMoney(){
	
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

			clickBtn_shenqing(res) {
				this.show_shenqing = false

				if (res == 1) {
					console.log('提出申请')
					uni.sendSocketMessage({
						data: JSON.stringify({
							type: 'reglianmai',
							room_id: this.room_id,
							fromid: this.fromid,
							fromname: this.fromname,
							fromhead: this.fromhead,
							manage_id: this.manage_id
						})
					});
				}
			},
			closedPopup() {
				this.isEmojiOpen = false
			},
			liaotian() {
				this.isFocus = true
				this.isshuru = true
			},
			shiquisd() {
				this.isFocus = false
				this.isshuru = false
			},

			liwubofang(url) {
				this.liwusvgashow = true
				setTimeout(() => {
					this.bofangsvga(url)
				}, 500);
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





			async info() {
				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/chat/getChatRoom',
					data: {
						room_id: that.room_id,
						fromid: that.fromid
					}
				});

				if (result.statusCode == 200) {
					if (result.data.code == 200) {

						if (result.data.data.roomInfo.open == 0) {
							this.shoudaoguanbo()
							return
						}



						if (!result.data.data.roomInfo.id) {

							uni.showModal({
								title: '提示',
								content: '房间号不存在',
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
							return
						}

						this.mailist[0].id = result.data.data.roomInfo.manage_id
						this.mailist[0].open = 0
						this.mailist[0].is_mai = 0
						this.mailist[0].avatar = result.data.data.roomInfo.manage.avatar
						this.mailist[0].nickname = result.data.data.roomInfo.manage.nickname

						that.share = result.data.data.share;
						that.userinfo = result.data.data;
						that.roomInfo = result.data.data.roomInfo
						that.roomtitle = result.data.data.roomInfo.title
						that.roomtitle_sub = result.data.data.roomInfo.title_sub
						that.roommoshi = result.data.data.roomInfo.moshi
						that.manage = result.data.data.roomInfo.manage
						that.fromname = result.data.data.fromInfo.nickname;
						that.fromhead = result.data.data.fromInfo.avatar;
						that.chaoguan = result.data.data.fromInfo.is_manage_normal;
						that.vip = result.data.data.fromInfo.vip;
						that.lv = result.data.data.fromInfo.lv;
						that.roomTitle = result.data.data.roomInfo.title
						that.manage_id = result.data.data.roomInfo.manage_id
						//that.userlist = result.data.data.userlist
						that.roombg = result.data.data.roomInfo.image
						that.emolist = that.configInfo.emolist

						var join_room = '{"type":"join_room","lv":"' + this.lv + '",data":"' + this.fromname +
							'","vip":"' + this.vip + '","chaoguan":"' + this.chaoguan + '","room_id":"' + this
							.room_id + '","fromid":"' + this.fromid + '"}';

						uni.sendSocketMessage({
							data: JSON.stringify({
								type: 'join_room',
								room_id: this.room_id,
								chaoguan: this.chaoguan,
								vip: this.vip,
								fromid: this.fromid,
								headimg: this.fromhead,
								data: this.fromname
							})
						});


						if (this.manage_id == this.fromid) {
							this.is_zhubo = true
							this.is_manage = true
						}


						// #ifdef APP-PLUS	
						console.log('开始连接腾讯云')
						//进入房间
						setTimeout(() => {
							that.enterRoom()
						}, 1000);
						// #endif


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


			guangtext(magess) {

				let that = this;
				let bodynei
				bodynei = '送出【' + magess.giftname + '】x' + magess.giftnum
				var message = '{"data":"' + bodynei + '","fromname":"' + this.fromname + '","fromhead":"' + this
					.fromhead + '","sec":"0","lv":"' + this.lv + '","type":"text","fromid":"' + this.fromid +
					'","room_id":"' + this.room_id + '"}';
				let inmsgsd = {
					is_self: false,
					type: 'text',
					lv: this.lv,
					content: bodynei,
					fromhead: this.fromhead,
					fromname: this.fromname,
					create_time: 0
				};
				this.pushmsg(inmsgsd);
				this.$socket.send(message);


			},

			sendmsg() {

				if (this.sendmsgBoy == '') {
					this.msg('说点什么呀')
					return
				}

				let that = this;
				var message = '{"data":"' + this.sendmsgBoy + '","fromname":"' + this.fromname + '","fromhead":"' + this
					.fromhead + '","sec":"0","lv":"' + this.lv + '","type":"text","fromid":"' + this.fromid +
					'","chaoguan":"' + this.chaoguan + '","vip":"' + this.vip + '","room_id":"' + this.room_id + '"}';
				let inmsgsd = {
					is_self: false,
					type: 'text',
					lv: this.lv,
					content: this.sendmsgBoy,
					fromhead: this.fromhead,
					chaoguan: this.chaoguan,
					vip: this.vip,
					fromname: this.fromname,
					create_time: 0
				};
				this.pushmsg(inmsgsd);
				this.shiquisd()
				this.$socket.send(message);
				this.sendmsgBoy = ""
			},

			pushmsg(data) {
				this.talkList.push(data);
				this.bootem();
			},
			pushuserlist(data) {
				let shifouyou = false
				for (let i in this.userlist) {
					if (this.userlist[i].user_id == data.user_id) {
						shifouyou = true
						break;
					}
				}
				if (shifouyou == false) {
					this.userlist.push(data);
				}

			},


			async gaibianzhuangtai(userid) {
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/chat/room_update_user',
					data: {
						user_id: that.fromid,
						room_id: that.room_id
					}
				});

			},


			bootem() {
				this.$nextTick(() => {
					//这里将 最后一条聊天的下标'chatItem_' + index 赋值给 刚刚绑定的scrollIntoIndex。这样就可以实现滚动到底部
					if (this.talkList.length > 1) {
						let index = this.talkList.length - 1;

						this.scrollIntoIndex = 'chatItem_' + index;
					}

				});

			},




			async list() {
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/chat/room_userlist',
					data: {
						room_id: that.room_id,
						page: that.ajax.page
					}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {


						return result.data.data.data.reverse();
					}
				} else {
					uni.showToast({
						icon: 'none',
						title: that.$errorMsg
					});
				}
			},






			// 发消息选中emoji
			chooseEmoji(imageurl) {
				this.popshow = false
				let inmsgsd = {
					is_self: false,
					type: 'image',
					lv: this.lv,
					content: imageurl,
					fromhead: this.fromhead,
					fromname: this.fromname,
					create_time: 0
				};
				this.pushmsg(inmsgsd);
				uni.sendSocketMessage({
					data: JSON.stringify({
						type: 'image',
						room_id: this.room_id,
						fromid: this.fromid,
						lv: this.lv,
						fromhead: this.fromhead,
						fromname: this.fromname,
						data: imageurl
					})
				});



			},


			tabChange(e) {
				this.emojiindex = e
			},

			zhuanban() {
				this.msg('装扮功能开发中')
			},

			liwu() {
				this.gift_userid = 0
				// #ifdef MP
				this.mailist_gift = this.mailist
				// #endif
				// #ifndef MP
				this.mailist_gift = JSON.stringify(this.mailist)
				// #endif
				
						
				this.popshowgift = true

			},
			giftusere(item) {

				console.log(item)
				let list = [{
					id: item.id,
					open: 0,
					is_mai: 0,
					avatar: item.avatar,
					nickname: item.nickname,
					name: item.nickname,
				}]
				this.gift_userid = item.id
				this.userinfoshow = false
				this.mailist_gift = JSON.stringify(list)

				this.popshowgift = true
			},


			//、、、聊天、、、、



			destroyInstance() {
				// #ifdef APP-PLUS
				TrtcCloud.destroyInstance();
				// #endif

			},
			createTrtcCloud() {
				this.trtcCloud = TrtcCloud.createInstance();
				this.handleEvents();
			},
			enterRoom() {
				try {
					this.createTrtcCloud(); //连接云	      

					const {
						roomId,
						userId,
						sdkAppId,
						appScene,
						userSig,
						role
					} = this;
					let param = {
						roomId: +roomId,
						userId,
						sdkAppId,
						userSig,
						role
					};
					this.trtcCloud.enterRoom(param, appScene);
				} catch (error) {
					this.msg(`进入房间错误 = ${JSON.stringify(error)}`)
					console.log(`进入房间错误 = ${JSON.stringify(error)}`);
				}
			},
			exitRoom() {
				try {
					if (this.manage_id == this.fromid) {
						this.fangjianclose()
					}
					// #ifdef APP-PLUS
					console.log('执行退出房间')
					this.stopLocalAudio();
					this.trtcCloud.exitRoom();
					// #endif

					this.remoteUserIdList = [];
				} catch (e) {
					console.log('退出错误')
					// TODO handle the exception
				}
			},


			startLocalAudio() {
				this.is_kaimai = true
				this.msg('麦克风已开启')
				for (let i in this.mailist) {
					if (this.mailist[i].id == this.fromid) {
						this.mailist[i].is_mai = 0
					}
				}
				this.maiweichage()
				// #ifdef APP-PLUS
				this.trtcCloud.startLocalAudio();
				// #endif			
			},
			stopLocalAudio() {

				this.is_kaimai = false
				for (let i in this.mailist) {
					if (this.mailist[i].id == this.fromid) {
						this.mailist[i].is_mai = 1
					}
				}

				this.maiweichage()
				// #ifdef APP-PLUS
				this.trtcCloud.stopLocalAudio();
				// #endif

			},

			muteLocalAudio() {
				this.trtcCloud.muteLocalAudio(true);
			},

			muteLocalAudioopen() {
				this.trtcCloud.muteLocalAudio(false);
			},
			muteLocalAudioolose(userid) {

				this.trtcCloud.muteRemoteAudio(userid, true)
			},

			//用户申请连麦给管理员，需要发送一个send给管理员，管理员收到，点确认回复他。他在调用
			shenqinglianmai() {
				this.show_shenqing = true
			},

			//主动上麦	
			zhudongshangmai() {
				this.is_zhubo = true
				// #ifdef APP-PLUS
				this.trtcCloud.switchRole(TRTCRoleType.TRTCRoleAnchor)
				this.startLocalAudio();
				this.is_kaimai = true
				// #endif	

			},

			tongyishangmai_zijikeshangmai() {
				this.msg('主播同意我上麦')

				for (let index in this.mailist) {
					if (this.mailist[index].id == 0 && this.mailist[index].open == 0) {
						this.mailist[index].id = this.userinfo.fromInfo.id
						this.mailist[index].open = 0
						this.mailist[index].is_mai = 0
						this.mailist[index].avatar = this.userinfo.fromInfo.avatar
						this.mailist[index].nickname = this.userinfo.fromInfo.nickname
						this.maiweichage()
						this.zhudongshangmai()
						break;
					}
				}




			},

			qiangzhiwoxiamai() {
				this.msg('被管理踢下麦')
				this.xiamai()
			},





			//处理刚才上麦的人话筒状态

			chulimourenhuatong(user_id, type) {
				for (let i in this.userlist) {
					if (this.userlist[i].user_id == user_id) {
						this.userlist[i].is_zhubo = type
					}
				}
			},


			muteAllRemoteAudio() {
				this.remoteAudioMuteState = !this.remoteAudioMuteState;
				this.trtcCloud.muteAllRemoteAudio(this.remoteAudioMuteState);
			},

			handleEvents() {
				this.trtcCloud.on('onWarning', (res) => {
					uni.showToast({
						title: `onWarning: ${JSON.stringify(res)}`,
						icon: 'none',
					});
				});
				this.trtcCloud.on('onError', (res) => {
					console.log('- onError: ', JSON.stringify(res));
					uni.showToast({
						title: `error: ${JSON.stringify(res)}`,
						icon: 'none',
					});
				});
				this.trtcCloud.on('onEnterRoom', (result) => {

					if (result > 0) {
						console.log('连接腾讯云成功')
						if (this.manage_id == this.fromid) {
							this.is_zhubo = true
							this.is_manage = true

							// #ifdef APP-PLUS							
							this.trtcCloud.switchRole(TRTCRoleType.TRTCRoleAnchor)
							this.trtcCloud.startLocalAudio();
							this.is_kaimai = true
							// #endif								
						}

					} else {
						console.log(`enter room failed，error code = ${result}`);
					}
				});
				this.trtcCloud.on('onExitRoom', (reason) => {

					const reasonList = ['主动调用 exitRoom 退房', '被服务器踢出当前房间', '当前房间整个被解散'];
					console.log('退出房间：' + reasonList[reason])


				});
				this.trtcCloud.on('onSendFirstLocalAudioFrame', (res) => {
					console.log(`开始传输音频，可以说话 = ${JSON.stringify(res)}`);
				});

				this.trtcCloud.on('onSwitchRole', (res) => {
					console.log(`转换身份结果 = ${JSON.stringify(res)}`);
				});

				this.trtcCloud.on('onUserAudioAvailable', (res) => {
					if (res.available == true) {
						let user_id = res.userId.slice(5)
						for (let i in this.mailist) {
							if (this.mailist[i].id == user_id) {
								this.mailist[i].maikefeng = true
							}
						}
						console.log(res.userId + '在说话');

					} else {
						let user_id = res.userId.slice(5)
						for (let i in this.mailist) {
							if (this.mailist[i].id == user_id) {
								this.mailist[i].maikefeng = false
							}
						}
						console.log(res.userId + '没说话');
					}

				});




				this.trtcCloud.on('onRemoteUserEnterRoom', (userId) => {
					if (!this.remoteUserIdList.includes(userId)) {
						this.remoteUserIdList.push(userId);
					}
					console.log('远端用户进入' + userId)
				});


				this.trtcCloud.on('onRemoteUserLeaveRoom', (res) => {
					const {
						userId,
						reason
					} = res;
					if (userId) {
						const list = this.remoteUserIdList.filter(val => val !== userId);
						this.remoteUserIdList = list;
					}
					console.log('远端用户退出' + userId)

				});


			},
			handleUninstallEvents() {
				this.trtcCloud.off('*');
			},
			//、、、、、、、、、、、






			async likaisocket() {

				uni.sendSocketMessage({
					data: JSON.stringify({
						type: 'leaveGroup',
						room_id: this.room_id,
						fromid: this.fromid
					})
				});



				for (let i in this.userlist) {
					if (this.userlist[i].user_id == this.fromid) {
						this.xiamai()
						break
					}
				}


				this.exitRoom()

			},
			//远端离开房间的某一个
			shanchuuserlist(user_id) {
				console.log('socket远端离开了' + user_id)

				for (let i in this.userlist) {
					if (this.userlist[i].user_id == user_id) {
						this.userlist.splice(i, 1);
					}
				}



				if (user_id == this.manage_id) {
					this.shoudaoguanbo()
				}
			},
			//管理员同意用户上麦
			manage_tongyishangmai(res) {
				this.tanchutongyiis = false
				if (res == 1) {
					uni.sendSocketMessage({
						data: JSON.stringify({
							type: 'tongyishangmai',
							room_id: this.room_id,
							fromid: this.shen_userid
						})
					});
				}
			},

			//管理员下麦用户上麦
			qianzhixiamia(id) {

				if (this.manage_id == id) {
					this.msg('自己踢自己干啥')
					return
				}
				uni.sendSocketMessage({
					data: JSON.stringify({
						type: 'qianzhixiamia',
						room_id: this.room_id,
						fromid: id
					})
				});
			},
			//管理员踢出去我
			tichufanfgjian(id) {
				if (this.manage_id == id) {
					this.msg('自己踢自己干啥')
					return
				}
				this.exitRoom()
				console.log(id)
				uni.sendSocketMessage({
					data: JSON.stringify({
						type: 'tichufangjian',
						room_id: this.room_id,
						fromid: id
					})
				});
			},







			tanchutongyi(userid, nickename, headimg) {
				this.shen_userid = userid
				this.shen_nickename = nickename + '发起了上麦请求'
				this.tanchutongyiis = true
			},
			xiamai() {
				this.is_zhubo = false
				this.is_kaimai = false

				for (let index in this.mailist) {
					if (this.mailist[index].id == this.userinfo.fromInfo.id) {
						this.mailist[index].id = 0
						this.mailist[index].open = 0
						this.mailist[index].is_mai = 0
						this.mailist[index].avatar = ''
						this.mailist[index].nickname = index + '号麦位'
					}
				}

				this.msg('成功')
				this.maiweichage()
				// #ifdef APP-PLUS
				this.trtcCloud.switchRole(TRTCRoleType.TRTCRoleAudience)
				this.stopLocalAudio();
				// #endif
			},

			handleEmoji() {
				this.popshow = true
			},



			async showinfo(id) {
				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/index/GetUser',
					data: {
						user_id: id
					}
				});

				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						that.userinfoshow = true

						for (let i in that.mailist) {
							if (that.mailist[i].id == id) {
								that.ismaishang = true
							}
						}



						that.userinfo = result.data.data.userinfo;

					}
				} else {
					uni.showToast({
						icon: 'none',
						title: that.$errorMsg
					});
				}
			},


			tichufangjian() {
				setTimeout(() => {
					uni.navigateBack()
				}, 5000);
				uni.showModal({
					title: '提示',
					content: '你被管理员踢出，5秒后自动离开',
					confirmText: '确定',
					showCancel: false,
					success: function(res) {
						if (res.confirm) {
							uni.navigateBack()
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},

			goBackfanhui() {
				//this.likaisocket()
				//this.destroyInstance()
				// 通过判断当前页面的页面栈信息，是否有上一页进行返回，如果没有则跳转到首页
				const pages = getCurrentPages()
				if (pages && pages.length > 0) {

					const firstPage = pages[0]
					if (pages.length == 1 && (!firstPage.route || firstPage.route != 'pages/index')) {
						uni.reLaunch({
							url: '/pages/index'
						})
					} else {
						uni.navigateBack()
					}
				} else {
					console.log(1113)
					uni.reLaunch({
						url: '/pages/index'
					})
				}
			},

			gohome() {
				this.likaisocket()
				this.destroyInstance()
				uni.reLaunch({
					url: '/pages/index'
				})
			},
			maiweichage() {
				uni.sendSocketMessage({
					data: JSON.stringify({
						type: 'mailist',
						room_id: this.room_id,
						mailistdata: this.mailist
					})
				});
			},

			zijimaichane(mailist) {
				//console.log('收到麦上的名单')
				this.mailist = mailist
			},
			bind() {
				let msg = {
					'type': 'bind',
					'fromid': uni.getStorageSync('user_id')
				};

				uni.sendSocketMessage({
					data: JSON.stringify(msg),
					success: (res) => {
						console.log('重新连接聊天服务器' + uni.getStorageSync('user_id'), res)
					},
					fail: (res) => {
						console.log('重复绑定会员id')
						//console.log('绑定会员id失败'+uni.getStorageSync('user_id'), res)
					}
				});

			},
			mixwindows() {
				uni.reLaunch({
					url: '/pages/index'
				})
			},


			jinggaoguanbo() {
				let that = this
				uni.showModal({
					title: '提示',
					content: '你确定要强制关闭该房间吗？房间关闭用户强制退出',
					success: function(res) {
						if (res.confirm) {							
							
							uni.sendSocketMessage({
								data: JSON.stringify({
									type: 'roomqita',
									room_id: that.room_id,
									title: that.roomtitle,
									datatype: 'guanbo'
								})
							});
						
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			guanbo() {
				let that = this
				uni.showModal({
					title: '提示',
					content: '你确定要关播吗？房间关闭用户强制退出',
					success: function(res) {
						if (res.confirm) {
							uni.sendSocketMessage({
								data: JSON.stringify({
									type: 'guanbo',
									room_id: this.room_id
								})
							});
							that.likaisocket()
							that.destroyInstance()
							uni.navigateBack()
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},

			async fangjianclose(userid) {
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/chat/room_close',
					data: {
						room_id: that.room_id
					}
				});

			},

			async xiugairoom() {
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/chat/room_update',
					data: {
						room_id: that.room_id,
						roomtitle: that.roomtitle,
						roomtitle_sub: that.roomtitle_sub,
						roommoshi: that.roommoshi
					}
				});


				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						that.shezhishow = false
						that.msg('设置成功')
						that.roomInfo.title = that.roomtitle
						that.roomInfo.title_sub = that.roomtitle_sub
						that.roomInfo.moshi = that.roommoshi
						uni.sendSocketMessage({
							data: JSON.stringify({
								type: 'roomqita',
								room_id: that.room_id,
								title: that.roomtitle,
								datatype: 'moshichane',
								title_sub: that.roomtitle_sub,
								moshi: that.roommoshi,
							})
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

			shoudaoguanbo() {
				setTimeout(() => {
					this.goBackfanhui()
				}, 5000);
				this.guanboshow = true
			},
			gaosuxinrenmailis() {
				if (this.manage_id == this.fromid) {

					this.maiweichage()
				}
			},
			gaosuxinrenuserlist() { //管理员下发给新人
				if (this.manage_id == this.fromid) {
					uni.sendSocketMessage({
						data: JSON.stringify({
							type: 'userlist',
							room_id: this.room_id,
							userlist: this.userlist
						})
					});
				}
			},
			jinggaopass() {
				this.tishishow = true
				this.tishi_title = '巡管警告'
				this.tishi_body = this.jinggaobody
				this.jinggaoshow = false

				uni.sendSocketMessage({
					data: JSON.stringify({
						type: 'roomqita',
						room_id: this.room_id,
						datatype: 'jinggao',
						tishi_title: this.tishi_title,
						tishi_body: this.jinggaobody
					})

				});
			},

			shoudaozaixainuser(userlist) {
				this.userlist = userlist

			},
			async guanzhu() {
				if (!this.isLogin) {
					this.loginBoxFlag = true
					return false;
				}
				let result = await this.flowUser(this.manage_id)
				this.roomInfo.is_follow = result.is_follow
				this.msg(result.msg)
			},
			tongyongmessge(massge) {
				if (massge.datatype == 'moshichane') {
					this.roomInfo.title = massge.title
					this.roomInfo.title_sub = massge.title_sub
					this.roomInfo.moshi = massge.datatype
				}
				if (massge.datatype == 'jinggao') {
					this.tishi_title = massge.tishi_title
					this.tishi_body = massge.tishi_body
					this.tishishow = true

				}
				if (massge.datatype == 'guanbo') {
					this.shoudaoguanbo()
				}
				
				
				
			},
			chanebang(type) {
				this.bang_type = type
				if (type < 4) {
					this.getbanglist(type)
				}
			},
			async getbanglist(type) {
				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/gift/rank',
					data: {
						id: that.manage_id,
						type: type
					}
				});


				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						that.bangdanlist = result.data.data;
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
			donghua() {
				
				
				 var baoxiangmone = uni.createAnimation({
				      duration: 1000,
				      timingFunction: 'ease',
				    })
				 this.baoxiangmone = baoxiangmone
				 baoxiangmone.translate(-100).step({ duration:500 })
				 baoxiangmone.scale(3, 3).step()
				 baoxiangmone.scale(1, 1).step()
				 baoxiangmone.translate(0).step({ duration: 500 })
				 this.baoxiangmone = baoxiangmone.export()
					  
					  
				// 1: 创建动画实例animation:
				var animation = uni.createAnimation({
					duration: 500,
					timingFunction: 'ease',
				})
				this.animation = animation
				var next = true;
				//连续动画关键步骤
				setInterval(function() {
					//2: 调用动画实例方法来描述动画
					if (next) {
						animation.translateX(4).step();
						animation.rotate(19).step()
						next = !next;
					} else {
						animation.translateX(-4).step();
						animation.rotate(-19).step()
						next = !next;
					}
					//3: 将动画export导出，把动画数据传递组件animation的属性 
					this.animation=animation.export()					
				}.bind(this), 300)
			},
		}
	};
</script>

<style lang="scss" scoped>
	.template-content {
		font-size: 12px;
		background-image: linear-gradient(to top, #3d0973 20%, #4b2a6d 80%);
		color: #ffffff;
		background-size: 100% 100%;
		background-size: cover;
		background-repeat: no-repeat;
		background-attachment: fixed;
		/*关键*/
		background-position: center;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
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
		color: #ffffff;
		font-size: 18px;

		.icon {
			display: block;
			flex: 1;
			margin: auto;
			text-align: center;
		}

		&:before {
			content: ' ';
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
			background-color: #ffffff;
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
		border-image-source: url(@/static/img/tnchat8.png);
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
					border: 1rpx solid #c6d1d8;
					border-radius: 39rpx;

					&__left-icon {
						width: 10%;
						font-size: 44rpx;
						margin-left: 20rpx;
						margin-right: 5rpx;
						color: #c6d1d8;
					}

					&__content {
						width: 80%;
						padding-left: 10rpx;

						&--verify-code {
							width: 56%;
						}

						input {
							font-size: 30rpx;
							color: #78909c;
							// letter-spacing: 0.1em;
						}
					}

					&__right-icon {
						width: 10%;
						font-size: 34rpx;
						margin-right: 20rpx;
						color: #78909c;
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
					color: #ffffff;
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
		color: #c6d1d8;
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


	.bottom_room {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
	}

	.bottom-div_room {
		width: 100%;
		display: flex;
		align-items: center;
		padding: 10px;
		flex-direction: row;
		box-sizing: border-box;
		transition: all 0.3s;

		.send {
			font-size: 14px;
			background-color: #ff007f;
			color: white;
			border-radius: 4px;
			width: 50px;
			height: fit-content;
			padding: 6px;
			margin-left: 12rpx;
			text-align: center;
		}
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
			background-color: #ff007f;
			color: white;
			border-radius: 4px;
			width: 50px;
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
				width: 25%;
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
		color: #000000;
	}

	.btn-left {
		display: flex;
		padding: 0;
		margin: 0;
		margin-right: 10px;
	}

	.btn {
		padding: 8px;
		color: rgb(66, 255, 214);
		max-width: 62vw;
		border-radius: 50px;
		background-color: rgba(255, 255, 255, 0.2);
		display: flex;
		margin: 0;
		margin-left: 5px;
	}

	.btn-yuan {
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
		background-color: white;
		color: #000000;
		border-radius: 6px;
		box-sizing: border-box;
		height: 34px;
		line-height: 34px;
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
				animation: loading 2s cubic-bezier(0.17, 0.37, 0.43, 0.67) infinite;
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

	.xuanfuyou {
		position: fixed;
		top: 100px;
		right: 0;
		width: 80px;
	}

	.beiinguser {
		//background-color:rgb(0 0 0 / 0.68);
		margin-top: 15px;
		margin-left: 1px;
		border-radius: 12px;
	}


	/* 用户信息 start */
	.user-info {
		&__container {}

		&__avatar {
			width: 170rpx;
			height: 170rpx;
			border: 8rpx solid rgba(255, 255, 255, 0.05);
			border-radius: 50%;
			overflow: hidden;
			box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
		}

		&__nick-name {
			margin-top: 26rpx;
			font-size: 36rpx;
			font-weight: 600;
			text-align: center;
		}
	}

	/* 用户信息 end */
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

	.dibumimai {
		right: 19px;
		position: absolute;
		bottom: 30px;
		font-size: 20px;
		z-index: 1;
	}

	.beijing {
		padding: 5px 10px;
		border-radius: 2500px;
		background-color: #ffffff14;
	}

	.beijing2 {
		padding: 5px 10px;
		border-radius: 2500px;
		background-color: #1f1f1fe6;
	}

	.message {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;

		&__left {
			width: 10%;
		}

		&__middle {
			width: 80%;
			padding-left: 20rpx;
			padding-right: 40rpx;
		}

		&__right {
			width: 10%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		&__name {
			font-size: 14px;
			margin-bottom: 8rpx;
		}

		&__content {
			font-size: 12px;
			color: #838383;
		}

		&__tips {
			&__icon {
				font-size: 36rpx;
				color: #AAAAAA;
			}
		}
	}

	.giftmove {
		z-index: 150;
		animation: mymove 5s infinite;
		height: 30px;
		position: fixed;
		top: 100px;
		left: -160px;
	}

	.gifimgsong {
		width: 30px;
		height: 30px;
		vertical-align: middle;
	}

	.yishuzi {
		font-size: 20px;
		font-weight: 600;
		color: #ffff00;
		text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd, -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd, 0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;
	}

	@keyframes mymove {

		//滑动出来1s 停留展示1s
		0% {
			left: -160px;
			display: none;
		}

		1% {
			left: -160px;
			display: block;
		}

		20% {
			left: 50px
		}

		80% {
			left: 50px
		}

		99% {
			left: 50px
		}

		100% {
			left: 50px;
			display: none;
		}
	}

	.fufei {
		-webkit-filter: blur(2px);
		/*像素值越大，越模糊*/
		-moz-filter: blur(2px);
		-ms-filter: blur(2px);
		filter: blur(3px);
		filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=2, MakeShadow=false);

	}

	.shangbanquanbu {
		background-color: rgba(0, 0, 0, 0.2);
		backdrop-filter: blur(1px);
		height: 100%;
	}

	.fangda {
		animation: mymove 2s infinite;
		animation-fill-mode: forwards;
	}

	@keyframes mymove {

		//滑动出来1s 停留展示1s
		0% {
			transform: scale(1);
			-webkit-transform: scale();
			display: none;
		}

		80% {
			transform: scale(1.58);
			-webkit-transform: scale(1.58);
		}

		100% {
			transform: scale(1);
			-webkit-transform: scale(1);
			display: none;
		}
	}
</style>
