(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[6773],{

/***/ 3905:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ 10235:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Heading; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(27378);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(95999);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(86668);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(39960);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"anchorWithStickyNavbar":"anchorWithStickyNavbar_LWe7","anchorWithHideOnScrollNavbar":"anchorWithHideOnScrollNavbar_WYt5"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js
var _excluded=["as","id"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Heading(_ref){var As=_ref.as,id=_ref.id,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,_excluded);var _useThemeConfig=(0,useThemeConfig/* useThemeConfig */.L)(),hideOnScroll=_useThemeConfig.navbar.hideOnScroll;// H1 headings do not need an id because they don't appear in the TOC.
if(As==='h1'||!id){return/*#__PURE__*/react.createElement(As,(0,esm_extends/* default */.Z)({},props,{id:undefined}));}var anchorTitle=(0,Translate/* translate */.I)({id:'theme.common.headingLinkTitle',message:'Direct link to {heading}',description:'Title for link to heading'},{heading:typeof props.children==='string'?props.children:id});return/*#__PURE__*/react.createElement(As,(0,esm_extends/* default */.Z)({},props,{className:(0,clsx_m/* default */.Z)('anchor',hideOnScroll?styles_module.anchorWithHideOnScrollNavbar:styles_module.anchorWithStickyNavbar,props.className),id:id}),props.children,/*#__PURE__*/react.createElement(Link/* default */.Z,{className:"hash-link",to:"#"+id,"aria-label":anchorTitle,title:anchorTitle},"\u200B"));}

/***/ }),

