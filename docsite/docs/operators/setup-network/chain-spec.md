---
title: The Chainspec
---

# The Blockchain Specification {#the-chain-specification}

The blockchain specification, or `chainspec`, is a collection of configuration settings describing the network state at genesis and upgrades to basic system functionality (including system contracts and gas costs) occurring after genesis. This page describes each field in the chainspec, based on version 2.0.0 of the Casper node. The chainspec can and should be customized for private networks. The chainspec attributes are divided into categories based on what they are configuring. <!--TODO add link to 2.0 release version when available -->

## protocol

These settings describe the active protocol version. 

|Attribute         |Description                                    | Mainnet Setting |
|----------------- |-----------------------------------------------|-----------------|
|version          | The Casper node protocol version. | '2.0.0'|
|hard_reset       | When set to true, clear blocks and transactions back to the switch block (the end of the last era) just before the activation point. Used during the upgrade process to reset the network progress. In most cases, this setting should be true.| true|
|activation_point | The protocol version that should become active. <br /><br />If it is a timestamp string, it represents the timestamp for the genesis block. This is the beginning of Era 0. By this time, a sufficient majority (> 50% + F/2 — see the `finality_threshold_fraction` below) of validator nodes must be running to start the blockchain. This timestamp is also used in seeding the pseudo-random number generator used in the contract runtime for computing the genesis post-state hash. <br /><br />If it is an integer, it represents an era ID, meaning the protocol version becomes active at the start of this era. | 11100|


## network

The following settings configure the networking layer.

|Attribute         |Description                                    | Mainnet Setting |
|----------------- |-----------------------------------------------|-----------------|
|name | Human readable network name for convenience. The state_root_hash of the genesis block is the true identifier. The name influences the genesis hash by contributing to seeding the pseudo-random number generator used in the contract runtime for computing the genesis post-state hash. | 'casper'|
|maximum_net_message_size | The maximum size of an acceptable networking message in bytes. Any message larger than this will be rejected at the networking level. | 25_165_824|

## core

These settings manage the core protocol behavior.

