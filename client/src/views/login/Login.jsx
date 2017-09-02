import React, { Component } from 'react';
import {fetchToken} from './requests';

class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  authenticate = () => {
    const {
      username,
      password,
    } = this.state
    const {
      history,
      updateToken,
    } = this.props

    const handleError = () => {};
    const handleSucces = (data) => {
      updateToken(data)
      history.push("/home")
    }

    fetchToken(username, password).then(handleSucces).catch(handleError);
  }
  render() {
    return (
      <div>
        <input type="text" onChange={(e)=> this.setState({...this.state, username: e.target.value})} />
        <input type="text" onChange={(e)=> this.setState({...this.state, password: e.target.value})} />
        <button onClick={this.authenticate}>Login</button>
      </div>
    )
  }
};

export default Login;
