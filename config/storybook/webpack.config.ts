import { WebpackConfiguration } from "webpack-dev-server";
import { BuildPaths } from "../build/config";
import { buildCssLoader } from "../build/loaders/buildCssLoaders";
import path from "path";

export default ({ config }: { config: WebpackConfiguration }) => {
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push("ts,", "tsx");
  config.module?.rules?.push(buildCssLoader(true));
  return config;
};
