"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6986],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5881:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],i={title:"Listing CSPR",slug:"/resources/tutorials/advanced/list-cspr"},l="Listing CSPR on an Exchange",p={unversionedId:"resources/advanced/list-cspr",id:"resources/advanced/list-cspr",title:"Listing CSPR",description:"This topic describes how to list the Casper token (CSPR) on a cryptocurrency exchange.",source:"@site/source/docs/casper/resources/advanced/list-cspr.md",sourceDirName:"resources/advanced",slug:"/resources/tutorials/advanced/list-cspr",permalink:"/resources/tutorials/advanced/list-cspr",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/resources/advanced/list-cspr.md",tags:[],version:"current",lastUpdatedAt:1692796641,formattedLastUpdatedAt:"Aug 23, 2023",frontMatter:{title:"Listing CSPR",slug:"/resources/tutorials/advanced/list-cspr"}},c={},d=[{value:"Setting up a Node",id:"setting-up-a-node",level:2},{value:"Casper Account",id:"casper-account",level:2},{value:"Understanding Basic Transactions",id:"understanding-basic-transactions",level:2},{value:"Native transfer",id:"native-transfer",level:3},{value:"Bulk or batched Wasm transfer",id:"bulk-or-batched-wasm-transfer",level:3},{value:"Integrating CSPR",id:"integrating-cspr",level:2},{value:"Testing the Integration",id:"testing-the-integration",level:2},{value:"The Casper Protocol",id:"the-casper-protocol",level:2},{value:"Staking Integration for Exchanges",id:"staking-integration-for-exchanges",level:2},{value:"Deploy Structures and Parameters",id:"deploy-structures-and-parameters",level:3},{value:"1. Creating a deploy object",id:"1-creating-a-deploy-object",level:4},{value:"2a. Sign the deploy (Casper Signer)",id:"2a-sign-the-deploy-casper-signer",level:4},{value:"2b. Sign the deploy (Ledger)",id:"2b-sign-the-deploy-ledger",level:4},{value:"Costs and Minimums",id:"costs-and-minimums",level:3},{value:"The Delegation Cap",id:"the-delegation-cap",level:3}],u={toc:d},m="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"listing-cspr-on-an-exchange"},"Listing CSPR on an Exchange"),(0,o.kt)("p",null,"This topic describes how to list the Casper token (CSPR) on a cryptocurrency ",(0,o.kt)("a",{parentName:"p",href:"https://tokenmarketcaps.com/coins/casper/market"},"exchange"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The Casper Signer has been deprecated and replaced with the ",(0,o.kt)("a",{parentName:"p",href:"https://www.casperwallet.io"},"Casper Wallet"),". We are in the process of updating this page. Meanwhile, visit the guide on ",(0,o.kt)("a",{parentName:"p",href:"https://www.casperwallet.io/develop"},"Building with the Casper Wallet"),".")),(0,o.kt)("h2",{id:"setting-up-a-node"},"Setting up a Node"),(0,o.kt)("p",null,"While it is not necessary for an exchange to operate their own node on the Casper Mainnet, we recommend that they do so if they expect to handle moderate to high volumes of transaction activity. A node operated by an exchange does not have to be a validating node, it can be read-only. For setup instructions, see ",(0,o.kt)("a",{parentName:"p",href:"/operators/setup/basic-node-configuration"},"Basic Node Setup"),"."),(0,o.kt)("p",null,"This setup enables you to have a self-administered gateway to the Casper Mainnet to get data and submit transactions."),(0,o.kt)("h2",{id:"casper-account"},"Casper Account"),(0,o.kt)("p",null,"You will need a Casper Account to handle the transactions on an exchange. Casper has an ",(0,o.kt)("a",{parentName:"p",href:"/concepts/design/casper-design#accounts-head"},"Account model")," and instructions on how to ",(0,o.kt)("a",{parentName:"p",href:"/concepts/design/casper-design#accounts-creating"},"create an Account"),"."),(0,o.kt)("p",null,"For your exchange, you need at least one Account. Each Casper network uses an Account model that holds onto general resources and purses with tokens and provides an on-chain identity. As an exchange, if you are dealing with high volumes of transaction activity, you might need a main account for the exchange platform and sub-accounts for other users."),(0,o.kt)("h2",{id:"understanding-basic-transactions"},"Understanding Basic Transactions"),(0,o.kt)("p",null,"We have a token and transaction model that features different levels of support that range from convenient to robust. Usually, when you are transferring Casper tokens between two parties, the native two-party transfer will suffice."),(0,o.kt)("p",null,"Casper supports native two-party transfers as well as bulk transfers using custom Wasm. The native transfer is ideal when you need to perform a one-to-one transfer between two purses. Whereas the batched Wasm transfer is better suited for making bulk transfers. A batched Wasm transfer allows you to do multiple transfers in a single deploy, making it more cost-effective when sending tokens from one purse to several others."),(0,o.kt)("h3",{id:"native-transfer"},"Native transfer"),(0,o.kt)("p",null,"You can accomplish a native transfer by sending a native transfer deploy, without any Wasm. Included below is an example of this type of deploy. The included ",(0,o.kt)("inlineCode",{parentName:"p"},"payment")," field describes how we are paying for the deploy, in this case a native transfer, while the ",(0,o.kt)("inlineCode",{parentName:"p"},"session")," field describes the actual transfer."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Native Transfer Deploy")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'\n"id": 1,\n    "jsonrpc": "2.0",\n    "method": "account_put_deploy",\n    "params": {\n        "deploy": {\n            "approvals": [\n                {\n                    "signature": "130 chars",\n                    "signer": "010f50b0116f213ef65b99d1bd54483f92bf6131de2f8aceb7e3f825a838292150"\n                }\n            ],\n            "hash": "ec2d477a532e00b08cfa9447b7841a645a27d34ee12ec55318263617e5740713",\n            "header": {\n                "account": "010f50b0116f213ef65b99d1bd54483f92bf6131de2f8aceb7e3f825a838292150",\n                "body_hash": "da35b095640a403324306c59ac6f18a446dfcc28faf753ce58b96b635587dd8e",\n                "chain_name": "casper-net-1",\n                "dependencies": [],\n                "gas_price": 1,\n                "timestamp": "2021-04-20T18:04:40.333Z",\n                "ttl": "1h"\n            },\n            "payment": {\n                "ModuleBytes": {\n                    "args": [\n                        [\n                            "amount",\n                            {\n                                "bytes": "021027",\n                                "cl_type": "U512",\n                                "parsed": "10000"\n                            }\n                        ]\n                    ],\n                    "module_bytes": ""\n                }\n            },\n            "session": {\n                "Transfer": {\n                    "args": [\n                        [\n                            "amount",\n                            {\n                                "bytes": "0400f90295",\n                                "cl_type": "U512",\n                                "parsed": "2500000000"\n                            }\n                        ],\n                        [\n                            "target",\n                            {\n                                "bytes": "8ae68a6902ff3c029cea32bb67ae76b25d26329219e4c9ceb676745981fd3668",\n                                "cl_type": {\n                                    "ByteArray": 32\n                                },\n                                "parsed": "8ae68a6902ff3c029cea32bb67ae76b25d26329219e4c9ceb676745981fd3668"\n                            }\n                        ],\n                        [\n                            "id",\n                            {\n                                "bytes": "00",\n                                "cl_type": {\n                                    "Option": "U64"\n                                },\n                                "parsed": null\n                            }\n                        ]\n                    ]\n                }\n            }\n        }\n    }\n}\n\n'))),(0,o.kt)("p",null,"Native transfers are the simplest method to transfer tokens between two purses. For details about the native transfer command, see ",(0,o.kt)("a",{parentName:"p",href:"/developers/cli/transfers/direct-token-transfer"},"Direct Token Transfer"),". The following command transfers 10 CSPR from ",(0,o.kt)("em",{parentName:"p"},"account A's main purse")," to ",(0,o.kt)("em",{parentName:"p"},"account B's main purse"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client transfer \\\n--id 1 \\\n--transfer-id 123456 \\\n--node-address http://<node-ip-address>:7777 \\\n--amount 10000000000 \\\n--secret-key <accountA-secret-key>.pem \\\n--chain-name casper \\\n--target-account <accountB-hex-encoded-public-key> \\\n--payment-amount <payment-in-motes>\n")),(0,o.kt)("p",null,"The payment amount varies based on the deploy and network ",(0,o.kt)("a",{parentName:"p",href:"/concepts/glossary/C#chainspec"},"chainspec"),". For node version ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/release-1.5.1/resources/production/chainspec.toml"},"1.5.1"),", wasmless transfers cost 10^8 motes."),(0,o.kt)("h3",{id:"bulk-or-batched-wasm-transfer"},"Bulk or batched Wasm transfer"),(0,o.kt)("p",null,"Bulk or batched Wasm transfers allow you to apply some logic before or after the transfer. They also allow for conditional transfers. You may also use them if you are doing a series of transfers between multiple purses. Listed below are five methods for the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/1.4.4/casper_contract/contract_api/system/index.html"},"Rust contract API"),", which can be used in session code to achieve batched Wasm transfer:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"transfer_to_account"),": Transfers amount of motes from the main purse of the account to the purse of a target account. If the target purse does not exist, the transfer process will create one. Can be called from session code only and not a contract as a contract doesn't have a main purse."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"transfer_to_public_key"),": Transfers amount of motes from the main purse of the caller\u2019s account to the main purse of the target. If the account referenced by the target does not exist, the transfer will create a new account. Can be called from session code only and not from a contract as a contract doesn't have a main purse."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"transfer_from_purse_to_purse"),": Transfers amount of motes from source purse to target purse. If the target does not exist, the transfer fails."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"transfer_from_purse_to_public_key"),": Transfers amount of motes from source to the main purse of target. If the account referenced by the target does not exist, the transfer will create it."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"transfer_from_purse_to_account"),": Transfers amount of motes from source purse to target account's purse. If the target account does not exist, the transfer creates a new account.")),(0,o.kt)("p",null,"For more information on how to write session code, see ",(0,o.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/writing-session-code"},"Writing Session Code"),". There are equivalent ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/e01b528db64f96fc1d3eac8b3b8e58e1337b398d/smart_contracts/contract_as/assembly/purse.ts#L135-L305"},"assembly script")," methods available. Alternatively, you can program directly against the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/e01b528db64f96fc1d3eac8b3b8e58e1337b398d/smart_contracts/contract/src/ext_ffi.rs#L283-L370"},"ext-FFI")," methods."),(0,o.kt)("h2",{id:"integrating-cspr"},"Integrating CSPR"),(0,o.kt)("p",null,"You can integrate with the ",(0,o.kt)("a",{parentName:"p",href:"/developers/json-rpc/"},"JSON-RPC API")," of a node on the Casper Mainnet. You can program directly against the RPC or if you prefer you can choose from the variety of SDK libraries that are available to use on a Casper network see ",(0,o.kt)("a",{parentName:"p",href:"/sdk"},"SDK Libraries"),". Casper also provides a stream server that gives you real-time information about a variety of events occurring on a node. Use of the stream is optional. You might want to use this feature as it notifies you of events instead of requiring you to ask periodically. For more information about various events, see ",(0,o.kt)("a",{parentName:"p",href:"/developers/dapps/monitor-and-consume-events"},"Monitoring and Consuming Events"),"."),(0,o.kt)("h2",{id:"testing-the-integration"},"Testing the Integration"),(0,o.kt)("p",null,"Our recommended testing mechanism is to have a test environment that points at the official Casper ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.cspr.live/"},"Testnet"),". Through this, you may run production like operations of your test exchange against the test environment. However, if you are not doing this and you just want to integrate with the ",(0,o.kt)("a",{parentName:"p",href:"https://cspr.live/"},"Mainnet"),", then you can do so with your own test accounts."),(0,o.kt)("p",null,"If you are not going to do a Testnet integration, then we suggest you create some additional test accounts and test the transactions on the Mainnet through your software prior to moving to the general public."),(0,o.kt)("h2",{id:"the-casper-protocol"},"The Casper Protocol"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Casper is integrated with BitGo for enterprise grade custody. If your exchange uses BitGo, support for Casper is available already."),(0,o.kt)("li",{parentName:"ul"},"Casper has an execution after consensus model, which means that transactions are executed after they are finalized. Transactions are not orphaned or uncle\u2019d on Casper and neither does chain reorganization happen on it. For more information on the execution process, see ",(0,o.kt)("a",{parentName:"li",href:"/concepts/design/casper-design#execution-semantics-head"},"Execution Semantics"),"."),(0,o.kt)("li",{parentName:"ul"},"Exchanges can check finality signatures. Validators send finality signatures after the finalized block is executed and global state is updated. The Casper node streams execution effects and finality signatures through an SSE architecture. For more information about various events, see ",(0,o.kt)("a",{parentName:"li",href:"/developers/dapps/monitor-and-consume-events"},"Monitoring and Consuming Events"),".")),(0,o.kt)("h2",{id:"staking-integration-for-exchanges"},"Staking Integration for Exchanges"),(0,o.kt)("p",null,"Exchanges seeking to integrate CSPR staking mechanisms will need to understand the processes of delegation, undelegation and redelegation through deploys on a Casper network. The following outlines the use of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/casper-js-sdk/"},"JavaScript SDK")," to perform these actions, as well as parameters relating to staking. Further information about staking on a Casper network can be found ",(0,o.kt)("a",{parentName:"p",href:"/staking/"},"here"),"."),(0,o.kt)("h3",{id:"deploy-structures-and-parameters"},"Deploy Structures and Parameters"),(0,o.kt)("p",null,"Staking operations consists of two parts:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/developers/cli/sending-deploys"},"Creating a deploy object")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/developers/dapps/signing-a-deploy"},"Signing the deploy"))),(0,o.kt)("p",null,"The staking deploy requires the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The delegator's public key"),(0,o.kt)("li",{parentName:"ul"},"The validator's public key"),(0,o.kt)("li",{parentName:"ul"},"The new validator's public key (For re-delegation only)"),(0,o.kt)("li",{parentName:"ul"},"The amount to be delegated"),(0,o.kt)("li",{parentName:"ul"},"The gas cost"),(0,o.kt)("li",{parentName:"ul"},"The auction manager contract's hash"),(0,o.kt)("li",{parentName:"ul"},"The appropriate entry point")),(0,o.kt)("p",null,"Casper provides a series of prebuilt Wasm files for use in these operations. They are provided for convenience, and you are free to create your own custom deploys. You can find them in our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node"},"casper-node")," repository, in the following locations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/casper-network/casper-node/tree/dev/smart_contracts/contracts/client/delegate"},"Delegate")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/casper-network/casper-node/tree/dev/smart_contracts/contracts/client/undelegate"},"Undelegate")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/casper-network/casper-node/tree/dev/smart_contracts/contracts/client/redelegate"},"Redelegate"))),(0,o.kt)("h4",{id:"1-creating-a-deploy-object"},"1. Creating a deploy object"),(0,o.kt)("p",null,"To create a deploy using the JavaScript SDK, we will need ",(0,o.kt)("inlineCode",{parentName:"p"},"deployParams"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"session")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"payment"),"."),(0,o.kt)("p",null,"Deploy params is a ",(0,o.kt)("inlineCode",{parentName:"p"},"DeployUtil.DeployParams")," object created from the delegator's ",(0,o.kt)("inlineCode",{parentName:"p"},"publicKey")," and the network name as shown in the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import { DeployUtil, CLPublicKey } from 'casper-js-sdk';\n\nconst deployParams = new DeployUtil.DeployParams(\n  CLPublicKey.fromHex(publicKeyHex),\n  network_name // 'testnet' | 'mainnet'\n);\n")),(0,o.kt)("p",null,"For creating a ",(0,o.kt)("inlineCode",{parentName:"p"},"session")," object, which is ",(0,o.kt)("inlineCode",{parentName:"p"},"DeployUtil.ExecutableDeployItem"),", we need"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"delegator")," and ",(0,o.kt)("strong",{parentName:"li"},"validator's public keys")),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"amount")," of tokens to delegate/undelegate/redelgate"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"auction manager contract's hash")),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"entry point"))),(0,o.kt)("p",null,"First, create a variable ",(0,o.kt)("inlineCode",{parentName:"p"},"RuntimeArgs")," from the public keys and the amount. We will need to use it below in ",(0,o.kt)("inlineCode",{parentName:"p"},"session"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import { RuntimeArgs, CLValueBuilder, CLPublicKey } from 'casper-js-sdk';\n\nconst args = RuntimeArgs.fromMap({\n  delegator: CLPublicKey.fromHex(delegatorPublicKeyHex),\n  validator: CLPublicKey.fromHex(validatorPublicKeyHex),\n  amount: CLValueBuilder.u512(amountMotes) // in motes\n});\n")),(0,o.kt)("p",null,"Second, create a ",(0,o.kt)("inlineCode",{parentName:"p"},"session")," parameter. It is a ",(0,o.kt)("inlineCode",{parentName:"p"},"Uint8Array")," consisting of the ",(0,o.kt)("inlineCode",{parentName:"p"},"auction manager contract's hash"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"entry points")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"runtime arguments"),", which we previously created."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"auction manager contract's hash")," will depend on the network you are using. For Casper's Mainnet and Testnet, the hashes are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Mainnet"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"ccb576d6ce6dec84a551e48f0d0b7af89ddba44c7390b690036257a04a3ae9ea"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Testnet"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2")))),(0,o.kt)("p",null,"Your ",(0,o.kt)("inlineCode",{parentName:"p"},"entry point")," will depend on which action you are performing, with the following three available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"delegate")," - Initial delegation to a validator"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"undelegate")," - Undelegating tokens from a validator back to the delegator"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"redelegate")," - Redelegating tokens to a new validator")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import { decodeBase16, DeployUtil } from 'casper-js-sdk';\n\nconst session = DeployUtil.ExecutableDeployItem.newStoredContractByHash(\n  decodeBase16(auction_manager_contract_hash), // auction manager contract hash\n  contractEntryPoint, // auction manager entry point\n  args\n);\n")),(0,o.kt)("p",null,"To create the ",(0,o.kt)("inlineCode",{parentName:"p"},"payment")," parameter for the deploy, we need a deploy cost. The actual costs can be pulled from the network chainspec. Here is the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/release-1.4.8/resources/production/chainspec.toml"},(0,o.kt)("inlineCode",{parentName:"a"},"chainspec for version 1.4.8")),". You will need the chainspec for the network version you are using."),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"DeployUtil.standardPayment")," method for creating ",(0,o.kt)("inlineCode",{parentName:"p"},"payment"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import { DeployUtil } from 'casper-js-sdk';\n\nconst payment = DeployUtil.standardPayment(deployCost);\n")),(0,o.kt)("p",null,"The last operation is creating the deploy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import { DeployUtil } from 'casper-js-sdk';\n\nDeployUtil.makeDeploy(deployParams, session, payment);\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Redelegation"),", occurs the same way as delegation, but with the introduction of a third public_key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import { RuntimeArgs, CLPublicKey, CLValueBuilder } from 'casper-js-sdk';\n\nconst args = RuntimeArgs.fromMap({\n    delegator: CLPublicKey.fromHex(delegatorPublicKeyHex),\n    validator: CLPublicKey.fromHex(validatorPublicKeyHex),\n    new_validator: CLPublicKey.fromHex(redelegateValidatorPublicKeyHex),\n    amount: CLValueBuilder.u512(amountMotes)\n})\n")),(0,o.kt)("h4",{id:"2a-sign-the-deploy-casper-signer"},"2a. Sign the deploy (Casper Signer)"),(0,o.kt)("p",null,"To get the signature, you will need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"Signer.sign")," from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/casper-js-sdk/"},"JavaScript SDK"),". It will return ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise<{ deploy }>"),", which is the signed object."),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"DeployUtil.deployFromJson")," to convert the result and sent it to network with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import { Signer, CasperServiceByJsonRPC, DeployUtil } from 'casper-js-sdk';\n\nconst casperService = new CasperServiceByJsonRPC(GRPC_URL);\nconst deployJson = DeployUtil.deployToJson(deploy);\nSigner.sign(\n    deployJson,\n    accountPublicKey,\n    recipientPublicKey\n).then((signedDeployJson) => {\n    const signedDeploy = DeployUtil.deployFromJson(signedDeployJson);\n    if (signedDeploy.ok) {\n      casperService.deploy(signedDeploy.val! as DeployUtil.Deploy); // sent deploy\n    }\n}\n")),(0,o.kt)("h4",{id:"2b-sign-the-deploy-ledger"},"2b. Sign the deploy (Ledger)"),(0,o.kt)("p",null,"You will need to connect with your ",(0,o.kt)("inlineCode",{parentName:"p"},"Ledger")," first to get the signature."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import TransportWebUSB from '@ledgerhq/hw-transport-webusb';\nimport LedgerApp, { ResponseBase } from '@zondax/ledger-casper';\nimport { DeployUtil } from 'casper-js-sdk';\n\nconst getBipPath = (index: number) => {\n  const idx = index.toString();\n  return `m/44'/506'/0'/0/${idx}`;\n};\n\nconst deployBytes = DeployUtil.deployToBytes(deploy) as Buffer;\nconst transport = await TransportWebUSB.create();\nconst ledgerApp = new LedgerApp(transport);\nconst res = await ledgerApp.sign(\n    getBipPath(selectedAccountIndex),\n    deployBytes\n);\n")),(0,o.kt)("p",null,"The Signature will be in a property called ",(0,o.kt)("inlineCode",{parentName:"p"},"res.signatureRS"),"."),(0,o.kt)("p",null,"After that, we can create a signed deploy,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import { DeployUtil, CLPublicKey } from 'casper-js-sdk';\n\nconst signedDeploy = DeployUtil.setSignature(\n  deploy,\n  signatureRS,\n  CLPublicKey.fromHex(accountPublicKey)\n);\n")),(0,o.kt)("p",null,"We can then send it to a network."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"casperService.deploy(signedDeploy)\n")),(0,o.kt)("h3",{id:"costs-and-minimums"},"Costs and Minimums"),(0,o.kt)("p",null,"The following are costs and minimum amounts for version 1.5.1, but up-to-date values should be pulled from the network ",(0,o.kt)("a",{parentName:"p",href:"/concepts/glossary/C#chainspec"},"chainspec"),"."),(0,o.kt)("p",null,"Transfer Cost: 100,000,000 motes or 0.1 ",(0,o.kt)("strong",{parentName:"p"},"CSPR")),(0,o.kt)("p",null,"Delegation Cost: 2,500,000,000 motes or 2.5 ",(0,o.kt)("strong",{parentName:"p"},"CSPR")),(0,o.kt)("p",null,"Minimum transfer amount: 2,500,000,000 motes, or 2.5 ",(0,o.kt)("strong",{parentName:"p"},"CSPR")),(0,o.kt)("p",null,"Minimum amount required for delegation: 500,000,000,000 motes, or 500 ",(0,o.kt)("strong",{parentName:"p"},"CSPR"),"."),(0,o.kt)("h3",{id:"the-delegation-cap"},"The Delegation Cap"),(0,o.kt)("p",null,"Casper includes a delegator limit rule, which limits the number of delegators that a single validator may have at ",(0,o.kt)("inlineCode",{parentName:"p"},"953"),". This is a temporary solution to prevent complications with Casper\u2019s fast sync mechanism - in which high bond counts could break fast sync."),(0,o.kt)("p",null,"Validators with a delegator count at or above ",(0,o.kt)("inlineCode",{parentName:"p"},"953")," at the time of the ",(0,o.kt)("strong",{parentName:"p"},"1.4.5")," upgrade were grandfathered in, however new delegators will not be able to delegate to any validator until the delegator count for that validator falls below ",(0,o.kt)("inlineCode",{parentName:"p"},"953"),"."),(0,o.kt)("p",null,"Existing delegators may continue to delegate additional CSPR, regardless of the current number of delegators staking their ",(0,o.kt)("strong",{parentName:"p"},"CSPR")," to that validator. However, no new delegators may join the validator until it drops below the ",(0,o.kt)("inlineCode",{parentName:"p"},"953")," limit."))}h.isMDXComponent=!0}}]);