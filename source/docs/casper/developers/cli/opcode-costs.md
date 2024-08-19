---
title: OpCode Costs Tables
---

# OpCode Costs Tables

The following tables outline the cost, in motes, for a given operation on Casper's Mainnet. If you are building for a private network or other instance of Casper, you will need to verify these costs in the associated `chainspec.toml`.

More information on `chainspec`s for private networks can be found [here](/operators/setup-network/chain-spec.md)

:::note

All costs in this table are in [motes](/concepts/glossary/M/#motes), not CSPR, and the corresponding chainspec is [here](https://github.com/casper-network/casper-node/blob/53dd33865c2707c29284ccc0e8485f22ddd6fbe3/resources/production/chainspec.toml#L129).
<!--TODO update the link when 2.0 ships to Testnet/Mainnet. -->
:::

## Storage Costs

|Attribute         |Description                                    | Cost |
|----------------- |-----------------------------------------------|-----------------|
|gas_per_byte | Gas charged per byte stored in global state. | 1_117_587|

## OpCode Costs

|Attribute         |Description                                    | Cost |
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

## Control Flow Operation Costs

|Attribute         |Description                                    | Cost |
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

## `Br_Table` OpCode Costs

|Attribute         |Description                                    | Cost |
|----------------- |-----------------------------------------------|-----------------|
|cost | Fixed cost per `br_table` opcode. | 35_000|
|size_multiplier |  Size of target labels in the `br_table` opcode will be multiplied by `size_multiplier`. | 100|

## External Function Costs

The following costs are for low-level bindings for host-side ("external") functions. More information on the Casper external FFI can be found [here](https://docs.rs/casper-contract/latest/casper_contract/ext_ffi/index.html).

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

### `Auction` System Contract Costs

These are the costs of calling `auction` system contract entrypoints.

|Entrypoint         |Description                                    | Cost |
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

### `Mint` System Contract Costs

These are the costs of calling `mint` system contract entrypoints.

|Entrypoint         |Description                                    | Cost |
|----------------- |-----------------------------------------------|-----------------|
|mint | Cost of calling the `mint` entrypoint. | 2_500_000_000|
|reduce_total_supply | Cost of calling the `reduce_total_supply` entrypoint. | 10_000|
|create | Cost of calling the `create` entrypoint. | 2_500_000_000|
|balance | Cost of calling the `balance` entrypoint. | 10_000|
|burn | Cost of calling the `burn` entrypoint. | 10_000|
|transfer | Cost of calling the `transfer` entrypoint. | 10_000|
|read_base_round_reward | Cost of calling the `read_base_round_reward` entrypoint. | 10_000|
|mint_into_existing_purse | Cost of calling the `mint_into_existing_purse` entrypoint. | 2_500_000_000|


### `Handle_Payment` System Contract Costs

These are the costs of calling entrypoints on the `handle_payment` system contract.

|Entrypoint         |Description                                    | Cost |
|----------------- |-----------------------------------------------|-----------------|
|get_payment_purse | Cost of calling the `get_payment_purse` entrypoint. |10_000|
|set_refund_purse  | Cost of calling the `set_refund_purse` entrypoint. |10_000|
|get_refund_purse  | Cost of calling the `get_refund_purse` entrypoint. |10_000|
|finalize_payment  | Cost of calling the `finalize_payment` entrypoint. |10_000|

### `Standard_Payment` System Contract Costs

These settings manage the costs of calling entrypoints on the `standard_payment` system contract.

|Entrypoint        |Description                                    | Cost |
|----------------- |-----------------------------------------------|-----------------|
|pay| Cost of calling the `pay` entrypoint and sending an amount to a payment purse. |10_000|