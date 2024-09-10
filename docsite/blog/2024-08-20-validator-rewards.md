---
title: validator rewards in Casper 2.0
description: A discussion of validator rewards under Casper 2.0
slug: condor-validator-rewards
date: 2024-08-20T18:00
authors: [ melpadden, alexanderlimonov ]
tags: [condor, validators]
hide_table_of_contents: false
---

# Validator rewards with Casper 2.0

## Economics of consensus

Proof of Stake consensus protocols explicitly impose an assumption that a critical portion of the validator set, by weight, remains honest. Normally, just as it is in Highway and will be in Zug, there is a requirement that at least 2/3 of the weight remain honest for the chain to continue to operate normally. 

Proof of Stake protocols do not typically describe the particular incentives that should keep validators honest, however, so some incentive scheme must be independently developed to ensure that the assumptions of the safety and liveness theorems actually hold. Such a scheme may directly reward some measure of performance within the protocol model, but an alternative model can choose to reward consensus-independent measures of chain performance, such as chain progress.

Incentive rewards in Casper come from issuance of new token at the end of each era, with quantity derived from an inflation parameter in the chainspec. The minted token are distributed in proportion to weight, assuming nominal performance of the chain.

## Casper 1.X Highway-specific incentives

The 1.0 rewards scheme introduced with Highway on mainnet is directly tied to the details of Highway consensus. Rewards are maximized when all validators regularly send messages necessary to finalize a block within a time limit in a particular round. 

Degrading platform performance by delaying block finalization is disadvantageous for all validators, even those not directly responsible for the delay, which is a means of aligning validator incentives with each other by discouraging censorship of consensus messages produced by others. 

The weakness of the 1.0 rewards model is that it is difficult to understand and maintain. Additionally, by focusing on a consensus-specific measure of performance, it does not directly incentivize the observable outcome that we actually care about, which is public knowledge of block finality.  

## Casper 2.0 

### Public knowledge of finality

A necessary outcome of a safe consensus process over possible histories of the chain is that all honest validators should have at least mutual knowledge of the canonical history. That is, each honest validator should believe that a particular history is the correct one, and this history should be the same for all validators.

This mutual knowledge is sufficient for validators to make further progress in building up the canonical history. However, for a user of the blockchain, establishing confidence in the correct operation of the protocol and the identity of the canonical history requires that the validators' knowledge of the canonical history be attested publicly.

In Casper, validators create and distribute finality signatures, which are cryptographically secure witnesses of their belief in the finality of a particular block. Under 1.X, however, these are not easily verifiable by users and play no role in the reward mechanism, despite being a critical tool for building user confidence in the canonical history. In 2.0, we propose to allocate rewards for creation and publication of one's own and other validators' finality signatures.

### Design

Rewards that promote public knowledge of finality naturally suggest rewarding publicly observable behaviors, rather than metrics only readily visible to the consensus component. This, together with the expected transition from Highway to Zug, naturally led to a system that rewards three publicly observable activities

* Block proposal
* Signature creation
* Signature publication

Note that we expect very little, if any, rewards to be allocated for block proposals on mainnet, but the feature remains available.

The rewards apportioned to a block, under nominal operating conditions, are the same as they are under 1.X, that is, they amount to total supply at last era's end multiplied by an inflation factor derived from the chainspec. "Nominal" here means that all rounds result in a finalized block and that all finality signatures are collected and published.

The rewards are apportioned to these three activities based on chainspec settings governing the split between block proposals and signature rewards, and, within signature rewards, between finality signature creation and publication.

Note that this split ensures that validators' incentives are aligned, in the sense that other validators' correct operation is beneficial for each validator. This is because each validator is rewarded for publishing other validators' signature, and because each validator benefits from other publishing its own signatures.

#### Expected rewards & volatility

Under nominal operating conditions, the total rewards for each validator will be proportional to weight in the long run. Depending on the particular values of the parameters governing the split between the three components of the rewards, short-run rewards can be more or less variable.

In the long run, with a stable validator set, each validator eventually produces a number of blocks proportional to its weight. Small validators can do months between producing a block, and will experience variable wait times between such occasions. However, each validator is supposed to produce signatures for each finalized block, so moving the allocation towards signature creation can reduce volatility.

#### Rewards formula

The rewards have three additive components, one for each observable activity we described in the previous section. The era rewards for a particular validator can be described using a simple formula, given below. Note that the formula does not exactly correspond to the actual on-chain calculation, for technical reasons we discuss in a further section.

Let us define some notation first

**N** - expected number of blocks in an era

**N*** - the *set* of observed blocks in an era

**R** - total potential reward pot for the era (i.e., nominal inflation based on chainspec and current supply)

**r** - fraction of reward pot dedicated to block production rewards

**f** - finder's fee for finality signatures

**I** - validator index set

**i**: **N*** -> {0,1} - indicator function for blocks produced by validator i (with abuse of notation)

**w**: **I** -> [0,1] - validator's weight

**W** - total weight of the validator set

**S**: **N*** -> **P(I)** - set of validators associated with finality signatures for a particular observed block

**s_i**: **N*** -> {0,1} - indicator functions for existence of finality signatures associated with validator i for particular observed blocks

Now, we can use our defined symbols to concisely describe era rewards for a particular validator

Era rewards for validator i = 

**Σ** (n in **N***) **i(n)** * (**rR/N**) (block production)

&#43; **Σ** (n in **N***) **i(n)** * **Σ** (j in **S(n)**) (**w(j)/W**) * (**f(1-r)R/N**) (finality signature publication)  

&#43; **Σ** (n in **N***) **s_i(n)** * (**w(i)/W**) * (**(1-f)(1-r)R/N**) (finality signature contribution)

The meanings of the three additive components in the formula above are, in order

* Sum over blocks, discarding blocks not proposed by this validator
  * For each block, add the per-block reward allocation for block proposals from the total pot for the era
* Sum over blocks, discarding blocks not proposed by this validator
  * For each block, sum over published signatures
    * For each signature, add the per-block reward allocation for signature publication from the total pot for the era, weighing each signature by its creator's proportion of total validator weight
* Sum over blocks, discarding those for which this validator did not create a signature
  * For each block, add the per-block reward allocation for signature creation from the total pot for the era, weighing it by the validator's proportion of total validator weight

#### Notes on implementation

In a real network, messages arrive with a delay. This means that we cannot guarantee that all finality signatures for an era will arrive in time to be used by the rewards calculation carried out in the switch block.

We solve this problem by allowing publication of finality signatures for a preceding era. As long as the validator set stays unchanged, in the long run the formula above is a near-exact representation of rewards. 

However, entry of new validators means that some of the publication rewards may be distributed among more validators than just those who participated in the era in which the signatures were created.

### Impact on validator revenue

No impact is expected on average validator rewards under nominal operating conditions. Note that shortfall in signature creation, or network issues preventing the propagation of such signatures, can reduce rewards, even for validators who honestly publish all incoming signatures and honestly create signatures for each block. Additionally, allocating more rewards to block proposals or finality publication can make the rewards more volatile.
