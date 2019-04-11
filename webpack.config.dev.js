/* eslint-disable react/wrap-multilines */
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

// Plugins
const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  filename: './index.html',
  title: 'Authors Haven',
});
const dotenvPlugin = new Dotenv();

module.exports = {
  entry: './src/index.jsx',
  plugins: [htmlPlugin, dotenvPlugin],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.scss', '.css']
  },
  module: {
    rules: [
      {
        loader: ['babel-loader'],
        test: /\.jsx?$/,
        exclude: /node_modules/,
      },
      {
        test: /\.(s?css|sass)$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader'
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    historyApiFallback: true,
    port: 8080,
  },
};