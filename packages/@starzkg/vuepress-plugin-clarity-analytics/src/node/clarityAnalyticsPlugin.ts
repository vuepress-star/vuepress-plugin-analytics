import type { Plugin, PluginObject } from '@vuepress/core'
import { getDirname, logger, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

/**
 * Options for @starzkg/vuepress-plugin-clarity-analytics
 */
export interface ClarityAnalyticsPluginOptions {
  /**
   * The Measurement ID of Clarity Analytics 4, which should start with `'G-'`.
   */
  id: string
}

export const clarityAnalyticsPlugin =
  ({ id }: ClarityAnalyticsPluginOptions): Plugin =>
  (app) => {
    const plugin: PluginObject = {
      name: '@starzkg/vuepress-plugin-clarity-analytics',
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
        '@vuepress/plugin-clarity-analytics/client': path.resolve(
          __dirname,
          '../client/index.js'
        ),
      },

      define: {
        __CLARITY_ID__: id,
      },
    }
  }
