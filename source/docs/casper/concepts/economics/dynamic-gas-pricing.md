---
title: Dynamic Gas Pricing
---

# Dynamic Gas Pricing on Mainnet

The Condor release introduced a configurable capability to calculate dynamic gas prices based on block vacancy (or consumption). The network chainspec configures the `vacancy`, as shown below, which refers to this feature. This capability prevents malicious actors from filling the blocks with useless transactions and ensures network integrity.

When dynamic gas pricing is enabled, a calculation runs at the end of each era to average block usage within that era. This calculation determines the gas price the network will use for the next era. If overall consumption rises above a threshold, the gas price increases by 1. If consumption falls below a threshold, the gas price decreases by 1. The gas price remains the same if overall consumption remains within those thresholds. The gas price will not go up or down by more than 1 in a given era and will not go above the maximum or below the minimum threshold.

The gas price is recorded in the block header and is easily discoverable for current and historical purposes. The current gas price is a multiplier that determines the actual gas cost. For instance, an operation with a base cost of 1 CSPR would cost 1 CSPR if the current gas price is 1 but would cost 2 CSPR if the current gas price is 2. As blocks become congested, the amount of CSPR required to obtain a slot for executing transactions will increase by a multiple. The following configuration settings control this behavior:

- `upper_threshold` - The threshold to decrease gas price
- `lower_threshold` - The threshold to increase gas price
- `max_gas_price` - The maximum gas price
- `min_gas_price` - The minimum gas price


### Mainnet Condor Configurations

These are the block vacancy (dynamic gas pricing) settings for the Condor release on Mainnet. Before Condor, the gas price was 1, meaning 1 unit of gas cost 1 mote. With Condor, the multiple is configured to adjust between 1 and 3.

<!--TODO check and update these settings after the launch or link to the chainspec file directly.-->

```toml
[vacancy]
# The cost of a transaction is based on a multiplier. This allows for economic disincentives for misuse of the network.
#
# The network starts with a current_gas_price of min_gas_price.
#
# Each block has multiple limits (bytes, transactions, transfers, gas, etc.)
# The utilization for a block is determined by the highest percentage utilization of each these limits.
#
# Ex: transfers limit is 650 and transactions limit is 20 (assume other limits are not a factor here)
#     19 transactons -> 19/20 or 95%
#     600 transfers -> 600/650 or 92.3%
#     resulting block utilization is 95
#
# The utilization for an era is the average of all block utilizations. At the switch block, the dynamic gas_price is
# adjusted with the following:
#
# If utilization was below the lower_threshold, current_gas_price is decremented by one if higher than min_gas_price.
# If utilization falls between the thresholds, current_gas_price is not changed.
# If utilization was above the upper_threshold, current_gas_price is incremented by one if lower than max_gas_price.
#
# The cost charged for the transaction is simply the gas_used * current_gas_price.
upper_threshold = 90
lower_threshold = 50
max_gas_price = 3
min_gas_price = 1
```

## Fixed Transaction Costs vs. Dynamic Gas Prices

The current gas price and the slot’s maximum gas cost determine how much CSPR gets locked up for a transaction. Thus, the transaction price is predictable and fixed but has a dynamic component in that it’s pegged to the gas price. The system is designed this way to protect the network, adjusting the gas price as needed. Read more about lanes and gas cost [here](./runtime.md#lanes-and-gas-costs-lanes). Also, the `pricing_handling = { type = 'fixed' }` setting is described [here](./fee-elimination.md).

## Gas Tolerance

:::caution
The cost of interacting with the blockchain increases during high network usage. Plan accordingly for any transactions and use the gas_tolerance field described below.
:::

Transactions have a `gas_tolerance` field, allowing the sender to specify the maximum gas price they are willing to pay (the minimum is 1). For instance, if a transaction is sent with `gas_tolerance = 2` and the network is currently at a gas price of 3 or higher, that transaction will not be included in a proposed block. If the calculated gas price decreases to 2 before the transaction has expired, the transaction will be eligible for inclusion in a proposed block.