---
title: Node Events
---

# The Node's Event Stream

Each Casper node streams events through the SSE (Server Sent Event) server via an `/events` endpoint and the port specified as the `event_stream_server.address` in the node's *config.toml*. This port is by default `9999` for nodes on [Testnet](https://testnet.cspr.live/tools/peers) and [Mainnet](https://cspr.live/tools/peers).

## Monitoring a Node's Event Stream

As an operator, you can use cURL to monitor the event stream on a node.

```bash
curl -s http://HOST:PORT/events/
```

- `HOST` - The IP address of a node on the network.
- `PORT` - The port specified as the `event_stream_server.address` in the node's *config.toml*.

Another helpful tool is the [Casper Sidecar](./casper-sidecar.md), which provides the recommended way to monitor events on a node. Visit the [Casper Sidecar Usage Guide](https://github.com/casper-network/casper-sidecar/blob/feat-2.0/USAGE.md#the-sidecar-event-stream) for a detailed list of events and REST queries you can use to monitor the node and the state of the network.

## Replaying the Event Stream

This command will replay the event stream from an old event onward. If the ID is 0 or if you specify an event ID already purged from the cache, the server will replay all the cached events. Replace the `HOST`, `PORT`, and `ID` fields with the needed values.

```bash
curl -sN http://HOST:PORT/events?start_from=ID
```

**Example:**

```bash
curl -sN http://65.21.235.219:9999/events?start_from=29267508
```

:::note

The node stores only a limited number of events in its cache, which can be configured using the `event_stream_buffer_length` in the *config.toml*. The intended use case is to allow the Sidecar consuming the event stream to reconnect (if it loses its connection) and catch up with the events emitted while it was disconnected.

The [Casper Sidecar](./casper-sidecar.md) may store additional events depending on how it was configured.

:::