"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[9786],{

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

/***/ 46999:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'customValidate',title:'自定义校验',description:'自定义错误、自定义校验关键字'};var contentTitle=undefined;var metadata={"unversionedId":"form/use/validate/customValidate","id":"form/use/validate/customValidate","title":"自定义校验","description":"自定义错误、自定义校验关键字","source":"@site/docs/form/use/validate/自定义校验.md","sourceDirName":"form/use/validate","slug":"/form/use/validate/customValidate","permalink":"/drip-form/docs/form/use/validate/customValidate","draft":false,"editUrl":"https://github.com/JDFED/drip-form/edit/master/website/docs/form/use/validate/自定义校验.md","tags":[],"version":"current","frontMatter":{"id":"customValidate","title":"自定义校验","description":"自定义错误、自定义校验关键字"},"sidebar":"docs","previous":{"title":"异步校验","permalink":"/drip-form/docs/form/use/validate/asyncValidate"},"next":{"title":"联动配置","permalink":"/drip-form/docs/form/use/control"}};var assets={};var toc=[{value:'自定义组件中 <code>dispatch</code> 设置自定义错误',id:'自定义组件中-dispatch-设置自定义错误',level:2},{value:'onValidate prop配置自定义校验',id:'onvalidate-prop配置自定义校验',level:2},{value:'自定义关键字+自定义校验插件(进阶)',id:'自定义关键字自定义校验插件进阶',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5F53\u5B58\u5728\u7279\u6B8A\u6821\u9A8C\uFF0C\u5E38\u89C4JSON Schema\u63D0\u4F9B\u7684\u5173\u952E\u5B57\u65E0\u6CD5\u6EE1\u8DB3\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u81EA\u5B9A\u4E49\u6821\u9A8C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"title":"须知","type":"note"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},"\u5728\u4E86\u89E3\u5982\u4F55\u81EA\u5B9A\u4E49\u6821\u9A8C\u524D\uFF0C\u9700\u8981\u4E86\u89E3\u4E0BDrip Form\u5185\u90E8\u7684\u9519\u8BEF\u7C7B\u578B\u5206\u7C7B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},"\u8BE6\u7EC6\u67E5\u770B",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../../advanced/otherInternal/errType"},"\u9519\u8BEF\u5206\u7C7B"),"\u7AE0\u8282")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u81EA\u5B9A\u4E49\u6821\u9A8C\u6709\u4EE5\u4E0B3\u79CD\u65B9\u6848"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"dispatch")," \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u9519\u8BEF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"onValidate prop\u914D\u7F6E\u81EA\u5B9A\u4E49\u6821\u9A8C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"\u81EA\u5B9A\u4E49\u5173\u952E\u5B57+\u81EA\u5B9A\u4E49\u6821\u9A8C\u63D2\u4EF6(\u8FDB\u9636)")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u672C\u6587\u4E3B\u8981\u4ECB\u7ECD\u7B2C1\u79CD\u65B9\u6848 "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"自定义组件中-dispatch-设置自定义错误"},"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"h2"},"dispatch")," \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u9519\u8BEF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"title":"回顾","type":"note"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},"\u5728",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../customComponent"},"\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),"\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u4E86\u89E3\u5230\u53EF\u4EE5\u901A\u8FC7 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../../API/utils/dispatch"},"diaptch")," \u65B9\u6CD5\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u9519\u8BEF\u4FE1\u606F\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("details",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("summary",null,"\u4EE3\u7801\u793A\u4F8B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx"},"/**\n * \u81EA\u5B9A\u4E49nubmer\u7EC4\u4EF6\n */\nimport { memo, useEffect } from 'react';\nimport { InputNumber } from 'antd';\nimport { useField } from '@jdfed/hooks';\nimport { CommonProps } from '../global';\n\nconst NumberField = ({\n  onChange,\n  fieldData,\n  fieldKey,\n  dispatch,\n  getKey,\n  formMode,\n  ...restProps\n}: CommonProps) => {\n  const _onChange = useField({ fieldKey, onChange, getKey }, dispatch);\n\n  useEffect(() => {\n        //highlight-start\n    if (fieldData > 2) {\n      //\u5927\u4E8E2\uFF0C\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u9519\u8BEF\n      dispatch({\n        type: 'setErr',\n        action: {\n          set: {\n            [fieldKey]: '\u6570\u5B57\u4E0D\u80FD\u5927\u4E8E2',\n          },\n        },\n      });\n    } else {\n      // \u5C0F\u4E8E2\uFF0C\u5220\u9664\u81EA\u5B9A\u4E49\u9519\u8BEF\n      dispatch({\n        type: 'setErr',\n        action: {\n          deleteKeys: fieldKey,\n        },\n      });\n    }\n        //highlight-end\n  }, [fieldData, dispatch, fieldKey]);\n\n  // view \u67E5\u770B\u6A21\u5F0F\n  if (formMode === 'view') return fieldData || null;\n  // edit \u7F16\u8F91\u6A21\u5F0F\n  return <InputNumber onChange={_onChange} value={fieldData} {...restProps} />;\n};\n\nexport const numberField = memo(NumberField);\n\n"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4EE3\u7801\u6C99\u76D2\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://stackblitz.com/edit/drip-form-xhhh2w?file=src/customTheme/numberField.tsx"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"a","src":"https://developer.stackblitz.com/img/open_in_stackblitz.svg","alt":"Open in StackBlitz"}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u67E5\u770B",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../../API/utils/dispatch#%E8%AE%BE%E7%BD%AE%E8%87%AA%E5%AE%9A%E4%B9%89%E9%94%99%E8%AF%AF"},"dispatch Api"),"\u7AE0\u8282\u4E86\u89E3\u66F4\u591A\u7528\u6CD5\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"onvalidate-prop配置自定义校验"},"onValidate prop\u914D\u7F6E\u81EA\u5B9A\u4E49\u6821\u9A8C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"title":"类似异步校验的用法，只是将异步代码换成自定义校验的代码","type":"note"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-jsx","metastring":"title=App.tsx","title":"App.tsx"},"//highlight-start\nconst onValidate = {\n    key: {\n        type: 'change',\n        fn: (val) => {\n            //\u81EA\u5B9A\u4E49\u6821\u9A8C\u7684\u4EE3\u7801\n            return '\u8FD9\u662F\u81EA\u5B9A\u4E49\u6821\u9A8C\u7684\u9519\u8BEF\u4FE1\u606F'\n        },\n    },\n}\n//highlight-end\n\n<DripForm\n    unitedSchema={{ unitedSchema }}\n    uiComponents={{antd}}\n    //highlight-next-line\n    onValidate={onValidate}\n/>\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8BE6\u7EC6\u4EE3\u7801\u793A\u4F8B\uFF0C\u53C2\u8003\u4E0A\u4E00\u7AE0\u8282",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"./asyncValidate"},"\u5F02\u6B65\u6821\u9A8C")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"自定义关键字自定义校验插件进阶"},"\u81EA\u5B9A\u4E49\u5173\u952E\u5B57+\u81EA\u5B9A\u4E49\u6821\u9A8C\u63D2\u4EF6(\u8FDB\u9636)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("details",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("summary",null,"\u4E3A\u4EC0\u4E48\u63A8\u8350\u4F7F\u7528\u81EA\u5B9A\u4E49\u5173\u952E\u5B57"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5C06\u590D\u6742\u7684\u9A8C\u8BC1\u903B\u8F91\u5E26\u5165schem\u914D\u7F6E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u907F\u514D\u5197\u4F59\u4EE3\u7801"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9E\u65F6\u4FEE\u6539\u6570\u636E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u8DE8\u4E1A\u52A1\u590D\u7528"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u66F4\u591A\u5F00\u53D1\u67E5\u770B\u540E\u7EED\u8FDB\u9636\u7AE0\u8282"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../../advanced/customKeyword"},"\u81EA\u5B9A\u4E49\u6821\u9A8C\u5173\u952E\u5B57")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../../advanced/customValidatePlugin"},"\u81EA\u5B9A\u4E49\u6821\u9A8C\u63D2\u4EF6"))));};MDXContent.isMDXComponent=true;

/***/ })

}]);