declare const dataLayer: any[]
declare const hm: (...args: any[]) => void

declare global {
  interface Window {
    dataLayer?: typeof dataLayer
    hm?: typeof hm
  }
}

/**
 * Add hm.js to your site
 */
export const useBaiduAnalytics = (id: string): void => {
  // avoid duplicated import
  if (window.dataLayer && window.hm) {
    return
  }

  // insert hm `<script>` tag
  const baiduScript = document.createElement('script')
  baiduScript.id = 'baidu-analytics'
  baiduScript.src = `https://hm.baidu.com/hm.js?${id}`
  baiduScript.async = true
  document.head.appendChild(baiduScript)

  // insert hm snippet
  window.dataLayer = window.dataLayer || []
  // the hm function must use `arguments` object to forward parameters
  window.hm = function () {
    // eslint-disable-next-line prefer-rest-params
    dataLayer.push(arguments)
  }

  hm('js', new Date())
  hm('config', id)
}
