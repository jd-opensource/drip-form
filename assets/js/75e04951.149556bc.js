"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[9014],{

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27378);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabItem(_ref){var children=_ref.children,hidden=_ref.hidden,className=_ref.className;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{role:"tabpanel",hidden:hidden,className:className},children);}/* harmony default export */ __webpack_exports__["Z"] = (TabItem);

/***/ }),

/***/ 77600:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Tabs; }
});

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(25773);
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(27378);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(76457);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/UserPreferencesContext.js
var UserPreferencesContext = __webpack_require__(84956);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useUserPreferencesContext.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useUserPreferencesContext(){var context=(0,react.useContext)(UserPreferencesContext/* default */.Z);if(context==null){throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');}return context;}/* harmony default export */ var hooks_useUserPreferencesContext = (useUserPreferencesContext);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/index.js + 31 modules
var lib = __webpack_require__(39649);
// EXTERNAL MODULE: ../node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(38944);
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
function isTabItem(comp){return typeof comp.props.value!=='undefined';}function TabsComponent(props){var _ref2,_children$find,_children$;var lazy=props.lazy,block=props.block,defaultValueProp=props.defaultValue,valuesProp=props.values,groupId=props.groupId,className=props.className;var children=react.Children.map(props.children,function(child){if(/*#__PURE__*/(0,react.isValidElement)(child)&&isTabItem(child)){return child;}// child.type.name will give non-sensical values in prod because of
// minification, but we assume it won't throw in prod.
throw new Error("Docusaurus error: Bad <Tabs> child <"+(// @ts-expect-error: guarding against unexpected cases
typeof child.type==='string'?child.type:child.type.name)+">: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique \"value\" prop.");});var values=valuesProp!=null?valuesProp:// We only pick keys that we recognize. MDX would inject some keys by default
children.map(function(_ref){var _ref$props=_ref.props,value=_ref$props.value,label=_ref$props.label,attributes=_ref$props.attributes;return{value:value,label:label,attributes:attributes};});var dup=(0,lib/* duplicates */.lx)(values,function(a,b){return a.value===b.value;});if(dup.length>0){throw new Error("Docusaurus error: Duplicate values \""+dup.map(function(a){return a.value;}).join(', ')+"\" found in <Tabs>. Every value needs to be unique.");}// When defaultValueProp is null, don't show a default tab
var defaultValue=defaultValueProp===null?defaultValueProp:(_ref2=defaultValueProp!=null?defaultValueProp:(_children$find=children.find(function(child){return child.props.default;}))==null?void 0:_children$find.props.value)!=null?_ref2:(_children$=children[0])==null?void 0:_children$.props.value;if(defaultValue!==null&&!values.some(function(a){return a.value===defaultValue;})){throw new Error("Docusaurus error: The <Tabs> has a defaultValue \""+defaultValue+"\" but none of its children has the corresponding value. Available values are: "+values.map(function(a){return a.value;}).join(', ')+". If you intend to show no default tab, use defaultValue={null} instead.");}var _useUserPreferencesCo=hooks_useUserPreferencesContext(),tabGroupChoices=_useUserPreferencesCo.tabGroupChoices,setTabGroupChoices=_useUserPreferencesCo.setTabGroupChoices;var _useState=(0,react.useState)(defaultValue),selectedValue=_useState[0],setSelectedValue=_useState[1];var tabRefs=[];var _useScrollPositionBlo=(0,lib/* useScrollPositionBlocker */.o5)(),blockElementScrollPositionUntilNextRender=_useScrollPositionBlo.blockElementScrollPositionUntilNextRender;if(groupId!=null){var relevantTabGroupChoice=tabGroupChoices[groupId];if(relevantTabGroupChoice!=null&&relevantTabGroupChoice!==selectedValue&&values.some(function(value){return value.value===relevantTabGroupChoice;})){setSelectedValue(relevantTabGroupChoice);}}var handleTabChange=function handleTabChange(event){var newTab=event.currentTarget;var newTabIndex=tabRefs.indexOf(newTab);var newTabValue=values[newTabIndex].value;if(newTabValue!==selectedValue){blockElementScrollPositionUntilNextRender(newTab);setSelectedValue(newTabValue);if(groupId!=null){setTabGroupChoices(groupId,newTabValue);}}};var handleKeydown=function handleKeydown(event){var _focusElement;var focusElement=null;switch(event.key){case'ArrowRight':{var nextTab=tabRefs.indexOf(event.currentTarget)+1;focusElement=tabRefs[nextTab]||tabRefs[0];break;}case'ArrowLeft':{var prevTab=tabRefs.indexOf(event.currentTarget)-1;focusElement=tabRefs[prevTab]||tabRefs[tabRefs.length-1];break;}default:break;}(_focusElement=focusElement)==null?void 0:_focusElement.focus();};return/*#__PURE__*/react.createElement("div",{className:"tabs-container"},/*#__PURE__*/react.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,clsx_m/* default */.Z)('tabs',{'tabs--block':block},className)},values.map(function(_ref3){var value=_ref3.value,label=_ref3.label,attributes=_ref3.attributes;return/*#__PURE__*/react.createElement("li",(0,esm_extends/* default */.Z)({role:"tab",tabIndex:selectedValue===value?0:-1,"aria-selected":selectedValue===value,key:value,ref:function ref(tabControl){return tabRefs.push(tabControl);},onKeyDown:handleKeydown,onFocus:handleTabChange,onClick:handleTabChange},attributes,{className:(0,clsx_m/* default */.Z)('tabs__item',styles_module.tabItem,attributes==null?void 0:attributes.className,{'tabs__item--active':selectedValue===value})}),label!=null?label:value);})),lazy?/*#__PURE__*/(0,react.cloneElement)(children.filter(function(tabItem){return tabItem.props.value===selectedValue;})[0],{className:'margin-vert--md'}):/*#__PURE__*/react.createElement("div",{className:"margin-vert--md"},children.map(function(tabItem,i){return/*#__PURE__*/(0,react.cloneElement)(tabItem,{key:i,hidden:tabItem.props.value!==selectedValue});})));}function Tabs(props){var isBrowser=(0,useIsBrowser/* default */.Z)();return/*#__PURE__*/react.createElement(TabsComponent// Remount tabs after hydration
// Temporary fix for https://github.com/facebook/docusaurus/issues/5653
,(0,esm_extends/* default */.Z)({key:String(isBrowser)},props));}

