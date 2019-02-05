# How much does it cost to publish Inventory?

In this tutorial, you will learn about transaction costs on Ethereum
and how big are they in Winding Tree ecosystem.

## Requirements

- Ethereum wallet with ETH
> #### Info
> - [How do I generate Ethereum wallet?](how-to-generate-ethereum-wallet.md)
> - [How do I get my first Ether?](how-to-get-first-ether.md)

## Step by step

You pay certain amount of ETH for every Ethereum transaction. In order
to use Winding Tree ecosystem, you need to create a transaction at two
possible occasions - registering and updating an inventory.

Transaction cost in Ethereum is based directly on how much computational
power your transaction needs and how much data it is storing on the
network. For every operation there is a fee specified in the
[Ethereum Yellow Paper](https://ethereum.github.io/yellowpaper/paper.pdf)
(Appendix G).

Every time you post a transaction, you tell Ethereum what's the maximum
amount of gas you are willing to spend (*gas limit*) and how much ETH you are
willing to pay for a unit of gas (*gas price*). This determines how much
ETH a miner will get for that transaction when they process it.

Although the total amount of gas that a transaction needs is
deterministic, it may differ between Ethereum networks due to experiments
and slight variations. After all, testnet is for testing.

Another factor coming into play is the gas price. As it directly influences
how much ETH the miners will get, the transactions that will reward more ETH
usually get mined first. This can spiral up the gas price when the network is
overloaded. On the other hand, during times with low traffic, you can get away
with minimal gas price.

As such, all numbers here are purely orientational. It heavily depends on
current state of the network, current exchange rate of ETH to fiat currencies,
current implementation of Winding Tree Index and amount of data you are storing.

**Notice**: Ether has many sub-units, just like USD has cents. One of them is
*Gwei* and is usually used when talking about gas prices. 1 Ether consists of
a billion Gweis, i. e. 1 Ether = 1,000,000,000 Gwei (10<sup>9</sup>).

### Registering new inventory

From experience, [registering a hotel](https://ropsten.etherscan.io/tx/0x8c7a601df329d6a8c59240438445c4941fd4f9f0ff7681101f8f473dd290b2e9)
on Ropsten network costs around 575000 gas. Depending on the network load, it
may be anywhere between 0.0143758 (gas price 25 Gwei) and 0.000575 ETH
(gas price 1 Gwei).

Depending on the ETH to USD rate, it might be anywhere between 16 USD
(based on [average price from January 2018](https://www.investing.com/crypto/ethereum/eth-usd-historical-data))
and USD 0.06 ([average based on price from January 2019](https://www.investing.com/crypto/ethereum/eth-usd-historical-data)).

### Updating an existing inventory

You need to update the inventory essentially only when something stored
on-chain changes which in the right setup should be virtually never.

But from experience, [updating a hotel](https://ropsten.etherscan.io/tx/0x097541d24ca6b20946f9e82c0190c63a2efe2f7978270a8c7cd65f2bf87ee920)
on Ropsten network costs around 52000 gas. Depending on the network load, it
may be anywhere between 0.0013008 (gas price 25 Gwei) and 0.000052 ETH
(gas price 1 Gwei).

Depending on the ETH to USD rate, it might be anywhere between 1.46 USD
(based on [average price from January 2018](https://www.investing.com/crypto/ethereum/eth-usd-historical-data))
and USD 0.006 ([average based on price from January 2019](https://www.investing.com/crypto/ethereum/eth-usd-historical-data)).


## Where to next

- [What is Ethereum Gas: Step-By-Step Guide (blockgeeks.com)](https://blockgeeks.com/guides/ethereum-gas-step-by-step-guide/)
- [What is current status of gas on Ethereum mainnet? (ethgasstation.info)](https://ethgasstation.info/)
- [How to publish inventory](how-to-publish-inventory.md)