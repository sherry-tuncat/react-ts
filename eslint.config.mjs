import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier'; // 引入 Prettier 插件

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['src/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
      'prettier/prettier': 'error', // 强制执行 Prettier 格式
    },
  },
  {
    plugins: {
      prettier: pluginPrettier,
    }, // 引入 Prettier 插件
    rules: {
      'prettier/prettier': [
        'error',
        { singleQuote: true, semi: true, trailingComma: true, printWidth: 80 },
      ],
    },
  },
];
