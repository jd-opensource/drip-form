"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[6813],{

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

/***/ 27839:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ DocCardList; }
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(27378);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsUtils.js + 3 modules
var docsUtils = __webpack_require__(53791);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(39960);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(13919);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(95999);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCard/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"cardContainer":"cardContainer_fWXF","cardTitle":"cardTitle_rnsV","cardDescription":"cardDescription_PWke"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCard/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CardContainer(_ref){var href=_ref.href,children=_ref.children;return/*#__PURE__*/react.createElement(Link/* default */.Z,{href:href,className:(0,clsx_m/* default */.Z)('card padding--lg',styles_module.cardContainer)},children);}function CardLayout(_ref2){var href=_ref2.href,icon=_ref2.icon,title=_ref2.title,description=_ref2.description;return/*#__PURE__*/react.createElement(CardContainer,{href:href},/*#__PURE__*/react.createElement("h2",{className:(0,clsx_m/* default */.Z)('text--truncate',styles_module.cardTitle),title:title},icon," ",title),description&&/*#__PURE__*/react.createElement("p",{className:(0,clsx_m/* default */.Z)('text--truncate',styles_module.cardDescription),title:description},description));}function CardCategory(_ref3){var item=_ref3.item;var href=(0,docsUtils/* findFirstCategoryLink */.Wl)(item);// Unexpected: categories that don't have a link have been filtered upfront
if(!href){return null;}return/*#__PURE__*/react.createElement(CardLayout,{href:href,icon:"\uD83D\uDDC3\uFE0F",title:item.label,description:(0,Translate/* translate */.I)({message:'{count} items',id:'theme.docs.DocCard.categoryDescription',description:'The default description for a category card in the generated index about how many items this category includes'},{count:item.items.length})});}function CardLink(_ref4){var _item$docId;var item=_ref4.item;var icon=(0,isInternalUrl/* default */.Z)(item.href)?'📄️':'🔗';var doc=(0,docsUtils/* useDocById */.xz)((_item$docId=item.docId)!=null?_item$docId:undefined);return/*#__PURE__*/react.createElement(CardLayout,{href:item.href,icon:icon,title:item.label,description:doc==null?void 0:doc.description});}function DocCard(_ref5){var item=_ref5.item;switch(item.type){case'link':return/*#__PURE__*/react.createElement(CardLink,{item:item});case'category':return/*#__PURE__*/react.createElement(CardCategory,{item:item});default:throw new Error("unknown item type "+JSON.stringify(item));}}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCardList/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocCardListForCurrentSidebarCategory(_ref){var className=_ref.className;var category=(0,docsUtils/* useCurrentSidebarCategory */.jA)();return/*#__PURE__*/react.createElement(DocCardList,{items:category.items,className:className});}function DocCardList(props){var items=props.items,className=props.className;if(!items){return/*#__PURE__*/react.createElement(DocCardListForCurrentSidebarCategory,props);}var filteredItems=(0,docsUtils/* filterDocCardListItems */.MN)(items);return/*#__PURE__*/react.createElement("section",{className:(0,clsx_m/* default */.Z)('row',className)},filteredItems.map(function(item,index){return/*#__PURE__*/react.createElement("article",{key:index,className:"col col--6 margin-bottom--lg"},/*#__PURE__*/react.createElement(DocCard,{item:item}));}));}

/***/ }),

