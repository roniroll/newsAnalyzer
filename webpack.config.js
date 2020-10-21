const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chankhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.css$/i,
          use: [
            (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
            {
              loader: 'css-loader',
              options: {
                  importLoaders: 2
              }
            },
            'postcss-loader'
          ]
      },
      {
        test: /\.(woff|woff2|ttf)$/,
        use: {
          loader: 'file-loader',
          options: {
              name: './fonts/[name].[ext]'
          }
        }
      },
      {
        test: /\.(jpg|jpeg|png|svg|webp)$/,
        use: 'file-loader?name=./images/[name].[ext]&esModule=false'
      },
      {
        test: /\.(ico)$/,
        use: 'file-loader?name=assets/[name].[ext]'
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin (),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: 'about.html'
    }),new HtmlWebpackPlugin({
      template: './src/analytics.html',
      filename: 'analytics.html'
    }),
    new MiniCssExtractPlugin({
      template: './src/pages/about-page.css',
      filename: 'about-page.css'
    }),
    new MiniCssExtractPlugin({
      template: './src/pages/analytics-page.css',
      filename: 'analytics-page.css'
    }),
    new MiniCssExtractPlugin({
      template: './src/pages/index-page.css',
      filename: 'index-page.css'
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
              preset: ['default'],
              canPrint: true
    }}),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}
