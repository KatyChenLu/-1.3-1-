<template>
	  <view class="template-group">

	<!-- 不建议写时间，因为写了时间，你就要经常更新文章了鸭-->
	<view class="" >
	  <block v-for="(item, index) in list" :key="index" v-if="item.goods">
	    <view class="article-shadow tn-margin-top-sm tn-margin-right tn-margin-bottom-sm tn-padding-sm " @click="navigateToFn({ url: '/circlePages/blogger_other_user?id='+item.user_id+'&game_id='+item.id, checkLogin: false })">
	      <view class="tn-flex">
	        <view class="image-pic tn-margin-sm" style="position: relative;" :style="'background-image:url(' + item.avatar + ')'">
	          <view class="image-article">
	          </view>
	
			  
			  <view @click.stop="bofang(item.voc,index)"  style="right: 3px;
			  position: absolute;
			  bottom: 5px;
			  font-size: 20px;
			  z-index: 1;">
			  	<tn-button backgroundColor="#ffffff" padding="20rpx 0" width="190rpx" shadow fontBold
			  		v-if="item.voc">
			  		<view class="voice-line-wrap"
			  			style="--line-height:15px;--line-start-color:royalblue ;--line-end-color:indianred">
			  			<block v-if="item.isplay">
			  				<view class="voice-line one"></view>
			  				<view class="voice-line two"></view>
			  				<view class="voice-line three"></view>
			  				<view class="voice-line four"></view>
			  				<view class="voice-line five"></view>
			  				<view class="voice-line six"></view>
			  				<view class="voice-line seven"></view>
			  				<view class="voice-line six"></view>			  				
			  			</block>
			  			<block v-else>
			  				<view class="tn-icon-play-fill tn-color-green"></view>
			  			</block>
			  			<text class="tn-color-black" style="margin-left: 15px;">{{item.vocsen}} ''</text>
			  		</view>
			  
			  	</tn-button>
			  </view>
			  
		
			  
	        </view>
	        <view class="tn-margin-top-sm tn-padding-top-xs" style="width: 100%;">			  
			  <view class="tn-flex tn-flex-row-between tn-flex-col-between ">
			    <view class="justify-content-item" >
			      <text class="tn-color-cat tn-text-lg  tn-text-bold">{{item.nickname}}</text>
				
			    </view>
			      <view class="justify-content-item "  >
			  		<text v-if="item.distance">{{item.distance}}</text>
			    <text v-if="item.is_online" class="tn-color-green">●在线</text>
			    <text v-else class="tn-color-gray tn-text-sm">●离线</text>
			    
			     </view>
			  </view>
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
	          <view class="tn-padding-top-xs" style="min-height: 100rpx;">
				  <tn-tag v-if="item.sex==1" shape="circle" backgroundColor="rgb(139 247 207 /0.3)"  margin="10rpx" height="32rpx" width="90rpx">
				<text class="tn-icon-sex-male" style="font-size:24rpx;color:rgb(0 138 112);">{{item.shengri}}</text>
				</tn-tag>
				 <tn-tag v-if="item.sex==2" shape="circle" backgroundColor="rgb(212 149 251 /0.3)"  margin="10rpx" height="32rpx" width="90rpx">
				<text class="tn-icon-sex-female" style="font-size:24rpx;color:rgb(197 0 192);">{{item.shengri}}</text>
				</tn-tag>
				<block v-for="(itemdd, indexd) in item.tags" :key="indexd" >
				<tn-tag :plain="true" shape="radius" size="sm"  backgroundColor="rgb(255 96 88 /0.3)"  margin="5rpx"  >
				<text  style="font-size:12px;color:rgb(255 12 0);">{{itemdd.title}}</text>
				</tn-tag>	
					</block>	
	          <!--  <text class=" tn-text-sm clamp-text-1 tn-padding-top-sm">
	             好评率：{{item.order_baifenbi}}%   <text class="tn-margin-left">服务{{item.order_num}}人</text>
	            </text> -->
				<text class=" tn-text-sm clamp-text-1 tn-padding-top-sm">
				{{item.dec}} 
				</text>
	          </view>
	          <view class="tn-flex tn-flex-row-between tn-flex-col-between tn-padding-top-sm">
	            <view 
	              class="justify-content-item tn-margin-right tn-round tn-text-sm tn-text-bold" :class="[`tn-bg-${item.color}--light tn-color-${item.color}`]">
	   
			 <view class="capsule" >				
	           <tn-tag class="capsule-tag"  :originLeft="true"  padding="10px" width="160rpx"  shape="circleLeft" backgroundColor="#5d5e7d" fontColor="#FFFFFF" :plain="false">
	        	<view>
					<image :src="item.game_image" style="width: 20px;height: 20px;margin-left: 8px;" mode="heightFix" ></image>
				</view> 
				<text class="  ">{{item.game_title}}</text>
	           </tn-tag>
	           <tn-tag   class="capsule-tag" padding="10px"  shape="circleRight" backgroundColor="tn-cool-bg-color-6" fontColor="#ffffff" :plain="false">
	         		<text class=" ">{{item.goods.duanwei}}</text>									
	           </tn-tag>
	         </view>
			 
	            </view>
	            <view class="justify-content-item tn-color-gray tn-text-center tn-color-gray--disabled" style="padding-top: 5rpx;">
	            
	              <text class="tn-text-lg tn-color-red tn-text-bold">{{ item.goods.price }}</text>
	              <text class="tn-color-red">币</text>
	            </view>
	          </view>
	        </view>
	      </view>
	    </view>
	  </block>
	</view>
	</view>
