"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6423],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=p(r),k=a,m=f["".concat(l,".").concat(k)]||f[k]||c[k]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3223:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return f}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=r(4996),s=["components"],l={},p="Transferring Tokens using a Block Explorer",u={unversionedId:"users/token-transfer",id:"users/token-transfer",title:"Transferring Tokens using a Block Explorer",description:"You can transfer Casper tokens (CSPR) using any block explorer built to explore the Casper blockchain. The Wallet feature on these block explorers can be used to transfer tokens to another user's purse, delegate stake, or undelegate stake. In this section, we will discuss the steps to transfer CSPR tokens.",source:"@site/source/docs/casper/users/token-transfer.md",sourceDirName:"users",slug:"/users/token-transfer",permalink:"/users/token-transfer",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/users/token-transfer.md",tags:[],version:"current",lastUpdatedAt:1677606111,formattedLastUpdatedAt:"2/28/2023",frontMatter:{},sidebar:"users",previous:{title:"Delegating with Ledger Devices",permalink:"/users/staking-ledger"},next:{title:"Funding Mainnet Accounts from an Exchange",permalink:"/users/funding-from-exchanges"}},c={},f=[{value:"Transferring Tokens",id:"transferring-tokens",level:2}],k={toc:f};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"transferring-tokens-using-a-block-explorer"},"Transferring Tokens using a Block Explorer"),(0,o.kt)("p",null,"You can transfer Casper tokens (CSPR) using any ",(0,o.kt)("a",{parentName:"p",href:"/users/block-explorer"},"block explorer")," built to explore the Casper blockchain. The Wallet feature on these block explorers can be used to transfer tokens to another user's purse, delegate stake, or undelegate stake. In this section, we will discuss the steps to transfer CSPR tokens."),(0,o.kt)("h2",{id:"transferring-tokens"},"Transferring Tokens"),(0,o.kt)("p",null,"To transfer tokens, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Sign in to your account with the Signer. For detailed instructions, see the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cspr.community/docs/user-guides/SignerGuide.html"},"Signer Guide"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Wallet")," on the top menu bar and select ",(0,o.kt)("strong",{parentName:"p"},"Transfer CSPR")," from the drop-down menu.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the recipient\u2019s public key, the amount you wish to transfer, and an optional Transfer ID for reference. If you do not provide an ID, the system will auto-generate one.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Next")," to proceed. The following figure shows an example transfer of 50 CSPR."),(0,o.kt)("img",{src:(0,i.Z)("/image/workflow/CSPR-first-step.png"),width:"500"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"A confirmation window appears to verify the details entered. Click ",(0,o.kt)("strong",{parentName:"p"},"Confirm and transfer")," to proceed to the next step. In the following figure, you may observe the transaction details initiated in the previous step. The transaction fees is displayed in CSPR and USD."))),(0,o.kt)("img",{src:(0,i.Z)("/image/workflow/CSPR-second-step.png"),width:"500"}),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Sign the transaction by selecting the ",(0,o.kt)("strong",{parentName:"p"},"Sign with Casper Signer")," button to proceed to the next step. Here you can review the following important fields:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The Deploy hash, which uniquely identifies your transfer"),(0,o.kt)("li",{parentName:"ul"},"The Recipient public key of the person receiving your transfer"),(0,o.kt)("li",{parentName:"ul"},"The Recipient account hash used by the system to track the transaction"),(0,o.kt)("li",{parentName:"ul"},"The Transfer Amount containing the value of the transfer")))),(0,o.kt)("img",{src:(0,i.Z)("/image/workflow/CSPR-third-step.png"),width:"500"}),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Next, you will see a pop-up window with a Signature Request and all the various transaction details, including:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Signing key which approves the transaction"),(0,o.kt)("li",{parentName:"ul"},"Your public key"),(0,o.kt)("li",{parentName:"ul"},"Recipient's account hash"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Sign with Casper Signer")," at the bottom of the window to complete the transaction. You completed the transaction, and successfully transferred tokens."),(0,o.kt)("img",{src:(0,i.Z)("/image/workflow/transfer-confirm.png"),width:"500"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Next, view the CSPR balance in your account's main purse."))))}m.isMDXComponent=!0}}]);