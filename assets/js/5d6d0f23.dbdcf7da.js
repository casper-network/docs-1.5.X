"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6558],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},l=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),l=p(n),g=a,f=l["".concat(s,".").concat(g)]||l[g]||d[g]||i;return n?r.createElement(f,o(o({ref:e},u),{},{components:n})):r.createElement(f,o({ref:e},u))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=l;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},3564:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=n(4996),c=["components"],s={},p="Upgrading and Maintaining Smart Contracts",u={unversionedId:"dapp-dev-guide/writing-contracts/upgrading-contracts",id:"dapp-dev-guide/writing-contracts/upgrading-contracts",title:"Upgrading and Maintaining Smart Contracts",description:"Our smart contract packaging tools enable you to:",source:"@site/source/docs/casper/dapp-dev-guide/writing-contracts/upgrading-contracts.md",sourceDirName:"dapp-dev-guide/writing-contracts",slug:"/dapp-dev-guide/writing-contracts/upgrading-contracts",permalink:"/dapp-dev-guide/writing-contracts/upgrading-contracts",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/writing-contracts/upgrading-contracts.md",tags:[],version:"current",lastUpdatedAt:1675351962,formattedLastUpdatedAt:"2/2/2023",frontMatter:{},sidebar:"dapp-dev-guide",previous:{title:"Calling Smart Contracts with the Rust Client",permalink:"/dapp-dev-guide/writing-contracts/calling-contracts"},next:{title:"Reading and Writing to Dictionaries",permalink:"/dapp-dev-guide/writing-contracts/dictionaries"}},d={},l=[{value:"Videos and Tutorials",id:"videos-and-tutorials",level:2},{value:"Maintaining a Contract",id:"maintaining-a-contract",level:2}],g={toc:l};function f(t){var e=t.components,n=(0,a.Z)(t,c);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"upgrading-and-maintaining-smart-contracts"},"Upgrading and Maintaining Smart Contracts"),(0,i.kt)("p",null,"Our smart contract packaging tools enable you to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Upgrade your contracts and specify how the state of the contract is managed"),(0,i.kt)("li",{parentName:"ul"},"Specify whether a contract is upgradable or immutable"),(0,i.kt)("li",{parentName:"ul"},"Version your contracts and deprecate old versions"),(0,i.kt)("li",{parentName:"ul"},"Set permissions around who can perform contract upgrades")),(0,i.kt)("p",null,"When you upgrade a contract, you add a new contract version in a contract package. The versioning process is additive rather than an in-place replacement of an existing contract. The original version of the contract is still there, and you can enable certain versions for specific clients. You can also disable a contract version if needed."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,o.Z)("/image/package-representation.png"),alt:"package-representation",width:"400"})),(0,i.kt)("p",null,"The contract package is like a container for different contract versions, with functionality that can differ slightly or significantly among versions. The contract package is created when you install the contract on the blockchain."),(0,i.kt)("h2",{id:"videos-and-tutorials"},"Videos and Tutorials"),(0,i.kt)("p",null,"To learn more about versioning contracts, consult the following video, which builds upon the previous topics and videos in the ",(0,i.kt)("a",{parentName:"p",href:"/writing-contracts"},"Writing On-Chain Code")," documentation."),(0,i.kt)("p",{align:"center"},(0,i.kt)("iframe",{width:"400",height:"225",src:"https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=10",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,i.kt)("p",null,"Or, for a different perspective, consult the ",(0,i.kt)("a",{parentName:"p",href:"/dapp-dev-guide/tutorials/upgrade-contract"},"Smart Contract Upgrade Tutorial"),"."),(0,i.kt)("h2",{id:"maintaining-a-contract"},"Maintaining a Contract"),(0,i.kt)("p",null,"The contract maintenance process is generally covered through the contract upgrade process."),(0,i.kt)("p",null,"Only major version changes in the Casper node software would require specific contract maintenance since a node version has a one-to-one mapping with the contract version. Otherwise, minor contract version changes can be addressed through the contract upgrade process. At the moment, we are not anticipating major contract changes in the Casper Network. Therefore, the contract upgrade process can cater to any minor contract maintenance."),(0,i.kt)("p",null,"On instances like new node version releases, type upgrades, and bug fixes, we advise you to adhere to the same contract upgrade process."))}f.isMDXComponent=!0}}]);