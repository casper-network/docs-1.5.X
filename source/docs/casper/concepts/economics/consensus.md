---
title: Consensus
---

# Consensus Economics

[Casper consensus](../design/consensus.md) is a continuous, trustless process where a fixed set of validators engage in scheduled communication to advance the linear chain of finalized blocks, representing the history of changes in the global state of the blockchain. The fixed set of validators may change at each era boundary. The economics of this layer revolve around validator selection and incentivization of participation according to the schedule.

## Validator Selection {#selection}

After genesis, the system selects a set of validators using a stake auction process. The auction takes place in the last block of an era, also called a switch block. An auction contract governs the validator selection process, and a _chainspec_ configuration file specifies a few key parameters:

-   The `auction_delay` specifies the amount of time that needs to pass before the system enables a new set of validators. For example, the _auction_delay_ is 1 for Mainnet. Therefore, after a delay of 1 era, the winning validators become the validating set for the new era.
-   The `validator_slots` parameter specifies how many validators can win an auction. The auction selects a fixed number of validators based on their highest bids.

### Bids {#bids}

Each bid is a collection of tokens from a prospective or current validator and its delegators, considered in the auction as a single total. Bids and delegations can increase freely, but withdrawals are subject to an unbonding period governed by the `unbonding_delay` chainspec parameter. Tokens that are in the unbonding period are not part of the sum total considered in the auction. Consequently, the exact amount of the bid, which translates into protocol weight for winning validators, can vary within an era. The bids are visible in the switch block that determines the winners.

Each bid contains a delegation rate and activity status. The delegation rate can change at any time. Both of these properties are described further in this document.

### Delegation {#delegation}

Delegation allows third parties to participate in consensus by adding weight to their preferred validators. Rewards received by validators are distributed in proportion to tokens bid and delegated. The current or prospective validator responsible for the bid receives a portion of the delegator rewards set by the delegation rate.

Currently, there are delegation limits in the chainspec. Visit the [Delegating Tokens](../../users/delegating.md) page for more details.

## Incentives {#incentives}

The correct operation of the consensus protocol requires the platform's economics to discourage equivocation (signing conflicting consensus messages) for safety and incentivize participation for liveness. Participation consists of on-time block proposals and timely responses to block proposals.

Safety may be incentivized through slashing for equivocation. This feature is currently disabled but may be reactivated in the future.

The network incentivizes participation by issuing [rewards](../design/rewards.md) to validators for proposing blocks and creating and publishing finality signatures. Delegators also receive rewards by [staking](./staking/concepts.md) with a validator. All rewards are added directly to the corresponding bids and delegations.

### Validator Participation {#participation}

The issuance of new tokens and their distribution to validators incentivizes participation even when there is a low transaction load.

CSPR is issued at a fixed rate and distributed to validators (and, indirectly, delegators) in proportion to their stake. This is analogous to block rewards in Proof-of-Work blockchains, outlining the following:

-   The growth of CSPR supply is exponential
-   Issuance takes into account slashed CSPR

With slashing disabled, we can compute block rewards starting with the formula below, where we have these parameters:

-   `i` - the era's index as a positive integer \[0, 1, 2, \..., n\]
-   `initial_supply` - the number of CSPR at genesis
-   `issuance_rate` - the annual rate at which new CSPR tokens are minted
-   `ticks_per_year` - the number of milliseconds in a year equal to 31,536,000,000

```
supply(i) = initial_supply * (1 + issuance_rate)^(tick_at_era_start(i) / ticks_per_year)
```

We introduce the _round issuance rate_ (corresponding to the chainspec parameter `round_seigniorage_rate`) with this formula:

```
round_issuance_rate = (1 + issuance_rate)^(2^minimum_round_exponent / ticks_per_year) - 1
```

The _round issuance rate_ is the annual issuance rate adjusted to a single round of length determined by the chainspec parameter `minimum_round_exponent`. For illustration, an exponent of 14 corresponds to a round length of roughly 16 seconds.

Finally, the base round reward is computed as:

```
base_round_reward(i) = round_issuance_rate * supply(i)
```

This value gives us the maximum amount of CSPR that the validators can collectively receive from a proposed block.

### Rewards Distribution {#distribution}

Validators receive rewards for proposing blocks and creating and publishing finality signatures. Each round has a reward pool, mostly allocated toward creating and publishing finality signatures. There is also a small portion of rewards allocated to the block proposals.

The concept of validator weight is crucial in understanding the distribution scheme:

- **Weight:** A validator's bonded stake, which affects rewards distribution since rewards are proportional to a validator's weight on average
- **Assigned weight of a round:** The total weight of validators scheduled to participate in a round
- **Participated weight of a round:** The total weight of validators that participated or sent messages before the end of the round
- **Relative weight**: A validator's weight relative to the total validator weight that participated in a round

The rewards allocated for finality signatures are split between creating and publishing the signatures. These rewards are proportional to the weight of the signing validators for both the signers and the finders. A finder's fee determines how the split happens. To summarize:

- For each finalized block, there is a fraction of rewards due for signature creation and collection
- Signature rewards are split between the finder (block proposer) and the signature creators
- The signature creators get a part of the signature reward pot due for the block: `(1 - finder's fee) * relative weight`
- The finder gets a small reward as well to incentivize collecting and reporting all the signatures: `finder's fee * total relative weight of signatures collected`

The rewards calculation takes place at the end of an era. In addition to rewarding everything in that era, the algorithm also looks back into blocks from the previous era to compensate for the delay in creating and distributing finality signatures. Review the [Rewards Design](../design/rewards.md) page for more details.

### Validator Inactivity {#inactivity}

Validators who send no messages during an entire era are marked as inactive and cease participating in the auction until they send a special transaction that reactivates their bid.

## Founding Validators {#founding-validators}

When launching a new Casper network, founding validators are subject to token lock-up, which prevents them from withdrawing any tokens from their bids for 90 days. Then, the network releases their genesis bid tokens in weekly steps, linearly, over an additional 90 days.
