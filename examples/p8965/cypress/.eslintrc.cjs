/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:cypress/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    "vue/multi-word-component-names": "off",
    quotes: ["error", "single"],
  },
}
