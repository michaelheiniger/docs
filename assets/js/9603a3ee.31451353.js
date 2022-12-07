"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[92201],{98495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var a=n(87462),r=(n(67294),n(3905)),l=n(90814);const i={},p=void 0,s={unversionedId:"guides/built-ins/functions/rule/index",id:"version-3.13.0/guides/built-ins/functions/rule/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.13.0/guides/built-ins/functions/rule/index.mdx",sourceDirName:"guides/built-ins/functions/rule",slug:"/guides/built-ins/functions/rule/",permalink:"/3.13.0/guides/built-ins/functions/rule/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/rule/index.mdx",tags:[],version:"3.13.0",frontMatter:{}},m={},o=[],d={toc:o};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),":"),(0,r.kt)("p",null,"Evaluates a rule. This rule needs to be defined in the same ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," file."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Available for:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Available"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"issue")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pull_request")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2705")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"rule_name")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The rule name.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The evaluation of the rule.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"'$rule(\"is-small\")'\n")),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,r.kt)(l.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: size-compliance\n    spec: $size() < 100\n  - name: description-compliance\n    spec: $description() != ""\n  - name: is-compliant\n    spec: $rule("size-compliance") && $rule("description-compliance")\n\nworkflows:\n  - name: check-compliance\n    if:\n      - rule: is-compliant\n    then:\n      - $assignRandomReviewer()\n'))}u.isMDXComponent=!0}}]);