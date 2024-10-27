module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Add your custom rules here
    'react/react-in-jsx-scope': 'off',
    // 'unused-imports/no-unused-imports': 'warn',
    // 'unused-imports/no-unused-vars': [
    //   'warn',
    //   {
    //     vars: 'all',
    //     varsIgnorePattern: '^_',
    //     args: 'after-used',
    //     argsIgnorePattern: '^_',
    //   },
    // ],
    // Warn instead of error for unused variables
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
}
// module.exports = {
//   parser: '@typescript-eslint/parser', // Specifies the ESLint parser
//   extends: [
//     'plugin:react/recommended',
//     'prettier',
//     'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
//   ],
//   parserOptions: {
//     ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
//     sourceType: 'module', // Allows for the use of imports
//     ecmaFeatures: {
//       jsx: true, // Allows for the parsing of JSX
//     },
//   },
//   rules: {
//     semi: 'off',
//     '@typescript-eslint/ban-ts-ignore': 0,
//     'eslint-disable-next-line': 0,
//     'linebreak-style': 0,
//     '@typescript-eslint/explicit-member-accessibility': 0,
//     eqeqeq: 'error',
//     'max-len': 'off',
//     'new-parens': 'error',
//     'no-bitwise': 'error',
//     'no-caller': 'error',
//     'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 0 }],
//     'quote-props': ['error', 'as-needed'],
//     'sort-imports-es6-autofix/sort-imports-es6': [
//       2,
//       {
//         ignoreCase: false,
//         ignoreMemberSort: false,
//         memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
//       },
//     ],
//     '@typescript-eslint/ban-ts-comment': 0,
//     'no-irregular-whitespace': 'warn',
//     'react-hooks/exhaustive-deps': 0,
//     'react/display-name': 0,
//     'react/jsx-uses-react': 'off',
//     'react/react-in-jsx-scope': 'off',
//     'react/prop-types': 'off',
//     'no-restricted-imports': [
//       'error',
//       {
//         patterns: ['@mui/*/*/*', '!@mui/material/test-utils/*'],
//       },
//     ],
//   },
//   plugins: ['sort-imports-es6-autofix'],
//   settings: {
//     react: {
//       version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
//     },
//   },
// }
