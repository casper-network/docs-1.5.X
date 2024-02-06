"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5428],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=i(a),p=r,f=h["".concat(l,".").concat(p)]||h[p]||d[p]||o;return a?n.createElement(f,c(c({ref:t},u),{},{components:a})):n.createElement(f,c({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,c[1]=s;for(var i=2;i<o;i++)c[i]=a[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9308:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return h}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),c=(a(4996),["components"]),s={title:"Querying Global State"},l="Querying Global State",i={unversionedId:"developers/cli/querying-global-state",id:"developers/cli/querying-global-state",title:"Querying Global State",description:"This page explains how to query global state after contract installation.",source:"@site/source/docs/casper/developers/cli/querying-global-state.md",sourceDirName:"developers/cli",slug:"/developers/cli/querying-global-state",permalink:"/developers/cli/querying-global-state",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/developers/cli/querying-global-state.md",tags:[],version:"current",lastUpdatedAt:1707229568,formattedLastUpdatedAt:"Feb 6, 2024",frontMatter:{title:"Querying Global State"},sidebar:"developers",previous:{title:"Installing Contracts",permalink:"/developers/cli/installing-contracts"},next:{title:"Calling Contracts",permalink:"/developers/cli/calling-contracts"}},u={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting the State Root Hash",id:"get-state-root-hash",level:2},{value:"Sending the Query",id:"query-global-state",level:2},{value:"Query the account",id:"query-the-account",level:3},{value:"Query the contract",id:"query-the-contract",level:3},{value:"Query a value using its key and the contract hash",id:"query-a-value-using-its-key-and-the-contract-hash",level:3},{value:"Query a value using the account hash and named keys",id:"query-a-value-using-the-account-hash-and-named-keys",level:3},{value:"Query contract package state",id:"query-contract-package-state",level:3},{value:"Video Walkthrough",id:"video-walkthrough",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}],d={toc:h},p="wrapper";function f(e){var t=e.components,a=(0,r.Z)(e,c);return(0,o.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"querying-global-state"},"Querying Global State"),(0,o.kt)("p",null,"This page explains how to query global state after contract installation."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You have ",(0,o.kt)("a",{parentName:"li",href:"/developers/cli/installing-contracts"},"installed a contract")," on a Casper network")),(0,o.kt)("h2",{id:"get-state-root-hash"},"Getting the State Root Hash"),(0,o.kt)("p",null,"The first step in querying the global state is obtaining the state root hash. The state root hash acts as an identifier for the current state of the network (global state). It is like a Git commit ID for commit history, and it provides a snapshot of the blockchain state at a specific point in time."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"After sending deploys to the network, it's necessary to fetch the new state root hash in order to see the changes reflected in the global state. Without doing this, you would be querying past versions of the state.")),(0,o.kt)("p",null,"To get the state root hash, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"get-state-root-hash")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-state-root-hash --node-address [NODE_SERVER_ADDRESS]\n")),(0,o.kt)("h2",{id:"query-global-state"},"Sending the Query"),(0,o.kt)("p",null,"Next, query the state of a Casper network at a given time, specified by the ",(0,o.kt)("inlineCode",{parentName:"p"},"state-root-hash")," described above. You can dive into the data stored in global state using the optional query path argument ",(0,o.kt)("inlineCode",{parentName:"p"},"-q"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client query-global-state \\\n  --node-address [NODE_SERVER_ADDRESS] \\\n  --state-root-hash [STATE_ROOT_HASH] \\\n  --key [HASH_STRING] \\\n  -q "[SESSION_NAME]/[SESSION_NAMED_KEY]"\n')),(0,o.kt)("p",null,"The arguments used above are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a peer on the network. The default port for JSON-RPC servers on Mainnet and Testnet is 7777"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"state-root-hash")," - Hex-encoded hash of the state root"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"key")," - The identifier for the query. This must be one of the following: public key, account hash, contract package hash, transfer hash, or deploy hash"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"q")," - An optional query path argument that allows you to drill into the specifics of a query with respect to the key")),(0,o.kt)("h3",{id:"query-the-account"},"Query the account"),(0,o.kt)("p",null,"To find your account details, query global state using your account hash."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state \\\n  --node-address http://localhost:11101 \\\n  --state-root-hash fa968344a2000282686303f1664c474465f9a028f32ec4f51791d9fa64c0bcd7 \\\n  --key account-hash-1d17e3fdad268f866a73558d1ae45e1eea3924c247871cb63f67ebf1a116e66d\n")),(0,o.kt)("p",null,'Here is how your account state would look. Notice that the sample response contains several named keys, including "counter", "counter_package_name", and "version". You can use these values to query the contract state further, as shown in the next example.'),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Sample account state"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "id": -6831525034388467034,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.5",\n    "block_header": null,\n    "merkle_proof": "[27614 hex chars]",\n    "stored_value": {\n      "Account": {\n        "account_hash": "account-hash-1d17e3fdad268f866a73558d1ae45e1eea3924c247871cb63f67ebf1a116e66d",\n        "action_thresholds": {\n          "deployment": 1,\n          "key_management": 1\n        },\n        "associated_keys": [\n          {\n            "account_hash": "account-hash-1d17e3fdad268f866a73558d1ae45e1eea3924c247871cb63f67ebf1a116e66d",\n            "weight": 1\n          }\n        ],\n        "main_purse": "uref-d92e420120199f90005802bf3036362f368ab69bebf17e7e53856d6ac82e117f-007",\n        "named_keys": [\n          {\n            "key": "hash-22228188b85b6ee4a4a41c7e98225c3918139e9a5eb4b865711f2e409d85e88e",\n            "name": "counter"\n          },\n          {\n            "key": "uref-41c3f4ae3c1ce2446f6fd880a96e698ae5abc715151e45e357d88bb739489c03-007",\n            "name": "counter_access_uref"\n          },\n          {\n            "key": "hash-76a8c3daa6d6ac799ce9f46d82ac98efb271d2d64b517861ec89a06051ef019e",\n            "name": "counter_package_name"\n          },\n          {\n            "key": "uref-917762490591a1404cba59ed8dcf0bcfa7f644ef6c6be9bf5ea7b1641617cad0-007",\n            "name": "version"\n          }\n        ]\n      }\n    }\n  }\n}\n'))),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you don't know your account hash, you can run this command:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client account-address --public-key [PATH_TO_PUBLIC_KEY]\n"))),(0,o.kt)("h3",{id:"query-the-contract"},"Query the contract"),(0,o.kt)("p",null,"This example shows how to query global state given a contract hash. We use the contract hash from the sample response above."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state \\\n  --node-address http://localhost:11101  \\\n  --state-root-hash fa968344a2000282686303f1664c474465f9a028f32ec4f51791d9fa64c0bcd7 \\\n  --key hash-22228188b85b6ee4a4a41c7e98225c3918139e9a5eb4b865711f2e409d85e88e\n")),(0,o.kt)("p",null,"Here is how the sample contract would look and would contain details such as the ",(0,o.kt)("inlineCode",{parentName:"p"},"contract_package_hash"),", the contract ",(0,o.kt)("inlineCode",{parentName:"p"},"entry_points"),", and the ",(0,o.kt)("inlineCode",{parentName:"p"},"named_keys")," for the contract."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Sample contract state"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "id": -4657473054587773855,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.5",\n    "block_header": null,\n    "merkle_proof": "[21330 hex chars]",\n    "stored_value": {\n      "Contract": {\n        "contract_package_hash": "contract-package-76a8c3daa6d6ac799ce9f46d82ac98efb271d2d64b517861ec89a06051ef019e",\n        "contract_wasm_hash": "contract-wasm-576b1718711d524a79ab2f05ce801006a3fd32eb48b9f7dac69a9fa966d634e3",\n        "entry_points": [\n          {\n            "access": "Public",\n            "args": [],\n            "entry_point_type": "Contract",\n            "name": "counter_get",\n            "ret": "I32"\n          },\n          {\n            "access": "Public",\n            "args": [],\n            "entry_point_type": "Contract",\n            "name": "counter_inc",\n            "ret": "Unit"\n          }\n        ],\n        "named_keys": [\n          {\n            "key": "uref-d40613e50c7b405b02795e3fe3252554bef49b4b522e31a55f39b87c442f922a-007",\n            "name": "count"\n          }\n        ],\n        "protocol_version": "1.4.5"\n      }\n    }\n  }\n}\n\n'))),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"query-a-value-using-its-key-and-the-contract-hash"},"Query a value using its key and the contract hash"),(0,o.kt)("p",null,"Next, you can query a named key associated with the contract using the ",(0,o.kt)("inlineCode",{parentName:"p"},"-q")," option. This example comes from the ",(0,o.kt)("a",{parentName:"p",href:"/counter"},"Counter Contract Tutorial"),', where a "count" variable is incremented and stored under a named key.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client query-global-state \\\n  --node-address http://localhost:11101 \\\n  --state-root-hash [STATE_ROOT_HASH] \\\n  --key [CONTRACT_HASH] \\\n  -q "count"\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Sample stored value"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "id": -2540117660598287261,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.5",\n    "block_header": null,\n    "merkle_proof": "[56562 hex chars]",\n    "stored_value": {\n      "CLValue": {\n        "bytes": "00000000",\n        "cl_type": "I32",\n        "parsed": 0\n      }\n    }\n  }\n}\n'))),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"query-a-value-using-the-account-hash-and-named-keys"},"Query a value using the account hash and named keys"),(0,o.kt)("p",null,'It is also possible to check the state of a specific contract variable in global state given the account hash under which the contract was installed. Here we query the named key "count", stored under another key identifying the contract and named "counter".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client query-global-state \\\n  --node-address http://localhost:11101 \\\n  --state-root-hash fa968344a2000282686303f1664c474465f9a028f32ec4f51791d9fa64c0bcd7 \\\n  --key account-hash-1d17e3fdad268f866a73558d1ae45e1eea3924c247871cb63f67ebf1a116e66d \\\n  -q "counter/count"\n')),(0,o.kt)("p",null,"The response should be the same as in Example 3, above."),(0,o.kt)("h3",{id:"query-contract-package-state"},"Query contract package state"),(0,o.kt)("p",null,"You can query information about a contract package, such as the latest contract hash and contract version, given its contract package hash."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state \\\n  --node-address http://localhost:11101 \\\n  --key hash-76a8c3daa6d6ac799ce9f46d82ac98efb271d2d64b517861ec89a06051ef019e \\\n  --state-root-hash 763e737cf55a298d54bcdfb4ee55526538a1a086128914b9cc25ccbdebbbb966\n")),(0,o.kt)("p",null,"Here is how the contract package details would look. The response would contain the ",(0,o.kt)("inlineCode",{parentName:"p"},"contract_hash"),", which you would need to ",(0,o.kt)("a",{parentName:"p",href:"/developers/cli/calling-contracts#calling-contracts-by-hash"},"call a contract by hash")," in the next section. You would also see the ",(0,o.kt)("inlineCode",{parentName:"p"},"access_key")," for the ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractPackage")," and the current ",(0,o.kt)("inlineCode",{parentName:"p"},"contract_version"),"."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Sample contract package state"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "id": -6225901853092301031,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.5",\n    "block_header": null,\n    "merkle_proof": "[20964 hex chars]",\n    "stored_value": {\n      "ContractPackage": {\n        "access_key": "uref-41c3f4ae3c1ce2446f6fd880a96e698ae5abc715151e45e357d88bb739489c03-007",\n        "disabled_versions": [],\n        "groups": [],\n        "versions": [\n          {\n            "contract_hash": "contract-22228188b85b6ee4a4a41c7e98225c3918139e9a5eb4b865711f2e409d85e88e",\n            "contract_version": 1,\n            "protocol_version_major": 1\n          }\n        ]\n      }\n    }\n  }\n}\n'))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"video-walkthrough"},"Video Walkthrough"),(0,o.kt)("p",null,"This video shows you what to expect when querying the network."),(0,o.kt)("p",{align:"center"},(0,o.kt)("iframe",{width:"400",height:"225",src:"https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=9",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,o.kt)("h2",{id:"whats-next"},"What's Next?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Learn ",(0,o.kt)("a",{parentName:"li",href:"/developers/cli/calling-contracts"},"different ways to call contracts")," using the Casper command-line client")))}f.isMDXComponent=!0}}]);