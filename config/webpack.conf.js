var path = require('path');
var webpack = require('webpack');

module.exports = {
	module: {
		loaders: [{
			test: /.js?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015']
			}
		}]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			Tether: 'tether',
			"window.Tether": 'tether'
		})
	],
	output: {
		filename: 'app.js'
	}
};
