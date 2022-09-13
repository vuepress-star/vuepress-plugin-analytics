declare const dataLayer: any[]
declare const plausible: (...args: any[]) => void

declare global {
  interface Window {
    dataLayer?: typeof dataLayer
    plausible?: typeof plausible
  }
}

/**
 * Add plausible.js to your site
 */
export const usePlausibleAnalytics = (host: string, domain: string): void => {
  // avoid duplicated import
  if (window.dataLayer && window.plausible) {
    return
  }

  // insert plausible `<script>` tag
  const plausibleScript = document.createElement('script')
  plausibleScript.id = 'plausible-analytics'
  plausibleScript.src = `${host}/js/plausible.js`
  plausibleScript.async = true
  plausibleScript.defer = true
  plausibleScript.setAttribute('data-domain', domain)
  document.head.appendChild(plausibleScript)

  // insert plausible snippet
  window.dataLayer = window.dataLayer || []
  // the plausible function must use `arguments` object to forward parameters
  window.plausible = function () {
    // eslint-disable-next-line prefer-rest-params
    dataLayer.push(arguments)
  }

  plausible('js', new Date())
  plausible('config', domain)
}
