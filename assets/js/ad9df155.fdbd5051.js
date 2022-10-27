"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[83649],{75223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),i=n(90814);const l={},s=void 0,o={unversionedId:"guides/built-ins/functions/totalCodeReviews/index",id:"version-3.11.0/guides/built-ins/functions/totalCodeReviews/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.11.0/guides/built-ins/functions/totalCodeReviews/index.mdx",sourceDirName:"guides/built-ins/functions/totalCodeReviews",slug:"/guides/built-ins/functions/totalCodeReviews/",permalink:"/3.11.0/guides/built-ins/functions/totalCodeReviews/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/totalCodeReviews/index.mdx",tags:[],version:"3.11.0",frontMatter:{}},d={},p=[],u={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),":"),(0,r.kt)("p",null,"Retrieves the total number of code reviews made by the given GitHub user login."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"user_login")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The GitHub user login.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The total number of code reviews made by the GitHub user login.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"$totalCodeReviews($author())\n")),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,r.kt)(i.Z,{language:"yml",mdxType:"CodeBlock"},"rules:\n  - name: are-all-reviewers-juniors\n    description: Verifies if all reviewers are juniors\n    kind: patch\n    spec: '$all($reviewers(), ($rev: String => $totalCodeReviews($rev) < 5))'\n\nworkflows:\n  - name: requires-review-from-senior-dev\n    if:\n      - rule: are-all-reviewers-juniors\n    then:\n      - '$assignReviewer($group(\"seniors\"), 1, \"reviewpad\")'\n"))}m.isMDXComponent=!0}}]);