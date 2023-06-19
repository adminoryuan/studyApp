<template>
	<view>
		<view class="article-list">
			<view v-for="item in articles" :key="item.id" class="article-item">
				<view class="article-info" @click="toDetils(item.id)">
					<image src="@/static/header.jpg" class="avatar" />
					<view class="article-title">{{ item.anthorName }}</view>
					<text class="publish-time">{{ item.createDate }}</text>
				</view>

				<view class="article-content" @click="toDetils(item.id)">
					<view class="title"> {{ truncateContent(item.title) }}</view>
				</view>
				
			</view>
		</view>
		
		<roleTarbar></roleTarbar>
		
	</view>

</template>

<script>
	import tarbar from '../../componetns/tarbar.vue'

	export default {

		components: {
			roleTarbar: tarbar
		},
		data() {
			return {
				articles: []
			};
		},
		methods: {
			formatLikeImg(checkd) {
				if (checkd) {
					return require('@/static/tolike.png')
				}	
				return require('@/static/like.png')
			},
			
			toDetils(id) {
				console.log(id)
				uni.navigateTo({
					url: 'knowledgeInfo?id=' + id
				})
			},
			formatConver(coverImage) {
				if (coverImage) {
					return coverImage
				}
				return ""
			},
			truncateContent(content) {
				const truncatedContent = content.replace(/(\r\n|\n|\r)/gm, '').trim();
				if (truncatedContent.length > 3 * 20) {
					return truncatedContent.slice(0, 3 * 20) + '...';
				}
				return truncatedContent;
			},
			list() {
				this.$request('/system/base/list', "get").then(res => {
					this.articles = res.rows
					uni.hideLoading()
				})
			},
			onLoad() {
				uni.showLoading({
					title: '正在加载'
				})
				this.list()
			}
		}
	};
</script>

<style>
	.article-list {
		padding: 10rpx;
		height: 100%;
		overflow-y: hidden;
		overflow-x: hidden;
	}

	.article-item {
		background-color: #fff;
		border-radius: 5px;
		margin-bottom: 20px;
		padding: 10px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.article-info {
		margin-bottom: 10px;
		display: flex;
		align-items: center;
	}

	.article-title {
		font-size: 18px;
		font-weight: bold;
		margin-left: 10px;
	}

	.article-content {
		font-size: 14px;
		color: #666;
		line-height: 1;
		height: 3em;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		/* 显示3行 */
		-webkit-box-orient: vertical;
	}

	.article-footer {
		display: flex;

		align-items: center;
		justify-content: space-between;
		margin-top: 10px;
	}

	.meta-icon {
		width: 16px;
		height: 16px;
		margin-right: 4px;
	}

	.meta-text {
		font-size: 14px;
		color: #666;
	}

	.like-item {
		display: flex;
		align-items: center;
	}

	.like-comment {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

	.title {
		max-height: 10%;
		font-weight: bold;
		font-size: 14px;
		color: #666;
	}

	.publish-time {
		font-size: 14px;
		color: #999;
		position: absolute;
		right: 5%;
	}

	.avatar {
		width: 30px;
		height: 30px;
		border-radius: 50%;
	}

	.floating-button {
		position: fixed;
		bottom: 20%;
		right: 20px;
		width: 60px;
		height: 60px;
		background-color: #fff;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
		z-index: 999;
		cursor: pointer;
	}

	.floating-icon {
		width: 30px;
		height: 30px;
	}

	.cover-image {
		width: 100%;
		height: 80%;
		/* 调整封面图片的高度 */
		border-radius: 5px;
		object-fit: cover;
		/* 修改封面图片的显示方式为覆盖 */
	}
</style>