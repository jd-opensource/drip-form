"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[9514,4972],{

/***/ 53604:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DocPage; }
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(27378);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__(1944);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(35281);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/searchUtils.js
var searchUtils = __webpack_require__(43320);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsUtils.js + 3 modules
var docsUtils = __webpack_require__(53791);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/docsVersion.js
var docsVersion = __webpack_require__(74477);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/docsSidebar.js
var docsSidebar = __webpack_require__(1116);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 63 modules
var Layout = __webpack_require__(4416);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(95999);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(12466);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useLocationChange.js
var useLocationChange = __webpack_require__(85936);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useBackToTopButton.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//** Wires the logic for the back to top button. */function useBackToTopButton(_ref){var threshold=_ref.threshold;var _useState=(0,react.useState)(false),shown=_useState[0],setShown=_useState[1];var isFocusedAnchor=(0,react.useRef)(false);var _useSmoothScrollTo=(0,scrollUtils/* useSmoothScrollTo */.Ct)(),startScroll=_useSmoothScrollTo.startScroll,cancelScroll=_useSmoothScrollTo.cancelScroll;(0,scrollUtils/* useScrollPosition */.RF)(function(_ref2,lastPosition){var scrollTop=_ref2.scrollY;var lastScrollTop=lastPosition==null?void 0:lastPosition.scrollY;// Component is just being mounted. Not really a scroll event from the user.
// Ignore it.
if(!lastScrollTop){return;}if(isFocusedAnchor.current){// This scroll position change is triggered by navigating to an anchor.
// Ignore it.
isFocusedAnchor.current=false;}else if(scrollTop>=lastScrollTop){// The user has scrolled down to "fight against" the animation. Cancel any
// animation under progress.
cancelScroll();setShown(false);}else if(scrollTop<threshold){// Scrolled to the minimum position; hide the button.
setShown(false);}else if(scrollTop+window.innerHeight<document.documentElement.scrollHeight){setShown(true);}});(0,useLocationChange/* useLocationChange */.S)(function(locationChangeEvent){if(locationChangeEvent.location.hash){isFocusedAnchor.current=true;setShown(false);}});return{shown:shown,scrollToTop:function scrollToTop(){return startScroll(0);}};}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BackToTopButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"backToTopButton":"backToTopButton_sjWU","backToTopButtonShow":"backToTopButtonShow_xfvO"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BackToTopButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BackToTopButton(){var _useBackToTopButton=useBackToTopButton({threshold:300}),shown=_useBackToTopButton.shown,scrollToTop=_useBackToTopButton.scrollToTop;return/*#__PURE__*/react.createElement("button",{"aria-label":(0,Translate/* translate */.I)({id:'theme.BackToTopButton.buttonAriaLabel',message:'Scroll back to top',description:'The ARIA label for the back to top button'}),className:(0,clsx_m/* default */.Z)('clean-btn',ThemeClassNames/* ThemeClassNames.common.backToTopButton */.k.common.backToTopButton,styles_module.backToTopButton,shown&&styles_module.backToTopButtonShow),type:"button",onClick:scrollToTop});}
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(16550);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(87524);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(86668);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Logo/index.js
var Logo = __webpack_require__(21327);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Arrow/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconArrow(props){return/*#__PURE__*/react.createElement("svg",(0,esm_extends/* default */.Z)({width:"20",height:"20","aria-hidden":"true"},props),/*#__PURE__*/react.createElement("g",{fill:"#7a7a7a"},/*#__PURE__*/react.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),/*#__PURE__*/react.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/CollapseButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var CollapseButton_styles_module = ({"collapseSidebarButton":"collapseSidebarButton_PEFL","collapseSidebarButtonIcon":"collapseSidebarButtonIcon_kv0_"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/CollapseButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CollapseButton(_ref){var onClick=_ref.onClick;return/*#__PURE__*/react.createElement("button",{type:"button",title:(0,Translate/* translate */.I)({id:'theme.docs.sidebar.collapseButtonTitle',message:'Collapse sidebar',description:'The title attribute for collapse button of doc sidebar'}),"aria-label":(0,Translate/* translate */.I)({id:'theme.docs.sidebar.collapseButtonAriaLabel',message:'Collapse sidebar',description:'The title attribute for collapse button of doc sidebar'}),className:(0,clsx_m/* default */.Z)('button button--secondary button--outline',CollapseButton_styles_module.collapseSidebarButton),onClick:onClick},/*#__PURE__*/react.createElement(IconArrow,{className:CollapseButton_styles_module.collapseSidebarButtonIcon}));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/announcementBar.js
var announcementBar = __webpack_require__(59689);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js + 5 modules
var reactUtils = __webpack_require__(69688);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/docSidebarItemsExpandedState.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var EmptyContext=Symbol('EmptyContext');var Context=/*#__PURE__*/react.createContext(EmptyContext);/**
 * Should be used to wrap one sidebar category level. This provider syncs the
 * expanded states of all sibling categories, and categories can choose to
 * collapse itself if another one is expanded.
 */function DocSidebarItemsExpandedStateProvider(_ref){var children=_ref.children;var _useState=(0,react.useState)(null),expandedItem=_useState[0],setExpandedItem=_useState[1];var contextValue=(0,react.useMemo)(function(){return{expandedItem:expandedItem,setExpandedItem:setExpandedItem};},[expandedItem]);return/*#__PURE__*/react.createElement(Context.Provider,{value:contextValue},children);}function useDocSidebarItemsExpandedState(){var value=(0,react.useContext)(Context);if(value===EmptyContext){throw new reactUtils/* ReactContextError */.i6('DocSidebarItemsExpandedStateProvider');}return value;}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(86043);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/routesUtils.js
var routesUtils = __webpack_require__(48596);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(39960);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(72389);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Category/index.js
var _excluded=["item","onItemClick","activePath","level","index"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// If we navigate to a category and it becomes active, it should automatically
// expand itself
function useAutoExpandActiveCategory(_ref){var isActive=_ref.isActive,collapsed=_ref.collapsed,updateCollapsed=_ref.updateCollapsed;var wasActive=(0,reactUtils/* usePrevious */.D9)(isActive);(0,react.useEffect)(function(){var justBecameActive=isActive&&!wasActive;if(justBecameActive&&collapsed){updateCollapsed(false);}},[isActive,wasActive,collapsed,updateCollapsed]);}/**
 * When a collapsible category has no link, we still link it to its first child
 * during SSR as a temporary fallback. This allows to be able to navigate inside
 * the category even when JS fails to load, is delayed or simply disabled
 * React hydration becomes an optional progressive enhancement
 * see https://github.com/facebookincubator/infima/issues/36#issuecomment-772543188
 * see https://github.com/facebook/docusaurus/issues/3030
 */function useCategoryHrefWithSSRFallback(item){var isBrowser=(0,useIsBrowser/* default */.Z)();return (0,react.useMemo)(function(){if(item.href){return item.href;}// In these cases, it's not necessary to render a fallback
// We skip the "findFirstCategoryLink" computation
if(isBrowser||!item.collapsible){return undefined;}return (0,docsUtils/* findFirstCategoryLink */.Wl)(item);},[item,isBrowser]);}function Category_CollapseButton(_ref2){var categoryLabel=_ref2.categoryLabel,onClick=_ref2.onClick;return/*#__PURE__*/react.createElement("button",{"aria-label":(0,Translate/* translate */.I)({id:'theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel',message:"Toggle the collapsible sidebar category '{label}'",description:'The ARIA label to toggle the collapsible sidebar category'},{label:categoryLabel}),type:"button",className:"clean-btn menu__caret",onClick:onClick});}function DocSidebarItemCategory(_ref3){var item=_ref3.item,onItemClick=_ref3.onItemClick,activePath=_ref3.activePath,level=_ref3.level,index=_ref3.index,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref3,_excluded);var items=item.items,label=item.label,collapsible=item.collapsible,className=item.className,href=item.href;var _useThemeConfig=(0,useThemeConfig/* useThemeConfig */.L)(),autoCollapseCategories=_useThemeConfig.docs.sidebar.autoCollapseCategories;var hrefWithSSRFallback=useCategoryHrefWithSSRFallback(item);var isActive=(0,docsUtils/* isActiveSidebarItem */._F)(item,activePath);var isCurrentPage=(0,routesUtils/* isSamePath */.Mg)(href,activePath);var _useCollapsible=(0,Collapsible/* useCollapsible */.u)({// Active categories are always initialized as expanded. The default
// (`item.collapsed`) is only used for non-active categories.
initialState:function initialState(){if(!collapsible){return false;}return isActive?false:item.collapsed;}}),collapsed=_useCollapsible.collapsed,setCollapsed=_useCollapsible.setCollapsed;var _useDocSidebarItemsEx=useDocSidebarItemsExpandedState(),expandedItem=_useDocSidebarItemsEx.expandedItem,setExpandedItem=_useDocSidebarItemsEx.setExpandedItem;// Use this instead of `setCollapsed`, because it is also reactive
var updateCollapsed=function updateCollapsed(toCollapsed){if(toCollapsed===void 0){toCollapsed=!collapsed;}setExpandedItem(toCollapsed?null:index);setCollapsed(toCollapsed);};useAutoExpandActiveCategory({isActive:isActive,collapsed:collapsed,updateCollapsed:updateCollapsed});(0,react.useEffect)(function(){if(collapsible&&expandedItem!=null&&expandedItem!==index&&autoCollapseCategories){setCollapsed(true);}},[collapsible,expandedItem,index,setCollapsed,autoCollapseCategories]);return/*#__PURE__*/react.createElement("li",{className:(0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.docs.docSidebarItemCategory */.k.docs.docSidebarItemCategory,ThemeClassNames/* ThemeClassNames.docs.docSidebarItemCategoryLevel */.k.docs.docSidebarItemCategoryLevel(level),'menu__list-item',{'menu__list-item--collapsed':collapsed},className)},/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('menu__list-item-collapsible',{'menu__list-item-collapsible--active':isCurrentPage})},/*#__PURE__*/react.createElement(Link/* default */.Z,(0,esm_extends/* default */.Z)({className:(0,clsx_m/* default */.Z)('menu__link',{'menu__link--sublist':collapsible,'menu__link--sublist-caret':!href&&collapsible,'menu__link--active':isActive}),onClick:collapsible?function(e){onItemClick==null?void 0:onItemClick(item);if(href){updateCollapsed(false);}else{e.preventDefault();updateCollapsed();}}:function(){onItemClick==null?void 0:onItemClick(item);},"aria-current":isCurrentPage?'page':undefined,"aria-expanded":collapsible?!collapsed:undefined,href:collapsible?hrefWithSSRFallback!=null?hrefWithSSRFallback:'#':hrefWithSSRFallback},props),label),href&&collapsible&&/*#__PURE__*/react.createElement(Category_CollapseButton,{categoryLabel:label,onClick:function onClick(e){e.preventDefault();updateCollapsed();}})),/*#__PURE__*/react.createElement(Collapsible/* Collapsible */.z,{lazy:true,as:"ul",className:"menu__list",collapsed:collapsed},/*#__PURE__*/react.createElement(theme_DocSidebarItems,{items:items,tabIndex:collapsed?-1:0,onItemClick:onItemClick,activePath:activePath,level:level+1})));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(13919);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/ExternalLink/index.js + 1 modules
var ExternalLink = __webpack_require__(79392);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Link/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Link_styles_module = ({"menuExternalLink":"menuExternalLink_NmtK"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Link/index.js
var Link_excluded=["item","onItemClick","activePath","level","index"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocSidebarItemLink(_ref){var item=_ref.item,onItemClick=_ref.onItemClick,activePath=_ref.activePath,level=_ref.level,index=_ref.index,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,Link_excluded);var href=item.href,label=item.label,className=item.className,autoAddBaseUrl=item.autoAddBaseUrl;var isActive=(0,docsUtils/* isActiveSidebarItem */._F)(item,activePath);var isInternalLink=(0,isInternalUrl/* default */.Z)(href);return/*#__PURE__*/react.createElement("li",{className:(0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.docs.docSidebarItemLink */.k.docs.docSidebarItemLink,ThemeClassNames/* ThemeClassNames.docs.docSidebarItemLinkLevel */.k.docs.docSidebarItemLinkLevel(level),'menu__list-item',className),key:label},/*#__PURE__*/react.createElement(Link/* default */.Z,(0,esm_extends/* default */.Z)({className:(0,clsx_m/* default */.Z)('menu__link',!isInternalLink&&Link_styles_module.menuExternalLink,{'menu__link--active':isActive}),autoAddBaseUrl:autoAddBaseUrl,"aria-current":isActive?'page':undefined,to:href},isInternalLink&&{onClick:onItemClick?function(){return onItemClick(item);}:undefined},props),label,!isInternalLink&&/*#__PURE__*/react.createElement(ExternalLink/* default */.Z,null)));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Html/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Html_styles_module = ({"menuHtmlItem":"menuHtmlItem_M9Kj"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Html/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocSidebarItemHtml(_ref){var item=_ref.item,level=_ref.level,index=_ref.index;var value=item.value,defaultStyle=item.defaultStyle,className=item.className;return/*#__PURE__*/react.createElement("li",{className:(0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.docs.docSidebarItemLink */.k.docs.docSidebarItemLink,ThemeClassNames/* ThemeClassNames.docs.docSidebarItemLinkLevel */.k.docs.docSidebarItemLinkLevel(level),defaultStyle&&[Html_styles_module.menuHtmlItem,'menu__list-item'],className),key:index// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:value}});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/index.js
var DocSidebarItem_excluded=["item"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocSidebarItem(_ref){var item=_ref.item,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,DocSidebarItem_excluded);switch(item.type){case'category':return/*#__PURE__*/react.createElement(DocSidebarItemCategory,(0,esm_extends/* default */.Z)({item:item},props));case'html':return/*#__PURE__*/react.createElement(DocSidebarItemHtml,(0,esm_extends/* default */.Z)({item:item},props));case'link':default:return/*#__PURE__*/react.createElement(DocSidebarItemLink,(0,esm_extends/* default */.Z)({item:item},props));}}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItems/index.js
var DocSidebarItems_excluded=["items"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO this item should probably not receive the "activePath" props
// TODO this triggers whole sidebar re-renders on navigation
function DocSidebarItems(_ref){var items=_ref.items,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,DocSidebarItems_excluded);return/*#__PURE__*/react.createElement(DocSidebarItemsExpandedStateProvider,null,items.map(function(item,index){return/*#__PURE__*/react.createElement(DocSidebarItem,(0,esm_extends/* default */.Z)({key:index,item:item,index:index},props));}));}// Optimize sidebar at each "level"
/* harmony default export */ var theme_DocSidebarItems = (/*#__PURE__*/(0,react.memo)(DocSidebarItems));
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/Content/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Content_styles_module = ({"menu":"menu_SIkG","menuWithAnnouncementBar":"menuWithAnnouncementBar_GW3s"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/Content/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useShowAnnouncementBar(){var _useAnnouncementBar=(0,announcementBar/* useAnnouncementBar */.nT)(),isActive=_useAnnouncementBar.isActive;var _useState=(0,react.useState)(isActive),showAnnouncementBar=_useState[0],setShowAnnouncementBar=_useState[1];(0,scrollUtils/* useScrollPosition */.RF)(function(_ref){var scrollY=_ref.scrollY;if(isActive){setShowAnnouncementBar(scrollY===0);}},[isActive]);return isActive&&showAnnouncementBar;}function DocSidebarDesktopContent(_ref2){var path=_ref2.path,sidebar=_ref2.sidebar,className=_ref2.className;var showAnnouncementBar=useShowAnnouncementBar();return/*#__PURE__*/react.createElement("nav",{"aria-label":(0,Translate/* translate */.I)({id:'theme.docs.sidebar.navAriaLabel',message:'Docs sidebar',description:'The ARIA label for the sidebar navigation'}),className:(0,clsx_m/* default */.Z)('menu thin-scrollbar',Content_styles_module.menu,showAnnouncementBar&&Content_styles_module.menuWithAnnouncementBar,className)},/*#__PURE__*/react.createElement("ul",{className:(0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.docs.docSidebarMenu */.k.docs.docSidebarMenu,'menu__list')},/*#__PURE__*/react.createElement(theme_DocSidebarItems,{items:sidebar,activePath:path,level:1})));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Desktop_styles_module = ({"sidebar":"sidebar_njMd","sidebarWithHideableNavbar":"sidebarWithHideableNavbar_wUlq","sidebarHidden":"sidebarHidden_VK0M","sidebarLogo":"sidebarLogo_isFc"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocSidebarDesktop(_ref){var path=_ref.path,sidebar=_ref.sidebar,onCollapse=_ref.onCollapse,isHidden=_ref.isHidden;var _useThemeConfig=(0,useThemeConfig/* useThemeConfig */.L)(),hideOnScroll=_useThemeConfig.navbar.hideOnScroll,hideable=_useThemeConfig.docs.sidebar.hideable;return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(Desktop_styles_module.sidebar,hideOnScroll&&Desktop_styles_module.sidebarWithHideableNavbar,isHidden&&Desktop_styles_module.sidebarHidden)},hideOnScroll&&/*#__PURE__*/react.createElement(Logo/* default */.Z,{tabIndex:-1,className:Desktop_styles_module.sidebarLogo}),/*#__PURE__*/react.createElement(DocSidebarDesktopContent,{path:path,sidebar:sidebar}),hideable&&/*#__PURE__*/react.createElement(CollapseButton,{onClick:onCollapse}));}/* harmony default export */ var Desktop = (/*#__PURE__*/react.memo(DocSidebarDesktop));
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarSecondaryMenu/content.js
var content = __webpack_require__(13102);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarMobileSidebar.js
var navbarMobileSidebar = __webpack_require__(93163);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Mobile/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// eslint-disable-next-line react/function-component-definition
var DocSidebarMobileSecondaryMenu=function DocSidebarMobileSecondaryMenu(_ref){var sidebar=_ref.sidebar,path=_ref.path;var mobileSidebar=(0,navbarMobileSidebar/* useNavbarMobileSidebar */.e)();return/*#__PURE__*/react.createElement("ul",{className:(0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.docs.docSidebarMenu */.k.docs.docSidebarMenu,'menu__list')},/*#__PURE__*/react.createElement(theme_DocSidebarItems,{items:sidebar,activePath:path,onItemClick:function onItemClick(item){// Mobile sidebar should only be closed if the category has a link
if(item.type==='category'&&item.href){mobileSidebar.toggle();}if(item.type==='link'){mobileSidebar.toggle();}},level:1}));};function DocSidebarMobile(props){return/*#__PURE__*/react.createElement(content/* NavbarSecondaryMenuFiller */.Zo,{component:DocSidebarMobileSecondaryMenu,props:props});}/* harmony default export */ var Mobile = (/*#__PURE__*/react.memo(DocSidebarMobile));
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocSidebar(props){var windowSize=(0,useWindowSize/* useWindowSize */.i)();// Desktop sidebar visible on hydration: need SSR rendering
var shouldRenderSidebarDesktop=windowSize==='desktop'||windowSize==='ssr';// Mobile sidebar not visible on hydration: can avoid SSR rendering
var shouldRenderSidebarMobile=windowSize==='mobile';return/*#__PURE__*/react.createElement(react.Fragment,null,shouldRenderSidebarDesktop&&/*#__PURE__*/react.createElement(Desktop,props),shouldRenderSidebarMobile&&/*#__PURE__*/react.createElement(Mobile,props));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/ExpandButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var ExpandButton_styles_module = ({"expandButton":"expandButton_m80_","expandButtonIcon":"expandButtonIcon_BlDH"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/ExpandButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocPageLayoutSidebarExpandButton(_ref){var toggleSidebar=_ref.toggleSidebar;return/*#__PURE__*/react.createElement("div",{className:ExpandButton_styles_module.expandButton,title:(0,Translate/* translate */.I)({id:'theme.docs.sidebar.expandButtonTitle',message:'Expand sidebar',description:'The ARIA label and title attribute for expand button of doc sidebar'}),"aria-label":(0,Translate/* translate */.I)({id:'theme.docs.sidebar.expandButtonAriaLabel',message:'Expand sidebar',description:'The ARIA label and title attribute for expand button of doc sidebar'}),tabIndex:0,role:"button",onKeyDown:toggleSidebar,onClick:toggleSidebar},/*#__PURE__*/react.createElement(IconArrow,{className:ExpandButton_styles_module.expandButtonIcon}));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Sidebar_styles_module = ({"docSidebarContainer":"docSidebarContainer_b6E3","docSidebarContainerHidden":"docSidebarContainerHidden_b3ry","sidebarViewport":"sidebarViewport_Xe31"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Reset sidebar state when sidebar changes
// Use React key to unmount/remount the children
// See https://github.com/facebook/docusaurus/issues/3414
function ResetOnSidebarChange(_ref){var _sidebar$name;var children=_ref.children;var sidebar=(0,docsSidebar/* useDocsSidebar */.V)();return/*#__PURE__*/react.createElement(react.Fragment,{key:(_sidebar$name=sidebar==null?void 0:sidebar.name)!=null?_sidebar$name:'noSidebar'},children);}function DocPageLayoutSidebar(_ref2){var sidebar=_ref2.sidebar,hiddenSidebarContainer=_ref2.hiddenSidebarContainer,setHiddenSidebarContainer=_ref2.setHiddenSidebarContainer;var _useLocation=(0,react_router/* useLocation */.TH)(),pathname=_useLocation.pathname;var _useState=(0,react.useState)(false),hiddenSidebar=_useState[0],setHiddenSidebar=_useState[1];var toggleSidebar=(0,react.useCallback)(function(){if(hiddenSidebar){setHiddenSidebar(false);}setHiddenSidebarContainer(function(value){return!value;});},[setHiddenSidebarContainer,hiddenSidebar]);return/*#__PURE__*/react.createElement("aside",{className:(0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.docs.docSidebarContainer */.k.docs.docSidebarContainer,Sidebar_styles_module.docSidebarContainer,hiddenSidebarContainer&&Sidebar_styles_module.docSidebarContainerHidden),onTransitionEnd:function onTransitionEnd(e){if(!e.currentTarget.classList.contains(Sidebar_styles_module.docSidebarContainer)){return;}if(hiddenSidebarContainer){setHiddenSidebar(true);}}},/*#__PURE__*/react.createElement(ResetOnSidebarChange,null,/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(Sidebar_styles_module.sidebarViewport,hiddenSidebar&&Sidebar_styles_module.sidebarViewportHidden)},/*#__PURE__*/react.createElement(DocSidebar,{sidebar:sidebar,path:pathname,onCollapse:toggleSidebar,isHidden:hiddenSidebar}),hiddenSidebar&&/*#__PURE__*/react.createElement(DocPageLayoutSidebarExpandButton,{toggleSidebar:toggleSidebar}))));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Main/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Main_styles_module = ({"docMainContainer":"docMainContainer_gTbr","docMainContainerEnhanced":"docMainContainerEnhanced_Uz_u","docItemWrapperEnhanced":"docItemWrapperEnhanced_czyv"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Main/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocPageLayoutMain(_ref){var hiddenSidebarContainer=_ref.hiddenSidebarContainer,children=_ref.children;var sidebar=(0,docsSidebar/* useDocsSidebar */.V)();return/*#__PURE__*/react.createElement("main",{className:(0,clsx_m/* default */.Z)(Main_styles_module.docMainContainer,(hiddenSidebarContainer||!sidebar)&&Main_styles_module.docMainContainerEnhanced)},/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('container padding-top--md padding-bottom--lg',Main_styles_module.docItemWrapper,hiddenSidebarContainer&&Main_styles_module.docItemWrapperEnhanced)},children));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Layout_styles_module = ({"docPage":"docPage__5DB","docsWrapper":"docsWrapper_BCFX"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocPageLayout(_ref){var children=_ref.children;var sidebar=(0,docsSidebar/* useDocsSidebar */.V)();var _useState=(0,react.useState)(false),hiddenSidebarContainer=_useState[0],setHiddenSidebarContainer=_useState[1];return/*#__PURE__*/react.createElement(Layout/* default */.Z,{wrapperClassName:Layout_styles_module.docsWrapper},/*#__PURE__*/react.createElement(BackToTopButton,null),/*#__PURE__*/react.createElement("div",{className:Layout_styles_module.docPage},sidebar&&/*#__PURE__*/react.createElement(DocPageLayoutSidebar,{sidebar:sidebar.items,hiddenSidebarContainer:hiddenSidebarContainer,setHiddenSidebarContainer:setHiddenSidebarContainer}),/*#__PURE__*/react.createElement(DocPageLayoutMain,{hiddenSidebarContainer:hiddenSidebarContainer},children)));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/NotFound.js
var NotFound = __webpack_require__(4972);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__(90197);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocPageMetadata(props){var versionMetadata=props.versionMetadata;return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(SearchMetadata/* default */.Z,{version:versionMetadata.version,tag:(0,searchUtils/* docVersionSearchTag */.os)(versionMetadata.pluginId,versionMetadata.version)}),/*#__PURE__*/react.createElement(metadataUtils/* PageMetadata */.d,null,versionMetadata.noIndex&&/*#__PURE__*/react.createElement("meta",{name:"robots",content:"noindex, nofollow"})));}function DocPage(props){var versionMetadata=props.versionMetadata;var currentDocRouteMetadata=(0,docsUtils/* useDocRouteMetadata */.hI)(props);if(!currentDocRouteMetadata){return/*#__PURE__*/react.createElement(NotFound["default"],null);}var docElement=currentDocRouteMetadata.docElement,sidebarName=currentDocRouteMetadata.sidebarName,sidebarItems=currentDocRouteMetadata.sidebarItems;return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(DocPageMetadata,props),/*#__PURE__*/react.createElement(metadataUtils/* HtmlClassNameProvider */.FG,{className:(0,clsx_m/* default */.Z)(// TODO: it should be removed from here
ThemeClassNames/* ThemeClassNames.wrapper.docsPages */.k.wrapper.docsPages,ThemeClassNames/* ThemeClassNames.page.docsDocPage */.k.page.docsDocPage,props.versionMetadata.className)},/*#__PURE__*/react.createElement(docsVersion/* DocsVersionProvider */.q,{version:versionMetadata},/*#__PURE__*/react.createElement(docsSidebar/* DocsSidebarProvider */.b,{name:sidebarName,items:sidebarItems},/*#__PURE__*/react.createElement(DocPageLayout,null,docElement)))));}

/***/ }),

/***/ 4972:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NotFound; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27378);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95999);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1944);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4416);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NotFound(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .PageMetadata */ .d,{title:(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .I)({id:'theme.NotFound.title',message:'Page Not Found'})}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",{className:"container margin-vert--xl"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"col col--6 col--offset-3"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",{className:"hero__title"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))));}

/***/ })

}]);