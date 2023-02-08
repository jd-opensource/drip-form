"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[3442],{

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

/***/ 83913:
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
/* harmony import */ var _home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87462);
/* harmony import */ var _home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27378);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'schemaKeyword',title:'表单校验',description:'如何配置表单校验逻辑？'};var contentTitle=undefined;var metadata={"unversionedId":"form/unitedSchema/schemaKeyword","id":"form/unitedSchema/schemaKeyword","title":"表单校验","description":"如何配置表单校验逻辑？","source":"@site/docs/form/unitedSchema/表单校验.md","sourceDirName":"form/unitedSchema","slug":"/form/unitedSchema/schemaKeyword","permalink":"/drip-form/docs/form/unitedSchema/schemaKeyword","draft":false,"editUrl":"https://github.com/JDFED/drip-form/edit/master/website/docs/form/unitedSchema/表单校验.md","tags":[],"version":"current","frontMatter":{"id":"schemaKeyword","title":"表单校验","description":"如何配置表单校验逻辑？"},"sidebar":"docs","previous":{"title":"表单展示","permalink":"/drip-form/docs/form/unitedSchema/uiType"},"next":{"title":"用法","permalink":"/drip-form/docs/form/use"}};var assets={};var toc=[{value:'必填',id:'必填',level:2},{value:'数组最少一项',id:'数组最少一项',level:2},{value:'范围限制',id:'范围限制',level:2},{value:'校验关键字',id:'校验关键字',level:2},{value:'如何设置校验关键字',id:'如何设置校验关键字',level:3},{value:'如何设置错误文案',id:'如何设置错误文案',level:3},{value:'了解更多校验关键字',id:'了解更多校验关键字',level:3}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u672C\u7BC7\u4ECB\u7ECD",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"unitedSchema"),"\u662F\u5982\u4F55\u5B8C\u6210\u6821\u9A8C\u7684\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"type":"tip"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Drip Form"),"\u5185\u90E8\u5C06",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"unitedSchema"),"\u8F6C\u6362\u4E3A\u6807\u51C6\u7684 JSON Schema \u534F\u8BAE\uFF0C\u5E76\u4F7F\u7528 ajv \u5BF9\u6570\u636E\u8FDB\u884C\u6821\u9A8C\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("details",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("summary",null,"\u4E2A\u4EBA\u4FE1\u606F\u6570\u636E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-js"},"{\n  name: '\u5F20\u4E09',\n  age: 23,\n  married: true,\n  hobby: ['\u9493\u9C7C', '\u6E38\u6CF3'],\n  address: {province: 'xx\u7701', city: 'xx\u5E02'},\n  mate: ['\u738B\u56DB', 23],\n  schools: [{name:'xxx\u5C0F\u5B66',year:'2000-2006'},{name:'xxx\u4E2D\u5B66',year:'2007-2010'}]\n}\n"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5047\u8BBE\u4E2A\u4EBA\u4FE1\u606F\u6570\u636E\u6709\u4E00\u4E9B\u6570\u636E\u6821\u9A8C\u9650\u5236\n\u6BD4\u5982\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u59D3\u540D\u3001\u5E74\u9F84\u5FC5\u586B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B66\u6821\u6700\u5C11 1 \u4E2A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5E74\u9F84\u5FC5\u987B\u5927\u4E8E 18\uFF0C\u5C0F\u4E8E 35")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"必填"},"\u5FC5\u586B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"blockquote"},"\u8BBE\u7F6E",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"requiredMsg"),"\u5173\u952E\u5B57")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-js"},"{\n  type:'object',\n  validateTime:'change',\n  theme:'antd',\n  schema:[\n    {\n      type:'string',\n      fieldKey:'name',\n      // highlight-next-line\n      requiredMsg:'\u5FC5\u586B',\n      ui:{\n        type:'text',\n      }\n    },\n    {\n      type:'number',\n      fieldKey:'age',\n      // highlight-next-line\n      requiredMsg:'\u5FC5\u586B',\n      ui:{\n        type:'number'\n      }\n    }\n  ]\n}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"数组最少一项"},"\u6570\u7EC4\u6700\u5C11\u4E00\u9879"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"blockquote"},"\u8BBE\u7F6E",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"minItems"),"\u5173\u952E\u5B57")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-js"},"{\n  type:'object',\n  validateTime:'change',\n  theme:'antd',\n  schema:[\n     {\n      type:'array',\n      fieldKey:'schools',\n      //highlight-start\n      minItems:1,\n      errMsg:{\n        minItems:'\u6700\u5C11\u586B1\u4E2A\u5B66\u6821'\n      },\n      //highlight-end\n      items:{\n        type:'object',\n        schema:[\n          {\n            type:'string',\n            fieldKey:'name'\n          },\n          {\n            type:'string',\n            fieldKey:'year'\n          }\n        ]\n      }\n    }\n  ]\n}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"范围限制"},"\u8303\u56F4\u9650\u5236"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"blockquote"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"minmum"),"\u3001",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"maximum"),"\u5173\u952E\u5B57\u8BBE\u7F6E\u6570\u5B57\u8303\u56F4")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-js"},"{\n  type:'object',\n  validateTime:'change',\n  theme:'antd',\n  schema:[\n    {\n      type:'number',\n      fieldKey:'age',\n       //highlight-start\n      \"minimum\": 18,\n      \"maximum\": 35,\n      \"errMsg\": {\n        \"minimum\": \"\u6700\u5C0F18\",\n        \"maximum\": \"\u6700\u592735\"\n      },\n      //highlight-end\n      ui:{\n        type:'number'\n      }\n    }\n  ]\n}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"校验关键字"},"\u6821\u9A8C\u5173\u952E\u5B57"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4E0A\u8FF0",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"requiredMsg"),"\u3001",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"minItems"),"\u3001",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"minmum"),"\u3001",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"maximu"),"\u5747\u662F\u6821\u9A8C\u5173\u952E\u5B57\u3002",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"ajv"),"\u89E3\u6790\u5230\u4E0A\u8FF0\u5173\u952E\u5B57\u4F1A\u5BF9\u6570\u636E\u8FDB\u884C\u6821\u9A8C\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"如何设置校验关键字"},"\u5982\u4F55\u8BBE\u7F6E\u6821\u9A8C\u5173\u952E\u5B57"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6821\u9A8C\u5173\u952E\u5B57\u548C",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"ui"),"\u3001",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"fieldKey"),"\u5B57\u6BB5\u540C\u5C42\u7EA7\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"如何设置错误文案"},"\u5982\u4F55\u8BBE\u7F6E\u9519\u8BEF\u6587\u6848"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"type":"info"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},"\u4E3A\u4E86\u65B9\u4FBF\u8BBE\u7F6E\u4E0D\u540C\u5173\u952E\u5B57\u7684\u9519\u8BEF\u4FE1\u606F\uFF0C",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Drip Form"),"\u6DFB\u52A0\u4E86",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"errMsg"),"\u5173\u952E\u5B57\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6BD4\u5982\u4E0A\u9762\u8303\u56F4\u9650\u5236\uFF0C\u5F53\u5E74\u9F84\u662F17\u65F6\uFF0C\u4F1A\u63D0\u793A\u6700\u5C0F18\u9519\u8BEF\u6587\u6848\uFF1B\u5F53\u5E74\u9F84\u65F636\u65F6\uFF0C\u4F1A\u63D0\u793A\u6700\u592735\u9519\u8BEF\u6587\u6848"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"了解更多校验关键字"},"\u4E86\u89E3\u66F4\u591A\u6821\u9A8C\u5173\u952E\u5B57"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"type":"tip"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Drip Form"),"\u5E95\u5C42\u4F7F\u7528",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"ajv"),"\u3001",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"JSON Schema"),"\u89C4\u8303\uFF0C\u6240\u4EE5\u652F\u6301\u5E38\u89C1\u7684\u6821\u9A8C\u573A\u666F\u3002\n\u66F4\u591A\u6821\u9A8C\u5173\u952E\u5B57\u67E5\u770B",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../use/validate/jsonSchemaValidate"},"JSON Schema \u6821\u9A8C"))));};MDXContent.isMDXComponent=true;

/***/ })

}]);