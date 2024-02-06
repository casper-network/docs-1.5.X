"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8699],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),y=a,u=d["".concat(i,".").concat(y)]||d[y]||_[y]||r;return n?o.createElement(u,p(p({ref:t},l),{},{components:n})):o.createElement(u,p({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,p=new Array(r);p[0]=y;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:a,p[1]=s;for(var c=2;c<r;c++)p[c]=n[c];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},4990:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),p=["components"],s={},i="Python SDK",c={unversionedId:"developers/dapps/sdk/python-sdk",id:"developers/dapps/sdk/python-sdk",title:"Python SDK",description:"The Python SDK allows developers to interact with the Casper Node using Python 3.9+. This page covers various examples of using this SDK.",source:"@site/source/docs/casper/developers/dapps/sdk/python-sdk.md",sourceDirName:"developers/dapps/sdk",slug:"/developers/dapps/sdk/python-sdk",permalink:"/developers/dapps/sdk/python-sdk",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/developers/dapps/sdk/python-sdk.md",tags:[],version:"current",lastUpdatedAt:1707229568,formattedLastUpdatedAt:"Feb 6, 2024",frontMatter:{},sidebar:"developers",previous:{title:"Go SDK",permalink:"/developers/dapps/sdk/go-sdk"},next:{title:"dApp Technology Stack",permalink:"/developers/dapps/technology-stack"}},l={},d=[{value:"Installation",id:"installation",level:2},{value:"Tests",id:"tests",level:2},{value:"Usage Examples",id:"usage-examples",level:2},{value:"Sending a transfer",id:"sending-a-transfer",level:3},{value:"Staking",id:"staking",level:3}],_={toc:d},y="wrapper";function u(e){var t=e.components,n=(0,a.Z)(e,p);return(0,r.kt)(y,(0,o.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"python-sdk"},"Python SDK"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-python-sdk"},"Python SDK")," allows developers to interact with the Casper Node using Python 3.9+. This page covers various examples of using this SDK."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Before installing the library, you need to install dependencies from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-python-sdk/blob/main/requirements.txt"},"requirements.txt"),", which you can perform by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n    pip install -r requirements.txt\n")),(0,r.kt)("p",null,"Finally, to install the library, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n    pip install pycspr\n")),(0,r.kt)("h2",{id:"tests"},"Tests"),(0,r.kt)("p",null,"You can find examples of testing this library with python scripts in the ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," directory. To run the tests, we recommend the ",(0,r.kt)("em",{parentName:"p"},"pytest")," library:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    pytest ./tests\n")),(0,r.kt)("h2",{id:"usage-examples"},"Usage Examples"),(0,r.kt)("p",null,"In this section, we outline a couple of essential tasks you can accomplish with the Python SDK:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#sending-a-transfer"},"Sending a transfer")," between two purses"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#staking"},"Staking")," tokens with a validator")),(0,r.kt)("p",null,"For further examples, take a look at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-python-sdk/tree/main/how_tos"},"How-tos"),"."),(0,r.kt)("h3",{id:"sending-a-transfer"},"Sending a transfer"),(0,r.kt)("p",null,"This example shows you how to define and transfer funds between purses on a Casper network. Replace the ",(0,r.kt)("em",{parentName:"p"},"path_to_cp2_account_key")," in the code below with the receiver's account public key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    import os\n    import pathlib\n    import random\n    import typing\n\n    import pycspr\n    from pycspr.client import NodeClient\n    from pycspr.client import NodeConnectionInfo\n    from pycspr.crypto import KeyAlgorithm\n    from pycspr.types import PrivateKey\n    from pycspr.types import Deploy\n    from pycspr.types import PublicKey\n\n    # path to cp1 secret key - defaults to NCTL user 1.\n    path_to_cp1_secret_key = pathlib.Path(os.getenv("NCTL")) / "assets" / "net-1" / "users" / "user-1" / "secret_key.pem"\n\n    # type of cp1 secret key - defaults to ED25519.\n    type_of_cp1_secret_key = KeyAlgorithm.ED25519.name,\n\n    # path to cp2 account key - defaults to NCTL user 2.\n    path_to_cp2_account_key = pathlib.Path(os.getenv("NCTL")) / "assets" / "net-1" / "users" / "user-2" / "public_key_hex"\n\n    # name of target chain - defaults to NCTL chain.\n    chain_name = "casper-net-1"\n\n    # host address of target node - defaults to NCTL node 1.\n    node_host = "localhost"\n\n    # Node API JSON-RPC port - defaults to 11101 @ NCTL node 1.\n    node_port_rpc = 11101\n\n    def _main(node_host, node_port_rpc, path_to_cp1_secret_key, type_of_cp1_secret_key,path_to_cp2_account_key, chain_name):\n        """Main entry point.\n        :param args: Parsed command line arguments.\n        """\n        # Set node client.\n        client = _get_client(node_host, node_port_rpc)\n\n        # Set counter-parties.\n        cp1, cp2 = _get_counter_parties(path_to_cp1_secret_key, type_of_cp1_secret_key,path_to_cp2_account_key)\n\n        # Set deploy.\n        deploy: Deploy = _get_deploy(chain_name, cp1, cp2)\n\n        # Approve deploy.\n        deploy.approve(cp1)\n\n        # Dispatch deploy to a node.\n        client.deploys.send(deploy)\n\n        #If deploy is successful send the indication\n        print(f"Deploy dispatched to node [{node_host}]: {deploy.hash.hex()}")\n\n\n    def _get_client(node_host, node_port_rpc) -> NodeClient:\n        """Returns a pycspr client instance.\n        """\n        return NodeClient(NodeConnectionInfo(\n            host=node_host,\n            port_rpc=node_port_rpc,\n        ))\n\n\n    def _get_counter_parties(path_to_cp1_secret_key, type_of_cp1_secret_key,path_to_cp2_account_key) -> typing.Tuple[PrivateKey, PublicKey]:\n        """Returns the 2 counter-parties participating in the transfer.\n        """\n        cp1 = pycspr.parse_private_key(\n            path_to_cp1_secret_key,\n            type_of_cp1_secret_key,\n            )\n        cp2 = pycspr.parse_public_key(\n            path_to_cp2_account_key\n            )\n\n        return cp1, cp2\n\n\n    def _get_deploy(chain_name, cp1: PrivateKey, cp2: PublicKey) -> Deploy:\n        """Returns transfer deploy to be dispatched to a node.\n        """\n        # Set standard deploy parameters.\n        deploy_params = pycspr.create_deploy_parameters(\n            account = cp1,\n            chain_name = chain_name\n            )\n\n        # Set deploy.\n        deploy = pycspr.create_native_transfer(\n            params = deploy_params,\n            amount = int(2.5e9),\n            target = cp2.account_hash,\n            correlation_id = random.randint(1, 1e6)\n            )\n\n        return deploy\n\n\n    # Entry point.\n    if __name__ == \'__main__\':\n        _main(node_host, node_port_rpc, path_to_cp1_secret_key, type_of_cp1_secret_key, path_to_cp2_account_key, chain_name)\n')),(0,r.kt)("h3",{id:"staking"},"Staking"),(0,r.kt)("p",null,"This example shows you how to define and stake funds with a validator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\n    import os\n    import pathlib\n\n    import pycspr\n    from pycspr.client import NodeClient\n    from pycspr.client import NodeConnectionInfo\n    from pycspr.crypto import KeyAlgorithm\n    from pycspr.types import Deploy\n    from pycspr.types import PrivateKey\n\n    # path to cp1 secret key - defaults to NCTL user 1.\n    path_to_validator_secret_key = pathlib.Path(os.getenv("NCTL")) / "assets" / "net-1" / "users" / "user-1" / "secret_key.pem"\n\n    # type of cp1 secret key - defaults to ED25519.\n    type_of_validator_secret_key = KeyAlgorithm.ED25519.name\n\n    # path to session code wasm binary - defaults to NCTL bin/eco/add_bid.wasm.\n    path_to_wasm = pathlib.Path(os.getenv("NCTL")) / "assets" / "net-1" / "bin" / "auction" / "add_bid.wasm"\n\n    # amount to stake, i.e. bond, into the network.\n    amount = int(2.5e9)\n\n    # amount to charge delegators for service provision.\n    delegation_rate = 2\n\n    # name of target chain - defaults to NCTL chain.\n    chain_name = "casper-net-1"\n\n    # host address of target node - defaults to NCTL node 1.\n    node_host = "localhost"\n\n    # Node API JSON-RPC port - defaults to 11101 @ NCTL node 1.\n    node_port_rpc = 11101\n\n    def _main(node_host, node_port_rpc, path_to_validator_secret_key, type_of_validator_secret_key, chain_name, amount, delegation_rate, path_to_wasm):\n        """Main entry point.\n        :param args: Parsed command line arguments.\n        """\n        # Set node client.\n        client: NodeClient = _get_client(node_host, node_port_rpc)\n\n        # Set validator key.\n        validator: PrivateKey = pycspr.parse_private_key(\n            path_to_validator_secret_key,\n            type_of_validator_secret_key,\n            )\n\n        # Set deploy.\n        deploy: Deploy = _get_deploy(validator, chain_name, amount, delegation_rate, path_to_wasm)\n\n        # Approve deploy.\n        deploy.approve(validator)\n\n        # Dispatch deploy to a node.\n        client.deploys.send(deploy)\n\n        print(f"Deploy dispatched to node [{node_host}]: {deploy.hash.hex()}")\n\n\n    def _get_client(node_host, node_port_rpc) -> NodeClient:\n        """Returns a pycspr client instance.\n        """\n        return NodeClient(NodeConnectionInfo(\n            host = node_host,\n            port_rpc = node_port_rpc,\n        ))\n\n\n    def _get_deploy(validator: PrivateKey, chain_name, amount, delegation_rate, path_to_wasm) -> Deploy:\n        """Returns delegation deploy to be dispatched to a node.\n        """\n        # Set standard deploy parameters.\n        deploy_params = pycspr.create_deploy_parameters(\n            account = validator,\n            chain_name = chain_name\n            )\n\n        # Set deploy.\n        deploy = pycspr.create_validator_auction_bid(\n            params = deploy_params,\n            amount = amount,\n            delegation_rate = delegation_rate,\n            public_key = validator.as_public_key(),\n            path_to_wasm = path_to_wasm\n            )\n\n        return deploy\n\n\n    # Entry point.\n    if __name__ == \'__main__\':\n        _main(node_host, node_port_rpc, path_to_validator_secret_key, type_of_validator_secret_key, chain_name, amount, delegation_rate, path_to_wasm)\n')))}u.isMDXComponent=!0}}]);