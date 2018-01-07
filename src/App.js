import React, { Component } from 'react'

import './App.css'

import NewAccountForm from './components/NewAccountForm'

class App extends Component {
  render() {
    return (
      <div className="App">        
        <NewAccountForm />
      </div>
    )
  }
}

export default App
