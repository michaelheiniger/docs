"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[40561],{56885:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>t,metadata:()=>r,toc:()=>m});var i=s(87462),a=(s(67294),s(3905));const t={title:"Assign review to a team",id:"assign-review-to-a-team",slug:"/use-cases/assign-review-to-a-team"},o=void 0,r={unversionedId:"use-cases/reviewer-assignment/assign-review-to-a-team",id:"version-3.7.0/use-cases/reviewer-assignment/assign-review-to-a-team",title:"Assign review to a team",description:"Please note that this function requires the Reviewpad Action to be installed with a GitHub token",source:"@site/versioned_docs/version-3.7.0/use-cases/reviewer-assignment/assign-review-to-a-team.md",sourceDirName:"use-cases/reviewer-assignment",slug:"/use-cases/assign-review-to-a-team",permalink:"/3.7.0/use-cases/assign-review-to-a-team",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/reviewer-assignment/assign-review-to-a-team.md",tags:[],version:"3.7.0",frontMatter:{title:"Assign review to a team",id:"assign-review-to-a-team",slug:"/use-cases/assign-review-to-a-team"},sidebar:"DocsSidebar",previous:{title:"Assign review to 3 developers",permalink:"/3.7.0/use-cases/assign-review-to-3-developers"},next:{title:"Assign senior reviewers to new joiners",permalink:"/3.7.0/use-cases/assign-senior-reviewers-to-new-joiners"}},c={},m=[],g={toc:m};function l(e){let{components:n,...s}=e;return(0,a.kt)("wrapper",(0,i.Z)({},g,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Requires GitHub token",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Please note that this function requires the ",(0,a.kt)("a",{parentName:"p",href:"/getting-started/installation-with-github-token"},"Reviewpad Action to be installed with a GitHub token"))),(0,a.kt)("p",null,"An example of assigning a review to a team when touching a specific folder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: changesToConfigurations\n    kind: patch\n    description: Changes code in configuration folder\n    spec: $hasFilePattern("src/config/**")\n\nworkflows:\n  - name: ask\n    description: Ask devops team\n    if:\n      - rule: changesToConfigurations\n    then:\n      # Assign the review to devops team\n      - $assignTeamReviewer("devops")\n')),(0,a.kt)("p",null,"An example of assigning a review to a specific number of elements on a team."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: changesToConfigurations\n    kind: patch\n    description: Changes code in configuration folder\n    spec: $hasFilePattern("src/config/**")\n\nworkflows:\n  - name: ask\n    description: Ask devops team\n    if:\n      - rule: changesToConfigurations\n    then:\n      # Assign the review to 3 random reviewers from devops team\n      - $assignReviewer($team("devops"), 3)\n')),(0,a.kt)("p",null,"An example of assigning a review to a team and a specific element."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: changesToConfigurations\n    kind: patch\n    description: Changes code in configuration folder\n    spec: $hasFilePattern("src/config/**")\n\nworkflows:\n  - name: ask\n    description: Ask devops team\n    if:\n      - rule: changesToConfigurations\n    then:\n      # Assign the review to john\n      - $assignReviewer(["john"])\n      # Assign the review to devops team\n      - $assignTeamReviewer("devops")\n')))}l.isMDXComponent=!0}}]);