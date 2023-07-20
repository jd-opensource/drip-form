"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[3242],{

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

/***/ 7020:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'uiType',title:'表单展示',description:'如何配置表单的展示形式？'};var contentTitle=undefined;var metadata={"unversionedId":"form/unitedSchema/uiType","id":"form/unitedSchema/uiType","title":"表单展示","description":"如何配置表单的展示形式？","source":"@site/docs/form/unitedSchema/表单展示.mdx","sourceDirName":"form/unitedSchema","slug":"/form/unitedSchema/uiType","permalink":"/drip-form/docs/form/unitedSchema/uiType","draft":false,"editUrl":"https://github.com/JDFED/drip-form/edit/master/website/docs/form/unitedSchema/表单展示.mdx","tags":[],"version":"current","frontMatter":{"id":"uiType","title":"表单展示","description":"如何配置表单的展示形式？"},"sidebar":"docs","previous":{"title":"数据类型","permalink":"/drip-form/docs/form/unitedSchema/dataType"},"next":{"title":"表单校验","permalink":"/drip-form/docs/form/unitedSchema/schemaKeyword"}};var assets={};var toc=[{value:'常见配置',id:'常见配置',level:2},{value:'表单组件主题（theme）',id:'表单组件主题theme',level:3},{value:'表单组件类型（type）',id:'表单组件类型type',level:3},{value:'标题（title）',id:'标题title',level:3},{value:'提示（description）',id:'提示description',level:3},{value:'布局（containerStyle）',id:'布局containerstyle',level:3},{value:'特殊配置',id:'特殊配置',level:2},{value:'展示模式（formMode）',id:'展示模式formmode',level:3},{value:'展示隐藏（vcontrol）',id:'展示隐藏vcontrol',level:3},{value:'组件选项（queryConfig）',id:'组件选项queryconfig',level:3},{value:'自定义配置',id:'自定义配置',level:2},{value:'容器自定义className (customClassName)',id:'容器自定义classname-customclassname',level:3},{value:'样式（表单组件其余属性）',id:'样式表单组件其余属性',level:3}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u901A\u8FC7\u4E0B\u9762\u56FE\u7247\u6765\u4E86\u89E3",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Drip Form"),"\u8868\u5355\u63A7\u4EF6\u7684\u7EC4\u6210\u90E8\u5206"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"p","src":"https://img13.360buyimg.com/imagetools/jfs/t1/8978/25/20797/43362/63b52c27F35db8f94/3cd9b7b2d68e1f13.png","alt":"Drip Form表单控件组成"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8868\u5355\u5C55\u793A\u53EF\u4EE5\u5206\u4E3A\u51E0\u4E2A\u90E8\u5206\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"\u6807\u9898"),"\u3001",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"\u63D0\u793A"),"\u3001",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"\u8868\u5355\u7EC4\u4EF6"),"\u3001",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"\u5E03\u5C40")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"type":"tip"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Drip Form"),"\u901A\u8FC7",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"ui"),"\u5BF9\u8C61\u6765\u63CF\u8FF0\u8868\u5355\u63D0\u793A\u4FE1\u606F\u3001\u8868\u5355\u63A7\u4EF6\u4FE1\u606F;"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},"\u901A\u8FC7",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"title"),"\u5B57\u6BB5\u6765\u63CF\u8FF0\u8868\u5355\u6807\u9898")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4E0A\u9762\u7EC4\u4EF6\u4F7F\u7528 unitedSchema \u534F\u8BAE\u63CF\u8FF0\u5982\u4E0B\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx","metastring":"title=unitedSchema","title":"unitedSchema"},"{\n  //\u6700\u5916\u5C42\u662F\u5BF9\u8C61\u7C7B\u578B\n  type:'object',\n  //\u6570\u636E\u53D8\u5316\u65F6\u89E6\u53D1\u6821\u9A8C\n  validaTime:'change',\n  //\u5168\u5C40\u9ED8\u8BA4\u4F7F\u7528antd\u4E3B\u9898\n  theme:'antd',\n  schema:[\n    {\n      //\u8868\u5355\u6570\u636E\u7C7B\u578B\n      type:'string',\n      //\u6807\u9898\n      //highlight-start\n      title:'\u59D3\u540D',\n      ui:{\n        //\u4F7F\u7528antd\u4E3B\u9898\u7684text\u63A7\u4EF6\n        type:'text',\n        //\u5F53\u524D\u8868\u5355\u63A7\u4EF6\u4F7F\u7528antd\u4E3B\u9898\uFF08\u82E5\u548C\u5168\u5C40\u4F7F\u7528\u7684theme\u4E00\u81F4\uFF0C\u5219\u53EF\u7701\u7565\uFF09\n        theme:'antd',\n        //\u5F53\u524D\u8868\u5355\u63A7\u4EF6\u4F7F\u7528\u7F16\u8F91\u6A21\u5F0F\n        formMode:'edit'\n        //\u63D0\u793A\u4FE1\u606F\n        description:[\n          {\n            type:'icon',\n            title:'\u8FD9\u662F\u59D3\u540D'\n          },\n          {\n            type:'text',\n            title:'\u586B\u5199\u59D3\u540D'\n          }\n        ],\n        //\u8868\u5355\u5E03\u5C40\u63CF\u8FF0\u4FE1\u606F\n        containerStyle:{\n          width:'100%'\n        }\n      },\n      //highlight-end\n      //\u6570\u636E\u7ED1\u5B9A\n      fieldKey:'name'\n    }\n  ]\n}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4E0A\u9762",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"JSON \u9AD8\u4EAE\u90E8\u5206"),"\u63CF\u8FF0\u4E86\u8868\u5355\u63A7\u4EF6\u7684\u6807\u9898\u3001\u63D0\u793A\u3001\u8868\u5355\u63A7\u4EF6\u7C7B\u578B\u3001\u8868\u5355\u6240\u4F7F\u7528\u7684\u4E3B\u9898\u4FE1\u606F\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"常见配置"},"\u5E38\u89C1\u914D\u7F6E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"表单组件主题theme"},"\u8868\u5355\u7EC4\u4EF6\u4E3B\u9898\uFF08theme\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"blockquote"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"theme"),"\u5B57\u6BB5\u7528\u6765\u63CF\u8FF0\u5F53\u524D\u8868\u5355\u63A7\u4EF6\u7684\u4E3B\u9898\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{parentName:"blockquote","type":"tip"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../API/formProp/uiComponents"},"uiComponents"),"\u4E2D\u5BFC\u5165\u7684\u4E3B\u9898\u5747\u53EF\u4F7F\u7528\u3002"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx"},"//\u5BFC\u5165drip form\u6E32\u67D3\u6838\u5FC3\nimport DripForm from '@jdfed/drip-form'\n//\u5BFC\u5165antd\u4E3B\u9898\n//highlight-next-line\nimport antd from '@jdfed/drip-form-theme-antd'\n//\u5BFC\u5165\u8868\u5355\u914D\u7F6E\u6587\u4EF6\nimport unitedSchema from './unitedSchema'\n//\u5BFC\u5165drip form\u6837\u5F0F\nimport '@jdfed/drip-form/dist/index.css'\n//\u5BFC\u5165antd\u4E3B\u9898\u6837\u5F0F\nimport '@jdfed/drip-form-theme-antd/dist/index.css'\n//\u5BFC\u5165antd\u6837\u5F0F\nimport 'antd/dist/antd.css'\n\nfunction App() {\n  return (\n    <DripForm\n      // \u8868\u5355\u914D\u7F6E\u6587\u4EF6\n      unitedSchema={unitedSchema}\n      // \u5BFC\u5165\u7EC4\u4EF6\n      //highlight-next-line\n      uiComponents={{ antd }}\n      // \u8BBE\u7F6E\u8868\u5355\u503C\n      formData={{\n        checkbox: '1',\n        colorPicker: '#000000',\n        text: '1111',\n        number: 1,\n      }}\n    ></DripForm>\n  )\n}\n\nexport default App\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"type":"info"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Drip Form"),"\u652F\u6301\u5BFC\u5165\u591A\u4E2A\u4E3B\u9898\uFF0C\u5E76\u4F7F\u7528\u4E0D\u540C\u4E3B\u9898\u7684\u4E0D\u540C\u8868\u5355\u63A7\u4EF6\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},"\u8BE6\u7EC6\u53C2\u8003 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../use/theme"},"\u4E3B\u9898"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"表单组件类型type"},"\u8868\u5355\u7EC4\u4EF6\u7C7B\u578B\uFF08type\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"blockquote"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"type"),"\u5B57\u6BB5\u7528\u6765\u63CF\u8FF0\u5F53\u524D\u5B57\u6BB5\u7684\u8868\u5355\u63A7\u4EF6\u7C7B\u578B\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4E3B\u9898\u5305\u542B\u4E86\u591A\u4E2A\u8868\u5355\u63A7\u4EF6\uFF0C\u9009\u5B9A\u4F7F\u7528\u4E3B\u9898\u4E4B\u540E\uFF0C\u9700\u8981\u786E\u5B9A\u4F7F\u7528\u7684\u63A7\u4EF6\u7C7B\u578B\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4EE5 antd \u4E3B\u9898\u4E3A\u4F8B\uFF0Cantd \u652F\u6301\u4EE5\u4E0B\u63A7\u4EF6"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead",{parentName:"table"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"thead"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"type \u7C7B\u578B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"\u7EC4\u4EF6\u540D"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"\u9884\u89C8"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody",{parentName:"table"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"text"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u6587\u672C\u8F93\u5165"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"td","src":"https://storage.360buyimg.com/imgtools/765270b83b-8795ec80-4cf9-11ec-ba01-fb2536faa70c.png","alt":null}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"number"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u6570\u5B57\u8F93\u5165"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"td","src":"https://storage.360buyimg.com/imgtools/3993d64efc-85bf30b0-4cf9-11ec-ba01-fb2536faa70c.png","alt":null}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"select"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u9009\u62E9\u5668"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"td","src":"https://storage.360buyimg.com/imgtools/f936078b88-86a041e0-4cf9-11ec-ba01-fb2536faa70c.png","alt":null}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"cascader"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u7EA7\u8054\u9009\u62E9\u5668"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"td","src":"https://img13.360buyimg.com/imagetools/jfs/t1/44791/40/22719/45767/63b52aebF65baee06/3a41e889cd0b0478.png","alt":null}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"colorPicker"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u989C\u8272\u9009\u62E9\u5668"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"td","src":"https://storage.360buyimg.com/imgtools/6e88859476-82b63670-4cf9-11ec-bf12-d7e468206312.png","alt":null}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"datePicker"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u65E5\u671F\u9009\u62E9\u6846"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"td","src":"https://storage.360buyimg.com/imgtools/e0d437f1bc-83597b50-4cf9-11ec-bf12-d7e468206312.png","alt":null}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"timePicker"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u65F6\u95F4\u9009\u62E9\u6846"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"td","src":"https://storage.360buyimg.com/imgtools/735c0c2377-882ad980-4cf9-11ec-9620-6d9821f0161f.png","alt":null}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"radio"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u5355\u9009\u6846"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"td","src":"https://storage.360buyimg.com/imgtools/a592d3f1d3-865b49a0-4cf9-11ec-9620-6d9821f0161f.png","alt":null}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"checkbox"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u591A\u9009\u6846"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"td","src":"https://storage.360buyimg.com/imgtools/e9f2c83c4e-82939340-4cf9-11ec-89c8-f9e7ed0c7791.png","alt":null}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"slider"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u6ED1\u52A8\u8F93\u5165\u6761"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"td","src":"https://storage.360buyimg.com/imgtools/92dcc7c036-86e3b380-4cf9-11ec-ba01-fb2536faa70c.png","alt":null}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"switch"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u5F00\u5173"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"td","src":"https://storage.360buyimg.com/imgtools/d16134741b-875e3ab0-4cf9-11ec-beba-01cc54c313fe.png","alt":null}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"uploader"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u4E0A\u4F20"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"td","src":"https://storage.360buyimg.com/imgtools/ec45135acb-8990f930-4cf9-11ec-89c8-f9e7ed0c7791.png","alt":null}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"transfer"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u7A7F\u68AD\u6846"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"td","src":"https://img13.360buyimg.com/imagetools/jfs/t1/92236/15/33195/37185/63b52b34F688a3703/6a96c74443be57ec.png","alt":null}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"null"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u6587\u672C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"td","src":"https://storage.360buyimg.com/imgtools/57486b4111-857fddc0-4cf9-11ec-89c8-f9e7ed0c7791.png","alt":null}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"array"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u6570\u7EC4\u5BB9\u5668"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"td","src":"https://img13.360buyimg.com/imagetools/jfs/t1/222218/11/17781/43402/63b52b70F7f98b1a3/d632706cd102ac55.png","alt":null}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"object"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u5BF9\u8C61\u5BB9\u5668"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"td","src":"https://img14.360buyimg.com/imagetools/jfs/t1/124111/35/28326/46020/63b52b8bF6c518492/3e1a293ba802805a.png","alt":null}))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"标题title"},"\u6807\u9898\uFF08title\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"blockquote"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"title"),"\u5B57\u6BB5\u7528\u6765\u63CF\u8FF0\u5F53\u524D\u8868\u5355\u7684\u6807\u9898")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Drip Form"),"\u9488\u5BF9\u6807\u9898\u6709\u591A\u4E2A\u914D\u7F6E\u9879\uFF08\u67E5\u770B\u9AD8\u4EAE\u90E8\u5206\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"{\n  //\u6700\u5916\u5C42\u662F\u5BF9\u8C61\u7C7B\u578B\n  type:'object',\n  //\u6570\u636E\u53D8\u5316\u65F6\u89E6\u53D1\u6821\u9A8C\n  validaTime:'change',\n  //\u5168\u5C40\u9ED8\u8BA4\u4F7F\u7528antd\u4E3B\u9898\n  theme:'antd',\n  schema:[\n    {\n      //\u8868\u5355\u6570\u636E\u7C7B\u578B\n      type:'string',\n      //\u6807\u9898\n      //highlight-next-line\n      title:'\u59D3\u540D',\n      ui:{\n        //\u4F7F\u7528antd\u4E3B\u9898\u7684text\u63A7\u4EF6\n        type:'text',\n        //\u5F53\u524D\u8868\u5355\u63A7\u4EF6\u4F7F\u7528antd\u4E3B\u9898\uFF08\u82E5\u548C\u5168\u5C40\u4F7F\u7528\u7684theme\u4E00\u81F4\uFF0C\u5219\u53EF\u7701\u7565\uFF09\n        theme:'antd',\n        //highlight-start\n        //\u6807\u9898\u914D\u7F6E\n        title: {\n          // \u662F\u5426\u5C55\u793A\u6807\u9898\n          showTitle: true,\n          // \u5FC5\u586B\u662F\u5426\u5C55\u793A*\u53F7\n          requiredIcon: false,\n          // \u6807\u9898\u540E\u9762\u662F\u5426\u5C55\u793A\u5192\u53F7\n          showColon: false,\n          // \u6807\u9898\u5BBD\u5EA6\n          width: 82,\n          // \u6807\u9898\u4F4D\u7F6E 'left' | 'right' | 'bottom' | 'top'\n          placement: \"left\",\n          // \u6807\u9898\u5B57\u53F7\n          fontSize: \"12\",\n          // \u6807\u9898\u989C\u8272\n          color: \"#000000\",\n          // \u6807\u9898\u6587\u5B57\u6C34\u5E73\u5BF9\u9F50\u65B9\u5411 right \uFF5C left \uFF5C center\n          textAlign: \"left\",\n          // \u6807\u9898\u6587\u5B57\u5782\u76F4\u5BF9\u9F50\u65B9\u5411 top \uFF5C center \uFF5C bottom\n          verticalAlign: \"center\"\n        },\n        //highlight-end\n        //\u63D0\u793A\u4FE1\u606F\n        description:[\n          {\n            type:'icon',\n            title:'\u8FD9\u662F\u59D3\u540D'\n          },\n          {\n            type:'text',\n            title:'\u586B\u5199\u59D3\u540D'\n          }\n        ],\n        //\u8868\u5355\u5E03\u5C40\u63CF\u8FF0\u4FE1\u606F\n        containerStyle:{\n          width:'100%'\n        }\n      },\n      //\u6570\u636E\u7ED1\u5B9A\n      fieldKey:'name'\n    }\n  ]\n}\n\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"提示description"},"\u63D0\u793A\uFF08description\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"blockquote"},"description\u5B57\u6BB5\u63CF\u8FF0\u8868\u5355\u63D0\u793A\u4FE1\u606F")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u63D0\u793A\u5728\u8868\u5355\u63A7\u4EF6\u4E2D\u5206\u4E24\u79CD\u5F62\u5F0F\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u4E0B\u65B9\u6587\u5B57\u76F4\u63A5\u5C55\u793A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-js"},"{\n  ui:{\n    description: {\n      type:\"text\",\n      title:\"\u4E0B\u65B9\u6587\u5B57\u76F4\u63A5\u7C98\u817B\"\n    }\n  }\n}\n"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"icon\u6309\u94AE\u60AC\u6D6E\u6216\u70B9\u51FB\u5C55\u793A\uFF08\u9ED8\u8BA4\u60AC\u6D6E\u5C55\u793A\u63D0\u793A\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-js"},"{\n  ui:{\n    description:{\n      type:'icon',\n      title:'\u6309\u94AE\u60AC\u6D6E\u5C55\u793A',\n      trigger:'hover'\n    }\n  }\n}\n")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("details",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("summary",null,"typescript"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"type DescriptionItem =\n  | {\n      type: 'icon'\n      title: string\n      trigger?: 'click' | 'hover'\n    }\n  | {\n      type: 'text'\n      title: string\n    }\n  | null\nexport type Description = DescriptionItem | Array<DescriptionItem>\n"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"布局containerstyle"},"\u5E03\u5C40\uFF08containerStyle\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"blockquote"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"containerStyle"),"\u5B57\u6BB5\u63CF\u8FF0\u8868\u5355\u5E03\u5C40\u4FE1\u606F")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"type":"tip"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Drip Form"),"\u4F7F\u7528flex\u5E03\u5C40\uFF0C\u9ED8\u8BA4\u7EC4\u4EF6\u4E00\u884C\u4E00\u4E2A\uFF08\u5BBD\u5EA6100%\uFF09\u3002\n\u7528\u6237\u53EF\u66F4\u6539containerStyle\u6765\u4FEE\u6539\u7EC4\u4EF6\u5BBD\u5EA6\u8FBE\u5230\u4E00\u884C\u591A\u4E2A\u8868\u5355\u7684\u6548\u679C\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("details",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("summary",null,"typescript"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"export type ContainerStyle = Partial<{\n  // \u8868\u5355\u5BBD\u5EA6\n  width: number | string\n  // \u5BB9\u5668margin-top\n  marginTop: number | string\n  // \u5BB9\u5668margin-right\n  marginRight: number | string\n  // \u5BB9\u5668margin-bottom\n  marginBottom: number | string\n  // \u5BB9\u5668margin-left\n  marginLeft: number | string\n  // \u5BB9\u5668margin\n  margin: string\n  // \u5BB9\u5668padding\n  padding: string\n  paddingTop: number | string\n  paddingBottom: number | string\n  paddingRigth: number | string\n  paddingLeft: number | string\n}> | null\n"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"特殊配置"},"\u7279\u6B8A\u914D\u7F6E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"展示模式formmode"},"\u5C55\u793A\u6A21\u5F0F\uFF08formMode\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"blockquote"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Drip Form")," \u8868\u5355\u4EE5\u4E0B\u4E24\u79CD\u5E38\u7528\u6A21\u5F0F")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"edit")," \u7F16\u8F91\u6A21\u5F0F \uFF08\u7528\u6237\u53EF\u4FEE\u6539\u8868\u5355\u6570\u636E\uFF09")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"view")," \u67E5\u770B\u6A21\u5F0F\uFF08\u53EA\u8BFB\uFF0C\u4E0D\u53EF\u4FEE\u6539\u6570\u636E\uFF09"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-typescript"},"type FormMode = 'edit' | 'view'\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"type":"caution"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},"\u4E0D\u662F\u6240\u6709\u7684\u8868\u5355\u63A7\u4EF6\u90FD\u652F\u6301formMode\u914D\u7F6E\uFF0C\u53D6\u51B3\u4E8E\u8868\u5355\u63A7\u4EF6\u662F\u5426\u6709\u76F8\u5E94\u6A21\u5F0F\u7684\u5B9E\u73B0\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("details",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("summary",null,"\u652F\u6301\u5C55\u793A\u6A21\u5F0F\u7684\u8868\u5355\u63A7\u4EF6"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u82E5\u9664\u4E86\u4EE5\u4E0A\u7684\u8868\u5355\u5E0C\u671B\u652F\u6301\u5C55\u793A\u6A21\u5F0F\uFF0C\u6B22\u8FCE\u8D21\u732E\uFF0C\u8BA9",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Drip form"),"\u652F\u6301\u66F4\u591A\u7684\u7EC4\u4EF6\u652F\u6301formMode\u6A21\u5F0F\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://github.com/JDFED/drip-form/blob/dev/CONTRIBUTING.md"},"\u8D21\u732E\u5FC5\u770B")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../use/customComponent#%E8%A1%A8%E5%8D%95%E6%A8%A1%E5%BC%8F"},"\u5982\u4F55\u8BA9\u7EC4\u4EF6\u652F\u6301\u5C55\u793A\u6A21\u5F0F")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"展示隐藏vcontrol"},"\u5C55\u793A\u9690\u85CF\uFF08vcontrol\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"vcontrol"),"\u53EF\u4EE5\u6309\u7167\u6761\u4EF6\u63A7\u5236\u8868\u5355\u5C55\u793A\u3001\u9690\u85CF\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8BE6\u7EC6\u4E86\u89E3",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../use/control/vcontrol"},"\u5C55\u793A\u9690\u85CF"),"\u7AE0\u8282"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"组件选项queryconfig"},"\u7EC4\u4EF6\u9009\u9879\uFF08queryConfig\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5728\u7EC4\u4EF6\u7B2C\u4E00\u6B21\u52A0\u8F7D\u65F6\uFF0C\u53EF\u4EE5\u914D\u5408 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../API/formProp/fetchApi"},"fetchApi")," \u8C03\u7528\u63A5\u53E3\uFF0C\u5E76\u5C06\u540E\u7AEF\u6570\u636E\u6620\u5C04\u5230ui\u5BF9\u8C61\u4E2D\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8BE6\u7EC6\u4E86\u89E3",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../use/control/other#queryconfig%E8%AE%BE%E7%BD%AE%E9%80%89%E9%A1%B9"},"queryConfig\u8BBE\u7F6E\u9009\u9879\u7AE0\u8282")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"自定义配置"},"\u81EA\u5B9A\u4E49\u914D\u7F6E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"容器自定义classname-customclassname"},"\u5BB9\u5668\u81EA\u5B9A\u4E49className (customClassName)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"customClassName")," \u4F1A\u88AB\u52A0\u8F7D\u5230\u8868\u5355\u5BB9\u5668\u7684class\u4E0A, \u6BCF\u4E2A\u8868\u5355\u5355\u9879\u62E5\u6709\u81EA\u5DF1\u7684\u72EC\u7ACBui.customClassName"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5982\u679C\u5F53\u524D\u5BB9\u5668\u662F\u6570\u7EC4array\u7C7B\u578B, \u5BB9\u5668\u7684\u6570\u91CF\u4F1A\u6839\u636EformData\u4E2D\u6570\u636E\u7684\u6570\u91CF\u5C55\u793A\u591A\u9879, \u6BCF\u9879\u7684className\u76F8\u540C,\u5982\u679C\u9700\u8981\u533A\u5206\u53EF\u4EE5\u6839\u636E\u6570\u7EC4\u7D22\u5F15\u8FDB\u884C\u533A\u5206"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"样式表单组件其余属性"},"\u6837\u5F0F\uFF08\u8868\u5355\u7EC4\u4EF6\u5176\u4F59\u5C5E\u6027\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"blockquote"},"ui\u4E2D\u5176\u4F59\u5B57\u6BB5\u4F1A\u900F\u4F20\u7ED9\u8868\u5355\u63A7\u4EF6\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"type":"tip"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},"antd\u7EC4\u4EF6\u652F\u6301\u7684prop\u5747\u53EF\u4EE5\u5728ui\u5BF9\u8C61\u4E2D\u586B\u5199\u3002\uFF08\u5177\u4F53\u53C2\u8003antd \u5404\u7EC4\u4EF6prop\uFF09")));};MDXContent.isMDXComponent=true;

/***/ })

}]);