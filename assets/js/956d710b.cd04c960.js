"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8422],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=i(n),d=r,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5585:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return m}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),l=n(4996),s=["components"],p={},i="Setting up a Local Network with NCTL",u={unversionedId:"developers/dapps/setup-nctl",id:"developers/dapps/setup-nctl",title:"Setting up a Local Network with NCTL",description:"NCTL stands for network/node control. NCTL is a CLI application you can use to set up and control multiple local Casper nodes during development. Many developers wish to spin up relatively small test networks to localize their testing before deploying to the blockchain. Adopting a standardized approach in the community is also helpful for troubleshooting and reporting issues.",source:"@site/source/docs/casper/developers/dapps/setup-nctl.md",sourceDirName:"developers/dapps",slug:"/developers/dapps/setup-nctl",permalink:"/developers/dapps/setup-nctl",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/developers/dapps/setup-nctl.md",tags:[],version:"current",lastUpdatedAt:1683036971,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{},sidebar:"developers",previous:{title:"dApp Technology Stack",permalink:"/developers/dapps/technology-stack"},next:{title:"Testing Smart Contracts with NCTL",permalink:"/developers/dapps/nctl-test"}},c={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Video Tutorial",id:"video-tutorial",level:2},{value:"Installing a Virtual Environment",id:"installing-a-virtual-environment",level:2},{value:"Setting up the Network",id:"setting-up-the-network",level:2},{value:"Stopping the Network",id:"stopping-the-network",level:2},{value:"Next Steps",id:"next-steps",level:2}],d={toc:m},k="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)(k,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-a-local-network-with-nctl"},"Setting up a Local Network with NCTL"),(0,o.kt)("p",null,"NCTL stands for network/node control. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/tree/master/utils/nctl"},"NCTL")," is a CLI application you can use to set up and control multiple local Casper nodes during development. Many developers wish to spin up relatively small test networks to localize their testing before deploying to the blockchain. Adopting a standardized approach in the community is also helpful for troubleshooting and reporting issues."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You have completed the ",(0,o.kt)("a",{parentName:"li",href:"/developers/writing-onchain-code/getting-started"},"Getting Started section"),", which shows you how to install your development environment, including tools like ",(0,o.kt)("em",{parentName:"li"},"CMake")," (version 3.1.4+), ",(0,o.kt)("em",{parentName:"li"},"Cargo"),", and ",(0,o.kt)("em",{parentName:"li"},"Rust"),"."),(0,o.kt)("li",{parentName:"ol"},"Make sure you have ",(0,o.kt)("a",{parentName:"li",href:"https://www.python.org/downloads/"},"Python 3 installed")," if your operating system does not include Python."),(0,o.kt)("li",{parentName:"ol"},"To run NCTL, you will also need ",(0,o.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/bash/"},"the bash shell"),".")),(0,o.kt)("h2",{id:"video-tutorial"},"Video Tutorial"),(0,o.kt)("p",null,"If you prefer a video walkthrough of this guide, you can check out this video."),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed?v=rE_saHopXXU&list=PL8oWxbJ-csEogSV-M0IPiofWP5I_dLji6&index=2",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"installing-a-virtual-environment"},"Installing a Virtual Environment"),(0,o.kt)("p",null,"We will show you how to run NCTL in a virtual environment. If you want to run NCTL at the system level, you can, but we recommend that you only do that if you are sure you know what you are doing."),(0,o.kt)("p",null,"First, you will need to install a set of tools required for running NCTL."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1.")," The first tool you will need is ",(0,o.kt)("strong",{parentName:"p"},"pip"),", a package manager for Python. Pip comes with the Python 3 installation from python.org, but if you do not have it already, follow the steps below or ",(0,o.kt)("a",{parentName:"p",href:"https://pip.pypa.io/en/stable/installing/"},"the full installation instructions"),"."),(0,o.kt)("p",null,"Instructions for MacOS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py\n$ python3 get-pip.py\n")),(0,o.kt)("p",null,"Instructions for Linux:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt install python3-pip\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Install ",(0,o.kt)("strong",{parentName:"p"},"pkg-config"),", a program used to compile and link against one or more libraries."),(0,o.kt)("p",null,"Instructions for MacOS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ brew install pkg-config\n")),(0,o.kt)("p",null,"Instructions for Linux:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt install pkg-config\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3.")," Install either ",(0,o.kt)("strong",{parentName:"p"},"libssl-dev")," (Linux) or ",(0,o.kt)("strong",{parentName:"p"},"openssl")," (MacOS), which are toolkits for the Transport Layer Security (TLS) and Secure Sockets Layer (SSL) protocols. They also serve as general-purpose cryptography libraries."),(0,o.kt)("p",null,"Instructions for MacOS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ brew install openssl\n")),(0,o.kt)("p",null,"Instructions for Linux:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt install libssl-dev\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4.")," You will also need the ",(0,o.kt)("strong",{parentName:"p"},"gcc")," and ",(0,o.kt)("strong",{parentName:"p"},"g++")," compilers, which usually come as part of developer command-line tools (versions 7.5.0 at the time of this writing)."),(0,o.kt)("p",null,"Instructions for MacOS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ xcode-select --install\n$ gcc --version\n$ g++ --version\n")),(0,o.kt)("p",null,"Instructions for Linux:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt install build-essential\n$ gcc --version\n$ g++ --version\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 5.")," Create and activate a new virtual environment. ",(0,o.kt)("strong",{parentName:"p"},"Commands applicable to the virtual environment will be prefixed with (env)"),". Run the following commands to set it up."),(0,o.kt)("p",null,"Instructions for MacOS and Linux:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ python3 -m venv env\n$ source env/bin/activate\n(env) $\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 6.")," Inside the virtual environment, upgrade ",(0,o.kt)("strong",{parentName:"p"},"pip")," to the latest version."),(0,o.kt)("p",null,"Instructions for MacOS and Linux:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"(env) $ pip install --upgrade pip\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 7.")," Install ",(0,o.kt)("strong",{parentName:"p"},"jq"),", a command-line JSON processor."),(0,o.kt)("p",null,"Instructions for MacOS and Linux:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"(env) $ pip install jq\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 8.")," Install ",(0,o.kt)("strong",{parentName:"p"},"supervisor"),", a cross-platform process manager."),(0,o.kt)("p",null,"Instructions for MacOS and Linux:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"(env) $ pip install supervisor\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 9.")," Install ",(0,o.kt)("strong",{parentName:"p"},"toml"),", a configuration file parser."),(0,o.kt)("p",null,"Instructions for MacOS and Linux:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"(env) $ pip install toml\n")),(0,o.kt)("h2",{id:"setting-up-the-network"},"Setting up the Network"),(0,o.kt)("p",null,"You are now ready to set up and run your local network of Casper nodes."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 10.")," Clone the ",(0,o.kt)("em",{parentName:"p"},"casper-node-launcher")," software in your working directory, which we will call ",(0,o.kt)("em",{parentName:"p"},"WORKING_DIRECTORY"),". ",(0,o.kt)("strong",{parentName:"p"},"Very Important!!! Choose a short path for your working directory"),"; otherwise, the NCTL tool will report that the path is too long."),(0,o.kt)("p",null,"Instructions for MacOS and Linux:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"(env) $ cd <WORKING_DIRECTORY>\n(env) $ git clone https://github.com/casper-network/casper-node-launcher\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Assuming you have set up a small local network, you can speed up the process of creating new blocks with NCTL by reducing the ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy_delay")," in your ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/dev/resources/local/config.toml#L390"},"local config.toml")," before running ",(0,o.kt)("inlineCode",{parentName:"p"},"nctl-assets-setup"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 11.")," Next, clone the ",(0,o.kt)("em",{parentName:"p"},"casper-node")," software, also in your working directory."),(0,o.kt)("p",null,"Instructions for MacOS and Linux:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"(env) $ git clone https://github.com/casper-network/casper-node\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 12.")," Finally, clone the ",(0,o.kt)("em",{parentName:"p"},"casper-client-rs")," software in your working directory."),(0,o.kt)("p",null,"Instructions for MacOS and Linux:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"(env) $ git clone https://github.com/casper-ecosystem/casper-client-rs\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 13.")," Activate the NCTL environment with the following command."),(0,o.kt)("p",null,"Instructions for MacOS and Linux:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"(env) $ source casper-node/utils/nctl/activate\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 14.")," Compile the NCTL binary scripts. The following command compiles both the ",(0,o.kt)("em",{parentName:"p"},"casper-node")," and the ",(0,o.kt)("em",{parentName:"p"},"casper-client")," in release mode."),(0,o.kt)("p",null,"Instructions for MacOS and Linux:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"(env) $ nctl-compile\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The compilation takes some time, so it might be a perfect moment to get some coffee.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 15.")," Set up all the assets required to run a local network, including binaries, chainspec, config, faucet, and keys. Also, spin up the network right after. The default network will have 10 nodes, with 5 active nodes and 5 inactive nodes."),(0,o.kt)("p",null,"Instructions for MacOS and Linux:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"(env) $ nctl-assets-setup && nctl-start\n")),(0,o.kt)("p",null,"Once a network is up and running, you can control each node within the network and add new nodes to the network."),(0,o.kt)("p",null,"Several other NCTL commands are available via aliases for execution from within a terminal session. All such commands are prefixed by ",(0,o.kt)("em",{parentName:"p"},"nctl-")," and allow you to perform various tasks."),(0,o.kt)("p",null,"You should see the new directory ",(0,o.kt)("em",{parentName:"p"},"utils/nctl/assets"),", with the following structure."),(0,o.kt)("img",{src:(0,l.Z)("/image/nctl/assets_setup.png"),alt:"assets_setup",width:"200"}),(0,o.kt)("p",null,"Here is the command line output you would expect."),(0,o.kt)("img",{src:(0,l.Z)("/image/nctl/nctl_output.png"),alt:"nctl_output"}),(0,o.kt)("h2",{id:"stopping-the-network"},"Stopping the Network"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 15.")," Although not necessary, you can stop and clean the NCTL setup with the following commands."),(0,o.kt)("p",null,"Instructions for MacOS and Linux:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"(env) $ nctl-stop\n(env) $ nctl-clean\n")),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Explore the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/casper-network/casper-node/blob/master/utils/nctl/docs/commands.md"},"various NCTL commands"),"."),(0,o.kt)("li",{parentName:"ol"},"Explore the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/casper-network/casper-node/blob/master/utils/nctl/docs/usage.md"},"NCTL usage guide"),".")))}h.isMDXComponent=!0}}]);