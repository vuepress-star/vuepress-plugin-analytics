module.exports = {
  root: true,
  extends: 'vuepress',
  globals: {
    __VUEPRESS_VERSION__: 'readonly',
    __VUEPRESS_DEV__: 'readonly',
    __VUEPRESS_SSR__: 'readonly',
    __VUE_HMR_RUNTIME__: 'readonly',
    __VUE_OPTIONS_API__: 'readonly',
    __VUE_PROD_DEVTOOLS__: 'readonly',
  },
  overrides: [
    {
      files: ['*.ts', '*.vue', '*.cts'],
      extends: 'vuepress-typescript',
      parserOptions: {
        project: ['tsconfig.json'],
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        'vue/multi-word-component-names': 'off',
      },
    },
    {
      files: ['**/client/config.ts'],
      rules: {
        'vue/match-component-file-name': 'off',
      },
    },
    {
      files: ['**/tests/**/*.ts', 'tsup.config.ts'],
      env: {
        jest: true,
      },
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        'import/no-extraneous-dependencies': 'off',
        'vue/one-component-per-file': 'off',
      },
    },
    {
      files: ['docs/**', 'example/**'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
}
