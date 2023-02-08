"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[3089],{

/***/ 80046:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BlogListPage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27378);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86010);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52263);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1944);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35281);
/* harmony import */ var _theme_BlogLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82747);
/* harmony import */ var _theme_BlogListPaginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99703);
/* harmony import */ var _theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90197);
/* harmony import */ var _theme_BlogPostItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79985);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogListPageMetadata(props){var metadata=props.metadata;var _useDocusaurusContext=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(),siteTitle=_useDocusaurusContext.siteConfig.title;var blogDescription=metadata.blogDescription,blogTitle=metadata.blogTitle,permalink=metadata.permalink;var isBlogOnlyMode=permalink==='/';var title=isBlogOnlyMode?siteTitle:blogTitle;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__/* .PageMetadata */ .d,{title:title,description:blogDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{tag:"blog_posts_list"}));}function BlogListPageContent(props){var metadata=props.metadata,items=props.items,sidebar=props.sidebar;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_BlogLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{sidebar:sidebar},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_BlogPostItems__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{items:items}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_BlogListPaginator__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{metadata:metadata}));}function BlogListPage(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__/* .HtmlClassNameProvider */ .FG,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__/* .ThemeClassNames.wrapper.blogPages */ .k.wrapper.blogPages,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__/* .ThemeClassNames.page.blogListPage */ .k.page.blogListPage)},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BlogListPageMetadata,props),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BlogListPageContent,props));}

/***/ }),

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

/***/ })

}]);