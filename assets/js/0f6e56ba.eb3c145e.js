"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88159],{6210:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>m});var i=n(87462),o=(n(67294),n(3905)),a=n(90814);const s={},l=void 0,r={unversionedId:"guides/built-ins/functions/commentCount/index",id:"version-3.21.0/guides/built-ins/functions/commentCount/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.21.0/guides/built-ins/functions/commentCount/index.mdx",sourceDirName:"guides/built-ins/functions/commentCount",slug:"/guides/built-ins/functions/commentCount/",permalink:"/guides/built-ins/functions/commentCount/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/commentCount/index.mdx",tags:[],version:"3.21.0",frontMatter:{}},u={},m=[],p={toc:m};function d(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description"),":"),(0,o.kt)("p",null,"Retrieves the total number of comments made into the pull request / issue."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"none")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Return value"),":"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"int")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The total number of comments in the pull request / issue.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"$commentCount()\n")),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,o.kt)(a.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: high-activity\n    if:\n      - $commentCount() > 15\n    then:\n      - $info("Please consider splitting the pull request into smaller pull requests.")\n'))}d.isMDXComponent=!0}}]);