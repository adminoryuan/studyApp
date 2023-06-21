<template>
	<view>
		<view class="article-list">
			<view v-for="article in articles" :key="article.id" class="article-item">
				<view class="article-info" >
					<image :src="article.authorImg" @click="toDetils(article.id)" class="avatar" />
					<view class="article-title">{{ article.authorName }}</view>
					<text class="publish-time">{{ article.publishTime }}</text>
					<view @click="delSquare(article.id)" v-if="article.owner" style="position: absolute; right: 2%;"><svg t="1687361201936" class="meta-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2666" width="128" height="128"><path d="M398.753773 834.390571c-10.326183 0-18.696828-8.370645-18.696828-18.696828L380.056945 328.657298c0-10.326183 8.370645-18.696828 18.696828-18.696828s18.696828 8.370645 18.696828 18.696828l0 487.036445C417.4506 826.019926 409.079956 834.390571 398.753773 834.390571z" fill="#FF9000" p-id="2667"></path><path d="M633.890095 834.390571c-10.326183 0-18.696828-8.370645-18.696828-18.696828L615.193267 328.657298c0-10.326183 8.370645-18.696828 18.696828-18.696828s18.696828 8.370645 18.696828 18.696828l0 487.036445C652.586922 826.019926 644.216277 834.390571 633.890095 834.390571z" fill="#FF9000" p-id="2668"></path><path d="M710.574614 985.684346c-4.027733 0-8.083096-1.295506-11.500938-3.967358-26.988678-21.096481-80.083943-25.731034-98.264001-25.735128l-27.973098 0c-0.036839 0-0.073678 0-0.109494 0l-39.437198-0.233314L233.780441 955.748546c-0.335644 0-0.670266-0.00921-1.00591-0.026606-22.538319-1.214664-35.687804-11.190877-42.74964-19.345604-15.238053-17.596773-14.937201-40.310078-14.603603-45.898353L175.421288 248.768807c0-10.326183 8.370645-18.696828 18.696828-18.696828s18.696828 8.370645 18.696828 18.696828l0 642.355907c0 0.660032 0 0.968048-0.066515 1.597381-0.212848 3.461845 0.393973 13.353123 5.653767 19.300578 3.352351 3.791349 8.56405 5.863545 15.921621 6.332219l299.029514 0c0.036839 0 0.073678 0 0.109494 0l39.437198 0.233314 27.913746 0c3.199878 0.001023 78.735226 0.404206 121.287367 33.667797 8.135284 6.359848 9.575076 18.10945 3.216251 26.244734C721.630415 983.217155 716.130144 985.684346 710.574614 985.684346z" fill="#FF9000" p-id="2669"></path><path d="M798.810215 955.980837l-24.01495 0c-10.326183 0-18.696828-8.370645-18.696828-18.696828s8.370645-18.696828 18.696828-18.696828l21.841447 0c0.64059-0.102331 1.287319-0.170892 1.937119-0.205685 7.676843-0.413416 13.07069-2.534729 16.490579-6.483668 6.093788-7.039323 5.560646-18.983353 5.550413-19.097964-0.050142-0.556679-0.074701-1.116427-0.074701-1.676176L820.540122 248.768807c0-10.326183 8.370645-18.696828 18.696828-18.696828l49.27117 0c0.075725 0 0.12075 0 0.172939-0.00307 0.047072-0.00307-0.020466-0.007163 0.063445-0.002047 6.862291-0.254803 6.854105-4.354168 6.847965-7.356548l0-92.054579c0-3.504824-2.849908-6.356778-6.352685-6.356778l-214.925001 0c-5.02034 0.021489-42.351574-0.751107-71.783907-32.649608-0.141216-0.152473-0.278339-0.306992-0.413416-0.463558-9.723455-11.266601-23.842011-17.33276-41.968857-18.031679l-86.940095 0c-18.124799 0.698918-32.240285 6.764054-41.961694 18.030655-0.1361 0.157589-0.274246 0.312108-0.415462 0.464581-29.434379 31.898501-66.768683 32.68133-71.785953 32.649608L144.119375 124.298957c-3.504824 0-6.355755 2.851954-6.355755 6.356778l0 92.015693c-0.00614 3.038196-0.013303 7.140631 6.852058 7.394411 0.086981-0.00614 0.017396-0.001023 0.062422 0.002047 0.052189 0.002047 0.095167 0.002047 0.172939 0.00307l49.2681 0c10.326183 0 18.696828 8.370645 18.696828 18.696828s-8.370645 18.696828-18.696828 18.696828l-49.134047 0c-3.726881 0.057305-19.807115-0.533143-32.124651-12.625552-5.714142-5.610788-12.521175-15.752776-12.489452-32.202423l0-91.980901c0-24.12342 19.62599-43.750433 43.74941-43.750433l214.997656 0c0.289596 0 0.270153-0.005117 0.499373 0.005117 1.973958 0 24.966625-0.446162 43.546795-20.420075 11.642155-13.380752 33.026184-29.455869 69.042469-30.719652 0.218988-0.008186 0.436952-0.01228 0.655939-0.01228l87.62878 0c0.218988 0 0.436952 0.004093 0.655939 0.01228 36.020378 1.263783 57.405431 17.337877 69.049632 30.718629 18.577101 19.971867 41.568744 20.420075 43.545772 20.420075 0.230244-0.011256 0.210801-0.005117 0.499373-0.005117l214.998679 0c24.121374 0 43.745317 19.627013 43.745317 43.750433l0 92.015693c0.032746 16.412808-6.771217 26.554796-12.486382 32.166607-12.317537 12.094456-28.389584 12.67774-32.124651 12.626575l-30.441313 0 0 623.010303c0.334621 5.586229 0.638543 28.300556-14.59951 45.899376-6.843872 7.904017-19.404955 17.519002-40.690748 19.208481C801.38383 955.847807 800.09958 955.980837 798.810215 955.980837z" fill="#FF9000" p-id="2670"></path></svg></view>
				</view>

				<view class="article-content" @click="toDetils(article.id)">
					<image width="100%" mode="scaleToFill" :src="article.coverImage" class="cover-image" />
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
			<van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" @select="onSelect" />
		</view>
		<view class="floating-button" @click="publishArticle">
			<image src="@/static/Send message.png" class="floating-icon" />
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
		onReady() {
			const a = document.getElementsByClassName('uni-page-head-hd')[0]
			a.style.display = 'none';
		},
		data() {
			return {
				showShare: false,
				options: [{
						name: '微信',
						icon: 'wechat'
					},
					{
						name: '微博',
						icon: 'weibo'
					}
				],
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
			onSelect(option) {
			      console.log(option)
			      this.showShare = false;
			},
			like(item) {
				uni.showLoading({
					title: '等待响应',
					mask: true
				})
				this.$request('/system/likes/like', "post", {
					"blogId": item.id
				}).then(res => {
					this.list()
					uni.hideLoading()
				})
				console.log(item)
			},
			delSquare(id){
				this.$request('/articles/'+id, "delete").then(res => {
					this.list()
					uni.showToast({
						title:'删除成功'
					})
				})
			},
			share(item) {
				this.showShare=true

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
		padding: 10rpx;
		padding-bottom: 100rpx;
		height: 80%;
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
		font-size: 9px;
		color: #999;
		margin-left: 1%;
		/* position: absolute;
		right: 1%; */
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