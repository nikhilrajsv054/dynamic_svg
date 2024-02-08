const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(ico|png)$/,
        use: ['file-loader']
      },
      {
        test: /\.txt$/,
        use: ['raw-loader']
      },
      {
        test: /\.md$/,
        use: 'raw-loader'
      },
      {
        test: /\.txt$/,
        use: 'raw-loader'
      }
      // Add more loaders if needed for other file types
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    fallback: {
      "os": require.resolve("os-browserify/browser"),
      "url": require.resolve("url"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "tty": require.resolve("tty-browserify"),
      "util": require.resolve("util"),
      "vm": require.resolve("vm-browserify"),
      "path": require.resolve("path-browserify"),
      "buffer": require.resolve("buffer/"),
      "fs": false
    }
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: 'index.html',
    }),
  ],
};
