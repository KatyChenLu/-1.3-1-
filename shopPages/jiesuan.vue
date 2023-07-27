<template>
  <view class="template-product tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
  <tn-nav-bar  fixed :bottomShadow="false">确认订单</tn-nav-bar>
    
    

    
    <view class="tn-margin" :style="{paddingTop: vuex_custom_bar_height + 'px'}">

	<block v-if="detail.type==0">
	 <view class="tn-padding-left-sm tn-padding-right-sm " @click="navigateToFn({ url: '/shopPages/address', checkLogin: true })" v-if="address_id">
        <view class="tn-padding-sm">收件人：{{dizhi.name}}  {{dizhi.mobile}} </view>
   <view class="tn-padding-sm">详细地址：{{dizhi.area}} {{dizhi.address}} </view>
      </view>
	  
	  <view class="tn-padding-left-sm tn-padding-right-sm " @click="navigateToFn({ url: '/shopPages/address', checkLogin: true })" v-else>
	 <view class="tn-padding-sm"><text class="tn-icon-location"></text> 请选择收获地址 </view>
	     </view>
	</block> 
		 
    </view>
    


<view class=" tn-margin-sm" >
	  <view class="tn-flex">
	    <view class="image-pic tn-margin-sm" :style="'background-image:url(' + img + ')'">
	      <view class="image-article">
	      </view>
	    </view>
	    <view class="tn-margin-sm tn-padding-top-xs" style="width: 100%;">
	      <view class="   clamp-text-2" style="height: 40px;">
	       {{detail.goods_name}}
	      </view>						       
	      <view class="tn-flex tn-flex-row-between tn-flex-col-between" style="margin-top: 10px;">
	          <text class="tn-tag-content__item--prefix tn-color-red tn-text-bold" >￥{{detail.shop_price}}</text>
			 <text class="tn-tag-content__item--prefix  tn-text-bold tn-margin-right"  >x{{num}}</text> 	      
	      </view>
		  <view class="tn-flex tn-flex-row-between tn-flex-col-between" style="margin-top: 10px;" v-if="taocan>0">
		      <text class="tn-tag-content__item--prefix  tn-text-bold" >套餐：</text>
		  			 <text class="tn-tag-content__item--prefix  tn-text-bold tn-margin-right">{{taocanname}}</text> 	      
		  </view>
		  
		  
		  
		  
		  
	    </view>
	  </view>
			  
	</view>
	
		<view class="tn-padding-left-sm tn-padding-right-sm " @click="jiesuan()">
	    <view class="tn-padding-sm">  备注：
	      </view>
	 <tn-input class=""  v-model="beizhu" placeholder="请填写备注信息" :border="true" :height="50" :showRightIcon="true" ></tn-input>
	 
		</view>
    <!-- 边距间隔 -->

			
			

    
    <view class="footerfixed dd-glass tn-padding-left-sm tn-padding-right tn-padding-top-xs tn-padding-bottom-sm">
      <tn-goods-nav :options="countOptions" :buttonGroups="customButtonGroups" buttonType="round" :safeAreaInsetBottom="true" @optionClick="onOptionClick" @buttonClick="onButtonClick"></tn-goods-nav>
    </view>
    
    <view class='tn-tabbar-height'></view>

<tn-modal width="80%" v-model="show_shenqing" backgroundColor="#E4E9EC" padding="30rpx 80rpx" :radius="25"
			:showCloseBtn="false" :maskCloseable="true" :zoom="true" :custom="custom">
	<view class="custom-modal-content tn-text-xxl">
				请选择支付方式
			</view>
			<view class="tn-flex">
				<view class="tn-flex-1">
					<view class=" tn-radius tn-bg-gray--light" style="padding:10px 25px;" @click="post('wxpay')">
						<view class="tn-flex tn-flex-row-center tn-margin-top-sm">
							<view class="justify-content-item  tn-text-center">
								<text class="tn-icon-wechat-fill tn-color-green" style="font-size:26px;"></text>
							</view>
							<view class="justify-content-item  tn-text-center  tn-radius"
								style="font-size: 18px;color: #000;margin-left: 8px;">微信支付

							</view>
						</view>
					</view>
					<!-- #ifdef APP-PLUS -->
					
					
					<view class=" tn-radius tn-bg-gray--light" style="padding:10px 25px;margin-top: 10px;"
						@click="post('alipay')" v-if="configInfo.pay_yingyong_ali">
						<view class="tn-flex tn-flex-row-center tn-margin-top-sm">
							<view class="justify-content-item  tn-text-center">
								<text class="tn-icon-alipay tn-color-blue" style="font-size:26px;"></text>
							</view>
							<view class="justify-content-item  tn-text-center  tn-radius"
								style="font-size: 18px;color: #000;margin-left: 8px;">支付宝支付

							</view>
						</view>
					</view>
<!-- #endif -->
				</view>
			</view>
		</tn-modal>





	
  </view>
</template>

