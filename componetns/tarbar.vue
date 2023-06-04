<template>
	<view> 
		<van-tabbar  :height="84" v-model="active" @change="onChange">
			  <van-tabbar-item   v-for="(item,index) in tabBarList" :icon="item.iconPath" > {{item.text}}</van-tabbar-item>
		</van-tabbar>
	</view>
</template>
<script>
	
	export default {
		props:{
			currentPage:{
				type:Number,
				default:2
			},
		},
		data() {
			return {
				active:'',
				borderTop: true,
				inactiveColor: '#909399',
				activeColor: '#328CFA',
				tabBarList:uni.getStorageSync('tabBarList')
			}
		},
		onLoad() {
			this.active=props.currentPage
		},
		
		methods:{
			onChange(event) {
				console.log(this.active)
				console.log(this.tabBarList[event].pagePath)
				uni.redirectTo({
				 	url:this.tabBarList[event].pagePath
				 })
			},
		}
	}
</script>
