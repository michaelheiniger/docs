"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[5069],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6157:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={},i=void 0,l={type:"mdx",permalink:"/changelog/reviewpad-v300-faro-edition",source:"@site/src/pages/changelog/reviewpad-v300-faro-edition.md",description:"New features",frontMatter:{}},u=[{value:"New features \ud83d\udd25",id:"new-features",level:2},{value:"Action",id:"action",level:3},{value:"Aladino Built-ins",id:"aladino-built-ins",level:3},{value:"Functions",id:"functions",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"new-features"},"New features \ud83d\udd25"),(0,o.kt)("p",null,"This is a major version of the Reviewpad Action. "),(0,o.kt)("h3",{id:"action"},"Action"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Feature: Use GitHub event to react to more workflow run triggers beside ",(0,o.kt)("inlineCode",{parentName:"li"},"pull_request")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"pull_request_target"),"."),(0,o.kt)("li",{parentName:"ul"},"Feature: Allow file as input of the GitHub action.")),(0,o.kt)("h3",{id:"aladino-built-ins"},"Aladino Built-ins"),(0,o.kt)("h3",{id:"functions"},"Functions"),(0,o.kt)("p",null,"[",(0,o.kt)("inlineCode",{parentName:"p"},"workflowStatus"),"/guides/built-ins#workflowstatus) - Returns the result of a GitHub workflow run."))}p.isMDXComponent=!0}}]);