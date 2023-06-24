<template>
	<view class="page">
		<van-empty description="暂未上传证书" v-if="effectList.length==0" />

		<view class="list">
			<view class="efferCard" v-for="item in effectList">
				<image src="@/static/header.jpg" class="avatar" />
				<text class="name"><b>{{item.studentName}}</b></text>
				<van-tag type="primary"
					style="margin-left: 10rpx;">{{getDictLabel('study_award_type',item.awardType)}}</van-tag>
				<!-- <text  class="time">{{item.awardTime}}</text> -->
				<svg @click="selectItem(item)" t="1687361741470" class="icon" viewBox="0 0 1024 1024" version="1.1"
					xmlns="http://www.w3.org/2000/svg" p-id="3795" width="128" height="128">
					<path
						d="M200.753 408.251c-57.062 0-103.749 46.687-103.749 103.749s46.687 103.749 103.749 103.749S304.502 569.062 304.502 512s-46.687-103.749-103.749-103.749z m622.494 0c-57.062 0-103.749 46.687-103.749 103.749s46.687 103.749 103.749 103.749S926.996 569.062 926.996 512s-46.687-103.749-103.749-103.749z m-311.247 0c-57.062 0-103.749 46.687-103.749 103.749S454.938 615.749 512 615.749 615.749 569.062 615.749 512 569.062 408.251 512 408.251z"
						fill="#515151" p-id="3796"></path>
				</svg>
				<view class="remake" style="font-weight: 1000;">标题 :{{item.title}}</view>
				<view class="remake">描述 :{{item.description}}</view>
				<!-- <view class="opt">
					<van-button type="info" @click="toDetils(item.certificateUrl)">查看</van-button>
					<van-button v-if="item.appove!=0" type="info" @click="showAppove(item.id)">查看评分</van-button>
				</view> -->
			</view>
		</view>

		<van-popup v-model="optShow" round position="bottom" :style="{ height: '25%' }">
			<view class="content">
				<text class="title">操作</text>
			</view>
			<view class="opt">
				<view class="item">
					<view class="icon-wrapper">
						<image class="opticon" src="../../static/view.png" @click="toDetils(select.certificateUrl)">
						</image>
					</view>
					<text class="txt">查看证书</text>
				</view>

				<view class="item" v-if="select.appove!=0">
					<view class="icon-wrapper">
						<image class="opticon" src="../../static/pf.png" @click="showAppove(select.id)">
						</image>
					</view>
					<text class="txt">评分</text>
				</view>
			</view>

		</van-popup>

		<van-popup v-model="scoreShow" @close="close" style="width: 80%;height: 40%;" closeable>
			<van-cell-group>
				<van-field :disabled="true" v-model="scoreInfo.studentName" label="标题" placeholder="请输入用户名" />
				<van-field :disabled="true" v-model="scoreInfo.effectName" label="获奖类型" placeholder="获奖类型" />
				<van-field v-model="scoreInfo.score" label="评分" type="number" placeholder="请输入评分" />
				<van-field v-model="scoreInfo.remake" label="备注" type="textarea" placeholder="请输入备注" />
			</van-cell-group>
			<view>
				<van-button @click="handleScore" style="width: 80%;margin-left: 10%" type="primary">确认评分</van-button>
			</view>
		</van-popup>

		<van-popup v-model="appoveShow" @close="close" style="width: 80%;height: 40%;" closeable>
			<van-cell-group>
				<van-field :disabled="true" v-model="appoveInfo.title" label="教师" placeholder="请输入用户名" />
				<van-field :disabled="true" v-model="appoveInfo.tearchName" label="评分教师" placeholder="" />
				<van-field :disabled="true" v-model="appoveInfo.score" label="评分" type="number" placeholder="请输入评分" />
				<van-field :disabled="true" v-model="appoveInfo.comment" label="备注" type="textarea"
					placeholder="请输入备注" />
			</van-cell-group>

		</van-popup>

		<van-popup v-model="show">

		</van-popup>
		<roleTarbar></roleTarbar>
	</view>
</template>

