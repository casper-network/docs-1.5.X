---
title: Key Types
---

# Understanding Key Types

For user convenience and compatibility, we expect the delivery of hashes, keys, and similar data as a prefixed string when using the node. The following is a list of string representations used.

## Key Explanations {#key-explanations}

`Key` is a wrapper type that may contain one of several possible sets of data.

### Account

`Key::Account` contains an AccountHash.

|Type|Prefix|Example|
|---|---|---|
|Key::Account | account-hash-| account-hash-ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70|

### Hash

`Key::Hash` contains a byte array with a length of 32, which can be used to pass any of the hashes. Please take note that the developer of the contract is responsible for the implementation of any checks necessary on the receiving side.

|Type|Prefix|Example|
|---|---|---|
|Key::Hash | hash- | hash-0101010101010101010101010101010101010101010101010101010101010101|

### URef

`Key::URef` contains an URef suffixed by [access rights](../developers/dapps/uref-security.md).

|Type|Prefix|Example|
|---|---|---|
|Key::URef | uref- | uref-0101010101010101010101010101010101010101010101010101010101010101-001|

### Transfer

`Key::Transfer` should contain the address hash for a transfer.

|Type|Prefix|Example|
|---|---|---|
|Key::Transfer | transfer- | transfer-0101010101010101010101010101010101010101010101010101010101010101|

### DeployInfo

`Key::DeployInfo` retains the address hash of deploy information.

|Type|Prefix|Example|
|---|---|---|
|Key::DeployInfo | deploy- | deploy-0101010101010101010101010101010101010101010101010101010101010101|

### EraInfo

`Key::EraInfo` is the integer number of the associated era.

|Type|Prefix|Example|
|---|---|---|
|Key::EraInfo | era- | era-1|

### Balance

`Key::Balance` is the balance of a purse.

|Type|Prefix|Example|
|---|---|---|
|Key::Balance | balance- | balance-0101010101010101010101010101010101010101010101010101010101010101|

### BalanceHold

`Key::BalanceHold` is a `Key` under which a hold on a purse balance is stored.

|Type|Prefix|Example|
|---|---|---|
|Key::BalanceHold | balance-hold- | balance-hold-002a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a6400000000000000 |

### Bid

`Key::Bid` is used to keep track of bids for the auction contract. It is not generally used by users.

|Type|Prefix|Example|
|---|---|---|
|Key::Bid | bid- | bid-ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70|

### Withdraw

`Key::Withdraw` is used to keep track of withdraws for the auction contract. It is not generally used by users and exists in a historical context.

|Type|Prefix|Example|
|---|---|---|
|Key::Withdraw | withdraw- | withdraw-ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70|

### Dictionary

`Key::Dictionary` is the hash derived from a URef and a piece of arbitrary data and leads to a dictionary.

|Type|Prefix|Example|
|---|---|---|
|Key::Dictionary | dictionary- | dictionary-0101010101010101010101010101010101010101010101010101010101010101|

### SystemContractRegistry

`Key::SystemContractRegistry` is a unique `Key` under which a mapping of the names and ContractHashes for system contracts, including `Mint`, `Auction`, `HandlePayment` and `StandardPayment`, is stored.

|Type|Prefix|Example|
|---|---|---|
|Key::SystemContractRegistry | system-entity-registry- |system-entity-registry-0000000000000000000000000000000000000000000000000000000000000000|

### EraSummary

`Key::EraSummary` is a `Key` under which we store current era info.

|Type|Prefix|Example|
|---|---|---|
|Key::EraSummary | era-summary- |era-summary-00000000000000000000000000000000|

### Unbond

`Key::Unbond` is a variant of the key type that tracks unbonding purses.

|Type|Prefix|Example|
|---|---|---|
|Key::Unbond | unbond- | unbond-ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70|

### ChainspecRegistry

