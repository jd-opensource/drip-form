"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[6474],{

/***/ 3905:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zo": function() { return /* binding */ MDXProvider; },
/* harmony export */   "kt": function() { return /* binding */ createElement; }
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);


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

/***/ 3919:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": function() { return /* binding */ hasProtocol; },
/* harmony export */   "Z": function() { return /* binding */ isInternalUrl; }
/* harmony export */ });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function hasProtocol(url){return /^(\w*:|\/\/)/.test(url)===true;}function isInternalUrl(url){return typeof url!=='undefined'&&!hasProtocol(url);}

/***/ }),

/***/ 4996:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": function() { return /* binding */ useBaseUrlUtils; },
/* harmony export */   "Z": function() { return /* binding */ useBaseUrl; }
/* harmony export */ });
/* harmony import */ var _useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2263);
/* harmony import */ var _isInternalUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3919);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function addBaseUrl(siteUrl,baseUrl,url,_temp){var _ref=_temp===void 0?{}:_temp,_ref$forcePrependBase=_ref.forcePrependBaseUrl,forcePrependBaseUrl=_ref$forcePrependBase===void 0?false:_ref$forcePrependBase,_ref$absolute=_ref.absolute,absolute=_ref$absolute===void 0?false:_ref$absolute;if(!url){return url;}// it never makes sense to add a base url to a local anchor url
if(url.startsWith('#')){return url;}// it never makes sense to add a base url to an url with a protocol
if((0,_isInternalUrl__WEBPACK_IMPORTED_MODULE_1__/* .hasProtocol */ .b)(url)){return url;}if(forcePrependBaseUrl){return baseUrl+url;}// We should avoid adding the baseurl twice if it's already there
var shouldAddBaseUrl=!url.startsWith(baseUrl);var basePath=shouldAddBaseUrl?baseUrl+url.replace(/^\//,''):url;return absolute?siteUrl+basePath:basePath;}function useBaseUrlUtils(){var _useDocusaurusContext=(0,_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(),_useDocusaurusContext2=_useDocusaurusContext.siteConfig;_useDocusaurusContext2=_useDocusaurusContext2===void 0?{}:_useDocusaurusContext2;var _useDocusaurusContext3=_useDocusaurusContext2.baseUrl,baseUrl=_useDocusaurusContext3===void 0?'/':_useDocusaurusContext3,siteUrl=_useDocusaurusContext2.url;return{withBaseUrl:function withBaseUrl(url,options){return addBaseUrl(siteUrl,baseUrl,url,options);}};}function useBaseUrl(url,options){if(options===void 0){options={};}var _useBaseUrlUtils=useBaseUrlUtils(),withBaseUrl=_useBaseUrlUtils.withBaseUrl;return withBaseUrl(url,options);}

/***/ }),

