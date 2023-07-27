<template>
	<view class="template-details tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
	<tn-nav-bar fixed  customBack>
			<view slot="back" class='tn-custom-nav-bar__back'>
				<text class='icon tn-icon-left' @click="goBack"></text>
				<text class='icon tn-icon-home-capsule-fill' @click="gohome"></text>
			
			</view>
			详情
		<!-- #ifdef APP-PLUS||H5 -->
			<view slot="right" class="tn-flex tn-flex-col-right tn-flex-row-right">
				<view class="custom-nav__right" style="margin-right: 10px;">
					<text class=" tn-icon-share-square" @click="appshare()" style="font-size: 20px;"></text>
			</view>			
			</view>
		<!-- #endif -->			
		</tn-nav-bar>

		<mescroll-body ref="mescrollRef" @down="downCallback" @up="upCallback">
			<view class="" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
				<!-- 图文信息 -->
			
					<view class="blogger__item">


						<view class="blogger__author tn-flex tn-flex-row-between tn-flex-col-center">
							<view class="justify__author__info"
								@click="navigateToFn({ url: '/circlePages/blogger_other?id='+item.user_id, checkLogin: false })">
								<view class="tn-flex tn-flex-row-center">
									<view class="tn-flex tn-flex-row-center tn-flex-col-center">
										<view class="">
											<tn-avatar :badge="item.is_manage_normal" badgeText="管"
												:badgePosition="[8,20]" badgeBgColor="#00aa00" class="" shape="circle"
												:src="item.userAvatar" size="lg">

											</tn-avatar>
										</view>
										<view class=" ">
											<view class="tn-padding-right tn-padding-left-sm ">
											
												<text class=" tn-text-bold" :class="{'tn-color-red': item.vip===1}">{{ item.userName }}</text>
												<text class="tn-icon-sex-female tn-color-purplered"
													v-if="item.sex==2"></text>
													<text v-if="item.is_dav==1" class=" tn-icon-success-circle-fill tn-color-blue"
														style="font-size: 16px;">
													</text>
												<text class="tn-icon-sex-male  tn-color-blue" v-if="item.sex==1"></text>
												<text class="tn-icon-sex  tn-color-gray" v-if="item.sex==0"></text>
												<text class="dk-lv tn-main-gradient-indigo--light" v-if="item.vip==0&&configInfo.is_lv">LV {{item.lv}}</text>
												<text class="dk-vip tn-main-gradient-orangeyellow" v-if="item.vip==1"><text class="tn-icon-vip tn-color-black"
														style="font-size: 14px;margin-left: -5px;"></text>VIP{{item.vip_lv}}</text>
											</view>
											<view class="tn-padding-left-sm tn-padding-top-xs tn-color-gray" style="font-size: 12px;">
													<text v-if="item.date>0">{{timeChange(item.date)}}</text>											
											<text v-if="item.city">发布于{{item.city}}</text>
											</view>
										</view>
									</view>
								</view>
							</view>
							<view
								class="blogger__author__btn justify-content-item tn-flex-col-center tn-flex-row-center">

								<text
									class="tn-bg-gray--light tn-round  tn-text-df tn-color-black tn-icon-empty-permission"
									style="padding: 10rpx 24rpx;font-size: 16px;" v-if="item.is_follow"
									@click="guanzhu(item.user_id,0)"></text>
								<text class="tn-bg-yellow--light tn-round tn-text-df  tn-color-black tn-icon-my-add"
									style="padding: 10rpx 24rpx;font-size: 16px;" v-else
									@click="guanzhu(item.user_id,1)"></text>

								<text class="tn-main-gradient-indigo--light tn-round tn-text-df  tn-color-black tn-icon-message"
									style="padding: 10rpx 24rpx;font-size: 16px;"
									@click="navigateToFn({ url: '/minePages/chat/talk?toid='+item.user_id, checkLogin: true })"></text>

							</view>
						</view>


						<view v-if="item.quan_buy==0">
							<tn-button width="100%" height="100rpx" margin="10rpx 0">
								您需要先加入圈子，支付
								<text class="tn-color-red">{{item.quan_price}}</text>
								{{configInfo.site_moneyname}}
							</tn-button>
							<view class="dk-center" style="margin-bottom: 50px;" @click="goumai_quan(item.cate_id)">
								<tn-button backgroundColor="tn-bg-yellow" fontColor="#000000" margin="10rpx 10rpx">
									加入圈子[{{item.quan_name}}]
								</tn-button>
							</view>
						</view>

						

						<view v-else-if="item.price>0&&item.is_buy==0">
							<view class="tn-text-ellipsis-2">
							<rich-text :nodes="item.content"></rich-text>
							</view>
							<tn-button width="100%" height="100rpx" margin="10rpx 0">
								付费帖子，您需要支付
								<text class="tn-color-red">{{item.price}}</text>
								{{configInfo.site_moneyname}}
							</tn-button>
							<view class="dk-center" style="margin-bottom: 50px;" @click="goumai()">
								<tn-button backgroundColor="tn-bg-yellow" fontColor="#000000" margin="10rpx 10rpx">购买
								</tn-button>
							</view>
						</view>
						<view v-else>
							<!-- 内容太多疲劳了-->
							<view v-if="item.content" class="blogger__content" >
								<view class="blogger__content__data" >
							
							
						<!-- #ifdef MP -->
					<rich-text :nodes="item.content"></rich-text>	
					<!-- #endif-->
							<!-- #ifdef APP||H5 -->
								<text selectable="true">
								<mp-html :content="item.content" />
								</text> 
									<!-- #endif-->
												
									
								</view>
							</view>
							
							<view v-if="item.webbody" class="blogger__content">
								<view class="blogger__content__data" >									
									<text selectable="true">
										本帖包含外部网页:{{item.webbody}}							
									</text> 
									
									<!-- #ifdef APP||H5 -->
									<tn-button :plain="true" height="22px" shape="round" size="sm" @click="navigateToFn({ url: '/pages/url?url='+item.webbody, checkLogin: false })">访问</tn-button>									
										<!-- #endif -->
									<tn-button :plain="true" height="22px" shape="round" size="sm" @click="fuzhi(item.webbody)">复制</tn-button>									
								</view>
							</view>
							
							<view v-if="item.linkbody" class="blogger__content">
								<view class="blogger__content__data" >
									<text selectable="true" class="tn-color-blue">
									<text class="tn-icon-link"></text>超链接：{{item.linkbody}}									
									</text> 
									
									<!-- #ifdef APP||H5 -->
									<tn-button :plain="true" height="22px" shape="round" size="sm" @click="navigateToFn({ url: '/pages/url?url='+item.linkbody, checkLogin: false })">直达</tn-button>									
										<!-- #endif -->
									
									
									<tn-button :plain="true" height="22px" shape="round" size="sm" @click="fuzhi(item.linkbody)">复制</tn-button>									
								</view>
							</view>
							
							<view v-if="item.cloudbody" class="blogger__content" >
								<view class="blogger__content__data" >
									<text selectable="true" class="tn-color-blue">
									<text class="tn-icon-upload"></text>网盘：{{item.cloudbody}}									
									</text> 
									<tn-button :plain="true" height="22px" shape="round" size="sm" @click="fuzhi(item.cloudbody)">复制</tn-button>									
								</view>
								<view class="blogger__content__data" >
									<text selectable="true" class="tn-color-blue">
									<text class="tn-icon-upload"></text>密码：
									<text v-if="item.cloudbodypass">{{item.cloudbodypass}}</text><text v-else>无密码</text>								
									</text> 
									<tn-button v-if="item.cloudbodypass" :plain="true" height="22px" shape="round" size="sm" @click="fuzhi(item.cloudbodypass)">复制</tn-button>									
								</view>
							</view>

	<view v-if="item.hongbaobody" class="blogger__content" >
	<tn-button width="100%" height="100rpx" margin="10rpx 0">
		作者赠送{{configInfo.site_moneyname}}<text class="tn-color-red">{{item.hongbaobody}}</text>个，{{item.hongbaonum}}人可领取
