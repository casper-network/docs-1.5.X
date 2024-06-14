"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4835],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(a),b=r,u=p["".concat(c,".").concat(b)]||p[b]||f[b]||l;return a?n.createElement(u,o(o({ref:t},s),{},{components:a})):n.createElement(u,o({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},4659:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],i={},c="Proof-of-Stake JSON-RPC Methods",d={unversionedId:"developers/json-rpc/json-rpc-pos",id:"developers/json-rpc/json-rpc-pos",title:"Proof-of-Stake JSON-RPC Methods",description:"proof-of-stake}",source:"@site/source/docs/casper/developers/json-rpc/json-rpc-pos.md",sourceDirName:"developers/json-rpc",slug:"/developers/json-rpc/json-rpc-pos",permalink:"/developers/json-rpc/json-rpc-pos",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/developers/json-rpc/json-rpc-pos.md",tags:[],version:"current",lastUpdatedAt:1718371074,formattedLastUpdatedAt:"Jun 14, 2024",frontMatter:{},sidebar:"developers",previous:{title:"Informational JSON-RPC Methods",permalink:"/developers/json-rpc/json-rpc-informational"},next:{title:"Types",permalink:"/developers/json-rpc/types_chain"}},s={},p=[{value:"state_get_auction_info",id:"state-get-auction-info",level:2},{value:"<code>state_get_auction_info_result</code>",id:"state_get_auction_info_result",level:3},{value:"info_get_validator_changes",id:"info-get-validator-changes",level:2},{value:"<code>info_get_validator_changes_result</code>",id:"info_get_validator_changes_result",level:3},{value:"chain_get_era_info_by_switch_block",id:"chain_get_era_info_by_switch_block",level:2},{value:"<code>chain_get_era_info_by_switch_block_result</code>",id:"chain_get_era_info_by_switch_block_result",level:3}],f={toc:p},b="wrapper";function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)(b,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"proof-of-stake"},"Proof-of-Stake JSON-RPC Methods"),(0,l.kt)("p",null,"The following methods pertain to the Proof-of-Stake functionality of a Casper network. They return information related to auctions, bids and validators. This information is necessary for users involved with node operations and validation."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"state-get-auction-info"},"state_get_auction_info"),(0,l.kt)("p",null,"This method returns the ",(0,l.kt)("a",{parentName:"p",href:"/concepts/economics/consensus#bids"},"bids")," and ",(0,l.kt)("a",{parentName:"p",href:"/concepts/glossary/V#validator"},"validators")," as of either a specific Block (by height or hash). If you do not provide a ",(0,l.kt)("inlineCode",{parentName:"p"},"block_identifier"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"state_get_auction_info")," will return information from the most recent Block."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/developers/json-rpc/types_chain#blockidentifier"},"block_identifier")),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"The Block identifier.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example state_get_auction_info request"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'\n{\n  "id": 1,\n  "jsonrpc": "2.0",\n  "method": "state_get_auction_info",\n  "params": [\n    {\n      "Hash": "13c2d7a68ecdd4b74bf4393c88915c836c863fc4bf11d7f2bd930a1bbccacdcb"\n    }\n  ]\n}\n\n'))),(0,l.kt)("h3",{id:"state_get_auction_info_result"},(0,l.kt)("inlineCode",{parentName:"h3"},"state_get_auction_info_result")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"api_version"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The RPC API version.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/developers/json-rpc/types_chain#auctionstate"},"auction_state")),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"The auction state.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example state_get_auction_info result"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'\n{\n  "id": 1,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.13",\n    "auction_state": {\n      "bids": [\n        {\n          "bid": {\n            "bonding_purse": "uref-fafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafafa-007",\n            "delegation_rate": 0,\n            "delegators": [],\n            "inactive": false,\n            "staked_amount": "10"\n          },\n          "public_key": "01197f6b23e16c8532c6abc838facd5ea789be0c76b2920334039bfa8b3d368d61"\n        }\n      ],\n      "block_height": 10,\n      "era_validators": [\n        {\n          "era_id": 10,\n          "validator_weights": [\n            {\n              "public_key": "01197f6b23e16c8532c6abc838facd5ea789be0c76b2920334039bfa8b3d368d61",\n              "weight": "10"\n            }\n          ]\n        }\n      ],\n      "state_root_hash": "0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b"\n    }\n  }\n}\n\n'))),(0,l.kt)("h2",{id:"info-get-validator-changes"},"info_get_validator_changes"),(0,l.kt)("p",null,"This method returns status changes of active validators. Listed changes occurred during the ",(0,l.kt)("inlineCode",{parentName:"p"},"EraId")," contained within the response itself. A validator may show more than one change in a single era."),(0,l.kt)("p",null,"Potential change types:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Change Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Added"),(0,l.kt)("td",{parentName:"tr",align:null},"The validator has been added to the set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Removed"),(0,l.kt)("td",{parentName:"tr",align:null},"The validator has been removed from the set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Banned"),(0,l.kt)("td",{parentName:"tr",align:null},"The validator has been banned in the current era.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CannotPropose"),(0,l.kt)("td",{parentName:"tr",align:null},"The validator cannot propose a Block.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SeenAsFaulty"),(0,l.kt)("td",{parentName:"tr",align:null},"The validator has performed questionable activity.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example info_get_validator_changes request"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'\n{\n  "id": 1,\n  "jsonrpc": "2.0",\n  "method": "info_get_validator_changes",\n  "params": []\n}\n\n'))),(0,l.kt)("h3",{id:"info_get_validator_changes_result"},(0,l.kt)("inlineCode",{parentName:"h3"},"info_get_validator_changes_result")),(0,l.kt)("p",null,"If no changes occurred in the current era, ",(0,l.kt)("inlineCode",{parentName:"p"},"info_get_validator_changes")," will return empty."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"api_version"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The RPC API version.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/developers/json-rpc/types_chain#jsonvalidatorchanges"},"changes")),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"The validators' status changes.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example info_get_validator_changes result"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'\n{\n  "id": 1,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.13",\n    "changes": [\n      {\n        "public_key": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c",\n        "status_changes": [\n          {\n            "era_id": 1,\n            "validator_change": "Added"\n          }\n        ]\n      }\n    ]\n  }\n}\n\n'))),(0,l.kt)("h2",{id:"chain_get_era_info_by_switch_block"},"chain_get_era_info_by_switch_block"),(0,l.kt)("p",null,"This method returns an EraInfo from the network. Only the last Block in an ",(0,l.kt)("inlineCode",{parentName:"p"},"era"),", known as a switch block, will contain an ",(0,l.kt)("inlineCode",{parentName:"p"},"era_summary"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/developers/json-rpc/types_chain#blockidentifier"},"block_identifier")),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"The Block identifier. If you do not supply a ",(0,l.kt)("inlineCode",{parentName:"td"},"block_identifier"),", the returned information will be the most recent Block. (Optional)")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example chain_get_era_info_by_switch_block request"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'\n{\n  "id": 1,\n  "jsonrpc": "2.0",\n  "method": "chain_get_era_info_by_switch_block",\n  "params": [\n    {\n      "Hash": "13c2d7a68ecdd4b74bf4393c88915c836c863fc4bf11d7f2bd930a1bbccacdcb"\n    }\n  ]\n}\n\n'))),(0,l.kt)("h3",{id:"chain_get_era_info_by_switch_block_result"},(0,l.kt)("inlineCode",{parentName:"h3"},"chain_get_era_info_by_switch_block_result")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"api_version"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The RPC API version.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/developers/json-rpc/types_chain#erasummary"},"era_summary")),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"The era summary (If found).")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example chain_get_era_info_by_switch_block"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'\n{\n  "id": 1,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.13",\n    "era_summary": {\n      "block_hash": "13c2d7a68ecdd4b74bf4393c88915c836c863fc4bf11d7f2bd930a1bbccacdcb",\n      "era_id": 42,\n      "merkle_proof": "01000000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625016ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625000000003529cde5c621f857f75f3810611eb4af3f998caaa9d4a3413cf799f99c67db0307010000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a7253614761462501010102000000006e06000000000074769d28aac597a36a03a932d4b43e4f10bf0403ee5c41dd035102553f5773631200b9e173e8f05361b681513c14e25e3138639eb03232581db7557c9e8dbbc83ce94500226a9a7fe4f2b7b88d5103a4fc7400f02bf89c860c9ccdd56951a2afe9be0e0267006d820fb5676eb2960e15722f7725f3f8f41030078f8b2e44bf0dc03f71b176d6e800dc5ae9805068c5be6da1a90b2528ee85db0609cc0fb4bd60bbd559f497a98b67f500e1e3e846592f4918234647fca39830b7e1e6ad6f5b7a99b39af823d82ba1873d000003000000010186ff500f287e9b53f823ae1582b1fa429dfede28015125fd233a31ca04d5012002015cc42669a55467a1fdf49750772bfc1aed59b9b085558eb81510e9b015a7c83b0301e3cf4a34b1db6bfa58808b686cb8fe21ebe0c1bcbcee522649d2b135fe510fe3",\n      "state_root_hash": "0808080808080808080808080808080808080808080808080808080808080808",\n      "stored_value": {\n        "EraInfo": {\n          "seigniorage_allocations": [\n            {\n              "Delegator": {\n                "amount": "1000",\n                "delegator_public_key": "01e1b46a25baa8a5c28beb3c9cfb79b572effa04076f00befa57eb70b016153f18",\n                "validator_public_key": "012a1732addc639ea43a89e25d3ad912e40232156dcaa4b9edfc709f43d2fb0876"\n              }\n            },\n            {\n              "Validator": {\n                "amount": "2000",\n                "validator_public_key": "012a1732addc639ea43a89e25d3ad912e40232156dcaa4b9edfc709f43d2fb0876"\n              }\n            }\n          ]\n        }\n      }\n    }\n  }\n}\n\n'))))}u.isMDXComponent=!0}}]);