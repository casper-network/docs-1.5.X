# Primitives and Basic Serialization Rules

## `CLValue` {#clvalue}

`CLValue` describes data that is used by smart contracts. This could be a local state variable, input argument, or return value. A `CLValue` consists of two parts: a `CLType` describing the type of the value and an array of bytes representing the data in our serialization format.

`CLType` is described by the following recursive data type:

```rust
enum CLType {
   Bool, // boolean primitive
   I32, // signed 32-bit integer primitive
   I64, // signed 64-bit integer primitive
   U8, // unsigned 8-bit integer primitive
   U32, // unsigned 32-bit integer primitive
   U64, // unsigned 64-bit integer primitive
   U128, // unsigned 128-bit integer primitive
   U256, // unsigned 256-bit integer primitive
   U512, // unsigned 512-bit integer primitive
   Unit, // singleton value without additional semantics
   String, // e.g. "Hello, World!"
   URef, // unforgeable reference (see above)
   Key, // global state key (see above)
   PublicKey // A Casper system PublicKey type
   Option(CLType), // optional value of the given type
   List(CLType), // list of values of the given type (e.g. Vec in rust)
   ByteArray(CLType, u32), // same as `List` above, but number of elements
                           // is statically known (e.g. arrays in rust)
   Result(CLType, CLType), // co-product of the given types;
                           // one variant meaning success, the other failure
   Map(CLType, CLType), // key-value association where keys and values have the given types
   Tuple1(CLType), // single value of the given type
   Tuple2(CLType, CLType), // pair consisting of elements of the given types
   Tuple3(CLType, CLType, CLType), // triple consisting of elements of the given types
   Any // Indicates the type is not known
}
```

All data that can be assigned a (non-`Any`) `CLType` can be serialized according to the following rules, which define the Casper serialization format:

### Boolean {#clvalue-boolean}

Boolean values serialize as a single byte; `true` maps to `1`, while `false` maps to `0`.

### Numeric {#clvalue-numeric}

Numeric values consisting of 64 bits or less serialize in the two's complement representation with little-endian byte order, and the appropriate number of bytes for the bit-width.

-   E.g. `7u8` serializes as `0x07`
-   E.g. `7u32` serializes as `0x07000000`
-   E.g. `1024u32` serializes as `0x00040000`

-   Wider numeric values (i.e. `U128`, `U256`, `U512`) serialize as one byte given the length of the next number (in bytes), followed by the two's complement representation with little-endian byte order. The number of bytes should be chosen as small as possible to represent the given number. This reduces the serialization size when small numbers are represented within a wide data type.

-   E.g. `U512::from(7)` serializes as `0x0107`
-   E.g. `U512::from(1024)` serializes as `0x020004`
-   E.g. `U512::from("123456789101112131415")` serializes as `0x0957ff1ada959f4eb106`

### Unit {#clvalue-unit} 

Unit serializes to an empty byte array.

### String {#clvalue-string}

Strings serialize as a 32-bit integer representing the length in bytes (that might be different than the number of characters since special characters, such as emojis, take more than one byte), followed by the UTF-8 encoding of the characters in the string.

-   E.g. `"Hello, World!"` serializes as `0x0d00000048656c6c6f2c20576f726c6421`

### Option {#clvalue-option}

Optional values serialize with a single byte tag, followed by the serialization of the value itself. The tag is equal to `0` if the value is missing, and `1` if it is present.

-   E.g. `None` serializes as `0x00`
-   E.g. `Some(10u32)` serializes as `0x010a000000`

### List {#clvalue-list}

A list of values serializes as a 32-bit integer representing the number of elements in the list (differing from strings where it gives the number of _bytes_), followed by the concatenation of each serialized element.

-   E.g. `List()` serializes as `0x00000000`
-   E.g. `List(1u32, 2u32, 3u32)` serializes as `0x03000000010000000200000003000000`

### ByteArray {#clvalue-ByteArray}

A fixed-length list of values serializes as the concatenation of the serialized elements. Unlike a variable-length list, the length is not included in the serialization because it is statically known by the type of the value.

-   E.g. `[1u32, 2u32, 3u32]` serializes as `0x010000000200000003000000`

### Result {#clvalue-result}

A `Result` serializes as a single byte tag followed by the serialization of the contained value. The tag is equal to `1` for the success variant and `0` for the error variant.

    -   E.g. `Ok(314u64)` serializes as `0x013a01000000000000`
    -   E.g. `Err("Uh oh")` serializes as `0x00050000005568206f68`

### Tuple {#clvalue-tuple}

Tuples serialize as the concatenation of their serialized elements. Similar to `ByteArray` the number of elements is not included in the serialization because it is statically known in the type.

    -   E.g. `(1u32, "Hello, World!", true)` serializes as `0x010000000d00000048656c6c6f2c20576f726c642101`

### Map {#clvalue-map}

