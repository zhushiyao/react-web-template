import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from 'antd'
import loading from '@loading'
@withRouter
@loading()
export default class Index extends Component {
  _onClick = () => {
    this.props.history.push('/demo/detail/123')
  }
  _showLoading = () => {
    this.props.$loading.show({
      delay: 1000
    })
    setTimeout(() => {
      this.props.$loading.hide()
    }, 3000)
  }
  render() {
    return (
      <div>
        <Link to="/demo/detail/123">to Detail</Link>
        <Button type="primary" onClick={this._showLoading}>
          延迟一秒
        </Button>
        <ShowLoadingBlock />
      </div>
    )
  }
}

const Plane = styled.div`
  width: 600px;
  height: 300px;
  background-color: #888;
`
const ShowLoadingBlock = loading()(({ $loading }) => (
  <Plane>
    <Button
      type="primary"
      onClick={() => {
        $loading.show()
        setTimeout(() => {
          $loading.hide()
        }, 3000)
      }}
    >
      show block loading
    </Button>
  </Plane>
))
