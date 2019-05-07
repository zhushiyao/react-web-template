const { injectBabelPlugin } = require('react-app-rewired')
// antd 按需加载
module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
    config
  )
  return config
}
