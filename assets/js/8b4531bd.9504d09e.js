"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1925],{3905:function(e,t,r){r.d(t,{Zo:function(){return g},kt:function(){return k}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},g=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),d=s(r),u=i,k=d["".concat(c,".").concat(u)]||d[u]||p[u]||a;return r?n.createElement(k,l(l({ref:t},g),{},{components:r})):n.createElement(k,l({ref:t},g))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8142:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return g},toc:function(){return p}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),l=r(4996),o=["components"],c={title:"Ledger and Ledger Live"},s="Using Ledger and Ledger Live",g={unversionedId:"users/ledger/ledger-live",id:"users/ledger/ledger-live",title:"Ledger and Ledger Live",description:"This guide will help you connect accounts from the Ledger device to the Ledger Live application to send and receive CSPR tokens.",source:"@site/source/docs/casper/users/ledger/ledger-live.md",sourceDirName:"users/ledger",slug:"/users/ledger/ledger-live",permalink:"/users/ledger/ledger-live",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/users/ledger/ledger-live.md",tags:[],version:"current",lastUpdatedAt:1718371074,formattedLastUpdatedAt:"Jun 14, 2024",frontMatter:{title:"Ledger and Ledger Live"},sidebar:"users",previous:{title:"Set up Ledger",permalink:"/workflow/ledger-setup/"},next:{title:"Ledger and CSPR.live",permalink:"/users/ledger/ledger-cspr-live"}},d={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Connecting to Ledger Live",id:"connect-ledge-live",level:2},{value:"Receiving Tokens",id:"receive-tokens",level:2},{value:"Sending Tokens",id:"send-tokens",level:2}],u={toc:p},k="wrapper";function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)(k,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-ledger-and-ledger-live"},"Using Ledger and Ledger Live"),(0,a.kt)("p",null,"This guide will help you connect accounts from the Ledger device to the ",(0,a.kt)("a",{parentName:"p",href:"https://www.ledger.com/ledger-live"},"Ledger Live")," application to send and receive CSPR tokens."),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"From Ledger Live version 2.73.1, Casper accounts can be added from the Ledger hardware wallet to Ledger Live.")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Configure your Ledger and the Ledger Live application as described in the ",(0,a.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/4404389503889?docs=true"},"Getting Started with Ledger Live")," article."),(0,a.kt)("li",{parentName:"ol"},"Install the Casper app as described ",(0,a.kt)("a",{parentName:"li",href:"/workflow/ledger-setup/"},"here"),".")),(0,a.kt)("h2",{id:"connect-ledge-live"},"Connecting to Ledger Live"),(0,a.kt)("p",null,"This section describes using the Ledger device with the ",(0,a.kt)("a",{parentName:"p",href:"https://www.ledger.com/ledger-live"},"Ledger Live")," application and your Casper accounts."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Connect the Ledger device to your computer and unlock it by entering your device PIN.")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/0-connect.png"),alt:"Connect the Ledger to your computer",width:"800"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Allow Ledger Manager to connect by clicking the two buttons on the Ledger device.")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/1-unlock.png"),alt:"Unlock the Ledger",width:"800"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Ledger Live will verify your Ledger device and display the following confirmation:")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/2-confirmation.png"),alt:"Confirmation that the Ledger is genuine",width:"800"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"My Ledger")," in the left-side navigation bar, and search for ",(0,a.kt)("em",{parentName:"li"},"Casper")," or ",(0,a.kt)("em",{parentName:"li"},"CSPR")," in the ",(0,a.kt)("strong",{parentName:"li"},"App catalog"),".")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/3-app-cspr.png"),alt:"Confirmation that the Ledger is genuine",width:"800"})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"To import a Casper account from the Ledger device into the Ledger Live application, click on the ",(0,a.kt)("strong",{parentName:"li"},"Add account")," link.")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/4-add-account.png"),alt:"Click the Add account link",width:"800"})),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Open the Casper app on your Ledger device.")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/5-add-account.png"),alt:"Open the Casper app",width:"400"})),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Ledger Live will import the first account listed on your Ledger device. Choose a name for the account.")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/6-add-account.png"),alt:"Name the account",width:"400"})),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"After synchronizing the account, Ledger Live will confirm that the account was successfully added.")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/7-add-account.png"),alt:"Synchronizing the account",width:"400"})),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/8-add-account.png"),alt:"Confirmation that the account was added",width:"400"})),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},"Click on the account summary, to view more details.")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/9-account-summary.png"),alt:"Account summary",width:"800"})),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/10-account-details.png"),alt:"Account details",width:"800"})),(0,a.kt)("ol",{start:10},(0,a.kt)("li",{parentName:"ol"},"To add another account, open the ",(0,a.kt)("strong",{parentName:"li"},"Account")," option in the left-side navigation bar. Then, click on the ",(0,a.kt)("strong",{parentName:"li"},"Add account")," button.")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/11-second-account.png"),alt:"Add a second account",width:"800"})),(0,a.kt)("h2",{id:"receive-tokens"},"Receiving Tokens"),(0,a.kt)("p",null,"To receive tokens, you need to provide the sender with your account's public key."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Casper accounts only support CSPR tokens. Sending other tokens to a Casper account may result in the permanent loss of funds.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("strong",{parentName:"li"},"Receive")," option in the left-side navigation bar.")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/12-receive.png"),alt:"Click on Receive",width:"400"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Choose an account from the drop-down list.")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/13-receive.png"),alt:"Choose an account",width:"400"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Copy the address displayed, or use the corresponding QR code.")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/14-receive.png"),alt:"Choose an account",width:"400"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Verify that the address displayed in Ledger Live matches the address on your Ledger screen. If it does, click ",(0,a.kt)("strong",{parentName:"li"},"APPROVE"),".")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/15-receive.png"),alt:"Verify address part 1",width:"400"})),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/16-receive.png"),alt:"Verify address part 2",width:"400"})),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/17-receive.png"),alt:"Click APPROVE",width:"400"})),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/18-receive.png"),alt:"Confirmation displayed",width:"400"})),(0,a.kt)("h2",{id:"send-tokens"},"Sending Tokens"),(0,a.kt)("p",null,"Ledger Live supports sending CSPR tokens from one Casper account to another."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Start by clicking on the ",(0,a.kt)("strong",{parentName:"li"},"Send")," option in the left-side navigation bar. Choose the account to debit:")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/19-send.png"),alt:"Choose the account to debit",width:"400"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Enter the recipient's address and click ",(0,a.kt)("strong",{parentName:"li"},"Continue"),".")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/20-send.png"),alt:"Enter recipient",width:"400"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Enter the amount and an optional transfer ID. Click ",(0,a.kt)("strong",{parentName:"li"},"Continue"),".")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/21-send.png"),alt:"Enter amount and transfer ID",width:"400"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Review the summary, and if everything is correct, click ",(0,a.kt)("strong",{parentName:"li"},"Continue"),". Otherwise, click the ",(0,a.kt)("strong",{parentName:"li"},"Back")," link in the top-left corner.")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/22-send.png"),alt:"Review the transfer",width:"400"})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Your Ledger hardware wallet will present you with the transfer details. Verify the transaction hash, chain ID, source ",(0,a.kt)("strong",{parentName:"li"},"account"),", fee, target, and amount. Meanwhile, Ledger Live will display this message:")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/23-send.png"),alt:"Review the transaction in the Ledger",width:"400"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Verify the transaction on your Ledger device")),(0,a.kt)("p",null,"Press the right button on your Ledger Device to review the transaction details until you see ",(0,a.kt)("strong",{parentName:"p"},'"APPROVE"'),"."),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Review the ",(0,a.kt)("strong",{parentName:"li"},"Txn hash"),".")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/3-txn-1.jpg"),alt:"3-txn-1",width:"400"})),(0,a.kt)("p",null,"The Txn hash value continues on a second screen."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/4-txn-2.jpg"),alt:"4-txn-2",width:"400"})),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"The next screen displays the transaction ",(0,a.kt)("strong",{parentName:"li"},"Type"),", which will be ",(0,a.kt)("strong",{parentName:"li"},"Token transfer"),".")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/5-type.jpg"),alt:"5-type",width:"400"})),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"Verify the ",(0,a.kt)("strong",{parentName:"li"},"chain ID"),", which for Mainnet should be ",(0,a.kt)("strong",{parentName:"li"},"casper"),".")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/7-chain.jpg"),alt:"7-chain",width:"400"})),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},"Verify the ",(0,a.kt)("strong",{parentName:"li"},"Account")," initiating the token transfer.")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/8-account-1.jpg"),alt:"8-account-1",width:"400"})),(0,a.kt)("p",null,"The Account value continues on a second screen."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/9-account-2.jpg"),alt:"9-account-2",width:"400"})),(0,a.kt)("ol",{start:10},(0,a.kt)("li",{parentName:"ol"},"Verify the ",(0,a.kt)("strong",{parentName:"li"},"Fee"),". For CSPR token transfers, that value should be constant and equal to 100,000,000 motes = 0.1 CSPR.")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/10-fee.jpg"),alt:"10-fee",width:"400"})),(0,a.kt)("ol",{start:11},(0,a.kt)("li",{parentName:"ol"},"Verify the ",(0,a.kt)("strong",{parentName:"li"},"Target"),", which is the recipient's public key.")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/11-target-1.jpg"),alt:"11-target-1",width:"400"})),(0,a.kt)("p",null,"The Target value continues on a second screen."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/12-target-2.jpg"),alt:"12-target-2",width:"400"})),(0,a.kt)("ol",{start:12},(0,a.kt)("li",{parentName:"ol"},"Verify the ",(0,a.kt)("strong",{parentName:"li"},"Amount")," you want to transfer.")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/13-amount.jpg"),alt:"13-amount",width:"400"})),(0,a.kt)("ol",{start:13},(0,a.kt)("li",{parentName:"ol"},"If you want to approve the transaction, click both buttons on the Ledger device while on the ",(0,a.kt)("strong",{parentName:"li"},"APPROVE")," screen.")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/15-approve.jpg"),alt:"15-approve",width:"400"})),(0,a.kt)("ol",{start:14},(0,a.kt)("li",{parentName:"ol"},"After approving the transaction with your Ledger hardware wallet, Ledger Live will display the following windows:")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/24-send.png"),alt:"Broadcasting transaction",width:"400"})),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/25-send.png"),alt:"Transaction sent",width:"400"})),(0,a.kt)("ol",{start:15},(0,a.kt)("li",{parentName:"ol"},"To view the transaction details, click on the ",(0,a.kt)("strong",{parentName:"li"},"View details")," button. The following screen will appear:")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/26-send.png"),alt:"Transaction details",width:"400"})),(0,a.kt)("ol",{start:16},(0,a.kt)("li",{parentName:"ol"},"You can view the transaction in the CSPR.live block explorer by clicking on the ",(0,a.kt)("strong",{parentName:"li"},"View in explorer")," link.")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/27-send.png"),alt:"Explorer showing transaction",width:"800"})))}m.isMDXComponent=!0}}]);