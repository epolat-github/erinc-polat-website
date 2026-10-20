import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

export default defineConfig([
    ...nextVitals,
    ...nextTypeScript,
    {
        rules: {
            "@typescript-eslint/ban-ts-comment": "off",
            "@typescript-eslint/no-empty-object-type": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "react/display-name": "off",
            "react-hooks/immutability": "off",
            "react-hooks/refs": "off",
        },
    },
    {
        files: ["src/**/*.{ts,tsx}"],
        ignores: [
            "src/app/[[]locale]/marifet-ar/**",
            "src/components/Spinner3d/**",
        ],
        rules: {
            "no-console": ["error", { allow: ["warn", "error"] }],
            "@typescript-eslint/no-explicit-any": "error",
            "@typescript-eslint/ban-ts-comment": "error",
        },
    },
    globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
