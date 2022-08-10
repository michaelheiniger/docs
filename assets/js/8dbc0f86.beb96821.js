"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[2700],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>u});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=t.createContext({}),l=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},p=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=l(a),u=r,f=h["".concat(c,".").concat(u)]||h[u]||d[u]||o;return a?t.createElement(f,s(s({ref:n},p),{},{components:a})):t.createElement(f,s({ref:n},p))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=h;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8344:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=a(7462),r=(a(7294),a(3905));const o={title:"Enforce branch conventions",id:"enforce-branch-conventions"},s=void 0,i={unversionedId:"use-cases/enforce-branch-conventions",id:"use-cases/enforce-branch-conventions",title:"Enforce branch conventions",description:"To maintain consistency of development and best practices of CI/CD, it is important to enforce a policy of branch naming.",source:"@site/docs/use-cases/enforce-branch-conventions.md",sourceDirName:"use-cases",slug:"/use-cases/enforce-branch-conventions",permalink:"/maester/next/use-cases/enforce-branch-conventions",draft:!1,editUrl:"https://github.com/reviewpad/maester/tree/main/packages/create-docusaurus/templates/shared/docs/use-cases/enforce-branch-conventions.md",tags:[],version:"current",frontMatter:{title:"Enforce branch conventions",id:"enforce-branch-conventions"},sidebar:"DocsSidebar",previous:{title:"Comment on pull requests",permalink:"/maester/next/use-cases/comment-on-pull-requests"},next:{title:"Enforce conventional commits",permalink:"/maester/next/use-cases/enforce-conventional-commits"}},c={},l=[{value:"Enforce branch name and add label based on branches",id:"enforce-branch-name-and-add-label-based-on-branches",level:2}],p={toc:l};function d(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To maintain consistency of development and best practices of CI/CD, it is important to enforce a policy of branch naming."),(0,r.kt)("p",null,"Reviewpad can be used enforce a branch naming policy and also automatically add labels based on the branch names."),(0,r.kt)("h2",{id:"enforce-branch-name-and-add-label-based-on-branches"},"Enforce branch name and add label based on branches"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"api-version: reviewpad.com/v3.x\n\nmode: silent\nedition: professional\n\nlabels:\n  release-minor:\n    name: 'release:minor :hash::arrow_up::hash:'\n    description: Release the changes as a minor\n    color: 'E96F70'\n  release-patch:\n    name: 'release:patch :hash::hash::arrow_up:'\n    description: Release the changes as a patch\n    color: 'FF9085'\n  release-skip:\n    name: 'release:skip :hash::hash::hash:'\n    description: Do not release changes\n    color: 'FFE9DE'\n  type-bugfix:\n    name: 'type:bugfix :beetle:'\n    description: Provides a bug fix\n    color: 'F9B1C9'\n  type-enhancement:\n    name: 'type:enhancement :ok_hand:'\n    description: Provides an enhancement\n    color: '92E7F3'\n  type-feature:\n    name: 'type:feature :rocket:'\n    description: Provides a new feature\n    color: '65ECA3'\n  type-hotfix:\n    name: 'type:hotfix :ninja:'\n    description: Provides a hot fix\n    color: 'BBA7E4'\n  type-support:\n    name: 'type:support :hammer:'\n    description: Provides a misc change\n    color: 'CDDBDC'\n\nrules:\n  - name: tautology\n    kind: patch\n    description: Always true\n    spec: \"!$hello()\"\n\n  - name: does-not-have-linear-history\n    kind: patch\n    description: Does not have linear history\n    spec: '!$hasLinearHistory()'\n\n  - name: head-branch-is-bugfix\n    kind: patch\n    description: Head branch is bugfix\n    spec: '$startsWith($head(), \"bugfix/\")'\n\n  - name: head-branch-is-enhancement\n    kind: patch\n    description: Head branch is enhancement\n    spec: '$startsWith($head(), \"enhancement/\")'\n\n  - name: head-branch-is-feature\n    kind: patch\n    description: Head branch is feature\n    spec: '$startsWith($head(), \"feature/\")'\n\n  - name: head-branch-is-hotfix\n    kind: patch\n    description: Head branch is hotfix\n    spec: '$startsWith($head(), \"hotfix/\")'\n\n  - name: head-branch-is-support\n    kind: patch\n    description: Head branch is support\n    spec: '$startsWith($head(), \"support/\")'\n\nworkflows:\n  - name: enforce-branch-naming\n    description: Enforce branch naming\n    if:\n      - rule: head-branch-is-bugfix\n        extra-actions:\n          - '$addLabel(\"release-patch\")'\n          - '$addLabel(\"type-bugfix\")'\n      - rule: head-branch-is-enhancement\n        extra-actions:\n          - '$addLabel(\"release-minor\")'\n          - '$addLabel(\"type-enhancement\")'\n      - rule: head-branch-is-feature\n        extra-actions:\n          - '$addLabel(\"release-minor\")'\n          - '$addLabel(\"type-feature\")'\n      - rule: head-branch-is-hotfix\n        extra-actions:\n          - '$addLabel(\"release-patch\")'\n          - '$addLabel(\"type-hotfix\")'\n      - rule: head-branch-is-support\n        extra-actions:\n          - '$addLabel(\"release-patch\")'\n          - '$addLabel(\"type-support\")'\n\n  - name: default-policy\n    description: By default it will put a warning\n    if:\n      - rule: tautology\n    then:\n      - '$addLabel(\"needs-review\")'\n      - '$warn(\"All branches must use the following nomenclature: prefix/name where prefix can be one of: bugfix, enhancement, feature, hotfix or support.\")'\n\n  - name: require-linear-history\n    description: Require linear history\n    always-run: true\n    if:\n      - rule: does-not-have-linear-history\n    then:\n      - '$warn(\"This pull request does not have linear history - please fix this!\")'\n")))}d.isMDXComponent=!0}}]);