---
title: Local Network Testing
---

# Testing Smart Contracts with NCTL

NCTL effectively simulates a live Casper network. The process for sending a `Transaction` to an NCTL-based network is therefore similar to doing so on a live network.

Testing `Transactions` prior to sending them to a Casper network ensures that they operate as intended. When working in an environment that requires payment for execution, errors and inefficiencies quickly add up. To this end, Casper provides several layers of testing to identify and rectify any errors. After [writing your smart contract](../../developers/writing-onchain-code/simple-contract.md) and testing it [using the provided framework](../../developers/writing-onchain-code/testing-contracts.md), NCTL serves as the next step in the process. While testing is entirely optional, it should be considered a best practice to avoid paying for the execution of faulty code.

## Getting Started with NCTL

Prior to testing a `Transaction` that installs a smart contract through NCTL, you should have the following steps accomplished:

1. [Completed writing a Smart Contract](../../developers/writing-onchain-code/simple-contract.md)

2. [Tested the Smart Contract](../../developers/writing-onchain-code/testing-contracts.md) using the Casper testing framework

3. [Setup NCTL](./setup-nctl.md) on your system

## NCTL Verification Prior to Testing

Prior to attempting an NCTL test, you must verify that your local NCTL instance started correctly. Run the following command to view your current node status:

```
nctl-status
```

You should see five nodes `RUNNING` and five `STOPPED`. Further, verify that the node and user information propagated within the _casper-node/utils/assets_ directory. Each node and user should have the associated `Keys` necessary to interact with the network. Run the following command to view first user details:

```
nctl-view-user-account user=1
```

## Installing the Smart Contract

This document assumes that you setup your NCTL network using the standard settings in a directory called _/casper/_.

You will need the following information to use the `put-txn` command with `session` option:

-   The **chain name**, in this case `casper-net-1`. This will appear in our example put-txn as `--chain-name "casper-net-1"`

-   The **secret key** of the account singning the `Transaction`. For this example, we are using node-1 as the signer. The secret key file can be found at _casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem_. In our example put-txn, this will appear as `--secret-key /casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem`. If your transaction is more complex and requires multiple accounts, NCTL also establishes multiple users for testing. You can also

