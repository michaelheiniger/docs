"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[3721],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),f=r,b=d["".concat(s,".").concat(f)]||d[f]||u[f]||l;return a?n.createElement(b,o(o({ref:t},p),{},{components:a})):n.createElement(b,o({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9206:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const l={title:"Label based on file paths",id:"label-based-on-file-paths"},o=void 0,i={unversionedId:"use-cases/automated-labelling/label-based-on-file-paths",id:"use-cases/automated-labelling/label-based-on-file-paths",title:"Label based on file paths",description:"Here's an example of a reviewpad.yml configuration that label pull requests that contain changes to a certain filepath.",source:"@site/docs/use-cases/automated-labelling/label-based-on-file-paths.md",sourceDirName:"use-cases/automated-labelling",slug:"/use-cases/automated-labelling/label-based-on-file-paths",permalink:"/docs/next/use-cases/automated-labelling/label-based-on-file-paths",draft:!1,editUrl:"https://github.com/reviewpad/maester/tree/main/packages/create-docusaurus/templates/shared/docs/use-cases/automated-labelling/label-based-on-file-paths.md",tags:[],version:"current",frontMatter:{title:"Label based on file paths",id:"label-based-on-file-paths"},sidebar:"DocsSidebar",previous:{title:"Automated Labelling",permalink:"/docs/next/use-cases/automated-labelling/"},next:{title:"Label based on author groups",permalink:"/docs/next/use-cases/automated-labelling/label-based-on-author-groups"}},s={},c=[],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Here's an example of a ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration that label pull requests that contain changes to a certain filepath."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  critical:\n    description: Critical changes\n    # color is the hexadecimal color code for the label, without the leading #.\n    color: "fd5e53"\n\nrules:\n  - name: changesMainFile\n    kind: patch\n    description: Patch contains changes to the main file\n    spec: $hasFileName("go/main.go")\n\nworkflows:\n  - name: critical\n    description: Modifications of critical code require careful review\n    if:\n      - rule: changesMainFile\n    then:\n      - $addLabel("critical")\n')))}u.isMDXComponent=!0}}]);