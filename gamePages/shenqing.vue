<template>
  <view class="template-wave">
    <!-- 顶部自定义导航 -->
		<tn-nav-bar fixed :bottomShadow="false">申请认证</tn-nav-bar>


    <view class="" :style="{paddingTop: vuex_custom_bar_height + 'px'}"> 
	 
	 <view class="reg-block tn-margin-top">
	 	<tn-checkbox-group activeColor="rgb(0, 0, 0)" @change="checkboxGroupChange">
	 		<tn-checkbox name="同意">同意</tn-checkbox>
	 	</tn-checkbox-group>	 
	 	<view class="description-text" @click="navigateToFn({ url: `/homePages/about?id=27` })">
	 		<view class="text" :style="{ color: configInfo.web_site_color }">用户注册协议</view>
	 	</view>
	 	<view class="description-text" style="margin-left: 15px;"
	 		@click="navigateToFn({ url: `/homePages/about?id=31` })">
	 		<view class="text" :style="{ color: configInfo.web_site_color }">隐私保护政策</view>
	 	</view>
	 	<view class="description-text" style="margin-left: 15px;"
	 		@click="navigateToFn({ url: `/homePages/about?id=39` })">
	 		<view class="text" :style="{ color: configInfo.web_site_color }">未成年人保护</view>
	 	</view>
	 </view>
	 
	 
    <view class="tn-flex tn-flex-wrap tn-margin-sm " >
      <view @click="jinru(item.id)" class=" tn-radius tn-bg-white tn-margin-sm tn-padding" v-for="(item, indexsdf) in iconnew" :key="indexsdf"  style="width:27%;">
        <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center"  >
          <view class="icon7__item--icon tn-flex tn-flex-row-center tn-flex-col-center">
            <image class="" :src='item.image' mode='aspectFit' style="height: 80px;"></image>
          </view>
          <view class=" tn-text-center tn-padding-top-sm ">
            <text class="tn-text-ellipsis tn-text-bold">{{item.title}}</text>
          </view>
        </view>
      </view>
    </view>		
      					
    </view>

	

  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  import NavIndexButton from '@/libs/components/nav-index-button.vue'
  export default {
    name: 'TemplateWave',
    mixins: [template_page_mixin],
    components: { NavIndexButton },
    data(){
      return {
		  	fruit:'',
		  type:0,
		  iconnew:[]
	  }
    },
	onLoad(option) {
		if (option.type){
			this.type=option.type
		}
		this.info()
	},
    methods: {
		
		jinru(id){
			
			if (this.fruit[0] != "同意") {
				uni.showToast({
					icon: 'none',
					title: '请先同意协议和政策'
				});
				return false;
			}
		this.navigateToFn({ url: '/gamePages/shenqing_add?type='+this.type+'&id='+id, checkLogin: true })	
		},

		
		
		
		checkboxGroupChange(event) {
			this.fruit = event
		},
      async info() {
      	let that = this;
      	let result = await that.$request({
      		loading: 1,
      		method: 'post',
      		url: '/api/games/cate',
      		data: {
      			type: this.type
      		}
      	});
      	if (result.statusCode == 200) {
      		if (result.data.code == 200) {      	
      			that.iconnew = result.data.data;      		
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
      }
	
    }
  }
</script>

<style lang="scss" scoped>

  .template-wave{
	  
	background-color: #f5f5f5;
    width: 100vw;
    height: 100vh;
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
 .reg-block {
 	display: flex;
 	align-items: center;
 	justify-content: center;
 	width: 100vw;
 
 	.description-text {
 		font-size: 26rpx;
 		color: #686a68;
 
 		.text {
 			display: inline-block;
 			text-decoration: underline;
 		}
 	}
 }
</style>
