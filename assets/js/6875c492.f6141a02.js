"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[8610],{

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

/***/ 3480:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ theme_BlogPostItem; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(3905);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(5999);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(9960);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(4996);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js + 28 modules
var lib = __webpack_require__(1994);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/MDXComponents/index.js + 9 modules
var MDXComponents = __webpack_require__(1923);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/EditThisPage/index.js + 2 modules
var EditThisPage = __webpack_require__(6645);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogPostItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"blogPostTitle":"blogPostTitle_d4p0","blogPostData":"blogPostData_-Im+","blogPostDetailsFull":"blogPostDetailsFull_xD8n"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TagsListInline/index.js + 1 modules
var TagsListInline = __webpack_require__(9261);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogPostAuthor/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var BlogPostAuthor_styles_module = ({"image":"image_9q7L"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogPostAuthor/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostAuthor(_ref){var author=_ref.author;var name=author.name,title=author.title,url=author.url,imageURL=author.imageURL;return/*#__PURE__*/react.createElement("div",{className:"avatar margin-bottom--sm"},imageURL&&/*#__PURE__*/react.createElement(Link/* default */.Z,{className:"avatar__photo-link avatar__photo",href:url},/*#__PURE__*/react.createElement("img",{className:BlogPostAuthor_styles_module.image,src:imageURL,alt:name})),// Note: only legacy author frontmatter allow empty name (not frontMatter.authors)
name&&/*#__PURE__*/react.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:true,itemType:"https://schema.org/Person"},/*#__PURE__*/react.createElement("div",{className:"avatar__name"},/*#__PURE__*/react.createElement(Link/* default */.Z,{href:url,itemProp:"url"},/*#__PURE__*/react.createElement("span",{itemProp:"name"},name))),title&&/*#__PURE__*/react.createElement("small",{className:"avatar__subtitle",itemProp:"description"},title)));}/* harmony default export */ var theme_BlogPostAuthor = (BlogPostAuthor);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogPostAuthors/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var BlogPostAuthors_styles_module = ({"authorCol":"authorCol_8c0z"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogPostAuthors/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Component responsible for the authors layout
function BlogPostAuthors(_ref){var authors=_ref.authors,assets=_ref.assets;var authorsCount=authors.length;if(authorsCount===0){return/*#__PURE__*/react.createElement(react.Fragment,null);}return/*#__PURE__*/react.createElement("div",{className:"row margin-top--md margin-bottom--sm"},authors.map(function(author,idx){var _assets$authorsImageU;return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('col col--6',BlogPostAuthors_styles_module.authorCol),key:idx},/*#__PURE__*/react.createElement(theme_BlogPostAuthor,{author:Object.assign({},author,{// Handle author images using relative paths
imageURL:(_assets$authorsImageU=assets.authorsImageUrls[idx])!=null?_assets$authorsImageU:author.imageURL})}));}));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogPostItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Very simple pluralization: probably good enough for now
function useReadingTimePlural(){var _usePluralForm=(0,lib/* usePluralForm */.c2)(),selectMessage=_usePluralForm.selectMessage;return function(readingTimeFloat){var readingTime=Math.ceil(readingTimeFloat);return selectMessage(readingTime,(0,Translate/* translate */.I)({id:'theme.blog.post.readingTime.plurals',description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:'One min read|{readingTime} min read'},{readingTime:readingTime}));};}function BlogPostItem(props){var _assets$image,_clsx;var readingTimePlural=useReadingTimePlural();var _useBaseUrlUtils=(0,useBaseUrl/* useBaseUrlUtils */.C)(),withBaseUrl=_useBaseUrlUtils.withBaseUrl;var children=props.children,frontMatter=props.frontMatter,assets=props.assets,metadata=props.metadata,truncated=props.truncated,_props$isBlogPostPage=props.isBlogPostPage,isBlogPostPage=_props$isBlogPostPage===void 0?false:_props$isBlogPostPage;var date=metadata.date,formattedDate=metadata.formattedDate,permalink=metadata.permalink,tags=metadata.tags,readingTime=metadata.readingTime,title=metadata.title,editUrl=metadata.editUrl,authors=metadata.authors;var image=(_assets$image=assets.image)!=null?_assets$image:frontMatter.image;var truncatedPost=!isBlogPostPage&&truncated;var tagsExists=tags.length>0;var renderPostHeader=function renderPostHeader(){var TitleHeading=isBlogPostPage?'h1':'h2';return/*#__PURE__*/react.createElement("header",null,/*#__PURE__*/react.createElement(TitleHeading,{className:styles_module.blogPostTitle,itemProp:"headline"},isBlogPostPage?title:/*#__PURE__*/react.createElement(Link/* default */.Z,{itemProp:"url",to:permalink},title)),/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(styles_module.blogPostData,'margin-vert--md')},/*#__PURE__*/react.createElement("time",{dateTime:date,itemProp:"datePublished"},formattedDate),typeof readingTime!=='undefined'&&/*#__PURE__*/react.createElement(react.Fragment,null,' · ',readingTimePlural(readingTime))),/*#__PURE__*/react.createElement(BlogPostAuthors,{authors:authors,assets:assets}));};return/*#__PURE__*/react.createElement("article",{className:!isBlogPostPage?'margin-bottom--xl':undefined,itemProp:"blogPost",itemScope:true,itemType:"http://schema.org/BlogPosting"},renderPostHeader(),image&&/*#__PURE__*/react.createElement("meta",{itemProp:"image",content:withBaseUrl(image,{absolute:true})}),/*#__PURE__*/react.createElement("div",{className:"markdown",itemProp:"articleBody"},/*#__PURE__*/react.createElement(esm/* MDXProvider */.Zo,{components:MDXComponents/* default */.Z},children)),(tagsExists||truncated)&&/*#__PURE__*/react.createElement("footer",{className:(0,clsx_m/* default */.Z)('row docusaurus-mt-lg',(_clsx={},_clsx[styles_module.blogPostDetailsFull]=isBlogPostPage,_clsx))},tagsExists&&/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('col',{'col--9':truncatedPost})},/*#__PURE__*/react.createElement(TagsListInline/* default */.Z,{tags:tags})),isBlogPostPage&&editUrl&&/*#__PURE__*/react.createElement("div",{className:"col margin-top--sm"},/*#__PURE__*/react.createElement(EditThisPage/* default */.Z,{editUrl:editUrl})),truncatedPost&&/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('col text--right',{'col--3':tagsExists})},/*#__PURE__*/react.createElement(Link/* default */.Z,{to:metadata.permalink,"aria-label":"Read more about "+title},/*#__PURE__*/react.createElement("b",null,/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))));}/* harmony default export */ var theme_BlogPostItem = (BlogPostItem);

