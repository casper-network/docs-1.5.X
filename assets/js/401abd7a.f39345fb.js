"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6661],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,k=s["".concat(d,".").concat(m)]||s[m]||c[m]||l;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},479:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=["components"],i={},d="Casper JSON-RPC Error Codes",p={unversionedId:"developers/json-rpc/errors",id:"developers/json-rpc/errors",title:"Casper JSON-RPC Error Codes",description:"The following document expands on custom error codes provided by casper-json-rpc crate.",source:"@site/source/docs/casper/developers/json-rpc/errors.md",sourceDirName:"developers/json-rpc",slug:"/developers/json-rpc/errors",permalink:"/developers/json-rpc/errors",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/developers/json-rpc/errors.md",tags:[],version:"current",lastUpdatedAt:1707229568,formattedLastUpdatedAt:"Feb 6, 2024",frontMatter:{}},u={},s=[{value:"Error Codes",id:"codes",level:2},{value:"Invalid <code>Params</code>",id:"invalid-params",level:2}],c={toc:s},m="wrapper";function k(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"casper-json-rpc-error-codes"},"Casper JSON-RPC Error Codes"),(0,l.kt)("p",null,"The following document expands on custom error codes provided by ",(0,l.kt)("inlineCode",{parentName:"p"},"casper-json-rpc")," crate."),(0,l.kt)("h2",{id:"codes"},"Error Codes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Code"),(0,l.kt)("th",{parentName:"tr",align:null},"Error"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"NoSuchDeploy"),(0,l.kt)("td",{parentName:"tr",align:null},"The requested Deploy was not found.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-2"),(0,l.kt)("td",{parentName:"tr",align:null},"NoSuchBlock"),(0,l.kt)("td",{parentName:"tr",align:null},"The requested Block was not found.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-3"),(0,l.kt)("td",{parentName:"tr",align:null},"FailedToParseQueryKey"),(0,l.kt)("td",{parentName:"tr",align:null},"Parsing the Key from a query failed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-4"),(0,l.kt)("td",{parentName:"tr",align:null},"QueryFailed"),(0,l.kt)("td",{parentName:"tr",align:null},"The query failed to find a result.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-5"),(0,l.kt)("td",{parentName:"tr",align:null},"QueryFailedToExecute"),(0,l.kt)("td",{parentName:"tr",align:null},"Executing the query failed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-6"),(0,l.kt)("td",{parentName:"tr",align:null},"FailedToParseGetBalanceURef"),(0,l.kt)("td",{parentName:"tr",align:null},"Parsing the URef while getting a balance failed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-7"),(0,l.kt)("td",{parentName:"tr",align:null},"FailedToGetBalance"),(0,l.kt)("td",{parentName:"tr",align:null},"Failed to get the requested balance.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-8"),(0,l.kt)("td",{parentName:"tr",align:null},"GetBalanceFailedToExecute"),(0,l.kt)("td",{parentName:"tr",align:null},"Executing the query to retrieve the balance failed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-9"),(0,l.kt)("td",{parentName:"tr",align:null},"InvalidDeploy"),(0,l.kt)("td",{parentName:"tr",align:null},"The given Deploy cannot be executed as it is invalid.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-10"),(0,l.kt)("td",{parentName:"tr",align:null},"NoSuchAccount"),(0,l.kt)("td",{parentName:"tr",align:null},"The given account was not found.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-11"),(0,l.kt)("td",{parentName:"tr",align:null},"FailedToGetDictionaryURef"),(0,l.kt)("td",{parentName:"tr",align:null},"Failed to get the requested dictionary URef.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-12"),(0,l.kt)("td",{parentName:"tr",align:null},"FailedToGetTrie"),(0,l.kt)("td",{parentName:"tr",align:null},"Failed to get the requested dictionary trie.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-13"),(0,l.kt)("td",{parentName:"tr",align:null},"NoSuchStateRoot"),(0,l.kt)("td",{parentName:"tr",align:null},"The requested state root hash was not found.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-32600"),(0,l.kt)("td",{parentName:"tr",align:null},"InvalidRequest"),(0,l.kt)("td",{parentName:"tr",align:null},"The JSON sent is not a valid Request object.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-32601"),(0,l.kt)("td",{parentName:"tr",align:null},"MethodNotFound"),(0,l.kt)("td",{parentName:"tr",align:null},"The method does not exist or is not available.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-32602"),(0,l.kt)("td",{parentName:"tr",align:null},"InvalidParams"),(0,l.kt)("td",{parentName:"tr",align:null},"Invalid method parameter(s)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-32603"),(0,l.kt)("td",{parentName:"tr",align:null},"InternalError"),(0,l.kt)("td",{parentName:"tr",align:null},"Internal JSON-RPC error.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-32700"),(0,l.kt)("td",{parentName:"tr",align:null},"ParseError"),(0,l.kt)("td",{parentName:"tr",align:null},"Invalid JSON was received by the server.")))),(0,l.kt)("h2",{id:"invalid-params"},"Invalid ",(0,l.kt)("inlineCode",{parentName:"h2"},"Params")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"casper-json-rpc")," no longer ignores invalid ",(0,l.kt)("inlineCode",{parentName:"p"},"params")," fields. ",(0,l.kt)("inlineCode",{parentName:"p"},"Params")," fields to be omitted should be an empty Array '[]', an empty Object '{}' or absent."),(0,l.kt)("p",null,"Failing to adhere to this will result in an ",(0,l.kt)("inlineCode",{parentName:"p"},"InvalidParams")," error."))}k.isMDXComponent=!0}}]);