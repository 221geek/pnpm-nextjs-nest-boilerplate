module.exports = [
	{
		files: [".eslintrc.{js,cjs}", "commitlint.config.js"],
		rules: {
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": "off",
		},
		languageOptions: {
			sourceType: "script",
			globals: {},
		},
	},
	{
		files: ["*.ts", "*.tsx"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			parser: "@typescript-eslint/parser",
			project: "./tsconfig.eslint.json",
			globals: {
				window: "readonly",
				document: "readonly",
				process: "readonly",
				global: "readonly",
			},
		},
		linterOptions: {
			extends: "standard-with-typescript",
			plugins: ["@typescript-eslint"],
		},
		rules: {},
	},
];
