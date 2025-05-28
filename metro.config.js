const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
	//server: {
	//	port: 8081,
	//	proxy: {
	//		'/api': {
	//			// target: 'http://localhost:3000',
	//			target: 'https://n63p3xwu98.re.qweatherapi.com/',
	//			changeOrigin: true,
	//			//replace: (path) => path.replace(/^\/api/, '')
	//
	//		}
	//	}
	//},
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
