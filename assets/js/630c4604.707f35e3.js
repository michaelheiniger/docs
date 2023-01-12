"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22551],{70604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),r=n(90814);const s={},p=void 0,o={unversionedId:"guides/built-ins/functions/eventType/index",id:"version-3.20.0/guides/built-ins/functions/eventType/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.20.0/guides/built-ins/functions/eventType/index.mdx",sourceDirName:"guides/built-ins/functions/eventType",slug:"/guides/built-ins/functions/eventType/",permalink:"/3.20.0/guides/built-ins/functions/eventType/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/eventType/index.mdx",tags:[],version:"3.20.0",frontMatter:{}},l={},u=[],d={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Retrieves the type of the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#pull_request"},"pull request event"),"."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This built-in is ",(0,i.kt)("strong",{parentName:"p"},"not")," available for ",(0,i.kt)("a",{parentName:"p",href:"/guides/syntax#workflow"},(0,i.kt)("inlineCode",{parentName:"a"},"issue")),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"none")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"pull_request")," event activity type.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$eventType()\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: assign-reviewer-when-pr-ready-for-review\n    if:\n      - $eventType() == "ready_for_review"\n    then:\n      - $assignRandomReviewer()\n'))}m.isMDXComponent=!0}}]);