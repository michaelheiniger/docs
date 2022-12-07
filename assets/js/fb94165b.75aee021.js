"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[64142],{46719:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=n(87462),l=(n(67294),n(3905)),r=n(90814);const i={},s=void 0,p={unversionedId:"guides/built-ins/functions/labels/index",id:"version-3.14.0/guides/built-ins/functions/labels/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.14.0/guides/built-ins/functions/labels/index.mdx",sourceDirName:"guides/built-ins/functions/labels",slug:"/guides/built-ins/functions/labels/",permalink:"/3.14.0/guides/built-ins/functions/labels/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/labels/index.mdx",tags:[],version:"3.14.0",frontMatter:{}},o={},u=[],d={toc:u};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description"),":"),(0,l.kt)("p",null,"Retrieves the list of labels of the pull request."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Available for:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Available"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"issue")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pull_request")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"none")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"[]string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The list of labels of the pull request.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"$labels()\n")),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,l.kt)(r.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: is-bug\n    spec: $isElementOf("bug", $labels())\n\nworkflows:\n  - name: assign-reviewers\n    if:\n      - rule: is-bug\n    then:\n      - $assignTeamReviewer(["testers"])\n'))}m.isMDXComponent=!0}}]);