module.exports = {
  extends: ['prettier'],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  plugins: ['jsx-a11y', 'jest-formatting', 'import', 'react', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'jest-formatting/padding-around-describe-blocks': 2,
    'jest-formatting/padding-around-test-blocks': 2,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.tsx', '**/*.test.tsx', '.storybook/**'],
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/forbid-component-props': [
      'error',
      { forbid: ['className', 'style'] },
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',
    'default-param-last': 'off',
    'no-restricted-exports': 'off',
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        // Custom rules
        'import/prefer-default-export': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/display-name': 'off',

        // https://github.com/benmosher/eslint-plugin-import/issues/1615
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            tsx: 'never',
          },
        ],
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.tsx'],
      },
      'eslint-import-resolver-typescript': true,
    },
  },
};
