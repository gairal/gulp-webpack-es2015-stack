const path = require('path');
const config = require('./webpack.config.base');

const devConfig = Object.assign({}, config);
devConfig.output.path = path.join(__dirname, '../build');
devConfig.mode = 'development';
devConfig.devtool = 'source-map';
devConfig.devServer = {
  contentBase: path.join(__dirname, '../build'),
  compress: true,
  port: 3000,
};

module.exports = devConfig;
