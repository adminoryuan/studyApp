<template>
	<view class="page">
		<van-search v-model="queryParms.studentName" placeholder="请输入学生姓名" @input="search" />
		<view class="list">
			<view class="efferCard" v-for="item in effectList">
				<text class="name"><b>{{item.studentName}}</b></text>
				<van-tag type="primary" style="margin-left: 10rpx;">{{getDictLabel('study_award_type',item.awardType)}}</van-tag>
				
				<text style="float: right;" class="time">{{item.awardTime}}</text>
				<view class="remake">标题 :{{item.title}}</view>
				<view class="remake">描述 :{{item.description}}</view>
				<view class="opt">
					<van-button type="info" @click="toDetils(item.certificateUrl)">查看</van-button>
					<van-button v-if="item.appove!=0" type="info" @click="showAppove(item.id)">查看评分</van-button>
					<van-button v-else type="info" @click="showScore(item)">评分</van-button>
				</view>
			</view>
		</view>
		<van-popup v-model="scoreShow" @close="close" style="width: 80%;height: 40%;" closeable>
			<van-cell-group>
			  <van-field :disabled="true" v-model="scoreInfo.studentName" label="标题"  placeholder="请输入用户名" />
			  <van-field :disabled="true" v-model="scoreInfo.effectName" label="获奖类型"  placeholder="获奖类型" />
			  <van-field v-model="scoreInfo.score" label="评分" type="number" placeholder="请输入评分" />
			  <van-field v-model="scoreInfo.remake" label="备注" type="textarea" placeholder="请输入备注" />
			</van-cell-group>
			<view>
				<van-button @click="handleScore" style="width: 80%;margin-left: 10%" type="primary">确认评分</van-button>
			</view>
		</van-popup>
		
		<van-popup v-model="appoveShow" @close="close" style="width: 80%;height: 40%;" closeable>
			<van-cell-group>
			  <van-field :disabled="true" v-model="appoveInfo.title" label="教师"  placeholder="请输入用户名" />
			  <van-field :disabled="true" v-model="appoveInfo.tearchName" label="评分教师"  placeholder="" />
			  <van-field v-model="appoveInfo.score" label="评分" type="number" placeholder="请输入评分" />
			  <van-field v-model="appoveInfo.comment" label="备注" type="textarea" placeholder="请输入备注" />
			</van-cell-group>
			<view>
				<van-button @click="handleAppovce" style="width: 80%;margin-left: 10%" type="primary">修改评分</van-button>
			</view>
		</van-popup>
		
		<van-popup v-model="show"  >
			
		</van-popup>
		
	</view>
</template>

<script>
	
	export default({
		data(){
			return{
				value:'',
				show:false,
				currentPage:1,
				appoveShow:false,
				scoreShow:false,
				appoveInfo:{},
				scoreInfo:{
					name:undefined,
					certificateId:undefined,
					effectType:undefined,
				},
				dictConfig:{
					study_award_type:[]
				},
				queryParms:{
					awardType:undefined,
				},
				effectList:[]
			}
		},
		methods:{
			handleAppovce(){
				this.scoreShow=false;
				console.log(this.appoveInfo)
				this.$request('/system/approval',"put",this.appoveInfo).then(res=>{
					this.appoveShow=false
				})
			},
			search(){
				this.list()
			},
			handleScore(){
				this.scoreShow=false;
				this.$request('/system/approval',"post",this.scoreInfo).then(res=>{
					
				})
			},	
			close(){
				this.scoreShow=false;
			},
			showAppove(appoveId){
				this.$request('/system/certificate/appove/'+appoveId,"get").then(res=>{
					this.appoveInfo=res.data
					this.appoveShow=true;
				})
			},
			showScore(item){
				console.log(item)
				this.scoreInfo.certificateId=item.id;
				this.scoreInfo.studentName=item.studentName;
				this.scoreInfo.effectName=this.getDictLabel('study_award_type',item.awardType) ;
				this.scoreShow=true;
			},
			toDetils(url){
				uni.navigateTo({
					url:'/pages/teacher/effect/effectDetils?url='+url
				})
			},
			getDictLabel(dictType,dictValue) {
			  const dictItem = this.dictConfig[dictType].find((item) => item.dictValue === dictValue);
			  
			  return dictItem ? dictItem.dictLabel : '';
			},
			dataDictory(){
				this.$request('/system/dict/data/type/study_award_type',"get").then(res=>{
					this.dictConfig.study_award_type=res.data
				})
			},
			list(){
				this.$request('/system/certificate/list',"get",this.queryParms).then(res=>{
					this.effectList=res.rows
				})
			}
		},
		onLoad(e){
			if(e.awardType){
				this.queryParms.awardType=e.awardType
			}
			
		},
		onShow(){
			this.list()
			this.dataDictory()
			
		},
	})
</script>

<style lang="scss" scoped>
	.page{
		width: 100%;
		.list{
			margin: 1%;
			.efferCard{
				position: relative;
				width: 95%;
				background-color: #fff;
				border-radius: 2px;
				box-shadow: 0 10px 4px rgba(0, 0, 0, 0.2);
				height: 250rpx;
				padding: 5%;
				margin-top: 2%;
				.name{
					font-weight: 200;
					color: #000000;
					font-size: 20px;
				}
				.time{
					color: #847564;
				}
				.remake{
					text-indent: 2em;
				}
				.opt{					
					position: absolute;
					bottom: 10rpx;
					right: 1%;
				}
				
			}
		}
		.pagination{
			position: absolute;
			bottom: 10px;
			width: 100%;
			 
		}
	}
	
	
	
</style>