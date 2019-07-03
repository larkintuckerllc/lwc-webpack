const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LWCWebpackPlugin = require('lwc-webpack-plugin');
const path = require('path');

module.exports = env => {
  return {
    devtool: env.MODE === 'development' ? 'inline-source-map' : 'none',
    devServer: {
      contentBase: './dist',
    },
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    mode: env.MODE,
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({ template: './public/index.html' }),
      new LWCWebpackPlugin({
        namespace: {
          my: path.resolve('./src/modules/my'),
        },
      }),
    ],
    resolve: {
      alias: {
        lwc: require.resolve('@lwc/engine'),
      },
    },
  };
};
