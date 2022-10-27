"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[88355],{84694:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>i,contentTitle:()=>n,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var s=o(87462),t=(o(67294),o(3905));const r={title:"Label based on author groups",id:"label-based-on-author-groups",slug:"/use-cases/label-based-on-author-groups"},n=void 0,l={unversionedId:"use-cases/automated-labelling/label-based-on-author-groups",id:"version-3.5.0/use-cases/automated-labelling/label-based-on-author-groups",title:"Label based on author groups",description:"Here's an example of a reviewpad.yml configuration that label pull requests authored by a member of a group of developers.",source:"@site/versioned_docs/version-3.5.0/use-cases/automated-labelling/label-based-on-author-groups.md",sourceDirName:"use-cases/automated-labelling",slug:"/use-cases/label-based-on-author-groups",permalink:"/3.5.0/use-cases/label-based-on-author-groups",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/automated-labelling/label-based-on-author-groups.md",tags:[],version:"3.5.0",frontMatter:{title:"Label based on author groups",id:"label-based-on-author-groups",slug:"/use-cases/label-based-on-author-groups"},sidebar:"DocsSidebar",previous:{title:"Automated Labelling",permalink:"/3.5.0/use-cases/automated-labelling/"},next:{title:"Label based on file paths",permalink:"/3.5.0/use-cases/label-based-on-file-paths"}},i={},u=[],d={toc:u};function p(e){let{components:a,...o}=e;return(0,t.kt)("wrapper",(0,s.Z)({},d,o,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Here's an example of a ",(0,t.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration that label pull requests authored by a member of a group of developers."),(0,t.kt)("p",null,"Suppose that, as Spotify, you consider developers ",(0,t.kt)("em",{parentName:"p"},"new joiner")," until they create/merge their ",(0,t.kt)("a",{parentName:"p",href:"https://backstage.spotify.com/blog/measuring-backstage-success-at-spotify/"},"10th PR"),". Each time a ",(0,t.kt)("em",{parentName:"p"},"new joiner")," creates a PR, you want to label it in order to be able to perform a dedicated code review process. Using Reviewpad groups you can easily do such labeling."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  new-joiner:\n    description: Pull requests created by new joiners\n    # color is the hexadecimal color code for the label, without the leading #.\n    color: "294b69"\n\ngroups:\n  - name: newJoiners\n    description: Group of developers that have created less than 10 PRs\n    kind: developers\n    type: filter\n    param: developer\n    where: $pullRequestCountBy($developer, "all") < 10\n\nrules:\n  - name: authoredByNewJoiner\n    kind: patch\n    description: Patch authored by new joiner\n    spec: $isElementOf($author(), $group("newJoiners"))\n\nworkflows:\n  - name: critical\n    description: Modifications by new joiners require careful review\n    if:\n      - rule: authoredByNewJoiner\n    then:\n      - $addLabel("new-joiner")\n')))}p.isMDXComponent=!0}}]);