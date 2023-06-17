<template>
	<view>
		<view class="article-list">
			<view v-for="article in articles" :key="article.id" class="article-item">
				<view class="article-info" @click="toDetils(article.id)">
					<image src="@/static/header.jpg" class="avatar" />
					<view class="article-title">{{ article.authorName }}</view>
					<text class="publish-time">{{ article.publishTime }}</text>
				</view>

				<view class="article-content">
					<image width="100%" mode="scaleToFill"
						:src="article.coverImage!=''?'http://localhost:8081'+article.coverImage:'@/static/header.jpg'"
						class="cover-image" />
					<view class="title"> {{ truncateContent(article.title) }}</view>
				</view>
				<view class="article-footer">
					<view class="like-comment">
						<view class="like-item" @click="like(article)">

							<image :src="formatLikeImg(article.isiLke)" class="meta-icon" />
							<text class="meta-text">{{ article.likeCnt }}</text>
						</view>
						<view class="like-item" click="like(article)">
							<image src="@/static/coment.png" class="meta-icon" />
							<text class="meta-text">{{ article.commentCnt }}</text>
						</view>
						<view class="like-item" @click="share(article)">
							<image src="@/static/navtion.png" class="meta-icon" />
							<text class="meta-text"></text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="floating-button" @click="publishArticle">
			<image src="@/static/publish.png" class="floating-icon" />
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
				articles: [{
						id: 1,
						author: '张三',
						title: '从0实现rpc框架',
						likes: 10,
						comments: 5,
						forward: 0,
						publishTime: "2023/5/5", // 时间戳
						avatar: '@/static/avatar1.png', // 头像图片路径
						cover: '@/static/747.jpg' // 封面图片路径
					},
					{
						id: 2,
						author: '李四',
						title: '从0实现vue框架',
						likes: 15,
						comments: 8,
						forward: 0,
						publishTime: "2023/5/6 20:12:1", // 时间戳
						avatar: '@/static/avatar2.png', // 头像图片路径
						cover: '@/static/747.jpg' // 封面图片路径
					},
					// 添加更多文章对象...
				]
			};
		},
		methods: {
			formatLikeImg(checkd) {
				if (checkd) {
					return require('@/static/tolike.png')
				}
				return require('@/static/like.png')
			},
			like(item) {
				uni.showLoading({
					title: '等待响应'
				})
				this.$request('/system/likes/like', "post", {
					"blogId": item.id
				}).then(res => {
					this.list()
					uni.hideLoading()
				})
				console.log(item)
			},
			share(item) {
				uni.share({
					title: item.title,
					content: item.title,
					href: 'squareDetils?id=' + item.id,
					success() {
						console.log('转发成功');
					},
					fail(err) {
						console.error('转发失败', err);
					}
				});

			},
			toDetils(id) {
				uni.navigateTo({
					url: 'squareDetils?id=' + id
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
			publishArticle() {
				// 处理发布文章的逻辑
				uni.navigateTo({
					url: '/pages/square/addSquare'
				})
			},
			list() {
				this.$request('/articles/list', "get").then(res => {
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
		padding: 10px;
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
		height: 10em;
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
		right: 1%;
	}

	.avatar {
		width: 30px;
		height: 30px;
		border-radius: 50%;
	}

	.floating-button {
		position: fixed;
		bottom: 20px;
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