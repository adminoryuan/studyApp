<template>
	<view>
		<van-form @submit="onSubmit">
			<van-field v-model="taskInfo.title" name="" label="文章标题" placeholder="任务标题" />
			<van-field name="uploader" label="封面">
				<template #input>
					  <file-upload @upload-success="handleUploadSuccess"  />
				</template>
			</van-field>
			<van-field v-model="taskInfo.content" rows="10" autosize label="留言" type="textarea" placeholder="请输入留言" />
			<div style="margin: 16px;">
				<van-button round block type="info" native-type="submit">发布文章</van-button>
			</div>
		</van-form>
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