---
title: Addressable Entities
# slug: /addressable-entities
---

# Addressable Entities

## What is an Addressable Entity?

The [`AddressableEntity`](../concepts/glossary/A.md#addressable-entity) data structure encapsulates the behaviour and data associated with several related concepts within the Casper type system. 
Casper 2.0 introduces the concept of an [`AddressableEntity`](../concepts/glossary/A.md#addressable-entity) which replaces the existing [`Account`](./glossary/A.md#account) and [`Contract`](./glossary/S.md#smart-contract) types.

The merger of the `Account` and `Contract` concepts allows for some new possibilities. 

For any given `AddressableEntity`, the `EntityType` will identify if it is an `Account`, a user-deployed `SmartContract`, or a `System` contract such as `Mint` or `HandlePayment`.

This `EntityType` will dictate what the addressable entity can and cannot do.

## Account

An addressable entity marked as an `Account` will behave in much the same way as a traditional legacy account on a Casper network. It will have an associated key pair of a `PublicKey` and a secret key, and an `AccountHash` derived from the public key. There is also an associated main purse.

A legacy account will automatically migrate to an addressable entity when it interacts with the network, with no action necessary on the user side. Their key pair will continue functioning as it did prior to the migration. Further, their main purse will remain the same.

## SmartContract

An addressable entity marked as a `SmartContract` will have the same functionality as a legacy contract, but with several new features. The `SmartContract` now possesses a main purse, and may have [associated keys](../concepts/design/casper-design.md#accounts-associated-keys-weights) and action thresholds that behave in the same way as an account. More information on multi-signature management, associated keys, and action thresholds can be found [here](../resources/advanced/multi-sig/multi-sig-workflow.md).

## System

As part of the migration to Casper 2.0, system contracts (`Mint`, `Auction` and `HandlePayment`) will migrate to a special type of addressable entity with the `EntityType` of `System`. The `StandardPayment` system contract will be pruned away.

### Further Reading

- [Accounts and Keys](../concepts/accounts-and-keys.md)
- [Smart Contracts](../concepts/smart-contracts.md)
- [Hash Types](../concepts/key-types.md)
- [Multi-Signature Management](../resources/advanced/multi-sig/index.md)
