"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[7094],{

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

/***/ 7825:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },
/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },
/* harmony export */   "metadata": function() { return /* binding */ metadata; },
/* harmony export */   "toc": function() { return /* binding */ toc; },
/* harmony export */   "default": function() { return /* binding */ MDXContent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7462);
/* harmony import */ var _home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
var _excluded=["components"];var frontMatter={id:'formData',title:'formData 表单初始数据'};var contentTitle=undefined;var metadata={"unversionedId":"use/formData","id":"use/formData","isDocsHomePage":false,"title":"formData 表单初始数据","description":"表单数据可以通过 drip-form formData prop 传递初始值，其结构取决于unitedSchema的结构，整体是个对象结构，key值为每个表单项的fieldKey，当遇到对象容器或者数组容器时，需要调整为相应的结构。举个例子：","source":"@site/docs/use/formData 表单初始数据.md","sourceDirName":"use","slug":"/use/formData","permalink":"/drip-form/docs/use/formData","editUrl":"https://github.com/JDFED/drip-form/edit/master/website/docs/use/formData 表单初始数据.md","tags":[],"version":"current","frontMatter":{"id":"formData","title":"formData 表单初始数据"},"sidebar":"docs","previous":{"title":"customFunc 函数占位符","permalink":"/drip-form/docs/use/customFunc"},"next":{"title":"parse 渲染前解析","permalink":"/drip-form/docs/use/parse"}};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8868\u5355\u6570\u636E\u53EF\u4EE5\u901A\u8FC7 drip-form ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"formData")," prop \u4F20\u9012\u521D\u59CB\u503C\uFF0C\u5176\u7ED3\u6784\u53D6\u51B3\u4E8E",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"unitedSchema"),"\u7684\u7ED3\u6784\uFF0C\u6574\u4F53\u662F\u4E2A\u5BF9\u8C61\u7ED3\u6784\uFF0Ckey\u503C\u4E3A\u6BCF\u4E2A\u8868\u5355\u9879\u7684",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"fieldKey"),"\uFF0C\u5F53\u9047\u5230\u5BF9\u8C61\u5BB9\u5668\u6216\u8005\u6570\u7EC4\u5BB9\u5668\u65F6\uFF0C\u9700\u8981\u8C03\u6574\u4E3A\u76F8\u5E94\u7684\u7ED3\u6784\u3002\u4E3E\u4E2A\u4F8B\u5B50\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-json","metastring":"title=\"unitedSchema.json\"","title":"\"unitedSchema.json\""},"{\n  \"validateTime\": \"change\",\n  \"type\": \"object\",\n  \"ui\": {},\n  \"theme\": \"drip-theme\",\n  \"schema\": [\n    {\n      \"validateTime\": \"submit\",\n      \"type\": \"string\",\n      \"title\": \"\u8F93\u5165\u6846\",\n      \"ui\": {\n        \"type\": \"text\"\n      },\n      \"fieldKey\": \"text_-mJJFo\"\n    },\n    {\n      \"validateTime\": \"submit\",\n      \"type\": \"string\",\n      \"title\": \"\u989C\u8272\u9009\u62E9\u6846\",\n      \"ui\": {\n        \"type\": \"colorPicker\"\n      },\n      \"fieldKey\": \"colorPicker_oHFL5K\"\n    },\n    {\n      \"validateTime\": \"submit\",\n      \"type\": \"array\",\n      \"title\": \"\u6570\u7EC4\u5BB9\u5668\",\n      \"ui\": {\n        \"mode\": \"add\",\n        \"type\": \"array\"\n      },\n      \"items\": {\n        \"type\": \"object\",\n        \"title\": \"\",\n        \"ui\": {\n          \"type\": \"object\"\n        },\n        \"schema\": [\n          {\n            \"validateTime\": \"submit\",\n            \"type\": \"boolean\",\n            \"title\": \"\u5F00\u5173\",\n            \"ui\": {\n              \"type\": \"switch\"\n            },\n            \"fieldKey\": \"switch_mDJ7Lz\"\n          },\n          {\n            \"validateTime\": \"submit\",\n            \"type\": \"string\",\n            \"title\": \"\u5355\u9009\",\n            \"ui\": {\n              \"type\": \"radio\",\n              \"options\": [\n                {\n                  \"label\": \"\u662F\",\n                  \"value\": 1\n                },\n                {\n                  \"label\": \"\u5426\",\n                  \"value\": 0\n                }\n              ]\n            },\n            \"fieldKey\": \"0\"\n          }\n        ]\n      },\n      \"fieldKey\": \"array_4LrpU6\"\n    },\n    {\n      \"validateTime\": \"submit\",\n      \"type\": \"object\",\n      \"title\": \"\u5BF9\u8C61\u5BB9\u5668\",\n      \"ui\": {\n        \"type\": \"object\"\n      },\n      \"schema\": [\n        {\n          \"validateTime\": \"submit\",\n          \"type\": \"string\",\n          \"title\": \"\u6587\u672C\",\n          \"ui\": {\n            \"type\": \"null\",\n            \"text\": \"\u8FD9\u662F\u4E00\u4E2A\u4E0D\u4F1A\u7ED1\u5B9A\u6570\u636E\u7684\u7A7A\u8868\u5355\u3002\u53EA\u7528\u4F5C\u7279\u6B8A\u573A\u666F\u4E0B\u5C55\u793A\u6587\u5B57\u4F7F\u7528\"\n          },\n          \"fieldKey\": \"null_VsLlWt\"\n        }\n      ],\n      \"fieldKey\": \"object_lcALiU\"\n    }\n  ]\n}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5219\u4E0A\u8FF0",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"unitedSchema"),"\u7684",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"formData"),"\u7ED3\u6784\u5E94\u8BE5\u5982\u4E0B\u6240\u793A\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-js","metastring":"title=\"formData\"","title":"\"formData\""},"{\n  \"text_-mJJFo\": \"\u8F93\u5165\u6846\u5185\u5BB9\",\n  \"colorPicker_oHFL5K\": \"#08ce96\",\n  \"array_4LrpU6\": [\n    {\n      \"switch_mDJ7Lz\": true,\n      \"0\": 1,\n    }\n  ],\n  \"object_lcALiU\": {\n    \"null_VsLlWt\": \"\u8FD9\u662F\u4E00\u4E2A\u6587\u672C\"\n  }\n}\n")));};MDXContent.isMDXComponent=true;

/***/ })

}]);