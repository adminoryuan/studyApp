<template>
	<view>

		<van-grid clickable :border="true" :column-num="2">
			<van-grid-item @click="gotoEfferInfo(item.awardType)" v-for="item in effectList">
				<van-badge :content="item.uploadNumber">
					<van-grid-item icon="../../static/zs.png" :text="getDictLabel('study_award_type',item.awardType)" />
				</van-badge>
			</van-grid-item>
			<van-grid-item @click="gotoEfferInfo()">
				<van-badge content="">
					<van-grid-item icon="../../static/xz.png" text="全部" />
				</van-badge>
			</van-grid-item>
			<!-- <van-grid-item>
				<van-grid-item icon="../../static/bs.png" text="学生技能大赛" />
			</van-grid-item>
			<van-grid-item @click="gotoEfferInfo">
				<van-badge :content="1">
					<van-grid-item icon="../../static/cxcy.png" text="创新创业比赛" />
				</van-badge>
			</van-grid-item>
			<van-grid-item>
				<van-grid-item icon="../../static/ndjn.png" text="劳动教育" />
			</van-grid-item>
			<van-grid-item>
				<van-grid-item icon="../../static/shfw.png" text="社会服务" />
			</van-grid-item> -->
		</van-grid>
		<roleTarbar></roleTarbar>

	</view>
</template>

<script>
	import tarbar from '../../../componetns/tarbar.vue'

	export default ({
		data() {
			return {
				effectList: [],
				dictConfig:{
					study_award_type:[]
				}
			}
		},
		components: {
			roleTarbar: tarbar,
		},
		methods: {
			getDictLabel(dictType, dictValue) {
				
				const dictItem = this.dictConfig[dictType].find((item) => item.dictValue == dictValue);
				console.log(dictItem)
				return dictItem ? dictItem.dictLabel : '';
			},
			dataDictory() {
				this.$request('/system/dict/data/type/study_award_type', "get").then(res => {
					this.dictConfig.study_award_type = res.data
				})
			},
			gotoEfferInfo(awardType) {
				let url='/pages/teacher/effect/effermanager'
				console.log(awardType)
				if(awardType!=undefined ){
					url+='?awardType='+awardType
				}
				uni.navigateTo({
					url: url
				})
			},
			list() {
				this.$request('/system/certificate/appove-census', "get").then(res => {
					this.effectList = res.data
				})
			}
		},
		onLoad() {
			this.list()
			this.dataDictory()
		}


	})
</script>

<style lang="scss">
	card {
		background-color: #555500;
		width: 40%;
		height: 10%;
	}
</style>