"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[55493],{65629:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>o});var n=a(87462),i=(a(67294),a(3905)),r=a(90814);const s={},l=void 0,p={unversionedId:"guides/built-ins/actions/assignTeamReviewer/index",id:"version-3.13.0/guides/built-ins/actions/assignTeamReviewer/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.13.0/guides/built-ins/actions/assignTeamReviewer/index.mdx",sourceDirName:"guides/built-ins/actions/assignTeamReviewer",slug:"/guides/built-ins/actions/assignTeamReviewer/",permalink:"/3.13.0/guides/built-ins/actions/assignTeamReviewer/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/assignTeamReviewer/index.mdx",tags:[],version:"3.13.0",frontMatter:{}},m={},o=[],d={toc:o};function k(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Assigns a list of teams to review the pull request."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Available for:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Available"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"issue")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"pull_request")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"team_reviewers")),(0,i.kt)("td",{parentName:"tr",align:"left"},"[","]string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The list of GitHub team slugs that will be requested to review.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$assignTeamReviewer(["core", "support"])\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: reviewers-assignment\n    if:\n      - $hasCodePattern("critical\\(.*\\)")\n    then:\n      - $assignTeamReviewer(["core"])\n'))}k.isMDXComponent=!0}}]);