</template>

<script>
	const audioContext = uni.createInnerAudioContext()

	export default {
		props: ['list', 'type'],
	
		data() {
			return {
				noClick: true,
				videoPlay: false,
				isplay: false,
				body:''
			}
		},
		created() {
		
		},
		methods: {

			screenChange(e) {
				let _this = this;
				let fullScreen = e.detail.fullScreen;
				if (!fullScreen) {
					//_this.videoContext.pause();
					//_this.videoPlay = false;
				}
			},
			videoShow(vod) {
				uni.navigateTo({
					url: '/homePages/vodplay?vodurl=' + vod
				})
			},



			dakai(id) {
				if (this.isplay) {
					audioContext.stop()
					this.isplay = false
					return
				}
				uni.navigateTo({
					url: '/circlePages/details?id=' + id
				});
			},

			shipin(vod) {
				this.videoPlay = true
				//this.$emit('bofang', vod)
			},

			chaozuo(item) {
				let that = this
				if (!uni.getStorageSync('token')) {
					that.msg('请登陆')
				}
				let list = []
				if (item.ziji == 1 && uni.getStorageSync('token')) {
					list = ['删除帖子'];
				}
				if (item.manage == 1) {
					list = ['删除帖子', '推荐贴子', '置顶帖子'];
				}
				uni.showActionSheet({
					itemList: list,
					success: function(res) {
						if (res.tapIndex == 0) {
							that.edieGoods(item.id, 1)
						}
						if (res.tapIndex == 1) {
							that.edieGoods(item.id, 2)
						}

						if (res.tapIndex == 2) {
							that.edieGoods(item.id, 3)
						}


					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});


			},

			async edieGoods(id, type) {
				console.log(3)
				let that = this;
				let result = await that.$request({
					loading: 1,
					method: 'post',
					url: '/api/user/edieGoods',
					data: {
						id: id,
						type: type
					}
				});
				if (result.statusCode == 200) {
					if (result.data.code == 200) {
						that.msg(result.data.msg)

						if (type == 1) {
							const shaya = {
								id: id,
								msg: '删除'
							}
							uni.$emit('onlist_change', shaya)
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



			selectAddressFn(body) {
				if (body.lng) {
					uni.openLocation({
						longitude: Number(body.lng),
						latitude: Number(body.lat),
						name: '发布位置',
						address: body.address
					})
				} else {
					this.msg('未标注地图')
				}
			},



			dianzantiezi(item) {
				
				
				let that = this;
				if (that.noClick) {
				    // 第一次点击
				    that.noClick= false;	
					console.log('点击',that.noClick)
				     that.dianzantiezi_pass(item);				  
				    setTimeout(()=> {
				        that.noClick= true;
				    }, 2000)
				} else {
					console.log('重复',that.noClick)
				    // 这里是重复点击的判断
				}
				
				
				
				
			},

			tiezi(){
				console.log(333)
			},

			async dianzantiezi_pass(item) {
				if (!this.isLogin) {
					this.loginBoxFlag = true
					return false;
				}
				let result = await this.flowgoods(item.id)

				const shaya = {
					id: item.id,
					msg: result.msg
				}

				uni.$emit('onlist_change', shaya)
				this.msg(result.msg)
			},


	bofang(vocurl, index) {
	
		if (this.list[index].isplay) {
			audioContext.stop()
			this.list[index].isplay = false
			return
		}
	
	
		for (let i in this.list) {
			this.list[i].isplay = false
		}
	
		this.list[index].isplay = !this.list[index].isplay;
	
		let that = this
		audioContext.src = vocurl
		audioContext.play()
		audioContext.onPlay(() => {})
		audioContext.onEnded(() => {
			this.list[index].isplay = false
		})
		audioContext.onError(() => {
			this.list[index].isplay = false
			that.msg('不支持播放该音频格式')
		})
	},



		}
	};
</script>


<style scoped lang="scss">

  /* 资讯主图 start*/
  .image-article {
    border-radius: 8rpx;
    width: 200rpx;
    height: 250rpx;
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

  
</style>
