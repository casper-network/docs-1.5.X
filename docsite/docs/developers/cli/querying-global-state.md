---
title: Querying Global State
---



# Querying Global State

This page explains how to query global state to find account, contract, and package details.

## Prerequisites

- You have an account and have [installed a contract](./installing-contracts.md) on a Casper network.

## Getting the State Root Hash {#get-state-root-hash}

The first step in querying global state is obtaining the state root hash, which acts as an identifier for the current state of the network. It is like a Git commit ID for commit history, providing a snapshot of the blockchain state at a specific time.

:::note

After sending transactions to the network, it's necessary to fetch the new state root hash to see the changes reflected in the global state. Without doing this, you would be querying past versions of the state.

:::

To get the state root hash, use the `get-state-root-hash` command:

```bash
casper-client get-state-root-hash --node-address [NODE_SERVER_ADDRESS]
```

**Sample request:**

```bash
casper-client get-state-root-hash --node-address http://localhost:11101
```

**Sample response:**

```json
{
  "jsonrpc": "2.0",
  "id": -4225403855447288375,
  "result": {
    "api_version": "2.0.0",
    "state_root_hash": "6b5849caa605acdc29564f303764396a27ef7a6b1a61f7b13109b129e7e70d81"
  }
}
```

## Querying an Account

To find your account details, start by querying global state using the account hash. The response will contain the entity account identifier, needed to query more details about the account. You will need the following information:

* The **node address**, representing an IP address of a peer on the network.

* The **state root hash**, as a hex-encoded hash of the state root.

* A **key** identifier for the query, which in this case would be the account hash.

```bash
casper-client query-global-state \
--node-address [NODE_SERVER_ADDRESS] \
--state-root-hash [STATE_ROOT_HASH] \
--key [ACCOUNT_HASH]
```

**Sample request:**

```bash
casper-client query-global-state \
--node-address http://localhost:11101 \
--state-root-hash 6b5849caa605acdc29564f303764396a27ef7a6b1a61f7b13109b129e7e70d81 \
--key account-hash-6a56c4eee172043975aea72221eaf09f3c3a24f09a379935e44c9979f1ae9463
```

**Sample response:**

```json
{
  "jsonrpc": "2.0",
  "id": 2591514718461273084,
  "result": {
    "api_version": "2.0.0",
    "block_header": null,
    "stored_value": {
      "CLValue": {
        "cl_type": "Key",
        "bytes": "11016a56c4eee172043975aea72221eaf09f3c3a24f09a379935e44c9979f1ae9463",
        "parsed": "entity-account-6a56c4eee172043975aea72221eaf09f3c3a24f09a379935e44c9979f1ae9463"
      }
    },
    "merkle_proof": "[2566 hex chars]"
  }
}
```

Next, see more account details using the `get-entity` command and the entity identifier or the account hash. Both commands will produce the same output. You will need the following information:

* The **node address**, representing an IP address of a peer on the network.

* The **identifier** for an addressable entity or an account. This can be an entity hash, a public key, or an account hash.

```bash
casper-client get-entity \
--node-address [NODE_SERVER_ADDRESS] \
--entity-identifier [FORMATTED_STRING_OR_PATH]
```

**Sample requests:**

```bash
casper-client get-entity \
--node-address http://localhost:11101 \
--entity-identifier entity-account-6a56c4eee172043975aea72221eaf09f3c3a24f09a379935e44c9979f1ae9463
```

OR

```bash
casper-client get-entity \
--node-address http://localhost:11101 \
--entity-identifier account-hash-6a56c4eee172043975aea72221eaf09f3c3a24f09a379935e44c9979f1ae9463
```

**Sample response:**

Notice that the sample response contains several named keys, including "counter", "counter_package_name", and "version". You can use these values to query the contract state further, as shown in the next example.

<details>
<summary>Expand to see the sample response</summary>

