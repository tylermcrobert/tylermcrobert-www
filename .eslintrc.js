const TYPESCRIPT_RULES = {
  // handle with typescript
  "react/prop-types": 0,
  // doesn't like .tsx extensions
  "react/jsx-filename-extension": 0,
  //
  "@typescript-eslint/interface-name-prefix": [1, { prefixWithI: "always" }],

  // Disable warning abotut function return types.
  // Warns too often for React arrow functions.
  "@typescript-eslint/explicit-function-return-type": 0,
  // Disabling because of bug
  "@typescript-eslint/no-unused-vars": 0,
  // 'no-unused-vars': 0,

  // No commas or semi in interfaces
  "@typescript-eslint/member-delimiter-style": [
    1,
    {
      multiline: {
        delimiter: "none",
      },
    },
  ],
}

module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: ["plugin:@typescript-eslint/recommended", "airbnb", "prettier"],
  plugins: ["@typescript-eslint"],
  rules: {
    // idk
    "import/no-cycle": 0,

    "no-underscore-dangle": 0,

    //needed in certain instances
    "react/jsx-props-no-spreading": 0,

    // Nah
    "import/prefer-default-export": 0,

    // for api data
    camelcase: 0,

    // This is fucking with prettier
    "react/jsx-one-expression-per-line": 0,

    "import/extensions": 0,

    ...TYPESCRIPT_RULES,
  },

  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],

    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },

    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },

  env: {
    browser: true,
    node: true,
  },
}
