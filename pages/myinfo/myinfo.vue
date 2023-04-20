<template>
	<view>
	<view class="container">
		<view class="avatar-myinfo">
			<image class="avatar" type="user" src="../../static/header.jpg" size="80"></image>
			<view class="myinfo">
				<text class="name"><b>{{userInfo.name}}</b></text>
				<text class="id">学号: {{userInfo.studentId}}</text>
			</view>
		</view>
	</view>
		<view class="badge">
			<text>五星徽章</text>
			<van-icon size="25" name="../../static/徽章.png" class="badge-icon" />
			<text class="number">1枚</text>
		</view>
		 
		  
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo:{
					name:"张三",
					studentId:"20040130213"
				},
				username: 'John'
			}
		}
	}
</script>

<style>
	.number{
		position: absolute;
		right: 3%;
	}
	.badge{
		display: flex;
		align-items: center;
		
		box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
		padding: 10px;
		margin: 5px;
		.badge-icon {
		  margin-left: 10rpx;
		  display: block;
		  font-size: 10px;
		  line-height: 30px;
		}
	}
	
	.name{
		margin: 3px;
		font-size: 20px;
	}
	.id{
		display: block;
		margin-top: 10px;
	}
	.container {
		display: flex;
		border-radius: 10px;
		box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
		padding: 20px;
		margin: 10px;
		display: flex;
		flex-direction: column;
	
	}

	.avatar {
		display: inline;
		width: 80px;
		height: 80px;
		border-radius: 50%;
		border: 2px solid #ccc;
		
	}
	.avatar-myinfo {
	  display: flex;
	  align-items: center;
	}
	
	.uni-input {
		font-size: 16px;
		color: #333;
		width: 100%;
		text-align: center;
	}
</style>