```json
{
  "jsonrpc": "2.0",
  "id": 4470312592511523509,
  "result": {
    "api_version": "2.0.0",
    "entity": {
      "AddressableEntity": {
        "entity": {
          "protocol_version": "2.0.0",
          "entity_kind": {
            "Account": "account-hash-6a56c4eee172043975aea72221eaf09f3c3a24f09a379935e44c9979f1ae9463"
          },
          "package_hash": "package-1bf60faed9931e95e99912aa82f545a85f374dcbcd0c145ee2a5820b39b31d51",
          "byte_code_hash": "byte-code-0000000000000000000000000000000000000000000000000000000000000000",
          "main_purse": "uref-21dc8fc358c4e30ae29786bd4842a5f99da83efa0b9ca8461cd2196ffbfd07f1-007",
          "associated_keys": [
            {
              "account_hash": "account-hash-6a56c4eee172043975aea72221eaf09f3c3a24f09a379935e44c9979f1ae9463",
              "weight": 1
            }
          ],
          "action_thresholds": {
            "deployment": 1,
            "upgrade_management": 1,
            "key_management": 1
          },
          "message_topics": []
        },
        "named_keys": [
          {
            "name": "counter",
            "key": "entity-contract-a1d0bf9d96f3efc9ea67f627df3a7cba390bfc582956032db91060ca5d413e68"
          },
          {
            "name": "counter_access_uref",
            "key": "uref-29feb2af8a9d7b6d2ef6be875a0aa326b646a00b7cdd2dd4a65365e84e9f2e9a-007"
          },
          {
            "name": "counter_package_name",
            "key": "package-50d487af45f8cec533c6813801a7630ff97e5ee3964daf7915d5451b4812ac94"
          },
          {
            "name": "version",
            "key": "uref-7bc25880db57763fccfa858185becd8de40a890d9e006e067352f011bdcf03bf-007"
          }
        ],
        "entry_points": []
      }
    },
    "merkle_proof": "[3010 hex chars]"
  }
}
```

</details>

<br></br>

:::tip

If you don't know your account hash, run this command:

```bash
casper-client account-address --public-key [PATH_TO_PUBLIC_KEY]
```

:::

## Querying a Contract

Query global state given the contract identifier and the `query-global-state` command. The contract is stored under the account's named keys, with the key named "counter" and identifier `entity-contract-a1d0bf9d96f3efc9ea67f627df3a7cba390bfc582956032db91060ca5d413e68`. The output will contain the contract's `package_hash`, `main_purse`, `associated_keys`, and `action_thresholds`, but will not contain further details such as the contract's named keys and entry points. You will need to run the `get-entity` command instead for those details. 

For the `query-global-state` command, you will need the following information:

* The **node address**, representing an IP address of a peer on the network.

* The **state root hash**, as a hex-encoded hash of the state root.

* A **key** identifier for the query, which in this case would be the contract address hash.

```bash
casper-client query-global-state \
--node-address [NODE_SERVER_ADDRESS] \
--state-root-hash [STATE_ROOT_HASH] \
--key [CONTRACT_ADDRESS_HASH]
```

**Sample request:**

```bash
casper-client query-global-state \
--node-address http://localhost:11101 \
--state-root-hash 6b5849caa605acdc29564f303764396a27ef7a6b1a61f7b13109b129e7e70d81 \
--key "entity-contract-a1d0bf9d96f3efc9ea67f627df3a7cba390bfc582956032db91060ca5d413e68"
```

**Sample response:**

<details>
<summary>Expand to see the sample response</summary>

```json
{
  "jsonrpc": "2.0",
  "id": -750547909804067196,
  "result": {
    "api_version": "2.0.0",
    "block_header": null,
    "stored_value": {
      "AddressableEntity": {
        "protocol_version": "2.0.0",
        "entity_kind": {
          "SmartContract": "VmCasperV1"
        },
        "package_hash": "package-50d487af45f8cec533c6813801a7630ff97e5ee3964daf7915d5451b4812ac94",
        "byte_code_hash": "byte-code-0577a7c92fd20e1af76aa9e257631cb240e8187191bba2025e88663d0288e936",
        "main_purse": "uref-2cb7e46fcde2c4d395a6850bb3b7edbb0b4db6018643e535fa0dfdeeb006d6ef-007",
        "associated_keys": [
          {
            "account_hash": "account-hash-6a56c4eee172043975aea72221eaf09f3c3a24f09a379935e44c9979f1ae9463",
            "weight": 1
          }
        ],
        "action_thresholds": {
          "deployment": 1,
          "upgrade_management": 1,
          "key_management": 1
        },
        "message_topics": []
      }
    },
    "merkle_proof": "[1508 hex chars]"
  }
}
```
</details>

