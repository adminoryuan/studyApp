<template>
	<view >
		<van-dropdown-menu>
			<van-dropdown-item v-model="student" @change="handleDropdownChange" :options="stuList" />
		</van-dropdown-menu>
		<view class="qiun-columns">
			<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
				<view class="qiun-title-dot-light"></view>
			</view>
			<view class="qiun-charts">
				<canvas canvas-id="canvasRadar" id="canvasRadar" class="charts"></canvas>
			</view>
		</view>
		<roleTarbar></roleTarbar>
	</view>
</template>
<script>
	import uCharts from '@/plugins/stan-ucharts/u-charts/u-charts.js';
	import tarbar from '../../componetns/tarbar.vue'
	
	var _self;
	var canvaRadar = null;
	export default {
		components: {
			roleTarbar:tarbar
		},
		data() {
			return {
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				student: '',
				uploader: [],
				stuList: [],
				showPicker: false,
				active: 0,
				studyData: {},
				title: ''
			}
		},
		onLoad() {
			_self = this;
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			this.studentList()
			
		},
		methods: {
			handleDropdownChange() {
				console.log("ss")
				this.studyInfo()
			},
			studentList() {
				this.$request("/system/abilities/students", "get").then(res => {
					console.log(res)
					this.stuList = res.data.map(item => {
						return {
							text: item.studentName + '(' + item.classRoom + ')',
							value: item.studentNumber
						}
					})
					this.student = this.stuList[0].value
					this.studyInfo()
				})
			},
			studyInfo() {
				this.$request('/system/abilities/last/' + this.student, "get").then(res => {
					this.studyData = res.data
					this.initChats()
				})
			},
			onConfirm(value) {
				console.log(value)
				this.taskInfo.stuType = value
				this.showPicker = false
			},
			onCancel() {
				this.showPicker = false
			},
			initChats() {
				const Radar = {
					categories: ['沟通能力', '创造力与创新能力', '实践能力', '专业技能', '自主学习能力', '自我管理能力'],
					series: [{
						name: this.student,
						data: [
							this.studyData.communicationAbility, // communicationAbility
							this.studyData.creativityAndInnovationAbility,
							this.studyData.practicalAbility,
							this.studyData.professionalSkill,
							this.studyData.selfLearningAbility,
							this.studyData.selfManagementAbility,
						]
					}]
				}
				_self.showRadar("canvasRadar", Radar);
			},
			showRadar(canvasId, chartData) {
				canvaRadar = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'radar',
					fontSize: 11,
					legend: true,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					animation: true,
					dataLabel: true,
					categories: chartData.categories,
					series: chartData.series,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						radar: {
							max: 200 //雷达数值的最大值
						}
					}
				});
			}
		}
	}
</script>
<style>
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
	.body{
		height: 100%;
		width: 100%;
		background-color: antiquewhite;
	}
	.qiun-columns{
		padding-top: 20%;
		
		
	}
	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
</style>