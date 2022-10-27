"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[55823],{33990:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=a(87462),t=(a(67294),a(3905));const r={id:"label-on-change-freeze",slug:"/use-cases/label-on-change-freeze",title:"Label on change freeze"},l=void 0,o={unversionedId:"use-cases/timestamps/label-on-change-freeze",id:"version-3.9.0/use-cases/timestamps/label-on-change-freeze",title:"Label on change freeze",description:"Here's an example of adding a label to not merge a pull request when on change freeze.",source:"@site/versioned_docs/version-3.9.0/use-cases/timestamps/label-on-change-freeze.md",sourceDirName:"use-cases/timestamps",slug:"/use-cases/label-on-change-freeze",permalink:"/3.9.0/use-cases/label-on-change-freeze",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/timestamps/label-on-change-freeze.md",tags:[],version:"3.9.0",frontMatter:{id:"label-on-change-freeze",slug:"/use-cases/label-on-change-freeze",title:"Label on change freeze"},sidebar:"DocsSidebar",previous:{title:"Timestamps",permalink:"/3.9.0/use-cases/timestamps"},next:{title:"Notify when long live pull request",permalink:"/3.9.0/use-cases/notify-when-long-live-pull-request"}},i={},c=[],m={toc:c};function d(e){let{components:n,...a}=e;return(0,t.kt)("wrapper",(0,s.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Here's an example of adding a label to not merge a pull request when on change freeze."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  do-not-merge:\n    name: "do not merge"\n    description: Do not merge\n    # color is the hexadecimal color code for the label, without the leading #.\n    color: "294b69"\n\nrules:\n  - name: isChangeFreeze\n    kind: patch\n    description: Change freeze is happening\n    spec: $createdAt() >= 2022-04-05 && $createdAt() <= 2022-04-15\n\nworkflows:\n  - name: label-no-merge\n    description: Label PR with no merge when change freeze\n    if:\n      - rule: isChangeFreeze\n    then:\n      - $addLabel("do-not-merge")\n')))}d.isMDXComponent=!0}}]);