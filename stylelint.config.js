/** @type {import('stylelint').Config} */
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-tailwindcss',
  ],
  plugins: ['stylelint-order'],
  ignoreFiles: ['**/*.generated.*'],
  customSyntax: 'postcss-scss',
  rules: {
    // scss overrides
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],

    // disabling rule that causes high friction
    'no-descending-specificity': null,

    // additional rules
    'order/properties-alphabetical-order': true,
  },
}
