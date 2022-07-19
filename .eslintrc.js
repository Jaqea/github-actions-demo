module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:vue/essential',
		'plugin:react/recommended',
		'airbnb-base',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		parser: '@babel/eslint-parser',
		requireConfigFile: false,
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['vue', 'react', 'import'],
	rules: {},
};
