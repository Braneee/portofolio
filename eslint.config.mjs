import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "attendance-system/**",
    "caternear/**",
    "final-project-pss/**",
    "poliklinik-app/**",
    "stpi_mobile/**",
    "transaksiku/**",
    "warungku/**",
    "temp-next/**",
  ]),
]);
