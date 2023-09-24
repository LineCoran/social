import { buildResolvers } from "./buildResolvers"
import { buildPlugins } from "./buildPlugins"
import { buildLoaders } from "./buildLoaders"
import { BuildOptions } from "./types/config"
import webpack from "webpack"
import path from "path"


export function buildWebpackConfig(options: BuildOptions ): webpack.Configuration {
    const { mode, paths } = options
    return {
        mode,
        entry: paths.entry,
        module: {
          rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        output: {
            filename: '[name][contenthash].js',
            path: paths.build,
            clean: true, 
        },
        plugins: buildPlugins(paths.html),
    }
}