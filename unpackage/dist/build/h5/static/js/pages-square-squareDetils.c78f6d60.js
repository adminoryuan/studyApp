(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-square-squareDetils"],{"0008":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".article-detail[data-v-596537b4]{margin:20px;overflow-x:hidden}.title[data-v-596537b4]{font-size:18px;font-weight:700;margin-bottom:10px}.author-info[data-v-596537b4]{pointer-events:none;display:flex;align-items:center;margin-bottom:10px}.author-avatar[data-v-596537b4]{width:30px;height:30px;border-radius:50%;margin-right:10px}.author-name[data-v-596537b4]{font-weight:700;margin-right:10px}.publish-time[data-v-596537b4]{font-size:12px;color:#999}.content[data-v-596537b4]{font-size:14px;line-height:1.5;padding-bottom:%?40?%}.comment-section[data-v-596537b4]{margin-top:20px}.comment-header[data-v-596537b4]{font-size:16px;font-weight:700;margin-bottom:10px}.comment-item[data-v-596537b4]{display:flex;align-items:center;margin-bottom:10px}.comment-avatar[data-v-596537b4]{width:20px;height:20px;border-radius:50%;margin-right:5px}.comment-info[data-v-596537b4]{display:flex;flex-direction:column}.comment-username[data-v-596537b4]{font-weight:700}.comment-content[data-v-596537b4]{margin-top:5px}.comment-form[data-v-596537b4]{margin-top:20px}.comment-form uni-textarea[data-v-596537b4]{width:100%;height:80px;resize:none;margin-bottom:10px}.comment-form uni-button[data-v-596537b4]{padding:5px 10px;background-color:#f0f0f0;border:none;border-radius:4px;cursor:pointer}",""]),t.exports=e},"0ca5":function(t,e,n){var i=n("fcb8");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("2a19e8dd",i,!0,{sourceMap:!1,shadowMode:!1})},"1cea":function(t,e,n){"use strict";n.r(e);var i=n("59e1"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"1d49":function(t,e,n){"use strict";n.r(e);var i=n("3a1b"),a=n("3338");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("8b22");var c=n("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"0f77cf47",null,!1,i["a"],void 0);e["default"]=s.exports},"1f5d":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={hbComment:n("1d49").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"article-detail"},[i("v-uni-view",{staticClass:"article-content"},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.articleInfo.title))]),i("v-uni-view",{staticClass:"author-info"},[i("v-uni-image",{staticClass:"author-avatar",attrs:{src:n("da46")}}),i("v-uni-view",{staticClass:"author-name"},[t._v(t._s(t.articleInfo.authorName))]),i("v-uni-view",{staticClass:"publish-time"},[t._v(t._s(t.formatDate(t.articleInfo.publishTime)))])],1),i("v-uni-view",{staticClass:"content",domProps:{innerHTML:t._s(t.articleInfo.content)}}),i("v-uni-image",{attrs:{src:t.articleInfo.coverImage},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.preView(t.articleInfo.coverImage)}}}),t.commentData?i("hb-comment",{ref:"hbComment",attrs:{deleteTip:"确认删除？",cmData:t.commentData},on:{add:function(e){arguments[0]=e=t.$handleEvent(e),t.add.apply(void 0,arguments)},del:function(e){arguments[0]=e=t.$handleEvent(e),t.del.apply(void 0,arguments)},like:function(e){arguments[0]=e=t.$handleEvent(e),t.like.apply(void 0,arguments)},focusOn:function(e){arguments[0]=e=t.$handleEvent(e),t.focusOn.apply(void 0,arguments)}}}):t._e()],1),i("roleTarbar")],1)},o=[]},3338:function(t,e,n){"use strict";n.r(e);var i=n("8bcb"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"3a1b":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"hb-comment"},[0!=t.commentData.comment.length?n("v-uni-view",{staticClass:"comment-list"},[n("v-uni-view",{staticClass:"comment-num"},[n("v-uni-view",[t._v("共 "+t._s(t.commentData.commentSize)+" 条评论")]),n("v-uni-view",{staticClass:"add-btn"},[n("v-uni-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.commentInput.apply(void 0,arguments)}}},[t._v("发表评论")])],1)],1),t._l(t.commentData.comment,(function(e,i){return n("v-uni-view",{staticClass:"comment-box"},[n("v-uni-view",{staticClass:"comment-box-item"},[n("v-uni-view",[n("v-uni-image",{staticClass:"avatar",attrs:{src:e.avatarUrl||t.emptyAvatar,mode:"aspectFill"}})],1),n("v-uni-view",{staticClass:"comment-main"},[n("v-uni-view",{staticClass:"comment-main-top"},[n("v-uni-view",{staticClass:"nick-name-box"},[0==i?n("v-uni-view",{staticClass:"comLogo com1"},[t._v("沙发")]):t._e(),1==i?n("v-uni-view",{staticClass:"comLogo com2"},[t._v("板凳")]):t._e(),2==i?n("v-uni-view",{staticClass:"comLogo com3"},[t._v("地板")]):t._e(),i>2?n("v-uni-view",{staticClass:"comLogo com4"},[t._v(t._s(i+1)+"楼")]):t._e(),n("v-uni-view",{staticClass:"nick-name"},[t._v(t._s(e.nickName))])],1)],1),n("v-uni-view",{staticClass:"comment-main-content"},[t._v(t._s(e.content.length>60?e.content.slice(0,59):e.content)),e.content.length>60?n("span",[t._v(t._s(e.hasShowMore?e.content.slice(59):"...")),n("span",{staticClass:"foot-btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.showMore(e.id)}}},[t._v(t._s(e.hasShowMore?"收起":"展开"))])]):t._e()]),n("v-uni-view",{staticClass:"comment-main-foot"},[n("v-uni-view",{staticClass:"foot-time"},[t._v(t._s(e.createTime))]),n("v-uni-view",{staticClass:"foot-btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.reply(e.nickName,e.nickName,e.id)}}},[t._v("回复")]),e.owner?n("v-uni-view",{staticClass:"foot-btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.confirmDelete(e.id)}}},[t._v("删除")]):t._e()],1),n("v-uni-view",{staticClass:"comment-sub-box"},t._l(e.children,(function(i){return n("v-uni-view",{staticClass:"comment-sub-item"},[n("v-uni-view",[n("v-uni-image",{staticClass:"avatar",attrs:{src:i.avatarUrl||t.emptyAvatar,mode:"aspectFill"}})],1),n("v-uni-view",{staticClass:"comment-main"},[n("v-uni-view",{staticClass:"sub-comment-main-top"},[n("v-uni-view",{staticClass:"nick-name"},[t._v(t._s(i.nickName))]),n("v-uni-view",{staticClass:"zan-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.like(i.id)}}},[n("span",{class:i.hasLike?"isLike":"notLike"},[t._v(t._s(0==i.likeNum?"抢首赞":i.likeNum))]),i.hasLike?n("img",{staticStyle:{width:"14px",height:"14px"},attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfVJREFUWEfFl79LHEEUx7/vclr4g51TLFQQW9FNDFhFBDvjtcF0gXSp5eYuWJlUAW9NIP9BIFUEOxFtTKF2FrezKFgkkEBS3h4SAtHbJ6vu5W5d1F3cm20WZt+b7+e9mTfzlqD5Ic36SATw+OPJQP2ft+ABJwQ+VFIcJA0kEYBpVfcAehKIMqHoFISVBCI2wOS76mi9g76HxTLwZiqybzcuRGwAc7WWB/NGWIhBu440ZlIHmFitLRPzm+tC9EtJY1gjAP9VMtelEQC2kuJR6gCm5X4BsBAWImDdluJZqgBjH/4MZr3TYzB6IoRWmHnzJgDK0g+1KL4128SqgnD9x432yn5NSfE88L0VYPx9rS/jYR6EJTCPJxQNu60oKV77gw2Ai/Ly1/ZKRElx8c20XL4n0ZZpgvkbAKbl7gCYDax0ALREmjJAo2SbM9A+AKLPqmC8aNkD4bVOMwPEKNlFUdYGkAE9rUhjSxvA2YOOoaPF7t+6AH4qKUauHURt3AObSoq8NgAGyo4UJW0ABH5py9wnbQAAppq76HYfRLXOXmPg4BWdasoA7yuZm47sB0zL9Vvt0TQvI/bqc06pfzsS4KHlWgwUUgKwmWjdKRhvI1q5/0P+T8dZ9jILTjH31X9PlKuNKzppXxDMFeV/a0eUVPSuftoBzgHKR/ohZwAugwAAAABJRU5ErkJggg=="}}):n("img",{staticStyle:{width:"14px",height:"14px"},attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAApVJREFUWEfFlz9oFEEUxr93SWEhFkIaBUljo4WgATEaiI0GwVLBQg2EzLd3hSBqLI2lRgWLY+ftSSQgggoWNv5pImLUwjQBg1goqCCIIBqwueSeTLg7Ln9Mcmdub7vdnZnvN9+8fe+toMWXtFgfDQGMjo52zM7OHgMwIyLTg4ODk41upG4A7/0OEbkPYGdFVEQuOOeuNQJRN4CqBvGw+3dm9kZEBsrCPSRf1gvRCIAFETPrjqLodZIkY2Z2SkQmnHMHUgMgOQ8fx3FvJpMZB/CDZEfqACEgi8XidwA/SW5uKkCN2AzJTYscmCTZ1VQA7/2AiNwSkefOuYNBLEmSnJnlATwgebypAKr6CMBRANdJng9i3vu8iORE5Mrc3NyTlQDM7HMul/tYO2bNX0GhUDhRKpXumtlvAPuiKJouOzBuZr117HyBU6sCqOpeAH0AhssiwyQvVwTjOO5va2s7vRaAGtCrJC+GOVUAVb1UTjDVDLd4URHJOuf8WsSWG5MkSbeZTYR3lc+4CpAkyUpWht3fI/m+UfEwL5/Pb2xvb59ZFkBV5zNchazsSBBeYPn/ABQKhZ5SqfQCwBTJXYuPoOkAqnoGwE0Ad0ieTB3Ae39bRPoBDJEcSR1AVd8C2CMifc65p6kCmJkkSfIHwAYAW0h+SxVAVXcDmDSzL1EUbasEc20eaGoQVuoIgMckj6QOoKo3AJwFMEJyqBUAIegOAegnOdYKgK8AtmYyma7aLjqVGPDebxeRDwB+AeggWUzVAVV1ABTAK5L7l+0HVPUTgM7Q7VQGhPJZe99oHagpw4dJPvsXQPixONeoyErzRGTKzB7W9hFLjiA8iOO4M7iw3hDZbLbq6pIeY73F6l1v1Zas3gXrHf8XhhNvMGSmtPYAAAAASUVORK5CYII="}})])],1),n("v-uni-view",{staticClass:"comment-main-content"},[t._v(t._s(i.content.length>60?i.content.slice(0,59):i.content)),i.content.length>60?n("span",[t._v(t._s(i.hasShowMore?i.content.slice(59):"...")),n("span",{staticClass:"foot-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showMore(i.id)}}},[t._v(t._s(i.hasShowMore?"收起":"展开"))])]):t._e()]),n("v-uni-view",{staticClass:"comment-main-foot"},[n("v-uni-view",{staticClass:"foot-time"},[t._v(t._s(i.createTime))]),n("v-uni-view",{staticClass:"foot-btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.reply(e.nickName,i.nickName,e.id)}}},[t._v("回复")]),i.owner?n("v-uni-view",{staticClass:"foot-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirmDelete(i.id)}}},[t._v("删除")]):t._e()],1)],1)],1)})),1)],1)],1)],1)}))],2):n("v-uni-view",{staticClass:"comment-none"},[t._v("暂无评论，"),n("span",{staticStyle:{color:"#007AFF"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.commentInput.apply(void 0,arguments)}}},[t._v("抢沙发")])]),t.submit?n("v-uni-view",{staticClass:"comment-submit-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeInput.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"comment-add",style:"bottom:"+t.KeyboardHeight+"px",on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"comment-submit"},[n("v-uni-view",{staticClass:"btn-click cancel",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeInput.apply(void 0,arguments)}}},[t._v("取消")]),n("v-uni-view",[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showTag,expression:"showTag"}],staticClass:"replayTag"},[n("v-uni-view",[t._v("回复在 "+t._s(t.pUser)+" 的评论下")]),n("v-uni-view",{staticClass:"replyTagClose",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tagClose.apply(void 0,arguments)}}},[t._v("×")])],1)],1),n("v-uni-view",[n("v-uni-view",{staticClass:"btn-click",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.add.apply(void 0,arguments)}}},[t._v("发布")])],1)],1),n("v-uni-textarea",{staticClass:"textarea",attrs:{placeholder:t.placeholder,"adjust-position":!1,"show-confirm-bar":!1,focus:t.focus,maxlength:"800"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.blur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.focusOn.apply(void 0,arguments)}},model:{value:t.commentReq.content,callback:function(e){t.$set(t.commentReq,"content",e)},expression:"commentReq.content"}})],1)],1):t._e()],1)},a=[]},"55bc":function(t,e,n){var i=n("0008");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("0d97fe5c",i,!0,{sourceMap:!1,shadowMode:!1})},"595e":function(t,e,n){"use strict";n.r(e);var i=n("1f5d"),a=n("1cea");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("d295");var c=n("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"596537b4",null,!1,i["a"],void 0);e["default"]=s.exports},"59e1":function(t,e,n){"use strict";(function(t){n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("99af"),n("498a"),n("14d9"),n("ac1f"),n("5319"),n("d3b7"),n("159b");var i=n("5c9a"),a=(n("2a99"),{data:function(){return{articleId:void 0,commentData:{comment:[],commentSize:0,readNumer:0},articleInfo:{},article:{title:"文章标题",content:"文章内容",author:{name:"作者名字",avatar:"@/static/author-avatar.png"},publishTime:1622586784e3,comments:[{id:1,content:"评论内容1",user:{name:"评论者1",avatar:"@/static/user1-avatar.png"}},{id:2,content:"评论内容2",user:{name:"评论者2",avatar:"@/static/user2-avatar.png"}}]},newComment:""}},methods:{focusOn:function(){},commentList:function(){var t=this;this.$request("/system/comments/get-article-comment/"+this.articleId,"get").then((function(e){t.commentData={readNumer:193,commentSize:e.data.length,comment:t.getTree(e.data)}}))},preView:function(e){uni.previewImage({current:e,urls:[e],longPressActions:{itemList:["发送给朋友","保存图片"],success:function(e){t("log","长按图片成功",e," at pages/square/squareDetils.vue:92")},fail:function(e){t("log","长按图片失败",e," at pages/square/squareDetils.vue:95")}}})},add:function(t){var e=this;this.$request("/system/comments","post",{articleId:this.articleId,parentId:t.pId,commentText:t.content}).then((function(t){uni.showToast({title:"评论成功！"}),e.commentList()}))},del:function(t){var e=this;this.$request("/system/comments/"+t,"delete").then((function(t){uni.showToast({title:"删除成功！"}),e.commentList()}))},formatDate:function(t){var e=new Date(t),n=e.getFullYear(),i=e.getMonth()+1,a=e.getDate(),o=e.getHours(),c=e.getMinutes(),s="".concat(n,"/").concat(i,"/").concat(a," ").concat(o,":").concat(c);return s},publishComment:function(){if(""!==this.newComment.trim()){var t={id:this.article.comments.length+1,content:this.newComment,user:{name:"当前用户",avatar:"@/static/current-user-avatar.png"}};this.article.comments.push(t),this.newComment=""}},articlesInfo:function(){var e=this;uni.showLoading({title:"正在加载！"}),this.$request("/articles/"+this.articleId,"get").then((function(n){e.articleInfo=n.data,t("log",e.articleInfo.content," at pages/square/squareDetils.vue:153"),null==e.articleInfo.content&&(e.articleInfo.content=""),e.articleInfo.content=e.articleInfo.content.replace(/\/dev-api/g,i.BASE_URL),e.articleInfo.content=e.articleInfo.content.replace(/\<img/gi,'<img style="width: 100%;height:auto;"'),uni.hideLoading()}))},getTree:function(t){var e=[],n={};return t.forEach((function(t){n[t.id]=t})),t.forEach((function(t){var i=n[t.parentId];i?(i.children||(i.children=[])).push(t):e.push(t)})),e},onLoad:function(t){t.id||uni.navigateTo({url:"/pages/square/square"}),this.articleId=t.id,this.articlesInfo(),this.commentList()}}});e.default=a}).call(this,n("0de9")["log"])},"8b22":function(t,e,n){"use strict";var i=n("0ca5"),a=n.n(i);a.a},"8bcb":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a434"),n("a9e3");var i={name:"hb-comment",props:{cmData:{type:Object,default:function(){return null}},deleteTip:{type:String,default:function(){return"操作不可逆，如果评论下有子评论，也将被一并删除，确认？"}}},watch:{cmData:{handler:function(t,e){this.init(t)},immediate:!0}},data:function(){return{emptyAvatar:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABF5JREFUWEfFl11oHFUUx//nbmKwxdJ9qFL7YPEhRJC2gljjF60WG0WsoNkWfSnZ7Jy7FVPF0AoKpmBFqyIG3Jk7G1iIQXHbBz+KbbGtRfBbMe2LseKjiVDoiqIhwZ0jV3fb3cnM7kQCuU+7M+ec/+9+nHPPEJZ50DLrY1EApVJp9fz8/BYRuZ2INgDYWJvAWRE5R0RnZmZmPh4ZGZlPOrFEAMVi8e4gCPYSUZ+IXGGFgiCYIaJpKyQi1yql1orIFgAXARxRSvm5XO67diBtAYwxRQCDAE4RUUkpdWxwcNCKLBiu665TSj0kIpqIbgTgMzO3gmgJYIz5CMB9AIaZ+bXGQMVi8RoRuZeI/lZKHc1ms3/U34+Pj6+cnZ3dC+AggGPMfH8cRCyAMUZqThlmPlwPUCgU0qlUyq7Kww1BrbjHzPsahYwx/QDK9hkzR2pFPjTGnAWwIexkjOkRkRIR3Rozo5Miskdr/VMIxE7mHDPXD+2l1wsA6nseBMHmfD7/dSjQOwB2tTlYC/bddd1blFJfARhj5lyjfxNA7bSfitpz3/d3iYgFaDuUUjeHM8AY8zSAV5VS9+RyudP1IE0Axpj3Aaxk5m1hFc/zPiWiO9uq/2dwiJn3h22NMScB/MnMOxYAjI6Orurq6rpgU0hrXYpw/hFAd0KAD5n5wbCt7/t7ROT1ubm5NUNDQ7/b95dWwHXd7Uqp452dnVcPDAxciACwDlclAbAFynGcdRGr2EtEnwdB0JfP5080ARhjDhLRbY7jbI0SMcZUAKxOAgDgN2ZOx8SxGfEiMz/bBOD7/lgQBCu01o/GOH4PYFNCgElmvinK1vf9X2xxchzHVtfLW2CMOQpgipmHYwBeBtBUaOJgRKSgtX48Js63AH5l5geaADzPe1cpddFxnHyM42YAXyZYAXt+epn557iVFJHzWuudYYDnlFJ9juPcESfi+35JRHa3gdjPzIfibIwxNtPe0Fq/EAZ4hIhcZl4T5+y67nql1CcA1kfZENFnrSZQ6ycqItKvtT4SBthIRJMdHR092WzW5nzk8H1/WEReiQHY4TjOB3G+nuf9qyEim7TW9r65fAjL5fKVlUrlPICXmPnNFquwWym1oFBZ+yAItubz+TMtAJ4gon3pdLo7k8nMNgHYP7ZeE5EWkbuYeaYx0NjY2HXValUDeApAV4zIJIADzPxe+H2hULg+lUp9U6sBl3qLprugXC6nKpXKF0R02nGcZ2wQ3/e3ichOEckQ0aoEWQDbsgF4a3p6eqLeH3qeN0FE3el0ujeTyVTrcaKuY1uIjIg8CaCfiLYnEW1hY4WPi8gEgMeY+e1G27iGxHYxtptZynGYmTPhgK1asqWEiBRfcAjDdMaYpYCIFW8LUMuM54nIsb3/YvbDXskiYtuzA6382n4X1CDWAnCSgNSFa98ETakcWbwWMytjzAoAPUEQ3JBKpXrs75r/VLVanVJK/VC7Uf9KGjfRCiQN9n/slh3gHz9i4jC+FVL5AAAAAElFTkSuQmCC",commentData:null,placeholder:"请输入评论",commentReq:{pId:null,content:null},pUser:null,showTag:!1,focus:!1,submit:!1,KeyboardHeight:0}},mounted:function(){var t=this;uni.onKeyboardHeightChange((function(e){t.KeyboardHeight=e.height}))},methods:{init:function(t){this.commentData=t},stopPrevent:function(){},reply:function(t,e,n){this.pUser=t,this.commentReq.pId=n,this.commentReq.content=e?"@"+e+" ":"",this.showTag=!0,this.commentInput()},confirmDelete:function(t){var e=this;uni.showModal({title:"警告",content:e.deleteTip,confirmText:"确认删除",success:function(n){n.confirm&&e.$emit("del",t)}})},add:function(){null==this.commentReq.content||this.commentReq.content.length<2?uni.showToast({title:"评论内容过短",duration:2e3}):(this.focus=!1,this.submit=!1,this.$emit("add",this.commentReq))},like:function(t){this.$emit("like",t)},addComplete:function(){this.commentReq.content=null,this.tagClose(),this.closeInput()},likeComplete:function(t){for(var e in this.commentData.comment){if(this.commentData.comment[e].id==t)return this.commentData.comment[e].hasLike?this.commentData.comment[e].likeNum--:this.commentData.comment[e].likeNum++,void(this.commentData.comment[e].hasLike=!this.commentData.comment[e].hasLike);for(var n in this.commentData.comment[e].children)if(this.commentData.comment[e].children[n].id==t)return this.commentData.comment[e].children[n].hasLike?this.commentData.comment[e].children[n].likeNum--:this.commentData.comment[e].children[n].likeNum++,void(this.commentData.comment[e].children[n].hasLike=!this.commentData.comment[e].children[n].hasLike)}},deleteComplete:function(t){for(var e in this.commentData.comment){for(var n in this.commentData.comment[e].children)if(this.commentData.comment[e].children[n].id==t)return void this.commentData.comment[e].children.splice(Number(n),1);if(this.commentData.comment[e].id==t)return void this.commentData.comment.splice(Number(e),1)}},showMore:function(t){for(var e in this.commentData.comment){if(this.commentData.comment[e].id==t)return this.commentData.comment[e].hasShowMore=!this.commentData.comment[e].hasShowMore,void this.$forceUpdate();for(var n in this.commentData.comment[e].children)if(this.commentData.comment[e].children[n].id==t)return this.commentData.comment[e].children[n].hasShowMore=!this.commentData.comment[e].children[n].hasShowMore,void this.$forceUpdate()}},blur:function(){this.focus=!1},focusOn:function(){this.$emit("focusOn")},tagClose:function(){this.showTag=!1,this.pUser=null,this.commentReq.pId=null},commentInput:function(){var t=this;this.submit=!0,setTimeout((function(){t.focus=!0}),50)},closeInput:function(){this.focus=!1,this.submit=!1}}};e.default=i},d295:function(t,e,n){"use strict";var i=n("55bc"),a=n.n(i);a.a},da46:function(t,e,n){t.exports=n.p+"static/img/header.7cd7836a.jpg"},fcb8:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.hb-comment[data-v-0f77cf47]{padding:%?10?%}.top-read[data-v-0f77cf47]{font-size:%?28?%;padding-left:%?10?%;color:#999}.seg_line_box[data-v-0f77cf47]{display:flex;height:%?5?%;justify-content:space-between;margin:%?5?% 0}.seg_line[data-v-0f77cf47]{width:45%;border-bottom:%?1?% solid #e1e1e1}.seg_dot[data-v-0f77cf47]{width:8%;border-bottom:%?5?% dotted #dbdbdb}.comment-num[data-v-0f77cf47]{display:flex;justify-content:space-between;align-items:center;padding:%?20?% 0}.comment-box[data-v-0f77cf47]{padding:%?10?% 0}.comment-box-item[data-v-0f77cf47]{display:flex}.comment-main[data-v-0f77cf47]{padding-left:%?20?%}.comment-main-top[data-v-0f77cf47]{width:%?600?%;padding-top:%?6?%;display:flex;justify-content:space-between}.sub-comment-main-top[data-v-0f77cf47]{width:%?510?%;padding-top:%?6?%;display:flex;justify-content:space-between}.avatar[data-v-0f77cf47]{width:%?70?%;height:%?70?%;border-radius:50%}.nick-name-box[data-v-0f77cf47]{display:flex;align-items:center}.comLogo[data-v-0f77cf47]{margin-right:%?18?%;font-size:%?22?%;border-radius:%?10?%;padding:%?5?% %?15?%;color:#fff}.com1[data-v-0f77cf47]{background-color:#d218b1}.com2[data-v-0f77cf47]{background-color:#f19c0b}.com3[data-v-0f77cf47]{background-color:#c8da85}.com4[data-v-0f77cf47]{background-color:#bfd0da}.nick-name[data-v-0f77cf47]{color:#2d8cf0}.isLike[data-v-0f77cf47]{font-size:%?28?%;padding-right:%?10?%;color:#2d8cf0}.notLike[data-v-0f77cf47]{font-size:%?28?%;padding-right:%?10?%;color:#999}.comment-main-content[data-v-0f77cf47]{padding:%?10?% %?10?% %?10?% 0}.comment-main-foot[data-v-0f77cf47]{display:flex;font-size:%?22?%}.replayTag[data-v-0f77cf47]{color:#909399;margin-bottom:5px;border:1px solid #c8c9cc;background-color:#f4f4f5;border-radius:3px;display:flex;justify-content:space-between;align-items:center;font-size:%?16?%;padding:5px 10px}.replyTagClose[data-v-0f77cf47]{font-size:20px;line-height:12px;padding:0 0 2px 5px}.foot-btn[data-v-0f77cf47]{padding-left:%?10?%;color:#007aff}.comment-sub-box[data-v-0f77cf47]{padding:%?20?% 0}.comment-sub-item[data-v-0f77cf47]{display:flex}.comment-none[data-v-0f77cf47]{padding:%?20?%;width:100%;text-align:center;color:#999}.comment-submit-box[data-v-0f77cf47]{position:fixed;display:flex;align-items:flex-end;z-index:9900;left:0;top:var(--window-top);bottom:0;background-color:rgba(0,0,0,.5);width:100%}.comment-add[data-v-0f77cf47]{position:fixed;background-color:#fff;width:100%;padding:%?5?%;border:1px solid #ddd;transition:.3s;-webkit-transition:.3s}.btn-click[data-v-0f77cf47]{color:#007aff;font-size:%?28?%;padding:%?10?%}.cancel[data-v-0f77cf47]{color:#606266}.textarea[data-v-0f77cf47]{height:100px;padding:%?16?%;width:100%}.comment-submit[data-v-0f77cf47]{padding:%?5?% %?20?% 0 %?20?%;border-bottom:1px dashed #ddd;width:calc(100% - %?40?%);display:flex;justify-content:space-between;align-items:center}',""]),t.exports=e}}]);