"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[6103],{

/***/ 65203:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ BlogPostPage; }
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(27378);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__(1944);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(35281);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/blogPost.js
var blogPost = __webpack_require__(9460);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogLayout/index.js + 4 modules
var BlogLayout = __webpack_require__(82747);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/index.js + 13 modules
var BlogPostItem = __webpack_require__(11945);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(95999);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/PaginatorNavLink/index.js
var PaginatorNavLink = __webpack_require__(32244);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostPaginator/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostPaginator(props){var nextItem=props.nextItem,prevItem=props.prevItem;return/*#__PURE__*/react.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,Translate/* translate */.I)({id:'theme.blog.post.paginator.navAriaLabel',message:'Blog post page navigation',description:'The ARIA label for the blog posts pagination'})},prevItem&&/*#__PURE__*/react.createElement(PaginatorNavLink/* default */.Z,(0,esm_extends/* default */.Z)({},prevItem,{subLabel:/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),nextItem&&/*#__PURE__*/react.createElement(PaginatorNavLink/* default */.Z,(0,esm_extends/* default */.Z)({},nextItem,{subLabel:/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:true})));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostPage/Metadata/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostPageMetadata(){var _assets$image;var _useBlogPost=(0,blogPost/* useBlogPost */.C)(),assets=_useBlogPost.assets,metadata=_useBlogPost.metadata;var title=metadata.title,description=metadata.description,date=metadata.date,tags=metadata.tags,authors=metadata.authors,frontMatter=metadata.frontMatter;var keywords=frontMatter.keywords;var image=(_assets$image=assets.image)!=null?_assets$image:frontMatter.image;return/*#__PURE__*/react.createElement(metadataUtils/* PageMetadata */.d,{title:title,description:description,keywords:keywords,image:image},/*#__PURE__*/react.createElement("meta",{property:"og:type",content:"article"}),/*#__PURE__*/react.createElement("meta",{property:"article:published_time",content:date}),authors.some(function(author){return author.url;})&&/*#__PURE__*/react.createElement("meta",{property:"article:author",content:authors.map(function(author){return author.url;}).filter(Boolean).join(',')}),tags.length>0&&/*#__PURE__*/react.createElement("meta",{property:"article:tag",content:tags.map(function(tag){return tag.label;}).join(',')}));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOC/index.js + 1 modules
var TOC = __webpack_require__(67493);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostPageContent(_ref){var sidebar=_ref.sidebar,children=_ref.children;var _useBlogPost=(0,blogPost/* useBlogPost */.C)(),metadata=_useBlogPost.metadata,toc=_useBlogPost.toc;var nextItem=metadata.nextItem,prevItem=metadata.prevItem,frontMatter=metadata.frontMatter;var hideTableOfContents=frontMatter.hide_table_of_contents,tocMinHeadingLevel=frontMatter.toc_min_heading_level,tocMaxHeadingLevel=frontMatter.toc_max_heading_level;return/*#__PURE__*/react.createElement(BlogLayout/* default */.Z,{sidebar:sidebar,toc:!hideTableOfContents&&toc.length>0?/*#__PURE__*/react.createElement(TOC/* default */.Z,{toc:toc,minHeadingLevel:tocMinHeadingLevel,maxHeadingLevel:tocMaxHeadingLevel}):undefined},/*#__PURE__*/react.createElement(BlogPostItem/* default */.Z,null,children),(nextItem||prevItem)&&/*#__PURE__*/react.createElement(BlogPostPaginator,{nextItem:nextItem,prevItem:prevItem}));}function BlogPostPage(props){var BlogPostContent=props.content;return/*#__PURE__*/react.createElement(blogPost/* BlogPostProvider */.n,{content:props.content,isBlogPostPage:true},/*#__PURE__*/react.createElement(metadataUtils/* HtmlClassNameProvider */.FG,{className:(0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.wrapper.blogPages */.k.wrapper.blogPages,ThemeClassNames/* ThemeClassNames.page.blogPostPage */.k.page.blogPostPage)},/*#__PURE__*/react.createElement(BlogPostPageMetadata,null),/*#__PURE__*/react.createElement(BlogPostPageContent,{sidebar:props.sidebar},/*#__PURE__*/react.createElement(BlogPostContent,null))));}

/***/ }),

