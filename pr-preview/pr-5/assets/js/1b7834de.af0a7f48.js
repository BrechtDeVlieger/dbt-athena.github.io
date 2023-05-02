"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[192],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(a),m=r,h=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2057:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={title:"What is dbt-athena?",id:"introduction",sidebar_label:"Introduction",slug:"/"},d=void 0,l={unversionedId:"docs/introduction",id:"docs/introduction",title:"What is dbt-athena?",description:"dbt-athena is a community-owned adapter for dbt Core. The dbt-athena package contains all the code to enable dbt to work with AWS Athena and transform data using SQL.",source:"@site/docs/docs/introduction.md",sourceDirName:"docs",slug:"/",permalink:"/pr-preview/pr-5/",draft:!1,editUrl:"https://github.com/dbt-athena/dbt-athena.github.io/edit/main/docs/docs/introduction.md",tags:[],version:"current",lastUpdatedAt:1683060208,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{title:"What is dbt-athena?",id:"introduction",sidebar_label:"Introduction",slug:"/"},sidebar:"docs",next:{title:"AWS resources",permalink:"/pr-preview/pr-5/docs/getting-started/prerequisites/aws-resources"}},c={},p=[{value:"Features of dbt-athena",id:"features-of-dbt-athena",level:2}],u={toc:p},m="wrapper";function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"dbt-athena is a community-owned adapter for dbt Core. The dbt-athena package contains all the code to enable dbt to work with ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/athena/"},"AWS Athena")," and transform data using SQL."),(0,o.kt)("p",null,"In essence, the dbt-athena adapter will transform existing data in Athena by leveraging the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/athena/latest/ug/create-table-as.html"},(0,o.kt)("inlineCode",{parentName:"a"},"CREATE TABLE AS"))," or ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/athena/latest/ug/create-view.html"},(0,o.kt)("inlineCode",{parentName:"a"},"CREATE VIEW"))," SQL queries in AWS Athena."),(0,o.kt)("h2",{id:"features-of-dbt-athena"},"Features of dbt-athena"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u2705 Supports dbt version ",(0,o.kt)("inlineCode",{parentName:"li"},"1.4.*")),(0,o.kt)("li",{parentName:"ul"},"\u2705 Supports ",(0,o.kt)("a",{parentName:"li",href:"https://docs.getdbt.com/docs/building-a-dbt-project/seeds"},"dbt seeds")),(0,o.kt)("li",{parentName:"ul"},"\u2705 Supports ",(0,o.kt)("a",{parentName:"li",href:"https://docs.getdbt.com/docs/build/snapshots"},"dbt snapshots")),(0,o.kt)("li",{parentName:"ul"},"\u2705 Supports ",(0,o.kt)("a",{parentName:"li",href:"https://docs.getdbt.com/docs/build/materializations#table"},"table materialization")," using Hive tables (Athena v2/v3) and ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/athena/latest/ug/querying-iceberg.html"},"Iceberg tables")," (Athena v3)"),(0,o.kt)("li",{parentName:"ul"},"\u2705 Supports ",(0,o.kt)("a",{parentName:"li",href:"https://docs.getdbt.com/docs/build/incremental-models"},"incremental models")," for Iceberg (",(0,o.kt)("inlineCode",{parentName:"li"},"merge")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"append"),") and Hive tables (",(0,o.kt)("inlineCode",{parentName:"li"},"insert_overwrite")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"append"),").")),(0,o.kt)("p",null,"Not supported yet: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/build/python-models#configuring-python-models"},"Python models"),", ",(0,o.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/reference/resource-configs/persist_docs"},"persist docs")," for views."))}h.isMDXComponent=!0}}]);