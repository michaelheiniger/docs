"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63065],{12085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var i=n(87462),a=(n(67294),n(3905)),r=n(90814);const l={},s=void 0,o={unversionedId:"guides/built-ins/actions/setProjectField/index",id:"version-3.19.0/guides/built-ins/actions/setProjectField/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.19.0/guides/built-ins/actions/setProjectField/index.mdx",sourceDirName:"guides/built-ins/actions/setProjectField",slug:"/guides/built-ins/actions/setProjectField/",permalink:"/guides/built-ins/actions/setProjectField/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/setProjectField/index.mdx",tags:[],version:"3.19.0",frontMatter:{}},d={},p=[],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Sets the value of a GitHub project's ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/issues/planning-and-tracking-with-projects/understanding-fields"},"custom field"),"\nfor the pull request / issue in the current context."),(0,a.kt)("p",null,"Currently, we only support setting the value of a custom field in a project."),(0,a.kt)("p",null,"We don't support creating a custom field or a project."),(0,a.kt)("p",null,"The current field value is overwritten."),(0,a.kt)("p",null,"We support the following types of custom fields: text fields, number fields, and single select fields."),(0,a.kt)("p",null,"An error is returned if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The project doesn't exist."),(0,a.kt)("li",{parentName:"ul"},"The field doesn't exist."),(0,a.kt)("li",{parentName:"ul"},"The field is not one of the types above."),(0,a.kt)("li",{parentName:"ul"},"The value is not a number for a number field.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"project_title")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The title of the project - case sensitive.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"field")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The custom field which can be text, number, or single select (must exist).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"value")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The value of the field.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'$setProjectField("reviewpad", "priority", "P1")\n$setProjectField("reviewpad", "size", "50")\n')),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: set-project-field\n    if:\n        - $hasLinkedIssues() == false\n    then:\n        - $addToProject("jupiter", "in progress")\n        - $setProjectField("jupiter", "notes", "missing issue")\n'))}c.isMDXComponent=!0}}]);