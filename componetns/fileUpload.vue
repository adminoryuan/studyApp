<template>
  <view>
    <image :src="previewUrl"  style="width: 200px; height: 200px;"  @click="chooseFile" mode="aspectFit" />
  </view>
</template>

<script>
	import {BASE_URL} from '@/request.js'
export default {
  name: 'FileUpload',
  
  data() {
    return {
	  uploadUrl: BASE_URL+'/common/upload',
      previewUrl: ''
    };
  },
  methods: {
    async chooseFile() {
      try {
        const res = await uni.chooseFile({
          count: 1,
          success: (res) => {
            const tempFilePaths = res.tempFilePaths;
            if (tempFilePaths && tempFilePaths.length > 0) {
              this.uploadFile(tempFilePaths[0]);
            }
          },
          fail: (err) => {
            console.error('选择文件失败：', err);
          }
        });
      } catch (error) {
        console.error('选择文件失败：', error);
      }
    },
    async uploadFile(filePath) {
      try {
        const token = uni.getStorageSync('token');

        const response = await uni.uploadFile({
          url: this.uploadUrl,
          filePath: filePath,
          name: 'file',
          formData: {
            filePath: 'task'
          },
          header: {
            'Authorization': 'Bearer ' + token
          }
        });

        if (response.statusCode === 200) {
          const data = JSON.parse(response.data);
		  console.log(data)
          const fileUrl = data.url;
          this.previewUrl = fileUrl;
          this.$emit('upload-success', fileUrl);
        } else {
          console.error('文件上传失败');
        }
      } catch (error) {
        console.error('文件上传出错：', error);
      }
    }
  }
};
</script>
