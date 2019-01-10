const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const PurgeCssPlugin = require('purgecss-webpack-plugin');

const env = process.env.NODE_ENV;

module.exports = {
  mode: env == 'production' || env == 'none' ? env : 'development',
  entry: {
    app: [path.resolve(__dirname + '/src/js/app.js'), path.resolve(__dirname + '/src/scss/app.scss')]
  },
  output: {
    path: path.resolve(__dirname + '/dist/assets'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [require('precss'), require('autoprefixer')];
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              publicPath: 'assets',
              name: 'images/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ],
  optimization: {
    minimizer: []
  }
};

if (env === 'production') {
  module.exports.optimization.minimizer.push(new UglifyJsPlugin());

  module.exports.plugins.push(
    new OptimizeCssAssetsPlugin({
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }]
      }
    })
  );

  module.exports.plugins.push(
    new PurgeCssPlugin({
      paths: glob.sync(path.join(__dirname, 'src') + '/**/*', { nodir: true })
    })
  );
}
