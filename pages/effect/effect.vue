<template>
	<view>
		
		<van-grid clickable  :border="true" :column-num="2">
		  <van-grid-item>
			  <van-grid-item icon="../../static/证书.png"  text="1+x职业技能等级证书"  />
		  </van-grid-item>
		  <van-grid-item>
			  <van-grid-item icon="../../static/比赛.png" text="学生技能大赛"  />
		  </van-grid-item>
		  <van-grid-item>
			  <van-grid-item icon="../../static/创新创业训练计划.png" text="创新创业比赛"  />
			  
		  </van-grid-item>
		  <van-grid-item>
			  <van-grid-item icon="../../static/劳动技能.png" text="劳动教育" />
			  
		  </van-grid-item>
		  <van-grid-item>
			  <van-grid-item icon="../../static/社会服务.png" text="社会服务" />
		  </van-grid-item>
		</van-grid>

	</view>
</template>

<script>
</script>

<style lang="scss">
	card{
		background-color: #555500;
		width: 40%;
		height: 10%;
	}

</style>