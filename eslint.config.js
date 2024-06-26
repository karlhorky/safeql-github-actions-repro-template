import safeql from '@ts-safeql/eslint-plugin';
import eslintTypescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

/** @type {import('@typescript-eslint/utils/ts-eslint').FlatConfig.ConfigArray} */
const config = [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
        warnOnUnsupportedTypeScriptVersion: true,
      },
    },
    plugins: {
      '@ts-safeql': safeql,
      '@typescript-eslint': {
        rules: eslintTypescript.rules,
      },
    },
    rules: {
      '@ts-safeql/check-sql': [
        'error',
        {
          connections: [
            {
              databaseUrl: `postgres://safeql:safeql@localhost:5432/safeql`,
              targets: [
                {
                  tag: 'sql',
                  fieldTransform: 'camel',
                  transform: '{type}[]',
                },
              ],
              overrides: {
                types: {
                  json: 'JsonAgg',
                },
              },
            },
          ],
        },
      ],
    },
  },
];

export default config;
