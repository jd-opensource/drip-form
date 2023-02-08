"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[4013],{

/***/ 82747:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ BlogLayout; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(27378);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 63 modules
var Layout = __webpack_require__(4416);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(87524);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(39960);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(95999);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogSidebar/Desktop/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"sidebar":"sidebar_re4s","sidebarItemTitle":"sidebarItemTitle_pO2u","sidebarItemList":"sidebarItemList_Yudw","sidebarItem":"sidebarItem__DBe","sidebarItemLink":"sidebarItemLink_mo7H","sidebarItemLinkActive":"sidebarItemLinkActive_I1ZP"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogSidebar/Desktop/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogSidebarDesktop(_ref){var sidebar=_ref.sidebar;return/*#__PURE__*/react.createElement("aside",{className:"col col--3"},/*#__PURE__*/react.createElement("nav",{className:(0,clsx_m/* default */.Z)(styles_module.sidebar,'thin-scrollbar'),"aria-label":(0,Translate/* translate */.I)({id:'theme.blog.sidebar.navAriaLabel',message:'Blog recent posts navigation',description:'The ARIA label for recent posts in the blog sidebar'})},/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(styles_module.sidebarItemTitle,'margin-bottom--md')},sidebar.title),/*#__PURE__*/react.createElement("ul",{className:(0,clsx_m/* default */.Z)(styles_module.sidebarItemList,'clean-list')},sidebar.items.map(function(item){return/*#__PURE__*/react.createElement("li",{key:item.permalink,className:styles_module.sidebarItem},/*#__PURE__*/react.createElement(Link/* default */.Z,{isNavLink:true,to:item.permalink,className:styles_module.sidebarItemLink,activeClassName:styles_module.sidebarItemLinkActive},item.title));}))));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarSecondaryMenu/content.js
var content = __webpack_require__(13102);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogSidebar/Mobile/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogSidebarMobileSecondaryMenu(_ref){var sidebar=_ref.sidebar;return/*#__PURE__*/react.createElement("ul",{className:"menu__list"},sidebar.items.map(function(item){return/*#__PURE__*/react.createElement("li",{key:item.permalink,className:"menu__list-item"},/*#__PURE__*/react.createElement(Link/* default */.Z,{isNavLink:true,to:item.permalink,className:"menu__link",activeClassName:"menu__link--active"},item.title));}));}function BlogSidebarMobile(props){return/*#__PURE__*/react.createElement(content/* NavbarSecondaryMenuFiller */.Zo,{component:BlogSidebarMobileSecondaryMenu,props:props});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogSidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogSidebar(_ref){var sidebar=_ref.sidebar;var windowSize=(0,useWindowSize/* useWindowSize */.i)();if(!(sidebar!=null&&sidebar.items.length)){return null;}// Mobile sidebar doesn't need to be server-rendered
if(windowSize==='mobile'){return/*#__PURE__*/react.createElement(BlogSidebarMobile,{sidebar:sidebar});}return/*#__PURE__*/react.createElement(BlogSidebarDesktop,{sidebar:sidebar});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogLayout/index.js
var _excluded=["sidebar","toc","children"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogLayout(props){var sidebar=props.sidebar,toc=props.toc,children=props.children,layoutProps=(0,objectWithoutPropertiesLoose/* default */.Z)(props,_excluded);var hasSidebar=sidebar&&sidebar.items.length>0;return/*#__PURE__*/react.createElement(Layout/* default */.Z,layoutProps,/*#__PURE__*/react.createElement("div",{className:"container margin-vert--lg"},/*#__PURE__*/react.createElement("div",{className:"row"},/*#__PURE__*/react.createElement(BlogSidebar,{sidebar:sidebar}),/*#__PURE__*/react.createElement("main",{className:(0,clsx_m/* default */.Z)('col',{'col--7':hasSidebar,'col--9 col--offset-1':!hasSidebar}),itemScope:true,itemType:"http://schema.org/Blog"},children),toc&&/*#__PURE__*/react.createElement("div",{className:"col col--2"},toc))));}

/***/ }),

/***/ 65730:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ BlogTagsListPage; }
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(27378);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(95999);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tagsUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var translateTagsPageTitle=function translateTagsPageTitle(){return (0,Translate/* translate */.I)({id:'theme.tags.tagsPageTitle',message:'Tags',description:'The title of the tag list page'});};function getTagLetter(tag){return tag[0].toUpperCase();}/**
 * Takes a list of tags (as provided by the content plugins), and groups them by
 * their initials.
 */function listTagsByLetters(tags){var groups={};Object.values(tags).forEach(function(tag){var _groups$initial;var initial=getTagLetter(tag.label);(_groups$initial=groups[initial])!=null?_groups$initial:groups[initial]=[];groups[initial].push(tag);});return Object.entries(groups)// Sort letters
.sort(function(_ref,_ref2){var letter1=_ref[0];var letter2=_ref2[0];return letter1.localeCompare(letter2);}).map(function(_ref3){var letter=_ref3[0],letterTags=_ref3[1];// Sort tags inside a letter
var sortedTags=letterTags.sort(function(tag1,tag2){return tag1.label.localeCompare(tag2.label);});return{letter:letter,tags:sortedTags};});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__(1944);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(35281);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogLayout/index.js + 4 modules
var BlogLayout = __webpack_require__(82747);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js + 1 modules
var Tag = __webpack_require__(60231);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListByLetter/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"tag":"tag_Nnez"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListByLetter/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TagLetterEntryItem(_ref){var letterEntry=_ref.letterEntry;return/*#__PURE__*/react.createElement("article",null,/*#__PURE__*/react.createElement("h2",null,letterEntry.letter),/*#__PURE__*/react.createElement("ul",{className:"padding--none"},letterEntry.tags.map(function(tag){return/*#__PURE__*/react.createElement("li",{key:tag.permalink,className:styles_module.tag},/*#__PURE__*/react.createElement(Tag/* default */.Z,tag));})),/*#__PURE__*/react.createElement("hr",null));}function TagsListByLetter(_ref2){var tags=_ref2.tags;var letterList=listTagsByLetters(tags);return/*#__PURE__*/react.createElement("section",{className:"margin-vert--lg"},letterList.map(function(letterEntry){return/*#__PURE__*/react.createElement(TagLetterEntryItem,{key:letterEntry.letter,letterEntry:letterEntry});}));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__(90197);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogTagsListPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogTagsListPage(_ref){var tags=_ref.tags,sidebar=_ref.sidebar;var title=translateTagsPageTitle();return/*#__PURE__*/react.createElement(metadataUtils/* HtmlClassNameProvider */.FG,{className:(0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.wrapper.blogPages */.k.wrapper.blogPages,ThemeClassNames/* ThemeClassNames.page.blogTagsListPage */.k.page.blogTagsListPage)},/*#__PURE__*/react.createElement(metadataUtils/* PageMetadata */.d,{title:title}),/*#__PURE__*/react.createElement(SearchMetadata/* default */.Z,{tag:"blog_tags_list"}),/*#__PURE__*/react.createElement(BlogLayout/* default */.Z,{sidebar:sidebar},/*#__PURE__*/react.createElement("h1",null,title),/*#__PURE__*/react.createElement(TagsListByLetter,{tags:tags})));}

/***/ }),

/***/ 60231:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Tag; }
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(27378);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(39960);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"tag":"tag_zVej","tagRegular":"tagRegular_sFm0","tagWithCount":"tagWithCount_h2kH"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Tag(_ref){var permalink=_ref.permalink,label=_ref.label,count=_ref.count;return/*#__PURE__*/react.createElement(Link/* default */.Z,{href:permalink,className:(0,clsx_m/* default */.Z)(styles_module.tag,count?styles_module.tagWithCount:styles_module.tagRegular)},label,count&&/*#__PURE__*/react.createElement("span",null,count));}

/***/ })

}]);