</tn-button>	
	<gcm-red-bag ref="hongbaowindows" :tid="item.id" :options="redBagConfig" @onConfirm="onConfirm"></gcm-red-bag>
</view>

	<view v-if="item.pkbody" class="blogger__content" >
					<view class="blogger__content__data" >
									{{item.pkbody}}	
									
					<view class="tn-margin-top" v-for="(itempk,indextou) in item.pklist" :key="indextou">
					  <view class="tn-color-black">{{indextou+1}}.{{itempk.body}}({{itempk.zhi}}票)</view>
					  
			<view class="">
				<view class="tn-flex tn-flex-row-between">
					<view class="justify-content-item" style="width: 80%;">
					<tn-line-progress  :percent="itempk.zhi/item.pklist_num*100" :striped="true" :stripedAnimation="false">
					</tn-line-progress>
					</view>
					<view class="justify-content-item "
						@click="toupiao(itempk,indextou)">
					<tn-button backgroundColor="#01BEFF" fontColor="#ffffff" size="sm">投票</tn-button>						
					</view>
				</view>
			</view>
					  
					  
					  
					  
					  
					
					</view>
															
					</view>
								
							</view>
							

							<view class="blogger__content dk-top-10 tn-text-content">
								<tn-button backgroundColor="#00FFC6" padding="40rpx 0" width="60%" shadow fontBold
									@click="bofang(item.voc)" v-if="item.voc">
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
											<view class="tn-icon-sound"></view>
										</block>
										<text class="tn-color-black" style="margin-left: 15px;">{{item.vocscend}}''</text>
									</view>

								</tn-button>
								<video id="myVideo" :autoplay="zidongbofang" v-show="videoPlay" :direction="0"
									:src="item.vod" :controls="true" :poster="item.vod_img" :title="item.content"
									object-fit="contain" :show-mute-btn="true" style="width: 100%;"></video>
								<!-- 	<video :direction="0" v-show="videoPlay"  :title="item.content" controls id="myvideo" :src="item.vod"  style="width: 100%;"></video> -->
							</view>



							<block v-if="item.mainImage">
								<view v-if="[1,2,4].indexOf(item.mainImage.length) != -1" class="tn-padding-top-xs">
									<image v-for="(image_item,image_index) in item.mainImage" :key="image_index"
										class="blogger__main-image" :class="{
                  'blogger__main-image--1 tn-margin-bottom-sm': item.mainImage.length === 1,
                  'blogger__main-image--2 tn-margin-right-sm tn-margin-bottom-sm': item.mainImage.length === 2 || item.mainImage.length === 4
                }" :src="image_item" mode="aspectFill" @click="doPreviewImage(item.mainImage,image_index)"></image>
								</view>
								<view v-else class="tn-padding-top-xs">
									<tn-grid hoverClass="none" :col="3">
										<block v-for="(image_item,image_index) in item.mainImage" :key="image_index">
											<!-- #ifndef MP -->
											<tn-grid-item style="width: 30%;margin: 10rpx;">
												<image class="blogger__main-image blogger__main-image--3"
													:src="image_item" mode="aspectFill"
													@click="doPreviewImage(item.mainImage,image_index)">
												</image>
											</tn-grid-item>
											<!-- #endif-->
											<!-- #ifdef MP -->
											<tn-grid-item style="width: 30%;margin: 10rpx;">
												<image class="blogger__main-image blogger__main-image--3"
													:src="image_item" mode="aspectFill"
													@click="doPreviewImage(item.mainImage,image_index)">
												</image>
											</tn-grid-item>
											<!-- #endif-->
										</block>
									</tn-grid>
									<view class="tn-flex tn-margin-top tn-flex-row-left" v-if="item.label.length>0">
										<view>
											<view v-for="(label_item,label_index) in item.label" :key="label_index"
												class="blogger__desc__labeldd tn-float-left tn-margin-right tn-bg-gray--light tn-round tn-text-sm tn-text-bold"
												@click="navigateToFn({ url: '/circlePages/tags_list?id='+label_item.id, checkLogin: false })">
												<text class="blogger__desc__label--prefix">#</text>
												<text class="tn-text-df">{{ label_item.title }}</text>
											</view>
										</view>
									</view>


								</view>


							</block>

						</view>



