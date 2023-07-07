# Gatsby-Monorepo-Sandbox

A monorepo Gatsby project built for testing purposes

## Installation

Use the package manager [yarn](https://yarnpkg.com/) to install `Gatsby-Monorepo-Sandbox` and it's packages.

```bash
yarn
```

## Commands

- Run `yarn start` to start development server
- Run `yarn prod`  to start production server
- Run `yarn clean` to clear cache


### Test Gatsby v4

To downgrade repo from Gatbsy v5 to v4 switch to the `test-gatsby-v4` branch

```git
git checkout test-gatsby-v4
```

Clear cache and re-install packages

```bash
yarn clean
yarn
```

Then start the server like usual using `yarn start` or `yarn prod`

NOTE: If you have issues starting the server please try deleting the `node_modules` folder and reinstalling the repo.
