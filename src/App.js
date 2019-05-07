import React, { Component } from 'react'
import routes from './router'
import Layout from '@pages/Layout/index'
import NotFound from '@pages/Layout/404'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import './App.css'

class App extends Component {
  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <Router>
          <Layout>
            <Switch>
              {routes.map((route, i) => (
                <Route
                  key={i}
                  exact
                  path={route.path}
                  render={props => <route.component {...props} routes={route.routes} />}
                />
              ))}
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </Router>
      </LocaleProvider>
    )
  }
}

export default App
