"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[6363],{

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

/***/ 67009:
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
/* harmony import */ var _home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87462);
/* harmony import */ var _home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27378);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77928);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72905);
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'customComponent',title:'自定义组件',description:'如何开发一个自定义组件？'};var contentTitle=undefined;var metadata={"unversionedId":"form/use/customComponent","id":"form/use/customComponent","title":"自定义组件","description":"如何开发一个自定义组件？","source":"@site/docs/form/use/自定义组件.md","sourceDirName":"form/use","slug":"/form/use/customComponent","permalink":"/drip-form/docs/form/use/customComponent","draft":false,"editUrl":"https://github.com/JDFED/drip-form/edit/master/website/docs/form/use/自定义组件.md","tags":[],"version":"current","frontMatter":{"id":"customComponent","title":"自定义组件","description":"如何开发一个自定义组件？"},"sidebar":"docs","previous":{"title":"用法","permalink":"/drip-form/docs/form/use"},"next":{"title":"主题","permalink":"/drip-form/docs/form/use/theme"}};var assets={};var toc=[{value:'开发前须知',id:'开发前须知',level:2},{value:'Drip Form 表单控件组成',id:'drip-form-表单控件组成',level:3},{value:'组件 props',id:'组件-props',level:3},{value:'useField hook',id:'usefield-hook',level:3},{value:'表单模式（进阶）',id:'表单模式进阶',level:3},{value:'useQuery hook（进阶）',id:'usequery-hook进阶',level:3},{value:'dispatch 用法（进阶）',id:'dispatch-用法进阶',level:3},{value:'开发',id:'开发',level:2},{value:'开发一个数字输入框组件',id:'开发一个数字输入框组件',level:3},{value:'使用',id:'使用',level:2},{value:'使用 customComponets',id:'使用-customcomponets',level:3},{value:'使用主题',id:'使用主题',level:3},{value:'开发注意事项',id:'开发注意事项',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"开发前须知"},"\u5F00\u53D1\u524D\u987B\u77E5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5F00\u53D1\u652F\u6301 Drip Form \u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u524D\uFF0C\u9700\u8981\u4E86\u89E3\u4EE5\u4E0B\u6982\u5FF5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"\u5FC5\u987B\u4E86\u89E3\u7684\u6982\u5FF5\uFF08\u57FA\u7840\uFF09",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"Drip Form")," \u8868\u5355\u63A7\u4EF6\u7EC4\u6210"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7EC4\u4EF6 props"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"useField")," hook"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"\u53EF\u9009\u4E86\u89E3\u7684\u6982\u5FF5\uFF08\u8FDB\u9636\uFF09",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u8868\u5355\u6A21\u5F0F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"useQuery")," hook"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"disptach")," \u7528\u6CD5")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"drip-form-表单控件组成"},"Drip Form \u8868\u5355\u63A7\u4EF6\u7EC4\u6210"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"type":"tip"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},"\u5728\u5F00\u53D1\u652F\u6301 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Drip Form")," \u4F7F\u7528\u7684\u8868\u5355\u63A7\u4EF6\u524D\uFF0C\u9996\u5148\u9700\u8981\u4E86\u89E3 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Drip Form")," \u8868\u5355\u63A7\u4EF6\u7684\u7EC4\u6210\u90E8\u5206\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"p","src":"https://img13.360buyimg.com/imagetools/jfs/t1/8978/25/20797/43362/63b52c27F35db8f94/3cd9b7b2d68e1f13.png","alt":null})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Drip Form")," \u5B9E\u73B0\u4E86\u6807\u9898\u3001\u63D0\u793A\u3001\u5E03\u5C40\uFF08\u5BBD\u5EA6\u3001\u95F4\u8DDD\uFF09\uFF0C\u6240\u4EE5\u6211\u4EEC",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"\u53EA\u9700\u8981\u5F00\u53D1\u8868\u5355\u7EC4\u4EF6\u90E8\u5206"),"\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"组件-props"},"\u7EC4\u4EF6 props"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"type":"note"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"\u5FC5\u4F20 props\uFF1A"),"\u5728\u6BCF\u4E2A ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Drip Form")," \u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u90FD\u53EF\u4EE5\u83B7\u53D6\u5230")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("details",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("summary",null,"\u5FC5\u4F20 props"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-typescript"},"export declare type CommonProps = {\n  //\u8868\u5355\u7ED1\u5B9A\u7684\u6570\u636Ekey\n  fieldKey: string\n  //\u8868\u5355\u7684\u6570\u636E\n  fieldData: any\n  //\u64CD\u4F5C\u5168\u5C40\u72B6\u6001\u7684\u65B9\u6CD5\n  dispatch: Dispatch\n  /**\n   * \u83B7\u53D6fieldKey\u5728unitedSchema\u3001uiSchema\u3001dataSchema\u4E2D\u7684\u8DEF\u5F84\n   * \u7528\u4E8E\u914D\u5408dispatch\u4FEE\u6539\u5168\u5C40\u72B6\u6001\n   */\n  getKey: GetKey\n}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"dispatch \u7528\u6CD5\u53C2\u8003\u4E0B\u9762\u4ECB\u7ECD\uFF1B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"getKey \u7684\u7528\u6CD5\u8BE6\u7EC6\u67E5\u770B\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../API/utils/getkey"},"API getKey")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"type":"note"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"\u53EF\u9009 props\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Drip Form")," \u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u4E0D\u4E00\u5B9A\u83B7\u53D6\u5230"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},"\u53EF\u9009 props \u662F\u5426\u53EF\u4EE5\u83B7\u53D6\u5230\u53D6\u51B3\u4E8E\u4EE5\u4E0B\u5916\u90E8\u914D\u7F6E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",{parentName:"admonition"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"unitedSchema \u4E2D\u8868\u5355\u63A7\u4EF6 ui \u7684\u914D\u7F6E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"Drip Form props \u7684\u914D\u7F6E"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("details",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("summary",null,"\u53EF\u9009 props"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-typescript"},"declare type DripFormEventType = {\n  type: string\n  payload: any\n}\ndeclare type DripFormEventFuncType = (event: DripFormEventType) => any\n\nexport declare type Props = Partial<{\n  //unitedSchema\u4E2Dui.style\u5B57\u6BB5\n  style: CSSProperties\n  //\u7528\u6237\u65E0\u9700\u5173\u5FC3\uFF0C\u4F20\u9012\u7ED9useField\n  onChange: string\n  //\u7528\u6237\u65E0\u9700\u5173\u5FC3\uFF0C\u4F20\u9012\u7ED9useQuery\n  queryFunc: (...args: any[]) => any\n  //\u7528\u6237\u65E0\u9700\u5173\u5FC3\uFF0C\u4F20\u9012\u7ED9useQuery\n  requestCache: boolean\n  /**\n   * \u5F53\u524D\u8868\u5355\u7684\u6A21\u5F0F\n   * edit\uFF1A\u5F53\u524D\u8868\u5355\u4E3A\u7F16\u8F91\u6A21\u5F0F\n   * generator\uFF1A\u5F53\u524D\u8868\u5355\u662F\u5728form-generator\u7684\u62D6\u62FD\u533A\u57DF\u4E2D\n   * view\uFF1A\u5F53\u524D\u8868\u5355\u4E3A\u53EA\u8BFB\u6A21\u5F0F\n   */\n  formMode: 'edit' | 'generator' | 'view'\n  // onEvent\u7684\u4E8B\u4EF6\u6CE8\u518C\n  fireEvent: DripFormEventFuncType\n}>\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"useField")," \u53C2\u8003\u4E0B\u9762\u4ECB\u7ECD\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"useQuery")," \u53C2\u8003\u4E0B\u9762\u4ECB\u7ECD\uFF1B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"formMode")," \u53C2\u8003\u4E0B\u9762\u8868\u5355\u6A21\u5F0F\u4ECB\u7ECD\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"fireEvent")," \u7528\u6CD5\u8BE6\u7EC6\u53C2\u8003\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../API/formProp/onEvent"},"API onEvent")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"usefield-hook"},"useField hook"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Drip Form")," \u5728\u7EC4\u4EF6\u9876\u5C42\u5B58\u653E\u4E86\u6240\u6709\u8868\u5355\u6570\u636E ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"formData")," \u3002\u6BCF\u4E2A\u8868\u5355\u901A\u8FC7 props \u4E2D\u7684",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"fieldData")," \u548C ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"fieldKey")," \u5BF9\u5168\u5C40\u6570\u636E\u8FDB\u884C\u4FEE\u6539\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4E3A\u4E86\u65B9\u4FBF\u7528\u6237\u4FEE\u6539\uFF0C\u901A\u8FC7 useField hook \u53EF\u4EE5\u5FEB\u901F\u751F\u6210\u4FEE\u6539\u5F53\u524D\u8868\u5355\u6570\u636E\u7684\u56DE\u8C03\u51FD\u6570\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{mdxType:"Tabs"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{label:"\u4E8B\u4EF6\u4E2D\u4F7F\u7528",value:"event",mdxType:"TabItem"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx"},"import { useField } from '@jdfed/hooks'\nimport { Input } from 'antd'\n\nconst CustomComponent = ({ fieldKey, onChange, getKey, dispatch }) => {\n  const _onChange = useField(\n    {\n      fieldKey,\n      getKey,\n      onChange,\n    },\n    dispatch\n  )\n  <Input onChange={_onChange} />\n}\n"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{label:"\u76F4\u63A5\u4F20\u9012\u503C",value:"value",mdxType:"TabItem"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx"},"import { useCallback } from 'react'\nimport { useField } from '@jdfed/hooks'\nimport { Input } from 'antd'\n\nconst CustomComponent = ({ fieldKey, onChange, getKey, dispatch }) => {\n  const _onChange = useField(\n    {\n      fieldKey,\n      getKey,\n      onChange,\n    },\n    dispatch\n  )\n  const changeFn = useCallback(()=>{\n    // \u8BBE\u7F6E\u56FA\u5B9A\u7684\u503C\n    _onChange(xxxx)\n  },[_onChange])\n  <Input onChange={changeFn} />\n}\n")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"type":"tip"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},"useField \u8BE6\u7EC6\u4ECB\u7ECD\u53C2\u8003\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../API/hooks/useField"},"API useField")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},"\u5982\u679C\u6709\u4E00\u4E9B\u81EA\u5B9A\u4E49\u6821\u9A8C\u3001\u81EA\u5B9A\u4E49\u4FEE\u6539\u6570\u636E\u7684\u9700\u6C42\uFF0C\u53EF\u901A\u8FC7",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"customComponent#dispatch-%E7%94%A8%E6%B3%95%E8%BF%9B%E9%98%B6"},"dispatch"),"\u8FDB\u884C\u4FEE\u6539\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"表单模式进阶"},"\u8868\u5355\u6A21\u5F0F\uFF08\u8FDB\u9636\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"blockquote"},"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u53EF\u4EE5\u9488\u5BF9\u4E0D\u540C\u7684 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"formMode")," \u5F00\u53D1\u4E0D\u540C\u7684\u6A21\u5F0F")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Drip Form"),"\u6709\u4EE5\u4E0B\u4E24\u79CD\u5E38\u7528\u6A21\u5F0F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"edit")," \u7F16\u8F91\u6A21\u5F0F")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"view")," \u67E5\u770B\u6A21\u5F0F\uFF08\u53EA\u8BFB\uFF0C\u4E0D\u53EF\u4FEE\u6539\u6570\u636E\uFF09"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"type":"note"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"formMode")," \u8FD8\u6709\u53E6\u4E00\u4E2A\u9009\u9879 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"generator"),",\u8868\u793A\u8868\u5355\u5728\u8868\u5355\u751F\u6210\u5668\u7684\u62D6\u62FD\u533A\u57DF\u4E2D\uFF0C\u7528\u6237\u65E0\u9700\u4F7F\u7528\u8BE5\u6A21\u5F0F\uFF09")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("details",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("summary",null,"\u9488\u5BF9\u4E0D\u540CformMode\uFF0C\u6E32\u67D3\u4E0D\u540C\u6A21\u5F0F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx"},"import React, { memo } from 'react'\nimport { InputNumber } from 'antd'\nimport { useField } from '@jdfed/hooks'\n\nconst NumberField = ({\n  onChange,\n  fieldData,\n  fieldKey,\n  dispatch,\n  getKey,\n  formMode,\n  ...restProps\n}) => {\n  const _onChange = useField(\n    { fieldKey, onChange, getKey },\n    dispatch\n  )\n  //highlight-start\n  // \u67E5\u770B \u6A21\u5F0F\n  if (formMode === 'view') return fieldData || null\n  // \u7F16\u8F91\u6A21\u5F0F\n  return (\n    <InputNumber\n      onChange={_onChange}\n      value={fieldData}\n      {...restProps}\n    />\n  )\n  //highlight-end\n}\nexport const numberField = memo(NumberField)\n"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"usequery-hook进阶"},"useQuery hook\uFF08\u8FDB\u9636\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"blockquote"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"useQuery"),"\u7528\u6765\u8C03\u7528",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"onQuery"),"\u4E2D\u8FD4\u56DE\u7684\u6570\u636E\uFF0C\u5E76\u5C06\u6570\u636E\u8BBE\u7F6E\u5230",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"ui.options"),"\u4E2D")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"type":"tip"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},"useQuery \u8BE6\u7EC6\u4ECB\u7ECD\u53C2\u8003\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../API/hooks/useQuery"},"API useQuery"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"dispatch-用法进阶"},"dispatch \u7528\u6CD5\uFF08\u8FDB\u9636\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"blockquote"},"\u5F53\u7EC4\u4EF6\u5B58\u5728\u81EA\u5B9A\u4E49\u6821\u9A8C\u573A\u666F\u3001\u7279\u5B9A\u60C5\u51B5\u9700\u8981\u4FEE\u6539\u5176\u4ED6\u8868\u5355\u6570\u636E\u65F6\u53EF\u4F7F\u7528",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"dispatch"),"\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"type":"tip"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},"dispatch \u8BE6\u7EC6\u4ECB\u7ECD\u53C2\u8003\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../API/utils/dispatch"},"API dispatch"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"开发"},"\u5F00\u53D1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"开发一个数字输入框组件"},"\u5F00\u53D1\u4E00\u4E2A\u6570\u5B57\u8F93\u5165\u6846\u7EC4\u4EF6"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("details",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("summary",null,"\u4EE3\u7801\u793A\u4F8B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx"},"import React, { memo } from 'react'\nimport { InputNumber } from 'antd'\nimport { useField } from '@jdfed/hooks'\n\nconst NumberField = ({\n  onChange,\n  fieldData,\n  fieldKey,\n  dispatch,\n  getKey,\n  formMode,\n  ...restProps\n}) => {\n  const _onChange = useField(\n    { fieldKey, onChange, getKey },\n    dispatch\n  )\n  // view \u67E5\u770B\u6A21\u5F0F\n  if (formMode === 'view') return fieldData || null\n    // edit \u7F16\u8F91\u6A21\u5F0F\n  return (\n    <InputNumber\n      onChange={_onChange}\n      value={fieldData}\n      {...restProps}\n    />\n  )\n}\n\nexport const numberField = memo(NumberField)\n"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"使用"},"\u4F7F\u7528"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("details",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("summary",null,"\u5982\u4F55\u5728 Drip Form \u4E2D\u4F7F\u7528\u5F00\u53D1\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF1F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Drip Form")," \u6709\u4E24\u79CD\u5BFC\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u65B9\u6CD5\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4F7F\u7528 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"customComponets")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4F7F\u7528 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"\u4E3B\u9898"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u53EF\u4EE5",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"\u6839\u636E\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u4F7F\u7528\u7A0B\u5EA6\u3001\u7EC4\u4EF6\u662F\u5426\u9700\u8981\u590D\u7528\u6765\u9009\u62E9"),"\u4F7F\u7528\u54EA\u79CD\u65B9\u6CD5\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u53EA\u5728\u5F53\u524D\u8868\u5355\u4F7F\u7528\uFF0C\u5219\u4F7F\u7528 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"customComponents")," \u5BFC\u5165\u4F7F\u7528\uFF1B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u540E\u7EED\u53EF\u80FD\u5728\u5176\u4ED6\u573A\u666F\u6216\u8868\u5355\u4E2D\u4F7F\u7528\uFF0C\u5219\u4F7F\u7528 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"\u4E3B\u9898"),"\uFF1B"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"使用-customcomponets"},"\u4F7F\u7528 customComponets"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("details",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("summary",null,"\u4EE3\u7801\u793A\u4F8B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{mdxType:"Tabs"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{value:"App.ts",label:"App.tsx",mdxType:"TabItem"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx"},"import DripForm from '@jdfed/drip-form';\nimport antd from '@jdfed/drip-form-theme-antd';\nimport unitedSchema from './unitedSchema';\n//highlight-next-line\nimport { numberField } from './numberField';\nimport '@jdfed/drip-form/dist/index.css';\nimport '@jdfed/drip-form-theme-antd/dist/index.css';\nimport 'antd/dist/antd.css';\n\n// \u9700\u8981\u548CfieldKey\u4E00\u81F4\n// highlight-start\nconst customComponents = {\n  number_lAjBzU: numberField,\n  number_QmKL9J: numberField,\n};\n// highlight-end\n\nfunction App() {\n  return (\n    <DripForm\n      // \u8868\u5355\u914D\u7F6E\u6587\u4EF6\n      unitedSchema={unitedSchema}\n      // \u5BFC\u5165antd\u4E3B\u9898\n      uiComponents={{ antd }}\n      //\u5BFC\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6\n            // highlight-next-line\n      customComponents={customComponents}\n    ></DripForm>\n  );\n}\n\nexport default App;\n\n"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{value:"numberField",label:"numberField",mdxType:"TabItem"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx"},"/**\n * \u81EA\u5B9A\u4E49nubmer\u7EC4\u4EF6\n */\nimport { memo } from 'react';\nimport { InputNumber } from 'antd';\nimport { useField } from '@jdfed/hooks';\nimport { CommonProps } from './global';\n\nconst NumberField = ({\n  onChange,\n  fieldData,\n  fieldKey,\n  dispatch,\n  getKey,\n  formMode,\n  ...restProps\n}: CommonProps) => {\n  const _onChange = useField({ fieldKey, onChange, getKey }, dispatch);\n  // view \u67E5\u770B\u6A21\u5F0F\n  if (formMode === 'view') return fieldData || null;\n  // edit \u7F16\u8F91\u6A21\u5F0F\n  return <InputNumber onChange={_onChange} value={fieldData} {...restProps} />;\n};\n\nexport const numberField = memo(NumberField);\n\n"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{value:"unitedSchema",label:"unitedSchema",mdxType:"TabItem"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"export default {\n  type: 'object',\n  validateTime: 'change',\n  ui: {},\n  theme: 'antd',\n  schema: [\n    {\n      type: 'string',\n      title: '\u8F93\u5165\u6846',\n      ui: {\n        type: 'text',\n        style: {\n          width: '100%',\n        },\n      },\n      fieldKey: 'text_5oOHZr',\n    },\n    {\n      type: 'number',\n      title: '\u6570\u5B57\u8F93\u5165\u68461',\n      ui: {\n        type: 'custom',\n        description: {\n          type: 'text',\n          title: '\u7B2C\u4E00\u6B21\u4F7F\u7528number\u81EA\u5B9A\u4E49\u7EC4\u4EF6',\n        },\n      },\n      fieldKey: 'number_lAjBzU',\n    },\n    {\n      type: 'number',\n      title: '\u6570\u5B57\u8F93\u5165\u68462',\n      ui: {\n        type: 'custom',\n        description: {\n          type: 'text',\n          title: '\u7B2C\u4E8C\u6B21\u4F7F\u7528number\u81EA\u5B9A\u4E49\u7EC4\u4EF6',\n        },\n      },\n      fieldKey: 'number_QmKL9J',\n    },\n  ],\n};\n\n"))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4EE3\u7801\u6C99\u76D2\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://stackblitz.com/edit/drip-form-g6iq8d?file=src/App.tsx"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"a","src":"https://developer.stackblitz.com/img/open_in_stackblitz.svg","alt":"Open in StackBlitz"}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"title":"推荐使用主题","type":"caution"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"admonition"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4F7F\u7528 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"customComponets")," \u5BFC\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u4F1A\u4F7F\u8BE5\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u65E0\u6CD5\u590D\u7528\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6570\u7EC4\u5BB9\u5668\u4E2D\uFF0C\u65E0\u6CD5\u4F7F\u7528 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"customComponents")," \u5BFC\u5165\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u3002\n\u56E0\u4E3A\u65E0\u6CD5\u590D\u7528\uFF0C\u8BE6\u60C5\u67E5\u770B",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://github.com/JDFED/drip-form/discussions/185"},"\u6570\u7EC4\u5BB9\u5668\u5982\u4F55\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF1F")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"使用主题"},"\u4F7F\u7528\u4E3B\u9898"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4E24\u4E2A\u6B65\u9AA4\u5FEB\u901F\u4F7F\u7528\u4E3B\u9898"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u5C06\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u53D8\u6210\u81EA\u5B9A\u4E49\u4E3B\u9898\u4E2D\u7684\u4E00\u4E2A\u63A7\u4EF6 "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u81EA\u5B9A\u4E49\u4E3B\u9898\u5F00\u53D1\u67E5\u770B\u6587\u6863: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../advanced/customTheme"},"\u81EA\u5B9A\u4E49\u4E3B\u9898"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u5BFC\u5165\u4E3B\u9898"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("details",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("summary",null,"\u4EE3\u7801\u793A\u4F8B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{mdxType:"Tabs"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{value:"App.ts",label:"App.tsx",mdxType:"TabItem"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx"},"/**\n * \u4F7F\u7528\u4E3B\u9898\u5BFC\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4F8B\u5B50\n * \u4F18\u70B9\uFF1A\u7EC4\u4EF6\u53EF\u4EE5\u91CD\u590D\u4F7F\u7528\uFF0C\u5E76\u4E14\u4E3B\u9898\u53EF\u4EE5\u5355\u72EC\u53D1\u5E03npm\u5305\uFF0C\u8DE8\u4E1A\u52A1\u4F7F\u7528\u3002\n */\nimport DripForm from '@jdfed/drip-form';\nimport antd from '@jdfed/drip-form-theme-antd';\nimport unitedSchema from './unitedSchema';\n//highlight-next-line\nimport customTheme from './customTheme';\nimport '@jdfed/drip-form/dist/index.css';\nimport '@jdfed/drip-form-theme-antd/dist/index.css';\nimport 'antd/dist/antd.css';\n\nfunction App() {\n  return (\n    <DripForm\n      // \u8868\u5355\u914D\u7F6E\u6587\u4EF6\n      unitedSchema={unitedSchema}\n      // \u5BFC\u5165antd\u4E3B\u9898\u548C\u81EA\u5B9A\u4E49\u4E3B\u9898customTheme\n            //highlight-next-line\n      uiComponents={{ antd, customTheme }}\n    ></DripForm>\n  );\n}\n\nexport default App;\n\n\n"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{value:"customTheme/numberField",label:"customTheme/numberField.tsx",mdxType:"TabItem"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx"},"/**\n * \u81EA\u5B9A\u4E49nubmer\u7EC4\u4EF6\n */\nimport { memo } from 'react';\nimport { InputNumber } from 'antd';\nimport { useField } from '@jdfed/hooks';\nimport { CommonProps } from '../global';\n\nconst NumberField = ({\n  onChange,\n  fieldData,\n  fieldKey,\n  dispatch,\n  getKey,\n  formMode,\n  ...restProps\n}: CommonProps) => {\n  const _onChange = useField({ fieldKey, onChange, getKey }, dispatch);\n  // view \u67E5\u770B\u6A21\u5F0F\n  if (formMode === 'view') return fieldData || null;\n  // edit \u7F16\u8F91\u6A21\u5F0F\n  return <InputNumber onChange={_onChange} value={fieldData} {...restProps} />;\n};\n\nexport const numberField = memo(NumberField);\n\n\n"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{value:"customTheme/index.ts",label:"customTheme/index.ts",mdxType:"TabItem"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"/**\n * \u5BFC\u51FA\u81EA\u5B9A\u4E49\u4E3B\u9898 customTheme\n */\nimport { numberField } from './numberField';\n\n//highlight-start\nexport default {\n  number: numberField,\n  // \u81EA\u5B9A\u4E49\u4E3B\u9898\u540D\u5B57\uFF0C\u968F\u610F\u53D6\n  theme: 'customTheme',\n};\n//highlight-end\n"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{value:"unitedSchema",label:"unitedSchema",mdxType:"TabItem"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"// \u8868\u5355\u914D\u7F6E\u6587\u4EF6\n\nexport default {\n  type: 'object',\n  validateTime: 'change',\n  ui: {},\n  theme: 'antd',\n  schema: [\n    {\n      type: 'string',\n      title: '\u8F93\u5165\u6846',\n      ui: {\n        type: 'text',\n        style: {\n          width: '100%',\n        },\n      },\n      fieldKey: 'text_5oOHZr',\n    },\n    {\n      type: 'number',\n      title: '\u6570\u5B57\u8F93\u5165\u68461',\n      ui: {\n        // \u9700\u8981\u548C\u81EA\u5B9A\u4E49\u4E3B\u9898\u540D\u5B57\u4E00\u81F4\n                //highlight-start\n        theme: 'customTheme',\n        type: 'number',\n                //highlight-end\n        description: {\n          type: 'text',\n          title: '\u7B2C\u4E00\u6B21\u4F7F\u7528number\u81EA\u5B9A\u4E49\u7EC4\u4EF6',\n        },\n      },\n      fieldKey: 'number_lAjBzU',\n    },\n    {\n      type: 'number',\n      title: '\u6570\u5B57\u8F93\u5165\u68462',\n      ui: {\n        // \u9700\u8981\u548C\u81EA\u5B9A\u4E49\u4E3B\u9898\u540D\u5B57\u4E00\u81F4\n                //highlight-start\n        theme: 'customTheme',\n        type: 'number',\n                //highlight-end\n        description: {\n          type: 'text',\n          title: '\u7B2C\u4E8C\u6B21\u4F7F\u7528number\u81EA\u5B9A\u4E49\u7EC4\u4EF6',\n        },\n      },\n      fieldKey: 'number_QmKL9J',\n    },\n  ],\n};\n\n"))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4EE3\u7801\u6C99\u76D2\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://stackblitz.com/edit/drip-form-oxx5gp?file=src/App.tsx"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"a","src":"https://developer.stackblitz.com/img/open_in_stackblitz.svg","alt":"Open in StackBlitz"}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"开发注意事项"},"\u5F00\u53D1\u6CE8\u610F\u4E8B\u9879"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u5982\u679C\u9700\u8981\u652F\u6301\u5728\u8868\u5355\u751F\u6210\u5668\u4E2D\u62D6\u62FD\u751F\u6210\uFF0C\u5EFA\u8BAE\u540C\u65F6\u914D\u7F6Econfig\u6587\u4EF6\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"config\u6587\u4EF6\u914D\u7F6E\u53C2\u8003 \u8868\u5355\u751F\u6210\u5668\u6587\u6863")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u6CE8\u610F\u6DFB\u52A0",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"React memo"),"\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u6E32\u67D3\u3002"))));};MDXContent.isMDXComponent=true;

/***/ })

}]);