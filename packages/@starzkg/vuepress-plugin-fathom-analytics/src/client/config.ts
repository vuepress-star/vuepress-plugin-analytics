import { defineClientConfig } from '@vuepress/client'
import * as Fathom from 'fathom-client'
import type { FathomAnalyticsPluginOptions } from '../shared/index.js'
import { useFathomAnalytics } from './composables/index.js'

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __VUEPRESS_SSR__: boolean

declare const __FATHOM_OPTIONS__: FathomAnalyticsPluginOptions

const options = __FATHOM_OPTIONS__

export default defineClientConfig({
  enhance: ({ router }) => {
    if (__VUEPRESS_SSR__) return
    useFathomAnalytics(options.siteId, options.options)
    router.beforeEach(function (to) {
      Fathom.trackPageview()
    })
  },
})
