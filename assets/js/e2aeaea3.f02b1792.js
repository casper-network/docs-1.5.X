"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9487],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),d=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(t),h=r,f=c["".concat(i,".").concat(h)]||c[h]||p[h]||o;return t?a.createElement(f,s(s({ref:n},u),{},{components:t})):a.createElement(f,s({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=c;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var d=2;d<o;d++)s[d]=t[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5248:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var a=t(3117),r=t(102),o=(t(7294),t(3905)),s=["components"],l={},i="Querying a Casper Network",d={unversionedId:"resources/tutorials/beginner/querying-network",id:"resources/tutorials/beginner/querying-network",title:"Querying a Casper Network",description:"The Casper node supports queries for users and developers to obtain information stored on the blockchain.",source:"@site/source/docs/casper/resources/tutorials/beginner/querying-network.md",sourceDirName:"resources/tutorials/beginner",slug:"/resources/tutorials/beginner/querying-network",permalink:"/resources/tutorials/beginner/querying-network",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/resources/tutorials/beginner/querying-network.md",tags:[],version:"current",lastUpdatedAt:1677606111,formattedLastUpdatedAt:"2/28/2023",frontMatter:{},sidebar:"resources",previous:{title:"Using the JavaScript SDK",permalink:"/resources/tutorials/beginner/use-javascript-sdk"},next:{title:"Upgrading a Contract",permalink:"/resources/tutorials/beginner/upgrade-contract"}},u={},p=[{value:"Obtaining the Global State Root Hash",id:"obtaining-the-global-state-root-hash",level:2},{value:"Querying an Account",id:"querying-an-account",level:2},{value:"Querying Blocks",id:"querying-blocks",level:2},{value:"Querying Deploys",id:"querying-deploys",level:2}],c={toc:p};function h(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"querying-a-casper-network"},"Querying a Casper Network"),(0,o.kt)("p",null,"The Casper node supports queries for users and developers to obtain information stored on the blockchain."),(0,o.kt)("p",null,"This document assumes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You have met the ",(0,o.kt)("a",{parentName:"li",href:"/developers/prerequisites"},"prerequisites")),(0,o.kt)("li",{parentName:"ol"},"You are familiar with the structure of the ",(0,o.kt)("a",{parentName:"li",href:"/design"},"Global State and the Blockchain Design")," to query data from the network")),(0,o.kt)("p",null,"When sending a query, it is important to note that the request will be routed to a single node in the network. You can request several types of data from a node:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Account details"),(0,o.kt)("li",{parentName:"ul"},"Block information"),(0,o.kt)("li",{parentName:"ul"},"Deploy information")),(0,o.kt)("h2",{id:"obtaining-the-global-state-root-hash"},"Obtaining the Global State Root Hash"),(0,o.kt)("p",null,"Since the system state changes with each block created, obtaining the latest global state hash is essential before querying information from a node."),(0,o.kt)("p",null,"All queries made to global state require the ",(0,o.kt)("inlineCode",{parentName:"p"},"state-root-hash"),", which you can obtain with this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-state-root-hash \\\n     --id 1 \\\n     --node-address http://<node-ip-address>:7777\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Request fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id")," - (STRING OR INTEGER) Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a node on the network")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Explore the JSON-RPC request and response generated."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON-RPC Request"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "method": "chain_get_state_root_hash",\n    "params": null,\n    "id": 1\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON-RPC Response"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.0.0",\n        "state_root_hash": "f97d8d36630a8f4acdb323223596f6fa01ee3b0d49ad70d84d715c156c5dbec6"\n    },\n    "id": 1\n}\n'))),(0,o.kt)("h2",{id:"querying-an-account"},"Querying an Account"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/concepts/design/casper-design#accounts-head"},"Accounts")," are stored in the global state and can be queried using the ",(0,o.kt)("inlineCode",{parentName:"p"},"query-global-state")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state \\\n  --id 4 \\\n  --node-address http://<node-ip-address>:7777 \\\n  --state-root-hash <state-root-hash> \\\n  --key <hex-encoded-source-account-public-key>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Request fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id")," - Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a node on the network"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"state-root-hash")," - Hex-encoded hash of the state root"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"key")," - The base key for the query. This must be a properly formatted public key, account hash, contract address hash, URef, transfer hash or deploy-info hash.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important response fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"result"."stored_value"."Account"."main_purse"')," - the address of the main purse containing the sender's tokens. This purse is the source of the tokens transferred in this example")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Explore the JSON-RPC request and response generated."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON-RPC Request"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 4,\n    "jsonrpc": "2.0",\n    "method": "state_get_item",\n    "params": {\n        "key": "account-hash-b0049301811f23aab30260da66927f96bfae7b99a66eb2727da23bf1427a38f5",\n        "path": [],\n        "state_root_hash": "cfdbf775b6671de3787cfb1f62f0c5319605a7c1711d6ece4660b37e57e81aa3"\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON-RPC Response"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 4,\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.0.0",\n        "merkle_proof": "2228 chars",\n        "stored_value": {\n            "Account": {\n                "account_hash": "account-hash-b0049301811f23aab30260da66927f96bfae7b99a66eb2727da23bf1427a38f5",\n                "action_thresholds": {\n                    "deployment": 1,\n                    "key_management": 1\n                },\n                "associated_keys": [\n                    {\n                        "account_hash": "account-hash-b0049301811f23aab30260da66927f96bfae7b99a66eb2727da23bf1427a38f5",\n                        "weight": 1\n                    }\n                ],\n                "main_purse": "uref-9e90f4bbd8f581816e305eb7ea2250ca84c96e43e8735e6aca133e7563c6f527-007",\n                "named_keys": []\n            }\n        }\n    }\n}\n'))),(0,o.kt)("p",null,"You can use the URef of the ",(0,o.kt)("inlineCode",{parentName:"p"},"main_purse")," to query the account balance. The balance returned is in motes (the unit that makes up the Casper token)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-balance \\\n      --id 6 \\\n      --node-address http://<node-ip-address>:7777 \\\n      --state-root-hash <state-root-hash> \\\n      --purse-uref <source-account-purse-uref>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Request fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id")," - Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a node on the network"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"state-root-hash")," - Hex-encoded hash of the state root"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"purse-uref"),' - The URef under which the purse is stored. This must be a properly formatted URef "uref-',"-",'"')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Explore the JSON-RPC request and response generated."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON-RPC Request"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 6,\n    "jsonrpc": "2.0",\n    "method": "state_get_balance",\n    "params": {\n        "purse_uref": "uref-6f4026262a505d5e1b0e03b1e3b7ab74a927f8f2868120cf1463813c19acb71e-007",\n        "state_root_hash": "cfdbf775b6671de3787cfb1f62f0c5319605a7c1711d6ece4660b37e57e81aa3"\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON-RPC Response"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 6,\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.0.0",\n        "balance_value": "5000000000",\n        "merkle_proof": "2502 chars"\n    }\n}\n'))),(0,o.kt)("h2",{id:"querying-blocks"},"Querying Blocks"),(0,o.kt)("p",null,"It is possible to obtain detailed block information from the system. To do this, obtain the hash of the block of interest and send this query to a node in the network. Here is an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-block \\\n      --id 3 \\\n      --node-address http://<node-ip-address>:7777 \\\n      --block-identifier <block-hash> \\\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Request fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id")," - Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a node on the network"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"block-identifier")," - Hex-encoded block hash or height of the block. If not given, the last block added to the chain as known at the given node will be used")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important response fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"result"."block"."header"."state_root_hash"')," - contains the ",(0,o.kt)("inlineCode",{parentName:"li"},"state-root-hash")," for this block")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Explore the JSON-RPC request and response generated."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON-RPC Request"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 3,\n    "jsonrpc": "2.0",\n    "method": "chain_get_block",\n    "params": {\n        "block_identifier": {\n            "Hash": "7c7e9b0f087bba5ce6fc4bd067b57f69ea3c8109157a3ad7f6d98b8da77d97f9"\n        }\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON-RPC Response"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 3,\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.0.0",\n        "block": {\n            "body": {\n                "deploy_hashes": [],\n                "proposer": "012c6775c0e9e09f93b9450f1c5348c5f6b97895b0f52bb438f781f96ba2675a94",\n                "transfer_hashes": ["ec2d477a532e00b08cfa9447b7841a645a27d34ee12ec55318263617e5740713"]\n            },\n            "hash": "7c7e9b0f087bba5ce6fc4bd067b57f69ea3c8109157a3ad7f6d98b8da77d97f9",\n            "header": {\n                "accumulated_seed": "50b8ac019b7300cd1fdeec050310e61b900e9238aa879929745900a91bd0fc4f",\n                "body_hash": "224076b19c04279ae9b97f620801d5ff40ba64f431fe0d5089ef7cb84fdff45a",\n                "era_end": null,\n                "era_id": 0,\n                "height": 8,\n                "parent_hash": "416f339c4c2ff299c64a4b3271c5ef2ac2297bb40a477ceacce1483451a4db16",\n                "protocol_version": "1.0.0",\n                "random_bit": true,\n                "state_root_hash": "cfdbf775b6671de3787cfb1f62f0c5319605a7c1711d6ece4660b37e57e81aa3",\n                "timestamp": "2021-04-20T18:04:42.368Z"\n            },\n            "proofs": [\n                {\n                    "public_key": "010f50b0116f213ef65b99d1bd54483f92bf6131de2f8aceb7e3f825a838292150",\n                    "signature": "130 chars"\n                },\n                {\n                    "public_key": "012c6775c0e9e09f93b9450f1c5348c5f6b97895b0f52bb438f781f96ba2675a94",\n                    "signature": "130 chars"\n                },\n                {\n                    "public_key": "018d5da83f22c9b65cdfdf9f9fdf9f7c98aa2b8c7bcf14bf855177bbb9c1ac7f0a",\n                    "signature": "130 chars"\n                },\n                {\n                    "public_key": "01b9088b92c8a8d592f6ec8c3e8153d7c55fc0c38b5999a214e37e73a2edd6fe0f",\n                    "signature": "130 chars"\n                },\n                {\n                    "public_key": "01b9e3484d96d5693e6c5fe789e7b28972aa392b054a76d175f079692967f604de",\n                    "signature": "130 chars"\n                }\n            ]\n        }\n    }\n}\n'))),(0,o.kt)("h2",{id:"querying-deploys"},"Querying Deploys"),(0,o.kt)("p",null,"Once you submit a deploy to the network, you can check its execution status using ",(0,o.kt)("inlineCode",{parentName:"p"},"get-deploy"),". If the ",(0,o.kt)("inlineCode",{parentName:"p"},"execution_results")," in the output are null, the transaction has not run yet. Note that transactions are finalized upon execution."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-deploy \\\n      --id 2 \\\n      --node-address http://<node-ip-address>:7777 \\\n      <deploy-hash>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Request fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id")," - JSON-RPC identifier, applied to the request and returned in the response. If not provided, a random integer will be assigned"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a node on the network"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"deploy-hash")," - Hex-encoded hash of the deploy")))}h.isMDXComponent=!0}}]);