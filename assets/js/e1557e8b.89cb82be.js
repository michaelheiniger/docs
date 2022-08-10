"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[4524],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>d});var t=n(7294);function s(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){s(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,s=function(e,r){if(null==e)return{};var n,t,s={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(s[n]=e[n]);return s}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},v=t.forwardRef((function(e,r){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),v=c(n),d=s,m=v["".concat(l,".").concat(d)]||v[d]||u[d]||i;return n?t.createElement(m,o(o({ref:r},p),{},{components:n})):t.createElement(m,o({ref:r},p))}));function d(e,r){var n=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=v;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var c=2;c<i;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}v.displayName="MDXCreateElement"},2157:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=n(7462),s=(n(7294),n(3905));const i={title:"Assign senior reviewers to new joiners",id:"assign-senior-reviewers-to-new-joiners"},o=void 0,a={unversionedId:"use-cases/reviewer-assignment/assign-senior-reviewers-to-new-joiners",id:"version-3.0.1/use-cases/reviewer-assignment/assign-senior-reviewers-to-new-joiners",title:"Assign senior reviewers to new joiners",description:"Here's an example of assigning senior reviewers to new joiners pull requests.",source:"@site/versioned_docs/version-3.0.1/use-cases/reviewer-assignment/assign-senior-reviewers-to-new-joiners.md",sourceDirName:"use-cases/reviewer-assignment",slug:"/use-cases/reviewer-assignment/assign-senior-reviewers-to-new-joiners",permalink:"/use-cases/reviewer-assignment/assign-senior-reviewers-to-new-joiners",draft:!1,editUrl:"https://github.com/reviewpad/maester/tree/main/versioned_docs/version-3.0.1/use-cases/reviewer-assignment/assign-senior-reviewers-to-new-joiners.md",tags:[],version:"3.0.1",frontMatter:{title:"Assign senior reviewers to new joiners",id:"assign-senior-reviewers-to-new-joiners"},sidebar:"DocsSidebar",previous:{title:"Reviewer Assignment",permalink:"/use-cases/reviewer-assignment/"},next:{title:"Assign review to 3 developers",permalink:"/use-cases/reviewer-assignment/assign-review-to-3-developers"}},l={},c=[],p={toc:c};function u(e){let{components:r,...n}=e;return(0,s.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Here's an example of assigning senior reviewers to new joiners pull requests."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  priority:\n    description: Priority reviews\n    # color is the hexadecimal color code for the label, without the leading #.\n    color: "294b69"\n\ngroups:\n  - name: seniors\n    description: Group of senior developers\n    kind: developers\n    spec: \'["torvalds"]\'\n\n  - name: juniors\n    description: Group of developers that have created less than 10 PRs\n    kind: developers\n    type: filter\n    param: developer\n    where: $totalCreatedPullRequests($developer) < 10\n\nrules:\n  - name: authoredByJunior\n    kind: patch\n    description: Patch is authored by a junior dev\n    spec: $isElementOf($author(), $group("juniors"))\n\nworkflows:\n  - name: critical\n    description: PRs by juniors should be reviewed by the gods\n    if:\n      - rule: authoredByJunior\n    then:\n      - $addLabel("priority")\n      - $assignReviewer($group("seniors"))\n')))}u.isMDXComponent=!0}}]);