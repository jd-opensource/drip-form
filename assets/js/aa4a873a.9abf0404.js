"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[8860],{

/***/ 35318:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zo": function() { return /* binding */ MDXProvider; },
/* harmony export */   "kt": function() { return /* binding */ createElement; }
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27378);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 70517:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27378);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabItem(_ref){var children=_ref.children,hidden=_ref.hidden,className=_ref.className;return/*#__PURE__*/React.createElement("div",{role:"tabpanel",hidden:hidden,className:className},children);}/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (TabItem)));

/***/ }),

/***/ 77600:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(27378);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var exports_useIsBrowser = __webpack_require__(76457);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/UserPreferencesContext.js
var theme_UserPreferencesContext = __webpack_require__(84956);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useUserPreferencesContext.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useUserPreferencesContext_useUserPreferencesContext(){var context=useContext(UserPreferencesContext);if(context==null){throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');}return context;}/* harmony default export */ var hooks_useUserPreferencesContext = ((/* unused pure expression or super */ null && (useUserPreferencesContext_useUserPreferencesContext)));
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/index.js + 28 modules
var lib = __webpack_require__(29472);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/Tabs/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"tabItem":"tabItem_a7dU"});
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/Tabs/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// A very rough duck type, but good enough to guard against mistakes while
// allowing customization
function isTabItem(comp){return typeof comp.props.value!=='undefined';}function TabsComponent(props){var _ref2,_children$find,_children$;var lazy=props.lazy,block=props.block,defaultValueProp=props.defaultValue,valuesProp=props.values,groupId=props.groupId,className=props.className;var children=Children.map(props.children,function(child){if(/*#__PURE__*/isValidElement(child)&&isTabItem(child)){return child;}// child.type.name will give non-sensical values in prod because of
// minification, but we assume it won't throw in prod.
throw new Error("Docusaurus error: Bad <Tabs> child <"+(// @ts-expect-error: guarding against unexpected cases
typeof child.type==='string'?child.type:child.type.name)+">: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique \"value\" prop.");});var values=valuesProp!=null?valuesProp:children.map(function(_ref){var _ref$props=_ref.props,value=_ref$props.value,label=_ref$props.label;return{value:value,label:label};});var dup=duplicates(values,function(a,b){return a.value===b.value;});if(dup.length>0){throw new Error("Docusaurus error: Duplicate values \""+dup.map(function(a){return a.value;}).join(', ')+"\" found in <Tabs>. Every value needs to be unique.");}// When defaultValueProp is null, don't show a default tab
var defaultValue=defaultValueProp===null?defaultValueProp:(_ref2=defaultValueProp!=null?defaultValueProp:(_children$find=children.find(function(child){return child.props.default;}))==null?void 0:_children$find.props.value)!=null?_ref2:(_children$=children[0])==null?void 0:_children$.props.value;if(defaultValue!==null&&!values.some(function(a){return a.value===defaultValue;})){throw new Error("Docusaurus error: The <Tabs> has a defaultValue \""+defaultValue+"\" but none of its children has the corresponding value. Available values are: "+values.map(function(a){return a.value;}).join(', ')+". If you intend to show no default tab, use defaultValue={null} instead.");}var _useUserPreferencesCo=useUserPreferencesContext(),tabGroupChoices=_useUserPreferencesCo.tabGroupChoices,setTabGroupChoices=_useUserPreferencesCo.setTabGroupChoices;var _useState=useState(defaultValue),selectedValue=_useState[0],setSelectedValue=_useState[1];var tabRefs=[];var _useScrollPositionBlo=useScrollPositionBlocker(),blockElementScrollPositionUntilNextRender=_useScrollPositionBlo.blockElementScrollPositionUntilNextRender;if(groupId!=null){var relevantTabGroupChoice=tabGroupChoices[groupId];if(relevantTabGroupChoice!=null&&relevantTabGroupChoice!==selectedValue&&values.some(function(value){return value.value===relevantTabGroupChoice;})){setSelectedValue(relevantTabGroupChoice);}}var handleTabChange=function handleTabChange(event){var newTab=event.currentTarget;var newTabIndex=tabRefs.indexOf(newTab);var newTabValue=values[newTabIndex].value;if(newTabValue!==selectedValue){blockElementScrollPositionUntilNextRender(newTab);setSelectedValue(newTabValue);if(groupId!=null){setTabGroupChoices(groupId,newTabValue);}}};var handleKeydown=function handleKeydown(event){var _focusElement;var focusElement=null;switch(event.key){case'ArrowRight':{var nextTab=tabRefs.indexOf(event.currentTarget)+1;focusElement=tabRefs[nextTab]||tabRefs[0];break;}case'ArrowLeft':{var prevTab=tabRefs.indexOf(event.currentTarget)-1;focusElement=tabRefs[prevTab]||tabRefs[tabRefs.length-1];break;}default:break;}(_focusElement=focusElement)==null?void 0:_focusElement.focus();};return/*#__PURE__*/React.createElement("div",{className:"tabs-container"},/*#__PURE__*/React.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:clsx('tabs',{'tabs--block':block},className)},values.map(function(_ref3){var value=_ref3.value,label=_ref3.label;return/*#__PURE__*/React.createElement("li",{role:"tab",tabIndex:selectedValue===value?0:-1,"aria-selected":selectedValue===value,className:clsx('tabs__item',styles.tabItem,{'tabs__item--active':selectedValue===value}),key:value,ref:function ref(tabControl){return tabRefs.push(tabControl);},onKeyDown:handleKeydown,onFocus:handleTabChange,onClick:handleTabChange},label!=null?label:value);})),lazy?/*#__PURE__*/cloneElement(children.filter(function(tabItem){return tabItem.props.value===selectedValue;})[0],{className:'margin-vert--md'}):/*#__PURE__*/React.createElement("div",{className:"margin-vert--md"},children.map(function(tabItem,i){return/*#__PURE__*/cloneElement(tabItem,{key:i,hidden:tabItem.props.value!==selectedValue});})));}function Tabs(props){var isBrowser=useIsBrowser();return/*#__PURE__*/React.createElement(TabsComponent// Remount tabs after hydration
// Temporary fix for https://github.com/facebook/docusaurus/issues/5653
,_extends({key:String(isBrowser)},props));}

