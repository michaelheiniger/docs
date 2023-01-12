"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93638],{54290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var a=n(87462),o=(n(67294),n(3905)),i=n(90814);const s={},l=void 0,r={unversionedId:"guides/built-ins/actions/close/index",id:"version-3.20.0/guides/built-ins/actions/close/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.20.0/guides/built-ins/actions/close/index.mdx",sourceDirName:"guides/built-ins/actions/close",slug:"/guides/built-ins/actions/close/",permalink:"/3.20.0/guides/built-ins/actions/close/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/close/index.mdx",tags:[],version:"3.20.0",frontMatter:{}},d={},p=[],c={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description"),":"),(0,o.kt)("p",null,"Closes an pull request / issue with a given comment - without merging it."),(0,o.kt)("p",null,"By default, if no comment is provided, it will close the pull request / issue without a comment."),(0,o.kt)("p",null,"For issues, it can also be given a closure reason."),(0,o.kt)("p",null,"By default, if no closure reason is provided, the issue will be closed as ",(0,o.kt)("inlineCode",{parentName:"p"},"completed"),"."),(0,o.kt)("p",null,"When a closure reason is provided and we don't want to close the issue with a comment then we need to pass the comment parameter as ",(0,o.kt)("inlineCode",{parentName:"p"},'""'),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"comment")," (optional)"),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The body of the comment.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"reason")," (optional) (issues only)"),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The reason for closing. The options are ",(0,o.kt)("inlineCode",{parentName:"td"},"completed")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"not_planned"),".")))),(0,o.kt)("p",null,"Please note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"reason")," parameter is only available for issues."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'$close()                                            # close without comment or reason\n$close("Closed due inactivity")                     # close with comment and no reason\n$close("", "not_planned")                           # close with no comment but reason\n$close("This project is deprecated", "not_planned") # close with a comment and reason\n')),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,o.kt)(i.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: stale\n    if:\n      - rule: $lastEventAt() < 30 days ago\n    then:\n      - $addLabel("stale")\n      - $close("This pull request has been automatically closed due to inactivity")\n  - name: project_deprecated\n    on:\n      - "issue"\n    if:\n      - rule: $isElementOf("jupiter", $labels())\n    then:\n      - $close("The project `jupiter` is deprecated", "not_planned")\n'))}m.isMDXComponent=!0}}]);