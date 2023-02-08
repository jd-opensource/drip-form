"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[7270],{

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

/***/ 47629:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'customFunc',title:'customFunc 函数占位符'};var contentTitle=undefined;var metadata={"unversionedId":"use/customFunc","id":"use/customFunc","title":"customFunc 函数占位符","description":"unitedSchema 中为我们提供了 vcontrol 和 onChange 两个字段，分别用于控制表单内的显隐联动，以及修改表单需要的额外操作。我们可以通过直接书写函数体，并以 string 类型配置在 UISchema 中，来实现我们想要的变化。","source":"@site/docs/use/customFunc 函数占位符.md","sourceDirName":"use","slug":"/use/customFunc","permalink":"/drip-form/docs/use/customFunc","draft":false,"editUrl":"https://github.com/JDFED/drip-form/edit/master/website/docs/use/customFunc 函数占位符.md","tags":[],"version":"current","frontMatter":{"id":"customFunc","title":"customFunc 函数占位符"}};var assets={};var toc=[];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"unitedSchema")," \u4E2D\u4E3A\u6211\u4EEC\u63D0\u4F9B\u4E86 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"vcontrol")," \u548C ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"onChange")," \u4E24\u4E2A\u5B57\u6BB5\uFF0C\u5206\u522B\u7528\u4E8E\u63A7\u5236\u8868\u5355\u5185\u7684\u663E\u9690\u8054\u52A8\uFF0C\u4EE5\u53CA\u4FEE\u6539\u8868\u5355\u9700\u8981\u7684\u989D\u5916\u64CD\u4F5C\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u76F4\u63A5\u4E66\u5199\u51FD\u6570\u4F53\uFF0C\u5E76\u4EE5 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"p"},"string")," \u7C7B\u578B\u914D\u7F6E\u5728 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"UISchema")," \u4E2D\uFF0C\u6765\u5B9E\u73B0\u6211\u4EEC\u60F3\u8981\u7684\u53D8\u5316\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4F46\u5F53\u6211\u4EEC\u7684\u914D\u7F6E\u9879\u590D\u6742\u5230\u4E00\u5B9A\u7A0B\u5EA6\u65F6\uFF0C\u8FD9\u4E9B\u63A7\u5236\u7684\u51FD\u6570\u4F53\u4E5F\u4F1A\u53D8\u5F97\u590D\u6742\uFF0C\u5728\u91CC\u9762\u4E66\u5199\u51FD\u6570\u4F53\u663E\u7136\u4E0D\u662F\u660E\u667A\u7684\u9009\u62E9\uFF0C\u751A\u81F3\u4F1A\u9020\u6210 JSON \u89E3\u6790\u80FD\u529B\u7684\u4E0B\u964D\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"\u51FD\u6570\u5360\u4F4D\u7B26"),"\u6765\u89E3\u51B3\u8FD9\u4E00\u95EE\u9898\uFF0C\u7528 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"$$")," \u5BF9\u8BE5\u9879\u8FDB\u884C\u7279\u6B8A\u6807\u8BC6\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"JSON \u914D\u7F6E")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-json","metastring":"title=\"unitedSchema.json\" {7,11}","title":"\"unitedSchema.json\"","{7,11}":true},"{\n    \"validateTime\": \"submit\",\n    \"type\": \"object\",\n    \"theme\": \"drip-theme\",\n    \"schema\": [\n        {\n            \"title\": \"\u5F00\u5173\",\n            \"type\": \"string\",\n            \"ui\": {\n                \"type\": \"switch\",\n                \"onChange\": \"$$switchChange\"\n            },\n            \"fieldKey\": \"switchItem\"\n        },\n        {\n            \"type\": \"string\",\n            \"title\": \"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\",\n            \"ui\": {\n                \"type\": \"text\",\n                \"vcontrol\": \"$$textVcontrol\"\n            },\n            \"fieldKey\": \"text1\"\n        }\n    ]\n}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u53EF\u4EE5\u770B\u5230\u9488\u5BF9 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"switchItem")," \u548C ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"textItem")," \u8868\u5355\u9879\uFF0C\u6211\u4EEC\u5206\u522B\u4E3A\u5176\u914D\u7F6E\u4E86 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"$$switchChange")," \u548C ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"$$textVcontrol")," \u4E24\u4E2A\u5360\u4F4D\u7B26\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u751F\u6210\u5668\u5C06\u4E66\u5199\u5728\u5916\u90E8\u7684\u51FD\u6570\u8FDB\u884C\u5BFC\u5165\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"\u4F7F\u7528 drip-form \u7684\u7EC4\u4EF6")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-javascript","metastring":"title=\"Form.jsx\" {4,10}","title":"\"Form.jsx\"","{4,10}":true},"// \u5B9A\u4E49\u51FD\u6570\u5360\u4F4D\u7B26\u4E2D\u9700\u8981\u7684\u51FD\u6570\nconst customFuncMap = useMemo(() => {\n    return {\n        '$$switchChange': (val, dispatch, fieldKey) => {\n            dispatch({\n                type: 'setData',\n                                action:{\n                                    set:{\n                                        [fieldKey]: val\n                                    }\n                                }\n            })\n        },\n        '$$textVcontrol': (formData, uiSchema, dataSchema) => {\n            return !formData.switchItem\n        }\n    }\n})\n\nreturn <DripForm\n    ...\n    // \u4F20\u5165\u81EA\u5B9A\u4E49\u51FD\u6570\n    customFunc={customFuncMap}\n>\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u8FD9\u6837\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728\u5916\u90E8\u66F4\u8F7B\u677E\u5730\u5BF9\u8868\u5355\u7684\u53D8\u66F4\u8FDB\u884C\u52A8\u6001\u63A7\u5236\u3002"))));};MDXContent.isMDXComponent=true;

/***/ })

}]);