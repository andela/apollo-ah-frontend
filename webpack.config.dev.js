/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/wrap-multilines */
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

// Plugins
const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  filename: './index.html',
  title: 'Authors Haven',
});
const dotenvPlugin = new Dotenv();
const envLoaderPlugin = new webpack.DefinePlugin({
  'process.env.APP_KEY': JSON.stringify(process.env.APP_KEY),
  'process.env.FACEBOOK_AUTH_URL': JSON.stringify(process.env.FACEBOOK_AUTH_URL),
  'process.env.GOOGLE_AUTH_URL': JSON.stringify(process.env.GOOGLE_AUTH_URL),
  'process.env.TWITTER_AUTH_URL': JSON.stringify(process.env.TWITTER_AUTH_URL),
  'process.env.API_BASE_URL': JSON.stringify(process.env.API_BASE_URL),
});

module.exports = {
  entry: './src/index.jsx',
  plugins: [htmlPlugin, dotenvPlugin, envLoaderPlugin],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: './',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.scss', '.css']
  },
  module: {
    rules: [
      {
        loader: ['babel-loader', 'eslint-loader'],
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
    port: 8080
  },
};