<template>
	<view class="template-edit tn-safe-area-inset-bottom">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack>
			<view slot="back" class='tn-custom-nav-bar__back'>
				<text class='icon tn-icon-close' @click="goBack"></text>		
			</view>

		</tn-nav-bar>

  
		<view class="tn-safe-area-inset-bottom " :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			
			
			
		 <view class="tn-flex tn-flex-wrap tn-margin">
			<view class="dk-ban"  v-for="(item, indexsd) in colorList" :key="indexsd" :class="[{'tn-shadow-blurddd': leixingcudin === indexsd}]" @click="pickerColorClickleid(indexsd)">
			    	  <view class="dk-bantext" >
			    		 {{item.title}}
			    	  </view>
			    	  </view>
					
		 </view>
			
			
			
				<view class="tn-flex tn-flex-wrap tn-margin amount-input-box" >
				 <view class="amount-input-currency amount-input-currency-bg"> 
					 <text class="currency-text">派对名称</text>			
				</view>
						<input type="text" class="input-value" placeholder="给派对房间起个响亮的名称吧"   :adjust-position="true"
						:auto-blur="true" v-model="title" >
						<view class="amount-input-currencyyou amount-input-currency-bg" @click="suiji()">
							 <text class="currency-text tn-icon-set" >随机</text>			
						</view>
				</view>
				
			
			
				<view class="tn-margin  tn-padding amount-input-currency-bg" style="border-radius: 10rpx;">
					<textarea maxlength="200"  placeholder="简单写派对的公告(300字以内)" v-model="detail"
						placeholder-style="color:#AAAAAA" class=""></textarea>
				</view>	
				
				
					
				<view class=" tn-text-bold  clamp-text-1 tn-text-justify tn-margin ">
				派对背景<text class="tn-color-red">*</text>
				</view>
			  <view class="tn-flex tn-flex-wrap tn-margin">
				<block v-for="(item, index) in tagList" :key="index" >
			    <view class="" @click="pickerColorClick(index)" style="    flex-basis:50%;">			
		 <view class=" tn-margin-xs tn-radius " :class="[{'tn-shadow-blurddd': currentColorIndex === index}]">
					
					
		<view  class=""
		:class="[{'tn-image-upload__item-preview__delete': currentColorIndex === index}]">
		<view  class="tn-image-upload__item-preview__delete--icon tn-icon-success">
		</view>
		</view>			
					
					
					 
			<image :src='item.bg_img' style="width:100%;" mode="aspectFill"></image>	 
					 
				 </view>

			    </view>	
				</block>
			  </view>
		
			

	
		</view>

		<view class='tn-tabbar-height'></view>
   <view class="tn-flex tn-footerfixed">
      <view class="tn-flex-1 justify-content-item tn-margin-sm tn-text-center" @click="fabuba()">
        <tn-button backgroundColor="#00FFC6" padding="40rpx 0" width="60%" shadow fontBold >
         <text class="tn-icon-edit tn-padding-right-xs tn-color-black"></text>
          <text class="tn-color-black">立 即 创 建</text>
       
        </tn-button>
      </view>
    </view>
	<tn-modal width="80%" v-model="is_fatie" backgroundColor="#E4E9EC" padding="30rpx 80rpx" :radius="25"
			title="提醒" content='创建房间需要实名认证' :button="button" :showCloseBtn="false" :maskCloseable="false" :zoom="true"
			:custom="false" @click="clickBtn_shenqing">
	
		</tn-modal>
	
	</view>
</template>

