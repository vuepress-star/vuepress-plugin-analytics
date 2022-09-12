export const useCnzzAnalytics = (id: string, webId: string): void => {
  // insert hm `<script>` tag
  const cnzzScript = document.createElement('script')
  cnzzScript.src = `https://v1.cnzz.com/z_stat.php?id=${id}&web_id=${webId}`
  cnzzScript.async = true
  document.head.appendChild(cnzzScript)
}
