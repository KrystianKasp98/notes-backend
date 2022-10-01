module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint"],
  root: true,
  ignorePatterns: ["build/*", "webpack*", ".eslint*"],
  rules: {
    "array-bracket-spacing": [2, "never"],
    "brace-style": [2, "1tbs"],
    camelcase: 2,
    "comma-spacing": [2, { before: false, after: true }],
    "comma-style": [2, "last"],
    "computed-property-spacing": [2, "never"],
    "eol-last": 2,
    indent: [2, 2, { SwitchCase: 1 }],
    "key-spacing": [2, { beforeColon: false, afterColon: true }],
    "lines-around-comment": 0,
    "no-mixed-spaces-and-tabs": 2,
    "no-multiple-empty-lines": [2, { max: 2, maxEOF: 1 }],
    "no-new-object": 2,
    "func-call-spacing": 2,
    "no-trailing-spaces": 2,
    "object-curly-spacing": [2, "never"],
    "operator-linebreak": [2, "after"],
    "padded-blocks": [2, "never"],
    quotes: [2, "double", "avoid-escape"],
    "semi-spacing": [2, { before: false, after: true }],
    semi: [2, "always"],
    "keyword-spacing": [2, { before: true, after: true }],
    "space-before-blocks": [2, "always"],
    "space-before-function-paren": [
      2,
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "space-in-parens": [2, "never"],
    "space-infix-ops": 2,
    "spaced-comment": [
      2,
      "always",
      {
        exceptions: ["-", "+"],
      },
    ],
  },
};
