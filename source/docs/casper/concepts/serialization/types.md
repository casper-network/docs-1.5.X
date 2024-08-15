# Type Serialization

## Account Action Thresholds {#account-action-thresholds}

The minimum weight thresholds that have to be met when executing an action of a certain type. It serializes as three consecutive [`u8` values](./primitives.md#clvalue-numeric) as follows.

-   `deployment`: The minimum weight threshold required to perform deployment actions as a `u8` value.

-   `key_management`: The minimum weight threshold required to perform key management actions as a `u8` value.

## Account Config {#account-config}

Configuration of an individual account in *accounts.toml*, containing the account's public key, main purse balance and validator config.

-   `public_key` The public key of the account, serialized as the byte representation of [itself](./primitives.md#clvalue-publickey).

-   `balance` The balance of the account's main purse, serialized as a [`U512 value`](./primitives.md#clvalue-numeric).

-   `validator` The validator configuration for the account, serialized as an [`Option`](./primitives.md#clvalue-option).

## Account Hash {#account-hash}

A `blake2b` hash of the public key, representing the address of a user's account. The account hash serializes as a 32-byte buffer containing the bytes of the account hash.

## Account Identifier {#account-identifier}

Identifier for possible ways to retrieve an Account. It can consist of any of the following in most situations:

- [`PublicKey`](#publickey): The account's public key.

- [`AccountHash`](#account-hash): The `blake2b` hash of the account's public key.

## Activation Point {#activation-point}

The first era to which the associated protocol version applies. It serializes as a single [`u8`](./primitives.md#clvalue-numeric) tag indicating if the era in question is genesis. If it is the genesis era, the following bytes will be a `timestamp`. If not, the bytes represent an `era_id`.

-   `era_id`: An [Era ID newtype](#eraid) identifying the era when the protocol version will activate.

-   `timestamp`: A [timestamp](#timestamp) if the activation point is of the Genesis variant.

## AddressableEntityHash {#addressable-entity-hash}

The hex-encoded address of an addressable entity, which serializes as the byte representation of itself.

## Approval {#approval}

A struct containing a signature and the public key of the signer.

-   `signature`: The approval signature, which serializes as the byte representation of the [`Signature`](#signature). The first byte within the signature is 1 in the case of an `Ed25519` signature or 2 in the case of `Secp256k1`.

-   `signer`: The public key of the approvals signer. It serializes to the byte representation of the [`PublicKey`](./primitives.md#clvalue-publickey). If the `PublicKey` is an `Ed25519` key, then the first byte within the serialized buffer is 1 followed by the bytes of the key itself; else, in the case of `Secp256k1`, the first byte is 2.

## ApprovalsHash {#approvals-hash}

The cryptographic hash of the bytesrepr-encoded set of approvals. It serializes as a [`digest`](#digest).

## AssociatedKey {#associatedkey}

A key granted limited permissions to an Account, for purposes such as multisig. It is serialized as a `BTreeMap` where the first 4 bytes represent a `u32` value describing the number of keys and weights held within. The remainder consists of a repeating pattern of serialized named keys and then weights of the length dictated by the first four bytes.

-   `account_hash`: The [account hash](#account-hash) of the associated key.

-   `weight`: The weight of an associated key. The weight serializes as a [`u8` value](./primitives.md#clvalue-numeric).

## AvailableBlockRange {#availableblockrange}

An unbroken, inclusive range of blocks. It serializes as two consecutive [`u64` values](./primitives.md#clvalue-numeric) containing the following two fields:

-   `low`: The inclusive lower bound of the range.

-   `high`: - The inclusive upper bound of the range.

## BalanceHoldAddr {#balanceholdaddr}

A balance hold address. It serializes as a [`BalanceHoldAddrTag`](#balanceholdaddrtag) describing the type of balance hold address as follows:

-   `Gas` serializes as a `BalanceHoldAddrTag` of `0` followed by the [URef](./primitives.md#clvalue-uref) of the purse the hold will be placed on, and the [`block_time`](#blocktime) that the hold was placed.

-   `Processing` serializes as a `BalanceHoldAddrTag` of `1` followed by the [URef](./primitives.md#clvalue-uref) of the purse the hold will be placed on, and the [`block_time`](#blocktime) that the hold was placed.

## BalanceHoldAddrTag {#balanceholdaddrtag}

A tag describing the type of `BalanceHoldAddr`, serializing as a single [`u8` value](./primitives.md#clvalue-numeric).

## BalanceResponse {#balance-response}

`BalanceResponse` is a struct that provides the response to a balance query. It consists of the following fields:

-   `total_balance`: The purse's total balance, not considering holds. It serializes as a [`U512` value](./primitives.md#clvalue-numeric).

-   `available_balance`: The available balance, consisting of the total balance minus the sum of all active holds. It serializes as a [`U512` value](./primitives.md#clvalue-numeric).

-   `total_balance_proof`: A proof that the given value is present in the Merkle trie. It serializes as a `TrieMerkleProof`, consisting of a key, a value and a `proof_step`.

-   `balance_holds`: Any time-relevant active holds on the balance. It serializes as a `BTreeMap` where the first 4 bytes represent a `u32` value describing the number of `BlockTime` and `BalanceHoldsWithProof` held within. The remainder consists of a repeating pattern of serialized `BlockTime`s and `BalanceHoldsWithProof`s of the length dictated by the first four bytes.

## Bid {#bid}

An entry in the validator map. The structure consists of the following fields:

-   `validator_public_key`: The validator's public key. It serializes as a [`PublicKey`](./primitives.md#clvalue-publickey).

-   `bonding_purse`: The purse used for bonding. It serializes as a [`Uref`](./primitives.md#clvalue-uref).

-   `staked_amount`: The amount of tokens staked by a validator (not including delegators). It serializes as a [`U512` value](./primitives.md#clvalue-numeric).

-   `delegation_rate`: The delegation rate of the bid. It serializes as an `i32` signed 32-bit integer primitive.

-   `vesting_schedule`: The vesting schedule for a genesis validator. `None` if it is a non-genesis validator. It serializes as an [`Option`](./primitives.md#clvalue-option).

-   `delegators`: The validator's delegators, indexed by their public keys. They are serialized as a `BTreeMap` where the first 4 bytes represent a `u32` value describing the number of `PublicKey`s and delegators held within. The remainder consists of a repeating pattern of serialized `PublicKey`s and then delegators of the length dictated by the first four bytes.

-   `inactive`: If the validator has been evicted. A [boolean](./primitives.md#clvalue-boolean) value that serializes as a single byte; `true` maps to `1`, while `false` maps to `0`.

## BidAddr {#bidaddr}

`BidAddr` manages data associated with bids for the `Auction` system contract. It serializes as a single [`u8`](./primitives.md#clvalue-numeric) tag describing the type of Bid, followed by information relating to the bid itself. It may be one of the following:

-   `Unified` A `BidAddr` for legacy unified bids. It serializes as a `u8` of `0` followed by the [`account_hash`](#account-hash) identifying the legacy bid.

-   `Validator` A validator bid. It serializes as a `u8` of `1` followed by the [`account_hash`](#account-hash) of the validator.

-   `Delegator` A delegator bid. It serializes as a `u8` of `2` followed by the [`account_hash`](#account-hash) of the associated validator and then the [`account_hash`](#account-hash) of the delegator.

-   `Credit` A `BidAddr` representing an auction credit. It serializes as a `u8` of `4` followed by the [`account_hash`](#account-hash) of the validator and the [`EraId`](#eraid) for the applicable credit.

## BidKind {#bid-kind}

Auction bid variants. It serializes as a single [`u8` value](./primitives.md#clvalue-numeric) indicating the type of bid kind as per the following table:

| BidKind   | u8 | Description |
| --------- | -- | ----------- |
| [Unified](#bid)   | 0  | Legacy data that contains all delegators for a given validator. |
| [Validator](#validatorbid) | 1  | A bid record containing only validator data. |
| [Delegator](#delegatorbid) | 2  | A bid record containing only delegator data. |

## BlockGlobalAddr {blockglobaladdr}

An address for singleton values associated to a specific block. These are values which are calculated or set during the execution of a block such as the block timestamp, or the total count of messages emitted during the execution of the block.

It serializes as two `u8` values, the first of which describes the category, followed by the underlying value as follows:

-   `BlockTime` begins with a `u8` of 0, followed by the `u8` of the block time.

-   `MessageCount` begins with a `u8` of 1, followed by message count as a `u8`.

## BlockIdentifier {#blockidentifier}

Identifier for possible ways to retrieve a Block. It can consist of any of the following in most situations:

-   [`hash`](./structures.md#block-hash): Identify and retrieve a Block with its hash. The `BlockHash` serializes as the byte representation of the hash itself.

-   `height`: Identify and retrieve the Block with its height. Height serializes as a single `u64` value.

-   `state_root_hash`: Identify and retrieve the Block with its state root hash. It serializes to the byte representation of the `state root hash`. The serialized buffer of the `state_root_hash` is 32 bytes long.

## BlockSignatures {block-signatures}

A collection of signatures for a single block, along with the associated block's hash and era ID.

There are two possible versions for `BlockSignatures`, with a prefixed `u8` tag describing which version it is.

-   [`BlockSignaturesV1`](#block-signatures-v1) serializes as a `u8` of 0 followed by the `BlockSignaturesV1`.

-   [`BlockSignaturesV2`](#block-signatures-v2) serializes as a `u8` of 1 followed by the `BlockSignaturesV2`.

### BlockSignaturesV1 {#block-signatures-v1}

`BlockSignaturesV1` is a legacy version of `BlockSignatures` that applies to blocks created before the Condor release. The structure is as follows:

-   [`block_hash`](./structures.md#block-hash): The block hash of the associated block. It serializes as the byte representation of the hash itself.

-   [`era_id`](#eraid): The era ID in which this block was created. It serializes as a single [`u64` value](./primitives.md#clvalue-numeric).

-   `proofs`: The proofs of the block, a collection of validator's signatures of the block hash. It serializes as a `BTreeMap` where the first 4 bytes represent a `u32` value describing the number of [`PublicKeys`](#publickey) and [`signatures`](#signature) held within. The remainder consists of a repeating pattern of serialized public keys and signatures of the length dictated by the first four bytes.

### BlockSignaturesV2 {#block-signatures-v2}

`BlockSignaturesV2` is the current version of `BlockSignatures` that applies to blocks created after the Condor release. The structure is as follows:

-   [`block_hash`](./structures.md#block-hash): The block hash of the associated block. It serializes as the byte representation of the hash itself.

-   `block_height`: The block height. It serializes as a single `u64` value.

-   [`era_id`](#eraid): The era ID in which this block was created. It serializes as a single [`u64` value](./primitives.md#clvalue-numeric).

-   [`chain_name_hash`](#chain-name-digest): The hash of the chain name of the associated block. It serializes as the byte representation of the hash itself.

-   `proofs`: The proofs of the block, a collection of validator's signatures of the block hash. It serializes as a `BTreeMap` where the first 4 bytes represent a `u32` value describing the number of [`PublicKeys`](#publickey) and [`signatures`](#signature) held within. The remainder consists of a repeating pattern of serialized public keys and signatures of the length dictated by the first four bytes.

## BlockSyncStatus {#blocksyncstatus}

The status of syncing an individual block. It serializes as the byte representation of the [block hash](./structures.md#block-hash) of the block in question, followed by an [`option`](./primitives.md#option-clvalue-option) representing a [`u64`](./primitives.md#numeric-clvalue-numeric) of the block height and the remainder is the byte representation of the `acquisition_state` as a [string](./primitives.md#string-clvalue-string).

## BlockTime (#blocktime)

The block time serialized as a single `u64` value.

## BTreeMap {#btreemap}

A `BTreeMap` is a method of mapping keys to values within a Casper network. They serialize with the first 4 bytes representing a `u32` value describing the number of keys and values held within. The remainder consists of a repeating pattern of serialized keys and then values of the length dictated by the first four bytes.

## BTreeSet {#btreeset}

A `BTreeSet` is a method of storing a set of values within a Casper network. They serialize with the first 4 bytes representing a `u32` value describing the number of values held within. The remainder consists of a repeating series of values of the length dictated by the first four bytes.

## ByteCode {#bytecode}

A container for a contract's Wasm bytes. It serializes as the single `u8` [BidKind](#bidkind), followed by a [`u32`](./primitives.md#numeric-clvalue-numeric) value describing the size of the remaining [Bytes](#bytes) and then the bytes as described.

## Bytes {#bytes}

Hex-encoded bytes serialized as a `u32` value describing the length of the bytes, followed by the bytes themselves.

## ByteCodeKind

The type of byte code, serialized as a single `u8` value. A `0` indicates empty byte code, while a `1` indicates a `V1CasperWasm` to be executed with the first version of the Casper execution engine.

## Caller {#caller}

`Caller` is the identity of a calling entity. It serializes as one of two variants, described below:

-   `Initiator` is the overall calling account and serializes as a `u8` tag of 0 followed by the [`account_hash`](#accounthash) of the calling account.

-   `Entity` is a calling entity, such as a smart contract or a system contract. It serializes as a `u8` tag of 1 followed by the [`package_hash`](#packagehash) and [`entity_hash`](./structures.md#addressable-entity-hash).

## CallStackElement {#call-stack-element}

`CallStackElement` is a legacy `enum` created pre-Condor release that represents the origin of a sub-call in a call stack. It begins with a `u8` tag that describes the type of caller as follows:

-   `Session`: Session code, which serializes as a `u8` tag of 0 followed by the [`account_hash`](#accounthash) of the calling account.

-   `StoredSession`: Stored access to a session, serializing as a `u8` of 1 followed by the [`account_hash`](#accounthash), [`contract_package_hash`](./structures.md#contractpackagehash) and the [`contract_hash`](./structures.md#contracthash).

-   `StoredContract`: A contract, which serializes as a `u8` tag of 2 followed by the [`contract_package_hash`](./structures.md#contractpackagehash) and the [`contract_hash`](./structures.md#contracthash).

## ChainNameDigest {#chain-name-digest}

The cryptographic hash of a chain name, serialized as the byte representation of the hash itself.

## ChainspecRegistry {#chainspecregistry}

ChainspecRegistry is a unique key variant which contains a mapping of file names to the hash of the file itself. This map includes *Chainspec.toml* and may include *Accounts.toml* and *GlobalState.toml*. It is serialized as a `BTreeMap` where the first 4 bytes represent a `u32` value describing the number of names as strings and [digests](#digest) held within. The remainder consists of a repeating pattern of serialized strings and then digests of the length dictated by the first four bytes. Digests and their inclusion criteria are as follows:

-   `chainspec_raw_hash` will always be included.

-   `genesis_accounts_raw_hash` may be included in specific circumstances.

-   `global_state_raw_hash` may be included in specific circumstances.

## ChecksumRegistry {#checksum-registry}

The checksum registry. It serializes as a `BTreeMap` where the first 4 bytes represent a `u32` value describing the number of checksum names as strings and [digests](#digest) held within. The remainder consists of a repeating pattern of serialized strings and then digests of the length dictated by the first four bytes.

## Delegator {#delegator}

Represents a party delegating their stake to a validator (or "delegatee"). The structure consists of the following fields:

-   `delegator_public_key`: The public key of the delegator, serialized as a [`PublicKey`](./primitives.md#clvalue-publickey).

-   `staked_amount`: The amount staked by the delegator, serialized as a [`U512` value](./primitives.md#clvalue-numeric).

-   `bonding_purse`: The bonding purse associated with the delegation. It serializes as a [`URef` value](./primitives.md#clvalue-uref).

-   `validator_public_key`: The public key of the validator that the delegator will be delegating to, serialized as a [`PublicKey`](./primitives.md#clvalue-publickey).

-   `vesting_schedule`: The vesting schedule for the provided delegator bid. `None` if it is a non-genesis validator. It serializes as an [`Option`](./primitives.md#clvalue-option).

## Digest {#digest}

A `blake2b` hash digest. The digest serializes as a byte representation of the hash itself.

## DisabledVersions {#disabledversions}

Disabled contract versions, containing the following:

-   `contract_version`: The version of the contract within the protocol major version. It serializes as a [`u32` value](./primitives.md#clvalue-numeric).

-   `protocol_version_major`: The major element of the protocol version this contract is compatible with. It serializes as a [`u32` value](./primitives.md#clvalue-numeric).

## Effects {#effects}

A log of all transforms produced during execution, serialized as a vector of [transforms](#transformv2).

## Entity Action Thresholds {#entity-action-thresholds}

The minimum weight thresholds that have to be met when executing an action of a certain type. It serializes as three consecutive [`u8` values](./primitives.md#clvalue-numeric) as follows.

-   `deployment`: The minimum weight threshold required to perform deployment actions as a `u8` value.

-   `upgrade_management`: The minimum weight threshold required to perform upgrade management actions as a `u8` value.

-   `key_management`: The minimum weight threshold required to perform key management actions as a `u8` value.

## EntityAddr {#entity-addr}

The address for an `AddressableEntity`. It serializes as a `u8` [`EntityKindTag`](#entity-kind-tag) followed by the 32-byte buffer containing the bytes of the `hash_addr` as follows:

-   `System`: A package associated with a native contract implementation, serialized as a `u8` of 0, followed by the `hash_addr`.

-   `Account`: A package associated with an Account hash, serialized as `u8` of 1 followed by the `hash_addr`.

-   `SmartContract`: A package associated with Wasm stored on chain, serialized as a `u8` of 2 followed by the `hash_addr`

## EntityKind {#entity-kind}

The type of `Package`, serialized as a `u8` [`EntityKindTag`](#entity-kind-tag) describing the type followed by further data as follows:

-   `System`: A package associated with a native contract implementation. It serializes as a `u8` of 0 followed by a [`SystemEntityType`](#system-entity-type).

-   `Account`: A package associated with an Account hash, serialized as a `u8` of 1 followed by an [`account_hash`](#accounthash).

-   `SmartContract`: A package associated with Wasm stored on chain, serialized as a `u8` of 2 followed by a [`transaction_runtime`](./structures.md#transactionruntime).

## EntityKindTag {#entity-kind-tag}

A tag for the variants of `EntityKind`, serialized as a single `u8` tag of 0 for `System`, 1 for `Account` and 2 for `SmartContract`.

## EntityVersionKey {#entityversionkey}

The major element of `ProtocolVersion` combined with `EntityVersion` serialized as two [`u32`](./primitives.md#numeric-clvalue-numeric) values.

## EntityVersions {#entity-versions}

A collection of entity versions, serialized as a `BTreeMap` where the first 4 bytes represent a `u32` value describing the number of [`EntityVersionKeys`](./structures.md#entityversionkey) mapped to [`AddressableEntityHashes`](./structures.md#addressable-entity-hash) within. The remainder consists of a repeating pattern of serialized `EntityVersionKeys` and `AddressableEntityHashes` of the length dictated by the first four bytes.

## EntryPoint (Contract) {#entrypoint}

A type of signature method. Order of arguments matters, since this can be referenced by index as well as name.

-   `name`: The name of the entry point, serialized as a [`String`](./primitives.md#clvalue-string).

-   `args`: Arguments for this method. They serialize as a list of the [`Parameter`](#parameter)s, where each parameter represents an argument passed to the entrypoint.

-   `ret`: The return type of the method, serialized as a [`Unit`](./primitives.md#clvalue-unit).

-   `access`: An `enum` describing the possible access control options for a contract entry point. It serializes as a `u8` value of 1 for public or a 2 followed by a [`List`](./primitives.md#clvalue-list) of authorized users.

-   `entry_point_type`: Identifies the type of entry point. It serializes as a `0` for Session and a `1` for Contract.

## EntryPoint (Entity) {#entry-point}

The type signature of a method. This structure consists of the following fields:

-   `name`: The name of the entry point, serialized as a [`String`](./primitives.md#clvalue-string).

-   `args`: Arguments for this method. They serialize as a list of the [`Parameter`](#parameter)s, where each parameter represents an argument passed to the entrypoint.

-   `ret`: The return type of the method, serialized as a [`Unit`](./primitives.md#clvalue-unit).

-   `access`: An `enum` describing the possible access control options for a contract entry point. It serializes as a `u8` value of 1 for public or a 2 followed by a [`List`](./primitives.md#clvalue-list) of authorized users.

-   [`entry_point_type`](#entry-point-type) 

-   [`entry_point_payment`](#entry-point-payment)

### EntryPointAddr

An entry point's address. It serializes as one of the two following variants:

-   `VmCasperV1`: A V1 entry point. It serializes as a `u8` of 0 followed by an [`EntityAddr`](#entity-addr) and `name_bytes`, which is the 32-byte hash of the name of the entry point.

-   `VmCasperV2`: A V2 entry point. It serializes as a `u8` of 1 followed by an [`EntityAddr`](#entity-addr) followed by a `u32` `Selector`.

### EntrypointPayment

An `enum` specifying who pays for the invocation and execution of an entry point. It serializes as a single `u8` byte tag as follows:

-   `Caller`: Serializes as a 0 and indicates that the caller must cover the cost.

-   `SelfOnly`: Serializes as a 1 and indicates that the contract will pay the cost to execute itself, but no subsequent invoked contracts.

-   `SelfOnward`: Serializes as a 2 and indicates that the contract will pay for executing itself and any subsequent invocations.

### EntrypointType

The context of method execution. It serializes as one of the following:

-   `Caller`: Serializes as a single `u8`, `0b00000000`

-   `Called`: Serializes as a single `u8`, `0b00000001`

-   `Factory`: Serializes as a single `u8`, `0b10000000`

## EntrypointV2

The entry point for the V2 Casper VM. It serializes as a `u32` representing the `Selector` followed by a `u32` representing the `Flags`.

## EntryPoints {#entrypoints}

Entry points for a given entity, serialized as a `BTreeMap` where the first 4 bytes represent a `u32` value describing the number of `String` to `EntryPoint`s held within. The remainder consists of a repeating pattern of serialized `String`s and then `EntryPoint`s of the length dictated by the first four bytes.

## EraID {#eraid}

An Era ID newtype. It serializes as a single [`u64` value](./primitives.md#clvalue-numeric).

## EraInfo {#erainfo}

Auction metadata, intended to be recorded each era. It serializes as a [`List`](./primitives.md#clvalue-list) of [seigniorage allocations](#seigniorageallocation).

## ExecutableDeployItem {#executable-deploy-item}

The executable component of a `Deploy`, serialized as a `u8` identifying tag followed by additional bytes as follows:

-   `ModuleBytes`: Serializes as a `u8` tag of 0 followed by [`bytes`](#bytes) and [`runtimeargs`](#runtimeargs).

-   `StoredContractByHash`: Serializes as a `u8` tag of 1 followed by the contract hash as an [`AddressableEntityHash`](./structures.md#addressable-entity-hash), the name of an entry point as a [String](./primitives.md#string-clvalue-string) and [`runtimeargs`](#runtimeargs).

-   `StoredContractByName`: Serializes as a `u8` tag of 2 followed by the named key as a [String](./primitives.md#string-clvalue-string), the name of an entry point as a `String` and [`runtimeargs`](#runtimeargs).

-   `StoredVersionedContractByHash`: Serializes as a `u8` tag of 3 followed by the [`PackageHash`](#package-hash), the `version` as an [`Option`](./primitives.md#clvalue-option), an entry point as a [String](./primitives.md#string-clvalue-string) and [`runtimeargs`](#runtimeargs).

-   `StoredVersionedContractByName`: Serializes as a `u8` tag of 4 followed by the named key as a [String](./primitives.md#string-clvalue-string), the `version` as an [`Option`](./primitives.md#clvalue-option), the name of an entry point as a `String` and [`runtimeargs`](#runtimeargs).

-   `Transfer`: Serializes as a `u8` tag of 5 followed by [`runtimeargs`](#runtimeargs).

## ExecutionEffect {#executioneffect}

The journal of execution transforms from a single deploy.

-   `operations`: The resulting operations, serialized as a [`List`](./primitives.md#clvalue-list) of [operations](#operation).

-   `transforms`: The actual [transformation](#transform) performed while executing a deploy.

## ExecutionResultV1 {#executionresultv1}

The result of a single deploy. It serializes as a `u8` tag indicating either `Failure` as a 0 or `Success` as a 1. This is followed by the appropriate structure below:

### `Failure`

The result of a failed execution.

-   `effect`: The [effect](#executioneffect) of executing the deploy.

-   `transfers`: A record of transfers performed while executing the deploy, serialized as a [`List`](./primitives.md#clvalue-list).

-   `cost`: The cost of executing the deploy, serializes as a [`U512`](./primitives.md#clvalue-numeric) value.

-   `error_message`: The error message associated with executing the deploy, serialized as a [`String`](./primitives.md#clvalue-string).

### `Success`

The result of a successful execution.

-   `effect`: The [effect](#executioneffect) of executing the deploy.

-   `transfers`: A record of transfers performed while executing the deploy, serialized as a [`List`](./primitives.md#clvalue-list).

-   `cost`: The cost of executing the deploy, serializes as a [`U512`](./primitives.md#clvalue-numeric) value.

## ExecutionResultV2 {#executionresultv2}

The result of a single transaction. It serializes as a `u8` tag indicating either `Failure` as a 0 or `Success` as a 1. This is followed by the appropriate structure below:

### `Failure`

The result of a failed execution.

-   `effects`: The [effect](#effects) of executing the transaction.

-   `transfers`: A record of transfers performed while executing the transaction, serialized as a [`List`](./primitives.md#clvalue-list).

-   `cost`: The cost of executing the transaction, serializes as a [`U512`](./primitives.md#clvalue-numeric) value.

-   `error_message`: The error message associated with executing the transaction, serialized as a [`String`](./primitives.md#clvalue-string).

### `Success`

The result of a successful execution.

-   `effects`: The [effects](#effects) of executing the transaction.

-   `transfers`: A record of transfers performed while executing the transaction, serialized as a [`List`](./primitives.md#clvalue-list).

-   `cost`: The cost of executing the transaction, serializes as a [`U512`](./primitives.md#clvalue-numeric) value.

## Gas {#gas}

The `Gas` structure serializes as a [`U512`](./primitives.md#clvalue-numeric) amount of gas.

## Group {#group}

A (labeled) "user group". Each method of a versioned contract may be associated with one or more user groups which are allowed to call it. User groups are serialized as a [String](./primitives.md#clvalue-string).

## Groups {#groups}

They are serialized as a `BTreeMap` where the first 4 bytes represent a `u32` value describing the number of user groups and `BTreeSets` of [`URef`](./primitives.md#clvalue-uref)s held within. The remainder consists of a repeating pattern of serialized user groups and `BTreeSets` of the length dictated by the first four bytes.

## InitiatorAddr (#initiatoraddr)

The address of the initiator of a [`TransactionV1`](./structures.md#transactionv1), which serializes as a `u8` of `0` followed by a [`PublicKey`](#publickey-publickey) or a `1` followed by an [`AccountHash`](#account-hash).

## Keys {#serialization-standard-state-keys}

A _key_ in [Global State](../design/casper-design.md#global-state-head) is one of the following data types:

-   32-byte account identifier (called an "account identity key")
-   32-byte immutable contract identifier (called a "hash key")
-   32-byte reference identifier (called an "unforgeable reference")
-   32-byte transfer identifier
-   32-byte deploy information identifier
-   32-byte purse balance identifier
-   32-byte Auction bid identifier
-   32-byte Auction withdrawal identifier
-   32-byte Dictionary identifier
-   32-byte System Contract Registry
-   32-byte Auction unbond identifier
-   32-byte Chainspec Registry

The one exception to note here is the identifier for [`EraInfo`](#erainfo), which actually serializes as a [`u64`](./primitives.md#clvalue-numeric) value with an additional byte for the tag.

### Account Identity Key {#global-state-account-key}

This key type is used specifically for accounts in the global state. All accounts in the system must be stored under an account identity key, and no other types. The 32-byte identifier which represents this key is derived from the `blake2b256` hash of the public key used to create the associated account (see [Accounts](../design/casper-design.md#accounts-associated-keys-weights) for more information).

### Hash Key {#serialization-standard-hash-key}

This key type is used for storing contracts immutably. Once a contract is written under a hash key, that contract can never change. The 32-byte identifier representing this key is derived from the `blake2b256` hash of the deploy hash (see [block-structure-head](../design/casper-design.md#block-structure-head) for more information) concatenated with a 4-byte sequential ID. The ID begins at zero for each deploy and increments by one each time a contract is stored. The purpose of this ID is to allow each contract stored in the same deploy to have a unique key.

### Unforgeable Reference (`URef`) {#serialization-standard-uref}

`URef` broadly speaking can be used to store values and manage permissions to interact with the value stored under the `URef`. `URef` is a tuple which contains the address under which the values are stored and the Access rights to the `URef`. Refer to the [Unforgeable Reference](../design/casper-design.md#uref-head) section for details on how `URefs` are managed.

### Transfer Key {#serialization-standard-transfer-key}

This key type is used specifically for transfers in the global state. All transfers in the system must be stored under a transfer key and no other type. The 32-byte identifier representing this key is derived from the `blake2b256` hash of the transfer address associated with the given transfer.

### DeployInfo Key {#serialization-standard-deploy-info-key}

This key type is used specifically for storing information related to deploys in the global state. Information for a given deploy is stored under this key only. The 32-byte identifier which represents this key is derived from the `blake2b256` hash of the deploy itself.

### EraInfo Key {#serialization-standard-era-info-key}

This key type is used specifically for storing information related to the `Auction` metadata for a particular era. The underlying data type stored under this is a vector of the allocation of seigniorage for that given era. The identifier for this key is a new type that wraps around the primitive `u64` data type and co-relates to the era number when the auction information was stored.

This key type is used specifically for storing information related to auction bids in the global state. Information for the bids is stored under this key only. The 32-byte identifier which represents this key is derived from the `blake2b256` hash of the public key used to create the associated account (see [Accounts](../design/casper-design.md#accounts-associated-keys-weights) for more information).

This key type is used specifically for storing information related to auction withdraws in the global state. Information for the withdrawals is stored under this key only. The 32-byte identifier which represents this key is derived from the `blake2b256` hash of the public key used to create the associated account (see [Accounts](../design/casper-design.md#accounts-associated-keys-weights) for more information).

### Serialization for `Key` {#serialization-standard-serialization-key}

Given the different variants for the over-arching `Key` data-type, each of the different variants is serialized differently. This section of this chapter details how the individual variants are serialized. The leading byte of the serialized buffer acts as a tag indicating the serialized variant.

| `Key`        | Serialization Tag |
| ------------ | ----------------- |
| `Account`    |  0               |
| `Hash`       |  1               |
| `URef`       |  2               |
| `Transfer`   |  3               |
| `DeployInfo` |  4               |
| `EraInfo`    |  5               |
| `Balance`    |  6               |
| `Bid`        |  7               |
| `Withdraw`   |  8               |
| `Dictionary` |  9               |
| `SystemContractRegistry`| 10    |
| `EraSummary` | 11               |
| `Unbond`     | 12               |
| `ChainspecRegistry` | 13        |
| `ChecksumRegistry` | 14         |
| `BidAddr`    | 15               |

| `Package`    | 16               |
| `AddressableEntity` | 17        |
| `ByteCode`   | 18               |
| `Message`    | 19               |

-   `Account` serializes as a 32 byte long buffer containing the byte representation of the underlying `AccountHash`.
-   `Hash` serializes as a 32 byte long buffer containing the byte representation of the underlying `Hash` itself.
-   `URef` is a tuple that contains the address of the URef and the access rights to that `URef`. The serialized representation of the `URef` is 33 bytes long. The first 32 bytes are the byte representation of the `URef` address, and the last byte contains the bits corresponding to the access rights of the `URef`. Refer to the [CLValue](./primitives.md#clvalue-clvalue) section of this chapter for details on how `AccessRights` are serialized.
-   `Transfer` serializes as a 32 byte long buffer containing the byte representation of the hash of the transfer.
-   `DeployInfo` serializes as 32 byte long buffer containing the byte representation of the Deploy hash. See the Deploy section above for how Deploy hashes are serialized.
-   `EraInfo` serializes a `u64` primitive type containing the little-endian byte representation of `u64`.
-   `Balance` serializes as 32 byte long buffer containing the byte representation of the URef address.
-   `Bid` and `Withdraw` both contain the `AccountHash` as their identifier; therefore, they serialize in the same manner as the `Account` variant.
-   `Dictionary` serializes as the 32 byte long buffer containing the byte representation of the seed URef hashed with the identifying name of the dictionary item.
-   `SystemContractRegistry` serializes as a 32 byte long buffer of zeros.
-   `EraSummary` serializes as a 32 byte long buffer of zeros.
-   `Unbond` contains the `AccountHash` as its identifier; therefore, it serialize in the same manner as the `Account` variant.
-   `ChainspecRegistry` serializes as a 32 byte long buffer of ones.
-   `ChecksumRegistry` serializes as a 32 byte long buffer of zeros.
-   `BidAddr` may be one of three types:
    -   `Unified` serializes as the tag `0` followed by a 32 byte long buffer containing the byte representation of a legacy bid.
    -   `Validator` serializes as the tag `1` followed by a 32 byte long buffer containing the byte representation of a validator's hash.
    -   `Delegator` serializes as the tag `2` followed by a 32 byte long buffer containing the byte representation of the associated validator's hash, appended with a 32 byte long buffer containing the byte representation of the given delegator's hash.

### Permissions {#serialization-standard-permissions}

There are three types of actions that can be done on a value: read, write, add. The reason for _add_ to be called out separately from _write_ is to allow for commutativity checking. The available actions depend on the key type and the context. Some key types only allow controlled access by smart contracts via the contract API, and other key types refer to values produced and used by the system itself and are not accessible to smart contracts at all but can be read via off-chain queries. This is summarized in the table below:

| Key      | Type Available Actions  |
| -------- | ----------------------- |
| Account  | Read + Add (via API)    |
| Hash     | Read                    |
| URef     | Read + Write and/or Add |
| Transfer | System                  |
| Deploy   | System                  |
| EraInfo  | System                  |
| Balance  | Read (via API)          |
| Bid      | System                  |
| Withdraw | System                  |
| Dictionary | Read (via API)        |
| SystemContractRegistry | Read (via API)|
| Unbond   | System                  |
| ChainspecRegistry | Read (via API) |

---

Refer to [URef permissions](../design/casper-design.md#uref-permissions) on how permissions are handled in the case of `URef`s.

## MessageTopics {#message-topics}

A topic for contract-level messages. It is serialized as a `BTreeMap` where the first 4 bytes represent a `u32` value describing the number of `topic_name` strings and [`topic_name_hash`](#topicnamehash) held within. The remainder consists of a repeating pattern of serialized `topic_name` and `topic_name_hash` of the length dictated by the first four bytes.

## MessageTopicSummary {#message-topic-summary}

A summary of a message topic that will be stored in global state. It serializes as a [`u32`](./primitives.md#numeric-clvalue-numeric) value for the `message_count` followed by the [`BlockTime`](#blocktime-blocktime)

## Motes (#motes)

A `struct` representing a number of `Motes` serialized as a [`U512`](./primitives.md#clvalue-numeric) value.

## NamedArg {#namedarg}

Named arguments to a contract. It is serialized by the combination of a [`String`](./primitives.md#clvalue-string) followed by the associated [`CLValue`](./primitives.md#clvalue-clvalue).

## NamedKey {#namedkey}

A mapping of string identifiers to a Casper `Key` type. It is serialized as a `BTreeMap` where the first 4 bytes represent a `u32` value describing the number of named keys and values held within. The remainder consists of a repeating pattern of serialized named keys and then values of the length dictated by the first four bytes.

-   `name`: The name of the entry. It serializes as a [`string`](./primitives.md#clvalue-string).

-   `key`: The value of the entry, which is a Casper `Key` type.

The named keys portion of the account structure serializes as a mapping of a string to Casper `Key` values as described [here](#serialization-standard-serialization-key).

## NamedKeyAddr {#named-key-addr}

A NamedKey address, serialized as an [`EntityAddr`](#entity-addr) followed by a [`u8`](./primitives.md#clvalue-numeric) describing the length of a string and the 32-byte representation of the string itself.

## NamedKeyValue {#named-key-value}

A NamedKey value, serialized as the `named_key` serialized as a [`CLValue`](./primitives.md#clvalue-clvalue) followed by the `name` of the key also serialized as a [`CLValue`](./primitives.md#clvalue-clvalue).

## NamedKeys {#named-keys}

A collection of named keys. It is serialized as a `BTreeMap` where the first 4 bytes represent a `u32` value describing the number of [`names`](./primitives.md#clvalue-string) and [`keys`](./primitives.md#clvalue-key) held within. The remainder consists of a repeating pattern of names and keys of the length dictated by the first four bytes.

## Operation {#operation}

An operation performed while executing a deploy. It contains:

-   `key`: The formatted string of the key, serialized as a [`String`](./primitives.md#clvalue-string).

-   `kind`: OpKind, The type of operation performed. It serializes as a single byte based on the following table:

|OpKind|Serialization|
|------|-------------|
|Read  | 0           |
|Write | 1           |
|Add   | 2           |
|NoOp  | 3           |

## Package {#package}

A structure defining an entity, metadata and security container. The structure consists of the following fields:

- [`access_key`](./primitives.md#uref-clvalue-uref)

- `versions`: An array of entity versions associated with given hashes.

- [`disabled_versions`](#entityversionkey-entityversionkey)

- [`groups`](#group-group)

- [`lock_status`](./structures.md#contractpackagestatus)

## PackageHash {#package-hash}

The hex-encoded address of a package associated with an [`AddressableEntity`](./structures.md#addressableentity-addressable-entity), serialized as the byte representation of itself.

## PackageStatus {#package-status}

The lock status of the package, serialized as a [`boolean`](./primitives.md#boolean-clvalue-boolean) where `true` indicates a locked package and `false` indicates an unlocked package.

## Parameter {#parameter}

Parameter to a method, structured as a name followed by a `CLType`. It is serialized as a [`String`](./primitives.md#clvalue-string) followed by a [`CLType`](./primitives.md#clvalue-cltype).

## PricingMode (#pricingmode)

The pricing mode of a transaction, with two possible variants. It serializes as a `u8` tag followed by additional data based on the following table:

| Tag | PricingMode| Description |
| --- | ---------- | ----------- |
| 0 | Classic | The original payment model, in which the creator of a transaction specifies how much they will pay and at which gas price. |
| 1 | Fixed | The cost of the transaction is determined by the cost table, per the transaction kind. |

### Classic {#pricingmode-classic}

After the `0` tag, a `Classic` `PricingMode` serializes as the [`u64`](./primitives.md#numeric-clvalue-numeric) `payment_amount` followed by the `u64` value of the `gas_price`.

### Fixed {#pricingmode-fixed}

After the `1` tag, a `Fixed` `PricingMode` serializes as the [`u64`](./primitives.md#numeric-clvalue-numeric) `gas_price_tolerance`.

## ProtocolVersion {#protocolversion}

A newtype indicating the Casper Platform protocol version. It is serialized as three [`u32`](./primitives.md#clvalue-numeric) values indicating major, minor and patch versions in that order.

## PublicKey {#publickey}

Hex-encoded cryptographic public key, including the algorithm tag prefix. Serialization can be found under [`PublicKey`](./primitives.md#clvalue-publickey).

## RewardedSignatures {#rewarded-signatures}

A list of identifiers for finality signatures for a particular past block. It serializes as a vector of `SingleBlockRewardedSignatures` which describes signatures for a single ancestor block. The first entry represents the signatures for the parent block, the second for the parent of the parent, and so on.

## RuntimeArgs {#runtimeargs}

Represents a collection of arguments passed to a smart contract. They serialize as a [`List`](./primitives.md#clvalue-list) comprised of [`Tuples`](./primitives.md#clvalue-tuple).

## SeigniorageAllocation {#seigniorageallocation}

Information about seigniorage allocation.

If the seigniorage allocation in question is for a validator, it serializes as the validator's [`PublicKey`](./primitives.md#clvalue-publickey) followed by the [`U512` amount](./primitives.md#clvalue-numeric).

If it is a delegator, it serializes as the delegator's [`PublicKey`](./primitives.md#clvalue-publickey), followed by the validator's [`PublicKey`](./primitives.md#clvalue-publickey) and finally the [`U512` amount](./primitives.md#clvalue-numeric).

## SemVer {#semver}

A `struct` for semantic versioning, it serializes as three [`u32`](./primitives.md#clvalue-numeric) that describe the major version, minor version and patch version.

## Signature {#signature}

The signature serializes the byte representation of the underlying cryptographic primitive signature. The first byte within the signature is 1 in the case of an `Ed25519` signature or 2 in the case of `Secp256k1`.

## Stored Values {#serialization-standard-values}

A value stored in the global state is a `StoredValue`. A `StoredValue` is one of three possible variants:

-   A `CLValue`
-   A contract
-   An account

We discuss `CLValue` and contract in more detail below. Details about accounts can be found in [accounts-head](../design/casper-design.md#accounts-head).

Each `StoredValue` is serialized when written to the global state. The serialization format consists of a single byte tag, indicating which variant of `StoredValue` it is, followed by the serialization of that variant. The tag for each variant is as follows:

-   `CLValue` is `0`
-   `Account` is `1`
-   `Contract` is `2`

The details of `CLType` serialization are in the following section. Using the serialization format for `CLValue` as a basis, we can succinctly write the serialization rules for contracts and accounts:

-   contracts serialize in the same way as data with `CLType` equal to `Tuple3(List(U8), Map(String, Key), Tuple3(U32, U32, U32))`;
-   accounts serialize in the same way as data with `CLType` equal to `Tuple5(ByteArray(U8, 32), Map(String, Key), URef, Map(ByteArray(U8, 32), U8), Tuple2(U8, U8))`.

Note: `Tuple5` is not a presently supported `CLType`. However, it is clear how to generalize the rules for `Tuple1`, `Tuple2`, `Tuple3` to any size tuple.

## SystemContractRegistry {#systemcontractregistry}

SystemContractRegistry is a unique `Key` under which a mapping of the names and `ContractHashes` for system contracts. This includes `Mint`, `Auction`, `HandlePayment` and `StandardPayment`. It is serialized as a `BTreeMap` where the first 4 bytes represent a `u32` value describing the number of names as strings and [ContractHashes](./structures.md#contracthash) held within. The remainder consists of a repeating pattern of serialized strings and then ContractHashes of the length dictated by the first four bytes.

## SystemEntityType {#system-entity-type}

Entity types for system contracts, serialized as a single `u8` tag identifying the contract as per the following table:

| Tag | System Contract |
| --- | --------------- |
| 0 | `Mint` |
| 1 | `Auction` |
| 2 | `StandardPayment` |
| 3 | `HandlePayment` |

## TimeDiff {#timediff}

A human-readable duration between two timestamps. It serializes as a single [`u64`](./primitives.md#clvalue-numeric) value.

## Timestamp {#timestamp}

A timestamp formatted as per RFC 3339 and serialized as a single [`u64`](./primitives.md#clvalue-numeric) value.

## TopicNameHash {#topic-name-hash}

A `blake2b` hash of a topic name. The topic name hash serializes as a 32-byte buffer containing the bytes of the topic name hash.

## TransferAddr {#transferaddr}

Hex-encoded transfer address, which serializes as a byte representation of itself.

## TransformKindV1 {#transform}

The actual transformation performed while executing a deploy. It serializes as a single `u8` value indicating the type of transform performed as per the following table. The remaining bytes represent the information and serialization as listed.

| Transform Type       | Serialization | Description                                                                  |
|----------------------|---------------|------------------------------------------------------------------------------|
|Identity              | 0             | A transform having no effect.                                                |
|Write_CLValue         | 1             | Writes the given [`CLValue`](./primitives.md#clvalue-calvalue) to global state.             |
|Write_Account         | 2             | Writes the given [`Account`](#account-hash) to global state.                  |
|Write_Contract_WASM   | 3             | Writes a smart [contract as Wasm](./structures.md#contractwasmhash) to global state.        |
|Write_Contract        | 4             | Writes a smart [contract](./structures.md#contracthash) to global state.                    | 
|Write_Contract_Package| 5             | Writes a smart [contract package](./structures.md#contractpackagehash) to global state.     |
|Write_Deploy_Info     | 6             | Writes the given [`DeployInfo`](./structures.md#deployinfo) to global state.                |
|Write_Transfer        | 7             | Writes the given [Transfer](#transferaddr) to global state.                  |
|Write_Era_Info        | 8             | Writes the given [`EraInfo`](#erainfo) to global state.                      |
|Write_Bid             | 9             | Writes the given [`Bid`](#bid) to global state.                              |
|Write_Withdraw        | 10            | Writes the given [Withdraw](#unbondingpurse) to global state.                |
|Add_INT32             | 11            | Adds the given [`i32`](./primitives.md#clvalue-numeric).                                    |
|Add_UINT64            | 12            | Adds the given [`u64`](./primitives.md#clvalue-numeric).                                    |
|Add_UINT128           | 13            | Adds the given [`U128`](./primitives.md#clvalue-numeric).                                   |
|Add_UINT256           | 14            | Adds the given [`U256`](./primitives.md#clvalue-numeric).                                   |
|Add_UINT512           | 15            | Adds the given [`U512`](./primitives.md#clvalue-numeric).                                   |
|Add_Keys              | 16            | Adds the given collection of [named keys](#namedkey).                        |
|Failure               | 17            | A failed transformation, containing an error message.                        |

## TransformKindV2 {#transformV2}

The actual transformation performed while executing a deploy. It serializes as a single `u8` value indicating the type of transform performed as per the following table. The remaining bytes represent the information and serialization as listed.

| Transform Type | Serialization | Description |
| -------------- | ------------- | ----------- |
| Identity       | 0             | A transform having no effect, created as a result of reading from the global state. |
| Write          | 1             | Writes a new value in the global state. |
| AddInt32       | 2             | Adds the given [`i32`](./primitives.md#clvalue-numeric). |
| AddUInt64      | 3             | Adds the given [`u64`](./primitives.md#clvalue-numeric). |
| AddUInt128     | 4             | Adds the given [`U128`](./primitives.md#clvalue-numeric). |
| AddUInt256     | 5             | Adds the given [`U256`](./primitives.md#clvalue-numeric). |
| AddUInt512     | 6             | Adds the given [`U512`](./primitives.md#clvalue-numeric). |
| AddKeys        | 7             | Adds the given collection of [named keys](#namedkey). |
| Failure        | 8             | A failed transformation, containing an error message. |
| Prune          | 9             | Removes the pathing to the global state entry of the specified key. The pruned element remains reachable from previously generated global state root hashes, but will not be included in the next generated global state root hash and subsequent states. |

## TransformEntry {#transformentry}

A transformation performed while executing a deploy.

## TransformV1 {#transformv1}

A legacy transform struct serialized as a [`String`](./primitives.md#string-clvalue-string) of the [key](./primitives.md#key-clvalue-key) followed by the [`transformkindv1`](#transformkindv1).

## Transformv2 {#transformv2}

A struct representing an executed transformation serialized as a [`String`](./primitives.md#string-clvalue-string) of the [key](./primitives.md#key-clvalue-key) followed by the [`transformkindv2`](#transformkindv2).

## UnbondingPurse {#unbondingpurse}

A purse used for unbonding. The structure consists of the following:

-   `bonding_purse`: The bonding purse, serialized as a [`URef`](./primitives.md#clvalue-uref).

-   `validator_public_key`: The public key of the validator, serialized as a [`PublicKey`](./primitives.md#clvalue-publickey).

-   `unbonder_public_key`: The public key of the unbonder, serialized as a [`PublicKey`](./primitives.md#clvalue-publickey).

-   `era_of_creation`: Era in which this unbonding request was created, as an [`EraId`](#eraid) newtype, which serializes as a [`u64`](./primitives.md#clvalue-numeric) value.

-   `amount`: The unbonding amount, serialized as a [`U512`](#clvalue-numeric) value.

-   `new_validator`: The validator public key to redelegate to, serialized as an [`Option`](./primitives.md#clvalue-option) containing the public key.

## ValidatorBid {#validatorbid}

An entry in the validator map. The structure consists of the following fields:

-   `validator_public_key`: The public key of the validator that the delegator will be delegating to, serialized as a [`PublicKey`](./primitives.md#clvalue-publickey).

-   `bonding_purse`: The bonding purse associated with the delegation. It serializes as a [`URef` value](./primitives.md#clvalue-uref).

-   `staked_amount`: The amount staked by the delegator, serialized as a [`U512` value](./primitives.md#clvalue-numeric).

-   `delegation_rate`: The delegation rate serialized as a [`u8` value](./primitives.md#numeric-clvalue-numeric).

-   `vesting_schedule`: The vesting schedule for the provided delegator bid. `None` if it is a non-genesis validator. It serializes as an [`Option`](./primitives.md#clvalue-option).

-   `inactive`: The validator's inactivity status, serialized as a [`boolean`](./primitives.md#boolean-clvalue-boolean).

## ValidatorChange {#validator-change}

A change to a validator's status between two eras, serialized as a [`u8`](./primitives.md#clvalue-numeric) tag as follows:

| Tag | Change |
| --- | ----------- |
| 0 | Added |
| 1 | Removed |
| 2 | Banned |
| 3 | Cannot Propose |
| 4 | Seen as Faulty |

## ValidatorConfig {#validator-config}

A validator account configuration, serialized as a [`bonded_amount`](#motes) followed by the `delegation_rate` as a [`u8`](./primitives.md#clvalue-numeric).

## ValidatorCredit {#validator-credit}

A `struct` representing the record of a validator credit, with fields as follows:

-   [`validator_public_key`](./primitives.md#clvalue-publickey): The validator's public key.

-   [`era_id`](#eraid): The era ID the credit was created.

-   `amount`: The credit amount as a [`U512`](./primitives.md#clvalue-numeric).

## WithdrawPurse {#withdrawpurse}

A purse used for unbonding, replaced in 1.5 by [UnbondingPurse](#unbondingpurse). WithdrawPurses prior to 1.5 were known as UnbondingPurses and now consist of historical data.

-   `bonding_purse`: The bonding purse, serialized as a [`URef`](./primitives.md#clvalue-uref).

-   `validator_public_key`: The public key of the validator, serialized as a [`PublicKey`](./primitives.md#clvalue-publickey).

-   `unbonder_public_key`: The public key of the unbonder, serialized as a [`PublicKey`](./primitives.md#clvalue-publickey).

-   `era_of_creation` Era in which this unbonding request was created, as an [`EraId`](#eraid) newtype, which serializes as a [`u64`](./primitives.md#clvalue-numeric) value.

-   `amount` The unbonding amount, serialized as a [`U512`](./primitives.md#clvalue-numeric) value.

