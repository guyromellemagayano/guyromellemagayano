import pluginNext from "@next/eslint-plugin-next";

import { default as baseConfig } from "@guyromellemagayano/eslint-config";

/**
 * A custom ESLint configuration for libraries that use Next.js.
 * @type {import("eslint").Linter.Config[]}
 * */
export default [
  ...baseConfig,
  {
    plugins: {
      "@next/next": pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,
    },
  },
];
