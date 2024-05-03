---
title: Transactions
slug: /transactions
---

# Transactions

Transactions are a new form of interacting with a Casper network that supersedes the concept of a [deploy](./glossary/D.md#deploy). They are a unit of work sent by a client to the network, which when executed can cause global state to be altered. Legacy deploys will continue to function in most cases, but new transaction variants are cheaper and more efficient. Moving forward, we suggest using transaction variants over legacy deploy architecture.

Blocks contain separate slots for each transaction variant, preventing a scenario where a single type of transaction (legitimate or malicious) can prevent critical consensus related actions. The following is a description of the available transaction variants:

* `mint`: Mint transactions interact with the `mint` system contract and involve transfers between purse URefs.

* `auction`: Auction transactions include placing bids to become a validator, as well as delegating, undelegating and redelegating.

* `install_upgrade`: Install/upgrade transactions pertain to installing smart contracts onto global state, as well as upgrading existing contracts.

* `standard`: Standard transactions include all other transactions that do not fall under `mint`, `auction` or `install_upgrade`. Standard transactions also include legacy deploys.

Information on the number of each transaction allowed in a single block can be found in the [chainspec.toml](./glossary/C.md#chainspec) for a given Casper network.