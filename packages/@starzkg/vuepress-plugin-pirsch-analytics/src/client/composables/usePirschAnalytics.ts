declare const pirsch: any

declare global {
  interface Window {
    pirsch?: typeof pirsch
  }
}

/**
 * Add pirsch script your site
 */
export const usePirschAnalytics = (code: string): void => {
  // avoid duplicated import
  if (window.pirsch) {
    return
  }

  // insert pirsch `<script>` tag
  const pirschScript = document.createElement('script')
  pirschScript.id = 'pirschjs'
  pirschScript.src = `https://api.pirsch.io/pirsch.js`
  pirschScript.async = true
  pirschScript.defer = true
  pirschScript.setAttribute('data-code', code)
  document.head.appendChild(pirschScript)

  // insert pirsch snippet
  window.pirsch =
    window.pirsch ||
    function () {
      // the pirsch function must use `arguments` object to forward parameters
      // eslint-disable-next-line prefer-rest-params
      ;(window.pirsch.q = window.pirsch.q || []).push(arguments)
    }

  pirsch('js', new Date())
  pirsch('config', code)
}
