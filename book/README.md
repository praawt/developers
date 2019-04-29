# Winding Tree Platform Overview (40,000 feet)

Winding Tree is a marketplace for travel companies. It is an open-source ecosystem of interoperable API standards and harmonized data structures enabling decentralized distribution and discovery of travel products and services.

Winding Tree uses a variety of open technologies, including Ethereum blockchain.

If you are already familiar with Winding Tree, feel free to skip to the [documentation](getting-started.md).

## Who is It For?

Winding Tree is a completely decentralized platform (like the Internet) where **travel suppliers** (hotels, airlines, car rentals, insurance providers, etc.) can showcase their products and services without a need to go through an intermediary. And, of course, where **travel agencies and travel management companies** can access those products and purchase them.

Because the platform is open-source, we foresee that new products and services will be added to it soon. Are you an **insurance company** or **provider of security information**? Why not offer your products to OTAs (Online Travel Agencies) and TMCs (Travel Management Companies) through the platform? Are you a new OTA? Gain competitive advantage by accessing inventory you could not access before.

## Why Decentralization Matters?

Current intermediaries in the travel industry don't just charge unnecessarily large fees, they also act as gatekeepers of the industry, picking and choosing companies and ideas that will have access to the marketplace. Because there are just few intermediaries, they also don't have any incentive to update their technology stack, that's why travel tech is so out of date. (To better understand this issue, we recommend reading [The Master Switch](https://www.goodreads.com/book/show/8201080-the-master-switch) by Tim Wu.)

## What Winding Tree is Not

Winding Tree is not a website for booking travel, nor are we a PMS or PSS (although we've created examples of how these systems can be integrated or built on top of the platform). **Winding Tree is just a set of protocols and conventions!**

## What Does Winding Tree Do?

Winding Tree is designed to provide two key features that any marketplace requires: aggregation and trust.

### Aggregation

There are thousands of travel companies out there and it's important to have one database of these companies in one place. That's why current intermediaries are so powerful, not because they have great technology.

### Trust

As a supplier, you want to control who can access your inventory. As an OTA, you want to be sure that the hotel you're booking for your customer exists. Winding Tree Protocol defines a few simple rules that help both buyers and sellers to establish trust in each other, all in a completely decentralized manner.

## How Does Winding Tree Work?

Winding Tree architecture has several layers:

- Organization ID smart contracts
- Segment Directory smart contracts
- The Index smart contract

![wt platform](assets/winding-tree-architecture.png)

This design allows for suppliers to be easily discovered by potential buyers of their products and services. In addition to that, each organization is required to list one or more public keys in their smart contract and sign all their API calls and responses with the corresponding private keys, which clearly identify the parties. Think of it as DNS + ID system.

For a 30,000 feet overview of platform functionality, please refer to []

## Use-Cases

### Distribution

Distribution is the obvious use-case for Winding Tree. How is it better than the status quo?

<table>
  <thead style="font-weight: bold;">
    <tr>
      <td></td>
      <td>Status Quo</td>
      <td>Winding Tree</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cost</td>
      <td>
        GDSs: 16 Euro per ticket<br>
        Expedia/Priceline: Up to 20%<br>
        AirBnB: Up to 15% total
      </td>
      <td>No Charge</td>
    </tr>
    <tr>
      <td>Outdated Tech</td>
      <td>Monopolies and duopolies have no incentive to innovate and update their technology. They only do so by charging its clients, directly or indirectly.</td>
      <td>The community working on open-source software and standards maintain the platform constantly.</td>
    </tr>
    <tr>
      <td>Branding</td>
      <td>OTAs and the likes of AirBnB inject themselves between the hotel or arline and the customer. Your brand is pushed aside and commoditized.</td>
      <td>You control the brand and the messaging behind it.</td>
    </tr>
    <tr>
      <td>Governance</td>
      <td>The incumbents today are controlling the whole industry by deciding who can participate in the market and who can't.</td>
      <td>Winding Tree is an open platform, like the Internet, where there are no gatekeepers.</td>
    </tr>
    <tr>
      <td>Vendor Lock-In</td>
      <td>It's not unheard of that suppliers have to sign 10-year contracts with superincumbents.</td>
      <td>Winding Tree is an open platform. You may start or stop using it whenever you like, without the need to talk to anyone. Again, just like the Internet.</td>
    </tr>
    <tr>
      <td>Personalization</td>
      <td>Airlines and hotels know very little about their customers. Intermediaries of today keep that information for themselves because they know what is the most valuable thing in data economy: information.</td>
      <td>If customer decides to do so, they share their information directly with supplier.</td>
    </tr>
    <tr>
      <td>Innovation</td>
      <td>Monopolies and duopolies have very little incentive to innovate, that is why travel, technologically, is 10 years behind.</td>
      <td>Open-source, collaborative approach proved to be the best catalyst of innovation. The whole internet, including Google, Facebook, Amazon, and thousands of <a href="https://www.zdnet.com/article/why-microsoft-is-turning-into-an-open-source-company/">other companies</a>, would not be possible without open-source.</td>
    </tr>
  </tbody>
</table>


The first use-case that the Winding Tree platform aims to solve is distribution. It is easy to see from the diagram above that an OTA is able to connect to a supplier API without the need to go through an intermediary. Our vision is to foster innovation in the travel industry by allowing the long tail of travel companies to be able to access supplier inventory (after all, innovation must be based on experimentation), while making the marketplace safe and secure for all parties. That is why we've created the Winding Tree Trust Engine, a simple set of rules that can help a small OTA to prove their trustworthiness to a large supplier, without a third trusted party.

Why distribute through winding tree?

### Settlement

Because all the API calls between market participants are signed with their keys, both companies have unfalsifiable proof of these transactions. E.g. the hotel has a record of the OTA owing them a certain amount of money. At the same time the OTA has evidence that the hotel has to provide rooms for the OTA customers. (Please note that unless all travel companies agree to settle in crypto, an intermediary with a bank account is required.)

How do we settle that faster?

CC/Cash, IATA rules, what about hotels? Traveler profile and insight (principle: everyone should own their information)

## Interlining



## Signing Documents

Before and After for each use-case