<script>

	import {
		host
	} from '@/siteinfo.js'
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	export default {
		name: 'TemplateCreate',
		mixins: [template_page_mixin],
		data() {
			return {	
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
				is_fatie:false,
				leixingcudin:0,
				title: '',
				detail: '',
				images: '',	
				banner:'',			
				tagList: [],
				action: '',
				formData: {
					apiType: 'this,ali',				
					token: uni.getStorageSync('token'),				
					image: null
				},
				fileList: [],
				showUploadList: true,
				customBtn: false,
				autoUpload: false,
				showProgress: false,
				deleteable: true,
				customStyle: false,
				maxCount:1,
				disabled: false,
				currentColorIndex:0,
				colorList: [
				],
				suijiname: [
					'一起来吐槽星座',
					'一起聊艺术，奇怪的知识增加了',
					'游戏开黑小分队',
					'旅游目的地分享大会',
					'认真谈恋爱，非诚勿扰',
					'蹲一个心动的人',
					'互看瞬间，高质量相亲派对',
					'影视杂谈'
					]
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
			this.panduan()
					this.info()
		},
		methods: {
			clickBtn_shenqing(res) {
				if (res == 1) {		
				this.navigateToFn({ url: '/minePages/set', checkLogin: true })
				}
				if (res ==0){
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
					if (result.data.data.is_roomrenzheng==0){
						this.is_fatie=true
					}
				
					
				} 
				
			},
			
			
			async info() {
				let that = this;		
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/index/liaotianbeijing',
					data: {
						
					}
				});		
								
				if (result.statusCode == 200) {
					if (result.data.code == 200) {			
						that.tagList = result.data.data.tagList;
						that.colorList = result.data.data.colorList;
									
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
			
			
			
			fabuba(){
				 this.$common.noMultipleClicks(this.fabu(), 1000);
			},
			
			
			
			
			
			suiji(){
				let a = Math.random();           //生成0——1的随机数
				a = a*8;                        //0——10的随机数
				a = Math.ceil(a); 			
			this.title=this.suijiname[a]	
			},
			async fabu() {

				if (this.title == '') {
					this.msg('请输入名称')
					return
				}
				if (this.detail == '') {
					this.msg('请输入公告')
					return
				}				
				let that = this;			
				
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/chat/room_add',
					data: {
						title:that.title,
						title_sub: that.detail,
						type:that.colorList[that.leixingcudin].title,
						bg:that.tagList[that.currentColorIndex].image
					}
				});

				if (result.statusCode == 200) {
					if (result.data.code == 200) {

						uni.hideLoading()
					uni.showModal({
						title: '提示',
						content: result.data.msg,
						confirmText:'知道了',
						showCancel:false,
						success: function (res) {
							if (res.confirm) {
								uni.navigateBack()
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
							
						uni.$emit('group_ok', result.data.code)

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
      pickerColorClick(index) {
        if (index === this.currentColorIndex) {
          return
        }
        this.currentColorIndex = index  
      },
	  
	  pickerColorClickleid(index) {
	    if (index === this.leixingcudin) {
	      return
	    }
	    this.leixingcudin = index  
	  },
	  
	  
	  

		}
	}
</script>

<style lang="scss" scoped>
	.template-edit {
		color: #ffffff;
		background-image: linear-gradient(to top, #2a2362 20%, #421670 80%);
		width: 100vw;	
	}
	
	.tn-image-upload__item-preview__delete {
	    display: flex;
	    align-items: center;
	    justify-content: center;
	    position: absolute;	 
	    z-index: 10;
	    border: 10px solid;	    
	    width: 0px;
	    height: 0px;
		color: rgb(0, 255, 198);
	}
	
	.tn-image-upload__item-preview__delete--icon {
	    position: absolute;	
	    color: rgb(0, 0, 0);
	    font-size: 18px;
	    line-height: 1;
	}
	
	
	
	.bg-flex-shadow{
    background-color: #00C3FF;
    z-index: 9999;
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

	/* 底部悬浮按钮 start*/
	.tn-tabbar-height {
		min-height: 100rpx;
		height: calc(120rpx + env(safe-area-inset-bottom) / 2);
	}

	.tn-footerfixed {
		position: fixed;
		width: 100%;
		bottom:0;
		z-index: 1024;
		box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0);

	}

	/* 底部悬浮按钮 end*/

  .dk-ban {
	      margin: 5px;
    width: 30%;
      border-radius: 0.3125rem;
      background-color: rgba(0, 0, 0, 0.6);
	   color: rgba(255, 255, 255, 0.8);
  }

.dk-bantext {
    color: rgba(255, 255, 255, 0.6);
    background: rgba(216, 216, 216, 0.08);
    border-right: 0.0625rem solid rgba(255, 255, 255, 0.1); 
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    cursor: pointer;
    padding: 0px 10px;
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
	.tn-shadow-blurddd{
	 border: 2px solid #fff420;
	}
	
	  //、输入框
	.amount-input-box {
	      position: relative;
	      height: 40px;
	  }
	 .amount-input-currency-bg {
	      border-radius: 4px 0 0 4px;
	      background: #0d131d;
	  }
	.amount-input-currency {
	      width: 82px;
	      height: 38px;
	      position: absolute;
	      top: 1px;
	      left: 1px;
	      z-index: 99;
	  }
	  .amount-input-currencyyou {
	        width: 62px;
	        height: 38px;
	        position: absolute;
	        top: 1px;
	        right: 1px;
	        z-index: 99;
	    }
	
	  
	  
	 .amount-input-box .amount-input-currency-bg .currency-text {
	      background: linear-gradient(282deg,#519fff 15.69%,#a25fff);
	      -webkit-background-clip: text;
	      background-clip: text;
	      color: transparent;
		  width: 82px;	 
			 font-size: 14px;
		      position: absolute;
		      top: 10px;
		      left: 10px;
		      text-align: left;
	  }
	  
	.amount-input-box .input-value {
			width:100%;
		    height: 100%;
		    padding-left: 82px;
		    font-size: 14px;
		    font-weight: 600;
		    text-indent: 6px;
			border-radius: 4px;
		    transition: 0.5s ease-in-out;
			color: #ffffff;
	      background-color: #0c0c0e;
	      border: 1px solid rgba(170,175,201,0.8);  
	      background-color: #040404;
	      border: 1px solid transparent;
	      background-image: linear-gradient(#040404,#040404),linear-gradient(282deg,#519fff 15.69%,#a25fff);
	      background-origin: border-box;
	      background-clip: content-box,border-box;
	      box-shadow: 0px 0px 10px rgba(125,46,255,0.78);
	  }
	  //、、、、
	  
	  
	  

	/* 标签内容 end*/
</style>
