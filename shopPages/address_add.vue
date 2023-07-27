<template>
	<view class="content">
		<tn-nav-bar  fixed :bottomShadow="false">选择地址</tn-nav-bar>
		  
		<view class="list-box" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<view class="row b-b">
				<text class="tit">联系人</text>
				<input class="input" type="text" v-model="addressData.name" placeholder="收货人姓名" placeholder-class="placeholder" />
			</view>
			<view class="row b-b">
				<text class="tit">手机号</text>
				<input class="input" type="number" maxlength="11" v-model="addressData.mobile" placeholder="收货人手机号码" placeholder-class="placeholder" />
			</view>
			<view class="row b-b">
				<text class="tit">省市县</text>
				<input class="input" type="text" disabled placeholder="请选择" v-model="addressData.region"  placeholder-class="placeholder" />
				
				 <pick-regions :defaultRegion="defaultRegionCode" @getRegion="handleGetRegion">
				 点击选择
				</pick-regions>
			
			</view>
			<view class="row b-b"> 
				<text class="tit">详细地址</text>
				<input class="input" type="text" v-model="addressData.address" placeholder="街道小区、楼号、门牌" placeholder-class="placeholder" />
			</view>
			
			<view class="row default-row">
				<text class="tit">设为默认</text>
				<switch :checked="addressData.defaule" color="#55aa7f" @change="switchChange" />
			</view>
			</view>
		<view class="add-btn" @click="confirm">
			<text>确定</text>
		</view>
	</view>
</template>

<script>
	  import pickRegions from '@/shopPages/pick-regions/pick-regions.vue'
	export default {
		  components:{ pickRegions },
		data() {
			return {
				addressData: {
					name: '',
					mobile: '',					
					address: '',
					region: '',
					lat: '',
					lng: '',
					default: false
				},
				  region:[],	
				  defaultRegion:['陕西省','商洛市','洛南县'],
				  defaultRegionCode:'611021'
			}
		},
		 computed:{
		            regionName(){
		                // 转为字符串
		                return this.region.map(item=>item.name).join(' ')
		            }
		        },
		onLoad(option){
		
			let title = '新增收货地址';
			if(option.type==='edit'){
				title = '编辑收货地址'
				
				this.addressData = JSON.parse(option.data)
			}
			this.manageType = option.type;
			uni.setNavigationBarTitle({
				title
			})
		},
		methods: {
			switchChange(e){
				this.addressData.default = e.detail;
			},
			  handleGetRegion(region){

			 this.addressData.region = region[0].name+'-'+region[1].name+'-'+region[2].name
			 },
			//地图选择地址
			chooseLocation(){
				uni.chooseLocation({
					success: (data)=> {
						console.log(data)
						this.addressData.addressName = data.name;
						this.addressData.address = data.name;
							this.addressData.lng = data.longitude;
								this.addressData.lat = data.latitude;
					}
				})
			},
			
	
			//提交
			async confirm(){
					let moren='0';
				let data = this.addressData;
				if(!data.name){
					this.msg('请填写收货人姓名');
					return;
				}
				if(!data.mobile){
					this.msg('请输入正确的手机号码');
					return;
				}
				if(!data.region){
					this.msg('请选择省市县');
					return;
				}
				if(!data.address){
					this.msg('请填写详细地址信息');
					return;
				}
				
				//this.$api.prePage()获取上一页实例，可直接调用上页所有数据和方法，在App.vue定义
			
				if (this.addressData.default){
			    moren=1
				}
				
				
				
				let that = this;
					let result = await that.$request({
						loading: 0,
						method: 'post',
						url: '/api/shop/add_address',
						data: {	
						name: data.name,
						mobile: data.mobile,					
						address: data.address,					
						region: data.region,
						default: moren,		
						}
					});
					if (result.data.code == 200) {		
					this.msg('添加成功')
							uni.$emit('addaddresok','ok')
					setTimeout(()=>{
						uni.navigateBack()
					}, 800)			
				}
				
				
				
			
			},
		}
	}
</script>

<style lang="scss">
	.bb15{
		background: #f1f1f1;
		padding-top: 40upx;
	}
	.list-box{
		display: flex;
		flex-direction: column;
		background-color: #fff;
		border-radius: 10px;
		overflow: hidden;
		margin: 0 15px;
	}
	.row{
		border-bottom: 1px solid #e6e6e6;
		display: flex;
		align-items: center;
		position: relative;
		padding:0 30upx;
		height: 110upx;
		background: #fff;
		
		.tit{
			flex-shrink: 0;
			width: 150upx;
			font-size: 30upx;
			color: #000000;
		}
		.input{
			flex: 1;
			font-size: 30upx;
			color: #4f4f4f;
		}
		.icon-locationfill{
			font-size: 36upx;
			color: #f1f1f1;
		}
	}
	.default-row{
		margin-top: 16upx;
		.tit{
			flex: 1;
		}
		switch{
			transform: translateX(16upx) scale(.9);
		}
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
		background: linear-gradient(45deg, #55aa7f, #55aa7f);		
	}
</style>
