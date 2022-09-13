declare const dataLayer: any[]
declare const simple: (...args: any[]) => void
declare const doNotTrack: string

declare global {
  interface Window {
    doNotTrack?: typeof doNotTrack
    dataLayer?: typeof dataLayer
    simple?: typeof simple
  }

  interface Navigator {
    msDoNotTrack?: typeof doNotTrack
  }
}

/**
 * Add simple analytics script to your site
 */
export const useSimpleAnalytics = (
  host: string,
  eventsGlobal: string,
  skipDnt: boolean
): void => {
  // avoid duplicated import
  if (window.dataLayer && window.simple) {
    return
  }
  const dnt =
    window.doNotTrack || navigator.doNotTrack || navigator.msDoNotTrack || ''

  if (!skipDnt && /yes|1/.test(dnt)) {
    return console.warn(
      'Simple Analytics: Not loading script when doNotTrack is enabled'
    )
  }

  // insert simple `<script>` tag
  const simpleScript = document.createElement('script')
  simpleScript.id = 'simple-analytics'
  simpleScript.src = `${host}/latest.js`
  simpleScript.async = true
  simpleScript.defer = true
  simpleScript.setAttribute('data-skip-dnt', 'true')
  if (eventsGlobal && eventsGlobal !== 'sa_event')
    simpleScript.setAttribute('data-sa-global', eventsGlobal)
  document.head.appendChild(simpleScript)

  // insert simple snippet
  window.dataLayer = window.dataLayer || []
  // the simple function must use `arguments` object to forward parameters
  window.simple = function () {
    // eslint-disable-next-line prefer-rest-params
    dataLayer.push(arguments)
  }

  simple('js', new Date())
  simple('config', host)

  window[eventsGlobal] =
    window[eventsGlobal] ||
    function (a) {
      window[eventsGlobal].q
        ? window[eventsGlobal].q.push(a)
        : (window[eventsGlobal].q = [a])
    }
}
