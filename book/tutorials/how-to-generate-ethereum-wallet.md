# How to generate Ethereum wallet?

In this tutorial, you will learn what an Ethereum wallet
is, why do you need it and how to get one.

# Step by step

[Ethereum](https://ethereum.org/) is a blockchain application platform.
Every participant is identified by a public unique address, such as
`0xd037ab9025d43f60a31b32a82e10936f07484246`. This address is sometimes
called Ethereum wallet. A single person can own many addresses at
once. And behind some addresses there aren't even people, but computer code.

## How do I own a wallet?

Every address is derived from a thing called [private key](https://en.wikipedia.org/wiki/Public-key_cryptography)
and anyone who has access to this private key is in control of the wallet.

**Never share your private key!** If you do, you are risking losing your
funds. It is like sharing a password. You should never do that.

When you are in control of a wallet, you can perform (technically correct
term is sign) transactions with it. Transactions tell Ethereum to do something,
the usual operation is to transfer [Ether (ETH)](https://www.ethereum.org/ether) or
another [ERC-20 token](https://en.wikipedia.org/wiki/ERC-20).

Every transaction also costs *gas* which is paid in ETH and the amount
spent depends on how complex your transaction is. For example registering
a hotel in Widing Tree platform will be more expensive than transferring
ETH from one wallet to another.

<!-- TODO multisigs -->

## Why do I need a wallet?

Winding Tree's core entity is deployed to Ethereum blockchain. It is
called Winding Tree Index and it's a registry of hotels, airlines and
other ecosystem participants.

In order to register your property to Winding Tree index, you need to perform
a transaction on Ethereum and that is why you need a wallet with some ETH
in it. You will also need your wallet to modify the record in Winding Tree
index.

**The important thing to know is, that only the owner of the record can
work with it. That means that only the owner of the wallet can work with the
record.** So don't throw your wallet away, it's your key to working with
your data in Winding Tree ecosystem.

## How to create a new wallet?

There are many options of how to create a new wallet. Some
more secure than others.

<!-- TODO hardware wallets, differentiate between one time interaction with WT and software-based interaction -->

Since Winding Tree ecosystem is using wallets in the
[Web3 Secret Storage](https://github.com/ethereum/wiki/wiki/Web3-Secret-Storage-Definition)
format, we will show you how to get that one.

As we said before, you should never share a private key, so
**never generate a wallet in an online service.** Use a trusted
software that is running locally and does not expose your secrets.

One of such tools is [MyCrypto](https://download.mycrypto.com/) which
allows you to generate a Keystore file.

A Keystore file is a [JSON](https://www.json.org/) file that contains
a private key encrypted by a unique passphrase. If you forget your
passphrase or lose your Keystore file, you will lose access to
your wallet. So be careful.

Upon starting MyCrypto, you can select *Create new wallet* in the
left menu. Then you select *Generate wallet* and finally a *Keystore
file*. You will put in your passphrase which encrypts the Keystore file
and then you can download the file itself. It will look like this:

```json
{
  "version": 3,
  "id": "7fe84016-4686-4622-97c9-dc7b47f5f5c6",
  "address": "d037ab9025d43f60a31b32a82e10936f07484246",
  "crypto": {
    "ciphertext": "ef9dcce915eeb0c4f7aa2bb16b9ae6ce5a4444b4ed8be45d94e6b7fe7f4f9b47",
    "cipherparams": {
      "iv": "31b12ef1d308ea1edacc4ab00de80d55"
    },
    "cipher": "aes-128-ctr",
    "kdf": "scrypt",
    "kdfparams": {
      "dklen": 32,
      "salt": "d06ccd5d9c5d75e1a66a81d2076628f5716a3161ca204d92d04a42c057562541",
      "n": 8192,
      "r": 8,
      "p": 1
    },
    "mac": "2c30bc373c19c5b41385b85ffde14b9ea9f0f609c7812a10fdcb0a565034d9db"
  }
}
```

In addition to the Keystore file, you can save and even print your private key. That's
an equivalent to the Keystore file and password combination. Protect it with the same
care.

This JSON file can directly be used when [creating an account in Write API](how-to-setup-write-api.md).
Without ETH associated with this wallet, however, you are not yet able to
create transactions in the Ethereum network.


# Where to next

- [How do I buy my first Ether?](how-to-get-first-ether.md)
