"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[4013],{

/***/ 5114:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ theme_BlogLayout; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(3366);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Layout/index.js + 22 modules
var Layout = __webpack_require__(6751);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(9960);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogSidebar/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"sidebar":"sidebar_q+wC","sidebarItemTitle":"sidebarItemTitle_9G5K","sidebarItemList":"sidebarItemList_6T4b","sidebarItem":"sidebarItem_cjdF","sidebarItemLink":"sidebarItemLink_zyXk","sidebarItemLinkActive":"sidebarItemLinkActive_wcJs"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(5999);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogSidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogSidebar(_ref){var sidebar=_ref.sidebar;if(sidebar.items.length===0){return null;}return/*#__PURE__*/react.createElement("nav",{className:(0,clsx_m/* default */.Z)(styles_module.sidebar,'thin-scrollbar'),"aria-label":(0,Translate/* translate */.I)({id:'theme.blog.sidebar.navAriaLabel',message:'Blog recent posts navigation',description:'The ARIA label for recent posts in the blog sidebar'})},/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(styles_module.sidebarItemTitle,'margin-bottom--md')},sidebar.title),/*#__PURE__*/react.createElement("ul",{className:styles_module.sidebarItemList},sidebar.items.map(function(item){return/*#__PURE__*/react.createElement("li",{key:item.permalink,className:styles_module.sidebarItem},/*#__PURE__*/react.createElement(Link/* default */.Z,{isNavLink:true,to:item.permalink,className:styles_module.sidebarItemLink,activeClassName:styles_module.sidebarItemLinkActive},item.title));})));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogLayout/index.js
var _excluded=["sidebar","toc","children"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogLayout(props){var sidebar=props.sidebar,toc=props.toc,children=props.children,layoutProps=(0,objectWithoutPropertiesLoose/* default */.Z)(props,_excluded);var hasSidebar=sidebar&&sidebar.items.length>0;return/*#__PURE__*/react.createElement(Layout/* default */.Z,layoutProps,/*#__PURE__*/react.createElement("div",{className:"container margin-vert--lg"},/*#__PURE__*/react.createElement("div",{className:"row"},hasSidebar&&/*#__PURE__*/react.createElement("aside",{className:"col col--3"},/*#__PURE__*/react.createElement(BlogSidebar,{sidebar:sidebar})),/*#__PURE__*/react.createElement("main",{className:(0,clsx_m/* default */.Z)('col',{'col--7':hasSidebar,'col--9 col--offset-1':!hasSidebar}),itemScope:true,itemType:"http://schema.org/Blog"},children),toc&&/*#__PURE__*/react.createElement("div",{className:"col col--2"},toc))));}/* harmony default export */ var theme_BlogLayout = (BlogLayout);

/***/ }),

/***/ 5809:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ theme_BlogTagsListPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogLayout/index.js + 2 modules
var BlogLayout = __webpack_require__(5114);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Tag/index.js + 1 modules
var Tag = __webpack_require__(1854);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js + 28 modules
var lib = __webpack_require__(1994);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TagsListByLetter/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"tag":"tag_7kA+"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TagsListByLetter/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TagLetterEntryItem(_ref){var letterEntry=_ref.letterEntry;return/*#__PURE__*/react.createElement("article",null,/*#__PURE__*/react.createElement("h2",null,letterEntry.letter),/*#__PURE__*/react.createElement("ul",{className:"padding--none"},letterEntry.tags.map(function(tag){return/*#__PURE__*/react.createElement("li",{key:tag.permalink,className:styles_module.tag},/*#__PURE__*/react.createElement(Tag/* default */.Z,tag));})),/*#__PURE__*/react.createElement("hr",null));}function TagsListByLetter(_ref2){var tags=_ref2.tags;var letterList=(0,lib/* listTagsByLetters */.PZ)(tags);return/*#__PURE__*/react.createElement("section",{className:"margin-vert--lg"},letterList.map(function(letterEntry){return/*#__PURE__*/react.createElement(TagLetterEntryItem,{key:letterEntry.letter,letterEntry:letterEntry});}));}/* harmony default export */ var theme_TagsListByLetter = (TagsListByLetter);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogTagsListPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogTagsListPage(props){var tags=props.tags,sidebar=props.sidebar;var title=(0,lib/* translateTagsPageTitle */.MA)();return/*#__PURE__*/react.createElement(BlogLayout/* default */.Z,{title:title,wrapperClassName:lib/* ThemeClassNames.wrapper.blogPages */.kM.wrapper.blogPages,pageClassName:lib/* ThemeClassNames.page.blogTagsListPage */.kM.page.blogTagsListPage,searchMetadatas:{// assign unique search tag to exclude this page from search results!
tag:'blog_tags_list'},sidebar:sidebar},/*#__PURE__*/react.createElement("h1",null,title),/*#__PURE__*/react.createElement(theme_TagsListByLetter,{tags:Object.values(tags)}));}/* harmony default export */ var theme_BlogTagsListPage = (BlogTagsListPage);

/***/ }),

/***/ 1854:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ theme_Tag; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(9960);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Tag/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"tag":"tag_WK-t","tagRegular":"tagRegular_LXbV","tagWithCount":"tagWithCount_S5Zl"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Tag/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Tag(props){var _clsx;var permalink=props.permalink,name=props.name,count=props.count;return/*#__PURE__*/react.createElement(Link/* default */.Z,{href:permalink,className:(0,clsx_m/* default */.Z)(styles_module.tag,(_clsx={},_clsx[styles_module.tagRegular]=!count,_clsx[styles_module.tagWithCount]=count,_clsx))},name,count&&/*#__PURE__*/react.createElement("span",null,count));}/* harmony default export */ var theme_Tag = (Tag);

/***/ })

}]);