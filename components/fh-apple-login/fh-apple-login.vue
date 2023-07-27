<template>	
	<view v-if="show" class="fh-apple-login-main" @click="appleLogin">	
			<view class="fh-apple-login-button">
				<view class="fh-apple-icon"></view>
				{{ content }}
			</view>
	</view>	
</template>

<script>
import utils from './utils.js'
export default {
	name: 'FhAppleLogin',
	props: {
		content: {
			type: String,
			default: '通过apple账号登录'
		}
	},
	mounted: async function() {
		this.show = await this.serviceCheck()
	},
	data() {
		return {
			show: true
		}
	},
	methods: {
		appleLogin: async function() {
			let result
			try {
				result = await utils.appleLogin()
				this.$emit('afterAppleLogin', result.authResult)
			} catch (e) {
				console.error(e)
			}
		},
		serviceCheck: async function() {
			try {
				const service = await utils.getThirdService('apple')
				return !!service
			} catch (e) {
				return false
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.fh-apple-login-main {
	width: 200pt;
	height:32pt;
	border-radius: 6pt;
	border: 1rpx solid #333333;
	.fh-apple-login-button {
	width: 200pt;
	height:32pt;
		border-radius: 6pt;
		display: flex;
		justify-content: center;
		align-items: center;
		line-height: 32pt;
		font-family: PingFangSC-Medium;
		font-size: 14pt;
		color: #333333;
		.fh-apple-icon {
			width: 19pt;
			height:19pt;
			background-image: url(../../static/fh-apple-login/fh-apple-icon.png);
			background-repeat: no-repeat;
			background-size: contain;
			margin-right:15pt;
		}
	}
}
</style>
