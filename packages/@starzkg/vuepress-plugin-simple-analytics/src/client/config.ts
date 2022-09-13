import { defineClientConfig } from '@vuepress/client'
import { useSimpleAnalytics } from './composables/index.js'

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __VUEPRESS_SSR__: boolean

declare const __SIMPLE_OPTIONS__: {
  /**
   * host
   */
  host: string
  /**
   *
   */
  eventsGlobal: string
  /**
   *
   */
  skipDnt: boolean
}

const options = __SIMPLE_OPTIONS__

export default defineClientConfig({
  enhance() {
    if (__VUEPRESS_SSR__) return
    useSimpleAnalytics(options.host, options.eventsGlobal, options.skipDnt)
  },
})
