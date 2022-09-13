import type { BaiduAnalyticsPluginOptions } from '@starzkg/vuepress-plugin-baidu-analytics'
import type { ClarityAnalyticsPluginOptions } from '@starzkg/vuepress-plugin-clarity-analytics'
import { clarityAnalyticsPlugin } from '@starzkg/vuepress-plugin-clarity-analytics'
import type { CnzzAnalyticsPluginOptions } from '@starzkg/vuepress-plugin-cnzz-analytics'
import type { FathomAnalyticsPluginOptions } from '@starzkg/vuepress-plugin-fathom-analytics'
import { fathomAnalyticsPlugin } from '@starzkg/vuepress-plugin-fathom-analytics'
import type { GoogleAnalyticsPluginOptions } from '@starzkg/vuepress-plugin-google-analytics'
import { googleAnalyticsPlugin } from '@starzkg/vuepress-plugin-google-analytics'
import type { MicroAnalyticsPluginOptions } from '@starzkg/vuepress-plugin-micro-analytics'
import { microAnalyticsPlugin } from '@starzkg/vuepress-plugin-micro-analytics'
import type { PanelbearAnalyticsPluginOptions } from '@starzkg/vuepress-plugin-panelbear-analytics'
import { panelbearAnalyticsPlugin } from '@starzkg/vuepress-plugin-panelbear-analytics'
import { pirschAnalyticsPlugin } from '@starzkg/vuepress-plugin-pirsch-analytics'
import type { PirschAnalyticsPluginOptions } from '@starzkg/vuepress-plugin-pirsch-analytics'
import type { PlausibleAnalyticsPluginOptions } from '@starzkg/vuepress-plugin-plausible-analytics'
import { plausibleAnalyticsPlugin } from '@starzkg/vuepress-plugin-plausible-analytics'
import { simpleAnalyticsPlugin } from '@starzkg/vuepress-plugin-simple-analytics'
import type { SimpleAnalyticsPluginOptions } from '@starzkg/vuepress-plugin-simple-analytics'
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
   * Options for @starzkg/vuepress-plugin-micro-analytics
   */
  micro?: MicroAnalyticsPluginOptions

  /**
   * Options for @starzkg/vuepress-plugin-simple-analytics
   */
  simple?: SimpleAnalyticsPluginOptions

  /**
   * Options for @starzkg/vuepress-plugin-fathom-analytics
   */
  fathom?: FathomAnalyticsPluginOptions

  /**
   * Options for @starzkg/vuepress-plugin-plausible-analytics
   */
  plausible?: PlausibleAnalyticsPluginOptions

  /**
   * Options for @starzkg/vuepress-plugin-plausible-analytics
   */
  panelbear?: PanelbearAnalyticsPluginOptions

  /**
   * Options for @starzkg/vuepress-plugin-pirsch-analytics
   */
  pirsch?: PirschAnalyticsPluginOptions

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

    if (options.clarity) {
      app.use(clarityAnalyticsPlugin(options.clarity))
    }

    if (options.baidu) {
      app.use(googleAnalyticsPlugin(options.baidu))
    }

    if (options.cnzz) {
      app.use(googleAnalyticsPlugin(options.cnzz))
    }

    if (options.micro) {
      app.use(microAnalyticsPlugin(options.micro))
    }

    if (options.simple) {
      app.use(simpleAnalyticsPlugin(options.simple))
    }

    if (options.fathom) {
      app.use(fathomAnalyticsPlugin(options.fathom))
    }

    if (options.plausible) {
      app.use(plausibleAnalyticsPlugin(options.plausible))
    }

    if (options.panelbear) {
      app.use(panelbearAnalyticsPlugin(options.panelbear))
    }

    if (options.pirsch) {
      app.use(pirschAnalyticsPlugin(options.pirsch))
    }

    if (!options.custom) {
      return
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
