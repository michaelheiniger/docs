"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[3591],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>f});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),i=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=i(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=i(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return r?t.createElement(d,l(l({ref:n},p),{},{components:r})):t.createElement(d,l({ref:n},p))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3294:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var t=r(7462),a=(r(7294),r(3905));const o={title:"Label on change freeze",id:"label-on-change-freeze",slug:"/use-cases/label-on-change-freeze"},l=void 0,s={unversionedId:"use-cases/timestamps/label-on-change-freeze",id:"version-3.2.0/use-cases/timestamps/label-on-change-freeze",title:"Label on change freeze",description:"Here's an example of adding a label to not merge a pull request when on change freeze.",source:"@site/versioned_docs/version-3.2.0/use-cases/timestamps/label-on-change-freeze.md",sourceDirName:"use-cases/timestamps",slug:"/use-cases/label-on-change-freeze",permalink:"/3.2.0/use-cases/label-on-change-freeze",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/timestamps/label-on-change-freeze.md",tags:[],version:"3.2.0",frontMatter:{title:"Label on change freeze",id:"label-on-change-freeze",slug:"/use-cases/label-on-change-freeze"},sidebar:"DocsSidebar",previous:{title:"Notify when long live pull request",permalink:"/3.2.0/use-cases/notify-when-long-live-pull-request"},next:{title:"Comment on pull requests",permalink:"/3.2.0/use-cases/comment-on-pull-requests"}},c={},i=[],p={toc:i};function u(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Here's an example of adding a label to not merge a pull request when on change freeze."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  do-not-merge:\n    name: "do not merge"\n    description: Do not merge\n    # color is the hexadecimal color code for the label, without the leading #.\n    color: "294b69"\n\nrules:\n  - name: isChangeFreeze\n    kind: patch\n    description: Change freeze is happening\n    spec: $createdAt() >= 2022-04-05 && $createdAt() <= 2022-04-15\n\nworkflows:\n  - name: label-no-merge\n    description: Label PR with no merge when change freeze\n    if:\n      - rule: isChangeFreeze\n    then:\n      - $addLabel("do-not-merge")\n')))}u.isMDXComponent=!0}}]);