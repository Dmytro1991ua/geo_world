import withNuxt from './.nuxt/eslint.config.mjs';
import unusedImports from 'eslint-plugin-unused-imports';
import stylistic from '@stylistic/eslint-plugin';

export default withNuxt({
  plugins: {
    'unused-imports': unusedImports,
    '@stylistic': stylistic,
  },
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-duplicate-imports': 'error',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'vue/multi-word-component-names': 'off',
    'prefer-const': 'warn',
    'no-var': 'error',
    eqeqeq: ['warn', 'always'],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/indent': ['error', 2],
    '@stylistic/comma-dangle': ['error', 'always-multiline'],
  },
});
