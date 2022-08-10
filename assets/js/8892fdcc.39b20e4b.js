"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[7248],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),b=n,m=d["".concat(i,".").concat(b)]||d[b]||c[b]||o;return r?a.createElement(m,l(l({ref:t},p),{},{components:r})):a.createElement(m,l({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3445:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={title:"Label based on author groups",id:"label-based-on-author-groups"},l=void 0,s={unversionedId:"use-cases/automated-labelling/label-based-on-author-groups",id:"use-cases/automated-labelling/label-based-on-author-groups",title:"Label based on author groups",description:"Here's an example of a reviewpad.yml configuration that label pull requests authored by a member of a group of developers.",source:"@site/docs/use-cases/automated-labelling/label-based-on-author-groups.md",sourceDirName:"use-cases/automated-labelling",slug:"/use-cases/automated-labelling/label-based-on-author-groups",permalink:"/next/use-cases/automated-labelling/label-based-on-author-groups",draft:!1,editUrl:"https://github.com/reviewpad/maester/tree/main/docs/use-cases/automated-labelling/label-based-on-author-groups.md",tags:[],version:"current",frontMatter:{title:"Label based on author groups",id:"label-based-on-author-groups"},sidebar:"DocsSidebar",previous:{title:"Label based on file paths",permalink:"/next/use-cases/automated-labelling/label-based-on-file-paths"},next:{title:"Label potential missing changes",permalink:"/next/use-cases/automated-labelling/label-potential-missing-changes"}},i={},u=[],p={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Here's an example of a ",(0,n.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration that label pull requests authored by a member of a group of developers."),(0,n.kt)("p",null,"Suppose that, as Spotify, you consider developers ",(0,n.kt)("em",{parentName:"p"},"new joiner")," until they create/merge their ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.spotify.com/blog/measuring-backstage-success-at-spotify/"},"10th PR"),". Each time a ",(0,n.kt)("em",{parentName:"p"},"new joiner")," creates a PR, you want to label it in order to be able to perform a dedicated code review process. Using Reviewpad groups you can easily do such labeling."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  new-joiner:\n    description: Pull requests created by new joiners\n    # color is the hexadecimal color code for the label, without the leading #.\n    color: "294b69"\n\ngroups:\n  - name: newJoiners\n    description: Group of developers that have created less than 10 PRs\n    kind: developers\n    type: filter\n    param: developer\n    where: $totalCreatedPullRequests($developer) < 10\n\nrules:\n  - name: authoredByNewJoiner\n    kind: patch\n    description: Patch authored by new joiner\n    spec: $isElementOf($author(), $group("newJoiners"))\n\nworkflows:\n  - name: critical\n    description: Modifications by new joiners require careful review\n    if:\n      - rule: authoredByNewJoiner\n    then:\n      - $addLabel("new-joiner")\n')))}c.isMDXComponent=!0}}]);