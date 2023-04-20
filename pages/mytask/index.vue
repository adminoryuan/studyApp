<template>
	<view>

		<van-tabs v-model="active">
			<van-tab title="基础任务单">
				<van-swipe-cell>
					<view class="goods-card">
						<text class="title"><b>{{title}}</b></text>
						<text class="van-multi-ellipsis--l2">{{desc}}</text>
					</view>

					<template #right>
						<van-button square text="预览" type="primary" class="delete-button" />
						<van-button square text="下载文件" type="danger" class="delete-button" />
					</template>
					<template #left>
						<van-button square text="上传成果" @click="handleUploadTask()" type="danger"
							class="delete-button" />
					</template>
				</van-swipe-cell>
			</van-tab>
			<van-tab title="进阶任务单">
				<van-empty description="暂无进阶任务单" />
			</van-tab>

		</van-tabs>
	</view>
</template>

<script>
	import {
		Image as VanImage
	} from 'vant';

	export default {
		components: {
			VanImage: VanImage,
		},
		data() {
			return {
				title: 'Hello',
				desc: ".求最大公约数时，先找出输入的两个数中小的那一个，从该数开始，依次-1，判断该数是否是两个数字的约数，找到第一个约数即返回，该约数即为最大公约数；",
				active: 0,
				items: [{
					text: '分组 1'
				}, {
					text: '分组 2'
				}],
			}
		},
		methods: {
			handleUploadTask() {
				uni.navigateTo({
					url: '/pages/mytask/uploadTask?title=c语言入门'
				})
			}
		},
		onLoad() {

		}
	}
</script>

<style>
	
	.goods-card {
		background-color: #fff;
		border-radius: 10px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
		padding: 20px; 
		margin: 1%;
		
		.title{
			color: antiquewhite;
		}
	}

	.delete-button {
		float: left;
		height: 100%;
	}
</style>