module.exports = {
    extends: ['@remix-run/eslint-config', '@remix-run/eslint-config/node'],
    plugins: ['testing-library'],
    overrides: [
        // Only uses Testing Library lint rules in test files
        {
            files: [
                '**/__tests__/**/*.[jt]s?(x)',
                '**/?(*.)+(spec|test).[jt]s?(x)',
            ],
            extends: ['plugin:testing-library/react'],
        },
        {
            // playwright uses the same "getBy" method as testing library so we need to ignore this rule
            files: ['**/e2e/**/*.[jt]s?(x)'],
            rules: {
                'testing-library/prefer-screen-queries': 'off',
            },
        },
    ],
};
