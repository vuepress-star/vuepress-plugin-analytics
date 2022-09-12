import type { Plugin, PluginObject } from '@vuepress/core'
import { getDirname, logger, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

/**
 * Options for @starzkg/vuepress-plugin-cnzz-analytics
 */
export interface CnzzAnalyticsPluginOptions {
  /**
   * The Measurement ID of CNZZ Analytics.
   */
  id: string
  webId: string
  /**
   * Open SPA
   */
  spa: boolean
}

export const cnzzAnalyticsPlugin =
  ({ id, webId, spa }: CnzzAnalyticsPluginOptions): Plugin =>
  (app) => {
    const plugin: PluginObject = {
      name: '@starzkg/vuepress-plugin-cnzz-analytics',
    }

    if (!id) {
      logger.warn(`[${plugin.name}] 'id' is required`)
      return plugin
    }

    if (!webId) {
      logger.warn(`[${plugin.name}] 'webId' is undefined, use id`)
      webId = id
    }

    if (app.env.isDev) {
      return plugin
    }

    return {
      ...plugin,

      define: {
        __CNZZ_ID__: id,
        __CNZZ_WEB_ID__: webId,
        __CNZZ_SPA__: spa,
      },

      clientConfigFile: path.resolve(__dirname, '../client/config.js'),

      alias: {
        // workaround for https://github.com/vitejs/vite/issues/7621
        '@starzkg/vuepress-plugin-cnzz-analytics/client': path.resolve(
          __dirname,
          '../client/index.js'
        ),
      },
    }
  }
