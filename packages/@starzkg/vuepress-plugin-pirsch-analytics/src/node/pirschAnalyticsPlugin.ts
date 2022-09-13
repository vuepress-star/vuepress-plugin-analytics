import type { Plugin, PluginObject } from '@vuepress/core'
import { getDirname, logger, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

/**
 * Options for @starzkg/vuepress-plugin-pirsch-analytics
 */
export interface PirschAnalyticsPluginOptions {
  /**
   * code .
   */
  code: string
}

export const pirschAnalyticsPlugin =
  ({ code }: PirschAnalyticsPluginOptions): Plugin =>
  (app) => {
    const plugin: PluginObject = {
      name: '@starzkg/vuepress-plugin-pirsch-analytics',
    }

    if (!code) {
      logger.warn(`[${plugin.name}] 'code' is required`)
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
        '@vuepress/plugin-pirsch-analytics/client': path.resolve(
          __dirname,
          '../client/index.js'
        ),
      },

      define: {
        __PIRSCH_CODE__: code,
      },
    }
  }
