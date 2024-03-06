"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[319],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(6010),o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:a},t)}},4866:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(7462),r=a(7294),o=a(6010),i=a(2466),s=a(6550),l=a(1980),c=a(7392),u=a(12);function p(e){return function(e){var t,a;return null!=(t=null==(a=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(a);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,o=(0,s.k6)(),i=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,l._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function f(e){var t,a,n,o,i=e.defaultValue,s=e.queryString,l=void 0!==s&&s,c=e.groupId,p=d(e),f=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:p})})),g=f[0],b=f[1],k=h({queryString:l,groupId:c}),y=k[0],v=k[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),a=(0,u.Nk)(t),n=a[0],o=a[1],[n,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=w[0],T=w[1],x=function(){var e=null!=y?y:N;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){x&&b(x)}),[x]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);b(e),v(e),T(e)}),[v,T,p]),tabValues:p}}var g=a(2389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){var t=e.className,a=e.block,s=e.selectedValue,l=e.selectValue,c=e.tabValues,u=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==s&&(p(t),l(n))},m=function(e){var t,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,r=u.indexOf(e.currentTarget)+1;a=null!=(n=u[r])?n:u[0];break;case"ArrowLeft":var o,i=u.indexOf(e.currentTarget)-1;a=null!=(o=u[i])?o:u[u.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return u.push(e)},onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":s===t})}),null!=a?a:t)})))}function y(e){var t=e.lazy,a=e.children,n=e.selectedValue,o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var i=o.find((function(e){return e.props.value===n}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function v(e){var t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){var t=(0,g.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},2229:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=(a(4996),a(4866)),s=a(5162),l=["components"],c={title:"Move to Casper"},u="Moving to Casper from another Blockchain",p={unversionedId:"resources/moving-to-casper",id:"resources/moving-to-casper",title:"Move to Casper",description:"moving-to-casper}",source:"@site/source/docs/casper/resources/moving-to-casper.md",sourceDirName:"resources",slug:"/resources/moving-to-casper",permalink:"/resources/moving-to-casper",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/resources/moving-to-casper.md",tags:[],version:"current",lastUpdatedAt:1709742245,formattedLastUpdatedAt:"Mar 6, 2024",frontMatter:{title:"Move to Casper"},sidebar:"resources",previous:{title:"Build on Casper",permalink:"/resources/build-on-casper/introduction"},next:{title:"Casper Token Standards",permalink:"/resources/tokens/"}},d={},m=[{value:"Smart Contract Platform",id:"contract-overview",level:2},{value:"Variable Storage and State Management",id:"variable-storage",level:2},{value:"Contract Functions",id:"contract-functions",level:2},{value:"Passing Arguments",id:"passing-arguments",level:2},{value:"Additional Considerations",id:"additional-considerations",level:2}],h={toc:m},f="wrapper";function g(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)(f,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"moving-to-casper"},"Moving to Casper from another Blockchain"),(0,o.kt)("p",null,"This page covers various considerations for moving to Casper from another blockchain by comparing Casper to Ethereum, Near, Aptos, and Solana in these aspects:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#contract-overview"},"Smart Contract Platform Overview")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#variable-storage"},"Variable Storage and State Management")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#contract-functions"},"Contract Functions")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#passing-arguments"},"Passing Arguments"))),(0,o.kt)("p",null,"Since other blockchain projects use different technologies, it is essential to consider how those technologies serve your use case."),(0,o.kt)("p",null,"When choosing a blockchain, it is also essential to compare consensus mechanisms, tokenomics, cross-contract capabilities, contract upgradability, and software development kits (SDKs) as described ",(0,o.kt)("a",{parentName:"p",href:"#additional-considerations"},"here"),"."),(0,o.kt)("h2",{id:"contract-overview"},"Smart Contract Platform"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Casper",label:"Casper",mdxType:"TabItem"},(0,o.kt)("p",null,"Casper smart contracts are written in Rust."),(0,o.kt)("p",null,"Variables defined within the smart contract can be stored as either ",(0,o.kt)("a",{parentName:"p",href:"/developers/json-rpc/types_chain#namedkey"},"Named Keys")," or ",(0,o.kt)("a",{parentName:"p",href:"/concepts/dictionaries"},"Dictionaries")," as described in ",(0,o.kt)("a",{parentName:"p",href:"/concepts/design/reading-and-writing-to-the-blockchain"},"Reading and Writing Data to the Blockchain"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," function serves as the main entry point of the ",(0,o.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/simple-contract"},"smart contract"),". It automatically executes when the smart contract is installed, setting the initial state of the contract and defining all other entry points."),(0,o.kt)("p",null,"It's worth noting that Casper only supports public entry points for contracts. Additionally, contracts can be defined as upgradable or immutable as described ",(0,o.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/upgrading-contracts"},"here"),".")),(0,o.kt)(s.Z,{value:"Ethereum",label:"Ethereum",mdxType:"TabItem"},(0,o.kt)("p",null,"Ethereum smart contracts are primarily written in Solidity, a programming language specifically designed for this purpose. These contracts comprise a collection of global variables that persist on the blockchain and define the contract's state."),(0,o.kt)("p",null,"Furthermore, Ethereum smart contracts feature a constructor that specifies an initial state after deployment on the blockchain. Public functions declared within the contract can be invoked from outside the blockchain."),(0,o.kt)("p",null,'In terms of immutability, Ethereum smart contracts are inherently immutable once deployed. However, design patterns such as "Proxy" or "Diamond" facilitate versioning contracts on the Ethereum blockchain.'),(0,o.kt)("p",null,"Solidity smart contracts adhere to object-oriented programming principles and support features such as inheritance and libraries.")),(0,o.kt)(s.Z,{value:"Near",label:"Near",mdxType:"TabItem"},(0,o.kt)("p",null,"Near smart contracts can be written in JavaScript or Rust, and the Near SDK can pack the code with lightweight runtime. This can be compiled into a single WebAssembly file and deployed on the NEAR network."),(0,o.kt)("p",null,'In the Near ecosystem, smart contracts function as classes. The constructor, referred to as the "init" method, can receive attributes required for initializing the contract\'s initial state.'),(0,o.kt)("p",null,"All public methods defined within the contract serve as its interface, exposing its functionality."),(0,o.kt)("p",null,"Near smart contracts are immutable, but their state can change as transactions are executed. Contracts can also be upgraded by deploying new versions of the contract. The Near blockchain provides various capabilities for versioning, including state migrations, state versioning, and contract self-updates.")),(0,o.kt)(s.Z,{value:"Aptos",label:"Aptos",mdxType:"TabItem"},(0,o.kt)("p",null,"The Aptos programming language is known as Move. Its primary concepts revolve around scripts and modules. Scripts enable developers to incorporate additional logic into transactions, while modules allow them to expand blockchain functionality or create custom smart contracts."),(0,o.kt)("p",null,"A distinctive feature of Move is the concept of Resources, which are specialized structures representing assets. This design allows resources to be managed similarly to other data types in Aptos, such as vectors or structs."),(0,o.kt)("p",null,"A smart contract in the Aptos blockchain is called a Module. It is always connected with an account address. The modules have to be compiled to call functions in the Module."),(0,o.kt)("p",null,"The Module's public methods are its interface and can be invoked from code outside the blockchain."),(0,o.kt)("p",null,"Module code can be upgraded and changed under the account address, which does not change. The upgrade is only accepted if the code is backward compatible.")),(0,o.kt)(s.Z,{value:"Solana",label:"Solana",mdxType:"TabItem"},(0,o.kt)("p",null,"Solana smart contracts are primarily written in Rust."),(0,o.kt)("p",null,"Unlike other blockchain platforms, Solana's smart contracts are stateless and solely focus on program logic. The management of the contract state is handled at the account level, separating the state stored within the account and the contract logic defined in the programs."),(0,o.kt)("p",null,"Smart contracts are commonly referred to as on-chain programs. These programs expose their interface as a public entry point, allowing external interaction."),(0,o.kt)("p",null,'It is worth noting that Solana programs can be updated using an authority known as the "update authority," which holds the necessary permissions for making modifications to the program.'))),(0,o.kt)("h2",{id:"variable-storage"},"Variable Storage and State Management"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Casper",label:"Casper",mdxType:"TabItem"},(0,o.kt)("p",null,"Variables can be stored as Named Keys or Dictionaries as described in ",(0,o.kt)("a",{parentName:"p",href:"/concepts/design/reading-and-writing-to-the-blockchain"},"Reading and Writing Data to the Blockchain"),"."),(0,o.kt)("p",null,"Additionally, local variables are available within the entry points and can be used to perform necessary actions or computations within the scope of each entry point.")),(0,o.kt)(s.Z,{value:"Ethereum",label:"Ethereum",mdxType:"TabItem"},(0,o.kt)("p",null,"The variables within the contract are responsible for storing the state of the contract at a specific moment in time. However, it's important to note that local variables used within the call functions are not stored in the contract's state. Instead, they are employed solely for computational purposes within those specific functions."),(0,o.kt)("p",null,"State variables must be strongly typed so that the smart contract compiler can enforce type consistency and ensure the storage space aligns with the declared data types. Strong typing promotes code correctness and prevents potential data corruption or memory-related issues related to the contract's state variables.")),(0,o.kt)(s.Z,{value:"Near",label:"Near",mdxType:"TabItem"},(0,o.kt)("p",null,"Variables in the contract can be stored as native types, SDK collections, or internal structures. SDK collections offer advantages over native types."),(0,o.kt)("p",null,"Additionally, there is a distinction between class attributes and local variables. Class attributes represent the state of the contract, while local variables are specific to the invocation of a function and have no impact on the contract's overall state."),(0,o.kt)("p",null,"SDK Collections are typical when creating state variables because they provide convenient data structures such as lists, maps, and sets. These data structures can organize and manage complex data within the contract's storage. Using SDK Collections ensures efficient storage and facilitates easier access and data management in the smart contract.")),(0,o.kt)(s.Z,{value:"Aptos",label:"Aptos",mdxType:"TabItem"},(0,o.kt)("p",null,"Aptos employs primitive types, such as integers, booleans, and addresses, to represent variables. These elementary types can be combined to create structures, but it's important to note that struct definitions are only permitted within Modules."),(0,o.kt)("p",null,"Aptos advises developers to cluster related data into Resources for efficient data management and organization. Resources represent assets or specific data entities on the blockchain. By grouping data into Resources, you can maintain logical coherence and improve the readability and maintainability of the code."),(0,o.kt)("p",null,"The Aptos blockchain introduces a tree-shaped persistent global storage that allows read and write operations. Global storage consists of trees originating from an account address.")),(0,o.kt)(s.Z,{value:"Solana",label:"Solana",mdxType:"TabItem"},(0,o.kt)("p",null,"Variables can be utilized locally within the execution context of a specific entry point. They are limited to the scope of that entry point and not accessible outside of it. These variables can be defined as elementary types such as bool, String, int, etc."),(0,o.kt)("p",null,"Data persists in structs within the account. The Binary Object Representation Serializer for Hashing (Borsh) facilitates the serialization and deserialization of these structs. The process involves reading the data from the account, deserializing it to obtain the values it contains, updating the values, and then serializing the modified data to save the new values back into the account."))),(0,o.kt)("h2",{id:"contract-functions"},"Contract Functions"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Casper",label:"Casper",mdxType:"TabItem"},(0,o.kt)("p",null,"For Casper smart contracts, public functions are called entry points. To declare them, the following format is used:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[no_mangle]\npub extern "C" fn counter_inc() {\n\n    // Entry point body\n}\n')),(0,o.kt)("p",null,"It's important to note that entry points do not have input arguments in their definition, but the arguments can be accessed using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/struct.RuntimeArgs.html"},"RuntimeArgs")," passed to the contract. Entry points are instantiated within the ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," entry point."),(0,o.kt)("p",null,"If a return value is needed, it should be declared using the syntax described in the ",(0,o.kt)("a",{parentName:"p",href:"/resources/tutorials/advanced/return-values-tutorial"},"Interacting with Runtime Return Values")," tutorial."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"runtime::ret(value);\n")),(0,o.kt)("p",null,"Each call to an entry point is treated as a ",(0,o.kt)("a",{parentName:"p",href:"/deploy-and-deploy-lifecycle"},"Deploy")," to the network, and therefore, each call incurs a cost paid in motes (the network's native accounting unit).")),(0,o.kt)(s.Z,{value:"Ethereum",label:"Ethereum",mdxType:"TabItem"},(0,o.kt)("p",null,"On Ethereum, public methods serve two purposes: they can be used to execute contract logic and modify the contract's state, or they can be utilized to retrieve data stored within the contract's state."),(0,o.kt)("p",null,"The declaration of public methods in Ethereum follows the format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"function update_name(string value) public {\n    dapp_name = value;\n}\n")),(0,o.kt)("p",null,"In cases where a public method only returns a value without modifying the state, it should be defined as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"function balanceOf(address _owner) public view returns (uint256 return_parameter) { }\n")),(0,o.kt)("p",null,"It is worth noting that public view methods on Ethereum, which solely retrieve data without making state changes, do not consume gas.")),(0,o.kt)(s.Z,{value:"Near",label:"Near",mdxType:"TabItem"},(0,o.kt)("p",null,"In the Near blockchain, there are three types of public functions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Init Methods")," - These are used as the class constructors to initialize the state of the contract."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"View Methods")," - These functions are used to read the state of the contract variables."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Call Methods")," - These methods can mutate the state of the contract and perform specific actions, such as calling another contract.")),(0,o.kt)("p",null,"The definition of public methods in Near is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn add_message(&mut self, ...) { }\n")),(0,o.kt)("p",null,"For public methods that return variables, the definition would be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn get_messages(&self, from_index: Option<U128>, limit: Option<u64>) -> Vec<PostedMessage> { }\n")),(0,o.kt)("p",null,"The actual implementation of the functions may include the necessary parameters and logic based on the contract's specific requirements.")),(0,o.kt)(s.Z,{value:"Aptos",label:"Aptos",mdxType:"TabItem"},(0,o.kt)("p",null,"Public functions in Aptos are similar to public methods or functions found in other blockchain networks. The definition of a public function in Aptos appears as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"public fun start_collection(account: &signer) {}\n")),(0,o.kt)("p",null,"For public functions that return variables, the definition would be as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"public fun max(a: u8, b: u8): (u8, bool) {}\n")),(0,o.kt)("p",null,"In the Aptos blockchain, it is possible to return one or more values from a function.")),(0,o.kt)(s.Z,{value:"Solana",label:"Solana",mdxType:"TabItem"},(0,o.kt)("p",null,"In Solana, functions are defined as public entry points that act as interfaces visible to the network. The declaration of an entry point follows this format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"entrypoint!(process_instruction);\n")),(0,o.kt)("p",null,"The implementation of the entry point may resemble the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn process_instruction(\n    program_id: &Pubkey,\n    accounts: &[AccountInfo],\n    _instruction_data: &[u8],\n) -> ProgramResult {}\n")),(0,o.kt)("p",null,"Within the entry point function, the necessary parameters are specified, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"program_id"),", which represents the program's identifier, ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts"),", an array of ",(0,o.kt)("inlineCode",{parentName:"p"},"AccountInfo")," providing account details, and ",(0,o.kt)("inlineCode",{parentName:"p"},"_instruction_data"),", representing the instruction data received. The function returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"ProgramResult"),", which indicates the success or failure of the instruction execution."))),(0,o.kt)("h2",{id:"passing-arguments"},"Passing Arguments"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Casper",label:"Casper",mdxType:"TabItem"},(0,o.kt)("p",null,"Named arguments are passed as strings with type specifiers. To provide session arguments to the entry point during a Deploy, you can utilize the following approach:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy \\\n  --node-address http://65.21.235.219:7777 \\\n  --chain-name casper-test \\\n  --secret-key [KEY_PATH]/secret_key.pem \\\n  --payment-amount 2500000000 \\\n  --session-hash hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2 \\\n  --session-entry-point "delegate" \\\n  --session-arg "validator:public_key=\'0145fb72c75e1b459839555d70356a5e6172e706efa204d86c86050e2f7878960f\'" \\\n  --session-arg "amount:u512=\'500000000000\'" \\\n  --session-arg "delegator:public_key=\'0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf\'"\n')),(0,o.kt)("p",null,"To understand the context of this example, refer to: ",(0,o.kt)("a",{parentName:"p",href:"/developers/cli/delegate"},"Delegating with the Casper Client"),"."),(0,o.kt)("p",null,"In the contract, you can access the session arguments as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"let uref: URef = runtime::get_key(Key_Name)\n")),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"get_key")," function to retrieve the desired session argument by specifying the key's name."),(0,o.kt)("p",null,"If you are uncertain how to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"get_key")," function to obtain a specific session argument, check how to ",(0,o.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/simple-contract"},"write a basic smart contract on Casper"),".")),(0,o.kt)(s.Z,{value:"Ethereum",label:"Ethereum",mdxType:"TabItem"},(0,o.kt)("p",null,"Ethereum uses strongly typed function arguments, and developers must explicitly define the input and return variables. The compiler checks the correctness of the arguments passed to the functions during runtime. As a result, developers must explicitly specify the argument and return types in the function signature. The compiler ensures that the provided arguments adhere to the specified types, helping to catch type-related errors and ensure type safety."),(0,o.kt)("p",null,"By enforcing strong typing, the compiler helps prevent potential runtime errors and enhances code reliability by verifying the compatibility of the passed arguments and expected return types.")),(0,o.kt)(s.Z,{value:"Near",label:"Near",mdxType:"TabItem"},(0,o.kt)("p",null,"Strongly typed function arguments require explicitly defining the input and return variables. By enforcing strong typing, the programming language ensures that the arguments passed to a function match the expected types, preventing type-related errors and promoting code correctness. Strong typing provides additional clarity and safety by explicitly stating the data types of the function's inputs and outputs.")),(0,o.kt)(s.Z,{value:"Aptos",label:"Aptos",mdxType:"TabItem"},(0,o.kt)("p",null,"Like Near, Aptos requires strongly typed function arguments, thus preventing type-related errors and promoting code correctness.")),(0,o.kt)(s.Z,{value:"Solana",label:"Solana",mdxType:"TabItem"},(0,o.kt)("p",null,"Like Near and Aptos, Solana requires strongly typed function arguments, thus preventing type-related errors and promoting code correctness."))),(0,o.kt)("h2",{id:"additional-considerations"},"Additional Considerations"),(0,o.kt)("p",null,"When choosing a blockchain, you may also look into the network's consensus mechanism, the tokenomics or economic model, cross-contract communication, smart contract upgrades, and the available software development kits (SDKs)."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Consensus mechanism")," refers to the algorithm the blockchain network uses to achieve agreement on the validity and ordering of transactions. Different blockchains employ various consensus mechanisms such as Proof-of-Work (PoW), Proof-of-Stake (PoS), or Delegated Proof-of-Stake (DPoS). The choice of consensus mechanism impacts factors like security, scalability, and energy efficiency.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Tokenomics")," relates to the economic model of the blockchain network and its native tokens, involving token distribution, inflation, utility, and governance. Understanding the tokenomics of the network is crucial for evaluating the ecosystem's long-term viability and potential value.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Cross-contract capabilities")," refer to the ability of smart contracts to interact and communicate within the blockchain network. This feature is essential for building complex decentralized applications (dApps) and implementing inter-contract functionality.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Contract upgradability")," determines whether the smart contracts installed on the network can be modified or updated after installation. It is essential to assess the flexibility of the chosen blockchain in terms of contract maintenance, bug fixes, and incorporating new features or improvements without disrupting the existing ecosystem.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"SDK availability")," also plays a significant role in the development process. SDKs provide tools, libraries, and documentation to simplify the creation of applications and smart contracts on the blockchain. Evaluating the maturity, community support, and compatibility of the available SDKs is crucial for developers."))),(0,o.kt)("p",null,"Considering these aspects helps when selecting a blockchain that aligns with a project or application's specific requirements and goals."),(0,o.kt)("p",null,"The Casper ecosystem aims to fulfill all of these aspects, including supporting enterprise-grade projects."))}g.isMDXComponent=!0}}]);