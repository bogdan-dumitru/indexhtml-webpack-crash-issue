import express from 'express';
import path from 'path';
import webpack from 'webpack';
import devConfig from '../webpack/dev.js';
// import prodConfig from '../webpack.config.prod.js';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import gutils from 'gulp-util';
import fs from 'fs';
const {PluginError} = gutils;

export function dev(callback) {
  const app = express();
  const compiler = webpack(devConfig);

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: devConfig.output.publicPath
  }));

  app.use(webpackHotMiddleware(compiler));

  app.listen(3000, 'localhost', function(err) {
    if(err) { throw new gutils.PluginError("webpack", err); }
    gutils.log("[webpack] Listening at http://localhost:3000");
  });
};

export function prod(callback) {
  webpack(prodConfig, (err, stats) => {
    if(err) throw new PluginError("webpack", err);
    gutils.log("[webpack]", stats.toString());
    callback();
  });
}
