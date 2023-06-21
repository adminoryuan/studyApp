<template>
	<view class="article-detail">
		<view class="article-content">
			<view class="title">{{ articleInfo.title }}</view>
			<view class="author-info">
				<image src="@/static/header.jpg" class="author-avatar" />
				<view class="author-name">{{ articleInfo.authorName }}</view>
				<view class="publish-time">{{ formatDate(articleInfo.publishTime) }}</view>
			</view>
			<view class="content" v-html="articleInfo.content"></view>
			<hb-comment ref="hbComment" @add="add" @del="del" @like="like" @focusOn="focusOn" :deleteTip="'确认删除？'"
				:cmData="commentData" v-if="commentData"></hb-comment>

		</view>

		<roleTarbar></roleTarbar>
	</view>
</template>

<script>
	import {BASE_URL} from '@/request.js'
	export default {
		data() {
			return {
				articleId: undefined,
				commentData: {
					comment: [],
					commentSize: 0,
					readNumer: 0
				},
				articleInfo: {},
				article: {
					title: '文章标题',
					content: '文章内容',
					author: {
						name: '作者名字',
						avatar: '@/static/author-avatar.png' // 作者头像路径
					},
					publishTime: 1622586784000, // 时间戳
					comments: [{
							id: 1,
							content: '评论内容1',
							user: {
								name: '评论者1',
								avatar: '@/static/user1-avatar.png' // 评论者头像路径
							}
						},
						{
							id: 2,
							content: '评论内容2',
							user: {
								name: '评论者2',
								avatar: '@/static/user2-avatar.png' // 评论者头像路径
							}
						},
						// 添加更多评论...
					]
				},
				newComment: ''
			};
		},
		methods: {
			focusOn() {

			},
			commentList() {
				this.$request('/system/comments/get-article-comment/' + this.articleId, "get").then(res => {
					this.commentData = {
						"readNumer": 193,
						"commentSize": res.data.length,
						"comment": this.getTree(res.data)
					}
				})

			},
			add(d) {
				this.$request('/system/comments', "post", {
					articleId: this.articleId,
					parentId: d.pId,
					commentText: d.content
				}).then(res => {
					uni.showToast({
						title: '评论成功！'
					})
					this.commentList()
				})
			},
			del(id) {
				this.$request('/system/comments/' + id, "delete").then(res => {
					uni.showToast({
						title: '删除成功！'
					})
					this.commentList()
				})

			},
			formatDate(timestamp) {
				const date = new Date(timestamp);
				const year = date.getFullYear();
				const month = date.getMonth() + 1;
				const day = date.getDate();
				const hour = date.getHours();
				const minute = date.getMinutes();
				const formattedDate = `${year}/${month}/${day} ${hour}:${minute}`;
				return formattedDate;
			},
			publishComment() {
				if (this.newComment.trim() !== '') {
					const newComment = {
						id: this.article.comments.length + 1,
						content: this.newComment,
						user: {
							name: '当前用户',
							avatar: '@/static/current-user-avatar.png' // 当前用户头像路径
						}
					};
					this.article.comments.push(newComment);
					this.newComment = '';
				}
			},
			articlesInfo() {
				uni.showLoading({
					title: '正在加载！'
				})
				this.$request('/articles/' + this.articleId, "get").then(res => {
					
					this.articleInfo=res.data
					this.articleInfo.content = this.articleInfo.content.replace(/\/dev-api/g, BASE_URL);
					
					console.log(this.articleInfo.content)
					
					
					this.articleInfo.content = this.articleInfo.content.replace(/\<img/gi, '<img style="width: 100%;height:auto;"')
					// this.articleInfo.content = this.articleInfo.content.replace(/\<p/gi, '<p style="line-height: 150%;"')
					uni.hideLoading()
				})
			},
			getTree(data) {
				let result = [];
				let map = {};
				data.forEach(item => {
					map[item.id] = item;
				});
				data.forEach(item => {
					let parent = map[item.parentId];
					if (parent) {
						(parent.children || (parent.children = [])).push(item);
					} else {
						result.push(item);
					}
				});
				return result;
			},
			onLoad(e) {
				if (!e.id) {
					uni.navigateTo({
						url: '/pages/square/square'
					})
				}
				this.articleId = e.id
				this.articlesInfo()
				this.commentList()
			}
		}
	};
</script>

<style>
	.article-detail {
		margin: 20px;
		overflow-x: hidden;
	}

	.title {
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 10px;
	}

	.author-info {
		pointer-events: none;
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
		margin-right: 10px;
	}

	.publish-time {
		font-size: 12px;
		color: #999;
	}

	.content {
		font-size: 14px;
		line-height: 1.5;
		padding-bottom: 40rpx;
	}

	.comment-section {
		margin-top: 20px;
	}

	.comment-header {
		font-size: 16px;
		font-weight: bold;
		margin-bottom: 10px;
	}

	.comment-item {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}

	.comment-avatar {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		margin-right: 5px;
	}

	.comment-info {
		display: flex;
		flex-direction: column;
	}

	.comment-username {
		font-weight: bold;
	}

	.comment-content {
		margin-top: 5px;
	}

	.comment-form {
		margin-top: 20px;
	}

	.comment-form textarea {
		width: 100%;
		height: 80px;
		resize: none;
		margin-bottom: 10px;
	}

	.comment-form button {
		padding: 5px 10px;
		background-color: #f0f0f0;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}
</style>