import stylistic from '@stylistic/eslint-plugin';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';

import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  // 1. Core Global Ignores Configuration Block
  {
    ignores: ['**/.nuxt/**', '**/.output/**', '**/node_modules/**', '**/dist/**'],
  },

  // 2. Main Workspace Plugin Map and Rule Definitions
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
      '@stylistic': stylistic,
      'no-relative-import-paths': noRelativeImportPaths,
    },
    rules: {
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-duplicate-imports': 'error',
      'no-unused-vars': 'off',
      'no-var': 'error',
      'prefer-const': 'warn',
      eqeqeq: ['warn', 'always'],

      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      'no-relative-import-paths/no-relative-import-paths': [
        'warn',
        { allowSameFolder: true, rootDir: '.', prefix: '~' },
      ],

      '@typescript-eslint/no-unused-vars': 'off',
      'vue/multi-word-component-names': 'off',

      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'import', next: '*' },
        { blankLine: 'any', prev: 'import', next: 'import' },
      ],
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/no-trailing-spaces': 'error',
    },
  },

  // 3. Layer Specific Absolute Import Overrides
  {
    files: ['server/**/*.ts', 'layers/**/server/**/*.ts'],
    rules: {
      'no-relative-import-paths/no-relative-import-paths': [
        'warn',
        { allowSameFolder: true, rootDir: '.', prefix: '#shared' },
      ],
    },
  },
);
