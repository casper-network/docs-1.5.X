---
title: Change bid public key
---

# Changing the Public Key Associated with a Validator Bid

The public key associated with a given validator bid can be changed through the auction contract's `change_bid_public_key` entry point.

An example of this functionality would be to transfer ownership of a validator "slot" to a different party or to migrate a node to a backup server. By leveraging the system contract we can perform those operations more securely by making sure that no private key files need to be copied or transmitted between servers.

When the public key is changed all relevant delegations are also changed to be associated with the updated validator bid.

## Prerequisites

For a public key change to be performed successfully there must not exist a validator bid associated with the target public key.

## Method 1: Calling the system auction contract's `change_bid_public_key` entry point

The public key associated with a given bid can be changed by calling the `change_bid_public_key` entry point of the system auction contract. Using this method, you do not need to build any contracts, which reduces costs and complexity.

```bash
sudo -u casper casper-client put-txn \
--node-address <HOST:PORT> \
--secret-key <PATH> \
--chain-name <CHAIN_NAME> \
--payment-amount <PAYMENT_AMOUNT_IN_MOTES> \
--session-hash <SESSION_HASH> \
--session-entry-point change_bid_public_key \
--session-arg="public_key:public_key='<PUBLIC_KEY_HEX>'" \
--session-arg="new_public_key:public_key='<PUBLIC_KEY_HEX>'"
```

1. `node-address` - An IP address of a peer on the network. The default port of nodes' JSON-RPC servers on Mainnet and Testnet is 7777.
2. `secret-key` - The file name containing the secret key of the account paying for the Transaction.
3. `chain-name` - The chain-name to the network where you wish to send the Transaction. For Mainnet, use _casper_. For Testnet, use _casper-test_.
4. `payment-amount` - The payment for the Transaction in motes. This entry point call needs 5 CSPR.
5. `session-hash` - Hex-encoded hash of the stored auction contract, which depends on the network you are using. For Casper's Mainnet and Testnet, the hashes are as follows:

-   **Testnet**: `hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2`
-   **Mainnet**: `hash-ccb576d6ce6dec84a551e48f0d0b7af89ddba44c7390b690036257a04a3ae9ea`

6. `session-entry-point` - Name of the entrypoint that will be used when calling the contract.

The `change_bid_public_key` entry point expects two arguments:

7. `public key`: The hexadecimal public key associated with a validator bid to be changed. This key must match the secret key that signs the transaction.
8. `new_public key`: The hexadecimal public key intended to replace the original key associated with the bid.

The command will return a transaction hash, which is needed to verify the transaction's processing results.

:::note

Calling the `change_bid_public_key` entry point on the auction contract has a fixed cost of 5 CSPR.

:::

## Method 2: Using compiled WASM

You may also change the public key associated with a bid via a transaction containing the compiled `change_bid_public_key.wasm` binary. For details, refer to [Building the Required Contracts](../setup/joining.md#step-3-build-contracts).

The following transaction is a template for sending a request:

```bash
sudo -u casper casper-client put-txn session \
--node-address http://<HOST:PORT> \
--secret-key /etc/casper/validator_keys/secret_key.pem \
--chain-name <CHAIN_NAME> \
--category <INSTALL-UPGRADE|LARGE|MEDIUM|SMALL> \
--pricing-mode fixed \
--gas-price-tolerance <GAS_PRICE_TOLERANCE> \
--transaction-path $HOME/casper-node/target/wasm32-unknown-unknown/release/change_bid_public_key.wasm \
--session-entry-point call \
--session-arg="public_key:public_key='<PUBLIC_KEY_HEX>'" \
--session-arg="new_public_key:public_key='<PUBLIC_KEY_HEX>'"
```

1. `node-address` - An IP address of a peer on the network. The default port of nodes' JSON-RPC servers on Mainnet and Testnet is 7777.
2. `secret-key` - The file name containing the secret key of the account paying for the Transaction.
3. `chain-name` - The chain-name to the network where you wish to send the Transaction. For Mainnet, use _casper_. For Testnet, use _casper-test_.
4. `gas-price-tolerance` - Maximum payment for the Transaction in motes.
5. `transaction-path` - The path to the compiled Wasm on your computer.

The `change_bid_public_key.wasm` expects two arguments:

7. `public key`: The hexadecimal public key associated with a validator bid to be changed. This key must match the secret key that signs the transaction.
8. `new_public key`: The hexadecimal public key intended to replace the original key associated with the bid.

The command will return a transaction hash, which is needed to verify the transaction's processing results.

:::note

This method is more expensive than calling the `change_bid_public_key` entrypoint in the system auction contract, which has a fixed cost of 5 CSPR.

:::

## Bridge records

In order to continue handling pending unbonds and rewards distribution even if the public key associated with a validator bid has changed, we use dedicated `Bridge` records. These records connect the original public key to the new public key. By following those records we are able to find the current bid even if the public key was changed multiple times.

## Limitations

Due to the way the `Bridge` record mechanism works there are some limitations regarding changing public keys to keep in mind:

-   Because the `Bridge` record replaces the original bid, it's not possible to then change the public key back to the original value, since it would create a loop
-   To avoid unbounded computation we also limit the number of `Bridge` records that can be processed in sequence to 20, which means that:
    -   For unbonding or redelegation requests, if a validator bid public key is changed more than 20 times between the time a request is created and processed, the funds will be returned to a delegator's main purse
    -   For rewards distribution if the public key changes more than 20 times between the point a validator was elected for a given era and when the rewards are distributed, those rewards will be skipped and not distributed
