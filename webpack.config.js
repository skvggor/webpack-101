const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: {
		entry: './src/assets/js/app.js',
	},

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public/assets/dist/js')
	},

	plugins: [
		new UglifyJSPlugin()
	],
};
