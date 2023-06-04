<template>
  <view class="article-detail">
    <view class="article-content">
      <view class="title">{{ articleInfo.title }}</view>
      <view class="author-info">
        <image src="@/static/header.jpg" class="author-avatar" />
        <view class="author-name">{{ articleInfo.authorName }}</view>
        <view class="publish-time">{{ formatDate(articleInfo.publishTime) }}</view>
      </view>
      <view class="content">{{ articleInfo.content }}</view>
    </view>
    <view class="comment-section">
      <!-- <view class="comment-header">评论区</view>
      <view v-for="comment in article.comments" :key="comment.id" class="comment-item">
        <image :src="comment.user.avatar" class="comment-avatar" />
        <view class="comment-info">
          <view class="comment-username">{{ comment.user.name }}</view>
          <view class="comment-content">{{ comment.content }}</view>
        </view>
      </view> -->
     <!-- <view class="comment-form">
        <textarea v-model="newComment" placeholder="发表评论"></textarea>
        <button @click="publishComment">发表</button>
      </view>
    </view> -->
	</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
	  articleId:undefined,
	  articleInfo:{},
      article: {
        title: '文章标题',
        content: '文章内容',
        author: {
          name: '作者名字',
          avatar: '@/static/author-avatar.png' // 作者头像路径
        },
        publishTime: 1622586784000, // 时间戳
        comments: [
          {
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
	articlesInfo(){
		this.$request('/articles/'+this.articleId,"get").then(res=>{
			this.articleInfo=res.data
		})
	},
	onLoad(e){
		this.articleId=e.id
		this.articlesInfo()
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
