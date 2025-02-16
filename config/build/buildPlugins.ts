import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins({
  paths,
  isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
    }),
    // new BundleAnalyzerPlugin({
    //   openAnalyzer: true,
    // }),
  ];

  plugins.push(
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    })
  );

  if (isDev) {
    plugins.push(
      // для того чтобы уйти от ререндера при изменений стилей и прочего
      new webpack.HotModuleReplacementPlugin()
      // new BundleAnalyzerPlugin({
      //   openAnalyzer: false,
      // })
    );
  }

  return plugins;
}
