// @ts-check
import eslint from '@eslint/js';
import angular from 'angular-eslint';
import prettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...angular.configs.tsRecommended,
    prettier,
    {
        files: ['**/*.ts'],
        ignores: ['src/environments/**/*'],
        rules: {
            indent: ['error', 4, { SwitchCase: 1 }],
            '@angular-eslint/prefer-standalone': ['off'],
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: 'app',
                    style: 'camelCase',
                },
            ],
            '@angular-eslint/component-selector': [
                'error',
                {
                    type: 'element',
                    prefix: 'app',
                    style: 'kebab-case',
                },
            ],
            '@typescript-eslint/explicit-function-return-type': [
                'error',
                {
                    allowExpressions: true,
                    allowTypedFunctionExpressions: true,
                    allowHigherOrderFunctions: true,
                },
            ],
            '@typescript-eslint/no-duplicate-enum-values': 'error',
            'no-nested-ternary': 'error',
            'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/no-useless-constructor': 'error',
            '@typescript-eslint/member-ordering': 'error',
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: ['variable'],
                    modifiers: ['exported', 'const'],
                    format: ['UPPER_CASE'],
                },
                {
                    selector: ['variable', 'function', 'method', 'parameter'],
                    format: ['camelCase'],
                },
                {
                    selector: ['enum'],
                    suffix: ['Enum'],
                    format: ['PascalCase'],
                },
                {
                    selector: ['enumMember', 'typeLike'],
                    format: ['PascalCase'],
                },
                {
                    selector: ['property'],
                    format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
                },
                {
                    selector: ['property'],
                    modifiers: ['private'],
                    format: ['camelCase'],
                },
                {
                    selector: ['property'],
                    modifiers: ['private', 'readonly'],
                    format: ['UPPER_CASE'],
                },
                {
                    selector: 'interface',
                    prefix: ['I'],
                    format: ['PascalCase'],
                },
            ],
        },
    },

    ...angular.configs.templateRecommended.map((config) => ({
        ...config,
        files: ['**/*.html'],
    })),

    ...angular.configs.templateAccessibility.map((config) => ({
        ...config,
        files: ['**/*.html'],
    })),

    {
        files: ['**/*.html'],
        rules: {
            '@typescript-eslint/ban-ts-comment': 'off',
            '@angular-eslint/template/attributes-order': ['warn'],
            '@angular-eslint/template/no-duplicate-attributes': ['error'],
            '@angular-eslint/template/no-inline-styles': ['error'],
            '@angular-eslint/template/no-interpolation-in-attributes': ['error'],
            '@angular-eslint/template/button-has-type': ['error'],
            '@angular-eslint/template/click-events-have-key-events': ['off'],
            '@angular-eslint/template/interactive-supports-focus': ['off'],
        },
    },
];
