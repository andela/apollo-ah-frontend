/* eslint-disable react/wrap-multilines */
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  filename: './index.html',
  title: 'Authors Haven',
});

module.exports = {
  entry: './src/index.jsx',
  plugins: [htmlPlugin],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.css'],
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
            options: {
              modules: true,
            },
          },
          {
            loader: 'sass-loader',
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
  mode: 'production',
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    historyApiFallback: true,
  },
};