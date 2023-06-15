<template>
	<view>
		<van-dropdown-menu @change="handleDropdownChange">
			<van-dropdown-item v-model="student" :options="stuList" />
		</van-dropdown-menu>

		
			<canvas id="radar-chart" class="body" ref="radarChart"></canvas>
		

		<roleTarbar></roleTarbar>
	</view>
</template>

<script>
	import tarbar from '../../componetns/tarbar.vue'
	import * as echarts from '@/static/echarts.js'

	export default {
		components: {
			roleTarbar: tarbar
		},
		
		data() {
			return {
				student: '',
				uploader: [],
				stuList: [],
				showPicker: false,
				active: 0,
				studyData: {},
				title: ''
			}
		},
		watch:{
			
		},
		methods: {
			handleDropdownChange(){
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
					this.student = this.stuList[2].value
					this.studyInfo()
				})
			},
			studyInfo() {
				this.$request('/system/abilities/last/' + this.student, "get").then(res => {
					this.studyData=res.data
					this.initChart()
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
			initChart() {
				const canvas = this.$refs.radarChart.$el
				const chart = echarts.init(canvas)

				const option = {
					title: {
						text: '学情雷达图'
					},
					grid: {
						width: '80%',
						height: '300rpx'
					},
					radar: {
						indicator: [{
								name: '沟通能力',
								max: 1
							},
							{
								name: '创造力与创新能力',
								max: 1
							},
							{
								name: '实践能力',
								max: 1
							},
							{
								name: '专业技能',
								max: 1
							},
							{
								name: '自主学习能力',
								max: 1
							},
							{
								name: '自我管理能力',
								max: 1
							}
						]
					},
					series: [{
						type: 'radar',
						data: [{
							value: [
								this.studyData.communicationAbility, // communicationAbility
								this.studyData.creativityAndInnovationAbility,
								this.studyData.practicalAbility,
								this.studyData.professionalSkill,
								this.studyData.selfLearningAbility,
								this.studyData.selfManagementAbility,
							],
							name: '袁浩'
						}]
					}]
				};


				chart.setOption(option)


			}
		},
		onReady() {
			this.$nextTick(() => {
				this.initChart()
			})
		},
		onLoad(e) {
			// this.taskInfo.title = e.title
			this.studentList()
		}
	}
</script>

<style lang="scss" scoped>
	.study {
		display: flex;
		flex-direction: row;
		align-items: center;

		.image {
			width: 150px;
			height: 150px;
			margin-right: 20px;
			border-radius: 10px;
			box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
		}
	}

	.body {
		padding-top: 20%;
		padding-left: 10%;
	}

	.content {
		/* 添加背景色 */
		flex-grow: 1;
		background-color: #aaaa7f;

		.item {
			padding: 20px;
			color: #aaaa7f;
			background-color: #00aa00;
			border-radius: 10px;
			box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
		}
	}
</style>