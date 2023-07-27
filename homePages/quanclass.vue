<template>
  <view class="template-classify">
    
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed :bottomShadow="false">圈子</tn-nav-bar>
    
    <view class="tn-classify__wrap" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
     
      
      <!-- 分类列表和内容 -->
      <view class="tn-classify__container tn-bg-gray--light">
        <view class="tn-classify__container__wrap tn-flex tn-flex-nowrap tn-flex-row-around tn-bg-white">
          <!-- 左边容器 -->
          <scroll-view  style="flex-basis: 26%;" class="tn-classify__left-box " :scroll-top="leftScrollViewTop" scroll-y scroll-with-animation :style="{height: scrollViewHeight + 'px'}">
            <view
              v-for="(item, index) in tabbar"
              :key="index"
              :id="`tabbar_item_${index}`"
              class="tn-classify__tabbar__item tn-flex tn-flex-col-center tn-flex-row-center"
              :class="[tabbarItemClass(index)]"
              @tap.stop="clickClassifyNav(item.id,index)">
              <view class="tn-classify__tabbar__item__title">{{ item.title }}</view>
            </view>
          </scroll-view>
          
          <!-- 右边容器 -->
          <scroll-view class="tn-classify__right-box" scroll-y :scroll-top="rightScrollViewTop" :style="{height: scrollViewHeight + 'px'}">
            <block >
              <view class="tn-classify__content">
                <!-- 推荐商品轮播图 -->
              
                
                <!-- 分类内容子栏目 -->
                <view  class="tn-classify__content__sub-classify">                 
                  <view class="tn-classify__content__sub-classify__content tn-flex tn-flex-wrap tn-flex-col-center tn-flex-row-left">
	<view class="tn-margin-bottom-lg" style="margin-top: 30px;">
				
				
				<view class="tn-search-fixed tn-padding-sm" style="  	 	  
    position: fixed;z-index: 333;" :style="{top: vuex_custom_bar_height + 'px'}">
				  <view class="tn-flex tn-flex-row-between tn-flex-col-center " >
				    <view class="justify-content-item align-content-item">
				      <view class="tn-bg-gray--light tn-flex tn-flex-col-center" style="border-radius: 100rpx;padding: 10rpx 20rpx 10rpx 20rpx;width: 100%;">
				        <text class="tn-icon-search justify-content-item tn-padding-right-xs tn-color-gray tn-text-lg"></text>
				        <input class="justify-content-item" placeholder="关键词搜索" v-model="searchKey" placeholder-style="color:#AAAAAA" ></input>
				      </view>
				    </view>
				    
				    <view class="align-content-item">
				      <view class="justify-content-item tn-text-center" @click="sousuo()">
				        <tn-button fontColor="#555555" :shadow="true" backgroundColor="#bcebff"   shape="round" padding="20rpx 20rpx" width="150rpx" shadow fontBold >
				          <text >搜索</text>
				        </tn-button>
						
				      </view>
				    </view>
				  </view>
				</view>
			
				
				<view class="tn-flex-row-between tn-flex-col-between" v-if="smalllist.length==0" style="padding: 150rpx 200rpx;">
					<tn-empty icon="/static/images/no.png" text="暂无圈子">						
					</tn-empty>
				</view>
				
				
				
				
				
				
				<view class=""  v-for="(sub_item,sub_index) in smalllist"
                   v-if="smalllist.length>0"   :key="sub_index" style="">
				
					<view class="tn-flex">
						<view class="image-pic " style="margin: 15px 2px;" @click="navigateToFn({ url: '/circlePages/group?id='+sub_item.id, checkLogin: false })">
							<view>
								<image :src="sub_item.image" mode="aspectFill"
									style="width:100rpx;height: 100rpx;border-radius:15rpx;"></image>
							</view>
						</view>
						<view class=" tn-padding-top-xs " style="width: 100%;margin: 8px 8px;" @click="navigateToFn({ url: '/circlePages/group?id='+sub_item.id, checkLogin: false })">
							<view class=" tn-text-bold clamp-text-1 tn-text-justify ">
								#{{ sub_item.title }}
							</view>
				
							<view class="tn-flex tn-flex-row-between tn-flex-col-between" style="margin-top:10px;">
								<view class="justify-content-item tn-color-gray tn-text-center"
									style="padding-top: 5rpx;">
									<text class="tn-padding-right">{{sub_item.follow}}个帖子</text>
								</view>
							</view>
						</view>
						<view class="image-pic " style="margin: 15px 2px;width: 170px;" @click="guanzhu(sub_item.id,sub_index)" v-if="type==0">
							<tn-button shape="round" backgroundColor="#b0b0b0" fontColor="#080808" v-if="sub_item.is_follow">
							<text class="tn-text-bold" >已关注</text>
							</tn-button>
							<tn-button shape="round" backgroundColor="#FFF00D" fontColor="#080808" v-else>
							<text class="tn-text-bold" >关注</text>
							</tn-button>
						</view>
						
						<view class="image-pic " style="margin: 15px 2px;width: 170px;" @click="xuan(sub_item)" v-if="type==1">						
							<tn-button shape="round" backgroundColor="#FFF00D" fontColor="#080808" >
							<text class="tn-text-bold" >选择</text>
							</tn-button>
						</view>	
					</view>				
				
				</view>	
					
					</view>		
					
					
					
                  </view>
                </view>
              </view>
              
              <view class="tn-padding-bottom"></view>
            </block>
          </scroll-view>
        </view>
      </view>
    </view>
	<!-- 登录框组件 -->
	<login-fn :is-show-login="loginBoxFlag" @loginSuccessCallback="refreshFn" @close="closeGlobalLoginFn">
	</login-fn>

	<view class="tn-flex tn-footerfixeddd" @click="navigateToFn({ url: '/circlePages/build', checkLogin: true })" v-if="type==0">
	  <view class="tn-flex-1 justify-content-item tn-margin-sm tn-text-center">
	    <tn-button backgroundColor="rgb(0, 255, 198)" padding="20rpx 5px" shadow fontBold >
		<text class="tn-color-black tn-icon-add">建立圈子</text>       
	    </tn-button>		
	  </view>	  
	</view>
	
  </view>
