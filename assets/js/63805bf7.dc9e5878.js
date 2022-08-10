"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[2693],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=s,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||a;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5441:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(7462),s=(t(7294),t(3905));const a={title:"Ship/Show/Ask",id:"ship-show-ask"},o=void 0,i={unversionedId:"use-cases/ship-show-ask",id:"version-3.0.1/use-cases/ship-show-ask",title:"Ship/Show/Ask",description:"Ship / Show / Ask is a methodology to increase the pace of software teams by not having to block developers for each pull request.",source:"@site/versioned_docs/version-3.0.1/use-cases/ship-show-ask.md",sourceDirName:"use-cases",slug:"/use-cases/ship-show-ask",permalink:"/docs/use-cases/ship-show-ask",draft:!1,editUrl:"https://github.com/reviewpad/maester/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-3.0.1/use-cases/ship-show-ask.md",tags:[],version:"3.0.1",frontMatter:{title:"Ship/Show/Ask",id:"ship-show-ask"},sidebar:"DocsSidebar",previous:{title:"First Revy Action: PR Size Label",permalink:"/docs/getting-started/first-revy-action:-pr-size-label"},next:{title:"Automated Labelling",permalink:"/docs/use-cases/automated-labelling/"}},l={},c=[],p={toc:c};function h(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://martinfowler.com/articles/ship-show-ask.html"},"Ship / Show / Ask")," is a methodology to increase the pace of software teams by not having to block developers for each pull request. "),(0,s.kt)("p",null,"It can easily be implemented with this new solution by specifying policies for teams to allow them to automatically merge certain PRs."),(0,s.kt)("p",null,"Here\u2019s an example of a ",(0,s.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration file that we use in our team to automate these three processes."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  ask:\n    name: "ask"\n    description: Ask mode\n    # color is the hexadecimal color code for the label, without the leading #.\n    color: "fd5e53"\n  show:\n    name: "show"\n    description: Show mode\n    color: "ffd800"\n  ship:\n    name: "ship"\n    description: Ship mode\n    color: "76dbbe"\n\ngroups:\n  - name: juniors\n    description: Group of developers that have created less than 10 PRs\n    kind: developers\n    type: filter\n    param: developer\n    where: $totalCreatedPullRequests($developer) < 10\n\nrules:\n  - name: onlyChangesMDFiles\n    kind: patch\n    description: All files with extension .md\n    spec: $hasFileExtensions([".md"])\n\n  - name: onlyChangesTests\n    kind: patch\n    description: All files with extension .test.ts\n    spec: $hasFileExtensions([".test.ts"])\n\n  - name: isSmallPatch\n    kind: patch\n    description: Patch has less than 50 lines changed\n    spec: $size() < 50\n\n  - name: isLargePatch\n    kind: patch\n    description: Large patch\n    spec: $fileCount() > 5\n\n  - name: changesMainFile\n    kind: patch\n    description: Main file\n    spec: $hasFileName("main.js")\n\n  - name: authoredByJunior\n    kind: patch\n    description: Authored by junior developer\n    spec: $isElementOf($author(), $group("juniors"))\n\nworkflows:\n  - name: ask\n    description: Standard ask process\n    if:\n      - rule: changesMainFile\n      - rule: isLargePatch\n      - rule: authoredByJunior\n    then:\n      - $addLabel("ask")\n      - $assignRandomReviewer()\n\n  - name: show\n    description: Show process - auto-merge and later review\n    if:\n      - rule: onlyChangesMDFiles\n        extra-actions:\n          - $assignReviewer($group("seniors"))\n      - rule: onlyChangesTests\n    then:\n      - $addLabel("show")\n      - $merge("rebase")\n\n  - name: ship\n    description: Ship process - auto-merge without need for review\n    if:\n      - rule: isSmallPatch\n    then:\n      - $addLabel("ship")\n      - $merge("rebase")\n')))}h.isMDXComponent=!0}}]);