"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[5961],{

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

/***/ 11945:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ BlogPostItem; }
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(27378);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/blogPost.js
var blogPost = __webpack_require__(9460);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(44996);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Container/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItemContainer(_ref){var _assets$image;var children=_ref.children,className=_ref.className;var _useBlogPost=(0,blogPost/* useBlogPost */.C)(),frontMatter=_useBlogPost.frontMatter,assets=_useBlogPost.assets;var _useBaseUrlUtils=(0,useBaseUrl/* useBaseUrlUtils */.C)(),withBaseUrl=_useBaseUrlUtils.withBaseUrl;var image=(_assets$image=assets.image)!=null?_assets$image:frontMatter.image;return/*#__PURE__*/react.createElement("article",{className:className,itemProp:"blogPost",itemScope:true,itemType:"http://schema.org/BlogPosting"},image&&/*#__PURE__*/react.createElement("meta",{itemProp:"image",content:withBaseUrl(image,{absolute:true})}),children);}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(39960);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Title/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"title":"title_f1Hy"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Title/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItemHeaderTitle(_ref){var className=_ref.className;var _useBlogPost=(0,blogPost/* useBlogPost */.C)(),metadata=_useBlogPost.metadata,isBlogPostPage=_useBlogPost.isBlogPostPage;var permalink=metadata.permalink,title=metadata.title;var TitleHeading=isBlogPostPage?'h1':'h2';return/*#__PURE__*/react.createElement(TitleHeading,{className:(0,clsx_m/* default */.Z)(styles_module.title,className),itemProp:"headline"},isBlogPostPage?title:/*#__PURE__*/react.createElement(Link/* default */.Z,{itemProp:"url",to:permalink},title));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(95999);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/usePluralForm.js
var usePluralForm = __webpack_require__(88824);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Info/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Info_styles_module = ({"container":"container_mt6G"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Info/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Very simple pluralization: probably good enough for now
function useReadingTimePlural(){var _usePluralForm=(0,usePluralForm/* usePluralForm */.c)(),selectMessage=_usePluralForm.selectMessage;return function(readingTimeFloat){var readingTime=Math.ceil(readingTimeFloat);return selectMessage(readingTime,(0,Translate/* translate */.I)({id:'theme.blog.post.readingTime.plurals',description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:'One min read|{readingTime} min read'},{readingTime:readingTime}));};}function ReadingTime(_ref){var readingTime=_ref.readingTime;var readingTimePlural=useReadingTimePlural();return/*#__PURE__*/react.createElement(react.Fragment,null,readingTimePlural(readingTime));}function Info_Date(_ref2){var date=_ref2.date,formattedDate=_ref2.formattedDate;return/*#__PURE__*/react.createElement("time",{dateTime:date,itemProp:"datePublished"},formattedDate);}function Spacer(){return/*#__PURE__*/react.createElement(react.Fragment,null,' · ');}function BlogPostItemHeaderInfo(_ref3){var className=_ref3.className;var _useBlogPost=(0,blogPost/* useBlogPost */.C)(),metadata=_useBlogPost.metadata;var date=metadata.date,formattedDate=metadata.formattedDate,readingTime=metadata.readingTime;return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(Info_styles_module.container,'margin-vert--md',className)},/*#__PURE__*/react.createElement(Info_Date,{date:date,formattedDate:formattedDate}),typeof readingTime!=='undefined'&&/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(Spacer,null),/*#__PURE__*/react.createElement(ReadingTime,{readingTime:readingTime})));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Author/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MaybeLink(props){if(props.href){return/*#__PURE__*/react.createElement(Link/* default */.Z,props);}return/*#__PURE__*/react.createElement(react.Fragment,null,props.children);}function BlogPostItemHeaderAuthor(_ref){var author=_ref.author,className=_ref.className;var name=author.name,title=author.title,url=author.url,imageURL=author.imageURL,email=author.email;var link=url||email&&"mailto:"+email||undefined;return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('avatar margin-bottom--sm',className)},imageURL&&/*#__PURE__*/react.createElement(MaybeLink,{href:link,className:"avatar__photo-link"},/*#__PURE__*/react.createElement("img",{className:"avatar__photo",src:imageURL,alt:name})),name&&/*#__PURE__*/react.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:true,itemType:"https://schema.org/Person"},/*#__PURE__*/react.createElement("div",{className:"avatar__name"},/*#__PURE__*/react.createElement(MaybeLink,{href:link,itemProp:"url"},/*#__PURE__*/react.createElement("span",{itemProp:"name"},name))),title&&/*#__PURE__*/react.createElement("small",{className:"avatar__subtitle",itemProp:"description"},title)));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Authors/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Authors_styles_module = ({"authorCol":"authorCol_Hf19","imageOnlyAuthorRow":"imageOnlyAuthorRow_pa_O","imageOnlyAuthorCol":"imageOnlyAuthorCol_G86a"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Authors/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Component responsible for the authors layout
function BlogPostItemHeaderAuthors(_ref){var className=_ref.className;var _useBlogPost=(0,blogPost/* useBlogPost */.C)(),authors=_useBlogPost.metadata.authors,assets=_useBlogPost.assets;var authorsCount=authors.length;if(authorsCount===0){return null;}var imageOnly=authors.every(function(_ref2){var name=_ref2.name;return!name;});return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('margin-top--md margin-bottom--sm',imageOnly?Authors_styles_module.imageOnlyAuthorRow:'row',className)},authors.map(function(author,idx){var _assets$authorsImageU;return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(!imageOnly&&'col col--6',imageOnly?Authors_styles_module.imageOnlyAuthorCol:Authors_styles_module.authorCol),key:idx},/*#__PURE__*/react.createElement(BlogPostItemHeaderAuthor,{author:Object.assign({},author,{// Handle author images using relative paths
imageURL:(_assets$authorsImageU=assets.authorsImageUrls[idx])!=null?_assets$authorsImageU:author.imageURL})}));}));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItemHeader(){return/*#__PURE__*/react.createElement("header",null,/*#__PURE__*/react.createElement(BlogPostItemHeaderTitle,null),/*#__PURE__*/react.createElement(BlogPostItemHeaderInfo,null),/*#__PURE__*/react.createElement(BlogPostItemHeaderAuthors,null));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/utils-common/lib/index.js
var lib = __webpack_require__(18780);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXContent/index.js + 37 modules
var MDXContent = __webpack_require__(36773);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Content/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItemContent(_ref){var children=_ref.children,className=_ref.className;var _useBlogPost=(0,blogPost/* useBlogPost */.C)(),isBlogPostPage=_useBlogPost.isBlogPostPage;return/*#__PURE__*/react.createElement("div",{// This ID is used for the feed generation to locate the main content
id:isBlogPostPage?lib.blogPostContainerID:undefined,className:(0,clsx_m/* default */.Z)('markdown',className),itemProp:"articleBody"},/*#__PURE__*/react.createElement(MDXContent/* default */.Z,null,children));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/EditThisPage/index.js + 2 modules
var EditThisPage = __webpack_require__(80324);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/index.js + 1 modules
var TagsListInline = __webpack_require__(98065);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Footer/ReadMoreLink/index.js
var _excluded=["blogPostTitle"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ReadMoreLabel(){return/*#__PURE__*/react.createElement("b",null,/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"));}function BlogPostItemFooterReadMoreLink(props){var blogPostTitle=props.blogPostTitle,linkProps=(0,objectWithoutPropertiesLoose/* default */.Z)(props,_excluded);return/*#__PURE__*/react.createElement(Link/* default */.Z,(0,esm_extends/* default */.Z)({"aria-label":(0,Translate/* translate */.I)({message:'Read more about {title}',id:'theme.blog.post.readMoreLabel',description:'The ARIA label for the link to full blog posts from excerpts'},{title:blogPostTitle})},linkProps),/*#__PURE__*/react.createElement(ReadMoreLabel,null));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Footer/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Footer_styles_module = ({"blogPostFooterDetailsFull":"blogPostFooterDetailsFull_mRVl"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Footer/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItemFooter(){var _useBlogPost=(0,blogPost/* useBlogPost */.C)(),metadata=_useBlogPost.metadata,isBlogPostPage=_useBlogPost.isBlogPostPage;var tags=metadata.tags,title=metadata.title,editUrl=metadata.editUrl,hasTruncateMarker=metadata.hasTruncateMarker;// A post is truncated if it's in the "list view" and it has a truncate marker
var truncatedPost=!isBlogPostPage&&hasTruncateMarker;var tagsExists=tags.length>0;var renderFooter=tagsExists||truncatedPost||editUrl;if(!renderFooter){return null;}return/*#__PURE__*/react.createElement("footer",{className:(0,clsx_m/* default */.Z)('row docusaurus-mt-lg',isBlogPostPage&&Footer_styles_module.blogPostFooterDetailsFull)},tagsExists&&/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('col',{'col--9':truncatedPost})},/*#__PURE__*/react.createElement(TagsListInline/* default */.Z,{tags:tags})),isBlogPostPage&&editUrl&&/*#__PURE__*/react.createElement("div",{className:"col margin-top--sm"},/*#__PURE__*/react.createElement(EditThisPage/* default */.Z,{editUrl:editUrl})),truncatedPost&&/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('col text--right',{'col--3':tagsExists})},/*#__PURE__*/react.createElement(BlogPostItemFooterReadMoreLink,{blogPostTitle:title,to:metadata.permalink})));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// apply a bottom margin in list view
function useContainerClassName(){var _useBlogPost=(0,blogPost/* useBlogPost */.C)(),isBlogPostPage=_useBlogPost.isBlogPostPage;return!isBlogPostPage?'margin-bottom--xl':undefined;}function BlogPostItem(_ref){var children=_ref.children,className=_ref.className;var containerClassName=useContainerClassName();return/*#__PURE__*/react.createElement(BlogPostItemContainer,{className:(0,clsx_m/* default */.Z)(containerClassName,className)},/*#__PURE__*/react.createElement(BlogPostItemHeader,null),/*#__PURE__*/react.createElement(BlogPostItemContent,null,children),/*#__PURE__*/react.createElement(BlogPostItemFooter,null));}

/***/ }),

