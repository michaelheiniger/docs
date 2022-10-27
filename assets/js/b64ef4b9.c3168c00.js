"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[86685],{82899:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=a(87462),c=(a(67294),a(3905)),n=a(90814);const s={title:"Label critical changes with code pattern",id:"label-critical-changes-with-code-pattern",slug:"/use-cases/label-critical-changes-with-code-pattern"},l=void 0,o={unversionedId:"use-cases/automated-labelling/label-critical-changes-with-code-pattern/label-critical-changes-with-code-pattern",id:"version-3.11.0/use-cases/automated-labelling/label-critical-changes-with-code-pattern/label-critical-changes-with-code-pattern",title:"Label critical changes with code pattern",description:"The hasCodePattern built-in allows you to query the code contained in the diff to understand if, for example, particular function calls were changed or sensitive data (such as passwords or access tokens) are being explicitly added to the code.",source:"@site/versioned_docs/version-3.11.0/use-cases/automated-labelling/label-critical-changes-with-code-pattern/index.mdx",sourceDirName:"use-cases/automated-labelling/label-critical-changes-with-code-pattern",slug:"/use-cases/label-critical-changes-with-code-pattern",permalink:"/3.11.0/use-cases/label-critical-changes-with-code-pattern",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/automated-labelling/label-critical-changes-with-code-pattern/index.mdx",tags:[],version:"3.11.0",frontMatter:{title:"Label critical changes with code pattern",id:"label-critical-changes-with-code-pattern",slug:"/use-cases/label-critical-changes-with-code-pattern"},sidebar:"DocsSidebar",previous:{title:"Label based on file paths",permalink:"/3.11.0/use-cases/label-based-on-file-paths"},next:{title:"Label critical changes with semantic code annotations",permalink:"/3.11.0/use-cases/label-critical-changes-with-semantic-code-annotations"}},r={},d=[],h={toc:d};function u(e){let{components:t,...a}=e;return(0,c.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"The ",(0,c.kt)("a",{parentName:"p",href:"/guides/built-ins#hascodepattern"},"hasCodePattern")," built-in allows you to query the code contained in the diff to understand if, for example, particular function calls were changed or sensitive data (such as passwords or access tokens) are being explicitly added to the code."),(0,c.kt)(n.Z,{language:"yml",mdxType:"CodeBlock"},"api-version: reviewpad.com/v3.x\n\nlabels:\n  critical:\n    description: Critical code\n    # color is the hexadecimal color code for the label, without the leading #.\n    color: fd5e53\n\nrules:\n  - name: calls-quicksort\n    kind: patch\n    description: Patch contains the keyword quicksort\n    spec: '$hasCodePattern(\"quicksort\")'\n\nworkflows:\n  - name: critical\n    description: Modifications of critical code require careful review\n    if:\n      - rule: calls-quicksort\n    then:\n      - '$addLabel(\"critical\")'\n"))}u.isMDXComponent=!0}}]);