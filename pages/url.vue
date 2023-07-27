<template>
    <view>
<tn-nav-bar fixed :isBack="true">
		外部网页			
		</tn-nav-bar>
        <web-view :webview-styles="webviewStyles" :src="url" ></web-view>

    </view>
</template>

<script>
    export default {
        data() {
            return {
				title:'',
				url:'',		
                webviewStyles: {
                    progress: {
                        color: '#00aaff',				       
                    }
                }
            }
        }
		,
		
		onLoad(option) {
		
		if (option.url){
		this.url=option.url		
		}		
		
		
		
		 uni.setNavigationBarTitle({
			　　title:'查快递'
			  })
	
		}
		
    }
</script>

<style>
.top{
	margin-top: 80upx;	
}
</style>