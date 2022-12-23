"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10747],{97123:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const s={},i=void 0,l={unversionedId:"guides/commands/assign-reviewers",id:"version-3.18.0/guides/commands/assign-reviewers",title:"assign-reviewers",description:"The assign-reviewers command triggers the $assignReviewer action.",source:"@site/versioned_docs/version-3.18.0/guides/commands/assign-reviewers.mdx",sourceDirName:"guides/commands",slug:"/guides/commands/assign-reviewers",permalink:"/3.18.0/guides/commands/assign-reviewers",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/commands/assign-reviewers.mdx",tags:[],version:"3.18.0",frontMatter:{}},o={},p=[],d={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"assign-reviewers")," command triggers the ",(0,n.kt)("a",{parentName:"p",href:"/guides/built-ins#assignreviewer"},(0,n.kt)("inlineCode",{parentName:"a"},"$assignReviewer"))," action."),(0,n.kt)("p",null,"This command assigns a defined amount of reviewers to the pull request from the provided list of reviewers."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Arguments"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"comma_separated_list_of_reviewers")),(0,n.kt)("td",{parentName:"tr",align:"left"},"List of GitHub logins to select from.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Flags"),":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Flags"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"-t"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"--total-reviewers")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The total number of reviewers to assign to. By default, it assigns to all reviewers.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"-p"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"--review-policy")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The policy followed for reviewer assignment. By default, the policy is ",(0,n.kt)("inlineCode",{parentName:"td"},"reviewpad"),".")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad assign-reviewers <comma_separated_list_of_reviewers> [--total-reviewers|-t] <total_required_reviewers> [--review-policy|-p] <review_policy>\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Examples"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad assign-reviewers john,jane\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad assign-reviewers john,jane --total-reviewers 1 --review-policy random\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"/reviewpad assign-reviewers jane,john -t 1 -p random\n")))}m.isMDXComponent=!0}}]);