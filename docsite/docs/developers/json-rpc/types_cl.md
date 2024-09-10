# CLType

Casper types, i.e. types which can be stored and manipulated by smart contracts. Provides a description of the underlying data type of a [`CLValue`](#clvalue).

* `Bool` Primitive
* `I32` Primitive
* `I64` Primitive
* `U8` Primitive
* `U32` Primitive
* `U64` Primitive
* `U128` Large unsigned integer type
* `U256` Large unsigned integer type
* `U512` Large unsigned integer type
* `Unit` Primitive
* `String` Primitive
* `Key` System type
* `URef` System type
* `PublicKey` System type
* `Option` Option of a `CLType`
* `List` Variable-length list of a single `CLType` (comparable to a `Vec`)
* `ByteArray` Fixed-length list of a single `CLType` (comparable to a Rust array)
* `Result` `Result` with `Ok` and `Err` variants of `CLType`'s
* `Map` Map with keys of a single `CLType` and values of a single `CLType`
* `Tuple1` 1-ary tuple of a `CLType`
* `Tuple2` 2-ary tuple of `CLType`s
* `Tuple3` 3-ary tuple of `CLType`s
* `Any` Unspecified type

## CLValue

A Casper value, i.e. a value which can be stored and manipulated by smart contracts. It holds the underlying data as a type-erased, serialized `Vec<u8>` and also holds the CLType of the underlying data as a separate member. The `parsed` field, representing the original value, is a convenience only available when a CLValue is encoded to JSON, and can always be set to null if preferred.

* `bytes` A Casper serialized representation of the underlying value. For more information, reference the [Serialization Standard](../../concepts/serialization/index.md).

* [`cl_type`](#cltype)
