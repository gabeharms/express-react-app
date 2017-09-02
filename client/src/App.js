import React, { Component } from 'react';
import './App.css';
import Home from './views/home/Home'
import Login from './views/login/Login'
import requireAuth from './decorators/requireAuth'
import {
  BrowserRouter as Router,
  Route,
  withRouter
} from 'react-router-dom'

class App extends Component {
  state = {
    token: null
  }

  updateToken = token => { 
    this.setState({...this.state, token: token})
  }

  render() {
    const WrappedLogin = withRouter(Login);
    const WrappedHome = withRouter(requireAuth(Home));
    return (
      <Router>
        <div>
          <Route exact path="/" component={() => (<WrappedLogin updateToken={this.updateToken} />)}  />
          <Route path="/home" component={() => (<WrappedHome token={this.state.token} />)} />   
        </div>
      </Router>
    );
  }
}

export default App;
