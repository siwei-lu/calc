// @flow
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Index from './Index'
import theme from '../theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route path="/" component={Index} exact />
      </Switch>
    </Router>
  </ThemeProvider>
)

export default App