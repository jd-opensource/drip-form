"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[9215],{

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

/***/ 2167:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'introduction',title:'介绍',slug:'/'};var contentTitle=undefined;var metadata={"unversionedId":"form/introduction/introduction","id":"form/introduction/introduction","title":"介绍","description":"介绍","source":"@site/docs/form/introduction/介绍.md","sourceDirName":"form/introduction","slug":"/","permalink":"/drip-form/docs/","draft":false,"editUrl":"https://github.com/JDFED/drip-form/edit/master/website/docs/form/introduction/介绍.md","tags":[],"version":"current","frontMatter":{"id":"introduction","title":"介绍","slug":"/"},"sidebar":"docs","next":{"title":"快速开始","permalink":"/drip-form/docs/form/quickStart/quickStart"}};var assets={};var toc=[{value:'介绍',id:'介绍',level:2},{value:'理念',id:'理念',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"介绍"},"\u4ECB\u7ECD"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8868\u5355\u662F\u524D\u7AEF\u4E2D\u540E\u53F0\u9886\u57DF\u5E38\u89C1\u573A\u666F\u4E4B\u4E00\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Drip Form")," \u662F\u9488\u5BF9",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"react"),"\u7684\u8868\u5355JSON\u5316\u914D\u7F6E\u65B9\u6848\uFF0C\u7531",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"\u4EAC\u4E1C\u96F6\u552Eipass\u524D\u7AEF\u56E2\u961F"),"\u57FA\u4E8E\u81EA\u8EAB\u8868\u5355\u573A\u666F\u7684\u4E1A\u52A1\u6C89\u6DC0\u3002\u5F00\u53D1\u8005\u53EF\u901A\u8FC7",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Drip Form"),"\u9AD8\u6548\u5F00\u53D1\u53EF\u590D\u7528\u7684\u8868\u5355\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"DripForm"),"\u4E0D\u4F9D\u8D56\u5177\u4F53\u7684UI\u5E93\uFF0C\u53EF\u4EE5\u4EFB\u610F\u9009\u62E9\u559C\u7231\u7684React UI\u5E93\u5E76\u6269\u5C55\u5BF9\u5E94\u7684\u7EC4\u4EF6\u96C6\uFF0C\n\u9664\u6B64\u4E4B\u5916\uFF0C",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"DripForm"),"\u5177\u5907\u4EE5\u4E0B\u7279\u70B9\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"\u8BED\u4E49\u5316"),"\uFF1A\u7B80\u6D01\u9AD8\u6548\u7684JSON\u534F\u8BAE\u6709\u52A9\u4E8E\u5F00\u53D1\u8005\u7406\u89E3\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"\u6821\u9A8C\u4E00\u4F53\u5316"),"\uFF1A\u4F9D\u6258\u4E8E",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"avj"),"\u7684\u6807\u51C6\u5316\u6821\u9A8C\u80FD\u529B\uFF0C\u53EF\u5B9E\u73B0\u524D\u540E\u7AEF\u6821\u9A8C\u4E00\u4F53\u5316\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"\u53EF\u89C6\u5316"),"\uFF1A\u53EF\u89C6\u5316\u642D\u5EFA\u8868\u5355\u53CA\u4FEE\u6539\u8868\u5355",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"Schema"),"\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"\u53EF\u6269\u5C55"),"\uFF1A\u652F\u6301\u4E8C\u6B21\u5F00\u53D1\uFF0C\u53EF\u6269\u5C55\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u96C6\u3001\u6821\u9A8C\u96C6\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"\u81EA\u52A8\u5316"),"\uFF1A\u53EF\u6839\u636E\u8868\u5355\u6570\u636E\u81EA\u52A8\u751F\u6210\u521D\u59CB\u5316\u8868\u5355\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("details",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("summary",null,"\u4E3A\u4EC0\u4E48\u53EBDrip Form"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"blockquote"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"Drip"),"\uFF1Awater drop \u6C34\u6EF4\uFF0C\u662F\u5218\u6148\u6B23\u300A\u4E09\u4F53II\xB7\u9ED1\u6697\u68EE\u6797\u300B\u4E2D\u63D0\u5230\u7684\u7531\u4E09\u4F53\u6587\u660E\u4F7F\u7528\u5F3A\u4E92\u4F5C\u7528\u529B\uFF08SIM\uFF09\u6750\u6599\u6240\u5236\u6210\u7684\u5B87\u5B99\u63A2\u6D4B\u5668\uFF0C\u56E0\u4E3A\u5176\u5916\u5F62\u4E0E\u6C34\u6EF4\u76F8\u4F3C\uFF0C\u6240\u4EE5\u88AB\u4EBA\u7C7B\u79F0\u4E4B\u4E3A\u6C34\u6EF4\u3002",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("sup",{parentName:"p","id":"fnref-1"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"sup","href":"#fn-1","className":"footnote-ref"},"1")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u540C\u65F6",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Drip"),"\u4E5F\u662Fipaas\u524D\u7AEF\u56E2\u961F",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"procode"),"\u3001",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"lowcode"),"\u9879\u76EE\u7684\u4EE3\u53F7\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"理念"},"\u7406\u5FF5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Drip Form")," \u662F\u4EE5",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"\u6570\u636E\u9A71\u52A8"),"\u7684\u8868\u5355\u65B9\u6848\u3002\u4E0D\u540C\u4E8E\u5E38\u89C1\u8868\u5355\u5F00\u53D1\u573A\u666F\uFF08\u5148\u5F00\u53D1ui\u5C42\uFF0C\u540E\u5F00\u53D1\u6570\u636E\u5C42\uFF09\u3002",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Drip Form"),"\u9700\u8981\u5148\u786E\u5B9A\u8868\u5355\u7684\u6570\u636E\u7C7B\u578B\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4EE5\u6570\u636E\u4E3A\u6838\u5FC3\u7684\u9A71\u52A8\u6709\u51E0\u70B9\u597D\u5904\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"\u6821\u9A8C\u914D\u7F6E\u5316"),"\uFF1A\u4EE5JSONSchema",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("sup",{parentName:"li","id":"fnref-2"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"sup","href":"#fn-2","className":"footnote-ref"},"2")),"\u89C4\u8303\u4E3A\u6838\u5FC3\u7684unitedSchema\u534F\u8BAE\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"\u540E\u7AEF\u6570\u636E\u534F\u8BAE\u540C\u6B65"),"\uFF1A\u4FDD\u8BC1\u524D\u540E\u7AEF\u6570\u636E\u683C\u5F0F\u7EDF\u4E00\uFF0C\u907F\u514D\u4E8C\u6B21\u8F6C\u6362"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"\u524D\u540E\u7AEF\u6821\u9A8C\u4E00\u4F53\u5316"),"\uFF1A\u4F9D\u8D56JSON Schema\u3001ajv \u63D2\u4EF6\u7684\u80FD\u529B\uFF0C\u4FDD\u8BC1\u524D\u540E\u7AEF\u6821\u9A8C\u7684\u7EDF\u4E00\u3002\u524D\u540E\u7AEF\u4F7F\u7528\u76F8\u540C\u7684\u6821\u9A8C\u80FD\u529B\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"\u4E1A\u52A1\u4E13\u6CE8"),"\uFF1A\u5F00\u53D1\u8005\u65E0\u9700\u5173\u6CE8\u8868\u5355\u6821\u9A8C\u3001\u8054\u52A8\u3001\u72B6\u6001\u7BA1\u7406\u5C42\uFF0C\u4EE5\u4E0A\u5747\u7531",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"Drip Form"),"\u5B9E\u73B0\u3002\u5F00\u53D1\u8005\u4E13\u6CE8\u4E1A\u52A1\u7EC4\u4EF6\u7684\u5B9E\u73B0")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Drip Form\u89E3\u51B3\u7684\u662F\u4EE5\u4E0B\u95EE\u9898\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"\u5F00\u53D1\u6210\u672C"),"\uFF1A\u8868\u5355\u9700\u8981\u91CD\u590D\u5F00\u53D1\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"\u8054\u52A8\u5F00\u53D1"),"\uFF1A\u8868\u5355\u914D\u7F6E\u9879\u4E0D\u591F\u7075\u6D3B\u5316\uFF0C\u5C55\u793A\u9690\u85CF\u903B\u8F91\uFF0C\u591A\u8868\u5355\u63A7\u5236\u903B\u8F91\u5747\u7531\u5F00\u53D1\u624B\u5199\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"\u65E0\u6CD5\u62D3\u5C55"),"\uFF1A\u5F53\u4F7F\u7528\u7684\u6837\u5F0F\u4E3B\u9898\u5E93\u65E0\u6CD5\u6EE1\u8DB3\u4E1A\u52A1\u9700\u6C42\uFF0C\u800C\u4F7F\u7528\u7684\u8868\u5355\u642D\u5EFA\u5DE5\u5177\u4E5F\u65E0\u6CD5\u63D2\u5165\u81EA\u5B9A\u4E49\u4E3B\u9898\u65F6\uFF0C\u5F80\u5F80\u53EA\u80FD\u9700\u6C42\u964D\u7EA7\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"\u8868\u5355\u6821\u9A8C"),"\uFF1A\u524D\u540E\u7AEF\u9700\u8981\u5B9E\u73B0\u5E38\u89C1\u7684\u4E1A\u52A1\u6821\u9A8C\u573A\u666F\uFF0C\u800C\u8FD9\u4E9B\u5E38\u89C1\u7684\u4E1A\u52A1\u573A\u666F\u4F1A\u6D6A\u8D39\u5927\u91CF\u5F00\u53D1\u65F6\u95F4\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"\u72B6\u6001\u7BA1\u7406"),"\uFF1A\u8868\u5355\u4E2D\u6570\u636E\u7684\u6D41\u8F6C\u548C\u6570\u636E\u8F6C\u6362\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"\u6027\u80FD\u95EE\u9898"),"\uFF1A\u5BF9\u4E8E\u6D4F\u89C8\u5668\u800C\u8A00\uFF0C\u6539\u52A8\u4E00\u4E2A\u8868\u5355\u9879\u7684\u6570\u503C\uFF0C\u53EF\u80FD\u4F1A\u89E6\u53D1\u6574\u4E2A\u8868\u5355\u7684\u91CD\u65B0\u6E32\u67D3\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div",{"className":"footnotes"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr",{parentName:"div"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",{parentName:"div"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol","id":"fn-1"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://baike.baidu.com/item/%E6%B0%B4%E6%BB%B4/9086002"},"\u6C34\u6EF4"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"#fnref-1","className":"footnote-backref"},"\u21A9")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol","id":"fn-2"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://json-schema.org/"},"JSON Schema"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"#fnref-2","className":"footnote-backref"},"\u21A9")))));};MDXContent.isMDXComponent=true;

/***/ })

}]);