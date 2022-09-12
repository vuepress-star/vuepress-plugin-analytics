---
page: DocumentHome
title: Home
heroImage: /images/hero.png
actions:
  - text: Get Started
    link: /guide/getting-started.html
    type: primary
  - text: Introduction
    link: /guide/
    type: secondary
features:
  - title: Simplicity First
    details: Minimal setup with markdown-centered project structure helps you focus on writing.
  - title: Vue-Powered
    details: Enjoy the dev experience of Vue, use Vue components in markdown, and develop custom themes with Vue.
  - title: Performant
    details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
  - title: Themes
    details: Providing a default theme out of the box. You can also choose a community theme or create your own one.
  - title: Plugins
    details: Flexible plugin API, allowing plugins to provide lots of plug-and-play features for your site. 
  - title: Bundlers
    details: Both Webpack and Vite are supported. Choose the one you like!
footer: MIT Licensed | Copyright © 2021-present Starzkg
---

### As Easy as 1, 2, 3

:::: code-group

::: code-group-item title="NPM" active

```bash
# install in your project
npm install -D @starzkg/vuepress-theme-star

# create a markdown file
echo '# Hello VuePress Theme Star' > README.md

# start writing
npx vuepress dev

# build to static files
npx vuepress build
```
:::

::: code-group-item title="YARN"

```bash
# install in your project
yarn add -D @starzkg/vuepress-theme-star

# create a markdown file
echo '# Hello VuePress Theme Star' > README.md

# start writing
yarn vuepress dev

# build to static files
yarn vuepress build
```
:::

::: code-group-item title="PNPM"

```bash
# install in your project
pnpm add - D @starzkg/vuepress-theme-star

# create a markdown file
echo '# Hello VuePress Theme Star' > README.md

# start writing
pnpm vuepress dev

# build to static files
pnpm vuepress build
```

:::

:::: 
