"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[81281],{52991:(e,t,s)=>{s.d(t,{Z:()=>w});var a=s(67294),r=s(86010),n=s(52802),i=s(39960),c=s(13919),o=s(95999);const l="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function d(e){let{href:t,children:s}=e;return a.createElement(i.Z,{href:t,className:(0,r.Z)("card padding--lg",l)},s)}function p(e){let{href:t,icon:s,title:n,description:i}=e;return a.createElement(d,{href:t},a.createElement("h2",{className:(0,r.Z)("text--truncate",u),title:n},s," ",n),i&&a.createElement("p",{className:(0,r.Z)("text--truncate",m),title:i},i))}function f(e){let{item:t}=e;const s=(0,n.Wl)(t);return s?a.createElement(p,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const s=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,n.xz)(t.docId??void 0);return a.createElement(p,{href:t.href,icon:s,title:t.label,description:null==r?void 0:r.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(h,{item:t});case"category":return a.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const s=(0,n.jA)();return a.createElement(w,{items:s.items,className:t})}function w(e){const{items:t,className:s}=e;if(!t)return a.createElement(k,e);const i=(0,n.MN)(t);return a.createElement("section",{className:(0,r.Z)("row",s)},i.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(g,{item:e})))))}},81068:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var a=s(87462),r=(s(67294),s(3905)),n=s(52991),i=s(52802);const c={title:"Use cases",id:"use-cases",slug:"/use-cases"},o=void 0,l={unversionedId:"use-cases/use-cases",id:"version-3.13.0/use-cases/use-cases",title:"Use cases",description:"A great way to understand Reviewpad features is to have a look at some use cases.",source:"@site/versioned_docs/version-3.13.0/use-cases/use-cases.mdx",sourceDirName:"use-cases",slug:"/use-cases",permalink:"/3.13.0/use-cases",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/use-cases.mdx",tags:[],version:"3.13.0",frontMatter:{title:"Use cases",id:"use-cases",slug:"/use-cases"},sidebar:"DocsSidebar",previous:{title:"Aladino semantics",permalink:"/3.13.0/guides/aladino/semantics"},next:{title:"Auto-merge",permalink:"/3.13.0/use-cases/auto-merge"}},u={},m=[],d={toc:m};function p(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A great way to understand Reviewpad features is to have a look at some use cases."),(0,r.kt)("p",null,"The following list of uses cases is based on the feedback and the questions we received from our users \ud83d\ude4c"),(0,r.kt)("p",null,"If you have any other use cases in mind, please let us know at ",(0,r.kt)("a",{parentName:"p",href:"https://reviewpad.com/discord"},"Discord"),", ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/reviewpad"},"Twitter"),", or ",(0,r.kt)("a",{parentName:"p",href:"mailto:info@reviewpad.com"},"email")," \ud83d\ude4f"),(0,r.kt)(n.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);