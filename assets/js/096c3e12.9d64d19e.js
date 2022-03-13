"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[8120],{

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

/***/ 69807:
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
var _excluded=["components"];var frontMatter={id:'components',title:'components（自定义组件区）'};var contentTitle='自定义组件';var metadata={"unversionedId":"generator/props/components","id":"generator/props/components","title":"components（自定义组件区）","description":"components prop 可以配置整个组件区展示的组件。","source":"@site/docs/generator/props/components.md","sourceDirName":"generator/props","slug":"/generator/props/components","permalink":"/drip-form/docs/generator/props/components","editUrl":"https://github.com/JDFED/drip-form/edit/master/website/docs/generator/props/components.md","tags":[],"version":"current","frontMatter":{"id":"components","title":"components（自定义组件区）"},"sidebar":"generator","previous":{"title":"theme（自定义主题）","permalink":"/drip-form/docs/generator/props/theme"},"next":{"title":"options（配置）","permalink":"/drip-form/docs/generator/props/options"}};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'自定义组建区',id:'自定义组建区',children:[],level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_drip_form_drip_form_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_drip_form_drip_form_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"自定义组件"},"\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"components")," prop \u53EF\u4EE5\u914D\u7F6E\u6574\u4E2A\u7EC4\u4EF6\u533A\u5C55\u793A\u7684\u7EC4\u4EF6\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u901A\u8FC7\u914D\u7F6E components \u53EF\u4EE5\u652F\u6301\u4EE5\u4E0B\u529F\u80FD"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7EC4\u4EF6\u533A\u914D\u7F6E",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7EC4\u4EF6\u5206\u7C7B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7EC4\u4EF6\u6392\u5E8F"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7F16\u8F91\u533A\u914D\u7F6E",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5C5E\u6027\u914D\u7F6E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6821\u9A8C\u914D\u7F6E")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-typescript"},"type ComponentsData = {\n    // \u5DE6\u4FA7\u5206\u7C7B\u987A\u5E8F\uFF08\u53EA\u6709order\u4E2D\u7684\u5206\u7C7B\u624D\u5C55\u793A\uFF09\n    order: Array<string>\n    // \u6BCF\u4E2A\u5206\u7C7B\u4E2D\u8868\u5355\u914D\u7F6E\n    category: Record<\n        string,\n        {\n            // \u5206\u7C7B\u6807\u9898\n            title: string\n            // \u5206\u7C7B\u4E2D\u7EC4\u4EF6\u7684\u987A\u5E8F\n            order: Array<string>\n            // \u7EC4\u4EF6\u914D\u7F6E\n            fields: Record<string, Field>\n        }\n    >\n}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-typescript"},"type Field = {\n    // \u7EC4\u4EF6\u533A\u7EC4\u4EF6\u7684\u5BBD\u9AD8\u7B49\u6837\u5F0F\u8BBE\u7F6E\n    customBarStyle?: CSSProperties\n    // \u5DE6\u4FA7\u5217\u8868\u5BF9\u5E94\u7684icon\n    icon: string\n    // \u8868\u5355\u5BF9\u5E94\u7684title\uFF08\u4E0D\u586B\uFF0C\u9ED8\u8BA4\u4F7F\u7528unitedSchema.title\uFF09\n    title?: string\n    // \u6E32\u67D3\u6240\u9700\u7684\u57FA\u7840\u5C5E\u6027\uFF0C\u7528\u4E8E\u62D6\u62FD\u5230\u4E2D\u95F4\u533A\u57DF\u7684\u6E32\u67D3\n    unitedSchema: UnitedSchemaAtom\n    propertyConfig?: PropertyConfig\n    checkConfig?: CheckConfig\n}\ntype UnitedSchemaAtom = {\n    type: string | string[]\n    title: string\n    ui: {\n        type: string\n    } & Map\n} & Map\n\n// \u5C5E\u6027\u914D\u7F6E\ntype PropertyConfig = {\n    // \u6837\u5F0F\u914D\u7F6E\u81EA\u5B9A\u4E49(\u82E5\u5B9A\u4E49\u4E86schema\uFF0C\u5F53\u524D\u8BBE\u7F6E\u65E0\u6548)\n    styleSchema?: UnitedSchema['schema']\n    // \u6574\u4E2A\u5C5E\u6027\u914D\u7F6E\u9762\u677F\u81EA\u5B9A\u4E49\n    schema?: UnitedSchema['schema']\n}\n\n// \u6821\u9A8C\u914D\u7F6E\ntype CheckConfig = {\n    // \u901A\u7528\u6821\u9A8C\u5173\u952E\u5B57\n    common?: Array<string>\n    // \u4E1A\u52A1\u6821\u9A8C\u5173\u952E\u5B57\n    business?: Array<string>\n}\ntype Map = {\n    [key: string]: any\n}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"自定义组建区"},"\u81EA\u5B9A\u4E49\u7EC4\u5EFA\u533A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-typescript"},"import React, { memo } from 'react'\nimport DripFormGenerator, { containerConfig } from '@jdfed/form-generator'\nimport { config as antdConfig } from '@jdfed/drip-form-theme-antd'\nimport '@jdfed/form-generator/dist/index.css'\n\nconst App = memo(() => {\n    return (\n        <DripFormGenerator\n            components={{\n                order: ['container', 'antd'],\n                category: {\n                    container: containerConfig,\n                    antd: antdConfig,\n                },\n            }}\n        />\n    )\n})\n\nApp.displayName = 'GeneratorApp'\n\nexport default App\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"containerConfig")," \u4E3A\u5185\u90E8\u5BB9\u5668\u7EC4\u4EF6\u7684\u914D\u7F6E\u3002\n",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"antdConfig")," \u4E3A antd \u4E3B\u9898\u7684\u914D\u7F6E"));};MDXContent.isMDXComponent=true;

/***/ })

}]);