-   The **payment amount** in motes, which should be sufficient to avoid an 'Out of Gas' error. The payment amount will appear in our example put-txn as `--payment-amount 2500000000`. **NCTL tests are not an accurate representation of potential gas costs on a live network. Please see our [note about gas prices](../../developers/cli/sending-transactions.md#a-note-about-gas-price).**

-   The **node address** for a node on your NCTL network. In this example, we are using the node at `http://localhost:11101`. On the Casper Mainnet or Testnet, nodes will use port `7777`. This will appear in our example put-txn as `--node-address http://<HOST>:7777`.

-   The **gas-price-tolerance** the maximum gas price that the user is willing to pay for the transaction.

-   The **pricing-mode** used to identify the payment mode chosen to execute the transaction.

-   The **session-entry-point** name of the method that will be used when calling the session contract.

-   The **standard-payment** flag to determine if this transaction uses standard or custom payment.

-   The **category** transaction category [possible values: install-upgrade, large, medium, small].

-   The **transaction-path** to your `Contract` WASM file that you wish to send to the NCTL network.

The command to send your `Transaction` should look similar to the following code snippet:

:::note

Use of the `$(get_path_to_client)` command assumes that you are operating in an activated NCTL envrionment.

:::

```
$(get_path_to_client) put-txn session \
--node-address http://localhost:11101
--chain-name casper-net-1 \
--pricing-mode fixed \
--gas-price-tolerance 10 \
--standard-payment true \
--category install-upgrade
--payment-amount 2500000000 \
--secret-key /casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem \
--transaction-path <PATH> \
--session-entry-point <Name of the entry point> \
```

The response will return something similar to the following information. Note the `transaction_hash`:

```
{
  "jsonrpc": "2.0",
  "id": 2954769041950332810,
  "result": {
    "api_version": "2.0.0",
    "transaction_hash": {
      "Version1": "cb34519aa21a1c285aceeaf808ed7745e1f79d0b69dacb67d05e111281923c07"
    }
  }
}
```

## Verifying Transaction Execution

The previous command sent the `Transaction` to the NCTL network, but we recommend verifying its execution before continuing. The `transaction_hash` received in the response allows you to query the `Transaction`'s status.

To query the `Transaction`'s status, you will pass both the `transaction_hash` and the same `node-address` from above using the following command. This will return either an error message in the event of failure or the `Transaction` details if it succeeds.

```
$(get_path_to_client) get-txn cb34519aa21a1c285aceeaf808ed7745e1f79d0b69dacb67d05e111281923c07 -n http://localhost:11101
```

## Interacting with the Installed Contract

Once your NCTL network executes your `Transaction`, you can test the functionality of the installed contract. To do so, you will first need to identify any arguments to pass to the contract, starting with the `ContractHash` itself. This hash identifies the contract and allows you to target the included entry points. As we used the pre-established node-1 account (addresable entity) to [send the `Transaction`](../../developers/cli/sending-transactions.md), we can retrieve the `ContractHash` from the node-1 account information. To do so, we will use the following command with a node address and the `PublicKey` of the node in question.

```
$(get_path_to_client) get-entity \
--node-address http://localhost:11101 \
--entity-identifier /casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/public_key.pem
```

This command will return information pertaining to the account, including the `NamedKeys`. The `ContractHash` of the contract to be tested will appear here. The process of calling the contract is similar to that of installing it, as they are both accomplished through sending a `Transaction`. In this instance, you will need the following information:

-   The **node-address**, entered in this instance using `--node-address http://localhost:11101`

-   The **chain-name**, entered in this instance using `--chain-name casper-net-1` The **pricing-mode** used to identify the payment mode chosen to execute the transaction.

-   The **payment-amount** for this `Transaction` in motes, which may need to be adjusted depending on cost and network [chainspec](../../concepts/glossary/C.md#chainspec). In this instance, we will use `--payment-amount 500000000`.

-   The **gas-price-tolerance** the maximum gas price that the user is willing to pay for the transaction.

-   The **standard-payment** flag to determine if this transaction uses standard or custom payment.

-   The **secret-key** path. If not provided, the transaction will not be signed and will remain invalid until signed, for example by running the `sign-transaction` subcommand.

-   The **entity-address** formatted string representing an addressable entity address. Our contract is a addresable and invocable entity.

-   The **session-entry-point** name of the method that will be used when calling the session contract. This is any of the entry points that are defined in our smart contract.

-   Any **session arguments** specific to the contract that you are testing. Multiple instances of `--session-arg` may be used as necessary to provide values to the entry points of the smart contract.

```
$(get_path_to_client) put-txn \
--node-address http://localhost:11101 \
--chain-name casper-net-1 \
--gas-price-tolerance 10 \
--payment-amount 500000000 \
--standard-payment true \
--secret-key /casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem \
--session-entry-point <Name of the entry point> \
--entity-address entity-contract-8c13aaeef50ae7f447ee21276965c31cfa45c4ea3abb03d35d078cdd6a40e4a
```

## Verifying Correct Contract Behavior

After calling your installed contract, you can verify that the contract behaved as expected by observing the associated change in [global state](../../developers/cli/installing-contracts.md#querying-global-state). Depending on how your contract functions, this can have different meanings and results. If we use our donation contract from the [basic smart contract tutorial](../../developers/writing-onchain-code/simple-contract.md), the NCTL process would have the following flow:

1. Send a `Transaction` to install the "Donation" smart contract.

2. Verify the execution of the `Transaction`.

3. Interact with the installed contract using an additional `Transaction` that calls one or several of the entry points. For example, calling the `donate` entry point to donate an amount to the fundraising purse.

4. Verify the associated change in global state. Namely, an increase in the balance of the fundraising purse.
