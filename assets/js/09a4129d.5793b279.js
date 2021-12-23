"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[1651],{

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

/***/ 74871:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },
/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },
/* harmony export */   "metadata": function() { return /* binding */ metadata; },
/* harmony export */   "toc": function() { return /* binding */ toc; },
/* harmony export */   "default": function() { return /* binding */ MDXContent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_drip_form_drip_form_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25773);
/* harmony import */ var _home_runner_work_drip_form_drip_form_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30808);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27378);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35318);
var _excluded=["components"];var frontMatter={id:'background',title:'背景',slug:'/'};var contentTitle=undefined;var metadata={"unversionedId":"background/background","id":"background/background","title":"背景","description":"现状","source":"@site/docs/background/背景.md","sourceDirName":"background","slug":"/","permalink":"/drip-form/docs/","editUrl":"https://github.com/JDFED/drip-form/edit/master/website/docs/background/背景.md","tags":[],"version":"current","frontMatter":{"id":"background","title":"背景","slug":"/"},"sidebar":"docs","next":{"title":"安装","permalink":"/drip-form/docs/start/install"}};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'现状',id:'现状',children:[],level:2},{value:'简介',id:'简介',children:[],level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_drip_form_drip_form_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_drip_form_drip_form_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"现状"},"\u73B0\u72B6"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u968F\u7740\u524D\u7AEF\u7684\u53D1\u5C55\uFF0C\u8D8A\u6765\u8D8A\u591A\u590D\u6742\u3001\u52A8\u6001\uFF0C\u5BCC\u8054\u52A8\u53CA\u6821\u9A8C\u7684\u8868\u5355\u9700\u8981\u8FDB\u884C\u5F00\u53D1\uFF0C\u95EE\u9898\u5982\u4E0B\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"\u6D41\u7A0B\u7E41\u7410"),"\uFF1A\u76EE\u524D\u8868\u5355\u914D\u7F6E\u591A\u7531 config.js \u5B58\u50A8\uFF0C\u6BCF\u6B21\u6539\u52A8\u90FD\u9700\u5F00\u53D1-\u8D70\u67E5-\u6D4B\u8BD5-\u4E0A\u7EBF\uFF0C\u6D41\u7A0B\u6162\u4E14\u957F\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"\u7F3A\u4E4F\u8054\u52A8"),"\uFF1A\u8868\u5355\u914D\u7F6E\u9879\u4E0D\u591F\u7075\u6D3B\u5316\uFF0C\u5C55\u793A\u9690\u85CF\u903B\u8F91\uFF0C\u591A\u8868\u5355\u63A7\u5236\u903B\u8F91\u5747\u7531\u5F00\u53D1\u624B\u5199\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"\u7EF4\u62A4\u8270\u96BE"),"\uFF1A\u8868\u5355\u4E00\u65E6\u6570\u636E\u91CF\u8FC7\u591A\uFF0C\u5BF9\u4E8E\u7814\u53D1\u548C\u4EA7\u54C1\u7684\u8FED\u4EE3\u4E0E\u7EF4\u62A4\u90FD\u662F\u5341\u8DB3\u7684\u8003\u9A8C\uFF0C\u4E00\u5904\u6539\u52A8\u5904\u5904\u53D7\u5236\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"\u6027\u80FD\u95EE\u9898"),"\uFF1A\u5BF9\u4E8E\u6D4F\u89C8\u5668\u800C\u8A00\uFF0C\u6539\u52A8\u4E00\u4E2A\u8868\u5355\u9879\u7684\u6570\u503C\uFF0C\u53EF\u80FD\u4F1A\u89E6\u53D1\u6574\u4E2A\u8868\u5355\u7684\u91CD\u65B0\u6E32\u67D3\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"\u65E0\u6CD5\u62D3\u5C55"),"\uFF1A\u5F53\u4F7F\u7528\u7684\u6837\u5F0F\u4E3B\u9898\u5E93\u65E0\u6CD5\u6EE1\u8DB3\u4E1A\u52A1\u9700\u6C42\uFF0C\u800C\u4F7F\u7528\u7684\u8868\u5355\u642D\u5EFA\u5DE5\u5177\u4E5F\u65E0\u6CD5\u63D2\u5165\u81EA\u5B9A\u4E49\u4E3B\u9898\u65F6\uFF0C\u5F80\u5F80\u53EA\u80FD\u9700\u6C42\u964D\u7EA7\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"简介"},"\u7B80\u4ECB"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"iPaaS\u524D\u7AEF\u56E2\u961F\u57FA\u4E8E\u81EA\u8EAB\u7684\u4E1A\u52A1\u6C89\u6DC0\uFF0C\u7814\u53D1\u4E86",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"DripForm"),"\u8FD9\u4E00\u57FA\u4E8E",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"React"),"\u7684",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"JSON"),"\u914D\u7F6E\u5316\u8868\u5355\u5F15\u64CE\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u901A\u8FC7\u8FD9\u5957\u65B9\u6848\u9AD8\u6548\u5F00\u53D1\u590D\u6742\u8868\u5355\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"DripForm"),"\u4E0D\u4F9D\u8D56\u5177\u4F53\u7684UI\u5E93\uFF0C\u53EF\u4EE5\u4EFB\u610F\u9009\u62E9\u559C\u7231\u7684React UI\u5E93\u5E76\u6269\u5C55\u5BF9\u5E94\u7684\u7EC4\u4EF6\u96C6\uFF0C\u5728\u4E0D\u4E45\u4E4B\u540E\uFF0C",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"Drip"),"\u4F53\u7CFB\u4E0B\u7684UI\u5E93",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"DripDesign"),"\u3001\u8868\u683C",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"DripTable"),"\u4F1A\u4E00\u4E00\u5F00\u6E90\uFF0C\u7EC4\u5408\u4F7F\u7528\u66F4\u52A0\u65B9\u4FBF\u3002\n\u9664\u6B64\u4E4B\u5916\uFF0C",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"DripForm"),"\u5177\u5907\u4EE5\u4E0B\u7279\u70B9\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"\u8BED\u4E49\u5316"),"\uFF1A\u7B80\u6D01\u9AD8\u6548\u7684JSON\u534F\u8BAE\u6709\u52A9\u4E8E\u5F00\u53D1\u8005\u7406\u89E3\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"\u6821\u9A8C\u4E00\u4F53\u5316"),"\uFF1A\u4F9D\u6258\u4E8E",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"avj"),"\u7684\u6807\u51C6\u5316\u6821\u9A8C\u80FD\u529B\uFF0C\u53EF\u5B9E\u73B0\u524D\u540E\u7AEF\u6821\u9A8C\u4E00\u4F53\u5316\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"\u53EF\u89C6\u5316"),"\uFF1A\u53EF\u89C6\u5316\u642D\u5EFA\u8868\u5355\u53CA\u4FEE\u6539\u8868\u5355",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"Schema"),"\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"\u53EF\u6269\u5C55"),"\uFF1A\u652F\u6301\u4E8C\u6B21\u5F00\u53D1\uFF0C\u53EF\u6269\u5C55\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u96C6\u3001\u6821\u9A8C\u96C6\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"\u81EA\u52A8\u5316"),"\uFF1A\u53EF\u6839\u636E\u8868\u5355\u6570\u636E\u81EA\u52A8\u751F\u6210\u521D\u59CB\u5316\u8868\u5355\u3002")));};MDXContent.isMDXComponent=true;

/***/ })

}]);