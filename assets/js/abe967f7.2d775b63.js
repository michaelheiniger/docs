"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[22149],{4300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var a=n(87462),s=(n(67294),n(3905)),i=n(90814);const r={},l=void 0,p={unversionedId:"guides/built-ins/functions/hasLinkedIssues/index",id:"version-3.13.0/guides/built-ins/functions/hasLinkedIssues/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.13.0/guides/built-ins/functions/hasLinkedIssues/index.mdx",sourceDirName:"guides/built-ins/functions/hasLinkedIssues",slug:"/guides/built-ins/functions/hasLinkedIssues/",permalink:"/3.13.0/guides/built-ins/functions/hasLinkedIssues/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/hasLinkedIssues/index.mdx",tags:[],version:"3.13.0",frontMatter:{}},d={},o=[],u={toc:o};function k(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Description"),":"),(0,s.kt)("p",null,"Checks if a pull request has associated issues that might be closed by it."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Available for:")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Available"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"issue")),(0,s.kt)("td",{parentName:"tr",align:"left"},"\u274c")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"pull_request")),(0,s.kt)("td",{parentName:"tr",align:"left"},"\u2705")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"none")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Return value"),":"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"boolean")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"true")," if the pull request has linked issues, ",(0,s.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Examples"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"$hasLinkedIssues()\n")),(0,s.kt)("p",null,"A ",(0,s.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,s.kt)(i.Z,{language:"yml",mdxType:"CodeBlock"},"api-version: reviewpad.com/v3.x\n\nrules:\n  - name: is-compliant\n    spec: $hasLinkedIssues() && $hasLinearHistory()\n\nworkflows:\n  - name: assign-reviewers\n    if:\n      - rule: is-compliant\n    then:\n      - $assignRandomReviewer()\n"))}k.isMDXComponent=!0}}]);