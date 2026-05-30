import { defineConfig, globalIgnores } from "eslint/config";

import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,

  globalIgnores([
    "node_modules/**",
    "dist/**",
    ".next/**",
    "build/**",
    "public/**",
    "coverage/**",
    "**/*.d.ts",
  ]),
]);
