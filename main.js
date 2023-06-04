import App from './App'
// #ifndef VUE3
import Vue from 'vue'
import Vant from 'vant';

import request from './request.js'
import getDictLabel from '@/utils/dictUtils.js'
import FileUpload from '@/componetns/fileUpload.vue';
Vue.component('FileUpload',FileUpload)
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$request = request 
Vue.prototype.$getDictLabel = getDictLabel 

try {
  function isPromise(obj) {
    return (
      !!obj &&
      (typeof obj === "object" || typeof obj === "function") &&
      typeof obj.then === "function"
    );
  }

  // 统一 vue2 API Promise 化返回格式与 vue3 保持一致
  uni.addInterceptor({
    returnValue(res) {
      if (!isPromise(res)) {
        return res;
      }
      return new Promise((resolve, reject) => {
        res.then((res) => {
          if (res[0]) {
            reject(res[0]);
          } else {
            resolve(res[1]);
          }
        });
      });
    },
  });
} catch (error) { }

Vue.use(Vant)
const app = new Vue({
  ...App
})


app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import fileUploadVue from './componetns/fileUpload.vue';
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif