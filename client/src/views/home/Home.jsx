import React from 'react';
import logo from '../../logo.svg';
import {getUser} from './requests';

class Home extends React.Component {
  state = {
    user: {username: ''}
  }
  componentDidMount = () => {
    const handleSuccess = (user) => {
      this.setState({user})
    }
    const handleError = (errorMsg) => {
    }
    getUser().then(handleSuccess).catch(handleError);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h1>{this.state.user.username}</h1>
      </div>
    )
  }
};

export default Home;
