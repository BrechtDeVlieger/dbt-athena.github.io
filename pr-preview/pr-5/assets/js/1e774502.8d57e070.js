"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[664],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4372:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],l={title:"Highly-available Hive table",id:"hive-ha"},s=void 0,c={unversionedId:"docs/configuration/materializations/hive-ha",id:"docs/configuration/materializations/hive-ha",title:"Highly-available Hive table",description:"The current implementation of the Hive table materialization can lead to downtime, because the target table is dropped and re-created. To have a less destructive behavior, it's possible to use the table='tablehiveha' materialization.",source:"@site/docs/docs/configuration/materializations/hive-ha.md",sourceDirName:"docs/configuration/materializations",slug:"/docs/configuration/materializations/hive-ha",permalink:"/pr-preview/pr-5/docs/configuration/materializations/hive-ha",draft:!1,editUrl:"https://github.com/dbt-athena/dbt-athena.github.io/edit/main/docs/docs/configuration/materializations/hive-ha.md",tags:[],version:"current",lastUpdatedAt:1683060208,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{title:"Highly-available Hive table",id:"hive-ha"},sidebar:"docs",previous:{title:"Hive table",permalink:"/pr-preview/pr-5/docs/configuration/materializations/hive"},next:{title:"Iceberg table",permalink:"/pr-preview/pr-5/docs/configuration/materializations/iceberg"}},p={},u=[{value:"Known issues",id:"known-issues",level:4}],d={toc:u},m="wrapper";function h(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The current implementation of the Hive table materialization can lead to downtime, because the target table is dropped and re-created. To have a less destructive behavior, it's possible to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"table='table_hive_ha'")," materialization."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"table_hive_ha"))," leverages the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/glue/latest/webapi/API_GetTableVersions.html"},"table versions"),' feature of Glue catalog: creating a "tmp" table and swapping the target table to the location of the tmp table.'),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This materialization is only available for ",(0,r.kt)("inlineCode",{parentName:"p"},"table_type=hive")," (default) and requires using unique locations on S3.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"{{\n  config(\n    materialized='table_hive_ha',\n    format='parquet',\n    partitioned_by=['status'],\n    s3_data_naming='table_unique'\n  )\n}}\n\nselect\n    'a' as user_id,\n    'pi' as user_name,\n    'active' as status\nunion all\nselect\n    'b' as user_id,\n    'sh' as user_name,\n    'active' as status\nunion all\nselect\n    'c' as user_id,\n    'sh' as user_name,\n    'disabled' as status\n")),(0,r.kt)("p",null,"By default, the materialization keeps the last 4 table versions. You can change it by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"versions_to_keep")," on the model configuration."),(0,r.kt)("h4",{id:"known-issues"},"Known issues"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When swapping from a table with partitions to a table without (and the other way around), there could be a little downtime. In case high performance is needed, consider bucketing instead of partitions"),(0,r.kt)("li",{parentName:"ul"},'By default, Glue "duplicate" the versions internally, so the last 2 versions of a table point to the same location. Therefore it\'s recommended to use ',(0,r.kt)("inlineCode",{parentName:"li"},"versions_to_keep")," >= 4, as this will avoid to have the older location removed.")))}h.isMDXComponent=!0}}]);