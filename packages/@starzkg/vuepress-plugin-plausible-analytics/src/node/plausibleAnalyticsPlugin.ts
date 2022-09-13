import type { Plugin, PluginObject } from '@vuepress/core'
import { getDirname, logger, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

/**
 * Options for @starzkg/vuepress-plugin-plausible-analytics
 */
export interface PlausibleAnalyticsPluginOptions {
  /**
   * The site host .
   */
  host?: string
  /**
   * The site domain .
   */
  domain: string
}

export const plausibleAnalyticsPlugin =
  ({ host, domain }: PlausibleAnalyticsPluginOptions): Plugin =>
  (app) => {
    const plugin: PluginObject = {
      name: '@starzkg/vuepress-plugin-plausible-analytics',
    }

    if (!domain) {
      logger.warn(`[${plugin.name}] 'domain' is required`)
      return plugin
    }

    if (app.env.isDev) {
      return plugin
    }

    return {
      ...plugin,

      clientConfigFile: path.resolve(__dirname, '../client/config.js'),

      alias: {
        // workaround for https://github.com/vitejs/vite/issues/7621
        '@vuepress/plugin-plausible-analytics/client': path.resolve(
          __dirname,
          '../client/index.js'
        ),
      },

      define: {
        __PLAUSIBLE_HOST__: host || 'https://plausible.io',
        __PLAUSIBLE_DOMAIN__: domain,
      },
    }
  }
