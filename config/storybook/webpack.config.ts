import { WebpackConfiguration } from "webpack-dev-server";
import { BuildPaths } from "../build/config";
import { buildCssLoader } from "../build/loaders/buildCssLoaders";
import path from "path";
import { RuleSetRule } from "webpack";

export default ({ config }: { config: WebpackConfiguration }) => {
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push("ts,", "tsx");

  // eslint-disable-next-line no-param-reassign
  config.module!.rules = config.module?.rules?.map((rule: any) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });
  config.module?.rules?.push(buildCssLoader(true));
  return config;
};
