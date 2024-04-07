module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: "standard-with-typescript",
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}", "commitlint.config.js"],
			rules: {
				"no-unused-vars": "off",
				"@typescript-eslint/no-unused-vars": "off",
			},
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: "./tsconfig.eslint.json",
	},
	rules: {},
};
