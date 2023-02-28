"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1258],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(k,s(s({ref:t},l),{},{components:n})):a.createElement(k,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6333:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),s=["components"],o={title:"Introduction",slug:"/design"},c="Design",p={unversionedId:"concepts/design/index",id:"concepts/design/index",title:"Introduction",description:"-   Network Communication",source:"@site/source/docs/casper/concepts/design/index.md",sourceDirName:"concepts/design",slug:"/design",permalink:"/design",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/concepts/design/index.md",tags:[],version:"current",lastUpdatedAt:1677606111,formattedLastUpdatedAt:"2/28/2023",frontMatter:{title:"Introduction",slug:"/design"},sidebar:"concepts",previous:{title:"Serialization Standard",permalink:"/concepts/serialization-standard"},next:{title:"Network Communication",permalink:"/concepts/design/p2p"}},l={},u=[],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"design"},"Design"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/design/p2p"},"Network Communication"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/design/p2p#identity"},"Identity")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/design/p2p#inter-node-connections"},"Inter-node connections")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/design/p2p#network"},"Network")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/design/p2p#communications-gossiping"},"Gossiping")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/design/p2p#requesting-missing-data"},"Requesting missing data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/design/p2p#node-discovery"},"Node Discovery")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/design/casper-design#global-state-head"},"Global State"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/design/casper-design#global-state-trie"},"Merkle trie structure")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/design/casper-design#execution-semantics-head"},"Execution Semantics"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/design/casper-design#execution-semantics-gas"},"Measuring computational work")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/design/casper-design#execution-semantics-deploys"},"Deploys")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/design/casper-design#execution-semantics-runtime"},"The Casper Network runtime")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/design/casper-design#accounts-head"},"Accounts"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/design/casper-design#accounts-creating"},"Creating an account")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/design/casper-design#accounts-permissions"},"Permissions model")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/design/casper-design#accounts-context"},"The account context")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/design/casper-design##uref-head"},"Unforgeable Reference (URef)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/design/casper-design#uref-permissions"},"Permissions for URefs")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/design/casper-design#block-structure-data"},"Block Structure"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/design/casper-design#block-structure-data"},"Data fields")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/design/casper-design#tokens-head"},"Tokens"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/design/casper-design#token-generation-and-distribution"},"Token Generation and Distribution")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/design/casper-design#tokens-divisibility"},"Divisibility of Tokens")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/design/casper-design#tokens-purses-and-accounts"},"Purses and Accounts")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/serialization-standard"},"Serialization Standard"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#serialization-standard-block"},"Block")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#serialization-standard-deploy"},"Deploy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#serialization-standard-values"},"Values")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#serialization-standard-state-keys"},"Keys")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/concepts/serialization-standard#serialization-standard-permissions"},"Permissions"))))))}m.isMDXComponent=!0}}]);