import { type BuildOptions } from './types/config'
import { buildCssLoaders } from './loaders/buildCssLoaders'
export function buildLoaders (options: BuildOptions) {
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

  const cssLoader = buildCssLoaders(isDev)
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
