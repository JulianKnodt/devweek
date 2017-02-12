import React from 'react'
import { Router, IndexRoute, Route, Link, browserHistory } from 'react-router'
import NavBar from './Navbar'
import Home from './Home'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'I am a stateful component!'
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        { this.props.children }
      </div>
    )
  }

}


export default App
