---
title: Addressable Entity in Casper 2.0
description: An introduction to the Addressable Entity concept. 
slug: addressable-entity
date: 2024-07-17T18:00
authors: [ sczembor, melpadden ]
tags: [condor]
hide_table_of_contents: false
---

# AddressableEntity in Casper 2.0

Casper 2.0 introduces significant changes in the representation and management of accounts and smart contracts, through the introduction of the `AddressableEntity` type. This new structure replaces the separate `AccountHash` and `ContractHash` used in Casper 1.x, bringing a unified approach to interact with entities on the network. Contracts can now hold and manage funds directly through associated purses, similar to user accounts. They can also manage their own keys, enabling more sophisticated access control.

In this article, we'll dive into the details of `AddressableEntity`, exploring its structure and functionalities.

<!-- truncate -->

## Key Concepts

**AddressableEntity**

At its core, an `AddressableEntity` is a versatile data structure that represents both accounts and smart contracts within the Casper global state. It encapsulates all the necessary information for identifying and managing these entities. An `AddressableEntity` provides a unified interface for various operations, including authorization, access control, and execution of functions.

**EntityAddr**

An `EntityAddr` serves as the address for an `AddressableEntity`. It not only encodes the unique identifier (hash) of the entity but also its type. There are three distinct variants of `EntityAddr`:

1.  **System:** Used for built-in, native contracts crucial for the blockchain's operation.
2.  **Account:**  Represents a user's account.
3.  **SmartContract:** Represents a user-deployed smart contract.

**AddressableEntityHash**

The `AddressableEntityHash` is a newtype wrapper around a 32-byte hash (`HashAddr`). This hash functions as a unique identifier for the `AddressableEntity`, typically derived from either the account's public key or the smart contract's hash using hashing algorithm.

## The inner workings of AddressableEntity

Let's dive into the critical components within an `AddressableEntity`:

*   **`protocol_version` (ProtocolVersion):**  This field indicates the protocol version that the entity is compatible with. It ensures backward compatibility and allows for smooth upgrades as the Casper network evolves.
*   **`entity_kind` (EntityKind):** As mentioned earlier, this enum determines the type of entity – System, Account, or SmartContract.
*   **`associated_keys` (AssociatedKeys):** This data structure stores a map of public keys authorized to interact with the entity. Each key is associated with a weight that represents its voting power in decision-making processes within the entity.
*   **`action_thresholds` (ActionThresholds):** These thresholds define the minimum combined weight of associated keys required to authorize specific actions. The three main action types are `deployment`, `key_management`, and `upgrade_management`. Each action type has its own weight threshold, allowing for fine-grained control over permissions.
*   **`entry_points` (EntryPoints):** This component is relevant only for smart contracts. It defines the functions (entry points) that external actors can call on the contract, along with their parameters, return types, and access permissions.

## Obtaining and converting Keys

In Casper 2.0, developers will primarily work with `Key::AddressableEntity` when referring to accounts and smart contracts. Here's how you can create them and convert between different key formats:

### Creating AddressableEntity Keys

**From Account Hash:**

```rust
let addressable_entity_key = Key::AddressableEntity(EntityAddr::Account(account_hash)); 
```

**From Smart Contract Hash:**

```rust
let addressable_entity_key = Key::AddressableEntity(EntityAddr::SmartContract(contract_hash));
```

### Extracting AccountHash or ContractHash from a Key
You can extract the `AccountHash` or `ContractHash` from a `Key::AddressableEntity` using pattern matching:

```rust
//For Accounts
let account_hash = match addressable_entity_key {
    Key::AddressableEntity(EntityAddr::Account(hash)) => hash,
    _ => panic!("Not an account key"), 
};
//For Contracts
let contract_hash = match addressable_entity_key {
    Key::AddressableEntity(EntityAddr::SmartContract(hash)) => hash,
    _ => panic!("Not a contract key"), 
};
```

## The Address Merge in Condor

The "Address Merge" in the Condor upgrade of Casper is a foundational shift, impacting how accounts and smart contracts are identified and interacted with.  

**Global State Transformation:**

Post-Condor, all accounts and smart contract addresses residing within the global state will be automatically migrated to the `AddressableEntity` structure. This means the network itself will recognize and handle these entities using the new format.

**Smart Contract Compatibility Considerations:**

While the global state automatically transitions to `AddressableEntity`, existing contracts are expected to function without any modification. 

* **Caller Identification:**
Existing host functions used to identify the caller within your contract will continue to work as before, ensuring no disruption to your contract's functionality. However, new host functions have been introduced that are specifically designed to work with the AddressableEntity format.

* **External Contract Interaction:** Other contracts may have updated their interfaces to accept AddressableEntity arguments. Its worth to verify the argument types to avoid potential errors.

> **Note**
> * Upgrading a contract to a newer version may involve complexities, such as changes to the contract's addressable hash. These changes might require coordination with centralized and decentralized exchanges, as well as communication with your community to ensure a smooth transition.