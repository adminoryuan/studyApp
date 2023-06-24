<template>
	<view>
		<van-grid :column-num="3">
			<van-grid-item  icon="photo-o" text="文字" v-for="(item,index) in list" @click="showDialog(item)">
				<van-circle  v-model="item.value*100" :rate="100" :speed="100" :text="item.value*100+'%'" />
				<text>{{item.name}}</text>
			</van-grid-item>
		</van-grid>
		
		
		<van-button v-if="roles.indexOf('teach')!=-1" @click="reset" type="primary" style="width: 80%;margin-left: 10%;">重置</van-button>


		<van-popup v-model="show" @close="close" style="width: 80%;height: 30%;" closeable>
			<van-cell-group>
				<van-field :disabled="true" v-model="ballInfo.name" label="组别" placeholder="请输入用户名" />
				<van-field name="slider" label="进度">
				  <template #input>
				    <van-slider :min="0" :max="100" :step="10" v-model="ballInfo.value" />
				  </template>
				</van-field>

			</van-cell-group>
			<view>
				<van-button @click="handleBall" style="width: 80%;margin: 10%" type="primary">修改</van-button>
			</view>
		</van-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentRate: 0,
				text: "0%",
				roles:[],
				list: [],
				ballInfo:{},
				gradientColor: {
					'0%': '#3fecff',
					'100%': '#6149f6',
				},
				show:false,
			};
		},
		methods:{
			close(){
				
			},
			reset(){
				this.$request('/study/ball/reset',"post",{}).then(res=>{
					uni.showToast({
						title:'重置成功',
						
					})
					this.getList()
				})
			},
			showDialog(item){
				this.show=true;
				console.log(this.ballInfo.value)
				this.ballInfo=Object.assign({},item);
				this.ballInfo.value=this.ballInfo.value*100;
				
			},
			handleBall(){
				this.ballInfo.value=this.ballInfo.value/100;
				if(this.ballInfo.value>1 || this.ballInfo.value<0){
					uni.showToast({
						title:'请输入[0-1]之间的小数'
					})
					return;
				}
				this.$request('/study/ball', "put", this.ballInfo).then(res => {
					uni.showToast({
						title:'修改成功'
					})
					this.getList()
					this.show=false;
				})
			},
			getList(){
				this.$request('/study/ball/list', "GET", {}).then(res => {
					this.list = res.rows
				})
			}
		},
		onLoad() {
			let roles=uni.getStorageSync('roles')
			console.log(roles.indexOf('teach'))
			this.roles=roles;
			
			this.getList()
		}
	};
</script>

<style>
</style>