/***/ 36773:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ MDXContent; }
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(27378);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(3905);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(35742);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Head.js
var _excluded=["mdxType","originalType"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// MDX elements are wrapped through the MDX pragma. In some cases (notably usage
// with Head/Helmet) we need to unwrap those elements.
function unwrapMDXElement(element){var _element$props;if((_element$props=element.props)!=null&&_element$props.mdxType&&element.props.originalType){var _element$props2=element.props,mdxType=_element$props2.mdxType,originalType=_element$props2.originalType,newProps=(0,objectWithoutPropertiesLoose/* default */.Z)(_element$props2,_excluded);return/*#__PURE__*/react.createElement(element.props.originalType,newProps);}return element;}function MDXHead(props){var unwrappedChildren=react.Children.map(props.children,function(child){return/*#__PURE__*/react.isValidElement(child)?unwrapMDXElement(child):child;});return/*#__PURE__*/react.createElement(Head/* default */.Z,props,unwrappedChildren);}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(72389);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js
var contexts_colorMode = __webpack_require__(92949);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(86668);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/usePrismTheme.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Returns a color-mode-dependent Prism theme: whatever the user specified in
 * the config. Falls back to `palenight`.
 */function usePrismTheme(){var _useThemeConfig=(0,useThemeConfig/* useThemeConfig */.L)(),prism=_useThemeConfig.prism;var _useColorMode=(0,contexts_colorMode/* useColorMode */.I)(),colorMode=_useColorMode.colorMode;var lightModeTheme=prism.theme;var darkModeTheme=prism.darkTheme||lightModeTheme;var prismTheme=colorMode==='dark'?darkModeTheme:lightModeTheme;return prismTheme;}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(35281);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/wrapRegExp.js + 2 modules
var wrapRegExp = __webpack_require__(26528);
// EXTERNAL MODULE: ./node_modules/parse-numeric-range/index.js
var parse_numeric_range = __webpack_require__(87594);
var parse_numeric_range_default = /*#__PURE__*/__webpack_require__.n(parse_numeric_range);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/codeBlockUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var codeBlockTitleRegex=/*#__PURE__*/(0,wrapRegExp/* default */.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2});var metastringLinesRangeRegex=/*#__PURE__*/(0,wrapRegExp/* default */.Z)(/\{([\d,-]+)\}/,{range:1});// Supported types of highlight comments
var commentPatterns={js:{start:'\\/\\/',end:''},jsBlock:{start:'\\/\\*',end:'\\*\\/'},jsx:{start:'\\{\\s*\\/\\*',end:'\\*\\/\\s*\\}'},bash:{start:'#',end:''},html:{start:'<!--',end:'-->'}};function getCommentPattern(languages,magicCommentDirectives){// To be more reliable, the opening and closing comment must match
var commentPattern=languages.map(function(lang){var _commentPatterns$lang=commentPatterns[lang],start=_commentPatterns$lang.start,end=_commentPatterns$lang.end;return"(?:"+start+"\\s*("+magicCommentDirectives.flatMap(function(d){var _d$block,_d$block2;return[d.line,(_d$block=d.block)==null?void 0:_d$block.start,(_d$block2=d.block)==null?void 0:_d$block2.end].filter(Boolean);}).join('|')+")\\s*"+end+")";}).join('|');// White space is allowed, but otherwise it should be on it's own line
return new RegExp("^\\s*(?:"+commentPattern+")\\s*$");}/**
 * Select comment styles based on language
 */function getAllMagicCommentDirectiveStyles(lang,magicCommentDirectives){switch(lang){case'js':case'javascript':case'ts':case'typescript':return getCommentPattern(['js','jsBlock'],magicCommentDirectives);case'jsx':case'tsx':return getCommentPattern(['js','jsBlock','jsx'],magicCommentDirectives);case'html':return getCommentPattern(['js','jsBlock','html'],magicCommentDirectives);case'python':case'py':case'bash':return getCommentPattern(['bash'],magicCommentDirectives);case'markdown':case'md':// Text uses HTML, front matter uses bash
return getCommentPattern(['html','jsx','bash'],magicCommentDirectives);default:// All comment types
return getCommentPattern(Object.keys(commentPatterns),magicCommentDirectives);}}function parseCodeBlockTitle(metastring){var _metastring$match$gro,_metastring$match;return(_metastring$match$gro=metastring==null?void 0:(_metastring$match=metastring.match(codeBlockTitleRegex))==null?void 0:_metastring$match.groups.title)!=null?_metastring$match$gro:'';}function containsLineNumbers(metastring){return Boolean(metastring==null?void 0:metastring.includes('showLineNumbers'));}/**
 * Gets the language name from the class name (set by MDX).
 * e.g. `"language-javascript"` => `"javascript"`.
 * Returns undefined if there is no language class name.
 */function parseLanguage(className){var languageClassName=className.split(' ').find(function(str){return str.startsWith('language-');});return languageClassName==null?void 0:languageClassName.replace(/language-/,'');}/**
 * Parses the code content, strips away any magic comments, and returns the
 * clean content and the highlighted lines marked by the comments or metastring.
 *
 * If the metastring contains a range, the `content` will be returned as-is
 * without any parsing. The returned `lineClassNames` will be a map from that
 * number range to the first magic comment config entry (which _should_ be for
 * line highlight directives.)
 *
 * @param content The raw code with magic comments. Trailing newline will be
 * trimmed upfront.
 * @param options Options for parsing behavior.
 */function parseLines(content,options){var code=content.replace(/\n$/,'');var language=options.language,magicComments=options.magicComments,metastring=options.metastring;// Highlighted lines specified in props: don't parse the content
if(metastring&&metastringLinesRangeRegex.test(metastring)){var linesRange=metastring.match(metastringLinesRangeRegex).groups.range;if(magicComments.length===0){throw new Error("A highlight range has been given in code block's metastring (``` "+metastring+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");}var metastringRangeClassName=magicComments[0].className;var _lines=parse_numeric_range_default()(linesRange).filter(function(n){return n>0;}).map(function(n){return[n-1,[metastringRangeClassName]];});return{lineClassNames:Object.fromEntries(_lines),code:code};}if(language===undefined){return{lineClassNames:{},code:code};}var directiveRegex=getAllMagicCommentDirectiveStyles(language,magicComments);// Go through line by line
var lines=code.split('\n');var blocks=Object.fromEntries(magicComments.map(function(d){return[d.className,{start:0,range:''}];}));var lineToClassName=Object.fromEntries(magicComments.filter(function(d){return d.line;}).map(function(_ref){var className=_ref.className,line=_ref.line;return[line,className];}));var blockStartToClassName=Object.fromEntries(magicComments.filter(function(d){return d.block;}).map(function(_ref2){var className=_ref2.className,block=_ref2.block;return[block.start,className];}));var blockEndToClassName=Object.fromEntries(magicComments.filter(function(d){return d.block;}).map(function(_ref3){var className=_ref3.className,block=_ref3.block;return[block.end,className];}));for(var lineNumber=0;lineNumber<lines.length;){var line=lines[lineNumber];var match=line.match(directiveRegex);if(!match){// Lines without directives are unchanged
lineNumber+=1;continue;}var directive=match.slice(1).find(function(item){return item!==undefined;});if(lineToClassName[directive]){blocks[lineToClassName[directive]].range+=lineNumber+",";}else if(blockStartToClassName[directive]){blocks[blockStartToClassName[directive]].start=lineNumber;}else if(blockEndToClassName[directive]){blocks[blockEndToClassName[directive]].range+=blocks[blockEndToClassName[directive]].start+"-"+(lineNumber-1)+",";}lines.splice(lineNumber,1);}code=lines.join('\n');var lineClassNames={};Object.entries(blocks).forEach(function(_ref4){var className=_ref4[0],range=_ref4[1].range;parse_numeric_range_default()(range).forEach(function(l){var _lineClassNames$l;(_lineClassNames$l=lineClassNames[l])!=null?_lineClassNames$l:lineClassNames[l]=[];lineClassNames[l].push(className);});});return{lineClassNames:lineClassNames,code:code};}function getPrismCssVariables(prismTheme){var mapping={color:'--prism-color',backgroundColor:'--prism-background-color'};var properties={};Object.entries(prismTheme.plain).forEach(function(_ref5){var key=_ref5[0],value=_ref5[1];var varName=mapping[key];if(varName&&typeof value==='string'){properties[varName]=value;}});return properties;}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Container/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"codeBlockContainer":"codeBlockContainer_Ckt0"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Container/index.js
var Container_excluded=["as"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CodeBlockContainer(_ref){var As=_ref.as,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,Container_excluded);var prismTheme=usePrismTheme();var prismCssVariables=getPrismCssVariables(prismTheme);return/*#__PURE__*/react.createElement(As// Polymorphic components are hard to type, without `oneOf` generics
,(0,esm_extends/* default */.Z)({},props,{style:prismCssVariables,className:(0,clsx_m/* default */.Z)(props.className,styles_module.codeBlockContainer,ThemeClassNames/* ThemeClassNames.common.codeBlock */.k.common.codeBlock)}));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Content_styles_module = ({"codeBlockContent":"codeBlockContent_biex","codeBlockTitle":"codeBlockTitle_Ktv7","codeBlock":"codeBlock_bY9V","codeBlockStandalone":"codeBlockStandalone_MEMb","codeBlockLines":"codeBlockLines_e6Vv","codeBlockLinesWithNumbering":"codeBlockLinesWithNumbering_o6Pm","buttonGroup":"buttonGroup__atx"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/Element.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// <pre> tags in markdown map to CodeBlocks. They may contain JSX children. When
// the children is not a simple string, we just return a styled block without
// actually highlighting.
function CodeBlockJSX(_ref){var children=_ref.children,className=_ref.className;return/*#__PURE__*/react.createElement(CodeBlockContainer,{as:"pre",tabIndex:0,className:(0,clsx_m/* default */.Z)(Content_styles_module.codeBlockStandalone,'thin-scrollbar',className)},/*#__PURE__*/react.createElement("code",{className:Content_styles_module.codeBlockLines},children));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js + 5 modules
var reactUtils = __webpack_require__(69688);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useMutationObserver.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DefaultOptions={attributes:true,characterData:true,childList:true,subtree:true};function useMutationObserver(target,callback,options){if(options===void 0){options=DefaultOptions;}var stableCallback=(0,reactUtils/* useEvent */.zX)(callback);// MutationObserver options are not nested much
// so this should be to memo options in 99%
// TODO handle options.attributeFilter array
var stableOptions=(0,reactUtils/* useShallowMemoObject */.Ql)(options);(0,react.useEffect)(function(){var observer=new MutationObserver(stableCallback);if(target){observer.observe(target,stableOptions);}return function(){return observer.disconnect();};},[target,stableCallback,stableOptions]);}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useCodeWordWrap.js
// Callback fires when the "hidden" attribute of a tabpanel changes
// See https://github.com/facebook/docusaurus/pull/7485
function useTabBecameVisibleCallback(codeBlockRef,callback){var _useState=(0,react.useState)(),hiddenTabElement=_useState[0],setHiddenTabElement=_useState[1];var updateHiddenTabElement=(0,react.useCallback)(function(){var _codeBlockRef$current;// No need to observe non-hidden tabs
// + we want to force a re-render when a tab becomes visible
setHiddenTabElement((_codeBlockRef$current=codeBlockRef.current)==null?void 0:_codeBlockRef$current.closest('[role=tabpanel][hidden]'));},[codeBlockRef,setHiddenTabElement]);(0,react.useEffect)(function(){updateHiddenTabElement();},[updateHiddenTabElement]);useMutationObserver(hiddenTabElement,function(mutations){mutations.forEach(function(mutation){if(mutation.type==='attributes'&&mutation.attributeName==='hidden'){callback();updateHiddenTabElement();}});},{attributes:true,characterData:false,childList:false,subtree:false});}function useCodeWordWrap(){var _useState2=(0,react.useState)(false),isEnabled=_useState2[0],setIsEnabled=_useState2[1];var _useState3=(0,react.useState)(false),isCodeScrollable=_useState3[0],setIsCodeScrollable=_useState3[1];var codeBlockRef=(0,react.useRef)(null);var toggle=(0,react.useCallback)(function(){var codeElement=codeBlockRef.current.querySelector('code');if(isEnabled){codeElement.removeAttribute('style');}else{codeElement.style.whiteSpace='pre-wrap';// When code wrap is enabled, we want to avoid a scrollbar in any case
// Ensure that very very long words/strings/tokens still wrap
codeElement.style.overflowWrap='anywhere';}setIsEnabled(function(value){return!value;});},[codeBlockRef,isEnabled]);var updateCodeIsScrollable=(0,react.useCallback)(function(){var _codeBlockRef$current2=codeBlockRef.current,scrollWidth=_codeBlockRef$current2.scrollWidth,clientWidth=_codeBlockRef$current2.clientWidth;var isScrollable=scrollWidth>clientWidth||codeBlockRef.current.querySelector('code').hasAttribute('style');setIsCodeScrollable(isScrollable);},[codeBlockRef]);useTabBecameVisibleCallback(codeBlockRef,updateCodeIsScrollable);(0,react.useEffect)(function(){updateCodeIsScrollable();},[isEnabled,updateCodeIsScrollable]);(0,react.useEffect)(function(){window.addEventListener('resize',updateCodeIsScrollable,{passive:true});return function(){window.removeEventListener('resize',updateCodeIsScrollable);};},[updateCodeIsScrollable]);return{codeBlockRef:codeBlockRef,isEnabled:isEnabled,isCodeScrollable:isCodeScrollable,toggle:toggle};}
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/prism/index.js
var prism = __webpack_require__(87410);
;// CONCATENATED MODULE: ./node_modules/prism-react-renderer/themes/duotoneDark/index.js
// Duotone Dark
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
var theme = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    style: {
      color: "#6c6783"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["tag", "operator", "number"],
    style: {
      color: "#e09142"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#9a86fd"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#eeebff"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#c4b9fe"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "atrule", "placeholder", "variable"],
    style: {
      color: "#ffcc99"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#c4b9fe"
    }
  }]
};

/* harmony default export */ var duotoneDark = (theme);

;// CONCATENATED MODULE: ./node_modules/prism-react-renderer/dist/index.js





var defaultProps = {
  // $FlowFixMe
  Prism: prism/* default */.Z,
  theme: duotoneDark
};

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

var newlineRe = /\r\n|\r|\n/; // Empty lines need to contain a single empty token, denoted with { empty: true }

var normalizeEmptyLines = function (line) {
  if (line.length === 0) {
    line.push({
      types: ["plain"],
      content: "\n",
      empty: true
    });
  } else if (line.length === 1 && line[0].content === "") {
    line[0].content = "\n";
    line[0].empty = true;
  }
};

var appendTypes = function (types, add) {
  var typesSize = types.length;

  if (typesSize > 0 && types[typesSize - 1] === add) {
    return types;
  }

  return types.concat(add);
}; // Takes an array of Prism's tokens and groups them by line, turning plain
// strings into tokens as well. Tokens can become recursive in some cases,
// which means that their types are concatenated. Plain-string tokens however
// are always of type "plain".
// This is not recursive to avoid exceeding the call-stack limit, since it's unclear
// how nested Prism's tokens can become


var normalizeTokens = function (tokens) {
  var typeArrStack = [[]];
  var tokenArrStack = [tokens];
  var tokenArrIndexStack = [0];
  var tokenArrSizeStack = [tokens.length];
  var i = 0;
  var stackIndex = 0;
  var currentLine = [];
  var acc = [currentLine];

  while (stackIndex > -1) {
    while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
      var content = void 0;
      var types = typeArrStack[stackIndex];
      var tokenArr = tokenArrStack[stackIndex];
      var token = tokenArr[i]; // Determine content and append type to types if necessary

      if (typeof token === "string") {
        types = stackIndex > 0 ? types : ["plain"];
        content = token;
      } else {
        types = appendTypes(types, token.type);

        if (token.alias) {
          types = appendTypes(types, token.alias);
        }

        content = token.content;
      } // If token.content is an array, increase the stack depth and repeat this while-loop


      if (typeof content !== "string") {
        stackIndex++;
        typeArrStack.push(types);
        tokenArrStack.push(content);
        tokenArrIndexStack.push(0);
        tokenArrSizeStack.push(content.length);
        continue;
      } // Split by newlines


      var splitByNewlines = content.split(newlineRe);
      var newlineCount = splitByNewlines.length;
      currentLine.push({
        types: types,
        content: splitByNewlines[0]
      }); // Create a new line for each string on a new line

      for (var i$1 = 1; i$1 < newlineCount; i$1++) {
        normalizeEmptyLines(currentLine);
        acc.push(currentLine = []);
        currentLine.push({
          types: types,
          content: splitByNewlines[i$1]
        });
      }
    } // Decreate the stack depth


    stackIndex--;
    typeArrStack.pop();
    tokenArrStack.pop();
    tokenArrIndexStack.pop();
    tokenArrSizeStack.pop();
  }

  normalizeEmptyLines(currentLine);
  return acc;
};

var themeToDict = function (theme, language) {
  var plain = theme.plain; // $FlowFixMe

  var base = Object.create(null);
  var themeDict = theme.styles.reduce(function (acc, themeEntry) {
    var languages = themeEntry.languages;
    var style = themeEntry.style;

    if (languages && !languages.includes(language)) {
      return acc;
    }

    themeEntry.types.forEach(function (type) {
      // $FlowFixMe
      var accStyle = _extends({}, acc[type], style);

      acc[type] = accStyle;
    });
    return acc;
  }, base); // $FlowFixMe

  themeDict.root = plain; // $FlowFixMe

  themeDict.plain = _extends({}, plain, {
    backgroundColor: null
  });
  return themeDict;
};

function objectWithoutProperties(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}

var Highlight = /*@__PURE__*/function (Component) {
  function Highlight() {
    var this$1 = this;
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    Component.apply(this, args);

    _defineProperty(this, "getThemeDict", function (props) {
      if (this$1.themeDict !== undefined && props.theme === this$1.prevTheme && props.language === this$1.prevLanguage) {
        return this$1.themeDict;
      }

      this$1.prevTheme = props.theme;
      this$1.prevLanguage = props.language;
      var themeDict = props.theme ? themeToDict(props.theme, props.language) : undefined;
      return this$1.themeDict = themeDict;
    });

    _defineProperty(this, "getLineProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "line"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token-line",
        style: undefined,
        key: undefined
      });

      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict !== undefined) {
        output.style = themeDict.plain;
      }

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "getStyleForToken", function (ref) {
      var types = ref.types;
      var empty = ref.empty;
      var typesSize = types.length;
      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict === undefined) {
        return undefined;
      } else if (typesSize === 1 && types[0] === "plain") {
        return empty ? {
          display: "inline-block"
        } : undefined;
      } else if (typesSize === 1 && !empty) {
        return themeDict[types[0]];
      }

      var baseStyle = empty ? {
        display: "inline-block"
      } : {}; // $FlowFixMe

      var typeStyles = types.map(function (type) {
        return themeDict[type];
      });
      return Object.assign.apply(Object, [baseStyle].concat(typeStyles));
    });

    _defineProperty(this, "getTokenProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var token = ref.token;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "token"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token " + token.types.join(" "),
        children: token.content,
        style: this$1.getStyleForToken(token),
        key: undefined
      });

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "tokenize", function (Prism, code, grammar, language) {
      var env = {
        code: code,
        grammar: grammar,
        language: language,
        tokens: []
      };
      Prism.hooks.run("before-tokenize", env);
      var tokens = env.tokens = Prism.tokenize(env.code, env.grammar, env.language);
      Prism.hooks.run("after-tokenize", env);
      return tokens;
    });
  }

  if (Component) Highlight.__proto__ = Component;
  Highlight.prototype = Object.create(Component && Component.prototype);
  Highlight.prototype.constructor = Highlight;

  Highlight.prototype.render = function render() {
    var ref = this.props;
    var Prism = ref.Prism;
    var language = ref.language;
    var code = ref.code;
    var children = ref.children;
    var themeDict = this.getThemeDict(this.props);
    var grammar = Prism.languages[language];
    var mixedTokens = grammar !== undefined ? this.tokenize(Prism, code, grammar, language) : [code];
    var tokens = normalizeTokens(mixedTokens);
    return children({
      tokens: tokens,
      className: "prism-code language-" + language,
      style: themeDict !== undefined ? themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps
    });
  };

  return Highlight;
}(react.Component);

