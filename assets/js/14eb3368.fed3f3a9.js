"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[9817],{

/***/ 44149:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ DocBreadcrumbs; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(27378);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(35281);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsUtils.js + 3 modules
var docsUtils = __webpack_require__(53791);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/routesUtils.js
var routesUtils = __webpack_require__(48596);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(39960);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(95999);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(44996);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Home/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconHome(props){return/*#__PURE__*/react.createElement("svg",(0,esm_extends/* default */.Z)({viewBox:"0 0 24 24"},props),/*#__PURE__*/react.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/Items/Home/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"breadcrumbHomeIcon":"breadcrumbHomeIcon_YNFT"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/Items/Home/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function HomeBreadcrumbItem(){var homeHref=(0,useBaseUrl/* default */.Z)('/');return/*#__PURE__*/react.createElement("li",{className:"breadcrumbs__item"},/*#__PURE__*/react.createElement(Link/* default */.Z,{"aria-label":(0,Translate/* translate */.I)({id:'theme.docs.breadcrumbs.home',message:'Home page',description:'The ARIA label for the home page in the breadcrumbs'}),className:"breadcrumbs__link",href:homeHref},/*#__PURE__*/react.createElement(IconHome,{className:styles_module.breadcrumbHomeIcon})));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var DocBreadcrumbs_styles_module = ({"breadcrumbsContainer":"breadcrumbsContainer_Z_bl"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO move to design system folder
function BreadcrumbsItemLink(_ref){var children=_ref.children,href=_ref.href,isLast=_ref.isLast;var className='breadcrumbs__link';if(isLast){return/*#__PURE__*/react.createElement("span",{className:className,itemProp:"name"},children);}return href?/*#__PURE__*/react.createElement(Link/* default */.Z,{className:className,href:href,itemProp:"item"},/*#__PURE__*/react.createElement("span",{itemProp:"name"},children)):/*#__PURE__*/ // TODO Google search console doesn't like breadcrumb items without href.
// The schema doesn't seem to require `id` for each `item`, although Google
// insist to infer one, even if it's invalid. Removing `itemProp="item
// name"` for now, since I don't know how to properly fix it.
// See https://github.com/facebook/docusaurus/issues/7241
react.createElement("span",{className:className},children);}// TODO move to design system folder
function BreadcrumbsItem(_ref2){var children=_ref2.children,active=_ref2.active,index=_ref2.index,addMicrodata=_ref2.addMicrodata;return/*#__PURE__*/react.createElement("li",(0,esm_extends/* default */.Z)({},addMicrodata&&{itemScope:true,itemProp:'itemListElement',itemType:'https://schema.org/ListItem'},{className:(0,clsx_m/* default */.Z)('breadcrumbs__item',{'breadcrumbs__item--active':active})}),children,/*#__PURE__*/react.createElement("meta",{itemProp:"position",content:String(index+1)}));}function DocBreadcrumbs(){var breadcrumbs=(0,docsUtils/* useSidebarBreadcrumbs */.s1)();var homePageRoute=(0,routesUtils/* useHomePageRoute */.Ns)();if(!breadcrumbs){return null;}return/*#__PURE__*/react.createElement("nav",{className:(0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.docs.docBreadcrumbs */.k.docs.docBreadcrumbs,DocBreadcrumbs_styles_module.breadcrumbsContainer),"aria-label":(0,Translate/* translate */.I)({id:'theme.docs.breadcrumbs.navAriaLabel',message:'Breadcrumbs',description:'The ARIA label for the breadcrumbs'})},/*#__PURE__*/react.createElement("ul",{className:"breadcrumbs",itemScope:true,itemType:"https://schema.org/BreadcrumbList"},homePageRoute&&/*#__PURE__*/react.createElement(HomeBreadcrumbItem,null),breadcrumbs.map(function(item,idx){var isLast=idx===breadcrumbs.length-1;return/*#__PURE__*/react.createElement(BreadcrumbsItem,{key:idx,active:isLast,index:idx,addMicrodata:!!item.href},/*#__PURE__*/react.createElement(BreadcrumbsItemLink,{href:item.href,isLast:isLast},item.label));})));}

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

/***/ 75843:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DocCategoryGeneratedIndexPage; }
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(27378);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__(1944);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsUtils.js + 3 modules
var docsUtils = __webpack_require__(53791);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(44996);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCardList/index.js + 2 modules
var DocCardList = __webpack_require__(27839);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPaginator/index.js
var DocPaginator = __webpack_require__(80049);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocVersionBanner/index.js
var DocVersionBanner = __webpack_require__(23120);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocVersionBadge/index.js
var DocVersionBadge = __webpack_require__(44364);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/index.js + 4 modules
var DocBreadcrumbs = __webpack_require__(44149);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(10235);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCategoryGeneratedIndexPage/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"generatedIndexPage":"generatedIndexPage_vN6x","list":"list_eTzJ","title":"title_kItE"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCategoryGeneratedIndexPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocCategoryGeneratedIndexPageMetadata(_ref){var categoryGeneratedIndex=_ref.categoryGeneratedIndex;return/*#__PURE__*/react.createElement(metadataUtils/* PageMetadata */.d,{title:categoryGeneratedIndex.title,description:categoryGeneratedIndex.description,keywords:categoryGeneratedIndex.keywords// TODO `require` this?
,image:(0,useBaseUrl/* default */.Z)(categoryGeneratedIndex.image)});}function DocCategoryGeneratedIndexPageContent(_ref2){var categoryGeneratedIndex=_ref2.categoryGeneratedIndex;var category=(0,docsUtils/* useCurrentSidebarCategory */.jA)();return/*#__PURE__*/react.createElement("div",{className:styles_module.generatedIndexPage},/*#__PURE__*/react.createElement(DocVersionBanner/* default */.Z,null),/*#__PURE__*/react.createElement(DocBreadcrumbs/* default */.Z,null),/*#__PURE__*/react.createElement(DocVersionBadge/* default */.Z,null),/*#__PURE__*/react.createElement("header",null,/*#__PURE__*/react.createElement(Heading/* default */.Z,{as:"h1",className:styles_module.title},categoryGeneratedIndex.title),categoryGeneratedIndex.description&&/*#__PURE__*/react.createElement("p",null,categoryGeneratedIndex.description)),/*#__PURE__*/react.createElement("article",{className:"margin-top--lg"},/*#__PURE__*/react.createElement(DocCardList/* default */.Z,{items:category.items,className:styles_module.list})),/*#__PURE__*/react.createElement("footer",{className:"margin-top--lg"},/*#__PURE__*/react.createElement(DocPaginator/* default */.Z,{previous:categoryGeneratedIndex.navigation.previous,next:categoryGeneratedIndex.navigation.next})));}function DocCategoryGeneratedIndexPage(props){return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(DocCategoryGeneratedIndexPageMetadata,props),/*#__PURE__*/react.createElement(DocCategoryGeneratedIndexPageContent,props));}

/***/ }),

/***/ 80049:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ DocPaginator; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27378);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95999);
/* harmony import */ var _theme_PaginatorNavLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32244);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocPaginator(props){var previous=props.previous,next=props.next;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .I)({id:'theme.docs.paginator.navAriaLabel',message:'Docs pages navigation',description:'The ARIA label for the docs pagination'})},previous&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_PaginatorNavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},previous,{subLabel:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),next&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_PaginatorNavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,(0,_home_runner_work_drip_form_drip_form_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},next,{subLabel:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:true})));}

