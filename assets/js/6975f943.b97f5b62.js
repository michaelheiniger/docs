"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[237],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,d=u["".concat(o,".").concat(g)]||u[g]||m[g]||s;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const s={title:"Label potential missing changes",id:"label-potential-missing-changes",slug:"/use-cases/label-potential-missing-changes"},i=void 0,l={unversionedId:"use-cases/automated-labelling/label-potential-missing-changes",id:"version-3.2.0/use-cases/automated-labelling/label-potential-missing-changes",title:"Label potential missing changes",description:"It is fairly common that changes in some files imply changes in other files.",source:"@site/versioned_docs/version-3.2.0/use-cases/automated-labelling/label-potential-missing-changes.md",sourceDirName:"use-cases/automated-labelling",slug:"/use-cases/label-potential-missing-changes",permalink:"/3.2.0/use-cases/label-potential-missing-changes",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/automated-labelling/label-potential-missing-changes.md",tags:[],version:"3.2.0",frontMatter:{title:"Label potential missing changes",id:"label-potential-missing-changes",slug:"/use-cases/label-potential-missing-changes"},sidebar:"DocsSidebar",previous:{title:"Label based on author groups",permalink:"/3.2.0/use-cases/label-based-on-author-groups"},next:{title:"Label critical changes with code pattern",permalink:"/3.2.0/use-cases/label-critical-changes-with-code-pattern"}},o={},c=[],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"It is fairly common that changes in some files imply changes in other files."),(0,r.kt)("p",null,"As an example, modifying files in the ",(0,r.kt)("em",{parentName:"p"},"src")," directory might need changes in the ",(0,r.kt)("em",{parentName:"p"},"docs")," directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  missing-specs:\n    description: Likely missing specs\n    # color is the hexadecimal color code for the label, without the leading #.\n    color: "294b69"\n\nrules:\n  - name: codeChangesImplySpecChanges\n    kind: patch\n    description: Changes to src and not to spec\n    spec: $hasFilePattern("src/**") && !$hasFilePattern("docs/**")\n\nworkflows:\n  - name: check-for-specs\n    description: Check for specs\n    if:\n      - rule: codeChangesImplySpecChanges\n    then:\n      - $addLabel("missing-specs")\n')),(0,r.kt)("p",null,"You can see this policy in the following pull request ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/reviewpad/action-demo/pull/2"},"reviewpad/action-demo/#2"),"."))}m.isMDXComponent=!0}}]);