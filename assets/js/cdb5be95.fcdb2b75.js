"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[618],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),h=a,m=f["".concat(c,".").concat(h)]||f[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4443:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return f}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=n(4996),s=["components"],c={},l="Funding Mainnet Accounts from an Exchange",u={unversionedId:"workflow/funding-from-exchanges",id:"workflow/funding-from-exchanges",title:"Funding Mainnet Accounts from an Exchange",description:"To send CSPR tokens from an exchange to a Mainnet account, you need the Mainnet account's public key. Then, you can set up a withdrawal request from the exchange using this public key. The transfer will take a few minutes.",source:"@site/source/docs/casper/workflow/funding-from-exchanges.md",sourceDirName:"workflow",slug:"/workflow/funding-from-exchanges",permalink:"/workflow/funding-from-exchanges",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/workflow/funding-from-exchanges.md",tags:[],version:"current",lastUpdatedAt:1675351962,formattedLastUpdatedAt:"2/2/2023",frontMatter:{},sidebar:"workflow",previous:{title:"Transferring Tokens using a Block Explorer",permalink:"/workflow/token-transfer"},next:{title:"Funding Testnet Accounts",permalink:"/workflow/testnet-faucet"}},p={},f=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Transfers from Coinlist to Casper Mainnet",id:"transfers-from-coinlist-to-casper-mainnet",level:2}],h={toc:f};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"funding-mainnet-accounts-from-an-exchange"},"Funding Mainnet Accounts from an Exchange"),(0,o.kt)("p",null,"To send CSPR tokens from an exchange to a Mainnet account, you need the ",(0,o.kt)("strong",{parentName:"p"},"Mainnet account's public key"),". Then, you can set up a withdrawal request from the exchange using this public key. The transfer will take a few minutes."),(0,o.kt)("p",null,"This guide demonstrates a withdrawal from ",(0,o.kt)("a",{parentName:"p",href:"https://coinlist.co/"},"Coinlist")," to the Casper Mainnet using the ",(0,o.kt)("a",{parentName:"p",href:"https://cspr.live/"},"cspr.live")," block explorer. You need to contact the exchange for instructions if you are working with a different exchange."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before starting, copy the public key where you wish to transfer funds. The screenshot below shows the account page on ",(0,o.kt)("a",{parentName:"p",href:"https://cspr.live/"},"https://cspr.live/")," and the field you need to specify in the withdrawal request from Coinlist."),(0,o.kt)("img",{class:"align-center",src:(0,i.Z)("/image/tutorials/exchanges/1.account-public-key.png"),alt:"Account public key from CSPR.live"}),(0,o.kt)("h2",{id:"transfers-from-coinlist-to-casper-mainnet"},"Transfers from Coinlist to Casper Mainnet"),(0,o.kt)("p",null,"Try these steps with a small amount of CSPR first. After one successful transfer, you will be more comfortable transferring larger amounts."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log into your ",(0,o.kt)("a",{parentName:"li",href:"https://coinlist.co/"},"https://coinlist.co/")," account."),(0,o.kt)("li",{parentName:"ol"},'Go to the "Wallet" tab.')),(0,o.kt)("img",{class:"align-center",src:(0,i.Z)("/image/tutorials/exchanges/2.coinlist-wallet.png"),alt:"Coinlist Wallet tab",width:"200"}),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},'Click on the "CSPR" section.')),(0,o.kt)("img",{class:"align-center",src:(0,i.Z)("/image/tutorials/exchanges/3.cspr-section-coinlist.png"),alt:"CSPR on Coinlist",width:"200"}),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},'Click on the "Withdraw" button.')),(0,o.kt)("img",{class:"align-center",src:(0,i.Z)("/image/tutorials/exchanges/4.withdraw-coinlist.png"),alt:"Withdraw on Coinlist"}),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},'Enter the public key of the Mainnet account in the "Recipient Address" field of the withdrawal request.')),(0,o.kt)("img",{class:"align-center",src:(0,i.Z)("/image/tutorials/exchanges/5.withdraw-fields-coinlist.png"),alt:"Withdrawal fields on Coinlist",width:"400"}),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Enter 0 in the "Transfer ID" field or another value that is meaningful to you. ',(0,o.kt)("strong",{parentName:"p"},"You MUST enter a value, or the transfer will fail!"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the CSPR amount you wish to transfer.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click "Review".')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Submit the transfer request. Wait approximately 5 minutes, and then go to the ",(0,o.kt)("a",{parentName:"p",href:"https://cspr.live/"},"https://cspr.live/"),' site to verify your account details. On the account page, you should see that the "Liquid Account Balance" reflects the amount you have transferred.'))))}m.isMDXComponent=!0}}]);