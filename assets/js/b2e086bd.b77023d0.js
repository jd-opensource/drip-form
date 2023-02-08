"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[7590],{

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

/***/ 81005:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'vcontrol',title:'展示隐藏',description:'如何控制表单的展示、隐藏'};var contentTitle=undefined;var metadata={"unversionedId":"form/use/control/vcontrol","id":"form/use/control/vcontrol","title":"展示隐藏","description":"如何控制表单的展示、隐藏","source":"@site/docs/form/use/control/展示隐藏.md","sourceDirName":"form/use/control","slug":"/form/use/control/vcontrol","permalink":"/drip-form/docs/form/use/control/vcontrol","draft":false,"editUrl":"https://github.com/JDFED/drip-form/edit/master/website/docs/form/use/control/展示隐藏.md","tags":[],"version":"current","frontMatter":{"id":"vcontrol","title":"展示隐藏","description":"如何控制表单的展示、隐藏"},"sidebar":"docs","previous":{"title":"联动配置","permalink":"/drip-form/docs/form/use/control"},"next":{"title":"全局联动","permalink":"/drip-form/docs/form/use/control/globalChange"}};var assets={};var toc=[{value:'函数',id:'函数',level:2},{value:'函数体',id:'函数体',level:2}];var makeShortcode=function makeShortcode(name){return function MDXDefaultShortcode(props){console.warn("Component "+name+" was not imported, exported, or provided by MDXProvider as global scope");return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div",props);};};var TabsItem=makeShortcode("TabsItem");var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5BF9\u4E8E\u8868\u5355\u800C\u8A00\uFF0C\u6211\u4EEC\u7ECF\u5E38\u4F1A\u901A\u8FC7\u67D0\u4E9B\u8868\u5355\u9879\u7684\u64CD\u4F5C\uFF0C\u89E6\u53D1\u53E6\u4E00\u4E9B\u8868\u5355\u9879\u7684\u663E\u9690\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Drip Form")," \u4E3A\u6BCF\u4E2A\u8868\u5355\u9879\u5185\u7F6E\u4E86",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"vcontrol"),"\u5B57\u6BB5\uFF0C\u7528\u4E8E\u8868\u5355\u9879\u4E4B\u95F4\u4EA7\u751F",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"UI \u663E\u9690"),"\u7684\u63A7\u5236\u5173\u8054\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"vcontrol"),"\u652F\u6301\u4E24\u79CD\u7C7B\u578B\uFF0C\u51FD\u6570\u6216\u51FD\u6570\u51FD\u6570\u4F53"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"函数"},"\u51FD\u6570"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5982\u679CunitedSchema\u4E0D\u9700\u8981json\u5F62\u5F0F\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u51FD\u6570\u5F62\u5F0F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("details",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("summary",null,"\u4EE3\u7801\u793A\u4F8B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{mdxType:"Tabs"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(TabsItem,{value:"unitedSchema",label:"unitedSchema.ts",mdxType:"TabsItem"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx"},"// \u8868\u5355\u914D\u7F6E\u6587\u4EF6\n\nexport default {\n  type: 'object',\n  validateTime: 'change',\n  ui: {},\n  theme: 'antd',\n  schema: [\n    {\n      title: '\u5F00\u5173',\n      type: 'string',\n      default: true,\n      ui: {\n        type: 'switch',\n      },\n      fieldKey: 'switchItem',\n    },\n    {\n      type: 'number',\n      title: '\u6570\u5B57\u8F93\u5165\u6846',\n      ui: {\n        type: 'number',\n        description: {\n          type: 'text',\n          title: '\u7EC4\u4EF6\u662F\u5426\u5C55\u793A\u53D6\u51B3\u4E8E\u5F00\u5173\u662F\u5426\u5F00\u542F',\n        },\n        //highlight-start\n        vcontrol: ({ formData }: any) => {\n          //\u8FD4\u56DEtrue\uFF0C\u5219\u8868\u5355\u5C55\u793A\uFF1B\u8FD4\u56DEfalse\uFF0C\u8868\u5355\u4E0D\u5C55\u793A\n          return formData.switchItem;\n        },\n        //highlight-end\n      },\n      fieldKey: 'number_lAjBzU',\n    },\n  ],\n};\n\n"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(TabsItem,{value:"App",label:"App.tsx",mdxType:"TabsItem"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx"},"/**\n * \u4F7F\u7528vcontrol\u51FD\u6570\u5F62\u5F0F\u8BBE\u7F6E\u6570\u5B57\u8F93\u5165\u6846\u5C55\u793A\u9690\u85CF\n * \u5F53\u5F00\u5173\u5F00\u542F\uFF1A\u6570\u5B57\u8F93\u5165\u6846\u5C55\u793A\uFF1B\n * \u5F53\u5F00\u5173\u5173\u95ED\uFF1A\u6570\u5B57\u8F93\u5165\u6846\u9690\u85CF\n */\nimport DripForm from '@jdfed/drip-form';\nimport antd from '@jdfed/drip-form-theme-antd';\nimport unitedSchema from './unitedSchema';\nimport '@jdfed/drip-form/dist/index.css';\nimport '@jdfed/drip-form-theme-antd/dist/index.css';\nimport 'antd/dist/antd.css';\n\nfunction App() {\n  return (\n    <DripForm\n      // \u8868\u5355\u914D\u7F6E\u6587\u4EF6\n      unitedSchema={unitedSchema}\n      // \u5BFC\u5165antd\u4E3B\u9898\n      uiComponents={{ antd }}\n    ></DripForm>\n  );\n}\n\nexport default App;\n\n"))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4EE3\u7801\u6C99\u76D2\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://stackblitz.com/edit/drip-form-cnpu2i?file=src/unitedSchema.ts"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"a","src":"https://developer.stackblitz.com/img/open_in_stackblitz.svg","alt":"Open in StackBlitz"}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-js","metastring":"title=vcontrol函数接收一个如下的对象参数","title":"vcontrol函数接收一个如下的对象参数"},"{\n  //\u6240\u6709\u8868\u5355\u6570\u636E\n  formData,\n  //\u6240\u6709\u8868\u5355\u7684ui\u914D\u7F6E\n  uiSchema,\n  //\u6240\u6709\u8868\u5355\u7684\u6821\u9A8C\u914D\u7F6E\n  dataSchema,\n  //get Api\n  get,\n  //getKey Api\n  getKey,\n  //\u5F53\u524D\u8868\u5355fieldKey\n  fieldKey,\n  //\u5F53\u524D\u8868\u5355\u503C\n  fieldData,\n}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"函数体"},"\u51FD\u6570\u4F53"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5982\u679CunitedSchema\u9700\u8981json\u5F62\u5F0F\uFF0C\u5219\u4F7F\u7528\u51FD\u6570\u4F53\u5F62\u5F0F\u3002\u5185\u90E8\u4F1A\u5C06",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"vcontorl"),"\u4F7F\u7528",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"new Function"),"\u6784\u9020\u6210\u51FD\u6570\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("details",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("summary",null,"\u4EE3\u7801\u793A\u4F8B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{mdxType:"Tabs"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(TabsItem,{value:"unitedSchema",label:"unitedSchema.json",mdxType:"TabsItem"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx"},"{\n  \"type\": \"object\",\n  \"validateTime\": \"change\",\n  \"ui\": {},\n  \"theme\": \"antd\",\n  \"schema\": [\n    {\n      \"title\": \"\u5F00\u5173\",\n      \"type\": \"string\",\n      \"default\": true,\n      \"ui\": {\n        \"type\": \"switch\"\n      },\n      \"fieldKey\": \"switchItem\"\n    },\n    {\n      \"type\": \"number\",\n      \"title\": \"\u6570\u5B57\u8F93\u5165\u6846\",\n      \"ui\": {\n        \"type\": \"number\",\n        \"description\": {\n          \"type\": \"text\",\n          \"title\": \"\u7EC4\u4EF6\u662F\u5426\u5C55\u793A\u53D6\u51B3\u4E8E\u5F00\u5173\u662F\u5426\u5F00\u542F\"\n        },\n        //\u8BE5\u8BED\u53E5\u5728\u6267\u884C\u4E4B\u540E\u4F1A\u8FD4\u56DE\u4E00\u4E2A Boolean \u503C\uFF0C\u7528\u6765\u89E6\u53D1\u88AB\u63A7\u5236\u5B57\u6BB5\u7684\u663E\u9690\u3002\u8FD4\u56DE true\u5219\u5C55\u793A \uFF0C\u5426\u5219\u9690\u85CF\u8BE5\u9879\u3002\n        //highlight-next-line \n        \"vcontrol\": \"return props.formData.switchItem\"\n      },\n      \"fieldKey\": \"number_lAjBzU\"\n    }\n  ]\n}\n"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(TabsItem,{value:"App",label:"App.tsx",mdxType:"TabsItem"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx"},"/**\n * \u4F7F\u7528vcontrol\u51FD\u6570\u4F53\u5F62\u5F0F\u8BBE\u7F6E\u6570\u5B57\u8F93\u5165\u6846\u5C55\u793A\u9690\u85CF\n * \u5F53\u5F00\u5173\u5F00\u542F\uFF1A\u6570\u5B57\u8F93\u5165\u6846\u5C55\u793A\uFF1B\n * \u5F53\u5F00\u5173\u5173\u95ED\uFF1A\u6570\u5B57\u8F93\u5165\u6846\u9690\u85CF\n */\nimport DripForm from '@jdfed/drip-form';\nimport antd from '@jdfed/drip-form-theme-antd';\nimport unitedSchema from './unitedSchema';\nimport '@jdfed/drip-form/dist/index.css';\nimport '@jdfed/drip-form-theme-antd/dist/index.css';\nimport 'antd/dist/antd.css';\n\nfunction App() {\n  return (\n    <DripForm\n      // \u8868\u5355\u914D\u7F6E\u6587\u4EF6\n      unitedSchema={unitedSchema}\n      // \u5BFC\u5165antd\u4E3B\u9898\n      uiComponents={{ antd }}\n    ></DripForm>\n  );\n}\n\nexport default App;\n\n"))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4EE3\u7801\u6C99\u76D2\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://stackblitz.com/edit/drip-form-8m8aqm?file=src/unitedSchema.json"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"a","src":"https://developer.stackblitz.com/img/open_in_stackblitz.svg","alt":"Open in StackBlitz"}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"title":"函数占位符","type":"tip"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},"\u5982\u679C\u9700\u8981\u4F7F\u7528\u51FD\u6570\u4F53\u5F62\u5F0F\u914D\u7F6E\u9700\u8981\u590D\u6742\u7684\u663E\u9690\u5904\u7406\uFF0C\u53EF\u4EE5\u4F7F\u7528",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../../API/formProp/customFunc"},"\u51FD\u6570\u5360\u4F4D\u7B26"),"\u5904\u7406\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"vcontrol"),"\u57FA\u4E8E",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"new Function"),"\u5B9E\u73B0\uFF0C\u56E0\u6B64\u5728\u4E66\u5199\u7684\u51FD\u6570\u4F53\u5185\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528props\u83B7\u53D6\u5982\u4E0B\u53C2\u6570\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-js","metastring":"title=props可以获取到的值","title":"props可以获取到的值"},"{\n  //\u6240\u6709\u8868\u5355\u6570\u636E\n  formData,\n  //\u6240\u6709\u8868\u5355\u7684ui\u914D\u7F6E\n  uiSchema,\n  //\u6240\u6709\u8868\u5355\u7684\u6821\u9A8C\u914D\u7F6E\n  dataSchema,\n  //get Api\n  get,\n  //getKey Api\n  getKey,\n  //\u5F53\u524D\u8868\u5355fieldKey\n  fieldKey,\n  //\u5F53\u524D\u8868\u5355\u503C\n  fieldData,\n}\n")));};MDXContent.isMDXComponent=true;

/***/ })

}]);