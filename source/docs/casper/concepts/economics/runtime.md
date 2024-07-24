---
title: Runtime
slug: /runtime
---

# Runtime Economics

The economics of the runtime layer should incentivize efficient allocation of computational resources, primarily CPU time, to users. The Condor release has introduced several new economic features:

- A new mode of paying for computation in Mainnet, where tokens previously assessed as fees are now held for a predetermined period. Held tokens become available to users at the expiry of a predetermined time, or on a linear schedule over a specified period. Note: Increasing the duration of holds reduces the long-run equilibrium average available CSPR balance for an attacker. See [Fee Elimination](./fee-elimination.md) for more details.
- A form of [dynamic pricing](#dynamic-gas-pricing) that increments or decrements the gas price in motes for a new era depending on blockchain utilization in the previous era.
- Blocks are structured into [lanes](#lanes-lanes) that can only hold a particular number of transactions of specified types.

These economic features are configurable using chainspec parameters.

<!--TODO add state pruning on this page? -->

## Gas Allocation {#gas-allocation}

Any finite resource on a publicly accessible computer network must be rate-limited, as, otherwise, overuse of this resource is an attack vector \-- a minimal requirement for platform security. However, rate-limiting, implemented on our platform as a simple block gas limit with several lanes, leaves the platform with the problem of fairly and efficiently allocating the [gas](./gas-concepts.md).

We are researching the optimal structure for spot and futures gas markets, and interested readers should consult the relevant [CEPs](https://github.com/casper-network/ceps). In the meantime, this section outlines some basic features of the platform that would underpin any allocation scheme. Currently, gas is allocated according to a first-in, first-out transaction model.

### Consensus before execution & basics of payment {#consensus-before-execution--basics-of-payment}

The Zug and Highway protocols reach consensus on a block before it is executed, introducing a subtle difference from platforms like Ethereum. In addition, transactions sent to a Casper network can only be selected based on claimed rather than used gas.

Additionally, a minimal amount of CSPR must be present in the user account or contract's main purse to cover the payment computation. The community may introduce additional balance checks in the future.

### Costs and limits {#costs-and-limits}

Gas cost is a measure of the relative time used by different primitive operations of the execution engine, which is also assumed to be additive. By additivity, we mean that the time to execute a program is approximately proportional to the sum of gas expended by the opcodes and functions called within the program. Casper assigns gas costs to primitive execution engine opcodes and specific, more complex _host-side_ functions that are callable from within the execution engine context. Gas costs for opcodes and host-side functions are specified in the [chainspec](../glossary/C.md#chainspec) and may vary according to arguments. Read more about how Casper measures computational work [here](../../concepts/design/casper-design.md#measuring-computational-work-execution-semantics-gas).

We expect to refine the current gas cost table to more closely reflect time use, with updates introduced in future upgrades.

### Lanes and gas costs {#lanes}

There are several platform parameters that delineate the sets of transactions that may be included in a valid block:

- **Number of lanes and lane types**
   - System interaction lanes for Mint (transfers) and Auction transactions.
   - WASM lanes serving transactions that carry opaque WASM. These lanes come with different slot sizes. Users need to specify a fixed quantity of gas for a transaction.
   - All lanes can contain some finite number of transactions, set separately for each lane.
   - For a call to a smart contract, the gas cost is always the same (given the transaction category), but the amount of CSPR that gets locked depends also on the gas price at the time.
- **Block gas and size limits**
   - The block gas limit imposes an absolute ceiling on how much gas can be allocated to the occupied slots.
   - The block size limit imposes an absolute ceiling on the total byte size of included transactions.
   - Individual transaction size limits are also enforced.

These are the lane configuration settings for the Condor release on Mainnet:
<!--TODO check and update these settings after the launch or link to the chainspec file directly.-->

```toml
[transactions.v1]
# The configuration settings for the lanes of transactions including both native and Wasm based interactions.
# Currently the node supports two native interactions the mint and auction and have the reserved identifiers of 0 and 1
# respectively
# The remaining wasm based lanes specify the range of configuration settings for a given Wasm based transaction
# within a given lane.
# The maximum length in bytes of runtime args per V1 transaction.
# [0] -> Transaction lane label (apart from the reserved native identifiers these are simply labels)
# Note: For the given mainnet implementation we specially reserve the label 2 for install and upgrades and
# the lane must be present and defined.
# Different casper networks may not impose such a restriction.
# [1] -> Max transaction size in bytes for a given transaction in a certain lane
# [2] -> Max args length size in bytes for a given transaction in a certain lane
# [3] -> Transaction gas limit size in bytes for a given transaction in a certain lane
# [4] -> The maximum number of transactions the lane can contain
native_mint_lane = [0, 1024, 1024, 65_000_000_000, 650]
native_auction_lane = [1, 2048, 2048, 362_500_000_000, 145]
wasm_lanes = [[2, 1_048_576, 2048, 1_000_000_000_000, 1], [3, 344_064, 1024, 500_000_000_000, 3], [4, 172_032, 1024, 50_000_000_000, 7], [5, 12_288, 512, 1_500_000_000, 15]]
```

These are the block gas and size limits for the Condor release on Mainnet:
<!--TODO check and update these settings after the launch or link to the chainspec file directly.-->

```toml
[transactions]
...
# Maximum block size in bytes including transactions contained by the block.  0 means unlimited.
max_block_size = 5_242_880
# The upper limit of total gas of all transactions in a block.
block_gas_limit = 3_300_000_000_000
```

## Dynamic Gas Pricing

A [dynamic gas pricing](./dynamic-gas-pricing.md) system assigns the gas price based on block vacancy (or consumption), preventing malicious actors from flooding the network with useless transactions and ensuring network integrity. Dynamic gas pricing acts as a supply and demand-based check on the cost of network usage. If usage is low, the price multiple drifts down over time, incentivizing casual usage. If usage is high, the price multiple climbs up, incentivizing prioritized usage. Dynamic gas pricing also protects against long-range consumption attacks. An attacker attempting to fill blocks to deny usage drives the price up, which requires them to have increasing amounts of tokens available to cover rising gas costs to maintain their attack.

## Eliminating Gas Fees {#gas-fees}

See [Gas](./gas-concepts.md) and [Fee Elimination](./fee-elimination.md) for more details.
