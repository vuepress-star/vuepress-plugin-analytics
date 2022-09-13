import type { LoadOptions } from 'fathom-client'

/**
 * Options for @starzkg/vuepress-plugin-fathom-analytics
 */
export interface FathomAnalyticsPluginOptions {
  /**
   * site id
   */
  siteId: string
  /**
   * Options for fathom
   */
  options?: LoadOptions
}
