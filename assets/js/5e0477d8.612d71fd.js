"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[3487],{

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

/***/ 98878:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'control',title:'control',description:'监听内部数据变化'};var contentTitle=undefined;var metadata={"unversionedId":"form/API/formProp/control","id":"form/API/formProp/control","title":"control","description":"监听内部数据变化","source":"@site/docs/form/API/formProp/control.md","sourceDirName":"form/API/formProp","slug":"/form/API/formProp/control","permalink":"/drip-form/docs/form/API/formProp/control","draft":false,"editUrl":"https://github.com/JDFED/drip-form/edit/master/website/docs/form/API/formProp/control.md","tags":[],"version":"current","frontMatter":{"id":"control","title":"control","description":"监听内部数据变化"},"sidebar":"docs","previous":{"title":"globalData","permalink":"/drip-form/docs/form/API/formProp/globalData"},"next":{"title":"parse","permalink":"/drip-form/docs/form/API/formProp/parse"}};var assets={};var toc=[{value:'设置联动',id:'设置联动',level:2},{value:'获取实时表单信息',id:'获取实时表单信息',level:2}];var makeShortcode=function makeShortcode(name){return function MDXDefaultShortcode(props){console.warn("Component "+name+" was not imported, exported, or provided by MDXProvider as global scope");return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div",props);};};var Tabs=makeShortcode("Tabs");var TabsItem=makeShortcode("TabsItem");var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"type ControlFuc = ({\n  formData,\n  uiSchema,\n  dataSchema,\n  dispatch,\n  changeKey,\n  checking,\n  get,\n  set,\n  deleteField,\n  errors,\n}: {\n  //\u8868\u5355ui\u914D\u7F6E\n  uiSchema: Map\n  // \u8868\u5355\u6821\u9A8C\u914D\u7F6E\n  dataSchema: Map\n  // \u8868\u5355\u6570\u636E\n  formData: Map\n  // dipatch Api\n  dispatch: Dispatch\n  // \u5F53\u524D\u53D8\u5316\u7684\u8868\u5355\u6570\u636E\n  changeKey: string\n  // \u8868\u5355\u662F\u5426\u6821\u9A8C\u5B8C\u6BD5\n  checking: boolean\n  // get Api\n  get: Get\n  // set Api\n  set: Set\n  // merge Api\n  merge: Merge\n  // \u5220\u9664\u67D0\u4E2A\u8868\u5355\u5B57\u6BB5\uFF08\u4E00\u822C\u7528\u4E0D\u5230\uFF09\n  deleteField: DeleteField\n  // \u6240\u6709\u8868\u5355\u9519\u8BEF\u4FE1\u606F\n  errors: Map\n}) => void\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"control\u4E3B\u8981\u7528\u6765\u76D1\u542C\u5168\u5C40\u6570\u636E",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("sup",{parentName:"p","id":"fnref-1"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"sup","href":"#fn-1","className":"footnote-ref"},"1")),"\u53D8\u5316\uFF0C\u6709\u4EE5\u4E0B\u51E0\u79CD\u7528\u6CD5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"设置联动"},"\u8BBE\u7F6E\u8054\u52A8"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("details",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("summary",null,"\u4EE3\u7801\u793A\u4F8B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Tabs,{mdxType:"Tabs"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(TabsItem,{value:"App",label:"App.tsx",mdxType:"TabsItem"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx"},"import DripForm from '@jdfed/drip-form';\nimport antd from '@jdfed/drip-form-theme-antd';\nimport unitedSchema from './unitedSchema';\nimport '@jdfed/drip-form/dist/index.css';\nimport '@jdfed/drip-form-theme-antd/dist/index.css';\nimport 'antd/dist/antd.css';\n\nfunction App() {\n  return (\n    <DripForm\n      // \u8868\u5355\u914D\u7F6E\u6587\u4EF6\n      unitedSchema={unitedSchema}\n      // \u5BFC\u5165\u7EC4\u4EF6\n      uiComponents={{ antd }}\n      //highlight-start\n      control={({ changeKey, get, set }) => {\n        // \u53EA\u6709\u53D8\u5316\u7684\u8868\u5355\u662F\u6570\u5B57\u8F93\u5165\u68461\u6216\u6570\u5B57\u8F93\u5165\u68462\n        if (['number_3y3QMi', 'number_UIKkH2'].includes(changeKey)) {\n          //\u83B7\u53D6\u6570\u5B57\u8F93\u5165\u68461\u7684\u503C\n          const value1 = (get('number_3y3QMi').data as unknown as number) || 0;\n          // \u83B7\u53D6\u6570\u5B57\u8F93\u5165\u68462\u7684\u503C\n          const value2 = (get('number_UIKkH2').data as unknown as number) || 0;\n          // \u8BBE\u7F6E\u8868\u5355\u603B\u989D\u7684\u503C\u4E3A \u6570\u5B57\u8F93\u5165\u68461\u7684\u503C+\u6570\u5B57\u8F93\u5165\u68462\u7684\u503C\n          set('text_GLFn0c', 'data', value1 + value2);\n        }\n      }}\n      //highlight-end\n    ></DripForm>\n  );\n}\n\nexport default App;\n\n"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(TabsItem,{value:"unitedSchema",label:"unitedSchema.ts",mdxType:"TabsItem"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx"},"// \u8868\u5355\u914D\u7F6E\u6587\u4EF6\n\nexport default {\n  type: 'object',\n  validateTime: 'change',\n  theme: 'antd',\n  schema: [\n    {\n      type: 'number',\n      title: '\u6570\u5B57\u8F93\u5165\u68461',\n      default: 0,\n      ui: {\n        type: 'number',\n        theme: 'antd',\n      },\n      fieldKey: 'number_3y3QMi',\n    },\n    {\n      type: 'number',\n      title: '\u6570\u5B57\u8F93\u5165\u68462',\n      default: 0,\n      ui: {\n        type: 'number',\n        theme: 'antd',\n      },\n      fieldKey: 'number_UIKkH2',\n    },\n    {\n      type: 'string',\n      title: '\u603B\u989D',\n      default: 0,\n      ui: {\n        type: 'text',\n        disabled: true,\n        style: {\n          width: '100%',\n        },\n        theme: 'antd',\n      },\n      fieldKey: 'text_GLFn0c',\n    },\n  ],\n};\n"))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4EE3\u7801\u6C99\u76D2\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://stackblitz.com/edit/drip-form-dfeldc?file=src/App.tsx"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"a","src":"https://developer.stackblitz.com/img/open_in_stackblitz.svg","alt":"Open in StackBlitz"}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"获取实时表单信息"},"\u83B7\u53D6\u5B9E\u65F6\u8868\u5355\u4FE1\u606F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u9664\u4E86\u901A\u8FC7ref prop\u83B7\u53D6\u8868\u5355\u4FE1\u606F\u5916\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7control\u83B7\u53D6\u5B9E\u65F6\u8868\u5355\u4FE1\u606F\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx","metastring":"title=\"App.tsx\"","title":"\"App.tsx\""},"import DripForm from '@jdfed/drip-form';\nimport antd from '@jdfed/drip-form-theme-antd';\nimport unitedSchema from './unitedSchema';\nimport '@jdfed/drip-form/dist/index.css';\nimport '@jdfed/drip-form-theme-antd/dist/index.css';\nimport 'antd/dist/antd.css';\n\nfunction App() {\n  return (\n    <DripForm\n      // \u8868\u5355\u914D\u7F6E\u6587\u4EF6\n      unitedSchema={unitedSchema}\n      // \u5BFC\u5165\u7EC4\u4EF6\n      uiComponents={{ antd }}\n      //highlight-start\n      control={({ changeKey, get,formData,errors }) => {\n                //\u83B7\u53D6\u6240\u6709\u8868\u5355\u7684\u9519\u8BEF\n                console.log(errors)\n                //\u83B7\u53D6\u6240\u6709\u8868\u5355\u7684\u6570\u636E\n                console.log(formData)\n                // \u83B7\u53D6\u53D1\u751F\u6570\u636E\u53D8\u5316\u7684\u8868\u5355\u6570\u636E\n                console.log(get(changKey).data)\n                // \u5F53\u524D\u53D8\u5316\u8868\u5355\u7684ui\u914D\u7F6E\n                console.log(get(changKey).uiSchema)\n                // \u5F53\u524D\u53D8\u5316\u8868\u5355\u7684\u6821\u9A8C\u914D\u7F6E\n                console.log(get(changKey).dataSchema)\n      }}\n      //highlight-end\n    ></DripForm>\n  );\n}\n\nexport default App;\n\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div",{"className":"footnotes"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr",{parentName:"div"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",{parentName:"div"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol","id":"fn-1"},"\u8868\u5355\u6570\u636E\u3001\u8868\u5355ui\u914D\u7F6E\u3001\u8868\u5355\u6821\u9A8C\u914D\u7F6E\u7B49",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"#fnref-1","className":"footnote-backref"},"\u21A9")))));};MDXContent.isMDXComponent=true;

/***/ })

}]);