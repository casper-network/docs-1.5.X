---
title: Installing Contracts
---



# Installing Smart Contracts

This document details the process of installing [Casper smart contracts](../writing-onchain-code/simple-contract.md) using the [Casper command-line client](../prerequisites.md#install-casper-client) and the `put-deploy` command.

## Prerequisites

- You have a compiled contract Wasm to send to a Casper network.
- You have installed the [Casper CLI client](../prerequisites.md#install-casper-client) to interact with the network.
- You have a [Casper Account](../prerequisites.md#setting-up-an-account) with a public and secret key pair to initiate the transaction.
- You have enough CSPR tokens in your account's main purse to pay for transactions. If you plan to use the Casper Testnet, learn about the [faucet](../../users/csprlive/testnet-faucet.md) to fund your testing account's main purse.

## Installing a Contract in Global State {#installing-contract-code}

To install a contract in [global state](../../concepts/glossary/G.md#global-state), you need to send a transaction to the network with the contract Wasm. You can do so by using the `put-transaction session` command, or the equivalent `put-txn session` command.

```bash
casper-client put-transaction session \
--node-address [NODE_SERVER_ADDRESS] \
--chain-name [CHAIN_NAME] \
--secret-key [KEY_PATH]/secret_key.pem \
--gas-price-tolerance [MAX_GAS_AMOUNT] \
--pricing-mode fixed \
--transaction-path <PATH> \
--session-entry-point call \
--category 'install-upgrade'
```

The arguments used above are:
- `node-address` - An IP address of a peer on the network. The default port for JSON-RPC servers on Mainnet and Testnet is 7777
- `chain-name` - The network where you wish to send the transaction. For Mainnet, use *casper*. For Testnet, use *casper-test*
- `secret-key` - The file name containing the secret key of the account paying for the transaction
- `gas-price-tolerance` - The maximum amount of gas a user is willing to pay for execution
- `pricing-mode` - Set to "fixed" for Mainnet and Testnet
- `transaction-path` - The path to the contract Wasm, which should point to wherever you compiled the contract (`.wasm` file) on your computer
- `session-entry-point` - Name of the entrypoint that will be used when installing the contract, which is usually `call`
- `category` - The transaction type, based on Wasm size, with `install-upgrade` being the largest

Once you call this command, it will return a transaction hash. You can use this hash to [verify](./sending-transactions.md#sending-the-transaction) successful execution of the transaction.

:::tip

The pricing mode varies based on each network [chainspec](../../concepts/glossary/C.md#chainspec). For Mainnet and Testnet, the pricing mode is "fixed", meaning that costs are fixed per the cost table, and senders do not specify how much they pay.

:::

**Example - Contract Installation**

Here we send a `counter-installer.wasm` to a local NCTL network:

```bash
casper-client put-transaction session \
--node-address http://localhost:11101 \
--chain-name casper-net-1 \
--secret-key ~/casper/casper-nctl/assets/net-1/users/user-1/secret_key.pem \
--gas-price-tolerance 10 \
--pricing-mode fixed \
--transaction-path ~/test_contracts/counter_installer.wasm \
--session-entry-point call \
--category 'install-upgrade'
```

The result of the query includes a `transaction_hash`:

```json
{
  "jsonrpc": "2.0",
  "id": 90342686534145684,
  "result": {
    "api_version": "2.0.0",
    "transaction_hash": {
      "Version1": "49c36616a50962fa5a7dd7901677ae44667fa9f8c542e49eb2284ba2c900bba2"
    }
  }
}
```

To verify the transaction, call `get-transaction` and provide the transaction hash you received from `put-transaction`.

```bash
casper-client get-transaction --node-address http://localhost:11101 [TRANSACTION_HASH]
```

<details>
<summary>Expand to view the sample response details</summary>

```json
{
  "jsonrpc": "2.0",
  "id": 5297043714444661948,
  "result": {
    "api_version": "2.0.0",
    "transaction": {
      "Version1": {
        "hash": "49c36616a50962fa5a7dd7901677ae44667fa9f8c542e49eb2284ba2c900bba2",
        "header": {
          "chain_name": "casper-net-1",
          "timestamp": "2024-08-21T11:21:36.201Z",
          "ttl": "30m",
          "body_hash": "543df05d05c456e9b6b5d657029e9ad20c674c6e6b56f498af0052ec87ee9f80",
          "pricing_mode": {
            "Fixed": {
              "gas_price_tolerance": 10
            }
          },
          "initiator_addr": {
            "PublicKey": "0149d133f697b5867d312e18ae0b129ef0c63499df2815fe339dca727963edb80d"
          }
        },
        "body": {
          "args": [],
          "target": {
            "Session": {
              "module_bytes": "[105936 hex chars]",
              "runtime": "VmCasperV1"
            }
          },
          "entry_point": "Call",
          "transaction_category": 2,
          "scheduling": "Standard"
        },
        "approvals": [
          {
            "signer": "0149d133f697b5867d312e18ae0b129ef0c63499df2815fe339dca727963edb80d",
            "signature": "01537684dd531ce6a4c9383ba7ea565e9408ed2c5dd8bb12787f131e1148fd0f057f45dbaa7bbc0230743cc5740c67db64f66bab1df57547722899f7d7289c1f0c"
          }
        ]
      }
    },
    "execution_info": {
      "block_hash": "24ead40278a71966e16823150b06c06675a216dbef761c1d6ad1439da4147f4a",
      "block_height": 8463,
      "execution_result": {
        "Version2": {
          "initiator": {
            "PublicKey": "0149d133f697b5867d312e18ae0b129ef0c63499df2815fe339dca727963edb80d"
          },
          "error_message": null,
          "limit": "1000000000000",
          "consumed": "46747144601",
          "cost": "1000000000000",
          "payment": [],
          "transfers": [],
          "size_estimate": 53215,
          "effects": [
            {
              "key": "balance-hold-0121dc8fc358c4e30ae29786bd4842a5f99da83efa0b9ca8461cd2196ffbfd07f172b7ab7491010000",
              "kind": {
                "Write": {
                  "CLValue": {
                    "cl_type": "U512",
                    "bytes": "050010a5d4e8",
                    "parsed": "1000000000000"
                  }
                }
              }
            },
            {
              "key": "uref-65f3f583bf1ac01b6c90d9c9478bd239c09e46f48fb693918726eaab03631407-000",
              "kind": {
                "Write": {
                  "CLValue": {
                    "cl_type": "I32",
                    "bytes": "00000000",
                    "parsed": 0
                  }
                }
              }
            },
            {
              "key": "uref-29feb2af8a9d7b6d2ef6be875a0aa326b646a00b7cdd2dd4a65365e84e9f2e9a-000",
              "kind": {
                "Write": {
                  "CLValue": {
                    "cl_type": "Unit",
                    "bytes": "",
                    "parsed": null
                  }
                }
              }
            },
            {
              "key": "package-50d487af45f8cec533c6813801a7630ff97e5ee3964daf7915d5451b4812ac94",
              "kind": {
                "Write": {
                  "Package": {
                    "versions": [],
                    "disabled_versions": [],
                    "groups": [],
                    "lock_status": "Unlocked"
                  }
                }
              }
            },
            {
              "key": "named-key-entity-account-6a56c4eee172043975aea72221eaf09f3c3a24f09a379935e44c9979f1ae9463-05c3e063406ddde43671e0d47c45e31a10e9204137171f96ce818bdc725a4e1b",
              "kind": {
                "Write": {
                  "NamedKey": {
                    "named_key": {
                      "cl_type": "Key",
                      "bytes": "1050d487af45f8cec533c6813801a7630ff97e5ee3964daf7915d5451b4812ac94",
                      "parsed": "package-50d487af45f8cec533c6813801a7630ff97e5ee3964daf7915d5451b4812ac94"
                    },
                    "name": {
                      "cl_type": "String",
                      "bytes": "14000000636f756e7465725f7061636b6167655f6e616d65",
                      "parsed": "counter_package_name"
                    }
                  }
                }
              }
            },
            {
              "key": "named-key-entity-account-6a56c4eee172043975aea72221eaf09f3c3a24f09a379935e44c9979f1ae9463-6409273bf327d5a6a39a29dbd07c5cd2f48ee4f227fd443d025adc51e1bd5103",
              "kind": {
                "Write": {
                  "NamedKey": {
                    "named_key": {
                      "cl_type": "Key",
                      "bytes": "0229feb2af8a9d7b6d2ef6be875a0aa326b646a00b7cdd2dd4a65365e84e9f2e9a07",
                      "parsed": "uref-29feb2af8a9d7b6d2ef6be875a0aa326b646a00b7cdd2dd4a65365e84e9f2e9a-007"
                    },
                    "name": {
                      "cl_type": "String",
                      "bytes": "13000000636f756e7465725f6163636573735f75726566",
                      "parsed": "counter_access_uref"
                    }
                  }
                }
              }
            },
            {
              "key": "package-50d487af45f8cec533c6813801a7630ff97e5ee3964daf7915d5451b4812ac94",
              "kind": "Identity"
            },
            {
              "key": "entity-system-1f15cf43df68e8b382415a8ef687521f61f1ecce6960b72eaa13f43bfc448139",
              "kind": "Identity"
            },
            {
              "key": "package-f1c97c9b6228be3f316753e4e1289d910071fb880dddccce18881abfb9f53526",
              "kind": "Identity"
            },
            {
              "key": "entry-point-v1-entity-system-1f15cf43df68e8b382415a8ef687521f61f1ecce6960b72eaa13f43bfc448139-21bddc7e4379ba445c7118cb51962954e0d1e5aa5cacc0c4ff6095b57eb9fb33",
              "kind": "Identity"
            },
            {
              "key": "uref-2cb7e46fcde2c4d395a6850bb3b7edbb0b4db6018643e535fa0dfdeeb006d6ef-000",
              "kind": {
                "Write": {
                  "CLValue": {
                    "cl_type": "Unit",
                    "bytes": "",
                    "parsed": null
                  }
                }
              }
            },
            {
              "key": "balance-2cb7e46fcde2c4d395a6850bb3b7edbb0b4db6018643e535fa0dfdeeb006d6ef",
              "kind": {
                "Write": {
                  "CLValue": {
                    "cl_type": "U512",
                    "bytes": "00",
                    "parsed": "0"
                  }
                }
              }
            },
            {
              "key": "byte-code-v1-wasm-0577a7c92fd20e1af76aa9e257631cb240e8187191bba2025e88663d0288e936",
              "kind": {
                "Write": {
                  "ByteCode": {
                    "kind": "V1CasperWasm",
                    "bytes": "[82290 hex chars]"
                  }
                }
              }
            },
            {
              "key": "named-key-entity-contract-a1d0bf9d96f3efc9ea67f627df3a7cba390bfc582956032db91060ca5d413e68-5fed34ec1b2c38445b984eee743ce17fb1e5e89a8cb910cc2f9f12b005360eef",
              "kind": {
                "Write": {
                  "NamedKey": {
                    "named_key": {
                      "cl_type": "Key",
                      "bytes": "0265f3f583bf1ac01b6c90d9c9478bd239c09e46f48fb693918726eaab0363140707",
                      "parsed": "uref-65f3f583bf1ac01b6c90d9c9478bd239c09e46f48fb693918726eaab03631407-007"
                    },
                    "name": {
                      "cl_type": "String",
                      "bytes": "05000000636f756e74",
                      "parsed": "count"
                    }
                  }
                }
              }
            },
            {
              "key": "entry-point-v1-entity-contract-a1d0bf9d96f3efc9ea67f627df3a7cba390bfc582956032db91060ca5d413e68-399a84b0da15b34ecd774b1c4ad47c72a9e1298df057d83bee93d22ac4972aa5",
              "kind": {
                "Write": {
                  "EntryPoint": {
                    "V1CasperVm": {
                      "name": "counter_get",
                      "args": [],
                      "ret": "I32",
                      "access": "Public",
                      "entry_point_type": "Called",
                      "entry_point_payment": "Caller"
                    }
                  }
                }
              }
            },
            {
              "key": "entry-point-v1-entity-contract-a1d0bf9d96f3efc9ea67f627df3a7cba390bfc582956032db91060ca5d413e68-3eba75fc27f0ec2786e09c09d72d61e4c28a86d44d8efc9911460d5438396481",
              "kind": {
                "Write": {
                  "EntryPoint": {
                    "V1CasperVm": {
                      "name": "counter_inc",
                      "args": [],
                      "ret": "Unit",
                      "access": "Public",
                      "entry_point_type": "Called",
                      "entry_point_payment": "Caller"
                    }
                  }
                }
              }
            },
            {
              "key": "entity-contract-a1d0bf9d96f3efc9ea67f627df3a7cba390bfc582956032db91060ca5d413e68",
              "kind": {
                "Write": {
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
                }
              }
            },
            {
              "key": "package-50d487af45f8cec533c6813801a7630ff97e5ee3964daf7915d5451b4812ac94",
              "kind": {
                "Write": {
                  "Package": {
                    "versions": [
                      {
                        "entity_version_key": {
                          "protocol_version_major": 2,
                          "entity_version": 1
                        },
                        "addressable_entity_hash": "addressable-entity-a1d0bf9d96f3efc9ea67f627df3a7cba390bfc582956032db91060ca5d413e68"
                      }
                    ],
                    "disabled_versions": [],
                    "groups": [],
                    "lock_status": "Unlocked"
                  }
                }
              }
            },
            {
              "key": "uref-7bc25880db57763fccfa858185becd8de40a890d9e006e067352f011bdcf03bf-000",
              "kind": {
                "Write": {
                  "CLValue": {
                    "cl_type": "U32",
                    "bytes": "01000000",
                    "parsed": 1
                  }
                }
              }
            },
            {
              "key": "named-key-entity-account-6a56c4eee172043975aea72221eaf09f3c3a24f09a379935e44c9979f1ae9463-174ccaaa723ba74cee869017501fab28512b6ef9296d48a38daff7d0da13d1a1",
              "kind": {
                "Write": {
                  "NamedKey": {
                    "named_key": {
                      "cl_type": "Key",
                      "bytes": "027bc25880db57763fccfa858185becd8de40a890d9e006e067352f011bdcf03bf07",
                      "parsed": "uref-7bc25880db57763fccfa858185becd8de40a890d9e006e067352f011bdcf03bf-007"
                    },
                    "name": {
                      "cl_type": "String",
                      "bytes": "0700000076657273696f6e",
                      "parsed": "version"
                    }
                  }
                }
              }
            },
            {
              "key": "named-key-entity-account-6a56c4eee172043975aea72221eaf09f3c3a24f09a379935e44c9979f1ae9463-83b1cde13136393741a1e906a892ccdd289e7827cc9ef84a98cc96e86464bde0",
              "kind": {
                "Write": {
                  "NamedKey": {
                    "named_key": {
                      "cl_type": "Key",
                      "bytes": "1102a1d0bf9d96f3efc9ea67f627df3a7cba390bfc582956032db91060ca5d413e68",
                      "parsed": "entity-contract-a1d0bf9d96f3efc9ea67f627df3a7cba390bfc582956032db91060ca5d413e68"
                    },
                    "name": {
                      "cl_type": "String",
                      "bytes": "07000000636f756e746572",
                      "parsed": "counter"
                    }
                  }
                }
              }
            },
            {
              "key": "balance-hold-0121dc8fc358c4e30ae29786bd4842a5f99da83efa0b9ca8461cd2196ffbfd07f172b7ab7491010000",
              "kind": {
                "Prune": "balance-hold-0121dc8fc358c4e30ae29786bd4842a5f99da83efa0b9ca8461cd2196ffbfd07f172b7ab7491010000"
              }
            },
            {
              "key": "balance-hold-0021dc8fc358c4e30ae29786bd4842a5f99da83efa0b9ca8461cd2196ffbfd07f172b7ab7491010000",
              "kind": {
                "Write": {
                  "CLValue": {
                    "cl_type": "U512",
                    "bytes": "050010a5d4e8",
                    "parsed": "1000000000000"
                  }
                }
              }
            },
            {
              "key": "entity-system-b76adcf84d4900edec0af9001e727bcc3d4920a40afaa6a0e43137bacf62b91e",
              "kind": "Identity"
            },
            {
              "key": "entity-system-1f15cf43df68e8b382415a8ef687521f61f1ecce6960b72eaa13f43bfc448139",
              "kind": "Identity"
            },
            {
              "key": "entity-system-1d29f1bd6ba7016f430498de2d0fe7c9d2c14c200d79be33e0ad240bc2a0d229",
              "kind": "Identity"
            },
            {
              "key": "bid-addr-01f47c77764d4d4c0030c563266724e78e07b2b4719ecfceeae816470c5ecf882d",
              "kind": "Identity"
            },
            {
              "key": "bid-addr-04f47c77764d4d4c0030c563266724e78e07b2b4719ecfceeae816470c5ecf882d0903000000000000",
              "kind": {
                "Write": {
                  "BidKind": {
                    "Credit": {
                      "validator_public_key": "01e4bb993269e0fe33d6e575ab6a642fdcaf692449a1529c4f73e636dfff9d3e61",
                      "era_id": 777,
                      "amount": "1000000000000"
                    }
                  }
                }
              }
            }
          ]
        }
      }
    }
  }
}
```
</details>

Note the contract entity address in the above sample output. You will need this to [query the contract](./querying-global-state.md#query-the-contract) installed. In this example, the address is `entity-contract-a1d0bf9d96f3efc9ea67f627df3a7cba390bfc582956032db91060ca5d413e68`.

Next, [query global state](./querying-global-state.md) to see more details about the successfully installed contract.

<!-- Hide the video for now, as it needs to be updated.

**Video - Contract Installation Walkthrough**

This video demonstrates the commands described above for installing a contract on-chain.

<p align="center">
<iframe width="400" height="225" src="https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=8" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</p>

-->

## What's Next? {#whats-next}

- Learn to [query global state](./querying-global-state.md) using the Casper command-line client.
