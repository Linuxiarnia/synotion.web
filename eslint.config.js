import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import stylistic from '@stylistic/eslint-plugin';


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  { plugins: { '@stylistic': stylistic } },
  { rules: { 
    '@stylistic/semi': ['error', 'always'],
    '@stylistic/object-curly-spacing': ['error', 'always', { 'objectsInObjects': true }],
    '@stylistic/object-curly-newline': ['error', { 'minProperties': 2 }],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/jsx-quotes': ['error', 'prefer-single'],
    '@stylistic/indent': ['error', 2],
    '@stylistic/jsx-newline': ['error', { 'prevent': true }],
    '@stylistic/jsx-sort-props': ['error', {
      'callbacksLast': true,
      'shorthandFirst': true,
      'multiline': 'last'
    }],
    '@stylistic/jsx-max-props-per-line': ['error', { 'maximum': 1 }]
  } },
];