/***/ }),

/***/ 44364:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ DocVersionBadge; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27378);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86010);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95999);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35281);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74477);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocVersionBadge(_ref){var className=_ref.className;var versionMetadata=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__/* .useDocsVersion */ .E)();if(versionMetadata.badge){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(className,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .ThemeClassNames.docs.docVersionBadge */ .k.docs.docVersionBadge,'badge badge--secondary')},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:versionMetadata.label}},'Version: {versionLabel}'));}return null;}

/***/ }),

/***/ 23120:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ DocVersionBanner; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27378);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86010);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52263);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39960);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95999);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80143);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35281);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60373);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74477);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function UnreleasedVersionLabel(_ref){var siteTitle=_ref.siteTitle,versionMetadata=_ref.versionMetadata;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:siteTitle,versionLabel:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,versionMetadata.label)}},'This is unreleased documentation for {siteTitle} {versionLabel} version.');}function UnmaintainedVersionLabel(_ref2){var siteTitle=_ref2.siteTitle,versionMetadata=_ref2.versionMetadata;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:siteTitle,versionLabel:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,versionMetadata.label)}},'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.');}var BannerLabelComponents={unreleased:UnreleasedVersionLabel,unmaintained:UnmaintainedVersionLabel};function BannerLabel(props){var BannerLabelComponent=BannerLabelComponents[props.versionMetadata.banner];return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BannerLabelComponent,props);}function LatestVersionSuggestionLabel(_ref3){var versionLabel=_ref3.versionLabel,to=_ref3.to,onClick=_ref3.onClick;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:versionLabel,latestVersionLink:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{to:to,onClick:onClick},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).');}function DocVersionBannerEnabled(_ref4){var className=_ref4.className,versionMetadata=_ref4.versionMetadata;var _useDocusaurusContext=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(),siteTitle=_useDocusaurusContext.siteConfig.title;var _useActivePlugin=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_4__/* .useActivePlugin */ .gA)({failfast:true}),pluginId=_useActivePlugin.pluginId;var getVersionMainDoc=function getVersionMainDoc(version){return version.docs.find(function(doc){return doc.id===version.mainDocId;});};var _useDocsPreferredVers=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__/* .useDocsPreferredVersion */ .J)(pluginId),savePreferredVersionName=_useDocsPreferredVers.savePreferredVersionName;var _useDocVersionSuggest=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_4__/* .useDocVersionSuggestions */ .Jo)(pluginId),latestDocSuggestion=_useDocVersionSuggest.latestDocSuggestion,latestVersionSuggestion=_useDocVersionSuggest.latestVersionSuggestion;// Try to link to same doc in latest version (not always possible), falling
// back to main doc of latest version
var latestVersionSuggestedDoc=latestDocSuggestion!=null?latestDocSuggestion:getVersionMainDoc(latestVersionSuggestion);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(className,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__/* .ThemeClassNames.docs.docVersionBanner */ .k.docs.docVersionBanner,'alert alert--warning margin-bottom--md'),role:"alert"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BannerLabel,{siteTitle:siteTitle,versionMetadata:versionMetadata})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"margin-top--md"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LatestVersionSuggestionLabel,{versionLabel:latestVersionSuggestion.label,to:latestVersionSuggestedDoc.path,onClick:function onClick(){return savePreferredVersionName(latestVersionSuggestion.name);}})));}function DocVersionBanner(_ref5){var className=_ref5.className;var versionMetadata=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_8__/* .useDocsVersion */ .E)();if(versionMetadata.banner){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DocVersionBannerEnabled,{className:className,versionMetadata:versionMetadata});}return null;}

/***/ }),

/***/ 10235:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


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

/***/ })

}]);