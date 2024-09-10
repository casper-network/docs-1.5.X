# Signing Transactions

When creating a [`Transaction`](../../concepts/glossary/T.md#transaction) to be executed on a Casper network, the account owner, or more accurately, enough authorized signers must sign the transaction using their account's cryptographic key-pair. This key-pair is a combination of the account's secret and public keys. The signatures attached to the transaction allow the network to verify that it should be executed.

When a signature is attached to a transaction, it is paired with the public key of the signer, and referred to as an [`Approval`](../../concepts/serialization/types.md#approval).  Every valid transaction has at least one approval.

The signature creation process begins with the hashing of the payment and session of the transaction to create the `BodyHash`. The `BodyHash` becomes a component of the `TransactionV1Header` as outlined in the [serialization standard](../../concepts/serialization/index.md). From there, the `TransactionV1Header` can be hashed to create the `TransactionV1Hash`. As outlined above, the `TransactionV1Hash` is then combined with the account's key-pair to create the transaction's signature.

As the `TransactionV1Hash` contains a hash of the transaction's body within, any variation to any aspect of the transaction or sending account's keys would render the `TransactionV1Hash` invalid.

## Public Key Cryptography

Casper networks are compatible with both `Ed25519` and `Secp256k1` public key cryptography. When [serialized](../../concepts/serialization/index.md), public keys and signatures are prefixed with a single byte, used as a tag to denote the applicable algorithm. Ed25519 public keys and signatures are prefixed with `1`, whereas Secp256k1 are prefixed with `2`.

Casper uses `blake2b` hashing within our serialization. However, these hashed values will be hashed once again when they are signed over. The type of hashing depends on the associated keypair algorithm as follows:

* Ed25519 signs over a SHA-512 digest.

* Secp256k1 signs over a SHA-256 digest.