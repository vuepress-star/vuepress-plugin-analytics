declare const dataLayer: any[]
declare const cnzz: (...args: any[]) => void

declare global {
  interface Window {
    dataLayer?: typeof dataLayer
    cnzz?: typeof cnzz
  }
}

/**
 * Add cnzz.js to your site
 */
export const useCnzzAnalytics = (id: string, webId: string): void => {
  // avoid duplicated import
  if (window.dataLayer && window.cnzz) {
    return
  }

  // insert z_stat `<script>` tag
  const cnzzScript = document.createElement('script')
  cnzzScript.id = 'cnzz-analytics'
  cnzzScript.src = `https://v1.cnzz.com/z_stat.php?id=${id}&web_id=${webId}`
  cnzzScript.async = true
  document.head.appendChild(cnzzScript)

  // insert cnzz snippet
  window.dataLayer = window.dataLayer || []
  // the cnzz function must use `arguments` object to forward parameters
  window.cnzz = function () {
    // eslint-disable-next-line prefer-rest-params
    dataLayer.push(arguments)
  }

  cnzz('js', new Date())
  cnzz('config', id)
}
