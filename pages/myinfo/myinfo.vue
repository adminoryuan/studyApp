<template>
	<view>
		<view class="container">
			<view class="avatar-myinfo">
				<image class="avatar" type="user" src="../../static/header.jpg" size="80"></image>
				<view class="myinfo">
					<text class="name"><b>{{userInfo.nickName}}</b></text>
					<text class="id">学号: {{userInfo.studentNumber}}</text>
				</view>
				<image class="logout" @click="logout" type="user" src="../../static/logout.png" size="80"></image>

			</view>


		</view>
		<view class="bedges">
			<view class="badge" @click="toKnowLedge">
				<text>知识库</text>
			</view>
		</view>
		<view class="bedges">
			<view class="badge" v-for="item in badgeList">
				<text>{{item.badgeName}}</text>
				<van-icon size="40"  :name="fomartImg(item.badgeImage)" class="badge-icon" />
			</view>

		</view>
		<roleTarbar></roleTarbar>

	</view>
</template>

<script>
	import tarbar from '../../componetns/tarbar.vue'
	import {
		BASE_URL
	} from '@/request.js'
	export default {
		components: {
			roleTarbar: tarbar
		},
		data() {
			return {
				badgeList: [],
				userInfo: {
					name: "张三",
					studentId: "20040130213"
				},
				username: 'John'
			}
		},
		onReady() {
			const a = document.getElementsByClassName('uni-page-head-hd')[0]
			a.style.display = 'none';
		},
		mounted() {
			this.userInfo = uni.getStorageSync('userInfo')
			console.log(this.userInfo)
			this.selectBadgs()
		},
		methods: {
			toKnowLedge(){
				uni.redirectTo({
					url:'/pages/knowledge/index'
				})
				uni.navigateTo({
					
				})
			},
			fomartImg(src) {
				return BASE_URL + src
			},
			logout() {
				uni.reLaunch({
					url: '/pages/login/login'
				})
			},
			selectBadgs() {
				this.$request('/study/records/my-badge', "get").then(res => {
					this.badgeList = res.data
					console.log(res)
				})
			}
		}
	}
</script>

<style>
	.number {
		position: absolute;
		right: 3%;
	}

	.badge {
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

	.bedges {
		height: 40%;
		overflow-y: auto;
	}

	.name {
		margin: 3px;
		font-size: 20px;
	}

	.id {
		display: block;
		margin-top: 10px;
	}

	.container {
		display: flex;
		border-radius: 1px;
		box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
		padding: 20px;
		margin: 1%;
		display: flex;
		flex-direction: column;

	}

	.logout {
		position: absolute;

		width: 50px;
		height: 50px;
		right: 0;
	}

	.avatar {
		display: inline;
		width: 80px;
		height: 80px;
		border: 1px solid #ccc;

	}

	.myinfo {
		margin-left: 5%;
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