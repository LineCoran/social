import HtmlWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack"
import path from "path"


export function buildPlugins(template: string): webpack.WebpackPluginInstance[]  {
    return [
        new HtmlWebpackPlugin({
         title: 'Development',
         template
        }),
        new webpack.ProgressPlugin(),
      ]
}