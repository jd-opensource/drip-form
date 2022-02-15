"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[4195],{

/***/ 7065:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; }
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(27378);
// EXTERNAL MODULE: ../node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(38944);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/Layout/index.js + 23 modules
var Layout = __webpack_require__(99319);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(81884);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(50353);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(98948);
;// CONCATENATED MODULE: ./src/pages/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"box":"box_VQqj","header":"header_tuyV","container":"container_1fvT","mac":"mac_yEGn","tagline":"tagline_gTI6","subline":"subline_2jJc","typing":"typing_HuD1","blink-caret":"blink-caret_IeGT","title":"title_qag4","heroBanner":"heroBanner_4JBe","buttons":"buttons_TK4-","start":"start_BjaQ","features":"features_ENLn","featuretitle":"featuretitle_hXWG","featureitem":"featureitem_typF","featureicon":"featureicon_6Q2G","featureimgbg":"featureimgbg_BHqr","featureImage":"featureImage_fOUF","demoImage":"demoImage_ojSD","wordContainer":"wordContainer_6mWX","piccontainer":"piccontainer_52WB"});
;// CONCATENATED MODULE: ./src/pages/index.js
var features=[{feature:'语义化',desc:'简洁高效的JSON协议使得表单结构更加清晰，更有助于开发者阅读和理解，能够有效降低开发和维护成本。',imgurl:'https://m.360buyimg.com/babel/jfs/t1/137903/4/23517/13776/618e2fdbEb411a7b2/d7cb5f13dacd2f9e.png!q20.webp',link:'docs/use/unitedSchema'},{feature:'校验一体化',desc:/*#__PURE__*/react.createElement(react.Fragment,null,"\u524D\u540E\u7AEF\u6821\u9A8C\u4E00\u4F53\u5316\uFF0C\u66F4\u5177\u4FDD\u969C\u80FD\u529B\uFF0CDrip-Form\u7684\u68C0\u9A8C\u57FA\u4E8E",/*#__PURE__*/react.createElement("a",{href:"https://ajv.js.org/"},"AJV"),"\uFF0C \u65E0\u9700\u5C06\u6570\u636E\u9A8C\u8BC1\u548C\u6E05\u7406\u903B\u8F91\u7F16\u5199\u4E3A\u5197\u957F\u7684\u4EE3\u7801\uFF0C\u53EA\u9700\u8981\u5C06\u6821\u9A8C\u7684JSONSchema\u7EF4\u62A4\u5728Drip-Form\u7684JSON\u6587\u4EF6\u4E2D\uFF0C \u5C31\u53EF\u4EE5\u4EAB\u53D7\u6781\u5177\u4FDD\u969C\u529B\u7684\u5FEB\u901F\u6821\u9A8C\u529F\u80FD\u3002"),imgurl:'https://m.360buyimg.com/babel/jfs/t1/205341/32/15002/47336/618e2fe0Ea4216011/03c8f109ccd1f583.png!q20.webp',link:'docs/use/onValidate'},{feature:'可扩展',desc:"\u652F\u6301\u4E8C\u6B21\u5F00\u53D1\uFF0C\u53EF\u6269\u5C55\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u96C6\u3001\u6821\u9A8C\u96C6\u3002\u5BF9\u4E8E\u4E1A\u52A1\u5F00\u53D1\u4E2D\u7684\u7279\u6B8A\u7EC4\u4EF6\u3001\n           \u4E3B\u9898\u6216\u8005\u6821\u9A8C\u673A\u5236\uFF0CDrip-Form\u63D0\u4F9B\u4E86\u63D2\u4EF6\u6269\u5C55\u63A5\u53E3\uFF0C\u53EF\u8FDB\u884C\u81EA\u5B9A\u4E49\u5F00\u53D1\u6EE1\u8DB3\u4E1A\u52A1\u9700\u6C42\u3002\n          ",imgurl:'https://m.360buyimg.com/babel/jfs/t1/205544/27/15297/13457/618e2fe9E543aa34b/47a00e8d6322a2c2.png!q20.webp',link:'docs/expert/customTheme'},{feature:'自动化',desc:"\u8868\u5355\u754C\u9762\u7531JSON\u6570\u636E\u81EA\u52A8\u751F\u6210\uFF0C\u8868\u5355\u4E2D\u7684\u7EC4\u4EF6\u3001\u6837\u5F0F\u3001\u8868\u5355\u9879\u4E4B\u95F4\u7684\u4EA4\u4E92\u548C\u6821\u9A8C\u903B\u8F91\u7B49\u90FD\u7531JSON\u6587\u4EF6\u7EF4\u62A4\uFF1B\n           Drip-Form\u4EE5\u6570\u636E\u4E3A\u6838\u5FC3\u9A71\u52A8\uFF0C\u5F00\u53D1\u4EBA\u5458\u53EA\u9700\u8981\u5173\u6CE8\u6570\u636E\u5C42\u4FBF\u53EF\u914D\u7F6E\u6EE1\u8DB3\u4E1A\u52A1\u9700\u6C42\u7684\u8868\u5355\u3002\n         ",imgurl:'https://m.360buyimg.com/babel/jfs/t1/216709/33/4211/31064/618e11e1E35c025f5/e5b5d119518a826e.png!q20.webp',link:'docs/expert/automatic'},{feature:'使用示例',desc:"\u7EF4\u62A4JSON\u6570\u636E\u5C42\uFF0C\u5373\u53EF\u5B9E\u73B0\u8868\u5355\u7684\u9AD8\u5EA6\u81EA\u5B9A\u4E49\uFF0C\u642D\u914D\u53EF\u89C6\u5316\u8868\u5355\u751F\u6210\u5668\u7B49\u5DE5\u5177\u53EF\u8FDB\u4E00\u6B65\u964D\u4F4E\u5F00\u53D1\u548C\u7EF4\u62A4\u6210\u672C\uFF1B\n           \u6B64\u5916\uFF0C\u652F\u6301\u8054\u52A8\u3001\u6821\u9A8C\u3001\u5D4C\u5957\u80FD\u529B\uFF0C\u7075\u6D3B\u5316\u7A0B\u5EA6\u9AD8\uFF1B\u8868\u5355\u7EC4\u4EF6\u548C\u6837\u5F0F\u652F\u6301\u81EA\u5B9A\u4E49\u6269\u5C55\uFF0C\u53EF\u6EE1\u8DB3\u666E\u904D\u7684\u4E1A\u52A1\u9700\u6C42\u3002",imgurl:'https://m.360buyimg.com/babel/jfs/t1/220991/23/2317/345227/617bc017E8450f570/dc8a7066180ea370.png',isImg:true}];function Home(){var context=(0,useDocusaurusContext/* default */.Z)();var _context$siteConfig=context.siteConfig,siteConfig=_context$siteConfig===void 0?{}:_context$siteConfig;(0,react.useEffect)(function(){window.addEventListener('scroll',animateLoadThrottle);return function(){window.removeEventListener('scroll',animateLoadThrottle);};},[]);var animateLoad=function animateLoad(){var count=0;var imgs=document.getElementsByClassName('animate');if(count>=imgs.length){window.removeEventListener('scroll',animateLoadThrottle);}for(var i=count;i<imgs.length;i++){var img=imgs[i];var _img$getBoundingClien=img.getBoundingClientRect(),top=_img$getBoundingClien.top;if(top>document.documentElement.clientHeight+100){break;}img.classList.add('loading');count++;if(count>=imgs.length){window.removeEventListener('scroll',animateLoadThrottle);}}};function throttle(fn,delay){if(delay===void 0){delay=1000;}var prev=Date.now();return function(){var context=this;var args=arguments;var now=Date.now();if(now-prev>=delay){fn.apply(context,args);prev=Date.now();}};}var animateLoadThrottle=throttle(animateLoad,1000);return/*#__PURE__*/react.createElement(Layout/* default */.Z,null,/*#__PURE__*/react.createElement("div",{className:styles_module.box},/*#__PURE__*/react.createElement("header",{className:styles_module.header},/*#__PURE__*/react.createElement("div",{className:styles_module.container},/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("div",{className:styles_module.title},siteConfig.title),/*#__PURE__*/react.createElement("p",{className:styles_module.tagline},"\u57FA\u4E8EReact\u548CJsonSchema\u7684"),/*#__PURE__*/react.createElement("p",{className:(0,clsx_m/* default */.Z)(styles_module.tagline,styles_module.subline)},"\u52A8\u6001\u8868\u5355\u89E3\u51B3\u65B9\u6848")),/*#__PURE__*/react.createElement("div",{className:styles_module.buttons},/*#__PURE__*/react.createElement(Link/* default */.Z,{to:(0,useBaseUrl/* default */.Z)('docs/'),className:styles_module.start},"Get Started"))),/*#__PURE__*/react.createElement("img",{className:styles_module.mac,src:"http://m.360buyimg.com/babel/jfs/t1/169605/10/22697/469965/617bdbe7Ef9daf337/42eb203310a85ae5.png"})),/*#__PURE__*/react.createElement("main",null,(features==null?void 0:features.length)>0&&/*#__PURE__*/react.createElement(react.Fragment,null,features.map(function(item,index){return/*#__PURE__*/react.createElement("section",{className:styles_module.features,key:index,style:{flexDirection:index%2?'row':'row-reverse'}},/*#__PURE__*/react.createElement("div",{className:styles_module.wordContainer},/*#__PURE__*/react.createElement("div",{className:styles_module.featuretitle},item.feature),/*#__PURE__*/react.createElement("div",{className:styles_module.featureitem},item.desc),item.link&&/*#__PURE__*/react.createElement("div",{className:styles_module.buttons},/*#__PURE__*/react.createElement(Link/* default */.Z,{to:(0,useBaseUrl/* default */.Z)(item.link),className:styles_module.start},"\u7ACB\u5373\u4E86\u89E3"))),/*#__PURE__*/react.createElement("div",{className:styles_module.piccontainer,style:{justifyContent:index%2?'flex-end':'flex-start'}},/*#__PURE__*/react.createElement("div",{className:"animate"},item!=null&&item.isImg?/*#__PURE__*/react.createElement("img",{className:styles_module.demoImage,src:item.imgurl}):/*#__PURE__*/react.createElement("div",{className:styles_module.featureimgbg},/*#__PURE__*/react.createElement("img",{className:styles_module.featureImage,src:item.imgurl})))));})))));}/* harmony default export */ var pages = (Home);

/***/ })

}]);