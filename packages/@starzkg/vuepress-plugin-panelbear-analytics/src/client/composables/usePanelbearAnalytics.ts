declare const panelbear: any

declare global {
  interface Window {
    panelbear?: typeof panelbear
  }
}

/**
 * Add panelbear script to your site
 */
export const usePanelbearAnalytics = (site: string): void => {
  // avoid duplicated import
  if (window.panelbear) {
    return
  }

  // insert panelbear `<script>` tag
  const panelbearScript = document.createElement('script')
  panelbearScript.id = 'panelbear-analytics'
  panelbearScript.src = `https://cdn.panelbear.com/analytics.js?site=${site}`
  panelbearScript.async = true
  document.head.appendChild(panelbearScript)

  // insert panelbear snippet
  window.panelbear =
    window.panelbear ||
    function () {
      // the panelbear function must use `arguments` object to forward parameters
      // eslint-disable-next-line prefer-rest-params
      ;(window.panelbear.q = window.panelbear.q || []).push(arguments)
    }

  panelbear('config', { site })
}
