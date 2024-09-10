---
title: Sidecar Setup
---



# The Casper Sidecar

The Casper Sidecar is an application running alongside the node process. It allows subscribers to monitor a node's event stream, query stored events, and query the node's JSON-RPC API, thus receiving faster responses and reducing the load placed on the node. The Sidecar usually runs on the same machine as the node process, but it can be configured to run remotely if necessary. The Sidecar supports the following functionalities:

* A [server-sent events (SSE) endpoint](https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#the-sse-server) with an `/events` endpoint streaming events from all the connected nodes. The Sidecar also stores these events.
* A [REST API server](https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#the-rest-api-server) that allows clients to query stored events.
* A [JSON-RPC API](https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#the-rpc-api-server) to interact with a Casper node.
* [Legacy emulation](https://github.com/casper-network/casper-sidecar/blob/feat-2.0/LEGACY_SSE_EMULATION.md) for clients using older versions of the SSE API.

Visit GitHub for the latest source code and information on [system architecture](https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#system-components--architecture), [configurations](https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#configuring-the-sidecar), [testing](https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#running-and-testing-the-sidecar) and [troubleshooting](https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#troubleshooting-tips).

![Sidecar components and architecture diagram](./_casper-sidecar/sidecar-diagram.png)

## Configuring the Sidecar Service {#configuring-the-sidecar}

Operators need to update the Sidecar configuration file according to their needs. Detailed configuration instructions are available in [GitHub](https://github.com/casper-network/casper-sidecar/blob/feat-2.0/resources/ETC_README.md). Further details regarding each [configuration option](https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#configuring-the-sidecar) are available in GitHub.

## Installing the Sidecar {#installing-the-sidecar}

The following command will install the Debian package for the Casper Sidecar service on various Linux flavors. 

<!-- TODO Once the package is published, update the command below with the new link to the *.deb package. The link below assumes a package available locally. -->
<!--TODO update the sample output with the latest once a deb package is available. -->

```bash
sudo apt install ./casper-sidecar_0.1.0-0_amd64.deb
```

<details>
<summary><b>Sample output</b></summary>

```bash
Reading package lists... Done
Building dependency tree       
Reading state information... Done
Note, selecting 'casper-sidecar' instead of './casper-sidecar_0.1.0-0_amd64.deb'
The following NEW packages will be installed:
  casper-sidecar
0 upgraded, 1 newly installed, 0 to remove and 18 not upgraded.
Need to get 0 B/4162 kB of archives.
After this operation, 20.2 MB of additional disk space will be used.
Get:1 /home/ubuntu/casper-sidecar_0.1.0-0_amd64.deb casper-sidecar amd64 0.1.0-0 [4162 kB]
Selecting previously unselected package casper-sidecar.
(Reading database ... 102241 files and directories currently installed.)
Preparing to unpack .../casper-sidecar_0.1.0-0_amd64.deb ...
Unpacking casper-sidecar (0.1.0-0) ...
Setting up casper-sidecar (0.1.0-0) ...
Adding system user `csidecar' (UID 114) ...
Adding new group `csidecar' (GID 120) ...
Adding new user `csidecar' (UID 114) with group `csidecar' ...
Not creating home directory `/home/csidecar'.
Created symlink /etc/systemd/system/multi-user.target.wants/casper-sidecar.service → /lib/systemd/system/casper-sidecar.service.
```

</details>

<br></br>

### Monitoring the Installation {#monitoring-the-sidecar}

Check the service status:

```bash
systemctl status casper-sidecar
```

<details>
<summary><b>Sample output</b></summary>

```bash
casper-sidecar.service - Casper Event Sidecar
     Loaded: loaded (/lib/systemd/system/casper-sidecar.service; enabled; vendor preset: enabled)
     Active: active (running) since Wed 2022-12-07 20:33:29 UTC; 1min 3s ago
       Docs: https://docs.casperlabs.io
   Main PID: 16707 (casper-si)
      Tasks: 5 (limit: 9401)
     Memory: 7.1M
     CGroup: /system.slice/casper-sidecar.service
             └─16707 /usr/bin/casper-sidecar /etc/casper-sidecar/config.toml

Dec 07 20:33:29 user systemd[1]: Started Casper Event Sidecar.
```

</details>

<br></br>

Check the logs and make sure the service is running as expected.

```bash
journalctl --no-pager -u casper-sidecar
```

<details>
<summary><b>Sample output</b></summary>


```bash
Dec 05 17:24:53 user systemd[1]: Started Casper Event Sidecar.
```

</details>

<br></br>

If you see any errors, you may need to [update the configuration](#configuring-the-service) and restart the service with the commands below.

**Stopping the service:**

```bash
sudo systemctl stop casper-sidecar.service
```

**Starting the service:**

```bash
sudo systemctl start casper-sidecar.service
```

## The Admin Server

If enabled, the Sidecar's administrative API can be accessed using the following command. The `PORT` is usually `18887`, depending on how the Sidecar was configured.

```bash
http://localhost:PORT/metrics/
```

## Swagger Documentation

You can access the Swagger documentation at `http://localhost:PORT/swagger-ui/`. The `PORT` is usually `18888`, depending on how the Sidecar was configured.

## OpenAPI Specification

An OpenAPI schema is available at `http://localhost:PORT/api-doc.json/`. The `PORT` is usually `18888`, depending on how the Sidecar was configured.

## Using the Sidecar

The [Casper Sidecar Usage Guide](https://github.com/casper-network/casper-sidecar/blob/feat-2.0/USAGE.md) describes how to consume events and perform queries using the Sidecar, covering the following topics:

* Node-generated events emitted by the node(s) to which the Sidecar connects
* Sidecar-generated events originating solely from the Sidecar service and not from a node
* The RESTful endpoint for performing useful queries about the state of the network

## Troubleshooting Tips

For troubleshooting tips, visit [Github](https://github.com/casper-network/casper-sidecar/blob/feat-2.0/README.md#troubleshooting-tips).