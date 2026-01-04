import berlysia from "@berlysia/eslint-config";
// import nextPlugin from "@next/eslint-plugin-next";

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
  // {
  //   plugins: {
  //     "@next/next": nextPlugin,
  //   },
  //   rules: {
  //     ...nextPlugin.configs.recommended.rules,
  //     ...nextPlugin.configs["core-web-vitals"].rules,
  //   },
  // }
);
