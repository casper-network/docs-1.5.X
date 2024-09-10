---
title: Local Network Testing
---

# Testing Smart Contracts with NCTL

NCTL effectively simulates a live Casper network. The process for sending a `Transaction` to an NCTL-based network is therefore similar to doing so on a live network.

Testing `Transactions` prior to sending them to a Casper network ensures that they operate as intended. When working in an environment that requires payment for execution, errors and inefficiencies quickly add up. To this end, Casper provides several layers of testing to identify and rectify any errors. After [writing your smart contract](../../developers/writing-onchain-code/simple-contract.md) and testing it [using the provided framework](../../developers/writing-onchain-code/testing-contracts.md), NCTL serves as the next step in the process. While testing is entirely optional, it should be considered a best practice to avoid paying for the execution of faulty code.

## Getting Started with NCTL

Prior to testing a `Transaction` through NCTL, you should have the following steps accomplished:

1) [Completed writing a Transaction](../../developers/writing-onchain-code/simple-contract.md)

2) [Tested the Transaction](../../developers/writing-onchain-code/testing-contracts.md) using the Casper testing framework

3) [Setup NCTL](./setup-nctl.md) on your system

## NCTL Verification Prior to Testing

Prior to attempting an NCTL test, you must verify that your local NCTL instance started correctly. Run the following command to view your current node status:

```
nctl-status
```

You should see five nodes and instances of sidecar `RUNNING` and five `STOPPED`. Further, verify that the node and user information propagated within the *casper-node/utils/assets* directory. Each node and user should have the associated `Keys` necessary to interact with the network. Run the following command to view first user details:

```
nctl-view-user-account user=1
```

## Installing the Smart Contract

