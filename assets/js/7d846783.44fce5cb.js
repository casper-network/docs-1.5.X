"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1002],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5262:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={},c="Best Practices for Casper Smart Contract Authors",l={unversionedId:"developers/writing-onchain-code/best-practices",id:"developers/writing-onchain-code/best-practices",title:"Best Practices for Casper Smart Contract Authors",description:"At its core, the Casper platform is software, and best practices for general software development will apply. However, there are specific variables and situations that should be considered when developing for a Casper network. For example, a smart contract installed on global state cannot access file systems or open a connection to external resources.",source:"@site/source/docs/casper/developers/writing-onchain-code/best-practices.md",sourceDirName:"developers/writing-onchain-code",slug:"/developers/writing-onchain-code/best-practices",permalink:"/developers/writing-onchain-code/best-practices",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/developers/writing-onchain-code/best-practices.md",tags:[],version:"current",lastUpdatedAt:1692796641,formattedLastUpdatedAt:"Aug 23, 2023",frontMatter:{},sidebar:"developers",previous:{title:"Testing Session Code",permalink:"/developers/writing-onchain-code/testing-session-code"},next:{title:"Overview",permalink:"/developers/json-rpc/"}},p={},d=[{value:"Data Efficiency",id:"data-efficiency",level:2},{value:"Costs",id:"costs",level:2},{value:"Tips to reduce WASM size",id:"tips-to-reduce-wasm-size",level:3},{value:"Inlining",id:"inlining",level:2},{value:"Testing",id:"testing",level:2}],u={toc:d},m="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"best-practices-for-casper-smart-contract-authors"},"Best Practices for Casper Smart Contract Authors"),(0,o.kt)("p",null,"At its core, the Casper platform is software, and best practices for general software development will apply. However, there are specific variables and situations that should be considered when developing for a Casper network. For example, a smart contract installed on global state cannot access file systems or open a connection to external resources."),(0,o.kt)("h2",{id:"data-efficiency"},"Data Efficiency"),(0,o.kt)("p",null,"When developing on Casper, a policy of efficient data usage will ensure the lowest possible cost for on-chain computation. To this end, minimizing the number of necessary ",(0,o.kt)("a",{parentName:"p",href:"/developers/cli/sending-deploys"},"Deploys")," will drastically decrease the overall cost."),(0,o.kt)("p",null,"When creating smart contracts, including an explicit initialization entry point allows the contract to self-initialize without a subsequent Deploy of session code. This entry point creates the internal structure of the contract and cannot be called after the initial deploy. Below is an example of a self-initalizing entry point that can be used within the ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," function."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Example Self-initialization Entry Point")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'\n// This entry point initializes the donation system, setting up the fundraising purse\n// and creating a dictionary to track the account hashes and the number of donations\n// made.\n#[no_mangle]\npub extern "C" fn init() {\n    let fundraising_purse = system::create_purse();\n    runtime::put_key(FUNDRAISING_PURSE, fundraising_purse.into());\n    // Create a dictionary to track the mapping of account hashes to number of donations made.\n    storage::new_dictionary(LEDGER).unwrap_or_revert();\n}\n\n'))),(0,o.kt)("p",null,"Bear in mind, the host node will not enforce this. The smart contract author must create the entry point and ensure it cannot be called after initial deployment."),(0,o.kt)("h2",{id:"costs"},"Costs"),(0,o.kt)("p",null,"Computations occurring on-chain come with associated ",(0,o.kt)("a",{parentName:"p",href:"/concepts/economics/gas-concepts"},"gas costs"),". Efficient coding can help to minimize gas costs, through the reduction of overall Wasm sent to global state. Beginning with 1.5.0, even invalid Wasm will incur gas costs when sent to global state. As such, proper testing prior to sending a Deploy is critical."),(0,o.kt)("p",null,"Further, there is a set cost of 2.5 CSPR to create a new purse. If possible, the ",(0,o.kt)("a",{parentName:"p",href:"/resources/tutorials/advanced/transfer-token-to-contract#scenario2"},"reuse of purses")," should be considered to reduce this cost. If reusing purses, proper access management must be maintained to prevent lapses in security. Ultimately, any choices made in regards to security and contract safeguards rely on the smart contract author."),(0,o.kt)("h3",{id:"tips-to-reduce-wasm-size"},"Tips to reduce WASM size"),(0,o.kt)("p",null,"Deploys have a maxim size specified in each network chainspec as ",(0,o.kt)("inlineCode",{parentName:"p"},"max_deploy_size"),". For example, networks running ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/6873c86cc3ab3aae1c8187a7528f94da605e2669/resources/production/chainspec.toml#L101"},"node version 1.5.1"),", have the following maximum deploy size in bytes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"max_deploy_size = 1_048_576\n")),(0,o.kt)("p",null,"Here are a few tips to reduce the size of Wasm included in a deploy:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Build the smart contract in release mode. You will find an example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep18/blob/2c702e23497d2c9493374466e7af0c002006cbda/Makefile#L10"},"here")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cargo build --release --target wasm32-unknown-unknown\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"wasm-strip"),"\xa0on the compiled code (see\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/WebAssembly/wabt"},"WABT"),"). You will find an example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep18/blob/2c702e23497d2c9493374466e7af0c002006cbda/Makefile#L12"},"here")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"wasm-strip target/wasm32-unknown-unknown/release/contract.wasm\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Don't enable the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"std"),"\xa0feature when linking to the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"casper-contract"),"\xa0or\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"casper-types"),"\xa0crates using the ",(0,o.kt)("inlineCode",{parentName:"p"},"#![no_std]")," attribute, which tells the program not to import the standard libraries. You will find an example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep18/blob/2c702e23497d2c9493374466e7af0c002006cbda/cep18/src/main.rs#L1"},"here")," and further details ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rust-embedded.org/book/intro/no-std.html"},"here")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#![no_std]\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Build the contract with ",(0,o.kt)("inlineCode",{parentName:"p"},"codegen-units")," set to 1 by adding ",(0,o.kt)("inlineCode",{parentName:"p"},"codegen-units = 1"),"\xa0to the Cargo.toml under\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"[profile.release])"),". You will find an example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep18/blob/2c702e23497d2c9493374466e7af0c002006cbda/Cargo.toml#L14"},"here"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Build the contract with link-time optimizations enabled by adding ",(0,o.kt)("inlineCode",{parentName:"p"},"lto = true"),"\xa0to the Cargo.toml under\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"[profile.release]"),". You will find an example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep18/blob/2c702e23497d2c9493374466e7af0c002006cbda/Cargo.toml#L15"},"here")))),(0,o.kt)("h2",{id:"inlining"},"Inlining"),(0,o.kt)("p",null,"As often as practicable, developers should inline functions by including the body of the function within their code rather than making ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"call_indirect")," to the function. In the context of coding for Casper blockchain purposes, this reduces the overhead of executed Wasm and prevents unexpected errors due to exceeding resource tolerances."),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("p",null,"Testing all Deploys prior to committing them to ",(0,o.kt)("a",{parentName:"p",href:"https://cspr.live/"},"Mainnet")," can assist authors in detecting bugs and inefficiencies prior to incurring gas fees. Casper provides several methods of testing, including unit testing, testing using NCTL and sending Deploys to ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.cspr.live/"},"Testnet"),"."),(0,o.kt)("p",null,"Information on these processes can be found at the following locations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/testing-session-code"},"Unit Testing Session Code"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/testing-contracts"},"Testing Smart Contracts"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/developers/dapps/nctl-test"},"Testing Smart Contracts with NCTL")))),(0,o.kt)("p",null,"Additionally, the following two tutorials outline sending an example contract using both NCTL and Testnet:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/counter/"},"A Counter On An NCTL Network"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/counter-testnet"},"A Counter On The Testnet")))))}h.isMDXComponent=!0}}]);