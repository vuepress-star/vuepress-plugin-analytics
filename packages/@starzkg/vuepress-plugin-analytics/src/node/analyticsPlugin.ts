import type { BaiduAnalyticsPluginOptions } from '@starzkg/vuepress-plugin-baidu-analytics'
import type { ClarityAnalyticsPluginOptions } from '@starzkg/vuepress-plugin-clarity-analytics'
import type { CnzzAnalyticsPluginOptions } from '@starzkg/vuepress-plugin-cnzz-analytics'
import type { GoogleAnalyticsPluginOptions } from '@starzkg/vuepress-plugin-google-analytics'
import { googleAnalyticsPlugin } from '@starzkg/vuepress-plugin-google-analytics'
import type { Plugin, PluginObject } from '@vuepress/core'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export interface AnalyticsPluginOptions {
  /**
   * Options for @starzkg/vuepress-plugin-google-analytics
   */
  google?: GoogleAnalyticsPluginOptions

  /**
   * Options for @starzkg/vuepress-plugin-clarity-analytics
   */
  clarity?: ClarityAnalyticsPluginOptions

  /**
   * Options for @starzkg/vuepress-plugin-baidu-analytics
   */
  baidu?: BaiduAnalyticsPluginOptions

  /**
   * Options for @starzkg/vuepress-plugin-cnzz-analytics
   */
  cnzz?: CnzzAnalyticsPluginOptions

  /**
   * Options for Custom
   */
  custom?: string
}

export const analyticsPlugin =
  (options: AnalyticsPluginOptions): Plugin =>
  (app) => {
    const plugin: PluginObject = {
      name: '@starzkg/vuepress-plugin-analytics',
    }

    if (app.env.isDev) {
      return plugin
    }

    if (options.google) {
      app.use(googleAnalyticsPlugin(options.google))
    }

    if (options.baidu) {
      app.use(googleAnalyticsPlugin(options.baidu))
    }

    if (options.cnzz) {
      app.use(googleAnalyticsPlugin(options.cnzz))
    }

    return {
      ...plugin,

      onInitialized: async () => {
        if (options.custom) {
          await app.writeTemp(
            'analytics/custom.js',
            `
export const useAnalytics = () => {
${options.custom}
}
        `
          )
        }
      },

      clientConfigFile: path.resolve(__dirname, '../client/config.js'),

      alias: {
        // workaround for https://github.com/vitejs/vite/issues/7621
        '@starzkg/vuepress-plugin-analytics/client': path.resolve(
          __dirname,
          '../client/index.js'
        ),
      },
    }
  }
