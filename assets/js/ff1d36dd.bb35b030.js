"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[5111],{

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

/***/ 6932:
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
var _excluded=["components"];var frontMatter={id:'customComponents',title:'customComponents 自定义组件'};var contentTitle=undefined;var metadata={"unversionedId":"use/customComponents","id":"use/customComponents","isDocsHomePage":false,"title":"customComponents 自定义组件","description":"自定义组件示例","source":"@site/docs/use/customComponents 自定义组件.mdx","sourceDirName":"use","slug":"/use/customComponents","permalink":"/drip-form/docs/use/customComponents","editUrl":"https://github.com/JDFED/drip-form/edit/master/website/docs/use/customComponents 自定义组件.mdx","tags":[],"version":"current","frontMatter":{"id":"customComponents","title":"customComponents 自定义组件"},"sidebar":"docs","previous":{"title":"uiComponents 主题","permalink":"/drip-form/docs/use/uiComponents"},"next":{"title":"control 联动控制","permalink":"/drip-form/docs/use/control"}};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'自定义组件示例',id:'自定义组件示例',children:[],level:2},{value:'配置 unitedSchema',id:'配置-unitedschema',children:[],level:2},{value:'渲染结果',id:'渲染结果',children:[],level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"自定义组件示例"},"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u793A\u4F8B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5982\u4E0B\uFF0C\u9996\u5148\u6211\u4EEC\u5148\u7533\u660E\u4E24\u4E2A\u7EC4\u4EF6",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"CustomField1"),"\u548C",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"CustomField2"),"\uFF0C\u5176\u6B21\u53EF\u4EE5\u7533\u660E\u4E00\u4E2A\u5BF9\u8C61",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"customComponents"),"\uFF0C\u8BE5\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\u540D",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"custom1\u3001custom2"),"\u4E0E",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"unitedSchema"),"\u4E2D\u5B9A\u4E49\u7684\u552F\u4E00\u7EC4\u4EF6 key \u503C\u5BF9\u5E94\uFF0C\u5426\u5219\u8868\u5355\u65E0\u6CD5\u6E32\u67D3\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-jsx"},"import React, { useState, memo } from 'react'\nimport { render } from 'react-dom'\nimport DripForm from '@jdfed/drip-form'\nimport dripTheme from '@jdfed/drip-form-theme-antd'\nimport unitedSchema from './unitedComponents.json'\nimport '@jdfed/drip-form-theme-antd/dist/index.css'\n\nconst CustomField1 = memo(() => {\n  const [count, setCount] = useState(0)\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <div onClick={() => setCount(count + 1)}>Click me</div>\n    </div>\n  )\n})\n\nconst CustomField2 = memo(() => {\n  return <div>\u8FD9\u662F\u81EA\u5B9A\u4E49\u7EC4\u4EF62</div>\n})\n\nconst customComponents = {\n  custom1: CustomField1,\n  custom2: CustomField2,\n}\n\nconst Form = () => {\n  return (\n    <div>\n      <DripForm\n        unitedSchema={unitedSchema}\n        uiComponents={{\n          'drip-theme': dripTheme,\n        }}\n        customComponents={customComponents}\n      />\n    </div>\n  )\n}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"配置-unitedschema"},"\u914D\u7F6E unitedSchema"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u540C\u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u5728",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"unitedSchema"),"\u4E2D\u914D\u7F6E\u4E00\u4E0B\uFF0C\u53EA\u9700\u8981\u5C06",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Schema"),"\u4E2D",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"ui"),"\u7684",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"type"),"\u5C5E\u6027\u8BBE\u7F6E\u6210\u6211\u4EEC\u5728",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"customComponents"),"\u4E2D\u914D\u7F6E\u7684\u5C5E\u6027key\u503C\uFF0C\u5728\u672C\u793A\u4F8B\u4E2D\u5373\u4E3A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"custom1"),"\u548C",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"custom2"),"\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-json","metastring":"title=\"unitedSchema.json\"","title":"\"unitedSchema.json\""},"{\n  \"validateTime\": \"submit\",\n  \"type\": \"object\",\n  \"theme\": \"drip-theme\",\n  \"schema\": [\n    {\n      \"title\": \"\",\n      \"type\": \"string\",\n      \"ui\": {\n        \"type\": \"custom1\"\n      },\n      \"fieldKey\": \"custom_click1\"\n    },\n    {\n      \"type\": \"string\",\n      \"title\": \"\",\n      \"ui\": {\n        \"type\": \"custom2\"\n      },\n      \"fieldKey\": \"custom_component2\"\n    }\n  ]\n}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"渲染结果"},"\u6E32\u67D3\u7ED3\u679C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4E0A\u8FF0\u4EE3\u7801\u5C06\u4F1A\u5C06\u8868\u5355\u6E32\u67D3\u4E3A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:"https://storage.360buyimg.com/imgtools/4a1b1a8f03-82f51430-4cf9-11ec-bf12-d7e468206312.png",alt:"\u56FE\u7247\u52A0\u8F7D\u51FA\u9519"}));};MDXContent.isMDXComponent=true;

/***/ })

}]);