declare const micro: any

declare global {
  interface Window {
    micro?: typeof micro
  }
}

/**
 * Add MicroAnalytics script to your site
 */
export const useMicroAnalytics = (host: string, id: string): void => {
  // avoid duplicated import
  if (window.micro) {
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
  window.micro =
    window.micro ||
    function () {
      // the micro function must use `arguments` object to forward parameters
      // eslint-disable-next-line prefer-rest-params
      ;(window.micro.q = window.micro.q || []).push(arguments)
    }

  micro('js', new Date())
  micro('config', id)
}
