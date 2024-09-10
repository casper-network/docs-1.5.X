# Staking

<!--TODO updates needed once 2.0 rolls out: number of validators, unbonding period, block times. -->

The Casper Mainnet is a Proof-of-Stake blockchain that allows validators to stake the Casper native token CSPR on the network. Validators receive CSPR as an incentive for maintaining and securing the network. CSPR rewards are distributed as blocks are validated into existence and organized into eras.

**Consensus mechanism:** The Casper Mainnet and Testnet use a Proof-of-Stake consensus mechanism called [Zug](../design/zug.md). Another Casper network can choose between Zug and [Highway](../design/highway.md) using the network's chainspec.

**Number of validators:** The Casper Mainnet supports up to 100 validators on the network. This number was chosen to strike a balance between performance and decentralization. This platform parameter can be increased through upgrades as development continues and performance improves. In addition, validators can stake on the Casper Mainnet through permissionless bonding by participating in an auction for the validator slot.

**Permission-less bonding:** For validators to begin staking and earning rewards, they must win a staking auction by competing with current and prospective validators to supply one of the forthcoming top stakes for a given era. This process is permissionless, meaning validators can join and leave the auction without restrictions, except for a waiting period to unlock staked tokens.

**Unbonding:** To detach from the Casper Mainnet, it takes seven eras for both validators and delegators. Neither validators nor delegators receive rewards for the seven eras required for unbonding, as they are not actively contributing to the network's security during that time. However, during the unbonding period, they may receive rewards for participating in past eras. Read about rewards distribution [here](./consensus.md#distribution). The current unbonding period on the Casper Mainnet is 14 hours, based on the chainspec settings.

**Eras and block times:** An era on the Casper Mainnet is roughly 2 hours long. Casper's Zug consensus allows validators to propose blocks as quickly as network conditions allow. We anticipate block times to last between 8 seconds and 1 minute.

**Block rewards:** Validators receive [rewards](../design/rewards.md) proportional to their weight for securing the network and participating in consensus by producing blocks and generating and distributing finality signatures. Delegators receive a portion of the validator's rewards, proportional to what they delegated, minus the validator's delegation rate. The rewards earned are reduced if a validator is offline or cannot participate.

**Reward calculations:** Reward calculations depend only on the linear structure of the blockchain and published finality signatures rather than block time or consensus mechanism. Reward calculations assume a known constant token supply inflation with nominal platform operation.

**Reward cycle:** Rewards are [calculated and distributed](./consensus.md#distribution) to validators and delegators at the end of an era for all blocks in that era and several eligible blocks from the previous era. The algorithm looks back into blocks from the previous era to compensate for the delay in creating and distributing finality signatures.

**Token supply and inflation:** Mainnet launched with ten billion CSPR at genesis. The target annual supply growth rate is 8%.

<!--TODO We might want to update the numbers. As of Aug '24, these numbers are still correct. I checked with JS.-->
**Annual reward percentage:** Validators on the Casper Mainnet earned between 10% and 20% of their staked CSPR in the first year of the Mainnet operation, with regular participation under expected network conditions. The growth of individual stakes depends on the total active stake, as only a fixed number of tokens is created per era.

**Slashing:** Presently Casper does not slash if a validator equivocates or misbehaves. If a node equivocates, other validators will ignore its messages, and the node will become inactive. The node will terminate once it detects that it has equivocated.

**Delegation rate:** Validators define a delegation rate that they take in exchange for providing staking services. This rate is a percentage of the rewards that the validator retains for their services.
