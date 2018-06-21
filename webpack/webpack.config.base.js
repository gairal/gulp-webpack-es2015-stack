const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app/app.js',
    style: './src/scss/app.scss',
  },
  output: {
    filename: 'js/[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.pug',
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
    }),
    new StyleLintPlugin({
      reporters: [
        { formatter: 'string', console: true },
      ],
    }),
    new CopyWebpackPlugin([
      { from: './src/img', to: 'img' },
      { from: './src/root', to: '' },
    ]),
    new WriteFilePlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
        include: path.join(__dirname, '../src'),
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        include: path.join(__dirname, '../src'),
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
        include: path.join(__dirname, '../src'),
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use:
        {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
            publicPath: '../',
          },
        },
      },
    ],
  },
};
