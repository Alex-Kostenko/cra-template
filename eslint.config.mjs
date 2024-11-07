import pluginJs from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import pluginReact from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const project = './tsconfig.json';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ['ts,tsx}']},
  {ignores: ['build/**/*', '**/*.test.tsx', '**/*.config.*']},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  importPlugin.flatConfigs.recommended,
  {
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project,
        },
      },
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    languageOptions: {
      parser: tsParser,
      sourceType: 'module',
      parserOptions: {
        project,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {...globals.browser, ...globals.node},
    },
    rules: {
      'no-unused-vars': 'off',
      'no-undef': 'error',
      'import/no-dynamic-require': 'warn',
      'import/no-nodejs-modules': 'warn',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'import/no-cycle': 'warn',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/no-unresolved': [2, {caseSensitive: false}],
      semi: ['error', 'always'],
      eqeqeq: 2,
      'no-console': 2,
      'react/react-in-jsx-scope': 'off',
      'react/jsx-first-prop-new-line': [2, 'multiline'],
      'import/order': 'off',
      'import/newline-after-import': [1, {count: 1}],
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
];
