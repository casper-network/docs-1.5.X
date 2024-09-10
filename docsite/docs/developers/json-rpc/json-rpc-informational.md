# Informational JSON-RPC Methods


The following methods return information from a node on a Casper network. The response should be identical, regardless of the node queried, as the information in question is objective and common to all nodes within a network.

---

## chain_get_block

This method returns the JSON representation of a [Block](../../concepts/design/casper-design.md#block-structure-head) from the network. If you do not specify a `block_identifier`, you will receive the most recent block.

|Parameter|Type|Description|
|---------|----|-----------| 
|[block_identifier](types_chain.md#blockidentifier)|Object|The Block hash or the Block height. (Optional)|

<details>

<summary>Example chain_get_block request</summary>

```json

{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "chain_get_block",
  "params": [
    {
      "name": "block_identifier",
      "value": {
        "Hash": "0744fcb72af43c5cc372039bc5a8bfee48808a9ce414acc0d6338a628c20eb42"
      }
    }
  ]
}

```

</details>

### `chain_get_block_result`

The result from `chain_get_block` depends on block availability from a given node. If `chain_get_block` returns an error message that the node does not have information on the given block, you may attempt to get the information from a different node.

|Parameter|Type|Description|
|---------|----|-----------| 
|api_version|String|The RPC API version.|
|[block](types_chain.md#jsonblockwithsignatures)|Object|The Block, if found. (Optional)|

<details>

<summary>Example chain_get_block result</summary>

```json

{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "name": "chain_get_block_result",
    "value": {
      "api_version": "2.0.0",
      "block_with_signatures": {
        "block": {
          "Version2": {
            "hash": "0744fcb72af43c5cc372039bc5a8bfee48808a9ce414acc0d6338a628c20eb42",
            "header": {
              "parent_hash": "0707070707070707070707070707070707070707070707070707070707070707",
              "state_root_hash": "0808080808080808080808080808080808080808080808080808080808080808",
              "body_hash": "48859fb4865d8637d6a35cb224e222cd0e1b1c2dd72928932c1e35ac0550818b",
              "random_bit": true,
              "accumulated_seed": "ac979f51525cfd979b14aa7dc0737c5154eabe0db9280eceaa8dc8d2905b20d5",
              "era_end": {
                "equivocators": [
                  "013b6a27bcceb6a42d62a3a8d02a6f0d73653215771de243a63ac048a18b59da29"
                ],
                "inactive_validators": [
                  "018139770ea87d175f56a35466c34c7ecccb8d8a91b4ee37a25df60f5b8fc9b394"
                ],
                "next_era_validator_weights": [
                  {
                    "validator": "013b6a27bcceb6a42d62a3a8d02a6f0d73653215771de243a63ac048a18b59da29",
                    "weight": "123"
                  },
                  {
                    "validator": "016e7a1cdd29b0b78fd13af4c5598feff4ef2a97166e3ca6f2e4fbfccd80505bf1",
                    "weight": "456"
                  },
                  {
                    "validator": "018a875fff1eb38451577acd5afee405456568dd7c89e090863a0557bc7af49f17",
                    "weight": "789"
                  }
                ],
                "rewards": {},
                "next_era_gas_price": 1
              },
              "timestamp": "2020-11-17T00:39:24.072Z",
              "era_id": 1,
              "height": 10,
              "protocol_version": "1.0.0",
              "proposer": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c",
              "current_gas_price": 1,
              "last_switch_block_hash": "0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a"
            },
            "body": {
              "transactions": {
                "0": [
                  {
                    "Version1": "1414141414141414141414141414141414141414141414141414141414141414"
                  }
                ],
                "1": [
                  {
                    "Version1": "1515151515151515151515151515151515151515151515151515151515151515"
                  }
                ],
                "2": [
                  {
                    "Version1": "1616161616161616161616161616161616161616161616161616161616161616"
                  }
                ],
                "3": [
                  {
                    "Version1": "1717171717171717171717171717171717171717171717171717171717171717"
                  }
                ]
              },
              "rewarded_signatures": []
            }
          }
        },
        "proofs": [
          {
            "public_key": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c",
            "signature": "01e18ca03d2ef0238a6a2460a222e0b818406bda99d4c05502c80232013559b926d1c8bca6bf65386f54a847d7850cb76c0c5fd5e633c34c749b8b9958a638d806"
          }
        ]
      }
    }
  }
}

```

</details>

## chain_get_block_transfers

This method returns all **successful** native transfers within a given [Block](../../concepts/design/casper-design.md#block-structure-head) from a network.  If you do not specify a `block_identifier`, you will receive the transfers from the most recent block.

|Parameter|Type|Description|
|---------|----|-----------| 
|[block_identifier](types_chain.md#blockidentifier)|Object|The Block hash. (Optional)|

<details>

<summary>Example chain_get_block_transfers request</summary>

```json

{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "chain_get_block_transfers",
  "params": [
    {
      "name": "block_identifier",
      "value": {
        "Hash": "0707070707070707070707070707070707070707070707070707070707070707"
      }
    }
  ]
}

```
</details>

### `chain_get_block_transfers_result`

|Parameter|Type|Description|
|---------|----|-----------| 
|api_version|String|The RPC API version.|
|[block_hash](./types_chain.md#blockhash)|Object|The Block hash, if found. (Optional)|
|[transfers](./types_chain.md#transfer)|Array|The Block's successful transfers, if found. (Optional)|

<details>

<summary>Example chain_get_block_transfers result</summary>

```json

{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "name": "chain_get_block_transfers_result",
    "value": {
      "api_version": "2.0.0",
      "block_hash": "0707070707070707070707070707070707070707070707070707070707070707",
      "transfers": [
        {
          "Version2": {
            "transaction_hash": {
              "Version1": "0101010101010101010101010101010101010101010101010101010101010101"
            },
            "from": {
              "AccountHash": "account-hash-0202020202020202020202020202020202020202020202020202020202020202"
            },
            "to": "account-hash-0303030303030303030303030303030303030303030303030303030303030303",
            "source": "uref-0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a-007",
            "target": "uref-1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b-000",
            "amount": "1000000000000",
            "gas": "2500000000",
            "id": 999
          }
        }
      ]
    }
  }
}

```

</details>

## chain_get_era_summary

This method returns the era summary at a given [Block](../../concepts/design/casper-design.md#block-structure-head). If you do not specify a `block_identifier`, you will receive the era summary at the highest state root hash.

|Parameter|Type|Description|
|---------|----|-----------|
|[block_identifier](types_chain.md#blockidentifier)|Object|The Block hash. (Optional)|

<details>

<summary>Example chain_get_era_summary request</summary>

```json

{
  "id": 1,
  "jsonrpc":"2.0",
  "method":"chain_get_era_summary",
  "params": [
    {
      "name": "block_identifier",
      "value": {
        "Hash": "0744fcb72af43c5cc372039bc5a8bfee48808a9ce414acc0d6338a628c20eb42"
      }
    }
  ]
}

```

</details>

### `chain_get_era_summary_result`

|Parameter|Type|Description|
|---------|----|-----------|
|api_version|String|The RPC API version.|
|[era_summary](./types_chain.md#erasummary)|Object|The era summary, if found. (Optional)|

<details>

<summary>Example chain_get_era_summary result</summary>

```json

{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "name": "chain_get_era_summary_result",
    "value": {
      "api_version": "2.0.0",
      "era_summary": {
        "block_hash": "0744fcb72af43c5cc372039bc5a8bfee48808a9ce414acc0d6338a628c20eb42",
        "era_id": 42,
        "stored_value": {
          "EraInfo": {
            "seigniorage_allocations": [
              {
                "Delegator": {
                  "delegator_public_key": "01e1b46a25baa8a5c28beb3c9cfb79b572effa04076f00befa57eb70b016153f18",
                  "validator_public_key": "012a1732addc639ea43a89e25d3ad912e40232156dcaa4b9edfc709f43d2fb0876",
                  "amount": "1000"
                }
              },
              {
                "Validator": {
                  "validator_public_key": "012a1732addc639ea43a89e25d3ad912e40232156dcaa4b9edfc709f43d2fb0876",
                  "amount": "2000"
                }
              }
            ]
          }
        },
        "state_root_hash": "0808080808080808080808080808080808080808080808080808080808080808",
        "merkle_proof": "01000000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625016ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625000000003529cde5c621f857f75f3810611eb4af3f998caaa9d4a3413cf799f99c67db0307010000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a7253614761462501010102000000006e06000000000074769d28aac597a36a03a932d4b43e4f10bf0403ee5c41dd035102553f5773631200b9e173e8f05361b681513c14e25e3138639eb03232581db7557c9e8dbbc83ce94500226a9a7fe4f2b7b88d5103a4fc7400f02bf89c860c9ccdd56951a2afe9be0e0267006d820fb5676eb2960e15722f7725f3f8f41030078f8b2e44bf0dc03f71b176d6e800dc5ae9805068c5be6da1a90b2528ee85db0609cc0fb4bd60bbd559f497a98b67f500e1e3e846592f4918234647fca39830b7e1e6ad6f5b7a99b39af823d82ba1873d000003000000010186ff500f287e9b53f823ae1582b1fa429dfede28015125fd233a31ca04d5012002015cc42669a55467a1fdf49750772bfc1aed59b9b085558eb81510e9b015a7c83b0301e3cf4a34b1db6bfa58808b686cb8fe21ebe0c1bcbcee522649d2b135fe510fe3"
      }
    }
  }
}

```

</details>

## chain_get_state_root_hash

This method returns a state root hash at a given [Block](../../concepts/design/casper-design.md#block-structure-head). If you do not specify a `block_identifier`, you will receive the highest state root hash.

|Parameter|Type|Description|
|---------|----|-----------|
|[block_identifier](types_chain.md#blockidentifier)|Object|The Block hash. (Optional)|

<details>

<summary>Example chain_get_state_root_hash request</summary>

```json

{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "chain_get_state_root_hash",
  "params": [
    {
      "name": "block_identifier",
      "value": {
        "Height": 10
      }
    }
  ]
}

```

</details>

### `chain_get_state_root_hash_result`

|Parameter|Type|Description|
|---------|----|-----------|
|api_version|String|The RPC API version.|
|[state_root_hash](types_chain.md#digest)|String| Hex-encoded hash of the state root.|

<details>

<summary>Example chain_get_state_root_hash result</summary>

```json

{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "name": "chain_get_state_root_hash_result",
    "value": {
      "api_version": "2.0.0",
      "state_root_hash": "0808080808080808080808080808080808080808080808080808080808080808"
    }
  }
}

```

</details>

## info_get_chainspec

This method returns the raw bytes of the chainspec.toml, genesis accounts.toml, and global_state.toml files.

<details>

<summary>Example info_get_chainspec request</summary>

```json

{
  "id": 5510244237763930243,
  "jsonrpc": "2.0",
  "method": "info_get_chainspec",
  "params": []
}

```

</details>

### `info_get_chainspec_result`

|Parameter|Type|Description|
|---------|----|-----------| 
|api_version|String|The RPC API version.|
|[chainspec_bytes](types_chain.md#chainspecrawbytes)|Object|The raw bytes of the chainspec.toml, genesis accounts.toml, and global_state.toml files.|

<details>

<summary>Example info_get_chainspec result</summary>

Please note that adding a `--vv` flag will return the full chainspec bytes.

```json

{
  "jsonrpc": "2.0",
  "result": {
    "name": "info_get_chainspec_result",
    "value": {
      "api_version": "2.0.0",
      "chainspec_bytes": {
        "chainspec_bytes": "[22040 hex chars]",
        "maybe_genesis_accounts_bytes": null,
        "maybe_global_state_bytes": null
      }
    }
  },
  "id": 5510244237763930243
}

```

</details>

## info_get_deploy

:::caution

**DEPRECATED**: Use [info_get_transaction](#info_get_transaction) instead.

:::

This method retrieves a [Deploy](../../concepts/design/casper-design.md#execution-semantics-deploys) from a network. It requires a `deploy_hash` to query the Deploy.

|Parameter|Type|Description|
|---------|----|-----------|
|[deploy_hash](types_chain.md#deployhash)|String|The Deploy hash.|
|[finalized_approvals](types_chain.md#finalizedapprovals)|Boolean|Determines whether to return the Deploy with the finalized approvals substituted. (Optional)|

<details>

<summary>Example info_get_deploy request</summary>

```json

{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "info_get_deploy",
  "params": [
    {
      "name": "deploy_hash",
      "value": "5c9b3b099c1378aa8e4a5f07f59ff1fcdc69a83179427c7e67ae0377d94d93fa"
    },
    {
      "name": "finalized_approvals",
      "value": true
    }
  ]
}

```

</details>

### `info_get_deploy_result`

The response contains the Deploy and the results of executing the Deploy.

If the `execution_info` field is empty, it means that the network processed the `Deploy`, but has yet to execute it. If the network executed the `Deploy`, it will return the results of the execution. The execution results contain the Block hash which contains the Deploy.

|Parameter|Type|Description|
|---------|----|-----------|    
|api_version|String|The RPC API version.|
|[deploy](./types_chain.md#deploy)|Object|The Deploy.|
|[execution_info](./types_chain.md#executioninfo)|Array|An array of execution results with Block hashes, if found. (Optional)|

<details>

<summary>Example info_get_deploy result</summary>

```json

{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "name": "info_get_deploy_result",
    "value": {
      "api_version": "2.0.0",
      "deploy": {
        "hash": "5c9b3b099c1378aa8e4a5f07f59ff1fcdc69a83179427c7e67ae0377d94d93fa",
        "header": {
          "account": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c",
          "timestamp": "2020-11-17T00:39:24.072Z",
          "ttl": "1h",
          "gas_price": 1,
          "body_hash": "d53cf72d17278fd47d399013ca389c50d589352f1a12593c0b8e01872a641b50",
          "dependencies": [
            "0101010101010101010101010101010101010101010101010101010101010101"
          ],
          "chain_name": "casper-example"
        },
        "payment": {
          "StoredContractByName": {
            "name": "casper-example",
            "entry_point": "example-entry-point",
            "args": [
              [
                "amount",
                {
                  "cl_type": "I32",
                  "bytes": "e8030000",
                  "parsed": 1000
                }
              ]
            ]
          }
        },
        "session": {
          "Transfer": {
            "args": [
              [
                "amount",
                {
                  "cl_type": "I32",
                  "bytes": "e8030000",
                  "parsed": 1000
                }
              ]
            ]
          }
        },
        "approvals": [
          {
            "signer": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c",
            "signature": "014c1a89f92e29dd74fc648f741137d9caf4edba97c5f9799ce0c9aa6b0c9b58db368c64098603dbecef645774c05dff057cb1f91f2cf390bbacce78aa6f084007"
          }
        ]
      },
      "execution_info": {
        "block_hash": "0744fcb72af43c5cc372039bc5a8bfee48808a9ce414acc0d6338a628c20eb42",
        "block_height": 10,
        "execution_result": {
          "Version2": {
            "initiator": {
              "PublicKey": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c"
            },
            "error_message": null,
            "limit": "123456",
            "consumed": "100000",
            "cost": "246912",
            "payment": [
              {
                "source": "uref-0101010101010101010101010101010101010101010101010101010101010101-001"
              }
            ],
            "transfers": [
              {
                "Version2": {
                  "transaction_hash": {
                    "Version1": "0101010101010101010101010101010101010101010101010101010101010101"
                  },
                  "from": {
                    "AccountHash": "account-hash-0202020202020202020202020202020202020202020202020202020202020202"
                  },
                  "to": "account-hash-0303030303030303030303030303030303030303030303030303030303030303",
                  "source": "uref-0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a-007",
                  "target": "uref-1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b-000",
                  "amount": "1000000000000",
                  "gas": "2500000000",
                  "id": 999
                }
              }
            ],
            "size_estimate": 186,
            "effects": [
              {
                "key": "account-hash-2c4a11c062a8a337bfc97e27fd66291caeb2c65865dcb5d3ef3759c4c97efecb",
                "kind": {
                  "AddUInt64": 8
                }
              },
              {
                "key": "deploy-af684263911154d26fa05be9963171802801a0b6aff8f199b7391eacb8edc9e1",
                "kind": "Identity"
              }
            ]
          }
        }
      }
    }
  }
}

```

</details>

## info_get_reward

This method returns the reward for a given era and a validator or delegator.

|Parameter|Type|Description|
|---------|----|-----------|
|[validator](types_chain.md#publickey)|String|The public key of the validator.|
|[era_identifier](types_chain.md#eraidentifier)|Object|The era identifier. If `None`, the last finalized era is used. (Optional)|
|[delegator](types_chain.md#publickey)|String|The public key of the delegator. If `Some`, the rewards for the delegator are returned. If `None`, the rewards for the validator are returned. (Optional)|

<details>

<summary>Example info_get_reward request</summary>

```json

{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "info_get_reward",
  "params": [
      {
          "name": "era_identifier",
          "value": {
              "Era": 1
          }
      },
      {
          "name": "validator",
          "value": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c"
      },
      {
          "name": "delegator",
          "value": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c"
      }
  ],
}

```

</details>

### `info_get_reward_result`

|Parameter|Type|Description|
|---------|----|-----------|    
|api_version|String|The RPC API version.|
|[era_id](types_chain.md#eraid)|Integer|The era for which the reward was calculated.|
|[reward_amount](types_chain.md#u512)|Integer|The total reward amount in the requested era.|

<details>

<summary>Example info_get_reward result</summary>

```json

{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "name": "info_get_reward_result",
    "value": {
      "api_version": "2.0.0",
      "reward_amount": "42",
      "era_id": 1
    }
  } 

```

</details>

## info_get_transaction

This method retrieves a transaction from a network. It requires a `transaction_hash` to query the Deploy.

|Parameter|Type|Description|
|---------|----|-----------|
|[transaction_hash](types_chain.md#transactionhash)|String|The transaction hash.|
|[finalized_approvals](types_chain.md#finalizedapprovals)|Boolean|Determines whether to return the transaction with the finalized approvals substituted. (Optional)|

<details>

<summary>Example info_get_transaction request</summary>

```json

{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "info_get_transaction",
  "params": [
    {
      "name": "transaction_hash",
      "value": {
        "Version1": "f5582cb81a5abda63ebaa4edb3b05210ecbd63ffb8dd17bfbeb3b867f4014468"
      }
    },
    {
      "name": "finalized_approvals",
      "value": true
    }
  ],
}

```

</details>

### `info_get_transaction_result`

The response contains the transaction and the results of executing it on the network.

If the `execution_info` field is empty, it means that the network processed the transaction but has yet to execute it. If the network executed the transaction, it will return the execution information, along with the block hash containing the transaction.

|Parameter|Type|Description|
|---------|----|-----------|    
|api_version|String|The RPC API version.|
|[transaction](./types_chain.md#transaction)|Object|The transaction.|
|[execution_info](./types_chain.md#executioninfo)|Array|An array of execution results with Block hashes, if found. (Optional)|

<details>

<summary>Example info_get_transaction result</summary>

```json

{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "name": "info_get_transaction_result",
    "value": {
      "api_version": "2.0.0",
      "transaction": {
        "Version1": {
          "hash": "f5582cb81a5abda63ebaa4edb3b05210ecbd63ffb8dd17bfbeb3b867f4014468",
          "header": {
            "chain_name": "casper-example",
            "timestamp": "2020-11-17T00:39:24.072Z",
            "ttl": "1h",
            "body_hash": "aa24833ffbf31d62c8c8c4265349e7c09cd71952fcbce6f7b12daf5e340bf2cc",
            "pricing_mode": {
              "Fixed": {
                "gas_price_tolerance": 5
              }
            },
            "initiator_addr": {
              "PublicKey": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c"
            }
          },
          "body": {
            "args": [
              [
                "source",
                {
                  "cl_type": {
                    "Option": "URef"
                  },
                  "bytes": "010a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a07",
                  "parsed": "uref-0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a-007"
                }
              ],
              [
                "target",
                {
                  "cl_type": "URef",
                  "bytes": "1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b00",
                  "parsed": "uref-1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b-000"
                }
              ],
              [
                "amount",
                {
                  "cl_type": "U512",
                  "bytes": "0500ac23fc06",
                  "parsed": "30000000000"
                }
              ],
              [
                "id",
                {
                  "cl_type": {
                    "Option": "U64"
                  },
                  "bytes": "01e703000000000000",
                  "parsed": 999
                }
              ]
            ],
            "target": "Native",
            "entry_point": "Transfer",
            "transaction_category": 0,
            "scheduling": "Standard"
          },
          "approvals": [
            {
              "signer": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c",
              "signature": "0137d3f468d8f8a6e63f4110d79be29b8c8428e9cd858a92049660e7851ae16a299640d1fc1c930ab6cb424f1a6eec0b194df74bede14f4af1b5133106f1280d0b"
            }
          ]
        }
      },
      "execution_info": {
        "block_hash": "0744fcb72af43c5cc372039bc5a8bfee48808a9ce414acc0d6338a628c20eb42",
        "block_height": 10,
        "execution_result": {
          "Version2": {
            "initiator": {
              "PublicKey": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c"
            },
            "error_message": null,
            "limit": "123456",
            "consumed": "100000",
            "cost": "246912",
            "payment": [
              {
                "source": "uref-0101010101010101010101010101010101010101010101010101010101010101-001"
              }
            ],
            "transfers": [
              {
                "Version2": {
                  "transaction_hash": {
                    "Version1": "0101010101010101010101010101010101010101010101010101010101010101"
                  },
                  "from": {
                    "AccountHash": "account-hash-0202020202020202020202020202020202020202020202020202020202020202"
                  },
                  "to": "account-hash-0303030303030303030303030303030303030303030303030303030303030303",
                  "source": "uref-0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a-007",
                  "target": "uref-1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b-000",
                  "amount": "1000000000000",
                  "gas": "2500000000",
                  "id": 999
                }
              }
            ],
            "size_estimate": 186,
            "effects": [
              {
                "key": "account-hash-2c4a11c062a8a337bfc97e27fd66291caeb2c65865dcb5d3ef3759c4c97efecb",
                "kind": {
                  "AddUInt64": 8
                }
              },
              {
                "key": "deploy-af684263911154d26fa05be9963171802801a0b6aff8f199b7391eacb8edc9e1",
                "kind": "Identity"
              }
            ]
          }
        }
      }
    }
  }  
}

```

</details>

## query_balance

This method allows you to query for the balance of a purse using a `PurseIdentifier` and `StateIdentifier`.

|Parameter|Type|Description|
|---------|----|-----------|
|[purse_identifier](types_chain.md#purseidentifier)|Object|The identifier to obtain the purse corresponding to the balance query.|
|[state_identifier](types_chain.md#globalstateidentifier)|Object|The state identifier used for the query; if none is passed the tip of the chain will be used. (Optional)|

<details>

<summary>Example query_balance request</summary>

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "query_balance",
  "params": [
      {
        "name": "state_identifier",
        "value": {
          "BlockHash": "13c2d7a68ecdd4b74bf4393c88915c836c863fc4bf11d7f2bd930a1bbccacdcb"
        }
    },
      {
        "name": "purse_identifier",
        "value": {
          "main_purse_under_account_hash": "account-hash-0909090909090909090909090909090909090909090909090909090909090909"
        }
      }
    ]
}

```

</details>


### `query_balance_result`

|Parameter|Type|Description|
|---------|----|-----------|     
|api_version|String|The RPC API version.|
|[balance](types_chain.md#u512)|Object|The balance represented in motes.|

<details>

<summary>Example query_balance result</summary>

```json

{
  "jsonrpc": "2.0",
  "id": -6143675785141640608,
  "result": {
    "name": "query_balance_result",
    "value": {
      "api_version": "2.0.0",
      "balance": "123456"
    }
  }
}

```

</details>

## query_balance_details

This method allows you to query for full balance information using a `PurseIdentifier` and `StateIdentifier`.

|Parameter|Type|Description|
|---------|----|-----------|
|[purse_identifier](types_chain.md#purseidentifier)|Object|The identifier to obtain the purse corresponding to the balance query.|
|[state_identifier](types_chain.md#globalstateidentifier)|Object|The state identifier used for the query; if none is passed the tip of the chain will be used. (Optional)|

<details>

<summary>Example query_balance_details request</summary>

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "query_balance_details",
  "params": [
    {
      "name": "state_identifier",
      "value": {
        "BlockHash": "0707070707070707070707070707070707070707070707070707070707070707"
      }
    },
    {
      "name": "purse_identifier",
      "value": {
        "main_purse_under_account_hash": "account-hash-0909090909090909090909090909090909090909090909090909090909090909"
      }
    }
  ]
}

```

</details>


### `query_balance_details_result`

|Parameter|Type|Description|
|---------|----|-----------|     
|api_version|String|The RPC API version.|
|[available_balance](types_chain.md#u512)|Object|The available balance in motes (total balance - sum of all active holds).|
|[holds](types_chain.md#balanceholdwithproof)|Array|The holds active at the requested point in time.|
|[total_balance](types_chain.md#u512)|Object|The purses total balance, not considering holds.|
|`total_balance_proof|String|A proof that the given value is present in the Merkle trie.|

<details>

<summary>Example query_balance_details result</summary>

```json

{
  "jsonrpc": "2.0",
  "id": -6143675785141640608,
  "result": {
    "name": "query_balance_details_result",
    "value": {
      "api_version": "2.0.0",
      "total_balance": "123456",
      "available_balance": "123456",
      "total_balance_proof": "01000000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625016ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625000000003529cde5c621f857f75f3810611eb4af3f998caaa9d4a3413cf799f99c67db0307010000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a7253614761462501010102000000006e06000000000074769d28aac597a36a03a932d4b43e4f10bf0403ee5c41dd035102553f5773631200b9e173e8f05361b681513c14e25e3138639eb03232581db7557c9e8dbbc83ce94500226a9a7fe4f2b7b88d5103a4fc7400f02bf89c860c9ccdd56951a2afe9be0e0267006d820fb5676eb2960e15722f7725f3f8f41030078f8b2e44bf0dc03f71b176d6e800dc5ae9805068c5be6da1a90b2528ee85db0609cc0fb4bd60bbd559f497a98b67f500e1e3e846592f4918234647fca39830b7e1e6ad6f5b7a99b39af823d82ba1873d000003000000010186ff500f287e9b53f823ae1582b1fa429dfede28015125fd233a31ca04d5012002015cc42669a55467a1fdf49750772bfc1aed59b9b085558eb81510e9b015a7c83b0301e3cf4a34b1db6bfa58808b686cb8fe21ebe0c1bcbcee522649d2b135fe510fe3",
      "holds": [
        {
          "time": 0,
          "amount": "123456",
          "proof": "01000000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625016ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625000000003529cde5c621f857f75f3810611eb4af3f998caaa9d4a3413cf799f99c67db0307010000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a7253614761462501010102000000006e06000000000074769d28aac597a36a03a932d4b43e4f10bf0403ee5c41dd035102553f5773631200b9e173e8f05361b681513c14e25e3138639eb03232581db7557c9e8dbbc83ce94500226a9a7fe4f2b7b88d5103a4fc7400f02bf89c860c9ccdd56951a2afe9be0e0267006d820fb5676eb2960e15722f7725f3f8f41030078f8b2e44bf0dc03f71b176d6e800dc5ae9805068c5be6da1a90b2528ee85db0609cc0fb4bd60bbd559f497a98b67f500e1e3e846592f4918234647fca39830b7e1e6ad6f5b7a99b39af823d82ba1873d000003000000010186ff500f287e9b53f823ae1582b1fa429dfede28015125fd233a31ca04d5012002015cc42669a55467a1fdf49750772bfc1aed59b9b085558eb81510e9b015a7c83b0301e3cf4a34b1db6bfa58808b686cb8fe21ebe0c1bcbcee522649d2b135fe510fe3"
        }
      ]
    }
  }
}

```

</details>

## query_global_state

This method allows for you to query for a value stored under certain keys in global state. You may query using either a [Block hash](../../concepts/design/casper-design.md#block_hash) or state root hash.

* Note: Querying a purse's balance requires the use of `query_balance`, rather than any iteration of `query_global_state`.

|Parameter|Type|Description|
|---------|----|-----------|   
|[key](types_chain.md#key)|String|The key as a formatted string, under which data can be stored in global state.|
|[state_identifier](types_chain.md#globalstateidentifier)|Object|The identifier used for the query. If not provided, the tip of the chain will be used. (Optional)|
|path|Array|The path components starting from the key as base. (Optional)|

<details>

<summary>Example query_global_state request</summary>

```json

{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "query_global_state",
  "params": [
    {
      "name": "state_identifier",
      "value": {
        "BlockHash": "0744fcb72af43c5cc372039bc5a8bfee48808a9ce414acc0d6338a628c20eb42"
      }
    },
    {
      "name": "key",
      "value": "deploy-af684263911154d26fa05be9963171802801a0b6aff8f199b7391eacb8edc9e1"
    },
    {
      "name": "path",
      "value": []
    }
  ]
}

```

</details>

### `query_global_state_result`

|Parameter|Type|Description|
|---------|----|-----------|     
|api_version|String|The RPC API version.|
|[block_header](types_chain.md#blockheaderv2)|Object|The Block header if a Block hash was provided. (Optional)|
|[stored_value](types_chain.md#storedvalue)|Object|The stored value.|
|[merkle_proof](types_chain.md#merkle-proof)|String|The merkle proof.|

<details>

<summary>Example query_global_state result</summary>

```json

{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "api_version": "2.0.0",
    "block_header": {
      "Version2": {
        "parent_hash": "0707070707070707070707070707070707070707070707070707070707070707",
        "state_root_hash": "0808080808080808080808080808080808080808080808080808080808080808",
        "body_hash": "0505050505050505050505050505050505050505050505050505050505050505",
        "random_bit": true,
        "accumulated_seed": "ac979f51525cfd979b14aa7dc0737c5154eabe0db9280eceaa8dc8d2905b20d5",
        "era_end": {
          "equivocators": [
            "013b6a27bcceb6a42d62a3a8d02a6f0d73653215771de243a63ac048a18b59da29"
          ],
          "inactive_validators": [
            "018139770ea87d175f56a35466c34c7ecccb8d8a91b4ee37a25df60f5b8fc9b394"
          ],
          "next_era_validator_weights": [
            {
              "validator": "013b6a27bcceb6a42d62a3a8d02a6f0d73653215771de243a63ac048a18b59da29",
              "weight": "123"
            },
            {
              "validator": "016e7a1cdd29b0b78fd13af4c5598feff4ef2a97166e3ca6f2e4fbfccd80505bf1",
              "weight": "456"
            },
            {
              "validator": "018a875fff1eb38451577acd5afee405456568dd7c89e090863a0557bc7af49f17",
              "weight": "789"
            }
          ],
          "rewards": {},
          "next_era_gas_price": 1
        },
        "timestamp": "2020-11-17T00:39:24.072Z",
        "era_id": 1,
        "height": 10,
        "protocol_version": "1.0.0",
        "proposer": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c",
        "current_gas_price": 1,
        "last_switch_block_hash": "0909090909090909090909090909090909090909090909090909090909090909"
      }
    },
    "stored_value": {
      "Account": {
        "account_hash": "account-hash-e94daaff79c2ab8d9c31d9c3058d7d0a0dd31204a5638dc1451fa67b2e3fb88c",
        "named_keys": [
          {
            "name": "main_purse",
            "key": "uref-09480c3248ef76b603d386f3f4f8a5f87f597d4eaffd475433f861af187ab5db-007"
          }
        ],
        "main_purse": "uref-09480c3248ef76b603d386f3f4f8a5f87f597d4eaffd475433f861af187ab5db-007",
        "associated_keys": [
          {
            "account_hash": "account-hash-e94daaff79c2ab8d9c31d9c3058d7d0a0dd31204a5638dc1451fa67b2e3fb88c",
            "weight": 1
          }
        ],
        "action_thresholds": {
          "deployment": 1,
          "key_management": 1
        }
      }
    },
    "merkle_proof": "01000000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625016ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625000000003529cde5c621f857f75f3810611eb4af3f998caaa9d4a3413cf799f99c67db0307010000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a7253614761462501010102000000006e06000000000074769d28aac597a36a03a932d4b43e4f10bf0403ee5c41dd035102553f5773631200b9e173e8f05361b681513c14e25e3138639eb03232581db7557c9e8dbbc83ce94500226a9a7fe4f2b7b88d5103a4fc7400f02bf89c860c9ccdd56951a2afe9be0e0267006d820fb5676eb2960e15722f7725f3f8f41030078f8b2e44bf0dc03f71b176d6e800dc5ae9805068c5be6da1a90b2528ee85db0609cc0fb4bd60bbd559f497a98b67f500e1e3e846592f4918234647fca39830b7e1e6ad6f5b7a99b39af823d82ba1873d000003000000010186ff500f287e9b53f823ae1582b1fa429dfede28015125fd233a31ca04d5012002015cc42669a55467a1fdf49750772bfc1aed59b9b085558eb81510e9b015a7c83b0301e3cf4a34b1db6bfa58808b686cb8fe21ebe0c1bcbcee522649d2b135fe510fe3"
  }
}

```

</details>

## state_get_account_info

This method returns a JSON representation of an [Account](../../concepts/design/casper-design.md#accounts-head) from the network at a given [Block](../../concepts/design/casper-design.md#block-structure-head). If you do not specify a `block_identifier`, you will receive the state of the account at the highest state root hash. The `block_identifier` must refer to a Block after the Account's creation, or the method will return an empty response.

|Parameter|Type|Description|
|---------|----|-----------|
|[account_identifier](types_chain.md#accountidentifier)|String|The public key or account hash of the Account.|
|[block_identifier](types_chain.md#blockidentifier)|Object|The Block hash. (Optional)|

<details>

<summary>Example state_get_account_info request</summary>

```json

{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "state_get_account_info",
  "params": [
    {
      "name": "account_identifier",
      "value": "013b6a27bcceb6a42d62a3a8d02a6f0d73653215771de243a63ac048a18b59da29"
    },
    {
      "name": "block_identifier",
      "value": {
        "Hash": "0707070707070707070707070707070707070707070707070707070707070707"
      }
    }
  ]
}

```

</details>

### `state_get_account_info_result`

|Parameter|Type|Description|
|---------|----|-----------|    
|api_version|String|The RPC API version.|
|[account](types_chain.md#account)|Object|A JSON representation of the Account structure.| 
|[merkle_proof](types_chain.md#merkleproof)|String|The merkle proof.|

<details>

<summary>Example state_get_account_info result</summary>

```json

{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "name": "state_get_account_info_result",
    "value": {
      "api_version": "2.0.0",
      "account": {
        "account_hash": "account-hash-e94daaff79c2ab8d9c31d9c3058d7d0a0dd31204a5638dc1451fa67b2e3fb88c",
        "named_keys": [
          {
            "name": "main_purse",
            "key": "uref-09480c3248ef76b603d386f3f4f8a5f87f597d4eaffd475433f861af187ab5db-007"
          }
        ],
        "main_purse": "uref-09480c3248ef76b603d386f3f4f8a5f87f597d4eaffd475433f861af187ab5db-007",
        "associated_keys": [
          {
            "account_hash": "account-hash-e94daaff79c2ab8d9c31d9c3058d7d0a0dd31204a5638dc1451fa67b2e3fb88c",
            "weight": 1
          }
        ],
        "action_thresholds": {
          "deployment": 1,
          "key_management": 1
        }
      },
      "merkle_proof": "01000000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625016ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625000000003529cde5c621f857f75f3810611eb4af3f998caaa9d4a3413cf799f99c67db0307010000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a7253614761462501010102000000006e06000000000074769d28aac597a36a03a932d4b43e4f10bf0403ee5c41dd035102553f5773631200b9e173e8f05361b681513c14e25e3138639eb03232581db7557c9e8dbbc83ce94500226a9a7fe4f2b7b88d5103a4fc7400f02bf89c860c9ccdd56951a2afe9be0e0267006d820fb5676eb2960e15722f7725f3f8f41030078f8b2e44bf0dc03f71b176d6e800dc5ae9805068c5be6da1a90b2528ee85db0609cc0fb4bd60bbd559f497a98b67f500e1e3e846592f4918234647fca39830b7e1e6ad6f5b7a99b39af823d82ba1873d000003000000010186ff500f287e9b53f823ae1582b1fa429dfede28015125fd233a31ca04d5012002015cc42669a55467a1fdf49750772bfc1aed59b9b085558eb81510e9b015a7c83b0301e3cf4a34b1db6bfa58808b686cb8fe21ebe0c1bcbcee522649d2b135fe510fe3"
    }
  }
}

```

</details>

## state_get_dictionary_item

This method returns an item from a Dictionary. Every dictionary has a seed URef, findable by using a `dictionary_identifier`. The address of a stored value is the blake2b hash of the seed URef and the byte representation of the dictionary key.

You may query a stored value directly using the dictionary address.

|Parameter|Type|Description|
|---------|----|-----------|
|[state_root_hash](types_chain.md#digest)|String|Hash of the state root.|
|[dictionary_identifier](types_chain.md#dictionaryidentifier)|Object|The Dictionary query identifier.|

<details>

<summary>Example state_get_dictionary_item request</summary>

```json

{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "state_get_dictionary_item",
  "params": [
    {
      "name": "state_root_hash",
      "value": "0808080808080808080808080808080808080808080808080808080808080808"
    },
    {
      "name": "dictionary_identifier",
      "value": {
        "URef": {
          "seed_uref": "uref-09480c3248ef76b603d386f3f4f8a5f87f597d4eaffd475433f861af187ab5db-007",
          "dictionary_item_key": "a_unique_entry_identifier"
        }
      }
    }
  ]
}

```

</details>

### `state_get_dictionary_item_result`

|Parameter|Type|Description|
|---------|----|-----------|    
|api_version|String|The RPC API version.|
|dictionary_key|String|The key under which the value is stored.|
|[stored_value](types_chain.md#storedvalue)|Object|The stored value.|
|[merkle_proof](types_chain.md#merkle-proof)|String|The merkle proof.|

<details>

<summary>Example state_get_dictionary_item result</summary>

```json

{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "name": "state_get_dictionary_item_result",
    "value": {
      "api_version": "2.0.0",
      "dictionary_key": "dictionary-67518854aa916c97d4e53df8570c8217ccc259da2721b692102d76acd0ee8d1f",
      "stored_value": {
        "CLValue": {
          "cl_type": "U64",
          "bytes": "0100000000000000",
          "parsed": 1
        }
      },
      "merkle_proof": "01000000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625016ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625000000003529cde5c621f857f75f3810611eb4af3f998caaa9d4a3413cf799f99c67db0307010000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a7253614761462501010102000000006e06000000000074769d28aac597a36a03a932d4b43e4f10bf0403ee5c41dd035102553f5773631200b9e173e8f05361b681513c14e25e3138639eb03232581db7557c9e8dbbc83ce94500226a9a7fe4f2b7b88d5103a4fc7400f02bf89c860c9ccdd56951a2afe9be0e0267006d820fb5676eb2960e15722f7725f3f8f41030078f8b2e44bf0dc03f71b176d6e800dc5ae9805068c5be6da1a90b2528ee85db0609cc0fb4bd60bbd559f497a98b67f500e1e3e846592f4918234647fca39830b7e1e6ad6f5b7a99b39af823d82ba1873d000003000000010186ff500f287e9b53f823ae1582b1fa429dfede28015125fd233a31ca04d5012002015cc42669a55467a1fdf49750772bfc1aed59b9b085558eb81510e9b015a7c83b0301e3cf4a34b1db6bfa58808b686cb8fe21ebe0c1bcbcee522649d2b135fe510fe3"
    }
  }
}

```

</details>

## state_get_entity

This method returns a JSON representation of an [AddressableEntity](types_chain.md#addressableentity) from the network at a given [Block](../../concepts/design/casper-design.md#block-structure-head). If you do not specify a `block_identifier`, you will receive the state of the entity at the highest state root hash. The `block_identifier` must refer to a Block after the entity's creation, or the method will return an empty response.

|Parameter|Type|Description|
|---------|----|-----------|
|[entity_identifier](types_chain.md#entityidentifier)|String|Identifier of an addressable entity.|
|[block_identifier](types_chain.md#blockidentifier)|Object|The Block hash. (Optional)|

<details>

<summary>Example state_get_entity request</summary>

```json

{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "state_get_entity",
  "params": [
    {
      "name": "entity_identifier",
      "value": {
        "EntityAddr": "entity-account-0000000000000000000000000000000000000000000000000000000000000000"
      }
    },
    {
      "name": "block_identifier",
      "value": {
        "Hash": "0707070707070707070707070707070707070707070707070707070707070707"
      }
    }
  ]
}

```

</details>

### `state_get_entity_result`

|Parameter|Type|Description|
|---------|----|-----------|    
|api_version|String|The RPC API version.|
|[entity](types_chain.md#addressableentity)|Object|A JSON representation of the AddressableEntity.| 
|[merkle_proof](types_chain.md#merkleproof)|String|The merkle proof.|

<details>

<summary>Example state_get_entity result</summary>

```json

{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "name": "state_get_entity_result",
    "value": {
      "api_version": "2.0.0",
      "entity": {
        "AddressableEntity": {
          "entity": {
            "protocol_version": "2.0.0",
            "entity_kind": {
              "Account": "account-hash-e94daaff79c2ab8d9c31d9c3058d7d0a0dd31204a5638dc1451fa67b2e3fb88c"
            },
            "package_hash": "package-0000000000000000000000000000000000000000000000000000000000000000",
            "byte_code_hash": "byte-code-0000000000000000000000000000000000000000000000000000000000000000",
            "main_purse": "uref-09480c3248ef76b603d386f3f4f8a5f87f597d4eaffd475433f861af187ab5db-007",
            "associated_keys": [
              {
                "account_hash": "account-hash-e94daaff79c2ab8d9c31d9c3058d7d0a0dd31204a5638dc1451fa67b2e3fb88c",
                "weight": 1
              }
            ],
            "action_thresholds": {
              "deployment": 1,
              "upgrade_management": 1,
              "key_management": 1
            },
            "message_topics": [
              {
                "topic_name": "topic",
                "topic_name_hash": "0000000000000000000000000000000000000000000000000000000000000000"
              }
            ]
          },
          "named_keys": [
            {
              "name": "key",
              "key": "hash-0000000000000000000000000000000000000000000000000000000000000000"
            }
          ],
          "entry_points": [
            {
              "V1CasperVm": {
                "name": "entry_point",
                "args": [],
                "ret": "Unit",
                "access": "Public",
                "entry_point_type": "Caller",
                "entry_point_payment": "Caller"
              }
            }
          ]
        }
      },
      "merkle_proof": "01000000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625016ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a72536147614625000000003529cde5c621f857f75f3810611eb4af3f998caaa9d4a3413cf799f99c67db0307010000006ef2e0949ac76e55812421f755abe129b6244fe7168b77f47a7253614761462501010102000000006e06000000000074769d28aac597a36a03a932d4b43e4f10bf0403ee5c41dd035102553f5773631200b9e173e8f05361b681513c14e25e3138639eb03232581db7557c9e8dbbc83ce94500226a9a7fe4f2b7b88d5103a4fc7400f02bf89c860c9ccdd56951a2afe9be0e0267006d820fb5676eb2960e15722f7725f3f8f41030078f8b2e44bf0dc03f71b176d6e800dc5ae9805068c5be6da1a90b2528ee85db0609cc0fb4bd60bbd559f497a98b67f500e1e3e846592f4918234647fca39830b7e1e6ad6f5b7a99b39af823d82ba1873d000003000000010186ff500f287e9b53f823ae1582b1fa429dfede28015125fd233a31ca04d5012002015cc42669a55467a1fdf49750772bfc1aed59b9b085558eb81510e9b015a7c83b0301e3cf4a34b1db6bfa58808b686cb8fe21ebe0c1bcbcee522649d2b135fe510fe3"
    }
  }
}

```

</details>

------

# Node Informational JSON-RPC Methods

The following methods return information from a node on a Casper network. The responses return information specific to the queried node, and as such, will vary.

---

## info_get_peers

This method returns a list of peers connected to the node.

<details>

<summary>Example info_get_peers request</summary>

```json

{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "info_get_peers",
  "params": []
}

```

</details>

### `info_get_peers_result`

|Parameter|Type|Description|
|---------|----|-----------| 
|api_version|String|The RPC API version.|
|[peers](types_chain.md#peers)|Array|The node ID and network address of each connected peer.|

<details>

<summary>Example info_get_peers result</summary>

```json

{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "name": "info_get_peers_result",
    "value": {
      "api_version": "2.0.0",
      "peers": [
        {
          "node_id": "tls:0101..0101",
          "address": "127.0.0.1:54321"
        }
      ]
    }
  }
}

```

</details>

## info_get_status

This method returns the current status of a node.

<details>

<summary>Example info_get_status request</summary>

```json

{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "info_get_status",
  "params": []
}

```

</details>

### `info_get_status_result`

|Parameter|Type|Description|
|---------|----|-----------| 
|api_version|String|The RPC API version.|
|[available_block_range](types_chain.md#availableblockrange)|Object|The available block range in storage.|
|[block_sync](types_chain.md#blocksynchronizerstatus)|Object|The status of the block synchronizer builders.|
|build_version|String|The compiled node version.|
|chainspec_name|String|The chainspec name, used to identify the currently connected network.|
|[last_added_block_info](types_chain.md#minimalblockinfo)|Object|The minimal info of the last Block from the linear chain. (Optional)|
|[last_progress](types_chain.md#timestamp)|String|Timestamp of the last recorded progress in the reactor.|
|[latest_switch_block_hash](types_chain.md#blockhash)|Object|The hash of the latest switch block. (Optional)|
|[next_upgrade](types_chain.md#nextupgrade)|Object|Information about the next scheduled upgrade. (Optional)|
|[our_public_signing_key](types_chain.md#publickey)|String|Our public signing key. (Optional)|
|[peers](types_chain.md#peersmap)|Array|The node ID and network address of each connected peer.|
|[reactor_state](types_chain.md#reactorstate)|String|The current state of the node reactor.|
|[round_length](types_chain.md#timediff)|Integer|The next round length if this node is a validator. A round length is the amount of time it takes to reach consensus on proposing a Block. (Optional)|
|[starting_state_root_hash](types_chain.md#digest)|String|The state root hash used at the start of the current session.|
|[uptime](types_chain.md#timediff)|Integer|Time that passed since the node has started.|

<details>

<summary>Example info_get_status result</summary>

```json

{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "name": "info_get_status_result",
    "value": {
      "api_version": "2.0.0",
      "peers": [
        {
          "node_id": "tls:0101..0101",
          "address": "127.0.0.1:54321"
        }
      ],
      "build_version": "1.0.0-xxxxxxxxx@DEBUG",
      "chainspec_name": "casper-example",
      "starting_state_root_hash": "0000000000000000000000000000000000000000000000000000000000000000",
      "last_added_block_info": {
        "hash": "0744fcb72af43c5cc372039bc5a8bfee48808a9ce414acc0d6338a628c20eb42",
        "timestamp": "2020-11-17T00:39:24.072Z",
        "era_id": 1,
        "height": 10,
        "state_root_hash": "0808080808080808080808080808080808080808080808080808080808080808",
        "creator": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c"
      },
      "our_public_signing_key": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c",
      "round_length": "1m 5s 536ms",
      "next_upgrade": {
        "activation_point": 42,
        "protocol_version": "2.0.1"
      },
      "uptime": "13s",
      "reactor_state": "Initialize",
      "last_progress": "1970-01-01T00:00:00.000Z",
      "available_block_range": {
        "low": 0,
        "high": 0
      },
      "block_sync": {
        "historical": {
          "block_hash": "16ddf28e2b3d2e17f4cef36f8b58827eca917af225d139b0c77df3b4a67dc55e",
          "block_height": 40,
          "acquisition_state": "have strict finality(40) for: block hash 16dd..c55e"
        },
        "forward": {
          "block_hash": "59907b1e32a9158169c4d89d9ce5ac9164fc31240bfcfb0969227ece06d74983",
          "block_height": 6701,
          "acquisition_state": "have block body(6701) for: block hash 5990..4983"
        }
      },
      "latest_switch_block_hash": "0000000000000000000000000000000000000000000000000000000000000000"
    }
  }
}
}

```

</details>