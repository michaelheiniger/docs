"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[86053],{23891:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>v,contentTitle:()=>t,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const a={id:"assign-review-to-3-developers",slug:"/use-cases/assign-review-to-3-developers",title:"Assign review to 3 developers"},t=void 0,o={unversionedId:"use-cases/reviewer-assignment/assign-review-to-3-developers",id:"version-3.9.0/use-cases/reviewer-assignment/assign-review-to-3-developers",title:"Assign review to 3 developers",description:"An example of assigning a review to at least 3 developers when changing critical code.",source:"@site/versioned_docs/version-3.9.0/use-cases/reviewer-assignment/assign-review-to-3-developers.md",sourceDirName:"use-cases/reviewer-assignment",slug:"/use-cases/assign-review-to-3-developers",permalink:"/3.9.0/use-cases/assign-review-to-3-developers",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/reviewer-assignment/assign-review-to-3-developers.md",tags:[],version:"3.9.0",frontMatter:{id:"assign-review-to-3-developers",slug:"/use-cases/assign-review-to-3-developers",title:"Assign review to 3 developers"},sidebar:"DocsSidebar",previous:{title:"Reviewer Assignment",permalink:"/3.9.0/use-cases/reviewer-assignment"},next:{title:"Assign review to a team",permalink:"/3.9.0/use-cases/assign-review-to-a-team"}},v={},c=[],l={toc:c};function d(e){let{components:s,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},l,n,{components:s,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An example of assigning a review to at least 3 developers when changing critical code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: changesTransactionsCode\n    kind: patch\n    description: Changes code in transactions\n    spec: $hasFilePattern("src/transactions/**")\n\nworkflows:\n  - name: ask\n    description: Ask 3 developers for review\n    if:\n      - rule: changesTransactionsCode\n    then:\n      - $assignReviewer($organization(), 3)\n')))}d.isMDXComponent=!0}}]);