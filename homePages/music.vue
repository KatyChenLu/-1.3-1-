<template>
  <view class="template-circle tn-safe-area-inset-bottom">

    <!-- 顶部自定义导航 -->
    <tn-nav-bar :isBack="false" :bottomShadow="false" backgroundColor="none">
      <view class="custom-nav tn-flex tn-flex-col-center tn-flex-row-left">
        <!-- 个人圈子，默认显示自己头像，当有消息互动的时候，显示别人的头像，并且有一个红点点 -->
        <view class="custom-nav__back" @click="tn('/circlePages/blogger')">
          <view class="logo-pic tn-shadow-blur" style="background-image:url('https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg')">
            <view class="logo-image">
              <tn-badge backgroundColor="#E72F8C" :dot="true" :radius="16" :absolute="true" :translateCenter="false"></tn-badge>
            </view>
          </view> 
          <!-- <view class="tn-icon-left"></view> -->
        </view>
        <view class="tn-margin-top tn-margin-left" style="text-shadow:  1rpx 0 0 #FFF, 0 1rpx 0 #FFF, -1rpx 0 0 #FFF , 0 -1rpx 0 #FFF;">
          <tn-tabs :list="scrollList" :current="current" @change="tabChange" activeColor="#000" :bold="true" :fontSize="36"></tn-tabs>
        </view>
      </view>

    </tn-nav-bar>
    
    
    <!-- 发现 -->
    <view class="" v-if="current==0">
      
      <view class="tn-margin-top-sm" :style="{paddingTop: vuex_custom_bar_height + 'px'}" @click="tn('/circlePages/ranking')">
        <view class="tn-flex tn-flex-row-between tn-bg-yellow  tn-round tn-padding-xs tn-margin">
          <view class="justify-content-item tn-text-center tn-flex" style="padding: 25rpx 30rpx">
            <tn-avatar-group :lists="latestUserAvatar" size="sm"></tn-avatar-group> 
            <text class="tn-padding-xs">1629 人</text>
          </view>
          <view class="justify-content-item tn-text-right tn-padding-top-sm">
            <view class="tn-text-bold">
              圈子 · 积分榜
            </view>
            <view class="tn-text-xs tn-color-gray--dark tn-padding-top-xs">
              积分可兑换精美周边
            </view>
          </view>
          <view class="justify-content-item tn-text-right tn-margin-right tn-padding-top-lg">
            <text class="tn-icon-right tn-color-gray--dark"></text>
          </view>
        </view>
      </view>
      
      <view class="tn-flex tn-flex-row-between tn-margin-top">
        <view class="justify-content-item tn-margin tn-text-bold tn-text-xl">
        精选圈子
        </view>
        <view class="justify-content-item tn-margin tn-text-lg tn-color-grey">
          <text class="tn-padding-xs">全部</text>
          <text class="tn-icon-topics"></text>
        </view>
      </view>
      
      <view class="tn-strip-bottom">
        <!-- 方式16 start-->
        <view class="tn-flex tn-flex-wrap tn-margin-bottom">
          <block v-for="(item, index) in bloggerList" :key="index">
            <view class="" style="width: 33.3%;" @click="tn('/circlePages/group')">
              <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center ">
                <view class="tn-radius tn-padding-sm">
                  <view class="image-pic" :style="'background-image:url('+ item.url +')'">
                    <view class="image-circle">
                    </view>
                  </view>
                  <view class="tn-text-center tn-text-bold tn-padding-top-xs">{{item.name}}</view>
                  <view class="tn-text-center tn-text-xs tn-color-gray--dark tn-padding-top-xs">{{item.text}}</view>
                </view>
              </view>
            </view>
          </block>
        </view>
        <!-- 方式16 end-->
      </view>
    
      <view class="tn-flex tn-flex-direction-column tn-margin-top-sm tn-margin-bottom">
     
        <!-- 图文信息 -->
        <block v-for="(item,index) in content" :key="index">
          <view class="blogger__item">
            <view class="blogger__author tn-flex tn-flex-row-between tn-flex-col-center">
              <view class="justify__author__info" @click="tn('/circlePages/blogger_other')">
                <view class="tn-flex tn-flex-row-center">
                  <view class="tn-flex tn-flex-row-center tn-flex-col-center">
                    <view class="">
                      <tn-avatar
                        class=""
                        shape="circle"
                        :src="item.userAvatar"
                        size="lg">
                      </tn-avatar>
                    </view>
                    <view class="tn-padding-right tn-text-ellipsis">
                      <view class="tn-padding-right tn-padding-left-sm tn-text-bold tn-text-lg">{{ item.userName }}</view>
                      <view class="tn-padding-right tn-padding-left-sm tn-padding-top-xs tn-color-gray">{{ item.date }}</view>
                    </view>
                  </view>
                </view>
              </view>
              <view class="blogger__author__btn justify-content-item tn-flex-col-center tn-flex-row-center">
                <!-- 为什么不放关注按钮，因为快餐文化的世界，关注按钮放在外面没必要 -->
                <text class="tn-icon-more-vertical tn-color-gray tn-text-bold tn-text-xxl"></text>
              </view>
            </view>
           
            <view class="blogger__desc tn-margin-top-sm tn-margin-bottom-sm tn-text-justify tn-flex-col-center tn-flex-row-left" @click="tn('/circlePages/details')">
              <view v-for="(label_item,label_index) in item.label" :key="label_index" class="blogger__desc__label tn-float-left tn-margin-right tn-bg-gray--light tn-round tn-text-sm tn-text-bold">
                <text class="blogger__desc__label--prefix">#</text> 
                <text class="tn-text-df">{{ label_item }}</text>
              </view>
              <!-- 不用限制长度了，因为发布的时候限制长度了-->
              <text v-if="!item.label || item.label.length < 4" class="blogger__desc__content tn-flex-1 tn-text-justify tn-text-df">{{ item.desc }}</text>  
            </view>
            
            <!-- 内容太多疲劳了-->
            <!-- <view
              v-if="item.content"
              class="blogger__content"
              :id="`blogger__content--${index}`"
            >
              <view
                class="blogger__content__data clamp-text-2">
                {{ item.content }}
              </view>
            </view> -->
            
            <block v-if="item.mainImage">
              <view v-if="[1,2,4].indexOf(item.mainImage.length) != -1" class="tn-padding-top-xs" @click="tn('/circlePages/details')">
                <image v-for="(image_item,image_index) in item.mainImage" :key="image_index" 
                  class="blogger__main-image"
                  :class="{
                    'blogger__main-image--1 tn-margin-bottom-sm': item.mainImage.length === 1,
                    'blogger__main-image--2 tn-margin-right-sm tn-margin-bottom-sm': item.mainImage.length === 2 || item.mainImage.length === 4
                  }"
                  :src="image_item"
                  mode="aspectFill"
                ></image>
              </view>
              <view v-else class="tn-padding-top-xs" @click="tn('/circlePages/details')">
                <tn-grid  hoverClass="none" :col="3">
                  <block v-for="(image_item,image_index) in item.mainImage" :key="image_index">
                    <!-- #ifndef MP -->
                    <tn-grid-item style="width: 30%;margin: 10rpx;">
                      <image
                        class="blogger__main-image blogger__main-image--3"
                        :src="image_item"
                        mode="aspectFill"
                      ></image>
                    </tn-grid-item>
                    <!-- #endif-->
                    <!-- #ifdef MP -->
                    <tn-grid-item style="width: 30%;margin: 10rpx;">
                      <image
                        class="blogger__main-image blogger__main-image--3"
                        :src="image_item"
                        mode="aspectFill"
                      ></image>
                    </tn-grid-item>
                    <!-- #endif-->
                  </block>
                </tn-grid>
              </view>
            </block>
           
            <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-top-xs">
              <view class="justify-content-item tn-color-gray tn-text-center">
                <view class="">
                  <text class="blogger__count-icon tn-icon-footprint"></text> 
                  <text class="tn-padding-right">{{ item.collectionCount }}</text>
                  <text class="blogger__count-icon tn-icon-message"></text>
                  <text class="tn-padding-right">{{ item.commentCount }}</text>
                  <text class="blogger__count-icon tn-icon-like"></text>
                  <text class="">{{ item.likeCount }}</text>
                </view>
              </view>
              <view class="justify-content-item tn-flex tn-flex-col-center">
                <view style="margin-right: 10rpx;margin-left: 20rpx;">
                  <tn-avatar-group :lists="item.viewUser.latestUserAvatar" size="sm"></tn-avatar-group>
                </view>
                <text class="tn-color-gray">{{ item.viewUser.viewUserCount }}人</text>
              </view>
            </view>
          </view>
          
          <!-- 边距间隔 -->
          <view class="tn-strip-bottom" v-if="index != content.length - 1"></view>
        </block>
        
        <!-- 边距间隔 -->
        <view class="tn-strip-bottom"></view>
        
        <!-- 广告 -->
        <view class="blogger__item" @click="tn('/circlePages/advertise')">
          <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-bottom">
            <view class="justify-content-item">
              <view class="tn-flex tn-flex-col-center tn-flex-row-left">
                <!-- 图标logo -->
                <view class="ad-pic tn-shadow-blur" style="background-image:url('https://tnuiimage.tnkjapp.com/logo/logo2.png')">
                  <view class="ad-image">
                  </view>
                </view>
                <view class="tn-padding-right" style="width: 65vw;">
                  <view class="tn-padding-right tn-padding-left-sm tn-text-bold tn-text-lg">抓住那只猪科技有限公司</view>
                  <view class="tn-padding-right tn-padding-left-sm tn-color-gray tn-text-ellipsis">我们都是好好孩子</view>
                </view>
                
              </view>
            </view>
            <view class="tn-color-gray">广告</view>
          </view>
          <tn-stack-swiper ref="stackSwiper" :list="adList" :switchRate="30" :height="360" width="92%" :autoplay="adAutoplay"></tn-stack-swiper>
        </view>
        
        <!-- 边距间隔 -->
        <view class="tn-strip-bottom"></view>
        
        <!-- 图文信息 -->
        <block v-for="(item,index) in content" :key="index">
          <view class="blogger__item">
            <view class="blogger__author tn-flex tn-flex-row-between tn-flex-col-center">
              <view class="justify__author__info" @click="tn('/circlePages/blogger_other')">
                <view class="tn-flex tn-flex-row-center">
                  <view class="tn-flex tn-flex-row-center tn-flex-col-center">
                    <view class="">
                      <tn-avatar
                        class=""
                        shape="circle"
                        :src="item.userAvatar"
                        size="lg">
                      </tn-avatar>
                    </view>
                    <view class="tn-padding-right tn-text-ellipsis">
                      <view class="tn-padding-right tn-padding-left-sm tn-text-bold tn-text-lg">{{ item.userName }}</view>
                      <view class="tn-padding-right tn-padding-left-sm tn-padding-top-xs tn-color-gray">{{ item.date }}</view>
                    </view>
                  </view>
                </view>
              </view>
              <view class="blogger__author__btn justify-content-item tn-flex-col-center tn-flex-row-center">
                <text class="tn-icon-more-vertical tn-color-gray tn-text-bold tn-text-xxl"></text>
              </view>
            </view>
           
            <view class="blogger__desc tn-margin-top-sm tn-margin-bottom-sm tn-text-justify tn-flex-col-center tn-flex-row-left" @click="tn('/circlePages/details')">
              <view v-for="(label_item,label_index) in item.label" :key="label_index" class="blogger__desc__label tn-float-left tn-margin-right tn-bg-gray--light tn-round tn-text-sm tn-text-bold">
                <text class="blogger__desc__label--prefix">#</text> 
                <text class="tn-text-df">{{ label_item }}</text>
              </view>
              <!-- 不用限制长度了，因为发布的时候限制长度了-->
              <text v-if="!item.label || item.label.length < 4" class="blogger__desc__content tn-flex-1 tn-text-justify tn-text-df">{{ item.desc }}</text>  
            </view>
            
            <!-- 内容太多疲劳了-->
            <!-- <view
              v-if="item.content"
              class="blogger__content"
              :id="`blogger__content--${index}`"
            >
              <view
                class="blogger__content__data clamp-text-2">
                {{ item.content }}
              </view>
            </view> -->
            
            <block v-if="item.mainImage">
              <view v-if="[1,2,4].indexOf(item.mainImage.length) != -1" class="tn-padding-top-xs" @click="tn('/circlePages/details')">
                <image v-for="(image_item,image_index) in item.mainImage" :key="image_index" 
                  class="blogger__main-image"
                  :class="{
                    'blogger__main-image--1 tn-margin-bottom-sm': item.mainImage.length === 1,
                    'blogger__main-image--2 tn-margin-right-sm tn-margin-bottom-sm': item.mainImage.length === 2 || item.mainImage.length === 4
                  }"
                  :src="image_item"
                  mode="aspectFill"
                ></image>
              </view>
              <view v-else class="tn-padding-top-xs" @click="tn('/circlePages/details')">
                <tn-grid  hoverClass="none" :col="3">
                  <block v-for="(image_item,image_index) in item.mainImage" :key="image_index">
                    <!-- #ifndef MP -->
                    <tn-grid-item style="width: 30%;margin: 10rpx;">
                      <image
                        class="blogger__main-image blogger__main-image--3"
                        :src="image_item"
                        mode="aspectFill"
                      ></image>
                    </tn-grid-item>
                    <!-- #endif-->
                    <!-- #ifdef MP -->
                    <tn-grid-item style="width: 30%;margin: 10rpx;">
                      <image
                        class="blogger__main-image blogger__main-image--3"
                        :src="image_item"
                        mode="aspectFill"
                      ></image>
                    </tn-grid-item>
                    <!-- #endif-->
                  </block>
                </tn-grid>
              </view>
            </block>
           
            <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-top-xs">
              <view class="justify-content-item tn-color-gray tn-text-center">
                <view class="">
                  <text class="blogger__count-icon tn-icon-footprint"></text> 
                  <text class="tn-padding-right">{{ item.collectionCount }}</text>
                  <text class="blogger__count-icon tn-icon-message"></text>
                  <text class="tn-padding-right">{{ item.commentCount }}</text>
                  <text class="blogger__count-icon tn-icon-like"></text>
                  <text class="">{{ item.likeCount }}</text>
                </view>
              </view>
              <view class="justify-content-item tn-flex tn-flex-col-center">
                <view style="margin-right: 10rpx;margin-left: 20rpx;">
                  <tn-avatar-group :lists="item.viewUser.latestUserAvatar" size="sm"></tn-avatar-group>
                </view>
                <text class="tn-color-gray">{{ item.viewUser.viewUserCount }}人</text>
              </view>
            </view>
          </view>
          
          <!-- 边距间隔 -->
          <view class="tn-strip-bottom" v-if="index != content.length - 1"></view>
        </block>
         
            
      </view>
      
      <view class='tn-tabbar-height'></view>
      
    </view>
    
    <!-- 视频，采用轮播形式，放10个视频左右，小程序性能决定了这个不能太骚，如果你想骚，可以把微信买下来 -->
    <view class="" v-if="current==1">
      <swiper class="card-swiper" :circular="true" vertical="true"
        :autoplay="false" duration="500" interval="5000" @change="cardSwiper" > 
        <swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
          <view class="swiper-item image-banner">
            
            
                      <video :id="`video-${item.id}`" :src="item.mp4"
                      loop style="height: 100vh;width: 100vw;"></video>
            
            
            <!-- <image :src="item.url" mode="aspectFill" v-if="item.type=='image'" style="height: 100vh;width: 100vw;"></image> -->
          </view>
          <!-- <view class="swiper-item-png image-banner">
            <image :src="item.pngurl" mode="heightFix" v-if="item.type=='image'" style="height: 100vh;width: 100vw;"></image>
          </view> -->
        </swiper-item>
      </swiper>
      <!-- <view class="indication">
          <block v-for="(item,index) in swiperList" :key="index">
              <view class="spot" :class="cardCur==index?'active':''"></view>
          </block>
      </view> -->
    </view>
    
    <!-- 活动 -->
    <view class="" v-if="current==2">
      <view class="tn-margin-bottom-lg" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
        <block v-for="(item, index) in reserve" :key="index">
          <view class="article-shadow tn-margin" @click="tn('/circlePages/reserve')">
            <view class="tn-flex">
              <view class="image-pic tn-margin-sm" :style="'background-image:url(' + item.userAvatar + ')'">
                <view class="image-article">
                </view>
              </view>
              <view class="tn-margin-sm tn-padding-top-xs" style="width: 100%;">
                <view class="tn-text-lg tn-text-bold clamp-text-1 tn-text-justify">
                  {{ item.title }}
                </view>
                <view class="tn-flex tn-flex-row-between tn-flex-col-between tn-padding-top-xs" style="min-height: 105rpx;">
                  <!-- <text class="tn-text-df tn-color-gray clamp-text-2 tn-text-justify">
                    {{ item.desc }}
                  </text> -->
                  <view class="justify-content-item tn-flex tn-flex-col-center">
                    <tn-avatar-group :lists="item.viewUser.latestUserAvatar" size="sm"></tn-avatar-group>
                  </view>
                  <view class="justify-content-item tn-flex tn-flex-col-center">
                    <text class="tn-color-gray">{{ item.viewUser.viewUserCount }} 人参与</text>
                  </view>
                </view>
                <view class="tn-flex tn-flex-row-between tn-flex-col-between">
                  <view v-for="(label_item,label_index) in item.label" :key="label_index"
                    class="justify-content-item tn-tag-content__item tn-margin-right tn-round tn-text-sm tn-text-bold" :class="[`tn-bg-${item.color}--light tn-color-${item.color}`]">
                    <text class="tn-tag-content__item--prefix">#</text> {{ label_item }}
                  </view>
                  <view class="justify-content-item tn-color-gray tn-text-center tn-color-gray--disabled" style="padding-top: 5rpx;">
                    <text class="tn-icon-eye tn-padding-right-xs tn-text-lg"></text>
                    <text class="tn-padding-right tn-text-df">{{ item.collectionCount }}</text>
                    <text class="tn-icon-fire tn-padding-right-xs tn-text-lg"></text>
                    <text class="tn-text-df">{{ item.likeCount }}</text>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </block>
      </view>
      <view class='tn-tabbar-height'></view>
    </view>
    
    <!-- 压屏窗-->
    <tn-landscape :show="show2" @close="closeLandscape" closePosition="bottom" :closeSize="60">
      
      <!-- 方式9 start-->
      <view class="tn-flex" style="margin-bottom: 100rpx;padding-top: 46vh;">
        <view class="tn-flex-1 tn-margin-sm tn-radius" @click="navEdit">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon9__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-red tn-color-white">
              <view class="tn-icon-camera-fill"></view>
            </view>  
            <view class="tn-color-white tn-text-sm tn-text-center">
              <text class="tn-text-ellipsis">发布动态</text>
            </view>
          </view>
        </view>
        <view class="tn-flex-1 tn-margin-sm tn-radius" @click="navCreate">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon9__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-cyan tn-color-white">
              <view class="tn-icon-flag-fill"></view>
            </view>  
            <view class="tn-color-white tn-text-sm tn-text-center">
              <text class="tn-text-ellipsis">发起活动</text>
            </view>
          </view>
        </view>
        <view class="tn-flex-1 tn-margin-sm tn-radius" @click="navBuild">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
            <view class="icon9__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-blue tn-color-white">
              <view class="tn-icon-topics-fill"></view>
            </view>  
            <view class="tn-color-white tn-text-sm tn-text-center">
              <text class="tn-text-ellipsis">创建圈子</text>
            </view>
          </view>
        </view>
      </view>
      
      
    </tn-landscape>
    
    <view class="edit tnxuanfu" @tap="showLandscape">
      <view class="bg0 pa">
        <view class="bg1">
          <image src="https://tnuiimage.tnkjapp.com/my/my6.png" class="button-shop shadow"></image>
        </view>
      </view>
      <view class="hx-box pa">
        <view class="pr">
          <view class="hx-k1 pa0">
            <view class="span"></view>
          </view>
          <view class="hx-k2 pa0">
            <view class="span"></view>
          </view>
          <view class="hx-k3 pa0">
            <view class="span"></view>
          </view>
          <view class="hx-k4 pa0">
            <view class="span"></view>
          </view>
          <view class="hx-k5 pa0">
            <view class="span"></view>
          </view>
          <view class="hx-k6 pa0">
            <view class="span"></view>
          </view>
        </view>
      </view>
    </view>
        
  </view>
