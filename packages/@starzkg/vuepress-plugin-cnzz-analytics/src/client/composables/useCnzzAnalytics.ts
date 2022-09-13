/**
 * Add cnzz to your site
 */
export const useCnzzAnalytics = (id: string, webId: string): void => {
  // avoid duplicated import
  if (window._czc) {
    return
  }

  // insert z_stat `<script>` tag
  const cnzzScript = document.createElement('script')
  cnzzScript.id = 'cnzz-analytics'
  cnzzScript.src = `https://v1.cnzz.com/z_stat.php?id=${id}&web_id=${webId}`
  cnzzScript.async = true
  document.head.appendChild(cnzzScript)

  // insert _czc snippet
  window._czc = window._czc || []
}
