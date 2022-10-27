"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[77810],{52991:(e,t,s)=>{s.d(t,{Z:()=>N});var a=s(67294),i=s(86010),n=s(52802),r=s(39960),m=s(13919),l=s(95999);const o="cardContainer_fWXF",c="cardTitle_rnsV",p="cardDescription_PWke";function u(e){let{href:t,children:s}=e;return a.createElement(r.Z,{href:t,className:(0,i.Z)("card padding--lg",o)},s)}function d(e){let{href:t,icon:s,title:n,description:r}=e;return a.createElement(u,{href:t},a.createElement("h2",{className:(0,i.Z)("text--truncate",c),title:n},s," ",n),r&&a.createElement("p",{className:(0,i.Z)("text--truncate",p),title:r},r))}function k(e){let{item:t}=e;const s=(0,n.Wl)(t);return s?a.createElement(d,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const s=(0,m.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,n.xz)(t.docId??void 0);return a.createElement(d,{href:t.href,icon:s,title:t.label,description:null==i?void 0:i.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(g,{item:t});case"category":return a.createElement(k,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const s=(0,n.jA)();return a.createElement(N,{items:s.items,className:t})}function N(e){const{items:t,className:s}=e;if(!t)return a.createElement(h,e);const r=(0,n.MN)(t);return a.createElement("section",{className:(0,i.Z)("row",s)},r.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(f,{item:e})))))}},10941:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>m,metadata:()=>o,toc:()=>p});var a=s(87462),i=(s(67294),s(3905)),n=s(52991),r=s(52802);const m={title:"Timestamps",id:"timestamps",slug:"/use-cases/timestamps"},l=void 0,o={unversionedId:"use-cases/timestamps/timestamps",id:"version-3.12.0/use-cases/timestamps/timestamps",title:"Timestamps",description:"Reviewpad timestamps allow us to trigger workflows based on time.",source:"@site/versioned_docs/version-3.12.0/use-cases/timestamps/timestamps.mdx",sourceDirName:"use-cases/timestamps",slug:"/use-cases/timestamps",permalink:"/use-cases/timestamps",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/timestamps/timestamps.mdx",tags:[],version:"3.12.0",frontMatter:{title:"Timestamps",id:"timestamps",slug:"/use-cases/timestamps"},sidebar:"DocsSidebar",previous:{title:"Stale Issues or Pull Requests",permalink:"/use-cases/stale-issues-or-pull-requests"},next:{title:"Label on change freeze",permalink:"/use-cases/label-on-change-freeze"}},c={},p=[{value:"RFC3339 and similar Timestamps",id:"rfc3339-and-similar-timestamps",level:3},{value:"Relative Timestamps",id:"relative-timestamps",level:3}],u={toc:p};function d(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Reviewpad timestamps allow us to trigger workflows based on time."),(0,i.kt)("p",null,"We are able to use ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/time#pkg-constants"},"RFC3339 timestamps")," or relative timestamps."),(0,i.kt)("h3",{id:"rfc3339-and-similar-timestamps"},"RFC3339 and similar Timestamps"),(0,i.kt)("p",null,"Here we can use a timestamp in similar ",(0,i.kt)("inlineCode",{parentName:"p"},"RFC3339")," format:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"YYYYMMDD")," - e.g. 20220405"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"YYYY-MM-DD")," - e.g. 2022-04-05"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"YYYYMMDDTHH:MM:SS")," - e.g. 20220405T22:01:50"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"YYYY-MM-DDTHH:MM:SS")," - e.g. 2022-04-05T22:01:50")),(0,i.kt)("h3",{id:"relative-timestamps"},"Relative Timestamps"),(0,i.kt)("p",null,"Use time as expression ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"TIME year|month|day|week|hour|minute ago")),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"15 days ago"),(0,i.kt)("li",{parentName:"ul"},"3 months ago"),(0,i.kt)("li",{parentName:"ul"},"1 hour ago")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ud83d\udcd8 Aladino Syntax"),(0,i.kt)("p",{parentName:"blockquote"},"Check ",(0,i.kt)("a",{parentName:"p",href:"/guides/aladino/syntax"},"Aladino Syntax")," for more details about timestamps.")),(0,i.kt)("h3",{id:""}),(0,i.kt)(n.Z,{items:(0,r.jA)().items,mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);