<script>

  export default {

    data(){
      return {
		  user_id:0,
		  num:1,
		  taocanname:'',
		  taocan:0,
		  custom: false,
		  show_shenqing:false,
		  zhifu:'xianxiapay',		
		  labelPosition: 'left',
		  labelAlign: 'right',
		  border: false,
		  actionSheetShow: false,
		  labelWidth: 140,
		  checkboxWidth: 'auto',
		  checkboxWrap: false,
		  radioWidth: 'auto',
		  radioWrap: false,
		  pickerShow: false,
		  selectShow: false,
		dizhi:[],
		  address_id:0,
		  detail:[],
		  body:[],
		  loginBoxFlag: false, // 登录框显示隐藏状态
		  id:0,
		  beizhu:'',		
		  tanchushow:false,
		  img:'',
        cardCur: 0,      
        current: 0,        
        countOptions: [],
        customButtonGroups: []       
      }
    },
	onLoad(option) {
		

		
	
		
		
		
		this.id=option.id
		this.num=option.num
		if (option.taocan){
		this.taocan=option.taocan
		}
		if (option.user_id){
			this.user_id=option.user_id
		}	
		this.info()
		this.getaddress()
		let that = this;
		uni.$on('addxuanze', function(data) {
			that.address_id=data.id
			console.log(data.id)
			that.dizhi = data		
		})
	},
    methods: {
		radioGroupChange(event) {
			console.log(event)
		  this.zhifu = event
		},
		async info() {			
			
			let that = this;
			let result = await that.$request({
				loading: 0,
				method: 'post',
				url: '/api/shop/shopDetail',
				data: {	
					goods_id:this.id
				}
			});
			if (result.data.code == 200) {	
				
				
				this.body = result.data.data	
				this.detail= result.data.data.detail
				this.img=this.detail.images[0]
				if (this.taocan>0){
				this.taocanname=this.detail.spec.spec_goods_price[this.taocan].key_name
				this.detail.shop_price=this.detail.spec.spec_goods_price[this.taocan].shop_price
				}
				this.customButtonGroups=[{
          text: '实付款：￥'+this.num*this.detail.shop_price,
          backgroundColor: '#d8d8d8',
          color: '#000000'
        },{
          text: '下单支付',
          backgroundColor: '#55aa7f',
          color: '#FFFFFF'
        }]
				
				
				console.log(this.detail)
		
			}
		
		},
		
		
		async getaddress() {		
			
			let that = this;
			let result = await that.$request({
				loading: 0,
				method: 'post',
				url: '/api/shop/moren',
				data: {}
			});	
			if (result.data.code == 200) {	
				if (result.data.data.id){
				this.dizhi = result.data.data
				this.address_id = result.data.data.id		
				}		
		
			}
		
		},
			
		
		
      // cardSwiper
      cardSwiper(e) {
        this.cardCur = e.detail.current
      },
      // 跳转
      tn(e) {
      	uni.navigateTo({
      		url: e,
      	});
      },
      // tab选项卡切换
      tabChange(index) {
        this.current = index
      },
      getRandomCoolBg() {
        return this.$t.colorUtils.getRandomCoolBgClass()
      },
	  kantu() {
	
	  },
	  
	 async onButtonClick(e){
		 
		 	if (this.detail.type==0&&!this.address_id){
				this.msg('请选择地址')
			return
			}
		this.custom = true	
		this.show_shenqing=true
		return	
			
	  },
	  
	  closedPopup() {
	  	this.tanchushow = false
	  },



			async post(payType) {



				let that = this;

				// #ifdef APP
				if (payType == 'alipay') {
					var url = '/api/shop/alipay_shop';
				} else {
					var url = '/api/shop/wxpay_shop';
				}


				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: url,
					data: {
						daren_id:this.user_id,
						address_id:this.address_id,
						id:this.id,
						num:this.num,		 	
						goods_img:this.img,
						beizhu:this.beizhu,	
						taocan:this.taocan,
					}
				});

	
	
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
			
						uni.requestPayment({
							provider: payType,
							orderInfo: result.data.data, //支付宝订单数据
							success: function(res) {
								if (res.errMsg == 'requestPayment:ok') {	
								
								uni.redirectTo({
									url:'/shopPages/order_show?id='+result.data.msg
								})
								
								//uni.navigateBack()
								} else {
									console.log('fail:' + JSON.stringify(res));
								}
							},
							fail: function(err) {
								console.log(err)
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

				// #endif


				// #ifdef MP
				//微信小程序

				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/shop/wxpay_shop_xcx',
					data: {
						address_id:this.address_id,
						id:this.id,
						daren_id:this.user_id,
						num:this.num,		 	
						goods_img:this.img,
						beizhu:this.beizhu,		
						taocan:this.taocan,		
					}
				});


				if (result.statusCode == 200) {
					if (result.data.code == 200) {	
					 let paycanshu=JSON.parse(result.data.data.pay)	
							uni.requestPayment({
							provider: 'wxpay',
							timeStamp:paycanshu.timeStamp,
							nonceStr: paycanshu.nonceStr,
							package: paycanshu.package,
							signType: 'MD5',
							paySign: paycanshu.paySign,
							success: function(res) {
						uni.redirectTo({
							url:'/shopPages/order_show?id='+result.data.msg
						})
						
							},

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

				// #endif
				
				// #ifdef H5
				//微信公众号
							
				let ua = window.navigator.userAgent.toLowerCase();
				if (ua.match(/micromessenger/i) == 'micromessenger') {					
				}else{
					this.msg('请到微信里打开才能支付！复制网址到微信访问吧'+ua.match(/micromessenger/i))
					//return
				}
				
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/shop/wxpay_shop_h5',
					data: {
						daren_id:this.user_id,
						address_id:this.address_id,
						id:this.id,
						num:this.num,		 	
						goods_img:this.img,
						beizhu:this.beizhu,		
						taocan:this.taocan,		
					}
				});
				
				
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						
						let paycanshu = result.data.data
							
				
					
					//、、、、、
							 WeixinJSBridge.invoke(
							            'getBrandWCPayRequest', {
							                "appId":paycanshu.appId, //公众号名称，由商户传入
							                "timeStamp":paycanshu.timeStamp, //时间戳     
							                "nonceStr":paycanshu.nonceStr, //随机串     
							                "package": paycanshu.package,
							                "signType":paycanshu.signType, //微信签名方式：     
							                "paySign":paycanshu.paySign //微信签名 
							            },
							            function(ress) {
							                if (ress.err_msg == "get_brand_wcpay_request:ok") {
							         uni.redirectTo({
							         	url:'/shopPages/order_show?id='+result.data.msg
							         })
							         
							                } else if (ress.err_msg == "get_brand_wcpay_request:cancel") {
							                    uni.showToast({
							                        icon: "none",
							                        title: "'已取消支付"
							                    })
							                } else {
							                    uni.showToast({
							                        icon: "none",
							                        title: "支付失败"
							                    })
							                }
							            }
							        );			
					//、、、
										
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
				
				// #endif
				
			},

	  
	  
    }
  }
</script>

<style lang="scss" scoped>
  .template-product{
  }
  
  .custom-modal-content {
  	width: 100%;
  	height: 100%;
  	padding: 40rpx;
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	justify-content: center;
  
  	.icon {
  		font-size: 100rpx;
  		margin-bottom: 20rpx;
  		color: $tn-main-color;
  	}
  
  	.text {
  		font-size: 40rpx;
  	}
  }
  
  .tn-tabbar-height {
  	min-height: 120rpx;
  	height: calc(140rpx + env(safe-area-inset-bottom) / 2);
  }
  
  /* 用户头像 start */
  .logo-image {
    width: 110rpx;
    height: 110rpx;
    position: relative;
  }
  
  .logo-pic {
    background-size: cover;
    background-repeat: no-repeat;
    // background-attachment:fixed;
    background-position: top;
    box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
    border-radius: 10rpx;
    overflow: hidden;
    // background-color: #FFFFFF;
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
  
  /* 轮播视觉差 start */
  .card-swiper {
    height: 750rpx !important;
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
    top: -60rpx;
    margin: 0 8rpx !important;
    position: relative;
  }
  
  .spot.active{
    opacity: 1;
    width: 30rpx;
    background-color: #FFFFFF;
  }
  
  /* 间隔线 start*/
  .tn-strip-bottom {
   width: 100%;
   border-bottom: 20rpx solid rgba(241, 241, 241, 0.8);
  }
   /* 间隔线 end*/
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
  
  /* 底部tabbar start*/
  .footerfixed{
   position: fixed;
   width: 100%;
   bottom: 0;
   z-index: 999;
   background-color: #FFFFFF;
   box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
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
  /* 标签内容 end*/
  
  /* 内容图 start */
  .content-backgroup {
    z-index: -1;
  
    .backgroud-image {
      border-radius: 15rpx;
      width: 100%;
    }
  }
  /* 内容图 end */
  
  /* 商家商品 start*/
  .tn-blogger-content {
    &__wrap {
      box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
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
        padding: 0 10rpx;
        margin: 5rpx 18rpx 0 0;
        
        &--prefix {
          color: #E83A30;
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
      font-size: 24rpx;
      padding-right: 5rpx;
    }
  }
  
  .image-book{
    padding: 150rpx 0rpx;
    font-size: 16rpx;
    font-weight: 300;
    position: relative;
  }
  .image-picbook{
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
    border-radius: 15rpx 15rpx 0 0;
  }
  
  /* 毛玻璃*/
  .dd-glass {
     width: 100%;
     backdrop-filter: blur(20rpx);
    -webkit-backdrop-filter: blur(20rpx);
  }
  
  /* 资讯主图 start*/
  .image-article {
    border-radius: 8rpx;
  
    width: 160rpx;
    height: 150rpx;
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
  	width: 100%;
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
  
  .clamp-text-3 {
    -webkit-line-clamp: 3;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>
