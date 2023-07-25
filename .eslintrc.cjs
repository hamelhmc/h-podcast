/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: [
      './tsconfig.json',
      './tsconfig.app.json',
      './tsconfig.vitest.json',
      './tsconfig.node.json'
    ]
  },
  rules: {
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'max-statements-per-line': ['warn', { max: 1 }],
    'no-nested-ternary': 'warn',
    'no-unneeded-ternary': 'warn',
    'one-var-declaration-per-line': ['warn', 'always'],
    'operator-assignment': ['warn', 'always'],

    camelcase: ['error', { properties: 'never' }],
    eqeqeq: 'error',
    'new-cap': ['error', { capIsNew: false }],
    'no-array-constructor': 'error',
    'no-console': ['error', { allow: ['error'] }],
    'no-else-return': ['error', { allowElseIf: false }],
    'no-extend-native': 'error',
    'no-lonely-if': 'error',
    'no-param-reassign': 'error',
    'no-return-assign': 'error',
    'no-throw-literal': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    radix: 'error',
    yoda: 'error',

    'array-callback-return': ['error', { checkForEach: true }],
    'no-await-in-loop': 'error',
    'no-constant-binary-expression': 'error',
    'no-constructor-return': 'error',
    'no-promise-executor-return': 'error',
    'no-self-compare': 'error',
    'no-template-curly-in-string': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable-loop': 'error',
    'no-unused-private-class-members': 'error',
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
        allowNamedExports: false
      }
    ],
    'require-atomic-updates': 'error',

    '@typescript-eslint/no-explicit-any': ['warn'],
    '@typescript-eslint/no-extra-non-null-assertion': ['error'],
    '@typescript-eslint/no-floating-promises': ['error'],
    '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
    '@typescript-eslint/no-non-null-assertion': ['error'],
    '@typescript-eslint/no-require-imports': ['error'],
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
    '@typescript-eslint/no-unnecessary-condition': ['error'],
    '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/prefer-for-of': ['error'],
    '@typescript-eslint/prefer-nullish-coalescing': ['error'],
    '@typescript-eslint/prefer-readonly': ['error'],
    '@typescript-eslint/promise-function-async': ['error', { checkArrowFunctions: false }],
    '@typescript-eslint/switch-exhaustiveness-check': ['error'],
    '@typescript-eslint/no-unused-vars': 'off'
  }
}
