import { defineClientConfig } from '@vuepress/client'
import { usePirschAnalytics } from './composables/index.js'

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __VUEPRESS_SSR__: boolean

declare const __PIRSCH_CODE__: string

const code = __PIRSCH_CODE__

export default defineClientConfig({
  enhance() {
    if (__VUEPRESS_SSR__) return
    usePirschAnalytics(code)
  },
})
