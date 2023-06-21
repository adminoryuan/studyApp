<template>
	<view>
		<u-toast ref="uToast" />
		<!-- 显示父评论的所有子评论 -->
		<view class="vfor" v-for="(item,index) in commentList" :key="index">
			<view class="item_wrap">
				<view class="left">
					<view class="avatar">
						<u-image width="58rpx" height="58rpx" shape="circle" :src="item.avatar"></u-image>
					</view>
					<view class="nick">
						<text>{{item.nickname}}</text>
					</view>
					<view class="ptime">
						<text>{{item.createTime}}</text>
					</view>
				</view>
			</view> 
			<view class="content" @click="reply(item.nickname,item.id,item.uid)" >
				<view class="reply_to">@{{item.nickname}}:</view>
				<view class="reply_content">{{item.content}}</view>
			</view>
			<tree-comment :commentList="item.commentChildren" :nid="item.nid" :uid="uid"></tree-comment>
		</view>
		<u-mask :show="isInput" @click="maskClick">
			<view class="commentInputView">
				<view class="inputView">
					<u-input v-model="wContent" clearable="false" :focus="focus" confirm-type="评论" @confirm="writePComment"
					 :placeholder="'回复'+nickname" />
				</view>
			</view>
		</u-mask>
		<u-action-sheet :list="myList" v-model="mySheetShow" :cancel-btn="true" @click="mySheetClick()"></u-action-sheet>
		<u-action-sheet :list="otherList" v-model="otherSheetShow" :cancel-btn="true" @click="otherSheetClick()"></u-action-sheet>
	</view>
</template>
<script>
	import treeComment from '../../component/treeComment/treeComment.vue'
	var time = require('../../../common/datetime.js');
	export default {
		components: {
			treeComment
		},
		props: {
			commentList: Array,
			nid: String,
			uid:String
		},
		data() {
			return {
				wContent: '',
				isInput: 0,
				nickname: '',
				focus: false,
				cid: '',
				myList: [{
					text: '回复'
				}, {
					text: '删除'
				}],
				otherList: [{
					text: '回复'
				}, {
					text: '举报'
				}],
				mySheetShow: false,
				otherSheetShow: false
			}
		},
		methods: {
			// 点击用户评论传递参数
			reply(nickname, cid,uid) {
				this.nickname = nickname;
				this.cid = cid; 
				if (uid === this.uid) {
					this.mySheetShow = true;
				} else {
					this.otherSheetShow = true;
				}
			},
			// 点击用户评论弹出遮罩
			maskClick() {
				this.isInput = false;
				this.focus = false;
			},
			// 回复父级评论
			writePComment() {
				this.$u.api.writeComment({
					nid: this.nid,
					pid: this.cid,
					content: this.wContent
				}).then(res => {
					if (res.msg === '评论成功') {
						this.wContent = '';
						this.isInput = false;
						this.$refs.uToast.show({
							title: '评论成功',
							type: 'success'
						})
						this.$emit('updatePage');
					} else {
						this.$refs.uToast.show({
							title: '评论出错，请登录',
							type: 'warning'
						})
					}
				})
			},
			// 点击操作菜单
			mySheetClick(index){
				if(index===0){
					this.isInput = 1;
					this.focus = 1;
				}else if(index===1){
					this.$u.api.deleteNewsCommentById({
						id:this.cid
					}).then(res => {
						if(res.msg==='删除成功'){
							this.$refs.uToast.show({
								title: '删除成功',
								type: 'success'
							})
							this.$emit('updatePage');
						}
					})
				}
			},
			otherSheetClick(index){
				if(index===0){
					this.isInput = 1;
					this.focus = 1;
				}else if(index===1){
					
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.vfor {
		.item_wrap {
			display: flex;
			justify-content: space-between;
			margin-top: 20rpx;

			.left {
				display: flex;
				align-items: center;

				.avatar {}

				.nick {
					text {
						font-weight: bold;
						font-size: 37rpx;
						margin-left: 20rpx;
					}
				}

				.ptime {
					text {
						font-size: 27rpx;
						margin-left: 10rpx;
						color: #949494;
					}
				}
			}
		}

		.content {
			margin-left: 82rpx;
			font-size: 33rpx;
			width: 580rpx;
			display: flex;
			align-items: center;
			.reply_to{
				color: #45aaf2;
				margin-right: 10rpx;
			}
			.reply_content{
				
			}
		}
	}

	.commentInputView {
		width: 750rpx;
		height: 100rpx;
		background-color: #fff;
		border-top: 1rpx solid #eee;
		position: fixed;
		bottom: 0;
		display: flex;
		align-items: center;

		.inputView {
			margin: 30rpx 20rpx;
			background-color: #f4f4f4;
			height: 60rpx;
			width: 650rpx;
			border-radius: 30rpx;
			padding-left: 50rpx !important;
		}
	}
</style>

