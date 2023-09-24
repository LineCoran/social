import MiniCssExtractPlugin from "mini-css-extract-plugin"
import webpack from "webpack"
import { BuildOptions } from "./types/config"


export function buildLoaders(buildOptions: BuildOptions): webpack.RuleSetRule[]  {
  const { isDev } = buildOptions;
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }

    const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: (path: string) => Boolean(path.includes('.module.')),
              localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
            },
          }
        },
        "sass-loader",
      ],
    }
      
    return [
        typescriptLoader,
        cssLoader
      ]
}