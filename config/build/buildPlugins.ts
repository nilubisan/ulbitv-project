import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack, { type WebpackPluginInstance } from 'webpack'
import { type BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins ({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
  const plugins = [
    new HTMLWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    })
  ]
  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin())
  }

  return plugins
}