This document assumes that you setup your NCTL network using the standard settings in a directory called */casper/*.

You will need the following information to use the `put-transaction session` command:

* The **chain name**, in this case `casper-net-1`. This will appear in our example put-transaction as `--chain-name "casper-net-1"`.

* The **secret key** of the account sending the `Transaction`. For this example, we are using node-1 as the sender. The secret key file can be found at *casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem*. In our example put-transaction, this will appear as `--secret-key /casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem`. If your Transaction is more complex and requires multiple accounts, NCTL also establishes multiple users for testing.

* The **pricing mode** for this transaction. In this case, we are using the `fixed` pricing mode.

* The **gas price tolerance** in CSPR, which is the maximum amount of gas you are willing to pay for execution. This will appear in our example put-transaction as `--gas-price-tolerance 10`. **NCTL tests are not an accurate representation of potential gas costs on a live network. Please see our [note about gas prices](../../developers/cli/sending-transactions.md#a-note-about-gas-price).**

* The **path** to your `Transaction` that you wish to send to the NCTL network. This will appear in our example put-transaction as `--transaction-path <PATH>` and will require you to define the path to your specific `Transaction` Wasm.

* The **category** of the transaction, based on the size of the Wasm included. `install-upgrade` being the largest, descending in size through `large`, `medium`, and `small`. This will appear in our example put-transaction as `--category 'install-upgrade'`.

* The **session entry point**, which at installation time is usually `call`.

* The **node address** for a node on your NCTL network. In this example, we are using the node at `http://localhost:11101`. On the Casper Mainnet or Testnet, nodes will use port `7777`. This will appear in our example put-transaction as `--node-address http://<HOST>:7777`.

The command to send your `Transaction` should look similar to the following code snippet:

:::note

Use of the `$(get_path_to_client)` command assumes that you are operating in an activated NCTL environment.

:::

```bash
$(get_path_to_client) put-transaction session \
--chain-name "casper-net-1" \
--secret-key /casper/casper-node/utils/nctl/assets/net-1/nodes/node-1/keys/secret_key.pem \
--gas-price-tolerance 10 \
--pricing-mode fixed \
--transaction-path <PATH> \
--category 'install-upgrade' \
--session-entry-point call \
--node-address http://localhost:11101
```

The response will return something similar to the following information. Note the `transaction_hash`:

```json
{
  "jsonrpc": "2.0",
  "id": 1294011212530641270,
  "result": {
    "api_version": "2.0.0",
    "transaction_hash": {
      "Version1": "efad4a969064b5f8189ea4d6dd2fba2926d01d583a35178c07d7b827de16789e"
    }
  }
}
```

## Verifying Transaction Execution

The previous command sent the `Transaction` to the NCTL network, but we recommend verifying deploy execution before continuing. The `transaction_hash` received in the response allows you to query the `Transaction`'s status. 

To query the `Transaction`'s status, you will pass both the `transaction_hash` and the same `node-address` from above using the following command. This will return either an error message in the event of failure or the `Transaction` details if it succeeds.
```
$(get_path_to_client) get-transaction efad4a969064b5f8189ea4d6dd2fba2926d01d583a35178c07d7b827de16789e -n http://localhost:11101
```

## Interacting with the Installed Contract

Once your NCTL network executes your `Transaction`, you can test the functionality of the installed contract. To do so, you will first need to identify any arguments to pass to the contract, starting with the `PackageHash` itself. This hash identifies the contract package and allows you to target the included entry points. As we used the pre-established node-1 account to [send the `Transaction`](../../developers/cli/sending-transactions.md), we can retrieve the `PackageHash` from the node-1 account information. To do so, we will use the following NCTL command:

```bash
nctl-view-faucet-account
```

This will return the NCTL faucet account's `PublicKey` and `AccountHash`. We can then query the `PublicKey` using the following command:

```bash
$(get_path_to_client) query-global-state \
--node-address http://localhost:11101 \
--key <PUBLIC KEY> \
--state-root-hash <STATE ROOT HASH>
```

:::note

You can retrieve the current state root hash using the command `casper client get-state-root-hash`.

:::

This command will return an `entity-account-` value that you can use as an entity identifier in the following command:

```bash
$(get_path_to_client) get-entity \
--node-address http://localhost:11101 \
--entity-identifier <ENTITY IDENTIFIER>
```

This command will return information pertaining to the account, including the `NamedKeys`. The `PackageHash` of the contract to be tested will appear here. The process of calling the contract is similar to that of installing it, as they are both accomplished through sending a `Transaction`. In this instance, you will need the following information:

* The **node address**, entered in this instance using `--node-address http://localhost:11101`.

* The **chain name**, entered in this instance using `--chain-name "casper-net-1"`.

* The **package hash**, entered in this instance using `--package-address package-47b8b489d54c378144bf85429f4b29c8b47142d542272086f378b9d4e29cada4`.

* The **gas price tolerance** in CSPR, which is the maximum amount of gas you are willing to pay for execution. 

* The **entry point** on the contract that you wish to invoke.

* Any **session arguments** specific to the contract that you are testing. Multiple instances of `--session-arg` may be used as necessary to provide values to the contract. In the example below, you will see a demonstration of a session arg of `amount` as `--session-arg "amount:u256='100'"`.

```bash
$(get_path_to_client) put-transaction package \
--node-address http://localhost:11101 \
--chain-name "casper-net-1" \
--package-address package-47b8b489d54c378144bf85429f4b29c8b47142d542272086f378b9d4e29cada4 \ 
--gas-price-tolerance 10 \
--pricing-mode fixed \
--session-arg "amount:u256='100'"
```

## Verifying Correct Contract Behavior

After calling your installed contract, you can verify that the contract behaved as expected by observing the associated change in [global state](../../developers/cli/installing-contracts.md#querying-global-state). Depending on how your contract functions, this can have different meanings and results. If we use our counter contract from the [basic counter contract tutorial](../../resources/beginner/counter/walkthrough.md), the NCTL process would have the following flow:

1) Send a `Transaction` to install the "Counter" smart contract.

2) Verify the execution of the `Transaction`.

3) Interact with the installed contract package using an additional `Transaction` that calls one or several of the entry points. For example, calling the `increment` entry point to increase the counter by one.

4) Verify the associated change in global state. Namely, an increase in the counter.
