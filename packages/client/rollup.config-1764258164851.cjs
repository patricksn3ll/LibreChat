'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var url = require('url');
var alias = require('@rollup/plugin-alias');
var terser = require('@rollup/plugin-terser');
var postcss = require('rollup-plugin-postcss');
var replace = require('@rollup/plugin-replace');
var commonjs = require('@rollup/plugin-commonjs');
var resolve = require('@rollup/plugin-node-resolve');
var typescript = require('rollup-plugin-typescript2');
var path = require('path');
var peerDepsExternal = require('rollup-plugin-peer-deps-external');
var pkg = require('./package.json');

// ESM bundler config for React components

const __filename$1 = url.fileURLToPath('file:///home/sn3ll/dev/LibreChat/packages/client/rollup.config.js');
const __dirname$1 = path.dirname(__filename$1);

const plugins = [
  peerDepsExternal(),
  alias({
    entries: [{ find: '~', replacement: path.resolve(__dirname$1, 'src') }],
  }),
  resolve({
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    browser: true,
    preferBuiltins: false,
  }),
  replace({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
    preventAssignment: true,
  }),
  commonjs(),
  postcss({
    extract: false,
    inject: true,
    minimize: process.env.NODE_ENV === 'production',
    modules: false,
    config: {
      path: './postcss.config.js',
    },
  }),
  typescript({
    tsconfig: './tsconfig.json',
    useTsconfigDeclarationDir: true,
    clean: true,
    check: false,
  }),
  terser({
    compress: {
      directives: false,
    },
  }),
];

var rollup_config = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
      exports: 'named',
    },
  ],
  external: [
    ...Object.keys(pkg.peerDependencies || {}),
    'react/jsx-runtime',
    'react/jsx-dev-runtime',
  ],
  preserveSymlinks: true,
  plugins,
  onwarn(warning, warn) {
    // Ignore "use client" directive warnings
    if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
      return;
    }
    warn(warning);
  },
};

exports.default = rollup_config;
