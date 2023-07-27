<template>
	<view class="content b-t">
	<tn-nav-bar  fixed :bottomShadow="false">我的地址</tn-nav-bar>
	  
		<view class="list-box" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<view class="list b-b" v-for="(item, index) in addressList" :key="index" >
		<text class="hxicon-round right"  @click="checkAddress(item)" v-if="!source" >
		<radio class=""  value="A"></radio>	
			
			
		</text>
		
		
		
				<view class="wrapper" @click="checkAddress(item)" >
					<view class="address-box">					
						
						<text class="tn-color-red" style="" v-if="item.status==1">默认</text>
						<text class="address">
						{{item.area}} {{item.address}}</text>
					</view>
					<view class="u-box">
						<text class="name text-bold">{{item.name}}</text>
						<text class="mobile text-bold">{{item.mobile}}</text>
						
					</view>					
				</view>		
				
				<text class="tn-icon-delete" @click.stop="del(item.id)" ></text>
			</view>
		</view>
		
		<view class="add-btn" @click="addAddress('add')">
			<text>新增地址</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
					sid: 811,
				source: 0,
				addressList: []
			}
		},
		onLoad(option){
			let that=this
				if (option.source){
			this.source = option.source;
			}
			
			if (option.sid){
				this.sid = option.sid;
					}
			this.init();
			uni.$on('addaddresok',function(data){
				
			that.init();
			})
			
			
			
		},
		
		onShow(){			
	
		},
		
		methods: {
			async init() {
				let that = this;
				let result = await that.$request({
					loading: 0,
					method: 'post',
					url: '/api/shop/my_address',
					data: {	
						//goods_id:this.id
					}
				});
				if (result.data.code == 200) {			
				this.addressList = result.data.data;
				
				if (this.addressList.length==0){
					let that=this
					uni.showModal({
						title:'提示',
						content:'暂无地址，请先添加',						
						confirmText:'去添加',
						 success: function (res) {
						        if (res.confirm) {
						          that.addAddress('add')
						        }
						    }
					})
				}
					
			
			}
			},
			
		
			//选择地址
			checkAddress(item,fanwei){	
					uni.$emit('addxuanze',item)					
					uni.setStorage({
						key:'selectAddress',
						data:item,
						success() {
							uni.navigateBack();
						}
					})	
				
			
			},
			addAddress(type, item=[]){
				uni.navigateTo({
					url: `/shopPages/address_add?type=${type}&data=${JSON.stringify(item)}`
				})
			},
			
			del(id){
				
				
			this.$http('/User/addressDel', {
				id:id,					
			}).then(data => {	
			
		this.$msg('删除成功')
				
					this.init();
			
			});
			},
			
			
			
			
			
			//添加或修改成功之后回调
			refreshList(data, type){
				//添加或修改后事件，这里直接在最前面添加了一条数据，实际应用中直接刷新地址列表即可
				this.addressList.unshift(data);
				
				console.log(data, type);
			}
		}
	}
</script>

<style lang='scss'>
	.bb15{
		padding-bottom: 30upx;
	}
	.right{
		margin-right: 18upx;
	}
	.content{
		position: relative;
	}
	.list-box{
		display: flex;
		flex-direction: column;
		background-color: #fff;
		border-radius: 10px;
		overflow: hidden;
		margin: 0 15px;
	}
	.list{
		display: flex;
		align-items: center;
		padding: 14px 15px;
		background: #fff;
		position: relative;
	}
	
	.chaoguo{
		color: #ff0000;
	}
	.wrapper_fanwei{
		color: #0081FF;
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	.wrapper{
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	.address-box{
		display: flex;
		align-items: center;
		.tag{
			font-size: 24upx;
			color:#fffafb;
			margin-right: 10upx;
			background: #fffafb;
			border: 1px solid #ffc107;
			border-radius: 4upx;
			padding: 4upx 10upx;
			line-height: 1;
		}
		.address{
			font-size: 30upx;
			color: #000000;
		}
	}
	.u-box{
		font-size: 28upx;
		color: #000000;
		margin-top: 16upx;
		.name{
			margin-right: 30upx;
		}
	}
	.icon-edit{
		display: flex;
		align-items: center;
		height: 80upx;
		font-size: 40upx;
		color: #fffafb;
		padding-left: 30upx;
	}
	
	.add-btn{
		position: fixed;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
		overflow: hidden;
		bottom: 15px;
		left: 15px;
		right: 15px;
		height: 45px;
		font-size: 16px;
		font-weight: bold;
		color: #333;
		background: linear-gradient(45deg, #ffd900, #ffc107);		
	}
</style>
