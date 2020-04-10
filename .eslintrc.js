module.exports = {
  extends: ['eslint-config-kevbost', 'plugin:jest-dom/recommended'],
  plugins: ['jest-dom'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  /**
   * See https://github.com/kevbost/eslint-config-kevbost/blob/master/index.js for imported configuration
   *   Place overrides in rules object below
   *
   */
  rules: {
    // "import/namespace": [2, { allowComputed: true }],
    // "import/no-unresolved": [2, { ignore: ['\.img$'] }],
    'eol-last': ['error', 'always'],
    indent: ['error', 2],
    'no-tabs': ['error'],
    'no-unused-vars': [
      'error',
      {
        vars: 'local',
        varsIgnorePattern: '^(React|e|i|it|expect)$',
        argsIgnorePattern: '^(props|error|reject|response|dispatch|getState)$'
      }
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          // {
          //   name: 'styled-components',
          //   message: 'Please import from styled-components/macro.'
          // },
          // {
          //   name: 'reflexbox',
          //   message: 'Please import from reflexbox/styled-components.'
          // }
        ],
        patterns: ['!styled-components/macro', '!reflexbox/styled-components']
      }
    ]
  }
}