/***/ }),

/***/ 84956:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27378);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UserPreferencesContext=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);/* harmony default export */ __webpack_exports__["Z"] = (UserPreferencesContext);

/***/ }),

/***/ 65098:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },
/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },
/* harmony export */   "metadata": function() { return /* binding */ metadata; },
/* harmony export */   "toc": function() { return /* binding */ toc; },
/* harmony export */   "default": function() { return /* binding */ MDXContent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_drip_form_drip_form_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25773);
/* harmony import */ var _home_runner_work_drip_form_drip_form_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30808);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27378);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35318);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98948);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77600);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70517);
var _excluded=["components"];var frontMatter={id:'uiComponents',title:'uiComponents 主题'};var contentTitle=undefined;var metadata={"unversionedId":"use/uiComponents","id":"use/uiComponents","isDocsHomePage":false,"title":"uiComponents 主题","description":";","source":"@site/docs/use/uiComponents 主题.mdx","sourceDirName":"use","slug":"/use/uiComponents","permalink":"/drip-form/docs/use/uiComponents","editUrl":"https://github.com/JDFED/drip-form/edit/master/website/docs/use/uiComponents 主题.mdx","tags":[],"version":"current","frontMatter":{"id":"uiComponents","title":"uiComponents 主题"},"sidebar":"docs","previous":{"title":"unitedSchema JSON配置","permalink":"/drip-form/docs/use/unitedSchema"},"next":{"title":"customComponents 自定义组件","permalink":"/drip-form/docs/use/customComponents"}};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'单一主题',id:'单一主题',children:[{value:'使用 Drip-Form 默认主题',id:'使用-drip-form-默认主题',children:[],level:3}],level:2},{value:'混合主题',id:'混合主题',children:[{value:'使用场景',id:'使用场景',children:[],level:3},{value:'优势',id:'优势',children:[],level:3},{value:'使用方法',id:'使用方法',children:[],level:3}],level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_drip_form_drip_form_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_drip_form_drip_form_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u4F7F\u7528\u4E3B\u9898\u524D\u5FC5\u987B\u5148\u5B89\u88C5\u76F8\u5E94\u4E3B\u9898\uFF0C\u8BE6\u89C1",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{href:(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)('docs/start/install'),target:"_blank"},"\u5B89\u88C5 drip-form \u548C\u4E3B\u9898"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u5728",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"unitedSchema"),"\u4E2D\u53EF\u901A\u8FC7",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"theme"),"\u5C5E\u6027\u7528\u6765\u63A7\u5236\u9ED8\u8BA4\u4E3B\u9898\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u540C\u65F6\u9700\u8981\u7ED9",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Drip-Form"),"\u4F20\u9012",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"uiComponents"),"props\u89C4\u5B9A\u4F7F\u7528\u7684\u4E3B\u9898\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"unitedSchema")," \u4E2D\u6BCF\u4E2A\u8868\u5355\u9879\u5BF9\u5E94\u7684 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"schema"),"\u4E2D\u90FD\u6709\u4E00\u4E2A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"theme"),"\u5C5E\u6027\u6765\u63A7\u5236\u5177\u4F53\u7684\u7279\u5B9A\u4E3B\u9898\u3002\u8BE6\u89C1",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"#%E6%B7%B7%E5%90%88%E4%B8%BB%E9%A2%98"},"\u6DF7\u5408\u4E3B\u9898")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u63A5\u4E0B\u6765\u6211\u4EEC\u5C06\u4F1A\u5BF9\u5355\u4E00\u4E3B\u9898\u3001\u6DF7\u5408\u4E3B\u9898\u9010\u4E2A\u8FDB\u884C\u4ECB\u7ECD\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"单一主题"},"\u5355\u4E00\u4E3B\u9898"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"使用-drip-form-默认主题"},"\u4F7F\u7528 Drip-Form \u9ED8\u8BA4\u4E3B\u9898"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-json","metastring":"title=\"unitedSchema.json\"","title":"\"unitedSchema.json\""},"{\n  \"type\": \"object\",\n  \"validateTime\": \"change\",\n  \"theme\": \"drip-theme\",\n  \"schema\": [\n    ...\n  ]\n}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-jsx"},"import React, { memo } from 'react'\n// \u5F15\u5165\u6838\u5FC3\u5305\u548C\u4E3B\u9898\nimport DripForm from '@jdfed/drip-form'\nimport dripTheme from '@jdfed/drip-form-theme-antd'\nimport '@jdfed/drip-form-theme-antd/dist/index.css'\n// \u5F15\u5165\u914D\u7F6E\u9879\nimport unitedSchema from './unitedSchema.json'\n\nconst Form = memo(() => {\n    return <div>\n        <DripForm\n          unitedSchema={unitedSchema}\n          uiComponents={{'drip-theme': dripTheme}}\n        />\n      </div>\n})\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5982\u679C\u4F60\u7684\u9879\u76EE\u5E76\u6CA1\u6709\u63A5\u5165",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"less"),"\u7684\u6253\u5305\uFF0C\u53EF\u4EE5\u5FFD\u7565 \u9ED8\u8BA4\u4E3B\u9898 \u7684\u6837\u5F0F\u6C61\u67D3\u95EE\u9898\uFF0C\u4E3B\u9898\u5305\u4E5F\u63D0\u4F9B\u4E86 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"css")," \u5F62\u5F0F\u7684\u5F15\u5165\uFF0C\u53EA\u9700\u8981\u5C06",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Form.jsx"),"\u4E2D\u5F15\u5165\u4E3B\u9898\u5305\u7684\u5F62\u5F0F\u6539\u4E3A\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"混合主题"},"\u6DF7\u5408\u4E3B\u9898"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"使用场景"},"\u4F7F\u7528\u573A\u666F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5F53\u9ED8\u8BA4\u4E3B\u9898\u6682\u65F6\u4E0D\u652F\u6301\u67D0\u4E2A\u8868\u5355\u63A7\u4EF6\uFF0C\u53EF\u4EE5\u5BF9\u67D0\u4E2A\u6216\u67D0\u4E9B\u8868\u5355\u7279\u5B9A\u4F7F\u7528\u81EA\u5B9A\u4E49\u4E3B\u9898\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"优势"},"\u4F18\u52BF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u76F8\u5F53\u4E8E\u5355\u4E00\u4E3B\u9898\uFF0C\u6DF7\u5408\u4E3B\u9898\u53EF\u4EE5\u5FEB\u901F\u652F\u6301\u7279\u5B9A\u9700\u6C42"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"使用方法"},"\u4F7F\u7528\u65B9\u6CD5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-json","metastring":"title=\"unitedSchema.json\"","title":"\"unitedSchema.json\""},"{\n    \"validateTime\" : \"submit\",\n    \"type\": \"object\",\n    \"theme\": \"drip-theme\",\n    \"schema\": [ \n    {\n      \"fieldKey\": \"selectText\",\n      \"type\": \"object\",\n      \"title\": \"\u5355\u9009\u8F93\u5165\",\n      \"ui\": {\n        \"type\": \"selectText\",\n        \"placeholder\": \"\u8BF7\u9009\u62E9\",\n        \"allowClear\": true,\n        \"multiple\": true,\n        \"requestCache\": true,\n        \"options\": [\n            { \"label\": \"\u5317\u4EAC\", \"value\": \"0\" },\n            { \"label\": \"\u4E0A\u6D77\", \"value\": \"1\" },\n            { \"label\": \"\u6210\u90FD\", \"value\": \"2\" },\n            { \"label\": \"\u6B66\u6C49\", \"value\": \"3\" }\n        ]\n      }\n    },\n    {\n      \"fieldKey\": \"babelRadio\",\n      \"type\": \"string\",\n      \"title\": \"\u5355\u9009\",\n      \"ui\": {\n        \"type\": \"radio\",\n        \"theme\": \"babel-ui\", //\u81EA\u5B9A\u4E49\u4E3B\u9898\n        \"options\": [\n           { \n              \"label\": \"\u5317\u4EAC\",\n              \"value\": \"0\",\n              \"description\": {\n                  \"title\": \"<p>\u5185\u5BB9</p>\u8FD9\u662Fbabel-ui\u7684tooltip\u5185\u5BB9\uFF0Chover\u5C55\u5F00\",\n                  \"trigger\":\"hover\"\n              }\n           },\n           {\n              \"label\": \"\u4E0A\u6D77\",\n              \"value\": \"1\",\n              \"description\": {\n                  \"title\": \"<p>\u5185\u5BB9</p>\u8FD9\u662Fbabel-ui\u7684tooltip\u5185\u5BB9\uFF0C\u70B9\u51FB\u5C55\u5F00\",\n                  \"trigger\":\"click\"\n              }\n            },\n            { \"label\": \"\u6210\u90FD\", \"value\": \"2\" },\n            { \"label\": \"\u6B66\u6C49\", \"value\": \"3\" }\n        ]\n      }\n    }\n  ]\n}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u9ED8\u8BA4\u4F7F\u7528 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"drip-theme"),"\u4E3B\u9898\uFF0C\u7B2C\u4E8C\u4E2A radio \u4F7F\u7528 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"other")," \u4E3B\u9898"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-jsx","metastring":"title=\"Form.jsx\"","title":"\"Form.jsx\""},"import DripForm from '@jdfed/drip-form'\n//highlight-start\n// \u4EC5\u4E3A\u793A\u4F8B\uFF0Cother\u4E3A\u4F60\u81EA\u5B9A\u4E49\u4E3B\u9898\nimport other from 'other'\nimport dripTheme from '@jdfed/drip-form-theme-antd'\n\nconst Form = memo(() => {\n    return <div>\n            <BabelForm\n              dataSchema={data}\n              uiSchema={ui}\n              uiComponents={{\n                //highlight-start\n                'drip-theme': dripTheme,\n                'other': other,\n                //highlight-end\n              }}\n            />\n           </div>\n})\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:"https://storage.360buyimg.com/imgtools/15a823244a-85510590-4cf9-11ec-ba01-fb2536faa70c.jpeg",alt:"\u56FE\u7247\u52A0\u8F7D\u51FA\u9519"}));};MDXContent.isMDXComponent=true;

/***/ })

}]);