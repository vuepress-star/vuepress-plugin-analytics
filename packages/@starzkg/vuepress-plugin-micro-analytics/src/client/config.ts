import { defineClientConfig } from '@vuepress/client'
import { useMicroAnalytics } from './composables/index.js'

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __VUEPRESS_SSR__: boolean

declare const __PLAUSIBLE_HOST__: string

const host = __PLAUSIBLE_HOST__

declare const __MICRO_ID__: string

const id = __MICRO_ID__

export default defineClientConfig({
  enhance() {
    if (__VUEPRESS_SSR__) return
    useMicroAnalytics(host, id)
  },
})