/***/ 80324:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ EditThisPage; }
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(27378);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(95999);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(35281);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Edit/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"iconEdit":"iconEdit_Z9Sw"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Edit/index.js
var _excluded=["className"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconEdit(_ref){var className=_ref.className,restProps=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,_excluded);return/*#__PURE__*/react.createElement("svg",(0,esm_extends/* default */.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,clsx_m/* default */.Z)(styles_module.iconEdit,className),"aria-hidden":"true"},restProps),/*#__PURE__*/react.createElement("g",null,/*#__PURE__*/react.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/EditThisPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function EditThisPage(_ref){var editUrl=_ref.editUrl;return/*#__PURE__*/react.createElement("a",{href:editUrl,target:"_blank",rel:"noreferrer noopener",className:ThemeClassNames/* ThemeClassNames.common.editThisPage */.k.common.editThisPage},/*#__PURE__*/react.createElement(IconEdit,null),/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"));}

/***/ }),

/***/ 32244:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ PaginatorNavLink; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27378);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86010);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39960);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function PaginatorNavLink(props){var permalink=props.permalink,title=props.title,subLabel=props.subLabel,isNext=props.isNext;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)('pagination-nav__link',isNext?'pagination-nav__link--next':'pagination-nav__link--prev'),to:permalink},subLabel&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"pagination-nav__sublabel"},subLabel),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"pagination-nav__label"},title));}

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

