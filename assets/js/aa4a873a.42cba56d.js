"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[8860],{

/***/ 3905:
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

/***/ 72905:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ TabItem; }
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(27378);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"tabItem":"tabItem_Ymn6"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabItem(_ref){var children=_ref.children,hidden=_ref.hidden,className=_ref.className;return/*#__PURE__*/react.createElement("div",{role:"tabpanel",className:(0,clsx_m/* default */.Z)(styles_module.tabItem,className),hidden:hidden},children);}

/***/ }),

/***/ 77928:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Tabs; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(27378);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(12466);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(16550);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/historyUtils.js
var historyUtils = __webpack_require__(91980);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/jsUtils.js
var jsUtils = __webpack_require__(67392);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/storageUtils.js
var storageUtils = __webpack_require__(50012);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tabsUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// A very rough duck type, but good enough to guard against mistakes while
// allowing customization
function isTabItem(comp){return'value'in comp.props;}function ensureValidChildren(children){return react.Children.map(children,function(child){if(/*#__PURE__*/(0,react.isValidElement)(child)&&isTabItem(child)){return child;}// child.type.name will give non-sensical values in prod because of
// minification, but we assume it won't throw in prod.
throw new Error("Docusaurus error: Bad <Tabs> child <"+(// @ts-expect-error: guarding against unexpected cases
typeof child.type==='string'?child.type:child.type.name)+">: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique \"value\" prop.");});}function extractChildrenTabValues(children){return ensureValidChildren(children).map(function(_ref){var _ref$props=_ref.props,value=_ref$props.value,label=_ref$props.label,attributes=_ref$props.attributes,isDefault=_ref$props.default;return{value:value,label:label,attributes:attributes,default:isDefault};});}function ensureNoDuplicateValue(values){var dup=(0,jsUtils/* duplicates */.l)(values,function(a,b){return a.value===b.value;});if(dup.length>0){throw new Error("Docusaurus error: Duplicate values \""+dup.map(function(a){return a.value;}).join(', ')+"\" found in <Tabs>. Every value needs to be unique.");}}function useTabValues(props){var valuesProp=props.values,children=props.children;return (0,react.useMemo)(function(){var values=valuesProp!=null?valuesProp:extractChildrenTabValues(children);ensureNoDuplicateValue(values);return values;},[valuesProp,children]);}function isValidValue(_ref2){var value=_ref2.value,tabValues=_ref2.tabValues;return tabValues.some(function(a){return a.value===value;});}function getInitialStateValue(_ref3){var _tabValues$find;var defaultValue=_ref3.defaultValue,tabValues=_ref3.tabValues;if(tabValues.length===0){throw new Error('Docusaurus error: the <Tabs> component requires at least one <TabItem> children component');}if(defaultValue){// Warn user about passing incorrect defaultValue as prop.
if(!isValidValue({value:defaultValue,tabValues:tabValues})){throw new Error("Docusaurus error: The <Tabs> has a defaultValue \""+defaultValue+"\" but none of its children has the corresponding value. Available values are: "+tabValues.map(function(a){return a.value;}).join(', ')+". If you intend to show no default tab, use defaultValue={null} instead.");}return defaultValue;}var defaultTabValue=(_tabValues$find=tabValues.find(function(tabValue){return tabValue.default;}))!=null?_tabValues$find:tabValues[0];if(!defaultTabValue){throw new Error('Unexpected error: 0 tabValues');}return defaultTabValue.value;}function getStorageKey(groupId){if(!groupId){return null;}return"docusaurus.tab."+groupId;}function getQueryStringKey(_ref4){var _ref4$queryString=_ref4.queryString,queryString=_ref4$queryString===void 0?false:_ref4$queryString,groupId=_ref4.groupId;if(typeof queryString==='string'){return queryString;}if(queryString===false){return null;}if(queryString===true&&!groupId){throw new Error("Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString=\"my-search-param\".");}return groupId!=null?groupId:null;}function useTabQueryString(_ref5){var _ref5$queryString=_ref5.queryString,queryString=_ref5$queryString===void 0?false:_ref5$queryString,groupId=_ref5.groupId;var history=(0,react_router/* useHistory */.k6)();var key=getQueryStringKey({queryString:queryString,groupId:groupId});var value=(0,historyUtils/* useQueryStringValue */._X)(key);var setValue=(0,react.useCallback)(function(newValue){if(!key){return;// no-op
}var searchParams=new URLSearchParams(history.location.search);searchParams.set(key,newValue);history.replace(Object.assign({},history.location,{search:searchParams.toString()}));},[key,history]);return[value,setValue];}function useTabStorage(_ref6){var groupId=_ref6.groupId;var key=getStorageKey(groupId);var _useStorageSlot=(0,storageUtils/* useStorageSlot */.Nk)(key),value=_useStorageSlot[0],storageSlot=_useStorageSlot[1];var setValue=(0,react.useCallback)(function(newValue){if(!key){return;// no-op
}storageSlot.set(newValue);},[key,storageSlot]);return[value,setValue];}function useTabs(props){var defaultValue=props.defaultValue,_props$queryString=props.queryString,queryString=_props$queryString===void 0?false:_props$queryString,groupId=props.groupId;var tabValues=useTabValues(props);var _useState=(0,react.useState)(function(){return getInitialStateValue({defaultValue:defaultValue,tabValues:tabValues});}),selectedValue=_useState[0],setSelectedValue=_useState[1];var _useTabQueryString=useTabQueryString({queryString:queryString,groupId:groupId}),queryStringValue=_useTabQueryString[0],setQueryString=_useTabQueryString[1];var _useTabStorage=useTabStorage({groupId:groupId}),storageValue=_useTabStorage[0],setStorageValue=_useTabStorage[1];// We sync valid querystring/storage value to state on change + hydration
var valueToSync=function(){var value=queryStringValue!=null?queryStringValue:storageValue;if(!isValidValue({value:value,tabValues:tabValues})){return null;}return value;}();// Sync in a layout/sync effect is important, for useScrollPositionBlocker
// See https://github.com/facebook/docusaurus/issues/8625
(0,react.useLayoutEffect)(function(){if(valueToSync){setSelectedValue(valueToSync);}},[valueToSync]);var selectValue=(0,react.useCallback)(function(newValue){if(!isValidValue({value:newValue,tabValues:tabValues})){throw new Error("Can't select invalid tab value="+newValue);}setSelectedValue(newValue);setQueryString(newValue);setStorageValue(newValue);},[setQueryString,setStorageValue,tabValues]);return{selectedValue:selectedValue,selectValue:selectValue,tabValues:tabValues};}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(72389);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"tabList":"tabList__CuJ","tabItem":"tabItem_LNqP"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabList(_ref){var className=_ref.className,block=_ref.block,selectedValue=_ref.selectedValue,selectValue=_ref.selectValue,tabValues=_ref.tabValues;var tabRefs=[];var _useScrollPositionBlo=(0,scrollUtils/* useScrollPositionBlocker */.o5)(),blockElementScrollPositionUntilNextRender=_useScrollPositionBlo.blockElementScrollPositionUntilNextRender;var handleTabChange=function handleTabChange(event){var newTab=event.currentTarget;var newTabIndex=tabRefs.indexOf(newTab);var newTabValue=tabValues[newTabIndex].value;if(newTabValue!==selectedValue){blockElementScrollPositionUntilNextRender(newTab);selectValue(newTabValue);}};var handleKeydown=function handleKeydown(event){var _focusElement;var focusElement=null;switch(event.key){case'Enter':{handleTabChange(event);break;}case'ArrowRight':{var _tabRefs$nextTab;var nextTab=tabRefs.indexOf(event.currentTarget)+1;focusElement=(_tabRefs$nextTab=tabRefs[nextTab])!=null?_tabRefs$nextTab:tabRefs[0];break;}case'ArrowLeft':{var _tabRefs$prevTab;var prevTab=tabRefs.indexOf(event.currentTarget)-1;focusElement=(_tabRefs$prevTab=tabRefs[prevTab])!=null?_tabRefs$prevTab:tabRefs[tabRefs.length-1];break;}default:break;}(_focusElement=focusElement)==null?void 0:_focusElement.focus();};return/*#__PURE__*/react.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,clsx_m/* default */.Z)('tabs',{'tabs--block':block},className)},tabValues.map(function(_ref2){var value=_ref2.value,label=_ref2.label,attributes=_ref2.attributes;return/*#__PURE__*/react.createElement("li",(0,esm_extends/* default */.Z)({// TODO extract TabListItem
role:"tab",tabIndex:selectedValue===value?0:-1,"aria-selected":selectedValue===value,key:value,ref:function ref(tabControl){return tabRefs.push(tabControl);},onKeyDown:handleKeydown,onClick:handleTabChange},attributes,{className:(0,clsx_m/* default */.Z)('tabs__item',styles_module.tabItem,attributes==null?void 0:attributes.className,{'tabs__item--active':selectedValue===value})}),label!=null?label:value);}));}function TabContent(_ref3){var lazy=_ref3.lazy,children=_ref3.children,selectedValue=_ref3.selectedValue;// eslint-disable-next-line no-param-reassign
children=Array.isArray(children)?children:[children];if(lazy){var selectedTabItem=children.find(function(tabItem){return tabItem.props.value===selectedValue;});if(!selectedTabItem){// fail-safe or fail-fast? not sure what's best here
return null;}return/*#__PURE__*/(0,react.cloneElement)(selectedTabItem,{className:'margin-top--md'});}return/*#__PURE__*/react.createElement("div",{className:"margin-top--md"},children.map(function(tabItem,i){return/*#__PURE__*/(0,react.cloneElement)(tabItem,{key:i,hidden:tabItem.props.value!==selectedValue});}));}function TabsComponent(props){var tabs=useTabs(props);return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('tabs-container',styles_module.tabList)},/*#__PURE__*/react.createElement(TabList,(0,esm_extends/* default */.Z)({},props,tabs)),/*#__PURE__*/react.createElement(TabContent,(0,esm_extends/* default */.Z)({},props,tabs)));}function Tabs(props){var isBrowser=(0,useIsBrowser/* default */.Z)();return/*#__PURE__*/react.createElement(TabsComponent// Remount tabs after hydration
// Temporary fix for https://github.com/facebook/docusaurus/issues/5653
,(0,esm_extends/* default */.Z)({key:String(isBrowser)},props));}

