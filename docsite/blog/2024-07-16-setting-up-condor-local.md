---
title: Setting Up a Local Casper Condor Network for Development
description: How to set up a local Casper Condor Network for Development using CCTL and the Rust Casper client.
slug: condor-local-setup
date: 2024-07-16T18:00
authors: [ sczembor ]
tags: [condor, setup]
hide_table_of_contents: false
---

# Setting Up a Local Casper Condor Network for Development

Casper Condor is a major upgrade to the Casper Network. This guide walks you through creating a local Condor environment for testing and development using Dockerized NCTL and the Rust Casper Client.

<!-- truncate -->

## Prerequisites

* Docker installed and running on your machine 

## Part 1: The Dockerized NCTL (Network Control Tool)

NCTL is your tool for managing the Casper network. We'll use a Dockerized version for easier setup.

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/make-software/casper-nctl-docker.git
   cd casper-nctl-docker
   ```

2. **Switch to the Condor Branch:**
   ```bash
   git checkout feat-2.0
   ```

3. **Clone the `casper-node` Repository:**
   ```bash
   git clone https://github.com/casper-network/casper-node.git
   cd casper-node
   git checkout release-2.0.0-rc3
   ```
   Ensure you're in the `casper-nctl-docker` directory when running this command

4. **Build the Docker Image:**
   ```bash
   docker build -f casper-nctl-condor.Dockerfile -t casper-nctl:rc3 .
   ```
   This may take a while

5. **Verify the Image:**
   ```bash
   docker image ls
   ```
   Look for the `casper-nctl:rc3` image in the output
   ```
   REPOSITORY                 TAG        IMAGE ID       CREATED        SIZE
   casper-nctl                rc3        9fd1e7b25d42   40 hours ago   433MB
   ```

6. **Start the NCTL Docker Container:**
   * **Docker Compose (Recommended):** If you're using the `docker-compose.yml` file, make sure that  the `image` under the `mynctl` service points to `casper-nctl:rc3`. Then run `docker-compose up`.
   * **Manual Docker Command:** 
      ```bash
      docker run -d --name mynctl -p 11101:11101 casper-nctl:rc3
      ```

      Once it is up and running you should see that there are 5 nodes and 5 sidecars running and another 5 nodes and 5 sidecars that are inactive:
     ```
      casper-nctl  | validators-1:casper-net-1-node-1       RUNNING   pid 996, uptime 0:00:03
      casper-nctl  | validators-1:casper-net-1-node-2       RUNNING   pid 998, uptime 0:00:03
      casper-nctl  | validators-1:casper-net-1-node-3       RUNNING   pid 1002, uptime 0:00:03
      casper-nctl  | validators-1:casper-net-1-sidecar-1    RUNNING   pid 997, uptime 0:00:03
      casper-nctl  | validators-1:casper-net-1-sidecar-2    RUNNING   pid 1000, uptime 0:00:03
      casper-nctl  | validators-1:casper-net-1-sidecar-3    RUNNING   pid 1011, uptime 0:00:03
      casper-nctl  | validators-2:casper-net-1-node-4       RUNNING   pid 1082, uptime 0:00:02
      casper-nctl  | validators-2:casper-net-1-node-5       RUNNING   pid 1084, uptime 0:00:02
      casper-nctl  | validators-2:casper-net-1-sidecar-4    RUNNING   pid 1083, uptime 0:00:02
      casper-nctl  | validators-2:casper-net-1-sidecar-5    RUNNING   pid 1085, uptime 0:00:02
      casper-nctl  | validators-3:casper-net-1-node-10      STOPPED   Not started
      casper-nctl  | validators-3:casper-net-1-node-6       STOPPED   Not started
      casper-nctl  | validators-3:casper-net-1-node-7       STOPPED   Not started
      casper-nctl  | validators-3:casper-net-1-node-8       STOPPED   Not started
      casper-nctl  | validators-3:casper-net-1-node-9       STOPPED   Not started
      casper-nctl  | validators-3:casper-net-1-sidecar-10   STOPPED   Not started
      casper-nctl  | validators-3:casper-net-1-sidecar-6    STOPPED   Not started
      casper-nctl  | validators-3:casper-net-1-sidecar-7    STOPPED   Not started
      casper-nctl  | validators-3:casper-net-1-sidecar-8    STOPPED   Not started
      casper-nctl  | validators-3:casper-net-1-sidecar-9    STOPPED   Not started
     ```


## Part 2: Casper Client (Rust)

To interact with your local Condor network, we'll use the Casper Client. You have two options for using the Casper Client:

**Option 1: Using the Casper Client from the Docker Image**

* The `casper-nctl:rc3` Docker image already includes the `casper-client`.
* You can skip the next two steps if you want to use the pre-installed client.

**Option 2: Using Your Local Casper Client**

1. **Clone the Repository (Optional):**
   ```bash
   git clone https://github.com/casper-ecosystem/casper-client-rs.git
   cd casper-client-rs
   ```

2. **Switch to the Condor-Compatible Branch  (Optional):**
   ```bash
   git checkout feat-track-node-2.0
   ```

3. **Activate NCTL scripts:**
   ```bash
   source nctl-activate.sh casper-nctl
   ```

4 **Test Your Setup:**
   ```bash
   nctl-view-node-status
   ```
   This command should return the status of all the nodes running in your local network, indicating a successful setup. The output should look similar to this:
   ```
   ------------------------------------------------------------------------------------------------------------------------------------
   2024-07-10T15:31:42.181535 [INFO] [2043] NCTL :: node #1 :: status:
   {
   "api_version": "2.0.0",
   "peers": [
      {
         "node_id": "tls:05b5..7b39",
         "address": "127.0.0.1:22103"
      },
      {
         "node_id": "tls:527e..37d2",
         "address": "127.0.0.1:22105"
      },
      {
         "node_id": "tls:b1d0..870f",
         "address": "127.0.0.1:22102"
      },
      {
         "node_id": "tls:dcdf..e348",
         "address": "127.0.0.1:22104"
      }
   ],
   "build_version": "2.0.0-d5c0d238f",
   "chainspec_name": "casper-net-1",
   "starting_state_root_hash": "2d92cf9f3ff3eb70f40be598b61cbf747c1b5ea67df9596d84a88c5458028a80",
   "last_added_block_info": {
      "hash": "c1056e0e5978e725777f48e4488462d7794e6547f25b1fbcc4ba261ca2864395",
      "timestamp": "2024-07-10T15:31:38.601Z",
      "era_id": 19,
      "height": 205,
      "state_root_hash": "6c5502c3443f526e943fa5a5421349e938464c063c8dd0ada616c997e3805612",
      "creator": "0190664e16a17594ed2d0e3c279c4cf5894e8db0da15e3b91c938562a1caae32ab"
   },
   "our_public_signing_key": "01fed662dc7f1f7af43ad785ba07a8cc05b7a96f9ee69613cfde43bc56bec1140b",
   "round_length": "4s 96ms",
   "next_upgrade": null,
   "uptime": "13m 15s",
   "reactor_state": "Validate",
   "last_progress": "2024-07-10T15:18:26.354Z",
   "available_block_range": {
      "low": 0,
      "high": 205
   },
   "block_sync": {
      "historical": null,
      "forward": null
   },
   "latest_switch_block_hash": "5192198c783ed8b66e206c37b34c5e268c84be2f4b78dd9899eecf5f37fb9f68"
   }
   .
   .
   .
   ```

## Troubleshooting

**If sidecars or nodes are not running:** If you see `null` values under each node in the output of `nctl-view-node-status`, it means the version of `casper-sidecar` is not compatible with the `casper-node`.

**Solution:**
1. Go to the `casper-node/ci/ci.json` file.
2. Change the `casper-sidecar` branch under `external_deps` from:
   ```json
   "branch": "feat-2.0"
   ``` 
   to:
   ```json
   "branch": "release-1.0.0rc2_node-2.0.0rc3" 
   ```

   This is because the `casper-node` we are using is `release-2.0.0-rc3`. The required combination of versions of `casper-sidecar` and `casper-node` may change in the future (rc4 etc.).

3. Rebuild the NCTL image: `docker build -f casper-nctl-condor.Dockerfile -t casper-nctl:rc3 .`

## Using the Casper Client

* **Command Format(Using local casper-client):** `cargo run --release [command] --node-address http://127.0.0.1:11101`
* **Command Format(Using casper-client from the docker image):** `casper-client [command] --node-address http://127.0.0.1:11101`

## Accessing the NCTL Block Web Explorer

The NCTL Docker setup includes a web-based block explorer.  You can access it in your browser at:

```
http://127.0.0.1:8080
```

This allows you to visually explore blocks, transactions, and other details of your local network.

## Important Notes

* **Work in Progress:** Condor compatibility is still evolving. Some features may be unstable or incomplete.

## Additional Tips

* **Community Resources:** Join the [Casper Telegram](https://t.me/CSPRCondor) for help and discussion.