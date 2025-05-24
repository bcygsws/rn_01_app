module.exports = {
	root: true,
	extends: [
		'@react-native',
		'plugin:react-native/all'
	],
	plugins: ['react-native'],
	rules: {
		semi: [2, 'always'],
		'comma-dangle': 0,
		quotes: [2, 'single', 'avoid-escape'],
		'no-trailing-spaces': 0,
		'space-infix-ops': 0,// 关闭在操作数前需要添加空格
		'react-native/no-color-literals': 0,// 关闭掉：没有颜色字面量
		'react-native/no-inline-styles': 0,// 忽略内联样式
		//'eslint-disable-next-line': 0,// 禁用 关闭下一行eslint的检查
		'react/no-unstable-nested-components': 0,// 可以使用 不稳定的组件
		'react-native/no-unused-styles': 0,// 忽略未使用的样式
		'react-native/split-platform-components': 0,// 忽略平台组件
		'react-hooks/rules-of-hooks':  0,// 忽略hooks的规则
	},

};

/**
 * @Desc:
 * 参考文档：
 * https://www.showapi.com/news/article/66b4f9444ddd79f11a058d8f
 *
 * 1.react native项目eslint配置；装包：
 * npm install eslint-plugin-react-native --save-dev
 *
 * 2.配置eslintrc.js文件；主要添加extends属性：
 * "extends": ["plugin:react-native/all"]
 *
 * 3.使用命令：修复错误
 * npx eslint . --fix
 *
 *
 *
 *
 * */
