module.exports = {
	presets: ['module:@react-native/babel-preset'],
	plugins: [
		'react-native-reanimated/plugin',// drawer navigator导航需要添加的插件
		['module-resolver', // 需要检查插件babel-plugin-module-resolver是否安装了？
			{
				root: ['.'],
				extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
				alias: {
					'@': ['./src'],
				},
			},]
	],
};
/**
 * @Desc:react native项目中路径别名配置
 * 参考：https://www.cnblogs.com/air-liyan/p/18352850
 * 1.安装模块解析插件：babel-plugin-module-resolver
 * 2.在babel.config.js文件中添加配置
 * 其中root属性指定项目根目录，extensions属性指定文件扩展名，alias属性指定别名
 *
 *
 * 3.在tsconfig.json文件中添加配置
 * "baseUrl": ".",
 *     "paths": {
 *       "@/*": ["src/*"]
 *     },
 *
 * */
