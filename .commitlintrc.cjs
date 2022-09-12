const fs = require('fs')
const path = require('path')

const packages = fs.readdirSync(path.resolve(__dirname, 'packages/@starzkg'))

for (let i = 0; i < packages.length; i++) {
  packages[i] = packages[i].substr(9, packages[i].length - 9)
}

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', ['docs', 'example', ...packages]],
    'footer-max-line-length': [0],
  },
}
