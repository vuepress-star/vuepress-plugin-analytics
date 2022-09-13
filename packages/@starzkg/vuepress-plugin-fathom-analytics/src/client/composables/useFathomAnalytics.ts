import * as Fathom from 'fathom-client'
import type { LoadOptions } from 'fathom-client'

/**
 * Add Fathom to your site
 */
export const useFathomAnalytics = (
  siteId: string,
  opts?: LoadOptions
): void => {
  Fathom.load(siteId, opts)
}
