module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-undef": 0,
    "no-unused-vars": ["error", { "args": "none" }],
    "vue/component-definition-name-casing": ["error", "kebab-case"],
    "keyword-spacing": ["error"],
    "vue/multi-word-component-names": ["error", {
      "ignores": ["Payment"]
    }]
  },
};
