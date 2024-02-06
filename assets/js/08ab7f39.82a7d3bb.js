"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5614],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},k=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),k=r,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||i;return t?o.createElement(m,a(a({ref:n},c),{},{components:t})):o.createElement(m,a({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=k;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}k.displayName="MDXCreateElement"},2474:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),a=["components"],l={title:"Staging Files"},s="Staging Files for a New Network",p={unversionedId:"operators/setup-network/staging-files-for-new-network",id:"operators/setup-network/staging-files-for-new-network",title:"Staging Files",description:"Staging files is not needed for already established running networks.",source:"@site/source/docs/casper/operators/setup-network/staging-files-for-new-network.md",sourceDirName:"operators/setup-network",slug:"/operators/setup-network/staging-files-for-new-network",permalink:"/operators/setup-network/staging-files-for-new-network",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/operators/setup-network/staging-files-for-new-network.md",tags:[],version:"current",lastUpdatedAt:1707229568,formattedLastUpdatedAt:"Feb 6, 2024",frontMatter:{title:"Staging Files"},sidebar:"operators",previous:{title:"Private Network Setup",permalink:"/operators/setup-network/create-private"},next:{title:"Node Maintenance",permalink:"/operators/maintenance/"}},c={},d=[{value:"Hosting Server",id:"hosting-server",level:2},{value:"More on <code>protocol_versions</code>",id:"more-on-protocol_versions",level:3},{value:"Protocol Version",id:"protocol-version",level:2},{value:"Network Configuration File",id:"network-configuration-file",level:2},{value:"Setup Configuration Files",id:"setup-configuration-files",level:2},{value:"chainspec.toml",id:"chainspectoml",level:3},{value:"config-example.toml",id:"config-exampletoml",level:3},{value:"Staging a Protocol Version",id:"staging-a-protocol-version",level:2}],u={toc:d},k="wrapper";function m(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)(k,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"staging-files-for-a-new-network"},"Staging Files for a New Network"),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("p",{parentName:"admonition"},"Staging files is not needed for already established running networks."),(0,i.kt)("p",{parentName:"admonition"},"Only use these instructions if you are creating a new Casper network and hosting protocol files for this network.")),(0,i.kt)("h2",{id:"hosting-server"},"Hosting Server"),(0,i.kt)("p",null,"Files for staging protocol versions are hosted on a typical HTTP(S) server."),(0,i.kt)("p",null,"Scripts included with the ",(0,i.kt)("inlineCode",{parentName:"p"},"casper-node-launcher")," have network configurations for Mainnet and Testnet. These scripts point to the server hosting files and network name."),(0,i.kt)("p",null,"Since a given server can be used for multiple networks, a network named directory is used to hold files for that network."),(0,i.kt)("p",null,"This is a description of Mainnet protocol version hosting (with network name: ",(0,i.kt)("inlineCode",{parentName:"p"},"casper"),")."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"genesis.casperlab.io")," is the web server URL with the following directory structure:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"casper"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"protocol_versions")," - File listing active protocol versions so scripts know what directories to use"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1_0_0")," - Genesis protocol version",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config.tar.gz")," - Configuration files to be expanded into ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/casper/1_0_0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bin.tar.gz")," - Binary files to be expanded into ",(0,i.kt)("inlineCode",{parentName:"li"},"/var/lib/casper/bin/1_0_0")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1_1_0")," - First upgrade",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config.tar.gz")," - Configuration files to be expanded into ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/casper/1_1_0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bin.tar.gz")," - Binary files to be expanded into ",(0,i.kt)("inlineCode",{parentName:"li"},"/var/lib/casper/bin/1_1_0")))),(0,i.kt)("li",{parentName:"ul"},"... (skipping many other protocol versions)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1_4_6")," - A later upgrade",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config.tar.gz")," - Configuration files to be expanded into ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/casper/1_4_6")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bin.tar.gz")," - Binary files to be expanded into ",(0,i.kt)("inlineCode",{parentName:"li"},"/var/lib/casper/bin/1_4_6"))))))),(0,i.kt)("h3",{id:"more-on-protocol_versions"},"More on ",(0,i.kt)("inlineCode",{parentName:"h3"},"protocol_versions")),(0,i.kt)("p",null,"At the root of the hosting server directory for a given network, a ",(0,i.kt)("inlineCode",{parentName:"p"},"protocol_versions")," file exists. This holds the valid protocol versions for a network."),(0,i.kt)("p",null,"We can look at this manually on Mainnet using ",(0,i.kt)("em",{parentName:"p"},"curl"),". As of writing this, ",(0,i.kt)("inlineCode",{parentName:"p"},"1.4.6")," is the latest version and the contents of this file will change."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ curl -s genesis.casperlabs.io/casper/protocol_versions\n1_0_0\n1_1_0\n1_1_2\n1_2_0\n1_2_1\n1_3_2\n1_3_4\n1_4_1\n1_4_3\n1_4_4\n1_4_5\n1_4_6\n\n")),(0,i.kt)("p",null,"We should find ",(0,i.kt)("inlineCode",{parentName:"p"},"bin.tar.gz")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"config.tar.gz")," in those directories under ",(0,i.kt)("inlineCode",{parentName:"p"},"casper"),"."),(0,i.kt)("h2",{id:"protocol-version"},"Protocol Version"),(0,i.kt)("p",null,"The protocol version of a network is not related to the ",(0,i.kt)("inlineCode",{parentName:"p"},"casper-node")," version. In Mainnet, these have often been the same. However, with a new network, you would use the latest ",(0,i.kt)("inlineCode",{parentName:"p"},"casper-node")," version for your ",(0,i.kt)("inlineCode",{parentName:"p"},"1.0.0")," protocol."),(0,i.kt)("h2",{id:"network-configuration-file"},"Network Configuration File"),(0,i.kt)("p",null,"When the ",(0,i.kt)("inlineCode",{parentName:"p"},"casper-node-launcher")," package is installed, both ",(0,i.kt)("inlineCode",{parentName:"p"},"casper.conf")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"casper-test.conf")," are installed in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/casper/network_configs"),". Once a valid config file for a new network is copied to this location, all commands with ",(0,i.kt)("em",{parentName:"p"},"node_util.py")," will work as they do on existing networks."),(0,i.kt)("p",null,"By convention, we name the config file the same as the network. So Mainnet has a network name of ",(0,i.kt)("inlineCode",{parentName:"p"},"casper")," and we use ",(0,i.kt)("inlineCode",{parentName:"p"},"casper.conf")," for the config file."),(0,i.kt)("p",null,"For a new network using server ",(0,i.kt)("inlineCode",{parentName:"p"},"casper.mydomain.com")," to host files for ",(0,i.kt)("inlineCode",{parentName:"p"},"our-network")," network, we would have a ",(0,i.kt)("inlineCode",{parentName:"p"},"our-network.conf")," file that looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"SOURCE_URL=casper.mydomain.com\nNETWORK_NAME=our-network\n")),(0,i.kt)("p",null,"Host this ",(0,i.kt)("inlineCode",{parentName:"p"},"our-network.conf")," in the root of ",(0,i.kt)("inlineCode",{parentName:"p"},"casper.mydomain.com/our-network")," at the same level as ",(0,i.kt)("inlineCode",{parentName:"p"},"protocol_versions"),"."),(0,i.kt)("p",null,"This allows any node which wants to use the new network to run the following to install this configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd /etc/casper/network_configs\nsudo -u casper curl -JLO casper.mydomain.com/our-network/our-network.conf\n")),(0,i.kt)("p",null,"Any command needing a network config from ",(0,i.kt)("inlineCode",{parentName:"p"},"node_util.py")," can use ",(0,i.kt)("inlineCode",{parentName:"p"},"our-network.conf"),"."),(0,i.kt)("p",null,"Staging protocol versions for a new node with this network or staging an upcoming upgrade would just need this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper /etc/casper/node_util.py stage_protocols our-network.conf\n")),(0,i.kt)("h2",{id:"setup-configuration-files"},"Setup Configuration Files"),(0,i.kt)("p",null,"For a network to be started, we to build the configuration files for a certain genesis time and with nodes that will be running. These files need to be configured in advanced, so a genesis time should be selected that allows packaging the files, loading onto nodes and starting nodes prior to the genesis time."),(0,i.kt)("h3",{id:"chainspectoml"},"chainspec.toml"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/concepts/glossary/C#chainspec"},"chainspec.toml")," file is configuration for the network and must be exactly the same on all nodes."),(0,i.kt)("p",null,"The name for a network is specified ",(0,i.kt)("inlineCode",{parentName:"p"},"network.name"),"."),(0,i.kt)("p",null,"Each protocol will have a ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"activation_point"),". At genesis this is a date and time in format shown below. For future upgrades it would be an integer of the ",(0,i.kt)("inlineCode",{parentName:"p"},"era_id")," for activation of the upgrade."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[protocol]\nversion = '1.0.0'\nactivation_point = '2022-08-01T10:00:00Z'\n\n[network]\nname = 'mynetwork'\n")),(0,i.kt)("h3",{id:"config-exampletoml"},"config-example.toml"),(0,i.kt)("p",null,"The config-example.toml is used to generate config.toml for a protocol after the node's IP is inserted. The ",(0,i.kt)("inlineCode",{parentName:"p"},"public_address")," is auto-detected with ",(0,i.kt)("inlineCode",{parentName:"p"},"node_util.py stage_protocols"),". If using a NAT environment, the public IP can be specified with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--ip")," argument."),(0,i.kt)("p",null,"This file should have ",(0,i.kt)("inlineCode",{parentName:"p"},"known_addresses")," added that are relevant to the network. Nodes that will be genesis validators are added to this list in the form:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[network]\nknown_addresses = ['<ip 1>:35000','<ip 2>:35000','<ip 3>:35000']\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"config.toml")," can be setup to customized fields for a given node. ",(0,i.kt)("inlineCode",{parentName:"p"},"config-example.toml")," is a default configuration."),(0,i.kt)("h2",{id:"staging-a-protocol-version"},"Staging a Protocol Version"),(0,i.kt)("p",null,"For the initial genesis protocol version or future upgrade protocol versions, you will typically use prebuilt and tested ",(0,i.kt)("inlineCode",{parentName:"p"},"bin.tar.gz")," that have been tested and staged for existing networks. The ",(0,i.kt)("inlineCode",{parentName:"p"},"config.tar.gz")," file must be customized for the specific network with a network name, protocol version and activation point at the very least."),(0,i.kt)("p",null,"These archives should be created with no directory information stored. This is done by using ",(0,i.kt)("inlineCode",{parentName:"p"},"tar")," in the same directory as the files."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir config\ncd config\nmv [source of chainspec.toml] ./chainspec.toml\nmv [source of config-example.toml] ./config-example.toml\ntar -czvf ../config.tar.gz .\n")),(0,i.kt)("p",null,"You can test what was compressed with untar'ing the file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir conftest\ncd conftest\ntar -xzvf ../config.tar.gz .\n")),(0,i.kt)("p",null,"This will expand files for verification."),(0,i.kt)("p",null,"For custom ",(0,i.kt)("inlineCode",{parentName:"p"},"casper-node")," builds, the minimum contents of ",(0,i.kt)("inlineCode",{parentName:"p"},"bin.tar.gz")," is the ",(0,i.kt)("inlineCode",{parentName:"p"},"casper-node")," executable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir bin\ncd bin\ncp [source of casper-node] ./casper-node\ntar -czvf ../bin.tar.gz .\n")),(0,i.kt)("p",null,"A directory for the protocol_version will be created on the server. For example: ",(0,i.kt)("inlineCode",{parentName:"p"},"1_1_0"),"."),(0,i.kt)("p",null,"We will copy ",(0,i.kt)("inlineCode",{parentName:"p"},"bin.tar.gz")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"config.tar.gz")," into ",(0,i.kt)("inlineCode",{parentName:"p"},"1_1_0"),". Once this is done, we are safe to update ",(0,i.kt)("inlineCode",{parentName:"p"},"protocol_versions")," by appending ",(0,i.kt)("inlineCode",{parentName:"p"},"1_1_0")," to the end of the file and uploading it into the root of the network directory."),(0,i.kt)("p",null,"Any node that runs the following command will get this new upgrade:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u casper /etc/casper/node_util.py stage_protocols <network.conf>\n")))}m.isMDXComponent=!0}}]);