<script>
	export default ({
		data() {
			return {
				value: '',
				optShow: false,
				show: false,
				currentPage: 1,
				appoveShow: false,
				scoreShow: false,
				select: {
					appove: 0,
					avatar: "avatar/1683539501092admin.png",
					awardTime: "2023-05-25",
					awardType: "1",
					certificateType: "2",
					certificateUrl: "Student/袁浩.pdf",
					createBy: null,
					createTime: null,
					createdAt: "2023-05-11",
					createdBy: "2",
					description: "111",
					id: 7,
					remark: null,
					studentName: "学生2",
					title: "职业技能等级证书",
					updateBy: null,
					updateTime: null,
					updatedAt: null,
					updatedBy: null,
					userid: 102
				},
				appoveInfo: {},
				scoreInfo: {
					name: undefined,
					certificateId: undefined,
					effectType: undefined,
				},
				dictConfig: {
					study_award_type: []
				},
				queryParms: {
					awardType: undefined,
				},
				effectList: []
			}
		},
		methods: {
			selectItem(item) {
				this.optShow = true;
				this.select = item;
			},
			handleAppovce() {
				this.scoreShow = false;
				
				console.log(this.appoveInfo)
				this.$request('/system/approval', "put", this.appoveInfo).then(res => {
					this.appoveShow = false
				})
			},
			search() {
				this.list()
			},
			handleScore() {
				
				this.scoreShow = false;
				this.optShow = false;
				console.log(this.scoreInfo)
				this.$request('/system/approval', "post", this.scoreInfo).then(res => {
					uni.showToast({
						title: '评分成功'
					})
					this.list()
				})
			},
			close() {
				this.scoreShow = false;
			},
			showAppove(appoveId) {
				this.optShow = false;
				this.$request('/system/approval/5', "get").then(res => {
					this.appoveInfo = res.data
					this.appoveShow = true;
				})
			},
			showScore(item) {
				console.log(item)
				this.scoreInfo.certificateId = item.id;
				this.scoreInfo.studentName = item.studentName;
				this.scoreInfo.effectName = this.getDictLabel('study_award_type', item.awardType);
				this.scoreShow = true;
			},
			toDetils(url) {
				uni.navigateTo({
					url: '/pages/teacher/effect/effectDetils?url=' + url
				})
			},
			getDictLabel(dictType, dictValue) {
				const dictItem = this.dictConfig[dictType].find((item) => item.dictValue === dictValue);

				return dictItem ? dictItem.dictLabel : '';
			},
			dataDictory() {
				this.$request('/system/dict/data/type/study_award_type', "get").then(res => {
					this.dictConfig.study_award_type = res.data
				})
			},
			list() {
				this.$request('/system/certificate/list', "get", this.queryParms).then(res => {
					this.effectList = res.rows
				})
			},

		},
		onLoad(e) {
			if (e.awardType) {
				this.queryParms.awardType = e.awardType
			}

		},
		onShow() {
			this.list()
			this.dataDictory()


		},
	})
</script>

<style lang="scss" scoped>
	.opt {
		display: flex;
		flex-direction: row;
		padding-top: 2%;
		height: 80%;
		width: 100%;
	}

	.item {
		display: flex;
		flex-direction: column;
		height: 80%;
	}

	.txt {
		font-size: 10rpx;
	}

	.content {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.title {
		text-align: center;
		font-size: 16px;
		font-weight: bold;
	}

	.icon-wrapper {
		margin-left: 10rpx;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background-color: #ccba8b;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 10px;

	}

	image {
		object-fit: contain;
	}
	.opticon {
		width: 80%;
		height: 60%;
	}

	text {
		font-size: 16px;
		margin-left: 10rpx;
		text-align: center;
	}

	.icon {
		width: 50rpx;
		height: 50rpx;
		position: absolute;
		right: 5%;
	}

	.page {
		width: 100%;
		height: 80%;
		overflow-y: hidden;

		.list {
			margin: 1%;

			.efferCard {
				position: relative;
				width: 90%;
				background-color: #fff;
				border-radius: 2px;
				box-shadow: 0 10px 4px rgba(0, 0, 0, 0.2);
				height: 250rpx;
				padding: 5%;
				margin-top: 2%;

				.name {
					font-weight: 200;
					color: #000000;
					font-size: 20px;
				}

				.time {
					color: #847564;
				}

				.remake {
					text-indent: 2em;
				}

				.opt {
					position: absolute;
					bottom: 10rpx;
					right: 1%;
				}

			}
		}

		.avatar {
			width: 30px;
			height: 30px;
			border-radius: 50%;
		}

		.pagination {
			position: absolute;
			bottom: 10px;
			width: 100%;

		}
	}
</style>