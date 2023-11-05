// @ts-nocheck
import webpack from 'webpack'
import { type BuildPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoaders } from '../build/loaders/buildCssLoaders'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }
  config.resolve.modules.push(paths.src)
  config.resolve.extensions.push('.ts', '.tsx')
  config.plugins.push(new webpack.DefinePlugin({
    __IS_DEV__: true
  }))

  config.module.rules = config.module.rules.map((rule) => {
    if (/svg/.test(rule.test)) {
      return {
        ...rule,
        exclude: /\.svg$/i
      }
    }
    return rule
  })
  config.module.rules.push({
    test: /\.svg$/i,
    use: ['@svgr/webpack']
  })
  config.module.rules.push(buildCssLoaders(true))
  return config
}
