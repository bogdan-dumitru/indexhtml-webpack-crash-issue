import path from 'path';
import webpack from 'webpack';
// import BowerWebpackPlugin from 'bower-webpack-plugin';
// import ExtractTextPlugin from 'extract-text-webpack-plugin';
// import ManifestPlugin from 'webpack-manifest-plugin';
// import PathRewriterPlugin from 'webpack-path-rewriter';
import IndexHtmlPlugin from 'indexhtml-webpack-plugin';

const ROOT = path.resolve(path.join('.', 'src'));
const BOWER_ROOT = path.resolve(path.join('.', 'bower_components'));
const NPM_ROOT = path.resolve(path.join('.', 'node_modules'));

const config = {
  cache: true,
  devtool: 'eval',
  entry: {
    'index.html': './src/index.html',
    'leeruniek': [
      'webpack-hot-middleware/client',
      './src/index.js'
    ]
  },

  output: {
    path: '/',
    filename: '[name].js',
    publicPath: ''
  },

  module: {
    loaders: [
      { test: /\.jsx?$/,
        exclude: [/node_modules/, /bower_components/],
        loader: 'babel' },
      { test: /index2?\.html$/,
        loader: 'html?attrs[]=link:href&attrs[]=img:src' },
      { test: /^(?!.*font.*\.svg$).*\.(svg|png|jpe?g|gif|ico)$/,
        loader: 'url?name=images/[name]-[hash].[ext]' }
    ]
  },

  resolve: {
    root: [ ROOT, BOWER_ROOT ],
    extensions: ['', '.js', '.jsx', '.ng.jsx', '.ng.js', 'less', 'css', 'scss', '.ico'],
  },

  plugins: [
    new IndexHtmlPlugin('index.html', 'index.html'),
    new webpack.HotModuleReplacementPlugin()
  ]
}

export default config;
