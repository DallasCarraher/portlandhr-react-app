import React, { Component } from 'react'
<<<<<<< HEAD
import Navbar from './Components/Navbar'
import PostForm from './Components/PostForm'
import Home from './Components/Home'
import Manage from './Components/Manage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

=======
import PostForm from './PostForm/PostForm'
>>>>>>> 2926f28a22faf101cfa294c12f2530dbef7fb7b3

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
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
=======
      <div className="App">
        <PostForm />
      </div>
>>>>>>> 2926f28a22faf101cfa294c12f2530dbef7fb7b3
    )
  }
}

export default App