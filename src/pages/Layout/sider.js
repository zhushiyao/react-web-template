import React from 'react'
import styled from 'styled-components'
import { withRouter, NavLink } from 'react-router-dom'
import { Menu, Icon, Layout } from 'antd'
import router from '../../router'
@withRouter
export default class Sider extends React.Component {
  constructor(props) {
    super(props)
    this.menus = router.filter(r => r.type === 'menu')
  }
  state = {
    collapsed: false
  }
  onCollapse = collapsed => {
    this.setState({ collapsed })
    this.props.onCollapsed(collapsed)
  }

  componentDidMount() {
    this._resize()
    window.addEventListener('resize', this._resize)
  }
  _resize = () => {
    let width = document.body.clientWidth
    let collapsed = false
    if (width < 576) {
      collapsed = true
    }
    this.setState({ collapsed })
    this.props.onCollapsed(collapsed)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }
  _findActivePath = () => {
    let pathname = this.props.location.pathname
    return this.menus.findIndex(({ path, routes }) => path === pathname)
  }
  render() {
    let index = this._findActivePath()
    return (
      <SiderView collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
        <Menu theme="light" selectedKeys={[String(index)]} style={{ height: '100%' }}>
          {this.menus.map((menu, i) => (
            <Menu.Item key={i}>
              <NavLink to={menu.path} className="nav-text">
                <Icon type={menu.icon} />
                <span>{menu.title}</span>
              </NavLink>
            </Menu.Item>
          ))}
        </Menu>
      </SiderView>
    )
  }
}

const SiderView = styled(Layout.Sider)`
  overflow: auto;
  width: 200px;
  background: #fff;
  position: fixed;
  left: 0;
  top: 70px;
  height: 100vh;
  z-index: 2;
`