/***/ }),

/***/ 98065:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ TagsListInline; }
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(27378);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(95999);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js + 1 modules
var Tag = __webpack_require__(60231);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"tags":"tags_jXut","tag":"tag_QGVx"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TagsListInline(_ref){var tags=_ref.tags;return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("b",null,/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),/*#__PURE__*/react.createElement("ul",{className:(0,clsx_m/* default */.Z)(styles_module.tags,'padding--none','margin-left--sm')},tags.map(function(_ref2){var label=_ref2.label,tagPermalink=_ref2.permalink;return/*#__PURE__*/react.createElement("li",{key:tagPermalink,className:styles_module.tag},/*#__PURE__*/react.createElement(Tag/* default */.Z,{label:label,permalink:tagPermalink}));})));}

/***/ }),

/***/ 9460:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": function() { return /* binding */ useBlogPost; },
/* harmony export */   "n": function() { return /* binding */ BlogPostProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27378);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69688);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);/**
 * Note: we don't use `PropBlogPostContent` as context value on purpose. Metadata is
 * currently stored inside the MDX component, but we may want to change that in
 * the future.
 */function useContextValue(_ref){var content=_ref.content,isBlogPostPage=_ref.isBlogPostPage;return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return{metadata:content.metadata,frontMatter:content.frontMatter,assets:content.assets,toc:content.toc,isBlogPostPage:isBlogPostPage};},[content,isBlogPostPage]);}/**
 * This is a very thin layer around the `content` received from the MDX loader.
 * It provides metadata about the blog post to the children tree.
 */function BlogPostProvider(_ref2){var children=_ref2.children,content=_ref2.content,_ref2$isBlogPostPage=_ref2.isBlogPostPage,isBlogPostPage=_ref2$isBlogPostPage===void 0?false:_ref2$isBlogPostPage;var contextValue=useContextValue({content:content,isBlogPostPage:isBlogPostPage});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider,{value:contextValue},children);}/**
 * Returns the data of the currently browsed blog post. Gives access to
 * front matter, metadata, TOC, etc.
 * When swizzling a low-level component (e.g. the "Edit this page" link)
 * and you need some extra metadata, you don't have to drill the props
 * all the way through the component tree: simply use this hook instead.
 */function useBlogPost(){var blogPost=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(blogPost===null){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_1__/* .ReactContextError */ .i6('BlogPostProvider');}return blogPost;}

