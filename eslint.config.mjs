// eslint.config.mjs
import globals from "globals";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import playwright from "eslint-plugin-playwright";
import prettier from "eslint-config-prettier";

export default [
  // Base TypeScript + Playwright flat config
  {
    files: ["**/*.{ts,tsx,js,mjs,cjs}"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
      },
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      playwright,
    },
    rules: {
      // Include TS recommended rules
      ...tseslint.configs.recommended.rules,
      // Add Playwright recommended rules
      ...playwright.configs.recommended.rules,
      // Disable Prettier conflicts
      ...prettier.rules,
      "no-unused-vars": "error"
    },
    ignores: [
      "node_modules",
      "dist",
      "allure-results",
      "allure-report",
      "playwright-report",
    ],
  },
];
