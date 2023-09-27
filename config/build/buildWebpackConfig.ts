import { buildResolvers } from "./buildResolvers"
import { buildPlugins } from "./buildPlugins"
import { buildLoaders } from "./buildLoaders"
import { BuildOptions } from "./types/config"
import { buildDevServer } from "./buildDevServer"
import webpack from "webpack"
import path from "path"


export function buildWebpackConfig(options: BuildOptions ): webpack.Configuration {
    const { mode, paths, isDev } = options
    return {
        mode,
        entry: paths.entry,
        module: {
          rules: buildLoaders(options),
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        resolve: buildResolvers(options),
        output: {
            filename: 'index[contenthash].js',
            path: paths.build,
            clean: true, 
        },
        plugins: buildPlugins(paths.html),
    }
}