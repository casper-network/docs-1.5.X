"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3617],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,l(l({ref:t},i),{},{components:n})):a.createElement(f,l({ref:t},i))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[d]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6607:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),l=["components"],c={},p="Transactional JSON-RPC Method",s={unversionedId:"developers/json-rpc/json-rpc-transactional",id:"developers/json-rpc/json-rpc-transactional",title:"Transactional JSON-RPC Method",description:"transactional}",source:"@site/source/docs/casper/developers/json-rpc/json-rpc-transactional.md",sourceDirName:"developers/json-rpc",slug:"/developers/json-rpc/json-rpc-transactional",permalink:"/developers/json-rpc/json-rpc-transactional",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/developers/json-rpc/json-rpc-transactional.md",tags:[],version:"current",lastUpdatedAt:1683036971,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{},sidebar:"developers",previous:{title:"Required Methods for Minimal Compliance",permalink:"/developers/json-rpc/minimal-compliance"},next:{title:"Informational JSON-RPC Methods",permalink:"/developers/json-rpc/json-rpc-informational"}},i={},d=[{value:"account_put_deploy",id:"account-put-deploy",level:2},{value:"<code>account_put_deploy_result</code>",id:"account_put_deploy_result",level:3}],u={toc:d},m="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"transactional"},"Transactional JSON-RPC Method"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"account-put-deploy"},"account_put_deploy"),(0,o.kt)("p",null,"This is the only means by which users can send their compiled Wasm (as part of a Deploy) to a node on a Casper network. The request takes in the ",(0,o.kt)("a",{parentName:"p",href:"/concepts/design/casper-design#execution-semantics-deploys"},"Deploy")," as a parameter, prior to sending it to a node on a network for execution."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/json-rpc/types_chain#deploy"},"deploy")),(0,o.kt)("td",{parentName:"tr",align:null},"Object"),(0,o.kt)("td",{parentName:"tr",align:null},"A Deploy consists of an item containing a smart contract along with the requester's signature(s).")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),": You can find a list of ",(0,o.kt)("a",{parentName:"p",href:"/operators/setup/joining#known-addresses"},"trusted peers")," in the network's configuration file, ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml"),". Here is an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/dev/resources/production/config-example.toml#L131"},"example config.toml"),". You may send deploys to one of the trusted nodes or use them to query other online nodes.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Example account_put_deploy request")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\n{\n  "id": 1,\n  "jsonrpc": "2.0",\n  "method": "account_put_deploy",\n  "params": [\n    {\n      "approvals": [\n        {\n          "signature": "014c1a89f92e29dd74fc648f741137d9caf4edba97c5f9799ce0c9aa6b0c9b58db368c64098603dbecef645774c05dff057cb1f91f2cf390bbacce78aa6f084007",\n          "signer": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c"\n        }\n      ],\n      "hash": "5c9b3b099c1378aa8e4a5f07f59ff1fcdc69a83179427c7e67ae0377d94d93fa",\n      "header": {\n        "account": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c",\n        "body_hash": "d53cf72d17278fd47d399013ca389c50d589352f1a12593c0b8e01872a641b50",\n        "chain_name": "casper-example",\n        "dependencies": [\n          "0101010101010101010101010101010101010101010101010101010101010101"\n        ],\n        "gas_price": 1,\n        "timestamp": "2020-11-17T00:39:24.072Z",\n        "ttl": "1h"\n      },\n      "payment": {\n        "StoredContractByName": {\n          "args": [\n            [\n              "amount",\n              {\n                "bytes": "e8030000",\n                "cl_type": "I32",\n                "parsed": 1000\n              }\n            ]\n          ],\n          "entry_point": "example-entry-point",\n          "name": "casper-example"\n        }\n      },\n      "session": {\n        "Transfer": {\n          "args": [\n            [\n              "amount",\n              {\n                "bytes": "e8030000",\n                "cl_type": "I32",\n                "parsed": 1000\n              }\n            ]\n          ]\n        }\n      }\n    }\n  ]\n}\n\n'))),(0,o.kt)("h3",{id:"account_put_deploy_result"},(0,o.kt)("inlineCode",{parentName:"h3"},"account_put_deploy_result")),(0,o.kt)("p",null,"The result contains the ",(0,o.kt)("a",{parentName:"p",href:"/developers/json-rpc/types_chain#deployhash"},"deploy_hash"),", which is the primary identifier of a Deploy within a Casper network."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"api_version"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"The RPC API version.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/json-rpc/types_chain#deployhash"},"deploy_hash")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"A hex-encoded hash of the Deploy as sent.")))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Example account_put_deploy result")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\n{\n  "id": 1,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.13",\n    "deploy_hash": "5c9b3b099c1378aa8e4a5f07f59ff1fcdc69a83179427c7e67ae0377d94d93fa"\n  }\n}\n\n'))))}f.isMDXComponent=!0}}]);