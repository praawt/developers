# How to pick an environment

Winding Tree is currently operating several environments. In this
tutorial, you will learn what these are and which one to pick.

## Step by step

### What is an environment

Every Winding Tree environment's centerpoint is a Smart contract
called Winding Tree Index. It serves as a decentralized registry of
participating service providers (hotels, airlines) and the rest of
the tooling is configured to use it.

The tooling typically consists of one or more REST APIs operated
either as a service or on-premise - it typically depends on the
necessary security measures. But as the ecosystem is intentionally
very open, you can swap our implementation and architecture with
something completely different that makes more sense to you.

### Active environments

Winding Tree is still in an experimental phase and we are currently
running two environments for testing. They are usually identical
in versions, but they use a separate Winding Tree Index.

Both environments are using the Ropsten Ethereum testnet, so you
don't need to have real ETH or LÍF to play with it.

**Notice**: Both environments are for demonstration purposes only
and a deployment for production use would be different. Typically,
the Write API is not recommended to be available directly from the
internet.

#### Playground

- Index: [0xfb562057d613175c850df65e435bb0824b65d319](https://ropsten.etherscan.io/address/0xfb562057d613175c850df65e435bb0824b65d319)
- Read API: https://playground-api.windingtree.com
- Write API: https://playground-write-api.windingtree.com
- Notification API: https://playground-notification-api.windingtree.com
- Search API: https://playground-search-api.windingtree.com
- Hotel explorer: https://hotel-explorer-playground.windingtree.com

We are populating the Playground environment with curated data
from [wt-fixtures](https://github.com/windingtree/wt-fixtures).
Availability data gets updated monthly, so it should make sense at
all times.

#### Demo

- Index: [0xa433590275a3a1ebca247a230076d2d281f46a49](https://ropsten.etherscan.io/address/0xa433590275a3a1ebca247a230076d2d281f46a49)
- Read API: https://demo-api.windingtree.com
- Write API: https://demo-write-api.windingtree.com
- Search API: https://demo-search-api.windingtree.com
- Hotel explorer: https://hotel-explorer-demo.windingtree.com

We are populating the Demo environment with curated data
from [wt-fixtures](https://github.com/windingtree/wt-fixtures).
Availability data gets updated monthly, so it should make sense at
all times.

Notification API is not deployed for Demo environment, because it is
actually environment agnostic. You can reuse the Playground deployment
if need be.

## How to run another environment?

If you, for some reason, need to run a fresh and separate environment,
the key to do it is to deploy your own Winding Tree Index and run all
of the necessary tools with the appropriate configuration.

## How to reset an existing environment

Since you are not able to delete any data on behalf of the users,
the only way to reset an environment is to deploy a new Winding Tree
Index and reconfigure every other tool to point to the new location.

## Where to next

- [How to setup Read API](how-to-setup-read-api.md)
- [How to setup Write API](how-to-setup-write-api.md)
