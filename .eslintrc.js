module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  plugins: [],
  // add your custom rules here
  rules: {
    quotes: "off",
    semi: [2, "always"],
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "always",
      },
    ],
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
    "comma-dangle": ["error", "always-multiline"],
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["index"],
      },
    ],
    "space-before-function-paren": "never",
  },
};
