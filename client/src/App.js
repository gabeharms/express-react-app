import React, { Component } from 'react';
import './App.css';
import Home from './views/home/'
import Login from './views/login/'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

class App extends Component {
  state = {
    token: null
  }

  updateToken = token => { 
    this.setState({...this.state, token: token})
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={() => (<Login updateToken={this.updateToken} />)}  />
          <Route path="/home" component={() => (<Home token={this.state.token} />)} />   
        </div>
      </Router>
    );
  }
}

export default App;
