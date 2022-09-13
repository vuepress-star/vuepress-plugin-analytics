import { defineClientConfig } from '@vuepress/client'
import { useBaiduAnalytics } from './composables/index.js'

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const _hmt: any[]

declare global {
  interface Window {
    _hmt?: typeof _hmt
  }
}

declare const __BAIDU_ID__: string
declare const __BAIDU_SPA__: boolean
// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __VUEPRESS_SSR__: boolean

export default defineClientConfig({
  enhance: ({ router }) => {
    if (__VUEPRESS_SSR__) return
    useBaiduAnalytics(__BAIDU_ID__)
    if (__BAIDU_SPA__) {
      router.beforeEach((to) => {
        if (typeof _hmt !== 'undefined') {
          _hmt.push(['_trackPageview', to.fullPath])
        }
      })
    }
  },
})