/***/ 67493:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ TOC; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(27378);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/index.js + 3 modules
var TOCItems = __webpack_require__(93743);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOC/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"tableOfContents":"tableOfContents_bqdL","docItemContainer":"docItemContainer_F8PC"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOC/index.js
var _excluded=["className"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
var LINK_CLASS_NAME='table-of-contents__link toc-highlight';var LINK_ACTIVE_CLASS_NAME='table-of-contents__link--active';function TOC(_ref){var className=_ref.className,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,_excluded);return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(styles_module.tableOfContents,'thin-scrollbar',className)},/*#__PURE__*/react.createElement(TOCItems/* default */.Z,(0,esm_extends/* default */.Z)({},props,{linkClassName:LINK_CLASS_NAME,linkActiveClassName:LINK_ACTIVE_CLASS_NAME})));}

/***/ }),

/***/ 93743:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ TOCItems; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(27378);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(86668);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tocUtils.js
var _excluded=["parentIndex"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function treeifyTOC(flatTOC){var headings=flatTOC.map(function(heading){return Object.assign({},heading,{parentIndex:-1,children:[]});});// Keep track of which previous index would be the current heading's direct
// parent. Each entry <i> is the last index of the `headings` array at heading
// level <i>. We will modify these indices as we iterate through all headings.
// e.g. if an ### H3 was last seen at index 2, then prevIndexForLevel[3] === 2
// indices 0 and 1 will remain unused.
var prevIndexForLevel=Array(7).fill(-1);headings.forEach(function(curr,currIndex){// Take the last seen index for each ancestor level. the highest index will
// be the direct ancestor of the current heading.
var ancestorLevelIndexes=prevIndexForLevel.slice(2,curr.level);curr.parentIndex=Math.max.apply(Math,ancestorLevelIndexes);// Mark that curr.level was last seen at the current index.
prevIndexForLevel[curr.level]=currIndex;});var rootNodes=[];// For a given parentIndex, add each Node into that parent's `children` array
headings.forEach(function(heading){var parentIndex=heading.parentIndex,rest=(0,objectWithoutPropertiesLoose/* default */.Z)(heading,_excluded);if(parentIndex>=0){headings[parentIndex].children.push(rest);}else{rootNodes.push(rest);}});return rootNodes;}/**
 * Takes a flat TOC list (from the MDX loader) and treeifies it into what the
 * TOC components expect. Memoized for performance.
 */function useTreeifiedTOC(toc){return useMemo(function(){return treeifyTOC(toc);},[toc]);}function filterTOC(_ref){var toc=_ref.toc,minHeadingLevel=_ref.minHeadingLevel,maxHeadingLevel=_ref.maxHeadingLevel;function isValid(item){return item.level>=minHeadingLevel&&item.level<=maxHeadingLevel;}return toc.flatMap(function(item){var filteredChildren=filterTOC({toc:item.children,minHeadingLevel:minHeadingLevel,maxHeadingLevel:maxHeadingLevel});if(isValid(item)){return[Object.assign({},item,{children:filteredChildren})];}return filteredChildren;});}/**
 * Takes a flat TOC list (from the MDX loader) and treeifies it into what the
 * TOC components expect, applying the `minHeadingLevel` and `maxHeadingLevel`.
 * Memoized for performance.
 *
 * **Important**: this is not the same as `useTreeifiedTOC(toc.filter(...))`,
 * because we have to filter the TOC after it has been treeified. This is mostly
 * to ensure that weird TOC structures preserve their semantics. For example, an
 * h3-h2-h4 sequence should not be treeified as an "h3 > h4" hierarchy with
 * min=3, max=4, but should rather be "[h3, h4]" (since the h2 heading has split
 * the two headings and they are not parent-children)
 */function useFilteredAndTreeifiedTOC(_ref2){var toc=_ref2.toc,minHeadingLevel=_ref2.minHeadingLevel,maxHeadingLevel=_ref2.maxHeadingLevel;return (0,react.useMemo)(function(){return filterTOC({toc:treeifyTOC(toc),minHeadingLevel:minHeadingLevel,maxHeadingLevel:maxHeadingLevel});},[toc,minHeadingLevel,maxHeadingLevel]);}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useTOCHighlight.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO make the hardcoded theme-classic classnames configurable (or add them
// to ThemeClassNames?)
/**
 * If the anchor has no height and is just a "marker" in the DOM; we'll use the
 * parent (normally the link text) rect boundaries instead
 */function getVisibleBoundingClientRect(element){var rect=element.getBoundingClientRect();var hasNoHeight=rect.top===rect.bottom;if(hasNoHeight){return getVisibleBoundingClientRect(element.parentNode);}return rect;}/**
 * Considering we divide viewport into 2 zones of each 50vh, this returns true
 * if an element is in the first zone (i.e., appear in viewport, near the top)
 */function isInViewportTopHalf(boundingRect){return boundingRect.top>0&&boundingRect.bottom<window.innerHeight/2;}function getAnchors(_ref){var minHeadingLevel=_ref.minHeadingLevel,maxHeadingLevel=_ref.maxHeadingLevel;var selectors=[];for(var i=minHeadingLevel;i<=maxHeadingLevel;i+=1){selectors.push("h"+i+".anchor");}return Array.from(document.querySelectorAll(selectors.join()));}function getActiveAnchor(anchors,_ref2){var _anchors2;var anchorTopOffset=_ref2.anchorTopOffset;// Naming is hard: The "nextVisibleAnchor" is the first anchor that appear
// under the viewport top boundary. It does not mean this anchor is visible
// yet, but if user continues scrolling down, it will be the first to become
// visible
var nextVisibleAnchor=anchors.find(function(anchor){var boundingRect=getVisibleBoundingClientRect(anchor);return boundingRect.top>=anchorTopOffset;});if(nextVisibleAnchor){var _anchors;var boundingRect=getVisibleBoundingClientRect(nextVisibleAnchor);// If anchor is in the top half of the viewport: it is the one we consider
// "active" (unless it's too close to the top and and soon to be scrolled
// outside viewport)
if(isInViewportTopHalf(boundingRect)){return nextVisibleAnchor;}// If anchor is in the bottom half of the viewport, or under the viewport,
// we consider the active anchor is the previous one. This is because the
// main text appearing in the user screen mostly belong to the previous
// anchor. Returns null for the first anchor, see
// https://github.com/facebook/docusaurus/issues/5318
return(_anchors=anchors[anchors.indexOf(nextVisibleAnchor)-1])!=null?_anchors:null;}// No anchor under viewport top (i.e. we are at the bottom of the page),
// highlight the last anchor found
return(_anchors2=anchors[anchors.length-1])!=null?_anchors2:null;}function getLinkAnchorValue(link){return decodeURIComponent(link.href.substring(link.href.indexOf('#')+1));}function getLinks(linkClassName){return Array.from(document.getElementsByClassName(linkClassName));}function getNavbarHeight(){// Not ideal to obtain actual height this way
// Using TS ! (not ?) because otherwise a bad selector would be un-noticed
return document.querySelector('.navbar').clientHeight;}function useAnchorTopOffsetRef(){var anchorTopOffsetRef=(0,react.useRef)(0);var _useThemeConfig=(0,useThemeConfig/* useThemeConfig */.L)(),hideOnScroll=_useThemeConfig.navbar.hideOnScroll;(0,react.useEffect)(function(){anchorTopOffsetRef.current=hideOnScroll?0:getNavbarHeight();},[hideOnScroll]);return anchorTopOffsetRef;}/**
 * Side-effect that applies the active class name to the TOC heading that the
 * user is currently viewing. Disabled when `config` is undefined.
 */function useTOCHighlight(config){var lastActiveLinkRef=(0,react.useRef)(undefined);var anchorTopOffsetRef=useAnchorTopOffsetRef();(0,react.useEffect)(function(){if(!config){// No-op, highlighting is disabled
return function(){};}var linkClassName=config.linkClassName,linkActiveClassName=config.linkActiveClassName,minHeadingLevel=config.minHeadingLevel,maxHeadingLevel=config.maxHeadingLevel;function updateLinkActiveClass(link,active){if(active){if(lastActiveLinkRef.current&&lastActiveLinkRef.current!==link){lastActiveLinkRef.current.classList.remove(linkActiveClassName);}link.classList.add(linkActiveClassName);lastActiveLinkRef.current=link;// link.scrollIntoView({block: 'nearest'});
}else{link.classList.remove(linkActiveClassName);}}function updateActiveLink(){var links=getLinks(linkClassName);var anchors=getAnchors({minHeadingLevel:minHeadingLevel,maxHeadingLevel:maxHeadingLevel});var activeAnchor=getActiveAnchor(anchors,{anchorTopOffset:anchorTopOffsetRef.current});var activeLink=links.find(function(link){return activeAnchor&&activeAnchor.id===getLinkAnchorValue(link);});links.forEach(function(link){updateLinkActiveClass(link,link===activeLink);});}document.addEventListener('scroll',updateActiveLink);document.addEventListener('resize',updateActiveLink);updateActiveLink();return function(){document.removeEventListener('scroll',updateActiveLink);document.removeEventListener('resize',updateActiveLink);};},[config,anchorTopOffsetRef]);}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/Tree.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Recursive component rendering the toc tree
function TOCItemTree(_ref){var toc=_ref.toc,className=_ref.className,linkClassName=_ref.linkClassName,isChild=_ref.isChild;if(!toc.length){return null;}return/*#__PURE__*/react.createElement("ul",{className:isChild?undefined:className},toc.map(function(heading){return/*#__PURE__*/react.createElement("li",{key:heading.id},/*#__PURE__*/react.createElement("a",{href:"#"+heading.id,className:linkClassName!=null?linkClassName:undefined// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:heading.value}}),/*#__PURE__*/react.createElement(TOCItemTree,{isChild:true,toc:heading.children,className:className,linkClassName:linkClassName}));}));}// Memo only the tree root is enough
/* harmony default export */ var Tree = (/*#__PURE__*/react.memo(TOCItemTree));
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/index.js
var TOCItems_excluded=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TOCItems(_ref){var toc=_ref.toc,_ref$className=_ref.className,className=_ref$className===void 0?'table-of-contents table-of-contents__left-border':_ref$className,_ref$linkClassName=_ref.linkClassName,linkClassName=_ref$linkClassName===void 0?'table-of-contents__link':_ref$linkClassName,_ref$linkActiveClassN=_ref.linkActiveClassName,linkActiveClassName=_ref$linkActiveClassN===void 0?undefined:_ref$linkActiveClassN,minHeadingLevelOption=_ref.minHeadingLevel,maxHeadingLevelOption=_ref.maxHeadingLevel,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,TOCItems_excluded);var themeConfig=(0,useThemeConfig/* useThemeConfig */.L)();var minHeadingLevel=minHeadingLevelOption!=null?minHeadingLevelOption:themeConfig.tableOfContents.minHeadingLevel;var maxHeadingLevel=maxHeadingLevelOption!=null?maxHeadingLevelOption:themeConfig.tableOfContents.maxHeadingLevel;var tocTree=useFilteredAndTreeifiedTOC({toc:toc,minHeadingLevel:minHeadingLevel,maxHeadingLevel:maxHeadingLevel});var tocHighlightConfig=(0,react.useMemo)(function(){if(linkClassName&&linkActiveClassName){return{linkClassName:linkClassName,linkActiveClassName:linkActiveClassName,minHeadingLevel:minHeadingLevel,maxHeadingLevel:maxHeadingLevel};}return undefined;},[linkClassName,linkActiveClassName,minHeadingLevel,maxHeadingLevel]);useTOCHighlight(tocHighlightConfig);return/*#__PURE__*/react.createElement(Tree,(0,esm_extends/* default */.Z)({toc:tocTree,className:className,linkClassName:linkClassName},props));}

/***/ })

}]);