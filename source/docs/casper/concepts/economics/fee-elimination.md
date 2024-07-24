---
title: Fee Elimination
---

# Fee Elimination on Mainnet

Casper networks support configurable fee, refund, and pricing strategies. The Mainnet Condor release has enabled "fee elimination", also known as the "no fee mode", or "no fee transactions" to reduce operational costs for developers. This configurable feature places balance holds on a user's purse rather than taking fees for sending transactions to the network. This behavior benefits parties who send periodic transactions, as their gas costs are locked for some time and then either released all at once or linearly over time, depending on the chainspec settings. Recall that the network chainspec contains all the configuration choices on which every node must agree.

Instead of paying for gas to execute transactions, the `no_fee` chainspec configuration instructs the network to place a balance hold on the paying purse without transferring tokens from the purse: `fee_handling = { type = 'no_fee'}`. The portion of a purse balance that is locked is not available to transfer or spend until it is released; it is marked with a timestamp equal to the block time. In the "no fee" mode, the available balance of a purse equals its actual total balance minus all non-expired balance holds on that purse. The configurable `gas_hold_interval` determines how long a balance hold remains in effect. The on-chain logic calculates the correct values for total balance and available balance. The [query_balance_details](../../developers/json-rpc/json-rpc-informational.md#query_balance_details) RPC endpoint provides details on available balances and hold records.

:::note

A processing hold is not the same as a gas (or balance) hold. The processing hold is a temporary hold that prevents double spend. For example, if you want to do a transfer, you also need to cover the cost of the transfer.

:::

## Chainspec Configurations

The following chainspec configurations manage this feature:

-   `fee_handling` - Defines how fees are handled. To enable the "no fee" mode, set it to `{ type = 'no_fee'}`.
-   `refund_handling` Defines how refunds of the unused portion of payment amounts are calculated and handled. For this setting to work with the "no fee" mode, set it to `{ type = 'no_refund'}`. If no fees are transferred from the paying purse, no refunds need to be paid out.
-   `pricing_handling` - Defines how pricing is handled. For this setting to work with the `no_fee` mode, set it to `{ type = 'fixed'}`, which means that costs are fixed per the cost table, and senders do not specify how much they pay.
-   `validator_credit_cap` - The validator credit cannot exceed this percentage of their total stake.
- `gas_hold_balance_handling - Defines how gas holds affect available balance calculations. Valid options are 'accrued' (the sum of the full value of all non-expired holds) and 'amortized' (the sum of each hold is amortized over the time remaining until expiry).
-   `gas_hold_interval` - Defines how long gas holds last.

### Mainnet Condor Configurations

These are the fee elimination settings for the Condor release on Mainnet:
<!--TODO check and update these settings after the launch or link to the chainspec file directly.-->

```toml
# Defines how refunds of the unused portion of payment amounts are calculated and handled.
#
# Valid options are:
#   'refund': a ratio of the unspent token is returned to the spender.
#   'burn': a ratio of the unspent token is burned.
#   'no_refund': no refunds are paid out; this is functionally equivalent to refund with 0% ratio.
# This causes excess payment amounts to be sent to either a
# pre-defined purse, or back to the sender.  The refunded amount is calculated as the given ratio of the payment amount
# minus the execution costs.
refund_handling = { type = 'no_refund' }
# Defines how fees are handled.
#
# Valid options are:
#   'no_fee': fees are eliminated.
#   'pay_to_proposer': fees are paid to the block proposer
#   'accumulate': fees are accumulated in a special purse and distributed at the end of each era evenly among all
#                 administrator accounts
#   'burn': fees are burned
fee_handling = { type = 'no_fee' }
# If a validator would recieve a validator credit, it cannot exceed this percentage of their total stake.
validator_credit_cap = [1, 5]
# Defines how pricing is handled.
#
# Valid options are:
#   'classic': senders of transaction self-specify how much they pay.
#   'fixed': costs are fixed, per the cost table
#   'reserved': prepaid transaction (currently not supported)
pricing_handling = { type = 'fixed' }

# Defines how gas holds affect available balance calculations.
#
# Valid options are:
#   'accrued': sum of full value of all non-expired holds.
#   'amortized': sum of each hold is amortized over the time remaining until expiry.
#
# For instance, if 12 hours remained on a gas hold with a 24-hour `gas_hold_interval`,
#   with accrued, the full hold amount would be applied
#   with amortized, half the hold amount would be applied
gas_hold_balance_handling = { type = 'accrued' }
# Defines how long gas holds last.
#
# If fee_handling is set to 'no_fee', the system places a balance hold on the payer
# equal to the value the fee would have been. Such balance holds expire after a time
# interval has elapsed. This setting controls how long that interval is. The available
# balance of a purse equals its total balance minus the held amount(s) of non-expired
# holds (see gas_hold_balance_handling setting for details of how that is calculated).
#
# For instance, if gas_hold_interval is 24 hours and 100 gas is used from a purse,
# a hold for 100 is placed on that purse and is considered when calculating total balance
# for 24 hours starting from the block_time when the hold was placed.
gas_hold_interval = '24 hours'
```

## Computational and Storage Costs

Despite the introduction of fee elimination, the network continues to track computational cost based on opcodes as defined in the chainspec, thus retaining the [gas pricing mechanism](./gas-concepts.md). Opcodes enable Casper nodes to agree on the computational cost of transactions, commonly known as gas. This mechanism is a solution to the halting problem, and it abstracts the computational cost in a way that is deterministically consistent across multiple machines in a distributed network.

Storage costs are also tracked and calculated using gas. Data written to global state is recorded forever and has a cost; therefore, the network charges for the Wasm that stores data in global state.

This feature complements the [dynamic gas pricing](./dynamic-gas-pricing.md) model introduced and configured to scale gas costs based on network utilization.
