import webpack from 'webpack';
import 'webpack-dev-server';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildOptions, BuildPaths, BuildMode, BuildEnv } from './config/build/types/config';
import path from 'path';

export default (env: BuildEnv) => {

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }
  
  const mode: BuildMode = env.mode || 'production'
  
  const port = env.port || 3000;

  const isDev = mode === 'development';
  
  const buildOptions: BuildOptions = {
    mode,
    paths,
    isDev,
    port
  }
  
  const config: webpack.Configuration = buildWebpackConfig(buildOptions);

  return config
};