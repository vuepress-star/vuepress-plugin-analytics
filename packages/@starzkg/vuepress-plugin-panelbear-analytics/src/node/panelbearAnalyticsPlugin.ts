import type { Plugin, PluginObject } from '@vuepress/core'
import { getDirname, logger, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

/**
 * Options for @starzkg/vuepress-plugin-panelbear-analytics
 */
export interface PanelbearAnalyticsPluginOptions {
  /**
   *
   */
  site: string
}

export const panelbearAnalyticsPlugin =
  ({ site }: PanelbearAnalyticsPluginOptions): Plugin =>
  (app) => {
    const plugin: PluginObject = {
      name: '@starzkg/vuepress-plugin-panelbear-analytics',
    }

    if (!site) {
      logger.warn(`[${plugin.name}] 'site' is required`)
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
        '@vuepress/plugin-panelbear-analytics/client': path.resolve(
          __dirname,
          '../client/index.js'
        ),
      },

      define: {
        __PANELBEAR_SITE__: site,
      },
    }
  }