/***/ }),

/***/ 88824:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": function() { return /* binding */ usePluralForm; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27378);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52263);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// We want to ensurer a stable plural form order in all cases
// It is more convenient and natural to handle "small values" first
// See https://twitter.com/sebastienlorber/status/1366820663261077510
var OrderedPluralForms=['zero','one','two','few','many','other'];function sortPluralForms(pluralForms){return OrderedPluralForms.filter(function(pf){return pluralForms.includes(pf);});}// Hardcoded english/fallback implementation
var EnglishPluralForms={locale:'en',pluralForms:sortPluralForms(['one','other']),select:function select(count){return count===1?'one':'other';}};function createLocalePluralForms(locale){var pluralRules=new Intl.PluralRules(locale);return{locale:locale,pluralForms:sortPluralForms(pluralRules.resolvedOptions().pluralCategories),select:function select(count){return pluralRules.select(count);}};}/**
 * Poor man's `PluralSelector` implementation, using an English fallback. We
 * want a lightweight, future-proof and good-enough solution. We don't want a
 * perfect and heavy solution.
 *
 * Docusaurus classic theme has only 2 deeply nested labels requiring complex
 * plural rules. We don't want to use `Intl` + `PluralRules` polyfills + full
 * ICU syntax (react-intl) just for that.
 *
 * Notes:
 * - 2021: 92+% Browsers support `Intl.PluralRules`, and support will increase
 * in the future
 * - NodeJS >= 13 has full ICU support by default
 * - In case of "mismatch" between SSR and Browser ICU support, React keeps
 * working!
 */function useLocalePluralForms(){var _useDocusaurusContext=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(),currentLocale=_useDocusaurusContext.i18n.currentLocale;return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){try{return createLocalePluralForms(currentLocale);}catch(err){console.error("Failed to use Intl.PluralRules for locale \""+currentLocale+"\".\nDocusaurus will fallback to the default (English) implementation.\nError: "+err.message+"\n");return EnglishPluralForms;}},[currentLocale]);}function selectPluralMessage(pluralMessages,count,localePluralForms){var separator='|';var parts=pluralMessages.split(separator);if(parts.length===1){return parts[0];}if(parts.length>localePluralForms.pluralForms.length){console.error("For locale="+localePluralForms.locale+", a maximum of "+localePluralForms.pluralForms.length+" plural forms are expected ("+localePluralForms.pluralForms.join(',')+"), but the message contains "+parts.length+": "+pluralMessages);}var pluralForm=localePluralForms.select(count);var pluralFormIndex=localePluralForms.pluralForms.indexOf(pluralForm);// In case of not enough plural form messages, we take the last one (other)
// instead of returning undefined
return parts[Math.min(pluralFormIndex,parts.length-1)];}/**
 * Reads the current locale and returns an interface very similar to
 * `Intl.PluralRules`.
 */function usePluralForm(){var localePluralForm=useLocalePluralForms();return{selectMessage:function selectMessage(count,pluralMessages){return selectPluralMessage(pluralMessages,count,localePluralForm);}};}

/***/ })

}]);