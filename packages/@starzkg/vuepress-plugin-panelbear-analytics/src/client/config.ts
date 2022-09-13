import { defineClientConfig } from '@vuepress/client'
import { usePanelbearAnalytics } from './composables/index.js'

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __VUEPRESS_SSR__: boolean

declare const __PANELBEAR_SITE__: string

const site = __PANELBEAR_SITE__

export default defineClientConfig({
  enhance() {
    if (__VUEPRESS_SSR__) return
    usePanelbearAnalytics(site)
  },
})
