---
title: Overview
slug: /economics
---

# Overview of Casper Economics

Casper's economic activity can be conceptualized as taking place on four distinct layers: consensus, runtime, ecosystem, and the macroeconomy. Each layer, consensus and up, provides a foundation for the activity taking place on the next layer. A trust-less platform requires proper incentives for participants operating each layer to ensure they work together to unlock the platform's value.

This online documentation section is intended only to familiarize the user with the Casper core economics features rather than describe their precise implementation and user interface. Some of the features may not be currently active.

## Consensus {#consensus}

The consensus layer of the Casper Mainnet runs the [Zug](../design/zug.md) consensus protocol. The distinguishing characteristics of this protocol are its safety and liveness guarantees, speed, simplicity, and distributed nature. Blocks in the canonical history cannot be reverted (safety), and new blocks continue to be added to this history indefinitely (liveness). The safety and liveness guarantees require that honest validators comprise at least 67% of total validator weight. This required behavior must be incentivized for the platform to remain secure and live. Read the paper for more details: [From Weakly-terminating Binary Agreement and Reliable Broadcast to Atomic Broadcast](https://arxiv.org/abs/2205.06314).

When discussing consensus, we default to considering it "one era at a time" unless expressly stated otherwise. Recall that each era is a separate instance of the protocol.

### Agents (consensus layer) {#agents-consensus-layer}

_Validators_ are responsible for maintaining platform security by building an ever-growing chain of finalized blocks and backing this chain's security with their stakes. Their importance (often referred to as "weight") to protocol operation and security is, in fact, equal to their stake, including both their own and delegated tokens.

_Delegators_ are users who participate in the platform's security by delegating their tokens to validators, which adds to their weight and collecting a part of the rewards proportional to their delegations, net of a cut ("delegation rate") that is collected by the validator.

### Incentives (consensus layer) {#incentives-consensus-layer}

The _auction_ determines the composition of the validator set for each protocol era. It is a "first-price" (winning bids become stakes) auction with a fixed number of spots chosen to balance security with performance (generally, the platform will run slower with more validators). Because rewards are proportional to the stake, we expect this competitive mechanism to provide a powerful impetus for staking as many tokens as possible.

_Rewards_ (per era) are issued to validators who perform at their nominal pace in such a way as to make timely progress on block finalization. These rewards are shared with delegators proportionally to their contributions, net of a cut taken by the validator.

_Evictions_ deactivate validators who fail to participate in an era, deactivating their bid and suspending their participation until they signal readiness to resume participation by invoking a particular entry point in the auction contract.

## Runtime {#runtime}

<!-- TODO provide specific wording that reflects the new dynamic pricing system for "spot" gas (you may have heard references to this as "block vacancy")-->
The runtime layer encompasses the installation and execution of smart contracts, and other activities that alter the network's global state. This suggests potential markets for finite platform resources, such as markets for computing time and storage. Such markets could ensure that resources are allocated to their highest-value uses. Currently, however, we limit ourselves to [metering computing time](../design/casper-design.md#execution-semantics-gas), measured as gas. Gas can be conceptualized as the relative time use of different Wasm operations and host-side functions. The use of storage is also presently assigned a gas cost. A dynamic pricing system assigns the gas price and is described in more detail [here](./gas-concepts.md).

The initial Mainnet transaction selection mechanism is based on FIFO.

We expect to continue to work on runtime resource markets.

### Agents (runtime layer) {#agents-runtime-layer}

_Validators_ again play a vital role in this layer since protocol operation includes the construction and validation of new blocks, which consist of transactions that change the global state, which the validators also maintain.

_Users_ execute session and contract code using the platform's computational resources

### Incentives (runtime layer) {#incentives-runtime-layer}

The Casper node software can be configured to support various fee, refund, and cost-handling strategies. The Condor release on Mainnet has enabled a [fee elimination](./fee-elimination.md) model by default, setting the `no_fee`,`no_refund`, and `fixed` pricing configurations in the network's chainspec.

The `no_fee` mode means the token is put on hold instead of being taken from the payer. The hold interval is configured in the chainspec. The hold release mechanism is based on the "accrued" or "amortized" settings in the chainspec. Accrued holds are released after a certain amount of time has passed. Amortized holds are released using a linear schedule over a specified period.

The `no_refund` mode means no refund is handled when fees are eliminated.

Fixed pricing means the gas costs are determined using a cost table, and transactions are put in the appropriate lanes for execution. You can find more details about lanes [here](./runtime.md#lanes-lanes).

When fees are eliminated, the block proposer receives validator credits instead of transaction fees. These credits contribute to the validator's total weight, determining their chances of winning a slot in the next era. Validators get rewards for proposing a block and creating and publishing finality signatures. In essence, gas/balance holds ensure that the network still compensates validators for their computations.

The fee elimination model is different than the refund model introduced on Mainnet with release 1.5.6 and has replaced the refund behavior. Since all these behaviors are configurable, [private networks](../../operators/setup-network/create-private.md) can set their fee, refund, and pricing strategies.

## Ecosystem {#ecosystem}

The ecosystem layer encompasses dApp design and operation. Casper Labs maintains multiple partnerships with prospective dApp developers, and we anticipate devoting significant resources to research the economics of prospective dApps.

## Macroeconomy {#macroeconomy}

Casper's macroeconomics refers to the activity in the cryptocurrency markets, where CSPR can be treated as one crypto-asset among many rather than a computational platform. Our token economics differ from those of "digital gold" tokens like Bitcoin, which is designed to be scarce. Our tokens are minted on a fixed starting basis, accounted for by tokens distributed to genesis validators, employees, and community members, and held for future distributions. The total supply of tokens grows at a fixed annual percentage rate on this basis.

The inflationary nature of our macroeconomics has two significant advantages over enforced scarcity. Inflation incentivizes token holders to stake or delegate their tokens, which we explicitly support with our delegation feature. Additionally, because Casper is a general-purpose computing platform, it is essential to supply tokens to support actual economic activity and discourage hoarding tokens in expectation of speculative gain.
