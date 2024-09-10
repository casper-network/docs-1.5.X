---
title: Rewards Design
---

# Network Participation Rewards

Validators receive rewards for participating in consensus and thus securing the network. Delegators also receive rewards indirectly by staking with a validator. This page serves as an introduction to how the rewards are calculated and distributed. For more details, refer to the corresponding CEP. <!-- TODO Link here to the future CEP. -->

Like other Proof-of-Stake chains, a Casper network rewards validators for participating in building a linear chain of blocks, each containing ordered state changes and ensuring that the entire ecosystem of validators, builders, and users eventually achieve common knowledge of the chain's history. External, non-validator participants in the ecosystem can thus have a high degree of confidence on the canonical history of the blockchain's state, thus making the blockchain economically useful.

The network uses a new reward scheme that does not depend on the details of the consensus protocol and is compatible with both [Zug](./zug.md) and [Highway](./highway.md). The current reward scheme has the following properties:

- Rewards are proportional to a validator's weight on average.
- The reward scheme incentivizes cooperation.
- Rewards are distributed at the end of an era for all blocks in that era and several eligible blocks from the previous era.
- Reward calculations depend only on the linear structure of the blockchain and published finality signatures, rather than any internal details of the consensus protocol.
- Reward calculations assume a known constant token supply inflation with nominal platform operation.

Previously, with Highway, the reward scheme incentivized block production and participation in their finalization. Unfortunately, this scheme was highly coupled with the consensus protocol and unsuitable for adaptation with the Zug consensus. The current scheme calculates rewards after blocks have been finalized, as described below.

## Calculating Rewards

The execution engine calculates rewards for block production and finality signature generation and distribution in each switch block. Finality signatures are produced after a block has been finalized by consensus. Thus, rewards are independent of the consensus algorithm used. Block proposers collect those finality signatures and include them in future blocks. The rewards scheme allows blocks to cite finality signatures for several past blocks so that validators can agree on which finality signatures have been produced and should be rewarded. This mechanism to "look back" is necessary because signatures cannot be distributed instantly.

Rewards are divided into these categories:

- **Block rewards**: These rewards are received for each proposed block that is finalized. They incentivize timely participation in building the chain.
- **Finality signature rewards**: These rewards are received for collecting finality signatures for each block and generating a finality signature to sign a block. They incentivize the creation, propagation and publication of finality signatures, which is critical in establishing common knowledge of the canonical chain.

In each round, a total reward pool is shared among all participating validators proportionally to their weight, as long as all validators fully participate in the processes that are rewarded by this mechanism. These processes are block creation, signature creation, signature propagation and signature publication as part of block proposals. 

The `round_seigniorage_rate` setting in the chainspec determines the total reward pool for a block. This value, along with the current total supply and minimum round length, is used to compute the full allocation of rewards for a particular block. The rate itself is set to result in a target annual inflation, provided validators fully participate in the rewardable processes described above.

Each switch block triggers a reward calculation. To account for potential network lag delaying the timely arrival of signatures for finalized blocks, the calculation "looks back" into previous eras. In particular, this enables rewards for switch blocks, which was impossible with the prior Highway-specific calculation. The number of prior blocks to look up is specified using the `signature_rewards_max_delay` setting in the chainspec.

Blocks carry information on their proposer and the finality signatures collected for several past blocks, the depth being determined by the `signature_rewards_max_delay` parameter. Global state contains data on token supply and validator weights as part of the Mint and Auction states. Based on these inputs, the rewards are calculated according to a formula. Rewards are designed to be proportional to weight on average, as long as blocks are created and the finality signatures are propagated and published in a timely manner. <!-- TODO Link to the formula in the CEP or elsewhere -->

Validators are motivated to produce, propagate and publish (i.e., include in the block body) finality signatures as quickly as possible. If they do not include a finality signature in a block, the next validator can include it in their block and get the collection fee.

### Chainspec settings for calculating rewards

Each Casper network chainspec contains 4 settings related to calculating rewards:

- `finality_signature_proportion`: The proportion of baseline rewards going to reward finality signatures, rather than block proposal rewards.
- `finders_fee`: The proportion of the rewards allocated to finality signatures that are due for signature publication in a block proposal.
- `signature_rewards_max_delay`: The number of prior blocks to include for the reward calculation.
- `round_seigniorage_rate`: Setting that calculates the fraction of the total supply that will constitute the reward pool for every round.

<details>
<summary><b>Expand to see sample values</b></summary>

```json
# The split in finality signature rewards between block producer and participating signers.
finders_fee = [1, 5]
# The proportion of baseline rewards going to reward finality signatures specifically.
finality_signature_proportion = [1, 2]
# Lookback interval indicating which past block we are looking at to reward.
signature_rewards_max_delay = 3
...
# Round seigniorage rate represented as a fraction of the total supply.
#
# Annual issuance: 8%
# Minimum block time: 2^14 milliseconds
# Ticks per year: 31536000000
#
# (1+0.08)^((2^14)/31536000000)-1 is expressed as a fractional number below
# Python:
# from fractions import Fraction
# Fraction((1 + 0.08)**((2**14)/31536000000) - 1).limit_denominator(1000000000)
round_seigniorage_rate = [7, 175070816]
```

</details>


### Rewards distribution summary

The following steps summarize the rewards distribution mechanism.

Each round has a reward pool calculated from the `round_seigniorage_rate` chainspec parameter and the current total supply for the relevant era.

In each round, the reward pool is split into two parts for block proposals and finality signature rewards, based on the `finality_signature_proportion` chainspec parameter. 

The amount allocated for finality signatures is split further into two parts: creating and publishing finality signatures. The split is configurable in the chainspec using the `finders_fee` chainspec parameter. 

For each finality signature:
- The creator gets a portion of what was allocated for creating signatures, in proportion to relative consensus weight.
- The block proposer gets a portion corresponding to the `finders_fee` chainspec parameter, scaled by the total collected signature creator weight divided by the total weight in the relevant era.

![Rewards Pot](./rewards/rewards-pot.png)

The rewards calculation takes place at the end of an era. In addition to rewarding everything in that era, the algorithm also looks back into blocks from the previous era, depending on the `signature_rewards_max_delay` parameter, to compensate for the delay in creating and distributing finality signatures.
