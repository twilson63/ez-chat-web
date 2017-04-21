import React, { Component } from 'react'

import { BrowserRouter, Route } from 'react-router-dom'
import View from './components/view'
import Messages from './pages/messages'
import Nickname from './pages/nickname'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <View>
          <Route exact path='/' component={Messages} />
          <Route path='/nickname' component={Nickname} />
        </View>
      </BrowserRouter>
    )
  }
}

export default App
