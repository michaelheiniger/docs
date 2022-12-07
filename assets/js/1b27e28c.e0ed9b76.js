"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[9330],{69924:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=n(87462),a=(n(67294),n(3905)),o=n(90814);const r={},l=void 0,s={unversionedId:"guides/built-ins/actions/commitLint/index",id:"version-3.16.0/guides/built-ins/actions/commitLint/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.16.0/guides/built-ins/actions/commitLint/index.mdx",sourceDirName:"guides/built-ins/actions/commitLint",slug:"/guides/built-ins/actions/commitLint/",permalink:"/guides/built-ins/actions/commitLint/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/commitLint/index.mdx",tags:[],version:"3.16.0",frontMatter:{}},m={},p=[],c={toc:p};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Checks if the commits in the pull request follow the ",(0,a.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"conventional commits specification"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Available for:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Available"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"issue")),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u274c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"pull_request")),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u2705")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"none")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"$commitLint()\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(o.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: check-conventional-commits\n    if:\n      - $base() == "main"\n    then:\n      - $commitLint()\n'))}d.isMDXComponent=!0}}]);