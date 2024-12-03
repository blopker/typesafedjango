#!/usr/bin/env bun
import * as esbuild from "esbuild";
import { solidPlugin } from "esbuild-plugin-solid";
import fs from "bun:fs";
import process from "bun:process";

const arg = process.argv[2];

const options = {
  entryPoints: ["src/index.tsx"],
  bundle: true,
  minify: true,
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
}