A `Map` serializes as a list of key-value tuples. There must be a well-defined ordering on the keys, and in the serialization, the pairs are listed in ascending order. This is done to ensure determinism in the serialization, as `Map` data structures can be unordered.

### URef {#clvalue-uref}

`URef` values serialize as the concatenation of their address (a fixed-length list of `u8`) and a single byte tag representing access rights, which are converted as follows:

| Access Rights    | Serialization |
| ---------------- | ------------- |
| `NONE`           |  0           |
| `READ`           |  1           |
| `WRITE`          |  2           |
| `READ_WRITE`     |  3           |
| `ADD`            |  4           |
| `READ_ADD`       |  5           |
| `ADD_WRITE`      |  6           |
| `READ_ADD_WRITE` |  7           |

    
:::warning

When passing a URef to another entity on chain, you must ensure that the `AccessRights` are set correctly. If the URef represents a [purse](../glossary/P.md#purse), `AccessRights` impact who can deposit and withdraw CSPR.

:::
    
If a passed URef contains `ADD` permissions, the entity receiving the URef will then be able to deposit CSPR into the associated purse. `WRITE` permissions allow for withdrawing CSPR. As of 1.4.5, passing a main purse URef as a runtime argument will cause the host to automatically remove `WRITE` permissions. In this event, `READ` and `ADD` permissions will remain. Regardless, all due diligence should be performed to avoid passing a URef with `WRITE` permissions unintentionally.

### PublicKey {#clvalue-publickey}

`PublicKey` serializes as a single byte tag representing the algorithm followed by 32 bytes of the `PublicKey` itself:

-   If the `PublicKey` is a `System` key, the single tag byte is `0`. With this variant, the single byte of `0` is the entire key.
-   If the `PublicKey` is an `Ed25519` key, the single tag byte is `1` followed by the individual bytes of the serialized key.
-   If the `PublicKey` is a `Secp256k1` key, the single tag byte is a `2` followed by the individual bytes of the serialized key.

### Key {#clvalue-key}

`Key` values serialize as a single byte tag representing the variant, followed by the serialization of the data that the variant contains. For most variants, this is simply a fixed-length 32-byte array. The exception is `Key::URef`, which contains a `URef`; so its data serializes per the description above. The tags are as follows: `Key::Account` serializes as `0`, `Key::Hash` as `1`, `Key::URef` as `2`.

### CLType {#clvalue-cltype}

`CLType` itself also has rules for serialization. A `CLType` serializes as a single-byte tag, followed by the concatenation of serialized inner types, if any (e.g., lists and tuples have inner types). `ByteArray` is a minor exception because it also includes the length in the type. However, the length is included in the serialization (as a 32-bit integer, per the serialization rules above), following the serialization of the inner type. The tags are as follows:

| `CLType`    | Serialization Tag |
| ----------- | ----------------- |
| `Bool`      |  0               |
| `I32`       |  1               |
| `I64`       |  2               |
| `U8`        |  3               |
| `U32`       |  4               |
| `U64`       |  5               |
| `U128`      |  6               |
| `U256`      |  7               |
| `U512`      |  8               |
| `Unit`      |  9               |
| `String`    |  10              |
| `Key`       |  11              |
| `URef`      |  12              |
| `Option`    |  13              |
| `List`      |  14              |
| `ByteArray` |  15              |
| `Result`    |  16              |
| `Map`       |  17              |
| `Tuple1`    |  18              |
| `Tuple2`    |  19              |
| `Tuple3`    |  20              |
| `Any`       |  21              |
| `PublicKey` |  22              |

### CLValue {#clvalue-clvalue}

A complete `CLValue`, including both the data and the type, can also be serialized (to store it in the global state). This is done by concatenating: the serialization of the length (as a 32-bit integer) of the serialized data (in bytes), the serialized data itself, and the serialization of the type.

### Contracts {#global-state-contracts}

Contracts are a special value type because they contain the on-chain logic of the applications running on a Casper network. A _contract_ contains the following data:

-   a [wasm module](https://webassembly.github.io/spec/core/syntax/modules.html)
-   a collection of named keys
-   a protocol version

The wasm module must contain a function named `call`, which takes no arguments and returns no values. This is the main entry point into the contract. Moreover, the module may import any of the functions supported by the [Casper runtime](../design/casper-design.md#execution-semantics-runtime).

Note: though the `call` function signature has no arguments and no return value, within the `call` function body, the `get_named_arg` runtime function can be used to accept arguments (by ordinal), and the `ret` runtime function can be used to return a single `CLValue` to the caller.

The named keys are used to give human-readable names to keys in the global state, which are essential to the contract. For example, the hash key of another contract it frequently calls may be stored under a meaningful name. It is also used to store the `URef`s, which are known to the contract (see the section on Permissions for details).

Each contract specifies the Casper protocol version that was active when the contract was written to the global state.