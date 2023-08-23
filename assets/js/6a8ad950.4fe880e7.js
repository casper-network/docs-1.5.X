"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2354],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8871:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={title:"Runtime",slug:"/runtime"},c="Runtime Economics",l={unversionedId:"concepts/economics/runtime",id:"concepts/economics/runtime",title:"Runtime",description:"The economics of the runtime layer should incentivize efficient allocation of computational resources, primarily CPU time, to users. Pending state pruning implementation, disk space use is treated as CPU time usage and charged, irreversibly, per byte written. Currently, gas is allocated according to a first-in, first-out model for deploys, with a fixed price of 1 mote (1/109 part of a CSPR token) per 1 unit of gas.",source:"@site/source/docs/casper/concepts/economics/runtime.md",sourceDirName:"concepts/economics",slug:"/runtime",permalink:"/runtime",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/concepts/economics/runtime.md",tags:[],version:"current",lastUpdatedAt:1692796641,formattedLastUpdatedAt:"Aug 23, 2023",frontMatter:{title:"Runtime",slug:"/runtime"},sidebar:"concepts",previous:{title:"Consensus",permalink:"/concepts/economics/consensus"},next:{title:"Gas Cost",permalink:"/concepts/economics/gas-concepts"}},u={},p=[{value:"Gas allocation",id:"gas-allocation",level:2},{value:"Consensus before execution &amp; basics of payment",id:"consensus-before-execution--basics-of-payment",level:3},{value:"Costs and limits",id:"costs-and-limits",level:3},{value:"Lanes",id:"lanes",level:3},{value:"Gas fees",id:"gas-fees",level:2},{value:"Fee allocation",id:"fee-allocation",level:3},{value:"Spot pricing",id:"spot-pricing",level:3},{value:"Futures pricing",id:"futures-pricing",level:3}],m={toc:p},d="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)(d,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"runtime-economics"},"Runtime Economics"),(0,i.kt)("p",null,"The economics of the runtime layer should incentivize efficient allocation of computational resources, primarily CPU time, to users. Pending state pruning implementation, disk space use is treated as CPU time usage and charged, irreversibly, per byte written. Currently, ",(0,i.kt)("a",{parentName:"p",href:"/concepts/economics/gas-concepts"},"gas")," is allocated according to a first-in, first-out model for deploys, with a fixed price of 1 mote (1/10",(0,i.kt)("sup",null,"9")," part of a CSPR token) per 1 unit of gas."),(0,i.kt)("h2",{id:"gas-allocation"},"Gas allocation"),(0,i.kt)("p",null,"Any finite resource on a publicly accessible computer network must be rate-limited, as, otherwise, overuse of this resource is an attack vector ","-","- a minimal requirement for platform security. However, rate-limiting, implemented on our platform as a simple block gas limit with several lanes, leaves the platform with the problem of fairly and efficiently allocating the gas. We are researching the optimal structure for spot and futures gas markets, and interested readers should consult the relevant ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casper-network/ceps"},"CEPs"),". In the meantime, this section outlines some basic features of the platform that would underpin any allocation scheme."),(0,i.kt)("h3",{id:"consensus-before-execution--basics-of-payment"},"Consensus before execution & basics of payment"),(0,i.kt)("p",null,"The Highway protocol in its Mainnet implementation reaches consensus on a block ",(0,i.kt)("em",{parentName:"p"},"before")," the block is executed, introducing a subtle difference from platforms like Ethereum. In addition, deploys sent to a Casper network can only be selected based on claimed, rather than used, gas. Consequently, to incentivize user-side optimization and prevent block space exhaustion by poorly optimized deploys, the platform provides no refunds for unused gas."),(0,i.kt)("p",null,"Additionally, a minimal amount of CSPR must be present in the user account's main purse to ensure that the payment computation is covered. The community may introduce additional balance checks in the future."),(0,i.kt)("h3",{id:"costs-and-limits"},"Costs and limits"),(0,i.kt)("p",null,"Gas cost is a measure of relative time used by different primitive operations of the execution engine, which is also assumed to be additive. By additivity, we mean that the time to execute a program is approximately proportional to the sum of gas expended by the opcodes and functions called within the program. Casper assigns gas costs to primitive execution engine opcodes and specific more complex ",(0,i.kt)("em",{parentName:"p"},"host-side")," functions that are callable from within the execution engine context. Gas costs for opcodes and host-side functions are specified in the ",(0,i.kt)("a",{parentName:"p",href:"/concepts/glossary/C#chainspec"},"chainspec")," and may vary according to arguments."),(0,i.kt)("p",null,"We expect to refine the current gas cost table to reflect time use more closely, with updates introduced in future upgrades. We also anticipate that, with the introduction of state pruning, storage costs will be calculated separately from computing time."),(0,i.kt)("h3",{id:"lanes"},"Lanes"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/b94c4f79ac4ca00e996c418dcc3a98607779a193/resources/production/chainspec.toml#L96-L97"},"block gas limit")," is split into two lanes, one for native transfers and one for general deploys. The number of transfers, which cost a fixed amount of gas, is governed directly by the ",(0,i.kt)("inlineCode",{parentName:"p"},"block_max_transfer_count")," chainspec parameter, set to 2500 when Mainnet launched."),(0,i.kt)("h2",{id:"gas-fees"},"Gas fees"),(0,i.kt)("p",null,"Currently, the price of gas is fixed at 1 mote per 1 unit of gas."),(0,i.kt)("h3",{id:"fee-allocation"},"Fee allocation"),(0,i.kt)("p",null,"All fees from a particular block accrue to its proposer, incentivizing non-empty block production and allowing major dApps to execute deploys for free, provided they operate a validator node and are comfortable with the latency introduced by validator scheduling."),(0,i.kt)("h3",{id:"spot-pricing"},"Spot pricing"),(0,i.kt)("p",null,"Please see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casper-network/ceps/pull/22"},"CEP #22")," for one potential design of a gas spot market."),(0,i.kt)("h3",{id:"futures-pricing"},"Futures pricing"),(0,i.kt)("p",null,"Please see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casper-network/ceps/pull/17"},"CEP #17")," for our draft proposal of a gas futures market."))}f.isMDXComponent=!0}}]);