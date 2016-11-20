var path = require('path');
var webpack = require('webpack');

const webpackConfig = {
	module : {}
};

webpackConfig.output = {
	filename: 'app.js'
}

webpackConfig.plugins = [
	new webpack.ProvidePlugin({
		$: 'jquery',
		jQuery: 'jquery',
		Tether: 'tether',
		"window.Tether": 'tether'
	})
];

webpackConfig.module.loaders = [{
	test: /.js?$/,
	loader: 'babel-loader',
	exclude: /node_modules/,
	query: {
		presets: ['es2015']
	}
}];

module.exports = webpackConfig;
