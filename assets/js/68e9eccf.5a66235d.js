"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[3777],{52991:(e,t,a)=>{a.d(t,{Z:()=>k});var l=a(67294),s=a(86010),n=a(52802),i=a(39960),r=a(13919),o=a(95999);const c="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:a}=e;return l.createElement(i.Z,{href:t,className:(0,s.Z)("card padding--lg",c)},a)}function p(e){let{href:t,icon:a,title:n,description:i}=e;return l.createElement(m,{href:t},l.createElement("h2",{className:(0,s.Z)("text--truncate",u),title:n},a," ",n),i&&l.createElement("p",{className:(0,s.Z)("text--truncate",d),title:i},i))}function b(e){let{item:t}=e;const a=(0,n.Wl)(t);return a?l.createElement(p,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const a=(0,r.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,n.xz)(t.docId??void 0);return l.createElement(p,{href:t.href,icon:a,title:t.label,description:null==s?void 0:s.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return l.createElement(g,{item:t});case"category":return l.createElement(b,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const a=(0,n.jA)();return l.createElement(k,{items:a.items,className:t})}function k(e){const{items:t,className:a}=e;if(!t)return l.createElement(h,e);const i=(0,n.MN)(t);return l.createElement("section",{className:(0,s.Z)("row",a)},i.map(((e,t)=>l.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},l.createElement(f,{item:e})))))}},63401:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var l=a(87462),s=(a(67294),a(3905)),n=a(52991),i=a(52802);const r={title:"Automated Labelling",id:"automated-labelling",slug:"/use-cases/automated-labelling"},o=void 0,c={unversionedId:"use-cases/automated-labelling/automated-labelling",id:"use-cases/automated-labelling/automated-labelling",title:"Automated Labelling",description:"Pull requests labels are widely used by software developers to communicate required actions.",source:"@site/docs/use-cases/automated-labelling/automated-labelling.mdx",sourceDirName:"use-cases/automated-labelling",slug:"/use-cases/automated-labelling",permalink:"/next/use-cases/automated-labelling",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/automated-labelling/automated-labelling.mdx",tags:[],version:"current",frontMatter:{title:"Automated Labelling",id:"automated-labelling",slug:"/use-cases/automated-labelling"},sidebar:"DocsSidebar",previous:{title:"Auto-merge",permalink:"/next/use-cases/auto-merge"},next:{title:"Label based on author groups",permalink:"/next/use-cases/label-based-on-author-groups"}},u={},d=[],m={toc:d};function p(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,l.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Pull requests labels are widely used by software developers to communicate required actions."),(0,s.kt)("p",null,"Out of the box, Reviewpad supports the action of ",(0,s.kt)("a",{parentName:"p",href:"/guides/built-ins#addlabel"},"adding labels to pull requests"),"."),(0,s.kt)("p",null,"Together with the other ",(0,s.kt)("a",{parentName:"p",href:"/guides/built-ins"},"built-in capabilities"),", you can automate flexible pull request labelling workflows."),(0,s.kt)(n.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);