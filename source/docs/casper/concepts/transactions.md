---
title: Transactions
slug: /transactions
---

# Transactions

Transactions are [a new structure](../developers/json-rpc/types_chain.md#transaction) that allows users to enact changes in global state on a Casper network. Introduced with the Condor release, Transactions supersede legacy [Deploys](./glossary/D.md#deploy-deploy), allowing for a variety of Wasm-less interactions with the blockchain. These new interactions are more efficient than Deploys and provide a level of convenience that was not previously available.

The existing Deploy model is deprecated as of Condor, and support will be removed entirely in a future major release. However, Condor will continue to accept valid Deploys and will attempt to execute them. Most existing deploys that function today will continue to do so. However, deploys that depend on a data type or FFI function that has been altered or removed will fail to execute.

## Transaction Types

The following is a list of Transaction types included within the [CLI Casper client](https://github.com/casper-ecosystem/casper-client-rs/tree/dev) `put-transaction` or `put-txn` command.

### Withdraw Bid

`withdraw-bid` allows validators to withdraw their auction bid.

<details>
<summary><b>Casper Client Command</b></summary>

```json

casper-client put-txn withdraw-bid
/// The public key of the bidder.
  --public-key <FORMATTED STRING or PATH>
/// The amount in motes to be withdrawn.
  --transaction-amount <INTEGER>
/// The maximum gas price that the user is willing to pay for this transaction.
  --gas-price-tolerance <INTEGER>
/// The path to the local secret key file, or the [`initiator address`](../developers/json-rpc/types_chain.md#initiatoraddr) sending the transaction.
  <--secret-key <PATH>|--initiator-address <HEX STRING>>

```

</details>

### Add Bid

`add-bid` allows validators to place an auction bid.

<details>
<summary><b>Casper Client Command</b></summary>

```json

casper-client put-txn add-bid
/// The [delegation rate](../concepts/economics/staking.md#delegation-rate) for delegators staking on to this validator.
  --delegation-rate <INTEGER>
/// The public key of the bidder.
  --public-key <FORMATTED STRING or PATH>
/// The amount in motes to be bid.
  --transaction-amount <INTEGER>
/// The minimum amount of motes that a delegator can stake to this validator.
  --minimum-delegation-amount <INTEGER>
/// The maximum amount of motes that a delegator can stake to this validator.
  --maximum-delegation-amount <INTEGER>
/// The maximum gas price that the user is willing to pay for this transaction.
  --gas-price-tolerance <INTEGER>
/// The path to the local secret key file, or the [`initiator address`](../developers/json-rpc/types_chain.md#initiatoraddr) sending the transaction.
  <--secret-key <PATH>|--initiator-address <HEX STRING>>

```
</details>

### Delegate

`delegate` allows a user to delegate a stake of CSPR to a validator.

<details>
<summary><b>Casper Client Command</b></summary>

```json

casper-client put-txn delegate
/// The delegator's public key.
  --delegator <STRING>
/// The validator's public key.
  --validator <STRING>
/// The amount in motes to stake with this validator.
  --transaction-amount <INTEGER>
/// The maximum gas price that the user is willing to pay for this transaction.
  --gas-price-tolerance <INTEGER>
/// The path to the local secret key file, or the [`initiator address`](../developers/json-rpc/types_chain.md#initiatoraddr) sending the transaction.
  <--secret-key <PATH>|--initiator-address <HEX STRING>>

```

</details>

### Undelegate

`undelegate` allows a user to undelegate their previously staked CSPR from a validator.

<details>
<summary><b>Casper Client Command</b></summary>

```json

casper-client put-txn undelegate
/// The delegator's public key.
  --delegator <STRING>
/// The validator's public key.
  --validator <STRING>
/// The amount in motes to undelegate from this validator.
  --transaction-amount <INTEGER>
/// The maximum gas price that the user is willing to pay for this transaction. 
  --gas-price-tolerance <INTEGER>
/// The path to the local secret key file, or the [`initiator address`](../developers/json-rpc/types_chain.md#initiatoraddr) sending the transaction.
  <--secret-key <PATH>|--initiator-address <HEX STRING>>

```

</details>

### Redelegate

`redelegate` allows a user to redelegate their previously staked CSPR to a new validator.

<details>
<summary><b>Casper Client Command</b></summary>

```json

casper-client put-txn redelegate
/// The delegator's public key.
  --delegator <STRING>
/// The old validator's public key.
  --validator <STRING>
/// The new validator's public key.
  --new-validator <STRING>
/// The amount in motes to redelegate from the old validator to the new validator.
  --transaction-amount <INTEGER>
/// The maximum gas price that the user is willing to pay for this transaction. 
  --gas-price-tolerance <INTEGER>
/// The path to the local secret key file, or the [`initiator address`](../developers/json-rpc/types_chain.md#initiatoraddr) sending the transaction.
  <--secret-key <PATH>|--initiator-address <HEX STRING>>

```

</details>

### Invocable Entity

`invocable-entity` allows a user to invoke an entry point on the given [`AddressableEntity`](./addressable-entity.md) directly using an [`Entity Address`](./key-types.md#addressableentity).

<details>
<summary><b>Casper Client Command</b></summary>

```json

casper-client put-txn invocable-entity
/// The [`entity-hash`](../developers/json-rpc/types_chain.md#addressableentityhash) of the entity to invoke.
  --entity-address <FORMATTED STRING or PATH>
/// The entry point on the invocable entity.
  --session-entry-point <NAME>
/// The maximum gas price that the user is willing to pay for this transaction.
  --gas-price-tolerance <INTEGER>
/// The path to the local secret key file, or the [`initiator address`](../developers/json-rpc/types_chain.md#initiatoraddr) sending the transaction.
  <--secret-key <PATH>|--initiator-address <HEX STRING>>

```

</details>

### Invocable Entity Alias

`invocable-entity-alias` allows a user to invoke an entry point on the given [`AddressableEntity`](./addressable-entity.md) directly using an alias stored in their [`named keys`](./glossary/N.md#namedkeys-named-keys).

<details>
<summary><b>Casper Client Command</b></summary>

```json

casper-client put-txn invocable-entity-alias
/// The entity alias stored in the calling entity's named keys.
  --entity-alias <STRING>
/// The entry point on the invocable entity. 
  --session-entry-point <NAME>
/// The maximum gas price that the user is willing to pay for this transaction.
  --gas-price-tolerance <INTEGER>
/// The path to the local secret key file, or the [`initiator address`](../developers/json-rpc/types_chain.md#initiatoraddr) sending the transaction.
  <--secret-key <PATH>|--initiator-address <HEX STRING>>

```

</details>

### Package

`package` allows a user to invoke an entry point on the given contract [`package`](../developers/writing-onchain-code/upgrading-contracts.md#the-contract-package) using the associated [`package-address`](./key-types.md#package).

<details>
<summary><b>Casper Client Command</b></summary>

```json 

casper-client put-txn package
/// The address of the contract package.
  --package-address <FORMATTED STRING or PATH>
/// The entry point to invoke on the package.
  --session-entry-point <NAME>
/// The maximum gas price that the user is willing to pay for this transaction.
  --gas-price-tolerance <INTEGER>
/// The path to the local secret key file, or the [`initiator address`](../developers/json-rpc/types_chain.md#initiatoraddr) sending the transaction.
  <--secret-key <PATH>|--initiator-address <HEX STRING>>

```

</details>

### Package Name

`package-name` allows a user to invoke an entry point on the given contract [`package`](../developers/writing-onchain-code/upgrading-contracts.md#the-contract-package) using an alias stored in their [`named keys`](./glossary/N.md#namedkeys-named-keys).

<details>
<summary><b>Casper Client Command</b></summary>

```json

casper-client put-txn package-name
/// The package alias stored in the calling entity's named keys.
  --package-alias <STRING>
/// The entry point to invoke on the package.
  --session-entry-point <NAME>
/// The maximum gas price that the user is willing to pay for this transaction.
  --gas-price-tolerance <INTEGER>
/// The path to the local secret key file, or the [`initiator address`](../developers/json-rpc/types_chain.md#initiatoraddr) sending the transaction.
  <--secret-key <PATH>|--initiator-address <HEX STRING>>

```

</details>

### Session

`session` allows the user to send Wasm in a manner similar to legacy Deploys, but through the new Transaction structure. The tutorial [Sending Transactions](../developers/cli/sending-transactions.md) covers this in depth.

<details>
<summary><b>Casper Client Command</b></summary>

```json

casper-client put-txn session
/// The local path pointing to Wasm that will be sent to global state.
  --transaction-path <PATH>
/// An entry point on a previously installed contract, if applicable.
  --session-entry-point <NAME>
/// The category of the Transaction, in decreasing size order.
  --category <install-upgrade|large|medium|small>
/// The maximum gas price that the user is willing to pay for this transaction.
  --gas-price-tolerance <INTEGER>
/// The path to the local secret key file, or the [`initiator address`](../developers/json-rpc/types_chain.md#initiatoraddr) sending the transaction.
  <--secret-key <PATH>|--initiator-address <HEX STRING>>

```

</details>

### Transfer

`transfer` allows a user to transfer the designated number of [motes](./glossary/M.md#motes-motes) to a target address.

<details>
<summary><b>Casper Client Command</b></summary>

```json

casper-client put-txn transfer
/// The recipient of the transfer.
  --target <FORMATTED STRING>
/// The amount in motes to be transferred.
  --transfer-amount <INTEGER>
/// The maximum gas price that the user is willing to pay for this transaction.
  --gas-price-tolerance <INTEGER>
/// The path to the local secret key file, or the [`initiator address`](../developers/json-rpc/types_chain.md#initiatoraddr) sending the transaction.
  <--secret-key <PATH>|--initiator-address <HEX STRING>>

```

  </details>