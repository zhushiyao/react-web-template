import React from 'react'
import styled from 'styled-components'
import { Layout, Menu, Icon, Dropdown, Avatar } from 'antd'
export default class LayoutHeader extends React.Component {
  render() {
    return (
      <HeaderView>
        <HeaderTitle>React Template WEB</HeaderTitle>
        <Dropdown overlay={UserMenus}>
          <UserView>
            <Avatar icon="user" style={{ marginRight: '8px' }} />
            用户名
          </UserView>
        </Dropdown>
      </HeaderView>
    )
  }
}
const onMenuClick = e => {
  console.log(e)
}
const UserMenus = (
  <Menu onClick={onMenuClick}>
    <Menu.Item key="logout">
      <Icon type="poweroff" style={{ marginRight: '8px' }} />
      退出登陆
    </Menu.Item>
  </Menu>
)

const HeaderView = styled(Layout.Header)`
  height: 70px;
  top: 0;
  width: 100%;
  display: flex;
  position: fixed;
  z-index: 1900;
`

const HeaderTitle = styled.h2`
  color: #fff;
  flex: 1;
`
const UserView = styled.div`
  color: #fff;
  font-size: 16px;
`
