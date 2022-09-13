import type { Plugin, PluginObject } from '@vuepress/core'
import { getDirname, logger, path } from '@vuepress/utils'
import type { FathomAnalyticsPluginOptions } from '../shared/index.js'

const __dirname = getDirname(import.meta.url)

export const fathomAnalyticsPlugin =
  ({ siteId, options }: FathomAnalyticsPluginOptions): Plugin =>
  (app) => {
    const plugin: PluginObject = {
      name: '@starzkg/vuepress-plugin-fathom-analytics',
    }

    if (!siteId) {
      logger.warn(`[${plugin.name}] 'siteId' is required`)
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
        '@vuepress/plugin-fathom-analytics/client': path.resolve(
          __dirname,
          '../client/index.js'
        ),
      },

      define: {
        __FATHOM_OPTIONS__: { siteId, options },
      },
    }
  }
