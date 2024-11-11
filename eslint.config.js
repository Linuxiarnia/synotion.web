import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import stylistic from '@stylistic/eslint-plugin';


/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { languageOptions: { globals: globals.browser }},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    { plugins: { '@stylistic': stylistic }},
    {
        rules: { 
            '@stylistic/semi': ['error', 'always'],
            '@stylistic/object-curly-spacing': ['error', 'always', { 'objectsInObjects': false }],
            '@stylistic/object-curly-newline': ['error', {
                'ObjectExpression': { 'multiline': true, minProperties: 3 },
                'ObjectPattern': { 'multiline': true, minProperties: 5 },
                'ImportDeclaration': 'never',
                'ExportDeclaration': { 'multiline': true, 'minProperties': 3 }
            }],
            '@stylistic/quotes': ['error', 'single'],
            '@stylistic/jsx-quotes': ['error', 'prefer-single'],
            '@stylistic/indent': ['error', 4],
            '@stylistic/jsx-newline': ['error', { 'prevent': true }],
            '@stylistic/jsx-sort-props': ['error', {
                'callbacksLast': true,
                'shorthandFirst': true,
                'multiline': 'last'
            }],
            '@stylistic/comma-dangle': ['error', {
                'arrays': 'only-multiline',
                'objects': 'only-multiline',
                'imports': 'never',
                'exports': 'never',
                'functions': 'never'
            }],
        }
    },
];