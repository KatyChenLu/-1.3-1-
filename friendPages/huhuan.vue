<template>
  <view class="template-wave" >

	<tn-nav-bar fixed  :isBack="true" >	
		正在呼唤聊天		
	</tn-nav-bar>

    <view class="tn-padding-top-xs" :style="{paddingTop: vuex_custom_bar_height + 'px'}">

	    <mescroll-body ref="mescrollRef" @down="downCallback" @up="upCallback"> 
	     <!-- 比例 start-->
		
	<user-list :list="content" :index="true"></user-list>
	  
	  
	  
	  </mescroll-body>
    </view>

  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  
  import MescrollBody from '@/components/mescroll-uni/mescroll-body.vue';
  import MescrollUni from '@/components/mescroll-uni/mescroll-uni.vue';
  import MescrollMixin from '@/components/mescroll-uni/mescroll-mixins.js';
  const sysinfo = uni.getSystemInfoSync()
  export default {
  	name: 'TemplateGroup',
  	mixins: [template_page_mixin,MescrollMixin],
  	components: {
  		MescrollBody
  	},
 
    data(){
      return {
		  user:[],
		  id:0,
		  screenHeight: sysinfo.screenHeight,
		  zhubo:false,
		  num:0,
		  loginBoxFlag:false,
		  content: []		  
	  }
    },
	onLoad(option) {
		let that=this
		uni.$off('setLoginBoxFlag');
		uni.$on('setLoginBoxFlag', loginBoxFlag => {
			that.loginBoxFlag = loginBoxFlag;
		});	
		
		if (option.id) {
				this.id = option.id
			}
			if (option.num) {
					this.num = option.num
				}
			},
		methods: {
		
		refreshFn(){
			
		},
		closeGlobalLoginFn(){
			this.loginBoxFlag = false;
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
				url: '/api/four/huhuan_list',
				data: {						
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

  
  
  
  
  
</style>
