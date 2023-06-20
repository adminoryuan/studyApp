<template>
    <view>
        <view id="web-info" style="width: 100%;height: 100%;">
            <web-view :src="pdfUrl"></web-view>
        </view>
    </view>
</template>

<script>
    export default {
        name: 'viewPdf',
        data() {
            return {
                isShow: true,
                pdfUrl: '',
                env: '',
            }
        },

        onLoad(params) {
            if(!params.url) uni.navigateBack(0)
            let fileUrl = `http://120.48.61.75:9000/group-resources/${params.url}`
			this.pdfUrl=fileUrl
           // this.getFile2(fileUrl)
            
        },
        methods: {
 
            getFile2(data) {
                let that = this;
                uni.showLoading({
                    title: '加载中',
                    mask: true
                });
                uni.downloadFile({
                    url: data,
                    header:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    success: (result) => {
                        var tempFilePath = result.tempFilePath
                        //这里的`/hybrid/html/web/viewer.html`是pdf.js放在项目里的地址
                        //h5页面这样写即可
                        that.pdfUrl = `/hybrid/html/web/viewer.html?file=${tempFilePath}`;
                        //app需要特殊处理一下才行
                        let fileUrl = plus.io.convertLocalFileSystemURL(tempFilePath)
                        that.pdfUrl = `/hybrid/html/web/viewer.html?file=${fileUrl}`;
                        uni.hideLoading();
                    },
                    fail: function(res) {
                        uni.hideLoading();
                        uni.showToast({
                            title: '文件下载失败，请重试',
                            icon: "none",
                            mask: true,
                            position: "center"
                        })
                    },
                })
            },
        }
    }
</script>
<style lang="scss" scoped>
    #web-info {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
