"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return b}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),b=i,f=p["".concat(l,".").concat(b)]||p[b]||u[b]||r;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7232:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var a=t(3117),i=t(102),r=(t(7294),t(3905)),o=["components"],s={},l="Bonding as a Validator",d={unversionedId:"operators/bonding",id:"operators/bonding",title:"Bonding as a Validator",description:"It is recommended that a bonding request be sent once the node has completed the synchronization process. In a Casper network, bonding takes place through the auction contract via the add_bid.wasm contract. The auction runs for a future era, every era. The chainspec.toml specifies the number of slots available, and the auction will take the top N slots and create the validator set for the future era.",source:"@site/source/docs/casper/operators/bonding.md",sourceDirName:"operators",slug:"/operators/bonding",permalink:"/operators/bonding",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/operators/bonding.md",tags:[],version:"current",lastUpdatedAt:1675351962,formattedLastUpdatedAt:"2/2/2023",frontMatter:{},sidebar:"operators",previous:{title:"Joining a Running Network",permalink:"/operators/joining"},next:{title:"Unbonding as a Validator",permalink:"/operators/unbonding"}},c={},u=[{value:"The Bonding Process",id:"bonding-process",level:2},{value:"Building the Contracts",id:"build-contracts",level:2},{value:"Example Bonding Request",id:"example-bonding-transaction",level:2},{value:"Contract Arguments",id:"contract-arguments",level:3},{value:"Example Request",id:"example-request",level:3},{value:"Example Response",id:"example-response",level:3},{value:"Bid Status",id:"check-the-status-of-the-bid-in-the-auction",level:2},{value:"A Losing Bid",id:"losing-bid",level:2},{value:"Withdrawing a Bid",id:"withdrawing-a-bid",level:2}],p={toc:u};function b(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bonding-as-a-validator"},"Bonding as a Validator"),(0,r.kt)("p",null,"It is recommended that a bonding request be sent once the node has completed the synchronization process. In a Casper network, bonding takes place through the auction contract via the ",(0,r.kt)("inlineCode",{parentName:"p"},"add_bid.wasm")," contract. The auction runs for a future era, every era. The ",(0,r.kt)("inlineCode",{parentName:"p"},"chainspec.toml")," specifies the number of slots available, and the auction will take the top N slots and create the validator set for the future era."),(0,r.kt)("p",null,"In the Testnet, era durations are approximately two hours. The entire process takes approximately 3 eras. Therefore, the time for bid submission to inclusion in the validator set is a minimum of six hours. Bonding requests (bids) are transactions like any other. Because they are generic transactions, they are more resistant to censorship."),(0,r.kt)("h2",{id:"bonding-process"},"The Bonding Process"),(0,r.kt)("p",null,"The most secure way to send a bonding transaction is to compile the contract and send the request to the network. Because the transaction authorizes the token to be locked into the auction contract, it is essential to compile the contract yourself. Here are the steps to take:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Clone the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/casper-network/casper-node"},(0,r.kt)("inlineCode",{parentName:"a"},"casper-node")," repository")),(0,r.kt)("li",{parentName:"ol"},"Install these prerequisites, which are also listed ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/casper-network/casper-node#pre-requisites-for-building"},"here"),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dapp-dev-guide/writing-contracts/getting-started/#installing-rust"},"Rust")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cgold.readthedocs.io/en/latest/first-step/installation.html"},"CMake")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pkg-config")," - On Ubuntu, use ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo apt-get install pkg-config")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"openssl")," - On Ubuntu, use ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo apt-get install openssl")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"libssl-dev")," - On Ubuntu, use ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo apt-get install libssl-dev"))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Install the ",(0,r.kt)("a",{parentName:"li",href:"/dapp-dev-guide/setup/#the-casper-command-line-client"},"Rust casper-client")," and fund the ",(0,r.kt)("a",{parentName:"li",href:"/operators/setup/#create-fund-keys"},"keys")," you will use for bonding"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#build-contracts"},"Build the contracts")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#example-bonding-transaction"},"Send a bonding request")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#check-the-status-of-the-bid-in-the-auction"},"Check the status of the auction")," to see if you have won a validator slot")),(0,r.kt)("h2",{id:"build-contracts"},"Building the Contracts"),(0,r.kt)("p",null,"Because bonding transactions are generic transactions, it is necessary to build the contract that submits a bid. Build the contracts in release mode:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd casper-node\nmake setup-rs\nmake build-client-contracts\n")),(0,r.kt)("p",null,"These commands build all the necessary contracts, including ",(0,r.kt)("inlineCode",{parentName:"p"},"add_bid.wasm")," for placing a bid."),(0,r.kt)("h2",{id:"example-bonding-transaction"},"Example Bonding Request"),(0,r.kt)("p",null,"The following example deploys a bonding request on the network:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper casper-client put-deploy \\\n--chain-name <CHAIN_NAME> \\\n--node-address http://<HOST:PORT> \\\n--secret-key /etc/casper/validator_keys/secret_key.pem \\\n--session-path $HOME/casper-node/target/wasm32-unknown-unknown/release/add_bid.wasm \\\n--payment-amount 3000000000 \\\n--session-arg=\"public_key:public_key='<PUBLIC_KEY_HEX>'\" \\\n--session-arg=\"amount:u512='<BID-AMOUNT>'\" \\\n--session-arg=\"delegation_rate:u8='<PERCENT_TO_KEEP_FROM_DELEGATORS>'\"\n")),(0,r.kt)("p",null,"Note the following command options above:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The chain name for Mainnet is ",(0,r.kt)("inlineCode",{parentName:"li"},"casper")," and for Testnet is ",(0,r.kt)("inlineCode",{parentName:"li"},"casper-test")),(0,r.kt)("li",{parentName:"ul"},"The default port for node address is 7777"),(0,r.kt)("li",{parentName:"ul"},"The session arguments need to be encased in double-quotes, with the parameter values in single quotes"),(0,r.kt)("li",{parentName:"ul"},"The payment amount is specified in motes, where 1 CSPR is 1,000,000,000 motes")),(0,r.kt)("h3",{id:"contract-arguments"},"Contract Arguments"),(0,r.kt)("p",null,"The add_bid contract accepts 3 arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"public_key"),": The hexadecimal public key of the account to bond. This must be the one paired with the secret key used in the ",(0,r.kt)("inlineCode",{parentName:"li"},"--secret-key")," argument"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"amount"),": This is the amount being bid. If the bid wins, this will be the validator's initial bonded amount"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"delegation_rate"),": The percentage of rewards that the validator retains from delegators that delegate their tokens to the node")),(0,r.kt)("h3",{id:"example-request"},"Example Request"),(0,r.kt)("p",null,"Here is an example request to bond as a validator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper casper-client put-deploy \\\n--chain-name casper-test \\\n--node-address http://65.21.235.219:7777 \\\n--secret-key /etc/casper/validator_keys/secret_key.pem \\\n--session-path $HOME/casper-node/target/wasm32-unknown-unknown/release/add_bid.wasm \\\n--payment-amount 3000000000 \\\n--session-arg=\"public_key:public_key='01da0e438afc74181beb2afae798e9e6851bdf897117a306eb32caafe46c1c0bc8'\" \\\n--session-arg=\"amount:u512='25000000000000'\" \\\n--session-arg=\"delegation_rate:u8='3'\"\n")),(0,r.kt)("h3",{id:"example-response"},"Example Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "id": -3351398263238778586,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.8",\n    "deploy_hash": "4754c3135d8f074a6aeab40007012d7b3c7b65d02cebfefd94e04dff16971fb5"\n  }\n}\n')),(0,r.kt)("h2",{id:"check-the-status-of-the-bid-in-the-auction"},"Bid Status"),(0,r.kt)("p",null,"Since this is a deploy like any other, perform ",(0,r.kt)("inlineCode",{parentName:"p"},"get-deploy")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"casper-client"),", to see the execution status."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-deploy --node-address http://<HOST:PORT> <DEPLOY_HASH>\n")),(0,r.kt)("p",null,"If the bid wins the auction, the public key and associated bonded amount will appear in the auction contract as part of the validator set for a future era. To determine if the bid was accepted, query the auction contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-auction-info --node-address http://<HOST:PORT>\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Example auction info response")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{\n"jsonrpc": "2.0",\n"result": {\n "bids": [\n   {\n     "bid": {\n       "bonding_purse": "uref-488a0bbc3c3729f5696965da7a3aeee83805392944e36157909da273255fdb85-007",\n       "delegation_rate": 0,\n       "delegators": [],\n       "release_era": null,\n       "reward": "93328432442428418861229954179737",\n       "staked_amount": "10000000000000000"\n     },\n     "public_key": "013f774a58f4d40bd9b6cce7e306e53646913860ef2a111d00f0fe7794010c4012"\n   },\n   {\n     "bid": {\n       "bonding_purse": "uref-14e128b099b0c3680100520226e6999b322989586cc22db0630db5ec1329f0a7-007",\n       "delegation_rate": 10,\n       "delegators": [],\n       "release_era": null,\n       "reward": "0",\n       "staked_amount": "9000000000000000"\n     },\n     "public_key": "01405133e73ef2946fe3a2d76a4c75d305a04ad6b969f3c4a8a0d27235eb260f87"\n   },\n   {\n     "bid": {\n       "bonding_purse": "uref-6c0bf8cee1c0749dd9766376910867a84b2e826eaf6c118fcb0224c7d8d229dd-007",\n       "delegation_rate": 10,\n       "delegators": [],\n       "release_era": null,\n       "reward": "266185120443441810685787",\n       "staked_amount": "100000000"\n     },\n     "public_key": "01524a5f3567d7b5ea17ca518c9d0320fb4a75a28a5eab58d06c755c388f20a19f"\n   },\n   {\n     "bid": {\n       "bonding_purse": "uref-3880b3daf95f962f57e6a4b1589564abf7deef58a1fb0753d1108316bba7b3d7-007",\n       "delegation_rate": 10,\n       "delegators": [],\n       "release_era": null,\n       "reward": "0",\n       "staked_amount": "9000000000000000"\n     },\n     "public_key": "01a6901408eda702a653805f50060bfe00d5e962747ee7133df64bd7bab50b4643"\n   },\n   {\n     "bid": {\n       "bonding_purse": "uref-5a777c9cd53456b49eecf25dcc13e12ddff4106175a69f8e24a7c9a4c135df0d-007",\n       "delegation_rate": 0,\n       "delegators": [],\n       "release_era": null,\n       "reward": "93328432442428418861229954179737",\n       "staked_amount": "10000000000000000"\n     },\n     "public_key": "01d62fc9b894218bfbe8eebcc4a28a1fc4cb3a5c6120bb0027207ba8214439929e"\n   }\n ],\n "block_height": 318,\n "era_validators": [\n   {\n     "era_id": 20,\n     "validator_weights": [\n       {\n         "public_key": "013f774a58f4d40bd9b6cce7e306e53646913860ef2a111d00f0fe7794010c4012",\n         "weight": "10000000000000000"\n       },\n       {\n         "public_key": "01405133e73ef2946fe3a2d76a4c75d305a04ad6b969f3c4a8a0d27235eb260f87",\n         "weight": "9000000000000000"\n       },\n       {\n         "public_key": "01524a5f3567d7b5ea17ca518c9d0320fb4a75a28a5eab58d06c755c388f20a19f",\n         "weight": "100000000"\n       },\n       {\n         "public_key": "01a6901408eda702a653805f50060bfe00d5e962747ee7133df64bd7bab50b4643",\n         "weight": "9000000000000000"\n       },\n       {\n         "public_key": "01d62fc9b894218bfbe8eebcc4a28a1fc4cb3a5c6120bb0027207ba8214439929e",\n         "weight": "10000000000000000"\n       }\n     ]\n   },\n   {\n     "era_id": 21,\n     "validator_weights": [\n       {\n         "public_key": "013f774a58f4d40bd9b6cce7e306e53646913860ef2a111d00f0fe7794010c4012",\n         "weight": "10000000000000000"\n       },\n       {\n         "public_key": "01405133e73ef2946fe3a2d76a4c75d305a04ad6b969f3c4a8a0d27235eb260f87",\n         "weight": "9000000000000000"\n       },\n       {\n         "public_key": "01524a5f3567d7b5ea17ca518c9d0320fb4a75a28a5eab58d06c755c388f20a19f",\n         "weight": "100000000"\n       },\n       {\n         "public_key": "01a6901408eda702a653805f50060bfe00d5e962747ee7133df64bd7bab50b4643",\n         "weight": "9000000000000000"\n       },\n       {\n         "public_key": "01d62fc9b894218bfbe8eebcc4a28a1fc4cb3a5c6120bb0027207ba8214439929e",\n         "weight": "10000000000000000"\n       }\n     ]\n   },\n   {\n     "era_id": 22,\n     "validator_weights": [\n       {\n         "public_key": "013f774a58f4d40bd9b6cce7e306e53646913860ef2a111d00f0fe7794010c4012",\n         "weight": "10000000000000000"\n       },\n       {\n         "public_key": "01405133e73ef2946fe3a2d76a4c75d305a04ad6b969f3c4a8a0d27235eb260f87",\n         "weight": "9000000000000000"\n       },\n       {\n         "public_key": "01524a5f3567d7b5ea17ca518c9d0320fb4a75a28a5eab58d06c755c388f20a19f",\n         "weight": "100000000"\n       },\n       {\n         "public_key": "01a6901408eda702a653805f50060bfe00d5e962747ee7133df64bd7bab50b4643",\n         "weight": "9000000000000000"\n       },\n       {\n         "public_key": "01d62fc9b894218bfbe8eebcc4a28a1fc4cb3a5c6120bb0027207ba8214439929e",\n         "weight": "10000000000000000"\n       }\n     ]\n   },\n   {\n     "era_id": 23,\n     "validator_weights": [\n       {\n         "public_key": "013f774a58f4d40bd9b6cce7e306e53646913860ef2a111d00f0fe7794010c4012",\n         "weight": "10000000000000000"\n       },\n       {\n         "public_key": "01405133e73ef2946fe3a2d76a4c75d305a04ad6b969f3c4a8a0d27235eb260f87",\n         "weight": "9000000000000000"\n       },\n       {\n         "public_key": "01524a5f3567d7b5ea17ca518c9d0320fb4a75a28a5eab58d06c755c388f20a19f",\n         "weight": "100000000"\n       },\n       {\n         "public_key": "01a6901408eda702a653805f50060bfe00d5e962747ee7133df64bd7bab50b4643",\n         "weight": "9000000000000000"\n       },\n       {\n         "public_key": "01d62fc9b894218bfbe8eebcc4a28a1fc4cb3a5c6120bb0027207ba8214439929e",\n         "weight": "10000000000000000"\n       }\n     ]\n   }\n ],\n "state_root_hash": "c16ba80ea200d786008f8100ea79f9cfeb8d7d5ee8b133eda5a50dcf1c7131e8"\n},\n"id": -3624528661787095850\n}\n'))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Note the ",(0,r.kt)("inlineCode",{parentName:"p"},"era_id")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"validator_weights")," in the response above. The current era is the one with the lowest ID in the ",(0,r.kt)("inlineCode",{parentName:"p"},"era_validators")," array. For a given ",(0,r.kt)("inlineCode",{parentName:"p"},"era_id"),", a set of validators is defined. If the public key associated with a bid appears in the ",(0,r.kt)("inlineCode",{parentName:"p"},"validator_weights")," structure for an era, then the account is bonded in that era."),(0,r.kt)("h2",{id:"losing-bid"},"A Losing Bid"),(0,r.kt)("p",null,"If a bid doesn't win a slot in the auction, it is too low. The resolution is to increase the bid amount. It is possible to submit additional bids, to increase the odds of winning a slot. It is also possible to encourage token holders to delegate stake to you for bonding."),(0,r.kt)("h2",{id:"withdrawing-a-bid"},"Withdrawing a Bid"),(0,r.kt)("p",null,"Follow the steps in ",(0,r.kt)("a",{parentName:"p",href:"/operators/unbonding"},"Unbonding")," to withdraw a bid."))}b.isMDXComponent=!0}}]);