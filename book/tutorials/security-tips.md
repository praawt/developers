# Security tips

In this tutorial, you will learn a few security tips
regarding [Winding Tree Write API](https://github.com/windingtree/wt-write-api)
and wallet management.

## Requirements

- Ethereum wallet
> #### Info
> [How do I generate Ethereum wallet?](how-to-generate-ethereum-wallet.md)

## Step by step

Ethereum's best practice is to sign every transaction locally,
in a way that your private key never leaves your computer.
But in an environment where you need to issue many transactions,
it is just not feasible to sign everything by hand.

Another best practice is to protect the private key by a passphrase.
That's exactly what the wallet in a
[Web3 Secret Storage format](https://github.com/ethereum/wiki/wiki/Web3-Secret-Storage-Definition)
enables us. But this wallet file has to inevitably be stored in
a software, in our case Write API.

And it is also inevitable that you have to decrypt the wallet
file to extract the private key when you need to sign a transaction.

The Write API design tries to at least decouple the wallet
and the passphrase as much as possible. That's why you
have to provide your wallet passphrase with every request. The
private keys are only exposed in-memory for the shortest time possible.

Here are some more tips on how to make your Write API instance
as secure as possible.

### Network isolation

Since the Write API stores an Ethereum wallet for every account
and it can possibly hold dozens or hundreds of accounts and
therefore wallets, it can easily become an attacker's target.

By design, an attacker can try to crack the passphrases totally
offline with as much computing power as she can.

**That is why we recommend to run the Write API in a secure
isolated network and prevent access to it from the public
internet.**

### Funds

Because you can never be sure that your wallets from Write
API are totally safe, you should take an extra measure and
keep the amount of ETH in them limited only to cover the
necessary costs.

If you hold large amounts of ETH, you should never make
them available in a wallet stored in any software.

**That is why we recommend to keep the ETH funds assigned
to each wallet to a bare minimum.**

<!-- TODO mulitsigs -->

### Data isolation

Write API allows you to control many records in Winding Tree
Index under a single Ethereum wallet. That means that
such wallet is an owner of all of the records in Winding Tree
Index and if it gets compromised, an attacker will get control
of all of these records.

It is a best practice to have every record managed by a different
Ethereum wallet. This also brings you performance gains as it 
will allow you to publish changes for multiple records to the 
same Ethereum block.

**That is why we recommend to associate a particular wallet
with only one Write API account and use that account to manage only
one record in Winding Tree Index.**

## Where to next

- [How to setup Winding Tree Write API?](how-to-setup-write-api.md)

