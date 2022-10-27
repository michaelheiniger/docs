"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[55359],{77580:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const s={title:"Aladino Semantics",id:"semantics"},o=void 0,l={unversionedId:"guides/aladino/semantics",id:"version-3.7.0/guides/aladino/semantics",title:"Aladino Semantics",description:"Aladino supports five types of values: booleans, numbers, strings, arrays and a special type action.",source:"@site/versioned_docs/version-3.7.0/guides/aladino/semantics.md",sourceDirName:"guides/aladino",slug:"/guides/aladino/semantics",permalink:"/3.7.0/guides/aladino/semantics",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/aladino/semantics.md",tags:[],version:"3.7.0",frontMatter:{title:"Aladino Semantics",id:"semantics"},sidebar:"DocsSidebar",previous:{title:"Aladino Syntax",permalink:"/3.7.0/guides/aladino/syntax"},next:{title:"Use Cases",permalink:"/3.7.0/use-cases"}},r={},d=[],p={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Aladino supports five types of values: ",(0,i.kt)("inlineCode",{parentName:"p"},"booleans"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"numbers"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"strings"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"arrays")," and a special type ",(0,i.kt)("inlineCode",{parentName:"p"},"_action_"),"."),(0,i.kt)("p",null,"Since the language is quite simple, it is also straightforward to perform type inference."),(0,i.kt)("p",null,"There are two requirements when it comes to typing:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The type of the expression in a rule ",(0,i.kt)("inlineCode",{parentName:"li"},"spec")," is ",(0,i.kt)("em",{parentName:"li"},"bool"),". For example, the following rule is invalid:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: doesntTypeCheckToBool\n  kind: patch\n  description: Rule that does not type check to bool\n  spec: "hello" # type error\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"The type of each action to be ",(0,i.kt)("em",{parentName:"li"},"effect.")," For example, the following workflow is invalid because of its actions:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: invalidWorkflow\n  description: Invalid workflow because of action\n  if:\n    - rule: rule_1\n  then:\n    - "hello" # type error\n')),(0,i.kt)("p",null,"Since by design you cannot define functions or variables, the usefulness of the language comes down to the set of built-in variables and functions that are provided."))}c.isMDXComponent=!0}}]);