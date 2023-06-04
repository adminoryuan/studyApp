<template>
	<view>
	<van-tabs v-model="active">
	  <task>
		  <slot name="right">
			  <van-button square text="删除" type="primary" class="delete-button" />
			  
			  <van-button square @click="handleUploadResults" text="查看完成情况" type="danger" class="delete-button" />
		  </slot>
	  </task>
	  <van-tab title="添加任务">
		  <van-form @submit="onSubmit">
		  	<van-field v-model="taskInfo.title" name="" label="任务标题" placeholder="任务标题" />
		  	<van-field name="uploader" label="上传附件">
		  		<template #input>
		  			<van-uploader upload-icon="eye" accept=".doc" v-model="taskInfo.file" />
		  		</template>
		  	</van-field>
			<van-field readonly clickable name="picker" :value="taskInfo.taskType" label="任务类型" placeholder="点击选择身份"
				@click="showPicker = true" />
		  	<van-field v-model="taskInfo.remake" rows="4" autosize label="任务描述" type="textarea" placeholder="任务描述" />
		  	<div style="margin: 16px;">
		  		<van-button round block type="info" native-type="submit">添加任务</van-button>
		  	</div>
		  </van-form>
	  </van-tab>
	  <van-popup v-model="showPicker" position="bottom">
	  	<van-picker show-toolbar :columns="taskType" @confirm="onConfirm" @cancel="showPicker = false" />
	  </van-popup>
	</van-tabs>
	<roleTarbar></roleTarbar>
	</view>
</template>

<script>
	import task from '../../../componetns/task/task.vue';
	import tarbar from '../../../componetns/tarbar.vue'
	
	export default {
	 components:{
		task,
		roleTarbar:tarbar
	 },
	  data() {
	    return {
	      active: 2,
		  taskType:['基础任务','进阶任务'],
		  taskInfo:{
			  title:'',
			  taskType:'进阶任务',
			  file:[],
			  desc:'',
		  },
		  taskList:[],
		  queryParms:{},
		  showPicker:false,
	    };
	  },
	  methods:{
		  handleUploadResults(){
			  
		  },
		  onSubmit(){
			  
		  },
		  onLoad(){
			 this.list()  
		  },
		  list(){
			this.$request('/system/task/list',"get",this.queryParms).then(res=>{
				this.taskList=res.rows
			})  
		  },
		  onConfirm(val){
			  this.taskInfo.taskType=val
			  this.showPicker=false
		  }
	  }
	};

</script>

<style>
</style>