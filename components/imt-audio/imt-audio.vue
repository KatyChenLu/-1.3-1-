<template>
	<view>
		<view class="all" v-if="isC" @click="isC=false"></view>
		<view class="qiu" @touchstart="touchS" @touchmove.stop.prevent="touchM"  @touchend="touchE" :style="'transform: translate('+ x +'px,' + y +'px);'" :class="{chu:isC}" @click="isC=!isC" >
		<text class="tn-icon-music-fill tn-text-white" style="font-size: 26px;color: #ffffff;"></text>
		</view>
		<view @touchstart="touchS" @touchmove.stop.prevent="touchM"  @touchend="touchE"  class="model tn-main-gradient-purple--reverse" :style="'transform: translate('+ x +'px,' + (y+52) +'px);'" :class="{model1:isC}">
		<view class="imt-audio">
			<view class="audio-wrapper tn-text-center tn-padding-bottom-sm">
				{{name}} 
			</view>
			<view class="audio-wrapper">
				<view class="audio-number">{{format(current)}}</view>
				<slider class="audio-slider" :activeColor="color" block-size="16" :value="current" :max="duration" @changing="seek=true,current=$event.detail.value" @change="audio.seek($event.detail.value)" ></slider>
				<view class="audio-number">{{format(duration)}}</view>
			</view>
			<view class="audio-control-wrapper" :style="{color}">
				<view class="audio-control audio-control-prev" v-if="control" :style="{borderColor:color}" @click="prev"><text class="tn-icon-left-arrow"></text></view>
				<view class="audio-control audio-control-switch"  :style="{borderColor:color}" @click="audio.paused?play():audio.pause()"><text :class="paused?'tn-icon-play-fill':'tn-icon-stop'"></text></view>
				<view class="audio-control audio-control-next" v-if="control" :style="{borderColor:color}" @click="next"><text class="tn-icon-left-arrow"></text></view>
			</view>
		</view>
		
		</view>
	</view>
	
	
	
</template>

<script>
	export default {
		data() {
			return {
				isC:false,
				start:{
					left:0,
					top:0
				},
				x:0,
				y:0,
				oldx:0,
				oldy:0,
				audio: uni.createInnerAudioContext(),
				current: 0, //当前进度(s)
				duration: 0, //总时长(s)
				paused: true, //是否处于暂停状态
				loading: false, //是否处于读取状态
				seek: false //是否处于拖动状态
			}
		},
		props: {
			name:String,
			src: String, //音频链接
			autoplay: Boolean, //是否自动播放
			continue: Boolean, //播放完成后是否继续播放下一首，需定义@next事件
			control: {
				type: Boolean,
				default: true
			}, //是否需要上一曲/下一曲按钮
			color: {
				type: String,
				default: '#ffffff'
			} //主色调
		},
		
		methods: {
			touchS(val){
				this.isMove=true
				this.start.left = val.changedTouches[0].clientX 
				this.start.top = val.changedTouches[0].clientY 
			},
			touchM(val){
				if(this.isMove==false){
					return
				}
				this.x = this.oldx + val.changedTouches[0].clientX  - this.start.left 
				this.y = this.oldy + val.changedTouches[0].clientY  - this.start.top 
			},
			touchE(val){
				this.x=0
				
				this.oldx=this.x
				this.oldy=this.y
				this.isMove=false
			},
			//返回prev事件
			prev() {
				this.$emit('prev')
			},
			//返回next事件
			next() {
				this.$emit('next')
			},
			//格式化时长
			format(num) {
				return '0'.repeat(2 - String(Math.floor(num / 60)).length) + Math.floor(num / 60) + ':' + '0'.repeat(2 - String(Math.floor(num % 60)).length) + Math.floor(num % 60)
			},
			//点击播放按钮
			play() {
				this.audio.play()
				this.loading = true
			}
		},
		created() {

			//this.src=this.configInfo.musiclist[0].url
			if (this.src) {
				this.audio.src = this.src
				this.autoplay && this.play()
			}
		
			//音频进度更新事件
			this.audio.onTimeUpdate(() => {
				if (!this.seek) {
					this.current = this.audio.currentTime
				}
				if (!this.duration) {
					setTimeout(() => {
					this.duration = this.audio.duration
					}, 500);
					
				}
			})
			//音频播放事件
			this.audio.onPlay(() => {
				this.paused = false
				this.loading = false
			})
			//音频暂停事件
			this.audio.onPause(() => {
				this.paused = true
			})
			//音频结束事件
			this.audio.onEnded(() => {
				if (this.continue) {
					this.next()
				} else {
					this.paused = true
					this.current = 0
				}
			})
			//音频完成更改进度事件
			this.audio.onSeeked(() => {
				this.seek = false
			})
		},
		beforeDestroy(){
			this.audio.destroy()
		},
		watch: {	
			src(src, old) {
				this.audio.src = src
				this.current = 0
				this.duration = 0
				if (old || this.autoplay) {
					this.play()
				}
			}
		}
	}
</script>

<style>

.all{
	background-color: rgba(0, 0, 0, 0.6);
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 100;
}
.qiu{
	position: fixed;
	z-index: 29000;
	top: 45%;
	right: 10px;
	width: 48px;
	height: 48px;
	border-radius: 24px;
    background-image: repeating-linear-gradient(-45deg, #892FE8, #5F4FD9);	
	transition-duration:0.5s;
	display: flex;
	justify-content: center;
	align-items: center;

}
.zhuan{
	transform: rotate(45deg);
	width: 24px !important;
	height: 24px !important;
}
.chu{
	top: 32%;
	z-index: 101111;
	width: 62px;
	height: 62px;
	border-radius: 30px;
}
.model{
	display: none;
	position: fixed;
	z-index: 101;
	opacity: 0;
	transition: all 0.5s;	
	box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.6);
	border-radius: 10px;
	justify-content: space-around;
	padding: 10px;	
	margin: 0px 5%;
	top: 30%;
	color: #fff;
	text-align: center;
	font-size: 14px;	
}
.model1{
		display: block;
	width: 90%;
	opacity: 1;
}
	.imt-audio {	
		padding: 5px;
	
		border-radius: 20upx;
	}

	.audio-wrapper {
		display: flex;
		align-items: center;
	}

	.audio-number {
		width: 120upx;
		font-size: 24upx;
		line-height: 1;
		color: #ffffff;
		text-align: center;
	}

	.audio-slider {
		flex: 1;
		margin: 0;
	}

	.audio-control-wrapper {
		margin-top: 20upx;
		display: flex;
		justify-content: center;
		align-items: center;
	
	}

	.audio-control {
		font-size: 32upx;
		line-height: 1;
		border: 4upx solid;
		border-radius: 50%;
		padding: 16upx;
	}

	.audio-control-next {
		transform: rotate(180deg);
	}

	.audio-control-switch {
		font-size: 40upx;
		margin: 0 100upx;
	}

	.audioLoading {
		animation: loading 1s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}

	@keyframes loading {
		to {
			transform: rotate(360deg);
		}
	}
</style>
