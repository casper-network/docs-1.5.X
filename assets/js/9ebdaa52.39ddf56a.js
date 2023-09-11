"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1710],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,f=d["".concat(p,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3198:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={title:"What is a dApp?"},p="What is a dApp?",c={unversionedId:"developers/dapps/dapp",id:"developers/dapps/dapp",title:"What is a dApp?",description:"A decentralized application (dApp) is an application with some data on a blockchain or similar peer-to-peer network.",source:"@site/source/docs/casper/developers/dapps/dapp.md",sourceDirName:"developers/dapps",slug:"/developers/dapps/dapp",permalink:"/developers/dapps/dapp",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/developers/dapps/dapp.md",tags:[],version:"current",lastUpdatedAt:1694445905,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{title:"What is a dApp?"},sidebar:"developers",previous:{title:"Overview of Casper dApps",permalink:"/developers/dapps/"},next:{title:"Prerequisites",permalink:"/developers/dapps/prerequisites"}},l={},d=[{value:"How are Decentralized Applications Different?",id:"how-are-decentralized-applications-different",level:2},{value:"Interacting with a Decentralized Network",id:"interacting-with-a-decentralized-network",level:2}],u={toc:d},h="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-a-dapp"},"What is a dApp?"),(0,r.kt)("p",null,"A decentralized application (dApp) is an application with some data on a blockchain or similar peer-to-peer network."),(0,r.kt)("p",null,"The degree that a dApp interacts with the blockchain can vary greatly depending on the needs of the application. Some dApps may use the blockchain simply to store data, with most of the logic taking place off-chain. Others may depend on logic stored on the blockchain, with only the bare minimum user interface stored outside of the blockchain itself."),(0,r.kt)("h2",{id:"how-are-decentralized-applications-different"},"How are Decentralized Applications Different?"),(0,r.kt)("p",null,"A decentralized system consists of a group of interchangeable machines that can perform as a full system or ",(0,r.kt)("inlineCode",{parentName:"p"},"distributed database"),". Additional machines strengthen the overall system by adding redundancy and computational power."),(0,r.kt)("p",null,"Any dApp will need access to a decentralized network, in one form or another. In a Casper network, this means connecting to a ",(0,r.kt)("a",{parentName:"p",href:"https://cspr.live/tools/peers"},"node"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"decentralized")," aspect creates a situation where each node is fundamentally interchangeable for this purpose. If the connected node fails, the dApp can switch to a different node and continue operating without losing data or functionality."),(0,r.kt)("p",null,"Routine operations in a decentralized network may result in nodes coming on or offline. This ",(0,r.kt)("em",{parentName:"p"},"node churn")," can result in downtime for a decentralized application if it relies on a single node. It is necessary to connect to multiple nodes simultaneously to ensure high uptime, especially if you are not operating your own node."),(0,r.kt)("h2",{id:"interacting-with-a-decentralized-network"},"Interacting with a Decentralized Network"),(0,r.kt)("p",null,"For a dApp to integrate with a Casper network, it must be able to send ",(0,r.kt)("a",{parentName:"p",href:"/concepts/glossary/D#deploy"},"Deploys")," via the JSON-RPC. Business logic specific to the dApp can then be executed on chain via the Deploy. ",(0,r.kt)("a",{parentName:"p",href:"/developers/cli/sending-deploys"},"Sending a Deploy")," to a node will result in that node ",(0,r.kt)("a",{parentName:"p",href:"/concepts/design/p2p#communications-gossiping"},"gossiping")," that Deploy to other nodes, assuming that the Deploy is valid and accepted. The Deploy will then be enqueued for execution."),(0,r.kt)("p",null,"A Deploy contains ",(0,r.kt)("a",{parentName:"p",href:"/concepts/glossary/S#session-code"},"session code")," in the form of ",(0,r.kt)("a",{parentName:"p",href:"/concepts/glossary/W#webassembly"},"Wasm")," to be executed in the context of the sending account. Therefore, developers may use any programming language that can compile to Wasm when building a dApp for a Casper network. This session code may consist of Wasm to be executed once, or Wasm which will install contract code to be stored in global state. If the dApp requires periodic execution of the same Wasm, it is more efficient from both a gas and execution perspective to install the Wasm as a contract to be called later."),(0,r.kt)("p",null,"Sending a Deploy is the only means by which a dApp can change global state. As gas costs operate on a per-byte basis, smart contracts will incur less gas costs over time when compared against executing the same session code repeatedly. A dApp may send a Deploy simultaneously to each node it is connected to, but can only do so once per node, per Deploy."),(0,r.kt)("p",null,"All associated changes to global state occur after successful execution of the Deploy. In the case of a failed execution, the stack is unwound and any changes to global state as part of executing the Deploy are reverted. However, as there is a penalty payment that must be incurred, there is a change in global state through reducing the balance of the sending account. To send a Deploy, an account must hold a minimum balance greater than the network's penalty payment. This penalty payment can vary from network to network. On the public Casper Mainnet, the penalty payment is set to 2.5 CSPR."),(0,r.kt)("p",null,"Unlike other blockchain networks, a Casper network performs execution after consensus. This means observing the execution of the Deploy is sufficient proof of finality for most cases. For a stronger finality requirement, you can observe the finality signatures for the block that includes the given Deploy."),(0,r.kt)("p",null,"There is an inherent timing consideration when sending a Deploy, from the point where it is sent to when it is executed. The ",(0,r.kt)("a",{parentName:"p",href:"/concepts/design/casper-design#execution-semantics-phases"},"Deploy Lifecycle")," results in a delay longer than would be expected from a centralized application. The Deploy must be sent, accepted, gossiped, included in a finalized block and executed. This process varies from network to network. This delay should be taken into consideration when designing dApps for use with a Casper network, as the number of connected peers and the number of Deploys currently being sent may cause it to increase."))}f.isMDXComponent=!0}}]);