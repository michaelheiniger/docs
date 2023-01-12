"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87565],{97112:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=t(87462),a=(t(67294),t(3905)),i=t(90814);const r={},l=void 0,o={unversionedId:"guides/built-ins/actions/assignAssignees/index",id:"version-3.20.0/guides/built-ins/actions/assignAssignees/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.20.0/guides/built-ins/actions/assignAssignees/index.mdx",sourceDirName:"guides/built-ins/actions/assignAssignees",slug:"/guides/built-ins/actions/assignAssignees/",permalink:"/3.20.0/guides/built-ins/actions/assignAssignees/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/assignAssignees/index.mdx",tags:[],version:"3.20.0",frontMatter:{}},p={},u=[],d={toc:u};function g(e){let{components:s,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:s,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Assigns up to 10 assignees to a pull request / issue."),(0,a.kt)("p",null,"Users already assigned to a pull request / issue are not replaced."),(0,a.kt)("p",null,"Only users with push access can assign users to a pull request / issue. Otherwise, assignees are silently ignored."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"assignees")),(0,a.kt)("td",{parentName:"tr",align:"left"},"[","]string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The list of GitHub logins to assign the pull request / issue to.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'$assignAssignees(["john", "marie", "peter"])\n')),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(i.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: always-assign-to-author\n    # Run workflow regardless of previous workflow result\n    always-run: true\n    if:\n      - $description() != ""\n    then:\n      - $assignAssignees([$author()])\n'))}g.isMDXComponent=!0}}]);