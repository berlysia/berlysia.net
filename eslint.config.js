import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import berlysia from "@berlysia/eslint-config";
// import nextPlugin from "@next/eslint-plugin-next";

const currentDir = dirname(fileURLToPath(import.meta.url));

export default berlysia(
  {
    typescript: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: currentDir,
      },
    },
  },
  {
    rules: {
      "promise/prefer-await-to-callbacks": "off",
      "promise/prefer-await-to-then": "off",
      "unicorn/no-useless-undefined": "off",
      "node/callback-return": "off",
    },
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
