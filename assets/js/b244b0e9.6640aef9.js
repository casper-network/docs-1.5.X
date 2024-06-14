"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9041],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||r;return n?o.createElement(m,s(s({ref:t},p),{},{components:n})):o.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6372:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),s=["components"],i={title:"Overview",slug:"/economics"},c="Overview of Casper Economics",l={unversionedId:"concepts/economics/index",id:"concepts/economics/index",title:"Overview",description:"Casper's economic activity can be conceptualized as taking place on four distinct layers: consensus, runtime, ecosystem, and the macroeconomy. Each layer, consensus and up, provides a foundation for the activity taking place on the next layer. A trust-less platform requires that proper incentives be provided to participants operating each of these layers to ensure that they work together to unlock the platform's value.",source:"@site/source/docs/casper/concepts/economics/index.md",sourceDirName:"concepts/economics",slug:"/economics",permalink:"/economics",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/concepts/economics/index.md",tags:[],version:"current",lastUpdatedAt:1718371074,formattedLastUpdatedAt:"Jun 14, 2024",frontMatter:{title:"Overview",slug:"/economics"},sidebar:"concepts",previous:{title:"Reading and Writing Data",permalink:"/concepts/design/reading-and-writing-to-the-blockchain"},next:{title:"Consensus",permalink:"/concepts/economics/consensus"}},p={},u=[{value:"Consensus",id:"consensus",level:2},{value:"Agents (consensus layer)",id:"agents-consensus-layer",level:3},{value:"Incentives (consensus layer)",id:"incentives-consensus-layer",level:3},{value:"Runtime",id:"runtime",level:2},{value:"Agents (consensus layer)",id:"agents-consensus-layer-1",level:3},{value:"Incentives (consensus layer)",id:"incentives-consensus-layer-1",level:3},{value:"Ecosystem",id:"ecosystem",level:2},{value:"Macroeconomy",id:"macroeconomy",level:2}],d={toc:u},h="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)(h,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview-of-casper-economics"},"Overview of Casper Economics"),(0,r.kt)("p",null,"Casper's economic activity can be conceptualized as taking place on four distinct layers: consensus, runtime, ecosystem, and the macroeconomy. Each layer, consensus and up, provides a foundation for the activity taking place on the next layer. A trust-less platform requires that proper incentives be provided to participants operating each of these layers to ensure that they work together to unlock the platform's value."),(0,r.kt)("p",null,"We cannot yet provide formal game-theoretic results for our incentive mechanisms, but interested readers can follow our progress with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CasperLabs/Casper-economics-paper"},"Economics of the Casper Blockchain")," paper, which will be periodically updated to summarize ongoing research."),(0,r.kt)("p",null,"This section of our online documentation is intended only to familiarize the user with our core economics features rather than describe their precise implementation and user interface. Some of the features may not be currently active."),(0,r.kt)("h2",{id:"consensus"},"Consensus"),(0,r.kt)("p",null,"The consensus layer of our platform runs on the Highway flavor of CBC-Casper. The distinguishing characteristics of this protocol are its safety and liveness guarantees. Specifically, under the assumptions made in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-network/highway"},"Highway protocol paper"),", blocks in the canonical history cannot be reverted, and new blocks continue to be added to this history indefinitely. The assumptions, however, require that a large portion of validators remain online and honest; this assumed behavior must be incentivized for the platform to remain secure and live."),(0,r.kt)("p",null,'When discussing consensus, we default to considering it "one era at a time," unless expressly stated otherwise, in keeping with the Highway paper. Recall that each era is, effectively, a separate instance of the protocol.'),(0,r.kt)("h3",{id:"agents-consensus-layer"},"Agents (consensus layer)"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Validators"),' are responsible for maintaining platform security by building an ever-growing chain of finalized blocks, backing this chain\'s security with their stakes. Their importance (often referred to as "weight") both to protocol operation and security is, in fact, equal to their stake, which includes both their own and delegated tokens.'),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Delegators"),' are users who participate in the platform\'s security by delegating their tokens to validators, which adds to their weight and collecting a part of the rewards proportional to their delegations, net of a cut ("delegation rate") that is collected by the validator.'),(0,r.kt)("h3",{id:"incentives-consensus-layer"},"Incentives (consensus layer)"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"auction"),' determines the composition of the validator set for each era of the protocol. It is a "first-price" (winning bids become stakes) auction with a fixed number of spots chosen to balance security with performance (generally, the platform will run slower with more validators). Because rewards are proportional to the stake, we expect this competitive mechanism to provide a powerful impetus for staking as many tokens as possible.'),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Rewards")," (per era) are issued to validators who perform, at their nominal pace, in such a way as to make timely progress on block finalization. These rewards are shared with delegators proportionally to their contributions, net of a cut taken by the validator."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Evictions")," deactivate validators who fail to participate in an era, disabling their bid and suspending their participation until they signal readiness to resume participation by invoking a particular entry point in the auction contract."),(0,r.kt)("h2",{id:"runtime"},"Runtime"),(0,r.kt)("p",null,"The runtime layer encompasses the deployment and execution of smart contracts, session code, and other activity that performs computation on the global state. This suggests potential markets for finite platform resources, such as markets for computing time and storage. Such markets could ensure that resources are allocated to their highest-value uses. Currently, however, we limit ourselves to ",(0,r.kt)("a",{parentName:"p",href:"/concepts/design/casper-design#execution-semantics-gas"},"metering computing time"),", measured as gas. Gas can be conceptualized as relative time use of different Wasm operations and host-side functions. Use of storage is also presently assigned a gas cost. We do not currently have a pricing mechanism for metered gas, although an outstanding Casper Enhancement Proposal (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-network/ceps/pull/22"},"CEP #22"),") suggests the implementation of a first-price gas auction similar to Ethereum's. The initial Mainnet deploy selection mechanism is based on FIFO."),(0,r.kt)("p",null,"We expect to continue work on runtime resource markets, particularly gas futures (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-network/ceps/pull/17"},"CEP #17"),")."),(0,r.kt)("h3",{id:"agents-consensus-layer-1"},"Agents (consensus layer)"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Validators")," again play a vital role in this layer since protocol operation includes construction and validation of new blocks, consisting of deploys that change the global state, which the validators also maintain."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Users")," execute session and contract code using the platform's computational resources"),(0,r.kt)("h3",{id:"incentives-consensus-layer-1"},"Incentives (consensus layer)"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Transaction fees"),", or charges for gas use, ensure that the users compensate validators for performing their computations. Transaction fees are awarded to the block creator. Because we expect to launch with FIFO ordering of deploys, it can be assumed that one unit of gas will be priced at one mote until future changes to deploy orders are implemented."),(0,r.kt)("h2",{id:"ecosystem"},"Ecosystem"),(0,r.kt)("p",null,"The ecosystem layer encompasses dApp design and operation. Casper Labs maintains multiple partnerships with prospective dApp developers, and we anticipate devoting significant resources to research the economics of prospective dApps."),(0,r.kt)("h2",{id:"macroeconomy"},"Macroeconomy"),(0,r.kt)("p",null,'Casper\'s macroeconomics refers to the activity in the cryptocurrency markets, where CSPR can be treated as one crypto-asset among many rather than a computational platform. Our token economics are different from those of "digital gold" tokens like Bitcoin, designed to be scarce. Our tokens are minted from a fixed starting basis, which is accounted for by tokens distributed to genesis validators, employees, community members and held for future distributions. The total supply of tokens grows at a fixed annual percentage rate from this basis.'),(0,r.kt)("p",null,"The inflationary nature of our macroeconomics has two significant advantages over enforced scarcity. Inflation incentivizes token holders to stake or delegate their tokens, a behavior we explicitly support with our delegation feature. Additionally, because Casper is a general-purpose computing platform, it is essential to supply tokens to support actual economic activity on the platform and discourage hoarding tokens in expectation of speculative gain."))}m.isMDXComponent=!0}}]);