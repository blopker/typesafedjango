#!/usr/bin/env bun
import * as esbuild from "esbuild";
import { solidPlugin } from "esbuild-plugin-solid";

const arg = Bun.argv[2];

const options: esbuild.BuildOptions = {
  entryPoints: ["src/index.tsx"],
  bundle: true,
  minify: true,
  metafile: true,
  loader: {
    ".svg": "dataurl",
  },
  logLevel: "info",
  sourcemap: true,
  splitting: true,
  outdir: "../backend/static/bundles",
  legalComments: "none",
  format: "esm",
  plugins: [solidPlugin()],
};

if (arg === "watch") {
  options.sourcemap = "inline";
  options.minify = false;
  const ctx = await esbuild.context(options);
  await ctx.watch();
} else {
  const result = await esbuild.build(options);
  Bun.write("meta.json", JSON.stringify(result.metafile));
}
