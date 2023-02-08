"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[8610],{

/***/ 99703:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ BlogListPaginator; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27378);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95999);
/* harmony import */ var _theme_PaginatorNavLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32244);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogListPaginator(props){var metadata=props.metadata;var previousPage=metadata.previousPage,nextPage=metadata.nextPage;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav",{className:"pagination-nav","aria-label":(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .I)({id:'theme.blog.paginator.navAriaLabel',message:'Blog list page navigation',description:'The ARIA label for the blog pagination'})},previousPage&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_PaginatorNavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{permalink:previousPage,title:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),nextPage&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_PaginatorNavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{permalink:nextPage,title:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:true}));}

/***/ }),

/***/ 79985:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ BlogPostItems; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27378);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9460);
/* harmony import */ var _theme_BlogPostItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11945);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItems(_ref){var items=_ref.items,_ref$component=_ref.component,BlogPostItemComponent=_ref$component===void 0?_theme_BlogPostItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z:_ref$component;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,items.map(function(_ref2){var BlogPostContent=_ref2.content;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__/* .BlogPostProvider */ .n,{key:BlogPostContent.metadata.permalink,content:BlogPostContent},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BlogPostItemComponent,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BlogPostContent,null)));}));}

/***/ }),

/***/ 41714:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BlogTagsPostsPage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27378);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(86010);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95999);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88824);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1944);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35281);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39960);
/* harmony import */ var _theme_BlogLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82747);
/* harmony import */ var _theme_BlogListPaginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99703);
/* harmony import */ var _theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90197);
/* harmony import */ var _theme_BlogPostItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79985);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Very simple pluralization: probably good enough for now
function useBlogPostsPlural(){var _usePluralForm=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__/* .usePluralForm */ .c)(),selectMessage=_usePluralForm.selectMessage;return function(count){return selectMessage(count,(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .I)({id:'theme.blog.post.plurals',description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:'One post|{count} posts'},{count:count}));};}function useBlogTagsPostsPageTitle(tag){var blogPostsPlural=useBlogPostsPlural();return (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .I)({id:'theme.blog.tagTitle',description:'The title of the page for a blog tag',message:'{nPosts} tagged with "{tagName}"'},{nPosts:blogPostsPlural(tag.count),tagName:tag.label});}function BlogTagsPostsPageMetadata(_ref){var tag=_ref.tag;var title=useBlogTagsPostsPageTitle(tag);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__/* .PageMetadata */ .d,{title:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{tag:"blog_tags_posts"}));}function BlogTagsPostsPageContent(_ref2){var tag=_ref2.tag,items=_ref2.items,sidebar=_ref2.sidebar,listMetadata=_ref2.listMetadata;var title=useBlogTagsPostsPageTitle(tag);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_BlogLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{sidebar:sidebar},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header",{className:"margin-bottom--xl"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{href:tag.allTagsPath},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_BlogPostItems__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{items:items}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_BlogListPaginator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{metadata:listMetadata}));}function BlogTagsPostsPage(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__/* .HtmlClassNameProvider */ .FG,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_10__/* .ThemeClassNames.wrapper.blogPages */ .k.wrapper.blogPages,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_10__/* .ThemeClassNames.page.blogTagPostListPage */ .k.page.blogTagPostListPage)},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BlogTagsPostsPageMetadata,props),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BlogTagsPostsPageContent,props));}

/***/ })

}]);