</template>

<script>
  export default {
    name: 'templateShopClassify',
    data() {
      return {
        // 侧边栏分类数据
		type:0,
		searchKey:'',
        tabbar: [],
        // 分类里面的内容信息
        classifyContent: {
          // 推荐商品
          recommendProduct: [          
          ],
          // 子栏目
          subClassifyTabbar: [],
          // 显示子栏目分类选项
          showSubClassifyTabbar: false,
          // 每个子栏目下的内容
          subClassify: []
          
        },
        // 分类菜单item的信息
        tabbarItemInfo: [],
        smalllist: [],
        // scrollView的top值
        scrollViewBasicTop: 0,
        // scrollView的高度
        scrollViewHeight: 0,
        // 左边scrollView的滚动高度
        leftScrollViewTop: 0,
        // 右边scrollView的滚动高度
        rightScrollViewTop: 0,
        // 当前选中的tabbar序号
        currentTabbarIndex:1,
		id:1,
		loginBoxFlag: false, // 登录框显示隐藏状态
		tages_checkedlist:[]
      }
    },
    computed: {
      tabbarItemClass() {
        return index => {
          if (index === this.currentTabbarIndex) {
            return 'tn-classify__tabbar__item--active tn-bg-white'
          } else {
            let clazz = 'tn-bg-gray--light'
            if (this.currentTabbarIndex > 0 && index === this.currentTabbarIndex - 1) {
              clazz += ' tn-classify__tabbar__item--active--prev'
            }
            if (this.currentTabbarIndex < this.tabbar.length && index === this.currentTabbarIndex + 1) {
              clazz += ' tn-classify__tabbar__item--active--next'
            }
            return clazz
          }
        }
      }
    },
    onReady() {
		
      this.$nextTick(() => {
        this.getScrollViewInfo()
        this.getTabbarItemRect()
      })
	  	this.info()
		this.infosmall()
		uni.$off('setLoginBoxFlag_home');
		uni.$on('setLoginBoxFlag_home', loginBoxFlag => {
			this.loginBoxFlag = loginBoxFlag;
		});
    },
	onLoad(option) {
		if (option.type){
			this.type=option.type
		}
	},
    methods: {
      // 跳转
	  
	  sousuo(){
		 if (this.searchKey==''){
		 			  this.msg('请输入关键词')
		 			  return
		 }
		 this.infosmall()
	  },
      tn(e) {
      	uni.navigateTo({
      		url: e,
      	});
      },
      huati(id, title) {
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
      
      },
	  
	  async infosmall() {
	  	let that = this;
	  	let result = await that.$request({
	  		loading: 1,
	  		method: 'post',
	  		url: '/api/category/categorylist',
	  		data: {	 
			 keys:this.searchKey,
			 id:that.id	
	  		}
	  	});
	  
	  
	  	if (result.statusCode == 200) {
	  		if (result.data.code == 200) {
	  			that.smalllist = result.data.data
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
	  		loading: 1,
	  		method: 'post',
	  		url: '/api/category/quancategory',
	  		data: {	  		
	  		}
	  	});
	  
	  
	  	if (result.statusCode == 200) {
	  		if (result.data.code == 200) {
	  			that.tabbar = result.data.data
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
	  
	  
	  
	  
      // 获取scrollView的高度信息
      getScrollViewInfo() {   
          const systemInfo = uni.getSystemInfoSync()
          this.scrollViewBasicTop = systemInfo.statusBarHeight +  uni.upx2px(10)
          this.scrollViewHeight = systemInfo.safeArea.height + systemInfo.statusBarHeight - uni.upx2px(10)
      
      },
      // 获取分类菜单每个item的信息
      getTabbarItemRect() {
        let view = uni.createSelectorQuery().in(this)
        for (let i = 0; i < this.tabbar.length; i++) {
          view.select('#tabbar_item_' + i).boundingClientRect()
        }
        view.exec(res => {
          if (!res.length) {
            setTimeout(() => {
              this.getTabbarItemRect()
            }, 10)
            return
          }
          
          // 将每个分类item的相关信息
          res.map((item) => {
            this.tabbarItemInfo.push({
              top: item.top,
              height: item.height
            })
          })
        })
      },
	  
      // 点击了分类导航
      clickClassifyNav(id,index) {
        if (this.currentTabbarIndex === index) {
          return
        }
		
		
		if (index==0&&!uni.getStorageSync('token')) {
			this.loginBoxFlag = true
			return false;
		}
		
		
		
        this.currentTabbarIndex = index
        this.id=id
		this.infosmall()
        this.handleLeftScrollView(index)
        this.switchClassifyContent()
      },
	  
	  xuan(item){
	  	uni.$emit('quan',item)
	  	uni.navigateBack()
	  },
	  	
	  async guanzhu(id,index) {
	  	if (!this.isLogin) {
	  		this.loginBoxFlag = true
	  		return false;
	  	}
	  
	  
	  	let that = this;
	  	let result = await that.$request({
	  		loading: 1,
	  		method: 'post',
	  		url: '/api/user/followgroup',
	  		data: {
	  			id: id
	  		}
	  	});
	  	if (result.statusCode == 200) {
	  		if (result.data.code == 200) {
	  			if (result.data.msg == '取消成功') {
	  				that.smalllist[index].is_follow = false
	  			} else {
	  				that.smalllist[index].is_follow = true
	  			}
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
	  
      // 点击分类后，处理scrollView滚动到居中位置
      handleLeftScrollView(index) {
        const tabbarItemTop = this.tabbarItemInfo[index].top - this.scrollViewBasicTop
        if (tabbarItemTop > this.scrollViewHeight / 2) {
          this.leftScrollViewTop = tabbarItemTop - (this.scrollViewHeight / 2) + this.tabbarItemInfo[index].height
        } else {
          this.leftScrollViewTop = 0
        }
      },
      // 切换对应分类的数据
      switchClassifyContent() {
        this.rightScrollViewTop = 1
        this.$nextTick(() => {
          this.rightScrollViewTop = 0
        })
      //  this.classifyContent.subClassify[0].title = this.tabbar[this.currentTabbarIndex]
      }
	  
    }
	
	
  }
</script>

<style lang="scss" scoped>
  .tn-classify {
    
    /* 搜索栏 start */
    &__search {
      &--wrap {
        height: 126rpx;
      }
      
      &__box {
        flex: 1;
        text-align: center;
        padding: 20rpx 0;
        margin: 0 30rpx;
        border-radius: 60rpx;
        font-size: 26rpx;
      }
      
      &__icon {
        padding-right: 10rpx;
      }
    }
    /* 搜索栏 end */
    
    /* 分类列表和内容 strat */
    &__container {
      padding-top: 10rpx;
    }
    
    &__left-box {
      
    }
    
    &__right-box {
      background-color: #FFFFFF;
    }
    /* 分类列表和内容 end */
    
    /* 侧边导航 start */
    &__tabbar {
      &__item {
        height: 120rpx;
        
        &:first-child {
          border-top-right-radius: 0rpx;
        }
        
        &:last-child {
          border-bottom-right-radius: 0rpx;
        }
        
        &--active {
          background-color: #FFFFFF;
          position: relative;
          font-weight: bold;
          
          &::before {
            content: '';
            position: absolute;
            width: 12rpx;
            height: 40rpx;
            top: 50%;
            left: 0;
            background-color: #FBBD12;
            border-radius: 12rpx;
            transform: translateY(-50%) translateX(-50%);
          }
          
          &--prev {
            border-bottom-right-radius: 26rpx;
          }
          
          &--next {
            border-top-right-radius: 26rpx;
          }
        }
      }
    }
    /* 侧边导航 end */
    
    /* 分类内容 start */
    &__content {
      margin: 18rpx;
      
      /* 推荐商品 start */
      &__recomm {
        margin-bottom: 40rpx;
        
        &__swiper {
          
        }
      }
      /* 推荐商品 end */
      
      /* 子栏目 start */
      &__sub-classify {
        margin-bottom: 20rpx;
        
        &--title {
          font-weight: bold;
          margin-bottom: 18rpx;
        }
        
        &__content {
          
          &__item {
            width: 33%;
          }
          
          &__image {
            background-color: rgba(188, 188, 188, 0.1);
            border-radius: 12rpx;
            margin: 10rpx;
            margin-left: 0;
            width: 100%;
            height: 160rpx;
            overflow: hidden;
            border: 1rpx solid rgba(0,0,0,0.02);
            
            image {
              width: 100%;
              height: 160rpx;
            }
          }
          
          &__title {
            margin-right: 10rpx;
          }
        }
      }
      /* 子栏目 end */
    }
    /* 分类内容 end */
  }
  .tn-footerfixeddd {
  	  bottom: 5px;
  	  right:30%;	  
    position: fixed;
    width: 34%; 
    box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0);
  }
</style>
