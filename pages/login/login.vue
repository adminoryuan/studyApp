<template>
	<view class="page">
		<view class="login">
			<view style="position: absolute;right: 2%;">快速注册</view>
			<text style="float: left;width: 100%;margin:10%;font-weight: 1000;font-size:20px;">账号密码登录</text>
			<van-form @submit="handleLogin">
				<van-field v-model="userinfo.username" name="" label="用户名" placeholder=""
					:rules="[{ required: true, message: '请填写用户名' }]" />
				<van-field v-model="userinfo.password" type="password" name="" label="密码" placeholder=""
					:rules="[{ required: true, message: '请填写密码' }]" />

				<van-field v-model="userinfo.code" name="" label="验证码" placeholder=""
					:rules="[{ required: true, message: '请填写验证码' }]">
					<template v-slot:button>
						<image :src="'data:image/png;base64,'+codeImg" class="captcha-image" @click="refreshCaptcha" />
					</template>
				</van-field>

				<div style="padding: 20px;">
					<van-button round block type="info" native-type="submit">登录</van-button>
				</div>
			</van-form>
		</view>
	</view>
</template>

<script>
	import {
		student,
		teacher
	} from "../../tarbarStroge.js";

	export default {
		data() {
			return {
				userinfo: {
					username: "学生2",
					password: "123456",
					code: undefined,
					uuid: undefined,
					role: undefined,
				},
				codeImg: undefined,
				showPicker: false,
				roles: ["教师", "学生"],
			};
		},
		methods: {
			getCode() {
				this.$request("/captchaImage").then((res) => {
					this.codeImg = res.img;
					this.userinfo.uuid = res.uuid;
				}).catch(err => {

				});
			},
			refreshCaptcha() {
				this.getCode();
			},
			onConfirm(value) {
				this.userinfo.role = value;
				this.showPicker = false;
			},
			handleLogin() {

				let {
					role
				} = this.userinfo;
				this.$request('/login', "post", this.userinfo).then(res => {
					uni.setStorageSync('token', res.token)
					this.$request('/getInfo').then(res => {
						uni.setStorageSync('userInfo', res.user)
						uni.setStorageSync('roles', res.roles)
						uni.setStorageSync('permissions', res.permissions)
						uni.showToast({
							title: "登录成功"
						})
						let role=res.roles[0]
						console.log(role)
						if (role == 'student') {
							uni.setStorageSync("tabBarList",student)
							uni.navigateTo({
								url: '/pages/study/study'
							})
						} else if (role == 'teach') {
							console.log(teacher)
							uni.setStorageSync("tabBarList",teacher)
							uni.navigateTo({
								url: '/pages/teacher/teacher'
							})
						}
					})

				}).catch(err => {
					this.refreshCaptcha()
				});

			},
		},
		onLoad() {
			this.getCode();
			uni.setNavigationBarColor({
				frontColor: "#ffffff",
				backgroundColor: "#ffffff",
				animation: {
					duration: 0,
					timingFunc: "easeIn",
				},
			});
		},
	};
</script>

<style>
	.page {
		width: 100%;
		height: 100%;
	}

	.login {
		display: flex;
		flex-direction: column;
		padding-top: 20%;
		align-items: center;
	}

	.captcha-image {
		width: 100px;
		height: 40px;
	}
</style>