/***/ 89854:
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
/* harmony import */ var _home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87462);
/* harmony import */ var _home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27378);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
/* harmony import */ var _theme_DocCardList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27839);
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:'unitedSchema',title:'unitedSchema协议'};var contentTitle=undefined;var metadata={"unversionedId":"form/unitedSchema/unitedSchema","id":"form/unitedSchema/unitedSchema","title":"unitedSchema协议","description":"了解表单的组成部分可以加快了解unitedSchema协议。","source":"@site/docs/form/unitedSchema/unitedSchema.md","sourceDirName":"form/unitedSchema","slug":"/form/unitedSchema/","permalink":"/drip-form/docs/form/unitedSchema/","draft":false,"editUrl":"https://github.com/JDFED/drip-form/edit/master/website/docs/form/unitedSchema/unitedSchema.md","tags":[],"version":"current","frontMatter":{"id":"unitedSchema","title":"unitedSchema协议"},"sidebar":"docs","previous":{"title":"快速开始","permalink":"/drip-form/docs/form/quickStart/quickStart"},"next":{"title":"数据类型","permalink":"/drip-form/docs/form/unitedSchema/dataType"}};var assets={};var toc=[{value:'表单的组成部分',id:'表单的组成部分',level:2},{value:'例子',id:'例子',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4E86\u89E3\u8868\u5355\u7684\u7EC4\u6210\u90E8\u5206\u53EF\u4EE5\u52A0\u5FEB\u4E86\u89E3",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"unitedSchema"),"\u534F\u8BAE\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"表单的组成部分"},"\u8868\u5355\u7684\u7EC4\u6210\u90E8\u5206"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4E00\u4E2A\u8868\u5355\u5B9E\u73B0\u4E3B\u8981\u5206\u4E3A\u4E24\u4E2A\u90E8\u5206\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"ui \u5C55\u793A\u90E8\u5206"),"\u3001",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"\u6570\u636E\u90E8\u5206")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"ui \u5C55\u793A"),"\u5206\u4E3A\uFF1A\u8868\u5355\u5C55\u793A\u3001\u8054\u52A8\u903B\u8F91\uFF08\u5C55\u793A/\u9690\u85CF\u903B\u8F91\u3001\u4E00\u5BF9 N \u8054\u52A8\u7B49\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"\u6570\u636E"),"\u5206\u4E3A\uFF1A\u6570\u636E\u7C7B\u578B\u3001\u6570\u636E\u6821\u9A8C\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"type":"tip"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"ui \u5C55\u793A"),"\u914D\u7F6E\u5728 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Drip Form")," \u5185\u90E8\u53EB\u4F5C\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"uiSchema"),"\uFF1B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"\u6570\u636E"),"\u914D\u7F6E\u5728 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Drip Form")," \u5185\u90E8\u53EB\u505A\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"dataSchema"),";")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"type":"important"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},"\u4E3A\u4E86\u65B9\u4FBF\u7528\u6237\u540C\u65F6\u914D\u7F6E",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"ui\u5C55\u793A"),"\u548C",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"\u6570\u636E"),"\u90E8\u5206\uFF0C",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Drip Form")," \u5185\u90E8\u5C06 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"unitedSchema")," \u89E3\u6790\u4E3A ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"uiSchema")," \u548C ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"dataSchema"),"\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},"\u56E0\u6B64\u7528\u6237\u53EA\u9700\u8981\u914D\u7F6E ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"unitedSchema")," \u5373\u53EF")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"例子"},"\u4F8B\u5B50"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"type":"info"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},"\u6211\u4EEC\u5C06\u901A\u8FC7\u4E00\u4E2A\u5B9E\u9645\u4F8B\u5B50\u8BA9\u4F60\u5FEB\u901F\u4E86\u89E3",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"unitedSchema"),"\u7684\u914D\u7F6E\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u73B0\u5728\u6211\u4EEC\u9700\u8981\u642D\u5EFA\u4E00\u4E2A\u4E2A\u4EBA\u4FE1\u606F\u7684\u8868\u5355\uFF0C\u5728\u63D0\u4EA4\u65F6\u8868\u5355\u6570\u636E\uFF08formData\uFF09\u5982\u4E0B\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-js"},"{\n  name: '\u5F20\u4E09',\n  age: 23,\n  married: true,\n  hobby: ['\u9493\u9C7C', '\u6E38\u6CF3'],\n  address: {province: 'xx\u7701', city: 'xx\u5E02'},\n  mate: ['\u738B\u56DB', 23],\n  schools: [{name:'xxx\u5C0F\u5B66',year:'2000-2006'},{name:'xxx\u4E2D\u5B66',year:'2007-2010'}]\n}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6309\u7167\u8868\u5355\u7EC4\u6210\u90E8\u5206\uFF0C\u6211\u4EEC\u5C06\u5206\u4E3A\u4E09\u4E2A\u90E8\u5206\u6765\u4E86\u89E3 unitedSchema"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_DocCardList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{mdxType:"DocCardList"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"type":"tip"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},"\u672C\u7AE0\u4E0D\u4ECB\u7ECD\u8054\u52A8\u7684\u914D\u7F6E\uFF0C\u8054\u52A8\u8BE6\u60C5\u67E5\u770B\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../use/control"},"\u8054\u52A8\u914D\u7F6E"))));};MDXContent.isMDXComponent=true;

/***/ })

}]);