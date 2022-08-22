"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[4559],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),u=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(a.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(t),m=o,y=f["".concat(a,".").concat(m)]||f[m]||c[m]||l;return t?r.createElement(y,s(s({ref:n},p),{},{components:t})):r.createElement(y,s({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,s=new Array(l);s[0]=f;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<l;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5212:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const l={title:"Notify when long live pull request",id:"notify-when-long-live-pull-request",slug:"/use-cases/notify-when-long-live-pull-request"},s=void 0,i={unversionedId:"use-cases/timestamps/notify-when-long-live-pull-request",id:"version-3.2.0/use-cases/timestamps/notify-when-long-live-pull-request",title:"Notify when long live pull request",description:"Here's an example of notifying the pull request author when the pull request has been opened for a long time.",source:"@site/versioned_docs/version-3.2.0/use-cases/timestamps/notify-when-long-live-pull-request.md",sourceDirName:"use-cases/timestamps",slug:"/use-cases/notify-when-long-live-pull-request",permalink:"/use-cases/notify-when-long-live-pull-request",draft:!1,editUrl:"https://github.com/reviewpad/maester/tree/main/versioned_docs/version-3.2.0/use-cases/timestamps/notify-when-long-live-pull-request.md",tags:[],version:"3.2.0",frontMatter:{title:"Notify when long live pull request",id:"notify-when-long-live-pull-request",slug:"/use-cases/notify-when-long-live-pull-request"},sidebar:"DocsSidebar",previous:{title:"Timestamps",permalink:"/use-cases/timestamps/"},next:{title:"Label on change freeze",permalink:"/use-cases/label-on-change-freeze"}},a={},u=[],p={toc:u};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here's an example of notifying the pull request author when the pull request has been opened for a long time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: longLiveChange\n    kind: patch\n    description: PR has been open for more than 15 days\n    spec: $createdAt() < 15 days ago\n\nworkflows:\n  - name: notify-long-live-pr\n    description: Notify author when long live PR\n    if:\n      - rule: longLiveChange\n    then:\n      - $comment("This PR has been opened for more than 15 days. Please consider closing it!")\n')))}c.isMDXComponent=!0}}]);