# Condor Release Notes for Exchanges


## Account/Contract Merge

* Currently, Casper contains separate Accounts and Contracts. These record types are similar, but contain small differences. Condor merges these two into one record called AddressableEntity.

    * All existing Account and Contract records will be migrated upon on-chain interaction (i.e., sending of transactions, native transfers).
    
    * All new “accounts” and “contracts” created on the system will result in an AddressableEntity record being created.

    * PublicKeys and AccountHashes for existing Account records remain in place and continue to function with the corresponding AddressableEntity record. 

* Named keys are now a top-level concern and stored directly in global state.
    
    * The outcome and behavior of named keys is the same; this is an implementation detail addressing the scalability issues of the previous design.

    * Similarly, entry points for smart contracts are now a top level concern, with each entry point being stored directly in global state rather than embedded within an AddressableEntity record..

* **Action Items: While the Casper node software handles all on-chain interactions with these new data structures, any off-chain logic that retrieves Account and/or Contract records from the blockchain for any purpose (i.e., processing, storage, indexing, etc) will need to be modified to retrieve and use the AddressableEntity record structure going forward.** 

# Fee Elimination

* Condor adds support for configurable fee, refund, and pricing strategies. The current plan is to roll out Condor with “NoFee” mode on. Rather than transferring tokens from a paying purse, they are now placed on hold temporarily.

* There is a configurable interval that determines how long a balance hold remains in effect. The available balance of a purse equals its actual total balance minus all non-expired balance holds on that purse. The held portion of a purse balance is not available to transfer or spend until it is released.
        
    * The on-chain logic calculates the correct values for total balance and available balance. Off-chain logic can continue to use the existing query_balance endpoint, which will return the available balance. This is sufficient for the majority of use cases. However, off-chain logic that wants to get the full details including total, available, and all hold records can use the new query_balance_details RPC endpoint.

* **Action Items: Overall, placing holds rather than taking fees is beneficial to exchanges and other parties who send periodic transactions to the network, as their gas costs return to them over time rather than being spent.**

    * **Existing implementations should generally not need to change anything to take advantage of this behavior of the system.**

    * **Any advanced platform with automated funding that periodically tops off operating balances with new tokens to replace spent gas would benefit from some consideration of this new behavior.**

    * **Advanced platforms seeking optimal scheduling strategies would benefit from retrieving the hold records for their operating purse(s) to calculate projected future available balances and use that to inform the scheduling of automated transaction submissions.**

## Dynamic Pricing

* Currently, the gas price on the Casper network is equal to 1, meaning 1 unit of gas costs 1 mote. Condor introduces a configurable gas price multiplier. If turned on, at the end of each era a calculation is run to determine block usage in the current era and adjust the multiplier for the era that is starting.

    * If overall block use rises above a threshold the gas price goes up by 1, if use falls below a threshold the gas price goes down by 1. If use remains within those thresholds the gas price remains the same. 

    * The gas price will not go up or down by more than 1 in a given era, and will not go above the maximum or below the minimum threshold. 

    * The minimum and maximum gas prices and the go-up and go-down threshold are configurable. 

    * The current gas price is used as a straight multiplier to determine actual gas cost. For instance, an operation with a base cost of 1 CSPR would cost 1 CSPR if the current gas price is 1, but would cost 2 CSPR if the current gas price is 2. 

    * The calculated gas price has been added to the block header to make it easily discoverable (for determining what the current price is), and for posterity (for determining what the gas price was for a given era in the historical context).

* **Action Items: During times of high network usage, you may find that costs for interacting with the blockchain increase. Plan accordingly for any transactions.**

    * **As a quality of life feature for those operating on a strict budget, transactions have a gas_tolerance field, which allows the sender of a transaction to specify the maximum gas price they are willing to pay for (minimum 1). For instance, if a transaction is sent with gas_tolerance = 2 and the network is currently at gas price 3 or higher, that transaction will not be included in a proposed block. If the calculated gas price later walks down to 2 before the transaction has expired, the transaction will be eligible for inclusion in a proposed block.**

