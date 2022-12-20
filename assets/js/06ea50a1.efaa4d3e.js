"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9117],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),u=l(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(g,o(o({ref:e},d),{},{components:n})):r.createElement(g,o({ref:e},d))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6197:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],s={title:"Introduction",slug:"/writing-contracts"},c="Writing On-Chain Code",l={unversionedId:"dapp-dev-guide/writing-contracts/index",id:"dapp-dev-guide/writing-contracts/index",title:"Introduction",description:"This section shows you how to write session code and smart contracts in Rust and WebAssembly (Wasm) for a Casper network. When referring to session code, these documents outline logic that executes in the context of an account. In contrast, smart contracts consist of logic installed on-chain, for use by multiple parties. There is a large overlap between the processes of writing session code versus contract code, with some semantic differences outlined in their respective documentation. The Video Series for Writing On-Chain Code accompanies the topics below.",source:"@site/source/docs/casper/dapp-dev-guide/writing-contracts/index.md",sourceDirName:"dapp-dev-guide/writing-contracts",slug:"/writing-contracts",permalink:"/writing-contracts",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/writing-contracts/index.md",tags:[],version:"current",frontMatter:{title:"Introduction",slug:"/writing-contracts"},sidebar:"dapp-dev-guide",previous:{title:"Using the JavaScript SDK",permalink:"/dapp-dev-guide/building-dapps/casper-signer"},next:{title:"Getting Started with Rust",permalink:"/dapp-dev-guide/writing-contracts/getting-started"}},d={},p=[],u={toc:p};function m(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"writing-on-chain-code"},"Writing On-Chain Code"),(0,i.kt)("p",null,"This section shows you how to write session code and smart contracts in Rust and WebAssembly (Wasm) for a Casper network. When referring to session code, these documents outline logic that executes in the context of an account. In contrast, smart contracts consist of logic installed on-chain, for use by multiple parties. There is a large overlap between the processes of writing session code versus contract code, with some semantic differences outlined in their respective documentation. The ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/playlist?list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj"},"Video Series for Writing On-Chain Code")," accompanies the topics below."),(0,i.kt)("p",{align:"center"},(0,i.kt)("iframe",{width:"400",height:"225",src:"https://www.youtube.com/embed?v=q5nW4MUT8q4&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=1",position:"middle",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Title"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/dapp-dev-guide/writing-contracts/getting-started"},"Getting Started with Rust")),(0,i.kt)("td",{parentName:"tr",align:null},"An introduction to using Rust with the Casper Platform")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/dapp-dev-guide/writing-contracts/best-practices"},"Best Practices for Casper Smart Contract Authors")),(0,i.kt)("td",{parentName:"tr",align:null},"An outline of best practices when developing smart contracts on a Casper Network")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/dapp-dev-guide/writing-contracts/rust-contracts"},"Writing a Basic Smart Contract in Rust")),(0,i.kt)("td",{parentName:"tr",align:null},"An example of a smart contract built in Rust")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/dapp-dev-guide/writing-contracts/testing-contracts"},"Unit Testing Smart Contracts")),(0,i.kt)("td",{parentName:"tr",align:null},"Steps to test contract code using the unit testing framework")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/dapp-dev-guide/writing-contracts/session-code"},"Writing Session Code")),(0,i.kt)("td",{parentName:"tr",align:null},"An introduction to writing session code")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/dapp-dev-guide/writing-contracts/testing-session-code"},"Unit Testing Session Code")),(0,i.kt)("td",{parentName:"tr",align:null},"Steps to test session code using the unit testing framework")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/dapp-dev-guide/writing-contracts/installing-contracts"},"Installing Smart Contracts and Querying Global State")),(0,i.kt)("td",{parentName:"tr",align:null},"A guide on installing smart contracts and querying global state")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/dapp-dev-guide/writing-contracts/calling-contracts"},"Calling Smart Contracts with the Rust Client")),(0,i.kt)("td",{parentName:"tr",align:null},"Steps to call a smart contract with the Rust command-line client")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/dapp-dev-guide/writing-contracts/upgrading-contracts"},"Upgrading and Maintaining Smart Contracts")),(0,i.kt)("td",{parentName:"tr",align:null},"An introduction to versioning smart contracts")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/dapp-dev-guide/writing-contracts/dictionaries"},"Reading and Writing to Dictionaries"),"]"),(0,i.kt)("td",{parentName:"tr",align:null},"Information on Dictionaries and how to read and write to them on the Casper Platform.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/dapp-dev-guide/writing-contracts/execution-error-codes"},"Execution Error Codes")),(0,i.kt)("td",{parentName:"tr",align:null},"Possible error codes when writing smart contracts.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/dapp-dev-guide/writing-contracts/assembly-script"},"Getting Started with AssemblyScript")),(0,i.kt)("td",{parentName:"tr",align:null},"An introduction to using AssemblyScript with the Casper Platform")))),(0,i.kt)("p",null,"Additionally, the following tutorials outline some aspects of writing smart contracts on the Casper Network."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Title"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/dapp-dev-guide/tutorials/getting-started-tutorial"},"Getting Started Video")),(0,i.kt)("td",{parentName:"tr",align:null},"Step-by-step video tutorial for setting up the Casper development environment")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casper-ecosystem/cep-78-enhanced-nft/blob/dev/README.md"},"NFTs on Casper with the CEP-78 NFT Standard")),(0,i.kt)("td",{parentName:"tr",align:null},"Implementing the Casper CEP-78 NFT standard")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/counter"},"A Counter on an NCTL Network")),(0,i.kt)("td",{parentName:"tr",align:null},"An example contract that maintains a counter variable on a local Casper Network with NCTL")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/counter-testnet"},"A Counter on the Testnet")),(0,i.kt)("td",{parentName:"tr",align:null},"An example contract that maintains a counter variable on the Casper Testnet")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casper-ecosystem/erc20/blob/master/docs/TUTORIAL.md"},"Fungible Tokens on Casper")),(0,i.kt)("td",{parentName:"tr",align:null},"Implement the Casper Fungible Token standard")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/dapp-dev-guide/tutorials/return-values-tutorial"},"Interacting with Runtime Return Values")),(0,i.kt)("td",{parentName:"tr",align:null},"Learning how to return a value using contract code")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/dapp-dev-guide/tutorials/transfer-token-to-contract"},"Safely Transfer Tokens to a Contract")),(0,i.kt)("td",{parentName:"tr",align:null},"How to handle tokens via a contract")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/dapp-dev-guide/tutorials/upgrade-contract"},"Smart Contract Upgrades")),(0,i.kt)("td",{parentName:"tr",align:null},"Learn how to upgrade smart contracts")))))}m.isMDXComponent=!0}}]);