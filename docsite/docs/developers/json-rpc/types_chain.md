# Types

The following definitions expand on parameters seen elsewhere within the SDK standard and are provided for clarity and completeness.

## Account

Structure representing a user's Account, stored in global state.

Required Parameters:

* [`account_hash`](#accounthash)

* [`action_thresholds`](#accountactionthresholds)

* [`associated_keys`](#associatedkey)

* [`main_purse`](#uref)

* [`named_keys`](#namedkey)

## AccountActionThresholds

Thresholds that have to be met when executing an action of a certain type.

Required Parameters:

* [`deployment`](#accountassociatedkeyweight) Threshold for deploy execution.

* [`key_management`](#accountassociatedkeyweight) Threshold for managing account keys.

## AccountAssociatedKeys

A [collection of weighted public keys](#array_of_associatedkey) (represented as account hashes) associated with an account.

## AccountAssociatedKeyWeight

The weight associated with public keys in an account's associated keys.

## AccountHash

The AccountHash is a 32-byte hash derived from a supported PublicKey. Its role is to standardize keys that can vary in length.

## AccountIdentifier

Identifier of an account.

Contains one of:

* [`PublicKey`](#publickey)

* [`AccountHash`](#accounthash)

## ActivationPoint

The first era to which the associated protocol version applies.

Any of:

* [`era_id`](#eraid) Era ID.

* [`timestamp`](#timestamp) Genesis timestamp.

## AddressableEntity

* [`action_thresholds`](#entityactionthresholds)

* [`associated_keys`](#entityassociatedkeys)

* [`byte_code_hash`](#bytecodehash)

* [`entity_kind`](#entitykind)

* [`main_purse`](#uref)

* [`message_topics`](#array_of_messagetopic)

* [`package_hash`](#packagehash)

* [`protocol_version`](#protocolversion)

## AddressableEntityHash

The hex-encoded address of the addressable entity.

## Approval

A struct containing a signature and the public key of the signer.

Required Parameters:

* [`signature`](#signature)

* [`signer`](#publickey)

## Array_of_AssociatedKey

An array of [AssociatedKeys](#associatedkey).

## Array_of_BlockProof

An array of [`BlockProofs`](#blockproof).

## Array_of_EntityVersionAndHash

An array of [EntityVersionAndHashes](#entityversionandhash).

## Array_of_EraReward

An array of [EraRewards](#erareward).

## Array_of_MessageTopic

An array of [MessageTopics](#messagetopic).

## Array_of_NamedEntryPoint

An array of [named entry points](#namedentrypoint).

## Array_of_NamedUserGroup

An array of [NamedUserGroups](#namedusergroup).

## Array_of_PublicKeyAndBid

An array of [bids associated with given public keys](#publickeyandbid).

## Array_of_PublicKeyAndDelegator

An array consisting of [PublicKeyAndDelegators](#publickeyanddelegator).

## Array_of_ValidatorWeight

An array of [`ValidatorWeights`](#validatorweight).

## AssociatedKey

A key granted limited permissions to an Account, for purposes such as multisig.

Required Parameters:

* [`account_hash`](#accounthash)

* [`weight`](#weight)

## AuctionState

Data structure summarizing auction contract data.

Required Parameters:

* [`bids`](#array_of_publickeyandbid) All bids contained within a vector.

* `block_height` Block height.

* [`era_validators`](#jsoneravalidators) Era validators.

* [`state_root_hash`](#digest) Global state hash.

## AvailableBlockRange

An unbroken, inclusive range of blocks.

Required Parameters:

* `low` The inclusive lower bound of the range.

* `high` The inclusive upper bound of the range.

## BalanceHoldWithProof

Hold amount at a given block time.

Required Parameters:

* [`amount`](#u512) The amount in the hold.

* `proof` A string proof that the given value is present in the Merkle trie.

* [`time`](#blocktime) The block time at which the hold was created.

## Bid

An entry in the validator map.

Required Parameters:

* [`bonding_purse`](#uref) The purse that was used for bonding.

* `delegation_rate` The delegation rate.

* [`delegators`](#delegator) The validator's delegators, indexed by their public keys.

* `inactive` `true` if validator has been "evicted".

* [`staked_amount`](#u512) The amount of tokens staked by a validator (not including delegators).

* [`validator_public_key`](#publickey) Validator's public key.

Optional Parameters:

* [`vesting_schedule`](#vestingschedule) Vesting schedule for a genesis validator. `None` if non-genesis validator.

## BidKind

Auction bid variants.

One of:

* `Unified` A unified record indexed on validator data, with an embedded collection of all delegator bids assigned to that validator. The `Unified`` variant is for legacy retrograde support; new instances will not be created going forward.

* `Validator` A bid record containing only validator data.

* `Delegator` A bid record containing only delegator data.

* `Bridge` A bridge record pointing to a new `ValidatorBid` after the public key was changed.

* `Credit` Credited amount.

## Block

A block after execution.

One of:

* [`Version1`](#blockv1)

* [`Version2`](#blockv2)

## BlockBodyV1

The body portion of a block prior to Casper 2.0.

Required Parameters:

* [`deploy_hashes`](#deployhash) The deploy hashes of the non-transfer deploys within the block.

* [`proposer`](#publickey) The public key of the validator that proposed the block.

* [`transfer_hashes`](#deployhash) The deploy hashes of the transfers within the block.

## BlockBodyV2

The body portion of a block.

Required Parameters:

* [`rewarded_signatures`](#rewardedsignatures) List of identifiers for finality signatures for a particular past block.

* [`transactions`](#transactionhash) Map of transactions mapping categories to a list of transaction hashes.


## BlockHash

A cryptographic hash identifying a `Block`.

## BlockHeader

The versioned header portion of a block. It encapsulates different variants of the `BlockHeader` struct.

One of:

* [`Version1`](#blockheaderv1) The legacy, initial version of the header portion of a block.

* [`Version2`](#blockheaderv2) The version 2 of the header portion of a block.

## BlockHeaderV1

The header portion of a block prior to Casper 2.0.

Required Parameters:

* [`accumulated_seed`](#digest)

* [`body_hash`](#digest)

* [`era_id`](#eraid)

* `height` The height of this block.

* [`parent_hash`](#blockhash)

* [`protocol_version`](#protocolversion)

* `random_bit` A random bit needed for initializing a future era.

* [`state_root_hash`](#digest)

* [`timestamp`](#timestamp)

Optional Parameters:

* [`era_end`](#eraendv1)

## BlockHeaderV2

The header portion of a block.

Required Parameters:

* [`accumulated_seed`](#digest) A seed needed for initializing a future era.

* [`body_hash`](#digest) The hash of the block's body.

* `current_gas_price` The gas price of the era.

* [`era_id`](#eraid)

* `height` The height of this block.

* [`parent_hash`](#blockhash) The parent block's hash.

* [`proposer`](#publickey) The public key of the validator which proposed the block.

* [`protocol_version`](#protocolversion) The protocol version of the network from when this block was created.

* `random_bit` A random bit needed for initializing a future era.

* [`state_root_hash`](#digest) The root hash of global state after the deploys in this block have been executed.

* [`timestamp`](#timestamp) The timestamp from when the block was proposed.

Optional Parameters:

* [`era_end`](#eraendv2) The `EraEnd` of a block if it is a switch block.

* [`last_switch_block_hash`](#blockhash) The most recent switch block hash.

## BlockIdentifier

Identifier for possible ways to retrieve a Block.

* [`Hash`](#blockhash) Identify and retrieve the Block with its hash.

* `Height` Identify and retrieve the Block with its height.

## BlockProof

A validator's public key paired with a corresponding signature of a given block hash.

Required Parameters:

* [`public_key`](#publickey)

* [`signature`](#signature)

## BlockSynchronizerStatus

The status of the block synchronizer.

Optional Parameters:

* [`Historical`](#blocksyncstatus) The status of syncing a historical block, if any.

* [`Forward`](#blocksyncstatus) The status of syncing a forward block, if any.

## BlockSyncStatus

The status of syncing an individual block.

Required Parameters:

* `acquisition_state` The state of acquisition of the data associated with the block as a string.

* [`block_hash`](#blockhash) The block hash.

Optional Parameters:

* `block_height` The height of the block, if known.

## BlockTime

A newtype wrapping a `u64`, which represents the block time.

## BlockV1

A block after execution with the resulting global state root hash prior to Casper 2.0. This is the core component of the Casper linear blockchain.

Required Parameters:

* [`body`](#blockbodyv1) The body portion of the block.

* [`hash`](#blockhash) The block hash identifying this block.

* [`header`](#blockheaderv1) The header portion of the block.

## BlockV2

A block after execution, with the resulting global state root hash. This is the core component of the Casper linear blockchain.

Required Parameters:

* [`body`](#blockbodyv2) The body portion of the block.

* [`hash`](#blockhash) The block hash identifying this block.

* [`header`](#blockheaderv2) The header portion of the block.

## Bridge

A bridge record pointing to a new `ValidatorBid` after the public key was changed.

Required Parameters:

* [`era_id`](#eraid) Era when bridge record was created.

* [`old_validator_public_key`](#publickey) Previous validator public key associated with the bid.

* [`new_validator_public_key`](#publickey) New validator public key associated with the bid.

## Bytes

Hex-encoded bytes.

## ByteCode

A container for a contract's Wasm bytes.

Required Parameters:

* [`bytes`](#bytes)

* [`kind`](#bytecodekind)

## ByteCodeHash

The hex-encoded address of a smart contract [`AddressableEntity`](#addressableentity).

## ByteCodeKind

The type of byte code.

One of:

* `Empty` Empty byte code.

* `V1CasperWasm` Byte code to be executed with the version 1 Casper execution engine.

## BytesreprError

Serialization and deserialization errors.

* `EarlyEndOfStream` Early end of stream while deserializing.

* `Formatting` Formatting error while deserializing.

* `LeftOverBytes` Not all input bytes were consumed.

* `OutOfMemory` Out of memory error.

* `NotRepresentable` No serialized representation is available for a value.

* `ExceededRecursionDepth` Exceeded a recursion depth limit.

## ChainspecRawBytes

The raw bytes of the chainspec.toml, genesis accounts.toml, and global_state.toml files.

Required Parameters:

* [`chainspec_bytes`](#bytes) Hex-encoded raw bytes of the current chainspec.toml file.

Optional Parameters:

* [`maybe_genesis_accounts_bytes`](#bytes) Hex-encoded raw bytes of the current genesis accounts.toml file.

* [`maybe_global_state_bytes`](#bytes) Hex-encoded raw bytes of the current global_state.toml file.

## Contract

A contract struct that can be serialized as a JSON object.

Required Parameters:

* [`contract_package_hash`](#contractpackagehash)

* [`contract_wasm_hash`](#contractwasmhash)

* [`entry_points`](#entrypoint)

* [`named_keys`](#namedkey)

* [`protocol_version`](#protocolversion)

## ContractHash

The hash address of the contract.

## ContractPackage

Contract definition, metadata and security container.

Required Parameters:

* [`access_key`](#uref)

* [`disabled_versions`](#contractversionkey)

* [`groups`](#array_of_namedusergroup)

* [`versions`](#contracthash)

* [`lock_status`](#contractpackagestatus)

## ContractPackageHash

The hash address of the contract package.

## ContractPackageStatus

An enum to determine the lock status of the contract package.

One of:

* `Locked` The package is locked and cannot be versioned.

* `Unlocked` The package is unlocked and can be versioned.

## ContractVersion

The version of the contract.

Required Parameters:

* [`contract_hash`](#contracthash)

* `contract_version`

* `protocol_version_major`

## ContractVersionKey

Major element of `ProtocolVersion` combined with `ContractVersion`.

## ContractWasm

A container for a contract's Wasm bytes.

Required Parameter:

* [`bytes`](#bytes)

## ContractWasmHash

The hash address of the contract Wasm.

## Delegator

Represents a party delegating their stake to a validator (or "delegatee").

Required Parameters:

* [`bonding_purse`](#uref)

* [`delegator_public_key`](#publickey)

* [`staked_amount`](#u512)

* [`validator_public_key`](#publickey)

Additional Parameters:

* [`vesting_schedule`](#vestingschedule)

## Deploy

A Deploy; an item containing a smart contract along with the requester's signature(s).

Required properties:

* [`approvals`](#approval)

* [`hash`](#deployhash)

* [`header`](#deployheader)

* [`payment`](#executabledeployitem)

* [`session`](#executabledeployitem)

## DeployHash

Hex-encoded Deploy hash.

## DeployHeader

The header portion of a Deploy.

Required Parameters:

* [`account`](#publickey)

* [`body_hash`](#digest)

* `chain_name` A user defined string.

* [`dependencies`](#deployhash)

* `gas_price` Defined as an integer in UInt64 format.

* [`timestamp`](#timestamp)

* [`ttl`](#timediff)

## DeployInfo

Information relating to the given Deploy.

Required Parameters:

* [`deploy_hash`](#deployhash) The relevant Deploy.

* [`from`](#accounthash) Account identifier of the creator of the Deploy.

* [`gas`](#u512) Gas cost of executing the Deploy.

* [`source`](#uref) Source purse used for payment of the Deploy.

* [`transfers`](#transferaddr) Transfers performed by the Deploy.

## DictionaryIdentifier

Options for dictionary item lookups.

* `AccountNamedKey` Lookup a dictionary item via an Account's named keys.

    Required Parameters:

    * `key` The Account key as a formatted string whose named keys contain dictionary_name.

    * `dictionary_name` The named key under which the dictionary seed URef is stored.

    * `dictionary_item_key` The dictionary item key formatted as a string.

* `ContractNamedKey` Lookup a dictionary item via a Contract's named keys.

    Required Parameters:

    * `key` The contract key as a formatted string whose named keys contains dictionary_name.

    * `dictionary_name` The named key under which the dictionary seed URef is stored.

    * `dictionary_item_key` The dictionary item key formatted as a string.

* `EntityNamedKey`

    Required Parameters:

    * `key` The entity address formatted as a string.

    * `dictionary_name` The named key under which the dictionary seed URef is stored.

    * `dictionary_item_key` The dictionary item key formatted as a string.

* `URef` Lookup a dictionary item via its seed URef.

    Required Parameters:

    * `seed_uref` The dictionary's seed URef.

    * `dictionary_item_key` The dictionary item key formatted as a string.

* `Dictionary` Lookup a dictionary item via its unique key.

## Digest

Hex-encoded hash digest.

## Effects

A log of all [transforms](#transformv2) produced during execution.

## EntityActionThresholds

Thresholds that have to be met when executing an action of a certain type. 

Required Parameters:

* [`deployment`](#entityassociatedkeyweight) Threshold for deploy execution.

* [`key_management`](#entityassociatedkeyweight) Threshold for managing account keys.

* [`upgrade_management`](#entityassociatedkeyweight) Threshold for upgrading contracts.

## EntityAddr

The address for an AddressableEntity which contains the 32 bytes and tagging information.

Any of:

* The address for a system entity account or contract.

* The address of an entity that corresponds to an Account.

* The address of an entity that corresponds to a user (non-system) smart contract.

## EntityAssociatedKeys

A collection of weighted public keys (represented as account hashes) associated with an account. See [Array_of_AssociatedKey](#array_of_associatedkey).

## EntityAssociatedKeyWeight

The weight associated with public keys in an entity's associated keys.

## EntityIdentifier

Identifier of an addressable entity.

One of:

* [`PublicKey`](#publickey)

* [`AccountHash`](#accounthash)

* [`EntityAddr`](#entityaddr)

## EntityKind

The type of [`Package`](#package).

One of:

* [`System`](#systementitytype) Package associated with a native contract implementation.

* [`Account`](#accounthash) Package associated with an Account hash.

* [`SmartContract`](#transactionruntime) Packages associated with Wasm stored on chain.

## EntityOrAccount

An addressable entity or a legacy account.

One of:

* [`AddressableEntity`](#addressableentity) An addressable entity.

* [`Account`](#account) A legacy account.

## EntityVersionAndHash

An entity version associated with the given hash.

Required Parameters:

* [`addressable_entity_hash`](#addressableentityhash)

* [`entity_version_key`](#entityversionkey)

## EntityVersionKey

Major element of `ProtocolVersion` combined with `EntityVersion`.

Required Parameters:

* `entity_version` Automatically incremented value for a contract version within a major `ProtocolVersion`.

* `protocol_version_major` Major element of `ProtocolVersion` with which a `ContractVersion` is compatible.

## EntryPoint

Metadata describing a callable entry point and its return value, if any. All required parameters should be declared, whereas all non-required parameters should not be declared. Non-required parameters should not be confused with optional parameters.

Required Parameters:

* [`access`](#entrypointaccess)

* [`args`](#parameter)

* [`entry_point_type`](#entrypointtype)

* `name`

* [`ret`](../../concepts/serialization/primitives.md#clvalue-cltype)

## EntryPoint2

Type signature of a method. Order of arguments matters since they can be referenced by index as well as their name.

Required Parameters:

* [`access`](#entrypointaccess)

* [`args`](#parameter)

* [`entry_point_payment`](#entrypointpayment)

* [`entry_point_type`](#entrypointtype)

* `name` The string name of the entrypoint.

* [`ret`](../../concepts/serialization/primitives.md#clvalue-cltype)

## EntryPointAccess

Enum describing the possible access control options for a contract entry point.

One of:

* `Public` A public entry point is callable by any caller.

* [`Groups`](#group) Only callers from the authorized, listed groups may call this entry point. Note: If this list is empty then this entry point is not callable from outside the contract.

* `Template` A string type that can't be accessed directly but is kept in the derived Wasm bytes.

## EntryPointPayment

An enum specifying who pays for the invocation and execution of the entrypoint.

One of:

* `Caller` The caller must cover the cost.

* `SelfOnly` The current execution will cover the cost to execute self but not the cost of any subsequently invoked contracts.

* `SelfOnward` The current execution will cover the cost to execute self and the cost of any subsequently invoked contracts.

## EntryPointType

Context of an entry point execution. The most significant bit represents the version. For example, `0b0` represents session and contract entry points up to version 2.0. And, `0b1` is for versions 2.x and later (i.e. installer and utility entry points).

One of:

* `Caller` Runs using the calling entity's context. In v1.x, this was used for both session code that ran using the originating account's context and stored session code that ran in the caller's context. In v2.x, the renamed Caller variant is exclusively used for Wasm running using the initiating account entity's context. Previously installed 1.x stored session code should continue to work as the binary value matches, but we no longer allow such logic to be upgraded, nor do we allow new stored session code to be installed.

* `Called` Runs within the called entity's context.

* `Factory` This entry point is intended to extract a subset of bytecode. Runs within the called entity's context.

## EntryPointValue

The encaspulated representation of entrypoints.

One of:

* [`V1CasperVm`](#entrypoint2) Entrypoints to be executed against the V1 Casper VM.

* [`V2CasperVm`](#entrypointv2) Entrypoints to be executed against the V2 Casper VM.

## EntryPointV2

The entry point for the V2 Casper VM.

Required Parameters:

* `flags` The flags as a uint32 integer.

* `function_index` The selector as a uint32 integer.

## EraEndV1

Information related to the end of an era and validator weights for the following era prior to Casper 2.0.

Required Parameters:

* [`era_report`](#erareport_for_publickey)

* [`next_era_validator_weights`](#array_of_validatorweight)

## EraEndV2

Information related to the end of an era and validator weights for the following era.

Required Parameters:

* [`equivocators`](#publickey) The set of equivocators.

* [`inactive_validators`](#publickey) Validators that haven't produced any units during the era.

* `next_era_gas_price` The gas price for the next era as a `uint8` integer. Minimum 0.0 motes.

* [`next_era_validator_weights`](#array_of_validatorweight) The validators for the upcoming era and their respective weights.

* [`rewards`](#u512) The rewards distributed to the validators.

## EraID

Era ID newtype.

## EraIdentifier

Identifier for an era.

One of:

* [`Era`](#eraid) 

* [`Block`](#blockidentifier)

## EraInfo

Auction metadata. Intended to be recorded at each era.

Required Parameters:

* [`seigniorage_allocation`](#seigniorageallocation) Information about a seigniorage allocation.

## EraReport_for_PublicKey

Equivocation, reward and validator inactivity information.

Required Parameters:

* [`equivocators`](#publickey) The set of equivocators.

* [`rewards`](#array_of_erareward) Rewards for finalization of earlier blocks.

* [`inactive_validators`](#publickey) Validators that haven't produced any unit during the era.

## EraReward

A validator's public key paired with a measure of the value of its contribution to consensus, as a fraction of the configured maximum block reward.

Required Parameters:

* `amount` The reward amount.

* [`validator`](#publickey) The validator's public key.

## EraSummary

The summary of an era.

Required Parameters:

* [`block_hash`](#blockhash) The Block hash.

* [`era_id`](#eraid) The era id.

* [`merkle_proof`](#merkle-proof) The merkle proof.

* [`state_root_hash`](#digest) Hex-encoded hash of the state root.

* [`stored_value`](#storedvalue) The StoredValue containing era information.

## ExecutableDeployItem

Represents possible variants of an executable Deploy.

## ExecutionInfo

The block hash and height in which a given deploy was executed, along with the execution result if known.

Required Parameters:

* [`block_hash`](#blockhash) The hash of the block in which the deploy was executed.

* `block_height` The height of the block in which the deploy was executed.

Optional Parameters:

* [`execution_result`](#executionresult) The execution result if known.

## ExecutionEffect

The journal of execution transforms from a single Deploy.

Required Parameters:

* [`operations`](#operation)

* [`transforms`](#transformentry)

## ExecutionResult

The versioned result of executing a single Deploy.

One of:

* [`Version1`](#executionresultv1) Version 1 of execution result type.

* [`Version2`](#executionresultv2) Version 2 of execution result type.

## ExecutionResultV1

The result of executing a single deploy prior to Casper 2.0.

One of:

* `Failure` The result of a failed execution

    Required Parameters:

    [`effect`](#executioneffect)

    [`transfers`](#transferaddr)

    [`cost`](#u512)

    `error_message` The error message associated with executing the Deploy.

* `Success` The result of a successful execution.

    Required Parameters:

    [`effect`](#executioneffect)

    [`transfers`](#transferaddr)

    [`cost`](#u512)

## ExecutionResultV2

The result of executing a single transaction.

Required Parameters:

* [`consumed`](#gas) How much gas was consumed executing this transaction.

* [`cost`](#u512) How much was paid for this transaction.

* [`effects`](#effects) The effects of executing this transaction.

* [`initiator`](#initiatoraddr) Who initiated this transaction.

* [`limit`](#gas) The maximum allowed gas limit for this transaction.

* [`payment`](#paymentinfo) Breakdown of payments made to cover the cost.

* `size_estimate` The size estimate of the transaction

* [`transfers`](#transfer) A record of transfers performed while executing this transaction.

Optional Parameters:

* `error_message` If there is no error message, this execution was processed successfully. If there is an error message, this execution failed to fully process for the stated reason.

## Gas

The `Gas` struct represents a `U512` amount of gas.

## GlobalStateIdentifier

Identifier for possible ways to query global state.

* [`BlockHash`](#blockhash) Query using a block hash.

* `BlockHeight` Query using a block height.

* [`StateRootHash`](#digest) Query using the state root hash.

## Group

A (labelled) "user group". Each entry point of a versioned contract may be associated with one or more user groups which are allowed to call it.

## InitiatorAddr

The address of the initiator of a transaction

Contains one of:

* [`publickey`](#publickey) The public key of the initiator.

* [`accounthash`](#accounthash) The account hash derived from the public key of the initiator.

## JsonBlockWithSignatures

A JSON-friendly representation of a block and the signatures for that block.

Required Parameters:

* [`block`](#block) The block.

* [`proofs`](#array_of_blockproof) The proofs of the block, i.e. a collection of validators' signatures of the block hash.

## JsonEraValidators

The validators for the given era.

Required Parameters:

* [`era_id`](#eraid)

* [`validator_weights`](#jsonvalidatorsweights)

## JsonValidatorChanges

The changes in a validator's status.

Required Parameters:

* [`public_key`](#publickey) The public key of the validator.

* [`status_changes`](#jsonvalidatorstatuschange) The set of changes to the validator's status.

## JsonValidatorStatusChange

A single change to a validator's status in the given era.

Required Parameters:

* [`era_id`](#eraid) The era in which the change occurred.

* [`validator_change`](#validatorchange) The change in validator status.

## JsonValidatorsWeights

A validator's weight.

Required Parameters:

* [`public_key`](#publickey)

* [`weight`](#u512)

## Key

The key as a formatted string, under which data can be stored in global state.

## MessageChecksum

Message checksum as a formatted string.

## MessageTopic

A topic for contract-level messages.

Required Parameters:

* `topic_name` A string used to identify the message topic.

* [`topic_name_hash`](#topicnamehash) The hash of the name of the message topic.

## MessageTopicSummary

Summary of a message topic that will be stored in global state.

Required Parameters:

* [`blocktime`](#blocktime)

* `message_count` The number of messages in this topic.

## MinimalBlockInfo

Minimal info of a `Block`.

Required Parameters:

* [`creator`](#publickey)

* [`era_id`](#eraid)

* [`hash`](#blockhash)

* `height` The block height.

* [`state_root_hash`](#digest)

* [`timestamp`](#timestamp)

## NamedArg

Named arguments to a contract.

## NamedEntryPoint

A named [entry point](#entrypoint).

Required Parameters:

* [`entry_point`](#entrypoint)

* `name` A string identifying the entry point.

## NamedKey

A named key.

Required Parameters:

* `key` The value of the entry: a casper `Key` type.

* `name` The name of the entry.

## NamedKeys

A [collection of named keys](#namedkey).

## NamedKeyValue

A `NamedKey` value.

Required Parameters:

* `name` The name of the `Key` encoded as a `CLValue`.

* `named_key` The actual `Key` encoded as a `CLValue`.

## NamedUserGroup

A named [`group`](#group).

Required Parameters:

* [`group_name`](#group)

* [`group_users`](#uref)

## NextUpgrade

Information about the next protocol upgrade.

Required Parameters:

* [`activation_point`](#activationpoint)

* [`protocol_version`](#protocolversion)

## Operation

An operation performed while executing a Deploy.

Required Parameters:

* `key` The formatted string of the `Key`.

* [`kind`](#opkind)

## OpKind

The type of operation performed while executing a Deploy.

One of:

* `Read` A read operation.

* `Write` A write operation.

* `Add` An addition.

* `NoOp` An operation which has no effect.

* `Prune` A prune operation.

## Package

Entity definition, metadata and security container.

Required Parameters:

* [`disabled_versions`](#entityversionkey) Collection of disabled entity versions. The runtime will not permit disabled entity versions to be executed.

* [`groups`](#array_of_namedusergroup) Mapping maintaining the set of URefs associated with each user group, used to control access to methods in a particular version of the entity. A method is callable by any context which knows any of the URefs associated with the method's user group.

* [`lock_status`](#packagestatus) A flag that determines whether a entity is locked.

* [`versions`](#array_of_entityversionandhash) All versions (enabled & disabled).

## Parameter

Parameter to an entry point.

Required Parameters:

* [`cl_type`](../../concepts/serialization/primitives.md#clvalue-cltype)

* `name`

## PackageHash

The hex-encoded address of a package associated with an [`AddressableEntity`](#addressableentity).

## PackageStatus

An enum to determine the lock status of the package.

One of:

* `Locked` The package is locked and cannot be versioned.

* `Unlocked` The package is unlocked and can be versioned.

## PaymentInfo

Breakdown of payments made to cover the cost.

Required Parameters:

* `source` Source purse used for payment of the transaction.

## PeerEntry

Node peer entry.

Required Parameters:

* `address` Node address.

* `node_id` Node ID.

## Peers

Map of peer IDs to network addresses.

## PricingMode

The pricing mode of a transaction.

One of:

* `Classic` The original payment model, where the creator of the transaction specifies how much they will pay, at what gas price.

* `Fixed` The cost of the transaction is determined by the cost table, per the transaction category.

* `Reserved` The payment for this transaction was previously reserved (Not currently implemented).

## ProtocolVersion

Casper Platform protocol version.

## PublicKey

Hex-encoded cryptographic public key, including the algorithm tag prefix.

## PublicKeyAndBid

A bid associated with the given public key.

Required Parameters:

* [`bid`](#bid)

* [`public_key`](#publickey)

## PublicKeyAndDelegator

A delegator associated with the given validator.

Required Parameters:

* [`delegator_public_key`](#publickey)

* [`delegator`](#delegator)

## PurseIdentifier

The identifier of a purse.

One of:

* `main_purse_under_public_key` The main purse under a provided [`PublicKey`](./types_chain.md#publickey).

* `main_purse_under_account_hash` The main purse under a provided [`AccountHash`](./types_chain.md#accounthash).

* `main_purse_under_entity_addr` The main purse of the account identified by this [`EntityAddr`](#entityaddr).

* `purse_uref` A specific purse identified by the associated [`URef`](./types_chain.md#uref).

## ReservationKind

Container for bytes recording location, type and data for a gas reservation.

Required Parameters:

* [`receipt`](#digest)

* [`reservation_data`](#bytes) Hex-encoded bytes.

* `reservation_kind` A `uint8` integer.

## RewardedSignatures

Describes finality signatures that will be rewarded in a block. Consists of a vector of [`SingleBlockRewardedSignatures`](#singleblockrewardedsignatures), each of which describes signatures for a single ancestor block. The first entry represents the signatures for the parent block, the second for the parent of the parent, and so on.

## RuntimeArgs

Represents a collection of arguments passed to a smart contract.

## SeigniorageAllocation

Information about a seigniorage allocation.

One of:

* `Validator` Info about a seigniorage allocation for a validator.

    Required Parameters:

    [`amount`](#u512) Allocated amount.

    [`validator_public_key`](#publickey) Validator's public key.

* `Delegator` Info about a seigniorage allocation for a delegator.

    Require Parameters:

    [`amount`](#u512) Allocated amount.

    [`delegator_public_key`](#publickey) Delegator's public key.

    [`validator_public_key`](#publickey) Validator's public key.

## Signature

Hex-encoded cryptographic signature, including the algorithm tag prefix.

## SingleBlockRewardedSignatures

List of identifiers for finality signatures for a particular past block. That past block height is equal to `current_height` minus `signature_rewards_max_delay`, the latter being defined in the chainspec.

## StoredValue

Representation of a value stored in global state.

* [`CLValue`](#clvalue) A Casper-specific value.

* [`Account`](#account) An Account.

* `ContractWasm` A contract's Wasm.

* [`Contract`](#contract) Entry points supported by a contract.

* [`ContractPackage`](#contractpackage) A contract definition, metadata, and security container.

* [`LegacyTransfer`](#transfer) A version 1 (legacy) transfer.

* [`DeployInfo`](#deployinfo) A record of a Deploy.

* [`EraInfo`](#erainfo) Information about an era.

* [`Bid`](#bid) A bid.

* [`Withdraw`](#unbondingpurse) A withdraw.

* [`Unbonding`](#unbondingpurse) Unbonding information.

* [`AddressableEntity`](#addressableentity) An AddressableEntity.

* [`BidKind`](#bidkind) A variant that stored `BidKind`.

* [`Package`] A `Package`.

* [`ByteCode`] A record of byte code.

* [`MessageTopic`](#messagetopic) A variant that stores a message topic.

* [`Message`](#messagechecksum) A variant that stores a message digest.

* [`NamedKey`](#namedkey) A NamedKey record.

* [`Reservation`](#reservationkind) A reservation record.

* [`EntryPoint`](#entrypoint) An entrypoint record.


## SystemEntityType

System contract types.

* `Mint`

* `HandlePayment`

* `StandardPayment`

* `Auction`

## TimeDiff

Human-readable duration.

## Timestamp

Timestamp formatted as per RFC 3339.

## TopicNameHash

The hash of the name of the [message topic](#messagetopic).

## Transaction

A versioned wrapper for a transaction or deploy.

Contains one of:

* [`deploy`](#deploy)

or

* [`Version1`](#transactionv1)

## TransactionEntryPoint

An entry point of a transaction.

One of:

* `Call` The standard `call` entry point used in session code.

* `Custom` A non-native, arbitrary entry point.

* `Transfer` The `transfer` native entry point, used to reference motes from a source purse to a target purse.

* `AddBid` The `add_bid` native entry point, used to create or top off a bid purse.

* `WithdrawBid` The `withdraw_bid` native entry point, used to decrease a validator's stake.

* `Delegate` The `delegate` native entry point, used to add a new delegator or increase an existing delegator's stake.

* `Undelegate` The `undelegate` native entry point, used to reduce a delegator's stake or remove the delegator if the remaining stake is zero.

* `Redelegate` The `redelegate` native entry point, used to reduce a delegator's stake or remove the delegator if the remaining stake is zero. After the unbonding delay, it will automatically delegate to a new validator.

* `ActivateBid` The `activate_bid` native entry point, used to used to reactivate an inactive bid.

* `ChangeBidPublicKey` The `change_bid_public_key` native entry point, used to change a bid's public key.

## TransactionHash

A versioned wrapper for a transaction hash or deploy hash.

One of:

* [`Deploy`](#deployhash)

* [`Version1`](#transactionv1hash)

## TransactionInvocationTarget

The identifier of a `stored` transaction target.

One of:

* `ByHash` The hex-encoded entity address identifying the invocable entity.

* `ByName` The alias identifying the invocable entity.

* `ByPackageHash` The address and optional version identifying the package.

    Required Parameters:

    * `addr` The hex-encoded address of the package.

    Optional parameters:

    * `version` The package version. If `None`, the latest enabled version is implied.

* `ByPackageName` The alias and optional version identifying the package.

    Required Parameters:

    * `name` The package name.

    Optional Parameters:

    * `version` The package version. If `None`, the latest enabled version is implied.

## TransactionRuntime

Runtime used to execute a transaction.

Parameters:

* `VmCasperV1` The Casper Version 1 Virtual Machine.

* `VmCasperV2` The Casper Version 2 Virtual Machine.

## TransactionScheduling

The scheduling mode of a transaction.

One of:

* `Standard` No special scheduling applied.

* `FutureEra` Execution should be scheduled for the specific era.

    Required parameters for `FutureEra`:

    * [`FutureEra`](#eraid)

* `FutureTimestamp` Execution should be scheduled for the specific timestamp or later.

    Required parameters for `FutureTimestamp`:

    * [`FutureTimestamp`](#timestamp)

## TransactionTarget

The execution target of a Transaction.

One of:

* `native` The execution target is a native operation.

* `stored` The execution target is a stored entity or package.

    Required parameters for a `stored` target:

    * [`id`](#transactioninvocationtarget)

    * [`runtime`](#transactionruntime)

* `session` The execution target is the included module bytes.

    Required parameters for a `session` target:

    * [`module_bytes`](#bytes)

    * [`runtime`](#transactionruntime)

## TransactionV1

A unit of work sent by a client to the network, which when executed can cause global state to be altered.

Required Parameters:

* [`approvals`](#approval)

* [`body`](#transactionV1body)

* [`hash`](#transactionV1hash)

* [`header`](#transactionV1header)

## TransactionV1Body

The body of a TransactionV1.

Required Parameters:

* [`args`](#runtimeargs)

* [`entry_point`](#entrypoint)

* [`scheduling`](#transactionscheduling)

* [`target`](#transactiontarget)

## TransactionV1Hash

A hex-encoded TransactionV1 hash.

## TransactionV1Header

The header portion of a TransactionV1.

Required Parameters:

* [`body_hash`](#digest)

* `chain_name`

* [`initiator_addr`](#initiatoraddr)

* [`pricing_mode`](#pricingmode)

* [`timestamp`](#timestamp)

* [`ttl`](#timediff)

## Transfer

A versioned wrapper for a transfer.

One of:

* [`Version1`](#transferv1) A version 1 transfer.

* [`Version2`](#transferv2) A version 2 transfer.

## TransferAddr

Hex-encoded version 1 transfer address.

## TransferV1

Represents a transfer from one purse to another.

Required Parameters:

* [`amount`](#u512) Transfer amount.

* [`deploy_hash`](#deployhash) Deploy that created the transfer.

* [`from`](#accounthash) Account from which transfer was executed.

* [`gas`](#gas)

* [`source`](#uref) Source purse.

* [`target`](#uref) Target purse.

Optional Parameters:

* `id` User-defined ID.

* [`to`](#accounthash) Account to which funds are transferred.

## TransferV2

Represents a version 2 transfer from one purse to another.

Required Parameters:

* [`amount`](#u512) Transfer amount.

* [`transaction_hash`](#transactionhash) Transaction that created the transfer.

* [`from`](#initiatoraddr) Entity from which transfer was executed.

* [`gas`](#gas)

* [`source`](#uref) Source purse.

* [`target`](#uref) Target purse.

Optional Parameters:

* `id` User-defined ID.

* [`to`](#accounthash) Account to which funds are transferred.

## TransformError

Error type for applying and combining transforms. A `TypeMismatch` occurs when a transform cannot be applied because the types are not compatible (e.g. trying to add a number to a string).

One of:

* [`serialization`](#bytesreprerror)

* [`typemismatch`](#typemismatch)

* `deprecated` Type no longer supported.

## TransformV1

A transformation performed while executing a Deploy.

Required Parameters:

* `key` The formatted string of the `Key`.

* [`transforms`](#transformkindv1) The transformation.

## TransformV2

A transformation performed while executing a Deploy.

Required Parameters:

* `key` The formatted string of the `Key`.

* [`kind`](#transformkindv2) The transformation.

## TransformKindV1

The actual transformation performed while executing a Deploy in version 1.

One of:

* `Identity` A transform having no effect.

* `WriteCLValue` Writes the given CLValue to global state.

* `WriteAccount` Writes the given Account to global state.

* `WriteContractWasm` Writes a smart contract as Wasm to global state.

* `WriteContract` Writes a smart contract to global state.

* `WriteContractPackage` Writes a smart contract package to global state.

* `WriteDeployInfo` Writes the given DeployInfo to global state.

* `WriteEraInfo` Writes the given EraInfo to global state.

* `WriteTransfer` Writes the given Transfer to global state.

* `WriteBid` Writes the given Bid to global state.

* `WriteWithdraw` Writes the given Withdraw to global state.

* `WriteUnbonding` Writes the given Unbonding to global state.

* `WriteAddressableEntity` Writes the addressable entity to global state.

* `WriteBidKind` Writes the given BidKind to global state.

* `AddInt32` Adds the given `i32`.

* `AddUInt64` Adds the given `u64`.

* `AddUInt128` Adds the given [`U128`](#u128).

* `AddUInt256` Adds the given [`U256`](#u256).

* `AddUInt512` Adds the given [`U512`](#u512).

* `AddKeys` Adds the given collection of [named keys](#namedkey).

* `Prune` Removes the pathing to the global state entry of the specified key. The pruned element remains reachable from previously generated global state root hashes, but will not be included in the next generated global state root hash and subsequent states.

* `Failure` Represents the case where applying a transform would cause an error.

## TransformKindV2

The actual transformation performed while executing a Deploy in version 2.

One of:

* `Identity` A transform having no effect.

* `Write` Writes the new value in global state.

* `AddInt32` Adds the given `i32`.

* `AddUInt64` Adds the given `u64`.

* `AddUInt128` Adds the given [`U128`](#u128).

* `AddUInt256` Adds the given [`U256`](#u256).

* `AddUInt512` Adds the given [`U512`](#u512).

* `AddKeys` Adds the given collection of [named keys](#namedkey).

* `Prune` Removes the pathing to the global state entry of the specified key. The pruned element remains reachable from previously generated global state root hashes, but will not be included in the next generated global state root hash and subsequent states.

* `Failure` Represents the case where applying a transform would cause an error.

## TypeMismatch

An error struct representing a type mismatch in [`StoredValue`](#storedvalue) operations.

* `expected` The name of the expected type.

* `found` The actual type found.

## U128

Decimal representation of a 128-bit integer.

## U256

Decimal representation of a 256-bit integer.

## U512

Decimal representation of a 512-bit integer.

## UnbondingPurse

Unbonding purse.

Required Parameters:

* [`amount`](#u512) Unbonding amount.

* [`bonding_purse`](#uref) Bonding purse.

* [`era_of_creation`](#eraid) Era in which the unbonding request was created.

* [`unbonder_public_key`](#publickey) Unbonder's public key.

* [`validator_public_key`](#publickey) The original validator's public key.

Optional Parameters:

* [`new_validator`](#publickey) The redelegated validator's public key.

## URef

Hex-encoded, formatted URef.

## ValidatorBid

An entry in the validator map.

Required Parameters:

* [`bonding_purse`](#uref) Bonding purse.

* `delegation_rate` The delegation rate.

* `inactive` `true` if the validator has been "evicted".

* `maximum_delegation_amount` Minimum allowed delegation amount in motes.

* `minimum_delegation_amount` Maximum allowed delegation amount in motes.

* [`staked_amount`](#u512) The amount of tokens staked by a validator.

* [`validator_public_key`](#publickey) The validator's public key.

Optional Parameters:

* [`vesting_schedule`](#vestingschedule) 

## ValidatorChange

A change to a validator's status between two eras.

One of: 

* `Added` The validator was just added to the validator set.

* `Removed` The validator was removed from the validator set.

* `Banned` The validator was banned from this era.

* `CannotPropose` The validator was excluded from proposing new blocks in this era.

* `SeenAsFaulty` We saw the validator misbehave in this era.

## ValidatorCredit

Validator credit record.

Required Parameters:

* [`amount`](#u512) The credit amount.

* [`era_id`](#eraid) The era id the credit was created.

* [`validator_public_key`](#publickey) The validator's public key.

## ValidatorWeight

A validator's public key paired with its weight, i.e. the total number of motes it staked together with its delegators.

Required Parameters:

* [`validator`](#publickey)

* [`weight`](#u512)

## VestingSchedule

Vesting schedule for a genesis validator.

Required Parameters:

* `initial_release_timestamp_millies` Timestamp of the initial release.

Optional Parameters:

* [`locked_amounts`](#u512) The amount of locked motes.

## WithdrawPurse

Withdraw purse, previously known as unbonding purse prior to 1.5. Withdraw purses remain as historical data.

Required Parameters:

* [`amount`](#u512) Unbonding amount.

* [`bonding_purse`](#uref) Bonding purse.

* [`era_of_creation`](#eraid) Era in which the unbonding request was created.

* [`unbonder_public_key`](#publickey) Unbonder's public key.

* [`validator_public_key`](#publickey) The original validator's public key.