"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[36631],{21254:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),l=(n(67294),n(3905)),i=n(90814);const r={},s=void 0,o={unversionedId:"guides/built-ins/actions/comment/index",id:"version-3.10.0/guides/built-ins/actions/comment/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.10.0/guides/built-ins/actions/comment/index.mdx",sourceDirName:"guides/built-ins/actions/comment",slug:"/guides/built-ins/actions/comment/",permalink:"/3.10.0/guides/built-ins/actions/comment/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/comment/index.mdx",tags:[],version:"3.10.0",frontMatter:{}},m={},p=[],d={toc:p};function c(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description"),":"),(0,l.kt)("p",null,"Posts a comment to the pull request."),(0,l.kt)("p",null,"Note that this comment will always be added whenever this action is executed."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Available for:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Available"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"issue")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pull_request")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"comment")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The body of the comment.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'$comment("This pull request has git conflicts. Please resolve them.")\n')),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,l.kt)(i.Z,{language:"yml",mdxType:"CodeBlock"},"workflows:\n  - name: conflict\n    description: Ask to resolve conflict\n    if:\n      - rule: has-conflicts\n    then:\n      - '$comment(\"This pull request has git conflicts. Please resolve them.\")'\n"))}c.isMDXComponent=!0}}]);