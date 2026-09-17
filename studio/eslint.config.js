// eslint.config.js

import studio from '@sanity/eslint-config-studio'
import prettier from 'eslint-plugin-prettier'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import {importX} from 'eslint-plugin-import-x'
import * as typescriptEslint from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'

export default [
  ...studio,
  {
    ignores: ['dist', 'node_modules', '.sanity'],
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      prettier,
      'simple-import-sort': simpleImportSort,
      'import-x': importX,
      '@typescript-eslint': typescriptEslint,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'prettier/prettier': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      // '@typescript-eslint/consistent-type-imports': 'error',
      'import-x/no-default-export': 'error',
    },
  },
  {
    files: ['**/sanity.config.ts', '**/sanity.cli.ts'],
    rules: {
      'import-x/no-default-export': 'off',
    },
  },
]
