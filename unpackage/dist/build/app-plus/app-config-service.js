
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/login","pages/teacher/effect/effectDetils","pages/control/index","pages/knowledge/index","pages/knowledge/knowledgeInfo","pages/effect/effect","pages/effect/effectInfo","pages/effect/effermanager","pages/square/square","pages/square/addSquare","pages/zhuceinfo/zhuceinfo","pages/square/squareDetils","pages/study/study","pages/mytask/index","pages/myinfo/myinfo","pages/teacher/effect/effect","pages/teacher/teacher","pages/effect/uploadEffect","pages/teacher/taskmager/taskmager","pages/teacher/effect/effect","pages/teacher/taskmager/uploadResult","pages/teacher/effect/effermanager"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"studyApp","compilerVersion":"3.8.4","entryPagePath":"pages/login/login","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/login","meta":{"isQuit":true},"window":{"navigationBarTitleText":"登录"}},{"path":"/pages/teacher/effect/effectDetils","meta":{},"window":{"navigationBarTitleText":"详情"}},{"path":"/pages/control/index","meta":{},"window":{"navigationBarTitleText":"面板控制"}},{"path":"/pages/knowledge/index","meta":{},"window":{"navigationBarTitleText":"知识库"}},{"path":"/pages/knowledge/knowledgeInfo","meta":{},"window":{"navigationBarTitleText":"知识库"}},{"path":"/pages/effect/effect","meta":{},"window":{"navigationBarTitleText":"成效分析"}},{"path":"/pages/effect/effectInfo","meta":{},"window":{"navigationBarTitleText":"成效详情"}},{"path":"/pages/effect/effermanager","meta":{},"window":{"navigationBarTitleText":"成效管理"}},{"path":"/pages/square/square","meta":{},"window":{"navigationBarTitleText":"广场","navigationBarBackgroundColor":"white","backgroundColor":"white"}},{"path":"/pages/square/addSquare","meta":{},"window":{"navigationBarTitleText":"发布文章","navigationBarBackgroundColor":"white","backgroundColor":"white"}},{"path":"/pages/zhuceinfo/zhuceinfo","meta":{},"window":{"navigationBarTitleText":"注册"}},{"path":"/pages/square/squareDetils","meta":{},"window":{"navigationBarTitleText":"文章详情"}},{"path":"/pages/study/study","meta":{},"window":{"navigationBarTitleText":"学情"}},{"path":"/pages/mytask/index","meta":{},"window":{"navigationBarTitleText":"任务"}},{"path":"/pages/myinfo/myinfo","meta":{},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/teacher/effect/effect","meta":{},"window":{"navigationBarTitleText":"成效管理"}},{"path":"/pages/teacher/teacher","meta":{},"window":{"navigationBarTitleText":"教师端"}},{"path":"/pages/effect/uploadEffect","meta":{},"window":{"navigationBarTitleText":"上传证书"}},{"path":"/pages/teacher/taskmager/taskmager","meta":{},"window":{"navigationBarTitleText":"教师任务管理"}},{"path":"/pages/teacher/taskmager/uploadResult","meta":{},"window":{"navigationBarTitleText":"成效管理"}},{"path":"/pages/teacher/effect/effermanager","meta":{},"window":{"navigationBarTitleText":"成效管理"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
