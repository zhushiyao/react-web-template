import React from 'react'
/**
 * 组件异常捕获HOC
 * @param {errorView， onError}
 * errorView(Component) 错误显示页面，默认为空白
 * onError componentDidCatch捕获处理
 */
const withCatch = (errorView = null, onError = null) => Component => {
  // FallbackComponent, errorCallback
  class withErrorCatch extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        hasError: false,
        error: null,
        errorInfo: null
      }
    }
    componentDidCatch(error, info) {
      this.setState({ hasError: true, error, errorInfo: info })
      if (onError && typeof onError === 'function') onError(error, info)
    }

    render() {
      let { hasError, error, errorInfo } = this.state
      const ErrorView = errorView
      if (hasError)
        return errorView ? (
          <ErrorView error={error} errorInfo={errorInfo} />
        ) : (
          <div>
            {error.toString()}
            <br />
            {errorInfo.componentStack}
          </div>
        )
      return <Component {...this.props} />
    }
  }
  withErrorCatch.displayName = `withErrorCatch(${Component.displayName})`
  return withErrorCatch
}
export default withCatch
