(self.webpackChunk=self.webpackChunk||[]).push([[918],{2326:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=2326,e.exports=t},9927:(e,t,n)=>{var r={"./docs/configuration/materializations/ha-hive.md":6898,"./docs/configuration/materializations/hive.md":9481,"./docs/configuration/materializations/iceberg.md":9136,"./docs/configuration/seeds.md":3836,"./docs/configuration/snapshots.md":9081,"./docs/contributing/contributing.md":9482,"./docs/getting-started/installation.md":9641,"./docs/getting-started/prerequisites/aws-resources.md":4047,"./docs/getting-started/prerequisites/iam-permissions.md":4632,"./docs/getting-started/profile-configuration.md":6725,"./docs/introduction.md":2057,"./docs/known-issues.md":7526};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id=9927},10:(e,t)=>{t.W={exampleString:{name:"Example String",versions:[{name:"Old Example String",version:"0.21"}]},dbtTheProduct:{name:"dbt"},dbtCore:{name:"dbt Core"},dbtCloud:{name:"dbt Cloud"},dbtIDE:{name:"dbt Cloud IDE"}}},4264:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(7294),i=n(9960);const a={spotlightBreadcrumbs:"spotlightBreadcrumbs__PkY",spotlightBreadcrumbsContainer:"spotlightBreadcrumbsContainer_VFYU",spotlightMemberCard:"spotlightMemberCard_w9D4",spotlightMemberImgContainer:"spotlightMemberImgContainer_Dqn4",spotlightMemberContent:"spotlightMemberContent_uboK",spotlightMemberHeader:"spotlightMemberHeader_SmNC",spotlightMemberDescription:"spotlightMemberDescription_JRQG",spotlightMemberInfo:"spotlightMemberInfo_ElK1",spotlightMemberSocial:"spotlightMemberSocial_WcCe",spotlightReadMore:"spotlightReadMore_AN1d"};var o=function(e){var t=e.isSpotlightMember,n=e.frontMatter,o=e.children;return t?r.createElement(r.Fragment,null,r.createElement("div",{className:"blog-breadcrumbs "+a.spotlightBreadcrumbs},r.createElement("div",{className:"container "+a.spotlightBreadcrumbsContainer},r.createElement(i.Z,{to:"/",title:"Home"},"Home"),r.createElement(i.Z,{to:"/community/spotlight",title:"Community spotlight"},"Community spotlight"),(null==n?void 0:n.title)&&(null==n?void 0:n.id)&&r.createElement(i.Z,{to:"/community/spotlight/"+n.id,title:n.title},n.title))),r.createElement("header",{className:a.spotlightMemberCard},o)):r.createElement("div",{className:a.spotlightMemberCard},o)};const s=function(e){var t=e.frontMatter,n=e.isSpotlightMember,s=void 0!==n&&n,c=t.id,l=t.title,d=t.description,m=t.image,u=t.jobTitle,p=t.companyName,g=t.socialLinks;return r.createElement(o,{isSpotlightMember:s,frontMatter:t},m&&r.createElement("div",{className:a.spotlightMemberImgContainer},c&&s?r.createElement("img",{src:m,alt:l}):r.createElement(i.Z,{to:"/community/spotlight/"+c,className:a.spotlightMemberHeader},r.createElement("img",{src:m,alt:l}))),r.createElement("div",{className:a.spotlightMemberContent},!s&&c?r.createElement(i.Z,{to:"/community/spotlight/"+c,className:a.spotlightMemberHeader},l):r.createElement("h1",{className:a.spotlightMemberHeader},l),(u||p)&&r.createElement("div",{className:a.spotlightMemberInfo},r.createElement("span",null,u&&u,u&&p&&", ",p&&p)),d&&!s&&r.createElement("p",{className:a.spotlightMemberDescription},d),g&&s&&(null==g?void 0:g.length)>0&&r.createElement("div",{className:a.spotlightMemberSocial},g.map((function(e,t){return r.createElement(r.Fragment,null,(null==e?void 0:e.name)&&(null==e?void 0:e.link)&&r.createElement(r.Fragment,null,0!==t&&" | ",r.createElement("a",{href:e.link,title:"#"},e.name)))}))),c&&!s&&r.createElement(i.Z,{to:"/community/spotlight/"+c,className:a.spotlightReadMore},"Read More")))}},1347:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(7294),i=n(9960),a=n(4155),o=n(5108),s=a?a.env:{},c=n(9927),l={},d={};function m(e,t){if(!e)return{bad:!0,link:e};var n=e.split("#"),r=n[0],i=n[1];if(!r&&i)return{bad:!1,link:e};r&&!i&&(i="");var a=!!r.match(/https?:/)||!!r.match(/:/),c=function(e){var t=e.replace(/.md$/,"");t.startsWith("/")||(t="/"+t);var n=null;for(var r in d){var i=r.replace(/.md$/,"").endsWith(t);if(i&&!n)n=d[r];else if(i&&n){var a='Ambiguous link slug: "'+e+'"\n- Two matched:, "'+n.id+'", "'+d[r].id+'"';if(o.error(a),"build"==s.DOCS_ENV)throw new Error("Ambiguous link detected: "+a)}}return n}(r);if(c)return{bad:!1,link:c.permalink+"#"+i};if(l[r])return{bad:!1,link:l[r].permalink+"#"+i};if(!a&&!e.startsWith("/")){if("build"!=s.DOCS_ENV||t)return{bad:!0,link:e};throw o.log(" - Broken link detected "+e),new Error("Broken link")}return{bad:!1,link:e}}c.keys().forEach((function(e){var t=c(e).metadata;if(t){var n=t.id.split("/"),r=n[n.length-1];if(l[r]){var i="Duplicate slug found: "+r+"\n";i+=" - "+t.source+"\n",i+=" - "+l[r].source,o.error(i)}l[r]=t,d[t.source]=t}}));const u=function(e){var t=e.children,n=e.href,a=e.ignoreInvalid,o=e.className,s={},c=m(n,a),l=c.bad,d=c.link;return l&&(s.borderBottom="2px dashed #ff6961"),r.createElement(i.Z,{className:o,style:s,href:d},t)}},3859:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var r=n(7462),i=n(7294),a=n(6010),o=n(6668),s=n(6412),c=n(7016),l=n(5448),d=n(3746),m=n(7054),u=n(5074),p=n(8002),g=n(9573);const h={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"};var f=n(7099),v=n(1347);function b(e){var t=(0,f.Z)(/(\\?)\[(.*?)\]\((.*?)\)/,{escape:1,text:2,url:3}),n=e.match(t);if(n){var r="\\"==n.groups.escape,i=n[0],a=i.length;return r&&(i=i.substring(1)),{text:n.groups.text,url:n.groups.url,full:i,index:n.index,escape:r,original_length:a}}return null}function k(e,t){return t||(t=["text"]),{types:t,content:e}}function E(e){var t=function(e){for(var t,n,r=[],a=e;a.length>0;){var o=b(a);if(!o){r.length>0&&r.push(k(a));break}var s=a.slice(0,o.index),c=a.slice(o.index+o.original_length);r.push(k(s)),o.escape?r.push(k(o.full)):r.push((t=o.text,n=o.url,k(i.createElement(v.Z,{className:"code-link",href:n},t)))),a=c}return 0==r.length?null:r}(e.map((function(e){return e.content})).join(""));return t||e}function w(e){var t,n=e.children,f=e.className,v=void 0===f?"":f,b=e.metastring,k=e.title,w=e.showLineNumbers,N=e.language,C=(0,o.L)().prism,Z=C.defaultLanguage,y=C.magicComments,M=null!=(t=null!=N?N:(0,c.Vo)(v))?t:Z,_=(0,s.p)(),L=(0,l.F)(),x=(0,c.bc)(b)||k,I=(0,c.nZ)(n,{metastring:b,language:M,magicComments:y}),A=I.lineClassNames,S=I.code,D=null!=w?w:(0,c.nt)(b);return i.createElement(g.Z,{as:"div",className:(0,a.Z)(v,M&&!v.includes("language-"+M)&&"language-"+M)},x&&i.createElement("div",{className:h.codeBlockTitle},x),i.createElement("div",{className:h.codeBlockContent},i.createElement(d.ZP,(0,r.Z)({},d.lG,{theme:_,code:S,language:null!=M?M:"text"}),(function(e){var t=e.className,n=e.tokens,r=e.getLineProps,o=e.getTokenProps;return i.createElement("pre",{tabIndex:0,ref:L.codeBlockRef,className:(0,a.Z)(t,h.codeBlock,"thin-scrollbar")},i.createElement("code",{className:(0,a.Z)(h.codeBlockLines,D&&h.codeBlockLinesWithNumbering)},n.map((function(e,t){var n=E(e);return i.createElement(m.Z,{key:t,line:n,getLineProps:r,getTokenProps:o,classNames:A[t],showLineNumbers:D})}))))})),i.createElement("div",{className:h.buttonGroup},(L.isEnabled||L.isCodeScrollable)&&i.createElement(p.Z,{className:h.codeButton,onClick:function(){return L.toggle()},isEnabled:L.isEnabled}),i.createElement(u.Z,{className:h.codeButton,code:S}))))}},4001:(e,t,n)=>{"use strict";n.d(t,{Z:()=>U});var r=n(4165),i=n(5861),a=n(7294),o=n(6010),s=n(7524),c=n(5130),l=n(2400),d=n(3120),m=n(4364),u=n(5729),p=n(5281),g=n(235),h=n(5042),f=n(4264);function v(e){var t,n=e.children,r=function(){var e=(0,c.k)(),t=e.metadata,n=e.frontMatter,r=e.contentTitle;return n.hide_title||void 0!==r?null:t.title}(),i=(0,c.k)(),s=i.metadata,l=i.frontMatter,d=null==s||null==(t=s.id)?void 0:t.includes("community/spotlight/");return a.createElement("div",{className:(0,o.Z)(p.k.docs.docMarkdown,"markdown")},r&&a.createElement(a.Fragment,null,d?a.createElement(f.Z,{frontMatter:l,isSpotlightMember:!0}):a.createElement("header",null,a.createElement(g.Z,{as:"h1"},r))),a.createElement(h.Z,null,n))}var b=n(4149);const k={docItemContainer:"docItemContainer_c0TR",docItemCol:"docItemCol_z5aJ",tocMobile:"tocMobile_EDxc",tocLoader:"tocLoader_BolO"},E={customSearchWeight:"customSearchWeight_fp9e"};const w=function(e){var t,n=e.weight,r=["light","medium","heavy"];if(n?"light"==n?t=25:"medium"==n?t=50:"heavy"==n&&(t=100):t=0,n&&!r.includes(n))throw"Invalid value for search_weight: "+n+". Allowed values are: "+r.join(", ")+".";return a.createElement("div",{className:E.customSearchWeight+" algolia-custom-search-weight"},t)};var N=n(7462),C=n(3366),Z=n(3743);const y={tableOfContents:"tableOfContents_jeP5",docItemContainer:"docItemContainer_hgFs"};var M=n(324);n(2263);function _(e){e.cta;return!1}var L=["className","featured_cta","editUrl"],x="table-of-contents__link toc-highlight",I="table-of-contents__link--active";function A(e){var t=e.className,n=e.featured_cta,r=e.editUrl,i=(0,C.Z)(e,L);return a.createElement("div",{className:(0,o.Z)(y.tableOfContents,"thin-scrollbar",t)},a.createElement(Z.Z,(0,N.Z)({},i,{linkClassName:x,linkActiveClassName:I})),r&&a.createElement("div",{className:"col margin-top--sm"},a.createElement(M.Z,{editUrl:r})),n&&a.createElement(_,{cta:n}))}var S=n(2943),D=n(7892);function B(e){return new Promise((function(t){var n=0,r=setInterval((function(){var i=document.querySelectorAll(e);n<10?i&&i.length?(t(i),clearInterval(r)):n++:clearInterval(r)}),500)}))}function T(){if(window.location.hash){var e=document.getElementById(window.location.hash.replace("#",""));if(e){var t=document.getElementsByClassName("navbar")[0];t.classList.add("navbarHiddenOnLoad");var n=0;window.addEventListener("scroll",(function(){document.body.getBoundingClientRect().top>n&&t.classList.remove("navbarHiddenOnLoad"),n=document.body.getBoundingClientRect().top})),e.scrollIntoView()}}}function U(e){var t=e.children,n=function(){var e=(0,c.k)(),t=e.frontMatter,n=e.toc,l=e.metadata,d=(null==t?void 0:t.cta)&&t.cta,m=(0,a.useContext)(D.Z).version,u=(0,a.useState)(n),g=u[0],h=u[1],f=(0,a.useState)(!0),v=f[0],b=f[1];(0,a.useEffect)((function(){function e(){return(e=(0,i.Z)((0,r.Z)().mark((function e(){var t,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(".markdown h1, .markdown h2, .markdown h3, .markdown h4, .markdown h5, .markdown h6");case 2:t=e.sent,n&&t&&t.length?(i=Array.from(t).reduce((function(e,t){var r=n.find((function(e){return e.id.includes(t.id)})),i=function(e){var t;return t="H2"===e.nodeName?2:"H3"===e.nodeName?3:null,{value:e.innerHTML,id:e.id,level:t&&t}};return r?e.push(i(t)):r||e.push(i(t)),e}),[]),g.length!==i.length?(b(!1),setTimeout((function(){h(i),b(!0)}),500)):b(!0)):b(!0),T();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n,m]);var E=(0,s.i)(),w=t.hide_table_of_contents,N=!w&&n.length>0;return{hidden:w,mobile:N?a.createElement(S.Z,{toc:g,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,o.Z)(p.k.docs.docTocMobile,k.tocMobile)}):void 0,desktop:!N||"desktop"!==E&&"ssr"!==E?void 0:a.createElement(a.Fragment,null,v?a.createElement(A,{toc:g,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:p.k.docs.docTocDesktop,featured_cta:d&&d,editUrl:(null==l?void 0:l.editUrl)&&l.editUrl}):a.createElement("img",{className:k.tocLoader,src:"/img/loader-icon.svg",alt:"Loading",title:"Loading"}))}}(),g=(0,c.k)().frontMatter,h=(null==g?void 0:g.search_weight)&&g.search_weight;return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,o.Z)("col",!n.hidden&&k.docItemCol)},a.createElement(d.Z,null),a.createElement("div",{className:k.docItemContainer},a.createElement("article",null,a.createElement(b.Z,null),a.createElement(m.Z,null),n.mobile,a.createElement(v,null,t),a.createElement(w,{weight:h}),a.createElement(u.Z,null)),a.createElement(l.Z,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}},5440:(e,t,n)=>{"use strict";n.d(t,{Z:()=>J});var r=n(7462),i=n(7294),a=n(8227),o=n(9870),s=n(1925),c=n(7124),l=n(8231),d=n(7969),m=n(372),u=n(1108),p=n(1875),g=n(7928),h=n(2905);const f=function(e){var t=e.children,n=e.expand,r=(0,i.useState)(n),a=r[0],o=r[1];return i.createElement("div",{style:{marginBottom:"10px"}},i.createElement("span",{onClick:function(){o(!a)}},a?"\u25bc":"\u25b6",i.createElement("span",{style:{cursor:"pointer",fontStyle:"italic",marginLeft:"5px"}},"Changelog")),a&&i.createElement("div",{style:{borderLeft:"1px solid #ccc",paddingLeft:"10px",marginLeft:"5px"}},t))};const v=function(e){var t,n=e.children,r=[],a=n.map((function(e,n){if(null==e.props.warehouse||""==e.props.warehouse)throw"Expected warehouse prop to be defined for each child of WHCode component";return r.push({label:e.props.warehouse,value:e.props.warehouse}),t=e.props.warehouse,i.createElement(h.Z,{key:n,value:t},e)}));return i.createElement(g.Z,{defaultValue:r[0].value,values:r},a)};const b=function(e){var t=e.children,n=e.header,r=e.description,a=e.expand,o=(0,i.useState)(a),s=o[0],c=o[1];return i.createElement(i.Fragment,null,i.createElement("h2",{onClick:function(){c(!s)}},n,s?" -":" +"),s?t:i.createElement("span",null,r||"Click to expand"))};const k=function(e){e.src,e.alt_header};var E=n(2326),w=[];E.keys().forEach((function(e,t){if(!e.endsWith("index.md")){var n=E(e),r=n.metadata,a=n.default({});w.push(i.createElement("div",{key:e,style:{marginBottom:"10px"}},i.createElement("h2",null,i.createElement("a",{className:"hash-link-faq",href:r.permalink},"#"),t+1,". ",r.title),i.createElement("div",null,a)))}}));const N=function(e){var t=e.style;return i.createElement("div",{style:t},w)},C={wrapper:"wrapper_V0Zw",title:"title_BmGx",titleInner:"titleInner_QNi1",icon:"icon_E6qs"};const Z=function(e){var t=e.children,n=e.name;return i.createElement("div",{className:C.wrapper},i.createElement("div",{className:C.title},i.createElement("div",{className:C.titleInner},i.createElement("svg",{className:C.icon,viewBox:"0 0 12 16",version:"1.1",width:"12",height:"16","aria-hidden":"true"},i.createElement("path",{fillRule:"evenodd",d:"M7.5 5L10 7.5 7.5 10l-.75-.75L8.5 7.5 6.75 5.75 7.5 5zm-3 0L2 7.5 4.5 10l.75-.75L3.5 7.5l1.75-1.75L4.5 5zM0 13V2c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1zm1 0h10V2H1v11z"})),i.createElement("span",null,n))),t)},y={title:"title_aGrV",docImage:"docImage_EYbW",collapsed:"collapsed_c_O2",leftAlignLightbox:"leftAlignLightbox_GhD4",rightAlignLightbox:"rightAlignLightbox_Ntwk"};const M=function(e){var t=e.src,n=e.collapsed,r=void 0!==n&&n,a=e.alignment,o=void 0===a?"center":a,s=e.alt,c=void 0===s?void 0:s,l=e.title,d=void 0===l?void 0:l,m=e.width,u=void 0===m?void 0:m,p="";return"left"===o?p=y.leftAlignLightbox:"right"===o&&(p=y.rightAlignLightbox),i.createElement(i.Fragment,null,i.createElement("link",{href:"/css/featherlight-styles.css",type:"text/css",rel:"stylesheet"}),i.createElement("span",{className:"\n          "+y.docImage+" \n          "+(r?y.collapsed:"")+"\n          "+p+"\n        ",style:u&&{maxWidth:u}},i.createElement("span",null,i.createElement("a",{href:"#","data-featherlight":t},i.createElement("img",{"data-toggle":"lightbox",alt:c||(d||""),title:d||"",src:t}))),d&&i.createElement("span",{className:y.title},d)))};var _=n(1347);const L=function(e){var t=e.id;return i.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/"+t,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,webkitallowfullscreen:"true",mozallowfullscreen:"true"})};var x=n(7892);var I=n(10);const A={Hero:"Hero__R2D",showGraphic:"showGraphic_RANd",w60:"w60_w_dw"};const S=function(e){var t=e.heading,n=e.subheading,r=e.showGraphic,a=void 0!==r&&r,o=e.customStyles,s=void 0===o?{}:o,c=e.classNames,l=void 0===c?"":c;return i.createElement("header",{className:" "+A.Hero+" container-fluid "+(l||""),style:s&&s},a&&i.createElement("div",{className:A.showGraphic}),i.createElement("div",{className:"container"},i.createElement("div",{className:"row justify-content-center"},i.createElement("div",{className:"col col--7"},i.createElement("h1",null,t),i.createElement("p",null,n)))))},D={card:"card_zHBt",cardWrapper:"cardWrapper_ahrI",cardBody:"cardBody_kmAY",icon:"icon_NBR_","dbt-core":"dbt-core_ACcc"};var B=n(4996),T=n(9960),U=n(2949);const H=function(e){var t=e.title,n=e.body,r=e.link,a=e.icon,o=(0,U.I)().colorMode,s=D[a]||"";return i.createElement("div",{className:D.cardWrapper},r?i.createElement(T.Z,{to:(0,B.Z)(r)},i.createElement("article",{className:D.card},a&&i.createElement("img",{src:"dark"===o?"/img/icons/white/"+a+".svg":"/img/icons/"+a+".svg",alt:"",className:D.icon+" "+s}),i.createElement("h3",null,t),i.createElement("div",{className:D.cardBody,dangerouslySetInnerHTML:{__html:n}}))):i.createElement("article",{className:D.card},a&&i.createElement("img",{src:"dark"===o?"/img/icons/white/"+a+".svg":"/img/icons/"+a+".svg",alt:"",className:D.icon+" "+s}),i.createElement("h3",null,t),i.createElement("div",{className:D.cardBody,dangerouslySetInnerHTML:{__html:n}})))},z={Callout:"Callout_WUJD",button:"button_pINe"};const W=function(e){var t=e.heading,n=e.subheading,r=e.cta,a=e.link;return i.createElement("div",{className:z.Callout+" container-fluid"},i.createElement("div",{className:"container"},i.createElement("div",{className:"row justify-content-center"},i.createElement("div",{className:"col col--8"},i.createElement("h2",null,t),i.createElement("p",null,n),i.createElement(T.Z,{to:(0,B.Z)(a)},i.createElement("a",{className:z.button},r))))))},q={card:"card_aplB",imageCard:"imageCard_Hwor",contentContainer:"contentContainer_Xdtd",imageContentContainer:"imageContentContainer_zgnx",cardWrapper:"cardWrapper_QTE7",ctaLink:"ctaLink_m8jo",icon:"icon_Vlli",readingTime:"readingTime_hHWo"};const F=function(e){var t=e.postMetaData,n=t.title,r=t.date,a=t.readingTime,o=(t.description,t.link),s=t.image;return i.createElement("div",{className:q.cardWrapper},i.createElement("article",{className:""+(s?q.imageCard:q.card)},s&&i.createElement("div",{className:q.imageContentContainer,style:{background:"no-repeat center/100% url("+s+")"}}),i.createElement("div",{className:q.contentContainer+" "+(s?q.imageContentContainer:null)},i.createElement(T.Z,{to:(0,B.Z)(o)},i.createElement("h3",null,n)),a&&i.createElement("span",{className:q.readingTime},r," \xb7 ",a," minute read"),i.createElement(T.Z,{className:q.ctaLink,to:(0,B.Z)(o)},"Read more"))))};var X=n(719),P=n(965);const O=function(e){var t=e.blogPostData;return i.createElement("div",null,i.createElement(X.tq,{spaceBetween:30,slidesPerView:1,effect:"fade",navigation:!0,modules:[P.W_],breakpoints:{640:{slidesPerView:2,spaceBetween:30},1024:{slidesPerView:3,spaceBetween:30}}},t.map((function(e){return i.createElement(X.o5,null,i.createElement(F,{postMetaData:e}))}))))};var V=n(4264),R=n(5742),G=n(2263),j=n(2190),Q="Community spotlight",K="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";const Y=function(e){var t=e.spotlightData,n=(0,G.Z)().siteConfig,r=Q+(null!=n&&n.title?" | "+n.title:"");return i.createElement(j.Z,null,i.createElement(R.Z,null,i.createElement("title",null,r),i.createElement("meta",{property:"og:title",content:r}),i.createElement("meta",{property:"og:description",content:K})),i.createElement(S,{heading:Q,subheading:K,showGraphic:!1,customStyles:{marginBottom:0},classNames:"community-spotlight-hero"}),i.createElement("section",{id:"spotlight-members-section"},i.createElement("div",{className:"container"},t&&t.length>0?i.createElement(i.Fragment,null,t.map((function(e,t){return i.createElement(V.Z,{frontMatter:e.data,key:t})}))):i.createElement("p",null,"No community spotlight members are available at this time. \ud83d\ude15"))))};const J={head:a.Z,code:o.Z,a:function(e){return i.createElement(_.Z,e)},pre:s.Z,details:c.Z,ul:d.Z,img:m.Z,h1:function(e){return i.createElement(l.Z,(0,r.Z)({as:"h1"},e))},h2:function(e){return i.createElement(l.Z,(0,r.Z)({as:"h2"},e))},h3:function(e){return i.createElement(l.Z,(0,r.Z)({as:"h3"},e))},h4:function(e){return i.createElement(l.Z,(0,r.Z)({as:"h4"},e))},h5:function(e){return i.createElement(l.Z,(0,r.Z)({as:"h5"},e))},h6:function(e){return i.createElement(l.Z,(0,r.Z)({as:"h6"},e))},admonition:u.Z,mermaid:p.Z,BlogPostCard:F,Callout:W,Card:H,Changelog:f,Collapsible:b,FAQ:k,FAQList:N,File:Z,Hero:S,Lightbox:M,Link:_.Z,PostCarousel:O,Tabs:g.Z,TabItem:h.Z,WHCode:v,YoutubeVideo:L,VersionBlock:function(e){var t=e.firstVersion,n=void 0===t?0:t,r=e.lastVersion,a=void 0===r?void 0:r,o=e.children,s=(0,i.useContext)(x.Z).version,c=(0,i.useState)(!0),l=c[0],d=c[1];if((0,i.useEffect)((function(){s&&d(!1)}),[s]),s){var m=parseFloat(s),u=parseFloat(n);if(a){if(m>parseFloat(a)||m<u)return null}else if(m<u)return null}return l?null:i.createElement(i.Fragment,null,o)},Var:function(e){var t=e.name;if(!t)return null;var n=(0,i.useState)(""),r=n[0],a=n[1],o=(0,i.useContext)(x.Z).version,s=I.W[t];return s?((0,i.useEffect)((function(){var e;if(null!=s&&null!=(e=s.versions)&&e.length&&o){var t=s.versions.sort((function(e,t){return parseFloat(e.version)>parseFloat(t.version)?1:-1})).find((function(e){return parseFloat(e.version)>=parseFloat(o)}));a(t?t.name:s.name)}else a(s.name)}),[o]),i.createElement("span",null,r)):null},CommunitySpotlightCard:V.Z,CommunitySpotlightList:Y}},6898:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={title:"High-availability Hive table",id:"ha-hive"},c=void 0,l={unversionedId:"docs/configuration/materializations/ha-hive",id:"docs/configuration/materializations/ha-hive",title:"High-availability Hive table",description:"",source:"@site/docs/docs/configuration/materializations/ha-hive.md",sourceDirName:"docs/configuration/materializations",slug:"/docs/configuration/materializations/ha-hive",permalink:"/pr-preview/pr-2/docs/configuration/materializations/ha-hive",draft:!1,editUrl:"https://github.com/dbt-athena/dbt-athena.github.io/edit/current/docs/docs/configuration/materializations/ha-hive.md",tags:[],version:"current",lastUpdatedAt:1682702910,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"High-availability Hive table",id:"ha-hive"},sidebar:"docs",previous:{title:"Hive table",permalink:"/pr-preview/pr-2/docs/configuration/materializations/hive"},next:{title:"Iceberg table",permalink:"/pr-preview/pr-2/docs/configuration/materializations/iceberg"}},d={},m=[],u={toc:m},p="wrapper";function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}))}g.isMDXComponent=!0},9481:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={title:"Hive table",id:"hive"},c=void 0,l={unversionedId:"docs/configuration/materializations/hive",id:"docs/configuration/materializations/hive",title:"Hive table",description:"",source:"@site/docs/docs/configuration/materializations/hive.md",sourceDirName:"docs/configuration/materializations",slug:"/docs/configuration/materializations/hive",permalink:"/pr-preview/pr-2/docs/configuration/materializations/hive",draft:!1,editUrl:"https://github.com/dbt-athena/dbt-athena.github.io/edit/current/docs/docs/configuration/materializations/hive.md",tags:[],version:"current",lastUpdatedAt:1682702910,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Hive table",id:"hive"},sidebar:"docs",previous:{title:"Profile configuration",permalink:"/pr-preview/pr-2/docs/getting-started/profile-configuration"},next:{title:"High-availability Hive table",permalink:"/pr-preview/pr-2/docs/configuration/materializations/ha-hive"}},d={},m=[],u={toc:m},p="wrapper";function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}))}g.isMDXComponent=!0},9136:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={title:"Iceberg table",id:"iceberg"},c=void 0,l={unversionedId:"docs/configuration/materializations/iceberg",id:"docs/configuration/materializations/iceberg",title:"Iceberg table",description:"",source:"@site/docs/docs/configuration/materializations/iceberg.md",sourceDirName:"docs/configuration/materializations",slug:"/docs/configuration/materializations/iceberg",permalink:"/pr-preview/pr-2/docs/configuration/materializations/iceberg",draft:!1,editUrl:"https://github.com/dbt-athena/dbt-athena.github.io/edit/current/docs/docs/configuration/materializations/iceberg.md",tags:[],version:"current",lastUpdatedAt:1682702910,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Iceberg table",id:"iceberg"},sidebar:"docs",previous:{title:"High-availability Hive table",permalink:"/pr-preview/pr-2/docs/configuration/materializations/ha-hive"},next:{title:"Seeds",permalink:"/pr-preview/pr-2/docs/configuration/seeds"}},d={},m=[],u={toc:m},p="wrapper";function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}))}g.isMDXComponent=!0},3836:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={title:"Seeds",id:"seeds"},c=void 0,l={unversionedId:"docs/configuration/seeds",id:"docs/configuration/seeds",title:"Seeds",description:"",source:"@site/docs/docs/configuration/seeds.md",sourceDirName:"docs/configuration",slug:"/docs/configuration/seeds",permalink:"/pr-preview/pr-2/docs/configuration/seeds",draft:!1,editUrl:"https://github.com/dbt-athena/dbt-athena.github.io/edit/current/docs/docs/configuration/seeds.md",tags:[],version:"current",lastUpdatedAt:1682702910,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Seeds",id:"seeds"},sidebar:"docs",previous:{title:"Iceberg table",permalink:"/pr-preview/pr-2/docs/configuration/materializations/iceberg"},next:{title:"Snapshots",permalink:"/pr-preview/pr-2/docs/configuration/snapshots"}},d={},m=[],u={toc:m},p="wrapper";function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}))}g.isMDXComponent=!0},9081:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={title:"Snapshots",id:"snapshots"},c=void 0,l={unversionedId:"docs/configuration/snapshots",id:"docs/configuration/snapshots",title:"Snapshots",description:"",source:"@site/docs/docs/configuration/snapshots.md",sourceDirName:"docs/configuration",slug:"/docs/configuration/snapshots",permalink:"/pr-preview/pr-2/docs/configuration/snapshots",draft:!1,editUrl:"https://github.com/dbt-athena/dbt-athena.github.io/edit/current/docs/docs/configuration/snapshots.md",tags:[],version:"current",lastUpdatedAt:1682702910,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Snapshots",id:"snapshots"},sidebar:"docs",previous:{title:"Seeds",permalink:"/pr-preview/pr-2/docs/configuration/seeds"},next:{title:"Known issues",permalink:"/pr-preview/pr-2/docs/known-issues"}},d={},m=[],u={toc:m},p="wrapper";function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}))}g.isMDXComponent=!0},9482:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={title:"Contributing",id:"contributing"},c=void 0,l={unversionedId:"docs/contributing/contributing",id:"docs/contributing/contributing",title:"Contributing",description:"",source:"@site/docs/docs/contributing/contributing.md",sourceDirName:"docs/contributing",slug:"/docs/contributing/",permalink:"/pr-preview/pr-2/docs/contributing/",draft:!1,editUrl:"https://github.com/dbt-athena/dbt-athena.github.io/edit/current/docs/docs/contributing/contributing.md",tags:[],version:"current",lastUpdatedAt:1682702910,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Contributing",id:"contributing"},sidebar:"docs",previous:{title:"Known issues",permalink:"/pr-preview/pr-2/docs/known-issues"}},d={},m=[],u={toc:m},p="wrapper";function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}))}g.isMDXComponent=!0},9641:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={title:"Installing dbt-athena",id:"installation",description:"Review a wide range of partners you can integrate and query with the dbt Semantic Layer.",sidebar_label:"Installation"},c=void 0,l={unversionedId:"docs/getting-started/installation",id:"docs/getting-started/installation",title:"Installing dbt-athena",description:"Review a wide range of partners you can integrate and query with the dbt Semantic Layer.",source:"@site/docs/docs/getting-started/installation.md",sourceDirName:"docs/getting-started",slug:"/docs/getting-started/installation",permalink:"/pr-preview/pr-2/docs/getting-started/installation",draft:!1,editUrl:"https://github.com/dbt-athena/dbt-athena.github.io/edit/current/docs/docs/getting-started/installation.md",tags:[],version:"current",lastUpdatedAt:1682702910,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Installing dbt-athena",id:"installation",description:"Review a wide range of partners you can integrate and query with the dbt Semantic Layer.",sidebar_label:"Installation"},sidebar:"docs",previous:{title:"IAM permissions",permalink:"/pr-preview/pr-2/docs/getting-started/prerequisites/iam-permissions"},next:{title:"Profile configuration",permalink:"/pr-preview/pr-2/docs/getting-started/profile-configuration"}},d={},m=[],u={toc:m},p="wrapper";function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Installation notes go here"))}g.isMDXComponent=!0},4047:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={title:"AWS resources",id:"aws-resources"},c=void 0,l={unversionedId:"docs/getting-started/prerequisites/aws-resources",id:"docs/getting-started/prerequisites/aws-resources",title:"AWS resources",description:"",source:"@site/docs/docs/getting-started/prerequisites/aws-resources.md",sourceDirName:"docs/getting-started/prerequisites",slug:"/docs/getting-started/prerequisites/aws-resources",permalink:"/pr-preview/pr-2/docs/getting-started/prerequisites/aws-resources",draft:!1,editUrl:"https://github.com/dbt-athena/dbt-athena.github.io/edit/current/docs/docs/getting-started/prerequisites/aws-resources.md",tags:[],version:"current",lastUpdatedAt:1682702910,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"AWS resources",id:"aws-resources"},sidebar:"docs",previous:{title:"Introduction",permalink:"/pr-preview/pr-2/"},next:{title:"IAM permissions",permalink:"/pr-preview/pr-2/docs/getting-started/prerequisites/iam-permissions"}},d={},m=[],u={toc:m},p="wrapper";function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}))}g.isMDXComponent=!0},4632:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={title:"IAM permissions",id:"iam-permissions"},c=void 0,l={unversionedId:"docs/getting-started/prerequisites/iam-permissions",id:"docs/getting-started/prerequisites/iam-permissions",title:"IAM permissions",description:"",source:"@site/docs/docs/getting-started/prerequisites/iam-permissions.md",sourceDirName:"docs/getting-started/prerequisites",slug:"/docs/getting-started/prerequisites/iam-permissions",permalink:"/pr-preview/pr-2/docs/getting-started/prerequisites/iam-permissions",draft:!1,editUrl:"https://github.com/dbt-athena/dbt-athena.github.io/edit/current/docs/docs/getting-started/prerequisites/iam-permissions.md",tags:[],version:"current",lastUpdatedAt:1682702910,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"IAM permissions",id:"iam-permissions"},sidebar:"docs",previous:{title:"AWS resources",permalink:"/pr-preview/pr-2/docs/getting-started/prerequisites/aws-resources"},next:{title:"Installation",permalink:"/pr-preview/pr-2/docs/getting-started/installation"}},d={},m=[],u={toc:m},p="wrapper";function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}))}g.isMDXComponent=!0},6725:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={title:"Profile configuration",id:"profile-configuration"},c=void 0,l={unversionedId:"docs/getting-started/profile-configuration",id:"docs/getting-started/profile-configuration",title:"Profile configuration",description:"",source:"@site/docs/docs/getting-started/profile-configuration.md",sourceDirName:"docs/getting-started",slug:"/docs/getting-started/profile-configuration",permalink:"/pr-preview/pr-2/docs/getting-started/profile-configuration",draft:!1,editUrl:"https://github.com/dbt-athena/dbt-athena.github.io/edit/current/docs/docs/getting-started/profile-configuration.md",tags:[],version:"current",lastUpdatedAt:1682702910,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Profile configuration",id:"profile-configuration"},sidebar:"docs",previous:{title:"Installation",permalink:"/pr-preview/pr-2/docs/getting-started/installation"},next:{title:"Hive table",permalink:"/pr-preview/pr-2/docs/configuration/materializations/hive"}},d={},m=[],u={toc:m},p="wrapper";function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}))}g.isMDXComponent=!0},2057:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={title:"What is dbt-athena?",id:"introduction",sidebar_label:"Introduction",slug:"/"},c=void 0,l={unversionedId:"docs/introduction",id:"docs/introduction",title:"What is dbt-athena?",description:"dbt-athena is a community-owned adapter for dbt Core. The dbt-athena package contains all the code to enable dbt to work with AWS Athena and transform data using SQL.",source:"@site/docs/docs/introduction.md",sourceDirName:"docs",slug:"/",permalink:"/pr-preview/pr-2/",draft:!1,editUrl:"https://github.com/dbt-athena/dbt-athena.github.io/edit/current/docs/docs/introduction.md",tags:[],version:"current",lastUpdatedAt:1682702910,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"What is dbt-athena?",id:"introduction",sidebar_label:"Introduction",slug:"/"},sidebar:"docs",next:{title:"AWS resources",permalink:"/pr-preview/pr-2/docs/getting-started/prerequisites/aws-resources"}},d={},m=[{value:"Features of dbt-athena",id:"features-of-dbt-athena",level:2}],u={toc:m},p="wrapper";function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"dbt-athena is a community-owned adapter for dbt Core. The dbt-athena package contains all the code to enable dbt to work with ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/athena/"},"AWS Athena")," and transform data using SQL."),(0,a.kt)("h2",{id:"features-of-dbt-athena"},"Features of dbt-athena"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2705 Supports dbt version ",(0,a.kt)("inlineCode",{parentName:"li"},"1.4.*")),(0,a.kt)("li",{parentName:"ul"},"\u2705 Supports ",(0,a.kt)("a",{parentName:"li",href:"https://docs.getdbt.com/docs/building-a-dbt-project/seeds"},"dbt seeds")),(0,a.kt)("li",{parentName:"ul"},"\u2705 Supports ",(0,a.kt)("a",{parentName:"li",href:"https://docs.getdbt.com/docs/build/snapshots"},"dbt snapshots")),(0,a.kt)("li",{parentName:"ul"},"\u2705 Supports ",(0,a.kt)("a",{parentName:"li",href:"https://docs.getdbt.com/docs/build/materializations#table"},"table materialization")," using Hive tables (Athena v2/v3) and ",(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/athena/latest/ug/querying-iceberg.html"},"Iceberg tables")," (Athena v3)"),(0,a.kt)("li",{parentName:"ul"},"\u2705 Supports ",(0,a.kt)("a",{parentName:"li",href:"https://docs.getdbt.com/docs/build/incremental-models"},"incremental models")," for Iceberg (",(0,a.kt)("inlineCode",{parentName:"li"},"merge")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"append"),") and Hive tables (",(0,a.kt)("inlineCode",{parentName:"li"},"insert_overwrite")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"append"),").")),(0,a.kt)("p",null,"Not supported yet: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/build/python-models#configuring-python-models"},"Python models"),", ",(0,a.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/reference/resource-configs/persist_docs"},"persist docs")," for views."))}g.isMDXComponent=!0},7526:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={title:"Known issues",id:"known-issues"},c=void 0,l={unversionedId:"docs/known-issues",id:"docs/known-issues",title:"Known issues",description:"",source:"@site/docs/docs/known-issues.md",sourceDirName:"docs",slug:"/docs/known-issues",permalink:"/pr-preview/pr-2/docs/known-issues",draft:!1,editUrl:"https://github.com/dbt-athena/dbt-athena.github.io/edit/current/docs/docs/known-issues.md",tags:[],version:"current",lastUpdatedAt:1682702910,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Known issues",id:"known-issues"},sidebar:"docs",previous:{title:"Snapshots",permalink:"/pr-preview/pr-2/docs/configuration/snapshots"},next:{title:"Contributing",permalink:"/pr-preview/pr-2/docs/contributing/"}},d={},m=[],u={toc:m},p="wrapper";function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}))}g.isMDXComponent=!0}}]);