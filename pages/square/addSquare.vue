<template>
	<view>
		<van-form @submit="onSubmit">
			<van-field v-model="taskInfo.title" name="" label="文章标题" placeholder="任务标题" />
			<van-field name="uploader" style="height:300rpx;" label="封面">
				<template #input>
					<file-upload @upload-success="handleUploadSuccess"  />
				</template>
			</van-field>
			<van-field v-model="taskInfo.content" rows="10" autosize label="内容" type="textarea" placeholder="请输入内容" />
			<view style="position:fixed;bottom:50rpx;width:90%;margin: 16px;">
				<van-button round block type="info" native-type="submit">发布文章</van-button>
			</view>
		</van-form>
		<roleTarbar></roleTarbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				taskInfo: {
					title:undefined,
					content:undefined,
					coverImage:undefined
				}
			};
		},
		methods: {
			onSubmit() {
				if(!this.taskInfo.title || this.taskInfo.title==''){
					uni.showToast({
						title:'请填写标题'
					})
					return;
				}
				if(!this.taskInfo.content==''){
					uni.showToast({
						title:'请填写内容'
					})
					return;
				}
				this.$request('/articles',"post",this.taskInfo).then(res=>{
					uni.showToast({
						title:'发布成功'
					})
					uni.navigateBack(0)
				})
			},
			handleUploadSuccess(fileUrl) {
				console.log('File upload successful. URL:', fileUrl);
				 this.taskInfo.coverImage=fileUrl
			      // Do something with the file URL
			},
			formatDate(timestamp) {
				const date = new Date(timestamp);
				const year = date.getFullYear();
				const month = date.getMonth() + 1;
				const day = date.getDate();
				const formattedDate = `${year}/${month}/${day}`;
				return formattedDate;
			}
		}
	};
</script>

<style>
	.article-list {
		margin: 20px;
	}

	h2 {
		font-size: 20px;
		font-weight: bold;
		margin-bottom: 10px;
	}

	.article-item {
		margin-bottom: 20px;
		border: 1px solid #ccc;
		padding: 10px;
	}

	.article-info {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}

	.author-avatar {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		margin-right: 10px;
	}

	.author-name {
		font-weight: bold;
	}

	.publish-time {
		font-size: 12px;
		color: #999;
	}

	.article-content h3 {
		font-size: 16px;
		font-weight: bold;
		margin-bottom: 5px;
	}

	.article-content p {
		font-size: 14px;
		line-height: 1.5;
	}
</style>