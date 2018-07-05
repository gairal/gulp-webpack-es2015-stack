module.exports = {
  plugins: [
    'stylelint-selector-bem-pattern',
    'stylelint-scss',
  ],
  extends: [
    // 'stylelint-config-sass-guidelines',
    'stylelint-config-concentric-order',
  ],
  rules: {
    'plugin/selector-bem-pattern': {
      componentName: '(([a-z0-9]+(?!-$)-?)+)',
      componentSelectors: {
        initial: '\\.{componentName}(((__|--)(([a-z0-9\\[\\]\'=]+(?!-$)-?)+))+)?$',
      },
      ignoreSelectors: [
        '.*\\.no-js.*',
        '.*\\.js-.*',
        '.*\\.lt-ie.*',
      ],
    },
    'at-rule-no-unknown': [true, {
      ignoreAtRules: ['tailwind', 'apply', 'responsive', 'variants', 'screen', 'extend', 'at-root', 'debug', 'warn', 'error', 'if', 'else', 'for', 'each', 'while', 'mixin', 'include', 'content', 'return', 'function'],
    }],
    'order/properties-alphabetical-order': null,
    'max-nesting-depth': 3,
    'number-leading-zero': null,
  },
};
