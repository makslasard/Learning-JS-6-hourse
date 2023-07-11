import path from 'path'
import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolves } from './buildResolves'

export function buildWebpackConfig(option: BuildOptions): webpack.Configuration {
	return {
		mode: 'development',
		entry: path.resolve(__dirname, 'src', 'index.ts'),
		output: {
			filename: '[name].[contenthash].js',
			path: path.resolve(__dirname, 'build'),
			clean: true,
		},
		plugins: buildPlugins(),
		module: {
			rules: buildLoaders(),
		},
		resolve: buildResolves(),
	}
}