|Attribute         |Description                                    | Mainnet Setting |
|----------------- |-----------------------------------------------|-----------------|
|era_duration | Era duration. | '120 minutes'|
|minimum_era_height | Minimum number of blocks per era. An era will take longer than `era_duration` if that is necessary to reach the minimum height. | 20 | 
|minimum_block_time | Minimum difference between a block's and its child's timestamp. | '16384 ms'|
|validator_slots | Number of slots available in the validator auction. | 100|
|finality_threshold_fraction | A number between 0 and 1 representing the fault tolerance threshold as a fraction used by the internal finalizer.<br />It is the fraction of validators that would need to equivocate to make two honest nodes see two conflicting blocks as finalized.<br />Let's say this value is F. A higher value F makes it safer to rely on finalized blocks. It also makes it more difficult to finalize blocks, however, and requires strictly more than (F + 1)/2 validators to be working correctly. | [1, 3]|
|start_protocol_version_with_strict<br />_finality_signatures_required |Protocol version from which nodes are required to hold strict finality signatures.| '1.5.0'|
|legacy_required_finality|The finality required for legacy blocks. Options are 'Strict', 'Weak', and 'Any'. <br />Used to determine finality sufficiency for new joiners syncing blocks created in a protocol version before the start protocol version with strict finality signatures. |'Strict'|
|migrate_legacy_accounts| If true, the protocol upgrade will migrate ALL user accounts to addressable entity. If false, user accounts will be left as they are and will be lazily migrated on a per-account basis if / when that account is used during transaction execution. | true|
|migrate_legacy_contracts| If true, the protocol upgrade will migrate ALL user contracts to addressable entity. If false, user contracts will be left as they are and will be lazily migrated on a per-contract basis if / when that contract is used during transaction execution. | true|
|auction_delay | Number of eras before an auction defines the set of validators. If a validator bonds with a sufficient bid in era N, it will be a validator in era N + auction_delay + 1. | 1|
|locked_funds_period | The period after genesis during which a genesis validator's bid is locked. | '0 days'|
|vesting_schedule_period | The period in which the genesis validator's bid is released over time after it is unlocked. | '0 weeks'|
|unbonding_delay | Default number of eras that need to pass to be able to withdraw unbonded funds. | 7|
|round_seigniorage_rate | Round seigniorage rate represented as a fraction of the total supply.<br />- Annual issuance: 8%.<br />- Minimum block time: 2^15 milliseconds.<br />- Ticks per year: 31536000000.<br /><br />(1+0.08)^((2^15)/31536000000)-1 is expressed as a fractional number below in Python:<br />`Fraction((1 + 0.08)**((2**15)/31536000000) - 1).limit_denominator(1000000000)` | [7, 175070816]|
|max_associated_keys | Maximum number of associated keys for a single account. | 100|
|max_runtime_call_stack_height | Maximum height of the contract runtime call stack. | 12|
|minimum_delegation_amount | Minimum allowed delegation amount in motes. | 500_000_000_000|
|maximum_delegation_amount | Maximum allowed delegation amount in motes. | 1_000_000_000_000_000_000|
|prune_batch_size | Global state prune batch size for tip pruning. Possible values:<br />- 0 when the feature is OFF<br />- Integer if the feature is ON, representing the number of eras to process per block.| 0|
|strict_argument_checking | Enables strict arguments checking when calling a contract; i.e., all non-optional args are provided and they are of the correct `CLType`. | false|
|simultaneous_peer_requests | Number of simultaneous peer requests. | 5|
|consensus_protocol | The consensus protocol to use. Options are 'Zug' or 'Highway'. | 'Zug'|
|max_delegators_per_validator | The maximum amount of delegators per validator. If the value is 0, there is no maximum capacity. | 1200|
|finders_fee | The split in finality signature rewards between block producer and participating signers. | [1, 5]|
|finality_signature_proportion | The proportion of baseline rewards going to reward finality signatures specifically. | [1, 2]|
|signature_rewards_max_delay | Lookback interval indicating how many past blocks we are looking at to reward. | 3|
|allow_unrestricted_transfers | Allows peer to peer transfers between users. Setting this to false makes sense only for private chains.| true|
|allow_auction_bids | Enables the auction entry points 'delegate' and 'add_bid'. Setting this to false makes sense only for private chains that don't need to auction new validator slots. These auction entry points will return an error if called, when this option is set to false. | true|
|compute_rewards | If set to false, then consensus doesn't compute rewards and always uses 0. | true|
|refund_handling | Defines how refunds of the unused portion of payment amounts are calculated and handled. Valid options are: refund (a ratio of the unspent token is returned to the spender); burn (a ratio of the unspent token is burned); no_refund (no refunds are paid out) | { type = 'no_refund' }|
|fee_handling    | Defines how fees are handled. Valid options are: no_fee (fees are eliminated); pay_to_proposer (fees are paid to the block proposer); accumulate (fees are accumulated in a special purse and distributed at the end of each era evenly among all administrator accounts); burn (fees are burned) | { type = 'no_fee' }   |
|validator_credit_cap | If a validator would recieve a validator credit, it cannot exceed this percentage of their total stake. | [1, 5] |
|pricing_handling | Defines how pricing is handled. Valid options are: classic (senders of transaction self-specify how much they pay); fixed (costs are fixed, per the cost table); reserved (prepaid transaction, currently not supported) | { type = 'fixed' } |
|allow_reservations | Does the network allow pre-payment / reservations for future execution? Currently not supported.| false |
|gas_hold_balance_handling | Defines how gas holds affect available balance calculations. Valid options are: accrued (sum of full value of all non-expired holds) and amortized (sum of each hold is amortized over the time remaining until expiry). | { type = 'accrued' } |
|gas_hold_interval | Defines how long gas holds last. | '24 hours'|
|administrators | List of public keys of administrator accounts. Setting this option makes only on private chains which require administrator accounts for regulatory reasons. | [] |

See the [Fee Elimination](../../concepts/economics/fee-elimination.md) page for more details regarding `refund_handling`, `fee_handling`, `validator_credit_cap`, `pricing_handling`, `gas_hold_balance_handling`, and `gas_hold_interval`.

## highway

These settings configure the Highway Consensus protocol.

