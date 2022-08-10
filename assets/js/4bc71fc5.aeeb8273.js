"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[7115],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const o={title:"Label critical changes with semantic code annotations",id:"label-critical-changes-with-semantic-code-annotations"},r=void 0,c={unversionedId:"use-cases/automated-labelling/label-critical-changes-with-semantic-code-annotations",id:"version-3.0.1/use-cases/automated-labelling/label-critical-changes-with-semantic-code-annotations",title:"Label critical changes with semantic code annotations",description:"The hasAnnotation built-in can be used to access code annotations in Reviewpad configurations. A key differentiator is that Reviewpad can understand the context of changes allowing for powerful checks.",source:"@site/versioned_docs/version-3.0.1/use-cases/automated-labelling/label-critical-changes-with-semantic-code-annotations.md",sourceDirName:"use-cases/automated-labelling",slug:"/use-cases/automated-labelling/label-critical-changes-with-semantic-code-annotations",permalink:"/use-cases/automated-labelling/label-critical-changes-with-semantic-code-annotations",draft:!1,editUrl:"https://github.com/reviewpad/maester/tree/main/versioned_docs/version-3.0.1/use-cases/automated-labelling/label-critical-changes-with-semantic-code-annotations.md",tags:[],version:"3.0.1",frontMatter:{title:"Label critical changes with semantic code annotations",id:"label-critical-changes-with-semantic-code-annotations"},sidebar:"DocsSidebar",previous:{title:"Label critical changes with code pattern",permalink:"/use-cases/automated-labelling/label-critical-changes-with-code-pattern"},next:{title:"Remove label based on file paths",permalink:"/use-cases/automated-labelling/remove-label-based-on-file-paths"}},l={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/reviewpad-file-specification/aladino-specification/aladino-built-ins#hasannotation"},"hasAnnotation")," built-in can be used to access code annotations in Reviewpad configurations. A key differentiator is that Reviewpad can understand the context of changes allowing for powerful checks."),(0,i.kt)("p",null,"To use the annotation in ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," files, you need to annotate functions of interest with the comment ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad-an: critical"),". For example, consider the following ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/reviewpad/action-demo/blob/policies/go/quicksort.go#L6"},"Go function"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// reviewpad-an: critical\nfunc quicksort(a []int) []int {\n    if len(a) < 2 {\n        return a\n    }\n\n    left, right := 0, len(a)-1\n\n    pivot := rand.Int() % len(a)\n\n    a[pivot], a[right] = a[right], a[pivot]\n\n    for i := range a {\n        if a[i] < a[right] {\n            a[left], a[i] = a[i], a[left]\n            left++\n        }\n    }\n\n    a[left], a[right] = a[right], a[left]\n\n    quicksort(a[:left])\n    quicksort(a[left+1:])\n\n    return a\n}\n")),(0,i.kt)("p",null,"From now on, we can automatically label PRs that modify the content of this function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  critical:\n    description: Critical code\n    # color is the hexadecimal color code for the label, without the leading #.\n    color: "fd5e53"\n\nrules:\n  - name: changesCriticalCode\n    description: Patch involves a critical method or function\n    kind: patch\n    spec: $hasAnnotation("critical")\n\nworkflows:\n  - name: critical\n    description: Modifications of critical code require careful review\n    if:\n      - rule: changesCriticalCode\n    then:\n      - $addLabel("critical")\n')),(0,i.kt)("p",null,"As an example, check out ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/reviewpad/action-demo/pull/10"},"reviewpad/action-demo/#10"),"."),(0,i.kt)("p",null,"In a future version, we plan to allow such specification in configuration files, for developers that do not want to add such annotations to the source code. Effectively, Reviewpad allows to implement a much more advanced version of CODEOWNERS."))}u.isMDXComponent=!0}}]);