"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3274],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=c(n),g=o,f=l["".concat(p,".").concat(g)]||l[g]||d[g]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[l]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2483:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"Upgrades"},p="Upgrading the Node",c={unversionedId:"operators/setup/upgrade",id:"operators/setup/upgrade",title:"Upgrades",description:"The chainspec.toml contains a section to indicate from which era the given casper-node version should start running.",source:"@site/source/docs/casper/operators/setup/upgrade.md",sourceDirName:"operators/setup",slug:"/operators/setup/upgrade",permalink:"/operators/setup/upgrade",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/operators/setup/upgrade.md",tags:[],version:"current",lastUpdatedAt:1718371074,formattedLastUpdatedAt:"Jun 14, 2024",frontMatter:{title:"Upgrades"},sidebar:"operators",previous:{title:"Open Files Limit",permalink:"/operators/setup/open-files"},next:{title:"Join a Network",permalink:"/operators/setup/joining"}},u={},l=[{value:"Upgrading Protocol Versions",id:"upgrading-protocol-versions",level:2},{value:"Upgrade Staging Instructions",id:"upgrade-staging-instructions",level:3},{value:"Verifying Successful Staging",id:"verifying-successful-staging",level:3}],d={toc:l},g="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(g,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"upgrading-the-node"},"Upgrading the Node"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/concepts/glossary/C#chainspec"},(0,a.kt)("inlineCode",{parentName:"a"},"chainspec.toml"))," contains a section to indicate from which era the given ",(0,a.kt)("inlineCode",{parentName:"p"},"casper-node")," version should start running."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[protocol]\n# This protocol version becomes active at the start of this era.\nactivation_point = 100\n")),(0,a.kt)("p",null,"At every block finalization, the ",(0,a.kt)("inlineCode",{parentName:"p"},"casper-node")," looks for newly configured versions. When a new version is configured, the running node will look at future era_id in the ",(0,a.kt)("inlineCode",{parentName:"p"},"chainspec.toml")," file. This will be the era before where the current casper-node will cleanly shut down."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"casper-node-launcher")," will detect a clean exit 0 condition and start the next version of the ",(0,a.kt)("inlineCode",{parentName:"p"},"casper-node"),"."),(0,a.kt)("h2",{id:"upgrading-protocol-versions"},"Upgrading Protocol Versions"),(0,a.kt)("p",null,"All Casper Mainnet participants are requested to stage the upgrade of their nodes to a new version of ",(0,a.kt)("inlineCode",{parentName:"p"},"casper-node")," immediately. Staging an upgrade is a process in which you tell your node to download the upgrade files and prepare them so that they can automatically be applied at the pre-defined activation point."),(0,a.kt)("p",null,"Do not restart the node, only run the commands provided. The upgrade will automatically occur at the activation point."),(0,a.kt)("h3",{id:"upgrade-staging-instructions"},"Upgrade Staging Instructions"),(0,a.kt)("p",null,"The process to upgrade your node is very straightforward. Log in to your node, and execute the following command on Mainnet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper /etc/casper/node_util.py stage_protocols casper.conf\n")),(0,a.kt)("p",null,"On Testnet, use ",(0,a.kt)("inlineCode",{parentName:"p"},"casper-test.conf"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper /etc/casper/node_util.py stage_protocols casper-test.conf\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": To only view the list of staged and unstaged protocols, use this command: ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo -u casper /etc/casper/node_util.py check_protocols casper.conf")),(0,a.kt)("h3",{id:"verifying-successful-staging"},"Verifying Successful Staging"),(0,a.kt)("p",null,"After you have successfully executed the staging commands, wait a few minutes for a new block to be issued before checking that your node is correctly staged with the upgrade. After a few minutes, take a look at your status end-point, as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s http://127.0.0.1:8888/status | jq .next_upgrade\n")),(0,a.kt)("p",null,"You should expect this output if properly staged, prior to upgrading:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -s localhost:8888/status | jq .next_upgrade\n{\n  "activation_point": 4968,\n  "protocol_version": "1.4.6"\n}\n')),(0,a.kt)("p",null,"If you see ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," after waiting for a few minutes, then your upgrade staging was not executed successfully."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": The protocol version will change as per the next upgrade available."))}f.isMDXComponent=!0}}]);