/***/ }),

/***/ 69850:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assets": function() { return /* binding */ assets; },
/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },
/* harmony export */   "default": function() { return /* binding */ MDXContent; },
/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },
/* harmony export */   "metadata": function() { return /* binding */ metadata; },
/* harmony export */   "toc": function() { return /* binding */ toc; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87462);
/* harmony import */ var _home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27378);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44996);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77928);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72905);
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'uiComponents',title:'uiComponents 主题'};var contentTitle=undefined;var metadata={"unversionedId":"use/uiComponents","id":"use/uiComponents","title":"uiComponents 主题","description":"- 使用主题前必须先安装相应主题，详见安装 drip-form 和主题","source":"@site/docs/use/uiComponents 主题.mdx","sourceDirName":"use","slug":"/use/uiComponents","permalink":"/drip-form/docs/use/uiComponents","draft":false,"editUrl":"https://github.com/JDFED/drip-form/edit/master/website/docs/use/uiComponents 主题.mdx","tags":[],"version":"current","frontMatter":{"id":"uiComponents","title":"uiComponents 主题"}};var assets={};var toc=[{value:'单一主题',id:'单一主题',level:2},{value:'使用 Drip-Form 默认主题',id:'使用-drip-form-默认主题',level:3},{value:'混合主题',id:'混合主题',level:2},{value:'使用场景',id:'使用场景',level:3},{value:'优势',id:'优势',level:3},{value:'使用方法',id:'使用方法',level:3}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u4F7F\u7528\u4E3B\u9898\u524D\u5FC5\u987B\u5148\u5B89\u88C5\u76F8\u5E94\u4E3B\u9898\uFF0C\u8BE6\u89C1",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{href:(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)('docs/start/install'),target:"_blank"},"\u5B89\u88C5 drip-form \u548C\u4E3B\u9898"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u5728",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"unitedSchema"),"\u4E2D\u53EF\u901A\u8FC7",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"theme"),"\u5C5E\u6027\u7528\u6765\u63A7\u5236\u9ED8\u8BA4\u4E3B\u9898\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u540C\u65F6\u9700\u8981\u7ED9",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Drip-Form"),"\u4F20\u9012",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"uiComponents"),"props\u89C4\u5B9A\u4F7F\u7528\u7684\u4E3B\u9898\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"unitedSchema")," \u4E2D\u6BCF\u4E2A\u8868\u5355\u9879\u5BF9\u5E94\u7684 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"schema"),"\u4E2D\u90FD\u6709\u4E00\u4E2A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"theme"),"\u5C5E\u6027\u6765\u63A7\u5236\u5177\u4F53\u7684\u7279\u5B9A\u4E3B\u9898\u3002\u8BE6\u89C1",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"#%E6%B7%B7%E5%90%88%E4%B8%BB%E9%A2%98"},"\u6DF7\u5408\u4E3B\u9898")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u63A5\u4E0B\u6765\u6211\u4EEC\u5C06\u4F1A\u5BF9\u5355\u4E00\u4E3B\u9898\u3001\u6DF7\u5408\u4E3B\u9898\u9010\u4E2A\u8FDB\u884C\u4ECB\u7ECD\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"单一主题"},"\u5355\u4E00\u4E3B\u9898"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"使用-drip-form-默认主题"},"\u4F7F\u7528 Drip-Form \u9ED8\u8BA4\u4E3B\u9898"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-json","metastring":"title=\"unitedSchema.json\"","title":"\"unitedSchema.json\""},"{\n  \"type\": \"object\",\n  \"validateTime\": \"change\",\n  \"theme\": \"drip-theme\",\n  \"schema\": [\n    ...\n  ]\n}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-jsx"},"import React, { memo } from 'react'\n// \u5F15\u5165\u6838\u5FC3\u5305\u548C\u4E3B\u9898\nimport DripForm from '@jdfed/drip-form'\nimport dripTheme from '@jdfed/drip-form-theme-antd'\nimport '@jdfed/drip-form-theme-antd/dist/index.css'\n// \u5F15\u5165\u914D\u7F6E\u9879\nimport unitedSchema from './unitedSchema.json'\n\nconst Form = memo(() => {\n    return <div>\n        <DripForm\n          unitedSchema={unitedSchema}\n          uiComponents={{'drip-theme': dripTheme}}\n        />\n      </div>\n})\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5982\u679C\u4F60\u7684\u9879\u76EE\u5E76\u6CA1\u6709\u63A5\u5165",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"less"),"\u7684\u6253\u5305\uFF0C\u53EF\u4EE5\u5FFD\u7565 \u9ED8\u8BA4\u4E3B\u9898 \u7684\u6837\u5F0F\u6C61\u67D3\u95EE\u9898\uFF0C\u4E3B\u9898\u5305\u4E5F\u63D0\u4F9B\u4E86 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"css")," \u5F62\u5F0F\u7684\u5F15\u5165\uFF0C\u53EA\u9700\u8981\u5C06",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Form.jsx"),"\u4E2D\u5F15\u5165\u4E3B\u9898\u5305\u7684\u5F62\u5F0F\u6539\u4E3A\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"混合主题"},"\u6DF7\u5408\u4E3B\u9898"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"使用场景"},"\u4F7F\u7528\u573A\u666F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5F53\u9ED8\u8BA4\u4E3B\u9898\u6682\u65F6\u4E0D\u652F\u6301\u67D0\u4E2A\u8868\u5355\u63A7\u4EF6\uFF0C\u53EF\u4EE5\u5BF9\u67D0\u4E2A\u6216\u67D0\u4E9B\u8868\u5355\u7279\u5B9A\u4F7F\u7528\u81EA\u5B9A\u4E49\u4E3B\u9898\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"优势"},"\u4F18\u52BF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u76F8\u5F53\u4E8E\u5355\u4E00\u4E3B\u9898\uFF0C\u6DF7\u5408\u4E3B\u9898\u53EF\u4EE5\u5FEB\u901F\u652F\u6301\u7279\u5B9A\u9700\u6C42"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"使用方法"},"\u4F7F\u7528\u65B9\u6CD5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-json","metastring":"title=\"unitedSchema.json\"","title":"\"unitedSchema.json\""},"{\n    \"validateTime\" : \"submit\",\n    \"type\": \"object\",\n    \"theme\": \"drip-theme\",\n    \"schema\": [ \n    {\n      \"fieldKey\": \"selectText\",\n      \"type\": \"object\",\n      \"title\": \"\u5355\u9009\u8F93\u5165\",\n      \"ui\": {\n        \"type\": \"selectText\",\n        \"placeholder\": \"\u8BF7\u9009\u62E9\",\n        \"allowClear\": true,\n        \"multiple\": true,\n        \"requestCache\": true,\n        \"options\": [\n            { \"label\": \"\u5317\u4EAC\", \"value\": \"0\" },\n            { \"label\": \"\u4E0A\u6D77\", \"value\": \"1\" },\n            { \"label\": \"\u6210\u90FD\", \"value\": \"2\" },\n            { \"label\": \"\u6B66\u6C49\", \"value\": \"3\" }\n        ]\n      }\n    },\n    {\n      \"fieldKey\": \"babelRadio\",\n      \"type\": \"string\",\n      \"title\": \"\u5355\u9009\",\n      \"ui\": {\n        \"type\": \"radio\",\n        \"theme\": \"babel-ui\", //\u81EA\u5B9A\u4E49\u4E3B\u9898\n        \"options\": [\n           { \n              \"label\": \"\u5317\u4EAC\",\n              \"value\": \"0\",\n              \"description\": {\n                  \"title\": \"<p>\u5185\u5BB9</p>\u8FD9\u662Fbabel-ui\u7684tooltip\u5185\u5BB9\uFF0Chover\u5C55\u5F00\",\n                  \"trigger\":\"hover\"\n              }\n           },\n           {\n              \"label\": \"\u4E0A\u6D77\",\n              \"value\": \"1\",\n              \"description\": {\n                  \"title\": \"<p>\u5185\u5BB9</p>\u8FD9\u662Fbabel-ui\u7684tooltip\u5185\u5BB9\uFF0C\u70B9\u51FB\u5C55\u5F00\",\n                  \"trigger\":\"click\"\n              }\n            },\n            { \"label\": \"\u6210\u90FD\", \"value\": \"2\" },\n            { \"label\": \"\u6B66\u6C49\", \"value\": \"3\" }\n        ]\n      }\n    }\n  ]\n}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u9ED8\u8BA4\u4F7F\u7528 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"drip-theme"),"\u4E3B\u9898\uFF0C\u7B2C\u4E8C\u4E2A radio \u4F7F\u7528 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"other")," \u4E3B\u9898"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-jsx","metastring":"title=\"Form.jsx\"","title":"\"Form.jsx\""},"import DripForm from '@jdfed/drip-form'\n//highlight-start\n// \u4EC5\u4E3A\u793A\u4F8B\uFF0Cother\u4E3A\u4F60\u81EA\u5B9A\u4E49\u4E3B\u9898\nimport other from 'other'\nimport dripTheme from '@jdfed/drip-form-theme-antd'\n\nconst Form = memo(() => {\n    return <div>\n            <BabelForm\n              dataSchema={data}\n              uiSchema={ui}\n              uiComponents={{\n                //highlight-start\n                'drip-theme': dripTheme,\n                'other': other,\n                //highlight-end\n              }}\n            />\n           </div>\n})\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:"https://storage.360buyimg.com/imgtools/15a823244a-85510590-4cf9-11ec-ba01-fb2536faa70c.jpeg",alt:"\u56FE\u7247\u52A0\u8F7D\u51FA\u9519"}));};MDXContent.isMDXComponent=true;

/***/ })

}]);