# wb-infoabend

> Weitblick Münster - Infoabend Seite

## Build Setup

```bash
# install dependencies
$ yarn install

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

Create a `Pull Request`, request a review, merge to master.

## Deployment

The latest changes in the project should be on the `master` branch. The default branch for deployments is `gh-pages`. Do not commit to this branch, the latest changes are going to be pushed during the deployment step.

In order to deploy the latest changes, checkout to the `master` branch, `fetch & pull` and run the following script:

```bash
# generate static project in dist/ folder
yarn run generate

# only deploy dist/ folder to GitHub Pages
yarn run deploy
```

The deployment script is going to publish the changes to the `gh-pages` branch and serve it to https://infoabend.weitblicker.live

## Credits

Base on Phantom by HTML5 UP
html5up.net | @ajlkn
aj@lkn.io

Icons:
  Font [Awesome](fontawesome.io)

(c) 2020 Pferdinand :horse:
