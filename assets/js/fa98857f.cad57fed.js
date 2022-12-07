"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[32856],{28999:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var n=a(87462),i=(a(67294),a(3905)),l=a(90814);const r={},s=void 0,p={unversionedId:"guides/built-ins/actions/fail/index",id:"version-3.15.0/guides/built-ins/actions/fail/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.15.0/guides/built-ins/actions/fail/index.mdx",sourceDirName:"guides/built-ins/actions/fail",slug:"/guides/built-ins/actions/fail/",permalink:"/3.15.0/guides/built-ins/actions/fail/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/fail/index.mdx",tags:[],version:"3.15.0",frontMatter:{}},o={},m=[],d={toc:m};function k(t){let{components:e,...a}=t;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Fails the action with a given fail message which will appear in the logs of the GitHub action."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Available for:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Available"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"issue")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"pull_request")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fail_message")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The fail message.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$fail("missing specs")\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(l.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: missing-tests\n    spec: $changed("src/@1.java", "test/@1.java") == false\n\nworkflows:\n  - name: check-compliance\n    if:\n      - rule: missing-tests\n    then:\n      - $error("Please include tests for your change")\n      - $fail("missing tests")\n'))}k.isMDXComponent=!0}}]);