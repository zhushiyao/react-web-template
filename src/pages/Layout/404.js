import React, { Component } from 'react'
import styled from 'styled-components'
export default class Index extends Component {
  render() {
    return (
      <NotFound>
        <h1>404 Page not found</h1>
      </NotFound>
    )
  }
}

const NotFound = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
