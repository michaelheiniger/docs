"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[92905],{76602:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var o=n(87462),a=(n(67294),n(3905));const i={title:"Comment on pull requests",id:"comment-on-pull-requests"},r=void 0,s={unversionedId:"use-cases/comment-on-pull-requests",id:"version-3.3.1/use-cases/comment-on-pull-requests",title:"Comment on pull requests",description:"With Reviewpad, you can automatically add comments to the pull request.",source:"@site/versioned_docs/version-3.3.1/use-cases/comment-on-pull-requests.md",sourceDirName:"use-cases",slug:"/use-cases/comment-on-pull-requests",permalink:"/3.3.1/use-cases/comment-on-pull-requests",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/comment-on-pull-requests.md",tags:[],version:"3.3.1",frontMatter:{title:"Comment on pull requests",id:"comment-on-pull-requests"},sidebar:"DocsSidebar",previous:{title:"Label on change freeze",permalink:"/3.3.1/use-cases/label-on-change-freeze"},next:{title:"Enforce branch conventions",permalink:"/3.3.1/use-cases/enforce-branch-conventions"}},l={},m=[{value:"Automatically comment the pull request.",id:"automatically-comment-the-pull-request",level:2}],u={toc:m};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"With Reviewpad, you can automatically add comments to the pull request."),(0,a.kt)("p",null,"There are three different mechanisms to add a comment to the pull request:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Using the ",(0,a.kt)("a",{parentName:"li",href:"/guides/built-ins#comment"},(0,a.kt)("inlineCode",{parentName:"a"},"comment")," action"),"."),(0,a.kt)("li",{parentName:"ol"},"Using the ",(0,a.kt)("a",{parentName:"li",href:"/guides/built-ins#commentonce"},(0,a.kt)("inlineCode",{parentName:"a"},"commentOnce")," action"),". "),(0,a.kt)("li",{parentName:"ol"},"Using the ",(0,a.kt)("a",{parentName:"li",href:"/guides/built-ins#error"},(0,a.kt)("inlineCode",{parentName:"a"},"error")),", ",(0,a.kt)("a",{parentName:"li",href:"/guides/built-ins#info"},(0,a.kt)("inlineCode",{parentName:"a"},"info"))," or ",(0,a.kt)("a",{parentName:"li",href:"/guides/built-ins#warn"},(0,a.kt)("inlineCode",{parentName:"a"},"warn"))," actions.")),(0,a.kt)("p",null,"The difference between the modes is that the ",(0,a.kt)("inlineCode",{parentName:"p"},"comment")," action will add a comment every time the action is executed, ",(0,a.kt)("inlineCode",{parentName:"p"},"commentOnce")," will add a comment once no matter the amount of times the action is executed, while the other commenting actions are bundled together in a comment which is also automatically updated. "),(0,a.kt)("p",null,"To the use the third set of comments (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"error"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"warn")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"info"),") you need to enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"professional")," edition."),(0,a.kt)("h2",{id:"automatically-comment-the-pull-request"},"Automatically comment the pull request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"api-version: reviewpad.com/v3.x\n\nmode: verbose\n\nrules:\n  - name: emptyDescription\n    spec: '$description() == \"\"'\n\n  - name: isFirstTimeContributor\n    spec: '$totalCreatedPullRequests($author()) == 1'\n\nworkflows:\n  - name: welcome-user\n    description: Welcome user first contribution\n    if:\n      - rule: isFirstTimeContributor\n    then:\n      # Comment on pull request once\n      - '$commentOnce(\"Well done! This is your first contribution.\")'\n\n  - name: comment-on-empty-description\n    description: Error on empty descriptions\n    if:\n      - rule: emptyDescription\n    then:\n      # Add error message to reviewpad report\n      - '$error(\"The description of the pull request cannot be empty\")'\n\n  - name: comment-on-pull-request\n    description: Example comment on pull request\n    if:\n      - 'true'\n    then:\n      # Add info message to reviewpad report\n      - '$info(\"Thanks for this pull request. @marcelosousa will take a look!\")'\n      # Add warning message to reviewpad report\n      - '$warn(\"Please make sure the CI is green before merging.\")'\n")),(0,a.kt)("p",null,"You can see this workflow in action the following ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/reviewpad/action-showcase/pull/17"},"pull request"),"."))}c.isMDXComponent=!0}}]);