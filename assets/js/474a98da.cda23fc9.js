"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1918],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,h=p["".concat(i,".").concat(f)]||p[f]||d[f]||s;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8068:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var r=n(7462),o=n(3366),s=(n(7294),n(3905)),a=n(4996),c=["components"],i={title:"Fast Sync"},l="Introducing Fast Sync",u={unversionedId:"operators/setup/fast-sync",id:"operators/setup/fast-sync",title:"Fast Sync",description:"A Casper Network requires new nodes to download and execute every block to join the network. From genesis (start of the Mainnet), the node executes each deploy in every block. This process continues until the node has arrived at the current state of the blockchain. Syncing a node this way can take a very long time.",source:"@site/source/docs/casper/operators/setup/fast-sync.md",sourceDirName:"operators/setup",slug:"/operators/setup/fast-sync",permalink:"/operators/setup/fast-sync",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/operators/setup/fast-sync.md",tags:[],version:"current",lastUpdatedAt:1709742245,formattedLastUpdatedAt:"Mar 6, 2024",frontMatter:{title:"Fast Sync"},sidebar:"operators",previous:{title:"Installation",permalink:"/operators/setup/install-node"},next:{title:"Open Files Limit",permalink:"/operators/setup/open-files"}},p={},d=[{value:"How Fast Sync Works",id:"how-fast-sync-works",level:2}],f={toc:d},h="wrapper";function y(e){var t=e.components,n=(0,o.Z)(e,c);return(0,s.kt)(h,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"introducing-fast-sync"},"Introducing Fast Sync"),(0,s.kt)("p",null,"A Casper Network requires new nodes to download and execute every block to join the network. From genesis (start of the Mainnet), the node executes each deploy in every block. This process continues until the node has arrived at the current state of the blockchain. Syncing a node this way can take a very long time."),(0,s.kt)("p",null,"We have introduced a fast syncing process (fast sync) to provide a faster alternative to joining a Casper network. Fast sync does not start syncing at the genesis block; instead, the operator verifies a recent block and provides a ",(0,s.kt)("a",{parentName:"p",href:"/operators/setup/basic-node-configuration#trusted-hash-for-synchronizing"},"trusted hash")," to the node software. The global state, account balances, and all other on-chain information is the storage layer of the blockchain and is massive in size, so fast sync downloads the global state of only the most recent block. The following section briefly describes the fast sync process."),(0,s.kt)("h2",{id:"how-fast-sync-works"},"How Fast Sync Works"),(0,s.kt)("img",{src:(0,a.Z)("/image/fast-sync-process.png"),class:"Fast-sync process",width:"500"}),(0,s.kt)("p",null,"For fast sync, operators must provide the trusted hash of a block in the ",(0,s.kt)("inlineCode",{parentName:"p"},"config.toml")," file. An example can be found ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/f7d8228de3cb56a3fe705f5a787d3dbf03ff7998/resources/production/config-example.toml#L7"},"here"),"."),(0,s.kt)("p",null,"Fast sync uses this trusted block as part of the cryptographic verification for the later blocks. The node downloads the trusted block first, then newer blocks up to and including the most recent block from the current era. For example, if the trusted hash is 5 hours old, it will first download that block, then newer blocks, until it arrives at one that is only a few minutes old. It then downloads the newer block's global state. Finally, it executes all the blocks the network created while the download was in progress until it is entirely in sync."))}y.isMDXComponent=!0}}]);