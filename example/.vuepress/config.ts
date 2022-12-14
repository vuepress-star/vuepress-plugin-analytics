import { analyticsPlugin } from '@starzkg/vuepress-plugin-analytics'
import { baiduAnalyticsPlugin } from '@starzkg/vuepress-plugin-baidu-analytics'
import { clarityAnalyticsPlugin } from '@starzkg/vuepress-plugin-clarity-analytics'
import { cnzzAnalyticsPlugin } from '@starzkg/vuepress-plugin-cnzz-analytics'
import { googleAnalyticsPlugin } from '@starzkg/vuepress-plugin-google-analytics'
import { microAnalyticsPlugin } from '@starzkg/vuepress-plugin-micro-analytics'
import { panelbearAnalyticsPlugin } from '@starzkg/vuepress-plugin-panelbear-analytics'
import { pirschAnalyticsPlugin } from '@starzkg/vuepress-plugin-pirsch-analytics'
import { plausibleAnalyticsPlugin } from '@starzkg/vuepress-plugin-plausible-analytics'
import { simpleAnalyticsPlugin } from '@starzkg/vuepress-plugin-simple-analytics'
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { defineUserConfig } from '@vuepress/cli'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { defaultTheme } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import locales from './locales'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
  base: '/',
  title: 'vuepress-theme-star',
  debug: !isProd,
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `/images/icons/favicon-16x16.png`,
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/images/icons/favicon-32x32.png`,
      },
    ],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'application-name', content: 'VuePress' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'VuePress' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/images/icons/apple-touch-icon.png` },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/images/icons/safari-pinned-tab.svg',
        color: '#3eaf7c',
      },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],

  // site-level locales config
  locales: {
    '/': {
      lang: 'en-US',
      title: 'vuepress-theme-star',
      description: 'A vuepress theme for building personal site',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'vuepress-theme-star',
      description: '???????????????????????????????????????',
    },
  },

  bundler:
    // specify bundler via environment variable
    process.env.DOCS_BUNDLER === 'webpack' || isProd
      ? webpackBundler()
      : viteBundler(),

  theme: defaultTheme({
    logo: '/images/hero.png',

    repo: 'shentuzhigang/vuepress-theme-star',

    docsDir: 'docs',

    // theme-level locales config
    locales,

    themePlugins: {
      backToTop: true,
      // only enable git plugin in production mode
      git: isProd,
    },
  }),

  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(
          /^@vuepress/,
          path.resolve(__dirname, '../../packages/@vuepress')
        ),
    },
  },
  plugins: [
    docsearchPlugin({
      appId: '34YFD9IUQ2',
      apiKey: '9a9058b8655746634e01071411c366b8',
      indexName: 'vuepress',
      searchParameters: {
        facetFilters: ['tags:v2'],
      },
      locales: {
        '/zh/': {
          placeholder: '????????????',
          translations: {
            button: {
              buttonText: '????????????',
              buttonAriaLabel: '????????????',
            },
            modal: {
              searchBox: {
                resetButtonTitle: '??????????????????',
                resetButtonAriaLabel: '??????????????????',
                cancelButtonText: '??????',
                cancelButtonAriaLabel: '??????',
              },
              startScreen: {
                recentSearchesTitle: '????????????',
                noRecentSearchesText: '??????????????????',
                saveRecentSearchButtonTitle: '?????????????????????',
                removeRecentSearchButtonTitle: '????????????????????????',
                favoriteSearchesTitle: '??????',
                removeFavoriteSearchButtonTitle: '??????????????????',
              },
              errorScreen: {
                titleText: '??????????????????',
                helpText: '???????????????????????????????????????',
              },
              footer: {
                selectText: '??????',
                navigateText: '??????',
                closeText: '??????',
                searchByText: '???????????????',
              },
              noResultsScreen: {
                noResultsText: '????????????????????????',
                suggestedQueryText: '?????????????????????',
                reportMissingResultsText: '????????????????????????????????????',
                reportMissingResultsLinkText: '????????????',
              },
            },
          },
        },
      },
    }),
    analyticsPlugin({
      custom: `
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?2bec8aabb0629582fd66244ae851f3a1";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
      `,
    }),
    googleAnalyticsPlugin({
      // we have multiple deployments, which would use different id
      id: 'G-CTB8FQ7VMW',
    }),
    clarityAnalyticsPlugin({
      id: 'dmtvg74hwr',
    }),
    baiduAnalyticsPlugin({
      id: '2bec8aabb0629582fd66244ae851f3a1',
      spa: true,
    }),
    cnzzAnalyticsPlugin({
      id: '1280714941',
      webId: '1280714941',
      spa: true,
    }),
    microAnalyticsPlugin({
      id: 'ZwSg9rf6GA',
    }),
    simpleAnalyticsPlugin({}),
    plausibleAnalyticsPlugin({
      domain: 'shentuzhigang.cn',
    }),
    panelbearAnalyticsPlugin({
      site: 'JDr9Jlf2g9W',
    }),
    pirschAnalyticsPlugin({
      code: 'DN6EGxdeEKeDnbNUzhZmsbAWzCNqbt06',
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    // only enable shiki plugin in production mode
    isProd ? shikiPlugin({ theme: 'dark-plus' }) : [],
  ],
})
