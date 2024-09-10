
# Consensus in a Casper Network

The decentralized nature of a Casper network requires a method for validators to agree on the chain of finalized blocks. Validator nodes must determine the validity of transactions, resolve conflicts, and finalize the blocks in the chain. The network's consensus protocol is a mechanism for the validators to agree on each finalized block.

## Safety, Liveness, and Byzantine Fault Tolerance

In a Casper network, validator nodes receive different inputs via transactions from connecting clients. Given the consensus mechanism and rules, all honest nodes should output the same value, which is a finalized block in Casper. The [Transaction Lifecycle](../transactions-and-transaction-lifecycle.md) describes what happens after blocks are proposed and finalized. Each finalized block will contain the set of transactions, which the network will eventually execute. The property described here, where all honest nodes agree on a final value, is called **safety**.

The consensus protocol ensures that honest validators agree on finalized blocks in a finite time, allowing the network to continue producing blocks indefinitely. This property of the protocol is called **liveness**.

Honest validators will agree on finalized blocks even if some nodes are faulty. This property makes the consensus protocol tolerant to a **Byzantine fault** and thus secure against malicious activity.

To summarize, the consensus mechanism will determine how a blockchain meets the following requirements:

* **Safety**: All honest nodes eventually agree on the final value, which in a Casper network is a finalized block. The consensus mechanism is set up so that no two honest validators will report two different blocks at the same height of the blockchain.

* **Liveness**: The network runs indefinitely and adds new blocks to the chain.

* **Byzantine Fault Tolerance (BFT)**: All honest nodes eventually agree on the final value, even if some are faulty.

## Casper Consensus Protocols

Each Casper network can choose and configure its consensus protocol using the network's chainspec. The protocols available are [Zug](./zug.md) and [Highway](./highway.md). [Highway](https://arxiv.org/pdf/2101.02159.pdf) served as the Casper Mainnet's consensus protocol since launch. The Zug consensus protocol was introduced in version 2.0 to simplify and speed up the consensus process without compromising safety. Zug enables faster block times, less overhead, and a larger validator set in Mainnet. Zug is an implementation of the ideas from the paper [From Weakly-terminating Binary Agreement and Reliable Broadcast to Atomic Broadcast](https://arxiv.org/abs/2205.06314), which describes how Zug meets the safety, liveness, and resiliency requirements.

## Consensus in the Casper Mainnet

The Casper Mainnet is a [Proof-of-Stake](../glossary/P.md#proof-of-stake) network in which the on-chain auction contract determines validators participating in consensus. The protocol uses a decentralized network of [nodes](../glossary/N.md#node), which participate in the consensus process by staking CSPR tokens. These active nodes are known as [validators](../glossary/V.md#validator). The top 100 bidders are selected through the auction contract every era, to act as validators in the era after the next (current era + 2). Nodes with a greater stake in the network's success have a greater weight in reaching consensus.

<!-- TODO top 100 bidders might increase to 250 with Zug. Add this in once this happens in production. -->

The Mainnet will continue to function as long as the total weight of faulty nodes does not exceed one-third of the total weight of all nodes. Nodes that are not faulty are *honest* nodes. In most cases, the network can assume that more than two-thirds of all nodes will actively collaborate to achieve consensus. Therefore, stronger-than-average finality guarantees occur during periods when all nodes are acting honestly.

:::note

The Zug or Highway consensus protocols do not necessitate a Proof-of-Stake method of choosing validators and could theoretically be used alongside a private network with a different model.

:::

### Dynamic Round Length

Within the Zug or Highway protocols, the length of a round is determined dynamically to ensure a suitable time for nodes to send all messages. This ensures that the system maintains liveness by properly communicating all messages and adding blocks to the chain in a timely manner.

### Eras

The concept of eras (one era consists of multiple rounds) allows consensus to reduce the overall operational storage requirements of participating nodes while also rotating validators. On Mainnet, a new instance of consensus runs every two hours or approximately 440 blocks, depending on current network metrics. This allows for two benefits:

* **Data Reduction** - Older "metadata" used in finalizing certain blocks is no longer useful and can be removed without compromising the immutability of the data stored on the blockchain.

* **Banning Equivocators** - Dishonest nodes caught equivocating (signing conflicting consensus messages) in a previous era cannot participate in new eras.
<!-- TODO Once implemented, mention slashing for invalid signatures. It's consensus-independent and it will work for both Zug and Highway. -->

* **Rotating Validators** - Bonded nodes bid on validator spots each era, with the top highest bidders becoming validators for the era after next (`current era`+ 2).

In any given era, node operators will bid to become validators participating in the consensus mechanism for the era after the next (`current era` + 2). Each time slot within the era will also determine a lead validator. The lead validator proposes a new block to be added to the chain, which is communicated to the other nodes (via broadcasting or gossiping, depending on the consensus protocol). Once this process reaches critical mass, with a sufficient interconnected pattern of messages, the selected block is considered finalized and added to the chain.

The final block of an era is a *switch block* and forms the initial state of the next era. A new consensus instance begins with the new era, using information contained within the *switch block* and a new potential set of validators. More details on the auction process to determine an era's validators can be found within the [Consensus Economics](../economics/consensus.md) page.

### Finality

Finality occurs when the network can be sure that a block will not be altered, reversed, or canceled after addition to the chain. This occurs via consensus, and as all transactions happen within a block, it allows for confirmation that a transaction cannot be changed. After finality, it would require more than one third of all validators to double-sign to cause a disparity between nodes. In this event, the network would shut down and require a manual restart.

On a Casper network, a transaction finalizes alongside the finalizing of the block in which it is included. Validators that equivocate risk eviction, in which the network removes them from the validator set. Therefore, honest nodes receive rewards for their participation, while equivocating nodes risk loss of revenue for acting maliciously.

## Important Links

- [Zug Consensus](./zug.md) - An overview of the Zug consensus used in Mainnet and Testnet
- [Highway Consensus](./highway.md) - Brief overview of the Highway consensus available as an alternative to Zug