## Transaction Types

* Currently, work to be done on the Casper network is sent using the Deploy structure. With Condor we are transitioning to a Transaction model. There are some structural changes introduced to support more advanced features.

* The existing Deploy model is deprecated as of Condor, and support will be removed entirely in a future major release. However, Condor will continue to accept valid Deploys and will attempt to execute them. Most existing deploys that function today will continue to do so. However, deploys that depend on a data type or FFI function that has been altered or removed will fail to execute. 

* Under the new Transaction model, Condor offers direct support for native / Wasm-less usage of all user-land mint and stake management actions.

* **Action Items: Existing off-chain systems should determine if their operation continues to work using the legacy Deploy model support.**

    * **In cases where legacy integration remains compatible, upgrading to take advantage of the new Transaction model can be delayed temporarily or indefinitely until the removal of Deploys with a later release.**

    * **In cases where one or more incompatibilities have been introduced, some fix short of a full upgrade to the Transaction model may be possible on a case by case basis, but a forced upgrade may be preferable or even necessary in some cases.**

    * **Even off-chain systems that continue to work using legacy support may want to consider upgrading to the new Transaction model to take advantage of efficiencies or new capabilities.**

## Block Restructure

* The structure of the Block record is being modified as part of Condor. As all blocks are immutable once added to the chain, previously produced blocks remain in their original format. All new blocks produced after Condor will have the new format. The change in structure can be seen [here in the upcoming documentation changes](https://github.com/casper-network/docs/blob/feat-2.0_docs/source/docs/casper/developers/json-rpc/types_chain.md#blockv2-blockv2).

* **Action Items: While existing client software (including SDKs) remain able to request and parse historical blocks that use the original Block structure, they must be upgraded to request and parse new blocks if they wish to continue to follow the chain. This is the primary breaking change for most off-chain consumers of the Casper network.**

    * **To continue to service historical/archival usage of old blocks, such software should not code over or remove handling for the original block structure. Instead they should retain that capability and add handling for the new block structure.** 


## Contract Level Events

* Condor adds support for smart contracts to define message topics and emit their own messages which are passed to the event stream for consumption as contract level events. Details on this feature can be found [here](https://github.com/casper-network/ceps/blob/master/text/0088-contract-level-messages.md).

* **Action Items: As this is an entirely new feature, existing systems do not have to change anything.**

    * **Some existing smart contracts have adopted a convention using one or more dictionaries to approximate contract level events. Such smart contracts cannot directly address spoofing, and repudiation protection requires off-chain support. Thus, they should consider making the necessary changes to their logic to take advantage of the built in and safe support offered in Condor.**

## Zug Consensus Protocol

* The Zug Consensus Protocol will replace Highway on the Casper network alongside the Condor release. Other instances of a Casper network (private/hybrid networks) may choose to use either Highway or Zug.
    
    * Information on Zug’s implementation can be found [here](https://github.com/casper-network/docs/blob/feat-2.0_docs/source/docs/casper/concepts/design/zug.md).
    
    * A more in-depth view of Zug and the theory behind it can be found [here](https://arxiv.org/abs/2205.06314).

* **Action Items: None.**

## Server-Sent Event (SSE) Endpoint Changes

* Due to the previously mentioned structural changes to certain record kinds, most notably the Block record structure and the transition from the Deploy model to the Transaction model, and the addition of contract level events in the form of Messages, there are breaking changes to the contents of the event stream. 

    * The changes are minor schematic changes and rather obvious; for instance instead of a DeployProcessed event there is a TransactionProcessed event, instead of a DeployExpired event there is a TransactionExpired event, and so on. 

    * The overall verbs and their behavioral semantics remain the same (BlockAdded, ~Accepted, ~Processed, ~Expired, etc).

* **Action Items: Existing software (including SDKs) that deserializes the JSON produced by the SSE event stream will require updating to continue to follow the event stream post-Condor. Software that does not follow the event stream is unaffected.**
