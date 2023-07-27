<template>
	<view>
		<tn-nav-bar fixed :isBack="true">
			我的收入
		</tn-nav-bar>
    <!-- <view class="status-bar"></view> -->
	
	<view class="  tn-cool-bg-color-6 tn-margin" style="border-radius: 10px 10px 10px 10px;" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
						<!-- 更多信息-->
						<view class="tn-padding-top-sm">
				
							<view class="tn-flex tn-flex-row-between">
								<view class="justify-content-item tn-margin-sm " style="color: #dddddd;">
									可提现{{gift_tixian_name}}
									 <text class="tn-icon-help tn-margin-left" ></text>
								</view>	
									<view class="justify-content-item tn-margin-sm tn-margin-right  " @click="navigateToFn({ url: '/minePages/money_log_shouru', checkLogin: true })"	>
										
										<tn-tag shape="circle" backgroundColor="tn-main-gradient-purple--light"   margin="10rpx" width="150rpx">
										收入明细
										</tn-tag>
									</view>			
							</view>
				
							<view class="tn-flex tn-flex-row-between tn-flex-col-center  "
								style="width:100%;border-radius: 15rpx  15rpx  0rpx  0rpx;">
								<view class="justify-content-item tn-margin-left">
									<view class="tn-text-bold tn-padding-bottom-xs" style="font-size:60rpx;">							
								{{gift_money}}
									</view>
								</view>
								<view class="justify-content-item tn-margin " 
									@click="shezhishow=true">
									<tn-tag shape="circle" backgroundColor="#FFF420" fontColor="#080808"  margin="10rpx" width="150rpx">
									提现
									</tn-tag>
								</view>
							</view>						
						</view>
				</view>	
				
				
	
			
			<tn-modal width="80%" v-model="shezhishow" backgroundColor="#ffffff" padding="30rpx 20rpx" :radius="25"
				title="设置" :showCloseBtn="false"  :maskCloseable="true" :zoom="true" :custom="true">
			
				<view class="custom-modal-content tn-padding-sm ">
					<view class="tn-text-left tn-color-black" style="font-size: 14px;">
						可提现{{gift_tixian_name}}数量：{{gift_money}} ，兑换人民币比例为{{gift_tixian_bili}}%
					</view>
					<view class="tn-bg-gray--light "
						style=" margin-top:8px; border-radius: 10rpx;padding: 20rpx 30rpx;">
					
					
							<input placeholder="提现数量" type="number" v-model="ti_money" placeholder-style="color:#343434"
								style="font-size: 14px;color: #000;width: 60%;"></input>
				
						
					</view>
					<view class="tn-bg-gray--light "
						style=" margin-top:8px; border-radius: 10rpx;padding: 20rpx 30rpx;">
						<input placeholder="收款人姓名" type="text" v-model="ti_name" placeholder-style="color:#343434"
							style="font-size: 14px;color: #000;"></input>
					</view>
					<view class="tn-bg-gray--light "
						style=" margin-top:8px; border-radius: 10rpx;padding: 20rpx 30rpx;">
						<input placeholder="银行卡号或支付宝账号" type="text" v-model="ti_kano" placeholder-style="color:#343434"
							style="font-size: 14px;color: #000;"></input>
					</view>
					<view class="tn-text-center tn-padding-top" @click="xiugairoom()">
						<tn-button :fontSize="28" padding="20rpx" height="56rpx" fontColor="#080808"
							backgroundColor="rgb(255, 240, 13)">提交申请</tn-button>
					</view>
			
				</view>
			</tn-modal>
			 
			 
			 
			  <view class="" style="margin-top: 50rpx;">
			  	<view class="tn-flex tn-flex-row-between">
			  		<view class="justify-content-item tn-margin tn-text-bold tn-text-xl">
			  			提现记录
			  		</view>			  		
			  	</view>
			  </view>
				<mescroll-body ref="mescrollRef" @down="downCallback" @up="upCallback"> 
				<tn-list-cell :unlined="true" v-for="(item, index) in content" :key="index" v-if="content.length>0" >
			<view class="message"  >
				  
				    <view class="message__middle">				  
				      <view class="message__name">
						  <text class="tn-text-bold" style="font-size: 14px;color: #0055ff;">{{item.nickname}}</text>
								
								<text class="tn-text-bold" style="font-size: 14px;">提现{{gift_tixian_name}}{{ item.money }}</text>
								<text class="" style="font-size: 14px;margin-left: 8px;">,人民币 {{ item.pay_money }}</text>
						</view>
				      <view class="message__content tn-text-ellipsis-2 tn-color-black">	
								{{ item.create_time }}
								</view>								
				    </view>
							 <view class="message__right" v-if="item.is_check==0" >
								待审核
							 </view>
							  <view class="message__right" v-if="item.is_check==1" >
								已处理
							 </view>
							  <view class="message__right" v-if="item.is_check==2" >
								审核不通过
							 </view>	      
				  </view>
				  <view class="">
				 后台备注：{{ item.remark }}
				  </view>
			</tn-list-cell>
				
				
				  </mescroll-body>

		</view>
   
	</view>
</template>

