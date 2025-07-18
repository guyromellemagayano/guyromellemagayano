import { baseEslintConfig } from "@packages/eslint-config";

/** @type {import("eslint").Linter.Config} */
export default [
  ...baseEslintConfig,
  {
    settings: {
      "import/resolver": {
        alias: {
          map: [["@api", "./"]],
          extensions: [".js", ".ts", ".tsx"],
        },
      },
    },
  },
];
