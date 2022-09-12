import { defineClientConfig } from '@vuepress/client'
import { useGoogleAnalytics } from './composables/index.js'

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __VUEPRESS_SSR__: boolean

declare const __GA_ID__: string

const id = __GA_ID__

export default defineClientConfig({
  enhance() {
    if (__VUEPRESS_SSR__) return
    useGoogleAnalytics(id)
  },
})
