<template>
	<view class="pd30 bg-w" style="min-height: 100vh;">
		<view v-if="isWithdraw == false">
			<view class="bg-w bdr16 box-shadow pd40 flex space alcenter">
				<view class="flex alcenter">
					<image class="money-icon" src=""></image>
					<view class="ml20 ft16 text-info">当前余额</view>
				</view>
				<view class="ft16 ftw600 text-default">¥4234</view>
			</view>

			<view class="mt40 bg-w bdr16 box-shadow pd40">
				<view class="ft16 text-info">提现额度</view>
				<view class="flex alcenter mt30">
					<text class="ft32 ftw600">￥</text>
					<input type="text" style="width:300rpx;height: 80rpx;" v-model="money" class="ft32 ftw600 pl10" />
				</view>
			</view>
			<view class="mt20 flex ft14  text-notice">*最少提现423元； 1-7个工作日到您绑定的微信零钱</view>

			<view class="mt40"><button @click="tixian()" class="btn-main text-w ftw600">确认提现</button></view>
		</view>

		<view v-if="isWithdraw == true">
			<view class="withdraw-main bg-w">
				<view class="text-center"><image class="withdraw-status" :src="statics.yesImg"></image></view>
				<view class="text-center ft18 text-default ftw600">提现申请成功</view>

				<view class="text-center ft16 text-info mt50">我们会在1-7个工作日内审核并完成转账</view>

				<view class="flex center mt50"><button class="btn-mid">知道了</button></view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			money: 0,
			body: [],
			isWithdraw: false
		};
	},
	onLoad() {
		//this.info();
	},

	methods: {
		info() {
			this.$http('/user/tixian_index', {}).then(res => {
				if (res) {
					this.body = res;
				}
			});
		},

		tixian() {
			if (this.money > this.body.money) {
				this.$msg('不能超过你的余额哦！');
				return;
			}
			if (this.money < this.body.tixian_jine) {
				this.$msg('最低提现额度:' + this.body.tixian_jine);
				return;
			}

			this.$http('/user/do_tixian', {
				money: this.money,
				shouxufei: this.body.tixian_shouxu ,//注意这里数据库要记录提现金额，和手续费和实际支付金额
			}).then(res => {
				if (res == 1) {
					this.isWithdraw = true;
					this.body = res;
				}
			});
		}
	}
};
</script>

<style>
.withdraw-main {
	padding-top: 80rpx;
}
.withdraw-status {
	width: 300rpx;
	height: 300rpx;
}

.money-icon {
	width: 80rpx;
	height: 80rpx;
}
.tag-money {
	width: 180rpx;
	height: 100rpx;
	background: #ffffff;
	border-radius: 50rpx;
	border: 4rpx solid #e6e6e6;
	color: #333333;
	font-size: 32rpx;
	font-weight: 600;
}
.tag-money.on {
	border: none;
	background: #ff6d00;
	color: #ffffff;
}
</style>
