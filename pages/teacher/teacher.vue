<template>
	<view>
		
	<van-empty description="描述文字" v-if="this.data.length==0" />
	
	<view v-if="this.data.length>0">
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
		<view class="qiun-columns">
			<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
				<view class="qiun-title-dot-light">学情总览</view>
			</view>
			<view class="qiun-charts">
				<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" @touchstart="touchLineA"></canvas>
			</view>
		</view>

		<roleTarbar></roleTarbar>
	</view>
	
	</view>
</template>
<script>
	import uCharts from '@/plugins/stan-ucharts/u-charts/u-charts.js';
	

	var _self;
	var canvaRadar = null;
	var canvaLineA = null;

	export default {
		components: {
			
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
				title: '',
				data:[]
			}
		},
		onLoad() {
			_self = this;
			var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			
			// 计算宽度的百分比值
			var widthPercentage = 99;
			
			// 将宽度设置为屏幕宽度的90%
			this.cWidth = (screenWidth * widthPercentage) / 100;
			
			
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
					this.data=res.data
					if(res.data.length==0) return
					this.studyData = res.data[0]
					this.initChats()
					console.log(res.data.map(item => {
						return item.createTime
					}))
					let series = []
					res.data.forEach(item => {
						series.push({
							name: item.createTime,
							data: [
								item.communicationAbility, // communicationAbility
								item.creativityAndInnovationAbility,
								item.practicalAbility,
								item.professionalSkill,
								item.selfLearningAbility,
								item.selfManagementAbility,
							],
							color: this.getRandomColor()
						})
					});
					let LineA = {
						categories: res.data.map(item => {
							return item.createTime
						}),
						series: series
					}

					this.showLineA("canvasLineA", LineA)
				})
			},
			getRandomColor() {
			  // 生成随机的 RGB 值
			  const r = Math.floor(Math.random() * 256);
			  const g = Math.floor(Math.random() * 256);
			  const b = Math.floor(Math.random() * 256);
			  // 将 RGB 值转换为十六进制颜色代码
			  const hexColor = "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
			  return hexColor;
			},
			onConfirm(value) {
				console.log(value)
				this.taskInfo.stuType = value
				this.showPicker = false
			},
			onCancel() {
				this.showPicker = false
			},
			showLineA(canvasId, chartData) {
				canvaLineA = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'line',
					fontSize: 11,
					legend: true,
					dataLabel: false,
					dataPointShape: true,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					xAxis: {
						type: 'grid',
						gridColor: '#CCCCCC',
						gridType: 'dash',
						dashLength: 8
					},
					yAxis: {
						gridType: 'dash',
						gridColor: '#CCCCCC',
						dashLength: 8,
						splitNumber: 5,
						min: 10,
						max: 180,
						format: (val) => {
							return val.toFixed(0) 
						}
					},
					width: (_self.cWidth* _self.pixelRatio)*0.8,
					height:( _self.cHeight * _self.pixelRatio)*0.8,
					extra: {
						line: {
							type: 'straight'
						}
					}
				});
			},
			touchLineA(e) {
				canvaLineA.showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
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
		width: 99%;
		height: 100%;
		background-color: #antiquewhite;
	}

	page {
		height: 100%;
		width: 100%;
	}

	.qiun-columns {
		padding-top: 20%;
		padding-bottom: 20%;
	}

	.charts {
		width: 99%;
		height: 500upx;
	}
</style>