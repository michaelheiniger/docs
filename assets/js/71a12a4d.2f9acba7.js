"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[42449],{75339:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(87462),i=(n(67294),n(3905)),r=n(90814);const l={},o=void 0,s={unversionedId:"guides/built-ins/functions/checkRunConclusion/index",id:"version-3.15.0/guides/built-ins/functions/checkRunConclusion/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.15.0/guides/built-ins/functions/checkRunConclusion/index.mdx",sourceDirName:"guides/built-ins/functions/checkRunConclusion",slug:"/guides/built-ins/functions/checkRunConclusion/",permalink:"/3.15.0/guides/built-ins/functions/checkRunConclusion/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/checkRunConclusion/index.mdx",tags:[],version:"3.15.0",frontMatter:{}},p={},d=[],u={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Retrieves the conclusion of the given ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest/guides/getting-started-with-the-checks-api#about-check-runs"},"check run"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Available for:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Available"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"issue")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"pull_request")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The name of the check run.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The conclusion of the check run, can be ",(0,i.kt)("inlineCode",{parentName:"td"},"action_required"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"cancelled"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"failure"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"neutral"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"success"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"skipped"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"stale"),", or ",(0,i.kt)("inlineCode",{parentName:"td"},"timed_out"),".")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$checkRunConclusion("build")\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: auto-merge-docs-changes\n    if:\n      - $hasFileExtensions([".md"]) && $checkRunConclusion("build") == "success"\n    then:\n      - $merge()\n'))}c.isMDXComponent=!0}}]);