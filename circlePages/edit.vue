<template>
	<view class="template-edit tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed  customBack>
			<view slot="back" class='tn-custom-nav-bar__back' @click="fanhui()">
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

			<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top tn-margin">
				<view class="tn-flex justify-content-item">
					<view class="tn-bg-black tn-color-white tn-text-center"
						style="border-radius: 100rpx;margin-right: 8rpx;width: 45rpx;height: 45rpx;line-height: 45rpx;">
						<text class="tn-icon-topics" style="font-size: 30rpx;"></text>
					</view>
					<view class="tn-text-lg tn-padding-right-xs tn-text-bold">

						<svg class="icon" aria-hidden="true">
							<use xlinkHref="iconpingguo"></use>
						</svg>



						想说点什么
					</view>
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







				<tn-image-upload-drag ref="imageUpload" :isadd="false" :action="action" :width="210" :height="210"
					:formData="formData" :fileList="fileList" :disabled="disabled" :autoUpload="autoUpload"
					:maxCount="maxCount" :showUploadList="showUploadList" :showProgress="showProgress"
					:deleteable="deleteable" :customBtn="customBtn" @sort-list="onSortList" @on-uploaded="onUploaded"
					@upjindu="upjindu" />







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
					<view class="tn-icon-image   tn-color-black" style="font-size: 20px;margin-left: 10px;"
						@click="tupiantap">
						<view class="tn-color-gray tn-text-sm tn-margin-top-sm">图片</view>
					</view>
					<view @click="voctap" class="tn-icon-voice  tn-color-black"
						style="font-size: 20px;margin-left: 10px;" v-if="is_add_voc">
						<text class="tn-icon-vip tn-color-red" v-if="configInfo.vocd_is_vip"></text>
						<view class="tn-color-gray tn-text-sm tn-margin-top-sm">语音</view>
					</view>
					<view @click="vodiantap" class="tn-icon-video  tn-color-black"
						style="font-size: 20px;margin-left: 10px;" v-if="is_add_vod">
						<text class="tn-icon-vip tn-color-red" v-if="configInfo.vocd_is_vip"></text>
						<view class="tn-color-gray tn-text-sm tn-margin-top-sm">视频</view>
					</view>
					<view @click="pay_price_show=true" class="tn-icon-money  tn-color-black"
						style="font-size: 20px;margin-left: 10px;" v-if="configInfo.is_goods_pay">
						<text class="tn-color-red tn-text-sm" v-if="pay_price">{{pay_price}}</text>
						<view class="tn-color-gray tn-text-sm tn-margin-top-sm">付费</view>
					</view>

					<view v-if="up.is_add_link" @click="linkshow=true" class="tn-icon-link  tn-color-black"
						style="font-size: 20px;margin-left: 10px;">
						<view class="tn-color-gray tn-text-sm tn-margin-top-sm">链接</view>
					</view>

					<view v-if="up.is_add_cloud" @click="cloudshow=true" class="tn-icon-upload  tn-color-black"
						style="font-size: 20px;margin-left: 10px;">
						<view class="tn-color-gray tn-text-sm tn-margin-top-sm">网盘</view>
					</view>
					<view v-if="up.is_add_pk" @click="pkshow=true;addpk()" class="tn-icon-trophy  tn-color-black"
						style="font-size: 20px;margin-left: 10px;">
						<view class="tn-color-gray tn-text-sm tn-margin-top-sm">投票</view>
					</view>

					<view v-if="up.is_add_hongbao" @click="hongbaoshow=true" class="tn-icon-lucky-money  tn-color-black"
						style="font-size: 20px;margin-left: 15px;">
						<view class="tn-color-gray tn-text-sm tn-margin-top-sm">红包</view>
					</view>
					

				</view>
			</view>

			<block v-if="shop_id">
				<view class="tn-margin-bottom-lg" style="position: relative;">

					<view class="article-shadow tn-margin">
						<view class="tn-flex">
							<view class="image-pic tn-margin-sm">
								<view class="image-article">
									<image :src="shop.images[0]" style="width: 100px;height: 100px;" mode="aspectFill">
									</image>
								</view>
							</view>
							<view class="tn-margin-sm tn-padding-top-xs" style="width: 100%;">
								<view class="tn-text-lg tn-text-bold  tn-text-ellipsis-2">
									{{ shop.goods_name }}
								</view>
								<view class="tn-flex tn-flex-row-between tn-flex-col-between tn-padding-top-xs"
									style="min-height: 105rpx;">

									<view class="justify-content-item tn-flex tn-flex-col-center">
										<text class="tn-blogger-content__count-icon tn-color-purplered"
											style="font-size: 24rpx;">￥</text>
										<text class="tn-padding-right-sm tn-text-bold tn-color-purplered"
											style="font-size: 38rpx;">{{ shop.price }}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
					<tn-badge :radius="53" backgroundColor="#00FFC6" fontColor="#000000" :absolute="true"
						:translateCenter="false" @click="shop_id=0;shop=[]">
						<text style="font-size: 18px;">x</text>
					</tn-badge>
				</view>
			</block>






			<block v-if="vodurl">
				<view class="tn-margin " style="position: relative;border-radius: 10rpx;padding: 10rpx 30rpx 0 30rpx;">
					<text class="tn-color-red tn-icon-help"></text>视频
				</view>

				<view class=" tn-margin tn-bg-gray--light"
					style="position: relative;border-radius: 10rpx;padding: 10rpx 30rpx;">

					<view style="">
						<view class="voice-line-wrap">
							视频名：{{video.name}}
						</view>
						<view class="voice-line-wrap">
							视频大小：{{video.sizi}}
						</view>
						<view class="voice-line-wrap" @click="playVideo(vodurl)">
							<tn-tag backgroundColor="#00FFC6" fontColor="#000000">视频预览</tn-tag>
						</view>
						<tn-badge @click="vodurl=''" :radius="53" backgroundColor="#00FFC6" fontColor="#000000"
							:absolute="true" :translateCenter="false">
							<text style="font-size: 18px;">x</text>
						</tn-badge>
					</view>
				</view>

			</block>


			<block v-if="webshow">
				<view class="tn-margin " style="position: relative;border-radius: 10rpx;padding: 10rpx 30rpx 0 30rpx;">
					<text class="tn-color-red tn-icon-help"></text>网页地址（将目标网页直接显示）
				</view>
				<view class="tn-margin tn-bg-gray--light"
					style="position: relative;border-radius: 10rpx;padding: 10rpx 30rpx;">
					<input placeholder="填写网页视频地址或粘贴" v-model="webbody" name="input"
						placeholder-style="color:#AAAAAA;font-size: 12px"></input>
					<view style="" @click="webshow=false;webbody=''">
						<tn-badge :radius="53" backgroundColor="#00FFC6" fontColor="#000000" :absolute="true"
							:translateCenter="false">
							<text style="font-size: 18px;">x</text>
						</tn-badge>
					</view>
				</view>
			</block>

			<block v-if="linkshow">
				<view class="tn-margin " style="position: relative;border-radius: 10rpx;padding: 10rpx 30rpx 0 30rpx;">
					<text class="tn-color-red tn-icon-help"></text>超链接（默认浏览器打开超链接）
				</view>
				<view class="tn-margin tn-bg-gray--light"
					style="position: relative;border-radius: 10rpx;padding: 10rpx 30rpx;">
					<input placeholder="填写超连接地址" v-model="linkbody" name="input"
						placeholder-style="color:#AAAAAA;font-size: 12px"></input>
					<view style="" @click="linkshow=false;linkbody=''">
						<tn-badge :radius="53" backgroundColor="#00FFC6" fontColor="#000000" :absolute="true"
							:translateCenter="false">
							<text style="font-size: 18px;">x</text>
						</tn-badge>
					</view>
				</view>
			</block>
			<block v-if="cloudshow">
				<view class="tn-margin " style="position: relative;border-radius: 10rpx;padding: 10rpx 30rpx 0 30rpx;">
					<text class="tn-color-red tn-icon-help"></text> 网盘（可复制地址和密码）
				</view>
				<view class="tn-margin tn-bg-gray--light"
					style="position: relative;border-radius: 10rpx;padding: 10rpx 30rpx;">
					<input placeholder="填写网盘地址" v-model="cloudbody" name="input"
						placeholder-style="color:#AAAAAA;font-size: 12px"></input>
					<view style="" @click="cloudshow=false;cloudbody='';cloudbodypass=''">
						<tn-badge :radius="53" backgroundColor="#00FFC6" fontColor="#000000" :absolute="true"
							:translateCenter="false">
							<text style="font-size: 18px;">x</text>
						</tn-badge>
					</view>
				</view>
				<view class="tn-margin tn-bg-gray--light"
					style="width: 50%;position: relative;border-radius: 10rpx;padding: 10rpx 30rpx;">
					<input placeholder="填写网盘密码" v-model="cloudbodypass" name="input"
						placeholder-style="color:#AAAAAA;font-size: 12px;"></input>
				</view>

			</block>



			<block v-if="pkshow">
				<view class="tn-margin " style="position: relative;border-radius: 10rpx;padding: 10rpx 30rpx 0 30rpx;">
					<text class="tn-color-red tn-icon-help"></text> 投票PK（单选最多6个选项）
				</view>
				<view class="tn-margin tn-bg-gray--light"
					style="position: relative;border-radius: 10rpx;padding: 10rpx 30rpx;">
					<input placeholder="填写投票标题" v-model="pkbody" name="input"
						placeholder-style="color:#AAAAAA;font-size: 12px"></input>
					<view style="" @click="pkshow=false;pkbody='';pklist=[]">
						<tn-badge :radius="53" backgroundColor="#00FFC6" fontColor="#000000" :absolute="true"
							:translateCenter="false">
							<text style="font-size: 18px;">x</text>
						</tn-badge>
					</view>
				</view>
				<block v-for="(item, pkindex) in pklist" :key="pkindex">
					<view class="tn-margin tn-bg-gray--light"
						style="width: 50%;position: relative;border-radius: 10rpx;padding: 10rpx 30rpx;">
						<input placeholder="填写投票选项" v-model="item.body" name="input"
							placeholder-style="color:#AAAAAA;font-size: 12px"></input>
						<view style="" @click="closepk(pkindex)">
							<tn-badge :radius="53" backgroundColor="#00FFC6" fontColor="#000000" :absolute="true"
								:translateCenter="false">
								<text style="font-size: 18px;">-</text>
							</tn-badge>
						</view>
					</view>
				</block>
				<view @click="addpk()" class="tn-margin "
					style="position: relative;border-radius: 10rpx;padding: 10rpx 30rpx;">
					+添加选项
				</view>
			</block>

			<block v-if="hongbaoshow">
				<view class="tn-margin " style="position: relative;border-radius: 10rpx;padding: 10rpx 30rpx 0 30rpx;">
					<text class="tn-color-red tn-icon-help"></text>
					{{configInfo.site_moneyname}}红包（我的：{{up.money}})评论帖子后随机领取
				</view>
				<view class="tn-margin tn-bg-gray--light"
					style="width: 50%;position: relative;border-radius: 10rpx;padding: 10rpx 30rpx;">
					<input :placeholder="hongbaotitle" type="number" v-model="hongbaobody" name="input"
						placeholder-style="color:#AAAAAA;font-size: 12px"></input>
					<view style="" @click="hongbaoshow=false;hongbaobody='';hongbaonum=''">
						<tn-badge :radius="53" backgroundColor="#00FFC6" fontColor="#000000" :absolute="true"
							:translateCenter="false">
							<text style="font-size: 18px;">x</text>
						</tn-badge>
					</view>
				</view>
				<view class="tn-margin tn-bg-gray--light"
					style="width: 50%;position: relative;border-radius: 10rpx;padding: 10rpx 30rpx;">
					<input placeholder="红包个数" type="number" v-model="hongbaonum" name="input"
						placeholder-style="color:#AAAAAA;font-size: 12px;"></input>
				</view>

			</block>


			<view class="about-shadow  tn-margin">


	

				<tn-list-cell :unlined="true" :radius="true" :fontSize="30" @click="xuanzehuati()">
					<view class="tn-flex tn-flex-row-between tn-text-bold" style="width: 100%;">
						<view class="tn-margin-left-sm">
							<text class="tn-icon-topics" style="font-size: 14px;"></text>{{ tags_title}}
						</view>
						<view class="tn-color-gray tn-icon-right"></view>
					</view>
				</tn-list-cell>
				<view class="tn-tag-content tn-text-justify" v-if="tages_checkedlist.length>0"
					style="margin-left: 20px;">
					<view v-for="(item, indexdsdfsdf) in tagList" :key="indexdsdfsdf"
						class="tn-tag-content__item tn-margin-right tn-round tn-text-sm tn-text-bold tn-bg-gray--light tn-color-black"
						@click="shandiao(indexdsdfsdf,item.id)" v-if="item.checked">
						<text class="tn-tag-content__item--prefix">#</text> {{ item.title }}
						<text class="tn-icon-close" style="margin-left: 10px;"></text>
					</view>
				</view>





				<tn-list-cell :unlined="true" :radius="true" :fontSize="30" @click="quanxianxuanze()">
					<view class="tn-flex tn-flex-row-between tn-text-bold" style="width: 100%;">
						<view class="tn-margin-left-sm">
							<text class="tn-icon-team" style="font-size: 14px;"></text>{{ quanxian}}
						</view>
						<view class="tn-color-gray tn-icon-right"></view>
					</view>
				</tn-list-cell>
				<tn-list-cell :unlined="true" :radius="true" :fontSize="30" v-if="configInfo.is_fujin"
					@click="selectAddressFn()">
					<view class="tn-flex tn-flex-row-between tn-text-bold" style="width: 100%;">
						<view class="tn-margin-left-sm">
							<text class="tn-icon-location" style="font-size: 14px;"></text>{{ address}}
						</view>
						<view class="tn-color-gray tn-icon-right"></view>
					</view>
				</tn-list-cell>
		
			</view>



			<video v-show="video.visible" :src="video.url" id="videoPlayer"
				@fullscreenchange="onVideoFullScreenChange"></video>




			<tn-popup v-model="voc" width="80%" height="40%" mode="bottom" :borderRadius="30" :closeBtn="false"
				:maskCloseable="true" @close="closedPopup_voc">
				<nb-voice-record ref="luyinUpload" :shijian="vocdtime" v-model="voc" @startRecord="start"
					@endRecord="end" @cancelRecord="cancel">
				</nb-voice-record>

			</tn-popup>









			<tn-popup v-model="popshow" width="80%" height="80%" mode="bottom" :borderRadius="30" :closeBtn="true"
				:maskCloseable="true" @close="closedPopup">

				<view class="tn-search-fixed tn-padding-top">
					<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin">
						<view class="justify-content-item align-content-item">
							<view class="tn-bg-gray--light tn-flex tn-flex-col-center"
								style="border-radius: 100rpx;padding: 10rpx 20rpx 10rpx 20rpx;width: 100%;">
								<text
									class="tn-icon-search justify-content-item tn-padding-right-xs tn-color-gray tn-text-lg"></text>
								<input @input="jiantingshuru" class="justify-content-item" placeholder="输入关键词"
									v-model="tagskeys" placeholder-style="color:#AAAAAA"></input>
							</view>
						</view>

						<view class="align-content-item">
							<view class="justify-content-item tn-text-center" @click="sousuokey()">
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
					<view class="tn-flex tn-flex-row-center tn-margin-top-sm" v-if="tagList.length==0"
						@click="navigateToFn({ url: '/minePages/daoju', checkLogin: false })">
						<view class="">
							<tn-empty icon="/static/images/no.png" text="没有相关话题">

							</tn-empty>
						</view>
					</view>
					<view class="about-shadow  tn-margin">
						<tn-list-cell :unlined="true" :radius="true" :fontSize="30" v-for="(item, indexdsdf) in tagList"
							:key="indexdsdf" @click="huati(item.id,item.title,indexdsdf)">
							<view class="tn-flex tn-flex-row-between" style="width: 100%;">
								<view class="tn-margin-left-sm">
									<text class="tn-tag-content__item--prefix">#</text>
									{{ item.title }}
								</view>
								<view style="font-size: 20px;" class=" "
									:class="item.checked ?  'tn-icon-success-square tn-color-blue' : 'tn-icon-square'">
								</view>
							</view>
						</tn-list-cell>
					</view>
				</scroll-view>
			</tn-popup>

			<tn-popup v-model="daojushow" width="80%" height="40%" mode="bottom" :borderRadius="30" :closeBtn="false"
				:maskCloseable="true" @close="closedPopup">
				<scroll-view class="" scroll-y scroll-with-animation style="height: 100%;">

					<view class="tn-flex tn-flex-row-center tn-margin-top-sm" v-if="daojulist.length==0"
						@click="navigateToFn({ url: '/minePages/daoju', checkLogin: false })">
						<view class="">
							<tn-empty icon="/static/images/no.png" text="你没有任何道具">
								<tn-button backgroundColor="#aa00ff" fontColor="#FFFFFF" size="xxl">去道具商城
								</tn-button>
							</tn-empty>
						</view>
					</view>

					<view
						class="tn-flex tn-flex-wrap tn-margin-left-sm tn-margin-bottom-sm tn-margin-right-sm tn-margin-top-xs">


						<block v-for="(item, index) in daojulist" :key="index">
							<view class="" style="width: 33%;position: relative;">
								<view class="tn-blogger-content__wrap" style="background-color: rgba(255,255,255,0.6);">
									<view class="tn-flex tn-flex-row-center tn-padding-top tn-text-bold">
										{{ item.gift_name }}
									</view>
									<view class="tn-flex tn-flex-row-center">
										<image :src="item.image" style="width:60%;" mode="widthFix"></image>
									</view>
									<view class="tn-flex tn-flex-row-center tn-margin-top-sm tn-padding-bottom-sm">
										<tn-button shape="round" backgroundColor="#FFF00D" fontColor="#080808"
											@click="daojuchoce(item,index)">
											使用
										</tn-button>
									</view>


								</view>
							</view>
						</block>
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

		<tn-modal width="80%" :custom="true" v-model="pay_price_show" backgroundColor="#E4E9EC" padding="30rpx 80rpx"
			:radius="25" title="设置阅读金额" :showCloseBtn="true" :maskCloseable="false" :zoom="true">
			<view class="custom-modal-content">
				<tn-form :labelWidth="140">
					<tn-form-item label="售卖金额" :borderBottom="false">
						<tn-input placeholder="请输入金额" v-model="pay_price"></tn-input>
						<view slot="right" class="tn-flex tn-flex-col-center tn-flex-row-center"
							@click="pay_price_show=false">
							<tn-button :fontSize="20" padding="10rpx" height="46rpx" backgroundColor="#01BEFF"
								fontColor="tn-color-white">确定</tn-button>
						</view>
					</tn-form-item>
				</tn-form>
			</view>
		</tn-modal>


		<!-- 登录框组件 -->
		<login-fn :is-show-login="loginBoxFlag" @loginSuccessCallback="refreshFn" @close="closeGlobalLoginFn">
		</login-fn>




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
	import COS from '@/common/COS.js'
	import {
		Crypto,
		Base64
	} from '@/common/bundle.js'; //引入上面的代码
	export default {
		name: 'TemplateEdit',
		mixins: [template_page_mixin],
		data() {
			return {
				shop_id: 0,
				shop: [],
				tagskeys: '',
				daojutitle: '',
				daojuid: 0,
				daojulist: [],
				daojushow: false,
				tab: 0,
				loginBoxFlag: false,
				//、、、、、
				webshow: false,
				webbody: '',
				linkshow: false,
				linkbody: '',
				cloudshow: false,
				cloudbody: '',
				cloudbodypass: '',
				pkshow: false,
				pkbody: '',
				pklist: [],
				hongbaotitle: '',
				hongbaoshow: false,
				hongbaobody: '',
				hongbaonum: '',
				//、、、、、、、
				pay_price_show: false,
				pay_price: '',
				tages_checkedlist: [],
				upimgw: 0,
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
				progress: 0,
				up: [],
				video: {
					sizi: 0,
					name: '',
					visible: false,
					url: '',
					context: null
				},

			}
		},
	
		
		onBackPress(options) {
				  console.log(options.from)
		  // 触发返回就会调用此方法，这里实现的是禁用物理返回，顶部导航栏的自定义返回 uni.navigateBack 仍可使用
		 if (options.from == 'navigateBack') {
		  this.fanhui()
		  }
		},
		onShow() {
		
		},
		mounted() {
			uni.$on("loginok", async (res) => {
				console.log(res + '登录成功loginok')
				this.loginBoxFlag = false;
				this.panduan()
			})

		},
	
		onLoad(option) {

			let that = this
				this.panduan()
			if (option.tab) {
				this.tab = option.tab
			}



			this.video.context = uni.createVideoContext('videoPlayer')
			if (!uni.getStorageSync('token')) {
				that.loginBoxFlag = true
				return false;
			}

			this.hongbaotitle = '填写' + this.configInfo.site_moneyname + '红包总金额'
			uni.$off('setLoginBoxFlag');
			uni.$on('setLoginBoxFlag', loginBoxFlag => {
				console.log(loginBoxFlag)
				that.loginBoxFlag = loginBoxFlag;
			});

			uni.$on('setLoginBoxFlag', loginBoxFlag => {
				console.log(loginBoxFlag)
				that.loginBoxFlag = loginBoxFlag;
			});

			uni.$on('quan', loginBoxFlag => {
				that.quan = loginBoxFlag
				that.quan_title = loginBoxFlag.title
			});

			uni.$on('shop', loginBoxFlag => {
				console.log(loginBoxFlag)
				that.shop_id = loginBoxFlag.id
				that.shop = loginBoxFlag
			});


			that.action = host + '/api/user/up_img'
			if (option.id) {
				this.quan.id = option.id
				this.cate_id = option.id
				this.quan_title = option.title
			}

			//	this.panduan()
			//this.info()

			uni.getSystemInfo({
				success: function(e) {
					that.upimgw = e.windowWidth / 3
				}
			})



		},
		computed: {
			...mapState({
				isVip: store => store.userInfo.isVip,
			})
		},
		methods: {
			refreshFn() {
				console.log('登录返回refreshFn')
				this.loginBoxFlag = false;
				this.panduan()
			},

			jiantingshuru(e) {
				if (e.detail.value == '') {
					this.info()
				}
			},
			closeGlobalLoginFn(e) {

				if (e == undefined) {
					console.log(e, '没有上一页')
					uni.reLaunch({
						url: '/pages/index'
					})
				}
				if (e != false) {
					//this.loginBoxFlag = false;
					//uni.navigateBack()
				}
			},
			closepk(index) {
				this.pklist.splice(index, 1)
			},
			addpk() {
				if (this.pklist.length > 4) {
					this.msg('最多5个')
					return
				}
				let zhi = {
					"body": "",
					"zhi": 0
				}
				this.pklist.push(zhi)
				console.log(this.pklist.length, this.pklist)
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
				this.info()
				this.popshow = true
			},
			quanxianxuanze() {
				this.quanxianshow = true
			},


			async daojudakai() {
				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/gift/my_daoju',
					data: {
						tabsIndex: 0
					}
				});
				if (result.data.code == 200) {
					this.daojushow = true
					this.daojulist = result.data.data
				}

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
				this.$refs.imageUpload.selectFile()
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
				if (this.configInfo.vocd_is_vip && !this.isVip) {
					this.msg('vip专属功能')
					return
				}
				if (this.vocurl) {
					this.msg('请先删除语音哦')
					return
				}
				this.vod = true
				let self = this;

				uni.chooseVideo({
					sourceType: ['camera', 'album'],
					compressed:false,
					maxDuration: self.vocdtime,
					success: function(res) {

						self.video.sizi = res.size / 1024 / 1024
						self.video.name = res.name
						let size = res.size
						if (size > self.up.up_size * 1024 * 1024) {
							uni.showToast({
								title: "请勿超过" + self.up.up_size + "M",
								icon: "none",
								duration: 1000
							})
							return
						}
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
				if (this.tagList[index].checked == false && this.tages_checkedlist.length >= this.configInfo.huatishu) {
					this.msg('话题数不能超过' + this.configInfo.huatishu + '个')
					return
				}

				this.tagList[index].checked = !this.tagList[index].checked
				for (let i in this.tagList) {
					if (this.tagList[i].checked) {
						yixuan.push(this.tagList[i])
					}
				}
				this.tages_checkedlist = yixuan
				this.tags_id = id
			},

			shandiao(index, id) {
				for (let i in this.tages_checkedlist) {
					if (this.tages_checkedlist[i].id == id) {
						this.tages_checkedlist.splice(i, 1)
					}
				}

				this.tagList[index].checked = false
			},
			xuanzequqanxian(id, title) {
				this.quanxianshow = false
				this.quanxian_id = id
				this.quanxian = title
			},
			daojuchoce(item) {
				this.daojuid = item.id
				this.daojushow = false
				this.daojutitle = item.gift_name
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
					this.up = result.data.data
					if (result.data.data.is_add == 0) {
						this.is_fatie = true
					}
					this.is_add_voc = result.data.data.is_add_voc
					this.is_add_vod = result.data.data.is_add_vod
					if (!this.isVip) {
						this.vocdtime = Number(this.configInfo.vocd_add_time)
					}

					// #ifdef MP
					if (result.data.data.push_one) {
						uni.showModal({
							title: '温馨提示',
							content: '有人评论后将会小程序通知您',
							confirmText: "同意",
							cancelText: "拒绝",
							success: function(res) {
								if (res.confirm) {
									uni.requestSubscribeMessage({
										tmplIds: [result.data.data.push_one],
										complete: (res) => {
											console.log(res, '999');

										}
									})
								} else if (res.cancel) {

								}
							}
						})
					}
					// #endif




				}

			},

			sousuokey() {
				this.info();
			},

			async info() {
				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/four/tagslist',
					data: {
						tagskeys: this.tagskeys
					}
				});

				if (result.statusCode == 200) {
					if (result.data.code == 200) {


						that.tagList = result.data.data;
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
			upjindu(index) {
				let removeDecimal = Math.trunc(index);
				this.progress = removeDecimal
			},
			onUploaded(list, index) {
				console.log(list)
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
				console.log(this.pklist)
				if (this.vocurl == "" && this.vodurl == "" && this.tupian == "") {
					if (this.content == '') {
						this.msg('说点啥呀')
						return
					}
				}
				if (this.webshow && this.webbody == '') {
					this.msg('请填写网页地址或删除')
					return
				}

				if (this.webshow && this.webbody) {
					let newStr = this.webbody.indexOf("http");
					if (newStr == -1) {
						this.webbody = "http://" + this.webbody
					}
				}

				if (this.linkshow && this.linkbody == '') {
					this.msg('请填写超连接地址或删除')
					return
				}

				if (this.linkshow && this.linkbody) {
					let newStr = this.linkbody.indexOf("http");
					if (newStr == -1) {
						this.linkbody = "http://" + this.linkbody
					}
				}





				if (this.cloudshow && this.cloudbody == '') {
					this.msg('请填写网盘地址或删除')
					return
				}

				if (this.pkshow && this.pkbody == '') {
					this.msg('请填写投票标题')
					return
				}
				if (this.pkshow && this.pkbody) {
					for (let i in this.pklist) {
						if (this.pklist[i].body == '') {
							this.msg('第' + i + 1 + '个投票选项为空')
							return
						}
					}
				}
				if (this.hongbaoshow && !this.hongbaobody && !this.hongbaonum) {
					this.msg('请填写红包金额和数量')
					return
					if (this.hongbaobody < this.up.money) {
						this.msg('你的余额不足发放红包')
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



					if (this.up.up_storage == 1) { //阿里
						let date = new Date(new Date().getTime() + 1000 * 3600);
						let expiration = date.toISOString();
						let policyText = {
							expiration, //设置该Policy的失效时间，超过这个失效时间之后，就没有办法通过这个policy上传文件了
							"conditions": [
								["content-length-range", 0, 1048576000] // 设置上传文件的大小限制
							]
						};

						let bucketName = this.up.up_bucket;
						let policyBase64 = Base64.encode(JSON.stringify(policyText))
						let accessid = this.up.up_ak;
						let accesskey = this.up.up_sk;
						let host = 'https://' + bucketName + '.' + this.up.domain;
						let bytes = Crypto.HMAC(Crypto.SHA1, policyBase64, accesskey, {
							asBytes: true
						});
						let signature = Crypto.util.bytesToBase64(bytes); //签名
						let fileName = this.up.date + '/' + new Date().getTime() + '.mp4'; //文件名 注意：相同文件名会覆盖之前的文件

						const uploadTask = uni.uploadFile({
							url: host,
							filePath: this.vodurl,
							fileType: '',
							name: 'file',
							formData: {
								name: fileName,
								key: fileName, //文件名
								policy: policyBase64, // 输入你获取的的policy
								OSSAccessKeyId: accessid, // 输入你的AccessKeyId
								success_action_status: '200', // 让服务端返回200,不然，默认会返回204
								signature, // 输入你获取的的signature
							},
							success: (res) => {
								this.vodurlpass = host + '/' + fileName
								if (this.tupian) {
									this.wanchengtitle = "视频上传成功"
									this.$refs.imageUpload.upload()
								} else {
									this.send()
								}

							},
							fail: (res) => {
								console.log(res);
							}
						})

						uploadTask.onProgressUpdate((res) => {
							this.progress = res.progress
							console.log('上传进度' + res.progress);
						});


					}






					if (this.up.up_storage == 3) { //腾讯
						let config = {
							"SecretId": this.up.up_ak,
							"SecretKey": this.up.up_sk,
							"Bucket": this.up.up_bucket,
							"Region": this.up.region
						}
						let filename = this.up.date + '/' + new Date().getTime() + '.mp4'
						COS.uploadFileToTencentClound(filename, this.vodurl, config).then((res) => {
							this.vodurlpass = "https://" + res
							if (this.tupian) {
								this.wanchengtitle = "视频上传成功"
								this.$refs.imageUpload.upload()
							} else {
								this.send()
							}
						})

					}

					if (this.up.up_storage == 2) { //七牛
						let formData = {
							'bucket': this.up.up_bucket,
							'key': this.up.date + '/' + new Date().getTime() + '.mp4',
							'token': this.up.upload_token,
							'user': 'test'
						}
						const uploadTask = uni.uploadFile({
							url: this.up.up_url, //仅为示例，非真实的接口地址
							filePath: this.vodurl,
							name: 'file',
							formData: formData,
							success: (uploadFileRes) => {

								if (this.up.up_storage == 2) {
									let data = JSON.parse(uploadFileRes.data)
									this.vodurlpass = this.up.domain.slice(0, this.up.domain.length - 1) +
										'/' + data.key

								}

								if (this.tupian) {
									this.wanchengtitle = "视频上传成功"
									this.$refs.imageUpload.upload()
								} else {
									this.send()
								}
							},
							fail: (dd) => {
								console.log(dd)
							}
						});
						uploadTask.onProgressUpdate((res) => {
							this.progress = res.progress
							console.log('上传进度' + res.progress);
						});
					}


					if (this.up.up_storage == 0) {
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

					}












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
				let data = {
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
					price: that.pay_price,
				}

				if (this.webshow && this.webbody) {
					data.webbody = this.webbody
				}
				if (this.linkshow && this.linkbody) {
					data.linkbody = this.linkbody
				}
				if (this.cloudshow && this.cloudbody) {
					data.cloudbody = this.cloudbody
					data.cloudbodypass = this.cloudbodypass
				}
				if (this.pkshow && this.pkbody) {
					data.pkbody = this.pkbody
					data.pklist = this.pklist
				}
				if (this.hongbaoshow && this.hongbaobody) {
					data.hongbaobody = this.hongbaobody
					data.hongbaonum = this.hongbaonum
				}
				if (this.daojuid) {
					data.daojuid = this.daojuid
				}
				if (this.shop_id) {
					data.shop_id = this.shop_id
				}


				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/user/addNewGoods',
					data
				});


				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						uni.hideLoading()
						this.progress = 100
						//this.wancheng = true					
						this.wanchengtitle = result.data.msg
						uni.$emit('fabu_ok', result.data.code)
						uni.$emit('home_up', result.data.code)
						uni.$emit('circle_up', result.data.code)
						setTimeout(() => {
							this.tijiaoisshow = false
						
							if (this.tab == 1) {
								this.fanhui()
							} else {
								uni.navigateBack()
							}


						}, 1000);

					} else {
						this.tijiaoisshow = false
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
			fanhui() {
				console.log(this.tab)
				if (this.tab == 1) {
					uni.switchTab({
						url: '/pages/index'
					});
				} else {
					uni.navigateBack()
				}

			}

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
			line-height: 20px;
			padding: 4px 20px;
			margin: 4px;

			&--prefix {
				padding-right: 10rpx;
			}
		}
	}

	/* 资讯主图 start*/
	.image-article {
		border-radius: 8rpx;
		border: 1rpx solid #F8F7F8;
		width: 200rpx;
		height: 200rpx;
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

	/* 标签内容 end*/
</style>