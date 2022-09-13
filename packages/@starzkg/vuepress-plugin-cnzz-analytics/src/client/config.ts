import { defineClientConfig } from '@vuepress/client'
import { useCnzzAnalytics } from './composables/index.js'

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const _czc: any

declare global {
  interface Window {
    _czc?: typeof _czc
  }
}

declare const __CNZZ_ID__: string
declare const __CNZZ_WEB_ID__: string
declare const __CNZZ_SPA__: boolean
// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __VUEPRESS_SSR__: boolean

export default defineClientConfig({
  enhance: ({ router }) => {
    if (__VUEPRESS_SSR__) return
    useCnzzAnalytics(__CNZZ_ID__, __CNZZ_WEB_ID__)
    if (__CNZZ_SPA__) {
      router.beforeEach((to, from) => {
        if (typeof _czc !== 'undefined') {
          // eslint-disable-next-line no-undef
          _czc.push(['_trackPageview', to.fullPath, from.fullPath])
        }
      })
    }
  },
})
