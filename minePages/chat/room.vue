<template>
  
    
</template>

<template>
	</template>
	
	
	<script>
	    export default {
			onTabItemTap(e) {
				 console.log(e)
			          if (e.index==2){
					uni.navigateTo({
						url:'/circlePages/edit?tab=1'
					})
					  }
					
			       },
	
	        onLoad(option) {
	        }
	    }
	</script>