/***/ }),

/***/ 9404:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BlogTagsPostsPage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9960);
/* harmony import */ var _theme_BlogLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5114);
/* harmony import */ var _theme_BlogPostItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3480);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5999);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1994);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Very simple pluralization: probably good enough for now
function useBlogPostsPlural(){var _usePluralForm=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .usePluralForm */ .c2)(),selectMessage=_usePluralForm.selectMessage;return function(count){return selectMessage(count,(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__/* .translate */ .I)({id:'theme.blog.post.plurals',description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:'One post|{count} posts'},{count:count}));};}function BlogTagsPostsPage(props){var metadata=props.metadata,items=props.items,sidebar=props.sidebar;var allTagsPath=metadata.allTagsPath,tagName=metadata.name,count=metadata.count;var blogPostsPlural=useBlogPostsPlural();var title=(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__/* .translate */ .I)({id:'theme.blog.tagTitle',description:'The title of the page for a blog tag',message:'{nPosts} tagged with "{tagName}"'},{nPosts:blogPostsPlural(count),tagName:tagName});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_BlogLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{title:title,wrapperClassName:_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .ThemeClassNames.wrapper.blogPages */ .kM.wrapper.blogPages,pageClassName:_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .ThemeClassNames.page.blogTagPostListPage */ .kM.page.blogTagPostListPage,searchMetadatas:{// assign unique search tag to exclude this page from search results!
tag:'blog_tags_posts'},sidebar:sidebar},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header",{className:"margin-bottom--xl"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{href:allTagsPath},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),items.map(function(_ref){var BlogPostContent=_ref.content;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_BlogPostItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{key:BlogPostContent.metadata.permalink,frontMatter:BlogPostContent.frontMatter,assets:BlogPostContent.assets,metadata:BlogPostContent.metadata,truncated:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BlogPostContent,null));}));}

/***/ }),

/***/ 6645:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ EditThisPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(5999);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(3366);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconEdit/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"iconEdit":"iconEdit_mS5F"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconEdit/index.js
var _excluded=["className"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IconEdit=function IconEdit(_ref){var className=_ref.className,restProps=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,_excluded);return/*#__PURE__*/react.createElement("svg",(0,esm_extends/* default */.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,clsx_m/* default */.Z)(styles_module.iconEdit,className),"aria-hidden":"true"},restProps),/*#__PURE__*/react.createElement("g",null,/*#__PURE__*/react.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})));};/* harmony default export */ var theme_IconEdit = (IconEdit);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js + 28 modules
var lib = __webpack_require__(1994);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/EditThisPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function EditThisPage(_ref){var editUrl=_ref.editUrl;return/*#__PURE__*/react.createElement("a",{href:editUrl,target:"_blank",rel:"noreferrer noopener",className:lib/* ThemeClassNames.common.editThisPage */.kM.common.editThisPage},/*#__PURE__*/react.createElement(theme_IconEdit,null),/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"));}

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

/***/ }),

/***/ 9261:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ TagsListInline; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(5999);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Tag/index.js + 1 modules
var Tag = __webpack_require__(1854);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TagsListInline/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"tags":"tags_NBRY","tag":"tag_F03v"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TagsListInline/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TagsListInline(_ref){var tags=_ref.tags;return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("b",null,/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),/*#__PURE__*/react.createElement("ul",{className:(0,clsx_m/* default */.Z)(styles_module.tags,'padding--none','margin-left--sm')},tags.map(function(_ref2){var label=_ref2.label,tagPermalink=_ref2.permalink;return/*#__PURE__*/react.createElement("li",{key:tagPermalink,className:styles_module.tag},/*#__PURE__*/react.createElement(Tag/* default */.Z,{name:label,permalink:tagPermalink}));})));}

/***/ })

}]);