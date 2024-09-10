---
title: Gas Cost
---

# Gas and Resources



## What is gas?

Gas is a conceptual measure of resources used while executing transactions on the blockchain. Gas cost is the amount of gas consumed during the processing cycles that execute a transaction on the network. It correlates directly with the amount of computer processing a validator needs to provide to execute a transaction.

Gas fees are consumed on the network irrespective of whether a transaction was successful or not. Even when a transaction fails, the network measures [computational work as gas](../design/casper-design.md#measuring-computational-work-execution-semantics-gas) because it consumes resources and space on the block as the validator attempts to execute it. Depending on how the network was configured, the transaction fee may or may not be refunded, or a hold may placed on the paying purse. See [fee elimination](./fee-elimination.md) for more details.

## How is gas cost determined?

The amount of gas required for a transaction is determined by how much code is executed on the blockchain and the current average of all block utilization. Currently, gas is priced at a fixed price of 1 mote (1 CSPR is 10^9 motes) per 1 unit of gas. Cost is determined by the network's `current_gas_price` multiplier, which is dynamic and based on current network usage. A high rate of block utilization will increase the `current_gas_price` multiplier at the switch block, while low utilization will decrease the multiplier. There is both a minimum and a maximum potential multiplier, and all settings related to [dynamic pricing](../../concepts/economics/dynamic-gas-pricing.md) can be configured in a Casper network's [chainspec](../glossary/C.md#chainspec).

## Why do we need to charge a cost?

Casper is a decentralized network of individual validators supplying their computational resources to keep the network live. As such, computations must be rate-limited and priced for the following reasons:

-   Rate-limiting is used to ensure a secure and live network:
    -   It prevents a specific kind of denial-of-service (DoS) attack. In computer networks, rate-limiting controls the rate of requests sent or received by a network to prevent DoS attacks. Gas behaves similarly, because each block permits only a fixed amount of transactions (gas) to be included in the era.
    -   It explicitly quantifies the system load. The cost helps us evaluate the use of computational resources and measure the amount of computational work that validators need to perform for each transaction. With this knowledge, we can specify minimum system requirements for validators.
-   Pricing leads to more meaningful transactions:
    -   Issuers of transactions and smart contract writers will be more aware of the limited network resources because there is a cost associated with each transaction. Pricing prevents users from spamming arbitrary amounts of empty transactions because there is a price to pay for each transaction.
