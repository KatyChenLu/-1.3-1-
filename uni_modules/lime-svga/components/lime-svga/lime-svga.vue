<template>
		<view class="content">
			 <l-svga ref="svga"></l-svga>
		</view>
</template>

<script>
	export default {
		data() {
			
		},
		onLoad(option) {
			this.$nextTick(()=>{
				this.$refs.svga.render(async (parser, player) => {
					const videoItem = await parser.load("https://wzilu.oss-cn-shenzhen.aliyuncs.com/svga/svga_home_box_float_new.svga");
				    await player.setVideoItem(videoItem);
				    // 设置当前动画的循环次数，0代表无限循环 默认 0
				    player.loops = 0
					player.setImage('http://wzilu.oss-cn-shenzhen.aliyuncs.com/admin/1657594273000.png', 'gift1');			
					player.setImage('https://wzilu.oss-cn-shenzhen.aliyuncs.com/svga/acoustics_1.png', 'gift4');				
				    // 开始播放动画，reverse = true 时则反向播放。
				    player.startAnimation()
				    // 监听动画完成
				    player.onFinished(() => {
				        console.log('动画结束')
				    })
				})
			})
		
		},
		methods: {
			
		},
	}
</script>

<style lang="scss">
	.content{
		height: 100vh;
		background: #333;
	}

</style>