</template>

<script>
  export default {
    name: 'CirclePage',
    data(){
      return {
          cardCur: 0,
          swiperList: [{
            id: 0,
            type: 'image',
            url: 'https://tnuiimage.tnkjapp.com/swiper/fullbg1.jpg',
            pngurl: 'https://tnuiimage.tnkjapp.com/swiper/full1.png',
            mp4: 'https://tnuiimage.tnkjapp.com/new/111.mp4'
          }, {
            id: 1,
            type: 'image',
            url: 'https://tnuiimage.tnkjapp.com/swiper/fullbg2.jpg',
            pngurl: 'https://tnuiimage.tnkjapp.com/swiper/full2.png',
            mp4: 'https://tnuiimage.tnkjapp.com/new/22.mp4'
          }, {
            id: 2,
            type: 'image',
            url: 'https://tnuiimage.tnkjapp.com/swiper/fullbg1.jpg',
            pngurl: 'https://tnuiimage.tnkjapp.com/swiper/full3.png',
            mp4: 'https://tnuiimage.tnkjapp.com/new/33.mp4'
          }, {
            id: 3,
            type: 'image',
            url: 'https://tnuiimage.tnkjapp.com/swiper/fullbg2.jpg',
            pngurl: 'https://tnuiimage.tnkjapp.com/swiper/full4.png',
            mp4: 'https://tnuiimage.tnkjapp.com/new/111.mp4'
          }],
          current: 0,
          scrollList: [
            {name: '发现'},
            {name: '视频'},
            {name: '世界', count: ''}
          ],
          latestUserAvatar: [
            {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
            {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
            {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
            {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
          ],
          bloggerList: [{
            id: 0,
            type: 'image',
            name: 'UI设计',
            text: '629人关注',
            url: 'https://tnuiimage.tnkjapp.com/blogger/blogger_beibei.jpg',
          }, {
            id: 1,
            type: 'image',
            name: '前端开发',
            text: '688人关注',
            url: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
          }, {
            id: 2,
            type: 'image',
            name: '校园生活',
            text: '552人关注',
            url: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
          }, {
            id: 3,
            type: 'image',
            name: '户外摄影',
            text: '105人关注',
            url: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg',
          }, {
            id: 4,
            type: 'image',
            name: '电影点评',
            text: '387人关注',
            url: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
          }, {
            id: 5,
            type: 'image',
            name: '热血动漫',
            text: '643人关注',
            url: 'https://tnuiimage.tnkjapp.com/blogger/content_1.jpeg',
          }],
          // 内容默认隐藏显示的高度
          contentHideShowHeight: 0,
          content: [
            {
              userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
              userName: '图鸟北北',
              date: '2022年5月20日',
              label: ['开源','创意','UI框架'],
              desc: '开源可商用组件，助你开发酷炫UI一臂之力',
              content: '基础常用的布局元素，酷炫完善的配色体系，统一可增的图标 icon ，简便调用的功能组件，酷炫的前端页面，吖，编不下去了',
              viewUser: {
                latestUserAvatar: [
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
                ],
                viewUserCount: 62
              },
              collectionCount: 439,
              commentCount: 46,
              likeCount: 83
            },
            {
              userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
              userName: '图鸟北北',
              date: '2022年5月20日',
              label: ['开源','创意','UI框架'],
              desc: '开源可商用组件，助你开发酷炫UI一臂之力',
              content: '基础常用的布局元素，酷炫完善的配色体系，统一可增的图标 icon ，简便调用的功能组件，酷炫的前端页面，吖，编不下去了',
              mainImage:[
                'https://tnuiimage.tnkjapp.com/blogger/content_1.jpeg'
              ],
              viewUser: {
                latestUserAvatar: [
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
                ],
                viewUserCount: 12
              },
              collectionCount: 902,
              commentCount: 64,
              likeCount: 83
            },
            {
              userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg',
              userName: '图鸟北北',
              date: '2022年5月20日',
              label: [],
              desc: '',
              content: '',
              mainImage:[
                'https://tnuiimage.tnkjapp.com/shop/computer2.jpg',
                'https://tnuiimage.tnkjapp.com/shop/prototype2.jpg',
              ],
              viewUser: {
                latestUserAvatar: [
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                ],
                viewUserCount: 56
              },
              collectionCount: 431,
              commentCount: 26,
              likeCount: 84
            },
            {
              userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
              userName: '图鸟北北',
              date: '2022年5月20日',
              label: ['开源','创意'],
              desc: '开源可商用组件',
              content: '基础常用的布局元素，酷炫完善的配色体系，统一可增的图标 icon ，简便调用的功能组件，酷炫的前端页面，吖，编不下去了 基础常用的布局元素，酷炫完善的配色体系，统一可增的图标 icon ，简便调用的功能组件，酷炫的前端页面，吖，编不下去了',
              mainImage:[
                'https://tnuiimage.tnkjapp.com/swiper/swiper2.jpg',
                'https://tnuiimage.tnkjapp.com/swiper/swiper3.jpg',
                'https://tnuiimage.tnkjapp.com/swiper/swiper4.jpg',
              ],
              viewUser: {
                latestUserAvatar: [
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                ],
                viewUserCount: 231
              },
              collectionCount: 780,
              commentCount: 89,
              likeCount: 82
            },
            {
              userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/blogger_beibei.jpg',
              userName: '图鸟北北',
              date: '2022年5月20日',
              label: ['开源','链接'],
              desc: 'https://www.yuque.com/tuniao',
              mainImage:[
                'https://tnuiimage.tnkjapp.com/shop/watch1.jpg',
                'https://tnuiimage.tnkjapp.com/shop/watch2.jpg',
                'https://tnuiimage.tnkjapp.com/shop/pillow2.jpg',
                'https://tnuiimage.tnkjapp.com/shop/pillow.jpg',
              ],
              viewUser: {
                latestUserAvatar: [
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                ],
                viewUserCount: 28
              },
              collectionCount: 432,
              commentCount: 33,
              likeCount: 12
            },
            {
              userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/content_1.jpeg',
              userName: '图鸟北北',
              date: '2022年5月20日',
              label: ['开源','创意'],
              desc: '开源可商用组件',
              mainImage:[
                'https://tnuiimage.tnkjapp.com/blogger/y11.jpg',
                'https://tnuiimage.tnkjapp.com/blogger/y33.jpg',
                'https://tnuiimage.tnkjapp.com/blogger/y22.jpg',
                'https://tnuiimage.tnkjapp.com/blogger/y44.jpg',
                'https://tnuiimage.tnkjapp.com/blogger/y55.jpg',
              ],
              viewUser: {
                latestUserAvatar: [
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                  {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                ],
                viewUserCount: 65
              },
              collectionCount: 265,
              commentCount: 22,
              likeCount: 62
            }
          ],
          reserve: [{
              userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
              userName: '图鸟北北',
              date: '2022年5月20日',
              color: 'red',
              label: ['新年祝福'],
              title: '2023年祝福接力',
              desc: '祝福接力活动：预约接龙的用户，将收到祝福通知',
              mainImage: 'https://tnuiimage.tnkjapp.com/shop/prototype2.jpg',
              viewUser: {
                latestUserAvatar: [{
                    src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
                  },
                  {
                    src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
                  },
                  {
                    src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
                  },
                  {
                    src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
                  },
                ],
                viewUserCount: 567
              },
              collectionCount: 543,
              commentCount: 543,
              likeCount: 206
            },
            {
              userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/blogger_beibei.jpg',
              userName: '图鸟北北',
              date: '2022年5月20日',
              color: 'cyan',
              label: ['时光信件'],
              title: '寄给十年后自己',
              desc: '时光邮局：预约接龙的用户，十年后，将收到一份来着十年前发出的信件',
              mainImage: 'https://tnuiimage.tnkjapp.com/shop/prototype1.jpg',
              viewUser: {
                latestUserAvatar: [{
                    src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
                  },
                  {
                    src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
                  },
                  {
                    src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
                  },
                  {
                    src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
                  },
                ],
                viewUserCount: 987
              },
              collectionCount: 567,
              commentCount: 69,
              likeCount: 65
            },
            {
              userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg',
              userName: '图鸟北北',
              date: '2022年5月20日',
              color: 'blue',
              label: ['纪念日'],
              title: '常常忘记纪念日？',
              desc: '纪念日提醒：预约接龙的用户，微信上将收到纪念日提醒通知',
              mainImage: 'https://tnuiimage.tnkjapp.com/shop/computer2.jpg',
              viewUser: {
                latestUserAvatar: [{
                    src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
                  },
                  {
                    src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
                  },
                  {
                    src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
                  },
                  {
                    src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
                  },
                ],
                viewUserCount: 321
              },
              collectionCount: 654,
              commentCount: 232,
              likeCount: 543
            },
            {
              userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
              userName: '图鸟北北',
              date: '2022年5月20日',
              color: 'green',
              label: ['团购接龙'],
              title: '冰箱空空如也？一起团购屯菜吖',
              desc: '团购活动：预约接龙的用户，将参与一起来买菜',
              mainImage: 'https://tnuiimage.tnkjapp.com/shop/phonecase1.jpg',
              viewUser: {
                latestUserAvatar: [{
                    src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
                  },
                  {
                    src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
                  },
                  {
                    src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
                  },
                  {
                    src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
                  },
                ],
                viewUserCount: 230
              },
              collectionCount: 987,
              commentCount: 236,
              likeCount: 342
            },
            {
              userAvatar: 'https://tnuiimage.tnkjapp.com/shop/phonecase2.jpg',
              userName: '图鸟北北',
              date: '2022年5月20日',
              color: 'orange',
              label: ['回母校'],
              title: '常回家看看',
              desc: '线下活动：预约接龙的用户，将表示参与了活动当天回母校',
              mainImage: 'https://tnuiimage.tnkjapp.com/shop/phonecase2.jpg',
              viewUser: {
                latestUserAvatar: [{
                    src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
                  },
                  {
                    src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
                  },
                  {
                    src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
                  },
                  {
                    src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
                  },
                ],
                viewUserCount: 106
              },
              collectionCount: 765,
              commentCount: 32,
              likeCount: 91
            },
            {
              userAvatar: 'https://tnuiimage.tnkjapp.com/shop/watch1.jpg',
              userName: '图鸟北北',
              date: '2022年5月20日',
              color: 'purplered',
              label: ['婚礼'],
              title: '我们结婚啦',
              desc: '婚礼请帖：欢迎来参加我们的婚礼宴席，不用随礼',
              mainImage: 'https://tnuiimage.tnkjapp.com/shop/watch1.jpg',
              viewUser: {
                latestUserAvatar: [{
                    src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
                  },
                  {
                    src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
                  },
                  {
                    src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
                  },
                  {
                    src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
                  },
                ],
                viewUserCount: 232
              },
              collectionCount: 776,
              commentCount: 48,
              likeCount: 86
            },
            {
              userAvatar: 'https://tnuiimage.tnkjapp.com/shop/sticker.jpg',
              userName: '图鸟北北',
              date: '2022年5月20日',
              color: 'purple',
              label: ['大扫除'],
              title: '组队参加大扫除公益活动',
              desc: '活动组队：预约接龙的学生，将表示参与了当天的大扫除活动',
              mainImage: 'https://tnuiimage.tnkjapp.com/shop/sticker.jpg',
              viewUser: {
                latestUserAvatar: [{
                    src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
                  },
                  {
                    src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
                  },
                  {
                    src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
                  },
                  {
                    src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
                  },
                ],
                viewUserCount: 456
              },
              collectionCount: 342,
              commentCount: 42,
              likeCount: 76
            },
            {
              userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
              userName: '图鸟北北',
              date: '2022年5月20日',
              color: 'brown',
              label: ['新疆出游'],
              title: '一起组队去新疆看西西',
              desc: '旅游出行：一起去新疆看西西',
              mainImage: 'https://tnuiimage.tnkjapp.com/shop/card.jpg',
              viewUser: {
                latestUserAvatar: [{
                    src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
                  },
                  {
                    src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
                  },
                  {
                    src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
                  },
                  {
                    src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
                  },
                ],
                viewUserCount: 129
              },
              collectionCount: 265,
              commentCount: 22,
              likeCount: 62
            }
          ],
          adList: [
            {image: 'https://tnuiimage.tnkjapp.com/swiper/ad1.jpg'},
            {image: 'https://tnuiimage.tnkjapp.com/swiper/ad2.jpg'},
            {image: 'https://tnuiimage.tnkjapp.com/swiper/ad3.jpg'},
            {image: 'https://tnuiimage.tnkjapp.com/swiper/ad4.jpg'},
            {image: 'https://tnuiimage.tnkjapp.com/swiper/ad5.jpg'}
          ],
          adAutoplay: false,
          
          /* 压屏窗*/
          show2: false,
          maskCloseable: true,
      }
    },
    onLoad() {
      this.initContentData()
      this.contentHideShowHeight = uni.upx2px(56) * 3
    },
    onReady() {
      // this.$nextTick(() => {
      //   this.getContentRectInfo()
      // })
    },
    onShow() {
      this.adAutoplay = true
    },
    onHide() {
      this.adAutoplay = false
    },
    methods: {
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
        this.current = index
      },
      // 跳转
      tn(e) {
      	uni.navigateTo({
      		url: e,
      	});
      },
      // 震动跳转
      navEdit(e) {
        wx.vibrateLong();
        uni.navigateTo({
          url: '/circlePages/edit'
        })
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
      
      // 弹出压屏窗
      showLandscape() {
        this.openLandscape()
      },
      // 打开压屏窗
      openLandscape() {
        // wx.vibrateLong();
        this.show2 = true
      },
      // 关闭压屏窗
      closeLandscape() {
        this.show2 = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .template-circle{
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
  .logo-image{
    width: 60rpx;
    height: 60rpx;
    position: relative;
    margin-top: -15rpx;
  }
  .logo-pic{
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
    border-radius: 50%;
  }
  /* 自定义导航栏内容 end */
  /* 博主头像 start*/
  .image-circle{
    // padding: 95rpx;
    width: 190rpx;
    height: 190rpx;
    font-size: 40rpx;
    font-weight: 300;
    position: relative;
  }
  .image-pic{
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
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
      &__content {
        
      }
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
  .ad-image{
    width: 80rpx;
    height: 80rpx;
    position: relative;
  }
  .ad-pic{
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
    border-radius: 20%;
  }
  /* 自定义导航栏内容 end */
  
  
  /* 全屏轮播  start*/
  .card-swiper {
    height: 100vh !important;
  }
    
  .card-swiper swiper-item {
    width: 750rpx !important;
    left: 0rpx;
    box-sizing: border-box;
    overflow: initial;
  }
    
  .card-swiper swiper-item .swiper-item {
    width: 100%;
    display: block;
    height: 100vh;
    border-radius: 0rpx;
    transform: scale(1);
    transition: all 0.2s ease-in 0s;
    overflow: hidden;
  }
    
  .card-swiper swiper-item.cur .swiper-item {
    transform: none;
    transition: all 0.2s ease-in 0s;
  }
    
  .card-swiper swiper-item .swiper-item-png {
    margin-top: -50vh;
    width: 100%;
    display: block;
    border-radius: 0rpx;
    transform: translate(1040rpx, 20rpx) scale(0.5, 0.5);
    transition: all 0.6s ease 0s;
    // overflow: hidden;
  }
    
  .card-swiper swiper-item.cur .swiper-item-png {
    margin-top: -100vh;
    width: 900rpx;
    transform: translate(-80rpx, 0rpx) scale(1, 1);
    transition: all 0.6s ease 0s;
  }
  .image-banner{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image-banner image{
    width: 100%;
  }
  
  /* 轮播指示点 start*/
  .indication{
    z-index: 9999;
    width: 100%;
    height: 36rpx;
    position: fixed;
    // display:flex;
    display: block;
    flex-direction:row;
    align-items:center;
    justify-content:center;
  }
  
  .spot{
    background-color: #000;
    opacity: 0.3;
    width: 10rpx;
    height: 10rpx;
    border-radius: 20rpx;
    margin: 20rpx 0 !important;
    left: 95vw;
    top: -60vh;
    position: relative;
  }
  
  .spot.active{
    opacity: 0.6;
    height: 30rpx;
    background-color: #000;
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
  
  
  /* 图标容器9 start */
  .icon9 {
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
        width: 110rpx;
        height: 110rpx;
        font-size: 65rpx;
        border-radius: 50%;
        margin: 20rpx 40rpx;
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
          background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg5.png);
        }
      }
    }
  }
  
  
  /* 悬浮 */
  .tnxuanfu{
    animation: suspension 3s ease-in-out infinite;
  }
  
  @keyframes suspension {
    0%, 100% {
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
 
</style>
