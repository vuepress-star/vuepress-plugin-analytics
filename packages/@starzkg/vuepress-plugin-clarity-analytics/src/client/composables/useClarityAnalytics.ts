declare const clarity: any

declare global {
  interface Window {
    clarity?: typeof clarity
  }
}

/**
 * Add clarity to your site
 *
 * @see https://docs.microsoft.com/en-us/clarity/clarity-setup
 */
export const useClarityAnalytics = (id: string): void => {
  // avoid duplicated import
  if (window.clarity) {
    return
  }

  // insert clarityTag `<script>` tag
  const clarityScript = document.createElement('script')
  clarityScript.id = 'clarity-analytics'
  clarityScript.src = `https://www.clarity.ms/tag/${id}?ref=bwt`
  clarityScript.async = true
  document.head.appendChild(clarityScript)

  // insert clarity snippet
  window.clarity =
    window.clarity ||
    function () {
      // the clarity function must use `arguments` object to forward parameters
      // eslint-disable-next-line prefer-rest-params
      ;(window.clarity.q = window.clarity.q || []).push(arguments)
    }
}
