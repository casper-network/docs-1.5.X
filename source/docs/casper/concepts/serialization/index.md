# Binary Serialization Standard {#serialization-standard-head}

We provide a custom implementation to serialize data structures used by the Casper node to their byte representation. This category details custom serialization implementation, allowing developers to build a library that is compatible with the custom serialization.

The `Casper Binary Serialization Standard` uses a default `u8` byte tag to identify the subsequent data's type and direct further deserialization. Additional serialization rules can be found in the following sub-categories.

| Page | Description |
| ---- | ----------- |
| [Primitives](./primitives.md) | Base-level types used to create more complex structures. |
| [Structures](./structures.md) | Major structures used through Casper systems, as well as their included sub-types. |
| [Types](./types.md) | Minor types not covered `Primitives` or `Structures` |