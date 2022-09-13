import type { Plugin, PluginObject } from '@vuepress/core'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

/**
 * Options for @starzkg/vuepress-plugin-simple-analytics
 */
export interface SimpleAnalyticsPluginOptions {
  /**
   * host
   */
  host?: string
  /**
   *
   */
  eventsGlobal?: string
  /**
   *
   */
  skipDnt?: boolean
}

export const simpleAnalyticsPlugin =
  ({
    host = 'https://scripts.simpleanalyticscdn.com',
    eventsGlobal = 'sa_event',
    skipDnt = false,
  }: SimpleAnalyticsPluginOptions): Plugin =>
  (app) => {
    const plugin: PluginObject = {
      name: '@starzkg/vuepress-plugin-simple-analytics',
    }

    if (app.env.isDev) {
      return plugin
    }

    return {
      ...plugin,

      clientConfigFile: path.resolve(__dirname, '../client/config.js'),

      alias: {
        // workaround for https://github.com/vitejs/vite/issues/7621
        '@vuepress/plugin-simple-analytics/client': path.resolve(
          __dirname,
          '../client/index.js'
        ),
      },

      define: {
        __SIMPLE_OPTIONS__: {
          host,
          eventsGlobal,
          skipDnt,
        },
      },
    }
  }
