# Winding Tree Platform Overview

Winding Tree is a direct-connect marketplace for travel companies. It is an open-source ecosystem of interoperable API standards and harmonized data structures enabling decentralized distribution and discovery of travel products and services, built using Ethereum, distributed databases and other open technologies.

If you are already familiar with Winding Tree on the high level, feel free to skip to the [technical documentation](getting-started.md).

## Who is It For?

Winding Tree is a completely decentralized platform (like the Internet) where **travel suppliers** (hotels, airlines, car rentals, insurance providers, etc.) can showcase their products and services without a need to go through an intermediary. And, of course, where **travel agencies and travel management companies** can access those products and purchase them.

Moreover, because the platform is open-source, we foresee that new products and services will be added to it soon. Are you an **insurance company** or **provider of security information**? Why not offer your products to OTAs and TMCs on the platform? Are you a new OTA? Gain competitive advantage by combining travel products in new interesting ways.

## Why Decentralization Matters?

Current intermediaries in the travel industry don't just charge unnecessarily large fees, they also act as gatekeepers of the industry, picking and choosing companies and ideas that will have access to the marketplace. Because there are just few intermediaries, they also don't have any incentive to update their technology stack, that's why travel tech is so out of date. (To better understand this issue, we recommend reading [The Master Switch](https://www.goodreads.com/book/show/8201080-the-master-switch) by Tim Wu.)

## What Winding Tree is Not

Winding Tree is not a website for booking travel, nor we're a PMS or PSS (although we've created examples of how these systems can be built on top of the platform). Winding Tree is just a set of protocols and conventions built in a collaborative way.

![wt platform](assets/diagram.png)

## What Does Winding Tree Do?

Winding Tree is designed to provide two key features that any marketplace requires: aggregation and trust.

### Aggregation

There are thousands of travel companies out there and it is not feasible to connect to each and every one individually. That's why aggregation is important and why current intermediaries are so powerful, not because they have great technology.

### Trust

As a supplier, you want to control who can access your inventory. And as a buyer of travel products you want to be sure that the hotel you're booking for your customer exists. Winding Tree Protocol defines a few rules that help both buyers and sellers to establish trust in each other, all in a completely decentralized manner.

## How Does Winding Tree Work?

Functional components of the Winding Tree platform are:

- Identity Registry Smart Contract (IRSC)
- Hotel Index Smart Contract (HISC)
- Airline Index Smart Contract (AISC)

Winding Tree also defines a few data standards for working with the smart contracts above and provides libraries to simplify the workflow. Below is an example workflow to send a transaction on the platform:

1. Hotel registers with IRSC
2. Hotel registers with HISC
3. OTA registers with IRSC
4. OTA performs a search through HISC and discovers the Hotel
5. OTA and Hotel can now communicate through their APIs directly, but that communication should be signed with both companies' ID keys

Please note that the actual booking requests and confirmations are never stored on the blockchain in any shape or form.

## Use-Cases

The distribution use-case is covered in the example above. An OTA can easily access inventory from many companies. What else can be done on top of the platform?

### Settlement

Because all the API calls between market participants are signed with their keys, both companies have unfalsifiable proof of these transactions. E.g. the hotel has a record of the OTA owing them a certain amount of money. At the same time the OTA has evidence that the hotel has to provide rooms for the OTA customers.

### Trust Building

Now, let's imagine that the OTA, in order to access the hotel inventory, had to go through a rigorous vetting process with the hotel account manager. (After all, supplier should have full control over their inventory.) But after some time doing business with the hotel, the OTA has cryptographic proof that they do business with that hotel. They can use that information (stripped of any personal data) to prove to another hotel that they are a company in good standing.
