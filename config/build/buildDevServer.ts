import type { Configuration as DevSeerverConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./config";

export function buildDevServer(options: BuildOptions): DevSeerverConfiguration {
  return {
    port: options.port,
    open: true,
  };
}
