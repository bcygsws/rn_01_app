module.exports = {
	presets: ['module:@react-native/babel-preset'],
	plugins: [
		'react-native-reanimated/plugin',// drawer navigator导航需要添加的插件
		['module-resolver', {
			root: ['./src'],
			extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
			alias: {
				'@': ['./src'],
			},
		},]
	],
};
