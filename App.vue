<script>
	
	export default {
		 onLaunch() {
		
		    uni.onBackPress(function() {
		
		      // 阻止返回操作
		
		      return false;
		
		    });
		
		},
		components:{
			
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>


<style lang="scss">
	@import url("vant/lib/index.css");
</style>