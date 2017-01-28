var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var PUBLIC_PATH = path.resolve(__dirname, 'public');

module.exports = {
	entry: {
		app: ['./src/index.js']
	},
	output: {
		path: PUBLIC_PATH,
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		outputPath: PUBLIC_PATH
	},
	// module: {
	// 	loaders: [
	// 		// {
	// 		// 	test: /\.js$/,
	// 		// 	loader: 'babel',
	// 		// 	include: path.resolve(__dirname, '/src')
	// 		// },
	// 		// {
	// 		// 	test: /\.css$/,
	// 		// 	loader: ExtractTextPlugin.extract('css')
	// 		// },
	// 		// {
	// 		// 	test: /\.json$/,
	// 		// 	loader: 'json'
	// 		// }
	// 	]
	// },
	plugins: [
		new CopyWebpackPlugin([{
			from: 'src/index.html'
		}], {
		//	copyUnmodified: true
		})
	]
};