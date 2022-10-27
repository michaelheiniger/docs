"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[55969],{52991:(e,t,i)=>{i.d(t,{Z:()=>k});var n=i(67294),a=i(86010),s=i(52802),c=i(39960),o=i(13919),r=i(95999);const l="cardContainer_fWXF",d="cardTitle_rnsV",u="cardDescription_PWke";function m(e){let{href:t,children:i}=e;return n.createElement(c.Z,{href:t,className:(0,a.Z)("card padding--lg",l)},i)}function p(e){let{href:t,icon:i,title:s,description:c}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",d),title:s},i," ",s),c&&n.createElement("p",{className:(0,a.Z)("text--truncate",u),title:c},c))}function f(e){let{item:t}=e;const i=(0,s.Wl)(t);return i?n.createElement(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,r.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const i=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,s.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:i,title:t.label,description:null==a?void 0:a.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const i=(0,s.jA)();return n.createElement(k,{items:i.items,className:t})}function k(e){const{items:t,className:i}=e;if(!t)return n.createElement(y,e);const c=(0,s.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",i)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(h,{item:e})))))}},99451:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=i(87462),a=(i(67294),i(3905)),s=i(52991),c=i(52802);const o={title:"Aladino Specification",id:"specification",slug:"specification"},r=void 0,l={unversionedId:"guides/aladino/specification",id:"version-3.12.0/guides/aladino/specification",title:"Aladino Specification",description:"Aladino is a simple language to specify steps in pull request workflows.",source:"@site/versioned_docs/version-3.12.0/guides/aladino/specification.mdx",sourceDirName:"guides/aladino",slug:"/guides/aladino/specification",permalink:"/guides/aladino/specification",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/aladino/specification.mdx",tags:[],version:"3.12.0",frontMatter:{title:"Aladino Specification",id:"specification",slug:"specification"},sidebar:"DocsSidebar",previous:{title:"Built-ins",permalink:"/guides/built-ins"},next:{title:"Aladino Syntax",permalink:"/guides/aladino/syntax"}},d={},u=[],m={toc:u};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Aladino is a simple language to specify steps in pull request workflows."),(0,a.kt)("p",null,"The expressions in the language allow you to easily perform read and write actions on pull requests."),(0,a.kt)(s.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);