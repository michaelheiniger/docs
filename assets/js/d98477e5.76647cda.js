"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32331],{87269:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>u});var a=i(87462),n=(i(67294),i(3905)),o=i(90814),p=i(97379);const s={id:"migrations",slug:"/guides/migrations",title:"Migrations"},l="Migrations",r={unversionedId:"guides/migrations",id:"guides/migrations",title:"Migrations",description:"This guide explains how to complete Reviewpad migrations.",source:"@site/docs/guides/migrations.md",sourceDirName:"guides",slug:"/guides/migrations",permalink:"/next/guides/migrations",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/migrations.md",tags:[],version:"current",frontMatter:{id:"migrations",slug:"/guides/migrations",title:"Migrations"},sidebar:"DocsSidebar",previous:{title:"Extends",permalink:"/next/guides/extends"},next:{title:"Use cases",permalink:"/next/use-cases"}},d={},u=[{value:"Migrate from the GitHub Action to the GitHub App",id:"migrate-from-the-github-action-to-the-github-app",level:2},{value:"Why?",id:"why",level:3},{value:"Step 1. Navigate to the Reviewpad GitHub App page",id:"step-1-navigate-to-the-reviewpad-github-app-page",level:3},{value:"Step 2. Choose which repositories to install Reviewpad on",id:"step-2-choose-which-repositories-to-install-reviewpad-on",level:3},{value:"Step 3. Configure Reviewpad",id:"step-3-configure-reviewpad",level:3},{value:"Step 4. Delete Reviewpad action",id:"step-4-delete-reviewpad-action",level:3}],c={toc:u};function h(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"migrations"},"Migrations"),(0,n.kt)("p",null,"This guide explains how to complete Reviewpad migrations."),(0,n.kt)("h2",{id:"migrate-from-the-github-action-to-the-github-app"},"Migrate from the GitHub Action to the GitHub App"),(0,n.kt)("h3",{id:"why"},"Why?"),(0,n.kt)("p",null,"Using ",(0,n.kt)("a",{parentName:"p",href:"/getting-started/installation-action-tokenized"},"Reviewpad action")," is a great way to get started with Reviewpad. However, it has some limitations. Depending if you are using ",(0,n.kt)("a",{parentName:"p",href:"/getting-started/installation-action-tokenized"},"Reviewpad action with a GitHub token")," you won't be able to use all Reviewpad built-ins. Also, some of the ",(0,n.kt)("a",{parentName:"p",href:"/use-cases"},"Reviewpad use cases")," won't be possible to implement."),(0,n.kt)("p",null,"To overcome these limitations, you can migrate to the Reviewpad GitHub App. The migration is a simple process that can be completed in a few steps."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"To install the ",(0,n.kt)("a",{parentName:"strong",href:"https://github.com/apps/reviewpad"},"Reviewpad GitHub App"),", you need to be an admin of the GitHub organization where you want to install it"),"."),(0,n.kt)("p",{parentName:"admonition"},"If you are not an admin, you can ask your admin to install the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apps/reviewpad"},"Reviewpad GitHub App"),".")),(0,n.kt)("h3",{id:"step-1-navigate-to-the-reviewpad-github-app-page"},"Step 1. Navigate to the Reviewpad GitHub App page"),(0,n.kt)("p",null,"Open the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apps/reviewpad"},"Reviewpad GitHub App page")," and click the green button ",(0,n.kt)("inlineCode",{parentName:"p"},"Install"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Reviewpad Installation - Step 1",src:i(20221).Z,width:"1653",height:"924"})),(0,n.kt)("h3",{id:"step-2-choose-which-repositories-to-install-reviewpad-on"},"Step 2. Choose which repositories to install Reviewpad on"),(0,n.kt)("p",null,"You can choose to install Reviewpad on all repositories or select specific repositories."),(0,n.kt)("p",null,"Once you have selected the option you want, click the green button ",(0,n.kt)("inlineCode",{parentName:"p"},"Install"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Reviewpad Installation - Step 2",src:i(34430).Z,width:"1663",height:"1323"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"After you click the ",(0,n.kt)("inlineCode",{parentName:"p"},"Install")," button you will be redirected to Reviewpad documentation. You can close it and continue with this migration.")),(0,n.kt)("h3",{id:"step-3-configure-reviewpad"},"Step 3. Configure Reviewpad"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you already have a Reviewpad configuration file, you can ",(0,n.kt)("a",{parentName:"p",href:"#step-4-delete-reviewpad-action"},"skip this step"),".")),(0,n.kt)("p",null,"If you don't have a Reviewpad configuration file, create a file called ",(0,n.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," in the root of your repository and add the following content:"),(0,n.kt)(o.Z,{language:"yml",mdxType:"CodeBlock"},p.Z),(0,n.kt)("h3",{id:"step-4-delete-reviewpad-action"},"Step 4. Delete Reviewpad action"),(0,n.kt)("p",null,"Finally, delete the Reviewpad action from your repository. To do this, navigate to ",(0,n.kt)("inlineCode",{parentName:"p"},".github > workflows")," and delete the file ",(0,n.kt)("inlineCode",{parentName:"p"},"reviewpad.yml"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Reviewpad Delete Action",src:i(94033).Z,width:"1024",height:"768"})))}h.isMDXComponent=!0},97379:(e,t,i)=>{i.d(t,{Z:()=>a});const a='api-version: reviewpad.com/v3.x\n\nlabels:\n    small:\n        color: 294b69\n    medium:\n        color: a8c3f7\n    large:\n        color: 8a2138\n\nworkflows:\n    - name: label-pull-request-with-size\n      if:\n          - rule: $size() <= 30\n            extra-actions:\n                - $addLabel("small")\n          - rule: $size() > 30 && $size() <= 100\n            extra-actions:\n                - $addLabel("medium")\n          - rule: $size() > 100\n            extra-actions:\n                - $addLabel("large")\n'},20221:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/step1-38760e5b89117f3fa624f048c034663e.png"},34430:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/step2-326bfedad3d72a63b01681ad90f0da98.png"},94033:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/delete-action-1a3293281f7a44c04e3600bd11bae3d1.gif"}}]);