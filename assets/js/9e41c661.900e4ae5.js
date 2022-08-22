"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[2224],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),b=a,m=d["".concat(s,".").concat(b)]||d[b]||p[b]||l;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6607:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={title:"Automated Labelling",id:"automated-labelling"},o=void 0,i={unversionedId:"use-cases/automated-labelling/automated-labelling",id:"version-3.2.0/use-cases/automated-labelling/automated-labelling",title:"Automated Labelling",description:"Pull Requests labels are widely used by software developers to communicate certain required actions.",source:"@site/versioned_docs/version-3.2.0/use-cases/automated-labelling/automated-labelling.md",sourceDirName:"use-cases/automated-labelling",slug:"/use-cases/automated-labelling/",permalink:"/use-cases/automated-labelling/",draft:!1,editUrl:"https://github.com/reviewpad/maester/tree/main/versioned_docs/version-3.2.0/use-cases/automated-labelling/automated-labelling.md",tags:[],version:"3.2.0",frontMatter:{title:"Automated Labelling",id:"automated-labelling"},sidebar:"DocsSidebar",previous:{title:"Ship/Show/Ask",permalink:"/use-cases/ship-show-ask"},next:{title:"Label based on file paths",permalink:"/use-cases/label-based-on-file-paths"}},s={},u=[],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Pull Requests labels are widely used by software developers to communicate certain required actions."),(0,a.kt)("p",null,"Out of the box, Reviewpad supports the action of [adding labels to pull requests/guides/built-ins#addlabel)."),(0,a.kt)("p",null,"Together with the other [built-in capabilities/guides/built-ins), you can automate flexible PR labeling workflows."))}p.isMDXComponent=!0}}]);