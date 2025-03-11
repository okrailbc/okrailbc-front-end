import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import pluginCypress from "eslint-plugin-cypress/flat";
import compat from "eslint-plugin-compat";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,vue}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginCypress.configs.recommended,
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  compat.configs["flat/recommended"],
];
