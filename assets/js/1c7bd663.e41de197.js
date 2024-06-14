"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3549],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,f=d["".concat(o,".").concat(h)]||d[h]||u[h]||s;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1596:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),i=["components"],l={title:"URef Access Rights"},o="URef Access Rights and Security Considerations",c={unversionedId:"developers/dapps/uref-security",id:"developers/dapps/uref-security",title:"URef Access Rights",description:"Understanding Access Rights",source:"@site/source/docs/casper/developers/dapps/uref-security.md",sourceDirName:"developers/dapps",slug:"/developers/dapps/uref-security",permalink:"/developers/dapps/uref-security",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/developers/dapps/uref-security.md",tags:[],version:"current",lastUpdatedAt:1718371074,formattedLastUpdatedAt:"Jun 14, 2024",frontMatter:{title:"URef Access Rights"},sidebar:"developers",previous:{title:"Front-end in React",permalink:"/developers/dapps/template-frontend"},next:{title:"Signing Deploys",permalink:"/developers/dapps/signing-a-deploy"}},p={},d=[{value:"Understanding Access Rights",id:"understanding-access-rights",level:2},{value:"AccessRights and Purses",id:"accessrights-and-purses",level:2},{value:"Security Considerations for dApp Developers",id:"security-considerations-for-dapp-developers",level:2}],u={toc:d},h="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"uref-access-rights-and-security-considerations"},"URef Access Rights and Security Considerations"),(0,s.kt)("h2",{id:"understanding-access-rights"},"Understanding Access Rights"),(0,s.kt)("p",null,"An ",(0,s.kt)("a",{parentName:"p",href:"/concepts/design/casper-design/#uref-head"},"Unforgeable Reference")," or ",(0,s.kt)("strong",{parentName:"p"},"URef")," is a key type used for storage on a Casper network. They can store any value other than ",(0,s.kt)("inlineCode",{parentName:"p"},"Account")," and exist as a top-level entity. As such, no individual account may ",(0,s.kt)("em",{parentName:"p"},"own")," a URef, they can only hold the necessary ",(0,s.kt)("inlineCode",{parentName:"p"},"AccessRights")," to interact with a given URef."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/concepts/serialization-standard/#clvalue-uref"},(0,s.kt)("inlineCode",{parentName:"a"},"AccessRights"))," determine how an entity on a Casper network may interact with a URef. They appear as a single byte suffix after the concatenation of te URef's address. As an example, the following is an example of a URef with no associated access rights:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"uref-974019c976b5f26412ce486158d2431967af35d91387dae8cbcd43c20fce6452-000\n")),(0,s.kt)("p",null,"And this is the same URef with ",(0,s.kt)("inlineCode",{parentName:"p"},"READ")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"ADD")," access rights."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"uref-974019c976b5f26412ce486158d2431967af35d91387dae8cbcd43c20fce6452-005\n")),(0,s.kt)("p",null,"The following table outlines all possible ",(0,s.kt)("inlineCode",{parentName:"p"},"AccessRights")," settings:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Access Rights"),(0,s.kt)("th",{parentName:"tr",align:null},"Serialization"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"NONE")),(0,s.kt)("td",{parentName:"tr",align:null},"0")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"READ")),(0,s.kt)("td",{parentName:"tr",align:null},"1")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"WRITE")),(0,s.kt)("td",{parentName:"tr",align:null},"2")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"READ_WRITE")),(0,s.kt)("td",{parentName:"tr",align:null},"3")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"ADD")),(0,s.kt)("td",{parentName:"tr",align:null},"4")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"READ_ADD")),(0,s.kt)("td",{parentName:"tr",align:null},"5")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"ADD_WRITE")),(0,s.kt)("td",{parentName:"tr",align:null},"6")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"READ_ADD_WRITE")),(0,s.kt)("td",{parentName:"tr",align:null},"7")))),(0,s.kt)("admonition",{type:"warning"},(0,s.kt)("p",{parentName:"admonition"},"Any access rights granted alongside a passed URef are ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"irrevocable")),".")),(0,s.kt)("h2",{id:"accessrights-and-purses"},"AccessRights and Purses"),(0,s.kt)("p",null,"A ",(0,s.kt)("inlineCode",{parentName:"p"},"Purse")," is a unique type of ",(0,s.kt)("inlineCode",{parentName:"p"},"URef")," representing a token balance. Each ",(0,s.kt)("inlineCode",{parentName:"p"},"Account")," will have an associated URef that represents its main purse. Accounts and contracts may have additional purses."),(0,s.kt)("p",null,"For URefs that represent a purse, access rights determine the ability to read or change the associated balance of tokens. The following table outlines what each operation allows in the context of a purse:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Global State"),(0,s.kt)("th",{parentName:"tr",align:null},"Action Monetary Action"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Add"),(0,s.kt)("td",{parentName:"tr",align:null},"Deposit (i.e. transfer to)")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Write"),(0,s.kt)("td",{parentName:"tr",align:null},"Withdraw (i.e. transfer from)")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Read"),(0,s.kt)("td",{parentName:"tr",align:null},"Balance check")))),(0,s.kt)("h2",{id:"security-considerations-for-dapp-developers"},"Security Considerations for dApp Developers"),(0,s.kt)("p",null,"When developing a ",(0,s.kt)("a",{parentName:"p",href:"/developers/dapps/dapp/"},"dApp")," that interacts with tokens in any way, it will be necessary to work with various URef ",(0,s.kt)("inlineCode",{parentName:"p"},"AccessRights")," for associated purse URefs."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/resources/tutorials/advanced/transfer-token-to-contract/"},"This tutorial outlines our recommendations when transferring tokens to a contract.")),(0,s.kt)("p",null,"When passing a URef to another entity in any way, ensure that you are only passing the URef with the appropriate ",(0,s.kt)("inlineCode",{parentName:"p"},"AccessRights"),". The following example code shows the syntax for creating a URef with any given access rights combination. In this example, only the ",(0,s.kt)("inlineCode",{parentName:"p"},"new_uref")," should be passed to another entity."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// This example will create a version of the original URef with access rights stripped entirely.\nlet new_uref = uref.with_access_rights(AccessRights::NONE);\n// This example will create a version of the original URef with only READ access rights.\nlet new_uref = uref.with_access_rights(AccessRights::READ);\n// This example will create a version of the original URef with only WRITE access rights.\nlet new_uref = uref.with_access_rights(AccessRights::WRITE);\n// This example will create a version of the original URef with both READ and WRITE access rights.\nlet new_uref = uref.with_access_rights(AccessRights::READ_WRITE);\n// This example will create a version of the original URef with only ADD access rights.\nlet new_uref = uref.with_access_rights(AccessRights::ADD);\n// This example will create a version of the original URef with both READ and ADD access rights.\nlet new_uref = uref.with_access_rights(AccessRights::READ_ADD);\n// This example will create a version of the original URef with both ADD and WRITE access rights.\nlet new_uref = uref.with_access_rights(AccessRights::ADD_WRITE);\n// This example will create a version of the original URef with full access rights.\nlet new_uref = uref.with_access_rights(AccessRights::READ_ADD_WRITE);\n")))}f.isMDXComponent=!0}}]);