"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[90504],{22880:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>r});var n=t(87462),i=(t(67294),t(3905));const o={title:"Label critical changes with semantic code annotations",id:"label-critical-changes-with-semantic-code-annotations",slug:"/use-cases/label-critical-changes-with-semantic-code-annotations"},c=void 0,s={unversionedId:"use-cases/automated-labelling/label-critical-changes-with-semantic-code-annotations",id:"version-3.2.0/use-cases/automated-labelling/label-critical-changes-with-semantic-code-annotations",title:"Label critical changes with semantic code annotations",description:"The hasAnnotation built-in can be used to access code annotations in Reviewpad configurations. A key differentiator is that Reviewpad can understand the context of changes allowing for powerful checks.",source:"@site/versioned_docs/version-3.2.0/use-cases/automated-labelling/label-critical-changes-with-semantic-code-annotations.md",sourceDirName:"use-cases/automated-labelling",slug:"/use-cases/label-critical-changes-with-semantic-code-annotations",permalink:"/3.2.0/use-cases/label-critical-changes-with-semantic-code-annotations",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/automated-labelling/label-critical-changes-with-semantic-code-annotations.md",tags:[],version:"3.2.0",frontMatter:{title:"Label critical changes with semantic code annotations",id:"label-critical-changes-with-semantic-code-annotations",slug:"/use-cases/label-critical-changes-with-semantic-code-annotations"},sidebar:"DocsSidebar",previous:{title:"Label critical changes with code pattern",permalink:"/3.2.0/use-cases/label-critical-changes-with-code-pattern"},next:{title:"Remove label based on file paths",permalink:"/3.2.0/use-cases/remove-label-based-on-file-paths"}},l={},r=[],d={toc:r};function h(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/guides/built-ins#hasannotation"},"hasAnnotation")," built-in can be used to access code annotations in Reviewpad configurations. A key differentiator is that Reviewpad can understand the context of changes allowing for powerful checks."),(0,i.kt)("p",null,"To use the annotation in ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," files, you need to annotate functions of interest with the comment ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad-an: critical"),". For example, consider the following ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/reviewpad/action-demo/blob/policies/go/quicksort.go#L6"},"Go function"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// reviewpad-an: critical\nfunc quicksort(a []int) []int {\n    if len(a) < 2 {\n        return a\n    }\n\n    left, right := 0, len(a)-1\n\n    pivot := rand.Int() % len(a)\n\n    a[pivot], a[right] = a[right], a[pivot]\n\n    for i := range a {\n        if a[i] < a[right] {\n            a[left], a[i] = a[i], a[left]\n            left++\n        }\n    }\n\n    a[left], a[right] = a[right], a[left]\n\n    quicksort(a[:left])\n    quicksort(a[left+1:])\n\n    return a\n}\n")),(0,i.kt)("p",null,"From now on, we can automatically label PRs that modify the content of this function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  critical:\n    description: Critical code\n    # color is the hexadecimal color code for the label, without the leading #.\n    color: "fd5e53"\n\nrules:\n  - name: changesCriticalCode\n    description: Patch involves a critical method or function\n    kind: patch\n    spec: $hasAnnotation("critical")\n\nworkflows:\n  - name: critical\n    description: Modifications of critical code require careful review\n    if:\n      - rule: changesCriticalCode\n    then:\n      - $addLabel("critical")\n')),(0,i.kt)("p",null,"As an example, check out ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/reviewpad/action-demo/pull/10"},"reviewpad/action-demo/#10"),"."),(0,i.kt)("p",null,"In a future version, we plan to allow such specification in configuration files, for developers that do not want to add such annotations to the source code. Effectively, Reviewpad allows to implement a much more advanced version of CODEOWNERS."))}h.isMDXComponent=!0}}]);