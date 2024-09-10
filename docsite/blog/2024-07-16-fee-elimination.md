---
title: Fee Elimination in Condor
description: A discussion of the Fee Elimination feature in Casper 2.0
slug: condor-fee-elimination
date: 2024-07-16T22:00
authors: [ dylanireland, melpadden ]
tags: [condor, features, tokenomics]
hide_table_of_contents: false
---
# Fee Elimination on Casper 2.0

The Casper 2.0 (aka Condor) network upgrade introduces new options to the way a Casper Network can be configured to handle gas consumption. Scheduled along with the release of Condor into Mainnet is a change in the configuration of the Casper Network to use a model known as **Fee Elimination** for gas payments. The purpose of this article is to introduce this model, and describe how Fee Elimination will affect the behavior of the Casper Network once Condor is released.

<!-- truncate -->

## Concepts
Public distributed blockchain networks that support smart contracts generally employ a concept known as "[gas](https://docs.casper.network/concepts/glossary/G/#gas)", which can be thought of as "the ability to do work on-chain". The problem addressed by this mechanism is that **any finite resource on a publicly accessible computer network must be rate-limited**, because a resource made available without limit is a denial of service attack vector. 

Gas is acquired in finite quantities and used to meter and limit resource consumption by individual transactors. A transactor's available gas is consumed by their on-chain usage of computation, data storage, and possibly other chain-specific resources. The public Casper Network and its testnet have used such a gas model since their geneses.

