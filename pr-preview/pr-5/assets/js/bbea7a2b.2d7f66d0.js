"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[637],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=d(n),h=s,u=l["".concat(i,".").concat(h)]||l[h]||m[h]||r;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=h;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[l]="string"==typeof e?e:s,o[1]=p;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>y,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var a,s=n(7462),r=n(3366),o=(n(7294),n(3905)),p=n(5108),i=["components"],d={title:"Snapshots",id:"snapshots"},c=void 0,l={unversionedId:"docs/configuration/snapshots",id:"docs/configuration/snapshots",title:"Snapshots",description:"The dbt-athena adapter supports dbt snapshots. Both the dbt timestamp and check strategy are supported. To create a snapshot, create a snapshot file in the dbt snapshots directory. If directory does not exist create one. Read more about dbt snapshots here.",source:"@site/docs/docs/configuration/snapshots.md",sourceDirName:"docs/configuration",slug:"/docs/configuration/snapshots",permalink:"/pr-preview/pr-5/docs/configuration/snapshots",draft:!1,editUrl:"https://github.com/dbt-athena/dbt-athena.github.io/edit/main/docs/docs/configuration/snapshots.md",tags:[],version:"current",lastUpdatedAt:1683060208,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{title:"Snapshots",id:"snapshots"},sidebar:"docs",previous:{title:"Seeds",permalink:"/pr-preview/pr-5/docs/configuration/seeds"},next:{title:"Known issues",permalink:"/pr-preview/pr-5/docs/known-issues"}},m={},h=[{value:"Detecting row changes",id:"detecting-row-changes",level:2},{value:"Timestamp strategy (recommended)",id:"timestamp-strategy-recommended",level:3},{value:"Check strategy",id:"check-strategy",level:3},{value:"Hard-deletes (opt-in)",id:"hard-deletes-opt-in",level:3},{value:"Example",id:"example",level:2}],u=(a="File",function(e){return p.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),f={toc:h},g="wrapper";function y(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(g,(0,s.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The dbt-athena adapter supports ",(0,o.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/build/snapshots"},"dbt snapshots"),". Both the dbt timestamp and check strategy are supported. To create a snapshot, create a snapshot file in the dbt snapshots directory. If directory does not exist create one. Read more about dbt snapshots ",(0,o.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/build/snapshots"},"here"),"."),(0,o.kt)("h2",{id:"detecting-row-changes"},"Detecting row changes"),(0,o.kt)("h3",{id:"timestamp-strategy-recommended"},"Timestamp strategy (recommended)"),(0,o.kt)("p",null,"To use the timestamp strategy refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/build/snapshots#timestamp-strategy-recommended"},"dbt docs")),(0,o.kt)("h3",{id:"check-strategy"},"Check strategy"),(0,o.kt)("p",null,"To use the check strategy refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/build/snapshots#check-strategy"},"dbt docs")),(0,o.kt)("h3",{id:"hard-deletes-opt-in"},"Hard-deletes (opt-in)"),(0,o.kt)("p",null,"The materialization also supports invalidating hard deletes. Check the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/build/snapshots#hard-deletes-opt-in"},"docs")," to understand the usage."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(u,{name:"seeds/employment_indicators_november_2022_csv_tables.csv",mdxType:"File"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},"Series_reference,Period,Data_value,Suppressed\nMEIM.S1WA,1999.04,80267,\nMEIM.S1WA,1999.05,70803,\nMEIM.S1WA,1999.06,65792,\nMEIM.S1WA,1999.07,66194,\nMEIM.S1WA,1999.08,67259,\nMEIM.S1WA,1999.09,69691,\nMEIM.S1WA,1999.1,72475,\nMEIM.S1WA,1999.11,79263,\nMEIM.S1WA,1999.12,86540,\nMEIM.S1WA,2000.01,82552,\nMEIM.S1WA,2000.02,81709,\nMEIM.S1WA,2000.03,84126,\nMEIM.S1WA,2000.04,77089,\nMEIM.S1WA,2000.05,73811,\nMEIM.S1WA,2000.06,70070,\nMEIM.S1WA,2000.07,69873,\nMEIM.S1WA,2000.08,71468,\nMEIM.S1WA,2000.09,72462,\nMEIM.S1WA,2000.1,74897,\n"))),(0,o.kt)(u,{name:"models/example_model.sql",mdxType:"File"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"{{\n  config(materialized='table')\n}}\n\nselect\n    row_number() over () as id,\n    *,\n    cast(from_unixtime(to_unixtime(now())) as timestamp(6)) AS refresh_timestamp\nfrom {{ ref('employment_indicators_november_2022_csv_tables') }}\n"))),(0,o.kt)(u,{name:"snapshots/model_snapshot_timestamp_strategy.sql",mdxType:"File"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"{% snapshot model_snapshot_timestamp_strategy %}\n  {{\n      config(\n        strategy='timestamp',\n        updated_at='refresh_timestamp',\n        unique_key='id'\n      )\n  }}\n\n  select * from {{ ref('model') }}\n{% endsnapshot %}\n\n"))),(0,o.kt)(u,{name:"snapshots/model_snapshot_timestamp_strategy_hard_deletes.sql",mdxType:"File"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"{% snapshot model_snapshot_timestamp_strategy_hard_deletes %}\n  {{\n      config(\n        unique_key='id',\n        strategy='timestamp',\n        updated_at='refresh_timestamp',\n        invalidate_hard_deletes=True,\n      )\n  }}\n  select * from {{ ref('model') }}\n{% endsnapshot %}\n"))),(0,o.kt)(u,{name:"snapshots/model_snapshot_check_strategy.sql",mdxType:"File"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"{% snapshot model_snapshot_check_strategy %}\n  {{\n      config(\n        unique_key='id',\n        strategy='check',\n        check_cols=['series_reference','data_value']\n      )\n  }}\n  select * from {{ ref('model') }}\n{% endsnapshot %}\n"))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Snapshots do not support dropping columns from the source table. If you drop a column, make sure to drop the column from the snapshot as well. Another workaround is to ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," the column in the snapshot definition to preserve history")))}y.isMDXComponent=!0}}]);