<block v-if="item.shop_id">
<view class="">
						
								<view class="article-shadow " @click="navigateToFn({ url: '/shopPages/product?user_id='+item.user_id+'&id='+item.shop_id, checkLogin: false })">
									<view class="tn-flex">
										<view class="tn-margin-sm" >
											<view class="">
												<image :src="item.shop.images[0]" style="width: 100px;height: 100px;" mode="aspectFill"></image>
											</view>
										</view>
										<view class="tn-margin-sm tn-padding-top-xs" style="width: 100%;">
											<view class=" tn-text-bold  tn-text-ellipsis-2">
												{{ item.shop.goods_name }}
											</view>
											<view
												class="tn-flex tn-flex-row-between tn-flex-col-between tn-padding-top-xs"
												>

												<view class="justify-content-item tn-flex tn-flex-col-center">
												<text class="tn-blogger-content__count-icon tn-color-purplered" style="font-size: 24rpx;">￥</text>
												<text class="tn-padding-right-sm tn-text-bold tn-color-purplered" style="font-size: 38rpx;">{{ item.shop.price }}</text>
												</view>											
											</view>											
										</view>
									</view>
								</view>
				
						</view>
	</block>

						<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-top-xs">

							<view class="justify-content-item tn-flex tn-flex-col-center" >
								<view style="margin-right: 10rpx;">
									<tn-avatar-group :lists="latestUserAvatar" size="sm" >
									</tn-avatar-group>
								</view>
								<text class="tn-color-gray" v-if="item.like_num">{{ item.like_num}}人</text>
								<text class="tn-color-gray" v-else>还没有人赞过~</text>
							</view>
							<view class="justify-content-item tn-color-gray tn-text-center">
								<view class="">
									<text class="blogger__count-icon tn-icon-footprint"></text>
									<text class="tn-padding-right">
										{{ $t.number.formatNumberAddPriceUnit(item.view_num) }}
									</text>
									<text class="blogger__count-icon tn-icon-message"></text>
									<text class="tn-padding-right">{{ commentCount }}</text>
								
								<text class="circle flex-h" @click="dianzantiezi(id)" :class="item.is_like?'check':''">
								       <text  class="blogger__count-icon tn-icon-praise-fill " :class="item.is_like?'tn-color-red img-box-check':''"></text>
								</text>								
									<text class="tn-padding-right" @click="dianzantiezi(id)">{{ item.like_num }}</text>


								</view>
							</view>
						</view>
					</view>

					<!-- 边距间隔 -->
					<!-- <view class="tn-strip-bottom" v-if="index != content.length - 1"></view> -->

			

			</view>
			<block v-if="configInfo.cainixihuan">
			<view class="tn-flex tn-flex-row-between ">
				<view class="justify-content-item tn-margin tn-text-bold">
					猜你喜欢
				</view>
			</view>
			<view class="">
				<block v-for="(itemsdf, indexhuodong) in tuijian" :key="indexhuodong">
					<view class="article-shadow" @click="navigateToFn({ url: '/circlePages/details?id='+itemsdf.id, checkLogin: false })">
						<view class="tn-flex">
							<view class="image-pic tn-margin-sm"
								:style="'background-image:url(' + itemsdf.images + ')'">
								<view class="image-article">
								</view>
							</view>
							<view class="tn-margin-sm tn-padding-top-xs" style="width: 100%;">
								<view class=" tn-text-bold clamp-text-1 tn-text-justify">
									{{ itemsdf.content }}
								</view>						
								<view class="tn-flex tn-flex-row-between tn-flex-col-between">
			
									<view
										class="justify-content-item tn-color-gray tn-text-center tn-color-gray"
										style="padding-top: 5rpx;">
										<text class="tn-padding-right tn-text-df">{{itemsdf.city}}</text>
										<text class="tn-icon-fire tn-padding-right-xs tn-text-lg"></text>
										<text class="tn-padding-right ">{{ itemsdf.view_num }}</text>
										<text class="tn-icon-praise-fill tn-padding-right-xs tn-text-lg"></text>
										<text class="tn-text-df">{{ itemsdf.like_num }}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</block>
			</view>
			</block>
			
			<view class="tn-flex tn-margin tn-flex-row-between" v-if="configInfo.up_goods_mini||configInfo.up_goods_app">
			<!-- #ifdef MP -->	
				<ad :unit-id="configInfo.up_goods_mini"></ad>				
					<!-- #endif -->
					<!-- #ifndef MP -->
					<ad :adpid="configInfo.up_goods_app"></ad>		
					<!-- #endif -->
			</view>
			
			
			
		
			<view class="tn-flex tn-flex-row-between ">
				<view class="justify-content-item tn-margin tn-text-bold">
					最新评论 <text class="tn-padding-xs">({{commentCount}})</text>
				</view>
			</view>
			<!-- 评论 -->
			<view class="tn-margin" style="padding-bottom: 120rpx;" v-if="content.length>0">

				<view v-for="(item,pinglun) in content" :key="pinglun">
					<!-- 图标logo/头像 -->
					<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-top-xl">
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
											class=" tn-color-gray tn-margin-left tn-text-xs">
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
									class=" tn-color-gray tn-margin-left tn-text-xs">
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
		</mescroll-body>
		<view class="input-box">
			<view class="voice">
				
				<tn-avatar 
				class="" shape="circle"
					:src="userInfoAvatar" size="sm" v-if="userInfoAvatar">				
				</tn-avatar>
				<tn-avatar
				class="" shape="circle"
					:src="configInfo.site_logo" size="sm"  v-else>				
				</tn-avatar>				
			
				<view v-else class="icon"
					:style="'background-image:url('+configInfo.site_logo+');width: 60rpx;height: 60rpx;background-size: cover;'">
				</view>
			</view>
			<view class="textbox">
				<view class="text-mode">
					<view class="box">
						<input auto-height="true" @blur="lostfocus" :adjust-position="true" v-model="sendmsgBoy"
							style="font-size: 14px;" cursor-spacing="10" :placeholder="huifubody"
							placeholder-style="font-size: 14px;" :focus="is_focus" />
					</view>

				</view>
			</view>

			<view class="send " @tap="sendmsg">
				<view class="btn">发送</view>
			</view>
		</view>


		<!-- 登录框组件 -->
		<login-fn :is-show-login="loginBoxFlag" @loginSuccessCallback="refreshFn" @close="closeGlobalLoginFn">
		</login-fn>


		<uni-popup ref="sharepopup" type="bottom">
			<share-btn :sharedataTemp="sharedata" @jubaolist="jubaoshowchick" @haobaoche="share_qrcode"></share-btn>
		</uni-popup>



		<tn-modal width="80%" v-model="chongzhiis" backgroundColor="#E4E9EC" padding="30rpx 80rpx" :radius="25"
			title="抱歉.余额不足!" :button="button" :showCloseBtn="false" :maskCloseable="false" :zoom="true" :custom="false"
			@click="clickBtn_shenqing">

		</tn-modal>

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
	<view class="tn-text-center tn-padding-top" >			
			<text >点击图片保存到手机</text>
			
	</view>
	</tn-modal>

	</view>
