import berlysia from "@berlysia/eslint-config";

export default berlysia(
  {
    typescript: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      "promise/prefer-await-to-callbacks": "off",
      "promise/prefer-await-to-then": "off",
      "unicorn/no-useless-undefined": "off",
      "node/callback-return": "off",
      "unicorn/numeric-separators-style": "off",
    },
  },
  {
    ignores: ["**/*.d.ts"],
  }
);