/***/ 6449:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },
/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },
/* harmony export */   "metadata": function() { return /* binding */ metadata; },
/* harmony export */   "toc": function() { return /* binding */ toc; },
/* harmony export */   "default": function() { return /* binding */ MDXContent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7462);
/* harmony import */ var _home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4996);
var _excluded=["components"];var frontMatter={id:'onQuery',title:'onQuery 异步获取表单数据'};var contentTitle=undefined;var metadata={"unversionedId":"use/onQuery","id":"use/onQuery","isDocsHomePage":false,"title":"onQuery 异步获取表单数据","description":"表单数据可以通过 drip-form formData prop 传递初始值，也可以通过配置unitedSchema的default关键字传递兜底值，但是当我们的表单数据需要从后端接口异步拉取时，我们如何配置呐？","source":"@site/docs/use/onQuery 异步获取表单数据.mdx","sourceDirName":"use","slug":"/use/onQuery","permalink":"/drip-form/docs/use/onQuery","editUrl":"https://github.com/JDFED/drip-form/edit/master/website/docs/use/onQuery 异步获取表单数据.mdx","tags":[],"version":"current","frontMatter":{"id":"onQuery","title":"onQuery 异步获取表单数据"},"sidebar":"docs","previous":{"title":"onValidate 校验","permalink":"/drip-form/docs/use/onValidate"},"next":{"title":"customFunc 函数占位符","permalink":"/drip-form/docs/use/customFunc"}};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8868\u5355\u6570\u636E\u53EF\u4EE5\u901A\u8FC7 drip-form ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"formData")," prop \u4F20\u9012\u521D\u59CB\u503C\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"unitedSchema"),"\u7684",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"default"),"\u5173\u952E\u5B57\u4F20\u9012\u515C\u5E95\u503C\uFF0C\u4F46\u662F\u5F53\u6211\u4EEC\u7684\u8868\u5355\u6570\u636E\u9700\u8981\u4ECE\u540E\u7AEF\u63A5\u53E3\u5F02\u6B65\u62C9\u53D6\u65F6\uFF0C\u6211\u4EEC\u5982\u4F55\u914D\u7F6E\u5450\uFF1F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u76EE\u524D drip-form \u7684 select \u548C treeselect \u7EC4\u4EF6\u652F\u6301\u5F02\u6B65\u83B7\u53D6\u6570\u636E\u3002\u5982\u679C\u5176\u4ED6\u8868\u5355\u63A7\u4EF6\u9700\u8981\u652F\u6301\u5F02\u6B65\u83B7\u53D6\u6570\u636E\uFF0C\u8BF7\u8054\u7CFB drip-form \u5F00\u53D1\u4EBA\u5458\u3002\u6211\u4EEC\u4F1A\u5FEB\u901F\u652F\u6301\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-json","metastring":"title=\"unitedSchema.json\"","title":"\"unitedSchema.json\""},"{\n    \"validateTime\": \"submit\",\n    \"type\": \"object\",\n    \"theme\": \"drip-theme\",\n    \"schema\": [\n      {\n        \"title\": \"\u9009\u62E9\u5668\",\n        \"type\": [\"string\", \"number\", \"array\"],\n        \"errMsg\": {\n          \"_\": \"\u5FC5\u586B\"\n        },\n        \"ui\": {\n          \"type\": \"select\",\n          \"placeholder\": \"\u8BF7\u9009\u62E9\",\n          \"allowClear\": true,\n          \"multiple\": true,\n          \"style\": {\n            \"width\": \"100%\"\n          },\n          \"requestCache\": true\n        },\n        \"requiredMsg\": \"\u5FC5\u586B\",\n        \"fieldKey\": \"select\"\n      },\n      {\n        \"title\": \"\u6811\u5F62\u9009\u62E9(\u5F02\u6B65\u52A0\u8F7D\u6570\u636E)\",\n        \"type\": \"array\",\n        \"default\": [],\n        \"fieldKey\": \"treeselect\",\n        \"errMsg\": {\n          \"_\": \"\u5FC5\u586B\"\n        },\n        \"ui\": {\n          \"minItems\": 1,\n          \"maxItems\": 2,\n          \"type\": \"treeSelect\",\n          \"placeholder\": \"\u8BF7\u9009\u62E9\",\n          \"requestCache\": true,\n          \"treeDataSimpleMode\": true,\n          \"multiple\": true,\n          \"showCheckedStrategy\": \"parent\",\n          \"allowClear\": true,\n          \"treeCheckable\": true,\n          \"style\": {\n            \"width\": \"50%\"\n          }\n       },\n        \"requiredMsg\": \"\u5FC5\u586B\",\n      }\n    ]\n}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4ECE",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"unitedSchema.json"),"\u53EF\u89C1\uFF0C\u5E76\u6CA1\u6709\u8BE6\u7EC6\u914D\u7F6E selct \u548C treeselect \u7684\u6570\u636E\u3002selct \u548C treeselect \u7684\u6570\u636E\u90FD\u662F\u901A\u8FC7\u63A5\u53E3\u5F02\u6B65\u83B7\u53D6\u5F97\u5230"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6211\u4EEC\u8FD9\u91CC\u6CE8\u610F\u4E0B",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"requestCache"),"\u5B57\u6BB5\u3002\u5F53\u8BE5\u5B57\u6BB5\u4E3A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"true"),"\u65F6\uFF0C\u4EE3\u8868\u83B7\u53D6\u5230\u7684\u6570\u636E\u4F1A\u7F13\u5B58\u4E0B\u6765\u3002\u907F\u514D\u6BCF\u6B21\u90FD\u8C03\u7528\u63A5\u53E3\u3002\u5982\u679C\u9700\u8981\u6BCF\u6B21\u90FD\u5B9E\u65F6\u8C03\u7528\u63A5\u53E3\uFF0C\u6539\u4E3A false \u5C31\u53EF\u4EE5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-jsx"},"import React from 'react'\nimport BabelForm from '@jdfed/drip-form'\nimport dripTheme from '@jdfed/drip-form-theme-antd'\nimport '@jdfed/drip-form-theme-antd/dist/index.css'\nimport unitedSchema from './unitedSchema.json'\n\n// \u5F02\u6B65\u6570\u636E\u67E5\u8BE2\nconst onQuery = {\n  select: () => {\n    console.log('select\u9009\u62E9\u5668\u5F02\u6B65\u67E5\u8BE2\u6570\u636E')\n    return [\n      {\n        label: '\u9009\u98791',\n        value: 'choice1',\n      },\n      {\n        label: '\u9009\u98792',\n        value: 'choice2',\n      },\n      {\n        label: '\u9009\u98793',\n        value: 'choice3',\n      },\n    ]\n  },\n  treeSelect: async ({ isFirstLoad, pId }) => {\n    console.log('treeselect\u5F02\u6B65\u67E5\u8BE2\u6570\u636E')\n    // \u7B2C\u4E00\u6B21\u52A0\u8F7D\u83B7\u53D6\u7B2C\u4E00\u5C42\u7EA7\u6570\u636E\n    if (isFirstLoad) {\n      return treeSelectOptions\n    }\n    const random = Math.random()\n    // \u70B9\u51FB\u7BAD\u5934\uFF0C\u5F02\u6B65\u83B7\u53D6\u7EA7\u8054\u6570\u636E\u5E76\u8FD4\u56DE\n    return [\n      {\n        id: random,\n        pId,\n        title: 'expand',\n        isLeaf: false,\n        value: random,\n      },\n    ]\n  },\n}\n\n<BabelForm\n  unitedSchema={unitedSchema}\n  uiComponents={{\n    'drip-theme': dripTheme\n   }}\n  onQuery={onQuery}\n/>\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:"https://storage.360buyimg.com/imgtools/27bb6cb8de-818864d0-4cf9-11ec-9620-6d9821f0161f.gif",alt:"\u56FE\u7247\u52A0\u8F7D\u51FA\u9519"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4ECE\u4E0A\u9762 gif \u53EF\u4EE5\u770B\u51FA"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u5F53\u70B9\u51FB\u9009\u62E9\u5668\u65F6\uFF0C\u4F1A\u8C03\u7528\u63A5\u53E3\u3002\u5E76\u7F13\u5B58\u63A5\u53E3\u6570\u636E")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u5F53\u70B9\u51FB\u6811\u5F62\u9009\u62E9\u6BCF\u4E2A\u8282\u70B9\u65F6\u90FD\u4F1A\u8C03\u7528\u63A5\u53E3\u83B7\u53D6\u6570\u636E\u3002"))));};MDXContent.isMDXComponent=true;

/***/ })

}]);