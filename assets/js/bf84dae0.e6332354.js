"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[5806],{38939:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var a=n(87462),l=(n(67294),n(3905)),r=n(90814);const s={},i=void 0,p={unversionedId:"guides/built-ins/functions/lastEventAt/index",id:"guides/built-ins/functions/lastEventAt/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/functions/lastEventAt/index.mdx",sourceDirName:"guides/built-ins/functions/lastEventAt",slug:"/guides/built-ins/functions/lastEventAt/",permalink:"/next/guides/built-ins/functions/lastEventAt/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/lastEventAt/index.mdx",tags:[],version:"current",frontMatter:{}},u={},m=[],o={toc:m};function d(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description"),":"),(0,l.kt)("p",null,"Retrieves the timestamp of the last event in the timeline."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Available for:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Available"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"issue")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pull_request")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"none")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"int64")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The number of seconds elapsed since January 1, 1970 UTC.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"$lastEventAt()\n")),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,l.kt)(r.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: stale-pull-request\n    spec: $lastEventAt() < 30 days ago\n\nworkflows:\n  - name: stale\n    if:\n      - rule: stale-pull-request\n    then:\n      - $addLabel("stale")\n      - $comment("This pull request has been automatically marked as stale")\n'))}d.isMDXComponent=!0}}]);