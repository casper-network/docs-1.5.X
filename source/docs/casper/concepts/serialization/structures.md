# Major Structures

## Account {#serialization-standard-account}

An Account is a structure that represented a user on a legacy Casper network. Alongside the Condor protocol release, `Accounts` were replaced with `AddressableEntities` of the type `Account`. The account structure consists of the following fields:

-   [`account_hash`](./types.md#account-hash)

-   [`named_keys`](./types.md#namedkey)

-   `main_purse`: The account's main purse `URef`. You may find information on `URef` serialization [here](./primitives.md#clvalue-uref).

-   [`associated_keys`](./types.md#associatedkey)

-   [`action_thresholds`](./types.md#action-thresholds)

## AddressableEntity {#addressable-entity}

An Addressable Entity is a structure that represents an entity on a Casper network. The addressable entity consists of the following fields:

- [`package_hash`](./types.md#packagehash)

- [`byte_code_hash`](./types.md#byte-code-hash)

- [`entry_points`](./types.md#entrypoints)

- [`protocol_version`](./types.md#protocolversion)

- `main_purse`: The entity's main purse `URef`. You may find information on `URef` serialization [here](./primitives.md#clvalue-uref).

- [`associated_keys`](./types.md#associatedkey)

- [`action_thresholds`](./types.md#action-thresholds)

- [`message_topics`](./types.md#message-topics)

- [`entity_kind`](./types.md#entity-kind)

## Block {#serialization-standard-block}

A block is the core component of the Casper linear blockchain, used in two contexts:

1.  A data structure containing a collection of transactions. Blocks form the primary structure of the blockchain.
2.  A message that is exchanged between nodes containing the data structure as explained in (1).

Each block has a globally unique ID, achieved by hashing the contents of the block.

Each block points to its parent. An exception is the first block, which has no parent.

A block is structurally defined as follows:

-   `hash`: A hash over the header of the block.
-   `header`: The header of the block that contains information about the contents of the block with additional metadata.
-   `body`: The block's body contains the proposer of the block and hashes of deploys and transfers contained within it.

Further, a block may consist of one of the following types:

- `Version1`: A legacy block created prior to the Condor upgrade.

- `Version2`: A modern block.

### BlockHash {#block-hash}

The block hash is a `Digest` over the contents of the block Header. The `BlockHash` serializes as the byte representation of the hash itself.

### BlockHeader {#block-header}

The header portion of a block, structurally, is defined as follows:

-   `parent_hash` is the hash of the parent block. It serializes to the byte representation of the parent hash. The serialized buffer of the `parent_hash` is 32 bytes long.
-   `state_root_hash` is the global state root hash produced by executing this block's body. It serializes to the byte representation of the `state root hash`. The serialized buffer of the `state_root_hash` is 32 bytes long.
-   `body_hash` the hash of the block body. It serializes to the byte representation of the body hash. The serialized buffer of the `body_hash` is 32 bytes long.
-   `random_bit` is a boolean needed for initializing a future era. It is serialized as a single byte; true maps to 1, while false maps to 0.
-   `accumulated_seed` is a seed needed for initializing a future era. It serializes to the byte representation of the parent Hash. The serialized buffer of the `accumulated_hash` is 32 bytes long.
-   `era_end` contains equivocation and reward information to be included in the terminal finalized block. It is an optional field. Thus if the field is set as `None`, it serializes to _0_. The serialization of the other case is described in the EraEnd.
-   `timestamp` The timestamp from when the block was proposed. It serializes as a single `u64` value. The serialization of a `u64` value is described in the CLValues section.
-   `era_id` Era ID in which this block was created. It serializes as a single `u64` value.
-   `height` The height of this block, i.e., the number of ancestors. It serializes as a single `u64` value.
-   `protocol_version` The version of the Casper network when this block was proposed. It is 3-element tuple containing `u32` values. It serializes as a buffer containing the three `u32` serialized values. Refer to the CLValues section on how `u32` values are serialized.

Both `BlockHeaderV1` and `BlockHeaderV2` serialize in the same way.

### EraEndV1 {#eraendV1}

`EraEndV1` as represented within the block header, is a struct containing two fields.

-   `era_report`: The first field is termed as `EraReport` and contains information about equivocators and rewards for an era.
-   `next_era_validator_weights`: The second field is map for the validators and their weights for the era to follow.

`EraReport` itself contains two fields:

-   `equivocators`: A vector of `PublicKey`.
-   `rewards`: A Binary Tree Map of `PublicKey` and `u64`.
-   `inactive_validators`: A vector of `PublicKey`.

When serializing an EraReport, the buffer is first filled with the individual serialization of the PublicKey contained within the vector.

-   If the `PublicKey` is an `Ed25519` key, the first byte within the buffer is a `1` followed by the individual bytes of the serialized key.
-   If the `PublicKey` is an `Secp256k1` key, the first byte within the buffer is a `2` followed by the individual bytes of the serialized key.

When serializing the overarching struct of `EraEndV1`, we first allocate a buffer, which contains the serialized representation of the `EraReport` as described above, followed by the serialized BTreeMap.

Note that `EraEndV1` is an optional field. Thus the above scheme only applies if there is an `EraEndV1`; if there is no era end, the field simply serializes to _0_.

### EraEndV2 {#eraendV2}

`EraEndV1` as represented within the block header, is a struct containing four fields.

- `equivocators`: A vector of `PublicKey` listing equivocators for the era.
- `inactive_validators`: A list of inactive validators for the era.
- `next_era_validator_weights`: A map of validators and their weights for the era to follow.
- `rewards`: A Binary Tree Map of `PublicKey` and `u64`.
- `next_era_gas_price`: The next era's gas price as a `u8`.

Note that `EraEndV2` is an optional field. Thus the above scheme only applies if there is an `EraEndV2`; if there is no era end, the field simply serializes to _0_.

### BlockBodyV1 {#blockbodyv1}

The body portion of a block, prior to the Condor upgrade, is structurally defined as:

-   `proposer`: The PublicKey which proposed this block.
-   `deploy_hashes`: Is a vector of hex-encoded hashes identifying Deploys included in this block.
-   `transfer_hashes`: Is a vector of hex-encoded hashes identifying Transfers included in this block.

When we serialize the `BlockBodyV1`, we create a buffer that contains the serialized representations of the individual fields present within the block.

-   `proposer` serializes to the byte representation of the `PublicKey`. If the `PublicKey` is an `Ed25519` key, then the first byte within the serialized buffer is 1 followed by the bytes of the key itself; else, in the case of `Secp256k1`, the first byte is 2.
-   `deploy_hashes` serializes to the byte representation of all the deploy_hashes within the block header. Its length is `32 * n`, where n denotes the number of deploy hashes present within the body.
-   `transfer_hashes` serializes to the byte representation of all the deploy_hashes within the block header. Its length is `32 * n`, where n denotes the number of transfers present within the body.

### BlockBodyV2 {blockbodyv2}

A modern block is structurally defined as:

-   [`transactions`](#transaction): Is a `BTreeMap` of transaction hashes and their given categories. It is serialized as a `BTreeMap` where the first 4 bytes represent a `u32` value describing the number of values held within. The remainder consists of a repeating pattern of transaction categories as a `u8` value and then the associated `TransactionHash` the category tag describes.

-   [`rewarded_signatures`](./types.md#rewarded-signatures): A list of identifiers for finality signatures for a particular past block. It serializes as a vector of `SingleBlockRewardedSignatures` which describes signatures for a single ancestor block. The first entry represents the signatures for the parent block, the second for the parent of the parent, and so on.

## Contract {#contract}

 A contract struct containing the following fields:

 -  [`contract_package_hash`](#contractpackagehash)

 -  [`contract_wasm_hash`](#contractwasmhash)

 -  [`named_keys`](./types.md#namedkey)

 -  [`entry_points`](./types.md#entrypoints)

 -  [`protocol_version`](./types.md#protocolversion)

### ContractPackageHash {#contractpackagehash}

A `blake2b` hash of a contract package. The contract package hash serializes as a 32-byte buffer containing the bytes of the contract package hash.

### ContractWasmHash {#contractwasmhash}

A `blake2b` hash of a contract's Wasm. The contract's Wasm hash serializes as a 32-byte buffer containing the bytes of the contract's Wasm hash.

### ContractHash {#contracthash}

A `blake2b` hash of a contract. The contract hash serializes as a 32-byte buffer containing the bytes of the contract hash.

### ContractPackageStatus {#contractpackagestatus}

The lock status of the contract package, serialized as a [`boolean`](./primitives.md#boolean-clvalue-boolean) where `true` indicates a locked contract and `false` indicates an unlocked contract package.

### ContractVersion {#contractversion}

The version of the contract.

-   [`contract_hash`](#contracthash): The contract hash of the contract.

-   `contract_version`: The version of the contract within the protocol major version. It serializes as a [`u32` value](./primitives.md#clvalue-numeric).

-   `protocol_version_major`: The major element of the protocol version this contract is compatible with. It serializes as a [`u32` value](./primitives.md#clvalue-numeric).

### ContractVersionKey {#contractversionkey}

The major element of `ProtocolVersion` combined with `Contract` Version serialized as two [`u32`](./primitives.md#numeric-clvalue-numeric) values.

### ContractWasm {#contractwasm}

A container for a contract's Wasm bytes, serialized as the byte representation of itself.

## Message {#message}

A message emitted by an addressable entity during execution. The message `struct` contains the following fields:

-   `entity_hash`: The identity of the entity that produced the message, serialized as an [`EntityAddr`](./types.md#entity-addr).

-   `message`: The payload of the message, serialized as a [`MessagePayload`](#message-payload).

-   `topic_name`: The name of the topic on which the message was emitted, serialized as a [`String`](./primitives.md#clvalue-string).

-   `topic_name_hash`: The hash of the topic name, serialized as a [`TopicNameHash`](#topic-name-hash).

-   `topic_index`: The message index in the topic, serialized as a [`u32`](./primitives.md#clvalue-numeric) value.

-   `block_index`: The message index in the block, serialized as a [`u64`](./primitives.md#clvalue-numeric) value.

### MessageAddr {#message-addr}

A message topic address, a structure which consists of the following fields:

-   `entity_addr`: The entity address, serialized as an [`EntityAddr`](./types.md#entity-addr).

-   `topic_name_hash`: The hash of the topic name, serialized as a [`TopicNameHash`](#topic-name-hash).

-   `message_index`: The message index, serialized as an [`Option`](./primitives.md#clvalue-option) of `u32`.

### MessageChecksum {#message-checksum}

A newtype wrapping an array which contains the raw bytes of the hash of the message emitted. It serializes as a `CLType` [`u8`](./primitives.md#clvalue-numeric) tag followed by a [`ByteArray`](./primitives.md#clvalue-ByteArray).

### MessageLimits {#message-limits}

Configuration for message lists, serialized as three [`u32`](./primitives.md#clvalue-numeric) values:

-   `max_topic_name_size`: Maximum size in bytes of a topic name string.

-   `max_message_size`: Maximum message size in bytes.

-   `max_topics_per_contract`: Maximum number of topics that a contract can register.

### MessagePayload {#message-payload}

The payload of a message emitted by an addressable entity during execution. It serializes as either a `u8` tag of 0 followed by a a serialized version of a human-readable [`String`](./primitives.md#clvalue-string), or as a `u8` tag of 1 followed by serialized raw [`Bytes`](./types.md#bytes).

### MessageTopicOperation {#message-topic-operation}

Operations that can be performed on message topics. Currently, serializes as a [`u8`](./primitives.md#clvalue-numeric) of 0 representing the `Add` function.

### TopicNameHash {#topic-name-hash}

The hash of the name of a message topic, serialized as a [`u8`](./primitives.md#clvalue-numeric) describing the length of the string and the 32-byte serialized representation of the `string` itself.

## Transaction (#transaction)

A versioned wrapper for a transaction or deploy. It serializes as a `u8` tag of `0` followed by a [`Deploy`](#serialization-standard-deploy) or a `u8` tag of `1` followed by a [`TransactionV1`](#transactionv1).

### Deploy {#serialization-standard-deploy}

A deploy is a data structure containing a smart contract and the requester's signature(s). Additionally, the deploy header contains additional metadata about the deploy itself. A deploy is structurally defined as follows:

-   `hash`: The hash of the deploy header.
-   `header`: Contains metadata about the deploy. The structure of the header is detailed further in this document.
-   `payment`: The payment code for contained smart contract.
-   `session`: The stored contract itself.
-   `approvals`: A list of signatures.

### DeployHash {#deploy-hash}

The deploy hash is a digest over the contents of the deploy header. The deploy hash serializes as the byte representation of the hash itself.

### DeployHeader {#deploy-header}

-   `account`: A supported public key variant (currently either `Ed25519` or `Secp256k1`). An `Ed25519` key is serialized as a buffer of bytes, with the leading byte being `1` for `Ed25519`, with remainder of the buffer containing the byte representation of the signature. Correspondingly, a `Secp256k1` key is serialized as a buffer of bytes, with the leading byte being `2`.
-   `timestamp`: A timestamp is a struct that is a unary tuple containing a `u64` value. This value is a count of the milliseconds since the UNIX epoch. Thus the value `1603994401469` serializes as `0xbd3a847575010000`
-   `ttl`: The **Time to live** is defined as the amount of time for which deploy is considered valid. The `ttl` serializes in the same manner as the timestamp.
-   `gas_price`: The gas is `u64` value which is serialized as `u64` CLValue discussed below.
-   `body_hash`: Body hash is a hash over the contents of the deploy body, which includes the payment, session, and approval fields. Its serialization is the byte representation of the hash itself.
-   `dependencies`: Dependencies is a vector of deploy hashes referencing deploys that must execute before the current deploy can be executed. It serializes as a buffer containing the individual serialization of each DeployHash within the Vector.
-   `chain_name`: Chain name is a human-readable string describing the name of the chain as detailed in the chainspec. It is serialized as a String CLValue described below.

### Approval {#approval}

Approval contains two fields:

-   `signer`: The public key of the approvals signer. It serializes to the byte representation of the `PublicKey`. If the `PublicKey` is an `Ed25519` key, then the first byte within the serialized buffer is 1 followed by the bytes of the key itself; else, in the case of `Secp256k1`, the first byte is 2.
-   `signature`: The approval signature, which serializes as the byte representation of the `Signature`. The first byte within the signature is 1 in the case of an `Ed25519` signature or 2 in the case of `Secp256k1`.

### ApprovalsHash {#approvals-hash}

The cryptographic hash of the bytesrepr-encoded set of approvals. It serializes as a [`digest`](./types.md#digest).

### DeployInfo {#deployinfo}

Information relating to a given deploy. The structure consists of the following fields:

-   `deploy_hash`: The hash of the relevant deploy, serialized as a byte representation of the hash itself.

-   `transfers`: Transfers performed by the deploy, serialized as a [`List`](./primitives.md#clvalue-list).

-   `from`: The account identifier of the creator of the deploy, serialized as an [`account_hash`](./types.md#account-hash).

-   `source`: The source purse used for payment of the deploy, serialized as a [`URef`](./primitives.md#clvalue-uref).

-   `gas`: The gas cost of executing the deploy, serialized as a [`U512`](./primitives.md#clvalue-numeric).

## DeployConfig {#deployconfig}

A `struct` containing configuration values associated with `deploys`. The structure contains the following fields:

-   `max_payment_cost`: The maximum amount any deploy can pay, serialized in [`Motes`](./types.md#motes).

-   `max_dependencies`: The maximum time to live any deploy can specify, serialized as a [`u8`](./primitives.md#clvalue-numeric).

-   `payment_args_max_length`: The maximum length in bytes of payment args per deploy, serialized as a [`u32`](./primitives.md#clvalue-numeric.)

-   `session_args_max_length`: The maximum length in bytes of session args per deploy, serialized as a [`u32`](./primitives.md#clvalue-numeric.)

### TransactionV1 {#transactionv1}

A unit of work sent by a client to the network, which when executed can cause global state to be altered. It is structurally defined as follows:

- [`TransactionV1Hash`](#transactionv1hash)

- [`TransactionV1Header`](#transactionv1header)

- [`TransactionV1Body`](#transactionv1body)

- `approvals`: A list of signatures.

### TransactionV1Hash {#transactionv1hash}

The transaction hash is a digest over the contents of the transaction header. The transaction hash serializes as the byte representation of the hash itself.

### TransactionV1Header {#transactionv1header}

The header portion of a transaction, structurally, is defined as follows:

-   `chain_name`: Chain name is a human-readable string describing the name of the chain as detailed in the chainspec. It is serialized as a [String](./primitives.md#string-clvalue-string).
-   `timestamp`: A timestamp is a struct that is a unary tuple containing a `u64` value. This value is a count of the milliseconds since the UNIX epoch. Thus the value `1603994401469` serializes as `0xbd3a847575010000`.
-   `ttl`: The **Time to live** is defined as the amount of time for which the transaction is considered valid. The `ttl` serializes in the same manner as the timestamp.
-   `body_hash`: Body hash is a hash over the contents of the [transaction body](#transactionv1body). It serializes as the byte representation of the hash itself.
-   [`pricing_mode`](./types.md#pricingmode-pricingmode)
-   [`initator_addr`](./types.md#initiatoraddr-initiatoraddr)

### TransactionV1Body {#transactionv1body}

The body of a `TransactionV1`, consisting of the following:

- [`args`](./types.md#runtimeargs-runtimeargs)
- [`target`](#transactiontarget)
- [`entry_point`](#transactionentrypoint)
- [`scheduling`](#transactionscheduling)

### TransactionRuntime {#transactionruntime}

The runtime used to execute a transaction, serialized as a [`u8`](./primitives.md#numeric-clvalue-numeric). Currently, only the `VmCasperV1` is available, which serializes as a `0`.

### TransactionEntryPoint {#transactionentrypoint}

An entry point of a transaction, serialized as a [`u8`](./primitives.md#numeric-clvalue-numeric) value based on the type of entry point. The following table outlines the available types:

| Tag | Entry Point |
| --- | ----------- |
| 0 | Custom |
| 1 | Transfer |
| 2 | Add_Bid |
| 3 | Withdraw_Bid |
| 4 | Delegate |
| 5 | Undelegate |
| 6 | Redelegate |
| 7 | Activate_Bid |
| 8 | ChangePublicKey |
| 9 | Call |

### TransactionConfig {#transactionconfig}

A `struct` containing configuration values associated with `Transactions`. The structure contains the following fields:

-   `max_ttl`: The maximum time to live any transaction can specify, serialized as a [`TimeDiff`](./types.md#timediff).

-   `block_max_approval_count`: The maximum number of approvals (signatures) allowed in a block across all transactions, serialized as a [`u32`](./primitives.md#clvalue-numeric).

-   `max_block_size`: The maximum possible size in bytes of a block, serialized as a [`u32`](./primitives.md#clvalue-numeric).

-   `block_gas_limit`: The maximum sum of payment across al transactions included in a block, serialized as a [`u64`](./primitives.md#clvalue-numeric).

-   `native_transfer_minimum_motes`: The minimum token amount for a native transfer deploy or transaction, serialized as a [`u64`](./primitives.md#clvalue-numeric).

-   `max_timestamp_leeway`: The maximum value to which a `transaction_acceptor.timestamp_leeway` can be set in the *config.toml* file.

-   [`deploy_config`](#deployconfig): Configuration values specific to Deploy transactions.

-   [`transaction_v1_config`](#transactionv1config): Configuration values specific to V1 transactions.

### TransactionV1Config {#transactionv1config}

A `struct` containing configuration values associated with `TransactionV1s`. The structure contains the following fields:

-   `native_mint_lane`: The lane configuration for the native mint interaction, serializing as a vector of [`u64`](./primitives.md#clvalue-numeric) values.

-   `native_auction_lane`: The lane configuration for the native auction interaction, serializing as a vector of [`u64`](./primitives.md#clvalue-numeric) values.

-   `wasm_lanes`: The lane configuration for the Wasm-based lanes, serializing as a nested vector of [`u64`](./primitives.md#clvalue-numeric) values.

### TransactionHash {#transactionhash}

A versioned wrapper for transaction hash or deploy hash. It serializes as either a `u8` tag of 0 followed by a [`DeployHash`](#deploy-hash) or a `u8` tag of 1 followed by a [`TransactionV1Hash`](#transactionV1hash).

### TransactionHeader {#transactionheader}

A versioned wrapper for transaction header or deploy header. It serializes as either a `u8` tag of 0 followed by a [`DeployHeader`](#deploy-header) or a `u8` tag of 1 followed by a [`TransactionV1Header`](#transactionv1header).

### TransactionId {#transactionid}

The unique identifier of a `Transaction`, serialized as its [`TransactionHash`](#transactionhash) and [`ApprovalsHash`](#approvals-hash).

### TransactionScheduling {#transactionscheduling}

The scheduling mode of a transaction, serialized as a [`u8`](./primitives.md#numeric-clvalue-numeric) tag identifying the type:

- `Standard` serializes as a `0`.

- `FutureEra` serializes as a `1` followed by a future [`era_id`](./types.md#eraid-eraid).

- `FutureTimestamp` serializes as a `2` followed by a future [`timestamp`](./types.md#timestamp-timestamp).

### TransactionInvocationTarget {#transactioninvocationtarget}

The identifier of a `stored` transaction target, serialized as one of the following:

- `InvocableEntity` serializes as a `u8` tag of `0` followed by the hex-encoded entity address serialized as the byte representation of itself.

- `InvocableEntityAlias` serializes as a `u8` tag of `1` followed by the alias serialized as a [`string`](./primitives.md#string-clvalue-string).

- `Package` serializes as a `u8` tag of `2` followed by the [`package hash`](./types.md#packagehash-package-hash) and optionally the [`entity_version`](./types.md#entityversionkey-entityversionkey).

- `PackageAlias` serializes as a `u8` tag of `3` followed by the alias serialized as a [`string`](./primitives.md#string-clvalue-string) and optionally the [`entity_version`](./types.md#entityversionkey-entityversionkey).

### TransactionTarget {#transactiontarget}

The execution target of a transaction, serializing as a [`u8`](./primitives.md#numeric-clvalue-numeric) that identifies the type, followed by any additional data.

- `native` serializes as a `0`.

- `stored` serializes as a `1` followed by the [`id`](#transactioninvocationtarget) and [`runtime`](#transactionruntime).

- `session` serializes as a `2` followed by the [`kind`](#transactionsessionkind), [`module_bytes`](#payment--session) and [`runtime`](#transactionruntime).

### TransactionWithExecutionInfo {#transaction-with-execution-info}

A `struct` containing a`Transaction` with execution info. It serializes as a [`Transaction`](#transaction) followed by an [`Option`](./primitives.md#clvalue-option) of `ExecutionInfo`.
