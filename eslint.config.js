import globals from "globals";

export default [
  {
    ignores: ["dist/**", "versions/**", "node_modules/**"],
  },
  {
    files: ["src/**/*.js", "scripts/**/*.mjs", "tests/**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      "no-undef": "error",
    },
  },
];
