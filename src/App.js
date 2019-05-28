import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import PostForm from './Components/PostForm'
import Home from './Components/Home'
import Manage from './Components/Manage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Request" component={PostForm} />
          <Route path="/Manage" component={Manage} />
        </Switch>
      </div>
      </Router>
    )
  }
}

export default App