Next, query global state given the contract identifier and the `get-entity` command, which will provide more details such as the contract's `entry_points` and `named_keys`. You will need the following information:

* The **node address**, representing an IP address of a peer on the network.

* The **entity identifier** for an addressable entity or an account. This can be an entity hash, a public key, or an account hash.

```bash
casper-client get-entity \
--node-address [NODE_SERVER_ADDRESS] \
--entity-identifier [FORMATTED_STRING_OR_PATH]
```

**Sample request:**

```bash
casper-client get-entity \
--node-address http://localhost:11101 \
--entity-identifier entity-contract-a1d0bf9d96f3efc9ea67f627df3a7cba390bfc582956032db91060ca5d413e68
```

**Sample response:**

<details>
<summary>Expand to see the sample response</summary>

```json
{
  "jsonrpc": "2.0",
  "id": -530362264865678930,
  "result": {
    "api_version": "2.0.0",
    "entity": {
      "AddressableEntity": {
        "entity": {
          "protocol_version": "2.0.0",
          "entity_kind": {
            "SmartContract": "VmCasperV1"
          },
          "package_hash": "package-50d487af45f8cec533c6813801a7630ff97e5ee3964daf7915d5451b4812ac94",
          "byte_code_hash": "byte-code-0577a7c92fd20e1af76aa9e257631cb240e8187191bba2025e88663d0288e936",
          "main_purse": "uref-2cb7e46fcde2c4d395a6850bb3b7edbb0b4db6018643e535fa0dfdeeb006d6ef-007",
          "associated_keys": [
            {
              "account_hash": "account-hash-6a56c4eee172043975aea72221eaf09f3c3a24f09a379935e44c9979f1ae9463",
              "weight": 1
            }
          ],
          "action_thresholds": {
            "deployment": 1,
            "upgrade_management": 1,
            "key_management": 1
          },
          "message_topics": []
        },
        "named_keys": [
          {
            "name": "count",
            "key": "uref-65f3f583bf1ac01b6c90d9c9478bd239c09e46f48fb693918726eaab03631407-007"
          }
        ],
        "entry_points": [
          {
            "V1CasperVm": {
              "name": "counter_get",
              "args": [],
              "ret": "I32",
              "access": "Public",
              "entry_point_type": "Called",
              "entry_point_payment": "Caller"
            }
          },
          {
            "V1CasperVm": {
              "name": "counter_inc",
              "args": [],
              "ret": "Unit",
              "access": "Public",
              "entry_point_type": "Called",
              "entry_point_payment": "Caller"
            }
          }
        ]
      }
    },
    "merkle_proof": "[1508 hex chars]"
  }
}
```
</details>

## Querying a Package

You can query information about a package, given its package hash. You will need the following information:

* The **node address**, representing an IP address of a peer on the network.

* The **state root hash**, as a hex-encoded hash of the state root.

* A **key** identifier for the query, which in this case would be the package identifier.

```bash
casper-client query-global-state \
--node-address [NODE_SERVER_ADDRESS] \
--state-root-hash [STATE_ROOT_HASH] \
--key [PACKAGE_ADDRESS]
```

**Sample request:**

```bash
casper-client query-global-state \
--node-address http://localhost:11101 \
--state-root-hash 6b5849caa605acdc29564f303764396a27ef7a6b1a61f7b13109b129e7e70d81 \
--key package-1bf60faed9931e95e99912aa82f545a85f374dcbcd0c145ee2a5820b39b31d51
```

**Sample response:**

The response would contain the `addressable_entity_hash`, the `lock_status` for the `Package`, and the current `entity_version`.

<details>
<summary>Expand to see the sample response</summary>

