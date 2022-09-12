import { defineClientConfig } from '@vuepress/client'
import { useAnalytics } from './composables/index.js'

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __VUEPRESS_SSR__: boolean

export default defineClientConfig({
  enhance() {
    if (__VUEPRESS_SSR__) return
    useAnalytics()
  },
})
