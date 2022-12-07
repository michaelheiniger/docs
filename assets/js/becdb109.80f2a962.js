"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[83892],{3759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),i=(n(67294),n(3905)),r=n(90814);const l={},s=void 0,o={unversionedId:"guides/built-ins/functions/hasLinearHistory/index",id:"version-3.12.0/guides/built-ins/functions/hasLinearHistory/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.12.0/guides/built-ins/functions/hasLinearHistory/index.mdx",sourceDirName:"guides/built-ins/functions/hasLinearHistory",slug:"/guides/built-ins/functions/hasLinearHistory/",permalink:"/3.12.0/guides/built-ins/functions/hasLinearHistory/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/hasLinearHistory/index.mdx",tags:[],version:"3.12.0",frontMatter:{}},p={},d=[],m={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Checks if a pull request has a linear history."),(0,i.kt)("p",null,"A linear history is simply a Git history in which all commits come after one another, i.e., you will not find any merges of branches with independent commit histories."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Available for:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Available"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"issue")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"pull_request")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"none")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")," if the pull request has a linear history, ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$hasLinearHistory()\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: check-compliance\n    if:\n      - $hasLinearHistory() == false\n    then:\n      - $error("The pull request does not have a linear history.")\n      - $fail("non-linear history")\n'))}u.isMDXComponent=!0}}]);