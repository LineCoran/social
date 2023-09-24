import webpack from 'webpack';
import 'webpack-dev-server';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildOptions, BuildPaths, BuildMode } from './config/build/types/config';
import path from 'path';

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
}

const mode: BuildMode = 'development'

const buildOptions: BuildOptions = {
  mode,
  paths
}

const config: webpack.Configuration = buildWebpackConfig(buildOptions);

export default config;