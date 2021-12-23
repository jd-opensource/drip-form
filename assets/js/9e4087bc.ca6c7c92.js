"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[3608],{

/***/ 56876:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BlogArchive; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27378);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99319);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81884);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99213);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Year(_ref){var year=_ref.year,posts=_ref.posts;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",null,year),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",null,posts.map(function(post){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{key:post.metadata.date},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{to:post.metadata.permalink},post.metadata.formattedDate," - ",post.metadata.title));})));}function YearsSection(_ref2){var years=_ref2.years;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{className:"margin-vert--lg"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"row"},years.map(function(_props,idx){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{key:idx,className:"col col--4 margin-vert--lg"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Year,_props));}))));}function listPostsByYears(blogPosts){var postsByYear=blogPosts.reduceRight(function(posts,post){var year=post.metadata.date.split('-')[0];var yearPosts=posts.get(year)||[];return posts.set(year,[post].concat(yearPosts));},new Map());return Array.from(postsByYear,function(_ref3){var year=_ref3[0],posts=_ref3[1];return{year:year,posts:posts};});}function BlogArchive(_ref4){var archive=_ref4.archive;var title=(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* .translate */ .I)({id:'theme.blog.archive.title',message:'Archive',description:'The page & hero title of the blog archive page'});var description=(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* .translate */ .I)({id:'theme.blog.archive.description',message:'Archive',description:'The page & hero description of the blog archive page'});var years=listPostsByYears(archive.blogPosts);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{title:title,description:description},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header",{className:"hero hero--primary"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",{className:"hero__title"},title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"hero__subtitle"},description))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",null,years.length>0&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(YearsSection,{years:years})));}

/***/ })

}]);