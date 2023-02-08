"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[5840],{

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

/***/ 74271:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'customTheme',title:'自定义主题',description:'如何开发自定义主题？'};var contentTitle=undefined;var metadata={"unversionedId":"form/advanced/customTheme","id":"form/advanced/customTheme","title":"自定义主题","description":"如何开发自定义主题？","source":"@site/docs/form/advanced/自定义主题.md","sourceDirName":"form/advanced","slug":"/form/advanced/customTheme","permalink":"/drip-form/docs/form/advanced/customTheme","draft":false,"editUrl":"https://github.com/JDFED/drip-form/edit/master/website/docs/form/advanced/自定义主题.md","tags":[],"version":"current","frontMatter":{"id":"customTheme","title":"自定义主题","description":"如何开发自定义主题？"},"sidebar":"docs","previous":{"title":"进阶指南","permalink":"/drip-form/docs/form/advanced"},"next":{"title":"自定义校验关键字","permalink":"/drip-form/docs/form/advanced/customKeyword"}};var assets={};var toc=[{value:'开发前须知',id:'开发前须知',level:2},{value:'开发',id:'开发',level:2},{value:'开发自定义主题对象',id:'开发自定义主题对象',level:3},{value:'开发自定义主题包',id:'开发自定义主题包',level:3},{value:'注意事项',id:'注意事项',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"title":"我们将从下面几个方面分开介绍，从而最终学会以下能力","type":"info"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"admonition"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5F00\u53D1\u7684\u81EA\u5B9A\u4E49\u4E3B\u9898\u5BF9\u8C61\uFF1B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5FEB\u901F\u4ECE\u96F6\u5F00\u53D1\u4E00\u4E2A\u81EA\u5B9A\u4E49\u4E3B\u9898\u5305\uFF1B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5982\u4F55\u8C03\u8BD5\u81EA\u5B9A\u4E49\u4E3B\u9898\u5305\uFF1B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u81EA\u5B9A\u4E49\u4E3B\u9898\u5982\u4F55\u9002\u914D\u8868\u5355\u8BBE\u8BA1\u5668\uFF1B"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"开发前须知"},"\u5F00\u53D1\u524D\u987B\u77E5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5F00\u53D1\u81EA\u5B9A\u4E49\u4E3B\u9898\u524D\uFF0C\u9700\u8981\u4E86\u89E3\u4EE5\u4E0B\u6982\u5FF5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../use/customComponent"},"\u81EA\u5B9A\u4E49\u7EC4\u4EF6")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../use/theme"},"\u4E3B\u9898"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"开发"},"\u5F00\u53D1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"开发自定义主题对象"},"\u5F00\u53D1\u81EA\u5B9A\u4E49\u4E3B\u9898\u5BF9\u8C61"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"title":"按照以下步骤开发自定义主题对象","type":"tip"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u5F00\u53D1\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{parentName:"li","title":"假设有自定义组件 numberField、textField","type":"note"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u8BBE\u7F6E\u4E3B\u9898\u540D\u5B57"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u6839\u636E\u4E1A\u52A1\u573A\u666F\u6216\u4F7F\u7528 ui \u5E93\u540D\u5B57\u8BBE\u7F6E\u4E00\u4E2A\u4E3B\u9898\u540D\u5B57\uFF1B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{parentName:"li","title":"假设自定义主题名字为 customTheme","type":"note"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx","metastring":"title=\"customTheme\"","title":"\"customTheme\""},"export default {\n    // \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u4E3B\u9898\u540D\u5B57\u4E3A customTheme\n    //highlight-next-line\n    theme: 'customTheme',\n}\n"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u5BFC\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5E76\u914D\u7F6E\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684 type \u503C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u5BFC\u5165 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"numberField")," \u548C ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"textField")," \u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u5E76\u5206\u522B\u8BBE\u7F6E\u5B83\u4EEC\u7684 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"ui.type")," \u4E3A ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"number")," \u548C ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"text")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx","metastring":"title=\"customTheme\"","title":"\"customTheme\""},"import { numberField } from './numberField'\nimport { textField } from './textField'\n\nexport default {\n    //highlight-start\n    //\u81EA\u5B9A\u4E49\u7EC4\u4EF6numberField \u7684type\u7C7B\u578B\u662Fnumber\uFF08type\u7C7B\u578B\u968F\u610F\u53D6\uFF0C\u4FDD\u8BC1\u548CunitedSchema\u4E2Dui.type\u4E00\u81F4\u5373\u53EF\uFF09\n    number: numberField,\n    //\u81EA\u5B9A\u4E49\u7EC4\u4EF6textField \u7684type\u7C7B\u578B\u662Ftext\uFF08type\u7C7B\u578B\u968F\u610F\u53D6\uFF0C\u4FDD\u8BC1\u548CunitedSchema\u4E2Dui.type\u4E00\u81F4\u5373\u53EF\uFF09\n    text: textField,\n    //highlight-end\n    theme: 'customTheme',\n}\n"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u5BFC\u5165\u4E3B\u9898\n\u5BFC\u5165\u81EA\u5B9A\u4E49\u4E3B\u9898 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"customTheme")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx","metastring":"title=\"App.tsx\"","title":"\"App.tsx\""},"import DripForm from '@jdfed/drip-form'\nimport antd from '@jdfed/drip-form-theme-antd'\nimport unitedSchema from './unitedSchema'\n//\u5F15\u5165\u81EA\u5B9A\u4E49\u4E3B\u9898\u5BF9\u8C61\n//highlight-next-line\nimport customTheme from './customTheme'\nimport '@jdfed/drip-form/dist/index.css'\nimport '@jdfed/drip-form-theme-antd/dist/index.css'\nimport 'antd/dist/antd.css'\n\nfunction App() {\n    return (\n        <DripForm\n            // \u8868\u5355\u914D\u7F6E\u6587\u4EF6\n            unitedSchema={unitedSchema}\n            // \u5BFC\u5165antd\u4E3B\u9898\u548C\u81EA\u5B9A\u4E49\u4E3B\u9898 customTheme\n            //highlight-next-line\n            uiComponents={{ antd, customTheme }}\n        ></DripForm>\n    )\n}\n\nexport default App\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u4EE3\u7801\u6C99\u76D2\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://stackblitz.com/edit/drip-form-s2pydr?file=src/unitedSchema.ts"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"a","src":"https://developer.stackblitz.com/img/open_in_stackblitz.svg","alt":"Open in StackBlitz"}))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"开发自定义主题包"},"\u5F00\u53D1\u81EA\u5B9A\u4E49\u4E3B\u9898\u5305"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"title":"文档编写中","type":"note"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"注意事项"},"\u6CE8\u610F\u4E8B\u9879"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u4E3B\u9898\u540D\u5B57\u662F\u4EFB\u610F\u53D6\u7684\uFF0C\u4E0D\u4E00\u5B9A\u662F ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"customTheme"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u5BFC\u5165\u4E3B\u9898\u65F6\uFF0C",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"uiComponents"),"\u5BF9\u8C61 key \u503C\uFF0C\u9700\u8981\u548C\u4E3B\u9898\u540D\u4E00\u81F4"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{parentName:"li","title":"下面代码高亮处名称需一致","type":"tip"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-js","metastring":"title=\"App.tsx\"","title":"\"App.tsx\""},"<DripForm\n    unitedSchema={unitedSchema}\n    uiComponents={{\n        antd,\n        //highlight-next-line\n        customTheme,\n    }}\n></DripForm>\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts","metastring":"title=\"customTheme\"","title":"\"customTheme\""}," export default {\n    number: numberField,\n    text: textField,\n    //highlight-next-line\n    theme: 'customTheme',\n}\n")))));};MDXContent.isMDXComponent=true;

/***/ })

}]);