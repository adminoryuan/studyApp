<template>
	<view>
		<van-dropdown-menu>
			<van-dropdown-item v-model="student" :options="stuList" />
		</van-dropdown-menu>
		<van-tabs v-model="active">
			
		</van-tabs>
		<roleTarbar></roleTarbar>
	</view>
</template>

<script>
	import tarbar from '../../componetns/tarbar.vue'
	export default ({
		components: {
			roleTarbar: tarbar
		},
		data() {
			return {
				student: 0,
				uploader: [],
				stuList: [],
				showPicker: false,
				active: 0,
				taskInfo: {},
				title: ''
			}
		},
		methods: {
			studentList(){
				this.$request("/system/abilities/students","get").then(res=>{
					console.log(res)
				})
			},
			onSubmit() {

			},
			onConfirm(value) {
				console.log(value)
				this.taskInfo.stuType = value
				this.showPicker = false
			},
			onChange(e) {

			},
			onCancel() {
				this.showPicker = false
			}
		},
		onLoad(e) {
			this.taskInfo.title = e.title
			this.studentList()
		}
	})
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