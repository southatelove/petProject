import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { BuildOptions } from "./config";
import webpack from "webpack";
import { buildResolvers } from "./buildResolvers";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  };
}