`Key::ChainspecRegistry` is a unique `Key` which contains a mapping of file names to the hash of the file itself. These files include *Chainspec.toml* and may also include *Accounts.toml* and *GlobalState.toml*.

|Type|Prefix|Example|
|---|---|---|
|Key::ChainspecRegistry | chainspec-registry- | chainspec-registry-11111111111111111111111111111111 |

### ChecksumRegistry

`Key::ChecksumRegistry` is a unique `key` variant under which we write a registry of checksums for a given block.  There are two checksums in the registry, one for the execution results and the other for the approvals of all transactions in the block.

|Key::ChecksumRegistry | checksum-registry- | checksum-registry-00000000000000000000000000000000 |

### BidAddr

`Key::BidAddr` manages data associated with bids for the `Auction` contract. It may be any one of three variants: `unified`, `validator`, or `delegator`.

|Type|Prefix|Example|
|---|---|---|
| `Unified` | bid-addr-00 | bid-addr-00ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70 |
| `Validator` | bid-addr-01 | bid-addr-01ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70 |
|`Delegator` | bid-addr-02 |bid-addr-02ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70 |

### Package

`Key::Package` is a `Key` under which package information is stored.

|Type|Prefix|Example|
|---|---|---|
|Key::Package | package- | package-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a|

### AddressableEntity

`Key::AddressableEntity` is a `Key` under which an [`AddressableEntity`](../developers/json-rpc/types_chain.md#addressableentity) is stored. It may be one of three variants: `Account`, `System` or `SmartContract`.

|Type|Prefix|Example|
|---|---|---|
| `Account` | addressable-entity-account- |addressable-entity-account-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a |
| `System` | addressable-entity-system- | addressable-entity-system-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a |
| `SmartContract` | addressable-entity-contract- | addressable-entity-contract-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a|

### ByteCode

`Key::ByteCode` is a `Key` under which a byte code record is stored. It may be one of two variants: `v1-wasm` or `empty`.

|Type|Prefix|Example|
|---|---|---|
| `v1-wasm` | byte-code-v1-wasm- | byte-code-v1-wasm-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a |
| `empty` | byte-code-empty- | byte-code-empty-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a |

### Message

`Key::Message` is a `Key` under which a message is stored.

|Type|Prefix|Example|
|---|---|---|
| Message Topic| message-topic-entity-contract- | message-topic-entity-contract-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a |
| Message | message-entity-contract- |message-entity-contract-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a-0202020202020202020202020202020202020202020202020202020202020202-f|

### NamedKey

`Key::NamedKey` is a `Key` under which a single named key entry is stored.

|Type|Prefix|Example|
|---|---|---|
| Account Named Key | named-key-entity-account- | named-key-entity-account-928d914bdcad3ca269e750f63ed3615c5d3f615cf97dba87006fd9f979dacb3c-dde6f264c89fe385a5b07c26d77284d6fddabe79653c5ca25cec39a6363e6ec7 |
| Contract Named Key | named-key-entity-contract- | named-key-entity-contract-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a-2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b |

### BlockGlobal

`Key::BlockGlobal` is a `Key` under which per-block details are stored to global state.

|Type|Prefix|Example|
|---|---|---|
| Block Time | block-time- | block-time-00000000000000000000000000000000000000000000000000000000000000 |
| Block Message Count | block-message-count- | block-message-count-00000000000000000000000000000000000000000000000000000000000000 |

### EntryPoint

`Key::EntryPoint` is a `Key` under which an entrypoint record is written.

|Type|Prefix|Example|
|---|---|---|
| V1 Entry Point | entry-point-v1-entity-contract- | entry-point-v1-entity-contract-53c02487fa9a4bb1cd3e27b849e942cddb97caacb357e5b6bc86f702b2e32dbb-3eba75fc27f0ec2786e09c09d72d61e4c28a86d44d8efc9911460d5438396481 |
| V2 Entry Point | entry-point-v2-entity-contract- | entry-point-v2-entity-contract-2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a2a-1 |
