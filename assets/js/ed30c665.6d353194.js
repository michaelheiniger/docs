"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62033],{32061:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>w,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var n=i(87462),r=(i(67294),i(3905)),t=i(90814);const a={title:"Assign reviewers in a sequence",id:"assign-sequential-reviewers",slug:"/use-cases/assign-sequential-reviewers"},o=void 0,u={unversionedId:"use-cases/reviewer-assignment/assign-sequential-reviewers/assign-sequential-reviewers",id:"version-3.18.0/use-cases/reviewer-assignment/assign-sequential-reviewers/assign-sequential-reviewers",title:"Assign reviewers in a sequence",description:"In certain cases, it is very useful to specify an order in which the pull request should be reviewed.",source:"@site/versioned_docs/version-3.18.0/use-cases/reviewer-assignment/assign-sequential-reviewers/index.mdx",sourceDirName:"use-cases/reviewer-assignment/assign-sequential-reviewers",slug:"/use-cases/assign-sequential-reviewers",permalink:"/3.18.0/use-cases/assign-sequential-reviewers",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/reviewer-assignment/assign-sequential-reviewers/index.mdx",tags:[],version:"3.18.0",frontMatter:{title:"Assign reviewers in a sequence",id:"assign-sequential-reviewers",slug:"/use-cases/assign-sequential-reviewers"},sidebar:"DocsSidebar",previous:{title:"Assign senior reviewers to new joiners",permalink:"/3.18.0/use-cases/assign-senior-reviewers-to-new-joiners"},next:{title:"Ship/Show/Ask",permalink:"/3.18.0/use-cases/ship-show-ask"}},l={},c=[],v={toc:c};function w(e){let{components:s,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},v,i,{components:s,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In certain cases, it is very useful to specify an order in which the pull request should be reviewed."),(0,r.kt)("p",null,"For example, the following configuration enforces that changes to files in the database migration files will be first reviewed\nby john and only when john approves the changes it will be reviewed by the security team."),(0,r.kt)(t.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\npipelines:\n  - name: security-changes\n    trigger: $hasFilePattern("services/db/migrations/**")\n    stages:\n      - actions:\n          - $assignReviewer(["john"], "random")\n        until: $reviewerStatus("john") == "APPROVED"\n      - actions:\n          - $assignTeamReviewer(["security"])\n'))}w.isMDXComponent=!0}}]);