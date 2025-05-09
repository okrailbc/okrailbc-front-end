import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import pluginCypress from "eslint-plugin-cypress/flat";
import compat from "eslint-plugin-compat";

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } }, //eslint formatting for Node vs browser properties
  pluginCypress.configs.globals,
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  compat.configs["flat/recommended"],
  {
    files: ["**/*.{js,ts,jsx,tsx,mjs,cjs,vue}"],
    languageOptions: {
      globals: {
        ...globals["shared-node-browser"],
      },
      sourceType: "module",
      ecmaVersion: "latest",
    },
    rules: {
      "no-unused-vars": "warn",
      "vue/singleline-html-element-content-newline": "off",
      "vue/html-self-closing": "off",
      "vue/html-indent": "off",
    },
  },
  {
    ignores: ["**/coverage/*", "**/dist/*", "**/.husky/"],
  },
];
