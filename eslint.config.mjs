import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";

export default defineConfig([
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},

	js.configs.recommended,
	tseslint.configs.recommended,
	astro.configs.recommended,
	{
		files: ["**/*.astro"],
		languageOptions: {
			parser: astro.parser,
			parserOptions: {
				parser: tseslint.parser,
				extraFileExtensions: [".astro"],
				sourceType: "module",
				ecmaVersion: "latest",
			},
		},
		rules: {
			"no-undef": "off",
			"@typescript-eslint/no-explicit-any": "off",
		},
	},

	{
		ignores: ["dist/**", "**/*.d.ts"],
	},
]);
