<template>
  <view class="template-wave tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
   	<tn-nav-bar fixed :bottomShadow="false">{{title}}</tn-nav-bar>	 
	

	
	<view class="tn-flex tn-flex-row-between tn-bg-white"  style="position: fixed;z-index: 29090;width: 100%;" :style="{top: vuex_custom_bar_height + 'px'}">
		<view class="justify-content-item tn-margin tn-text-bold " @click="demoTipsClick">
	     {{paixutitle}}<text class="tn-icon-filter"></text>
		</view>   		
		
		<view class="justify-content-item tn-margin tn-text-bold " @click="demoTipsClicksex()">
		{{sextitle}}<text class="tn-icon-filter"></text>
		</view>   
		<view class="justify-content-item tn-margin tn-text-bold " @click="demoTipsClicktag()">
		{{tesetitle}}<text class="tn-icon-filter"></text>
		</view> 
						
	</view>
	
	<view v-if="zongheshow" class="zhzhao" @click="demoTipsClick()">
	  <view class="demo__tips__content" :class="[zongheshow ? 'demo__tips__content--show' : 'demo__tips__content--hide']">
	    <view  class="tn-padding" @tap.stop="chickpaixu(0,'综合排序')">综合排序</view>
		<view  class="tn-padding" @tap.stop="chickpaixu(1,'下单排行')">下单排行</view>
	    <view  class="tn-padding" @tap.stop="chickpaixu(2,'在线排序')"> 在线排序</view>
	    <view  class="tn-padding" @tap.stop="chickpaixu(3,'价格排序')"> 价格排序</view>
	    <view  class="tn-padding" @tap.stop="chickpaixu(4,'距离排序')"> 距离排序</view>
	  </view>
	</view>
	<view v-if="sexshow" class="zhzhao" @click="demoTipsClicksex()">
	  <view class="demo__tips__contentsex">
	    <view  class="tn-padding" @tap.stop="chicksex(0,'不限性别')">不限性别</view>
	    <view  class="tn-padding" @tap.stop="chicksex(1,'男神')"> 男神</view>
	    <view  class="tn-padding" @tap.stop="chicksex(2,'女神')"> 女神</view>
	  </view>
	</view>
	<view v-if="tagshow" class="zhzhao" @click="demoTipsClicktag()">
	  <view class="demo__tips__contentttags" v-if="type==0">
		  <view  class="tn-padding" @tap.stop="chicktags(0,'全部特色')">全部特色</view>
	    <view  class="tn-padding" @tap.stop="chicktags(0,'王者')">王者</view>
	    <view  class="tn-padding" @tap.stop="chicktags(0,'黄金')"> 黄金</view>	
	    <view  class="tn-padding" @tap.stop="chicktags(0,'白银')"> 白银</view>
	    <view  class="tn-padding" @tap.stop="chicktags(0,'青铜')"> 青铜</view>
	    <view  class="tn-padding" @tap.stop="chicktags(0,'御姐')"> 御姐</view>
	    <view  class="tn-padding" @tap.stop="chicktags(0,'甜美')"> 甜美</view>
	    <view  class="tn-padding" @tap.stop="chicktags(0,'萝莉')"> 萝莉</view>
	  </view>
	  <view class="demo__tips__contentttags" v-if="type==1">
	  		  <view  class="tn-padding" @tap.stop="chicktags(0,'全部特色')">全部特色</view>
	    <view  class="tn-padding" @tap.stop="chicktags(0,'温柔')">温柔</view>
	    <view  class="tn-padding" @tap.stop="chicktags(0,'话多')"> 话多</view>	
	    <view  class="tn-padding" @tap.stop="chicktags(0,'健身达人')"> 健身达人</view>
	    <view  class="tn-padding" @tap.stop="chicktags(0,'旅游达人')"> 旅游达人</view>
	    <view  class="tn-padding" @tap.stop="chicktags(0,'骑士')"> 骑士</view>
	    <view  class="tn-padding" @tap.stop="chicktags(0,'电影常客')"> 电影常客</view>
	    <view  class="tn-padding" @tap.stop="chicktags(0,'KTV麦霸')"> KTV麦霸</view>
	  </view>
	</view>	
	
	
	
	
	
	
    
    <view class="tn-search-fixed" :style="{paddingTop: vuex_custom_bar_height+40 + 'px'}">
      <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin" >
        <view class="justify-content-item align-content-item">
          <view class="tn-bg-gray--light tn-flex tn-flex-col-center" style="border-radius: 100rpx;padding: 10rpx 20rpx 10rpx 20rpx;width: 100%;">
            <text class="tn-icon-search justify-content-item tn-padding-right-xs tn-color-gray tn-text-lg"></text>
            <input class="justify-content-item" placeholder="输入ID号或昵称" v-model="searchKey" placeholder-style="color:#AAAAAA" ></input>
          </view>
        </view>
        
        <view class="align-content-item">
          <view class="justify-content-item tn-text-center" @click="sousuo()">
            <tn-button fontColor="#000000" :shadow="true" backgroundColor="tn-main-gradient-yellow--reverse"   shape="round" padding="20rpx 20rpx" width="150rpx" shadow fontBold >
              <text >搜索</text>
            </tn-button>
          </view>
        </view>
      </view>
    </view>
	
	<view >   

		<mescroll-body ref="mescrollRef" @down="downCallback" @up="upCallback">
			<!-- 不建议写时间，因为写了时间，你就要经常更新文章了鸭-->
				<quan-news :list="content" :index="true"></quan-news>
	  	</mescroll-body>
	  </view>
  <tn-popup v-model="xiadanshow" width="80%" height="50%" mode="bottom" :borderRadius="30" :closeBtn="true"
  	:maskCloseable="false" @close="closedPopup">
	<scroll-view class="template-wave" scroll-y scroll-with-animation style="height:100%">
	<view class="tn-flex tn-padding" >
	  <text class="tn-color-white tn-text-lg tn-text-bold">{{name}}</text>
		     
	</view>
	
	<view class="tn-flex tn-flex-col-top tn-cool-bg-color-51  tn-shadow tn-padding tn-margin" v-for="(item,indexdd) in goodslist" :key="indexdd"  >
	  <view class="" >
	    <view class="logo-pic ">
	   				
	       <image :src="item.game_image" style="width: 60px;height: 60px;" mode="aspectFill"></image> 
	    
	    </view>
	  </view>
	  <view class="tn-padding-left-sm tn-text-ellipsis" style="width: 100%;" >
	    <view class="tn-flex tn-flex-row-between tn-flex-col-between">
	      <view class="justify-content-item" >
	        <text class="tn-color-cat tn-text-lg tn-text-bold">{{item.game_title}}</text>
	     
	      </view>
	      
	    </view>
	    <view class="  ">
	      <text class=" ">{{item.duanwei}}</text>
	    </view>	
		<view class="  ">
		  <text class="tn-color-gray ">{{configInfo.site_moneyname}}{{item.price}}/{{item.danwei}}</text>
		</view>	
				  
	  </view>
	  <view class="justify-content-item tn-round tn-text-xs  tn-color-white" style="padding: 10rpx 20rpx;" >
	  	  
	  				<tn-tag backgroundColor="tn-cool-bg-color-7" fontColor="tn-color-white" shape="circle" width="auto" size="lg" style="margin-left: 15px;" @click="xiadanpass(item)">
	  				下单</tn-tag>
	  </view>
	  
	  
	  
	</view>
	
		<tn-modal width="80%" v-model="payshow" backgroundColor="#E4E9EC" padding="30rpx 20rpx" :radius="25" title="下单" :showCloseBtn="true" :maskCloseable="false" :zoom="true" :custom="true">
		
				<view class="article-shadow tn-margin tn-bg-white tn-padding">
					<view class="tn-flex">
						<view class="image-pic tn-margin-sm">
							<view class="image-article" style="width: 100px;height: 80px;">
								<image :src="goodsinfo.game_image" mode="aspectFill" style="width: 80px;height: 80px;">
								</image>
							</view>
						</view>
						<view class="tn-margin-sm tn-padding-top-xs" style="width: 100%;">
							<view class="clamp-text-2" style="height: 40px;">
								{{ goodsinfo.game_title}}
							</view>
							<view class="tn-flex tn-flex-row-between tn-flex-col-between"
								style="margin-top: 10px;">
								<text class="tn-tag-content __item--prefix ">{{ goodsinfo.price}}/{{ goodsinfo.danwei}}</text>
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
							<text class="">总价格：{{configInfo.site_moneyname}}</text>
							<text class="tn-color-red">{{goodsinfo.price*num}}</text>
						</view>
					</view>
					
				</view>	
				<view class="tn-padding-left-sm tn-padding-right-sm " @click="jiesuan(goodsinfo.id)">
					<tn-button :shadow="true" width="100%" height="100rpx" backgroundColor="tn-cool-bg-color-7"
						fontColor="#FFFFFF" margin="10rpx 0">去结算</tn-button>
				</view>
			</tn-modal>	
	</scroll-view>
  	</tn-popup>   
	<login-fn :is-show-login="loginBoxFlag" @loginSuccessCallback="refreshFn" @close="closeGlobalLoginFn">
	</login-fn>
  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  import NavIndexButton from '@/libs/components/nav-index-button.vue'
  
  import MescrollBody from '@/components/mescroll-uni/mescroll-body.vue';
  import MescrollUni from '@/components/mescroll-uni/mescroll-uni.vue';
  import MescrollMixin from '@/components/mescroll-uni/mescroll-mixins.js';
  export default {
    name: 'TemplateRead',
 	mixins: [template_page_mixin,MescrollMixin],
  	components: {
  		MescrollBody,NavIndexButton
  	},
    data(){
      return {		
		  tagshow:false,
		  sexshow:false,
		  zongheshow:false,
		  num:1,
		  name:'',
		  xiadanshow:false,
		  payshow:false,
		xiaolei:0,
		searchKey:'',
		loginBoxFlag: false, // 登录框显示隐藏状态
        cardCur: 0,
        swiperList: [],
        content: [],
		iconnew: [],
		type:0,
		goodslist:[],
		goodsinfo:[],
		title:'全部类别',
		tesetitle:'全部特色',
		sextitle:'不限性别',
		tagsindex:0,
		paixutitle:'综合排序',
		latitude:"",
		longitude:""
      }
    },
	onLoad(option) {
		let that = this
		uni.$off('setLoginBoxFlag_indexmine');
		uni.$on('setLoginBoxFlag_indexmine', loginBoxFlag => {			
			that.loginis = uni.getStorageSync('token')		
			that.loginBoxFlag = loginBoxFlag;
		});
		
		if (option.id){
			this.xiaolei=option.id
		}
		if (option.type){
			this.type=option.type
		}
		if (option.title){
			this.title=option.title
		}
		
		 uni.$on("loginok",async (res)=>{
			 console.log('登录成功')
			 that.loginis = uni.getStorageSync('token')
		     // 	this.info() 
		   })		
			//this.info()
	},
    methods: {
		juli(){		
			let that = this			
				this.content = []
				// #ifdef APP-PLUS||H5		
				uni.getLocation({
					type: 'gcj02',
					geocode: true,
					success: function(res) {
						that.latitude=res.latitude
						that.longitude=res.longitude
						that.mescroll.resetUpScroll();
					},
					fail: function(res) {
		
						console.log(res)
					}
				});
				// #endif
		
				// #ifdef MP		
				wx.getFuzzyLocation({
					type: 'wgs84',
					success(res) {
						that.latitude=res.latitude
						that.longitude=res.longitude				
						that.mescroll.resetUpScroll();		
					}
				})
				// #endif		
		},
		chicktags(id,title){
			this.tesetitle=title
			this.tagshow=false
			this.mescroll.resetUpScroll();
		},
		chickpaixu(id,title){
			this.paixutitle=title
			this.zongheshow=false			
			if (title=='距离排序'){
			this.juli()	
			}else{
			this.mescroll.resetUpScroll();	
			}
			
		},
		chicksex(id,title){
			console.log(title)
			this.sextitle=title
			this.sexshow=false
			this.mescroll.resetUpScroll();
		},
		demoTipsClick() {
		  this.zongheshow = !this.zongheshow
		},
		demoTipsClicksex() {
		  this.sexshow = !this.sexshow
		},	
		demoTipsClicktag() {
		  this.tagshow = !this.tagshow
		},
		
		
		change(){
			console.log(3333)
			//this.num=e
		},
		xiadanpass(item){
			this.num=1
			this.goodsinfo=item
			this.payshow=true
		},
		closedPopup() {
			this.xiadanshow = false
		},
      // cardSwiper
      cardSwiper(e) {
        this.cardCur = e.detail.current
      },
	  async xiadan(user_id,name){
		  let that = this;
		  let result = await that.$request({
		  	loading: 0,
		  	method: 'post',
		  	url: '/api/games/user_goods',
		  	data: {
				user_id:user_id
			}
		  });
		  	  
		  	  
		  if (result.statusCode == 200) {
		  	if (result.data.code == 200) {
				this.goodslist=result.data.data
				this.name=name
		  		 this.xiadanshow=true
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
	  getlei(item){
			this.title=item.title
			this.xiaolei=item.id
			this.mescroll.resetUpScroll();
	  },
	  async jiesuan(id) {
	  	let that = this;
		
		if (!uni.getStorageSync('token')) {
			this.msg('请登录后下单');
			return false;
		}
		
	  	let result = await that.$request({
	  		loading: 0,
	  		method: 'post',
	  		url: '/api/games/paygoods',
	  		data: {
				id:id,
				num:this.num
			}
	  	});
	  
	  
	  	if (result.statusCode == 200) {
	  		if (result.data.code == 200) {			
	  				this.payshow=false
					this.xiadanshow=false
					uni.showModal({
						title: '提示',
						content: '下单成功,要去开黑中心查看订单吗？',
						confirmText: '去看看',
						success: function(res) {
							if (res.confirm) {											
								uni.navigateTo({
									url: '/gamePages/my_goods'
								})
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
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
	  async info() {
	  	let that = this;
	  	let result = await that.$request({
	  		loading: 0,
	  		method: 'post',
	  		url: '/api/games/cate',
	  		data: {}
	  	});	
	  	if (result.statusCode == 200) {
	  		if (result.data.code == 200) {
	  				this.swiperList=result.data.data
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
	  
	  sousuo(){
		  
		  if (this.searchKey==''){
		  			  this.msg('请输入关键词')
		  			  return
		  }
			this.mescroll.resetUpScroll();
	  },
	  
	  /// 列表调用
	  		downCallback(mescroll) {
	  			mescroll.endSuccess();
	  			mescroll.resetUpScroll();
	  		},	
	  		async upCallback(mescroll) {
	  			let that = this;
				let url
				if (this.type==0){
				url= '/api/games/user_list'	
				}else{
				url= '/api/games/user_list_down'	
				}
	  			let result = await that.$request({
	  				loading: 1,
	  				method: 'post',
	  				url:url,
	  				data: {		
						type:this.type,
						searchKey:this.searchKey,
						xiaolei:this.xiaolei,
						tesetitle:this.tesetitle,
						sextitle:this.sextitle,
						paixutitle:this.paixutitle,
						latitude:this.latitude,
						tagsindex:this.tagsindex,
						
						longitude:this.longitude,
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
	  				mescroll.endSuccess(result.data.data.data.length,result.data.data.data.length >= mescroll.size);	
	  								
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
	  		
	  		
	  		
	  
	  

	  
	  
    }
  }
</script>

<style lang="scss" scoped>

  .template-wave{
 


  }

  .tn-cool-bg-color-51 {
 background-image: repeating-linear-gradient(45deg, #26003a, #15003f);
      color: #FFFFFF;
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
        padding: 15rpx 0;
        margin: 0 30rpx;
        border-radius: 10rpx;
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
    width: 95rpx;
    height: 65rpx;
    position: relative;
  }
  .logo-pic{
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
    border-radius: 50%;
  }
  /* 自定义导航栏内容 end */
  
  /* 轮播视觉差 start */
  .card-swiper {
    height: 400rpx !important;
  }
    
  .card-swiper swiper-item {
    width: 750rpx !important;
    left: 0rpx;
    box-sizing: border-box;
    padding: 0rpx 30rpx 90rpx 30rpx;
    overflow: initial;
  }
    
  .card-swiper swiper-item .swiper-item {
    width: 100%;
    display: block;
    height: 100%;
    border-radius: 30rpx;
    transform: scale(1);
    transition: all 0.2s ease-in 0s;
    overflow: hidden;
  }
    
  .card-swiper swiper-item.cur .swiper-item {
    transform: none;
    transition: all 0.2s ease-in 0s;
  }
    
  .card-swiper swiper-item .swiper-item-text {
    margin-top: -220rpx;
    width: 100%;
    display: block;
    height: 50%;
    border-radius: 10rpx;
    transform: translate(100rpx, -60rpx) scale(0.9, 0.9);
    transition: all 0.6s ease 0s;
    overflow: hidden;
  }
    
  .card-swiper swiper-item.cur .swiper-item-text {
    margin-top: -280rpx;
    width: 100%;
    transform: translate(0rpx, 0rpx) scale(0.9, 0.9);
    transition: all 0.6s ease 0s;
  }
  
  .image-banner{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image-banner image{
    width: 100%;
    height: 100%;
  }
  
  /* 轮播指示点 start*/
  .indication{
    z-index: 9999;
    width: 100%;
    height: 36rpx;
    position: absolute;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
  }
  
  .spot{
    background-color: #FFFFFF;
    opacity: 0.6;
    width: 10rpx;
    height: 10rpx;
    border-radius: 20rpx;
    top: -130rpx;
    margin: 0 8rpx !important;
    position: relative;
  }
  
  .spot.active{
    opacity: 1;
    width: 30rpx;
    background-color: #FFFFFF;
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
  
  .image-capsule{
    padding:120rpx 0rpx;
    font-size: 40rpx;
    font-weight: 300;
    position: relative;
  }
  .image-pic{
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
  }
      
  /* 胶囊背景图 start */
  .image-div {
    height: 450rpx;
    z-index: -1;
  
    .image {
      width: 100%;
      height: 667rpx;
      // z-index: -1;
    }
  }
  /* 胶囊背景图 end */
  /* 标题 start */
  .nav_title {
    -webkit-background-clip: text;
    color: transparent;
    
    &--wrap {
      position: relative;
      display: flex;
      height: 120rpx;
      font-size: 46rpx;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      background-image: url(https://tnuiimage.tnkjapp.com/title_bg/title44.png);
      background-size: cover;
    }
  }
  /* 标题 end */
  
  /* 文章内容 start*/
  .tn-blogger-content {
    &__wrap {
      box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.12);
      border-radius: 20rpx;
      margin: 15rpx;
    }
    
    &__info {
      &__btn {
        margin-right: -12rpx;
        opacity: 0.5;
      }
    }
    
    &__label {
      &__item {
        line-height: 45rpx;
        padding: 0 20rpx;
        margin: 5rpx 18rpx 0 0;
        
        &--prefix {
          color: #82B2FF;
          padding-right: 10rpx;
        }
      }
      
      &__desc {
        line-height: 35rpx;
      }
    }
    
    &__main-image {
      border-radius: 16rpx 16rpx 0 0;
      
      &--1 {
        max-width: 690rpx;
        min-width: 690rpx;
        max-height: 400rpx;
        min-height: 400rpx;
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
      font-size: 30rpx;
      padding-right: 5rpx;
    }
  }
  
  .image-book{
	  
    padding: 10rpx;
    font-size: 16rpx;
    font-weight: 300;
    position: relative;
  }
  .image-picbook{
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
    border-radius: 20rpx 20rpx 0 0;
  }
  /* 文章内容 end*/
  
  /* 底部tabbar start*/
  .footerfixed{
   position: fixed;
   // margin: 20rpx;
   margin: 40rpx 5%;
   width: 90%;
   bottom: 0;
   z-index: 999;
   background-color: #FFFFFF;
   box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
  }
  
  .tabbar {
    display: flex;
    align-items: center;
    min-height: 110rpx;
    justify-content: space-between;
  	padding: 0;
  	height: calc(110rpx + env(safe-area-inset-bottom) / 2);
  	padding-bottom: calc(env(safe-area-inset-bottom) / 2);
  }
  
  .tabbar .action {
  	font-size: 22rpx;
  	position: relative;
  	flex: 1;
  	text-align: center;
  	padding: 0;
  	display: block;
  	height: auto;
  	line-height: 1;
  	margin: 0;
  	overflow: initial;
  }
  
  .tabbar .action .bar-icon {
  	width: 100rpx;
  	position: relative;
  	display: block;
  	height: auto;
  	margin: 0 auto 10rpx;
  	text-align: center;
  	font-size: 42rpx;
  }
  
  .tabbar .action .bar-icon image {
  	width: 50rpx;
  	height: 50rpx;
  	display: inline-block;
  }
  
  .zhzhao{
  	width: 100%;
  	    height: 100%;
  	    position: fixed;
  	    top: 0;
  	    left: 0;
  	    right: 0;
  	    border: 0;
  	    background-color: rgba(0, 0, 0, 0.4);
  	    transition: 0.25s linear;
  	    transition-property: opacity;
  		z-index: 999991;
  }
  
  .demo {
    
  
    &__tips {
      &__icon {
        position: absolute;
        top: 20rpx;
        right: 16rpx;
        width: 39rpx;
        height: 39rpx;
        line-height: 39rpx;
        font-size: 39rpx;
  
        .icon {
          background: linear-gradient(-45deg, #FF8359 0%, #FFDF40 100%);
          -webkit-background-clip: text;
          color: transparent;
          text-shadow: 0rpx 10rpx 10rpx rgba(255, 156, 82, 0.2);
        }
      }
  
  &__contentttags {
    position: relative ;
    top: 180rpx;
    left:500rpx;
  	width: 200rpx;
    font-size: 20rpx;
    margin-left: 20rpx;
    word-wrap: normal;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    padding: 20rpx;
    border-radius: 10rpx;
    transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1);
    transform-origin: 0 0;
    z-index: 999999;
  	}
	
  &__contentsex {
    position: relative ;
    top: 180rpx;
    left: 300rpx;
  	width: 200rpx;
    font-size: 20rpx;
    margin-left: 20rpx;
    word-wrap: normal;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    padding: 20rpx;
    border-radius: 10rpx;
    transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1);
    transform-origin: 0 0;
    z-index: 999999;
	}
	
      &__content {
        position: relative ;
        top: 180rpx;
        right: 16rpx;
		width: 200rpx;
        font-size: 20rpx;
        margin-left: 20rpx;
        word-wrap: normal;
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        padding: 20rpx;
        border-radius: 10rpx;
        transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1);
        transform-origin: 0 0;
        z-index: 999999;
  
        &--hide {
          transform: scaleY(0);
        }
  
        &--show {
          transform: scaleY(100%);
  
          &::after {
            content: "";
            width: 0px;
            height: 0px;
            border-width: 4px;
            border-style: solid;
            border-color: transparent transparent rgba(149, 149, 149, 0.1) transparent;
            position: absolute;
            top: -8px;
            right: 6px;
          }
        }
      }
    }
  }
</style>
