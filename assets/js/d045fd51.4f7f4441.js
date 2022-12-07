"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[53331],{58629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var a=n(87462),s=(n(67294),n(3905)),i=n(90814);const r={},l=void 0,p={unversionedId:"guides/built-ins/actions/assignAssignees/index",id:"version-3.15.0/guides/built-ins/actions/assignAssignees/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.15.0/guides/built-ins/actions/assignAssignees/index.mdx",sourceDirName:"guides/built-ins/actions/assignAssignees",slug:"/guides/built-ins/actions/assignAssignees/",permalink:"/3.15.0/guides/built-ins/actions/assignAssignees/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/assignAssignees/index.mdx",tags:[],version:"3.15.0",frontMatter:{}},o={},d=[],u={toc:d};function g(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Description"),":"),(0,s.kt)("p",null,"Assigns up to 10 assignees to a pull request."),(0,s.kt)("p",null,"Users already assigned to a pull request are not replaced."),(0,s.kt)("p",null,"Only users with push access can assign users to a pull request. Otherwise, assignees are silently ignored."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Available for:")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Available"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"issue")),(0,s.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"pull_request")),(0,s.kt)("td",{parentName:"tr",align:"left"},"\u2705")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"assignees")),(0,s.kt)("td",{parentName:"tr",align:"left"},"[","]string"),(0,s.kt)("td",{parentName:"tr",align:"left"},"The list of GitHub logins to assign the pull request to.")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Examples"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},'$assignAssignees(["john", "marie", "peter"])\n')),(0,s.kt)("p",null,"A ",(0,s.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,s.kt)(i.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: always-assign-to-author\n    # Run workflow regardless of previous workflow result\n    always-run: true\n    if:\n      - $description() != ""\n    then:\n      - $assignAssignees([$author()])\n'))}g.isMDXComponent=!0}}]);