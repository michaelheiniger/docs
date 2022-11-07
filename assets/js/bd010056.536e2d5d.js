"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[91828],{88666:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const s={title:"Security",id:"security",slug:"security"},i=void 0,o={unversionedId:"getting-started/security",id:"version-3.12.0/getting-started/security",title:"Security",description:"Reviewpad is distributed as a GitHub App. This means that it is installed on your GitHub account and has access to your repositories.",source:"@site/versioned_docs/version-3.12.0/getting-started/security.md",sourceDirName:"getting-started",slug:"/getting-started/security",permalink:"/getting-started/security",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/getting-started/security.md",tags:[],version:"3.12.0",frontMatter:{title:"Security",id:"security",slug:"security"},sidebar:"DocsSidebar",previous:{title:"Playground",permalink:"/getting-started/playground"},next:{title:"Syntax",permalink:"/guides/syntax"}},p={},d=[{value:"Permissions",id:"permissions",level:2}],l={toc:d};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Reviewpad is distributed as a GitHub App. This means that it is installed on your GitHub account and has access to your repositories."),(0,n.kt)("p",null,"The repositories to which Reviewpad has access is defined at the installation time. All repositories outside of the defined list are not accessible to Reviewpad."),(0,n.kt)("p",null,"Reviewpad executions do not communicate between them, they are ephemeral and run in an isolated environment from other users so that there is no possibility of information leaks between environments."),(0,n.kt)("h2",{id:"permissions"},"Permissions"),(0,n.kt)("p",null,"Reviewpad requires the following permissions:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Permissions"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/overview/permissions-required-for-github-apps#actions"},"Actions")),(0,n.kt)("td",{parentName:"tr",align:null},"Read-only")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/overview/permissions-required-for-github-apps#administration"},"Administration")),(0,n.kt)("td",{parentName:"tr",align:null},"Read-only")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/overview/permissions-required-for-github-apps#checks"},"Checks")),(0,n.kt)("td",{parentName:"tr",align:null},"Read and write")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.github.com/v3/apps/permissions"},"Code scanning alerts")),(0,n.kt)("td",{parentName:"tr",align:null},"Read-only")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.github.com/v3/apps/permissions#commit-statuses"},"Commit statuses")),(0,n.kt)("td",{parentName:"tr",align:null},"Read and write")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/overview/permissions-required-for-github-apps#contents"},"Contents")),(0,n.kt)("td",{parentName:"tr",align:null},"Read and write")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.github.com/v3/apps/permissions#dependabot-alerts"},"Dependabot alerts")),(0,n.kt)("td",{parentName:"tr",align:null},"Read-only")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.github.com/v3/apps/permissions#deployments"},"Deployments")),(0,n.kt)("td",{parentName:"tr",align:null},"Read-only")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.github.com/v3/apps/permissions#issues"},"Issues")),(0,n.kt)("td",{parentName:"tr",align:null},"Read and write")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.github.com/v3/apps/permissions"},"Merge queues")),(0,n.kt)("td",{parentName:"tr",align:null},"Read and write")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.github.com/v3/apps/permissions#metadata"},"Metadata")),(0,n.kt)("td",{parentName:"tr",align:null},"Read-only")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.github.com/v3/apps/permissions"},"Packages")),(0,n.kt)("td",{parentName:"tr",align:null},"Read-only")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.github.com/v3/apps/permissions#pull-requests"},"Pull requests")),(0,n.kt)("td",{parentName:"tr",align:null},"Read and write")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.github.com/v3/apps/permissions#secret-scanning-alerts"},"Secret scanning alerts")),(0,n.kt)("td",{parentName:"tr",align:null},"Read-only")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/overview/permissions-required-for-github-apps#repository-webhooks"},"Webhooks")),(0,n.kt)("td",{parentName:"tr",align:null},"Read and write")))))}m.isMDXComponent=!0}}]);