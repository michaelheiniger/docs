"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[9268],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(i),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return i?n.createElement(f,l(l({ref:t},p),{},{components:i})):n.createElement(f,l({ref:t},p))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=i[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},3157:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=i(7462),a=(i(7294),i(3905));const r={},l=void 0,o={type:"mdx",permalink:"/maester/changelog/reviewpad-v220-lisbon-edition",source:"@site/src/pages/changelog/reviewpad-v220-lisbon-edition.md",description:"New features",frontMatter:{}},s=[{value:"New features \ud83d\udd25",id:"new-features-",level:2},{value:"YAML Specification",id:"yaml-specification",level:3},{value:"Aladino Built-ins",id:"aladino-built-ins",level:3},{value:"Action",id:"action",level:3},{value:"Improvements \ud83d\ude80",id:"improvements-",level:2},{value:"YAML Processing",id:"yaml-processing",level:3},{value:"Aladino Built-ins",id:"aladino-built-ins-1",level:3},{value:"Action",id:"action-1",level:3},{value:"New Contributors \ud83c\udf7b",id:"new-contributors-",level:2}],c={toc:s};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"new-features-"},"New features \ud83d\udd25"),(0,a.kt)("h3",{id:"yaml-specification"},"YAML Specification"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ignore-errors")," property - Specify if the GitHub action should ignore execution errors. The default value is ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," which means the action will fail if an error occurs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"labels")," now have a ",(0,a.kt)("inlineCode",{parentName:"li"},"name")," property - Allow readable references to labels. For instance, a label can how have spaces or emojis.")),(0,a.kt)("h3",{id:"aladino-built-ins"},"Aladino Built-ins"),(0,a.kt)("h3",{id:"action"},"Action"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../../docs/reviewpad-file-specification/aladino-specification/aladino-built-ins#assignteamreviewer"},(0,a.kt)("inlineCode",{parentName:"a"},"assignTeamReviewer"))," - Assign a review to the provided team(s)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../../docs/reviewpad-file-specification/aladino-specification/aladino-built-ins#startswith"},(0,a.kt)("inlineCode",{parentName:"a"},"startsWith"))," - Check whether a text starts with a certain sentence.")),(0,a.kt)("h2",{id:"improvements-"},"Improvements \ud83d\ude80"),(0,a.kt)("h3",{id:"yaml-processing"},"YAML Processing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fix ",(0,a.kt)("inlineCode",{parentName:"li"},"labels")," section processing by creating the label in the repository whenever the defined label does not exist.")),(0,a.kt)("h3",{id:"aladino-built-ins-1"},"Aladino Built-ins"),(0,a.kt)("h3",{id:"action-1"},"Action"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../../docs/reviewpad-file-specification/aladino-specification/aladino-built-ins#assignrandomreviewer"},(0,a.kt)("inlineCode",{parentName:"a"},"assignRandomReviewer"))," - Fetches assignees instead of collaborators. ",(0,a.kt)("em",{parentName:"li"},"This is because GitHub API does not provide the correct list of reposittory collaborators when using GitHub Action token.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../../docs/reviewpad-file-specification/aladino-specification/aladino-built-ins#addlabel"},(0,a.kt)("inlineCode",{parentName:"a"},"addLabel"))," - Automatically creates the label if it does not exist and uses the labels section to retrieve name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../../docs/reviewpad-file-specification/aladino-specification/aladino-built-ins#removelabel"},(0,a.kt)("inlineCode",{parentName:"a"},"removeLabel"))," - Uses the labels section to retrieve name.")),(0,a.kt)("h2",{id:"new-contributors-"},"New Contributors \ud83c\udf7b"),(0,a.kt)("p",null,"Many thanks to our new contributors \ud83d\udc4f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/dukex"},"@dukex")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/GildedHonour"},"@GildedHonour")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/thedevsaddam"},"@thedevsaddam"))))}p.isMDXComponent=!0}}]);