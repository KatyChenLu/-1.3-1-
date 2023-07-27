<template>
  <view class="template-wave">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar>
    
    <view class="">
      
    </view>
	<view class="space">
		<view class="planet">
			<view class="planet_shadow"></view>
			<view class="crater1"></view>
			<view class="crater2"></view>
			<view class="crater3"></view>
			<view class="crater4"></view>
		</view>
		<view class="stars">
			<view class="star"></view>
			<view class="star pink"></view>
			<view class="star blue"></view>
			<view class="star yellow"></view>
		</view>		
	</view>
    <view style="padding: 200px;">
    	<view class="avatar"></view>
    	<view class="inner"></view>
    	<view class="inner outter"></view>
    	<view class="inner outter1"></view>
    	<view class="inner outter2"></view>
    </view>
	

 
<button  class="tn-btn-class tn-btn tn-padding-sm tn-margin-sm  tn-main-gradient-purple--reverse" 
style="position: fixed;bottom: 50px;width: 95%;border-radius: 50px;">
	开始匹配
		<view class="tn-color-yellow" style="font-size: 14px;">30钻石一次</view>
	</button>
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
      return {}
    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scoped>

  .template-wave{
    background-image: linear-gradient(to top, #4C3FAE 20%, #6E26BA 80%);
    width: 100vw;
    height: 100vh;
  }
  @keyframes move_wave {
      0% {
          transform: translateX(0) translateZ(0) scaleY(1)
      }
      50% {
          transform: translateX(-25%) translateZ(0) scaleY(1)
      }
      100% {
          transform: translateX(-50%) translateZ(0) scaleY(1)
      }
  }
  
  .inner {
  	width: 100rpx;
  	height: 100rpx;
  	background: #aabdaf;
  	border-radius: 50%;
  	position: fixed;
  	left: 50%;
  	margin-left: -50rpx;
  	margin-top: 150rpx;
  	z-index: 10;
  	animation-duration: 2s;
  	-webkit-animation-name: state1;
  	animation-name: state1;
  	-webkit-animation-timing-function: linear;
  	animation-timing-function: linear;
  	-webkit-animation-iteration-count: infinite;
  	animation-iteration-count: infinite;
  	opacity: 0;
  }
  
  @keyframes state1 {
  	0% {
  		opacity: .5;
  		-webkit-transform: scale(1);
  		transform: scale(1);
  	}
  
  	100% {
  		opacity: 0;
  		-webkit-transform: scale(8);
  		transform: scale(8);
  	}
  }
  
  .avatar {
  	position: fixed;
  	left: 50%;
  	margin-left: -40rpx;
  	margin-top: 160rpx;
  	border-radius: 100%;
  	width: 80rpx;
  	height: 80rpx;
  	background-color: #a4b6a9;
  	z-index: 11; 
  }
  
  .outter {
  	animation-delay: 0.5s;
  }
  
  .outter1 {
  	animation-delay: 1s;
  }
  
  .outter2 {
  	animation-delay: 1.5s;
  }
  
  .planet {
  	width: 150px;
  	height: 150px;
  	border-radius: 50%;
  	background: #333;
  	position: absolute;
  	left: 50%;
  	top:105px;
  	margin: -75px 0 0 -75px;
  	overflow: hidden;
  	z-index: 2;
  }
  
  .planet_shadow {
  	position: absolute;
  	border-radius: 50%;
  	height: 100%;
  	width: 100%;
  	top: -40%;
  	right: -10%;
  	border: 35px solid rgba(0, 0, 0, .15);
  }
  
  .crater1,
  .crater2,
  .crater3,
  .crater4 {
  	position: absolute;
  	border-radius: 50%;
  	background: rgba(0, 0, 0, .3);
  	box-shadow: inset 3px 3px 0 rgba(0, 0, 0, .2);
  }
  
  .crater1 {
  	width: 20px;
  	height: 20px;
  	left: 25%;
  	top: 20%;
  }
  
  .crater2 {
  	width: 10px;
  	height: 10px;
  	left: 50%;
  	top: 20%;
  }
  
  .crater3 {
  	width: 15px;
  	height: 15px;
  	left: 30%;
  	top: 35%;
  }
  
  .crater4 {
  	width: 15px;
  	height: 15px;
  	left: 60%;
  	top: 45%;
  }
  
  .star {
  	display: block;
  	width: 5px;
  	height: 5px;
  	border-radius: 50%;
  	background: #FFF;
  	top: 100px;
  	left: 400px;
  	position: relative;
  	transform-origin: 100% 0;
  	animation: star-ani 6s infinite ease-out;
  	box-shadow: 0 0 5px 5px rgba(255, 255, 255, .3);
  	opacity: 0;
  	z-index: 2;
  }
  
  .star:after {
  	content: '';
  	display: block;
  	top: 0px;
  	left: 4px;
  	border: 0px solid #fff;
  	border-width: 0px 90px 2px 90px;
  	border-color: transparent transparent transparent rgba(255, 255, 255, .3);
  	transform: rotate(-45deg) translate3d(1px, 3px, 0);
  	box-shadow: 0 0 1px 0 rgba(255, 255, 255, .1);
  	transform-origin: 0% 100%;
  	animation: shooting-ani 3s infinite ease-out;
  }
  
  .pink {
  	top: 30px;
  	left: 395px;
  	background: #ff5a99;
  	animation-delay: 5s;
  	-webkit-animation-delay: 5s;
  	-moz-animation-delay: 5s;
  }
  
  .pink:after {
  	border-color: transparent transparent transparent #ff5a99;
  	animation-delay: 5s;
  	-webkit-animation-delay: 5s;
  	-moz-animation-delay: 5s;
  }
  
  .blue {
  	top: 35px;
  	left: 432px;
  	background: cyan;
  	animation-delay: 7s;
  	-webkit-animation-delay: 7s;
  	-moz-animation-delay: 7s;
  }
  
  .blue:after {
  	// border-color: transpareanimation-delay: 12s;
  	-webkit-animation-delay: 7s;
  	-moz-animation-delay: 7s;
  	animation-delay: 7s;
  }
  
  .yellow {
  	top: 50px;
  	left: 600px;
  	background: #ffcd5c;
  	animation-delay: 5.8s;
  }
  
  .yellow:after {
  	border-color: transparent transparent transparent #ffcd5c;
  	animation-delay: 5.8s;
  }
  
  @keyframes star-ani {
  	0% {
  		opacity: 0;
  		transform: scale(0) rotate(0) translate3d(0, 0, 0);
  		-webkit-transform: scale(0) rotate(0) translate3d(0, 0, 0);
  		-moz-transform: scale(0) rotate(0) translate3d(0, 0, 0);
  	}
  
  	50% {
  		opacity: 1;
  		transform: scale(1) rotate(0) translate3d(-200px, 200px, 0);
  		-webkit-transform: scale(1) rotate(0) translate3d(-200px, 200px, 0);
  		-moz-transform: scale(1) rotate(0) translate3d(-200px, 200px, 0);
  	}
  
  	100% {
  		opacity: 0;
  		transform: scale(1) rotate(0) translate3d(-300px, 300px, 0);
  		-webkit-transform: scale(1) rotate(0) translate3d(-300px, 300px, 0);
  		-moz-transform: scale(1) rotate(0) translate3d(-300px, 300px, 0);
  	}
  }
</style>
