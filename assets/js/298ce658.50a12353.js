"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2881],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,h=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return n?o.createElement(h,i(i({ref:t},l),{},{components:n})):o.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5519:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={},c="Estimating Gas Costs with Speculative Execution",p={unversionedId:"developers/dapps/speculative-exec",id:"developers/dapps/speculative-exec",title:"Estimating Gas Costs with Speculative Execution",description:"Version 1.5 of the Casper Node includes a new JSON RPC endpoint called speculativeexec. This endpoint allows developers to send a Deploy to a single node, which will execute the Deploy without committing the results to global state and, therefore, not incurring the associated costs. Observing the execution results of the Deploy gives a rough estimate of the potential cost for sending the Deploy without speculative execution.",source:"@site/source/docs/casper/developers/dapps/speculative-exec.md",sourceDirName:"developers/dapps",slug:"/developers/dapps/speculative-exec",permalink:"/developers/dapps/speculative-exec",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/developers/dapps/speculative-exec.md",tags:[],version:"current",lastUpdatedAt:1694445905,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{},sidebar:"developers",previous:{title:"Signing Deploys",permalink:"/developers/dapps/signing-a-deploy"},next:{title:"Local Network Setup",permalink:"/developers/dapps/setup-nctl"}},l={},u=[{value:"Sending a Speculative Execution Deploy using the Rust CLI Casper Client",id:"sending-a-speculative-execution-deploy-using-the-rust-cli-casper-client",level:2}],d={toc:u},f="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)(f,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"estimating-gas-costs-with-speculative-execution"},"Estimating Gas Costs with Speculative Execution"),(0,a.kt)("p",null,"Version 1.5 of the Casper Node includes a new JSON RPC endpoint called ",(0,a.kt)("a",{parentName:"p",href:"/developers/json-rpc/json-rpc-transactional#speculative_exec-speculative_exec"},(0,a.kt)("inlineCode",{parentName:"a"},"speculative_exec")),". This endpoint allows developers to send a ",(0,a.kt)("a",{parentName:"p",href:"/concepts/glossary/D#deploy-deploy"},"Deploy")," to a single node, which will execute the Deploy without committing the results to global state and, therefore, not incurring the associated costs. Observing the execution results of the Deploy gives a rough estimate of the potential cost for sending the Deploy without speculative execution."),(0,a.kt)("p",null,"In addition to the Deploy in question, ",(0,a.kt)("inlineCode",{parentName:"p"},"speculative_exec")," also accepts a ","[",(0,a.kt)("inlineCode",{parentName:"p"},"block_identifier"),"]"," for a specific block height or hash to speculate on. If you do not provide a block identifier, the Deploy will be executed on the most recent block."),(0,a.kt)("h2",{id:"sending-a-speculative-execution-deploy-using-the-rust-cli-casper-client"},"Sending a Speculative Execution Deploy using the Rust CLI Casper Client"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/developers/cli/sending-deploys"},"Rust CLI Casper client")," includes a ",(0,a.kt)("inlineCode",{parentName:"p"},"speculative-exec")," option that will flag a normal ",(0,a.kt)("inlineCode",{parentName:"p"},"put-deploy")," for execution but not commitment to global state. The following command shows an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\ncasper client put-deploy /\n--node-address <HOST:PORT> /\n--chain-name <CHAIN_NAME> /\n--secret-key <PATH> /\n--session-path <PATH>  /\n--payment-amount <PAYMENT_AMOUNT_IN_MOTES>\n--speculative-exec <BLOCK HEIGHT OR HASH>\n\n")),(0,a.kt)("p",null,"You should receive ",(0,a.kt)("inlineCode",{parentName:"p"},"execution_result"),"s that show a ",(0,a.kt)("inlineCode",{parentName:"p"},"cost"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'\n{\n  "jsonrpc": "2.0",\n  "id": -4571113357017152230,\n  "result": {\n    "api_version": "1.0.0",\n    "block_hash": "6ca035b08de092e7f5e8fff771b880c5b4d7463a8f7a9b108888aaad958e5b0f",\n    "execution_result": {\n      "Success": {\n        "effect": {\n          <Deploy effects removed for conciseness.>\n        },\n        "transfers": [],\n        "cost": "87300473670"\n      }\n    }\n  }\n}\n\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Cost estimates acquired through ",(0,a.kt)("inlineCode",{parentName:"p"},"speculative_exec")," may vary from the cost of sending the same Deploy to a Casper network. Speculative execution is a tool to help narrow down the potential cost of sending a Deploy, but many factors can cause the actual cost to vary.")))}h.isMDXComponent=!0}}]);