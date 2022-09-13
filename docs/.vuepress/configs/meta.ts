import { createRequire } from 'node:module'
import { fs } from '@vuepress/utils'

const require = createRequire(import.meta.url)

export const version = fs.readJSONSync(
  require.resolve('@starzkg/vuepress-plugin-analytics/package.json')
).version