</template>

<script>
	import {
		host
	} from '@/siteinfo.js'
	import lPainter from '@/components/lime-painter/'
	const audioContext = uni.createInnerAudioContext()
	import MescrollBody from '@/components/mescroll-uni/mescroll-body.vue';
	import MescrollUni from '@/components/mescroll-uni/mescroll-uni.vue';
	import MescrollMixin from '@/components/mescroll-uni/mescroll-mixins.js';
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	import {
		mapState
	} from 'vuex';
	export default {
		name: 'TemplateDetails',
		mixins: [template_page_mixin, MescrollMixin],
		components: {
			MescrollBody,lPainter
		},

		data() {
			return {
				tuijian:[],
			latestUserAvatar:[],
				redbatlist:[],
			 redBagConfig:{
					userImg:'',
					userName:'',
					btnText:'查看我的钱包',
					openTips:'已存入你的虚拟钱包',
					coverTitle:'剩20个红包',
					money: 0,				       
				  },
				jubao_body: '',
				jubaoshow: false,
				chongzhiis: false,
				zidongbofang: false,
				videoPlay: false,
				isplay: false,
				type: '',
				index: 0,
				is_focus: false,
				commentCount: 0,
				huifuindex: 0,
				pid: 0,
				loginBoxFlag: false, // 登录框显示隐藏状态
				sendmsgBoy: '',
				sendmsgBoy_huifuname: '',
				content: [],
				loginBoxFlag: false, // 登录框显示隐藏状态
				id: 290,
				body:[],
				item:{					
					"date":"",
					"like_num":0,
					"viewUser":[
						{"latestUserAvatar":[]},
						]				
					},
				userInfoAvatar_no: '/static/navigation.png',
				huifubody: '说点啥吧',
				sharedata: [],
				button: [
					{
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
			show_poster:false,//显示海报
			path: '', //生成的图片地址			
			posterObj: {
				width: '580rpx',
				height: '928rpx',
				background: '#fff',
				borderRadius: '16rpx',
				views: []
			}, //画板数据
			isUp:false
			}
		},


		onLoad(option) {
			if (option.daren_id){
			uni.setStorageSync('daren_id',option.daren_id)
			}
			let that = this
			uni.$off('setLoginBoxFlag');
			uni.$on('setLoginBoxFlag', loginBoxFlag => {
				that.loginBoxFlag = loginBoxFlag;
			});
			if (option.id) {
				this.id = option.id
			}
			uni.getNetworkType({
				success: function(res) {
					if (res.networkType == 'wifi') {
						that.zidongbofang = true
					}
				}
			});


			this.info()




		},
		computed: {
			...mapState({
				userInfoAvatar: store => store.userInfo.userInfoAvatar // 头像地址		
			})
		},

		onShareAppMessage(res) {
			return {
				title: this.item.share_title, //分享的名称
				path: '/circlePages/details?id=' + this.id+'&daren_id='+uni.getStorageSync('user_id'),
			}
		},
		//分享到朋友圈
		onShareTimeline(res) {
			return {
				title: this.item.share_title, //分享的名称
				path: '/circlePages/blogger_other?id=' + this.id+'&daren_id='+uni.getStorageSync('user_id'),
			}
		},

		methods: {
			linghongbao(){
			this.$refs.hongbaowindows.openhongbao();
			},
			 handleClick () {
			      this.isUp = !this.isUp
			    },
			onConfirm(){
				console.log('出发逻辑')
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
						goods_id: that.id,
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

			jubaoshowchick() {
				console.log(33333333)
				this.jubaoshow = true
				this.$refs.sharepopup.close();
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
			fanhuidsdf() {
				audioContext.stop()
				this.isplay = false
			},


			appshare() {

				let sharedata = {
					type: 1,
					strShareUrl: this.item.share_url,
					strShareTitle: this.item.share_title,
					strShareSummary: this.item.share_sub,
					strShareImageUrl: this.item.share_img,
				}
				this.sharedata = sharedata
				this.$refs.sharepopup.open();

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





			async goumai() {
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
						id: that.id
					}
				});

				if (result.statusCode == 200) {
					if (result.data.code == 200) {

						if (result.data.msg == '余额不足') {
							that.chongzhiis = true
						}
						this.msg(result.data.msg)
						this.info()
					}
				}
			},

			async info() {
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/goods/goodsdetail',
					data: {
						id: that.id
					}
				});


				if (result.statusCode == 200) {
					if (result.data.code == 200) {
				
						if (result.data.msg == 0) {
							uni.showModal({
								title: '提示',
								content: '帖子已删除',
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
						that.latestUserAvatar=result.data.data.viewUser.latestUserAvatar
						that.item= result.data.data
						that.body = result.data.data;
						that.tuijian = result.data.data.tuijian;						
						that.commentCount = result.data.data.ping_num
						if (that.item.vod) {
							that.videoPlay = true
							// that.videoContext = uni.createVideoContext("myvideo", that);
							// that.videoContext.requestFullScreen();
							// that.videoContext.play();	
						}
							if (that.item.hongbaobody) {
						this.redBagConfig={
												userImg:that.item.userAvatar,
												userName:that.item.userName,																																			       
						     }
						this.hongbaolist()	 
						
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
					url: '/api/index/goodsCommentList',
					data: {
						id: that.id,
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
						mescroll.endSuccess(result.data.data.data.length, result.data.data.data.length >= mescroll.size);

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
			refreshFn() {
				this.info()
			},
			async guanzhu(id, index) {
				let that = this
				if (!this.isLogin) {
					this.loginBoxFlag = true
					return false;
				}

				if (index == 0) {
					uni.showModal({
						title: '提示',
						content: '你要取消关注吗？',
						confirmText: '确定',
						success: function(res) {
							if (res.confirm) {
								that.flowUser(id)
								that.item.is_follow = 0
								that.msg('取消成功')
							} else if (res.cancel) {

							}
						}
					});

				} else {
					let result = await this.flowUser(id)
					this.item.is_follow = result.is_follow
					this.msg(result.msg)
				}

			},

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


			async dianzantiezi(id) {
				if (!this.isLogin) {
					this.loginBoxFlag = true
					return false;
				}
		
				
		
				if (this.item.is_like == false) {
					this.item.is_like = true
					this.item.like_num++
					const xinzeng = {					
						id: this.id,
						src: this.userInfoAvatar
					}
					this.item.viewUser.latestUserAvatar.push(xinzeng)
				} else {
					this.item.is_like = false
					this.item.like_num--
					for (let i in this.item.viewUser.latestUserAvatar) {
						if (this.item.viewUser.latestUserAvatar[i].src == this.userInfoAvatar) {
							this.item.viewUser.latestUserAvatar.splice(i, 1);
						}
					}


				}
				const shaya = {
					id: this.id,	
					is_like:this.item.is_like			
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
						goods_id: that.id,
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



			// 切换内容的显示与隐藏
			switchContentShowStatus(index) {
				const contentItem = this.content[index]
				contentItem.showAllContent = !contentItem.showAllContent
				this.$set(this.content, index, contentItem)
			},
			doPreviewImage(url, index) {
				console.log(url)
				uni.previewImage({
					current: index,
					urls: url,
					index
				})

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

			async goumai_quan(id) {
				let that = this;
				if (!this.isLogin) {
					this.loginBoxFlag = true
					return false;
				}
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/user/buy_cate',
					data: {
						id: id
					}
				});

				if (result.statusCode == 200) {
					if (result.data.code == 200) {

						if (result.data.msg == '余额不足') {
							that.chongzhiis = true
						}

						this.msg(result.data.msg)
						this.info()


					}
				}
			},

	goBack() {
		audioContext.stop()
		this.isplay = false
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
		audioContext.stop()
		this.isplay = false
		    uni.reLaunch({
		      url: '/pages/index'
		    })	 
		},
		fuzhi(neirong) {
				uni.setClipboardData({
					data: neirong,
					complete() {
						uni.showToast({
							title: "已复制到剪贴板"
						})
					}
				})
			},
		async toupiao(itempk,index){
			let that = this;
			if (!this.isLogin) {
				this.loginBoxFlag = true
				return false;
			}
			let sendboy='投票给-'+itempk.body
			let result = await that.$request({
				loading: 0,
				method: 'post',
				url: '/api/goods/do_vote',
				data: {
					id: this.id,
					index:index,
					neirong:sendboy
				}
			});
			
			if (result.statusCode == 200) {
				if (result.data.code == 200) {
					
					that.item.pklist[index].zhi++
					that.sendmsgBoy=sendboy
					that.sendmsg()
				}else{
				that.msg(result.data.msg)
				}
			}
			
		},
			async hongbaolist(itempk,index){
				let that = this;					
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/goods/hongbao_ling_list',
					data: {
						id: this.id					
					}
				});
				
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						this.redbatlist=result.data.data.ling_list
					}else{
					that.msg(result.data.msg)
					}
				}
				
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.clamp-text-1 {
		-webkit-line-clamp: 1;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	/* 胶囊*/
	.blogger__desc__label--prefix {
		color: #00FFC8;
		padding-right: 5px;
	}

	.blogger__desc__labeldd {
		margin-top: 5px;
		height: 24px;
		padding: 4px 6px;
		margin: 5px 9px 0 0;
	}

	/* 文章内容 start*/
	.blogger {
		&__item {
			padding: 30rpx;
		}

		&__author {
			&__btn {
				margin-right: -12rpx;
				padding: 0 20rpx;
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
		z-index: 999;
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

	.input-box {
		width: 100vw;
		min-height: 100upx;
		padding: 0 1%;
		background-color: #f2f2f2;
		display: flex;
		position: fixed;
		z-index: 120;
		bottom: -2upx;

		.voice {
			padding: 10px;
		}

		.send {
			//H5发送按钮左边距
			/* #ifdef H5 */
			margin-left: 20upx;
			/* #endif */
			flex-shrink: 0;
			width: 130upx;
			height: 100upx;
			display: flex;
			align-items: center;

			.btn {
				font-weight: bold;
				border-radius: 2500px !important;
				width: 120upx;
				height: 56upx;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: #FFF420;
				color: #000000;
				border-radius: 6upx;
				font-size: 24upx;
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
	.circle {
	  border-radius: 50%;
	  cursor: pointer;
	  box-shadow: 0px 0px 0px 0px rgba(223, 46, 58, 0.5);
	  .img-box {
	    width: 20px;
	    height: 20px;
	    margin: 5px;
	    -moz-user-select: none;
	    -webkit-user-select: none;
	    -ms-user-select: none;
	    -khtml-user-select: none;
	    user-select: none; // 防止快速点击图片被选中，可不加，为提高体验，博主加上了这几行代码。
	    & img {
	      width: 100%;
	      height: 100%;
	    }
	  }
	}
	.check {
		
	  -webkit-transition: box-shadow 3.5s;
	  -moz-transition: box-shadow 0.5s;
	  -o-transition: box-shadow 0.5s;
	  transition: box-shadow 0.5s;
	  box-shadow: 0px 0px 0px 1em rgba(226, 32, 44, 0);
	}
	.img-box-check {
	  background-position: right;
            transition: background .6s steps(28);
	  animation: anm 2.5s;
	  -moz-animation: anm 0.5s;
	  -webkit-animation: anm 0.5s;
	  -o-animation: anm 0.5s;
	}
	@keyframes anm {
	  0% {
	    transform: scale(0);
	    -webkit-transform: scale(0);
	    -moz-transform: scale(0);
	  }
	  50% {
	    transform: scale(1.3);
	    -webkit-transform: scale(1.3);
	    -moz-transform: scale(1.3);
	  }
	  100% {
	    transform: scale(1);
	    -webkit-transform: scale(1);
	    -moz-transform: scale(1);
	  }
	}
	/* 资讯主图 start*/
	.image-article {
		border-radius: 8rpx;
		border: 1rpx solid #F8F7F8;
		width: 100rpx;
		height: 100rpx;
		position: relative;
	}
	
	.image-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 10rpx;
	}
	
	
	.tn-fab {
		&__box {
			display: flex;
			justify-content: center;
			align-items: flex-start;
			flex-direction: column;
			position: fixed;
			transition: all 0.25s ease-in-out;
		}
	
		&--right {
			align-items: flex-end;
		}
	
		&__btns {
			transition: all 0.25s cubic-bezier(0, .13, 0, 1.43);
			transform-origin: 80% bottom;
	
			&__animation--up {
				opacity: 0;
				transform: translateY(100%);
			}
	
			&__animation--around {
				position: absolute;
				top: 0;
				left: 0;
			}
	
			&--visible--up {
				// visibility: visible;
				opacity: 1;
				transform: translateY(0);
			}
	
			&--visible--around {
				// visibility: visible;
				// opacity: 1;
			}
		}
	
		&__item {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			padding-bottom: 20rpx;
	
			&__animation--around {
				position: absolute;
				top: 0;
				left: 0;
				transition: transform 0.25s ease-in-out;
				transform-origin: 50% 50%;
				padding-bottom: 0 !important;
			}
	
			&--left {
				flex-flow: row-reverse;
			}
	
			&__text {
				&--left {
					padding-left: 14rpx;
				}
	
				&--right {
					padding-right: 14rpx;
				}
			}
	
			&__btn {
				display: flex;
				align-items: center;
				justify-content: center;
				box-shadow: 0 0 5rpx 2rpx rgba(0, 0, 0, 0.07);
				transition: all 0.2s linear;
	
				&--active {
					animation-name: fab-button-animation;
					animation-duration: 0.2s;
					animation-timing-function: cubic-bezier(0, .13, 0, 1.43);
				}
	
				&__title {
					width: 90%;
					text-align: center;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
	
				&__icon {
					text-align: center;
					font-size: 64rpx;
				}
	
				&__image {
					display: block;
				}
			}
		}
	
		&__mask {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: $tn-mask-bg-color;
			transition: all 0.2s ease-in-out;
			opacity: 0;
	
			&--visible {
				opacity: 1;
			}
		}
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
	
</style>
