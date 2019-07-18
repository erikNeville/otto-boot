import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navig from './components/layout/Navig'
import Dashboard from './components/dashboard/Dashboard'
import Contact from './components/contact/Contact'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navig />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
