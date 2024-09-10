---
title: Overview
---

# Interacting with the Casper JSON-RPC API

Casper uses a custom JSON-RPC implementation called `casper-json-rpc` that complies with the [JSON-RPC 2.0 specification](https://www.jsonrpc.org/specification).

The [Casper Sidecar](../../operators/setup/casper-sidecar.md) service offers a JSON-RPC API server for clients to interact with a Casper node. The Sidecar acts as a JSON bridge between subscribers and a Casper node's binary port, producing faster responses and reducing the load placed on the node. For more details on how the JSON-RPC API works, see the [JSON-RPC README](https://github.com/casper-network/casper-sidecar/blob/feat-2.0/json_rpc/README.md) in the Sidecar repository. The Sidecar usually runs on the same machine as the node process, and you need to find the port on which to access the Sidecar.

You can find the latest RPC schema in the Sidecar's [GitHub repository](https://github.com/casper-network/casper-sidecar/blob/feat-2.0/resources/test/rpc_schema.json). <!--TODO when feat-2.0 merges to dev, update this link.-->

The Casper client subcommand `list-rpcs` also provides all currently supported RPCs. Here is an example of running the Casper client to list RPCs:

```sh
casper-client list-rpcs --node-address <HOST:PORT>
```

You may use [Postman](https://www.postman.com/) or write code to interact with the Casper JSON-RPC API, which is fully compatible with the JSON-RPC 2.0 Specification.



## Table of Contents

|Page                                                                       |Description                                                               |
|---------------------------------------------------------------------------|--------------------------------------------------------------------------|
|[Guidance for JSON-RPC SDK Compliance](./guidance.md)                      |Requirements for a compliant Casper SDK                                   |
|[Required JSON-RPC Methods for Minimal Compliance](./minimal-compliance.md)|Methods required for a minimally compliant Casper SDK                     |
|[Transactional JSON-RPC Method](./json-rpc-transactional.md)               |Methods allowing interaction with a Casper network                        |
|[Informational JSON-RPC Methods](./json-rpc-informational.md)              |Methods returning information about the network from a Casper node        |
|[Proof-of-Stake JSON-RPC Methods](./json-rpc-pos.md)                       |Methods pertaining to Proof-of-Stake functionality on a Casper network    |
|[Types](./types_chain.md)                                                  |Information on types used within JSON-RPC methods                         |
|[CL Types](./types_cl.md)                                                  |Information related to CL Types                                           |
