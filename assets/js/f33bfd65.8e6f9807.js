"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[7406],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),m=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(r),d=n,f=c["".concat(l,".").concat(d)]||c[d]||u[d]||s;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var m=2;m<s;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9388:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var a=r(7462),n=(r(7294),r(3905));const s={title:"Timestamps",id:"timestamps"},i=void 0,o={unversionedId:"use-cases/timestamps/timestamps",id:"version-3.5.0/use-cases/timestamps/timestamps",title:"Timestamps",description:"Reviewpad timestamps allow us to trigger workflows based on time.",source:"@site/versioned_docs/version-3.5.0/use-cases/timestamps/timestamps.md",sourceDirName:"use-cases/timestamps",slug:"/use-cases/timestamps/",permalink:"/use-cases/timestamps/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/timestamps/timestamps.md",tags:[],version:"3.5.0",frontMatter:{title:"Timestamps",id:"timestamps"},sidebar:"DocsSidebar",previous:{title:"Stale Issues or Pull Requests",permalink:"/use-cases/stale-issues-or-pull-requests"},next:{title:"Label on change freeze",permalink:"/use-cases/label-on-change-freeze"}},l={},m=[{value:"RFC3339 and similar Timestamps",id:"rfc3339-and-similar-timestamps",level:3},{value:"Relative Timestamps",id:"relative-timestamps",level:3}],p={toc:m};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Reviewpad timestamps allow us to trigger workflows based on time."),(0,n.kt)("p",null,"We are able to use ",(0,n.kt)("a",{parentName:"p",href:"https://pkg.go.dev/time#pkg-constants"},"RFC3339 timestamps")," or relative timestamps."),(0,n.kt)("h3",{id:"rfc3339-and-similar-timestamps"},"RFC3339 and similar Timestamps"),(0,n.kt)("p",null,"Here we can use a timestamp in similar ",(0,n.kt)("inlineCode",{parentName:"p"},"RFC3339")," format:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"YYYYMMDD")," - e.g. 20220405"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"YYYY-MM-DD")," - e.g. 2022-04-05"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"YYYYMMDDTHH:MM:SS")," - e.g. 20220405T22:01:50"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"YYYY-MM-DDTHH:MM:SS")," - e.g. 2022-04-05T22:01:50")),(0,n.kt)("h3",{id:"relative-timestamps"},"Relative Timestamps"),(0,n.kt)("p",null,"Use time as expression ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"TIME year|month|day|week|hour|minute ago")),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"15 days ago"),(0,n.kt)("li",{parentName:"ul"},"3 months ago"),(0,n.kt)("li",{parentName:"ul"},"1 hour ago")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83d\udcd8 Aladino Syntax"),(0,n.kt)("p",{parentName:"blockquote"},"Check ",(0,n.kt)("a",{parentName:"p",href:"/guides/aladino/syntax"},"Aladino Syntax")," for more details about timestamps.")))}u.isMDXComponent=!0}}]);