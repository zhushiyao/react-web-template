import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { Spin } from 'antd'
/**
 * 封装antd spin组件
 * @param spin组件参数
 */
export default params => Component => {
  class LoadingComponent extends React.Component {
    state = {
      loading: false,
      loadingParams: {}
    }
    _showLoading = (loadingParams = {}) => {
      this.setState({ loading: true, loadingParams })
    }
    _hideLoading = () => {
      this.setState({ loading: false })
    }
    render() {
      return (
        <Spin spinning={this.state.loading} {...params} {...this.state.loadingParams}>
          <Component
            $loading={{
              show: this._showLoading,
              hide: this._hideLoading
            }}
            {...this.props}
          />
        </Spin>
      )
    }
  }
  LoadingComponent.displayName = `withProvider(${Component.displayName || Component.name})`
  hoistNonReactStatics(LoadingComponent, Component)

  return LoadingComponent
}
