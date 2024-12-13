---
title: Endpoints
---

# Node Endpoints

As specified in the [Network Requirements](./install-node.md#network-requirements), a Casper node uses specific ports to communicate with client applications and other nodes on the network. Each node has an identity linked with an IP and port pair where the node is reachable. This address is also called an endpoint. The [Network Communication](../../concepts/design/p2p.md) page explains how the nodes connect and communicate securely. Node connections are established using TLS, presenting a client certificate to encrypt peer-to-peer communication.

This document describes in more detail a Casper node's default endpoints:

- [Networking port: 35000](#35000)
- [JSON-RPC HTTP server port: 7777](#7777)
- [REST HTTP server port: 8888](#8888)
- [SSE HTTP event stream server port: 9999](#9999)

Node operators can modify a node's configuration options, including the port settings, by updating the [node's config.toml](./basic-node-configuration.md#config-file) file. An example configuration file can be found [here](https://github.com/casper-network/casper-protocol-release/blob/main/config/config-example.toml).

The default endpoints for Mainnet and Testnet are open by default and are described below in more detail. If the node connects to a different network, the ports may differ depending on how the network was set up.


## Default Networking Port: 35000 {#35000}

The configuration options for networking are under the `network` section of the `config.toml` file. The `bind_address` using port 35000 is the only port required to be open for the node to function. A Casper node taking part in the network should open connections to every other node it is aware of and has not blocked. In the `config.toml` file, the setting is:

```md
bind_address = '0.0.0.0:35000'
```

If the networking port is closed, the node becomes unreachable, and the node won't be discoverable in the network. If this is a validator, it will face eviction. A read-only node will be considered to be offline.


## Default JSON-RPC HTTP Server Port: 7777 {#7777}

The configuration options for the JSON-RPC HTTP server are under the `rpc_server` section in the `config.toml` file. The `address` using port 7777 is the listening address for JSON-RPC HTTP server. 

```md
address = '0.0.0.0:7777'
```

DApps would use this address to [interact with the Casper JSON-RPC API](../../developers/json-rpc/index.md). Users would use this address to [interact with the network using CLI](../../developers/cli/index.md). Validators would use this address to [bond](../becoming-a-validator/bonding.md#example-bonding-transaction) or [unbond](../becoming-a-validator/unbonding.md). If this port is closed, the requests coming to this port will not be served, but the node remains unaffected.


## Default REST HTTP Server Port: 8888 {#8888}

The configuration options for the JSON-RPC HTTP server are under the `rest_server` section in the `config.toml` file. The `address` listing port 8888 is the listening address for the REST HTTP server. 

```md
address = '0.0.0.0:8888'
```

Opening port 8888 is recommended but not required. This port allows the node to be included in the general network health metrics, thus giving a more accurate picture of overall network health. If this port is closed, the requests coming to this port will not be served, but the node remains unaffected.

One may use this port to [get a trusted hash](./basic-node-configuration.md#trusted-hash-for-synchronizing), [verify successful staging](./upgrade.md#verifying-successful-staging) during an upgrade, or to [confirm that the node is synchronized](./joining.md#step-7-confirm-the-node-is-synchronized).


### Example usage

For general health metrics, use this command:

```bash
curl -s http://<node_address>:8888/metrics
```

You can check the node's status using this command:

```bash
curl -s http://<node_address>:8888/status
```

The status endpoint provides a JSON response that can be parsed with `jq`.

```bash
curl -s http://<node_address>:8888/status | jq
```

<details>
<summary>Sample response</summary>

```json
{
  "peers": [
    {
      "node_id": "tls:0082..eba9",
      "address": "65.21.231.40:35000"
    },
    {
      "node_id": "tls:00e1..2a78",
      "address": "65.109.34.108:52636"
    },
    ...
     {
      "node_id": "tls:fc90..6ae5",
      "address": "135.181.48.112:35000"
    }
  ],
"api_version": "1.5.8",
  "build_version": "1.5.8",
  "chainspec_name": "casper-test",
  "starting_state_root_hash": "6204eb9060e42889796f1354f48d5f8a669e7c4ca104c3db00d12e5d42061126",
  "last_added_block_info": {
    "hash": "2ae203e702bcb35b360ebd45f39765240b2f3462804223861b7bde4fbe08ae1f",
    "timestamp": "2024-12-13T19:44:39.936Z",
    "era_id": 16084,
    "height": 4188106,
    "state_root_hash": "4ec7a5e4b3c0f283ce75694d27870ee6f674092f9d072346ca58bbbab1726116",
    "creator": "01c8be540a643e6c9df283dd2d2d6be67748f69a3c7bb6cf34471c899b8e858c9a"
  },
  "our_public_signing_key": "0153d98c835b493c76050735dc79e6702a17cd78ab69d5b0c3631e72f8f38bb095",
  "round_length": "16s 384ms",
  "next_upgrade": null,
  "uptime": "2months 1day 4h 38m 47s 84ms",
  "reactor_state": "Validate",
  "last_progress": "2024-10-12T21:47:05.432Z",
  "available_block_range": {
    "low": 3866524,
    "high": 4188106
  },
  "block_sync": {
    "historical": null,
    "forward": null
  }
}
```

</details>

You can filter the result with dot notation, specifying one of the following parameters:

- `api_version` - The RPC API version
- `chainspec_name` - The chainspec name, used to identify the currently connected network
- `starting_state_root_hash` - The state root hash used at the start of the current session
- `peers` - The node ID and network address of each connected peer
- `last_added_block_info` - The minimal info of the last Block from the linear chain
- `our_public_signing_key` - Our public signing key
- `round_length` - The next round length if this node is a validator.
- `next_upgrade` - Information about the next scheduled upgrade
- `build_version` - The compiled node version
- `uptime` - Time that has passed since the node has started.

Here is an example command for retrieving general network information:

```bash
curl -s http://<node_address>:8888/status | jq -r '.api_version, .last_added_block_info, .build_version, .uptime'
```

<details>
<summary>Sample response</summary>

```json
1.5.8
{
  "hash": "60a4a390c0c10d3d18774ef762e8014f140abc6aad5683105bda56516476661c",
  "timestamp": "2024-12-13T19:46:34.624Z",
  "era_id": 16084,
  "height": 4188113,
  "state_root_hash": "42cc9318822fe7d1c8cd3c569a55e0dbe65a07a03af4d2cad62fbaa49a5ebfda",
  "creator": "017d96b9a63abcb61c870a4f55187a0a7ac24096bdb5fc585c12a686a4d892009e"
}
1.5.8
2months 1day 4h 40m 42s 81ms
```

</details>

To get information about the next upgrade, use:

```bash
curl -s http://<node_address>:8888/status | jq .next_upgrade
```

To get information about the last added block, use:

```bash
curl -s http://<node_address>:8888/status | jq .last_added_block_info
```

To monitor the downloading of blocks to your node:

```bash
watch -n 15 'curl -s http://<node_address>:8888/status | jq ".peers | length"; curl -s http://<node_address>:8888/status | jq .last_added_block_info'
```

To monitor local block height as well as RPC port status:

```bash
watch -n 15 'curl -s http://<node_address>:8888/status | jq ".peers | length"; curl -s http://<node_address>:8888/status | jq .last_added_block_info; casper-client get-block -n http://<node_address>:8888/status'
```

## Default SSE HTTP Event Stream Server Port: 9999 {#9999}

The configuration options for the SSE HTTP event stream server are listed under the `event_stream_server` section of the `config.toml` file. The `address` listing port 9999 is the listening address for the SSE HTTP event stream server. 

```md
address = '0.0.0.0:9999'
```

If this port is closed, the requests coming to this port will not be served, but the node remains unaffected. For details and useful commands, see [Monitoring and Consuming Events](../../developers/dapps/monitor-and-consume-events.md).


## Setting up Firewall Rules

To limit inbound traffic to the node’s endpoints, you can set firewall rules similar to the `ufw` commands below:

```bash
sudo apt install ufw -y
sudo ufw disable
sudo ufw reset
sudo ufw default allow outgoing
sudo ufw default deny incoming
sudo ufw limit ssh
sudo ufw limit 7777/tcp
sudo ufw limit 8888/tcp
sudo ufw limit 35000/tcp
sudo ufw enable
```

These commands will limit requests to the available ports of your node. Port 35000 should be left open, although you can limit traffic, as it is crucial for node-to-node communication.

If you have any concerns, questions, or issues, please [submit a request](https://support.casperlabs.io/hc/en-gb/requests/new) to the Casper support team.


## Restricting Access for Private Networks

Any node can join Mainnet and Testnet and communicate with the nodes in the network. Private networks may wish to restrict access for new nodes joining the network as described [here](../setup-network/create-private.md#network-access-control).


## Summary of Related Links

Here is a summary of the links mentioned on this page:

- [Network requirements](./install-node.md#network-requirements)
- [Network communication](../../concepts/design/p2p.md)
- [The node configuration file](./basic-node-configuration.md#config-file)
- [Interacting with the Casper JSON-RPC API](../../developers/json-rpc/index.md)
- [Interacting with the network using CLI](../../developers/cli/index.md)
- [Bonding](../becoming-a-validator/bonding.md#example-bonding-transaction) or [unbonding](../becoming-a-validator/unbonding.md) as a validator
- [Getting a trusted node hash](./basic-node-configuration.md#trusted-hash-for-synchronizing)
- [Verifying successful staging](./upgrade.md#verifying-successful-staging)
- [Confirming that the node is synchronized](./joining.md#step-7-confirm-the-node-is-synchronized)
- [Monitoring and consuming events](../../developers/dapps/monitor-and-consume-events.md)
- [Private network access control](../setup-network/create-private.md#network-access-control)
- [FAQs for a basic validator node ](https://support.casperlabs.io/hc/en-gb/sections/6960448246683-Node-Operation-FAQ)
- [External FAQs on Mainnet and Testnet validator node setup](https://docs.cspr.community/docs/faq-validator.html)
