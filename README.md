# Patrick Obermeier Portfolio Website v3 - Next.js, TypeScript & DatoCMS

This is v3 of my personal portfolio website created using Next.js, TypeScript & DatoCMS.

Optimizing loading speed and accessibility were my highest priority during the realization of this project. You can check out the live project by clicking [here](https://www.patrickobermeier.dev/).

## Technologies & Tools Used

- Next.js / React
- TypeScript
- DatoCMS (Headless CMS)
- GraphQL Request Library
- Tailwind CSS
- Animate-on-Scroll (AoS)
- ESLint & Prettier
- Husky (Simple Git Hooks)
- Next.js plugins: next-sitemap
- Docker for deployment as hosted Node.js-Server

## Quick Start

### Development

After cloning / downloading this repository first install the dev-depencies with NPM by using the following CLI-command:

```
yarn install
```

You can then launch a dev server with the following command:

```
yarn dev
```

### Mock Content in Development

To run the site with all content in dev mode without having to fetch data from DatoCMS, just go into the global config file `config.ts` in the `/src` folder and set `useMockData: true`.

### Deployment

You can build the static assets needed for deployment with the following CLI-command:

```
yarn export
```

The files will be build and bundled into the "out" folder. These files can then be deployed to any static web server or a PaaS like Netlify.

## Import Grouping

Group imports using comments in the following order:

```
// interfaces,types,schemas,models
// constants
// mocks
// transformers
// selectors
// actions
// components
// hooks
// styles
// redux
// sagas
// db
// use cases
// services
// utils
// resources
```
