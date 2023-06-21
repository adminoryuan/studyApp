export const BASE_URL = 'http://43.143.249.38:8081'; // 设置基础URL

function request(url, method, data) {
  // 从缓存中获取token
  const token = uni.getStorageSync('token');

  return new Promise((resolve, reject) => {
    uni.request({
      url: BASE_URL + url,
      method: method || 'GET',
      data: data || {},
      header: {
        'Authorization': 'Bearer ' + token, // 添加token到请求头部
        'Content-Type': 'application/json' // 可根据需要添加其他头部信息
      },
      success: (res) => {
		 if(res.data.code==401){
			 uni.navigateTo({
			 	url:'/pages/login/login'
			 })
			 reject(res.data);
		 }
		 if(res.data.code!=200){
			 uni.showToast({
			 	title:res.data.msg
			 })
			 reject(res.data);
		 }
		 resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
}

export default request;
