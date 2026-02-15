import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig ,globalIgnores} from "eslint/config";

export default defineConfig([
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], languageOptions: { globals: globals.browser } },
  globalIgnores([
		"dist/**/*", // ignore all contents in and under `build/` directory but not the `build/` directory itself
	]),
  tseslint.configs.recommended,
]);
