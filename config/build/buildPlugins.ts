import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from "webpack"


export function buildPlugins(template: string): webpack.WebpackPluginInstance[]  {
    return [
        new HtmlWebpackPlugin({
         title: 'Development',
         template
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
          filename: 'index.[contenthash:8].css',
          chunkFilename: 'index.[contenthash:8].css',
        }),
      ]
}