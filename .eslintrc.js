/* eslint-env node */
module.exports = {
  parser: "@babel/eslint-parser",
  requireConfigFile: false,
  extends: "sora/vue-3",
  plugins: ["markdown"],
  rules: {
    "no-trailing-spaces": "error",
  },
};
