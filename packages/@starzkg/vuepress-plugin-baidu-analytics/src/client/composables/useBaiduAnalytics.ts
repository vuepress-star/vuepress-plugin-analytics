/**
 * Add hm.js to your site
 */
export const useBaiduAnalytics = (id: string): void => {
  // avoid duplicated import
  if (window._hmt) {
    return
  }

  // insert hm `<script>` tag
  const baiduScript = document.createElement('script')
  baiduScript.id = 'baidu-analytics'
  baiduScript.src = `https://hm.baidu.com/hm.js?${id}`
  baiduScript.async = true
  document.head.appendChild(baiduScript)

  // insert _hmt snippet
  window._hmt = window._hmt || []
}
