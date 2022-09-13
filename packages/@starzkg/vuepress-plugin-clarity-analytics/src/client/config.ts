import { defineClientConfig } from '@vuepress/client'
import { useClarityAnalytics } from './composables/index.js'

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __VUEPRESS_SSR__: boolean

declare const __CLARITY_ID__: string

const id = __CLARITY_ID__

export default defineClientConfig({
  enhance() {
    if (__VUEPRESS_SSR__) return
    useClarityAnalytics(id)
  },
})
