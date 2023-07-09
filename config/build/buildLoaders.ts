import { type RuleSetRule } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type BuildOptions } from './types/config'
export function buildLoaders (options: BuildOptions): RuleSetRule[] {
  const { isDev } = options

  const svgLoader = {
    test: /\.svg$/i,
    use: ['@svgr/webpack']
  }

  const fileLoader = {
    test: /\.(png|jp?eg|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => !!resPath.includes('.module.'),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]'
          }
        }
      },
      'sass-loader'
    ]
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  return [
    tsLoader,
    cssLoader,
    svgLoader,
    fileLoader
  ]
}
