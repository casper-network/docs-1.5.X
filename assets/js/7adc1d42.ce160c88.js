"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9889],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var s=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=s.createContext({}),l=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return s.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||a;return n?s.createElement(m,i(i({ref:t},p),{},{components:n})):s.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var l=2;l<a;l++)i[l]=n[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}h.displayName="MDXCreateElement"},363:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var s=n(3117),r=n(102),a=(n(7294),n(3905)),i=["components"],o={},c="Testing Session Code",l={unversionedId:"developers/writing-onchain-code/testing-session-code",id:"developers/writing-onchain-code/testing-session-code",title:"Testing Session Code",description:"This section describes how to test session code using the Casper unit-testing framework. The writing session code section is a prerequisite for this tutorial, which uses the example code described here.",source:"@site/source/docs/casper/developers/writing-onchain-code/testing-session-code.md",sourceDirName:"developers/writing-onchain-code",slug:"/developers/writing-onchain-code/testing-session-code",permalink:"/developers/writing-onchain-code/testing-session-code",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/developers/writing-onchain-code/testing-session-code.md",tags:[],version:"current",lastUpdatedAt:1683036971,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{},sidebar:"developers",previous:{title:"Writing Session Code",permalink:"/developers/writing-onchain-code/writing-session-code"},next:{title:"Best Practices for Casper Smart Contract Authors",permalink:"/developers/writing-onchain-code/best-practices"}},p={},u=[{value:"Specifying Dependencies in Cargo.toml",id:"specifying-dependencies",level:2},{value:"Writing the Tests",id:"writing-the-tests",level:2},{value:"Importing Required Packages",id:"importing-required-packages",level:3},{value:"Defining The Constants",id:"defining-the-constants",level:3},{value:"Creating a Test Function",id:"creating-a-test-function",level:3},{value:"Running the Test",id:"running-the-test",level:3},{value:"Other Examples",id:"other-examples",level:3},{value:"Video Walkthrough",id:"video-walkthrough",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}],d={toc:u},h="wrapper";function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)(h,(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"testing-session-code"},"Testing Session Code"),(0,a.kt)("p",null,"This section describes how to test session code using the Casper unit-testing framework. The ",(0,a.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/writing-session-code"},"writing session code")," section is a prerequisite for this tutorial, which uses the example code described ",(0,a.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/writing-session-code#writing-session-code"},"here"),"."),(0,a.kt)("h2",{id:"specifying-dependencies"},"Specifying Dependencies in Cargo.toml"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/two-party-multi-sig/blob/main/tests/Cargo.toml"},"Cargo.toml")," sample file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"tests")," directory contains the test framework dependencies. Specify the dependencies for your tests similarly and update the crate versions. Dependencies may vary with each project. These are the basic dependencies the testing framework requires:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'[dev-dependencies]\ncasper-engine-test-support = { version = "2.2.0", features = ["test-support"] }\ncasper-execution-engine = "2.0.0"\ncasper-types = "1.5.0"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"casper-execution-engine")," - This crate imports the execution engine functionality, enabling Wasm execution within the test framework. Each node contains an instance of an execution engine, and the testing framework simulates this behavior."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"casper-engine-test-support")," - A helper crate that provides the interface to write tests and interact with an instance of the execution engine."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"casper-types")," - Types shared by many Casper crates for use on a Casper network.")),(0,a.kt)("h2",{id:"writing-the-tests"},"Writing the Tests"),(0,a.kt)("p",null,"Tests for this example session code reside in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/two-party-multi-sig/blob/main/tests/src/integration_tests.rs"},"tests/src/integration-tests.rs")," file."),(0,a.kt)("p",null,"Notice that this file contains an empty ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," method to initialize the test program. Alternatively, we could use the ",(0,a.kt)("inlineCode",{parentName:"p"},"#![no_main]")," annotation at the top of the file, as we did ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/two-party-multi-sig/blob/236bb18b9e98da7f9d8706f5e4825494845cfec2/contract/src/main.rs#L1-L2"},"here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n panic!("Execute \\"cargo test\\" to test the contract, not \\"cargo run\\".");\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"#[cfg(test)]")," attribute tells the Rust compiler to compile and run the tests only when invoking ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo test"),", not while debugging or releasing. All testing functions reside within the grouping mechanism ",(0,a.kt)("inlineCode",{parentName:"p"},"mod tests"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[cfg(test)]\nmod tests {\n    // The entire test program resides here\n}\n")),(0,a.kt)("h3",{id:"importing-required-packages"},"Importing Required Packages"),(0,a.kt)("p",null,"Next, import the packages required for the tests to run. The example tests use these packages:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"    use casper_engine_test_support::{\n        ExecuteRequestBuilder, InMemoryWasmTestBuilder, DEFAULT_ACCOUNT_ADDR,\n        DEFAULT_RUN_GENESIS_REQUEST,\n    };\n    use casper_types::account::AccountHash;\n    use casper_types::{runtime_args, RuntimeArgs};\n")),(0,a.kt)("h3",{id:"defining-the-constants"},"Defining The Constants"),(0,a.kt)("p",null,"The names of the runtime arguments are defined as constants. Using the exact names as in the original contract class is mandatory to define these constants. These are dictated by the arguments specified by the session code. If your session code takes in different arguments, you should define them as constants at this point."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'const ASSOCIATED_ACCOUNT_HASH: AccountHash = AccountHash::new([1u8; 32]); // hash of the associated account\nconst ASSOCIATED_ACCOUNT: &str = "deployment-account"; // the associated account argument\nconst CONTRACT_WASM: &str = "contract.wasm"; // file to pass to the instance of the EE\n')),(0,a.kt)("h3",{id:"creating-a-test-function"},"Creating a Test Function"),(0,a.kt)("p",null,"In this step, we create a program to test the session code. The bodies of test functions typically perform some setup, run the code, then verify the results using assertions. Each test function is annotated with the ",(0,a.kt)("inlineCode",{parentName:"p"},"#[test]")," attribute."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[test]\nfn <unit-test-name>{\n   // Test function implementation\n}\n")),(0,a.kt)("p",null,"This ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/two-party-multi-sig/blob/236bb18b9e98da7f9d8706f5e4825494845cfec2/tests/src/integration_tests.rs#L15-L55"},"unit test")," is a good example of testing session code. At a high level, the test follows this process:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Initialize an instance of the execution engine and the ",(0,a.kt)("inlineCode",{parentName:"li"},"InMemoryWasmTestBuilder"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"    let mut builder = InMemoryWasmTestBuilder::default();\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Execute the genesis process.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"    builder.run_genesis(&*DEFAULT_RUN_GENESIS_REQUEST).commit();\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Execute the test-specific logic. In this example, retrieve information about the account running the session code and its associated keys. For full details, visit ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/two-party-multi-sig/blob/236bb18b9e98da7f9d8706f5e4825494845cfec2/tests/src/integration_tests.rs#L15-L55"},"GitHub"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Retrieve runtime arguments, which should be the same as defined in the contract.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create the execution request that sets up the session code to be processed. In this example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"CONTRACT_WASM")," is the session code."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"    let execute_request =\n        ExecuteRequestBuilder::standard(*DEFAULT_ACCOUNT_ADDR, CONTRACT_WASM, runtime_args)\n            .build();\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Invoke the execution engine to process the session code.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"    builder.exec(execute_request).expect_success().commit();\n")),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Verify that the results match the expected output. This example checks the associated keys.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"    assert!(associated_keys.contains_key(&ASSOCIATED_ACCOUNT_HASH));\n")),(0,a.kt)("h3",{id:"running-the-test"},"Running the Test"),(0,a.kt)("p",null,"This example uses a ",(0,a.kt)("inlineCode",{parentName:"p"},"Makefile")," to run the tests."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"make test\n")),(0,a.kt)("p",null,"Under the hood, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Makefile")," generates a ",(0,a.kt)("inlineCode",{parentName:"p"},"tests/wasm")," folder, copies the Wasm to the folder, and runs the tests with ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo test"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p tests/wasm\ncp contract/target/wasm32-unknown-unknown/release/contract.wasm tests/wasm\ncd tests && cargo test\n")),(0,a.kt)("h3",{id:"other-examples"},"Other Examples"),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/counter/blob/master/tests/src/integration_tests.rs"},"counter unit tests"),", we use session code to call the contract. The code loads the account that pays for the session code, the session code Wasm, and the runtime arguments. Then, the code invokes the execution engine to process the session code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"    // Use session code to increment the counter.\n    let session_code_request = ExecuteRequestBuilder::standard(\n        *DEFAULT_ACCOUNT_ADDR,\n        COUNTER_CALL_WASM,\n        runtime_args! {\n            CONTRACT_KEY => contract_v1_hash\n        },\n    )\n    .build();\n\n    builder.exec(session_code_request)\n        .expect_success()\n        .commit();\n")),(0,a.kt)("p",null,"The verification step looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'\n    let incremented_count = builder\n        .query(None, count_key, &[])\n        .expect("should be stored value.")\n        .as_cl_value()\n        .expect("should be cl value.")\n        .clone()\n        .into_t::<i32>()\n        .expect("should be i32.");\n\n    assert_eq!(incremented_count, 1);\n')),(0,a.kt)("p",null,"For many more examples, visit the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/tree/dev/smart_contracts/contracts/test"},"casper-node")," GitHub repository."),(0,a.kt)("h2",{id:"video-walkthrough"},"Video Walkthrough"),(0,a.kt)("p",null,"The following brief video describes testing the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/two-party-multi-sig/"},"sample session code")," for configuring an account."),(0,a.kt)("p",{align:"center"},(0,a.kt)("iframe",{width:"400",height:"225",src:"https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=5",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,a.kt)("h2",{id:"whats-next"},"What's Next?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Learn to ",(0,a.kt)("a",{parentName:"li",href:"/developers/cli/installing-contracts"},"install a contract and query global state"),".")))}m.isMDXComponent=!0}}]);