import { defineClientConfig } from '@vuepress/client'
import { usePlausibleAnalytics } from './composables/index.js'

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __VUEPRESS_SSR__: boolean

declare const __PLAUSIBLE_HOST__: string

const host = __PLAUSIBLE_HOST__

declare const __PLAUSIBLE_DOMAIN__: string

const domain = __PLAUSIBLE_DOMAIN__

export default defineClientConfig({
  enhance() {
    if (__VUEPRESS_SSR__) return
    usePlausibleAnalytics(host, domain)
  },
})
