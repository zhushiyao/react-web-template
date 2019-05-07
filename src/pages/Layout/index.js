import React, { Component } from 'react'
import styled from 'styled-components'
import LayoutHeader from './header'
import LayoutSider from './sider'
import { Layout } from 'antd'
import withCatch from '@catch'
export default class LayoutView extends Component {
  state = {
    siderCollapsed: false
  }
  _onCollapsed = collapsed => {
    this.setState({ siderCollapsed: collapsed })
  }
  render() {
    let { siderCollapsed } = this.state
    return (
      <Layout>
        <LayoutHeader />
        <LayoutSider onCollapsed={this._onCollapsed} />
        <ContentView
          style={{ overflowX: 'initial', marginLeft: siderCollapsed ? '80px' : '200px' }}
          id="layoutContent"
        >
          <WithCatch>{this.props.children}</WithCatch>
        </ContentView>
      </Layout>
    )
  }
}
const WithCatch = withCatch()(({ children }) => <React.Fragment>{children}</React.Fragment>)
const ContentView = styled(Layout.Content)`
  z-index: 1;
  right: 0;
  padding: 20px;
  margin-top: 70px;
  margin-left: 200px;
`
