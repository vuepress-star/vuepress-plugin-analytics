declare const dataLayer: any[]
declare const micro: (...args: any[]) => void

declare global {
  interface Window {
    dataLayer?: typeof dataLayer
    micro?: typeof micro
  }
}

/**
 * Add MicroAnalytics script to your site
 */
export const useMicroAnalytics = (host: string, id: string): void => {
  // avoid duplicated import
  if (window.dataLayer && window.micro) {
    return
  }

  // insert micro `<script>` tag
  const microScript = document.createElement('script')
  microScript.id = id
  microScript.src = `https://microanalytics.io/js/script.js`
  microScript.async = true
  microScript.defer = true
  microScript.setAttribute('data-host', host)
  microScript.setAttribute('data-dnt', String(false))
  document.head.appendChild(microScript)

  // insert micro snippet
  window.dataLayer = window.dataLayer || []
  // the micro function must use `arguments` object to forward parameters
  window.micro = function () {
    // eslint-disable-next-line prefer-rest-params
    dataLayer.push(arguments)
  }

  micro('js', new Date())
  micro('config', id)
}