/* harmony default export */ var dist = (Highlight);


;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Line/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Line_styles_module = ({"codeLine":"codeLine_lJS_","codeLineNumber":"codeLineNumber_Tfdd","codeLineContent":"codeLineContent_feaV"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Line/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CodeBlockLine(_ref){var line=_ref.line,classNames=_ref.classNames,showLineNumbers=_ref.showLineNumbers,getLineProps=_ref.getLineProps,getTokenProps=_ref.getTokenProps;if(line.length===1&&line[0].content==='\n'){line[0].content='';}var lineProps=getLineProps({line:line,className:(0,clsx_m/* default */.Z)(classNames,showLineNumbers&&Line_styles_module.codeLine)});var lineTokens=line.map(function(token,key){return/*#__PURE__*/react.createElement("span",(0,esm_extends/* default */.Z)({key:key},getTokenProps({token:token,key:key})));});return/*#__PURE__*/react.createElement("span",lineProps,showLineNumbers?/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("span",{className:Line_styles_module.codeLineNumber}),/*#__PURE__*/react.createElement("span",{className:Line_styles_module.codeLineContent},lineTokens)):lineTokens,/*#__PURE__*/react.createElement("br",null));}
;// CONCATENATED MODULE: ./node_modules/copy-text-to-clipboard/index.js
function copyTextToClipboard(input,_temp){var _ref=_temp===void 0?{}:_temp,_ref$target=_ref.target,target=_ref$target===void 0?document.body:_ref$target;var element=document.createElement('textarea');var previouslyFocusedElement=document.activeElement;element.value=input;// Prevent keyboard from showing on mobile
element.setAttribute('readonly','');element.style.contain='strict';element.style.position='absolute';element.style.left='-9999px';element.style.fontSize='12pt';// Prevent zooming on iOS
var selection=document.getSelection();var originalRange=false;if(selection.rangeCount>0){originalRange=selection.getRangeAt(0);}target.append(element);element.select();// Explicit selection workaround for iOS
element.selectionStart=0;element.selectionEnd=input.length;var isSuccess=false;try{isSuccess=document.execCommand('copy');}catch(_unused){}element.remove();if(originalRange){selection.removeAllRanges();selection.addRange(originalRange);}// Get the focus back on the previously focused element, if any
if(previouslyFocusedElement){previouslyFocusedElement.focus();}return isSuccess;}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(95999);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/CopyButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var CopyButton_styles_module = ({"copyButtonCopied":"copyButtonCopied_obH4","copyButtonIcons":"copyButtonIcons_eSgA","copyButtonIcon":"copyButtonIcon_y97N","copyButtonSuccessIcon":"copyButtonSuccessIcon_LjdS"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/CopyButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// @ts-expect-error: TODO, we need to make theme-classic have type: module
function CopyButton(_ref){var code=_ref.code,className=_ref.className;var _useState=(0,react.useState)(false),isCopied=_useState[0],setIsCopied=_useState[1];var copyTimeout=(0,react.useRef)(undefined);var handleCopyCode=(0,react.useCallback)(function(){copyTextToClipboard(code);setIsCopied(true);copyTimeout.current=window.setTimeout(function(){setIsCopied(false);},1000);},[code]);(0,react.useEffect)(function(){return function(){return window.clearTimeout(copyTimeout.current);};},[]);return/*#__PURE__*/react.createElement("button",{type:"button","aria-label":isCopied?(0,Translate/* translate */.I)({id:'theme.CodeBlock.copied',message:'Copied',description:'The copied button label on code blocks'}):(0,Translate/* translate */.I)({id:'theme.CodeBlock.copyButtonAriaLabel',message:'Copy code to clipboard',description:'The ARIA label for copy code blocks button'}),title:(0,Translate/* translate */.I)({id:'theme.CodeBlock.copy',message:'Copy',description:'The copy button label on code blocks'}),className:(0,clsx_m/* default */.Z)('clean-btn',className,CopyButton_styles_module.copyButton,isCopied&&CopyButton_styles_module.copyButtonCopied),onClick:handleCopyCode},/*#__PURE__*/react.createElement("span",{className:CopyButton_styles_module.copyButtonIcons,"aria-hidden":"true"},/*#__PURE__*/react.createElement("svg",{className:CopyButton_styles_module.copyButtonIcon,viewBox:"0 0 24 24"},/*#__PURE__*/react.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),/*#__PURE__*/react.createElement("svg",{className:CopyButton_styles_module.copyButtonSuccessIcon,viewBox:"0 0 24 24"},/*#__PURE__*/react.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/WordWrapButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var WordWrapButton_styles_module = ({"wordWrapButtonIcon":"wordWrapButtonIcon_Bwma","wordWrapButtonEnabled":"wordWrapButtonEnabled_EoeP"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/WordWrapButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function WordWrapButton(_ref){var className=_ref.className,onClick=_ref.onClick,isEnabled=_ref.isEnabled;var title=(0,Translate/* translate */.I)({id:'theme.CodeBlock.wordWrapToggle',message:'Toggle word wrap',description:'The title attribute for toggle word wrapping button of code block lines'});return/*#__PURE__*/react.createElement("button",{type:"button",onClick:onClick,className:(0,clsx_m/* default */.Z)('clean-btn',className,isEnabled&&WordWrapButton_styles_module.wordWrapButtonEnabled),"aria-label":title,title:title},/*#__PURE__*/react.createElement("svg",{className:WordWrapButton_styles_module.wordWrapButtonIcon,viewBox:"0 0 24 24","aria-hidden":"true"},/*#__PURE__*/react.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/String.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CodeBlockString(_ref){var _ref2;var children=_ref.children,_ref$className=_ref.className,blockClassName=_ref$className===void 0?'':_ref$className,metastring=_ref.metastring,titleProp=_ref.title,showLineNumbersProp=_ref.showLineNumbers,languageProp=_ref.language;var _useThemeConfig=(0,useThemeConfig/* useThemeConfig */.L)(),_useThemeConfig$prism=_useThemeConfig.prism,defaultLanguage=_useThemeConfig$prism.defaultLanguage,magicComments=_useThemeConfig$prism.magicComments;var language=(_ref2=languageProp!=null?languageProp:parseLanguage(blockClassName))!=null?_ref2:defaultLanguage;var prismTheme=usePrismTheme();var wordWrap=useCodeWordWrap();// We still parse the metastring in case we want to support more syntax in the
// future. Note that MDX doesn't strip quotes when parsing metastring:
// "title=\"xyz\"" => title: "\"xyz\""
var title=parseCodeBlockTitle(metastring)||titleProp;var _parseLines=parseLines(children,{metastring:metastring,language:language,magicComments:magicComments}),lineClassNames=_parseLines.lineClassNames,code=_parseLines.code;var showLineNumbers=showLineNumbersProp!=null?showLineNumbersProp:containsLineNumbers(metastring);return/*#__PURE__*/react.createElement(CodeBlockContainer,{as:"div",className:(0,clsx_m/* default */.Z)(blockClassName,language&&!blockClassName.includes("language-"+language)&&"language-"+language)},title&&/*#__PURE__*/react.createElement("div",{className:Content_styles_module.codeBlockTitle},title),/*#__PURE__*/react.createElement("div",{className:Content_styles_module.codeBlockContent},/*#__PURE__*/react.createElement(dist,(0,esm_extends/* default */.Z)({},defaultProps,{theme:prismTheme,code:code,language:language!=null?language:'text'}),function(_ref3){var className=_ref3.className,tokens=_ref3.tokens,getLineProps=_ref3.getLineProps,getTokenProps=_ref3.getTokenProps;return/*#__PURE__*/react.createElement("pre",{/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */tabIndex:0,ref:wordWrap.codeBlockRef,className:(0,clsx_m/* default */.Z)(className,Content_styles_module.codeBlock,'thin-scrollbar')},/*#__PURE__*/react.createElement("code",{className:(0,clsx_m/* default */.Z)(Content_styles_module.codeBlockLines,showLineNumbers&&Content_styles_module.codeBlockLinesWithNumbering)},tokens.map(function(line,i){return/*#__PURE__*/react.createElement(CodeBlockLine,{key:i,line:line,getLineProps:getLineProps,getTokenProps:getTokenProps,classNames:lineClassNames[i],showLineNumbers:showLineNumbers});})));}),/*#__PURE__*/react.createElement("div",{className:Content_styles_module.buttonGroup},(wordWrap.isEnabled||wordWrap.isCodeScrollable)&&/*#__PURE__*/react.createElement(WordWrapButton,{className:Content_styles_module.codeButton,onClick:function onClick(){return wordWrap.toggle();},isEnabled:wordWrap.isEnabled}),/*#__PURE__*/react.createElement(CopyButton,{className:Content_styles_module.codeButton,code:code}))));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/index.js
var CodeBlock_excluded=["children"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Best attempt to make the children a plain string so it is copyable. If there
 * are react elements, we will not be able to copy the content, and it will
 * return `children` as-is; otherwise, it concatenates the string children
 * together.
 */function maybeStringifyChildren(children){if(react.Children.toArray(children).some(function(el){return/*#__PURE__*/(0,react.isValidElement)(el);})){return children;}// The children is now guaranteed to be one/more plain strings
return Array.isArray(children)?children.join(''):children;}function CodeBlock(_ref){var rawChildren=_ref.children,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,CodeBlock_excluded);// The Prism theme on SSR is always the default theme but the site theme can
// be in a different mode. React hydration doesn't update DOM styles that come
// from SSR. Hence force a re-render after mounting to apply the current
// relevant styles.
var isBrowser=(0,useIsBrowser/* default */.Z)();var children=maybeStringifyChildren(rawChildren);var CodeBlockComp=typeof children==='string'?CodeBlockString:CodeBlockJSX;return/*#__PURE__*/react.createElement(CodeBlockComp,(0,esm_extends/* default */.Z)({key:String(isBrowser)},props),children);}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Code.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXCode(props){var inlineElements=['a','abbr','b','br','button','cite','code','del','dfn','em','i','img','input','ins','kbd','label','object','output','q','ruby','s','small','span','strong','sub','sup','time','u','var','wbr'];var shouldBeInline=react.Children.toArray(props.children).every(function(el){var _el$props;return typeof el==='string'&&!el.includes('\n')||/*#__PURE__*/(0,react.isValidElement)(el)&&inlineElements.includes((_el$props=el.props)==null?void 0:_el$props.mdxType);});return shouldBeInline?/*#__PURE__*/react.createElement("code",props):/*#__PURE__*/react.createElement(CodeBlock,props);}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(39960);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/A.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXA(props){return/*#__PURE__*/react.createElement(Link/* default */.Z,props);}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Pre.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXPre(props){var _props$children$props;return/*#__PURE__*/react.createElement(CodeBlock// If this pre is created by a ``` fenced codeblock, unwrap the children
,/*#__PURE__*/(0,react.isValidElement)(props.children)&&((_props$children$props=props.children.props)==null?void 0:_props$children$props.originalType)==='code'?props.children.props:Object.assign({},props));}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure " + obj);
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(86043);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Details/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Details_styles_module = ({"details":"details_lb9f","isBrowser":"isBrowser_bmU9","collapsibleContent":"collapsibleContent_i85q"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Details/index.js
var Details_excluded=["summary","children"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function isInSummary(node){if(!node){return false;}return node.tagName==='SUMMARY'||isInSummary(node.parentElement);}function hasParent(node,parent){if(!node){return false;}return node===parent||hasParent(node.parentElement,parent);}/**
 * A mostly un-styled `<details>` element with smooth collapsing. Provides some
 * very lightweight styles, but you should bring your UI.
 */function Details(_ref){var summary=_ref.summary,children=_ref.children,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,Details_excluded);var isBrowser=(0,useIsBrowser/* default */.Z)();var detailsRef=(0,react.useRef)(null);var _useCollapsible=(0,Collapsible/* useCollapsible */.u)({initialState:!props.open}),collapsed=_useCollapsible.collapsed,setCollapsed=_useCollapsible.setCollapsed;// Use a separate state for the actual details prop, because it must be set
// only after animation completes, otherwise close animations won't work
var _useState=(0,react.useState)(props.open),open=_useState[0],setOpen=_useState[1];return/*#__PURE__*/ (// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
react.createElement("details",(0,esm_extends/* default */.Z)({},props,{ref:detailsRef,open:open,"data-collapsed":collapsed,className:(0,clsx_m/* default */.Z)(Details_styles_module.details,isBrowser&&Details_styles_module.isBrowser,props.className),onMouseDown:function onMouseDown(e){var target=e.target;// Prevent a double-click to highlight summary text
if(isInSummary(target)&&e.detail>1){e.preventDefault();}},onClick:function onClick(e){e.stopPropagation();// For isolation of multiple nested details/summary
var target=e.target;var shouldToggle=isInSummary(target)&&hasParent(target,detailsRef.current);if(!shouldToggle){return;}e.preventDefault();if(collapsed){setCollapsed(false);setOpen(true);}else{setCollapsed(true);// Don't do this, it breaks close animation!
// setOpen(false);
}}}),summary!=null?summary:/*#__PURE__*/react.createElement("summary",null,"Details"),/*#__PURE__*/react.createElement(Collapsible/* Collapsible */.z,{lazy:false// Content might matter for SEO in this case
,collapsed:collapsed,disableSSRStyle:true// Allows component to work fine even with JS disabled!
,onCollapseTransitionEnd:function onCollapseTransitionEnd(newCollapsed){setCollapsed(newCollapsed);setOpen(!newCollapsed);}},/*#__PURE__*/react.createElement("div",{className:Details_styles_module.collapsibleContent},children))));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var theme_Details_styles_module = ({"details":"details_b_Ee"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Should we have a custom details/summary comp in Infima instead of reusing
// alert classes?
var InfimaClasses='alert alert--info';function Details_Details(_ref){var props=Object.assign({},(_objectDestructuringEmpty(_ref),_ref));return/*#__PURE__*/react.createElement(Details,(0,esm_extends/* default */.Z)({},props,{className:(0,clsx_m/* default */.Z)(InfimaClasses,theme_Details_styles_module.details,props.className)}));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Details.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXDetails(props){var items=react.Children.toArray(props.children);// Split summary item from the rest to pass it as a separate prop to the
// Details theme component
var summary=items.find(function(item){var _item$props;return/*#__PURE__*/react.isValidElement(item)&&((_item$props=item.props)==null?void 0:_item$props.mdxType)==='summary';});var children=/*#__PURE__*/react.createElement(react.Fragment,null,items.filter(function(item){return item!==summary;}));return/*#__PURE__*/react.createElement(Details_Details,(0,esm_extends/* default */.Z)({},props,{summary:summary}),children);}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(10235);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Heading.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXHeading(props){return/*#__PURE__*/react.createElement(Heading/* default */.Z,props);}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Ul/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Ul_styles_module = ({"containsTaskList":"containsTaskList_mC6p"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Ul/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function transformUlClassName(className){return (0,clsx_m/* default */.Z)(className,// This class is set globally by GitHub/MDX. We keep the global class, and
// add another class to get a task list without the default ul styling
// See https://github.com/syntax-tree/mdast-util-to-hast/issues/28
(className==null?void 0:className.includes('contains-task-list'))&&Ul_styles_module.containsTaskList);}function MDXUl(props){return/*#__PURE__*/react.createElement("ul",(0,esm_extends/* default */.Z)({},props,{className:transformUlClassName(props.className)}));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Img/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Img_styles_module = ({"img":"img_ev3q"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Img/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function transformImgClassName(className){return (0,clsx_m/* default */.Z)(className,Img_styles_module.img);}function MDXImg(props){return/*#__PURE__*/ (// eslint-disable-next-line jsx-a11y/alt-text
react.createElement("img",(0,esm_extends/* default */.Z)({loading:"lazy"},props,{className:transformImgClassName(props.className)})));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Admonition_styles_module = ({"admonition":"admonition_LlT9","admonitionHeading":"admonitionHeading_tbUL","admonitionIcon":"admonitionIcon_kALy","admonitionContent":"admonitionContent_S0QG"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NoteIcon(){return/*#__PURE__*/react.createElement("svg",{viewBox:"0 0 14 16"},/*#__PURE__*/react.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));}function TipIcon(){return/*#__PURE__*/react.createElement("svg",{viewBox:"0 0 12 16"},/*#__PURE__*/react.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));}function DangerIcon(){return/*#__PURE__*/react.createElement("svg",{viewBox:"0 0 12 16"},/*#__PURE__*/react.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}));}function InfoIcon(){return/*#__PURE__*/react.createElement("svg",{viewBox:"0 0 14 16"},/*#__PURE__*/react.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));}function CautionIcon(){return/*#__PURE__*/react.createElement("svg",{viewBox:"0 0 16 16"},/*#__PURE__*/react.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));}// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
var AdmonitionConfigs={note:{infimaClassName:'secondary',iconComponent:NoteIcon,label:/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:'success',iconComponent:TipIcon,label:/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:'danger',iconComponent:DangerIcon,label:/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:'info',iconComponent:InfoIcon,label:/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:'warning',iconComponent:CautionIcon,label:/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}};// Legacy aliases, undocumented but kept for retro-compatibility
var aliases={secondary:'note',important:'info',success:'tip',warning:'danger'};function getAdmonitionConfig(unsafeType){var _aliases$unsafeType;var type=(_aliases$unsafeType=aliases[unsafeType])!=null?_aliases$unsafeType:unsafeType;var config=AdmonitionConfigs[type];if(config){return config;}console.warn("No admonition config found for admonition type \""+type+"\". Using Info as fallback.");return AdmonitionConfigs.info;}// Workaround because it's difficult in MDX v1 to provide a MDX title as props
// See https://github.com/facebook/docusaurus/pull/7152#issuecomment-1145779682
function extractMDXAdmonitionTitle(children){var items=react.Children.toArray(children);var mdxAdmonitionTitle=items.find(function(item){var _item$props;return/*#__PURE__*/react.isValidElement(item)&&((_item$props=item.props)==null?void 0:_item$props.mdxType)==='mdxAdmonitionTitle';});var rest=/*#__PURE__*/react.createElement(react.Fragment,null,items.filter(function(item){return item!==mdxAdmonitionTitle;}));return{mdxAdmonitionTitle:mdxAdmonitionTitle,rest:rest};}function processAdmonitionProps(props){var _props$title;var _extractMDXAdmonition=extractMDXAdmonitionTitle(props.children),mdxAdmonitionTitle=_extractMDXAdmonition.mdxAdmonitionTitle,rest=_extractMDXAdmonition.rest;return Object.assign({},props,{title:(_props$title=props.title)!=null?_props$title:mdxAdmonitionTitle,children:rest});}function Admonition(props){var _processAdmonitionPro=processAdmonitionProps(props),children=_processAdmonitionPro.children,type=_processAdmonitionPro.type,title=_processAdmonitionPro.title,iconProp=_processAdmonitionPro.icon;var typeConfig=getAdmonitionConfig(type);var titleLabel=title!=null?title:typeConfig.label;var IconComponent=typeConfig.iconComponent;var icon=iconProp!=null?iconProp:/*#__PURE__*/react.createElement(IconComponent,null);return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.common.admonition */.k.common.admonition,ThemeClassNames/* ThemeClassNames.common.admonitionType */.k.common.admonitionType(props.type),'alert',"alert--"+typeConfig.infimaClassName,Admonition_styles_module.admonition)},/*#__PURE__*/react.createElement("div",{className:Admonition_styles_module.admonitionHeading},/*#__PURE__*/react.createElement("span",{className:Admonition_styles_module.admonitionIcon},icon),titleLabel),/*#__PURE__*/react.createElement("div",{className:Admonition_styles_module.admonitionContent},children));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Noop.js
var Noop = __webpack_require__(11875);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MDXComponents={head:MDXHead,code:MDXCode,a:MDXA,pre:MDXPre,details:MDXDetails,ul:MDXUl,img:MDXImg,h1:function h1(props){return/*#__PURE__*/react.createElement(MDXHeading,(0,esm_extends/* default */.Z)({as:"h1"},props));},h2:function h2(props){return/*#__PURE__*/react.createElement(MDXHeading,(0,esm_extends/* default */.Z)({as:"h2"},props));},h3:function h3(props){return/*#__PURE__*/react.createElement(MDXHeading,(0,esm_extends/* default */.Z)({as:"h3"},props));},h4:function h4(props){return/*#__PURE__*/react.createElement(MDXHeading,(0,esm_extends/* default */.Z)({as:"h4"},props));},h5:function h5(props){return/*#__PURE__*/react.createElement(MDXHeading,(0,esm_extends/* default */.Z)({as:"h5"},props));},h6:function h6(props){return/*#__PURE__*/react.createElement(MDXHeading,(0,esm_extends/* default */.Z)({as:"h6"},props));},admonition:Admonition,mermaid:Noop/* default */.Z};/* harmony default export */ var theme_MDXComponents = (MDXComponents);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXContent/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXContent(_ref){var children=_ref.children;return/*#__PURE__*/react.createElement(esm/* MDXProvider */.Zo,{components:theme_MDXComponents},children);}

/***/ }),

/***/ 87594:
/***/ (function(module, exports) {

/**
 * @param {string} string    The string to parse
 * @returns {Array<number>}  Returns an energetic array.
 */
function parsePart(string) {
  let res = [];
  let m;

  for (let str of string.split(",").map((str) => str.trim())) {
    // just a number
    if (/^-?\d+$/.test(str)) {
      res.push(parseInt(str, 10));
    } else if (
      (m = str.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))
    ) {
      // 1-5 or 1..5 (equivalent) or 1...5 (doesn't include 5)
      let [_, lhs, sep, rhs] = m;

      if (lhs && rhs) {
        lhs = parseInt(lhs);
        rhs = parseInt(rhs);
        const incr = lhs < rhs ? 1 : -1;

        // Make it inclusive by moving the right 'stop-point' away by one.
        if (sep === "-" || sep === ".." || sep === "\u2025") rhs += incr;

        for (let i = lhs; i !== rhs; i += incr) res.push(i);
      }
    }
  }

  return res;
}

exports["default"] = parsePart;
module.exports = parsePart;


/***/ })

}]);