declare const dataLayer: any[]
declare const clarityTag: (...args: any[]) => void

declare global {
  interface Window {
    dataLayer?: typeof dataLayer
    clarityTag?: typeof clarityTag
  }
}

/**
 * Add clarityTag.js to your site
 *
 * @see https://docs.microsoft.com/en-us/clarity/clarity-setup
 */
export const useClarityAnalytics = (id: string): void => {
  // avoid duplicated import
  if (window.dataLayer && window.clarityTag) {
    return
  }

  // insert clarityTag `<script>` tag
  const clarityScript = document.createElement('script')
  clarityScript.id = 'clarity-analytics'
  clarityScript.src = `https://www.clarity.ms/tag/${id}?ref=bwt`
  clarityScript.async = true
  document.head.appendChild(clarityScript)

  // insert clarityTag snippet
  window.dataLayer = window.dataLayer || []
  // the clarityTag function must use `arguments` object to forward parameters
  window.clarityTag = function () {
    // eslint-disable-next-line prefer-rest-params
    dataLayer.push(arguments)
  }

  clarityTag('js', new Date())
  clarityTag('config', id)
}
