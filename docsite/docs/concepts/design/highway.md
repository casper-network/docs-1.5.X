---
title: Highway Consensus
---

# The Highway Consensus Protocol

The [Highway](https://arxiv.org/pdf/2101.02159.pdf) consensus protocol was used on the Casper Mainnet until the [Zug](./zug.md) consensus protocol was introduced in version 2.0 of the Casper node software. Consensus in Casper is described in more detail [here](./consensus.md). This page describes the Highway consensus protocol at a high level. Private networks can choose between Zug and Highway, depending on their needs.

## Unit Broadcasting

In Highway, nodes communicate by broadcasting units. A unit is a structure containing the following:
- Citations of other units (at most one per node), subject to validity conditions
- An optional proposed list of transactions to be included in a block. Note that the list can be empty
- The unit's creator and its digital signature
- Additional metadata, including a timestamp, sequence number, round length, etc.

An empty unit still carries an implicit vote. The citations determine which block a unit votes for based on a rule called "the fork choice rule". If there are multiple blocks to vote on and there isn't clarity about which block is the latest, the algorithm calculates the latest block based on the citations. The algorithm counts the weight of units from other validators and what they vote on and chooses the latest block on the branch with the most weight. The proposal unit always votes on itself. The protocol implicitly prefers the proposed block due to the GHOST (Greedy Heaviest Observed Sub-Tree) rule. More details are found in the implementation under the fork choice rule. In summary, if there is a fork, every unit votes on some branch of the chain.

Over time, the units form a Directed Acyclic Graph (DAG), where units are the vertices and citations are the edges.

![DAG](./highway/highway-dag.png)

Nodes must cite the latest unit received from every node, including their latest unit. If a validator does not follow the process and thus equivocates, their bid gets deactivated. However, the validator is not slashed. When a node equivocates, it can still send units but may not be a validator.

The Highway protocol proceeds in rounds with a minimum round length. Different nodes can use different round lengths, and ratios of round lengths are always powers of 2. Highway is a partially synchronous protocol because it is not bound to a specific time set in advance, and the network can adjust to delays. Thus, the protocol guarantees partially synchronous liveness. Multiple rounds form an era.

## Block Finalization

In each round, the assigned leader proposes a list of transactions to be included in a block. A block is finalized if there is a summit among the cited units. A summit is a structure within the graph characterized by a quorum *q*, a percentage of the participating validator weight, and a level *k*. Level *k* represents the depth in the graph. For a given fault tolerance threshold *t* (FTT), finality is defined as:

![Finality Equation](./highway/highway-finality.png)

If *q* is close to *n*, meaning the whole network participates, a block can be finalized with a high fault tolerance threshold (FTT).

The existence of such a summit means that a weight of more than *t* would have to equivocate to finalize a conflicting block. In other words, the FTT is the weight of the nodes that would have to collude to finalize a conflicting block and revert the transactions in that block. 

In Mainnet, the FTT was one-third of the validator weight. If over one-third of the validator weight was faulty, those nodes could have prevented block finalization and stalled the network.

## Important Links

- [Highway Whitepaper](https://arxiv.org/pdf/2101.02159.pdf) - Describes the protocol, and the liveness and safety proofs in detail
- [Zug Consensus](./zug.md) - The protocol currently used in Mainnet and Testnet
