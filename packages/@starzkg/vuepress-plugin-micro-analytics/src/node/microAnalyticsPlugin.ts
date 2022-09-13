import type { Plugin, PluginObject } from '@vuepress/core'
import { getDirname, logger, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

/**
 * Options for @starzkg/vuepress-plugin-micro-analytics
 */
export interface MicroAnalyticsPluginOptions {
  /**
   * The host .
   */
  host?: string
  /**
   * The MicroAnalytics ID .
   */
  id: string
}

export const microAnalyticsPlugin =
  ({
    host = 'https://microanalytics.io',
    id,
  }: MicroAnalyticsPluginOptions): Plugin =>
  (app) => {
    const plugin: PluginObject = {
      name: '@starzkg/vuepress-plugin-micro-analytics',
    }

    if (!id) {
      logger.warn(`[${plugin.name}] 'id' is required`)
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
        '@vuepress/plugin-micro-analytics/client': path.resolve(
          __dirname,
          '../client/index.js'
        ),
      },

      define: {
        __MICRO_HOST__: host,
        __MICRO_ID__: id,
      },
    }
  }
