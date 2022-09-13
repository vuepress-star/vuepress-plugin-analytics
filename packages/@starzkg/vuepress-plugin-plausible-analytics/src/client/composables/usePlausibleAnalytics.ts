declare const plausible: any

declare global {
  interface Window {
    plausible?: typeof plausible
  }
}

/**
 * Add plausible.js to your site
 */
export const usePlausibleAnalytics = (host: string, domain: string): void => {
  // avoid duplicated import
  if (window.plausible) {
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
  window.plausible =
    window.plausible ||
    function () {
      // the plausible function must use `arguments` object to forward parameters
      // eslint-disable-next-line prefer-rest-params
      ;(window.plausible.q = window.plausible.q || []).push(arguments)
    }

  plausible('js', new Date())
  plausible('config', domain)
}