<script>
	
	import MescrollBody from '@/components/mescroll-uni/mescroll-body.vue';
	import MescrollUni from '@/components/mescroll-uni/mescroll-uni.vue';
	import MescrollMixin from '@/components/mescroll-uni/mescroll-mixins.js';
	export default {
		 	mixins: [MescrollMixin],
		components: {
			MescrollBody
		},
		data() {
			return {
		shezhishow:false,
        showTips: false,
        body:[],
		yitixian:0,
		gift_money:0,	
		gift_tixian_bili:0,
		zong:0,	
		zong_money:0,
		content:[],
		ti_kano:'',
		ti_name:'',
		ti_money:'',
		gift_tixian_name:''
			}
		},
    onLoad() {
 
    },
    methods: {
    
	async xiugairoom(){
		
	
		
		let that = this;
		if (this.ti_money==''){
			this.msg('请填写提现数量');
			return
		}
		if (this.ti_money>this.gift_money){
			this.msg('提现数量大于可提现数量');
			return
		}
		
		if (this.ti_name==''||this.ti_kano==''){
			this.msg('请填写完整姓名和账号');
			return
		}
		
		
		let result = await that.$request({
			loading: 1,
			method: 'post',
			url: '/api/gift/money_ti',
			data: {		  			
				ti_kano:this.ti_kano,
				ti_name:this.ti_name,
				ti_money:this.ti_money,
			}
		});
		if (result.statusCode == 200) {
			if (result.data.code == 200) {
				this.shezhishow=false
				this.msg('提现成功，等待审核')				
				this.mescroll.resetUpScroll()
				
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
	  		loading: 1,
	  		method: 'post',
	  		url: '/api/gift/money',
	  		data: {		  			
	  			page: mescroll.num
	  		}
	  	});
	  	if (result.statusCode == 200) {
	  		if (result.data.code == 200) {
	  			
	  		if (mescroll.num == 1) {
	  			that.gift_money=result.data.data.gift_money
				that.yitixian=result.data.data.yitixian
				that.gift_tixian_name=result.data.data.gift_tixian_name				
				that.gift_tixian_bili=result.data.data.gift_tixian_bili
				that.zong_money=result.data.data.zong_money				
	  			that.content = result.data.data.list;
			
	  		} else {
	  			that.content = that.content.concat(result.data.data.list);
	  		}
	  		mescroll.endSuccess(result.data.data.list.length,result.data.data.list.length >= mescroll.size);	
	  						
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

<style lang="scss">

.status-bar {
  height: var(--status-bar-height);
  background-color: #ffdd00;
}
.my-promotion .header {
  background-color: #ffdd00;
  width: 100%;
  height: 350rpx;
}
.bg-color {
  background-color: #ffdd00!important;
  color: #333 !important;
  box-shadow: 0 0 0 20rpx #FFFFFF;
}
.acea-row {
  display: flex;
  flex-wrap: wrap;
}
.acea-row.row-center-wrapper {
  justify-content: center;
  align-items: center;
}
.acea-row.row-between-wrapper {
  justify-content: space-between;
}
.acea-row.row-column {
  flex-direction: column;
}
.my-promotion .header .name {
  font-size: 32rpx;
  color: #000;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.record {
  font-size: 26rpx;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: -40rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.record .iconfont {
  font-size: 25rpx;
  margin-left: 10rpx;
  vertical-align: 2rpx;
}

.my-promotion .header .num {
  text-align: center;
  color: #333;
  // margin-top: 28rpx;
  font-size: 90rpx;
  font-family: 'Guildford Pro';
  min-height: 90rpx;
}

.my-promotion .header .profit {
  padding: 0 20rpx;
  margin-top: -100rpx;
  font-size: 32rpx;
  color: rgba(0, 0, 0, 0.5);
}

.my-promotion .header .profit .item {
  min-width: 200rpx;
  text-align: center;
}
.my-promotion .list {
  padding: 0 10px 25px 10px;
  margin-top: 5px;
}
.my-promotion .list .item {
  width: 172px;
  height: 120px;
  border-radius: 10px;
  background-color: #fff;
  margin-top: 10px;
  font-size: 15px;
  color: #666;
}

.my-promotion .header .profit .item .money {
  font-size: 34rpx;
  color: #333;
  margin-top: 5rpx;
}

.my-promotion .bnt {
  font-size: 28rpx;
  color: #fff;
  width: 258rpx;
  height: 68rpx;
  border-radius: 50rpx;
  text-align: center;
  line-height: 68rpx;
  margin: -32rpx auto 0 auto;
}

.my-promotion .list {
  padding: 0 20rpx 50rpx 20rpx;
  margin-top: 10rpx;
}

.my-promotion .list .item {
  width: 345rpx;
  height: 240rpx;
  border-radius: 20rpx;
  background-color: #fff;
  margin-top: 20rpx;
  font-size: 30rpx;
  color: #666;
}
.daxiao{
	font-size: 60rpx;
	color: #ffaa00;
}

.my-promotion .list .item .iconfont {
  font-size: 70rpx;
  background-image: linear-gradient(to right, #fc4d3d 0%, #e93323 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20rpx;
}

	.message {
	  display: flex;
	  flex-direction: row;
	
	  justify-content: space-around;
	  
	  &__left {
	    width: 10%;
	  }
	  &__middle {
	    width: 70%;	  
	  
	  }
	  &__right {
	    width: 30%;
	    display: flex;
	    flex-direction: column;
	    align-items: center;
	    justify-content: center;
	  }
	  
	  &__name {
	    font-size:14px;
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
</style>