/***/ }),

/***/ 69853:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },
/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },
/* harmony export */   "metadata": function() { return /* binding */ metadata; },
/* harmony export */   "toc": function() { return /* binding */ toc; },
/* harmony export */   "default": function() { return /* binding */ MDXContent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_drip_form_drip_form_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25773);
/* harmony import */ var _home_runner_work_drip_form_drip_form_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30808);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27378);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35318);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77600);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70517);
var _excluded=["components"];var frontMatter={id:'options',title:'options（配置）'};var contentTitle='自定义 generator';var metadata={"unversionedId":"generator/props/options","id":"generator/props/options","title":"options（配置）","description":"options prop 支持自定义功能。","source":"@site/docs/generator/props/options.mdx","sourceDirName":"generator/props","slug":"/generator/props/options","permalink":"/drip-form/docs/generator/props/options","editUrl":"https://github.com/JDFED/drip-form/edit/master/website/docs/generator/props/options.mdx","tags":[],"version":"current","frontMatter":{"id":"options","title":"options（配置）"},"sidebar":"generator","previous":{"title":"components（自定义组件区）","permalink":"/drip-form/docs/generator/props/components"},"next":{"title":"customComponents（业务组件）","permalink":"/drip-form/docs/generator/props/customComponents"}};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'header 区配置',id:'header-区配置',children:[{value:'showHeader',id:'showheader',children:[],level:3},{value:'showLogo',id:'showlogo',children:[],level:3},{value:'showUploadJSON',id:'showuploadjson',children:[],level:3},{value:'showEditJSON',id:'showeditjson',children:[],level:3},{value:'showPreviewForm',id:'showpreviewform',children:[],level:3},{value:'showExportJSON',id:'showexportjson',children:[],level:3},{value:'exportText',id:'exporttext',children:[],level:3},{value:'customExport',id:'customexport',children:[],level:3},{value:'renderLeftHeader',id:'renderleftheader',children:[],level:3}],level:2},{value:'可视区配置',id:'可视区配置',children:[{value:'pointerEvents',id:'pointerevents',children:[],level:3},{value:'showActionBar',id:'showactionbar',children:[],level:3},{value:'showDeleteIcon',id:'showdeleteicon',children:[],level:3}],level:2},{value:'编辑区属性配置',id:'编辑区属性配置',children:[{value:'control',id:'control',children:[],level:3}],level:2},{value:'其它',id:'其它',children:[{value:'fieldKeyFn',id:'fieldkeyfn',children:[],level:3},{value:'addFieldLocation',id:'addfieldlocation',children:[],level:3}],level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_drip_form_drip_form_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_drip_form_drip_form_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"自定义-generator"},"\u81EA\u5B9A\u4E49 generator"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"options")," prop \u652F\u6301\u81EA\u5B9A\u4E49\u529F\u80FD\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-typescript"},"type Options = Partial<{\n    // header\u533A \u76F8\u5173\u914D\u7F6E\n    headerConfig: HeaderConfig\n    // \u53EF\u89C6\u533A \u76F8\u5173\u914D\u7F6E\n    viewportConfig: ViewportConfig\n    // \u65B0\u589E\u8868\u5355 fieldKey \u751F\u6210\u51FD\u6570\n    fieldKeyFn: (unitedSchema: UnitedSchemaAtom) => string\n    // \u672A\u9009\u4E2D\u8868\u5355\u65F6\uFF0C\u70B9\u51FB\u5DE6\u4FA7\u7EC4\u4EF6\uFF0C\u65B0\u589E\u8868\u5355\u7684\u4F4D\u7F6E\n    addFieldLocation: 'top' | 'bottom'\n}>\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-typescript"},"type HeaderConfig = Partial<{\n    // \u662F\u5426\u5C55\u793Aheader\u533A\u57DF\n    showHeader: boolean\n    // \u662F\u5426\u5C55\u793Alogo\u7EC4\u4EF6\n    showLogo: boolean\n    // \u662F\u5426\u5C55\u793A \u5BFC\u5165JSON \u6309\u94AE\n    showUploadJSON: boolean\n    // \u662F\u5426\u5C55\u793A JSON\u7F16\u8F91 \u6309\u94AE\n    showEditJSON: boolean\n    // \u662F\u5426\u5C55\u793A \u8868\u5355\u9884\u89C8 \u6309\u94AE\n    showPreviewForm: boolean\n    // \u662F\u5426\u5C55\u793A \u5BFC\u51FAJSON \u6309\u94AE\n    showExportJSON: boolean\n    // \u5BFC\u51FAjson\u81EA\u5B9A\u4E49\u6587\u6848\n    exportText: string\n    // \u81EA\u5B9A\u4E49exportjson\u51FD\u6570\n    customExport: (exportJsonFn: () => void) => void\n    // \u81EA\u5B9A\u4E49\u5DE6\u4FA7logo\u7EC4\u4EF6\n    renderLeftHeader: () => JSX.Element\n}>\n\ntype ViewportConfig = Partial<\n  Record<ViewportConfigKey, ViewportConfigItem> & {\n    pointerEvents: 'none' | 'auto'\n  }\n>\n\ntype ViewportConfigItem =\n    | boolean\n    | ((param: { type: string; selectedFieldKey: string | null }) => boolean)\n\ntype ViewportConfigKey = 'showActionBar' | 'showDeleteIcon'\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"header-区配置"},"header \u533A\u914D\u7F6E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"showheader"},"showHeader"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u662F\u5426\u5C55\u793A\u5934\u90E8"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"showlogo"},"showLogo"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u662F\u5426\u5C55\u793A logo"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"showuploadjson"},"showUploadJSON"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u662F\u5426\u5C55\u793A\u5BFC\u5165 JSON \u6309\u94AE"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"showeditjson"},"showEditJSON"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u662F\u5426\u5C55\u793A JSON \u7F16\u8F91\u6309\u94AE"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"showpreviewform"},"showPreviewForm"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u662F\u5426\u5C55\u793A\u8868\u5355\u9884\u89C8\u6309\u94AE"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"showexportjson"},"showExportJSON"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u662F\u5426\u5C55\u793A\u5BFC\u51FA JSON \u6309\u94AE"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"exporttext"},"exportText"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u81EA\u5B9A\u4E49\u5BFC\u51FA JOSN \u6309\u94AE\u6587\u6848"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"customexport"},"customExport"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u81EA\u5B9A\u4E49\u5BFC\u51FA JSON \u6309\u94AE\u56DE\u8C03\u51FD\u6570"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"renderleftheader"},"renderLeftHeader"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u81EA\u5B9A\u4E49\u5DE6\u4FA7 logo \u7EC4\u4EF6"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"可视区配置"},"\u53EF\u89C6\u533A\u914D\u7F6E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"pointerevents"},"pointerEvents"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"viewport\u533A\u57DF\u8868\u5355\u662F\u5426\u53EF\u4EE5\u70B9\u51FB"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"'none'\uFF08\u9ED8\u8BA4\uFF09: \u4E0D\u53EF\u70B9\u51FB\n'auto': \u53EF\u4EE5\u70B9\u51FB"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"showactionbar"},"showActionBar"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u662F\u5426\u5C55\u793A\u64CD\u4F5C\u680F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u7528\u6765\u914D\u7F6E ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"viewport \u533A\u57DF\u64CD\u4F5C\u680F"),"\uFF08\u56FE\u7247\u7EA2\u8272\u533A\u57DF\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:"https://img11.360buyimg.com/imagetools/jfs/t1/134505/27/23809/10562/62172e31E7e74b668/3b10505918437cd1.png",alt:"\u64CD\u4F5C\u680F"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{mdxType:"Tabs"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{value:"example",label:"\u914D\u7F6E\u793A\u4F8B",default:true,mdxType:"TabItem"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx"},"import React, { memo } from 'react'\nimport DripFormGenerator from '@jdfed/form-generator'\nimport '@jdfed/form-generator/dist/index.css'\n\nconst App = memo(() => {\n    return (\n        <DripFormGenerator\n            viewportConfig={{\n                showActionBar: false,\n                /* \u4E5F\u53EF\u4F7F\u7528\u51FD\u6570\u5F62\u5F0F\uFF0C\u4EE5\u4E0B\u914D\u7F6E\u4F1A\u5BFC\u81F4 text \u7C7B\u578B\u7684\u4E0D\u5C55\u793A\u64CD\u4F5C\u680F\n                showActionBar: ({ selectedFieldKey, type }) => {\n                    return type !== 'text'\n                }, \n                */\n            }}\n        />\n    )\n})\n\nApp.displayName = 'GeneratorApp'\n\nexport default App\n"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{value:"preview",label:"\u914D\u7F6E\u9884\u89C8",mdxType:"TabItem"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:"https://img10.360buyimg.com/imagetools/jfs/t1/110155/24/24411/12251/62172eeaEb6e3bfdc/8ea5da6e962195c0.jpg",alt:"showActionBar\u914D\u7F6E\u9884\u89C8"}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"showdeleteicon"},"showDeleteIcon"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u662F\u5426\u5C55\u793A\u5220\u9664\u6309\u94AE"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"编辑区属性配置"},"\u7F16\u8F91\u533A\u5C5E\u6027\u914D\u7F6E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u53EF\u81EA\u5B9A\u4E49\u5C5E\u6027\u914D\u7F6E\u7684\u5C55\u793A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u9664\u4E86\u5728",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"./components"},"components\u4E2D\u914D\u7F6E\u5C5E\u6027\u914D\u7F6E"),"\u4E4B\u5916\uFF0C\u652F\u6301\u7528\u6237\u4E0D\u4FEE\u6539components\u7684\u57FA\u7840\u4E0A\u76F4\u63A5\u4FEE\u6539\u5C5E\u6027\u914D\u7F6E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"control"},"control"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u7531\u4E8E\u5C5E\u6027\u914D\u7F6E\u533A\u57DF\u4E5F\u662F\u4E00\u4E2Adrip-form\u8868\u5355\u3002\u6240\u4EE5\uFF0C\u7528\u6237\u53EF\u4EE5\u914D\u7F6E\u5168\u5C40\u8054\u52A8\u6765\u914D\u7F6E\u5C5E\u6027\u914D\u7F6E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{mdxType:"Tabs"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{value:"preview",label:"\u7981\u7528\u5207\u6362\u7EC4\u4EF6\u7C7B\u578B\u548C\u7F16\u8F91fieldKey",mdxType:"TabItem"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx"},"<DripFormGenerator\n    options={{\n        propertyConfig: {\n            control: ({ merge, formData }) => {\n                // \u5F53\u7EC4\u4EF6\u7684fieldKey\u662Fabc\u65F6\n                if (formData?.$fieldKey === 'abc') {\n                    //\u7981\u6B62\u4FEE\u6539fieldKey\n                    merge('$fieldKey', 'uiSchema', { disabled: true })\n                    //\u7981\u6B62\u5207\u6362\u7EC4\u4EF6\u7C7B\u578B\n                    merge('type', 'uiSchema', { disabled: true })\n                }\n                // \u5F53\u7EC4\u4EF6\u662F\u8F93\u5165\u6846\u65F6\n                if (formData?.type === 'text') {\n                    //\u7981\u6B62\u4FEE\u6539fieldKey\n                    merge('$fieldKey', 'uiSchema', { disabled: true })\n                    //\u7981\u6B62\u5207\u6362\u7EC4\u4EF6\u7C7B\u578B\n                    merge('type', 'uiSchema', { disabled: true })\n                }\n            },\n        },\n    }}\n/>\n")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"其它"},"\u5176\u5B83"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"fieldkeyfn"},"fieldKeyFn"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u81EA\u5B9A\u4E49\u65B0\u589E\u8868\u5355\u7684\u751F\u6210\u89C4\u5219\u51FD\u6570"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"addfieldlocation"},"addFieldLocation"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u81EA\u5B9A\u4E49\u672A\u9009\u4E2D\u4EFB\u4F55\u8868\u5355\u65F6\uFF0C\u70B9\u51FB\u65B0\u589E\u8868\u5355\u7684\u9ED8\u8BA4\u4F4D\u7F6E\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"bottom")," \u6DFB\u52A0\u5230\u6700\u4E0B\u65B9\uFF08\u9ED8\u8BA4\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"top")," \u6DFB\u52A0\u5230\u6700\u4E0A\u65B9"));};MDXContent.isMDXComponent=true;

/***/ })

}]);