## Payment, Gas Price, Fees
On Casper 1.x, every transaction is subject to gas consumption. The transactor must specify an amount of token that is converted to gas and used to pay for execution. All gas consumed in each block is allotted to the [proposer](#proposer) of that block in the form of transaction [fees](#fees). The model also includes tables to allow calculation of gas costs, and support for some portion of unconsumed gas to be refunded to transactors. We refer to these concepts using the following terms:

* **Gas Limit**: An amount of gas, specified by the transactor, at which to cancel a transaction.
* **Gas Price**: The network gas price; the ratio between the cost of 1 unit of gas and 1 mote.
* **Gas Cost**: The amount of gas needed to pay for execution of a transaction.
* **Payment**: The amount of token specified by the transactor to pay for the execution of a transaction.
* **Refund**: All or a portion of the remaining token after gas is purchased for execution.

> 
> The Casper node software supports a number of configurable options which govern how gas may be calculated for a given transaction. A discussion of these is outside the scope of this article. This article is concerned with how these gas costs are dealt with, once calculated. Gas cost options will be the subject of another article.

## Fee Elimination

> __Fee Elimination is the strategy of placing temporary holds on transactor balances corresponding to their incurred gas costs, instead of taking those costs from their on-chain balances__.

Under 1.x, transactors must pay for gas directly from their purse balances. With Fee Elimination on Casper 2.0, a hold is placed on the calculated **Gas Cost** for a configurable period of time known as the **Hold Period**. Fees are therefore not forfeited by transactors, and funds are not spent to execute transactions.

### Holds

A hold may be thought of as a temporary freeze on some portion of the funds in an account. The funds never leave the purse upon which the hold is placed, but the owner of those funds may not spend them as long as the hold is in effect, and the funds held are not counted towards the available balance of that purse. 

### Hold Release

The Casper Node 2.0 software currently supports two hold release models: **Accrued** and **Amortized**. 

> 
> The Condor node architecture allows for any time-based function to be developed and used to calculate hold releases. However, for simplicity, this article will deal with the two currently available options.

#### Accrued
100% of the hold is held until the hold expires. At any given point in the duration of the hold, the effective amount of the hold is 100%. At expiry, all of the funds are again made available to the transactor.

#### Amortized
The effective amount of the hold is reduced linearly over the course of the hold duration. At any point in the duration of the hold, the effective hold *amount* is proportional to the percentage of the hold *duration* that remains before expiry. 

For example, if:
- A hold of 180 CSPR is placed on an purse which holds 1000 CSPR
- The configured hold period is 90 days
- The hold release model is configured to use amortization

Then, 9 days after the hold was placed, the current effective amount of the hold may be calculated by 
 - $\frac{\text{Hold Duration} - \text{Time Elapsed}}{\text{Hold Duration}} = \frac{90 - 9}{90} = 0.9$
 - Multiplied by the hold amount: $180 \times 0.9 = 162$

The effective balance in that purse, at that point in time, is $1000 - 162 = 838 \ \text{CSPR}$

Over the course of the hold's duration, this calculation gives us:
| Hold Amount | Hold Period | Time Elapsed | Effective Hold |
| --- | --- | --- | --- |
| 180 | 90 | 1 | 178 |
| 180 | 90 | 9 | 162 |
| 180 | 90 | 45 | 90 |
| 180 | 90 | 89 | 2 |

### More about Gas holds 
The duration of gas holds is defined [here](https://github.com/casper-network/casper-node/blob/feat-2.0/resources/production/chainspec.toml#L166) in the [casper-node](https://github.com/casper-network/casper-node) chainspec:

```toml
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


### Preventing Exploitation
The ultimate goal of any gas mechanism is to prevent exploitation of a network's resources. Aside from incentivizing validators, there is no fundamental reason to charge users for making transactions if their honesty can be guaranteed. By designing a system that disincentivizes wasteful transactions without charging a fee, resistance to exploitation can be maintained while allowing users to transact freely.

However, any gas mechanism that doesn't charge users could be vulnerable to denial-of-service attacks. Provided a large enough bankroll, a user could deploy enough transactions to slow the network for the amount of time needed for his or her previous gas payments to unlock, and use these unlocked funds to deploy more transactions, and thus repeat the process ad infinitum. In this way, one could theoretically deploy infinite transactions, cycling through their locked and unlocked balances. 

Attacking the network in this way is a challenge of economic feasibility, much like many other aspects of blockchains. To prevent an attack like this from taking place, it must be made prohibitively expensive to mount such an attack, with little to no incentive to the attacker. Casper's approach involves using a long locking period, combined with 16 second blocktimes. The Casper 2.0 mainnet is slated to roll out with a 30 day locking period, but if increased, the cost to attack would scale linearly.

Considering a token locking period of 30 days and the **Accrued** unlocking schedule, purchasing just 1% of the total block space of each block would cost:

$\frac{T}{B} \cdot \frac{G}{100} = 5,346,000 \, \text{CSPR}$

Where:

* `T` = 30 day locking period
* `B` = 16 second blocktime
* `G` = 3300 CSPR block gas limit

If this proves to be too cheap, the locking period can be extended or the block gas limit increased.

#### Opportunity Cost
In addition to the necessity to maintain large amounts of CSPR token in order to facilitate a DoS attack as laid out above, any prospective attacker would also incur the opportunity cost of being unable to use their CSPR for the duration of the hold period. Simply put, while their CSPR is locked up attacking the network, it cannot be used to earn rewards by staking. Given the amount of CSPR necessarily involved, and assuming any non-trivial potential annualized return on staking CSPR tokens, the ratio of opportunity cost of mounting such an attack versus the incentive to do so swiftly becomes prohibitively high. 

### Incentivizing Validators

The Casper Network, like any truly decentralized blockchain, allows nodes to act in their greatest economic interest when it comes to validating transactions. The purpose of this is to incentivize validators as much as possible, encouraging more to come online. Part of the income a validator earns comes from fees paid by a deployer, which entices validators to pick up their transactions. When no fee is paid by the deployer at all, however, another incentive must be provided to the validators.

Casper's solution is quite simple, but requires understanding how validators are selected and compensated. On Casper Networks, 100 validators are weightily selected to validate all the blocks within the current "[era](https://docs.casper.network/concepts/glossary/E/#era)", which advances every 2 hours. At the end of each era, validator rewards are calculated, put into a pot, and distributed to validators based on the amount of token staked by each. Additionally, a "validator credit" is added to validators who propose populated blocks, proportional to the size of the blocks they propose. This validator credit is then applied to the payout scheme, awarding more of the pot to the hardest-working nodes. Additionally, the validator credit is considered as additional staking weight for the next era when the next [booking block](https://docs.casper.network/concepts/glossary/B/#booking-block) appears.

## Looking Forward

By introducing Fee Elimination to the Casper Network, we hope to make transacting with the blockchain more accessible and less financially cumbersome. With this new model, interacting with smart contracts can become effectively free for users, inviting larger audiences to participate in new and exciting protocols.

As the model is rolled out to Casper's mainnet and testnet, economists and engineers will study its effects on Casper's transaction economy. The data observed will be used to devise proposals and improvements, need they be implemented.

---
### Further Reading/Terms

#### Proposer
A validator proposing a block to the network for execution  
[Consensus](https://docs.casper.network/concepts/economics/consensus/)  
[Validator](https://docs.casper.network/concepts/glossary/V/#validator)

#### Fees
A portion of a transaction's gas costs given over to the proposer of the block containing that transaction.  
[Gas Concepts](https://docs.casper.network/concepts/economics/gas-concepts/)  
[Runtime Economics](https://docs.casper.network/runtime/)  
[Validator Rewards](https://docs.casper.network/concepts/glossary/R/#reward)
