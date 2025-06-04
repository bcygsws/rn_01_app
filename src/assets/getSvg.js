/**
 * @Desc:读取单个svg文件
 *
 * */
var fs = require('fs');
var path = require('path');
//定义想要处理的svg路径
const svgDir = path.resolve(__dirname, './svgs');
console.log('svgDir===', svgDir);

// 读取单个svg文件
function readPerFile(filename) {
	return new Promise((resolve, reject) => {
		fs.readFile(path.join(svgDir, filename), 'utf8', (err, data) => {
			// 非贪婪模式：.*? ,匹配尽可能短的<?xml >
			console.log(data.replace(/<?xml.*?>|<!--.*?-->|<!DOCTYPE.*?>/g, ''));
				if (err) {
					reject(err);
				} else {
					resolve({
						[filename.slice(0, filename.lastIndexOf('.'))]: data
					});
				}
			}
		)
		;
	});
}

// 读取svgs文件夹下svg文件
function readSvgs() {
	return new Promise((resolve, reject) => {
		fs.readdir(path.resolve(__dirname, './svgs'), (err, files) => {
			if (err) {
				reject(err);
			}
			// Promise.all()方法，所有传入的[promise1,promise2,...]都处理完了，才会执行then()方法
			// data数据格式：[[{'100',  '<svg xmlns="" />'}],[]]
			Promise.all(
				files.map(file => readPerFile(file))
			).then(data => resolve(data)).catch(e => reject(e));
		});

	});
}

// 在当前目录下生成svgs.js文件
readSvgs().then((data) => {
	// writeFile第二个参数，定义生成svgs.js文件的格式
	let svgFile = 'export default ' + JSON.stringify(Object.assign.apply(this, data));
	fs.writeFile(path.resolve(__dirname, 'svgs.js'), svgFile, (err) => {
		if (err) {
			throw new Error(err);
		}
	});
}).catch(e => {
	throw new Error(e);
});
