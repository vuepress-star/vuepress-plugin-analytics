import type { SidebarConfig } from '@starzkg/vuepress-theme-star'

export const zh: SidebarConfig = {
  '/zh/guide/': [
    {
      text: '指南',
      link: '/zh/guide/README.md',
      children: [
        '/zh/guide/getting-started.md',
        '/zh/guide/configuration.md',
        '/zh/guide/page.md',
        '/zh/guide/assets.md',
        '/zh/guide/i18n.md',
        '/zh/guide/accessibility.md',
        '/zh/guide/deployment.md',
        '/zh/guide/theme.md',
        '/zh/guide/plugin.md',
        '/zh/guide/bundler.md',
      ],
    },
    {
      text: 'MarkDown',
      link: '/zh/guide/markdown/',
      children: [
        '/zh/guide/markdown/configuration.md',
        {
          text: '特性',
          link: '/zh/guide/markdown/feature/',
          children: [
            '/zh/guide/markdown/feature/container.md',
            '/zh/guide/markdown/feature/align.md',
            '/zh/guide/markdown/feature/sup-sub.md',
            '/zh/guide/markdown/feature/footnote.md',
            '/zh/guide/markdown/feature/mark.md',
            '/zh/guide/markdown/feature/task-list.md',
            '/zh/guide/markdown/feature/tex.md',
            '/zh/guide/markdown/feature/flowchart.md',
            '/zh/guide/markdown/feature/mermaid.md',
            '/zh/guide/markdown/feature/code-demo/',
            '/zh/guide/markdown/feature/presentation/',
            '/zh/guide/markdown/feature/external.md',
          ],
        },
      ],
    },
    {
      text: '组件',
      link: '/zh/guide/component/',
      children: [
        '/zh/guide/component/badge.md',
        '/zh/guide/component/code-group.md',
        '/zh/guide/component/icon.md',
        '/zh/guide/component/external-link.md',
        '/zh/guide/component/element-plus.md',
      ],
    },
    {
      text: '布局',
      link: '/zh/guide/layout/',
      children: [
        '/zh/guide/layout/navbar.md',
        '/zh/guide/layout/sidebar.md',
        '/zh/guide/layout/home.md',
        '/zh/guide/layout/page.md',
        '/zh/guide/layout/custom.md',
      ],
    },
    {
      text: '页面',
      link: '/zh/guide/page/',
      children: [
        '/zh/guide/page/home.md',
        '/zh/guide/page/normal.md',
        '/zh/guide/page/document.md',
        '/zh/guide/page/spreadsheet.md',
        '/zh/guide/page/presentation.md',
        '/zh/guide/page/blog.md',
        '/zh/guide/page/wiki.md',
      ],
    },
    {
      text: '功能',
      link: '/zh/guide/feature/',
      children: [
        '/zh/guide/feature/page-enhance.md',
        '/zh/guide/feature/copy-code.md',
        '/zh/guide/feature/photo-swipe.md',
        '/zh/guide/feature/copyright.md',
        '/zh/guide/feature/git.md',
        '/zh/guide/feature/encrypt.md',
        '/zh/guide/feature/pwa.md',
        '/zh/guide/feature/feed.md',
        '/zh/guide/feature/seo.md',
        '/zh/guide/feature/sitemap.md',
        '/zh/guide/feature/typescript.md',
      ],
    },
  ],
  '/zh/advanced/': [
    {
      text: '深入',
      children: [
        '/zh/advanced/architecture.md',
        '/zh/advanced/plugin.md',
        '/zh/advanced/theme.md',
      ],
    },
    {
      text: 'Cookbook',
      children: [
        '/zh/advanced/cookbook/README.md',
        '/zh/advanced/cookbook/usage-of-client-app-enhance.md',
        '/zh/advanced/cookbook/adding-extra-pages.md',
        '/zh/advanced/cookbook/extending-a-theme.md',
        '/zh/advanced/cookbook/passing-data-to-client-code.md',
        '/zh/advanced/cookbook/markdown-and-vue-sfc.md',
      ],
    },
  ],
  '/zh/reference/': [
    {
      text: 'VuePress 参考',
      children: [
        '/zh/reference/cli.md',
        '/zh/reference/config.md',
        '/zh/reference/frontmatter.md',
        '/zh/reference/components.md',
        '/zh/reference/plugin-api.md',
        '/zh/reference/theme-api.md',
        '/zh/reference/client-api.md',
        '/zh/reference/node-api.md',
      ],
    },
  ],
  '/zh/reference/bundler/': [
    {
      text: '打包工具参考',
      children: [
        '/zh/reference/bundler/webpack.md',
        '/zh/reference/bundler/vite.md',
      ],
    },
  ],
  '/zh/reference/default-theme/': [
    {
      text: '默认主题参考',
      children: [
        '/zh/reference/default-theme/config.md',
        '/zh/reference/default-theme/frontmatter.md',
        '/zh/reference/default-theme/components.md',
        '/zh/reference/default-theme/markdown.md',
        '/zh/reference/default-theme/styles.md',
      ],
    },
  ],
  '/zh/reference/plugin/': [
    {
      text: '官方插件参考',
      children: [
        {
          text: '常用功能',
          children: [
            '/zh/reference/plugin/back-to-top.md',
            '/zh/reference/plugin/container.md',
            '/zh/reference/plugin/google-analytics.md',
            '/zh/reference/plugin/medium-zoom.md',
            '/zh/reference/plugin/nprogress.md',
            '/zh/reference/plugin/register-components.md',
          ],
        },
        {
          text: '内容搜索',
          children: [
            '/zh/reference/plugin/docsearch.md',
            '/zh/reference/plugin/search.md',
          ],
        },
        {
          text: 'PWA',
          children: [
            '/zh/reference/plugin/pwa.md',
            '/zh/reference/plugin/pwa-popup.md',
          ],
        },
        {
          text: '语法高亮',
          children: [
            '/zh/reference/plugin/prismjs.md',
            '/zh/reference/plugin/shiki.md',
          ],
        },
        {
          text: '主题开发',
          children: [
            '/zh/reference/plugin/active-header-links.md',
            '/zh/reference/plugin/debug.md',
            '/zh/reference/plugin/git.md',
            '/zh/reference/plugin/palette.md',
            '/zh/reference/plugin/theme-data.md',
            '/zh/reference/plugin/toc.md',
          ],
        },
      ],
    },
  ],
}
