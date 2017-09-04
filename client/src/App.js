import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Home from './views/home/'
import Login from './views/login/'
import CreateAccount from './views/createAccount/'
import {setInstance} from './services/httpClient'
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
    setInstance(token)
  }

  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Route exact path="/" component={() => (<Login updateToken={this.updateToken} />)} />
            <Route path="/users/new" component={CreateAccount} />
            <Route path="/home" component={Home} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
