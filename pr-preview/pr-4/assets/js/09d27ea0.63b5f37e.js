"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[727],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||s;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4632:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),i=["components"],o={title:"IAM permissions",id:"iam-permissions"},l=void 0,u={unversionedId:"docs/getting-started/prerequisites/iam-permissions",id:"docs/getting-started/prerequisites/iam-permissions",title:"IAM permissions",description:"Athena IAM permissions",source:"@site/docs/docs/getting-started/prerequisites/iam-permissions.md",sourceDirName:"docs/getting-started/prerequisites",slug:"/docs/getting-started/prerequisites/iam-permissions",permalink:"/pr-preview/pr-4/docs/getting-started/prerequisites/iam-permissions",draft:!1,editUrl:"https://github.com/dbt-athena/dbt-athena.github.io/edit/main/docs/docs/getting-started/prerequisites/iam-permissions.md",tags:[],version:"current",lastUpdatedAt:1683040456,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{title:"IAM permissions",id:"iam-permissions"},sidebar:"docs",previous:{title:"AWS resources",permalink:"/pr-preview/pr-4/docs/getting-started/prerequisites/aws-resources"},next:{title:"Installation",permalink:"/pr-preview/pr-4/docs/getting-started/installation"}},p={},c=[{value:"Athena IAM permissions",id:"athena-iam-permissions",level:2},{value:"Glue IAM permissions",id:"glue-iam-permissions",level:2},{value:"S3 IAM permissions",id:"s3-iam-permissions",level:2},{value:"Lake Formation",id:"lake-formation",level:2}],m={toc:c},d="wrapper";function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"athena-iam-permissions"},"Athena IAM permissions"),(0,s.kt)("p",null,"Athena permissions that are required to run queries:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"athena:StartQueryExecution",\n"athena:GetQueryResults",\n"athena:GetWorkGroup",\n"athena:StopQueryExecution",\n"athena:GetQueryExecution",\n')),(0,s.kt)("h2",{id:"glue-iam-permissions"},"Glue IAM permissions"),(0,s.kt)("p",null,"dbt-athena uses the AWS Glue API to fetch metadata. You will need to set these permissions on the Glue databases you are reading from:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"glue:GetDatabase",\n"glue:GetDatabases",\n"glue:GetTable",\n"glue:GetTables",\n"glue:GetPartition",\n"glue:GetPartitions",\n')),(0,s.kt)("p",null,"You will need these permissions on the glue databases you are writing to:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"glue:GetDatabase",\n"glue:GetDatabases",\n"glue:GetTable",\n"glue:GetTables",\n"glue:GetPartition",\n"glue:GetPartitions",\n"glue:BatchCreatePartition",\n"glue:BatchUpdatePartition",\n"glue:BatchDeletePartition",\n"glue:BatchDeleteTable",\n"glue:BatchDeleteTableVersion",\n"glue:CreatePartition",\n"glue:UpdatePartition",\n"glue:DeletePartition",\n"glue:CreateTable",\n"glue:UpdateTable",\n"glue:DeleteTable",\n"glue:DeleteTableVersion",\n')),(0,s.kt)("h2",{id:"s3-iam-permissions"},"S3 IAM permissions"),(0,s.kt)("p",null,"You will need these permissions on the S3 buckets that dbt-athena reads from:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"s3:GetObject",\n"s3:GetBucketLocation",\n"s3:ListBucket",\n"s3:ListBucketMultipartUploads",\n"s3:ListMultipartUploadParts",\n')),(0,s.kt)("p",null,"You will need these permissions on the S3 buckets you are writing to (buckets defined in ",(0,s.kt)("inlineCode",{parentName:"p"},"s3_staging_dir")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"s3_data_dir"),"):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"s3:GetObject",\n"s3:GetBucketLocation",\n"s3:ListBucket",\n"s3:ListBucketMultipartUploads",\n"s3:ListMultipartUploadParts",\n"s3:AbortMultipartUpload",\n"s3:PutObject",\n"s3:DeleteObject",\n')),(0,s.kt)("p",null,"If your buckets are encrypted using KMS, you will need these permissions on every KMS key of the buckets:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"kms:GenerateDataKey*",\n"kms:DescribeKey",\n"kms:Decrypt",\n')),(0,s.kt)("h2",{id:"lake-formation"},"Lake Formation"),(0,s.kt)("p",null,"If you are using databases managed by AWS Lake Formation, then you need to set these permissions on the role.:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"lakeformation:GetDataAccess",\n')))}g.isMDXComponent=!0}}]);