|Attribute         |Description                                    | Mainnet Setting |
|----------------- |-----------------------------------------------|-----------------|
|maximum_round_length | Highway dynamically chooses its round length between `minimum_block_time` and `maximum_round_length`. | '66 seconds'|

## transactions

These settings manage transactions and their lifecycle.

|Attribute         |Description                                    | Mainnet Setting |
|----------------- |-----------------------------------------------|-----------------|
|max_ttl | The duration after the transaction timestamp during which the transaction can be included in a block. | '2 hours'|
|block_max_approval_count | The maximum number of approvals permitted in a single block. | 2600|
|max_block_size | Maximum block size in bytes, including transactions contained by the block. 0 means unlimited. | 5_242_880|
|block_gas_limit | The upper limit of the total gas of all transactions in a block. | 3_300_000_000_000|
|native_transfer_minimum_motes | The minimum amount in motes for a valid native transfer. | 2_500_000_000|
|max_timestamp_leeway | The maximum value to which `transaction_acceptor.timestamp_leeway` can be set in the config.toml file. | '5 seconds' |

### transactions.v1

These settings manage the transaction lanes including both native and Wasm based interactions. See [Lanes and gas costs](../../concepts/economics/runtime.md#lanes-and-gas-costs-lanes) for details.

|Attribute         | Mainnet Setting |
|----------------- |-----------------|
|native_mint_lane | [0, 1024, 1024, 65_000_000_000, 650] |
|native_auction_lane | [1, 2048, 2048, 362_500_000_000, 145] |
|wasm_lanes | [[2, 1_048_576, 2048, 1_000_000_000_000, 1], [3, 344_064, 1024, 500_000_000_000, 3], [4, 172_032, 1024, 50_000_000_000, 7], [5, 12_288, 512, 1_500_000_000, 15]] |


### transactions.deploy

|Attribute         |Description                                    | Mainnet Setting |
|----------------- |-----------------------------------------------|-----------------|
|max_payment_cost | The maximum number of motes allowed to be spent during payment. 0 means unlimited. | '0'|
|max_dependencies | The maximum number of other transactions a transaction can depend on (requiring them to have been executed before it can execute). | 10|
|payment_args_max_length | The limit of length of serialized payment code arguments. | 1024|
|session_args_max_length | The limit of length of serialized session code arguments. | 1024|

## wasm

The following are Wasm-related settings.

|Attribute         |Description                                    | Mainnet Setting |
|----------------- |-----------------------------------------------|-----------------|
|max_memory | Amount of free memory (in 64 kB pages) each contract can use for its stack. | 64|
|max_stack_height | Max stack height (native WebAssembly stack limiter). | 500|

### wasm.storage_costs

These settings manage Wasm storage costs.

|Attribute         |Description                                    | Mainnet Setting |
|----------------- |-----------------------------------------------|-----------------|
|gas_per_byte | Gas charged per byte stored in global state. | 1_117_587|

### wasm.opcode_costs

The following settings manage the cost table for Wasm opcodes.

|Attribute         |Description                                    | Mainnet Setting |
|----------------- |-----------------------------------------------|-----------------|
|bit | Bit operations multiplier. | 300 |
|add | Arithmetic add operations multiplier. | 210|
|mul |  Mul operations multiplier. | 240|
|div | Div operations multiplier. | 320|
|load | Memory load operation multiplier. | 2_500|
|store |Memory store operation multiplier. | 4_700|
|const | Const store operation multiplier. | 110|
|local | Local operations multiplier. | 390|
|global | Global operations multiplier. | 390|
|integer_comparison | Integer operations multiplier. | 250|
|conversion | Conversion operations multiplier. | 420|
|unreachable | Unreachable operation multiplier. | 270|
|nop | Nop operation multiplier. | 200|
|current_memory | Get the current memory operation multiplier. | 290|
|grow_memory | Grow memory cost per page (64 kB). | 240_000|

### wasm.opcode_costs.control_flow

These settings manage costs for control flow operations.

|Attribute         |Description                                    | Mainnet Setting |
|----------------- |-----------------------------------------------|-----------------|
|block | Cost for `block` opcode. | 440|
|loop | Cost for `loop` opcode. | 440|
|if | Cost for `if` opcode. | 440|
|else | Cost for `else` opcode. | 440|
|end | Cost for `end` opcode. | 440|
|br | Cost for `br` opcode. | 35_000|
|br_if | Cost for `br_if` opcode. | 35_000|
|return | Cost for `return` opcode. | 440|
|select | Cost for `select` opcode. | 440|
|call | Cost for `call` opcode. | 68_000|
|call_indirect | Cost for `call_indirect` opcode. | 68_000|
|drop | Cost for `drop` opcode. | 440|

### wasm.opcode_costs.control_flow.br_table

The following settings manage `br_table` Wasm opcodes.

|Attribute         |Description                                    | Mainnet Setting |
|----------------- |-----------------------------------------------|-----------------|
|cost | Fixed cost per `br_table` opcode. | 35_000|
|size_multiplier |  Size of target labels in the `br_table` opcode will be multiplied by `size_multiplier`. | 100|


## wasm.messages_limits

The following chainspec settings manage the cost of contract-level messages.


|Attribute               |Description                                    |     Mainnet Setting  |
|----------------------- |-----------------------------------------------|----------------------|
|max_topic_name_size     | Maximum size of the topic name.                               | 256  |
|max_topics_per_contract | Maximum number of topics that can be added for each contract. | 128  |
|max_message_size        | Maximum size in bytes of the serialized message payload.      | 1_024|


### wasm.host_function_costs

The following settings specify costs for low-level bindings for host-side ("external") functions. More documentation and host function declarations are located in [smart_contracts/contract/src/ext_ffi.rs](https://github.com/casper-network/casper-node/blob/release-1.5.2/smart_contracts/contract/src/ext_ffi.rs).


|Host-Side Function| Cost | Arguments |
| ---------------- | ---- | --------- |
| add | 5_800 | [0, 0, 0, 0] |
| add_associated_key | 1_200_000 | [0, 0, 0] |
| add_contract_version | 200 | [0, 0, 0, 0, 120_000, 0, 0, 0, 30_000, 0, 0] |
| blake2b | 1_200_000 | [0, 120_000, 0, 0] |
| call_contract | 300_000_000 | [0, 0, 0, 120_000, 0, 120_000, 0] |
| call_versioned_contract | 300_000_000 | [0, 0, 0, 0, 120_000, 0, 120_000, 0] |
| create_contract_package_at_hash | 200 | [0, 0] |
| create_contract_user_group | 200 | [0, 0, 0, 0, 0, 0, 0, 0] |
| create_purse | 2_500_000_000 | [0, 0] |
| disable_contract_version | 200 | [0, 0, 0, 0] |
| get_balance | 3_000_000 | [0, 0, 0] |
| get_blocktime | 330 | [0] |
| get_caller | 380 | [0] |
| get_key | 2_000 | [0, 440, 0, 0, 0] |
| get_main_purse | 1_300 | [0] |
| get_named_arg | 200 | [0, 120_000, 0, 120_000] |
| get_named_arg_size | 200 | [0, 0, 0] |
| get_phase | 710 | [0] |
| get_system_contract | 1_100 | [0, 0, 0] |
| has_key | 1_500 | [0, 840] |
| is_valid_uref | 760 | [0, 0] |
| load_named_keys | 42_000 | [0, 0] |
| new_uref | 17_000 | [0, 0, 590] |
| random_bytes | 200 | [0, 0] |
| print | 20_000 | [0, 4_600] |
| provision_contract_user_group_uref | 200 | [0, 0, 0, 0, 0] |
| put_key | 100_000_000 | [0, 120_000, 0, 120_000] |
| read_host_buffer | 3_500 | [0, 310, 0] |
| read_value | 60_000 | [0, 120_000, 0] |
| read_value_local | 5_500 | [0, 590, 0] |
| remove_associated_key | 4_200 | [0, 0] |
| remove_contract_user_group | 200 | [0, 0, 0, 0] |
| remove_contract_user_group_urefs | 200 | [0, 0, 0, 0, 0, 120_000] |
| remove_key | 61_000 | [0, 3_200] |
| ret | 23_000 | [0, 420_000] |
| revert | 500 | [0] |
| set_action_threshold | 74_000 | [0, 0] |
| transfer_from_purse_to_account | 2_500_000_000 | [0, 0, 0, 0, 0, 0, 0, 0, 0] |
| transfer_from_purse_to_purse | 82_000_000 | [0, 0, 0, 0, 0, 0, 0, 0] |
| transfer_to_account | 2_500_000_000 | [0, 0, 0, 0, 0, 0, 0] |
| update_associated_key | 4_200 | [0, 0, 0] |
| write | 14_000 | [0, 0, 0, 980] |
| dictionary_put | 9_500 | [0, 1_800, 0, 520] |
| enable_contract_version | 200 | [0, 0, 0, 0] |
| manage_message_topic | 200 | [0, 30_000, 0, 0] |
| emit_message | 200 | [0, 30_000, 0, 120_000] |
| cost_increase_per_message | 50 | |


## system_costs

The following settings manage protocol operating costs.

### system_costs.auction_costs

These settings manage the costs of calling the `auction` system contract entrypoints.

|Attribute         |Description                                    | Mainnet Setting |
|----------------- |-----------------------------------------------|-----------------|
|get_era_validators | Cost of calling the `get_era_validators` entrypoint. | 10_000|
|read_seigniorage_recipients | Cost of calling the `read_seigniorage_recipients` entrypoint. | 10_000|
|add_bid | Cost of calling the `add_bid` entrypoint. | 2_500_000_000|
|withdraw_bid | Cost of calling the `withdraw_bid` entrypoint. | 2_500_000_000|
|delegate | Cost of calling the `delegate` entrypoint. | 2_500_000_000|
|undelegate | Cost of calling the `undelegate` entrypoint. | 2_500_000_000|
|run_auction | Cost of calling the `run_auction` entrypoint. | 10_000|
|slash | Cost of calling the `slash` entrypoint. | 10_000|
|distribute | Cost of calling the `distribute` entrypoint. | 10_000|
|withdraw_delegator_reward | Cost of calling the `withdraw_delegator_reward` entrypoint. | 10_000|
|withdraw_validator_reward | Cost of calling the `withdraw_validator_reward` entrypoint. | 10_000|
|read_era_id | Cost of calling the `read_era_id` entrypoint. | 10_000|
|activate_bid | Cost of calling the `activate_bid` entrypoint. | 10_000|
|redelegate | Cost of calling the `redelegate` entrypoint. | 2_500_000_000|
|change_bid_public_key | Cost of calling the `change_bid_public_key` entrypoint. | 5_000_000_000 |

### system_costs.mint_costs

These settings manage the costs of calling the `mint` system contract entrypoints.

|Attribute         |Description                                    | Mainnet Setting |
|----------------- |-----------------------------------------------|-----------------|
|mint | Cost of calling the `mint` entrypoint. | 2_500_000_000|
|reduce_total_supply | Cost of calling the `reduce_total_supply` entrypoint. | 10_000|
|create | Cost of calling the `create` entrypoint. | 2_500_000_000|
|balance | Cost of calling the `balance` entrypoint. | 10_000|
|burn | Cost of calling the `burn` entrypoint. | 10_000|
|transfer | Cost of calling the `transfer` entrypoint. | 10_000|
|read_base_round_reward | Cost of calling the `read_base_round_reward` entrypoint. | 10_000|
|mint_into_existing_purse | Cost of calling the `mint_into_existing_purse` entrypoint. | 2_500_000_000|


### system_costs.handle_payment_costs

These settings manage the costs of calling entrypoints on the `handle_payment` system contract.

|Attribute         |Description                                    | Mainnet Setting |
|----------------- |-----------------------------------------------|-----------------|
|get_payment_purse | Cost of calling the `get_payment_purse` entrypoint. |10_000|
|set_refund_purse  | Cost of calling the `set_refund_purse` entrypoint. |10_000|
|get_refund_purse  | Cost of calling the `get_refund_purse` entrypoint. |10_000|
|finalize_payment  | Cost of calling the `finalize_payment` entrypoint. |10_000|

### system_costs.standard_payment_costs

These settings manage the costs of calling entrypoints on the `standard_payment` system contract.

|Attribute         |Description                                    | Mainnet Setting |
|----------------- |-----------------------------------------------|-----------------|
|pay| Cost of calling the `pay` entrypoint and sending an amount to a payment purse. |10_000|