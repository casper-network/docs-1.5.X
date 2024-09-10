---
title: What is Casper?
slug: /
---

## What is Casper? {#what-is-casper}

Casper is a [Turing-complete](../concepts/glossary/T.md#turing-complete-blockchain) smart-contracting platform, backed by a Proof-of-Stake (PoS) consensus algorithm and WebAssembly (Wasm). The network is a [permissionless](../concepts/glossary/P.md#permissionless), decentralized, public blockchain.

The network's consensus protocol is called [Zug](./design/zug.md), and it has several benefits over classic Byzantine Fault Tolerant (BFT) consensus protocols. First, Zug allows networks to reach higher thresholds of _finality_, meaning that every block gets finalized within seconds, as fast as the network connections allow. Second, the protocol achieves flexibility by expressing block finality in ways not possible in BFT models. This protocol is built on the following research: [From Weakly-terminating Binary Agreement and Reliable Broadcast to Atomic Broadcast](https://arxiv.org/abs/2205.06314).

Additionally, the Casper Network is optimized for enterprise and developer adoption. While leveraging blockchain technology, the network seeks to accelerate business operations via unique features like predictable network fees, upgradeable contracts, on-chain governance, privacy flexibility, and developer-friendly languages. Casper's [core features and strengths](../resources/build-on-casper.md) enable developers and enterprises to reap the benefits of blockchain technology.

Casper also solves the scalability trilemma. Notably, the network is optimized for security, decentralization, and high throughput. All this is achieved while evolving to provide leading solutions for open-source projects and enterprises.

## How does Casper work? {#how-does-casper-work}

Casper relies on a group of validators to verify transactions and uphold the network. Unlike Proof-of-Work networks, which need to centralize validators for economies of scale, Casper allows for the geographical decentralization of validators. Casper validators verify transactions based on staked tokens and receive CSPR rewards for participating in the PoS consensus mechanism. CSPR is the native token on the Casper Network.

To understand the design further, read [this article](../concepts/design/casper-design.md).

## Disclaimer

Read the [Legal Disclaimer](../disclaimer.md) regarding this CasperLabs Tech Spec (this "Whitepaper"). 
