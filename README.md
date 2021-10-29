# wb-infoabend ![Deploy](https://github.com/weitblick-muenster/wb-infoabend/workflows/Deploy/badge.svg) [![Netlify Status](https://api.netlify.com/api/v1/badges/97e20b97-d73d-4a24-89c2-d7e1e30ea6e3/deploy-status)](https://app.netlify.com/sites/infoabend/deploys)

> Weitblick Münster - Infoabend Seite

## Build Setup

Dependencies: Nodejs 15.3.xx

```bash
# install yarn if necessary
$ npm install --global yarn

# install dependencies
$ yarn install

# Copy example .env and configure values
$ cp .env.example .env

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Contribution

Create a `Pull Request`, request a review, merge to main.

## Deployment

The latest changes in the project should be on the `main` branch. The default branch for deployments is `gh-pages`. Do not commit to this branch, the latest changes are going to be pushed during the deployment step.

In order to deploy the latest changes, you only need to commit to the `main` branch, the deployment is going to be made by GitHub Actions.

## Credits

Base on Phantom by HTML5 UP
html5up.net | @ajlkn
aj@lkn.io

Icons:
  Font [Awesome](fontawesome.io)

(c) 2021 Pferdinand :horse:
