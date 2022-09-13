"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[2901],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=s,f=d["".concat(a,".").concat(m)]||d[m]||l[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:s,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9944:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(7462),s=(r(7294),r(3905));const o={title:"Check issue description",id:"check-issue-description"},i=void 0,c={unversionedId:"use-cases/check-issue-description",id:"version-3.5.0/use-cases/check-issue-description",title:"Check issue description",description:"Reviewpad can be used for workflows on both issues and pull requests.",source:"@site/versioned_docs/version-3.5.0/use-cases/check-issue-description.md",sourceDirName:"use-cases",slug:"/use-cases/check-issue-description",permalink:"/use-cases/check-issue-description",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/check-issue-description.md",tags:[],version:"3.5.0",frontMatter:{title:"Check issue description",id:"check-issue-description"},sidebar:"DocsSidebar",previous:{title:"Attention Set",permalink:"/use-cases/attention-set"},next:{title:"Comment on pull requests",permalink:"/use-cases/comment-on-pull-requests"}},a={},u=[],p={toc:u};function l(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Reviewpad can be used for workflows on both issues and pull requests."),(0,s.kt)("p",null,"For example, the following configuration adds an error message to an issue or pull request whose description is empty."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: report-empty-description\n    on:\n      - "issue"\n      - "pull_request"\n    always-run: true\n    if:\n      - \'$description() == ""\'\n    then:\n      - \'$error("The description is empty. Please add more information!")\'\n')))}l.isMDXComponent=!0}}]);