```bash
{
  "jsonrpc": "2.0",
  "id": -8280509649720542989,
  "result": {
    "api_version": "2.0.0",
    "block_header": null,
    "stored_value": {
      "Package": {
        "versions": [
          {
            "entity_version_key": {
              "protocol_version_major": 2,
              "entity_version": 1
            },
            "addressable_entity_hash": "addressable-entity-6a56c4eee172043975aea72221eaf09f3c3a24f09a379935e44c9979f1ae9463"
          }
        ],
        "disabled_versions": [],
        "groups": [],
        "lock_status": "Unlocked"
      }
    },
    "merkle_proof": "[2934 hex chars]"
  }
}
```
</details>

## Querying a Named Key

You can dive into the data stored in global state using the optional query path argument `-q` or `--query-path`. You will need the following information:

* The **node address**, representing an IP address of a peer on the network.

* The **state root hash**, as a hex-encoded hash of the state root.

* A **key** identifier for the query. This must be a properly formatted public key, account hash, contract address hash, URef, transfer hash, deploy-info hash,era-info number, bid, withdraw or dictionary address.

* The **query path**, entered in this instance as `q`, which is an optional query path argument that allows you to drill into the specifics of a query with respect to the key.

```bash
casper-client query-global-state \
--node-address [NODE_SERVER_ADDRESS] \
--state-root-hash [STATE_ROOT_HASH] \
--key [HASH_STRING] \
-q "PATH_FROM_KEY"
```

### Query a value using the contract address hash and its named key

Next, you can query a named key associated with the contract using the `query-global-state` command and the `-q` option.

```bash
casper-client query-global-state \
--node-address http://localhost:11101 \
--state-root-hash [STATE_ROOT_HASH] \
--key [CONTRACT_ADDRESS_HASH] \
-q "count"
```

**Sample request**:

```bash
casper-client query-global-state \
--node-address http://localhost:11101 \
--state-root-hash 6b5849caa605acdc29564f303764396a27ef7a6b1a61f7b13109b129e7e70d81 \
--key "entity-contract-a1d0bf9d96f3efc9ea67f627df3a7cba390bfc582956032db91060ca5d413e68" \
-q "count"
```

**Sample response**:

```json
{
  "jsonrpc": "2.0",
  "id": -672620332620630019,
  "result": {
    "api_version": "2.0.0",
    "block_header": null,
    "stored_value": {
      "CLValue": {
        "cl_type": "I32",
        "bytes": "00000000",
        "parsed": 0
      }
    },
    "merkle_proof": "[7272 hex chars]"
  }
}
```

### Query a value using the account hash and its named key

It is also possible to check the state of a specific contract variable in global state given the account hash under which the contract was installed. Here we query the named key "count", stored under another key identifying the contract and named "counter".

```bash
casper-client query-global-state \
  --node-address http://localhost:11101 \
  --state-root-hash [STATE_ROOT_HASH] \
  --key [ACCOUNT_HASH] \
  -q "counter/count"
```

**Sample request**:

```bash
casper-client query-global-state \
  --node-address http://localhost:11101 \
  --state-root-hash 6b5849caa605acdc29564f303764396a27ef7a6b1a61f7b13109b129e7e70d81 \
  --key account-hash-6a56c4eee172043975aea72221eaf09f3c3a24f09a379935e44c9979f1ae9463 \
  -q "counter/count"
```

**Sample response**:

```json
{
  "jsonrpc": "2.0",
  "id": -8997536139716357387,
  "result": {
    "api_version": "2.0.0",
    "block_header": null,
    "stored_value": {
      "CLValue": {
        "cl_type": "I32",
        "bytes": "00000000",
        "parsed": 0
      }
    },
    "merkle_proof": "[14486 hex chars]"
  }
}
```

<!-- Hide the video for now. It needs to be redone.
## Video Walkthrough

This video shows you what to expect when querying the network.

<p align="center">
<iframe width="400" height="225" src="https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=9" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</p>
-->


## What's Next? {#whats-next}

- Learn [different ways to call contracts](./calling-contracts.md) using the Casper command-line client.
