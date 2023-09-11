"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8669],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7248:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={title:"Overview"},s="Interacting with the Casper JSON-RPC API",l={unversionedId:"developers/json-rpc/index",id:"developers/json-rpc/index",title:"Overview",description:"Casper uses a custom JSON-RPC implementation known as casper-json-rpc that is compliant with the JSON-RPC 2.0 specification. If you are on this page, you are an advanced user wishing to interact directly with a Casper node's JSON-RPC API. You may use Postman or write code to interact with the Casper JSON-RPC API, which is fully compatible with the JSON-RPC 2.0 Specification.",source:"@site/source/docs/casper/developers/json-rpc/index.md",sourceDirName:"developers/json-rpc",slug:"/developers/json-rpc/",permalink:"/developers/json-rpc/",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/developers/json-rpc/index.md",tags:[],version:"current",lastUpdatedAt:1694445905,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{title:"Overview"},sidebar:"developers",previous:{title:"Best Practices for Casper Smart Contract Authors",permalink:"/developers/writing-onchain-code/best-practices"},next:{title:"Guidance for JSON-RPC SDK Compliance",permalink:"/developers/json-rpc/guidance"}},c={},d=[{value:"Table of Contents",id:"table-of-contents",level:2}],u={toc:d},m="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interacting-with-the-casper-json-rpc-api"},"Interacting with the Casper JSON-RPC API"),(0,o.kt)("p",null,"Casper uses a custom JSON-RPC implementation known as ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-json-rpc")," that is compliant with the ",(0,o.kt)("a",{parentName:"p",href:"https://www.jsonrpc.org/specification"},"JSON-RPC 2.0 specification"),". If you are on this page, you are an advanced user wishing to interact directly with a Casper node's JSON-RPC API. You may use ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/"},"Postman")," or write code to interact with the Casper JSON-RPC API, which is fully compatible with the JSON-RPC 2.0 Specification."),(0,o.kt)("p",null,"Casper nodes provide the RPC schema on port ",(0,o.kt)("inlineCode",{parentName:"p"},"8888"),", followed by ",(0,o.kt)("inlineCode",{parentName:"p"},"rpc-schema"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"<HOST:8888>/rpc-schema\n")),(0,o.kt)("p",null,"To see an example, navigate to a node's RPC schema using a browser."),(0,o.kt)("p",null,"The Casper client subcommand ",(0,o.kt)("inlineCode",{parentName:"p"},"list-rpcs")," provides all currently supported RPCs. Here is an example of running the Casper client to list RPCs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"casper-client list-rpcs --node-address <HOST:PORT>\n")),(0,o.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Page"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/json-rpc/guidance"},"Guidance for JSON-RPC SDK Compliance")),(0,o.kt)("td",{parentName:"tr",align:null},"Requirements for a compliant Casper SDK")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/json-rpc/minimal-compliance"},"Required JSON-RPC Methods for Minimal Compliance")),(0,o.kt)("td",{parentName:"tr",align:null},"Methods required for a minimally compliant Casper SDK")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/json-rpc/json-rpc-transactional"},"Transactional JSON-RPC Method")),(0,o.kt)("td",{parentName:"tr",align:null},"Methods allowing interaction with a Casper network")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/json-rpc/json-rpc-informational"},"Informational JSON-RPC Methods")),(0,o.kt)("td",{parentName:"tr",align:null},"Methods returning information about the network from a Casper node")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/json-rpc/json-rpc-pos"},"Proof-of-Stake JSON-RPC Methods")),(0,o.kt)("td",{parentName:"tr",align:null},"Methods pertaining to Proof-of-Stake functionality on a Casper network")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/json-rpc/types_chain"},"Types")),(0,o.kt)("td",{parentName:"tr",align:null},"Information on types used within JSON-RPC methods")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/developers/json-rpc/types_cl"},"CL Types")),(0,o.kt)("td",{parentName:"tr",align:null},"Information related to CL Types")))))}f.isMDXComponent=!0}}]);