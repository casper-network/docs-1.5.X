---
title: Verifying Contracts
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Verifying Smart Contracts

This document describes actions needed for smart contract verification using the [Casper CLI client](../prerequisites.md#install-casper-client).

## Prerequisites

- You have built and installed a contract

## Verifying contracts using the Casper Client {#verifying-the-contract}

You can use the Casper client's `verify-contract` command to have your contract verified. This command archives your contract's source code and sends it to the verification service. This service performs all the same operations on the provided source that a node does when installing a smart contract on the blockchain. Based on the input transaction hash, the resulting binary is then compared byte-by-byte against the contract fetched from the Casper blockchain. If they match, then the verification is a success.

```bash
casper-client verify-contract --verification-url-basepath <HOST:PORT> <TRANSACTION-HASH> <PATH>
```

1. `verification-url-basepath` - The address of the verification service that will perform the operation; the current two options are https://staging.codeverifier.casper.network for Testnet and https://codeverifier.casper.network for Mainnet.
2. `<TRANSACTION-HASH>` - Unique transaction hash, which is part of the cryptographic security of blockchain technology. This is the output of the put-txn command if the transaction was a success.
3. `<PATH>` - the path to the smart contracts source code. If this argument is omitted the the current working directory will be used.

The prerequisites for the source code are the same as when installing it on the blockchain:

* The source code must be a Rust project as described in The Cargo Book.

* There has to be either rust-toolchain or rust-toolchain.toml file and its contents must define a valid Rust toolchain, as described in The rustup book.

* The installed contract (WebAssembly binary) must be stripped of debugging symbols before submitting it to the Casper node. This can be achieved by specifying strip = "symbols" in the Rust project configuration or using wasm-strip from the wabt package.

If the verification result is a success then users will be able to see that information various websites integrated with the service f.e. on https://staging.casperecosystem.io/check-verification-status/ for Testnet transactions and https://casperecosystem.io/check-verification-status/ for Mainnet transactions. This will also give them the ability to browse through the source code of your smart contract which adds a new layer of transparency and trust.
