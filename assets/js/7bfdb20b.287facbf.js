"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[56141],{25276:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=n(87462),i=(n(67294),n(3905)),r=n(90814);const l={},s=void 0,d={unversionedId:"guides/built-ins/actions/deleteHeadBranch/index",id:"version-3.16.0/guides/built-ins/actions/deleteHeadBranch/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.16.0/guides/built-ins/actions/deleteHeadBranch/index.mdx",sourceDirName:"guides/built-ins/actions/deleteHeadBranch",slug:"/guides/built-ins/actions/deleteHeadBranch/",permalink:"/guides/built-ins/actions/deleteHeadBranch/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/deleteHeadBranch/index.mdx",tags:[],version:"3.16.0",frontMatter:{}},o={},p=[],m={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Deletes the head branch of the pull request."),(0,i.kt)("admonition",{title:"WARNING",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"This built-in does not work on pull request from forks."),(0,i.kt)("p",{parentName:"admonition"},"Deleting a branch will cause all pull requests that have the deleted branch as head or base to be closed.")),(0,i.kt)("admonition",{title:"INFO",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This built-in is only executed if the pull request is either closed or merged.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Available for:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Available"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"issue")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"pull_request")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"none")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$deleteHeadBranch()\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: ready-to-merge\n    spec: $hasFileExtensions([".md"])\n\nworkflows:\n  - name: check-compliance\n    if:\n      - rule: ready-to-merge\n    then:\n      - $merge()\n      - $deleteHeadBranch()\n\n'))}u.isMDXComponent=!0}}]);