"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[988],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,m=d["".concat(s,".").concat(u)]||d[u]||f[u]||r;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={title:"Aladino Semantics",id:"aladino-semantics"},o=void 0,l={unversionedId:"reviewpad-file-specification/aladino-specification/aladino-semantics",id:"version-3.0.1/reviewpad-file-specification/aladino-specification/aladino-semantics",title:"Aladino Semantics",description:"Aladino supports five types of values: booleans, numbers, strings, arrays and a special type action.",source:"@site/versioned_docs/version-3.0.1/reviewpad-file-specification/aladino-specification/aladino-semantics.md",sourceDirName:"reviewpad-file-specification/aladino-specification",slug:"/reviewpad-file-specification/aladino-specification/aladino-semantics",permalink:"/maester/reviewpad-file-specification/aladino-specification/aladino-semantics",draft:!1,editUrl:"https://github.com/reviewpad/maester/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-3.0.1/reviewpad-file-specification/aladino-specification/aladino-semantics.md",tags:[],version:"3.0.1",frontMatter:{title:"Aladino Semantics",id:"aladino-semantics"},sidebar:"DocsSidebar",previous:{title:"Aladino Syntax",permalink:"/maester/reviewpad-file-specification/aladino-specification/aladino-syntax"},next:{title:"Aladino Built-ins",permalink:"/maester/reviewpad-file-specification/aladino-specification/aladino-built-ins"}},s={},c=[],p={toc:c};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Aladino supports five types of values: booleans, numbers, strings, arrays and a special type ",(0,a.kt)("em",{parentName:"p"},"action"),". "),(0,a.kt)("p",null,"Since the language is quite simple, it is also straightforward to perform type inference. "),(0,a.kt)("p",null,"There are two requirements when it comes to typing:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The type of the expression in a rule ",(0,a.kt)("inlineCode",{parentName:"li"},"spec")," is ",(0,a.kt)("em",{parentName:"li"},"bool"),". For example, the following rule is invalid:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: doesntTypeCheckToBool\n  kind: patch\n  description: Rule that does not type check to bool\n  spec: "hello" # type error\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"The type of each action to be ",(0,a.kt)("em",{parentName:"li"},"effect.")," For example, the following workflow is invalid because of its actions:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'  - name: invalidWorkflow\n    description: Invalid workflow because of action\n    if:\n      - rule: rule_1\n    then:\n      - "hello" # type error\n')),(0,a.kt)("p",null,"Since by design you cannot define functions or variables, the usefulness of the language comes down to the set of built-in variables and functions that are provided."))}f.isMDXComponent=!0}}]);