"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[6482],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),v=a,m=d["".concat(u,".").concat(v)]||d[v]||p[v]||i;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9160:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={},l=void 0,o={type:"mdx",permalink:"/maester/changelog/reviewpad-v002",source:"@site/src/pages/changelog/reviewpad-v002.md",description:"New features",frontMatter:{}},u=[{value:"New features \ud83d\udd25",id:"new-features-",level:2},{value:"Revy",id:"revy",level:3},{value:"Aladino Built-ins",id:"aladino-built-ins",level:3},{value:"Functions",id:"functions",level:3},{value:"Actions",id:"actions",level:3},{value:"Improvements \ud83d\ude80",id:"improvements-",level:2},{value:"Revy",id:"revy-1",level:3},{value:"Aladino Actions",id:"aladino-actions",level:3}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"new-features-"},"New features \ud83d\udd25"),(0,a.kt)("h3",{id:"revy"},"Revy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Label specification")),(0,a.kt)("h3",{id:"aladino-built-ins"},"Aladino Built-ins"),(0,a.kt)("h3",{id:"functions"},"Functions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"contains"),(0,a.kt)("li",{parentName:"ul"},"description"),(0,a.kt)("li",{parentName:"ul"},"hasLinkedIssues"),(0,a.kt)("li",{parentName:"ul"},"title")),(0,a.kt)("h3",{id:"actions"},"Actions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"removeLabel")),(0,a.kt)("h2",{id:"improvements-"},"Improvements \ud83d\ude80"),(0,a.kt)("h3",{id:"revy-1"},"Revy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Stop execution if head branch does not exist.")),(0,a.kt)("h3",{id:"aladino-actions"},"Aladino Actions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"assignReviewer accepts number of reviewers as argument"),(0,a.kt)("li",{parentName:"ul"},"assignRandomReviewer skips run if there are reviewer assigned"),(0,a.kt)("li",{parentName:"ul"},"addLabel returns error if label does not exist")))}s.isMDXComponent=!0}}]);