"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[72896],{90895:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>r});var s=t(87462),l=(t(67294),t(3905));const n={id:"label-based-on-file-paths",slug:"/use-cases/label-based-on-file-paths",title:"Label based on file paths"},i=void 0,o={unversionedId:"use-cases/automated-labelling/label-based-on-file-paths",id:"version-3.9.0/use-cases/automated-labelling/label-based-on-file-paths",title:"Label based on file paths",description:"Here's an example of a reviewpad.yml configuration that label pull requests that contain changes to a certain filepath.",source:"@site/versioned_docs/version-3.9.0/use-cases/automated-labelling/label-based-on-file-paths.md",sourceDirName:"use-cases/automated-labelling",slug:"/use-cases/label-based-on-file-paths",permalink:"/3.9.0/use-cases/label-based-on-file-paths",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/automated-labelling/label-based-on-file-paths.md",tags:[],version:"3.9.0",frontMatter:{id:"label-based-on-file-paths",slug:"/use-cases/label-based-on-file-paths",title:"Label based on file paths"},sidebar:"DocsSidebar",previous:{title:"Label based on author groups",permalink:"/3.9.0/use-cases/label-based-on-author-groups"},next:{title:"Label critical changes with code pattern",permalink:"/3.9.0/use-cases/label-critical-changes-with-code-pattern"}},c={},r=[],d={toc:r};function p(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,s.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Here's an example of a ",(0,l.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration that label pull requests that contain changes to a certain filepath."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  critical:\n    description: Critical changes\n    # color is the hexadecimal color code for the label, without the leading #.\n    color: "fd5e53"\n\nrules:\n  - name: changesMainFile\n    kind: patch\n    description: Patch contains changes to the main file\n    spec: $hasFileName("go/main.go")\n\nworkflows:\n  - name: critical\n    description: Modifications of critical code require careful review\n    if:\n      - rule: changesMainFile\n    then:\n      - $addLabel("critical")\n')))}p.isMDXComponent=!0}}]);