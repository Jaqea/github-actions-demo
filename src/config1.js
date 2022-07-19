const VSCODECONFIG = {
	/**
	 *
	 * editor配置
	 */
	'editor.linkedEditing': true,
	'editor.guides.bracketPairs': true,
	// vscode默认启用了根据文件类型自动设置tabsize的选项
	'editor.detectIndentation': false,
	// 重新设定tabsize
	'editor.tabSize': 2,
	'editor.fontSize': 16,
	// #每次保存的时候自动格式化
	'editor.formatOnSave': true,
	'editor.formatOnType': true,
	'editor.fontFamily':
		"'Droid Sans Mono', 'Courier New', monospace, 'Droid Sans Fallback'",
	'editor.quickSuggestions': {
		other: true,
		comments: true,
		strings: true,
	},
	// 可以为不同语言或文档单独配置
	'[markdown]': {
		'editor.formatOnSave': true,
	},
	// 粘贴自动格式化
	'editor.formatOnPaste': true,
	'editor.fontLigatures': null,
	'editor.mouseWheelZoom': true,
	// 代码提示。许多插件都有代码提示，代码缩写提示优先显示在最前
	'editor.suggestSelection': 'first',
	// 为不同文件配置格式化
	'[html]': {
		'editor.defaultFormatter': 'esbenp.prettier-vscode',
	},
	'[javascript]': {
		'editor.defaultFormatter': 'esbenp.prettier-vscode',
	},
	'[json]': {
		'editor.defaultFormatter': 'esbenp.prettier-vscode',
	},
	'[jsonc]': {
		'editor.defaultFormatter': 'esbenp.prettier-vscode',
	},
	'[vue]': {
		'editor.defaultFormatter': 'esbenp.prettier-vscode',
	},
	'[css]': {
		'editor.defaultFormatter': 'esbenp.prettier-vscode',
	},
	'[less]': {
		'editor.defaultFormatter': 'esbenp.prettier-vscode',
	},
	'[scss]': {
		'editor.defaultFormatter': 'esbenp.prettier-vscode',
	},
	'[typescript]': {
		'editor.defaultFormatter': 'vscode.typescript-language-features',
	},
	'editor.codeActionsOnSave': {
		'source.fixAll.eslint': true,
	},
	'prettier.useEditorConfig': false,
	// 现有jsconfig.json或tsconfig.json文件覆盖默认设置
	'js/ts.implicitProjectConfig.checkJs': true,
	//  #让函数(名)和后面的括号之间加个空格
	'javascript.format.insertSpaceBeforeFunctionParenthesis': true,
	// 自动更新文件路径
	'javascript.preferences.importModuleSpecifier': 'non-relative',
	'typescript.preferences.importModuleSpecifier': 'non-relative',
	'javascript.updateImportsOnFileMove.enabled': 'always',
	'typescript.updateImportsOnFileMove.enabled': 'always',
	/**
	 *
	 * emmet插件配置
	 */
	'emmet.includeLanguages': {
		postcss: 'css',
		javascript: 'javascriptreact',
	},
	'emmet.syntaxProfiles': {
		postcss: 'css',
	},
	'emmet.triggerExpansionOnTab': true,
	'git.confirmSync': true, // *** 这个是提示空格的点点
	'files.autoSave': 'off', // 超过屏幕视图换行
	/**
	 *
	 * eslint配置
	 */
	// 黄色波浪线
	'eslint.enable': false,
	'eslint.format.enable': true,
	'eslint.alwaysShowStatus': true,
	'eslint.run': 'onSave',
	'eslint.validate': [
		// eslint规则对以下几种后缀文件生效. 默认为["javascript", "javascriptreact"]
		'javascript',
		'javascriptreact',
		'typescript',
		'typescriptreact',
		'vue',
	],
	/**
	 *
	 *vetur 配置
	 */
	'vetur.format.defaultFormatterOptions': {
		prettier: {
			eslintIntegration: true,
		},
	},
	'vetur.format.defaultFormatter.html': 'prettier',
	'vetur.format.defaultFormatter.css': 'prettier',
	'vetur.format.defaultFormatter.postcss': 'prettier',
	'vetur.format.defaultFormatter.scss': 'prettier',
	'vetur.format.defaultFormatter.less': 'prettier',
	'vetur.format.defaultFormatter.stylus': 'stylus-supremacy',
	'vetur.format.defaultFormatter.js': 'prettier-eslint',
	'vetur.format.defaultFormatter.ts': 'prettier',
	/**
	 *
	 *material-icon-theme 图标插件配置
	 */
	'material-icon-theme.folders.color': '#60A3BC',
	'material-icon-theme.folders.theme': 'specific',
	/**
	 *
	 * IDE文件搜索配置
	 */
	'search.exclude': {
		// VScode进行文件搜索时，不搜索这些区域。
		'**/node_modules': true,
		'**/bower_components': true,
		'**/*.code-search': true,
		'**/.DS_Store': true,
		'**/.git': true,
		'**/.gitignore': true,
		'**/.idea': true,
		'**/.svn': true,
		'**/.vscode': true,
		'**/build': true,
		'**/dist': true,
		'**/tmp': true,
		'**/yarn.lock': true,
		'**/assets': true,
	},
	/**
	 *
	 * 屏蔽文件配置
	 */
	'files.exclude': {
		'**/.git': true,
		'**/.svn': true,
		'**/.hg': true,
		'**/CVS': true,
		'**/.DS_Store': true,
	},
	/**
	 *
	 * 配置文件关联
	 */
	'files.associations': {
		// 比如小程序中的 .wxss 这种文件，会把它作为css文件来处理，提供对应的css的语法提示，css的格式化等。
		'*.wxss': 'css',
		'*.cjson': 'jsonc',
		'*.wxs': 'javascript',
		'*.ts': 'typescript',
		'*.vue': 'vue',
	},
	/**
	 *
	 * 自动闭合标签配置
	 */
	'auto-close-tag.activationOnLanguage': [
		'xml',
		'ejs',
		'javascript',
		'javascriptreact',
		'typescript',
		'typescriptreact',
		'plaintext',
		'markdown',
		'vue',
		'HTML (EEx)',
		'HTML (Eex)',
	],
	/**
	 *
	 * 编辑器配置
	 */
	'workbench.activityBar.visible': true,
	'workbench.colorTheme': 'Monokai',
	'workbench.iconTheme': 'material-icon-theme',
};

export default VSCODECONFIG;
